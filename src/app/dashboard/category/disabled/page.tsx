import { getAllCategoriesDisabled } from '@/actions/categories';

export default async function PageEliminated() {
 const categoriesDisabled = await getAllCategoriesDisabled();

 return <getAllLaboratoriesByCategory />;
}
