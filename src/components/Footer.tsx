import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Circle } from "@phosphor-icons/react";
import { footerNav } from "../data/data";

function scrollTo(href: string) {
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-12">
        <Card>
          <CardContent className="px-7 sm:px-10 py-10 space-y-8">
            {/* Top grid */}
            <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
              {/* Brand */}
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  className="px-0 text-2xl font-black tracking-tighter hover:bg-transparent h-auto"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Vishal
                </Button>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                  Continuously exploring, building, and adapting to new
                  technologies.
                </p>
              </div>

              {/* Nav cols */}
              {footerNav.map((col) => (
                <div key={col.heading} className="space-y-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                    {col.heading}
                  </p>
                  <nav className="flex flex-col gap-1.5">
                    {col.links.map((link) =>
                      link.external ? (
                        <Button
                          key={link.label}
                          variant="link"
                          className="p-0 h-auto text-xs justify-start font-normal text-muted-foreground hover:text-foreground"
                          asChild
                        >
                          <a href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        </Button>
                      ) : (
                        <Button
                          key={link.label}
                          variant="link"
                          className="p-0 h-auto text-xs justify-start font-normal text-muted-foreground hover:text-foreground"
                          onClick={() => scrollTo(link.href)}
                        >
                          {link.label}
                        </Button>
                      ),
                    )}
                  </nav>
                </div>
              ))}
            </div>

            <Separator />

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-[10px] text-muted-foreground">
                © {year} Vishal Borle. All rights reserved.
              </p>
              <div className="flex items-center gap-1.5">
                <Circle size={6} weight="fill" className="text-emerald-500" />
                <p className="text-[10px] text-muted-foreground">
                  Built with React · shadcn/ui
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}
