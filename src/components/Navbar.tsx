import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { List } from "@phosphor-icons/react";

const NAV_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Hobbies",
  "Contact",
] as const;

interface NavbarProps {
  dark: boolean;
  setDark: (v: boolean) => void;
}

function scrollTo(id: string) {
  document
    .getElementById(id.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl flex h-12 items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Button
          variant="ghost"
          className="px-0 text-sm font-black tracking-tighter hover:bg-transparent"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          VISHAL BORLE
        </Button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <Button
              key={l}
              variant="ghost"
              size="sm"
              className="h-7 px-3 text-xs font-normal text-muted-foreground hover:text-foreground"
              onClick={() => scrollTo(l)}
            >
              {l}
            </Button>
          ))}
        </nav>

        {/* Right: dark toggle + mobile menu */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Label
              htmlFor="dark-toggle"
              className="text-[10px] text-muted-foreground hidden sm:block"
            >
              {dark ? "dark" : "light"}
            </Label>
            <Switch
              id="dark-toggle"
              checked={dark}
              onCheckedChange={setDark}
              className="scale-75 origin-right"
            />
          </div>

          {/* Mobile sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
                <List size={15} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-56 pt-10">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <Button
                    key={l}
                    variant="ghost"
                    className="justify-start text-xs font-normal text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      scrollTo(l);
                      setOpen(false);
                    }}
                  >
                    {l}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
