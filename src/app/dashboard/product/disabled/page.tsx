import { Actions } from '@/actions';
import { CustomList } from '@/atomic/components';
import toast from 'react-hot-toast';

export default async function PageDisabled() {
 const { data, error } = await Actions.product.getDisabled();
 if (error || data === null) {
  return toast.error(error);
 }
 return (
  <CustomList
   data={data}
   handlerDelete={handlerActionDisable}
   isLoading={isLoadingSearch}
   handlerEdit={handlerShowEdit}
   handlerDetail={handlerDeatil}
  />
 );
}