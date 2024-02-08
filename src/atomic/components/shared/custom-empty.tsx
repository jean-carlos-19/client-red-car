import { data, images } from '@/constants';
import CustomImage from './custom-image';

const { globals } = data;
export default function CustomEmpty() {
 return (
  <div className="flex-col-center-center bg-helper px-4 py-8  rounded-lg">
   <CustomImage
    src={images.redCar.src}
    className="flex-1"
    height={300}
    width={300}
    title={images.avatar.title}
    alt={images.avatar.alt}
   />
   <p className="default-text-bold"> {globals.empty.text} </p>
  </div>
 );
}
