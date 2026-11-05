"use client";

import { useId, useState, type FormEvent } from "react";
import {
  ConsentField,
  DirectContact,
  fieldLabel,
  formCard,
  LeadFormFlow,
  LeadSubmit,
  NameField,
  PhoneField,
  sendLead,
} from "@/components/forms/LeadForm";
import type { PassengerKey, QuoteFormContent } from "@/content/comprar";
import { buildQuoteMessage, type TripType } from "@/lib/quote";
import { whatsappTextLink } from "@/lib/whatsapp";

const MAX_PASSENGERS_PER_GROUP = 9;

export function QuoteForm({ content }: { content: QuoteFormContent }) {
  return (
    <LeadFormFlow sent={content.sent} reopenCta="comprar-reabrir-whatsapp">
      {(onSent, key) => (
        <QuoteFields key={key} content={content} onSent={onSent} />
      )}
    </LeadFormFlow>
  );
}

function QuoteFields({
  content,
  onSent,
}: {
  content: QuoteFormContent;
  onSent: (url: string) => void;
}) {
  const [trip, setTrip] = useState<TripType>(content.trips[0].id);
  const [departure, setDeparture] = useState("");
  const [phone, setPhone] = useState("");
  const [passengers, setPassengers] = useState<Record<PassengerKey, number>>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const id = useId();
  const airportsId = `${id}-aeroportos`;
  const { fields } = content;
  const roundTrip = trip === "ida-e-volta";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = (name: string) => String(data.get(name) ?? "").trim();

    sendLead(
      whatsappTextLink(
        buildQuoteMessage({
          trip,
          tripLabel:
            content.trips.find((option) => option.id === trip)?.label ?? "",
          origin: text("origem"),
          destination: text("destino"),
          departure,
          returnDate: roundTrip ? text("volta") : undefined,
          passengers,
          name: text("nome"),
          whatsapp: phone,
          notes: text("observacoes"),
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
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-[1_1_240px]">
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
        <div
          role="group"
          aria-label={content.tripLabel}
          className="flex gap-0.5 rounded-full bg-sand-soft p-1"
        >
          {content.trips.map((option) => {
            const selected = option.id === trip;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setTrip(option.id)}
                className={`min-h-11 cursor-pointer rounded-full px-4 text-sm whitespace-nowrap transition-colors ${
                  selected
                    ? "bg-ink font-bold text-sun"
                    : "font-semibold text-muted"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="sr-only">{content.routeLegend}</legend>
        <div>
          <label className={fieldLabel} htmlFor={`${id}-origem`}>
            {fields.origin}
          </label>
          <input
            className="field"
            id={`${id}-origem`}
            name="origem"
            list={airportsId}
            required
            autoComplete="off"
            placeholder={fields.airportPlaceholder}
          />
        </div>
        <div>
          <label className={fieldLabel} htmlFor={`${id}-destino`}>
            {fields.destination}
          </label>
          <input
            className="field"
            id={`${id}-destino`}
            name="destino"
            list={airportsId}
            required
            autoComplete="off"
            placeholder={fields.airportPlaceholder}
          />
        </div>
        <datalist id={airportsId}>
          {content.airports.map((airport) => (
            <option key={airport} value={airport} />
          ))}
        </datalist>
        <div>
          <label className={fieldLabel} htmlFor={`${id}-ida`}>
            {fields.departure}
          </label>
          <input
            className="field"
            id={`${id}-ida`}
            name="ida"
            type="date"
            required
            value={departure}
            onChange={(event) => setDeparture(event.target.value)}
            // A data de hoje só existe no navegador: a página é gerada na build.
            onFocus={(event) => {
              event.currentTarget.min = localToday();
            }}
          />
        </div>
        {roundTrip && (
          <div>
            <label className={fieldLabel} htmlFor={`${id}-volta`}>
              {fields.returnDate}
            </label>
            <input
              className="field"
              id={`${id}-volta`}
              name="volta"
              type="date"
              required
              min={departure || undefined}
            />
          </div>
        )}
      </fieldset>

      <fieldset className="rounded-2xl border-[1.5px] border-line px-[18px] pt-3.5 pb-1.5">
        <legend className="px-1.5 text-sm font-bold">
          {content.passengers.legend}
        </legend>
        {content.passengers.groups.map((group, index) => (
          <PassengerRow
            key={group.key}
            group={group}
            count={passengers[group.key]}
            isLast={index === content.passengers.groups.length - 1}
            onChange={(count) =>
              setPassengers((current) => ({ ...current, [group.key]: count }))
            }
          />
        ))}
      </fieldset>

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

      <div>
        <label className={fieldLabel} htmlFor={`${id}-observacoes`}>
          {fields.notes}{" "}
          <span className="font-medium text-muted">{fields.notesOptional}</span>
        </label>
        <textarea
          className="field"
          id={`${id}-observacoes`}
          name="observacoes"
          maxLength={500}
          placeholder={fields.notesPlaceholder}
        />
      </div>

      <ConsentField copy={content.consent} />
      <LeadSubmit cta="comprar-enviar">{content.submit}</LeadSubmit>
      <DirectContact
        copy={content.directContact}
        intent="passagem"
        cta="comprar-passagem"
      />
    </form>
  );
}

function PassengerRow({
  group,
  count,
  isLast,
  onChange,
}: {
  group: QuoteFormContent["passengers"]["groups"][number];
  count: number;
  isLast: boolean;
  onChange: (count: number) => void;
}) {
  const atMin = count <= group.min;
  const atMax = count >= MAX_PASSENGERS_PER_GROUP;
  const stepper =
    "flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-line-strong bg-white text-lg font-bold hover:border-ink aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:border-line-strong";

  return (
    <div
      className={`flex items-center justify-between gap-4 py-2 ${isLast ? "" : "border-b border-sand-soft"}`}
    >
      <span>
        <strong className="block text-[15px] font-bold">{group.label}</strong>
        <span className="text-[13px] text-muted">{group.hint}</span>
      </span>
      <span className="flex items-center gap-3">
        {/* aria-disabled, não disabled: o foco não pode sumir ao chegar no limite. */}
        <button
          type="button"
          className={stepper}
          aria-label={`Remover ${group.noun}`}
          aria-disabled={atMin}
          onClick={() => !atMin && onChange(count - 1)}
        >
          −
        </button>
        <output
          aria-live="polite"
          aria-label={`${group.label}: ${count}`}
          className="min-w-5 text-center text-[17px] font-extrabold"
        >
          {count}
        </output>
        <button
          type="button"
          className={stepper}
          aria-label={`Adicionar ${group.noun}`}
          aria-disabled={atMax}
          onClick={() => !atMax && onChange(count + 1)}
        >
          +
        </button>
      </span>
    </div>
  );
}

/** Data local em AAAA-MM-DD; `toISOString` usaria UTC e erraria à noite no Brasil. */
function localToday(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}
