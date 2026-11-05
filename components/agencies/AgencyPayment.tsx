import { AlertIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { agencias } from "@/content/agencias";

export function AgencyPayment({
  payment,
}: {
  payment: typeof agencias.payment;
}) {
  return (
    <section id="agencias-pagamento">
      <Container className="flex flex-wrap items-start gap-12 py-20 lg:py-[120px]">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
          <SectionEyebrow>{payment.eyebrow}</SectionEyebrow>
          <h2 className="text-h2">{payment.title}</h2>
        </div>
        <div className="flex min-w-0 flex-[1.4_1_520px] flex-col gap-4">
          <div className="on-dark flex flex-col gap-5 rounded-[24px] bg-ink p-8 text-cream sm:flex-row sm:items-start">
            <span
              aria-hidden="true"
              className="flex size-[52px] flex-none items-center justify-center rounded-[14px] bg-sun font-mono text-sm font-bold text-ink"
            >
              {payment.pix.tag}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-[21px] font-bold tracking-[-0.02em]">
                {payment.pix.title}
              </h3>
              <p className="leading-relaxed text-muted-dark">
                {payment.pix.text}
              </p>
            </div>
          </div>
          <div
            role="note"
            className="flex items-start gap-4 rounded-[24px] border-[1.5px] border-sun-700 bg-sun-100 px-7 py-6"
          >
            <AlertIcon size={24} className="mt-0.5 flex-none" />
            <p className="leading-relaxed text-forest-400">
              <strong className="text-ink">{payment.warning.title}</strong>{" "}
              {payment.warning.text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
