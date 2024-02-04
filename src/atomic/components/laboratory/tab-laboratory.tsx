import { getAllLaboratoriesByCategory } from '@/actions/laboratories';
import CustomTabs from '../shared/custom-tabs';

export default async function TabLaboratory({
 query,
 category,
}: {
 query: string;
 category: string;
}) {
 const laboratories = await getAllLaboratoriesByCategory({ category });
 const items = laboratories.map((laboratory) => laboratory.laboratory);
 return <CustomTabs query={query} tab={category} items={items} />;
}
