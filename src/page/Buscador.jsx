import TopBanner from "../components/TopBanner";
import BuscadorInput from "../components/BuscadorInput";
function Buscador() {
  return (
    <>
      <TopBanner
        img={
          "https://a-us.storyblok.com/f/1002378/1920x823/8e1fc26772/best-websites-for-filmmakers-blog-banner.jpeg"
        }
        title={"¡TUS PELICULAS FAVORITAS!"}
        text={"Siempre somos los preferidos para los verdaderos fanaticos"}
      />
      <BuscadorInput />
    </>
  );
}

export default Buscador;
