import { CustomButton } from '@/atomic/elements';
import { data, types } from '@/constants';
import Link from 'next/link';

const { secctions } = data.screens.homepage;

function Contact() {
 return (
  <section id={secctions.names.contact} className="w-full p-4 bg-helper space-y-16">
   <article className="space-y-8">
    <header>
     <h2 className="header-2">{secctions.contactanos.title}</h2>
    </header>
    <ul className="flex-row-center-center">
     <li>
      <Link href={secctions.contactanos.socialMedia.facebook.url} target="_blank">
       <CustomButton
        title={secctions.contactanos.socialMedia.facebook.title}
        type={types.button.icon}
        icon={types.icon.facebook}
       />
      </Link>
     </li>
     <li>
      <Link href={secctions.contactanos.socialMedia.whatsapp.url} target="_blank">
       <CustomButton
        title={secctions.contactanos.socialMedia.whatsapp.title}
        type={types.button.icon}
        icon={types.icon.whatsapp}
       />
      </Link>
     </li>
    </ul>
   </article>
  </section>
 );
}
export { Contact };
