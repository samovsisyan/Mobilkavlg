"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import YellowPhone from "@/assets/yellowPhone";
import YellowLocation from "@/assets/yellowLocation";
import YellowTime from "@/assets/yellowTime";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useModal } from "@/context/ModalContext";

const Schema = Yup.object({
  name: Yup.string().required("Введите имя"),
  phone: Yup.string().required("Введите телефон"),
  consent: Yup.boolean().oneOf([true], "Необходимо согласие"),
});

export default function QuickDiagnosis() {
  const { showSuccessModal } = useModal();

  return (
    <section className="bg-slate-100 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: text & bullets */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Быстрая и бесплатная диагностика за 5 минут
            </h2>
            <p className="mt-3 text-slate-600 max-w-prose">
              Оставьте свои контактные данные, и мы перезвоним вам, чтобы запланировать бесплатную диагностику.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {[{
                title: "Быстрый ответ",
                desc: "Мы перезвоним в течение 5 минут",
                icon: YellowTime,
              },{
                title: "Удобный сервис",
                desc: "Возможен выезд на дом или в офис",
                icon: YellowLocation,
              },{
                title: "Прямой контакт",
                desc: "+7 (909) 384-34-34",
                icon: YellowPhone,
                color: 'text-blue-600'
              }].map((b) => (
                <li key={b.title} className="flex flex-col gap-3 items-center md:flex-row lg:flex-wrap md:items-center lg:items-center">
                  <div className="h-10 w-10 mr-2 grid place-items-center text-xl" aria-hidden>
                    {b.icon && <b.icon />}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-center md:text-left lg:text-start">{b.title}</div>
                    <div className={`text-sm ${b.color ?? 'text-slate-600'} text-center md:text-left lg:text-center`}>{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form card */}
          <div className="rounded-xl bg-white shadow-[0_8px_24px_RGBA(0,0,0,0.08)] border border-slate-200 p-5 sm:p-6 md:p-7">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-slate-900">Оставьте заявку на ремонт</h3>

            <Formik
              initialValues={{ name: "", phone: "", consent: true }}
              validationSchema={Schema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  console.log("Lead:", values);
                  await new Promise((r) => setTimeout(r, 800));
                  resetForm();
                  showSuccessModal(
                    'Спасибо за заявку!',
                    'Наш специалист свяжется с вами в ближайшее время.'
                  );
                } catch (error) {
                  console.error('Error submitting form:', error);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, isValid, touched }) => (
                <Form className="mt-5 space-y-4">
                  <div>
                    <Field
                      name="name"
                      placeholder="Ваше имя"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-600"
                    />
                    <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  <div>
                    <Field
                      name="phone"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-600"
                    />
                    <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  <label className="flex items-start gap-2 text-sm">
                    <Field type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-slate-300" />
                    <span>
                      Я принимаю <Link href="#" className="underline hover:no-underline">условия обработки персональных данных</Link>
                    </span>
                  </label>
                  <ErrorMessage name="consent" component="div" className="-mt-2 text-sm text-red-600" />

                  <Button
                    type="submit"
                    disabled={isSubmitting || !isValid || !touched}
                    variant="primary"
                    className="w-full"
                  >
                    {isSubmitting ? "Отправка..." : "Заказать звонок"}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <span aria-hidden>⏱️</span>
                    {/* <span aria-hidden><MiniTimer /></span> */}
                    <span>Перезвоним через 5 минут</span>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
