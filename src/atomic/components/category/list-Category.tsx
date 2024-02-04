import { getAllCategoriesEnabled } from '@/actions/categories';
import CustomList from '@/atomic/components/shared/custom-list';
import { Item } from '@/types';

export default async function ListCategory() {
 const categories = await getAllCategoriesEnabled();
 const data: Item[] = categories.map((laboratory) => ({
  id: laboratory.id_category,
  name: laboratory.category,
  photo: laboratory.photo,
 }));
 return (
  <CustomList
   data={data}
   handlerDelete={handlerActionDisable}
   isLoading={isLoadingSearch}
   handlerEdit={handlerShowEdit}
   handlerDetail={handlerDeatil}
  />
 );
}
