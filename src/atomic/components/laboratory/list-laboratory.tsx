import { Actions } from '@/actions';
import { CustomList } from '@/atomic/components/shared/custom-list';
import { Item } from '@/types';

export default async function ListLaboratory() {
 const laboratories = await Actions.Laboratory.getEnabled();
 const data: Item[] = laboratories.map((laboratory) => ({
  id: laboratory.id_laboratory,
  name: laboratory.laboratory,
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
