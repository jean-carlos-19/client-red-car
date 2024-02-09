'use client';

import { authentication } from '@/actions/user';
import CustomButton from '@/atomic/components/shared/custom-buttom';
import CustomInput from '@/atomic/components/shared/custom-input';
import CustomPassword from '@/atomic/components/shared/custom-password';
import { data, images, types } from '@/constants';
import { useAuth } from '@/hooks';
import { validate } from '@/validations';
import { Formik, FormikHelpers } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const { forms } = data.screens.login;

export default function CustomLoginForm() {
 const { loginEntity } = useAuth();
 const route = useRouter();
 const handlerPage = () => {
  route.push('/admin/register');
 };

 return (
  <Formik
   enableReinitialize={true}
   validationSchema={validate.login}
   initialValues={loginEntity}
   onSubmit={async (values: LoginModel, formikHelpers: FormikHelpers<LoginModel>) => {
    formikHelpers.resetForm();
    const data = await authentication(values);
    if (data) toast.error(data);
   }}
  >
   {(props) => {
    return (
     <section className="flex-row-start-stretch relative">
      <section className="w-[50%] bg-form basis-full p-8 flex-col-start-stretch rounded-lg">
       <header>
        <h2 className="title-form"> {forms.login.titles.create} </h2>
       </header>

       <Image
        className='self-center'
        src={images.avatar.src}
        alt={images.avatar.alt}
        title={images.avatar.title}
        width={150}
        height={150}
       />

       {/* user  */}
       <CustomInput
        isRequeried
        isDisable={false}
        value={props.values.user}
        id={forms.login.fields.user.id}
        messageError={props.errors.user}
        label={forms.login.fields.user.label}
        placeholder={forms.login.fields.user.placeholder}
        validation={props.errors.user && props.touched.user}
        hanhandlerBlur={props.handleBlur(forms.login.fields.user.id)}
        handlerChange={props.handleChange(forms.login.fields.user.id)}
       />

       {/* password  */}
       <CustomPassword
        isRequeried
        isDisable={false}
        value={props.values.password}
        id={forms.login.fields.password.id}
        messageError={props.errors.password}
        label={forms.login.fields.password.label}
        placeholder={forms.login.fields.password.placeholder}
        validation={props.errors.password && props.touched.password}
        hanhandlerBlur={props.handleBlur(forms.login.fields.password.id)}
        handlerChange={props.handleChange(forms.login.fields.password.id)}
       />

       {/* button login  */}
       <CustomButton
        isDisable={!props.isValid}
        type={types.button.default}
        variant={types.variant.button.primary}
        text={forms.login.buttons.create.primary}
        title={forms.login.buttons.create.primary}
        handlerPress={props.handleSubmit}
       />
       <p className="default-text-bold">o</p>
       {/* button register  */}
       <CustomButton
        type={types.button.default}
        variant={types.variant.button.secondary}
        text={forms.login.buttons.register.primary}
        title={forms.login.buttons.register.primary}
        handlerPress={handlerPage}
       />
      </section>
     </section>
    );
   }}
  </Formik>
 );
}
