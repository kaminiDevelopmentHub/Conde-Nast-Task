import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Home from '../Home/Home';
import NewsSummary from '../NewsSummary/NewsSummary';


export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Redirect to="/Home" />
                            )
                        }}
                    />
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/Home/:value">
                        <Home />
                    </Route>
                    <Route path="/NewsSummary/:value">
                        <NewsSummary />
                    </Route>

                </Switch>
            </Router>
        );
    }
}

