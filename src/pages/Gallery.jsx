import { ImageData } from "../components/ImageData";
import "../styles/Gallery.css";

function Gallery() {
  const photos = ImageData;
  console.log(ImageData);
  return (
    <>
      <div className="gallery">
        {photos.map((photo, index) => {
          return (
            <div className="pics">
              <img src={photo.img} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
