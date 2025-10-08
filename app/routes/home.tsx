import Hero from "~/components/Hero"
import type { Route } from "./+types/home"
import About from "~/components/About"

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
      <About />
    </main>
  )
}
