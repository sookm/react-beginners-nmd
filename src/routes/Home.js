// npm install react-router-dom
// Home route는 App component 전체를 가짐 

import { useState, useEffect } from "react";
import Movie from "./Movie";

function Home() {
    // App.js에 있던 모든 내용 
    const [loading, setLoading] = useState(true);
    /* first item:loading 은 data, second item:setLoading은 data수정하는 함수 */
    const [movies, setMovies] = useState([]);
    // getMovies는 async function 
    const getMovies = async() => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    /* 참고로 위의 코드는 아래와 같이 줄임 가능. wrapping 같은 것 
    // await 다음, await을 하나 더 불러오고 -> 뒤에서 .json(); 추가로 
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };  */

    //useEffect로 위의 getMovies 함수 호출 
    useEffect(() => {
        getMovies()
    }, []);

    /* // 요즘은 useEFfect에 fetch와 then 보다는, async, await을 사용
    useEffect(() => {
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
        .then((response) => response.json())
        // .then(json => console.log(json)); 이렇게 확인 뒤에 아래처럼 jason 받기
        .then((json) => {
            setMovies(json.data.movies)
            setLoading(false);
        });
    }, []); */

    //console.log(movies);
    return (
        <div>
            {loading? (
             <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                      <Movie // Movie가 prop으로 받는 요소들을 의미함 
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}  
                       // coverImg는 임의 name, {}는 API에서 가져오므로 변경X
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                       />  
                    ))}
                </div>
            )}
        </div>
        );

}
export default Home;