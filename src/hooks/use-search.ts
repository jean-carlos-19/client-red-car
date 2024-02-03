'use client';
import { Search } from '@/types';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

const useSearch = () => {
 const [search, setSearch] = useState<Search>({ search: '' });
 const handlerTarget = (values: Search) => {
  setSearch(values);
 };

 const hanlderSearch = useCallback(debounce(handlerTarget, 500), []);
 return { search, hanlderSearch };
};
export { useSearch };
