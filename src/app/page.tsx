import Categories from '@/atomic/components/home/categories';
import Contact from '@/atomic/components/home/contact';
import Footer from '@/atomic/components/home/footer';
import Header from '@/atomic/components/home/header';
import Who from '@/atomic/components/home/who';
import CustomCarousel from '@/atomic/components/shared/custom-carosel';

export default function Home({searchParams:{query}}:{searchParams:{query:string}}) {
 return (
  <main className="w-full bg-helper flex-col-stretch-center space-y-20">
   <Header focus={query} />
   <CustomCarousel />
   <Categories />
   <Who />
   <Contact />
   <Footer />
  </main>
 );
}
