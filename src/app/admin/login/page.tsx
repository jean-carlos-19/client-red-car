'use client';
import { CustomLoading, CustomLoginForm, CustomMessageError } from '@/atomic/components';
import { useHeader, useRegisterController } from '@/hooks';
import { CustomModal } from '@/atomic/designs';
import { data, types } from '@/constants';
import { validate } from '@/validations';
import React from 'react';

const { secctions } = data.screens.login;

export default function Login() {
 const { target } = useHeader(secctions.names, false);
 const { modalSetting, existError, messageError, isLoading, count, handlerLogin } =
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
   <CustomLoginForm entity={count} validation={validate.login} hnalderSubmit={handlerLogin} />
  </div>
 );
}
