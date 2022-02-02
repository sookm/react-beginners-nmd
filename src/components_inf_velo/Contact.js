import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
     
    // Contact에서 state를 생성
    // -> state 생성시, 생성자 메소드에서 state를 초기화 해줘야 한다
    constructor(props) {
      super(props);
      this.state = {
            //keyword라는 input이 추가됨에 따라,
            //keyword라는 state를 공백으로 설정하여 추가 
            keyword: '',
            //contactData 라는 state생성, 배열로 받음. 이 내부에 데이터 객체가 들어있음
            contactData: [
            {name:'Abet', phone:'010-0000-0001'},
            {name:'Betty', phone:'010-0000-0002'},
            {name:'Charlie', phone:'010-0000-0003'},
            {name:'David', phone:'010-0000-0004'}
            ]
      }
    }
    
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }


    render() {
      //rendring 함수 내부에 다른 함수 생성-data를 파라미터로 받는 함수 생성
      // -const는 ES6의 새로운 문법, 변하지 않는 상수 생성 시 사용
      const mapToComponent = (data) => {

            //search를 위한 배열을 정리하기 위한 mapToComponent 수정

            // 오름차순 정렬 -> 파라미터 생략 가능
            /*data.sort((a,b) =>  { 
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
               }); */
                 // 알파벳 순서로 정렬
        // filter함수 생성 
            /*data = data.filter(
                (contact) => { //contact를 파라미터로 받는 함수 생성 
                    // 이름에 search에 내용 가질때만 true 반환하도록. 
                    return contact.name.toLowerCase().indexOF(this.state.keyword.toLowerCase()) > -1; 
                    
                    // 소문자도 반영하도록 toLowerCase
                    
                }
            );*/

            //새로운 배열 생성하여 리턴하도록
            //위에서 받은 data 배열을 contact로 받아들임. 그 데이터의 인덱스는 i
            return data.map((contact, i) => {
                return(<ContactInfo contact={contact} key={i}/>);
            });
      };

      return (
        <div>
            <h1>Contacts</h1>
            <h5>간단한 검색 기능이 있는 페이지 구현하기/삭제. 수정. 추가 가능</h5>
            <input
                name="keyword"
                placeholder='Search'
                value={this.state.keyword}
                onChange={this.handleChange}
            />

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