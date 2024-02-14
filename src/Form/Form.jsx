import { useEffect } from 'react';
import style from '/src/Form/Form.module.css'
import {useState} from 'react';
export default function Form() {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    const calcularIMC = useEffect(() => {
        
            console.log(`peso: ${peso}, altura: ${altura}, imc: ${(peso /altura ** 2)}` );
            const result = (peso /altura ** 2);
            console.log(`:::::::: ${result} type do result: ${typeof result}`);
            setImc(result)
        
    }, [peso, altura]);

    function renderIMC(){
        if(imc > 0 && imc < Infinity){
            return <h1>{imc}</h1>
        }
    }
    return (
        <div className={style}>
            {calcularIMC}
           {renderIMC()}
          
           
            <form>
            <input type="number" placeholder="Peso. Ex: 70.5" onBlur={({target}) => {setPeso(target.value)}}/>
                <input type="number" placeholder="Altura em metros. Ex: 1.75" onBlur={ ({target}) => {setAltura(target.value)}}/>
                
            </form>
            </div>
        
    )
}


