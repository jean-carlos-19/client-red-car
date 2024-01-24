import { CustomButton } from '@/atomic/elements';
import { styles } from '@/atomic/theme';
import { types } from '@/constants';
import { CustomDetailsCategoryProps } from '@/types';
import Image from 'next/image';

const CustomDetailsCategory = (props: CustomDetailsCategoryProps) => {
 return (
  <section className="flex-col-stretch-stretch">
   {props.handlerClose && (
    <CustomButton
     title="Cerrar"
     type={types.button.icon}
     className="self-center"
     icon={types.icon.close}
     handlerPress={props.handlerClose}
    />
   )}
   <div className="flex-col-center-center">
    <Image
     className="rounded-full w-[15rem] h-[15rem] object-contain"
     src={String(props.data.photo)}
     alt={String(props.data.category)}
     width={150}
     height={150}
     style={styles.backgrounds.helper}
    />
    <h2 className="title-form"> {props.data.category} </h2>
   </div>
  </section>
 );
};

export { CustomDetailsCategory };
