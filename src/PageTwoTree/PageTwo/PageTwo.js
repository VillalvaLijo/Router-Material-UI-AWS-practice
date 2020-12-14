import React from 'react';
import {Component} from 'react';
import PageTwoRouteMatchHook from './PageTwoRouteMatchHook';

class PageTwo extends Component{

    render(){
        return(
            <div className="PageTwoMainDiv">
                <h1>Page Two</h1>
                <h3>This is an exercise in nested routing.</h3>
                <PageTwoRouteMatchHook/>
            </div>
        )
    }
}

export default PageTwo;