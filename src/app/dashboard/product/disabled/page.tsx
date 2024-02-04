import { getAllProductsDisabled } from '@/actions/product';
import ListProduct from '@/atomic/components/product/list-product';
import { Item } from '@/types';

export default async function PageDisabled() {
 const products = await getAllProductsDisabled();
 const data: Item[] = products.map((product) => ({
  id: product.id_product,
  name: product.product,
  photo: product.photo,
 }));
 return <ListProduct />;
}
