"use client";
import React, { useState } from "react";
import styles from "../styles/chatbox.module.css";

export default function ChatBox() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.app}>
      {/* <header className={styles.header}>
        <h1>Chat Page</h1>
      </header> */}
      <div className={styles.mainContent}>
        <div className={styles.chatBox}>
          <h2>Research company</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <textarea
              value={inputValue}
              placeholder="Message Uttara"
              onChange={(e) => setInputValue(e.target.value)}
              rows={2}
              className={styles.textArea}
            />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
          <div className={styles.readOnlyOutput}>
            <h3>Output:</h3>
            <pre>{submittedValue}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
