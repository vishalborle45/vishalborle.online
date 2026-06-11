import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Envelope,
  MapPin,
  GithubLogo,
  LinkedinLogo,
  CheckCircle,
} from "@phosphor-icons/react";
import axios from "axios";

interface ContactLink {
  label: string;
  value: string;
  href: string | null;
  Icon: React.ElementType;
}

const LINKS: ContactLink[] = [
  {
    label: "Email",
    value: "vishalborle71@gmail.com",
    href: "mailto:vishalborle71@gmail.com",
    Icon: Envelope,
  },
  {
    label: "GitHub",
    value: "github.com/vishalborle45",
    href: "https://github.com/vishalborle45",
    Icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vishalborle",
    href: "https://linkedin.com/in/vishalborle",
    Icon: LinkedinLogo,
  },
  {
    label: "Location",
    value: "Pune, Maharashtra",
    href: null,
    Icon: MapPin,
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setBusy(true);
      setError("");

      const response = await axios.post(`http://localhost:3000/contact`, {
        name: form.name,
        email: form.email,
        message: form.message,
      });

      if (response.data.success) {
        setSent(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" className="space-y-8">
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Let's talk
        </p>
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-xs text-muted-foreground pt-0.5">
          Open to full-time roles, contract work, and interesting problems.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr] gap-8 sm:gap-14">
        {/* Links */}
        <div className="space-y-5">
          <div className="space-y-4">
            {LINKS.map(({ label, value, href, Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon
                  size={13}
                  className="text-muted-foreground mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <Button
                      variant="link"
                      className="p-0 h-auto text-xs"
                      asChild
                    >
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {value}
                      </a>
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Separator />

          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">
              Response time
            </p>
            <p className="text-xs text-muted-foreground">
              Usually within 24 hours.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <Alert>
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <AlertTitle>Message sent!</AlertTitle>
              <AlertDescription className="text-xs">
                I'll get back to you within a day or two.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-[10px] uppercase tracking-wide text-muted-foreground"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    required
                    className="h-8 text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-wide text-muted-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    required
                    className="h-8 text-xs"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-wide text-muted-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="What's on your mind?"
                  required
                  rows={5}
                  className="text-xs resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={busy}
                className="w-full h-8 text-xs"
              >
                {busy ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
