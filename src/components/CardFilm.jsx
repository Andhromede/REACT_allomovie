import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from "react";

function CardFilm() {

    const [films, setFilms] = useState();

    // const films = '?' + Object.keys(values)
    //                 .map(key => key + '=' + values[key] + '&')
    //                 .join('');

    useEffect(() => {

        // fetch(`https://www.themoviedb.org/search/movie`, {
        //     method: "get",
        //     headers: { "content-type": "application/json", },
        // }).then((resp) => resp.text())
        //     .then((text) => {
        //         let result = text.toJson();
        //         setFilms(result);
        //     }).catch(console.log());

        // console.log(films);
    }, []);



    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title>Card Title</Card.Title>

            <Card.Body>
                <Card.Img variant="" src="holder.js/100px180" />

                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}

                <Button variant="primary"><a href={""} className="text-light">Détails</a></Button>
            </Card.Body>
        </Card>
    );
}

export default CardFilm;