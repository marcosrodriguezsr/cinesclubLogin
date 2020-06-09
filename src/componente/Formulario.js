import React, {fragment, useState} from 'react';
import './styles/Style.css'



const Formulario = () => {

    const[datos,setDatos]=useState({
        username: '',
        password: ''
    })
    const handleInputChange=(event)=> {
        console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name] : event.target.value /** Todo esto es para guardar los datos que ingresas**/

        })
    }

    const enviarDatos =(event)=> {
        event.preventDefault();
    }

    return(
        <fragment>
            
            <form  class="form-box" onSubmit={enviarDatos}>
            <h1 class="form-title">Cines Club</h1>
                <div>
                    <input 
                    type="text" 
                    placeholder="username"
                    className="form-control"
                    name="username"
                    onChange={handleInputChange}></input>
                </div>
                <div>
                    <input 
                    type="password" 
                    placeholder="password" 
                    className="form-control" 
                    name="password" 
                    
                    >

                    </input>
                </div>
                <div>
                <button type="submit">login</button>
                </div>
                
            </form>
    
       
            


        </fragment>
       
    );
        
}

export default Formulario;