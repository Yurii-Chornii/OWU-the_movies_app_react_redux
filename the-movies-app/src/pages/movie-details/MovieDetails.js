import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {moviesService} from "../../services";
import styles from './MovieDetails.module.css'

export const MovieDetails = () => {
    const {id} = useParams();
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const getMovieDetails = async () => {
        try{
            setIsLoading(true);
            const data = await moviesService.getMovieDetailsById(id)
            setFilmDetails(data);
        }catch (e){
            console.error(e)
        }finally {
            setIsLoading(false);
        }

    }
    useEffect(() => {
        getMovieDetails();
    }, [])

    if ((isLoading && !filmDetails) || isLoading === null){
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className={styles.posterWrapper}>
                <img src={`https://image.tmdb.org/t/p/w200${filmDetails.poster_path}`} alt="film poster"/>
            </div>
            <h1>{filmDetails.original_title}</h1>
            <h2>{filmDetails.tagline}</h2>
            <h3>{filmDetails.genres.map(el => <span key={el.id}> - {el.name} - </span>)}</h3>
        </div>
    )
}
