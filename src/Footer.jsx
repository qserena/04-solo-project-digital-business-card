import twitterIcon from './assets/twitter.svg'
import facebookIcon from './assets/facebook.svg'
import instagramIcon from './assets/instagram.svg'
import githubIcon from './assets/github.svg'

export default function Footer() {
	return (
		<div className="footer-icons">
			<a href="https://twitter.com/tomserenander">
				<img src={twitterIcon} alt="Twitter icon" />
			</a>
			<a href="https://www.facebook.com/tom.serenander">
				<img src={facebookIcon} alt="Facebook icon" />
			</a>
			<a href="https://www.instagram.com/tomserenander/">
				<img src={instagramIcon} alt="Instagram icon" />
			</a>
			<a href="https://github.com/qserena">
				<img src={githubIcon} alt="GitHub icon" />
			</a>
		</div>
	)
}
