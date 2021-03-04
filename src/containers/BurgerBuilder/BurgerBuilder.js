import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICE={
    salad:15,
    cheese:10,
    meat:25,
    bacon:30
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            bacon: 0,
            meat: 0,
            salad: 0,
            cheese: 0
        },
        totalPrice:12,
        purchaseable:false
    }

    updatePurchaseState(ingredients){
        const sum=Object.values(ingredients).reduce((a, b) => a + b, 0);
        this.setState({purchaseable:sum>0});
    }
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updatedCount;
        const ingredientPrice=INGREDIENT_PRICE[type];
        const updatedTotalPrice=ingredientPrice+this.state.totalPrice;
        this.setState({totalPrice:updatedTotalPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler=(type)=>{debugger
        const oldCount=this.state.ingredients[type];
        if(oldCount>0){
        const updatedCount=oldCount-1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updatedCount;
        const ingredientPrice=INGREDIENT_PRICE[type];
        const updatedTotalPrice=this.state.totalPrice-ingredientPrice;
        this.setState({totalPrice:updatedTotalPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
        }
    }
    render() {

        const disabledInfo={...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return (
            <>
            <Modal></Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                price={this.state.totalPrice}
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabledInfo={disabledInfo}
                orderDisable={this.state.purchaseable}
                />
                
            </>
        );
    }
}

export default BurgerBuilder;