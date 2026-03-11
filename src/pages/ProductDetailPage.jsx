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

  if (!product) return (
    <div style={{ textAlign: "center", marginTop: "100px", fontSize: "20px", color: "#667eea" }}>
      Loading... ✨
    </div>
  )

  return (
    <div style={{ backgroundColor: "#f8f9ff", minHeight: "100vh" }}>
      <Navbar />
      <div style={{
        maxWidth: "700px",
        margin: "50px auto",
        backgroundColor: "white",
        borderRadius: "24px",
        padding: "40px",
        boxShadow: "0 10px 40px rgba(102,126,234,0.15)",
        textAlign: "center"
      }}>
        <div style={{
          backgroundColor: "#f8f9ff",
          borderRadius: "16px",
          padding: "30px",
          marginBottom: "25px"
        }}>
          <img src={product.image} alt={product.title}
            style={{ width: "220px", height: "220px", objectFit: "contain" }} />
        </div>

        <span style={{
          backgroundColor: "#f0f0ff",
          color: "#667eea",
          padding: "5px 15px",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: "600",
          textTransform: "uppercase"
        }}>{product.category}</span>

        <h2 style={{
          fontSize: "22px",
          fontWeight: "800",
          color: "#333",
          margin: "20px 0 10px"
        }}>{product.title}</h2>

        <p style={{
          color: "#888",
          lineHeight: "1.7",
          fontSize: "15px",
          marginBottom: "20px"
        }}>{product.description}</p>

        <p style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "32px",
          fontWeight: "800",
          marginBottom: "10px"
        }}>${product.price}</p>

        <p style={{ color: "#f5a623", fontSize: "18px", marginBottom: "25px" }}>
          ⭐ {product.rating.rate} 
          <span style={{ color: "#aaa", fontSize: "14px" }}> ({product.rating.count} reviews)</span>
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 30px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "15px",
            boxShadow: "0 4px 15px rgba(102,126,234,0.4)"
          }}>
          ← Back to Collection
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage