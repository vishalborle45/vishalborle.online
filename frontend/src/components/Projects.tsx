import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "../data/data";
import {
  ArrowUpRight,
  GithubLogoIcon,
  TreeStructureIcon,
} from "@phosphor-icons/react";
import { Circle } from "@phosphor-icons/react";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Selected work
        </p>
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      <div className="space-y-0">
        {projects.map((p, i) => (
          <div key={p.title}>
            <div className="group py-6 flex flex-col sm:flex-row gap-4 sm:gap-10 items-start rounded-lg px-2 -mx-2 hover:bg-accent/30 transition-colors duration-150">
              {/* Left col: year + status */}
              <div className="shrink-0 sm:w-20 flex sm:flex-col gap-2 sm:gap-1.5 items-center sm:items-start pt-0.5">
                <span className="text-[10px] font-mono text-muted-foreground">
                  {p.year}
                </span>
                <Badge
                  variant={p.status === "Live" ? "default" : "secondary"}
                  className="text-[10px] h-4 px-1.5 gap-1"
                >
                  {p.status === "Live" && (
                    <Circle
                      size={5}
                      weight="fill"
                      className="text-emerald-400 animate-pulse"
                    />
                  )}
                  {p.status}
                </Badge>
              </div>

              {/* Right col: content */}
              <div className="flex-1 space-y-3">
                {/* Title row */}
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold">{p.title}</h3>
                  {p.liveHref && (
                    <a
                      href={p.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      title="View live"
                      onClick={(e) => e.stopPropagation()}
                      className="group/arrow flex items-center gap-1 text-muted-foreground/30 hover:text-foreground transition-colors duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 transition-transform duration-150"
                      />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-[10px] font-normal px-2 py-0"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.architectureHref && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-[11px] px-3 gap-1.5"
                      asChild
                    >
                      <a
                        href={p.architectureHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TreeStructureIcon size={11} />
                        Architecture
                      </a>
                    </Button>
                  )}

                  {p.sourceHref && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 text-[11px] px-3 gap-1.5 text-muted-foreground hover:text-foreground"
                      asChild
                    >
                      <a href={p.sourceHref} target="_blank" rel="noreferrer">
                        <GithubLogoIcon size={12} />
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {i < projects.length - 1 && <Separator />}
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        More on{" "}
        <Button variant="link" className="p-0 h-auto text-xs" asChild>
          <a
            href="https://github.com/vishalborle45"
            target="_blank"
            rel="noreferrer"
          >
            github.com/vishalborle45
          </a>
        </Button>
      </p>
    </section>
  );
}
