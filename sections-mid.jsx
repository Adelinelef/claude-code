/* global React, Button, Badge, IShield, IShieldCheck, IPhone, IArrowR, ICheck, ICheckCircle, IClock,
   IStar, IStarFill, ISparkle, IPlus, IMinus, IBuilding, IUsers, IGavel, IDollar, ITrending,
   IFileText, IUserCheck, IBookOpen, ICompass, IHeadset, IMail, IScale, IBriefcase, SectionHeader */

// ———————————————— Pricing / Inclusions ————————————————
const PlanCard = ({ name, price, badge, features, highlighted, intro, extras }) =>
<div style={{
  background: "#fff",
  borderRadius: "var(--r-xl)",
  padding: 32,
  boxShadow: highlighted ? "var(--shadow-lg)" : "var(--shadow-sm)",
  border: highlighted ? "1px solid var(--accent)" : "1px solid var(--line)",
  position: "relative",
  display: "flex", flexDirection: "column", gap: 20
}}>
    {highlighted &&
  <span style={{
    position: "absolute", top: -1, left: 32, right: 32, height: 4,
    background: "var(--accent)", borderRadius: "0 0 4px 4px"
  }} />
  }
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
          Forfait
        </div>
        <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>{name}</h3>
      </div>
      {badge && <Badge tone="accent">{badge}</Badge>}
    </div>

    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span className="num" style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, letterSpacing: "-0.025em", color: "var(--fg1)" }}>
          {price}
        </span>
        <span style={{ fontSize: 16, color: "var(--fg3)", fontWeight: 500 }}>$ CAD</span>
      </div>
      <div style={{ fontSize: 12, color: "var(--fg3)", marginTop: 4 }}>+ frais gouvernementaux en sus</div>
    </div>

    {intro &&
  <div style={{
    padding: "12px 14px", background: "rgba(31,42,58,0.06)", borderRadius: "var(--r-md)",
    fontSize: 13, color: "#1f2a3a", fontWeight: 500, border: "1px solid rgba(31,42,58,0.10)"
  }}>
        {intro}
      </div>
  }

    {extras && extras.length > 0 &&
  <ul style={{
    margin: 0, padding: 16, listStyle: "none",
    background: "var(--js-saffron-100)",
    borderRadius: "var(--r-md)",
    display: "flex", flexDirection: "column", gap: 10,
    border: "1px solid var(--js-saffron-200)"
  }}>
        {extras.map((f) =>
    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--js-ink-800)", fontWeight: 500, lineHeight: 1.4 }}>
            <ISparkle size={16} style={{ color: "var(--js-saffron-700)", flexShrink: 0, marginTop: 2 }} sw={2} />
            {f}
          </li>
    )}
      </ul>
  }

    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
      {features.map((f) =>
    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--fg2)", lineHeight: 1.45 }}>
          <span style={{
        width: 18, height: 18, borderRadius: "50%", background: "var(--js-success-bg)",
        color: "var(--js-success)", display: "inline-flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: 2
      }}>
            <ICheck size={11} sw={3} />
          </span>
          {f}
        </li>
    )}
    </ul>

    <Button variant={highlighted ? "primary" : "secondary"} size="lg" href="#contact" fullWidth iconRight={<IArrowR size={14} />}>
      Démarrer
    </Button>
  </div>;


// SVG flag for Québec (fleurdelisé) and Canada (maple leaf)
const QcFlag = ({ size = 20 }) =>
<svg width={size} height={size * 0.66} viewBox="0 0 30 20" style={{ borderRadius: 2, flexShrink: 0, boxShadow: "0 0 0 1px rgba(0,0,0,0.06)" }}>
    <rect width="30" height="20" fill="#0033a0" />
    <rect x="14.4" y="0" width="1.2" height="20" fill="#fff" />
    <rect x="0" y="9.4" width="30" height="1.2" fill="#fff" />
    <g fill="#fff">
      <path d="M7.5 4.6 L7.7 5.4 L8.5 5.4 L7.85 5.95 L8.1 6.8 L7.5 6.3 L6.9 6.8 L7.15 5.95 L6.5 5.4 L7.3 5.4 Z" />
      <path d="M22.5 4.6 L22.7 5.4 L23.5 5.4 L22.85 5.95 L23.1 6.8 L22.5 6.3 L21.9 6.8 L22.15 5.95 L21.5 5.4 L22.3 5.4 Z" />
      <path d="M7.5 13.6 L7.7 14.4 L8.5 14.4 L7.85 14.95 L8.1 15.8 L7.5 15.3 L6.9 15.8 L7.15 14.95 L6.5 14.4 L7.3 14.4 Z" />
      <path d="M22.5 13.6 L22.7 14.4 L23.5 14.4 L22.85 14.95 L23.1 15.8 L22.5 15.3 L21.9 15.8 L22.15 14.95 L21.5 14.4 L22.3 14.4 Z" />
    </g>
  </svg>;

const CaFlag = ({ size = 20 }) =>
<svg width={size} height={size * 0.66} viewBox="0 0 30 20" style={{ borderRadius: 2, flexShrink: 0, boxShadow: "0 0 0 1px rgba(0,0,0,0.06)" }}>
    <rect width="7.5" height="20" fill="#d52b1e" />
    <rect x="22.5" width="7.5" height="20" fill="#d52b1e" />
    <rect x="7.5" width="15" height="20" fill="#fff" />
    <path d="M15 5 L15.9 7.5 L18.5 7 L17 9 L18 10 L15.9 10.4 L16 12.5 L15 11.5 L14 12.5 L14.1 10.4 L12 10 L13 9 L11.5 7 L14.1 7.5 Z" fill="#d52b1e" />
  </svg>;


const Pricing = () => {
  const essentialFeatures = [
  "Consultation initiale gratuite avec un avocat",
  "Rédaction des statuts constitutifs",
  "Structure actionnariale avec actions de catégories A et B émises",
  "Dépôt au registre (REQ ou Corporations Canada)",
  "Numéro d'entreprise du Québec (NEQ)",
  "Livre de minutes complet",
  "Déclaration initiale",
  "Inscription jusqu'à 3 administrateurs et/ou actionnaires"];

  const completExtras = [
  "Consultation post-incorporation avec votre avocat",
  "Recherche et réservation de votre nom de compagnie personnalisé"];


  return (
    <section id="forfaits" style={{ padding: "96px 0 48px" }}>
      <div className="container" style={{ padding: "0 24px" }}>
        <SectionHeader
          eyebrow="Forfaits"
          title="Ce qui est inclus dans votre forfait"
          subtitle="Deux forfaits clé en main et des options à la carte, conçus pour couvrir l'ensemble de votre incorporation. Un avocat vous oriente lors de la consultation gratuite." />
        

        <div className="plans-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 0.85fr", gap: 24, maxWidth: 1280, margin: "0 auto", alignItems: "start"
        }}>
          <PlanCard
            name="Essentiel"
            price="490"
            features={essentialFeatures} />
          
          <PlanCard
            name="Complet"
            price="590"
            badge="Recommandé"
            highlighted
            intro="Tout ce qui est inclus dans le Forfait Essentiel, plus :"
            features={essentialFeatures}
            extras={completExtras} />
          
          <ALaCarteColumn />
        </div>

        {/* Government fees */}
        <div style={{
          marginTop: 40, maxWidth: 1080, marginLeft: "auto", marginRight: "auto",
          background: "#fff", borderRadius: "var(--r-lg)", border: "1px solid var(--line)",
          padding: 24
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <IBuilding size={18} style={{ color: "var(--fg2)" }} />
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg1)" }}>
              Disponible pour les deux forfaits
            </div>
          </div>
          <div className="juris-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "var(--js-blue-100)", borderRadius: "var(--r-md)" }}>
              <QcFlag size={28} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg1)" }}>Incorporation provinciale Québec (REQ)</div>
                <div className="num" style={{ fontSize: 13, color: "var(--fg3)", marginTop: 2 }}>+&nbsp;397 $ frais gouvernementaux</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "var(--js-blue-100)", borderRadius: "var(--r-md)" }}>
              <CaFlag size={28} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg1)" }}>Incorporation fédérale avec siège social au Québec</div>
                <div className="num" style={{ fontSize: 13, color: "var(--fg3)", marginTop: 2 }}>+&nbsp;597 $ frais gouvernementaux</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

// ———————————————— A la carte (sidebar column) ————————————————
const ALaCarteColumn = () => {
  const options = [
  { label: "Inscription TPS / TVQ", price: "75 $" },
  { label: "Inscription déductions à la source", price: "75 $" },
  { label: "Émission d'actions supplémentaires", price: "150 $", note: "Catégories discrétionnaires, dividendes, etc." },
  { label: "Convention entre actionnaires (modèle)", price: "400 $", note: "Pour actionnaires multiples" },
  { label: "Convention entre actionnaires sur mesure", price: "800 $", note: "Pour actionnaires multiples" },
  { label: "Rédaction ou révision de contrats", price: "Sur devis" }];

  return (
    <div style={{
      background: "var(--js-ink-50)", borderRadius: "var(--r-xl)", padding: 24,
      border: "1px solid var(--line)",
      display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 88
    }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
          À la carte
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>Personnalisez votre forfait</h3>
        <p style={{ fontSize: 13.5, color: "var(--fg2)", lineHeight: 1.5, margin: 0 }}>Ajoutez ce dont vous avez besoin.

        </p>
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {options.map((o) =>
        <li key={o.label} style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: "12px 4px", borderTop: "1px dashed var(--line-strong)"
        }}>
            <span style={{
            width: 22, height: 22, borderRadius: 6, background: "#fff", border: "1px solid var(--line)",
            color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1
          }}><IPlus size={12} sw={2.5} /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--fg1)", lineHeight: 1.3 }}>{o.label}</div>
              {o.note && <div style={{ fontSize: 11.5, color: "var(--fg3)", marginTop: 2 }}>{o.note}</div>}
            </div>
            <div className="num" style={{ fontSize: 13.5, fontWeight: 700, color: "var(--fg1)", whiteSpace: "nowrap" }}>{o.price}</div>
          </li>
        )}
      </ul>
      <p style={{ margin: 0, fontSize: 12.5, color: "var(--fg3)", lineHeight: 1.5, fontStyle: "italic", paddingTop: 4, borderTop: "1px solid var(--line)" }}>
        Nous offrons l'ensemble des services d'un cabinet juridique traditionnel. Contactez-nous pour tout autre besoin juridique d'entreprise.
      </p>
    </div>);

};

// ———————————————— A la carte (legacy, replaced by ALaCarteColumn) ————————————————
const ALaCarte = () => null;

// ———————————————— How it works ————————————————
const HowItWorks = () => {
  const steps = [
  {
    n: "01",
    icon: <IFileText size={22} />,
    title: "Remplissez le formulaire",
    meta: "Quelques secondes",
    body: "Dites-nous en quelques mots ce que vous souhaitez accomplir. Gratuit, rapide, sans engagement."
  },
  {
    n: "02",
    icon: <IHeadset size={22} />,
    title: "Consultation gratuite avec un avocat",
    meta: "Sous 24 h",
    body: "Un avocat vous contacte pour échanger sur votre projet, répondre à vos questions et vous proposer la structure la mieux adaptée à votre situation."
  },
  {
    n: "03",
    icon: <IBriefcase size={22} />,
    title: "Vous validez, on prend en charge le dossier",
    meta: "On s'occupe de tout",
    body: "Une fois la consultation complétée et votre accord confirmé, nous gérons l'intégralité du processus d'incorporation."
  },
  {
    n: "04",
    icon: <ICheckCircle size={22} />,
    title: "Votre entreprise est créée",
    meta: "5 jours ouvrables",
    body: "Vous recevez l'ensemble de vos documents corporatifs. Votre entreprise est officiellement constituée, prête à démarrer."
  }];


  return (
    <section id="processus" style={{ padding: "96px 0", background: "var(--js-ink-50)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container" style={{ padding: "0 24px" }}>
        <SectionHeader
          eyebrow="Processus"
          title="Votre incorporation en 4 étapes simples"
          subtitle="Un parcours clair, sans surprise. Vous gardez le contrôle à chaque étape." />
        

        <div className="steps-row" style={{
          display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
          alignItems: "stretch", gap: 0, maxWidth: 1200, margin: "0 auto"
        }}>
          {steps.map((s, i) =>
          <React.Fragment key={s.n}>
              <div style={{
              background: "#fff", borderRadius: "var(--r-lg)", padding: "24px 22px",
              border: "1px solid var(--line)", boxShadow: "var(--shadow-sm)",
              display: "flex", flexDirection: "column", gap: 12, position: "relative"
            }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span className="num" style={{
                  fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                  color: "var(--accent)", letterSpacing: "0.04em"
                }}>ÉTAPE {s.n}</span>
                  <span style={{
                  width: 38, height: 38, borderRadius: 10, background: "var(--js-terracotta-100)",
                  color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center"
                }}>{s.icon}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <Badge tone="blue" style={{ alignSelf: "flex-start" }}>{s.meta}</Badge>
                <p style={{ fontSize: 13.5, color: "var(--fg2)", lineHeight: 1.5, margin: 0 }}>{s.body}</p>
              </div>
              {i < steps.length - 1 &&
            <div className="step-arrow" style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              padding: "0 12px", color: "var(--js-ink-400)",
              position: "relative"
            }}>
                  {i === 1 ?
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                padding: "10px 8px", background: "var(--bg-highlight)", borderRadius: "var(--r-md)",
                width: 86
              }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.05em", color: "var(--js-saffron-700)", textAlign: "center", textTransform: "uppercase", lineHeight: 1.2 }}>
                        Vous validez<br />et c'est parti
                      </span>
                      <IArrowR size={18} sw={2.5} style={{ color: "var(--js-saffron-700)" }} />
                    </div> :

              <IArrowR size={26} sw={2} />
              }
                </div>
            }
            </React.Fragment>
          )}
        </div>
      </div>
    </section>);

};

Object.assign(window, { Pricing, ALaCarte, ALaCarteColumn, HowItWorks, QcFlag, CaFlag });