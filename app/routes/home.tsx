import Hero from "~/components/Hero"
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Awwwards Winning Website 2024" },
    { name: "description", content: "Awwwards Winning Website 2024" },
  ]
}

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  )
}
