import dynamic from 'next/dynamic';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

import { References } from "@/components/References";

const Features = dynamic(() => import('@/components/Features').then(mod => mod.Features));
const Services = dynamic(() => import('@/components/Services').then(mod => mod.Services));
const WhyUs = dynamic(() => import('@/components/WhyUs').then(mod => mod.WhyUs));
const About = dynamic(() => import('@/components/About').then(mod => mod.About));
const Workflow = dynamic(() => import('@/components/Workflow').then(mod => mod.Workflow));
const ContactForm = dynamic(() => import('@/components/ContactForm').then(mod => mod.ContactForm));
const ContactMap = dynamic(() => import('@/components/ContactMap').then(mod => mod.ContactMap));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));

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
