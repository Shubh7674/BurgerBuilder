import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
    console.log(props)
    return (
       
        <div className={classes.BuildControls}>
            <p>Current Price : {props.price}</p>
            {controls.map(ctrl => {
                console.log(ctrl);
                return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabledInfo[ctrl.type]} />
            })}
            <button className={classes.OrderButton} disabled={!props.orderDisable}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;