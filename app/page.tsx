import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { About } from "@/components/About";
import { Workflow } from "@/components/Workflow";
import { References } from "@/components/References";
import { ContactForm } from "@/components/ContactForm";
import { ContactMap } from "@/components/ContactMap";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <WhyUs />
      <About />
      <Workflow />
      <References />
      <ContactForm />
      <ContactMap />
      <Footer />
    </main>
  );
}
