import React, { useState } from 'react';
import Slot from './Slot';

const Patient = () => {

    const [doctor, setDoctor] = useState('')
    const [speciality, setSpeciality] = useState()
    // const handleCheck = (e) => {
    //     e.preventDefault()
    //     console.log(doctor, speciality)
    //     console.log('Checking')
    // }

    return ( 
        <div>
            <form>
                <label>Doctor Name</label>
                <input type="text" onChange={ (e) => setDoctor(e.target.value) }/><br />
                <label>Speciality</label>
                <select onChange={ (e) => setSpeciality(e.target.value)} value={ speciality } >
                    <option value="select">select</option> 
                    <option value="pulmonology">Pulmonology</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="nephrology">Nephrology</option>
                </select><br />
                {/* <button onClick={ handleCheck }>Check Available Slots</button> */}
            </form>
            <hr />
            <Slot name= { doctor } speciality={ speciality }/>
        </div>
     );
}
 
export default Patient;