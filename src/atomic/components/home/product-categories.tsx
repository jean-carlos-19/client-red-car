import { getAllCategoriesEnabled } from '@/actions/categories';
import CustomEmpty from '@/atomic/components/shared/custom-empty';
import CustomImage from '@/atomic/components/shared/custom-image';
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
   <CustomImage
    src={String(category.photo)}
    alt={category.category}
    width={150}
    height={300}
    title={`Categoria ${category.category}`}
   />
  </Link>
 ));
}
