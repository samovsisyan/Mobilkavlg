import Link from "next/link";
import Location from "@/assets/location";
import WhatsappBlue from "@/assets/whatsappBlue";
import TelegramBlue from "@/assets/telegramBlue";

export default function PreHeader() {
  return (
    <div className="hidden md:block w-full bg-blue-50 text-slate-700 text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-9 flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="flex items-center gap-2">
            <span aria-hidden><Location /></span>
            <span>Волгоград, ул. Елецкая 8/1</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="hidden sm:flex items-center gap-2 lg:gap-4">
            <a href="tel:+79093843434" className="hover:text-slate-900">+7 (909) 384-34-34</a>
            <WhatsappBlue
              width={18}
              height={18}
              className="cursor-pointer hover:text-slate-900 hidden lg:block"
            />
            <TelegramBlue
              width={18}
              height={18}
              className="cursor-pointer hover:text-slate-900 hidden lg:block"
            />
          </div>
          <Link href="#" className="hidden sm:inline-flex items-center gap-1 hover:text-slate-900 lg:hidden">
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="flex items-center gap-2">
            <span aria-hidden><Location /></span>
            <span>Волгоград, ул. Качинцев д.95</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="hidden sm:flex items-center gap-2 lg:gap-4">
            <a href="tel:+79093843334" className="hover:text-slate-900">+7 (909) 384-33-34</a>
            <WhatsappBlue
              width={18}
              height={18}
              className="cursor-pointer hover:text-slate-900 hidden lg:block"
            />
            <TelegramBlue
              width={18}
              height={18}
              className="cursor-pointer hover:text-slate-900 hidden lg:block"
            />
          </div>
          <Link href="#" className="hidden sm:inline-flex items-center gap-1 hover:text-slate-900 lg:hidden">
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
