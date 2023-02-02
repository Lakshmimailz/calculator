
import React,{useState} from "react" 

export function Basiccalculations(){
    const[number,setnumber]=useState({
        fnum:0,
        snum:0
   })
   const[result,setresult]=useState<number[]>([]);

   function firstnumber(event:React.ChangeEvent<HTMLInputElement>){
    const fnum:number =Number(event.target.value);        
    const numberClone={...number}; 
    numberClone.fnum=fnum; 
    setnumber(numberClone)
   }
   function secondnumber(event:React.ChangeEvent<HTMLInputElement>){
    const snum:number =Number(event.target.value);
        const numberClone={...number}; 
        numberClone.snum=snum; 
    setnumber(numberClone);
   }
   function Add(event:React.MouseEvent<HTMLButtonElement,MouseEvent>){
    const resultClone=[...result];
     resultClone.push(number.fnum+number.snum);
    setresult(resultClone);    
   }
   function Subtract(event:React.MouseEvent<HTMLButtonElement,MouseEvent>){
    const resultClone=[...result];
     resultClone.push(number.fnum-number.snum);
    setresult(resultClone);    
   }
   function Multiply(event:React.MouseEvent<HTMLButtonElement,MouseEvent>){
    const resultClone=[...result];
     resultClone.push(number.fnum*number.snum);
    setresult(resultClone);    
   }
   function Divide(event:React.MouseEvent<HTMLButtonElement,MouseEvent>){
    const resultClone=[...result];
     resultClone.push(number.fnum/number.snum);
    setresult(resultClone);    
   }
return<>
<h3>Calculations</h3>
<label htmlFor="fnum">First Number</label>
    <input id="fnum" type="number" placeholder="0" onChange={firstnumber}/>
    
<label htmlFor="snum">Second Number</label>
    <input id="snum" type="number" placeholder="0" onChange={secondnumber}/>
    <button onClick={Add}>Addition</button >    
     <button onClick={Subtract}>Subtraction</button>
    <button onClick={Multiply}>Multiplication</button>
    <button onClick={Divide}>Division</button>
     
     <ul>        
        {result.map(s => <li>{s}</li>)}
    </ul>

</>


    }
    
