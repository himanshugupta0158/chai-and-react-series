import { useEffect, useState } from 'react'
// its by default calling index.js in components
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("USD")
  const [convertedAmount, setConvertedAmount] = useState(1)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)

    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  useEffect(() => {
    convert()
  }, [from, to, amount, convertedAmount])

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3943717/pexels-photo-3943717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
      }}
    >

      <div
        className='flex-none w-1/2'
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2022/11/12/10/10/ai-generated-7586650_1280.png')`,
          backgroundSize: 'cover', // or 'contain', or specific dimensions like '100% 100%'
          backgroundPosition: 'center', // Adjust as needed
          width: '550px', // Fixed width
          height: '700px', // Fixed height
        }}
      ></div>

      <div className="w-full flex-1">
        <div className="max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className='text-center my-2 font-extrabold'>Currency Exchanger</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

      <div
        className='flex-none w-1/2'
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2023/01/05/22/41/ai-generated-7700041_960_720.png')`,
          backgroundSize: 'cover', // or 'contain', or specific dimensions like '100% 100%'
          backgroundPosition: 'center', // Adjust as needed
          width: '500px', // Fixed width
          height: '700px', // Fixed height
        }}
      ></div>

    </div>
  );
}
export default App
