"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Location from "@/assets/location";
import Phone from "@/assets/phone";
import PhoneBG from "@/assets/phoneBG";
import TimeBG from "@/assets/timeBG";
import Card from "@/components/ui/Card";
import TelegramWhiteBg from "@/assets/telegramWhiteBg";
import FacebookWhiteBg from "@/assets/facebookWhiteBg";
import VkWhiteBg from "@/assets/vkWhiteBg";
import LinkedinWhiteBg from "@/assets/linkedinWhiteBg";
import WhatsappWhiteBg from "@/assets/whatsappWhiteBg";

export default function ContactsOverview() {
  const SocialIcons = [
    { key: "whatsapp", Icon: WhatsappWhiteBg },
    { key: "telegram", Icon: TelegramWhiteBg },
    { key: "facebook", Icon: FacebookWhiteBg },
    { key: "vk", Icon: VkWhiteBg },
    { key: "linkedin", Icon: LinkedinWhiteBg },
  ];
  const { openContactModal, openCallRequestModal } = useModal();


  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Контакты</h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Left column: phone + schedule */}
          <div className="space-y-5 sm:space-y-6">
            <Card>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-700 text-xl" aria-hidden>
                  <PhoneBG />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 text-[24px]">Телефон</h3>
                  <div className="mt-3 space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-slate-900 font-medium">
                        <span aria-hidden><Phone /></span>
                        <a href="tel:+79093843434" className="hover:underline">+7 (909) 384-34-34</a>
                      </div>
                      <Link href="/contacts" className="text-blue-700 hover:underline">Связаться</Link>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-900 font-medium">
                        <span aria-hidden><Phone /></span>
                        <a href="tel:+79093843334" className="hover:underline">+7 (909) 384-33-34</a>
                      </div>
                      <Link href="/contacts" className="text-blue-700 hover:underline">Связаться</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-700 text-xl" aria-hidden>
                  <TimeBG />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-slate-900 text-[24px]">Режим работы</h3>
                  <div className="mt-3 grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-2 text-slate-700">
                    <div>Пн–Сб</div>
                    <div className="text-right text-slate-900">10:00–19:00</div>
                    <div>Вск</div>
                    <div className="text-right text-slate-900">10:00–17:00</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right column: addresses + ctas + socials */}
          <Card className=" bg-colors-blueActive">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">У нас новый адрес 🎉</h3>

            <div className="mt-4 space-y-5">
              <div>
                <div className="flex items-start gap-2 text-slate-900 font-semibold">
                  <span aria-hidden><Location /></span>
                  <span>Волгоград, ул. Елецкая 8/1</span>
                </div>
                <Link href="#" className="text-blue-700 hover:underline">Посмотреть на карте</Link>
              </div>
              <div>
                <div className="flex items-start gap-2 text-slate-900 font-semibold">
                  <span aria-hidden><Location /></span>
                  <span>Волгоград, ул. Качинцев д.95</span>
                </div>
                <Link href="#" className="text-blue-700 hover:underline">Посмотреть на карте</Link>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <Button variant="primary" className="w-full" 
                onClick={(e) => {
                e.preventDefault(); // Prevent navigation
                openContactModal();
              }}>
                Заказать звонок
              </Button>
              <Button variant="ghost" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                onClick={(e) => {
                e.preventDefault(); // Prevent navigation
                openContactModal();
              }}
              >
                Связаться с нами
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {SocialIcons.map(({ key, Icon }) => (
                <Button key={key} aria-label="social" variant="ghost" size="md" className="h-10 w-10 rounded-md bg-white text-slate-800 grid place-items-center border border-slate-200 hover:bg-slate-50">
                  <span aria-hidden><Icon /></span>
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

