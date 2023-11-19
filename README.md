# Modal component

## Package
- [Tailwindcss](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev/guide/)

## Install
```bash
npm install
```
```bash
npm dev
```
Run test
```bash
npm test
```
## Usage

```tsx
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
        header={<h1 className='text-xl'>Modal title</h1>}
      >
        Modal content
      </Modal>
    </div>
  )
}

export default App
```

## Props
| Prop | Type | Default | Description
| -----|:-----|:---------|:---------
| width | number/string the modal width | 800px
| open | boolean | false
| onClose | callback
| header | any
| closeable | boolean | true
| isKeep | boolean | false
| bodyClass | string
| bodyStyles | css
| centered | boolean | false
| className | string