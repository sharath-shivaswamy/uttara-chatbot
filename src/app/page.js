"use client";
import styles from "../styles/page.module.css";
import ChatBox from "../components/chatbox";
import StockDetails from "../components/stock_details";
import RelevantNews from "../components/relevant_news";

export default function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Uttara financial analysis</h1>
      </header>
      <div className={styles.mainContent}>
        <div className={styles.chatBox}>
          {/* <h2>Chat Box</h2> */}
          {/* Chat box content goes here */}
          <ChatBox />
        </div>
        <div className={styles.rightSection}>
          <div className={`${styles.box} ${styles.topBox}`}>
            {/* <h2>Top Box</h2> */}
            {/* Top box content goes here */}
            <StockDetails />
          </div>
          <div className={`${styles.box} ${styles.bottomBox}`}>
            {/* <h2>Bottom Box</h2> */}
            {/* Bottom box content goes here */}
            <RelevantNews />
          </div>
        </div>
      </div>
    </div>
  );
}
