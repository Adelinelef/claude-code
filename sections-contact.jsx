/* global React, Button, Badge, IShield, IShieldCheck, IPhone, IArrowR, ICheck, ICheckCircle, IClock,
   IStar, IStarFill, ISparkle, IPlus, IMinus, IBuilding, IUsers, IGavel, IDollar, ITrending,
   IFileText, IUserCheck, IBookOpen, ICompass, IHeadset, IMail, IScale, IBriefcase, SectionHeader,
   PHONE, PHONE_HREF, EMAIL */
const { useState: useState4 } = React;

// ———————————————— Contact Form ————————————————
const ContactForm = ({ initialPlan }) => {
  const [submitted, setSubmitted] = useState4(false);
  const [form, setForm] = useState4({
    name: "", email: "", phone: "",
    plan: initialPlan || "",
    message: "",
    consent: true
  });
  const [errors, setErrors] = useState4({});

  const update = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Veuillez indiquer votre nom complet";
    if (!form.email.trim() || !/.+@.+\..+/.test(form.email)) errs.email = "Courriel invalide";
    if (!form.phone.trim()) errs.phone = "Veuillez indiquer un numéro de téléphone";
    if (!form.plan) errs.plan = "Sélectionnez une option";
    if (Object.keys(errs).length) {setErrors(errs);return;}
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        background: "#fff", borderRadius: "var(--r-xl)", padding: "48px 40px",
        boxShadow: "var(--shadow-lg)", textAlign: "center",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 18
      }}>
        <div style={{
          width: 72, height: 72, borderRadius: "50%", background: "var(--js-success-bg)",
          color: "var(--js-success)", display: "inline-flex", alignItems: "center", justifyContent: "center"
        }}>
          <ICheckCircle size={40} sw={1.6} />
        </div>
        <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>Merci !</h3>
        <p style={{ margin: 0, fontSize: 16, color: "var(--fg2)", lineHeight: 1.55, maxWidth: 480 }}>
          Un membre de notre équipe vous contacte dans les <strong>24&nbsp;h ouvrables</strong>.
          En attendant, n'hésitez pas à nous écrire à{" "}
          <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent)", fontWeight: 600 }}>{EMAIL}</a>{" "}
          pour toute question urgente.
        </p>
        <Button variant="ghost" size="md" onClick={() => {setSubmitted(false);setForm({ name: "", email: "", phone: "", plan: "", message: "", consent: true });}}>
          Soumettre une autre demande
        </Button>
      </div>);

  }

  const inputStyle = (err) => ({
    width: "100%",
    padding: "12px 14px",
    border: `1px solid ${err ? "var(--js-danger)" : "var(--line-strong)"}`,
    borderRadius: "var(--r-md)", background: "#fff",
    fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg1)",
    outline: "none", transition: "border-color 180ms, box-shadow 180ms"
  });
  const labelStyle = { fontSize: 13, fontWeight: 600, color: "var(--fg1)", marginBottom: 6, display: "block" };

  return (
    <form onSubmit={submit} style={{
      background: "#fff", borderRadius: "var(--r-xl)", padding: 36,
      boxShadow: "var(--shadow-lg)",
      display: "flex", flexDirection: "column", gap: 18
    }}>
      <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Prénom et nom *</label>
          <input style={inputStyle(errors.name)} value={form.name} onChange={(e) => update("name", e.target.value)}
          onFocus={(e) => {e.target.style.borderColor = "var(--accent)";e.target.style.boxShadow = "0 0 0 3px var(--focus-ring)";}}
          onBlur={(e) => {e.target.style.borderColor = errors.name ? "var(--js-danger)" : "var(--line-strong)";e.target.style.boxShadow = "none";}} />
          
          {errors.name && <div style={{ fontSize: 12, color: "var(--js-danger)", marginTop: 4 }}>{errors.name}</div>}
        </div>
        <div>
          <label style={labelStyle}>Courriel *</label>
          <input type="email" style={inputStyle(errors.email)} value={form.email} onChange={(e) => update("email", e.target.value)}
          onFocus={(e) => {e.target.style.borderColor = "var(--accent)";e.target.style.boxShadow = "0 0 0 3px var(--focus-ring)";}}
          onBlur={(e) => {e.target.style.borderColor = errors.email ? "var(--js-danger)" : "var(--line-strong)";e.target.style.boxShadow = "none";}} />
          
          {errors.email && <div style={{ fontSize: 12, color: "var(--js-danger)", marginTop: 4 }}>{errors.email}</div>}
        </div>
      </div>

      <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Téléphone *</label>
          <input type="tel" style={inputStyle(errors.phone)} value={form.phone} onChange={(e) => update("phone", e.target.value)}
          onFocus={(e) => {e.target.style.borderColor = "var(--accent)";e.target.style.boxShadow = "0 0 0 3px var(--focus-ring)";}}
          onBlur={(e) => {e.target.style.borderColor = errors.phone ? "var(--js-danger)" : "var(--line-strong)";e.target.style.boxShadow = "none";}} />
          
          {errors.phone && <div style={{ fontSize: 12, color: "var(--js-danger)", marginTop: 4 }}>{errors.phone}</div>}
        </div>
        <div>
          <label style={labelStyle}>Forfait souhaité *</label>
          <select style={{ ...inputStyle(errors.plan), appearance: "none",
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%2376716a' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
            backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "12px",
            paddingRight: 36, cursor: "pointer"
          }}
          value={form.plan} onChange={(e) => update("plan", e.target.value)}
          onFocus={(e) => {e.target.style.borderColor = "var(--accent)";e.target.style.boxShadow = "0 0 0 3px var(--focus-ring)";}}
          onBlur={(e) => {e.target.style.borderColor = errors.plan ? "var(--js-danger)" : "var(--line-strong)";e.target.style.boxShadow = "none";}}>
            
            <option value="">Sélectionnez…</option>
            <option value="essentiel">Forfait Essentiel — 490 $</option>
            <option value="complet">Forfait Complet — 590 $</option>
            <option value="undecided">Je ne sais pas encore</option>
          </select>
          {errors.plan && <div style={{ fontSize: 12, color: "var(--js-danger)", marginTop: 4 }}>{errors.plan}</div>}
        </div>
      </div>

      <div>
        <label style={labelStyle}>Commentaire <span style={{ color: "var(--fg3)", fontWeight: 400 }}>(optionnel)</span></label>
        <textarea rows={4} style={{ ...inputStyle(false), resize: "vertical", fontFamily: "var(--font-sans)" }}
        value={form.message} onChange={(e) => update("message", e.target.value)}
        placeholder="Parlez-nous de votre projet en quelques mots…"
        onFocus={(e) => {e.target.style.borderColor = "var(--accent)";e.target.style.boxShadow = "0 0 0 3px var(--focus-ring)";}}
        onBlur={(e) => {e.target.style.borderColor = "var(--line-strong)";e.target.style.boxShadow = "none";}} />
        
      </div>

      <p style={{ margin: 0, fontSize: 12, color: "var(--fg3)", lineHeight: 1.5 }}>
        En soumettant ce formulaire, vous acceptez d'être contacté par un membre de l'équipe Jurismart dans le cadre de votre demande.
      </p>

      <Button variant="primary" size="xl" type="submit" iconRight={<IArrowR size={16} />}>
        Démarrer ma consultation gratuite
      </Button>
      <div style={{
        fontSize: 13, color: "var(--fg3)", textAlign: "center",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8
      }}>
        <IShieldCheck size={14} style={{ color: "var(--js-success)" }} />
        Réponse sous 24 h
      </div>
    </form>);

};

// ———————————————— Contact Section ————————————————
const ContactSection = () =>
<section id="contact" style={{
  padding: "96px 0",
  background: "linear-gradient(180deg, var(--js-blue-100) 0%, var(--bg) 100%)",
  position: "relative", overflow: "hidden"
}}>
    <div aria-hidden style={{
    position: "absolute", top: -120, right: -120, width: 360, height: 360,
    borderRadius: "50%", background: "var(--js-saffron-200)", opacity: 0.4, filter: "blur(8px)"
  }} />
    <div className="container contact-grid" style={{
    padding: "0 24px", position: "relative",
    display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "start", maxWidth: 1180, margin: "0 auto"
  }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Démarrons</div>
        <h2 style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 18 }}>
          Démarrez votre incorporation —<br />
          <span style={{ color: "var(--accent)" }}>c'est gratuit et sans engagement.</span>
        </h2>
        <p style={{ fontSize: 17, color: "var(--fg2)", lineHeight: 1.55, marginBottom: 32 }}>
          Remplissez le formulaire en quelques secondes. Un membre de notre équipe vous contacte dans les 24&nbsp;h.
        </p>

        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
          {[
        { icon: <IClock size={16} />, text: "Réponse sous 24 h ouvrables" },
        { icon: <IShieldCheck size={16} />, text: "Cabinet juridique privé — aucune affiliation gouvernementale" },
        { icon: <IScale size={16} />, text: "Avocat au Barreau du Québec sur chaque dossier" },
        { icon: <IDollar size={16} />, text: "Prix fixes — pas de mauvaise surprise" }].
        map((it, i) =>
        <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14.5, color: "var(--fg2)" }}>
              <span style={{
            width: 32, height: 32, borderRadius: 8, background: "#fff",
            color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center",
            border: "1px solid var(--line)", flexShrink: 0
          }}>{it.icon}</span>
              {it.text}
            </li>
        )}
        </ul>

        <div style={{
        marginTop: 32, padding: 18, background: "#fff", borderRadius: "var(--r-md)",
        border: "1px solid var(--line)",
        display: "flex", alignItems: "center", gap: 14
      }}>
          <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--js-terracotta-100)",
          color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IPhone size={18} />
          </span>
          <div>
            <div style={{ fontSize: 12, color: "var(--fg3)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
              Vous préférez nous appeler ?
            </div>
            <a href={PHONE_HREF} style={{ fontSize: 17, fontWeight: 700, color: "var(--fg1)", letterSpacing: "-0.01em" }}>
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  </section>;


// ———————————————— Footer ————————————————
const Footer = () =>
<footer style={{
  background: "#1f2a3a", color: "rgba(255,255,255,0.7)",
  padding: "56px 0 40px"
}}>
    <div className="container" style={{ padding: "0 24px", maxWidth: 1180, margin: "0 auto" }}>
      <div className="footer-top" style={{
      display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 32, flexWrap: "wrap",
      paddingBottom: 32, borderBottom: "1px solid rgba(255,255,255,0.12)"
    }}>
        <div style={{ maxWidth: 360 }}>
          <img src="assets/logo-jurismart.png" alt="Jurismart" style={{ height: 30, filter: "brightness(0) invert(1)", marginBottom: 14 }} />
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,0.6)" }}>
            Cabinet juridique privé spécialisé en incorporation d'entreprise au Québec et au Canada.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
          <a href={PHONE_HREF} style={{ color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <IPhone size={14} /> {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} style={{ color: "rgba(255,255,255,0.7)", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <IMail size={14} /> {EMAIL}
          </a>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)" }}>
            incorporation-jurismart.ca
          </span>
        </div>
      </div>

      <div style={{
      padding: "24px 0",
      background: "transparent"
    }}>
        <p style={{
        margin: 0, fontSize: 12, lineHeight: 1.6,
        color: "rgba(255,255,255,0.55)", maxWidth: 920
      }}>
          <strong style={{ color: "rgba(255,255,255,0.8)" }}>Avis important —</strong>{" "}
          Jurismart Inc. est un cabinet juridique privé et indépendant. Nos services ne sont pas affiliés à Corporations Canada,
          au Registraire des entreprises du Québec ou à tout autre organisme gouvernemental.
        </p>
      </div>

      <div className="footer-bottom" style={{
      display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap",
      paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)",
      fontSize: 13, color: "rgba(255,255,255,0.55)"
    }}>
        <div>© 2025 Jurismart Inc. — Tous droits réservés</div>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="#" style={{ color: "rgba(255,255,255,0.7)" }}>Politique de confidentialité</a>
          <a href="#" style={{ color: "rgba(255,255,255,0.7)" }}></a>
        </div>
      </div>
    </div>
  </footer>;


Object.assign(window, { ContactSection, Footer });