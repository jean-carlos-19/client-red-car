import React from 'react';
import { CustomButton } from '@/atomic/elements';
import {
 CustomList,
 CustomSearch,
 CustomProductForm,
 CustomDetailsProduct,
 CustomTabs,
} from '@/atomic/components';
import { CustomModal, CustomDialog } from '@/atomic/designs';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { useProductController, useSearch, useTab, useCategoryController } from '@/hooks';
import { validationCategory, validationProduct, validationSearch } from '@/validations';
import { theme } from '@/atomic/theme';

const content = Object.freeze({
 eliminate: 'Ver productos eliminados',
 close: 'Cerrar',
 load: 'Recargar la informacion',
 search: {
  placeholder: 'Buscar el producto',
 },
 error: 'Ha ocurrido un error en el servidor, por favor recargue la pagina',
});

const ProductView = () => {
 const { tab, handlerTab } = useTab();
 const { search, hanlderSearch } = useSearch();
 const {
  dialog,
  detail,
  product,
  products,
  isEnable,
  isEdition,
  isLoading,
  existError,
  modalSetting,
  isLoadingSearch,
  disabledProducts,
  handlerEdit,
  handlerDetail,
  handlerCreate,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerCloseDetail,
  handlerOpenEnable,
  handlerCloseEnable,
  handlerActionEnable,
  handlerActionDisable,
 } = useProductController(tab, search);
 const { categories } = useCategoryController();
 /* dialog */
 if (dialog.isActivate)
  return (
   <div className="windowSecundary">
    <div className="w-[50%]">
     <CustomDialog setting={dialog} />
    </div>
   </div>
  );

 /* modal */
 if (modalSetting.isActivate) {
  return (
   <div className="windowSecundary">
    <div className="w-[50%]">
     <CustomModal setting={modalSetting} />
    </div>
   </div>
  );
 }

 /* enabling */
 if (isEnable) {
  return (
   <div className="windowSecundary ">
    <CustomButton
     title={content.load}
     type={typesButton.icon}
     stylyButton="self-center"
     icon={{
      type: typesIcon.XCircle,
      strokeWidth: 1,
      color: theme.gray,
      size: 50,
     }}
     handlerPress={handlerCloseEnable}
    />
    <div className="flex-1 w-[50%]">
     <CustomList
      data={disabledProducts}
      handlerEnable={handlerActionEnable}
      isLoading={isLoadingSearch}
     />
    </div>
   </div>
  );
 }

 /* editing  */
 if (isEdition) {
  return (
   <div className="windowSecundary">
    <CustomButton
     title={content.load}
     type={typesButton.icon}
     stylyButton="self-center"
     icon={{
      type: typesIcon.XCircle,
      strokeWidth: 1,
      color: theme.gray,
      size: 50,
     }}
     handlerPress={handlerHiddeEdit}
    />
    <div className="w-full">
     <CustomProductForm
      isLoading={isLoading}
      entity={product}
      type={typesForm.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validationProduct}
     />
    </div>
   </div>
  );
 }
 /* error */

 if (existError)
  return (
   <div className="flex-1 h-screen flex flex-col justify-center items-center bg-slate-800 px-4 py-8  rounded-lg space-y-4">
    <img className="max-w-[30%] rounded-xl" src="/not-found.svg" alt="" />
    <p className="text-2xl font-semibold text-slate-100"> {content.error} </p>
   </div>
  );

 return (
  <div className="overflow-scroll flexRowStart">
   {/* product form */}
   <div className="flex-1 w-[50%] p-8 overflow-scroll">
    <CustomProductForm
     isLoading={isLoading}
     entity={product}
     type={typesForm.create}
     handlerSubmit={handlerCreate}
     validationSchema={validationCategory}
    />
   </div>

   <div className="flex-1 w-[50%] p-8 flexColStart">
    {/* Tabs */}
    <CustomTabs
     items={categories.map((category) => category.name as string)}
     itemFocus={tab}
     returnItem={handlerTab}
    />
    {/* header Search */}
    <div className="flexCenter space-x-4">
     {/* button refresh */}
     <CustomButton
      stylyButton="bg-gray-100 p-2 rounded-lg"
      title={content.load}
      type={typesButton.icon}
      handlerPress={handlerUpdateAll}
      icon={{
       type: typesIcon.refresh,
       color: theme.gray,
       size: 35,
       strokeWidth: 1,
      }}
     />
     {/* button length products */}
     <CustomButton
      stylyButton="bg-gray-100 p-2 rounded-lg"
      stylyText="text-xl text-slate-600 font-semibold"
      text={products.length.toString()}
      title={products.length.toString()}
      type={typesButton.default}
     />
     {/* input Search */}
     <CustomSearch
      placeholder={content.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validationSearch}
     />
     {/* button delete */}
     <CustomButton
      title={content.eliminate}
      stylyButton="flexCenter bg-gray-100 p-2 rounded-lg"
      stylyText="text-xl text-slate-600 font-semibold"
      text={'' + disabledProducts.length}
      type={typesButton.iconText}
      handlerPress={handlerOpenEnable}
      icon={{
       type: typesIcon.elimited,
       color: theme.red,
       size: 35,
       strokeWidth: 1,
      }}
     />
    </div>

    {/* list products  and detail one product */}
    {!detail ? (
     <CustomList
      data={products}
      handlerDelete={handlerActionDisable}
      isLoading={isLoadingSearch}
      handlerEdit={handlerShowEdit}
      handlerDetail={handlerDetail}
     />
    ) : (
     <CustomDetailsProduct
      data={detail}
      handlerClose={handlerCloseDetail}
      isLoading={isLoadingSearch}
     />
    )}
   </div>
  </div>
 );
};

export { ProductView };
