"use client";

import { useId, useState, type FormEvent } from "react";
import { ZapIcon } from "@/components/icons";
import {
  ConsentField,
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
import { TextLink } from "@/components/ui/TextLink";
import type { ContactFormContent } from "@/content/contato";
import { buildContactMessage } from "@/lib/contact";
import { whatsappTextLink } from "@/lib/whatsapp";

export function ContactForm({ content }: { content: ContactFormContent }) {
  return (
    <LeadFormFlow sent={content.sent} reopenCta="contato-reabrir-whatsapp">
      {(onSent, key) => (
        <ContactFields key={key} content={content} onSent={onSent} />
      )}
    </LeadFormFlow>
  );
}

function ContactFields({
  content,
  onSent,
}: {
  content: ContactFormContent;
  onSent: (url: string) => void;
}) {
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(content.defaultSubject);
  const id = useId();
  const { fields } = content;
  const tip = content.tips[subject];
  const messageHintId = `${id}-mensagem-dica`;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = (name: string) => String(data.get(name) ?? "").trim();

    sendLead(
      whatsappTextLink(
        buildContactMessage({
          subject,
          name: text("nome"),
          whatsapp: phone,
          email: text("email").toLowerCase(),
          message: text("mensagem"),
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
        name="assunto"
        legend={fields.subjectLegend}
        options={content.subjects}
        columns="flex flex-wrap"
        shape="min-h-11 rounded-full px-4 text-sm"
        defaultValue={content.defaultSubject}
        onChange={setSubject}
      >
        {/* A região existe mesmo vazia: leitores de tela só anunciam mudanças nela assim. */}
        <div role="status">
          {tip && (
            <div className="mt-3 flex items-start gap-3 rounded-[14px] border border-sun-700 bg-sun-100 px-4 py-3.5 text-sm leading-normal text-forest-400">
              <ZapIcon size={20} className="flex-none text-ink" />
              <span>
                {tip.text}{" "}
                <TextLink
                  href={tip.href}
                  cta={tip.cta}
                  className="min-h-0 text-sm font-extrabold text-ink"
                >
                  {tip.link}
                </TextLink>
              </span>
            </div>
          )}
        </div>
      </RadioCards>

      <NameField
        id={`${id}-nome`}
        label={fields.name}
        placeholder={fields.namePlaceholder}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <PhoneField
          id={`${id}-whatsapp`}
          copy={content.whatsapp}
          value={phone}
          onChange={setPhone}
        />
        <EmailField
          id={`${id}-email`}
          label={fields.email}
          optionalLabel={fields.emailOptional}
          placeholder={fields.emailPlaceholder}
        />
      </div>

      <div>
        <label className={fieldLabel} htmlFor={`${id}-mensagem`}>
          {fields.message}
        </label>
        <textarea
          className="field min-h-[140px]"
          id={`${id}-mensagem`}
          name="mensagem"
          required
          maxLength={1000}
          placeholder={fields.messagePlaceholder}
          aria-describedby={messageHintId}
          // Em textarea não há `pattern`: é aqui que se recusa uma mensagem só com espaços.
          onChange={(event) =>
            event.currentTarget.setCustomValidity(
              event.currentTarget.value.trim() ? "" : fields.messageError,
            )
          }
        />
        <span id={messageHintId} className={fieldHint}>
          {fields.messageHint}
        </span>
      </div>

      <ConsentField copy={content.consent} />
      <LeadSubmit cta="contato-enviar">{content.submit}</LeadSubmit>
    </form>
  );
}
