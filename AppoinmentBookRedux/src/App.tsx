import List from "./components/List"
import Form from "./components/Form"
import { useAppDispatch,useAppSelector } from "./redux/hooks"
import { addAppointment, updateAppointment,deleteAppointment,setEditIndex } from "./redux/slices/appointmentSlice"

function App() {
  const appointments = useAppSelector(state=> state.appointments.appointments);
  const editIndex = useAppSelector(state => state.appointments.editIndex);
  const dispatch = useAppDispatch();

  const handleAddorUpdateAppointment = (newAppointment) =>{
    if(editIndex === null){
      dispatch(addAppointment(newAppointment));

    }else{
      dispatch(updateAppointment({index: editIndex, appointment: newAppointment}));
    }
  }
  
  const handleDeleteAppointment  = (index)=>{
    dispatch(deleteAppointment(index));
  }

  const handleEditAppointment = (index)=>{
    dispatch(setEditIndex(index));
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
