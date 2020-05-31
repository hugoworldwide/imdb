import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
    if (props.MovieList === null) {
        return <div>loading</div>;
    }
    return (
        <div className="hugo3">
            {props.movieList.map((item) => {
                return <MovieCard movie={item} />;
            })}
        </div>
    );
}