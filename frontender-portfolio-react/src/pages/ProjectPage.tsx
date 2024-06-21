import { useParams } from 'react-router-dom'

import BtnGitHub from './../components/btnGitHub/BtnGitHub'
import { projects } from './../helpers/projectsList'

// import projectImg from './../img/projects/big/01-big.jpg'

const ProjectPage = () => {
	const { id } = useParams()
	const parsedId = parseInt(id ?? '0', 10)
	const project = projects[parsedId]
	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>

					<img
						src={project.imgBig}
						alt='ProjectImg'
						className='project-details__cover'
					/>

					<div className='project-details__desc'>
						<p>{project.skills}</p>
					</div>

					<BtnGitHub link='http://github.com' />
				</div>
			</div>
		</main>
	)
}

export default ProjectPage
