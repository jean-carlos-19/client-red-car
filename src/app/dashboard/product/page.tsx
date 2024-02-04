import { Actions } from '@/actions';
import { styles } from '@/atomic/theme';
import { ProductView } from '@/views';

export default async function Product() {
 const laboratoriesEnabled = await Actions.Laboratory.getAllLaboratoriesEnabled();
 const categoriesEnabled = await Actions.category.getAllCategoriesEnabled();
 const productsEnabled = await Actions.product.getAllProductsEnabled();
 const productsDisabled = await Actions.product.getAllProductsDisabled();

 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <ProductView
    categories={categoriesEnabled}
    disabled={productsDisabled}
    laboratories={laboratoriesEnabled}
    products={productsEnabled}
   />
  </main>
 );
}
