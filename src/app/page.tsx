import { CustomCarousel } from '@/atomic/components';
import { Categories, Contact, Footer, Header, Who } from '@/atomic/components/home';

export default function Home() {
 return (
  <main className="w-full bg-helper flex-col-stretch-center space-y-20">
   <Header />
   <CustomCarousel />
   <Categories />
   <Who />
   <Contact />
   <Footer />
  </main>
 );
}
