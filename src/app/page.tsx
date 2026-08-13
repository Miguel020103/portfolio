import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0e14]">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <Contact />

      <footer className="py-8 text-center text-[13px] text-zinc-600 border-t border-zinc-800/50">
        © {new Date().getFullYear()} Miguel González · Desarrollador Frontend
      </footer>
    </main>
  );
}