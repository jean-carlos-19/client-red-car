import { CustomButton, CustomInput, CustomPoster } from '@/atomic/elements';
import { data, types } from '@/constants';
import { usePoster } from '@/hooks';
import { useCategory } from '@/hooks/use-category';
import { CustomCategoryFormProps } from '@/types';
import { validate } from '@/validations';
import { Formik, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { CustomDetailsCategory } from '..';

const { category } = data.screens.dashboard.forms;

const CustomCategoryForm = (props: CustomCategoryFormProps) => {
 const { type } = props;
 const { urlImage, handlerPoster } = usePoster();
 const { categoryEntity } = useCategory();
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={validate.category}
   initialValues={categoryEntity}
   onSubmit={async (values: CategoryModel, formikHelpers: FormikHelpers<CategoryModel>) => {
    formikHelpers.resetForm();
    const { data, error } = await props.send(values);
    if (error) toast.error(error);
    if (data?.id === types.respone.error) toast.error(data.message);
    if (data?.id === types.respone.notFound) toast.error(data.message);
    if (data?.id === types.respone.success) toast.success(data.message);
   }}
  >
   {(props) => {
    if (props.values.photo) handlerPoster(props.values.photo);
    return (
     <section className="flex-row-start-stretch relative">
      <section className="w-[50%] bg-form basis-full p-8 flex-col-start-stretch rounded-lg">
       <header>
        <h2 className="title-form">
         {type === types.form.create ? category.titles.create : category.titles.edit}
        </h2>
       </header>
       {/* Poster */}
       <CustomPoster
        label={category.fields.photo.label}
        id={'photo'}
        type={types.form.create}
        value={props.values.photo}
        handlerChange={(e) => {
         props.setFieldValue('photo', e.target.files![0]);
        }}
        urlImage={String(urlImage)}
        hanhandlerBlur={props.handleBlur('photo')}
        validation={props.errors.photo && props.touched.photo}
        messageError={props.errors.photo}
       />
       {/* Category  */}
       <CustomInput
        isRequeried
        isDisable={false}
        value={props.values.category}
        id={category.fields.category.id}
        messageError={props.errors.category}
        label={category.fields.category.label}
        placeholder={category.fields.category.placeholder}
        validation={props.errors.category && props.touched.category}
        hanhandlerBlur={props.handleBlur('category')}
        handlerChange={props.handleChange('category')}
       />
       {/* button create or edit  */}
       <CustomButton
        type={types.button.default}
        isDisable={!props.isValid}
        variant={types.variant.button.primary}
        text={
         type === types.form.create
          ? category.buttons.create.primary
          : category.buttons.edit.primary
        }
        title={
         type === types.form.create
          ? category.buttons.create.primary
          : category.buttons.edit.primary
        }
        handlerPress={props.handleSubmit}
       />
       {/* button secondary */}
       <CustomButton
        isDisable={false}
        type={types.button.default}
        text={category.buttons.secundary}
        title={category.buttons.secundary}
        variant={types.variant.button.secondary}
        handlerPress={props.resetForm}
       />
      </section>
      {type === types.form.edit && props.values.photo && (
       <section className="p-8 w-[50%]">
        <h1 className="title-form">{category.titles.detail}</h1>
        <CustomDetailsCategory
         data={{
          photo: String(urlImage),
          id_category: String(props.values.id),
          idphoto: String(props.values.idphoto),
          category: String(props.values.category),
         }}
         isLoading={false}
        />
       </section>
      )}
     </section>
    );
   }}
  </Formik>
 );
};

export { CustomCategoryForm };
