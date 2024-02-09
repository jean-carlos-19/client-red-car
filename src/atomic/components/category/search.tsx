'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const search = searchParams.get('search') ?? '';
    const handleSearch = ({text}:{text:string})=>{  
        const params = new URLSearchParams(searchParams)
        if(text)params.set('search', text)  
        else params.delete('search')      
        router.replace(`${pathName}?${params.toString()}`)  
    }
  return (
    <div className={'flex-1 rounded-lg flex flex-col space-y-4 '}>
      <input
       id={'search'}
       type="text"
       defaultValue={String(search?.toString())}
       onChange={(e)=>handleSearch({text:e.target.value})}
       className={'text-form'}
       placeholder={'busca el producto que necesitas'}
      />
     </div>
  )
}
