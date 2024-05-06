import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import css from "./ImageCard.module.css"

const ImageCard = ({photo}) => {
   const [openModal, setOpenModal] = useState(false);
  return (<>
      <div>
      <img className={css.gallery_image} src={photo.urls.small} alt={photo.alt_description} onClick={() => setOpenModal(true)} />
      
    </div>
    {openModal && <ImageModal photo={photo} setOpenModal={setOpenModal}  />}
  </>

// {()=>openModal(urlModal,description)}

  )
}

export default ImageCard