import { useDispatch, useSelector } from "react-redux";
import css from "./LoadMoreBtn.module.css"
import { selectPage } from "../../redux/selectors";
import { changePage } from "../../redux/photoSlice";
import { FC } from "react";
import { AppDispatch } from "../../redux/store";


const LoadMoreBtn:FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPage = useSelector(selectPage);

    const handleLoadMore = (): void => {
        dispatch(changePage(currentPage + 1));
    }
    return (
        <>
            <button type="button" id="load_btn"  className={css.load_more_btn} onClick={handleLoadMore}>Load more</button>
            
        </>
        
  )
}

export default LoadMoreBtn



