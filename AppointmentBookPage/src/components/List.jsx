/* eslint-disable react/prop-types */
import img from './../assets/prof.png';

function List({appointments,onEditAppointment, onDeleteAppointment}){
    return (
        <>
        <div>
        <table className="table">
                <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Status</th>
                        <th>Appointment</th>
                        <th>Phone</th>
                        <th>Doctor</th>
                        <th>Actions</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {appointments.map((appointment,index)=>(
                        <tr key={index}>
                            <td>
                                <div className="user-info">
                                   <div className="user-info_img">
                                    <img src={img} alt="" />
                                   </div>
                                    <div className="user-info_basic">
                                        <h4>{appointment.patientName}</h4>
                                        <p>{appointment.age} yrs,{appointment.gender}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className={`status ${appointment.status.toLowerCase()}`}>{appointment.status}</span>
                            </td>
                            <td>
                                <h4>{appointment.time}</h4>
                                <small>{appointment.date}</small>
                            </td>
                            <td>
                                <h4>{appointment.phoneNumber}</h4>
                                <a href="#"><small className='contact-link'>Contact</small></a>
                            </td>
                            <td>
                                <h4>{appointment.doctorName}</h4>
                            </td>
                            <td>
                                <button onClick={()=>onEditAppointment(index)} className='action-btn update-btn'>Update</button>
                                <button onClick={()=>onDeleteAppointment(index)} className='action-btn delete-btn'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            
        </>
    )
}

export default List;