import CustomHeader from '@/atomic/designs/custom-header';
import CustomButton from '@/atomic/elements/custom-buttom';
import CustomLink from '@/atomic/elements/custom-link';
import { theme } from '@/atomic/theme';
import { data, images, types } from '@/constants';
import Image from 'next/image';

const { header } = data.screens.dashboard;
const { secctions } = data.screens.homepage;

export default function Header({ focus }: { focus: string }) {
 return (
  <header
   id={secctions.names.home}
   className="w-full p-4 bg-secondary flex-row-between-center flex-initial sticky top-0 z-10"
  >
   <Image src={images.redCar.src} width={50} height={50} alt="" />
   <h1 className="header-2" style={{ color: theme.gray }}>
    {header.title}
   </h1>
   <div className="lg:hidden">
    <CustomButton title={header.button} type={types.button.icon} icon={types.icon.menu} url={''} />
   </div>
   <div className="hidden md:block lg:block flex-1 lg:flex">
    <CustomHeader focus={focus} headers={['inicio', 'productos', 'quienes somos', 'contactanos']} />
    <CustomLink
     title={'Entrar'}
     text="Entrar"
     type={types.button.default}
     variant={types.variant.button.primary}
     url="/admin/login"
    />
   </div>
  </header>
 );
}
