import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>
  );
}

export function Eyebrow({ children, icon: Icon }: { children: ReactNode; icon?: LucideIcon }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-[13px] font-semibold tracking-wide text-brand-800">
      {Icon ? <Icon className="size-4" aria-hidden /> : null}
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cx(
          "font-bold tracking-tight text-ink",
          eyebrow && "mt-5",
          Tag === "h1"
            ? "text-4xl leading-[1.08] sm:text-5xl"
            : "text-3xl leading-[1.12] sm:text-[2.5rem]",
        )}
      >
        {title}
      </Tag>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p> : null}
    </div>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition duration-200 active:scale-[0.98]";

const buttonVariants = {
  primary:
    "bg-brand-500 text-ink shadow-[0_8px_20px_-8px_rgb(223_145_17/0.7)] hover:bg-brand-400 hover:shadow-[0_12px_24px_-8px_rgb(223_145_17/0.75)]",
  secondary: "border border-line bg-white text-ink hover:border-brand-300 hover:bg-brand-50",
  dark: "bg-ink text-white hover:bg-[#33291d]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  external?: boolean;
  className?: string;
}) {
  const classes = cx(buttonBase, buttonVariants[variant], className);
  const isPlainAnchor = external || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isPlainAnchor) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

export function IconTile({
  icon: Icon,
  size = "md",
  tone = "soft",
  className,
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  tone?: "soft" | "solid" | "white";
  className?: string;
}) {
  const sizes = {
    sm: "size-10 rounded-xl [&>svg]:size-5",
    md: "size-12 rounded-2xl [&>svg]:size-6",
    lg: "size-14 rounded-2xl [&>svg]:size-7",
  };
  const tones = {
    soft: "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200",
    solid: "bg-linear-to-br from-brand-500 to-brand-300 text-ink shadow-[0_8px_16px_-8px_rgb(223_145_17/0.8)]",
    white: "bg-white text-brand-700 ring-1 ring-inset ring-line shadow-card",
  };

  return (
    <span
      className={cx(
        "inline-flex shrink-0 items-center justify-center",
        sizes[size],
        tones[tone],
        className,
      )}
    >
      <Icon strokeWidth={1.75} aria-hidden />
    </span>
  );
}
