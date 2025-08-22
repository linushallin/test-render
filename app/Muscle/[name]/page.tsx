"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MusclePage({ params }: { params: { name: string } }) {
  const { name } = params;
  const decodedName = decodeURIComponent(name);
  const storageKey = `logs-${decodedName}`;

  // Initiera list direkt från localStorage
  const [list, setList] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [info, setInfo] = useState("");

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!info.trim()) return;
    setList([...list, info]);
    setInfo("");
  };

  // Spara listan i localStorage varje gång den ändras
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(list));
  }, [list, storageKey]);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{decodedName}</h1>
      <Link href="/">Hem</Link>

      <ul style={{ marginTop: "1rem" }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleForm} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="INFO"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Spara
        </button>
      </form>
    </main>
  );
}
