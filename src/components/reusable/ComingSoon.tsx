import { Link } from "@tanstack/react-router";
import { Divider } from "./Divider";

export function ComingSoon() {
  return (
      <div className="max-w-3xl text-center space-y-10">
        
       

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-v-navy dark:text-white leading-tight">
          Something Powerful is <span className="text-v-gold">Coming Soon</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          We’re building a smarter, faster, and more powerful experience for businesses
          who want technology that actually works for them.
        </p>

        {/* Divider */}
        <Divider />

        
          {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/nb-logo-w-text.png"
            alt="Vendata Solutions"
            className="h-25 md:h-40"
          />
        </div>

        {/* CTA */}
        <p className="text-slate-500 dark:text-slate-400">
          Want early access or updates?
        </p>

        {/* <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg btn-gold"
        >
          Contact Us
        </Link> */}
      </div>
  )
}
