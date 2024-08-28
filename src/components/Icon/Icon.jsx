import Image from 'next/image'

const Icon = ({ iconName, size }) => {
  const iconUrl = `/icons/${iconName}.svg`

  return (
    <Image
      src={iconUrl}
      alt={iconName}
      width={size}
      height={size}
    />
  )
}

export default Icon
