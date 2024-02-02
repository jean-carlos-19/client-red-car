import { CustomLoading } from '@/atomic/components';
import { CustomItemTab } from '@/atomic/elements';
import { types } from '@/constants';
import { CustomTabsProps } from '@/types';

const CustomTabs = (props: CustomTabsProps) => {
 props.items.push('Todos');
 return (
  <ul className="w-[100%] pl-2 flex-row-start-center flex-initial overflow-x-auto overflow-y-auto pb-4">
   {props.isLoading ? (
    <CustomLoading variant={types.loading.listHorizontal} />
   ) : (
    props.items
     .reverse()
     .map((item: string, i: number) =>
      props.itemFocus === item ? (
       <CustomItemTab key={i} isActive={true} item={item} returnItem={props.returnItem} />
      ) : (
       <CustomItemTab key={i} isActive={false} item={item} returnItem={props.returnItem} />
      ),
     )
   )}
  </ul>
 );
};

export { CustomTabs };
