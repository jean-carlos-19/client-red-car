import { findCategory } from '@/actions/categories';
import CustomButton from '@/atomic/elements/custom-buttom';
import { styles } from '@/atomic/theme';
import { types } from '@/constants';
import { CustomDetailsCategoryProps } from '@/types';
import Image from 'next/image';

export default async function CustomDetailsCategory({
 id,
 handlerClose,
}: CustomDetailsCategoryProps) {
 const { category, photo } = await findCategory(id);
 return (
  <section className="flex-col-stretch-stretch">
   <CustomButton
    title="Cerrar"
    type={types.button.icon}
    className="self-center"
    icon={types.icon.close}
    handlerPress={handlerClose}
   />
   <div className="flex-col-center-center">
    <Image
     className="rounded-full w-[15rem] h-[15rem] object-contain"
     src={String(photo)}
     alt={String(category)}
     width={150}
     height={150}
     style={styles.backgrounds.helper}
    />
    <h2 className="title-form"> {category} </h2>
   </div>
  </section>
 );
}
