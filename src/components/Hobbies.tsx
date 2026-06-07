import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MusicNote } from "@phosphor-icons/react";
import { hobbies, spotifyTrack } from "../data/data";

export default function Hobbies() {
  return (
    <section id="hobbies" className="space-y-8">
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Beyond code
        </p>
        <h2 className="text-2xl font-bold">Hobbies</h2>
        <p className="text-xs text-muted-foreground pt-0.5">
          Things I care about when the terminal is closed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Hobbies card */}
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="text-[10px] uppercase tracking-widest">
              Things I do
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <Badge
                key={h.label}
                variant="secondary"
                className="gap-1.5 text-xs font-normal cursor-default"
              >
                <span className="text-sm leading-none">{h.emoji}</span>
                {h.label}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Guestbook card */}
        <Card className="flex flex-col justify-between">
          <CardHeader className="pb-2">
            <CardDescription className="text-[10px] uppercase tracking-widest">
              Visitors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-col flex-1 justify-between">
            <div>
              <CardTitle className="text-xl font-bold leading-tight mb-1">
                Leave your mark
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-2">
                Let me know you were here.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-fit rounded-full text-xs gap-1"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Sign guestbook →
            </Button>
          </CardContent>
        </Card>

        {/* Spotify card */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1DB954] flex items-center justify-center shrink-0">
                <MusicNote size={10} className="text-black" />
              </span>
              <CardTitle className="text-sm">Last Played</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-0.5">
              <p className="text-xs font-medium">{spotifyTrack.song}</p>
              <p className="text-[10px] text-muted-foreground">
                {spotifyTrack.artist} · {spotifyTrack.album}
              </p>
            </div>
            <a
              href={spotifyTrack.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg overflow-hidden border hover:opacity-75 transition-opacity duration-150"
            >
              <img
                src={spotifyTrack.cover}
                alt={spotifyTrack.album}
                className="w-full object-cover aspect-square"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
