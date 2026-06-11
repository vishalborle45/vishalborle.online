import { useEffect, useState, lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));

const Experience = lazy(() => import("./components/Experience"));
const Hobbies = lazy(() => import("./components/Hobbies"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <TooltipProvider>
      <div
        className="min-h-screen bg-background text-foreground transition-colors duration-200"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
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
        </Suspense>
      </div>
    </TooltipProvider>
  );
}
