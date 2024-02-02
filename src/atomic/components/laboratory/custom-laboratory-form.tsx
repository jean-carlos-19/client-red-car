'use client';
import { CustomButton, CustomInput } from '@/atomic/elements';
import { data, types } from '@/constants';
import { useLaboratory } from '@/hooks/use-laboratory';
import { CustomLaboratoryFormProps } from '@/types';
import { validate } from '@/validations';
import { Formik, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';

const { laboratory } = data.screens.dashboard.forms;

const CustomLaboratoryForm = ({ type, send }: CustomLaboratoryFormProps) => {
 const { laboratoryEntity } = useLaboratory();
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={validate.laboratory}
   initialValues={laboratoryEntity}
   onSubmit={async (values: LaboratoryModel, formikHelpers: FormikHelpers<LaboratoryModel>) => {
    const { id, message } = await send(values);
    if (id === types.respone.error) toast.error(message);
    if (id === types.respone.notFound) toast.error(message);
    if (id === types.respone.success) toast.success(message);
    formikHelpers.resetForm();
   }}
  >
   {(props) => {
    return (
     <section className="bg-form p-8 basis-full flex-col-start-stretch rounded-lg">
      <header>
       <h2 className="title-form">
        {type === types.form.create ? laboratory.titles.create : laboratory.titles.edit}
       </h2>
      </header>
      {/* input laboratory  */}
      <CustomInput
       isRequeried
       id={laboratory.fields.laboratory.id}
       isDisable={false}
       label={laboratory.fields.laboratory.label}
       placeholder={laboratory.fields.laboratory.placeholder}
       value={props.values.laboratory}
       handlerChange={props.handleChange('laboratory')}
       hanhandlerBlur={props.handleBlur('laboratory')}
       validation={props.errors.laboratory && props.touched.laboratory}
       messageError={props.errors.laboratory}
      />
      {/* button create or edit*/}
      <CustomButton
       type={types.button.default}
       title={
        type === types.form.create
         ? laboratory.buttons.create.primary
         : laboratory.buttons.edit.primary
       }
       text={
        type === types.form.create
         ? laboratory.buttons.create.primary
         : laboratory.buttons.edit.primary
       }
       isDisable={!props.isValid}
       variant={types.variant.button.primary}
       handlerPress={props.handleSubmit}
      />
      {/* button secondary  */}
      <CustomButton
       title={laboratory.buttons.secundary}
       text={laboratory.buttons.secundary}
       type={types.button.default}
       isDisable={false}
       variant={types.variant.button.secondary}
       handlerPress={props.resetForm}
      />
     </section>
    );
   }}
  </Formik>
 );
};

export { CustomLaboratoryForm };
