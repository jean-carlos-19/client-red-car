import CustomButton from '@/atomic/components/shared/custom-buttom';
import CustomImage from '@/atomic/components/shared/custom-image';
import { images, types } from '@/constants';
import { CustomHeaderUserProps } from '@/types';
import { signOut } from 'next-auth/react';

export default function CustomHeaderUser(props: CustomHeaderUserProps) {
 return (
  <nav className="p-4 bg-helper flex-row-between-center flex-initial">
   <CustomButton
    type={types.button.default}
    text={'Salir'}
    variant={types.variant.button.primary}
    title={'Salir'}
    handlerPress={() => signOut()}
   />
   <h2 className="header-3 text-right"> {props.user} </h2>
   <CustomImage
    src={images.avatar.src}
    alt={images.avatar.alt}
    title={images.avatar.title}
    width={75}
    height={75}
   />
  </nav>
 );
}
