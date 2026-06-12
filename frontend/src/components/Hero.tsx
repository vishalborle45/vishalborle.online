import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { stats } from "../data/data";
import {
  MapPin,
  Stack,
  GithubLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  Circle,
  DownloadSimpleIcon,
} from "@phosphor-icons/react";
import { Code2Icon } from "lucide-react";
import axios from "axios";

export default function Hero() {
  const handleResumeDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/resume`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(response.data);

      const link = document.createElement("a");
      link.href = url;
      link.download = "vishal-borle-resume.pdf";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };

  return (
    <section id="about" className="pt-14 sm:pt-20 space-y-12">
      {/* Name + headline */}
      <div className="space-y-4">
        <h1
          className="font-black leading-none tracking-tighter text-foreground"
          style={{ fontSize: "clamp(4rem,18vw,8rem)" }}
        >
          Vishal
        </h1>

        <div className="flex items-center gap-3">
          <Badge
            variant="outline"
            className="gap-2 rounded-full text-emerald-600 border-emerald-200 dark:border-emerald-800 dark:text-emerald-400 font-normal px-2.5 py-1"
          >
            <Circle
              size={7}
              weight="fill"
              className="text-emerald-500 animate-pulse"
            />
            Open to opportunities
          </Badge>
        </div>
      </div>

      {/* Location / role labels */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin size={12} />
          <span className="text-xs uppercase tracking-widest">
            Pune, Maharashtra
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Stack size={12} />
          <span className="text-xs uppercase tracking-widest">
            Software Eng. | DevOps Eng.
          </span>
        </div>
      </div>

      <Separator />

      {/* Bio + CTAs */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-between">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 max-w-lg">
          Software Engineer &amp; DevOps Enthusiast passionate about building
          scalable applications and cloud-native systems. Driven by curiosity,
          continuous learning, and the ability to quickly adapt to new
          technologies while delivering production-ready solutions.
        </p>

        <div className="shrink-0 space-y-3">
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-fit gap-1.5 text-xs"
                  onClick={handleResumeDownload}
                >
                  <DownloadSimpleIcon size={12} />
                  Download Resume
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">PDF · Updated Jan 2025</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex gap-1 pt-0.5">
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
              <a
                href="https://github.com/vishalborle45"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubLogoIcon size={14} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
              <a
                href="https://linkedin.com/in/vishalborle"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinLogoIcon size={14} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <Code2Icon size={14} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <TwitterLogoIcon size={14} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden border">
        {stats.map((s) => (
          <Card
            key={s.label}
            className="rounded-none border-0 shadow-none group"
          >
            <CardContent className="px-5 py-4 transition-colors duration-150 group-hover:bg-accent/40">
              <p className="text-2xl font-bold tabular-nums">{s.value}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">
                {s.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
