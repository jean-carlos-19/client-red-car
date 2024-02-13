import { styles } from '@/atomic/theme';
import { data } from '@/constants';

const { header } = data.screens.dashboard;
export default function Dashboard() {

 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
    hola
  </main>
 );
}
