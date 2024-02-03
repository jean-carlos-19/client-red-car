'use client';

import { CustomButton } from '@/atomic/elements';
import { styles } from '@/atomic/theme';
import { data, types } from '@/constants';
import { CustomDetailsProductProps } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

const { product } = data.screens.dashboard.details;

const CustomDetailsProduct = (props: CustomDetailsProductProps) => {
 const [position, setPosition] = useState<number>(0);
 const links = [props.data.features, props.data.summary, props.data.dosage];
 const handlerPosition = (i: number) => {
  setPosition(i);
 };
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
   <div className="p-4 flex-row-center-stretch bg-helper rounded-xl">
    <div className="flex-row-start-center">
     <Image
      className="rounded-full w-[7rem] h-[7rem] object-contain"
      src={String(props.data.photo)}
      alt={String(props.data.product)}
      width={150}
      height={150}
      style={styles.backgrounds.helper}
     />
     <h2 className="title-form"> {props.data.product} </h2>
    </div>
    <div className="flex-col-center-end">
     <p className="color-helper  font-semibold p-4 rounded-xl bg-primary">
      {props.data.laboratory}
     </p>
     <p className="color-helper  font-semibold p-4 rounded-xl bg-primary">{props.data.category}</p>
    </div>
   </div>
   <section className="p-4 w-full flex-col-stretch-start bg-helper rounded-xl">
    <ul className="w-full flex-row-start-center">
     {product.map((detail, i) => (
      <CustomButton
       key={i}
       type={types.button.default}
       text={detail}
       title={detail}
       variant={position === i ? types.variant.button.primary : types.variant.button.secondary}
       handlerPress={() => handlerPosition(i)}
      />
     ))}
    </ul>
    <p className="p-4 w-full rounded-xl text-xl bg-secondary  text-slate-700 f-r-b-s">
     {links[position]}
    </p>
   </section>
  </section>
 );
};

export { CustomDetailsProduct };
