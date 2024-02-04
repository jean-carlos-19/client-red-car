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
    className="w-full lg:w-[80%]"
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
    <Suspense fallback={<CustomLoading variant="list-horizontal" />}>
     <ProductCategories />
    </Suspense>
   </section>
  </article>
 );
}
