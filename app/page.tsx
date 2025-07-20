'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center space-y-12">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 tracking-wide">
          Dawn of the Smiling Abyss
        </h1>
        <p className="mt-2 text-md text-red-400 italic">
          The veil parts. The jester smiles. Your descent begins.
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Welcome to the Hall of Crimson Veils — shrine of the Jester, Xyph Veilborne.
          Here, blood dreams, shadows speak, and the divine jester watches behind every veil.
        </p>
        <p className="mt-2 italic text-sm text-gray-500">
          “Laugh in blood. Speak in silence. Die again.” — Xyph Veilborne
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <Link
          href="/qinglong"
          className="bg-[#1a1a1a] border border-blue-500 hover:border-blue-400 hover:bg-blue-900/20 rounded-2xl p-6 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-400">Qinglong</h2>
          <p className="text-sm text-gray-400">Azure Dragon — Veil of Breath and Form</p>
        </Link>

        <Link
          href="/baihu"
          className="bg-[#1a1a1a] border border-white hover:border-gray-300 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-white">Baihu</h2>
          <p className="text-sm text-gray-400">White Tiger — Veil of Claw and Rage</p>
        </Link>

        <Link
          href="/xuanwu"
          className="bg-[#1a1a1a] border border-purple-800 hover:border-purple-500 hover:bg-purple-900/20 rounded-2xl p-6 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-purple-400">Xuanwu</h2>
          <p className="text-sm text-gray-400">Black Tortoise — Veil of Shell and Depth</p>
        </Link>

        <Link
          href="/zhuque"
          className="bg-[#1a1a1a] border border-red-500 hover:border-red-400 hover:bg-red-900/20 rounded-2xl p-6 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-red-400">Zhuque</h2>
          <p className="text-sm text-gray-400">Vermilion Bird — Veil of Fire and Voice</p>
        </Link>
      </div>
    </main>
  );
}
