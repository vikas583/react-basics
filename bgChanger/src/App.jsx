
import { useState } from 'react'
const btnTypes = [
  {
    color: 'red',
    text: 'Red'
  },
  {
    color: 'green',
    text: 'Green'
  },
  {
    color: 'blue',
    text: 'Blue'
  },
  {
    color: 'Orange',
    text: 'Orange'
  },
  {
    color: 'yellow',
    text: 'Yellow'
  },
  {
    color: 'grey',
    text: 'Grey'
  },
  {
    color: 'purple',
    text: 'Purple'
  },
  {
    color: 'black',
    text: 'Black'
  },
]

function App() {
  const [bgColor, setBgColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap bg-white justify-center px-3 py-2 rounded-3xl gap-3 shadow-lg'>
          {btnTypes.map(btn => {
            return (
              <button
                className='outline-none px-4 rounded-full text-white shadow-lg'
                style={{ backgroundColor: btn.color }}
                onClick={() => setBgColor(btn.color)}
              >
                {btn.text}
              </button>
            )
          })}

        </div>
      </div>
    </div>

  )
}

export default App
