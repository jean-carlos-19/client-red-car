import Search from '@/atomic/components/category/search';
import TabLaboratory from '@/atomic/components/laboratory/tab-laboratory';
import CardProducts from '@/atomic/components/product/card-categories';
import CustomHeader from '@/atomic/components/shared/custom-header';
import CustomLoading from '@/atomic/components/shared/custom-loading';
import { types } from '@/constants';
import { Suspense } from 'react';


export default function Category({
 params: { name },
 searchParams: { query, search },
}: {
 params: { name: string };
 searchParams: { query: string, search?:string };
}) {
 return (
  <div className="w-full flex flex-col justify-stretch items-stretch space-y-8">
   <CustomHeader title={name} />
   <div className="flex-col-start-stretch">
    <Suspense fallback={<CustomLoading variant={types.loading.grid} />}>
     <TabLaboratory category={name} query={query} />
    </Suspense>
   </div>
   <div className="self-center">
    <Search />
   </div>
   <Suspense fallback={<CustomLoading variant={types.loading.grid} />}>
    <CardProducts search={search} category={name} laboratory={query} />
   </Suspense>
  </div>
 );
}
