"use client";

import { useId, useState, type FormEvent } from "react";
import {
  ConsentField,
  DirectContact,
  EmailField,
  fieldLabel,
  formCard,
  LeadFormFlow,
  LeadSubmit,
  NameField,
  NOT_BLANK_ERROR,
  NOT_BLANK_PATTERN,
  PhoneField,
  RadioCards,
  sendLead,
} from "@/components/forms/LeadForm";
import type { PartnerFormContent } from "@/content/parceiros";
import { formatDocument } from "@/lib/format";
import { buildPartnerMessage } from "@/lib/partner";
import { whatsappTextLink } from "@/lib/whatsapp";

// CPF ou CNPJ já com máscara. No CNPJ alfanumérico, só os dígitos verificadores são números.
const DOCUMENT_PATTERN =
  "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}|[0-9A-Z]{2}\\.[0-9A-Z]{3}\\.[0-9A-Z]{3}/[0-9A-Z]{4}-\\d{2}";
const INSTAGRAM_PATTERN = "@?[A-Za-z0-9._]{1,30}";

export function PartnerForm({ content }: { content: PartnerFormContent }) {
  return (
    <LeadFormFlow sent={content.sent} reopenCta="parceiros-reabrir-whatsapp">
      {(onSent, key) => (
        <PartnerFields key={key} content={content} onSent={onSent} />
      )}
    </LeadFormFlow>
  );
}

function PartnerFields({
  content,
  onSent,
}: {
  content: PartnerFormContent;
  onSent: (url: string) => void;
}) {
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const id = useId();
  const { fields } = content;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = (name: string) => String(data.get(name) ?? "").trim();

    sendLead(
      whatsappTextLink(
        buildPartnerMessage({
          profile: text("perfil"),
          name: text("nome"),
          whatsapp: phone,
          document,
          email: text("email").toLowerCase(),
          instagram: text("instagram").replace(/^@/, ""),
          address: text("endereco"),
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
        name="perfil"
        legend={fields.profileLegend}
        options={content.profiles}
        columns="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]"
      />

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
        <div>
          <label className={fieldLabel} htmlFor={`${id}-documento`}>
            {fields.document}
          </label>
          {/* Sem teclado numérico: o CNPJ alfanumérico não poderia ser digitado no celular. */}
          <input
            className="field"
            id={`${id}-documento`}
            name="documento"
            autoComplete="off"
            autoCapitalize="characters"
            required
            pattern={DOCUMENT_PATTERN}
            title={fields.documentError}
            placeholder={fields.documentPlaceholder}
            value={document}
            onChange={(event) =>
              setDocument(formatDocument(event.target.value))
            }
          />
        </div>
        <EmailField
          id={`${id}-email`}
          label={fields.email}
          placeholder={fields.emailPlaceholder}
        />
        <div>
          <label className={fieldLabel} htmlFor={`${id}-instagram`}>
            {fields.instagram}{" "}
            <span className="font-medium text-muted">
              {fields.instagramOptional}
            </span>
          </label>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 font-bold text-muted"
            >
              @
            </span>
            <input
              className="field pl-[34px]"
              id={`${id}-instagram`}
              name="instagram"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              pattern={INSTAGRAM_PATTERN}
              title={fields.instagramError}
              placeholder={fields.instagramPlaceholder}
            />
          </div>
        </div>
      </div>

      <div>
        <label className={fieldLabel} htmlFor={`${id}-endereco`}>
          {fields.address}
        </label>
        <input
          className="field"
          id={`${id}-endereco`}
          name="endereco"
          autoComplete="street-address"
          required
          maxLength={240}
          pattern={NOT_BLANK_PATTERN}
          title={NOT_BLANK_ERROR}
          placeholder={fields.addressPlaceholder}
        />
      </div>

      <ConsentField copy={content.consent} />
      <LeadSubmit cta="parceiros-enviar">{content.submit}</LeadSubmit>
      <DirectContact
        copy={content.directContact}
        intent="parceria"
        cta="parceiros-whatsapp"
      />
    </form>
  );
}
