import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./Coponents/MovieList"
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';



const apiKey = process.env.REACT_APP_APIKEY;
function App() {
  let [movieList, setMovieList] = useState(null);


  const getNowPlayingMovie = async (button) => {
    let url = `https://api.themoviedb.org/3/movie/${button}?api_key=${apiKey}&language=en-US&page=1`;
    let data = await fetch(url);
    let result = await data.json();
    setMovieList(result.results);
    console.log("movies", result.results);
  };


  useEffect(() => {
    getNowPlayingMovie("now_playing");
  }, []);




  if (movieList === null) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Netflix</Navbar.Brand>

          {/* <Form inline className="searchbar ">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
            <Button variant="outline-light">Search</Button>
          </Form> */}


          <Nav className="mr-auto hugo1">
            <Nav.Link href="#movies">Start</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#forum">Latest Release</Nav.Link>
            <Nav.Link href="#forum">My List</Nav.Link>
          </Nav>

          <Nav className="hugo2">
            <Nav.Link href="#movies">Sign In</Nav.Link>
            <Nav.Link href="#series">Join Free</Nav.Link>
          </Nav>


        </Navbar>

        <div>
          <div className="buttons" >
            <Button onClick={() => getNowPlayingMovie("top_rated")} className="buttons border" size="lg" variant="light">Top Rated</Button>
            <Button onClick={() => getNowPlayingMovie("popular")} className="buttons border" variant="light">Popular</Button>
            <Button onClick={() => getNowPlayingMovie("upcoming")} className="buttons border" variant="light">Upcoming</Button>
            <Button className="buttons border" variant="light">Netflix</Button>
            <Button className="buttons border" variant="light">Movie Theat</Button>
            <Button className="buttons border" variant="light">Drama</Button>
            <Button className="buttons border" variant="light">Comedy</Button>
            <Button className="buttons border" variant="light">Light</Button>
            <Button className="buttons border" variant="light">Drama</Button>


          </div>

        </div>
        <div>
          <MovieList movieList={movieList} />



        </div>

        <div>

        </div>
      </div>
    </div >

  );
}

export default App;