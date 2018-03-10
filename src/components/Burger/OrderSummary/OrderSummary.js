import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {

    componentWillUpdate() {
        // console.log('OrderSummary componentWillUpdate');
    }


    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((ingKey) => {
                return (
                    <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {ingKey}
                    </span>:
                        {this.props.ingredients[ingKey]}
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
                <div>Total: <strong>${this.props.price.toFixed(2)}</strong></div>
                <p>Continue to checkout?</p>
                <Button btnType={'Danger'} clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType={'Success'} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }



}
export default OrderSummary