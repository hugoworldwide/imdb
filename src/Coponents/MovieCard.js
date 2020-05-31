import React from "react";
import { Card, ListGroupItem, ListGroup, Carousel } from "react-bootstrap";

export default function MovieCard(props) {
    let movie = props.movie;
    return (
        <>
            <div className="hugo4">
                <div className="cards-columns">
                    <Card style={{ width: "15rem" }}>
                        <Card.Img className="movie-poster"
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                        />
                        <Card.Body className="hugo5">
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.overview}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Rating: {movie.vote_average}/10  </ListGroupItem>

                        </ListGroup>
                        <Card.Body>
                            <Card.Link>Release Date : {movie.release_date}</Card.Link>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}

