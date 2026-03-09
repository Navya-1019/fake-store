function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#333",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ color: "white", margin: 0 }}>🛒 Fake Store</h1>
      <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
    </nav>
  )
}

export default Navbar