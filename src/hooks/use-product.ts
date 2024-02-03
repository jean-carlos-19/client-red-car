'use client';
import { useState } from 'react';

const useProduct = () => {
 const [productEntity] = useState<ProductModel>({
  id: undefined,
  photo: undefined,
  category: undefined,
  laboratory: undefined,
  barcode: undefined,
  product: undefined,
  features: undefined,
  summary: undefined,
  dosage: undefined,
  cost: undefined,
  pvp: undefined,
 });
 return { productEntity };
};
export { useProduct };
