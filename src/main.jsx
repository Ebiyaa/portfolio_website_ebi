import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import Hackhive from './pages/posts/hackhive.jsx'
=======
>>>>>>> ffc7f06 (glow dress)
import store from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
<<<<<<< HEAD
      {/* <Hackhive /> */}
=======
>>>>>>> ffc7f06 (glow dress)
    </Provider>
  </StrictMode>
)

