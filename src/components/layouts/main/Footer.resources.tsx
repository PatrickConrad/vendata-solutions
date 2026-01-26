import { Link } from "@tanstack/react-router"

type FooterResourcesProps = {
    className?: string
}

export const FooterResources = ({className}: FooterResourcesProps) => {
  return (
    <div className={`${className??"text-center"}`}>
        <h4 className="text-(--v-gold) text-md font-semibold mb-6 uppercase tracking-wider md:text-xl">Resources</h4>
        <ul className="space-y-4 text-sm md:text-lg">
            <li><Link to="/services/pricing-policy" className="hover:text-(--v-gold) transition">Pricing Policy</Link></li>
            <li><Link to="/terms" className="hover:text-(--v-gold) transition">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-(--v-gold) transition">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-(--v-gold) transition">Contact</Link></li>
            <li><Link to="/intel" className="hover:text-(--v-gold) transition">Intel</Link></li>
        </ul>
        <br/>
    </div>
  )
}
