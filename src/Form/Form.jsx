import { useEffect } from 'react';
import style from '/src/Form/Form.module.css'
import { useState } from 'react';
export default function Form() {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    const calcularIMC = useEffect(() => {

        
        const result = (peso / altura ** 2);
        
        setImc(result)

    }, [peso, altura]);

    function renderIMC() {
        let status = '';

        if (imc > 0 && imc < Infinity) {
            if (imc < 18.5) status = 'MAGREZA';
            else if (imc > 18.4 && imc < 25) status = 'NORMAL';
            else if (imc > 24.9 && imc < 30) status = 'SOBREPESO: OBESIDADE (GRAU) I';
            else if (imc > 29.9 && imc < 40) status = 'OBESIDADE: OBESIDADE (GRAU) II';
            else status = 'OBESIDADE GRAVE: OBESIDADE (GRAU) III';


            
            return (
                <>
                    <h1>{imc.toFixed(2)}</h1>
                    <p>{status}</p>
                </>
            )

        }
    }
    return (
        <div className={style}>
            {calcularIMC}
            {renderIMC()}


            <form>
                <input type="number" placeholder="Peso. Ex: 70.5" onBlur={({ target }) => { setPeso(target.value) }} />
                <input type="number" placeholder="Altura em metros. Ex: 1.75" onBlur={({ target }) => { setAltura(target.value) }} />

            </form>
        </div>

    )
}


