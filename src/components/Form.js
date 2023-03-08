import React, { useState } from "react";
import '../App.css';
function Form() {
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)
  const [z, setZ] = useState(null)
  const [c, setC] = useState(false)
  const [o, setO] = useState(null)

  const [Show, setShow] = useState(false)

  const print = () => {
    setShow(true);
    console.log(x, y, z, c, o)
  }
  // const clear=()=>{
  //   setX(null);
  //   setY(null);
  //   setZ(null);setO(null);setC(null);
  // }
  return (
    <div className='App'>

      <form onSubmit={(e) => { e.preventDefault() }}>

      

        <input type="text" placeholder="Enter name" onChange={(e) => { setX(e.target.value) }} /><br /><br />
        <input type="number" placeholder="Enter roll no" onChange={(e) => { setY(e.target.value) }} /><br /><br />
        <input type="text" placeholder="Enter college name" onChange={(e) => { setZ(e.target.value) }} /> <br /><br />
        <input type="checkbox" onChange={(e) => { setC(e.target.checked) }} /> I accept all terms and conditions<br /><br />
        <select onChange={(e) => { setO(e.target.value) }} >
          <option>PVP</option>
          <option>Shaheer</option>
        </select><br /><br />

        <button type='submit' onClick={print}>PRINT</button>
        {/* </form><button style={{ marginLeft: '50px' }} onClick={() => { setShow(false) }}>CLEAR</button> */}
      </form>
        {Show ? <p>name is {x} <br /> roll is {y}<br /> college is {z}<br />checked   {c}<br /> fav actor is {o}  </p> : ' '}
    </div>
  ) 
}

export default Form;


