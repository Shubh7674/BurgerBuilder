import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // let transformedIngredents=Object.keys(props.ingredients)
    // .map(ikey=>{
    //     console.log(ikey);
    //     return [...Array(props.ingredients[ikey])].map((_,i)=>{console.log(i);
    //         return <BurgerIngredient key={ikey+i}type={ikey} />
    //     })
    // })

    let keys = Object.keys(props.ingredients);
    let values = Object.values(props.ingredients);
    let arrayIngre = [];
    let count = 0;
    for (let i = 0; i <= keys.length; i++) {
        for (let j = 1; j <= values[i]; j++) {
            arrayIngre.push(<BurgerIngredient key={count} type={keys[i]} />);
            count++;
        }
    }
    console.log(arrayIngre);

    if (arrayIngre.length === 0) {
        arrayIngre = <p>Please Start Adding Ingredients</p>
    }

    return (
        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top" />
            {arrayIngre}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;