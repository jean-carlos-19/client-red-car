import { Actions } from '@/actions';
import { styles } from '@/atomic/theme';
import { LaboratoryView } from '@/views';
import toast from 'react-hot-toast';

export default async function Laboratory() {
 const { data: laboratories, error } = await Actions.Laboratory.getDisabled();
 const { data: disabled, error: errorDisabled } = await Actions.Laboratory.getDisabled();

 if (error || laboratories === null) {
  return toast.error(error);
 }

 if (disabled === null || errorDisabled) {
  return toast.error(errorDisabled);
 }
 return (
  <main
   className="w-full h-screen flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <LaboratoryView disabled={disabled} laboratories={laboratories} />
  </main>
 );
}
