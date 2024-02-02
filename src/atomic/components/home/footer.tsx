import { styles } from '@/atomic/theme';
import { data } from '@/constants';
import Link from 'next/link';

const { footer } = data.screens.homepage;

function Footer() {
 return (
  <footer className="w-full py-16 flex-row-center-center" style={styles.backgrounds.secondary}>
   <Link
    className="w-full p-2 block "
    href={footer.author.url}
    title={footer.author.title}
    target="_blank"
   >
    <p className="default-text-bold"> {footer.author.title} </p>
   </Link>
  </footer>
 );
}
export { Footer };
