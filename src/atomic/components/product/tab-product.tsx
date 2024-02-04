import { getAllCategoriesEnabled } from '@/actions/categories';
import CustomTabs from '@/atomic/components/shared/custom-tabs';

export default async function TabProduct({ query, product }: { query: string; product: string }) {
 const categories = await getAllCategoriesEnabled();
 const items = categories.map((category) => category.category);
 return <CustomTabs query={query} tab={product} items={items} />;
}
