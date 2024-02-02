import { data, images } from '@/constants';
import Image from 'next/image';

const { secctions } = data.screens.homepage;

function Who() {
 return (
  <section
   id={secctions.names.whoUs}
   className="w-full py-12 px-4  bg-secondary flex-col-stretch-center space-y-8 lg:w-[80%] rounded-xl"
  >
   <Image src={images.redCar.src} width={250} height={250} alt="" className="flex-1" />
   <article className="space-y-4 flex-1">
    <header>
     <h2 className="header-2">{secctions.quienesSomos.title}</h2>
    </header>
    <main>
     <p className="default-text">{secctions.quienesSomos.text}</p>
    </main>
   </article>
  </section>
 );
}
export { Who };
