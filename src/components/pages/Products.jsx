import { useParams } from "react-router-dom"


function Products() {
    const params = useParams()
    console.log(params);

  return (
    <>
    <h4>Product page</h4>
    <p>Product ID : {params.id}</p>
    </>
  )
}

export default Products