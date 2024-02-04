import { getAllCategoriesDisabled } from '@/actions/categories';
import CustomList from '@/atomic/components/laboratory/list-laboratory';

export default async function PageDisabled() {
 const categoriesDiSabled = await getAllCategoriesDisabled();

 return <CustomList />;
}
