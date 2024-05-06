import { useEffect} from "react";
import SearchBar from './SearchBar/SearchBar';
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";

import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading, selectNameFilter, selectPage, selectPhotos} from "../redux/selectors";
import { fetchPhotos } from "../redux/operations";

const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const photos = useSelector(selectPhotos);
  const dispatch = useDispatch();
  const inputSearch = useSelector(selectNameFilter);
  const currentPage = useSelector(selectPage);
  useEffect(() => {
     if (inputSearch==='') return;
    dispatch(fetchPhotos({ inputSearch, page: currentPage }));
  }, [dispatch, inputSearch, currentPage]);

  return (
    <>
      <SearchBar/>
      {error && <ErrorMessage />}
      {loading && !error &&<Loader />}
      {photos.length !== 0 && <ImageGallery />}
    </>
  );
};
export default App


