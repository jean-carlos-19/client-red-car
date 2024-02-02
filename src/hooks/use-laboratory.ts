import { useState } from 'react';

const useLaboratory = () => {
 const [laboratoryEntity] = useState<LaboratoryModel>({
  id: undefined,
  laboratory: undefined,
 });
 return { laboratoryEntity };
};
export { useLaboratory };
