import { Container, Content, Row } from './styles';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CalculatorTheme } from '../../theme';
import Button from '../Button';
import Input from '../Input';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState(['']);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setHistory([]);
  };

  const handleAddNumber = (num: string) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    setHistory([...history, num]);
  }

  function handleOperation(newOper: string): void {
    if(newOper === '.') {
      if(!currentNumber.includes(newOper)){
        setCurrentNumber(`${currentNumber}.`);
        setHistory([...history, '.']);
      }
    } else {
      setHistory([...history, newOper]);
      let result = NaN;
      if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch(operation){
          case '+':
            result = Number(firstNumber) + Number(currentNumber);
            break;
          case '-':
            result = Number(firstNumber) - Number(currentNumber);
            break;
          case 'X':
            result = Number(firstNumber) * Number(currentNumber);
            break;  
            case '/':
              result = Number(firstNumber) / Number(currentNumber);
              break;  
            default: 
            break;
        }
        if(!Number.isNaN(result)) {
           setCurrentNumber(String(result))
           setFirstNumber('0');
           setOperation(newOper);
           if(newOper !== '') {
            handleFirstNumber(result);
          } else {
            setHistory([...history, '=', String(result)]);
          }
        }
      } else if (currentNumber !== '0') {
        handleFirstNumber(NaN);
        setOperation(newOper);
        setHistory([...history, newOper]);
      }
    }
  }

  function handleFirstNumber(value: number): void {
    setFirstNumber(String(currentNumber));
    if(!Number.isNaN(value)){
      setFirstNumber(String(value));
    }
    setCurrentNumber('0');
  }

  const handleEquals = () => {
    handleOperation('');
  }

  return (
    <ThemeProvider theme = {CalculatorTheme}>
      <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="X" onClick={() => handleOperation('X')}/>
            <Button label="/" onClick={() => handleOperation('/')}/>
            <Button label="CE" onClick={handleOnClear}/>
            <Button label="." onClick={() => handleOperation('.')}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={() => handleOperation('-')}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={() => handleOperation('+')}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
          <Input value={history.join('')}/>
        </Content> 
      </Container>
    </ThemeProvider>
  );
}

export default App;
