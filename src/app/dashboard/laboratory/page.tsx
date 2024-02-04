import { getAllLaboratoriesDisabled, getAllLaboratoriesEnabled } from '@/actions/laboratories';
import { styles } from '@/atomic/theme';
import LaboratoryView from '@/views/laboratory-view';

export default async function Laboratory() {
 const laboratoriesDisabled = await getAllLaboratoriesDisabled();
 const laboratoriesEnabled = await getAllLaboratoriesEnabled();

 return (
  <main
   className="w-full h-screen flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <LaboratoryView disabled={laboratoriesDisabled} laboratories={laboratoriesEnabled} />
  </main>
 );
}
