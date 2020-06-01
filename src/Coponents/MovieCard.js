import React, { useState } from "react";
import { Card, ListGroupItem, ListGroup, Carousel } from "react-bootstrap";
import ReactModal from 'react-modal';
import YouTube from '@u-wave/react-youtube';



export default function MovieCard(props) {
    const [modalOpen, setModalOpen] = useState(false)
    const apiKey = process.env.REACT_APP_APIKEY;
    const [id, setID] = useState('')

    let movie = props.movie;
    console.log(movie)


    function closeModal() {
        console.log("this function is working")
        setModalOpen(false)

    }


    async function getYoutubeVideo(id) {
        let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US
        `;
        let data = await fetch(url);
        let result = await data.json();
        console.log("result from card", result);
        let dataid = result.results[0].key
        setID(dataid)





    }



    return (

        <>
            <div>
                <ReactModal isOpen={modalOpen}>
                    <div className="youtube">
                        <YouTube
                            video={id}
                            autoplay

                        >

                        </YouTube>

                    </div>
                    <button onClick={() => closeModal()}> Close</button>

                </ReactModal>
            </div>
            <div className="hugo4">
                <div className="cards-columns">
                    <Card style={{ width: "15rem" }} onClick={() => {
                        setModalOpen(true);
                        getYoutubeVideo(movie.id)
                    }}>
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

