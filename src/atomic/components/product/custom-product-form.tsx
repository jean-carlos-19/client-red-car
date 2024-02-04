import CustomDetailsProduct from '@/atomic/components/product/custom-details-product';
import CustomSelect from '@/atomic/components/shared/custom-select';
import CustomButton from '@/atomic/elements/custom-buttom';
import CustomInput from '@/atomic/elements/custom-input';
import CustomPoster from '@/atomic/elements/custom-poster';
import CustomTextArea from '@/atomic/elements/custom-text-area';
import { data, types } from '@/constants';
import { usePoster, useProgressBar } from '@/hooks';
import { useProduct } from '@/hooks/use-product';
import { CustomProductFormProps } from '@/types';
import { validate } from '@/validations';
import { Formik, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import CustomProgressBar from '../shared/custom-progres-bar';

const { products } = data.screens.dashboard.forms;

export default function CustomProductForm({
 send,
 type,
 categories,
 laboratories,
}: CustomProductFormProps) {
 const { items, position, handlerPosition } = useProgressBar(4);
 const { productEntity } = useProduct();
 const { urlImage, handlerPoster } = usePoster();

 return (
  <Formik
   enableReinitialize={true}
   validationSchema={validate.product}
   initialValues={productEntity}
   onSubmit={async (values: ProductModel, formikHelpers: FormikHelpers<ProductModel>) => {
    const { id, message } = await send(values);
    if (id === types.respone.error) toast.error(message);
    if (id === types.respone.notFound) toast.error(message);
    if (id === types.respone.success) toast.success(message);
    formikHelpers.resetForm();
   }}
  >
   {(props) => {
    if (props.values.photo) handlerPoster(props.values.photo);
    return (
     <section className="flex-row-start-stretch relative">
      <section className="w-[50%] flex-col-start-stretch bg-form p-8 basis-full rounded-lg">
       <CustomProgressBar items={items} handlerItem={handlerPosition} posiition={position} />
       <header>
        <h2 className="title-form">
         {type === types.form.create ? products.titles.create : products.titles.edit}{' '}
        </h2>
       </header>
       {position === 0 && (
        <>
         <CustomSelect
          isRequeried
          data={categories}
          value={props.values.category}
          id={products.fields.category.id}
          label={products.fields.category.label}
          handlerChange={(value) => {
           props.setFieldValue(products.fields.category.id, value);
          }}
         />
         <CustomSelect
          isRequeried
          data={laboratories}
          value={props.values.laboratory}
          id={products.fields.laboratory.id}
          label={products.fields.laboratory.label}
          handlerChange={(value) => {
           props.setFieldValue(products.fields.laboratory.id, value);
          }}
         />
         <CustomInput
          isRequeried
          isDisable={false}
          value={props.values.product}
          id={products.fields.product.id}
          messageError={props.errors.product}
          label={products.fields.product.label}
          placeholder={products.fields.product.placeholder}
          validation={props.errors.product && props.touched.product}
          handlerChange={props.handleChange('product')}
          hanhandlerBlur={props.handleBlur('product')}
         />
         <CustomButton
          isDisable={false}
          text={'Siguiente'}
          title={'Siguiente'}
          type={types.button.default}
          variant={types.variant.button.primary}
          handlerPress={() => handlerPosition(1)}
         />
        </>
       )}

       {position === 1 && (
        <>
         <CustomInput
          isDisable={false}
          value={props.values.barcode}
          id={products.fields.barcode.id}
          messageError={props.errors.barcode}
          label={products.fields.barcode.label}
          placeholder={products.fields.barcode.placeholder}
          validation={props.errors.barcode && props.touched.barcode}
          handlerChange={props.handleChange('barcode')}
          hanhandlerBlur={props.handleBlur('barcode')}
         />
         <CustomTextArea
          isRequeried
          isDisable={false}
          value={props.values.features}
          id={products.fields.features.id}
          label={products.fields.features.label}
          placeholder={products.fields.features.placeholder}
          handlerChange={props.handleChange('features')}
          hanhandlerBlur={props.handleBlur('features')}
          validation={props.errors.features && props.touched.features}
          messageError={props.errors.features}
         />
         <CustomTextArea
          isRequeried
          isDisable={false}
          value={props.values.summary}
          id={products.fields.summary.id}
          messageError={props.errors.summary}
          label={products.fields.summary.label}
          placeholder={products.fields.summary.placeholder}
          validation={props.errors.summary && props.touched.summary}
          handlerChange={props.handleChange('summary')}
          hanhandlerBlur={props.handleBlur('summary')}
         />
         <CustomButton
          isDisable={false}
          text={'Siguiente'}
          title={'Siguiente'}
          type={types.button.default}
          variant={types.variant.button.primary}
          handlerPress={() => handlerPosition(2)}
         />
        </>
       )}

       {position === 2 && (
        <>
         <CustomTextArea
          isRequeried
          isDisable={false}
          value={props.values.dosage}
          id={products.fields.dosage.id}
          messageError={props.errors.dosage}
          label={products.fields.dosage.label}
          placeholder={products.fields.dosage.placeholder}
          validation={props.errors.dosage && props.touched.dosage}
          handlerChange={props.handleChange('dosage')}
          hanhandlerBlur={props.handleBlur('dosage')}
         />
         <CustomInput
          isRequeried
          isDisable={false}
          value={props.values.cost}
          id={products.fields.cost.id}
          messageError={props.errors.cost}
          label={products.fields.cost.label}
          placeholder={products.fields.cost.placeholder}
          validation={props.errors.cost && props.touched.cost}
          handlerChange={props.handleChange('cost')}
          hanhandlerBlur={props.handleBlur('cost')}
         />
         <CustomInput
          isRequeried
          isDisable={false}
          value={props.values.pvp}
          id={products.fields.pvp.id}
          messageError={props.errors.pvp}
          label={products.fields.pvp.label}
          placeholder={products.fields.pvp.placeholder}
          validation={props.errors.pvp && props.touched.pvp}
          handlerChange={props.handleChange('pvp')}
          hanhandlerBlur={props.handleBlur('pvp')}
         />
         <CustomButton
          isDisable={false}
          text={'Siguiente'}
          title={'Siguiente'}
          type={types.button.default}
          variant={types.variant.button.primary}
          handlerPress={() => handlerPosition(3)}
         />
        </>
       )}

       {position === 3 && (
        <>
         <CustomPoster
          id={'photo'}
          type={types.form.create}
          value={props.values.photo}
          urlImage={String(urlImage)}
          messageError={props.errors.photo}
          label={products.fields.photo.label}
          validation={props.errors.photo && props.touched.photo}
          handlerChange={(e) => {
           props.setFieldValue('photo', e.target.files![0]);
          }}
          hanhandlerBlur={props.handleBlur('photo')}
         />
         <CustomButton
          type={types.button.default}
          title={
           type === types.form.create
            ? products.buttons.create.primary
            : products.buttons.edit.primary
          }
          text={
           type === types.form.create
            ? products.buttons.create.primary
            : products.buttons.edit.primary
          }
          isDisable={!props.isValid}
          variant={types.variant.button.primary}
          handlerPress={props.handleSubmit}
         />
        </>
       )}
      </section>
      {type === types.form.edit && props.values.photo && (
       <section className="flex-1 w-[50%] p-8 space-y-8">
        <CustomDetailsProduct
         data={{
          pvp: Number(props.values.pvp),
          photo: String(urlImage),
          cost: String(props.values.cost),
          dosage: String(props.values.dosage),
          product: String(props.values.product),
          barcode: String(props.values.barcode),
          summary: String(props.values.summary),
          category: String(props.values.category),
          features: String(props.values.features),
          id_product: String(props.values.id),
          laboratory: String(props.values.laboratory),
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
}

export { CustomProductForm };
