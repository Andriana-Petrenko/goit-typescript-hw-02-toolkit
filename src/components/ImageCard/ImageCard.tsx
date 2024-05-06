import { useState,FC } from "react";
import ImageModal from "../ImageModal/ImageModal";
import css from "./ImageCard.module.css"
import { Photo } from "../../redux/photoSlice";

interface ImageCardProps{
  photo:Photo;
}
const ImageCard:FC<ImageCardProps> = ({photo}) => {
   const [openModal, setOpenModal] = useState<boolean>(false);
   const handleImageClick = (): void => {
    setOpenModal(true);
  };
  return (<>
      <div>
      <img className={css.gallery_image} src={photo.urls.small} alt={photo.alt_description} onClick={handleImageClick} />
      
    </div>
    {openModal && <ImageModal photo={photo} setOpenModal={setOpenModal}  />}
  </>


  )
}

export default ImageCard