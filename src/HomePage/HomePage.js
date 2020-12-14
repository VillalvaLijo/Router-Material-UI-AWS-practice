import React from 'react';
import {Component} from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
}from 'react-router-dom';

import {AppBar,
        Toolbar,
        IconButton,
        Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import HomePageNavBar from './HomePageNavBar/HomePageNaveBar';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

class HomePage extends Component{

    

    render(){
        // const classes = useStyles();  //React Hook "useStyles" cannot be called in a class component
        //React Hooks must be called in a React function component or a custom React Hook function. see react-hooks/rules-of-hooks

        return(
            <div className="HomePageMainDiv">
            {/* <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color ="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        Site Navigation
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <HomePageNavBar/>
            <h1>Home Page!</h1>

            <div className="ULPageRouter">
                <BrowserRouter>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                <Link to="/PageOne">Page One</Link>
                                </li>
                                <li>
                                    <Link to="/PageTwo">Page Two</Link>
                                </li>
                                <li>
                                    <Link to="/PageThree">Page Three</Link>
                                </li>
                                <li>
                                    <Link to="/PageFour">Page Four</Link>
                                </li>
                                <li>
                                    <Link to="/PageFive">Page Five</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/PageOne">
                                <PageOne/>
                            </Route>
                            <Route path="/PageTwo">
                                <PageTwo/>
                            </Route>
                            <Route path="/PageThree">
                                <PageThree/>
                            </Route>
                            <Route path="/PageFour">
                                <PageFour/>
                            </Route>
                            <Route path="/PageFive">
                                <PageFive/>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
            </div>
        )
        
    }
}

export default HomePage;