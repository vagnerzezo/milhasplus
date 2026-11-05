"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import type { LeadFormCopy } from "@/content/lead";
import { formatPhone } from "@/lib/format";
import { whatsappLink, type WhatsAppIntent } from "@/lib/whatsapp";

const PHONE_PATTERN = "\\(\\d{2}\\) \\d{4,5}-\\d{4}";

/** `required` aceita só espaços; este padrão não. */
export const NOT_BLANK_PATTERN = ".*\\S.*";
export const NOT_BLANK_ERROR = "Preencha este campo.";

export const fieldLabel = "mb-2 block text-sm font-bold";
export const fieldHint = "mt-1.5 block text-[13px] text-muted";
export const formCard =
  "rounded-panel bg-white p-6 text-ink shadow-form md:p-9";

/** Abre o WhatsApp com a mensagem pronta. Só este ponto muda se houver um backend. */
export function sendLead(url: string, onSent: (url: string) => void) {
  window.open(url, "_blank", "noopener,noreferrer");
  onSent(url);
}

/**
 * Alterna entre o formulário e a tela "Falta só enviar!".
 * Trocar a key recria os campos, o que limpa o formulário sem resetar um por um.
 */
export function LeadFormFlow({
  sent,
  reopenCta,
  children,
}: {
  sent: LeadFormCopy["sent"];
  reopenCta: string;
  children: (onSent: (url: string) => void, key: number) => ReactNode;
}) {
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sentUrl) title.current?.focus();
  }, [sentUrl]);

  if (!sentUrl) return children(setSentUrl, formKey);

  return (
    <div
      role="status"
      className={`${formCard} flex min-h-[520px] flex-col items-center justify-center gap-5 text-center`}
    >
      <span
        aria-hidden="true"
        className="flex size-16 items-center justify-center rounded-full bg-sun"
      >
        <CheckIcon size={28} />
      </span>
      <h2
        ref={title}
        tabIndex={-1}
        className="text-3xl font-extrabold tracking-[-0.02em] outline-none"
      >
        {sent.title}
      </h2>
      <p className="max-w-[420px] text-[17px] leading-relaxed text-muted">
        {sent.text}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href={sentUrl} variant="dark" cta={reopenCta}>
          {sent.reopen}
        </Button>
        <button
          type="button"
          onClick={() => {
            setSentUrl(null);
            setFormKey((key) => key + 1);
          }}
          className="min-h-13 cursor-pointer rounded-full border-[1.5px] border-ink px-6 text-[15px] font-bold transition-colors hover:bg-ink/5"
        >
          {sent.restart}
        </button>
      </div>
    </div>
  );
}

export function NameField({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className={fieldLabel} htmlFor={id}>
        {label}
      </label>
      <input
        className="field"
        id={id}
        name="nome"
        autoComplete="name"
        required
        maxLength={120}
        pattern={NOT_BLANK_PATTERN}
        title={NOT_BLANK_ERROR}
        placeholder={placeholder}
      />
    </div>
  );
}

export function EmailField({
  id,
  label,
  optionalLabel,
  placeholder,
}: {
  id: string;
  label: string;
  /** Com este texto, o campo deixa de ser obrigatório. */
  optionalLabel?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className={fieldLabel} htmlFor={id}>
        {label}
        {optionalLabel && (
          <>
            {" "}
            <span className="font-medium text-muted">{optionalLabel}</span>
          </>
        )}
      </label>
      <input
        className="field"
        id={id}
        name="email"
        type="email"
        autoComplete="email"
        required={!optionalLabel}
        maxLength={160}
        placeholder={placeholder}
      />
    </div>
  );
}

/** Rádios nativos: setas do teclado e validação de obrigatório já vêm prontas. */
export function RadioCards({
  name,
  legend,
  options,
  hint,
  columns = "grid grid-cols-2 sm:grid-cols-3",
  shape = "min-h-13 rounded-[14px] px-3.5 text-[15px]",
  defaultValue,
  onChange,
  children,
}: {
  name: string;
  legend: string;
  options: readonly string[];
  hint?: string;
  /** Classes do contêiner das opções. */
  columns?: string;
  /** Classes de formato de cada opção. */
  shape?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Conteúdo abaixo das opções. */
  children?: ReactNode;
}) {
  const hintId = useId();

  return (
    <fieldset aria-describedby={hint ? hintId : undefined}>
      <legend className={fieldLabel}>{legend}</legend>
      <div className={`gap-2.5 ${columns}`}>
        {options.map((option) => (
          <label key={option} className="relative cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              required
              defaultChecked={option === defaultValue}
              onChange={() => onChange?.(option)}
              className="peer sr-only"
            />
            <span
              className={`flex items-center justify-center border-[1.5px] border-line-strong bg-field text-center font-semibold transition-colors ${shape} peer-checked:border-ink peer-checked:bg-sun peer-checked:font-extrabold peer-focus-visible:border-ink peer-focus-visible:shadow-field-focus hover:border-field-hover`}
            >
              {option}
            </span>
          </label>
        ))}
      </div>
      {hint && (
        <span id={hintId} className={fieldHint}>
          {hint}
        </span>
      )}
      {children}
    </fieldset>
  );
}

export function PhoneField({
  id,
  copy,
  value,
  onChange,
}: {
  id: string;
  copy: LeadFormCopy["whatsapp"];
  value: string;
  onChange: (value: string) => void;
}) {
  const hintId = `${id}-dica`;

  return (
    <div>
      <label className={fieldLabel} htmlFor={id}>
        {copy.label}
      </label>
      <input
        className="field"
        id={id}
        name="whatsapp"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        pattern={PHONE_PATTERN}
        title={copy.error}
        placeholder={copy.placeholder}
        aria-describedby={copy.hint ? hintId : undefined}
        value={value}
        onChange={(event) => onChange(formatPhone(event.target.value))}
      />
      {copy.hint && (
        <span id={hintId} className={fieldHint}>
          {copy.hint}
        </span>
      )}
    </div>
  );
}

export function ConsentField({ copy }: { copy: LeadFormCopy["consent"] }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm leading-[1.55] text-forest-400">
      <input
        type="checkbox"
        name="aceite"
        required
        className="mt-0.5 size-5 flex-none accent-ink"
      />
      <span>
        {copy.before}
        {/* Nova aba: voltar da política não pode apagar o que já foi preenchido. */}
        <a
          href={copy.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-2"
        >
          {copy.link}
        </a>
        {copy.after}
      </span>
    </label>
  );
}

export function LeadSubmit({
  cta,
  children,
}: {
  cta: string;
  children: ReactNode;
}) {
  return (
    <button
      type="submit"
      data-cta={cta}
      className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-sun pr-2.5 pl-7 text-[17px] font-extrabold transition-colors hover:bg-sun-700"
    >
      {children}
      <span
        aria-hidden="true"
        className="flex size-[42px] flex-none items-center justify-center rounded-full bg-ink text-sun"
      >
        <ArrowIcon size={18} />
      </span>
    </button>
  );
}

export function DirectContact({
  copy,
  intent,
  cta,
}: {
  copy: LeadFormCopy["directContact"];
  intent: WhatsAppIntent;
  cta: string;
}) {
  return (
    <p className="flex flex-wrap items-center justify-center gap-x-1 text-center text-[13px] text-muted">
      {copy.text}
      <TextLink
        href={whatsappLink(intent)}
        cta={cta}
        className="text-[13px] text-ink"
      >
        {copy.link}
      </TextLink>
    </p>
  );
}
