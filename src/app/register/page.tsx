'use client';
import { CustomLoading, CustomMessageError, CustomRegisterForm } from '@/atomic/components';
import { useHeader, useRegisterController } from '@/hooks';
import { CustomModal } from '@/atomic/designs';
import { validate } from '@/validations';
import { data, types } from '@/constants';
import React from 'react';

const { secctions } = data.screens.login;

export default function Register() {
 const { target } = useHeader(secctions.names, false);
 const { register, isLoading, existError, modalSetting, messageError, handlerCreate } =
  useRegisterController(secctions.names[target].name);

 /* modal */
 if (modalSetting.isActivate) {
  return (
   <div className="windowSecundary">
    <div className="w-[90%] lg:w-[50%]">
     <CustomModal setting={modalSetting} />
    </div>
   </div>
  );
 }

 /* error */
 if (existError) return <CustomMessageError message={messageError} />;

 if (isLoading) return <CustomLoading variant={types.loading.normal} />;

 return (
  <div className="w-full h-screen bg-helper flex-col-center-center">
   <CustomRegisterForm
    entity={register}
    validation={validate.login}
    hnalderSubmit={handlerCreate}
   />
  </div>
 );
}
