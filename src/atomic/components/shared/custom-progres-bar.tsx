import CustomButton from '@/atomic/components/shared/custom-buttom';
import { types } from '@/constants';
import { CustomProgressBarProps } from '@/types';

export default function CustomProgressBar(props: CustomProgressBarProps) {
 return (
  <nav>
   <ul className="flex-row-between-stretch space-x-5">
    {props.items.map((item, i) => (
     <CustomButton
      key={i}
      variant={
       props.posiition === i ? types.variant.button.primary : types.variant.button.secondary
      }
      type={types.button.default}
      title={'' + (i + 1)}
      text={'' + (i + 1)}
      handlerPress={() => props.handlerItem(i)}
     />
    ))}
   </ul>
  </nav>
 );
}
