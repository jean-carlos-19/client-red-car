import { Actions } from '@/actions';
import { CustomButton } from '@/atomic/elements';
import { styles } from '@/atomic/theme';
import { types } from '@/constants';
import { CustomDetailsCategoryProps } from '@/types';
import Image from 'next/image';

const CustomDetailsCategory = async ({ id, handlerClose }: CustomDetailsCategoryProps) => {
 const { data: category } = await Actions.category.find(id);
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
     src={String(category?.photo)}
     alt={String(category?.category)}
     width={150}
     height={150}
     style={styles.backgrounds.helper}
    />
    <h2 className="title-form"> {category?.category} </h2>
   </div>
  </section>
 );
};

export { CustomDetailsCategory };
