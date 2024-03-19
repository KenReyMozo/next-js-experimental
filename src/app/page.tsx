import Link from "next/link";

const App = () => {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href={"home"}>
          Home
        </Link>
      </main>
  );
}

export default App;
