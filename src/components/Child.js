import React from "react";

function Child({ todos, setT }) {
  return (
    <div>
      {todos.map((item) => (
        <div>
            <ul key={item.id}></ul>
            <li>{item.text}
          { 
          !item.completed &&
            (
            
               <button onClick={()=>setT(item.id)}>Complete</button>
            )
          }
          </li>
          <ul/>
        </div>
      ))}
    </div>
  );
}

export default Child;
