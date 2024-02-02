import { CustomList } from '@/atomic/components/shared/custom-list';

export default async function ListCategory({ data }: { data: CategoryDto[] }) {
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
