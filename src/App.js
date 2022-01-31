import {
    BrowserRouter as Router,
    Switch,
    Route,
}   from "react-router-dom";
import Home from"./routes/Home";
import Detail from "./routes/Detail";

// App.js에 있던 내용들 -> Home.js로 
// => App.js는 router를 render하게 된다.
// router는 URL을 보고있는 component, router는 Home component를 보여줄게 될 것
// 요구에 따라서, router는 Detail component로 moive/123 등을 보여줌 
// => App.js는 새로운 component들을 redner하게 된다.

function App() {
    return (
        <Router>
            <Switch>
            {/* -Route : URL의미
                -Switch : Route(URL)를 찾고, Route를 찾으면,component를 렌더링 */}
                <Route path="/moive/:id">
                            {/* Movie component에 id도 필요
                                -> 그 위 부모인 Home 에서 movie의 id 렌더링 필요 */}
                    <Detail />
                </Route>
                <Route path="/"> {/* "/" means home  */}
                    {/* Route안에 component를 씀 */}
                  <Home/> 
                </Route>
            </Switch>
        </Router>
    );    
}
export default App;