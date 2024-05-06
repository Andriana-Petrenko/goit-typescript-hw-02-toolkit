
import Modal from 'react-modal'
import css from './ImageModal.module.css'
import { FC } from 'react';
import { Photo } from "../../redux/photoSlice";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border:'none',
    backgroundColor: 'transparent',
    },
};

interface ImageModalProps{
  photo:Photo;
  setOpenModal:(isOpen: boolean) => void;
}

Modal.setAppElement('#root');
Modal.defaultStyles.overlay = Modal.defaultStyles.overlay || {};
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.871)';

const ImageModal: FC<ImageModalProps>  = ({ photo, setOpenModal }) => {

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  return (
    <Modal  isOpen={true} onRequestClose={handleCloseModal} style={customStyles}>
        <img className={css.modal_image} src={photo.urls.small} alt={photo.alt_description} />
    </Modal>
  )
}
export default ImageModal


