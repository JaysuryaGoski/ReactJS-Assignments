import {createSlice , PayloadAction} from '@reduxjs/toolkit';
interface Appointment{
    patientName: string;
    phoneNumber: string;
    doctorName: string;
    gender: string;
    date: string;
    age: string;
    status: string;
    time: string;
}
interface AppointmentState{
    appointments: Appointment[];
    editIndex: number | null;
};

const initialState: AppointmentState={
    appointments: [],
    editIndex: null,
};

const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers:{
        addAppointment:(state,action: PayloadAction<Appointment>)=>{
            state.appointments.push(action.payload);
        }
        ,updateAppointment:(state ,action: PayloadAction<{index: number, appointment: Appointment}>)=>{
            state.appointments[action.payload.index] =action.payload.appointment;
            state.editIndex = null;
        },
        deleteAppointment:(state,action: PayloadAction<number>)=>{
            state.appointments.splice(action.payload,1);
        },
        setEditIndex: (state, action: PayloadAction<number | null>)=>{
            state.editIndex = action.payload;
        }
    }
})

export const {addAppointment, updateAppointment, deleteAppointment, setEditIndex} = appointmentSlice.actions;
export default appointmentSlice.reducer;