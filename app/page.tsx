import Logo from "./components/ui/Logo";
import About from "./components/sections/About";
import Works from "./components/sections/Works";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-oboro-pink">
      <section className="min-h-screen flex justify-center items-center">
        <Logo />
      </section>
      <section className="min-h-screen flex justify-center items-center py-[120px] px-[120px] max-sm:py-16 max-sm:px-6">
        <About />
      </section>
      <section className="min-h-screen flex justify-center items-center py-[120px] px-[120px] max-sm:py-16 max-sm:px-6">
        <Works />
      </section>
      <section className="min-h-screen flex justify-center items-center py-[120px] px-[120px] max-sm:py-16 max-sm:px-6">
        <Contact />
      </section>
    </main>
  );
}
