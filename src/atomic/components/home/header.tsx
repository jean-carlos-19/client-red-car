import CustomButton from '@/atomic/components/shared/custom-buttom';
import CustomImage from '@/atomic/components/shared/custom-image';
import CustomLink from '@/atomic/components/shared/custom-link';
import CustomHeader from '@/atomic/designs/custom-header';
import { theme } from '@/atomic/theme';
import { data, images, types } from '@/constants';

const { header } = data.screens.dashboard;
const { secctions } = data.screens.homepage;

export default function Header({ focus }: { focus: string }) {
 return (
  <header
   id={secctions.names.home}
   className="w-full p-4 bg-secondary flex-row-between-center flex-initial sticky top-0 z-10"
  >
    <CustomImage className='h-[50px] w-[50px]' src={images.redCar.src} width={images.redCar.width} height={images.redCar.height} alt={images.redCar.alt} title={images.redCar.title} />
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
