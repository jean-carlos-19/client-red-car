import { Actions } from '@/actions';
import { CustomList } from '@/atomic/components';

export default async function PageEliminated() {
 const categoriesDisabled = await Actions.category.getAllCategoriesDisabled();

 return (
  <CustomList
   data={categoriesDisabled}
   handlerDelete={handlerActionDisable}
   isLoading={isLoadingSearch}
   handlerEdit={handlerShowEdit}
   handlerDetail={handlerDeatil}
  />
 );
}
