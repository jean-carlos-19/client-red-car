import { useState } from 'react';

const useCategory = () => {
 const [categoryEntity] = useState<CategoryModel>({
  id: undefined,
  category: undefined,
  photo: undefined,
 });
 return { categoryEntity };
};
export { useCategory };
