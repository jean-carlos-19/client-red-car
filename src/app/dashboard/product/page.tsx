import { Actions } from '@/actions';
import { styles } from '@/atomic/theme';
import { ProductView } from '@/views';
import toast from 'react-hot-toast';

export default async function Product() {
 const { data: laboratories, error: errorLaboratory } = await Actions.Laboratory.getEnabled();
 const { data: categories, error: errorCategory } = await Actions.category.getEnabled();
 const { data: products, error: error } = await Actions.product.getEnabled();
 const { data: disabled, error: errorDisabled } = await Actions.product.getDisabled();

 if (errorCategory || categories === null) {
  return toast.error(error);
 }

 if (errorLaboratory || laboratories === null) {
  return toast.error(error);
 }

 if (error || products === null) {
  return toast.error(error);
 }

 if (disabled === null || errorDisabled) {
  return toast.error(errorDisabled);
 }

 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <ProductView
    categories={categories}
    disabled={disabled}
    laboratories={laboratories}
    products={products}
   />
  </main>
 );
}
