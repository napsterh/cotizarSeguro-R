import React from 'react';
import Gracia from '../assets/gracias.png'
import { StepComponentProps } from 'react-step-builder';

function Gracias(props: StepComponentProps): JSX.Element {

    return (
        <div className="gracias">
            <div className="grid-gracias">
                <div className="descripcion-gracias">
                </div>
                <div className="formulario-gracias">
                    <div className="formulario-gracias__gracias">
                    </div>
                    <p className="formulario-gracias__titulo">
                        ¡Gracias por<span className="formulario-gracias__color"> confiar en nosotros!</span>
                    </p>
                    <h5 className="formulario-gracias__subtitulo">
                    Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo en las siguientes 48 horas.
                    </h5>
                    <div className="formulario-gracias__form__btn">
                            <a href="">
                                <input type="submit" value="Ir a salud" className=" solid" />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Gracias;