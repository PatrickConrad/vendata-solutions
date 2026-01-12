import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type FontAwesomeIconProps = {
    icon: IconDefinition,
    color?: 'var(--v-navy)'|'var(--v-gold)'|'var(--v-green)'|'white'
}

export const ServiceIcon = ({icon, color}: FontAwesomeIconProps) => {
  return (
    <FontAwesomeIcon icon={icon} size='xl' style={{
      color: `${color??'var(--v-icon)'}`,
    }}/>
  )
}
