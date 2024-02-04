'use client';

import CustomButton from '@/atomic/elements/custom-buttom';
import { types } from '@/constants';
import { CustomInputProps } from '@/types';
import { useState } from 'react';

export default function CustomPassword(props: CustomInputProps) {
 const [isVisible, setIsVisible] = useState<boolean>(false);
 return (
  <div className={'field-form'}>
   {props.label && (
    <label htmlFor={props.id} className={'label-form'}>
     {props.label}
     <span className="text-rose-600">{`${props.isRequeried && props.isRequeried ? '*' : ''}`}</span>
    </label>
   )}
   <div className="flex-row-between-center">
    <input
     type={isVisible ? 'text' : 'password'}
     id={props.id}
     value={props.value === undefined ? '' : props.value}
     disabled={props.isDisable}
     className={'text-form'}
     onBlur={props.hanhandlerBlur}
     onChange={props.handlerChange}
     placeholder={props.placeholder}
    />
    <CustomButton
     title={isVisible ? 'Ocultar' : 'Mostrar'}
     type={types.button.icon}
     icon={isVisible ? types.icon.eye : types.icon.eyeOff}
     handlerPress={() => setIsVisible(!isVisible)}
    />
   </div>
   {props.validation && <p className="text-error-form">{props.messageError}</p>}
  </div>
 );
}
