import Image from 'next/image'

const Icon = ({ iconName, size, className }) => {
  const iconUrl = `/icons/${iconName}.svg`

  return (
    <Image
      src={iconUrl}
      alt={iconName}
      width={size}
      height={size}
      className={className}
    />
  )
}

export default Icon
