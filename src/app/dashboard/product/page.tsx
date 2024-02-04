import { getAllCategoriesEnabled } from '@/actions/categories';
import { getAllLaboratoriesEnabled } from '@/actions/laboratories';
import { getAllProductsDisabled, getAllProductsEnabled } from '@/actions/product';
import { styles } from '@/atomic/theme';
import ProductView from '@/views/product-view';

export default async function Product({
 searchParams: { query },
}: {
 searchParams: { query: string };
}) {
 const laboratoriesEnabled = await getAllLaboratoriesEnabled();
 const categoriesEnabled = await getAllCategoriesEnabled();
 const productsEnabled = await getAllProductsEnabled();
 const productsDisabled = await getAllProductsDisabled();

 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <ProductView
    query={query}
    categories={categoriesEnabled}
    disabled={productsDisabled}
    laboratories={laboratoriesEnabled}
    products={productsEnabled}
   />
  </main>
 );
}
