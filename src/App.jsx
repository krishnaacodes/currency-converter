
import Input from "./components/Input"
import usecurrencyinfo from "./hooks/usecurrencyinfo"
import { useEffect, useState } from "react";

function App() {
  let [from,setFrom] = useState("usd");
  let [to,setTo] = useState("inr");
  let [amount,setAmount] = useState(0);
  let [calculatedamount,setcalculatedamount] = useState(0);

  

   let currencyoptions =  usecurrencyinfo(from);
   
    
  

  useEffect(()=>{
     
     if(amount > 0 && currencyoptions[to] && currencyoptions[to] !== undefined){
     let ans =  currencyoptions[to] * amount;
       ans  = Math.floor(ans * 100) / 100;
     console.log("From ",from);
     console.log("To " , to);
     console.log("curreop " , currencyoptions);
     console.log("currencyoptionvalue",currencyoptions[to]);
     console.log("and",ans)
     setcalculatedamount(ans);
     }
    
  },[amount,from,to,currencyoptions]);

function handlechange() {
    if (!currencyoptions[to]) return;
  const tempFrom = from;
  const tempTo = to;
  const tempAmount = amount;
  const tempCalc = calculatedamount;

  setFrom(tempTo);
  setTo(tempFrom);
  setAmount(tempCalc || 0);
  setcalculatedamount(tempAmount || 0);
}

 

  return (
    <>
     <div className="border-2 border-red-600  w-full h-screen flex items-center justify-center"
     style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                 
     }}>
     

     <div className="relative px-5 py-5 border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30">
           <Input convert="From" currencyoptions={Object.keys(currencyoptions)} currency={from} setTarget={setFrom} amount={amount} amountchange={setAmount}/>

           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <button onClick={handlechange} className="cursor-pointer bg-blue-500 h-8 w-15 rounded-lg">Swap</button>
           </div>
          
           <Input convert="To" currencyoptions={Object.keys(currencyoptions)} currency={to} setTarget={setTo} isdisable={true} amount={calculatedamount} />
     </div>

     </div>
    </>
  )
}

export default App
