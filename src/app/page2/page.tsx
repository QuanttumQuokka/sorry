"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const messages = [
  "Checking smile...",
  "Scanning for cuteness...",
  "Analyzing your charm 😌",
  "Collecting heart data 💗",
  "Almost done...",
];

export default function Page2() {
  const [step, setStep] = useState(0);
  const [showReceipt, setShowReceipt] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    messages.forEach((_, index) => {
      if (index === 0) return;
      timers.push(
        setTimeout(() => {
          setStep(index);
        }, index * 1100)
      );
    });

    timers.push(
      setTimeout(() => {
        setShowReceipt(true);
      }, 5000)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.bgGlowOne}></div>
      <div className={styles.bgGlowTwo}></div>

      {!showReceipt ? (
        <section className={styles.scanSection}>
          <div className={styles.scanner}>
            <div className={styles.ring}></div>
            <div className={styles.ring2}></div>
            <div className={styles.ring3}></div>
            <div className={styles.scan}></div>
            <div className={styles.center}>
              <span className={styles.heart}>❤️</span>
            </div>
          </div>

          <h1 className={styles.heading}>Love Scanner</h1>
          <p className={styles.text}>{messages[step]}</p>
          <p className={styles.subtext}>Please wait while your beauty is being processed...</p>
        </section>
      ) : (
        <section className={styles.receiptWrap}>
          <div className={styles.receipt}>
            <div className={styles.receiptTop}>
              <p className={styles.small}>OFFICIAL LOVE REPORT</p>
              <h2>Scan Complete 💌</h2>
            </div>

            <div className={styles.row}>
              <span>ITEM</span>
              <span>YOU</span>
            </div>
            <div className={styles.row}>
              <span>CUTENESS</span>
              <span>UNLIMITED</span>
            </div>
            <div className={styles.row}>
              <span>SWEETNESS</span>
              <span>OVERLOAD</span>
            </div>
            <div className={styles.row}>
              <span>SMILE</span>
              <span>DANGEROUSLY PRETTY</span>
            </div>
            <div className={styles.row}>
              <span>VIBE</span>
              <span>PERFECT</span>
            </div>

            <div className={styles.dashed}></div>

            <h3 className={styles.total}>TOTAL: 100% LOVELY ❤️</h3>

            <p className={styles.footerText}>
              Result confirmed: you officially make everything prettier.
            </p>

            <button
              type="button"
              className={styles.button}
              onClick={() => router.push("/page3")}
            >
              Continue →
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
