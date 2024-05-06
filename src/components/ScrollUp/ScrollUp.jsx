import { CiSaveUp2 } from "react-icons/ci";
import css from "./ScrollUp.module.css"
import { useDispatch} from "react-redux";
import { changeButton } from "../../redux/photoSlice";
const ScrollUp = () => {
   const dispatch = useDispatch();
  return (
    <div className={css.scroll_up} onClick={() => { dispatch(changeButton(false)) }}><CiSaveUp2 size='50'/></div>
  )
}

export default ScrollUp