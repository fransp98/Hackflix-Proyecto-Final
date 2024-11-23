const Footer = () => {
  return (
    <footer className="footer">
      <span>
        <strong>HACKFLIX</strong> - Todos los derechos reservados ©{" "}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
