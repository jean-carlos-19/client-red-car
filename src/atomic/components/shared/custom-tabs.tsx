import CustomItemTab from '@/atomic/elements/custom-item-tab';
import { CustomTabsProps } from '@/types';

export default function CustomTabs({ items, tab, query }: CustomTabsProps) {
 items.push('Todos');
 return (
  <ul className="w-[100%] pl-2 flex-row-start-center flex-initial overflow-x-auto overflow-y-auto pb-4">
   {items.reverse().map((item: string, i: number) =>
    item === query ? (
     <CustomItemTab key={i} isActive={true} item={item} tab={tab} />
    ) : (
     <>
      <CustomItemTab key={i} isActive={false} item={item} tab={tab} />
     </>
    ),
   )}
  </ul>
 );
}
