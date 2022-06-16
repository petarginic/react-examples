
import { useState } from 'react';
import Button from './Button/Button';

const Calculator = () => {

  const [result, setResult] = useState("")
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("")
  const [zero, setZero] = useState("0");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "/", "x"];
  

  const buttonClicked = (e) => {
     
    setZero("");

    if(operator === "") {

      if( number1 !== "") {
        setNumber1( number1.concat(e.target.value))
      }
      else{
        setNumber1(e.target.value);
      }
      

    }
    else if( (number1 !== "")  && (operator !== ""))
      
    if( number2 !== "") {
      setNumber2( number2.concat(e.target.value))
    }
    else{
      setNumber2(e.target.value);
    }
  };



  const operatorClicked = (e) => {
    setZero("");
    setOperator(e.target.value)

  }

  const reset = () => {

    setNumber1("");
    setNumber2("");
    setResult("");
    setOperator("");
    setZero("0");

  }

  const calculate = () => {
    setZero("");
    var result = "";
    switch(operator) {

      case "+":
        result= Number(number1) + Number(number2);
        break;

        case "-":
          result = Number(number1) - Number(number2);
          break;

        case "x":
        result= Number(number1) * Number(number2);
        break;

        case "/":
        result =  Number(number1) / Number(number2);
        break;

        default:
          result = "0"
      
    }

    setResult(result);
    setNumber1("");
    setNumber2("");
    setOperator("");
  }



  return (


    <div className='calculator d-flex justify-content-center align-items-center'>

      <div className='container-md py-5 h-100'>
        <div className="row">
          <div className="col-md-12">
            <div className='result'>
            <p>result</p>
            </div>
          
            <div class="header">
             
              <div className="form-control form-control-lg result" type="text">
                
                
              {zero}
              {number1}
              {operator}
              {number2}
              {result !== "" && number1 === "" && number2 === "" ? result : ""}
                
                
                </div> 

                
              
                  
              
              
              
              
            
            

            </div>

          </div>
        </div>

        <div className='grid-container '>

          {operators &&

            operators.map((item) => {

              return (
                <div className="grid-item">

                  <Button color='#ffcc99'

                    value={item}
                    name={item}

                    onClick={operatorClicked}
                  />

                </div>

              );

            })

          }
          {numbers &&

            numbers.map((item) => {

              return (
                <div className="grid-item">

                  <Button
                    
                    value={item}
                    name ={item}

                    onClick={buttonClicked}
                  />

                </div>

              );

            })

          }

          <div className='grid-item'>
            <Button name="=" color='#ff5c33' value="=" onClick={calculate} />

          </div>

          <div className='grid-item'>
            <Button name="c" color='#ff5c33' value="c" onClick={reset} />

          </div>







        </div>








      </div>


    </div>








  )
}

export default Calculator