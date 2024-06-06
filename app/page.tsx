import About from "@/components/(sections)/About"
import Contact from "@/components/(sections)/Contact"
import Intro from "@/components/(sections)/Intro"
import Portfolio from "@/components/(sections)/Portfolio"
import PrimaryButton from "@/components/Buttons/PrimaryButton"
import Modal from "@/components/Modal"
import ThemeController from "@/components/ThemeController"

export default function Home() {
  return (
    <main>
      <Intro />

      <Portfolio />

      <About />

      <Contact />
    </main>
  )
}
