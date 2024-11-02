import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { Container } from 'react-bootstrap';



function ToDoList() {
 
const [inputText, setInputText]= useState()
const [ saveText, setSaveText] = useState([])
const [editIndex, setEditIndex] = useState(null); 

// value ko get krny k liy 
    const handlevalue =(event)=>{
      setInputText (event.target.value)}


 // value ko store kr ky add krny k liy 
     const add =(event)=>{
     event.preventDefault()
    if(inputText == ''){
      alert('please enter value')
    }else if (editIndex !== null) {
      const updatedTodos = [...saveText];
      updatedTodos[editIndex] = inputText;
      setSaveText(updatedTodos);
      setEditIndex(null);
  } else { setSaveText([...saveText, inputText ])}
      setInputText ('')}

// Edith button    

const Edith = (index)=>{
  let confirmEdith = window.confirm(`kya ap ye deta ${index} Edith krna chahte hain..?`)
  if(confirmEdith){
  setInputText(saveText[index]);
    setEditIndex(index);  
  ;}}



// delete krny ka arrow function
   const Delete =(indexDelete)=>{
    // let confirmDelete = window.confirm(`kya ap ye deta ${indexDelete} delete krna chahte hain..?`)
    // if(confirmDelete){}
    let newValue = [...saveText]
    newValue.splice(indexDelete, 1)
    setSaveText(newValue)}

// Delete All button
const allDataDelete = () => setSaveText([]);
   

  
  

  return (
    <>

    <Container className='todo '>
      <div className='div '>
      <Row className='todo-row '><Col className='todo-content1 mt-1 '>  
     <form  onSubmit={add} >
     < input type="text" value={inputText} onChange={handlevalue} name='name' />
      <button type='submit' className='add-btn' >  {editIndex !== null ? "Update Todo" : "Add "} </button>

     </form>
     
     
     </Col></Row>
     <Row className='mt-3'>
      <Col className='todo-content2'>
      <h4 className='task'>Your Task</h4>
         {saveText.map((value, index)=>
        
        <ul className='mt-4 data'>
          <li key={index} >{value}
          <button onClick={()=>Delete(index)}className='delete'>Delete</button>
          <button onClick={()=>Edith(index)} className='edith'>Edith</button>
           </li></ul>

        )}
      </Col>
     </Row>
     <button onClick={allDataDelete} className='deleteAll'>Delete All</button>
     </div>
     </Container>
    </>
  )
}

export default ToDoList
