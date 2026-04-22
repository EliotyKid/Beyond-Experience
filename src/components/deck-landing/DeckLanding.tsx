"use client";

import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./DeckLanding.module.scss";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const howItWorks = [
  {
    id: "01",
    title: "Predict",
    text: "At the start of each round, every player says how many tricks they think they will win.",
    image: "/images/Mockup03.webp",
    alt: "Tengu gameplay prediction moment",
  },
  {
    id: "02",
    title: "Play",
    text: "Cards are revealed one by one. The highest card wins the trick.",
    image: "/images/Mockup04.webp",
    alt: "Tengu gameplay cards being played",
  },
  {
    id: "03",
    title: "Survive",
    text: "If your final result does not match your prediction, you lose a life.",
    image: "/images/Mockup07.webp",
    alt: "Tengu gameplay life system",
  },
];

const stats = [
  "3 to 8 players",
  "around 15 minutes",
  "ages 13+",
  "easy to learn",
  "built for rematches",
];

export default function DeckLanding() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const horizontalTrackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const heroParallax = gsap.utils.toArray<HTMLElement>("[data-hero-parallax]");
      const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const revealLines = gsap.utils.toArray<HTMLElement>("[data-line-reveal]");
      const floatItems = gsap.utils.toArray<HTMLElement>("[data-float]");
      const statsItems = gsap.utils.toArray<HTMLElement>("[data-stat]");
      const moodSections = gsap.utils.toArray<HTMLElement>("[data-nav-mode]");
      const cardChoice = document.querySelector<HTMLElement>("[data-card-choice]");
      const cardChoiceStrong = document.querySelector<HTMLElement>("[data-choice-strong]");
      const cardChoiceWeak = document.querySelector<HTMLElement>("[data-choice-weak]");
      const introVisual = document.querySelector<HTMLElement>("[data-intro-visual]");
      const twistVisual = document.querySelector<HTMLElement>("[data-twist-visual]");
      const horizontalTrack = horizontalTrackRef.current;

      heroParallax.forEach((item) => {
        gsap.to(item, {
          y: 120,
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      revealLines.forEach((item) => {
        gsap.fromTo(
          item,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      floatItems.forEach((item, index) => {
        gsap.to(item, {
          y: index % 2 === 0 ? -18 : 18,
          x: index % 2 === 0 ? 10 : -10,
          duration: 4 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      statsItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 24, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      if (introVisual) {
        gsap.to(introVisual, {
          y: -90,
          rotate: 5,
          ease: "none",
          scrollTrigger: {
            trigger: introVisual,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (twistVisual) {
        gsap.to(twistVisual, {
          y: -120,
          rotate: -4,
          ease: "none",
          scrollTrigger: {
            trigger: twistVisual,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (cardChoice && cardChoiceStrong && cardChoiceWeak) {
        gsap.fromTo(
          cardChoiceStrong,
          { xPercent: -18, rotate: -10, opacity: 0.45 },
          {
            xPercent: 0,
            rotate: -2,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardChoice,
              start: "top 70%",
              end: "center center",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          cardChoiceWeak,
          { xPercent: 18, rotate: 10, opacity: 0.45 },
          {
            xPercent: 0,
            rotate: 2,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardChoice,
              start: "top 70%",
              end: "center center",
              scrub: true,
            },
          }
        );
      }

      moodSections.forEach((section) => {
        const mode = section.getAttribute("data-nav-mode");

        ScrollTrigger.create({
          trigger: section,
          start: "top 8%",
          end: "bottom 8%",
          onEnter: () => {
            if (!navRef.current) return;
            if (mode === "dark") navRef.current.classList.add(styles.navDark);
            else navRef.current.classList.remove(styles.navDark);
          },
          onEnterBack: () => {
            if (!navRef.current) return;
            if (mode === "dark") navRef.current.classList.add(styles.navDark);
            else navRef.current.classList.remove(styles.navDark);
          },
          onLeave: () => {
            if (!navRef.current) return;
            if (mode === "dark") navRef.current.classList.remove(styles.navDark);
          },
          onLeaveBack: () => {
            if (!navRef.current) return;
            if (mode === "dark") navRef.current.classList.remove(styles.navDark);
          },
        });
      });

      mm.add("(min-width: 900px)", () => {
        if (!horizontalTrack) return;

        gsap.to(horizontalTrack, {
          x: () => -(horizontalTrack.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: `.${styles.horizontalWrapper}`,
            start: "top top",
            end: () => `+=${horizontalTrack.scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef }
  );

  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.2 }}>
      <main ref={rootRef} className={styles.page}>
        <nav ref={navRef} className={styles.nav}>
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={styles.navBrand}
          >
            BEYOND
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className={`${styles.navMeta} font-mono`}
          >
            Series 01 // Tengu
          </motion.div>
        </nav>

        <section className={styles.hero} data-nav-mode="light">
          <div className={styles.heroNoise} />
          <div className={styles.heroGlow} />

          <motion.div
            className={styles.heroInner}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <motion.p
              className={`${styles.heroEyebrow} font-mono`}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              Fast Social Card Game
            </motion.p>

            <div className={styles.revealMask}>
              <motion.h1
                className={`${styles.heroTitle} title-display`}
                variants={{
                  hidden: { opacity: 0, y: 90 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                TENGU
              </motion.h1>
            </div>

            <motion.p
              className={styles.heroLead}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.08 }}
            >
              Predict your wins. Sabotage your friends. Survive the round.
            </motion.p>

            <motion.p
              className={styles.heroSubtitle}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, delay: 0.16 }}
            >
              A fast social card game for 3 to 8 players. Easy to learn, quick
              to play, and made for unforgettable game nights.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, delay: 0.22 }}
            >
              <a href="#final-cta" className={styles.primaryButton}>
                <span>Back this project</span>
              </a>

              <a href="#how-it-works" className={styles.secondaryButton}>
                <span>See the rules</span>
              </a>

              <a href="#final-cta" className={styles.secondaryButton}>
                <span>Join Discord</span>
              </a>
            </motion.div>
          </motion.div>

          <div className={styles.heroVisual} data-hero-parallax>
            <img src="/images/Mockup01.webp" alt="Tengu deck hero visual" />
          </div>

          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.46 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="font-mono">Scroll to explore</span>
            <span className={styles.scrollArrow}>↓</span>
          </motion.div>
        </section>

        <section className={styles.introSection} data-nav-mode="dark">
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <p className={`${styles.sectionLabel} font-mono`} data-reveal>
                Introduction
              </p>

              <div className={styles.revealMask}>
                <h2 className={`${styles.introTitle} title-section`} data-line-reveal>
                  Simple to start.
                  <br />
                  Brutal with friends.
                </h2>
              </div>

              <div className={styles.introTextGroup} data-reveal>
                <p className={styles.introText}>
                  Tengu is a fast social card game where every round begins with
                  a prediction. Call how many tricks you think you can win —
                  then do everything you can to make everyone else fail.
                </p>

                <p className={styles.introText}>
                  Because in Tengu, the smartest move isn’t always winning.
                  Sometimes it’s making sure your friend wins exactly when they
                  shouldn’t.
                </p>
              </div>
            </div>

            <div className={styles.introVisualWrap} data-intro-visual>
              <div className={styles.introVisualMain} data-float>
                <img src="/images/Mockup02.webp" alt="Floating Tengu cards" />
              </div>

              <div className={styles.introVisualSub} data-float>
                <img src="/images/Mockup05.webp" alt="Tengu deck secondary visual" />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className={styles.howSection} data-nav-mode="light">
          <div className="container">
            <div className={styles.howIntro} data-reveal>
              <p className={`${styles.sectionLabel} font-mono`}>
                Learn it in under a minute
              </p>

              <h2 className={`${styles.howTitle} title-section`}>
                A simple system.
                <br />
                A mean table.
              </h2>
            </div>

            <div className={styles.editorialGrid}>
              <div className={styles.editorialSticky}>
                <div className={styles.mediaFrame} data-reveal>
                  <img
                    src="/images/Mockup03.webp"
                    alt="Tengu game mechanics visual"
                  />
                </div>
              </div>

              <div className={styles.editorialContent}>
                {howItWorks.map((item, index) => (
                  <article key={item.id} className={styles.editorialBlock}>
                    {index > 0 && (
                      <div className={styles.mediaFrameMobile} data-reveal>
                        <img src={item.image} alt={item.alt} />
                      </div>
                    )}

                    <div className={styles.blockHeader}>
                      <span className={`${styles.blockIndex} font-mono`}>
                        {item.id}
                      </span>

                      <div className={styles.revealMask}>
                        <h3 className={`${styles.blockTitle} title-section`} data-line-reveal>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className={styles.blockText} data-reveal>
                      {item.text}
                    </p>
                  </article>
                ))}

                <div className={styles.howClosing} data-reveal>
                  Each new round changes the number of cards in hand, forcing
                  players to adapt, bluff, and improvise.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.twistSection} data-nav-mode="light">
          <div className="container">
            <div className={styles.twistGrid}>
              <div className={styles.twistContent}>
                <p className={`${styles.sectionLabel} font-mono`} data-reveal>
                  Core Twist
                </p>

                <div className={styles.revealMask}>
                  <h2 className={`${styles.twistTitle} title-section`} data-line-reveal>
                    Winning is only
                    <br />
                    part of the game
                  </h2>
                </div>

                <p className={styles.twistText} data-reveal>
                  Tengu is built around disruption. You can throw a weaker card
                  on purpose, force someone into an unwanted win, and break
                  their prediction at the perfect moment.
                </p>

                <p className={styles.twistText} data-reveal>
                  Every round becomes a mix of reading the table, creating
                  chaos, and surviving one more mistake.
                </p>
              </div>

              <div className={styles.twistVisual} data-twist-visual>
                <div className={styles.twistCardA} data-float>
                  <img src="/images/Mockup04.webp" alt="Tengu twist card composition" />
                </div>
                <div className={styles.twistCardB} data-float>
                  <img src="/images/Mockup06.webp" alt="Tengu alternate card spread" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.horizontalWrapper} data-nav-mode="light">
          <div ref={horizontalTrackRef} className={styles.horizontalTrack}>
            <article className={styles.horizontalCard}>
              <div className={styles.horizontalContentCenter}>
                <p className={`${styles.sectionLabel} font-mono`}>
                  Tengu Card
                </p>

                <h2 className={`${styles.horizontalTitle} title-section`}>
                  One card
                  <br />
                  changes
                  <br />
                  everything
                </h2>

                <p className={styles.horizontalText}>
                  The Tengu card has no fixed value.
                </p>

                <img
                  className={styles.horizontalHeroCard}
                  src="/images/Mockup05.webp"
                  alt="The Tengu card isolated"
                />
              </div>
            </article>

            <article className={styles.horizontalCard}>
              <div className={styles.choicePanel} data-card-choice>
                <div className={styles.choiceCol} data-choice-strong>
                  <span className={`${styles.choiceLabel} font-mono`}>
                    Option 01
                  </span>
                  <h3 className={styles.choiceTitle}>Strongest</h3>
                  <img
                    src="/images/Mockup06.webp"
                    alt="Tengu card as strongest card"
                  />
                </div>

                <div className={styles.choiceDivider}>
                  <span className="font-mono">or</span>
                </div>

                <div className={styles.choiceCol} data-choice-weak>
                  <span className={`${styles.choiceLabel} font-mono`}>
                    Option 02
                  </span>
                  <h3 className={styles.choiceTitle}>Weakest</h3>
                  <img
                    src="/images/Mockup03.webp"
                    alt="Tengu card as weakest card"
                  />
                </div>
              </div>
            </article>

            <article className={styles.horizontalCard}>
              <div className={styles.horizontalContent}>
                <p className={`${styles.sectionLabel} font-mono`}>
                  Decision & Chaos
                </p>

                <h2 className={`${styles.horizontalTitle} title-section`}>
                  One choice.
                  <br />
                  Total chaos.
                </h2>

                <p className={styles.horizontalText}>
                  When you play it, you decide: is it the strongest card on the
                  table — or the weakest? That single choice can save your
                  round, destroy another player’s plan, or completely change the
                  outcome of the match.
                </p>

                <img
                  src="/images/Mockup01.webp"
                  alt="Tengu deck final horizontal showcase"
                />
              </div>
            </article>
          </div>
        </section>

        <section className={styles.socialSection} data-nav-mode="dark">
          <div className="container">
            <div className={styles.socialIntro} data-reveal>
              <p className={`${styles.sectionLabel} font-mono`}>
                Made for real game nights
              </p>

              <h2 className={`${styles.socialTitle} title-section`}>
                Fast to explain.
                <br />
                Hard to forget.
              </h2>

              <p className={styles.socialText}>
                Tengu was made for tables full of reactions, revenge plays, bad
                predictions, and “one more game” moments.
              </p>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((item) => (
                <article key={item} className={styles.statCard} data-stat>
                  <span className={`${styles.statText} font-mono`}>{item}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.beyondSection} data-nav-mode="dark">
          <div className="container">
            <div className={styles.beyondGrid}>
              <motion.div
                className={styles.beyondVisual}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9 }}
              >
                <img src="/images/Mockup07.webp" alt="Beyond Tengu product visual" />
              </motion.div>

              <motion.div
                className={styles.beyondContent}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9 }}
              >
                <p className={`${styles.sectionLabel} font-mono`}>
                  The beginning of Beyond
                </p>

                <h2 className={`${styles.beyondTitle} title-section`}>
                  The first
                  <br />
                  release from
                  <br />
                  Beyond
                </h2>

                <p className={styles.beyondText}>
                  Tengu is the first release from Beyond — a new creative
                  universe that begins with card games and expands into bigger
                  worlds, new experiences, and future projects.
                </p>

                <p className={styles.beyondText}>
                  Supporting Tengu means helping bring the first Beyond title to
                  life and opening the door for everything that comes next.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="final-cta" className={styles.finalSection} data-nav-mode="dark">
          <div className="container">
            <div className={styles.finalCenter}>
              <p className={`${styles.sectionLabel} font-mono`} data-reveal>
                Final Call
              </p>

              <div className={styles.revealMask}>
                <h2 className={`${styles.finalTitle} title-section`} data-line-reveal>
                  Be part of
                  <br />
                  the first round
                </h2>
              </div>

              <p className={styles.finalText} data-reveal>
                Tengu is coming soon. Read the rules, join the community, and
                get ready to support the Kickstarter campaign.
              </p>

              <div className={styles.finalActions} data-reveal>
                <a href="#" className={styles.primaryButtonLight}>
                  <span>Back this project</span>
                </a>

                <a href="#how-it-works" className={styles.ghostButtonLight}>
                  <span>See the rules</span>
                </a>

                <a href="#" className={styles.ghostButtonLight}>
                  <span>Join Discord</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span className="font-mono">
            © 2026 BEYOND ENTERTAINMENT // ALL RIGHTS RESERVED
          </span>
        </footer>
      </main>
    </ReactLenis>
  );
}