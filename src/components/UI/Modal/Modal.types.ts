import { ReactNode } from "react"

export interface iModal {
    title: string
    onClose: () => void
    children: ReactNode
}