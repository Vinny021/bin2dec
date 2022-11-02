import './App.css';
import { useState } from 'react';

const App = () => {
  const [binary, setBinary] = useState('');
  const [result, setResult] = useState('');
  const [digitAlert, setDigitAlert] = useState(false);

  function convertBinToDec(binValue) {
    let decimal = parseInt(binValue, 2); 
    if(!decimal)
      return '...'
    else
      return decimal;
  }

  const handleBinaryInput = (event) => {
    const value = event.target.value;
    const lastDigit = value[value.length - 1]; 

    if(lastDigit !== '0' && lastDigit !== '1' && value.length !== 0){
      setDigitAlert(true);
    }else{
      setBinary(value);  

      var convertedValue = convertBinToDec(value);
      setResult(convertedValue);
      
      setDigitAlert(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='InputButton'>
          <label> Numero Binario</label>
          <input 
            type="text" 
            id="binaryInput"
            name="binaryINput"
            value={binary}
            onChange={handleBinaryInput}
          />
          {digitAlert && 
            <label className='ErrorMensage'>Apenas 0 ou 1</label>
          }
        </div>
        <div className='resultDiv'>
          <h3>Resultado: {result}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;