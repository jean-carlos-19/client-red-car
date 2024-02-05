import { findProductById } from "@/actions/product"

export default function ProductPage({params:{id}}:{params:{id:string}}) {
  const products = findProductById({id})
  console.log(products)
  return (
    <div>
      {id}
    </div>
  )
}
