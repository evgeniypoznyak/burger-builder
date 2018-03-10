import React from 'react';
import classes from './DrawerToggle.scss';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.sideDrawOpen}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
export default drawerToggle