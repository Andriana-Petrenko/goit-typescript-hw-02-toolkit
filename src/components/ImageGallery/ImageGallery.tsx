
import { useSelector } from "react-redux";
import { selectLoadButton, selectPhotos, selectScrollButton } from "../../redux/selectors";
import ImageCard from "../ImageCard/ImageCard"
import ScrollIntoView from 'react-scroll-into-view'
import ScrollUp from "../ScrollUp/ScrollUp";
import css from "./ImageGallery.module.css"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect, useRef, FC} from "react";

const ImageGallery: FC  = () => {
  const lastImageRef = useRef<HTMLLIElement | null>(null);
  const scrollBtn = useSelector(selectScrollButton);
  const photos = useSelector(selectPhotos);
  const loadButton = useSelector(selectLoadButton);
  useEffect(():void | (() => void) => {
    if (lastImageRef.current) {
      lastImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [photos]); 
     return (<>
        <ul className={css.gallery_list} >
            {photos.map((photo, index) => {
              const isLastImage = index === photos.length - 1;
                return (
          <li className={css.gallery_item} key={photo.id} ref={isLastImage ? lastImageRef : null}>
            <ImageCard photo={photo} />
          </li>
        );
            })}

       </ul>
       {loadButton && <LoadMoreBtn />}
       {scrollBtn && <ScrollIntoView selector="#header"><ScrollUp/></ScrollIntoView>} 
</>
    )

}

export default ImageGallery
