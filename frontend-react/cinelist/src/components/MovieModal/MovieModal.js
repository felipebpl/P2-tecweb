import React,{useEffect, useState} from 'react';
import './MovieModal.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import CancelIcon from '@material-ui/icons/Cancel';
import axios from "axios";

const MovieModal = ({backdrop_path, title, overview,name, release_date, first_air_date, vote_average, setModalVisibility}) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [trailerUrl , setTrailerUrl] = useState("") 
    const [click, setClick] = useState(true);
    const [filmesassistidos, setFilmesAssistidos] = useState([]);
   
    const handleLista = () => {
        setClick(!click);
        //posta Filme
        //para isso funcionar você deve implementar a ação de postar no Django REST
        //Note que o comando abaixo envia uma requisição com o verbo POST
        axios
          .post('https://cinelist-backend.herokuapp.com/minha-lista/')
          .then((res) => setFilmesAssistidos(res.data))
          .catch(function (error) {

            console.log(JSON.stringify(error))
          });
        //   .catch((err) => {
        //     console.error("ops! ocorreu um erro -> " + err);
        //   });
      };

    const AddOrDelete = (click, filme) => {
        if(click){
            axios
    	        .delete(`https://cinelist-backend.herokuapp.com/minha-lista/${filme.id}`)
                .then((res) => console.log(res.data));
        }else{
            axios
          .post('https://cinelist-backend.herokuapp.com/minha-lista/', {
            "id": 3,
            "title": "Fight Club",
            "description": "Drama, Action",
            "year": 1999,
            "cast": "Brad Pitt, Ed Norton",
            "director": "David Fincher"
        })
          .then((res) => setFilmesAssistidos(res.data));

        }
    }

    const opts = {
        height : "390",
        width : "100%",
        playerVars : {
            autoplay : 1,
        },
    }
    const randomPorcentaje = ()=>{
        return Math.floor(Math.random() * 100);
    }


    useEffect(() => {
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(title || name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error))
        }
    }, [])
    
    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal">
                    <span onClick={()=>setModalVisibility(false)}className="modal-close"><CancelIcon/></span>
                    {trailerUrl ? <Youtube videoId={trailerUrl} opts={opts}/> :                     
                        (<img
                        className="modal__poster-img"
                        src={`${base_url}${backdrop_path}`}
                    />)}
                    
                    <div className="modal__content">
                        <p className="modal__details">
                            <span className="modal__user-perc">{randomPorcentaje()}% for you</span> {release_date ? release_date : first_air_date} 
                            <div className="minha-lista">
                            <div className="minha-lista-btn" onClick={handleLista}>
                                <i className={click ? 'far fa-plus-square fa-2x' : 'fas fa-check fa-2x' } />
                                <p className="minha-lista-txt"> Minha Lista </p >
                            </div>
                            </div>

                        </p>
                        <h2 className="modal__title">{title ? title : name}</h2>
                        <p className="modal__overview">{overview}</p>
                        <p className="modal__overview">Vote Average: {vote_average}</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MovieModal