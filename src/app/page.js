import Image from "next/image";
import styles from "./page.module.css";
import ChatBox from "./chatbox";
import StockDetails from "./stock_details";
import RelevantNews from "./relevant_news";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div>
//         <h1 className={styles.header}>Duddiddavane doddappa</h1>
//       </div>
//       <div className={styles.grid_main_horizontal}>
//         <ChatBox />
//         <div className={styles.grid_main_vertical}>
//           <StockDetails />
//           <RelevantNews />
//         </div>
//       </div>

//       {/* <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div> */}
//     </main>
//   );
// }

export default function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
      <div className={styles.mainContent}>
        <div className={styles.chatBox}>
          <h2>Chat Box</h2>
          {/* Chat box content goes here */}
          <ChatBox />
        </div>
        <div className={styles.rightSection}>
          <div className={`${styles.box} ${styles.topBox}`}>
            <h2>Top Box</h2>
            {/* Top box content goes here */}
          </div>
          <div className={`${styles.box} ${styles.bottomBox}`}>
            <h2>Bottom Box</h2>
            {/* Bottom box content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}
