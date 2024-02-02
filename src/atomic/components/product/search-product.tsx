'use client ';

import { CustomSearch } from '@/atomic/components/shared/custom-search';
import { data } from '@/constants';
import { useSearch } from '@/hooks';
import { validate } from '@/validations';

const { forms } = data.screens.dashboard;

export default async function SearchProduct() {
 const { search, hanlderSearch } = useSearch();
 return (
  <CustomSearch
   placeholder={forms.category.search.placeholder}
   entity={search}
   handlerSubmit={hanlderSearch}
   validationSchema={validate.search}
  />
 );
}
