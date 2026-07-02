"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page1() {
  const router = useRouter();

  const correctGift = 2;

  const initialPositions = [
    { top: "18%", left: "12%" },
    { top: "22%", left: "72%" },
    { top: "48%", left: "42%" },
    { top: "72%", left: "18%" },
    { top: "70%", left: "78%" },
  ];

  const hints = [
    "💡 Hint: Love isn't always where you first look...",
    "💡 Hint: The answer isn't in a corner.",
    "💡 Hint: Maybe the middle knows my heart ❤️",
    "💡 Hint: You're getting warmer...",
    "💡 Hint: Trust your heart 💕",
  ];

  const wrongMessages = [
    "Nope 😝",
    "Not this one ❤️",
    "Oops 😂",
    "Try Again 💕",
  ];

  const [positions, setPositions] = useState(initialPositions);
  const [openedGift, setOpenedGift] = useState<number | null>(null);
  const [showLetter, setShowLetter] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);

  const shuffleBoxes = () => {
    const shuffled = [...positions];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setPositions(shuffled);
  };

  const openGift = (id: number) => {
    if (openedGift !== null) return;

    setOpenedGift(id);

    if (id === correctGift) {
      setTimeout(() => {
        setShowLetter(true);
      }, 900);
    } else {
      setTimeout(() => {
        setOpenedGift(null);

        shuffleBoxes();

        setHintIndex((prev) =>
          prev + 1 >= hints.length ? hints.length - 1 : prev + 1
        );
      }, 1500);
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>A Little Game ❤️</h1>

      <p className={styles.hint}>{hints[hintIndex]}</p>

      {positions.map((gift, index) => (
        <button
          key={index}
          className={`${styles.gift} ${
            openedGift === index ? styles.opened : ""
          }`}
          style={{
            top: gift.top,
            left: gift.left,
          }}
          onClick={() => openGift(index)}
        >
          {openedGift === index ? "📦" : "🎁"}
        </button>
      ))}

      {openedGift !== null && openedGift !== correctGift && (
        <div className={styles.popup}>
          <h2>{wrongMessages[Math.floor(Math.random() * wrongMessages.length)]}</h2>

          <p>✨ The gifts are changing places...</p>
        </div>
      )}

      {showLetter && (
        <div className={styles.overlay}>
          <div className={styles.envelope}>
            <div className={styles.paper}>
              <h1>💌 Dear Tanya 💌</h1>

              <p>
                Out of all the gifts...
                <br />
                you found the one holding my heart.
              </p>

              <p>
                Thank you for always being there.
              </p>

              <p>
                Thank you for loving me.
              </p>

              <p>
                Thank you for making every day beautiful.
              </p>

              <p>
                No matter what happens,
                <br />
                I promise I'll always choose you.
              </p>

              <h2>❤️ I Love You ❤️</h2>

              <button
                className={styles.next}
                onClick={() => router.push("/page2")}
              >
                Continue ❤️
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
