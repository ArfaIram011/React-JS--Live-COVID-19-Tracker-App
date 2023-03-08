import React,{useState} from 'react';
export default function App() {
  const[x,y]=useState('its Arfa Iram from ');
  const [show,setshow] = useState(false);
  
  const changeCount=(e)=>{
    
      let temp=e.target.value;
      y(x+temp);
      setshow(false);
  }
  
 const funcshow=()=>{
         setshow(true)
  }
  return (
      <div className="App">
        <input type="text" placeholder='Enter name' onChange={changeCount}/>
        
        <button onClick={funcshow} >print</button>
        {show?<p >{x}</p>:" "}
    </div>
  );
}





    
       

// const data=[
//   {name:'arfa',roll:513,college:'jpnce'},
//   {name:'arfa1',roll:514,college:'jpnce'},
//   {name:'arfa2',roll:515,college:'jpnce'},
//   {name:'arfa3',roll:516,college:'jpnce'},
//   {name:'arfa4',roll:517,college:'jpnce'}
// ];