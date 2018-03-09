import React from 'react';
import classes from './Toolbar.scss'
import Logo from '../../Logo/Logo'
import NavigationsItems from '../../NavigationItems/NavigationItems'
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle'

const toolbar  = (props) => (
    <header className={classes.Toolbar}>

        <DrawerToggle sideDrawOpen={props.sideDrawOpen}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>

        <nav className={classes.DesktopOnly}>
           <NavigationsItems/>
        </nav>

    </header>
)
export default toolbar