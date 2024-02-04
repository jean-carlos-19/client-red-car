import { getAllLaboratoriesEnabled } from '@/actions/laboratories';
import CustomList from '@/atomic/components/shared/custom-list';
import { Item } from '@/types';

export default async function ListLaboratory() {
 const laboratories = await getAllLaboratoriesEnabled();
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
