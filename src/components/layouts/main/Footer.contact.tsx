import { Link } from "@tanstack/react-router"

type FooterContactProps = {
    className?: string
}

export const FooterContact = ({className}: FooterContactProps) => {
  return (
    <div className={`${className??"w-full text-center"}`}>
        <h4 className="text-(--v-gold) text-md font-semibold mb-6 uppercase tracking-wider md:text-xl">Contact</h4>
        <p className="text-sm md:text-lg leading-relaxed">
        Ready to scale?<br />
        <Link to="/consultation" className="text-v-gold hover:underline font-medium">
            Schedule a strategy call
        </Link>
        </p>
    </div>
  )
}
