import { MessageIcon } from "@/components/icons";
import { whatsappLink, type WhatsAppIntent } from "@/lib/whatsapp";

export function WhatsAppFloat({
  intent = "geral",
}: {
  intent?: WhatsAppIntent;
}) {
  return (
    <a
      href={whatsappLink(intent)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={`float-${intent}`}
      aria-label="Falar no WhatsApp"
      className="whatsapp-float fixed print:hidden right-4 bottom-[calc(16px+env(safe-area-inset-bottom))] z-10 flex size-[60px] items-center justify-center rounded-full bg-sun text-ink shadow-float transition-colors hover:bg-sun-700 md:right-6 md:bottom-[calc(24px+env(safe-area-inset-bottom))]"
    >
      <MessageIcon size={26} />
    </a>
  );
}
