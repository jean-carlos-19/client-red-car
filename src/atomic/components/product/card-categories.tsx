import {
  getAllProductsBytCategory,
  getAllProductsBytCategoryAndLaboratory,
  searchProductByCategory,
  searchProductByCategoryAndLaboratory,
} from '@/actions/product';
import Image from 'next/image';
import Link from 'next/link';

export default async function CardProducts({
 category,
 laboratory,
 search
}: {
 category: string;
 laboratory: string;
 search?:string
}) {
 let products:ProductDto[] | undefined = undefined;
 if(laboratory === 'Todos' && search === undefined){
  products = await getAllProductsBytCategory({ category })
 }
 if(laboratory !== 'Todos' && search === undefined){
   products = await getAllProductsBytCategoryAndLaboratory({ category, laboratory });
 }
 if(laboratory === 'Todos' && search !== undefined){
  products = await searchProductByCategory({ category, search });
 }
 if(laboratory !== 'Todos' && search !== undefined){
  products = await searchProductByCategoryAndLaboratory({category, laboratory, search });
 }
 if(products === undefined) return ;
   
 return (
  <section
   className="w-full self-center p-4 lg:w-[80%]"
   style={{
    gap: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr))',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyItems: 'center',
   }}
  >
   {products.map((product, i) => (
    <Link
     key={product.id_product}
     title={product.product}
     href={'/category/product/' + product.id_product}
     style={{ height: '100%' }}
     className="bg-slate-200 p-8 flex-col-stretch-stretch rounded-xl space-y-4 cursor-pointer"
    >
    <Image
      className="flex-row-center-center flex-1 h-auto max-w-full object-contain"
      width={150}
      height={350}
      src={product.photo as string}
      alt={`${product.product}`}
      title={`${product.product}`}
     />
     <p className="default-text-bold">{product.product}</p>
    </Link>
   ))}
  </section>
 );
}
