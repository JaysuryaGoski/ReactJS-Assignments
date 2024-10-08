/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Form({ onAddOrUpdateAppointment, editData }) {
    const [formData, setFormdata] = useState({
        patientName: '',
        phoneNumber: '',
        doctorName: '',
        gender: 'Male',
        date: '',
        age: '',
        status: 'Consult',
        time: ''
    });

    useEffect(() => {
        if (editData) {
            setFormdata(editData);
        } else {
            setFormdata({
                patientName: '',
                phoneNumber: '',
                doctorName: '',
                gender: 'Male',
                date: '',
                age: '',
                status: 'Consult',
                time: ''
            })
        }
    }, [editData])
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormdata({ ...formData, [id]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddOrUpdateAppointment(formData);
        setFormdata({
            patientName: '',
            phoneNumber: '',
            doctorName: '',
            gender: 'Male',
            date: '',
            age: '',
            status: 'Consult',
            time: ''
        })
    }
    return (
        <>
            <div className="formcontent">
                <div className="header">
                    <h3>Welcome to Gradious Doctor Appointment Booking</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <div className="grid-container">
                            <div className="grid-item">
                                <input type="text" id="patientName" placeholder="Patient Name*" required className="inputField"
                                    value={formData.patientName} onChange={handleChange} />
                            </div>
                            <div className="grid-item">
                                <input type="text" id="phoneNumber" placeholder="Phone Number*" required className="inputField"
                                    value={formData.phoneNumber} onChange={handleChange} />
                            </div>
                            <div className="grid-item">
                                <input type="text" id="doctorName" placeholder="Doctor Name*" required className="inputField"
                                    value={formData.doctorName} onChange={handleChange} />
                            </div>
                            <div className="grid-item">
                                <select className="inputField" value={formData.gender} onChange={handleChange} id="gender">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="grid-item">
                                <input type="text" id="date" placeholder="Date*" required className="inputField"
                                    value={formData.date} onChange={handleChange} />
                            </div>
                            <div className="grid-item">
                                <select className="inputField" value={formData.status} onChange={handleChange} id="status">
                                    <option value="consult">Consult</option>
                                    <option value="revisit">Revisit</option>
                                </select>
                            </div>
                            <div className="grid-item">
                                <input type="number" id="age" placeholder="Age*" required className="inputField"
                                    value={formData.age} onChange={handleChange} />
                            </div>
                            <div className="grid-item">
                                <input type="text" id="time" placeholder="Time*" required className="inputField"
                                    value={formData.time} onChange={handleChange} />
                            </div>
                        </div>

                        <button id="bookAppointment" type="submit">{editData ? "Update Appointment" : "Add Appointment"}</button>

                    </div>
                </form>

            </div>


        </>
    )
}

export default Form;