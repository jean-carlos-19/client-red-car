import { getAllProductsEnabled } from '@/actions/product';
import CustomList from '@/atomic/components/shared/custom-list';
import { Item } from '@/types';

export default async function ListProduct() {
 const products = await getAllProductsEnabled();
 const data: Item[] = products.map((product) => ({
  id: product.id_product,
  name: product.product,
  photo: product.photo,
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
