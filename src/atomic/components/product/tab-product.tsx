import { Actions } from '@/actions';
import { useTab } from '@/hooks';
import { CustomTabs } from '..';

export default async function TabProduct() {
 const categories = await Actions.category.getEnabled();
 const { tab, handlerTab } = useTab('Todos');
 const items = categories.map((category) => category.category);
 return <CustomTabs focus={tab} items={items} returnItem={handlerTab} />;
}
