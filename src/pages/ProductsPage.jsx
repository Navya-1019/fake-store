import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function ProductsPage() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center", margin: "20px" }}>All Products</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "20px"
      }}>
        {products.map(product => (
          <div key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              cursor: "pointer",
              textAlign: "center"
            }}>
            <img src={product.image} alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }} />
            <h4 style={{ fontSize: "14px", margin: "10px 0" }}>
              {product.title.substring(0, 40)}...
            </h4>
            <p style={{ color: "green", fontWeight: "bold" }}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage