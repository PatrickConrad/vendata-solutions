import { ReactNode } from "react"

export const ServiceModal = (props: { title: string, description: string|ReactNode}) => {
  return (
    <div>
        <h2>{props.title}</h2>
        {props.description}
    </div>
  )
}
