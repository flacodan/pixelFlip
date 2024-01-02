import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Took strict mode off because it causes useEffect to run twice, not sure it was a problem, just troubleshooting...

ReactDOM.createRoot(document.getElementById('root')).render(
    <App /> 
)
