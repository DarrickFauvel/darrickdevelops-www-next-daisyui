import { PropsWithChildren } from "react"

export default function PrimaryButton({ children }: PropsWithChildren) {
  return <button className="btn btn-primary">{children}</button>
}
