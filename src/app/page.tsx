import Board from "@/components/Board";

export default function Home() {
  return (
    <div>
      <header>
        <div className="p-12 md:p-20 text-3xl md:text-6xl text-gray-700 font-semibold text-center">
          WHACK A MOLE
        </div>
      </header>
      <Board size={9} />
    </div>
  );
}
