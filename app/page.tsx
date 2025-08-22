import Link from "next/link";

export default function Home() {
  const muscles = ["bröst", "triceps", "axlar", "biceps", "rygg", "ben"];
  return (
    <>
      <main>
        <div>
          {muscles.map((muscle) => (
            <Link key={muscle} href={`/Muscle/${muscle}`}>
              <button>{muscle}</button>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
