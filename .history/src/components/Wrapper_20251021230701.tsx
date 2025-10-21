import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreHeader from "@/components/PreHeader";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <PreHeader />
      <Header />
      <main className="flex-1">
        {/* <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div> */}
      </main>
      <Footer />
    </div>
  );
}
