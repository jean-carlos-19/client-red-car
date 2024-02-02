import { data, types } from '@/constants';
import { useCategoryController } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { CustomEmpty, CustomLoading, CustomMessageError } from '..';

const { secctions } = data.screens.homepage;

function Categories() {
 const { categories, isLoadingSearch, existError, messageError } = useCategoryController();
 if (existError) return <CustomMessageError message={messageError} />;
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
    {isLoadingSearch ? (
     <CustomLoading variant={types.loading.grid} />
    ) : categories.length === 0 ? (
     <CustomEmpty />
    ) : (
     categories.map((category, i) => (
      <Link key={i} href={`/category/${category.name}`} title={`categoria ${category.name}`}>
       <Image
        className="flex-row-center-center"
        src={category.photo as string}
        width={150}
        height={300}
        alt=""
       />
      </Link>
     ))
    )}
   </section>
  </article>
 );
}
export { Categories };
