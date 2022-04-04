import React from 'react';
import './SearchForm.css';
import { useGlobalContext } from './context';
import {AiOutlineSearch} from 'react-icons/ai';

function SearchForm() {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = React.useRef('');

    React.useEffect(() => {
        searchValue.current.focus()
    },[])

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='seciton search'>
        <form className="section-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">
                    Search your favorite Cocktail
                </label>
                <div className="input">
                    <input
                        type="text"
                        onChange={searchCocktail}
                        ref={searchValue}
                        id='name'
                        placeholder='Search here...'
                    />
                    <button type='submit'>
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchForm