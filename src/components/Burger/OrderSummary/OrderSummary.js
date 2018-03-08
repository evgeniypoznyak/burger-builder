import React from 'react';
import Aux from '../../../hoc/AuxComponent'
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map((ingKey) => {
            return (
                <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {ingKey}
                    </span>:
                    {props.ingredients[ingKey]}
                </li>
            )
        });


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <div>Total: <strong>${props.price.toFixed(2)}</strong></div>
            <p>Continue to checkout?</p>
            <Button btnType={'Danger'} clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}
export default orderSummary