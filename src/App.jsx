import Input from "./components/Input";
import usecurrencyinfo from "./hooks/usecurrencyinfo";
import { useMemo, useState } from "react";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);

  // Guard against undefined on first render
  const rates = usecurrencyinfo(from) || {};
  const rate = typeof rates[to] === "number" ? rates[to] : null;

  // Derive the converted value, avoid extra renders
  const converted = useMemo(() => {
    if (rate == null || !isFinite(rate)) return 0;
    const v = rate * amount;
    return Math.round(v * 100) / 100;
  }, [rate, amount]);

  const handleSwap = () => {
    // Swap currencies and carry the converted value as the new input
    setFrom(to);
    setTo(from);
    setAmount(converted);
  };

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="relative px-5 py-5 border border-gray-600 rounded-lg backdrop-blur-sm bg-white/30">
          <Input
            convert="From"
            currencyoptions={Object.keys(rates)}
            currency={from}
            setTarget={setFrom}
            amount={amount}
            amountchange={setAmount}
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <button
              onClick={handleSwap}
              className="cursor-pointer bg-blue-500 h-8 w-16 rounded-lg"
            >
              Swap
            </button>
          </div>

          <Input
            convert="To"
            currencyoptions={Object.keys(rates)}
            currency={to}
            setTarget={setTo}
            isdisable={true}
            amount={converted}
          />
        </div>
      </div>
    </>
  );
}

export default App;
