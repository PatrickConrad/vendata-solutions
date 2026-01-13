import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

type FontAwesomeIconProps = {
    icon: IconDefinition,
    color?: 'var(--v-icon)'|'var(--v-navy)'|'var(--v-gold)'|'var(--v-green)'|'white'
    hover?: 'var(--v-icon)'|'var(--v-navy)'|'var(--v-gold)'|'var(--v-green)'|'white'
}

export const ServiceIcon = ({ icon, color, hover }: FontAwesomeIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultColor = color ?? 'var(--v-icon)';
  const hoverColor = hover ?? 'var(--v-gold)';

  return (
    <FontAwesomeIcon 
      icon={icon} 
      size='xl' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? hoverColor : defaultColor,
        transition: 'color 0.2s ease-in-out', // Smooth color change
        cursor: isHovered ? 'pointer' : 'default'
      }}
    />
  )
}