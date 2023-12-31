import { CustomButton, CustomInput } from '@/atomic/elements';
import { CustomLaboratoryFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { LaboratoryModel } from '@/mvc/models';
import { types, data } from '@/constants';
import { CustomLoading } from '.';
import React from 'react';

const { laboratory } = data.screens.dashboard.forms;

const CustomLaboratoryForm = (props: CustomLaboratoryFormProps) => {
 const { type } = props;
 if (props.isLoading && props.type === types.form.edit) {
  return <CustomLoading variant={types.loading.normal} />;
 }
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={props.validationSchema}
   initialValues={props.entity}
   onSubmit={(values: LaboratoryModel, formikHelpers: FormikHelpers<LaboratoryModel>) => {
    props.handlerSubmit(values);
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
