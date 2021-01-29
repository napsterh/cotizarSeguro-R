import React from 'react';
import Logo from '../assets/logo-rimac.png'
import Familia from '../assets/Illustration.png'
import Escudo from '../assets/ic_shield.png'
import Mobile from '../assets/ic_mobile.png'
import Cobertura from '../assets/ic_money.png'
import Clinicas from '../assets/ic_clinic.png'
import { StepComponentProps } from 'react-step-builder'


function Login(props: StepComponentProps): JSX.Element {


    return (
        <div className="login">
            <div className="grid">
                <div className="descripcion">
                    <div className="descripcion__familia">
                        <img src={Familia} alt=""/>
                    </div>
                    <div className="descripcion__logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <h1 className="descripcion__titulo">
                        Seguro de <span>salud</span>
                    </h1>
                    <ul className="descripcion__lista">
                        <li><img src={Escudo}></img>Cómpralo de manera fácil y rápida</li>
                        <li><img src={Mobile}></img>Cotiza y compra tu seguro 100% digital</li>
                        <li><img src={Cobertura}></img>Hasta S/.12 millones de cobertura anual</li>
                        <li><img src={Clinicas}></img>Más de 300 clínicas en todo el Perú</li>
                    </ul>
                    <h5 className="descripcion__derechos">
                        @ 2021 RIMAC Seguros y Reaseguros
                    </h5>
                </div>
                <div className="formulario">
                    <p className="formulario__titulo">
                        Obtén tu <span className="formulario__color">seguro ahora</span>
                    </p>
                    <h5 className="formulario__subtitulo">
                        Ingresa los datos para comenzar
                    </h5>
                    <form action="#" className="formulario__form">
                        <div className="formulario__form__input">
                            <input type="text" name="documento" value={props.getState("documento", "") } onChange={props.handleChange} placeholder="Número de documento"/>
                        </div>
                        <div className="formulario__form__input">
                            <input type="text" name="fechaNac" value={props.getState("fechaNac", "")} onChange={props.handleChange} placeholder="Fecha de nacimiento"/>
                        </div>
                        <div className="formulario__form__input">
                            <input type="text" name="phone" value={props.getState("phone", "")} onChange={props.handleChange} placeholder="Celular"/>
                        </div>
                        <div className="formulario__form__checks">
                            <div className="formulario__form__checkbox">
                                <input type="checkbox" id="datos" name="datos" value="datos"/>
                                <label htmlFor="datos">Acepto <a href="">la Política de Protección de Datos Personales y los Términos y Condiciones.</a></label><br/>
                            </div>
                            <div className="formulario__form__checkbox">
                                <input type="checkbox" id="comunicacion" name="comunicacion" value="comunicacion"/>
                                <label htmlFor="comunicacion">Acepto la <a href="">Política de Envío de Comunicaciones Comerciales.</a></label>
                            </div>
                        </div>
                        <div className="formulario__form__btn">
                            <input type="submit" value="Comencemos" className=" solid" onClick={props.next}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;