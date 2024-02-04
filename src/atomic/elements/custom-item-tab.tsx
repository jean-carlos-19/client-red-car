import { types } from '@/constants';
import { CustomItemTabsProps } from '@/types';
import CustomLink from './custom-link';

export default function CustomItemTab(props: CustomItemTabsProps) {
 return props.isActive ? (
  <CustomLink
   url={`/category/${props.tab}?query=${props.item}`}
   text={props.item}
   type={types.button.default}
   title={`Laboratorio ${props.item}`}
   variant={types.variant.button.primary}
  />
 ) : (
  <CustomLink
   url={`/category/${props.tab}?query=${props.item}`}
   text={props.item}
   type={types.button.default}
   title={`Laboratorio ${props.item}`}
   variant={types.variant.button.secondary}
  />
 );
}
