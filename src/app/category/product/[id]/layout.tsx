export default async function ProductLayout({ children }: { children: React.ReactNode }) {
 return (
  <div className="bg-secundary  w-full h-auto">
   <div> {children}</div>
  </div>
 );
}
