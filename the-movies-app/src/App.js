import './App.css';
import React from "react";
import {moviesService} from './services'

export default function App (){
    React.useEffect(() => {
        moviesService.getMovies().then(console.log)
    }, [])
    return (
        <div>

        </div>
    );
}
