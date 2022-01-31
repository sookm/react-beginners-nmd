import { useState } from "react"
import { useEffect } from "react/cjs/react.development";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        /* >console > network > tickers를 request한 것 확인 가능 */
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);  /* setCoins로 json 결과를 받는 동시에 */
                setLoading(false); /* loading은 false 되도록 
                                   => 브라우저 창에서 Loading... 이 보이다가 바로 사라짐*/
            });
        /* response(web의 console 내부의)에서 json 추출하기 
            -> then으로 response를 받아서 response.json으로 return하기 
            -> (and)then return한 json을 console.log(json) (-> setCoins(json)으로 변경)
            --> 결과적으로 console.log로 보이는 json이 전체 coin data 
            --->> 이 data를 밑의 return component로 보여주기 위해
                  -> useState를 이용하기  */
    }, []);
    return (
    <div>
        <h1>The Coins {loading? "" : `(${coins.length})`}</h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
            <ul> {/* 코인 API에는 이미 key가 있으므로 안 가져와도 됨 */}
                {coins.map((coin) => 
                <li>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD </li>)}
            {/* coins로 받은 각각의 값을 coin이 가지는 것  */}
            </ul>
            )}
        
            {/* {loading ? <strong>Loading...</strong> : null} => null 자리 변경 */}
            {/* if loading -> show loading..., else show nothing(null) */}
       
    </div>
    );
}

export default AppPre;