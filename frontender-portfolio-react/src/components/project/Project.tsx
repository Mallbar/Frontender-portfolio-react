import { NavLink } from 'react-router-dom'

import './style.css'

interface ProjectCutProps {
	title: string
	img: string
	index: number
}

const Project: React.FC<ProjectCutProps> = props => {
	return (
		<NavLink to={`/project/${props.index}`}>
			<li className='project'>
				<img src={props.img} alt='Project img' className='project__img' />
				<h3 className='project__title'>{props.title}</h3>
			</li>
		</NavLink>
	)
}
export default Project
