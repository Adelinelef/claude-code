/* global React */
const { useState, useEffect, useRef } = React;

// ———————————————— Icons (Lucide subset, inline) ————————————————
const Icon = ({ d, size = 20, sw = 1.75, style, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
    style={style} {...rest}>{d}</svg>
);
const IScale     = (p) => <Icon {...p} d={<><path d="M12 3v18"/><path d="M7 7l5-4 5 4"/><path d="M3 11h18"/><path d="M6 11l-3 5a3 3 0 0 0 6 0l-3-5ZM18 11l-3 5a3 3 0 0 0 6 0l-3-5Z"/></>} />;
const IFile      = (p) => <Icon {...p} d={<><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6"/><path d="M8 13h8M8 17h6"/></>} />;
const IShield    = (p) => <Icon {...p} d={<><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></>} />;
const IBriefcase = (p) => <Icon {...p} d={<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M2 13h20"/></>} />;
const IBuilding  = (p) => <Icon {...p} d={<><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 22h12"/><path d="M10 6h4M10 10h4M10 14h4"/><path d="M10 22v-4h4v4"/></>} />;
const IUsers     = (p) => <Icon {...p} d={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />;
const IArrowR    = (p) => <Icon {...p} d={<><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>} />;
const ICheck     = (p) => <Icon {...p} d={<path d="M4 12l5 5L20 6"/>} />;
const ICheckCircle=(p) => <Icon {...p} d={<><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></>} />;
const IClock     = (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>} />;
const IPhone     = (p) => <Icon {...p} d={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>} />;
const IStar      = (p) => <Icon {...p} d={<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>} />;
const IStarFill  = (p) => <svg viewBox="0 0 24 24" width={p.size||20} height={p.size||20} fill="currentColor" style={p.style}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/></svg>;
const ISparkle   = (p) => <Icon {...p} d={<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></>} />;
const IPlus      = (p) => <Icon {...p} d={<><path d="M12 5v14M5 12h14"/></>} />;
const IMinus     = (p) => <Icon {...p} d={<path d="M5 12h14"/>} />;
const IGavel     = (p) => <Icon {...p} d={<><path d="m14 13-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></>} />;
const IDollar    = (p) => <Icon {...p} d={<><path d="M12 2v20"/><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>} />;
const ITrending  = (p) => <Icon {...p} d={<><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></>} />;
const IShieldCheck=(p) => <Icon {...p} d={<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></>} />;
const IFileText  = (p) => <Icon {...p} d={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/></>} />;
const IUserCheck = (p) => <Icon {...p} d={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></>} />;
const IBookOpen  = (p) => <Icon {...p} d={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>} />;
const ICompass   = (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>} />;
const IHeadset   = (p) => <Icon {...p} d={<><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3z"/><path d="M3 19a2 2 0 0 0 2 2h1v-7H3z"/></>} />;
const IMail      = (p) => <Icon {...p} d={<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></>} />;

// ———————————————— Buttons ————————————————
const Button = ({ children, variant = "primary", size = "md", href, onClick, iconRight, type, fullWidth, style }) => {
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13 },
    md: { padding: "11px 18px", fontSize: 14 },
    lg: { padding: "15px 24px", fontSize: 15 },
    xl: { padding: "18px 28px", fontSize: 16 },
  };
  const variants = {
    primary: { background: "var(--accent)", color: "#fff", border: "1px solid transparent" },
    secondary: { background: "#fff", color: "var(--fg1)", border: "1px solid var(--line-strong)" },
    ghost: { background: "transparent", color: "var(--fg1)", border: "1px solid transparent" },
    dark: { background: "var(--js-ink-900)", color: "#fff", border: "1px solid transparent" },
  };
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    borderRadius: "var(--r-md)", fontFamily: "var(--font-sans)", fontWeight: 600,
    cursor: "pointer",
    transition: "background 180ms var(--ease-out), transform 120ms, box-shadow 180ms",
    letterSpacing: "-0.005em",
    textDecoration: "none", whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto",
    ...sizes[size], ...variants[variant], ...style,
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag style={base} onClick={onClick} href={href} type={type}
      onMouseEnter={e => {
        if (variant === "primary") e.currentTarget.style.background = "var(--accent-hover)";
        if (variant === "secondary") e.currentTarget.style.background = "var(--js-ink-50)";
        if (variant === "ghost") e.currentTarget.style.background = "var(--js-ink-100)";
        if (variant === "dark") e.currentTarget.style.background = "#000";
      }}
      onMouseLeave={e => { e.currentTarget.style.background = variants[variant].background; }}>
      {children}
      {iconRight}
    </Tag>
  );
};

const Badge = ({ children, tone = "neutral", dot, style }) => {
  const tones = {
    neutral: { bg: "var(--js-ink-100)", fg: "var(--fg2)" },
    success: { bg: "#e7f2ec", fg: "#3f8a5a" },
    warning: { bg: "#fff4d6", fg: "#b88610" },
    info:    { bg: "#e6edf1", fg: "#416774" },
    accent:  { bg: "#fae0d6", fg: "#a14836" },
    saffron: { bg: "#ffdd7b", fg: "#7f5c0d" },
    blue:    { bg: "var(--js-blue-200)", fg: "var(--js-blue-700)" },
    dark:    { bg: "var(--js-ink-900)", fg: "#fff" },
  }[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 11px", borderRadius: "var(--r-full)",
      fontSize: 12, fontWeight: 600, background: tones.bg, color: tones.fg, whiteSpace: "nowrap",
      ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: tones.fg }} />}
      {children}
    </span>
  );
};

Object.assign(window, {
  Icon, IScale, IFile, IShield, IBriefcase, IBuilding, IUsers,
  IArrowR, ICheck, ICheckCircle, IClock, IPhone, IStar, IStarFill,
  ISparkle, IPlus, IMinus, IGavel, IDollar, ITrending, IShieldCheck,
  IFileText, IUserCheck, IBookOpen, ICompass, IHeadset, IMail,
  Button, Badge,
});
