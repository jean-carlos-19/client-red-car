import CustomImage from '@/atomic/components/shared/custom-image';
import { data, images } from '@/constants';

const { secctions } = data.screens.homepage;

export default function Who() {
 return (
  <section
   id={secctions.names.whoUs}
   className="w-full py-12 px-4  bg-secondary flex-col-stretch-center space-y-8 lg:w-[80%] rounded-xl"
  >
    <CustomImage src={images.redCar.src} width={images.redCar.width} height={images.redCar.height} alt={images.redCar.alt} title={images.redCar.title} />
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
