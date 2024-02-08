import { data } from '@/constants';
import { CustomItemProps } from '@/types';

const { card } = data.screens.product;

export default function CustomItem(props: CustomItemProps) {
 const data = props.text.split(',');
 return (
  <section className="w-full h-full bg-helper p-4 rounded-xl flex-col-start-strech">
   <h2 className="header-3 text-left">{props.title}</h2>
   <ul className="flex-col-start-start">
    {props.title !== card.summary ? (
     <p className="default-text text-left"> {props.text.toLocaleLowerCase()} </p>
    ) : (
     data.map((text, i) => (
      <li key={i} className="default-text text-left">
       {`- ${text.toLocaleLowerCase()}.`}
      </li>
     ))
    )}
   </ul>
  </section>
 );
}
