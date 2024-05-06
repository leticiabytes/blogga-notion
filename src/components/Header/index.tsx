import { Nav } from "@/components/Nav";

export function Header() {
  return (
    <div className=" bg-sky-950 h-[555px] rounded-xl">
      <Nav />

      <div className="flex flex-col text-white justify-center p-6 max-w-[970px] mt-44 mx-auto">
        <p className="text-base font-semibold">👋 HELLO</p>

        <h1 className="text-5xl font-bold mt-6 tracking-[-1.56px]">
          Insights about my personal and work life, and the in-betweens
        </h1>
      </div>
    </div>
  );
}
