import TopBanner from "../components/TopBanner";
import MovieJson from "../components/MovieJson";
function Halloween() {
  return (
    <>
      <TopBanner
        img={
          "https://streamcoimg-a.akamaihd.net/000/136/9864/1369864-Banner-L1-8e37aceee59b7d0a3b4ea6cc3a770c4f.jpeg?preferredFormat=image/webp&resize=1920px:*&quality=85"
        }
      />
      <MovieJson />
    </>
  );
}

export default Halloween;
