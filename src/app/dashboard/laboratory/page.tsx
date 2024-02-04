import { Actions } from '@/actions';
import { styles } from '@/atomic/theme';
import { LaboratoryView } from '@/views';

export default async function Laboratory() {
 const laboratoriesDisabled = await Actions.Laboratory.getAllLaboratoriesDisabled();
 const laboratoriesEnabled = await Actions.Laboratory.getAllLaboratoriesDisabled();

 return (
  <main
   className="w-full h-screen flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <LaboratoryView disabled={laboratoriesDisabled} laboratories={laboratoriesEnabled} />
  </main>
 );
}
