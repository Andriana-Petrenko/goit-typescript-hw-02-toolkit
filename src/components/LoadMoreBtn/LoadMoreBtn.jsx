import { useDispatch, useSelector } from "react-redux";
import css from "./LoadMoreBtn.module.css"
import { selectPage } from "../../redux/selectors";
import { changePage } from "../../redux/photoSlice";


const LoadMoreBtn = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPage);

    const onLoadMore = () => {
        dispatch(changePage(currentPage + 1));
    }
    return (
        <>
            <button type="button" id="load_btn"  className={css.load_more_btn} onClick={onLoadMore}>Load more</button>
            
        </>
        
  )
}

export default LoadMoreBtn



