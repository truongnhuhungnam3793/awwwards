import About from "~/components/About"
import Contact from "~/components/Contact"
import Features from "~/components/Features"
import Footer from "~/components/Footer"
import Hero from "~/components/Hero"
import Navbar from "~/components/Navbar"
import Story from "~/components/Story"
import type { Route } from "./+types/home"
import ReactLenis from "lenis/react"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Awwwards Winning Website 2024" },
    { name: "description", content: "Awwwards Winning Website 2024" },
  ]
}

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
