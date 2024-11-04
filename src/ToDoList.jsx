import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
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
    let confirmDelete = window.confirm(`kya ap ye deta ${indexDelete} delete krna chahte hain..?`)
    if(confirmDelete){
    let newValue = [...saveText]
    newValue.splice(indexDelete, 1)
    setSaveText(newValue)}}

// Delete All button
const allDataDelete = () => setSaveText([]);
  return (
    <>

    <Container className='todo '>
      <Row className='todo-row col-lg-12 col-md-12 col-sm-12 container '><Col className='todo-content1 mt-1 col-lg-12 col-md-12 col-sm-12 container '>  
     <Form  onSubmit={add} >
     <InputGroup className="mb-3 mt-3">
        <Form.Control
        type="text" value={inputText} onChange={handlevalue} name='name'
          placeholder="Add Your Task"/>
      <Button type='submit' className='add-btn' >  {editIndex !== null ? "Update Todo" : "Add "} </Button>
       </InputGroup>
     </Form> 

     </Col></Row>
     <Row className='mt-3 todo-row col-lg-12 col-md-12 col-sm-12 container'>
      <Col className='todo-content2 col-lg-12 col-md-12 col-sm-12 container '>
      <h4 className='task mt-2'>Your Task</h4>
         {saveText.map((value, index)=>
        
        <ul className='mt-4 data'>
          <li key={index} >{value}
          <Button onClick={()=>Delete(index)}className='delete ' variant="danger">Delete</Button>
          <Button onClick={()=>Edith(index)} className='edith'>Edith</Button>
           </li></ul>)}
       <Button onClick={allDataDelete} className='deleteAll' variant="danger">Delete All</Button>

      </Col>

     </Row>
     <h3 className='name'>Muhammad ilyas</h3>
     </Container>
    </>
  )
}

export default ToDoList
