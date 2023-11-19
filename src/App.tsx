import Modal from '@/components/Modal'
import { useState } from 'react'

function App() {
  const [state, setState] = useState(false)
  return (
    <div className='w-full p-5'>
      <button className='px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-900 transition-all ease-in-out duration-300' onClick={() => setState(prev => !prev)}>Toggle modal</button>
      <Modal
        open={state}
        centered
        width={500}
        onClose={() => setState(false)}
        header={<h1 className='text-xl'>Hello World</h1>}
      >
        <p>
          Dữ liệu trên cho thấy sự phát triển của số dư vốn và lãi suất qua thời gian. Mỗi dòng của bảng biểu diễn một năm, và các cột hiển thị các thông tin sau:
        </p>
      </Modal>
    </div>
  )
}

export default App
