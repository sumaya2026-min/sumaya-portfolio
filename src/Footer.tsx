import logo from "./assets/logo.webp";

function Footer() {
  return (
    <footer
      style={{
       
        padding: "30px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "90px",
          }}
        />

        <p
          style={{
            fontSize: "14px",
            color: "#bbb",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Sumaya Portfolio
        </p>
      </div>
    </footer>
  );
}

export default Footer;
