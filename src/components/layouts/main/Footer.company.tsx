import { Link } from "@tanstack/react-router"

type FooterCompanyProps = {
    className?: string
}

export const FooterCompany = ({className}: FooterCompanyProps) => {
  return (
    <div className={`${className??"text-center"}`}>
        <h4 className="text-(--v-gold) text-md font-semibold mb-6 uppercase tracking-wider md:text-xl">Company</h4>
        <ul className="space-y-4 text-sm md:text-lg">
            <li><Link to="/" className="hover:text-(--v-gold) transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-(--v-gold) transition">About</Link></li>
            <li><Link to="/services" className="hover:text-(--v-gold) transition">Services</Link></li>
            <li><Link to="/showcase" className="hover:text-(--v-gold) transition">Showcase</Link></li>
            <li><Link to="/toolbox" className="hover:text-(--v-gold) transition">Toolbox</Link></li>

        </ul>
        <br/>
    </div>
  )
}
