import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// we can directly use/call jsx
import {jsx as _jsx} from "react/jsx-runtime.js"
// but we need to do this differently than normal react

const MyApp = () => {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
// every element parsed in react and convert similarly (not same) like below
// custom react like 
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherUser = "Chai aur react"

// default reeact element/structure
const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com", 
    title: "Click here to visit google",
    target: "_blank",
  },
  "Click me to visit google",
  anotherUser // using evaluated expression here / variable in react js

)

// ReactDOM.createRoot(document.getElementById('root'))
// .render(
//   reactElement
// )



// ####################################################################
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

// ReactDOM.createRoot(document.getElementById('root'))
// .render(
//   anotherElement
// )


// ####################################################################
// default way for react to parse elements
ReactDOM.createRoot(document.getElementById('root'))
  .render(
    // reactElement
      <App />
  )
