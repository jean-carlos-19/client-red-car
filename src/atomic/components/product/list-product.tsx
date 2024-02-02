import { CustomList } from '@/atomic/components/shared/custom-list';

export default async function ListProduct({ data }: { data: ProductDto[] }) {
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
