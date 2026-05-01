/* global React, Button, Badge, IShield, IShieldCheck, IPhone, IArrowR, ICheck, ICheckCircle, IClock,
   IStar, IStarFill, ISparkle, IPlus, IMinus, IBuilding, IUsers, IGavel, IDollar, ITrending,
   IFileText, IUserCheck, IBookOpen, ICompass, IHeadset, IMail, IScale, IBriefcase */
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

const PHONE = "1 514 447-2546";
const PHONE_HREF = "tel:+15144472546";
const EMAIL = "info@incorporation-jurismart.ca";

// ———————————————— TopNav ————————————————
const TopNav = ({ onCta }) =>
<header style={{
  position: "sticky", top: 0, zIndex: 50,
  background: "rgba(251, 249, 244, 0.88)", backdropFilter: "blur(10px)",
  borderBottom: "1px solid var(--line)"
}}>
    <div className="container" style={{
    display: "flex", alignItems: "center", gap: 16,
    padding: "12px 24px"
  }}>
      <a href="#top" style={{ display: "flex", alignItems: "center" }}>
        <img src="assets/logo-jurismart.png" alt="Jurismart" style={{ width: "57px", height: "35px" }} />
      </a>
      <nav className="anchor-nav" style={{ display: "flex", gap: 22, fontSize: 14, color: "var(--fg2)", fontWeight: 500, marginLeft: 12 }}>
        <a href="#forfaits" className="anchor-link">Forfaits</a>
        <a href="#processus" className="anchor-link">Processus</a>
        <a href="#pourquoi" className="anchor-link">Pourquoi nous</a>
        <a href="#faq" className="anchor-link">FAQ</a>
      </nav>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
        <a href={PHONE_HREF} className="phone-link" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontSize: 14, fontWeight: 600, color: "var(--fg1)", padding: "8px 12px"
      }}>
          <IPhone size={16} style={{ color: "var(--accent)" }} />
          <span className="phone-number">{PHONE}</span>
        </a>
        <Button variant="primary" size="md" href="#contact" iconRight={<IArrowR size={14} />}>
          Démarrer
        </Button>
      </div>
    </div>
  </header>;


// ———————————————— Hero ————————————————
const Hero = () =>
<section id="top" style={{ position: "relative", overflow: "hidden" }}>
    {/* Soft saffron wash + decorative shape */}
    <div aria-hidden style={{
    position: "absolute", top: -120, right: -120, width: 520, height: 520,
    borderRadius: "50%", background: "var(--js-saffron-200)", opacity: 0.35, filter: "blur(8px)"
  }} />
    <div aria-hidden style={{
    position: "absolute", bottom: -80, left: -80, width: 320, height: 320,
    borderRadius: "50%", background: "var(--js-saffron-200)", opacity: 0.4, filter: "blur(6px)"
  }} />

    <div className="container hero-grid" style={{
    position: "relative",
    padding: "72px 24px 80px",
    display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 64, alignItems: "center"
  }}>
      <div>
        <div style={{
        display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px",
        borderRadius: "var(--r-full)", background: "#fff", border: "1px solid var(--line)",
        fontSize: 12, fontWeight: 600, color: "var(--fg2)", marginBottom: 22,
        boxShadow: "var(--shadow-xs)"
      }}>
          <IShield size={14} style={{ color: "var(--accent)" }} />
          Cabinet juridique privé · Avocat au Barreau du Québec
        </div>

        <h1 className="hero-h1" style={{
        fontFamily: "var(--font-display)",
        fontSize: 60, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.04,
        marginBottom: 22, color: "rgb(31, 42, 58)"
      }}>
          Confiez votre incorporation à des <span style={{ color: "var(--accent)" }}>experts</span>
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg2)", maxWidth: 560, marginBottom: 32 }}>Nous vous accompagnons à chaque étape : rédaction des statuts, coordination du dépôt au registre, suivi de l'obtention de votre numéro NEQ, mise en place de votre livre de minutes. À prix fixe, sans surprise.


      </p>

        <ul style={{
        display: "flex", flexDirection: "column", gap: 10, padding: 0, margin: "0 0 32px",
        listStyle: "none"
      }}>
          {[
        "Incorporation clé en main adaptée à votre projet",
        "Avocat au Barreau du Québec",
        "Québec et fédéral"].
        map((t) =>
        <li key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--fg2)" }}>
              <span style={{
            width: 22, height: 22, borderRadius: "50%", background: "var(--js-success-bg)",
            color: "var(--js-success)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>
                <ICheck size={13} sw={2.5} />
              </span>
              {t}
            </li>
        )}
        </ul>

        <Button variant="primary" size="xl" href="#contact" iconRight={<IArrowR size={16} />}>
          Démarrer ma consultation
        </Button>
        <div style={{
        fontSize: 13, color: "var(--fg3)", marginTop: 14,
        display: "flex", alignItems: "center", gap: 8
      }}>
          <IClock size={14} />
          Gratuit et sans engagement - un avocat vous répond sous 24 h
        </div>
      </div>

      {/* Visual — folder/dossier card */}
      <div className="hero-visual" style={{ position: "relative" }}>
        <div style={{
        background: "#1f2a3a",
        borderRadius: "var(--r-2xl)",
        padding: 28,
        aspectRatio: "4/5",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        boxShadow: "var(--shadow-lg)",
        overflow: "hidden", position: "relative"
      }}>
          <div aria-hidden style={{
          position: "absolute", top: 24, right: 24, width: 110, height: 110,
          borderRadius: "50%", background: "var(--js-saffron-300)", opacity: "0"
        }} />
          <div aria-hidden style={{
          position: "absolute", bottom: -40, left: -40, width: 200, height: 200,
          borderRadius: "50%", background: "var(--accent)", opacity: "0"
        }} />

          <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.8)"
          }}>
              Dossier · INC-2026-0142
            </span>
            <Badge tone="success" dot>Actif</Badge>
          </div>

          <div style={{
          background: "#fff",
          borderRadius: "var(--r-lg)",
          padding: 22, boxShadow: "var(--shadow-md)",
          position: "relative", zIndex: 1
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg1)" }}>Forfait Complet</span>
              <Badge tone="accent">Recommandé</Badge>
            </div>
            <div className="num" style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30,
            letterSpacing: "-0.02em", color: "var(--fg1)"
          }}>
              590 <span style={{ color: "var(--accent)", fontSize: 16 }}>$ CAD</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--fg3)", marginTop: 4 }}>
              Livré en 5 jours ouvrables
            </div>
            <div style={{ height: 1, background: "var(--line)", margin: "14px 0" }} />
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {["Statuts constitutifs rédigés", "Dépôt au registre", "Livre de minutes complet", "Consultation post-incorporation"].map((t) =>
            <li key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--fg2)" }}>
                  <ICheck size={13} style={{ color: "var(--js-success)" }} sw={2.5} />{t}
                </li>
            )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>;


// ———————————————— Reassurance band ————————————————
const Reassurance = () => {
  const items = [
  { icon: <IClock size={18} />, label: "5 jours ouvrables", sub: "Délai standard" },
  { icon: <IScale size={18} />, label: "Avocat encadre votre dossier", sub: "Inscrit au Barreau du Québec" },
  { icon: <IDollar size={18} />, label: "Prix fixes, sans surprise", sub: "Forfaits transparents" },
  { icon: <IStarFill size={18} />, label: "Avis 5 étoiles", sub: "Google Reviews" }];

  return (
    <section style={{
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      background: "#fff"
    }}>
      <div className="container reassurance-grid" style={{
        padding: "20px 24px",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24
      }}>
        {items.map((it) =>
        <div key={it.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{
            width: 36, height: 36, borderRadius: 10,
            background: "var(--js-terracotta-100)", color: "var(--accent)",
            display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>{it.icon}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg1)", lineHeight: 1.2 }}>{it.label}</div>
              <div style={{ fontSize: 12, color: "var(--fg3)", marginTop: 2 }}>{it.sub}</div>
            </div>
          </div>
        )}
      </div>
    </section>);

};

// ———————————————— Section header ————————————————
const SectionHeader = ({ eyebrow, title, subtitle, align = "center", style }) =>
<div style={{
  textAlign: align, maxWidth: align === "center" ? 720 : "none",
  margin: align === "center" ? "0 auto 56px" : "0 0 48px",
  ...style
}}>
    {eyebrow && <div className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>}
    <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.08, marginBottom: subtitle ? 14 : 0 }}>
      {title}
    </h2>
    {subtitle && <p style={{ fontSize: 17, color: "var(--fg2)", lineHeight: 1.55, margin: 0 }}>{subtitle}</p>}
  </div>;


window.PHONE = PHONE;window.PHONE_HREF = PHONE_HREF;window.EMAIL = EMAIL;
Object.assign(window, { TopNav, Hero, Reassurance, SectionHeader });