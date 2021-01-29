import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { StepComponentProps } from 'react-step-builder';

function Pariente(props: StepComponentProps): JSX.Element {

    const data = [
        { id: 1,  vinculo: "Cónyugue", fechaNac: "12/12/1980"},
        { id: 2,  vinculo: "Hijo", fechaNac: "04/08/1994"},
        { id: 3,  vinculo: "Hijo", fechaNac: "03/11/2001"},
    ]


    const [name, setName] = useState({
        first: '',
        last: '',
    })

    const [date, setDate] = useState({
        date: ''
    })

    const [location, setLocation] = useState({
        city: '',
        state: '',
        postcode: ''
    })

    const getName =  async () => {
        const res = await axios.get(`https://randomuser.me/api`)
        console.log(res.data.results[0])
        setName(res.data.results[0].name)
    }

    const getDate =  async () => {
        const res = await axios.get(`https://randomuser.me/api`)
        setDate(res.data.results[0].dob)
    }

    const getLocation =  async () => {
        const res = await axios.get(`https://randomuser.me/api`)
        setLocation(res.data.results[0].location)
    }

    useEffect(() => {
        getName();
        getDate();
        getLocation();
    }, [])

    const changeDatos = ({target}:any) => {
        setName(target.value)
      }


    const [datas, setDatas] = React.useState(data);

    return (
        <div className="pariente">
            <div className="grid-pariente">
                <div className="descripcion-pariente">
                </div>
                <div className="formulario-pariente">
                    <p className="formulario-pariente__titulo">
                        Hola, <span className="formulario-pariente__color">{name.first}</span>
                    </p>
                    <h5 className="formulario-pariente__subtitulo">
                        Valida que los datos sean correctos
                    </h5>
                    <form action="#" className="formulario-pariente__form">
                        <div className="formulario-pariente__form__datos">
                            <p>Datos personales del titular</p>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" value={location.postcode} placeholder="Número de documento" />
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" value={name.first} placeholder="Nombre"/>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" value={name.last} placeholder="Apellido paterno"/>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" value={name.last} placeholder="Apellido materno"/>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" value={date.date} placeholder="Fecha de nacimiento"/>
                        </div>
                        <div className="formulario-pariente__form__checks">
                            <h6 className="formulario-pariente__form__genero">Género</h6>
                            <div className="formulario-pariente__form__checkbox">
                                <input type="checkbox" id="masculino" name="masculino" value="masculino"/>
                                <label htmlFor="datos">Masculino</label><br/>
                            </div>
                            <div className="formulario-pariente__form__checkbox">
                                <input type="checkbox" id="femenino" name="femenino" value="femenino"/>
                                <label htmlFor="femenino">Femenino</label>
                            </div>
                            <h6 className="formulario-pariente__form__genero">¿A quién vamos a asegurar?</h6>
                            <div className="formulario-pariente__form__checkbox">
                                <input type="checkbox" id="soloMi" name="soloMi" value="masculino"/>
                                <label htmlFor="soloMi">Solo a mí</label><br/>
                            </div>
                            <div className="formulario-pariente__form__checkbox">
                                <input type="checkbox" id="familia" name="familia" value="familia"/>
                                <label htmlFor="familia">A mí y a mi familia</label>
                            </div>
                        </div>
                        <div className="formulario-pariente__form__btn">
                            <input type="submit" value="Continuar" className=" solid" onClick={props.next}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pariente;