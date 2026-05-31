import Link from "next/link";
import { church } from "@/lib/constants";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand",
  secondary:
    "bg-white text-neutral-900 hover:bg-neutral-100 focus-visible:ring-white",
  outline:
    "border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function GiveButton({ className = "" }: { className?: string }) {
  return (
    <Button
      href={church.giving.tithely}
      external
      variant="primary"
      className={className}
    >
      Give
    </Button>
  );
}
