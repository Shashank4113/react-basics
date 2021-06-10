import React, { useState } from 'react';

const About = () => {

    const [name, setName] = useState('')
    const [email, setEmail] =  useState('')

    const users = [{id: 1, name: "shashank", "email": "seethudhoni@gmail.com"}]

    const handleClick = (user) => {
        setName(user.name)
        setEmail(user.email)
        console.log('Clicked !')
    }

    return ( 
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h4>{ user.name }</h4>
                    <h4>{ user.email }</h4>
                    <button onClick={ () => handleClick(user) }>Edit</button>
                </div>
            ))}
            <hr />
            <form>
                <label>Name</label>
                <input type="text" value = {name} onChange={(e) => setName(e.target.value)}/>

                <label>email</label>
                <input type="email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
            </form>
        </div>
     );
}
 
export default About;