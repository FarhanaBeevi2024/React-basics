import './App.css';
import mystyle from '../src/myStyle.module.css'
import Random from './Random'
import Example from './Example'
import User from './User';

function App() {
  //js code
  const h1style = {color:'green', fontSize :'70px', backgroundColor:'yellow'}

  const subject='REACT.js'
 const username= 'maxwell'
  return (
  //html code
  <>
    <div>
    <h1 style={h1style}>My first React Application ......</h1>
    <h2>Demo</h2>
    <p className = {mystyle.reactStyle}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita, doloremque odit voluptatem, 
      commodi tempora at eius quibusdam eaque voluptate aut et, enim quasi harum mollitia est soluta incidunt in!or sit amet consectetur adipisicing elit. Autem expedita, doloremque odit voluptatem, 
      commodi tempora at eius quibusdam eaque voluptate aut et, enim quasi harum mollitia est soluta incidunt in!or sit amet consectetur adipisicing elit. Autem expedita, doloremque odit voluptatem, 
      commodi tempora at eius quibusdam eaque voluptate aut et, enim quasi harum mollitia est soluta incidunt in!Lorem
     </p>
    </div>
    <h3>My subject is: {subject}</h3>
    <h3> Username is : {username} </h3>
    <h1 className={[mystyle.style2,mystyle.style3].join(' ')}>Components</h1>
  <ul>
    <li> <Random uname={username} /> </li>
    <li> <Example sub={subject} age={27} /> </li>
  </ul>
  <User/>
  </>
  );
}

export default App;
