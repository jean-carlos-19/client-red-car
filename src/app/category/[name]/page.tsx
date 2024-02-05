import CardCategories from '@/atomic/components/category/card-categories';
import TabLaboratory from '@/atomic/components/laboratory/tab-laboratory';
import CustomLoading from '@/atomic/components/shared/custom-loading';
import CustomLink from '@/atomic/elements/custom-link';
import { theme } from '@/atomic/theme';
import { images, types } from '@/constants';
import Image from 'next/image';
import { Suspense } from 'react';

// const { header } = data.screens.product;
// const { forms, list } = data.screens.dashboard;

export default function Category({
 params: { name },
 searchParams: { query },
}: {
 params: { name: string };
 searchParams: { query: string };
}) {
 return (
  <div className="w-full bg-helper flex flex-col justify-stretch items-stretch space-y-8">
   {/* header */}
   <header className="w-full p-4 bg-primary flex-row-between-center lg:px-[5rem]">
    <CustomLink title={'regresar'} type={types.button.icon} icon={types.icon.goBack} url={'/'} />
    <h1 className="header-2 color-secondary" style={{ color: theme.white }}>
     {name}
    </h1>
    <Image src={images.redCar.src} width={50} height={50} alt="" />
   </header>
   <div className="flex-col-start-stretch">
    {/* Tabs */}
    <Suspense fallback={<CustomLoading variant={types.loading.grid} />}>
     <TabLaboratory category={name} query={query} />
    </Suspense>
   </div>
   {/* input Search */}
   <div className="self-center">
    {/* <CustomSearch
     placeholder={forms.products.search.placeholder}
     validationSchema={validate.search}
     handlerSubmit={hanlderSearch}
     entity={search}
    /> */}
   </div>
   <Suspense fallback={<CustomLoading variant={types.loading.grid} />}>
    <CardCategories category={name} laboratory={query} />
   </Suspense>
  </div>
 );
}
