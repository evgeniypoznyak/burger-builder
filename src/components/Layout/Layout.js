import React from 'react';

import Aux from '../../hoc/AuxComponent'
import classes from './Layout.scss'

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout