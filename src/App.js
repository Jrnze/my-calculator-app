import { useReducer } from 'react';
import { ACTIONS } from './Reducer'
import DigitButton from './DigitButton';
import FormatOperand from './FormatOperand';
import OperationButton from './OperationButton';
import Reducer from './Reducer';
import './App.css';

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(Reducer, {});
  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='previous-operand'><FormatOperand operand={previousOperand}/> {operation}</div>
        <div className='current-operand'><FormatOperand operand={currentOperand}/></div>
      </div>
      <button className='span-two' onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="x" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className='span-two' onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>     
    </div>    
  );
}

export default App;