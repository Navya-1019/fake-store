function Navbar() {
  return (
    <nav style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "18px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
    }}>
      <h1 style={{
        color: "white",
        margin: 0,
        fontSize: "28px",
        fontWeight: "800",
        letterSpacing: "1px"
      }}>🛍️ StyleHub</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={{
          color: "white",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "500"
        }}>Home</a>
      </div>
    </nav>
  )
}

export default Navbar