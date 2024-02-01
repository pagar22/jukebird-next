import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Home Page 😎</h1>
      <Link href={"/campaigns"}>Campaigns</Link>
    </main>
  );
}
