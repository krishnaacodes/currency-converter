
export default function Input({
    convert,
    currencyoptions,
    currency,
    setTarget,
    isdisable = false,
    
    amount,
    amountchange,

}){ 

   
    console.log("currency",currency);
    console.log("ammount",amount)
    console.log("currencyoption : ",currencyoptions);
   

    return (


        <>
        <div className=" w-100 bg-white p-2 flex justify-between rounded-lg mt-3">
            <div className="inline-block ">
             <label htmlFor={convert}>{convert}</label> <br/>
             <input disabled={isdisable} type="number" id={convert} className="bg-white mt-5 w-40 h-10" min="0" placeholder="0"   value={amount || 0} onChange={(e) => amountchange(Number(e.target.value))}></input>
            </div>

            <div className="inline-block ">
                 <label htmlFor="language">Currency Type</label> <br/>
           
                <select name="language" id="language" value={currency} onChange={(e) => setTarget(e.target.value) } className="mt-5">
                  {
                 
                  
                     currencyoptions.map((curr) => (
                        <option value={curr} key={curr}>{curr}</option>
                     ))
                  
                  }
                </select>



            </div>
        </div>
        </>
    )
}

