import React from "react";

export const FilmList = ({items}) => {
    console.log(items , 'from FilmList')
    return(
        <div>
            {items.map(({original_title}) => <h2>{original_title}</h2>)}
        </div>
    )
}
