import { Actions } from '@/actions';
import { CustomList } from '@/atomic/components';
import { Item } from '@/types';

export default async function PageDisabled() {
 const products = await Actions.product.getAllProductsDisabled();
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
