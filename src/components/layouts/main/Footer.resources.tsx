import { Link } from "@tanstack/react-router"

type FooterResourcesProps = {
    className?: string
}

export const FooterResources = ({className}: FooterResourcesProps) => {
  return (
    <div className={`${className??"text-center"}`}>
        <h4 className="text-(--v-gold) text-md font-semibold mb-6 uppercase tracking-wider md:text-xl">Resources</h4>
        <ul className="space-y-4 text-sm md:text-lg">
            <li><Link to="/content" className="hover:text-v-gold transition">Blog</Link></li>
            <li><Link to="/privacy" className="hover:text-v-gold transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-v-gold transition">Terms of Service</Link></li>
            <li><Link to="/sitemap.xml" className="hover:text-v-gold transition">Sitemap</Link></li>
        </ul>
        <br/>
    </div>
  )
}
