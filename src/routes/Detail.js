import { useParams } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";

// [에러]  id로 url은 생성되나 data가 넘어와 생성X

function Detail() {
    //const [loading, setLoading] = useState(true);
    //const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = useCallback(async () => {
        const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json);
            //setMovie(json.data.movie)
            //setLoading(false)
        },[id]);
        useEffect(() => {
          getMovie();
        },[]);
        return <h1>Detail</h1>;
    /* return(
        <div>
            {loading? (
             <h1>Loading...</h1>
            ) : (
                <div>
                    {movie.map((movie) => (
                      <p>{movie.summary}</p> 
                    ))}
                </div>
            )}
        </div>
        ); */
}
export default Detail;