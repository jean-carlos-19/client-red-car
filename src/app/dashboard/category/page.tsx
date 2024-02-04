import { Actions } from '@/actions';
import { styles } from '@/atomic/theme';
import { CategoryView } from '@/views';

export default async function Category() {
 const categoriesDisabled = await Actions.category.getAllCategoriesDisabled();
 const categoriesEnabled = await Actions.category.getAllCategoriesDisabled();


 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <CategoryView categories={categoriesEnabled} disabled={categoriesDisabled} />
  </main>
 );
}
