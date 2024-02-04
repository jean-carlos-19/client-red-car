import { getAllCategoriesEnabled } from '@/actions/categories';
import CustomEmpty from '@/atomic/components/shared/custom-empty';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductCategories() {
 const categories = await getAllCategoriesEnabled();
 if (categories === null) return <CustomEmpty />;
 if (categories.length === 0) return <CustomEmpty />;
 return categories.map((category, i) => (
  <Link
   key={i}
   href={`/category/${category.category}?query=Todos`}
   title={`categoria ${category.category}`}
  >
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
