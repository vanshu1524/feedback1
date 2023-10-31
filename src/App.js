
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'

import FeedBackList from './component/FeedBackList' 
import Header from "./component/Header"
import FeedbackItem from "./component/FeedbackItem"

import FeedbackStats from './component/FeedbackStats'
import FeedbackForm from './component/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './component/AboutIconLink'  
import Post from './component/Post'
import Card from './component/shared/Card'
import { FeedbackProvider } from './context/FeedbackContext'

function App(){
    
    
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className="conatiner">
            <Routes>
           
            <Route exact path='/' element={<>
            <FeedbackForm />
            <FeedbackStats />
            <FeedBackList  />
            </>
            }>
           </Route> 
           
           
           <Route path='/about' element={<AboutPage/>}/>
           <Route path='/post/*' element={<Post/>}/>
           
         </Routes>
            <AboutIconLink/>
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App
