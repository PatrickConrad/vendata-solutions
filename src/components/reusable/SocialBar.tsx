import { ServiceIcon } from "../services/ServiceIcon";



const socialIcons = {
    linkedin: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.2c0-1.95-.03-4.45-2.71-4.45-2.71 0-3.13 2.12-3.13 4.3V24h-4V8z"/>
        </svg>
    ),
    facebook: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.765v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z"/>
        </svg>
    ),
    instagram: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
        </svg>
    ),

    youtube: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M23.498 6.186a3.01 3.01 0 0 0-2.12-2.13C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.378.556a3.01 3.01 0 0 0-2.12 2.13C0 8.06 0 12 0 12s0 3.94.502 5.814a3.01 3.01 0 0 0 2.12 2.13C4.495 20.5 12 20.5 12 20.5s7.505 0 9.378-.556a3.01 3.01 0 0 0 2.12-2.13C24 15.94 24 12 24 12s0-3.94-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
        </svg>
    )
}

type SocialBarProps = {
    className?: string,
    linkClassNames?: string
}
export function SocialBar({className, linkClassNames}: SocialBarProps) {
  return (
    <div className={`px-10 w-full justify-center align-middle gap-10 ${className}`}>
      <a className={`${linkClassNames??'py-3 text-(--v-gold) flex justify-center'}`} href="https://linkedin.com/company/vendata-solutions" target="_blank">{socialIcons.linkedin}</a>
      <a className={`${linkClassNames??'py-3 text-(--v-gold) flex justify-center'}`} href="https://www.instagram.com/vendata_solutions/" target="_blank">{socialIcons.instagram}</a>
      <a className={`${linkClassNames??'py-3 text-(--v-gold) flex justify-center'}`} href="https://www.facebook.com/profile.php?id=61586272962924" target="_blank">{socialIcons.facebook}</a>
      <a className={`${linkClassNames??'py-3 text-(--v-gold) flex justify-center'}`} href="https://www.youtube.com/@VendataSolutions" target="_blank">{socialIcons.youtube}</a>
    </div>
  )
}
