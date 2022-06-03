import styles from "./Rating.module.scss";
import { useMovieContext } from './../../Context/MovieContext/MovieProvider';
import { AiFillStar } from 'react-icons/ai'
import { useState, useEffect } from 'react';


export default function Rating({ movieData, setRender }) {
    const [rating, setRating] = useState(0);
    const addRating = useMovieContext().movieRating

    useEffect(() => {
        if (movieData) {
            setRating(movieData.rating);
        }

        //eslint-disable-next-line
    }, [movieData]);

    return (
        <>
            {movieData &&
                <div className={styles.Rating}>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= rating ? styles.Rating__On : styles.Rating__Off}
                                onClick={() => {
                                    movieData && addRating(movieData.id, index)
                                        .then(() => { setRender(prev => !prev); setRating(index) })
                                }}
                            >
                                <span className={styles.Rating__Span}><AiFillStar className={styles.Rating__Star} /></span>
                            </button>
                        );
                    })}
                </div>
            }
        </>
    );
};