const Slot = ({ name, speciality }) => {

    const doctorsData = [{"id":1,"name":"Dinakar", "speciality": "Pulmonology", 
                        "slots": [{'1 PM':0},{'2 PM':0}]}, {"id":2,"name":"Mahesh", "speciality": "Cardiology", 
                        "slots": [{'1 PM':1},{'2 PM':0}]}]
// <li key={key}><b>{key}:</b>{slot[key]}</li>
    return ( 
        <div>
            { doctorsData.map((data) => (
                <div key={ data.id }>
                    { data.name === name && data.slots.map((slot) => (
                        Object.keys(slot).map(key => {
                            return <div key={key}>    
                                    <button style={{backgroundColor: slot[key] ? 'red': 'green', color: 'white'}}>{key}</button>
                                </div>
                        })
                    ))}
                </div>
            )) }
        </div>
     );
}
 
export default Slot;