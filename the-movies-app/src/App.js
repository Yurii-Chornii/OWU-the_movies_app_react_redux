import './App.css';
import React from "react";
import {BaseLayout} from "./layouts";
import {Home, MovieDetails} from "./pages";
import {Route, Switch, useHistory} from "react-router-dom";


export default function App() {
    const history = useHistory();
    return (
        <BaseLayout>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/movie/:id">
                    <MovieDetails/>
                </Route>

                <Route>
                    <h1>Page not found
                        <button onClick={() => history.push('/')}>
                            go home
                        </button>
                    </h1>
                </Route>
            </Switch>
        </BaseLayout>
    );
}
