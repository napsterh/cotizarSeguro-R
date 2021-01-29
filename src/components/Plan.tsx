import React from 'react';
import Logo from '../assets/logo-rimac.png'
import Familia from '../assets/Illustration.png'
import Costo from '../../src/assets/costo.png'
import Corazon from '../../src/assets/Vector.png'
import Corazon2 from '../../src/assets/Vector2.png'
import { StepComponentProps } from 'react-step-builder';

function Plan(props: StepComponentProps): JSX.Element {

    const data = [
        { id: 1,  vinculo: "Cónyugue", fechaNac: "12/12/1980"},
        { id: 2,  vinculo: "Hijo", fechaNac: "04/08/1994"},
        { id: 3,  vinculo: "Hijo", fechaNac: "03/11/2001"},
    ]

    const [datas, setDatas] = React.useState(data);
    console.log(datas)

    return (
        <div className="plan">
            <div className="grid-plan">
                <div className="descripcion-plan">
                    <div className="descripcion-plan__familia">
                        <img src={Familia} alt=""/>
                    </div>
                    <div className="descripcion-plan__logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="formulario-plan">
                    <p className="formulario-plan__titulo">
                        Elige <span className="formulario-plan__color">tu protección</span>
                    </p>
                    <h5 className="formulario-plan__subtitulo">
                        Selecciona tu plan de salud ideal.
                    </h5>
                    <div className="formulario-plan__select">
                        <div className="formulario-plan__select__uno">
                            <div className="formulario-plan__select__tipo">Báscio</div>
                            <div className="formulario-plan__select__costo">S/160</div>
                            <div className="formulario-plan__select__texto">mensual</div>
                        </div>
                        <div className="formulario-plan__select__dos">
                            <div className="formulario-plan__select__tipo">Avanzado</div>
                            <div className="formulario-plan__select__costo">S/200</div>
                            <div className="formulario-plan__select__texto">mensual</div>
                        </div>
                        <div className="formulario-plan__select__tres">
                            <div className="formulario-plan__select__tipo">Prepium</div>
                            <div className="formulario-plan__select__costo">S/250</div>
                            <div className="formulario-plan__select__texto">mensual</div>
                        </div>
                        <div className="formulario-plan__select__cuatro">
                            <div className="formulario-plan__select__tipo">Full</div>
                            <div className="formulario-plan__select__costo">S/500</div>
                            <div className="formulario-plan__select__texto">mensual</div>
                        </div>
                    </div>
                    <div className="formulario-plan__resumen">
                        <div className="formulario-plan__resumen__asegurados">Tiene (3) asegurados</div>
                        <div className="formulario-plan__resumen__resumen">Resumen del plan </div>
                    </div>
                    <div className="formulario-plan__beneficio">
                        <div className="formulario-plan__beneficio__titulo">Cuentas con esto beneficios</div>
                        <div className="formulario-plan__beneficio__banner">
                            <div className="formulario-plan__beneficio__banner__primera">
                                <div className="formulario-plan__beneficio__banner__primera__cob">
                                    Cobertura máxima
                                </div>
                                <div className="formulario-plan__beneficio__banner__primera__costo">
                                    S/1MM
                                </div>
                                <div className="formulario-plan__beneficio__banner__primera__plan">
                                    Plan básico
                                </div>
                            </div>
                            <div className="formulario-plan__beneficio__banner__img">
                                <img src={Costo} alt=""/>
                            </div>
                        </div>
                        <div className="formulario-plan__beneficio__corazon">
                            <div className="formulario-plan__beneficio__corazon__interna">
                                <img src={Corazon} alt=""/>
                                <div className="formulario-plan__beneficio__corazon_interna__text1">Lima</div>
                                <div className="formulario-plan__beneficio__corazon_interna__text2">(zona cobertura)</div>
                            </div>
                            <div className="formulario-plan__beneficio__corazon__interna">
                                <img src={Corazon} alt=""/>
                                <div className="formulario-plan__beneficio__corazon_interna__text1">+30 clínicas</div>
                                <div className="formulario-plan__beneficio__corazon_interna__text2">(en red afiliada)</div>
                            </div>
                            <div className="formulario-plan__beneficio__corazon__interna">
                                <img src={Corazon2} alt=""/>
                                <div className="formulario-plan__beneficio__corazon_interna__text3">Médico a domicilio</div>
                            </div>
                            <div className="formulario-plan__beneficio__corazon__interna">
                                <img src={Corazon2} alt=""/>
                                <div className="formulario-plan__beneficio__corazon_interna__text3">Chequeos preventivos</div>
                            </div>
                            <div className="formulario-plan__beneficio__corazon__interna">
                                <img src={Corazon2} alt=""/>
                                <div className="formulario-plan__beneficio__corazon_interna__text3">Reembolso nacional</div>
                            </div>
                            <div className="formulario-plan__beneficio__corazon__interna">
                                <img src={Corazon2} alt=""/>
                                <div className="formulario-plan__beneficio__corazon_interna__text3">Reembolso internacional</div>
                            </div>
                        </div>
                    </div>
                    <div className="formulario-plan__btn">
                        <input type="submit" value="Comprar Plan" className=" solid" onClick={props.next}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan;