/* global React, ReactDOM, TopNav, Hero, Reassurance, Pricing, ALaCarte, HowItWorks,
   WhyJurismart, Testimonial, FAQ, ContactSection, Footer,
   TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle, TweakColor */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#e2725b",
  "showReassurance": true,
  "heroVisual": "dossier",
  "ctaSize": "xl"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", tweaks.accent);
  }, [tweaks.accent]);

  return (
    <>
      <TopNav/>
      <main>
        <Hero/>
        {tweaks.showReassurance && <Reassurance/>}
        <Pricing/>
        <HowItWorks/>
        <WhyJurismart/>
        <Testimonial/>
        <FAQ/>
        <ContactSection/>
      </main>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Couleur d'accent">
          <TweakColor label="Accent" value={tweaks.accent} onChange={(v) => setTweak("accent", v)}
            presets={["#e2725b", "#1F3864", "#2E75B6", "#3f8a5a", "#b88610"]}/>
        </TweakSection>
        <TweakSection title="Sections">
          <TweakToggle label="Bande de réassurance" value={tweaks.showReassurance} onChange={(v) => setTweak("showReassurance", v)}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
