import { useState , useCallback , useEffect , useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setnumbersAllowed] = useState(false)
  const [characterAllowed, setCharacter] = useState(false)
  const [password, setPasssword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numbersAllowed) {str += '0123456789'}
    if(characterAllowed) {str += '!@#$%^)&*`({[}]'}

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }

    setPasssword(pass)

  },[length,numbersAllowed,characterAllowed,setPasssword])



  useEffect(()=>{
    passwordGenerator()
  },[length,numbersAllowed,characterAllowed,passwordGenerator])




  return (
    <>
      <h1 className='text-5xl text-white'>Password generator</h1>
      <div className='flex mt-8  justify-center'>
        <div className="main h-32 rounded-xl relative bg-slate-600"
          style={{ width: 500 }}>
          <div className="absolute inputbtn left-0 p-2 mt-1">
            <input type="text" value={password} className='w-72 p-1 rounded-md' readOnly />
            <button className='bg-blue-400 p-2 ml-6 rounded-lg'>Copy</button>
          </div>
          <div className='options absolute bottom-3 left-2 flex gap-4 items-center'>
            <input type="range" min={6} max={77} Value={length} onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="">length({length})</label>
            <input type="checkbox" defaultChecked={numbersAllowed} onChange={() => { setnumbersAllowed((prev) => !prev) }} name="" id="" />
            <label htmlFor="">Numbers</label>
            <input type="checkbox" defaultChecked={characterAllowed} onChange={() => { setCharacter((prev) => !prev) }} name="" id="" />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
