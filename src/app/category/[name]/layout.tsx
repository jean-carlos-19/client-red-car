export default async function CategoryLayout({ children }: { children: React.ReactNode }) {
 return (
  <div className="bg-helper w-full h-auto">
   <div> {children}</div>
  </div>
 );
}
