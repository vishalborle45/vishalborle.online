import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DownloadSimple, Briefcase } from "@phosphor-icons/react";
import { experience } from "../data/data";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Career
        </p>
        <h2 className="text-2xl font-bold">Experience</h2>
      </div>

      <div className="space-y-0">
        {experience.map((e, i) => (
          <div key={e.role}>
            <div className="py-5 grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-2 sm:gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Briefcase size={12} className="text-muted-foreground shrink-0" />
                  <span className="text-sm font-semibold">{e.role}</span>
                </div>
                <div className="pl-5">
                  <Badge
                    variant="secondary"
                    className="text-[10px] font-normal mb-2"
                  >
                    {e.company}
                  </Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </div>
              <div className="pl-5 sm:pl-0 sm:text-right">
                <span className="text-[11px] font-mono text-muted-foreground whitespace-nowrap">
                  {e.period}
                </span>
              </div>
            </div>
            {i < experience.length - 1 && <Separator />}
          </div>
        ))}
      </div>

      {/* Resume card */}
      <Card className="hover:bg-accent/20 transition-colors duration-150">
        <CardContent className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <p className="text-sm font-medium">Full Resume</p>
            <p className="text-xs text-muted-foreground">
              PDF · Updated 2025 · 1 page
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="w-fit gap-1.5 text-xs"
            asChild
          >
            <a href="/resume.pdf" download>
              <DownloadSimple size={12} />
              Download PDF
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
