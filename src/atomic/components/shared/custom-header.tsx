import { theme } from '@/atomic/theme'
import { images, types } from '@/constants'
import Image from 'next/image'
import CustomLink from './custom-link'

export default function CustomHeader({title}:{title:string}) {
  return (
    <header className="w-full p-4 bg-primary flex-row-between-center lg:px-[5rem]">
    <CustomLink title={'regresar'} type={types.button.icon} icon={types.icon.goBack} url={'/'} />
    <h1 className="header-2 color-secondary" style={{ color: theme.white }}>
     {title}
    </h1>
    <Image
     src={images.redCar.src}
     width={50}
     height={50}
     alt={images.redCar.alt}
     title={images.redCar.title}
    />
   </header>
  )
}
