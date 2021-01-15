import './App.css';
import React from "react";
import {BaseLayout} from "./layouts";
import {Home} from "./pages";


export default function App() {

    return (
        <BaseLayout>
            <Home/>
        </BaseLayout>
    );
}
