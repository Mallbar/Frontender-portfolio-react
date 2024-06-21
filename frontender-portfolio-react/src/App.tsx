import './styles/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import ProjectPage from './pages/ProjectPage'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'

import ScrollToTop from './utils/scrollToTop'

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/project/:id' element={<ProjectPage />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
