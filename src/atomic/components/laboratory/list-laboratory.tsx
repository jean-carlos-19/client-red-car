import { CustomList } from '@/atomic/components/shared/custom-list';

export default async function ListLaboratory({ data }: { data: LaboratoryDto[] }) {
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
