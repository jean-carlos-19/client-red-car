import { Actions } from '@/actions';
import { styles } from '@/atomic/theme';
import { CategoryView } from '@/views';
import toast from 'react-hot-toast';

export default async function Category() {
 const { data: categories, error } = await Actions.category.getDisabled();
 const { data: disabled, error: errorDisabled } = await Actions.category.getDisabled();

 if (error || categories === null ) {
  return toast.error(error);
 }

 if (disabled === null || errorDisabled ) {
    return toast.error(errorDisabled);
   }

 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <CategoryView categories={categories} disabled={disabled} />
  </main>
 );
}
