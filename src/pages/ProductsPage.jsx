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
    <div style={{ backgroundColor: "#f8f9ff", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{
          fontSize: "36px",
          fontWeight: "800",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "10px"
        }}>Our Collection</h2>
        <p style={{ color: "#888", marginBottom: "40px" }}>
          Discover the latest trends
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {products.map(product => (
            <div key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "20px",
                cursor: "pointer",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)"
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(102,126,234,0.3)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)"
              }}
            >
              <div style={{
                backgroundColor: "#f8f9ff",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "15px"
              }}>
                <img src={product.image} alt={product.title}
                  style={{ width: "120px", height: "120px", objectFit: "contain" }} />
              </div>
              <h4 style={{
                fontSize: "14px",
                margin: "10px 0",
                color: "#333",
                fontWeight: "600"
              }}>
                {product.title.substring(0, 40)}...
              </h4>
              <p style={{
                color: "#667eea",
                fontWeight: "700",
                fontSize: "18px"
              }}>${product.price}</p>
              <button style={{
                marginTop: "10px",
                padding: "8px 20px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px"
              }}>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage