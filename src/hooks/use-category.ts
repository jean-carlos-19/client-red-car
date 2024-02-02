import { ServiceCategory } from '@/mvc/services';
import { useState } from 'react';

const service: ServiceCategory = ServiceCategory.getService();
const useCategory = () => {
 const [categoryEntity] = useState<CategoryModel>({
  id: undefined,
  category: undefined,
  photo: undefined,
 });
 return { categoryEntity };
};
export { useCategory };
