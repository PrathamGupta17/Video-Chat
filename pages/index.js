import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
    <div className=' w-screen h-screen flex flex-col justify-center items-center'>
      <div className=' w-4/12 mx-auto p-2 border border-white rounded mt-8 text-white flex flex-col items-center'>
        <h1 className=' text-xl text-center '>Meet App</h1>
        <div className=' flex  flex-col items-center w-full mt-3'>
          <input placeholder='Enter Room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)} className=' text-black text-lg p-1 rounded w-9/12 mb-3 text-center'/>
          <button onClick={joinRoom} className=' bg-buttonPrimary py-2 px-4 rounded'>Join Room</button>
        </div>
        <span  className=' my-3 text-xl ' >----------------- OR -----------------</span>
        <button onClick={createAndJoin } className=' bg-yellow-50  text-richblack-900 py-2 px-4 rounded'>Create a new room</button>
    </div>
    </div>
    
  )
}
