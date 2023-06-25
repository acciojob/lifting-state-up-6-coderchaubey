import React,{useState} from 'react'
import Child from './Child';

function Parent() {
  const [todos,setTodos]=useState(
    [{ id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Deploy to production", completed: false }]
 );
//  console.log(todos);
function setT(id){
  const updatedTodos = todos.map((item)=>{
    if(item.id==id){
        return {...item,completed:true}
    }
    return item;
  });

  setTodos(updatedTodos);
};
// console.log(todos);
  return (
    <div>
      <Child todos={todos} setT={setT}/>
    </div>
  )
}

export default Parent
