export default function Input({
  convert,
  currencyoptions,
  currency,
  setTarget,
  isdisable = false,
  amount,
  amountchange,
}) {
  const selectId = `${convert}-currency`;

  return (
    <>
      <div className="w-full bg-white p-2 flex justify-between rounded-lg mt-3">
        <div className="inline-block">
          <label htmlFor={convert}>{convert}</label>
          <br />
          <input
            disabled={isdisable}
            type="number"
            id={convert}
            className="bg-white mt-5 w-40 h-10"
            min="0"
            step="any"
            placeholder="enter number"
            value={amount}
            onChange={(e) => amountchange?.(Number(e.target.value))}
          />
        </div>

        <div className="inline-block">
          <label htmlFor={selectId}>Currency Type</label>
          <br />
          <select
            name={selectId}
            id={selectId}
            value={currency}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-5"
          >
            {currencyoptions.map((curr) => (
              <option value={curr} key={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
