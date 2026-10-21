"use client"

import LycorisSpecimen from "@/components/ui/lycoris-specimen"

export default function Page() {
  return (
    <main className="w-full bg-[#120805]">
      <h1 className="sr-only">Ranandra (Raisah Kirana Candra), web developer</h1>
      <div className="sr-only">
        <p>
          I build fast, clear interfaces with Next.js, React, Vue, Tailwind CSS and WebGL, and I study electrical
          engineering.
        </p>
        <ul>
          <li>
            <a href="https://amg-sync-bstartion.vercel.app/login">AMG Sync, a decision platform concept built for a business competition</a>
          </li>
          <li>
            <a href="https://raiyey-gif.github.io/QuickDinner-WebAssembly/">QuickDinner, a restaurant reservation demo with 40 seats and time slots</a>
          </li>
          <li>
            <a href="https://github.com/Raiyey-gif">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ranandra/">LinkedIn</a>
          </li>
        </ul>
      </div>
      <LycorisSpecimen
        flower="#1f4fe0"
        ink="#120805"
        bone="#f1e3cc"
        royalblue="#1e48df"
        fontHref={null}
        fontFamily={'var(--font-federant), "Iowan Old Style", "Palatino Linotype", Georgia, serif'}
      />
    </main>
  )
}
