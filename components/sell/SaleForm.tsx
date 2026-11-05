"use client";

import { useId, useState, type FormEvent } from "react";
import {
  ConsentField,
  DirectContact,
  EmailField,
  fieldHint,
  fieldLabel,
  formCard,
  LeadFormFlow,
  LeadSubmit,
  NameField,
  PhoneField,
  RadioCards,
  sendLead,
} from "@/components/forms/LeadForm";
import type { SaleFormContent } from "@/content/negociar";
import { formatThousands } from "@/lib/format";
import { buildSaleMessage } from "@/lib/sale";
import { whatsappTextLink } from "@/lib/whatsapp";

// Aceita números agrupados com ponto e recusa zero.
const AMOUNT_PATTERN = "0*[1-9][0-9.]*";

export function SaleForm({ content }: { content: SaleFormContent }) {
  return (
    <LeadFormFlow sent={content.sent} reopenCta="negociar-reabrir-whatsapp">
      {(onSent, key) => (
        <SaleFields key={key} content={content} onSent={onSent} />
      )}
    </LeadFormFlow>
  );
}

function SaleFields({
  content,
  onSent,
}: {
  content: SaleFormContent;
  onSent: (url: string) => void;
}) {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const id = useId();
  const { fields } = content;
  const amountHintId = `${id}-quantidade-dica`;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = (name: string) => String(data.get(name) ?? "").trim();

    sendLead(
      whatsappTextLink(
        buildSaleMessage({
          program: text("programa"),
          amount,
          name: text("nome"),
          whatsapp: phone,
          email: text("email").toLowerCase(),
        }),
      ),
      onSent,
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      aria-labelledby={`${id}-titulo`}
      className={`${formCard} flex flex-col gap-[22px]`}
    >
      <div>
        <h2
          id={`${id}-titulo`}
          className="text-[26px] font-extrabold tracking-[-0.02em]"
        >
          {content.title}
        </h2>
        <p className="mt-1.5 text-sm leading-normal text-muted">
          {content.subtitle}
        </p>
      </div>

      <RadioCards
        name="programa"
        legend={fields.programsLegend}
        options={content.programs}
        hint={fields.programsHint}
        columns="grid grid-cols-2 sm:grid-cols-3"
      />

      <div>
        <label className={fieldLabel} htmlFor={`${id}-quantidade`}>
          {fields.amount}
        </label>
        <div className="relative">
          <input
            className="field pr-20"
            id={`${id}-quantidade`}
            name="quantidade"
            inputMode="numeric"
            autoComplete="off"
            required
            pattern={AMOUNT_PATTERN}
            title={fields.amountError}
            placeholder={fields.amountPlaceholder}
            aria-describedby={amountHintId}
            value={amount}
            onChange={(event) => setAmount(formatThousands(event.target.value))}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 font-mono text-xs text-muted"
          >
            {fields.amountSuffix}
          </span>
        </div>
        <span id={amountHintId} className={fieldHint}>
          {fields.amountHint}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <NameField
          id={`${id}-nome`}
          label={fields.name}
          placeholder={fields.namePlaceholder}
        />
        <PhoneField
          id={`${id}-whatsapp`}
          copy={content.whatsapp}
          value={phone}
          onChange={setPhone}
        />
      </div>

      <EmailField
        id={`${id}-email`}
        label={fields.email}
        optionalLabel={fields.emailOptional}
        placeholder={fields.emailPlaceholder}
      />

      <ConsentField copy={content.consent} />
      <LeadSubmit cta="negociar-enviar">{content.submit}</LeadSubmit>
      <DirectContact
        copy={content.directContact}
        intent="vender"
        cta="negociar-vender"
      />
    </form>
  );
}
