import React,{useState} from 'react'


 function User() {
    const [color, setColor] = useState({
        color1 :'RED',
        color2 : 'GREEN',
        color3 : 'YELLLOW'
    })
    console.log(color);
    const change = (data)=>{
        setColor({...color,color3:data})
    }
  return (
    <>
   
    <div> User Component</div>
      <ul>
        <li> {color.color1}</li>
        <li> {color.color2}</li>
        <li> {color.color3}</li>
      </ul>
      <button className='btn btn-warning' onClick={()=>change('blue')}>Change</button>
    </>
  
  )
}

export default User