import List from "./components/List"
import Form from "./components/Form"
import { useState } from "react"
function App() {
  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddorUpdateAppointment = (newAppointment) =>{
    if(editIndex === null){
      setAppointments([...appointments, newAppointment]);
    }else{
      const updatedAppointments = appointments.map((appointment,index) =>
        index === editIndex ? newAppointment : appointment
      )
      setAppointments(updatedAppointments);
      setEditIndex(null);
    }

  }

  const handleDeleteAppointment = (indexToDelete) =>{
    const filteredAppointments = appointments.filter((_ , index)=> index !== indexToDelete);
    setAppointments(filteredAppointments);
  }

  const handleEditAppointment = (indexToEdit) =>{
    setEditIndex(indexToEdit);
  }
  

  return (
    <>
      <Form onAddOrUpdateAppointment={handleAddorUpdateAppointment} 
      editData = {editIndex !== null ? appointments[editIndex] : null}/>
      <List appointments = {appointments}
      onDeleteAppointment ={handleDeleteAppointment}
      onEditAppointment = {handleEditAppointment}/>
    </>
  )
}

export default App
