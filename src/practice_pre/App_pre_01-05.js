import Button from "./Button";
import styles from"./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  /* 
    const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(iRunOnlyOnce, []);
  */
  useEffect(() => {
    console.log("CALL THE API...")
  }, []); /* 위 코드의 축약형 
  [] 공백으로 표현된 두번째 argument는 변화를 지켜볼 대상 없기때문에
  -> 1번만 실행됨 */
  useEffect(() => {
    /* useEffect에게 keyword의 조건 추가 
      -> keyword의 길이가 5자 이상일때만 실행 */
    if (keyword !== "" && keyword.length > 5 ) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); 
  /* useEffect에서 [keyword]인 두번째 argument는 
     keyword가 변화할 때만 코드를 실행하라고 알려주는 역할 */
  
  /* 
  useEffect(() => {
    console.log("I run when 'counter' chagnes.");
  }, [counter]); 
  useEffect(() => {
    console.log("I run when 'counter' & 'keyword' chagne.");
  }, [counter, keyword]);
  arguments에 한개 이상이 값 전달 가능, array 전달 가능
  -> 둘중에 한개의 state 변화 시 component 실행 */

  /* 
  [ useState ]
    -useState를 불러오면서, react의 useState import 자동활성화
    -이 useState는 counter와 setValue 로 array 를 전달할 것을 알고 있다.
    -default 값으로 useState에 0 전달 
    -counter는 0으로 시작하고, setValue는 counter를 modify하는 function이 된다.
  [ useEffect ]
    -useState는 state가 변할 때마다 매번 실행
    -useEffect는 한번만 실행됨 -> ex) api를 불러올 때 1번만 실행되도록 
  */
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default AppPre;
