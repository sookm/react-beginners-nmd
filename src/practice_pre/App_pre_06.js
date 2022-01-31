import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    /* toDo로 생성되는 것을 arrya로 받기 위한 변수*/
    const [toDos, setToDos] = useState([]); 
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;  /* toDo가 비어있으면, to kill this function ?? */
        }
        setToDo(""); /* else, input을 비워주기로 
                        -> setToDo는 toDo값을 수정하는 함수고,
                           toDo는 input과 연결돼 있기때문에 
                           -> toDo값 변경하면, input값도 변함 */ 
        setToDos(currentArray => [toDo, ...currentArray]);
                /* 현재입력한 toDo에 직전 array 더하기
                currentArray는 []로 입력받은 SetToDos 값을 가져옴 
                -> toDo는 string값 text 
                -> ... 으로 표현되는 currentArray안의 값 합해서
                -> new state를 생성함 */
        setToDo(""); /* 입력받은 toDo 값을 ""로서 string 으로 갖고 있음 */
        

        /* setToDos(currentArray => []);
           = setToDos(function(currentArray)) { reuturn }  */                       
                            /* [] : new array를 return한다 */   
    };
    console.log(toDos);
    return (
        <div>
            <h1>My To dos ({toDos.length})</h1>
            {/* todo 개수 카운트 ->  toDos.length js문법 -> {}사용 */}
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange} 
                    value={toDo}
                    type="text" 
                    placeholder="Write your to do ..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            {/* js map : 하나의 array에 있는 각각의 item을 
                         map이 원하는 것으로 모두 변경 
                         -> new array 생성  
                        ex) ['there', 'are', 'you'].map(() => ":)") 
                          > (3) [':)', ':)', ':)' ] 
                        ex) ['there', 'are', 'you'].map((item) => 
                            item.toUpperCase()) 
                          > (3) ['THERE', 'ARE', 'YOU']  */}
            <ul>
            {toDos.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
    {/* 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 
    key를 넣어 고유하게 만들어줘야함
    map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미

    {toDos.map((item, index) => {item})}
    즉, {{item},{item},{item}...}
    배열을 만들어 각자 고유의 key를 가지게 함 */}
            </ul>
        </div>
    );
}

export default AppPre;