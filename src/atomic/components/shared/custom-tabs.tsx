import { CustomItemTab } from '@/atomic/elements';
import { CustomTabsProps } from '@/types';

const CustomTabs = ({ items, focus, returnItem }: CustomTabsProps) => {
 items.push('Todos');
 return (
  <ul className="w-[100%] pl-2 flex-row-start-center flex-initial overflow-x-auto overflow-y-auto pb-4">
   {items
    .reverse()
    .map((item: string, i: number) =>
     focus === item ? (
      <CustomItemTab key={i} isActive={true} item={item} returnItem={returnItem} />
     ) : (
      <CustomItemTab key={i} isActive={false} item={item} returnItem={returnItem} />
     ),
    )}
  </ul>
 );
};

export { CustomTabs };
