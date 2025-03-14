import { scan } from 'react-scan' // dev-tools for demo
import ReactDOM from 'react-dom/client'
import { useStack } from '@tanstack/react-bouncer/stack'
import { useState } from 'react'

function App() {
  // Use your state management library of choice
  const [stackItems, setStackItems] = useState([1, 2, 3, 4, 5])

  const stack = useStack({
    maxSize: 10,
    initialItems: stackItems,
    onUpdate: (stack) => {
      setStackItems(stack.getItems())
    },
  })

  return (
    <div>
      <h1>TanStack Bouncer useStack Example</h1>
      <div>Stack Size: {stack.size()}</div>
      <div>Stack Max Size: {10}</div>
      <div>Stack Full: {stack.isFull() ? 'Yes' : 'No'}</div>
      <div>Stack Empty: {stack.isEmpty() ? 'Yes' : 'No'}</div>
      <div>Stack Peek: {stack.peek()}</div>
      <div>Stack Items: {stackItems.join(', ')}</div>
      <div>
        <button
          onClick={() => {
            const nextNumber = stackItems.length
              ? stackItems[stackItems.length - 1] + 1
              : 1
            stack.push(nextNumber)
          }}
          disabled={stack.isFull()}
        >
          Add Number
        </button>
        <button
          disabled={stack.isEmpty()}
          onClick={() => {
            const item = stack.pop()
            console.log('popped item', item)
          }}
        >
          Process Next
        </button>
        <button onClick={() => stack.clear()} disabled={stack.isEmpty()}>
          Clear Stack
        </button>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)

scan() // dev-tools for demo
