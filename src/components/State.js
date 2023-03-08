import React from 'react'

function State(props) {
  const [c,f]=props.a;
  function s(){
    f(c+20);
  }
  return (
    <div>
      <h1>{c} </h1>
      <button onClick={s}>count</button>
    </div>
  )
}

export default State