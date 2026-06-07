import { useEffect, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const id = "jb-mono";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800;900&display=swap";
    document.head.appendChild(link);
    document.documentElement.style.fontFamily = "'JetBrains Mono', monospace";
  }, []);

  return (
    <TooltipProvider>
      <div
        className="min-h-screen bg-background text-foreground transition-colors duration-200"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <Navbar dark={dark} setDark={setDark} />

        <main className="mx-auto max-w-5xl px-5 sm:px-8 pb-10 space-y-20">
          <Hero />
          <Separator />
          <Skills />
          <Separator />
          <Projects />
          <Separator />
          <Experience />
          <Separator />
          <Hobbies />
          <Separator />
          <Contact />
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  );
}
