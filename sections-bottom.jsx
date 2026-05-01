/* global React, Button, Badge, IShield, IShieldCheck, IPhone, IArrowR, ICheck, ICheckCircle, IClock,
   IStar, IStarFill, ISparkle, IPlus, IMinus, IBuilding, IUsers, IGavel, IDollar, ITrending,
   IFileText, IUserCheck, IBookOpen, ICompass, IHeadset, IMail, IScale, IBriefcase, SectionHeader */
const { useState: useState3 } = React;

// ———————————————— Why Jurismart ————————————————
const WhyJurismart = () => {
  const cards = [
  { icon: <IScale size={20} />, pro: "Avocat au Barreau du Québec encadre votre dossier", con: "Vous n'avez pas à naviguer seul dans les démarches" },
  { icon: <IUserCheck size={20} />, pro: "Conseils personnalisés à votre situation", con: "Fini les réponses génériques copiées-collées" },
  { icon: <ICompass size={20} />, pro: "Structure optimisée dès le départ", con: "Évitez les erreurs coûteuses à corriger plus tard" },
  { icon: <IHeadset size={20} />, pro: "Consultation incluse avant et après", con: "Toutes vos questions ont une réponse, sans frais cachés" },
  { icon: <IBookOpen size={20} />, pro: "Livre de minutes et documents corporatifs complets et conformes", con: "Conforme dès le premier jour" },
  { icon: <IUsers size={20} />, pro: "Équipe disponible tout au long du processus", con: "Vous ne restez jamais sans nouvelles" }];


  const reasons = [
  {
    icon: <IShieldCheck size={24} />,
    title: "Protégez votre patrimoine personnel",
    body: "Vos biens personnels sont distincts de ceux de votre entreprise. En cas de dettes ou de poursuites, votre responsabilité est limitée.",
    color: "#1f2a3a",
    iconColor: "#fff"
  },
  {
    icon: <IDollar size={24} />,
    title: "Optimisez votre fiscalité",
    body: "Le taux d'imposition des sociétés est bien inférieur à celui des particuliers. Reportez de l'impôt, fractionnez vos revenus, maximisez vos déductions.",
    color: "var(--js-saffron-200)",
    iconColor: "var(--js-saffron-700)"
  },
  {
    icon: <ITrending size={24} />,
    title: "Structurez votre croissance",
    body: "Accueillez des investisseurs, émettez des actions, facilitez une vente future. L'incorporation est la structure qui grandit avec vous.",
    color: "var(--js-terracotta-100)",
    iconColor: "var(--accent-press)"
  }];


  return (
    <section id="pourquoi" style={{ padding: "96px 0" }}>
      <div className="container" style={{ padding: "0 24px" }}>
        <SectionHeader
          eyebrow="Pourquoi Jurismart"
          title="Pourquoi choisir Jurismart pour votre incorporation ?" />
        

        <div className="why-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          maxWidth: 1200, margin: "0 auto"
        }}>
          {cards.map((c, i) =>
          <div key={i} style={{
            background: "#fff", borderRadius: "var(--r-lg)", padding: 24,
            border: "1px solid var(--line)",
            display: "flex", flexDirection: "column", gap: 14,
            transition: "box-shadow 200ms, transform 120ms"
          }}
          onMouseEnter={(e) => {e.currentTarget.style.boxShadow = "var(--shadow-md)";e.currentTarget.style.transform = "translateY(-2px)";}}
          onMouseLeave={(e) => {e.currentTarget.style.boxShadow = "none";e.currentTarget.style.transform = "none";}}>
            
              <span style={{
              width: 40, height: 40, borderRadius: 10, background: "var(--js-terracotta-100)",
              color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center"
            }}>{c.icon}</span>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--fg1)", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                {c.pro}
              </div>
              <div style={{
              paddingTop: 12, borderTop: "1px solid var(--line)",
              fontSize: 13.5, color: "var(--fg3)", lineHeight: 1.5,
              display: "flex", alignItems: "flex-start", gap: 8
            }}>
                <span style={{ color: "var(--js-success)", flexShrink: 0, marginTop: 2 }}>
                  <ICheck size={14} sw={2.5} />
                </span>
                <span><span style={{ fontWeight: 600, color: "var(--fg2)" }}></span> {c.con}</span>
              </div>
            </div>
          )}
        </div>

        {/* Why incorporate now */}
        <div style={{ marginTop: 96, maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}>
          <h3 style={{
            fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em",
            textAlign: "center", marginBottom: 48
          }}>
            Et pourquoi s'incorporer maintenant ?
          </h3>
          <div className="reasons-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24
          }}>
            {reasons.map((r) =>
            <div key={r.title} style={{
              padding: 28, background: "#fff", borderRadius: "var(--r-xl)",
              border: "1px solid var(--line)", boxShadow: "var(--shadow-sm)",
              display: "flex", flexDirection: "column", gap: 16
            }}>
                <span style={{
                width: 56, height: 56, borderRadius: 14, background: r.color,
                color: r.iconColor, display: "inline-flex", alignItems: "center", justifyContent: "center"
              }}>{r.icon}</span>
                <h4 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.25 }}>{r.title}</h4>
                <p style={{ fontSize: 14.5, color: "var(--fg2)", lineHeight: 1.55, margin: 0 }}>{r.body}</p>
              </div>
            )}
          </div>
          <div style={{
            marginTop: 40, padding: "24px 28px", borderRadius: "var(--r-lg)",
            background: "rgba(31,42,58,0.05)", border: "1px solid rgba(31,42,58,0.12)",
            display: "flex", gap: 16, alignItems: "flex-start", maxWidth: 880, marginLeft: "auto", marginRight: "auto"
          }}>
            <span style={{
              width: 36, height: 36, borderRadius: 10, background: "#fff",
              color: "#1f2a3a", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              <ICompass size={18} />
            </span>
            <p style={{ margin: 0, fontSize: 14.5, color: "#1f2a3a", lineHeight: 1.55 }}>
              <strong>Pas certain que l'incorporation soit la bonne étape pour vous ?</strong> Lors de votre consultation gratuite, un avocat évalue honnêtement votre situation et vous dit si c'est pertinent ou non.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

// ———————————————— Testimonial ————————————————
const Testimonial = () =>
<section style={{ padding: "80px 0", background: "#1f2a3a", color: "#fff", position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
    position: "absolute", top: -100, right: -100, width: 400, height: 400,
    borderRadius: "50%", background: "var(--accent)", opacity: 0.12, filter: "blur(20px)"
  }} />
    <div className="container" style={{ padding: "0 24px", position: "relative" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", gap: 4, color: "var(--js-saffron-300)", marginBottom: 24 }}>
          {[0, 1, 2, 3, 4].map((i) => <IStarFill key={i} size={22} />)}
        </div>
        <blockquote style={{
        margin: 0, fontFamily: "var(--font-display)",
        fontSize: 30, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.3,
        color: "#fff"
      }}>
          « Super expérience. Attentif à nos besoins et très efficace. Très bon prix comparativement à ce qu'on retrouve ailleurs. »
        </blockquote>
        <div style={{ marginTop: 28, fontSize: 14, color: "rgba(255,255,255,0.65)" }}>- Client Jurismart, Google Reviews

      </div>
        <div style={{
        marginTop: 28, display: "inline-flex", alignItems: "center", gap: 12,
        padding: "10px 18px", borderRadius: "var(--r-full)",
        background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)"
      }}>
          <span style={{ display: "flex", gap: 2, color: "var(--js-saffron-300)" }}>
            {[0, 1, 2, 3, 4].map((i) => <IStarFill key={i} size={13} />)}
          </span>
          <span className="num" style={{ fontSize: 13, fontWeight: 600 }}>5,0 / 5 sur Google</span>
          <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.2)" }} />
          <span className="num" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>6 avis vérifiés</span>
        </div>
      </div>
    </div>
  </section>;

// ———————————————— FAQ ————————————————
const FAQ = () => {
  const [open, setOpen] = useState3(0);

  const flash = [
  {
    q: "Pourquoi passer par un avocat ?",
    a: "Un avocat au Barreau du Québec encadre chaque dossier, sans exception. Il s'assure que votre structure est optimale pour votre situation spécifique, fiscalement et légalement, dès le premier jour. Une structure mal configurée dès le départ peut entraîner des coûts importants à corriger plus tard.",
    icon: <IScale size={22} />
  },
  {
    q: "Combien de temps ça prend ?",
    a: "Une fois votre dossier confirmé et les informations reçues, nous livrons vos documents en 5 jours ouvrables. Les délais peuvent varier légèrement selon la juridiction choisie et la complexité de votre dossier. Vous êtes informé à chaque étape du processus.",
    icon: <IClock size={22} />
  },
  {
    q: "La consultation est-elle gratuite et sans engagement ?",
    a: "Oui, entièrement. Vous nous parlez de votre projet, un avocat vous conseille honnêtement sur votre situation, sans frais et sans engagement. C'est seulement si vous souhaitez aller de l'avant que nous démarrons le mandat ensemble.",
    icon: <IShieldCheck size={22} />
  }];


  const accordion = [
  {
    q: "Quelle est la différence entre une incorporation provinciale et fédérale ?",
    a: "Dans la plupart des cas, une incorporation provinciale au Québec (REQ) est tout à fait adaptée. L'incorporation fédérale (Corporations Canada) est recommandée si vous prévoyez opérer dans plusieurs provinces ou protéger votre nom à l'échelle du Canada. Lors de votre consultation gratuite, un avocat évalue votre situation et vous recommande la juridiction la plus adaptée à votre projet."
  },
  {
    q: "Que se passe-t-il après l'incorporation ?",
    a: "Vous recevez l'ensemble de vos documents corporatifs. Si vous avez choisi le Forfait Complet, une consultation post-incorporation est incluse pour répondre à vos questions sur les prochaines étapes — ouverture de compte bancaire, obligations fiscales, etc. Nos autres services restent disponibles selon l'évolution de vos besoins."
  },
  {
    q: "J'ai besoin d'autres services : convention entre actionnaires, révision de contrat, vente d'actions…",
    a: "Nous offrons l'ensemble des services d'un cabinet juridique traditionnel. L'incorporation est souvent la première étape, mais nous restons disponibles pour vous accompagner à chaque étape de la vie de votre entreprise. Contactez-nous pour discuter de vos besoins spécifiques."
  },
  {
    q: "Les frais gouvernementaux sont-ils inclus dans vos forfaits ?",
    a: "Non, les frais gouvernementaux sont en sus de nos honoraires. Ils s'élèvent à 397 $ pour une incorporation provinciale (REQ) et 597 $ pour une incorporation fédérale (REQ + Corporations Canada)."
  },
  {
    q: "Puis-je incorporer si j'ai des associés ?",
    a: "Oui, nos deux forfaits incluent l'inscription de jusqu'à 3 administrateurs et/ou actionnaires. Si votre situation implique plusieurs actionnaires, nous vous recommandons d'envisager une convention entre actionnaires pour encadrer vos droits et obligations respectifs dès le départ."
  }];


  return (
    <section id="faq" style={{ padding: "96px 0", background: "var(--js-ink-50)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container" style={{ padding: "0 24px" }}>
        <SectionHeader
          eyebrow="FAQ"
          title="Vos questions, nos réponses" />
        

        {/* Flash */}
        <div className="faq-flash" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          maxWidth: 1200, margin: "0 auto 48px"
        }}>
          {flash.map((f, i) =>
          <div key={i} style={{
            background: "#fff", borderRadius: "var(--r-lg)", padding: 24,
            border: "1px solid var(--line)", boxShadow: "var(--shadow-sm)",
            display: "flex", flexDirection: "column", gap: 14
          }}>
              <span style={{
              width: 44, height: 44, borderRadius: 12, background: "var(--js-terracotta-100)",
              color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center"
            }}>{f.icon}</span>
              <h4 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.25 }}>{f.q}</h4>
              <p style={{ margin: 0, fontSize: 14, color: "var(--fg2)", lineHeight: 1.55 }}>{f.a}</p>
            </div>
          )}
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          {accordion.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                background: "#fff", borderRadius: "var(--r-md)",
                border: "1px solid var(--line)",
                marginBottom: 12,
                overflow: "hidden",
                transition: "box-shadow 200ms",
                boxShadow: isOpen ? "var(--shadow-sm)" : "none"
              }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%", padding: "20px 24px",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                    background: "transparent", border: 0,
                    fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "var(--fg1)",
                    textAlign: "left", cursor: "pointer", letterSpacing: "-0.01em"
                  }}>
                  
                  <span>{item.q}</span>
                  <span style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: isOpen ? "var(--accent)" : "var(--js-ink-100)",
                    color: isOpen ? "#fff" : "var(--fg1)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    transition: "background 200ms"
                  }}>
                    {isOpen ? <IMinus size={16} sw={2.5} /> : <IPlus size={16} sw={2.5} />}
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 400 : 0, overflow: "hidden",
                  transition: "max-height 360ms var(--ease-out)"
                }}>
                  <p style={{
                    margin: 0, padding: "0 24px 22px",
                    fontSize: 14.5, color: "var(--fg2)", lineHeight: 1.6
                  }}>{item.a}</p>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

};

Object.assign(window, { WhyJurismart, Testimonial, FAQ });