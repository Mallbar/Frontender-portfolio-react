import './style.css'
import gitHubIcon from './gitHub-black.svg'

const BtnGitHub = ({ link }: { link: string }) => {
	return (
		<a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
			<img src={gitHubIcon} alt='Image' />
			GitHub repo
		</a>
	)
}

export default BtnGitHub
