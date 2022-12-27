import { ImageData } from "../components/ImageData";
import "../styles/Gallery.css";
import {useState} from 'react';
import Navbar from "../components/Navbar";
import "../styles/Navbar.css";

function Gallery() {
  const photos = ImageData;
  const [sliderNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  return (
    <>
    <Navbar/>
    <h1 className="title">Have a look at my work</h1>
    <div className=''>
      <div className="gal">
        {photos.map((photo, index) => {
          return (
            <div className="pics">
              <img src={photo.img} />
            </div>
          );
        })}
      </div>
    </div>
      {/* <Footer/> */}
    </>
  );
}

export default Gallery;
