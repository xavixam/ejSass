import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

    const initialValue = {
        title: "",
        body: "",
    };

    const [data, setData] = useState(initialValue);

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);//mostramos por consola la información del formulario(data)
        setData(initialValue);//limpiamos el formulario
        navigate("/")// redireccionamos a home
    };

    return (
        <>
        <h1>Crea una noticia</h1>
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Introduce el titulo"
                    onChange={handleOnChange}
                />
                <input
                    type="text"
                    name="body"
                    placeholder="Introduce la información"
                    onChange={handleOnChange}
                />
                <button onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
        </>
    )
}

export default Form