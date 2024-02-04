import { getAllCategoriesDisabled, getAllCategoriesEnabled } from '@/actions/categories';
import { styles } from '@/atomic/theme';
import CategoryView from '@/views/category-view';

export default async function Category() {
 const categoriesDisabled = await getAllCategoriesDisabled();
 const categoriesEnabled = await getAllCategoriesEnabled();

 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <CategoryView categories={categoriesEnabled} disabled={categoriesDisabled} />
  </main>
 );
}
