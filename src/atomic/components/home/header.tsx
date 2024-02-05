'use client';
import CustomHeader from '@/atomic/designs/custom-header';
import CustomButton from '@/atomic/elements/custom-buttom';
import { theme } from '@/atomic/theme';
import { data, images, types } from '@/constants';
import { useHeader } from '@/hooks';
import Image from 'next/image';

const { header } = data.screens.dashboard;
const { secctions } = data.screens.homepage;

export default function Header() {
 const { headers, target, handlerTarger } = useHeader(secctions.headers, true);
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
   <div className="hidden md:block lg:block flex-1">
    <CustomHeader list={headers} target={target} hanlderTarget={handlerTarger} />
   </div>
  </header>
 );
}
