import { types } from '@/constants';
import { statusDialog } from '@/types';
import toast from 'react-hot-toast';

const useToastMessage = () => {
 const toastMessage = (type: statusDialog, message: string) => {
  if (type === types.dialog.success) return toast.success(message);
  return toast.error(message);
 };
 return { toastMessage };
};
export { useToastMessage };
