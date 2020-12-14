import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import PageTwoNestedPageOne from '../PageTwoNestedPages/PageTwoNestPageOne/PageTwoNestedPageOne';
import PageTwoNestedPageTwo from '../PageTwoNestedPages/PageTwoNestedPageTwo/PageTwoNestedPageTwo';
import PageTwoNestedPageThree from '../PageTwoNestedPages/PageTwoNestedPageThree/PageTwoNestedPageThree';


export default function PageTwoNestedPages(){
    let match = useRouteMatch();

    return(
        <div>

            <h2>These Are the Nested Pages within Page Two</h2>
            <Router>
            <ul>
                <li>
                    <Link to={`${match.url}/PageTwoNestedPageOne`}>P2 -- Page One</Link>
                </li>
                <li>
                    <Link to={`${match.url}/PageTwoNestedPageTwo`}>P2 -- Page Two</Link>
                </li>
                <li>
                    <Link to={`${match.url}/PageTwoNestedPageThree`}>P2 -- Page Three</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.url}/pageTwoNestedPageOne`}>
                    <PageTwoNestedPageOne/>
                </Route>
                <Route path={`${match.url}/pageTwoNestedPageTwo`}>
                    <PageTwoNestedPageTwo/>
                </Route>
                <Route path={`${match.url}/pageTwoNestedPageThree`}>
                    <PageTwoNestedPageThree/>
                </Route>
            </Switch>
            </Router>
        </div>
    )
}