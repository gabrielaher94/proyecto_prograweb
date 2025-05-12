import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[email, setEmail]=useState('');
    const[inputError, setInputError]=useState('');
    const navigate= useNavigate();


    const handleOnClick=()=>{
        if(email.includes('@')){
            setInputError(null);
            navigate('/');
        }else{
            setInputError('Correo invalido.');
        }
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        navigate('/');

        // if(email.includes('@')){
        //     setInputError(null);
        //     navigate('/');
        // }else{
        //     setInputError('Correo invalido.');
        // }
    }
    return(
    <div className="d-flex align-items-center justify-content-center" style={{ height:'100vh'}}>
        <div className="card p-4" style={{width: '300px'}}>
            <h2 className="text-center mb-3">Iniciar Sesion</h2>
            <form onSubmit={(handleOnSubmit)=>{}}>
                <input type= "email" className="form-control mb-3" placeholder="Ingrese su correo" value={email} 
                onChange={(event)=>{setEmail(event.target.value)}}
                onBlur={(handleOnBlur)=>{}}/>
                {inputError && <div className="text-danger mb-3">{inputError} </div>}
                <button className="btn btn-primary w-100" type="submit" onClick={handleOnClick}>
                    Ingrese
                    </button>
            </form>
        </div>
    </div>
    );
}
export default Login;