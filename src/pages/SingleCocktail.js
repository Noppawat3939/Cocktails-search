import React,{useState, useEffect} from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Loading from '../components/Loading';
import {IoIosArrowBack} from 'react-icons/io';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {
        const resp = await fetch(`${url}${id}`);
        const data = await resp.json();
        if(data.drinks) {
          const {
              strDrink:name,
              strDrinkThumb:image,
              strAlcoholic:info,
              strCategory:category,
              strGlass:glass,
              strInstructions:instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5
          } = data.drinks[0]
          const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5
        ]
        const newCocktail = {
          name,image,info,category,glass,instructions,ingredients
        }
        setCocktail(newCocktail)

        }else {
          setCocktail(null)
        }
        setLoading(false)
      }catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail()
  }, [id])

  if(loading) {
    return <loading />
  }
  if(!cocktail) {
    return <h2 className='section-title'>
      no cocktail to display
    </h2>
  }

  const {name, image, category, info, glass, instructions, ingredients} = cocktail;

  return (
    <section className='section cocktail-section'>
      <NavLink to='/' className='btn'>
        <IoIosArrowBack />
        Back
      </NavLink>
      <h2 className='section-title'>{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span>name: </span>
            {name}
          </p>
          <p>
            <span>category: </span>
            {category}
          </p>
          <p>
            <span>info: </span>
            {info}
          </p>
          <p>
            <span>glass: </span>
            {glass}
          </p>
          <p>
            <span>instructions: </span>
            {instructions}
          </p>
          <p>
            <span>ingredients: </span>
            {ingredients.map((item, index) => {
              return (
                item ? <p key={`item_${index}`}>{item}</p> : null
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail