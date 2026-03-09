import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <p style={{ textAlign: "center" }}>Loading...</p>

  return (
    <div>
      <Navbar />
      <div style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <img src={product.image} alt={product.title}
          style={{ width: "200px", height: "200px", objectFit: "contain" }} />
        <h2>{product.title}</h2>
        <p style={{ color: "gray" }}>{product.description}</p>
        <p style={{ color: "green", fontSize: "24px", fontWeight: "bold" }}>${product.price}</p>
        <p>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
          ← Back to Products
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage