import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { skills, skillGroups } from "../data/data";
import type { Skill } from "@/types/portfolio";

const groupMeta: Record<
  Skill["category"],
  { accent: string; dot: string }
> = {
  Frontend:          { accent: "text-sky-500",     dot: "bg-sky-500" },
  Backend:           { accent: "text-emerald-500", dot: "bg-emerald-500" },
  DevOps:            { accent: "text-amber-500",   dot: "bg-amber-500" },
  Languages:         { accent: "text-violet-500",  dot: "bg-violet-500" },
  Tools:             { accent: "text-rose-500",    dot: "bg-rose-500" },
  "Computer Science":{ accent: "text-cyan-400",    dot: "bg-cyan-400" },
  Databases:         { accent: "text-orange-400",  dot: "bg-orange-400" },
};

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Competencies
        </p>
        <h2 className="text-2xl font-bold">Skills &amp; Tools</h2>
        <p className="text-xs text-muted-foreground pt-0.5">
          Learned by shipping, breaking, and fixing things.
        </p>
      </div>

      <div className="space-y-2">
        {skillGroups.map((group, gi) => {
          const { accent, dot } = groupMeta[group];
          const groupSkills = skills.filter((s) => s.category === group);

          return (
            <div key={group}>
              {gi > 0 && <Separator className="mb-2" />}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 py-1">
                {/* Group label */}
                <div className="sm:w-36 shrink-0 pt-1 flex items-start gap-2">
                  <span className={`mt-[5px] h-1.5 w-1.5 rounded-full shrink-0 ${dot}`} />
                  <span className={`text-[10px] font-semibold uppercase tracking-widest ${accent}`}>
                    {group}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {groupSkills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="cursor-default text-xs font-normal px-3 py-1 hover:bg-accent hover:border-accent-foreground/20 transition-colors duration-150"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
