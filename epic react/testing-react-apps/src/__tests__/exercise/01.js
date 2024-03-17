// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'

import Counter from '../../components/counter'
import ReactDOM from 'react-dom'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'

// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)

  ReactDOM.render(<Counter />, div)

  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Cureent count: 0')

  increment.click()
  expect(message.textContent).toBe('Cureent count: 1')
  decrement.click()
  expect(message.textContent).toBe('Cureent count: 0')

  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
