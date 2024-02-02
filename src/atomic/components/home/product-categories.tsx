import { Actions } from '@/actions';
import Image from 'next/image';
import Link from 'next/link';
import { CustomEmpty } from '..';

async function ProductCategories() {
 const { data: categories } = await Actions.category.getEnableds();
 if (categories === null) return <CustomEmpty />;
 if (categories.length === 0) return <CustomEmpty />;
 return categories.map((category, i) => (
  <Link key={i} href={`/category/${category.category}`} title={`categoria ${category.category}`}>
   <Image
    className="flex-row-center-center"
    src={category.photo as string}
    width={150}
    height={300}
    alt=""
   />
  </Link>
 ));
}
export { ProductCategories };
