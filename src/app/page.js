import Image from "next/image";
import Hall from "@/components/Hall";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-wrap items-center justify-center gap-10">
      {/* <Image
      src="/logo.png"
      alt="logo"
      width={200}
      height={200}
      className=""
      ></Image> */}
      <h1 className="font-anonymous text-3xl font-bold">Welcome Players !</h1>
      <Hall/>
    </main>
  );
}
