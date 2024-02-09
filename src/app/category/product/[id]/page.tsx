import { findProductById } from '@/actions/product';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
 const product = await findProductById({ id });
 return (
  <section className="pt-4 px-2 md:flex md:flex-col md:items-center">
   <div className="space-y-4 md:w-[80%]">
    <header>
     <h1 className="text-center text-3xl font-extrabold text-gray-600 md:text-4xl">
      {product.product}
     </h1>
    </header>
    <div className="space-y-4 lg:flex lg:space-x-4">
     <figure className={'flex justify-center'}>
      Image
       src={String(product.photo)}
       width={300}
       height={600}
       alt={product.product}
       title={product.product}
      />
     </figure>
     <section className="p-2 bg-helper rounded-md">
      <h6 className="header-3">Componentes</h6>
      <ul>
       {product.summary.split(',').map((item, index) => (
        <p key={index} className="default-text text-left">
         - {item.toLowerCase()}.
        </p>
       ))}
      </ul>
     </section>
     <section className="p-2 bg-helper rounded-md">
      <h6 className="header-3">Descripcion</h6>
      <p className="default-text text-left">{product.features.toLowerCase()}.</p>
     </section>
    </div>
   </div>
  </section>
 );
}
