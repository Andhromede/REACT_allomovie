// import { Link } from 'react-router-dom';
import CardFilm from '../components/CardFilm';
import { useState, useEffect } from "react";
import axios from 'axios';


function HomeView() {
    const [films, setFilms] = useState();

    // useEffect(() => {
    //     axios.get('https://api.themoviedb.org/4/discover/movie', {
    //         headers: { 'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWUyYjAwZjk4NzkyZjMxOThmN2E5ZTc5OTIzMzA0ZSIsInN1YiI6IjYwMmU2ZmVkZTg2MDE3MDAzZjAxMzJhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rusDcNeJxsaOmFO1roHZuz9dA3hSRLf7sf5s_7xADo' }
    //     }).then(res => {
    //         const token = res.data
    //         const films = res.data;
    //         setFilms(films);
    //         console.log(films.results);
    //         console.log(token);
    //     })

        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=f312b5f762468b425f5e699685aa3f49')
             .then(res => {
                const films = res.data;
                setFilms(films);
                // console.log(films);
        }, []);

        // console.log(films);


    return (
        <>
            <div className="inline-block">
                <CardFilm tablo={films} />
            </div>
        </>
    );
}


export default HomeView;
