import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it's tastes well!</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <Burger ingredients={props.ingredients}/>
                    <Button
                        clicked={props.checkoutCancelled}
                        btnType={'Danger'}
                    >CANCEL</Button>
                    <Button
                        clicked={props.checkoutContinued}
                        btnType={'Success'}
                    >CONTINUE</Button>
                </div>
            </div>
        </div>
    )
}

export default checkoutSummary;