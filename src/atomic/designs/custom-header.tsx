import CustomLink from '@/atomic/components/shared/custom-link';
import { types } from '@/constants';

export default function CustomHeader({ headers, focus }: { headers: string[]; focus: string }) {
 return (
  <nav className="p-4 flex-row-reverese-between-center flex-initial">
   <ul className="flex-row-end-center">
    {headers.map((head, i) => (
     <li key={i}>
      <CustomLink
       type={types.button.default}
       text={head.toLocaleUpperCase()}
       variant={head === focus ? types.variant.button.primary : types.variant.button.secondary}
       title={head.toLocaleUpperCase()}
       url={`/?query=${head}`}
      />
     </li>
    ))}
   </ul>
  </nav>
 );
}
