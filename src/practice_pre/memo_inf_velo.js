//작동원리 - 간단한 코드(phone)
// + html : <div id="root"></div>

class ContactInfo extends React.Component {
    render() {
      return (
        <div>{this.props.contact.name}{this.props.contact.phone}</div>
      );
    }
   };
   
   class Contact extends React.Component {
     
     // Contact에서 state를 생성
     // -> state 생성시, 생성자 메소드에서 state를 초기화 해줘야 한다
     constructor(props) {
       super(props);
       this.state = {
         //contactData 라는 state생성, 배열로 받음. 이 내부에 데이터 객체가 들어있음
         contactData: [
           {name:'Abet', phone:'010-0000-0001'},
           {name:'Betty', phone:'010-0000-0002'},
           {name:'Charlie', phone:'010-0000-0003'},
           {name:'David', phone:'010-0000-0004'}
         ]
       }
     }
     
     render() {
       //rendring 함수 내부에 다른 함수 생성-data를 파라미터로 받는 함수 생성
       // -const는 ES6의 새로운 문법, 변하지 않는 상수 생성 시 사용
       const mapToComponent = (data) => {
         //새로운 배열 생성하여 리턴하도록
         //위에서 받은 data 배열을 contact로 받아들임. 그 데이터의 인덱스는 i
         return data.map((contact,i) => {
           return(<ContactInfo contact={contact} key={i}/>);
         });
       };
       return (
         <div>
           {/*위에서 만든 메서드 사용, 파라미터는 this.state.contactData */}
           {mapToComponent(this.state.contactData)}
           {/* 반복되는 이 부분을 다시 다른 컴포넌트 생성하여 대체
           <div>Abet 010-0000-0001</div>
           <div>Betty 010-0000-0002</div>
           <div>Charlie 010-0000-0003</div>
           <div>David 010-0000-0004</div>  */}
         </div>
       );
     }
   };
   
   class App extends React.Component {
     render() {
       return (
         <Contact/>
       );
     }
   };
   
   
   ReactDOM.render(
     <App></App>,
     document.getElementById("root")
   );