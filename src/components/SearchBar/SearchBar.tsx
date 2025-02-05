import toast, { Toaster } from 'react-hot-toast'
import css from "./SearchBar.module.css"
import { FaSearch } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { changePage,changeItems } from '../../redux/photoSlice';
import { FormEvent, FC } from 'react';
import { AppDispatch } from '../../redux/store';


const SearchBar: FC  = () => {
    const dispatch = useDispatch<AppDispatch>();
const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target  as HTMLFormElement;;
    const inputSearch = (form.querySelector<HTMLInputElement>('input[name="search"]') || {}).value;
          if (!inputSearch || inputSearch.trim() === "") {
              toast('Please enter search term!', {
                  style: {
                      borderRadius: '10px',
                      background: 'linear-gradient(269deg, #10d1eb 0%, #e260e2 80%)',
                      color: '#fff',
                  },
              });
              return;
  }
  
  dispatch(changeFilter(inputSearch));
  dispatch(changePage(1));
  dispatch(changeItems([]));
  }

  return (
<header className={css.header_search} id="header">
    <form className={css.form} onSubmit ={handleOnSubmit}>
       <input className={css.input_search} type="text" autoComplete="off" autoFocus  placeholder="Search images and photos" name="search"/>
       <button className={css.btn_search} type="submit"><FaSearch  size='16' fill='#010147'/></button>
       <Toaster position="top-right" reverseOrder={false}/>
  </form>
</header>

  )
}

export default SearchBar