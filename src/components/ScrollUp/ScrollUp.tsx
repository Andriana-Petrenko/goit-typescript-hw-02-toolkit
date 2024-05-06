import { CiSaveUp2 } from "react-icons/ci";
import css from "./ScrollUp.module.css"
import { useDispatch} from "react-redux";
import { changeButton } from "../../redux/photoSlice";
import { FC } from "react";
import { AppDispatch } from "../../redux/store";
const ScrollUp:FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleScrollUp = ():void=> {
        dispatch(changeButton(false));
    }

  return (
    <div className={css.scroll_up} onClick={handleScrollUp}><CiSaveUp2 size='50'/></div>
  )
}

export default ScrollUp