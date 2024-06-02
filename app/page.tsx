import PrimaryButton from "@/components/Buttons/PrimaryButton"
import Modal from "@/components/Modal"
import ThemeController from "@/components/ThemeController"

export default function Home() {
  return (
    <main className="">
      <h1>Darrick Develops</h1>

      <ThemeController />

      <PrimaryButton>Primary Button</PrimaryButton>

      <Modal />
    </main>
  )
}
