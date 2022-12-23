import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MainPhoto from "../assets/MainPhoto.jpg";
import "../styles/Welcome.css";
import "../styles/Home.css";
import "../styles/ButtonGrid.css";
function Home() {
  return (
    <>
      <div className="home">
        <NavbarHome />
        <div className="container">
          <img className="background-img" src={MainPhoto} />
          <button className="btn">Gallery</button>
          {/* <Grid container justify="center" className="button-grid">
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              className="button"
            >
              Gallery
            </Button>
          </Grid> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
