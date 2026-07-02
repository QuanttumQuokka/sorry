"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type FloatingHeart = {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
};

export default function Page3() {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const floatingHearts = useMemo<FloatingHeart[]>(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${6 + Math.random() * 5}s`,
        size: `${18 + Math.random() * 20}px`,
      })),
    []
  );

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 100) - 50;
    setNoPosition({ x, y });
  };

  return (
    <main className={styles.container}>
      {floatingHearts.map((heart) => (
        <span
          key={heart.id}
          className={styles.floatingHeart}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
          }}
        >
          ❤️
        </span>
      ))}

      <div className={styles.content}>
        {!opened ? (
          <>
            <p className={styles.valentine}>For My Favorite Person ❤️</p>
            <h1 className={styles.noteTitle}>I saved the sweetest part for last</h1>

            <button
              type="button"
              className={styles.letter}
              onClick={() => setOpened(true)}
            >
              <div className={styles.letterTop}>
                <span>💌</span>
                <span>💕</span>
              </div>

              <div className={styles.letterBody}>
                <div className={styles.bigHeart}>❤️</div>
                <p className={styles.tapText}>Tap to open your final letter</p>
              </div>
            </button>
          </>
        ) : (
          <div className={styles.openLetter}>
            <div className={styles.topHeart}>❤️</div>

            {!accepted ? (
              <>
                <h2 className={styles.finalTitle}>A Note For You</h2>

                <p>
                  Maybe I am not perfect, maybe I don&apos;t always say everything
                  in the best way...
                </p>

                <p>
                  But one thing is always true — you are someone very, very
                  special to me.
                </p>

                <p>
                  You make my days softer, my thoughts happier, and my heart
                  calmer in a way I can&apos;t fully explain.
                </p>

                <p>
                  Every little moment with you becomes a memory I want to keep
                  forever.
                </p>

                <p>
                  So here is my honest little question...
                </p>

                <p className={styles.question}>
                  Will you keep being my favorite person, today and always? 💖
                </p>

                <div className={styles.choiceRow}>
                  <button
                    type="button"
                    className={styles.yesBtn}
                    onClick={() => setAccepted(true)}
                  >
                    Yes ❤️
                  </button>

                  <button
                    type="button"
                    className={styles.noBtn}
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    style={{
                      transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                    }}
                  >
                    No 🙈
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.acceptedBox}>
                <div className={styles.successHeart}>💖</div>
                <h2>You just made this the happiest page ever.</h2>
                <p>
                  Thank you for being the most beautiful part of my world.
                </p>
                <p>
                  If this page could hug you right now, it absolutely would.
                </p>
                <p className={styles.signature}>
                  Forever a little more in love with you ❤️
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
