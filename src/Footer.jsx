import twitterIcon from './assets/Twitter Icon.png'
import facebookIcon from './assets/Facebook Icon.png'
import instagramIcon from './assets/Instagram Icon.png'
import githubIcon from './assets/GitHub Icon.png'

export default function Footer() {
	return (
		<div className="footer-icons">
			<img src={twitterIcon} alt="Twitter icon" />
			<img src={facebookIcon} alt="Facebook icon" />
			<img src={instagramIcon} alt="Instagram icon" />
			<img src={githubIcon} alt="GitHub icon" />
		</div>
	)
}
