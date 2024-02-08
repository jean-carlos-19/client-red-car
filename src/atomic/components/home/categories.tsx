import ProductCategories from '@/atomic/components/home/product-categories';
import { data } from '@/constants';
import { Suspense } from 'react';
import CustomLoading from '../shared/custom-loading';

const { secctions } = data.screens.homepage;

export default function Categories() {
 return (
  <article className="w-full mt-[10rem]bg-helper flex-col-stretch-center space-y-16">
   <h2 className="header-2"> {'Productos'}</h2>
   <section
    id={secctions.names.product}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center content-center place-items-center"
   >
    <Suspense fallback={<CustomLoading variant="list-horizontal" />}>
     <ProductCategories />
    </Suspense>
   </section>
  </article>
 );
}
