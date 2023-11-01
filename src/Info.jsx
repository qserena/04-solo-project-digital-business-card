import profilePhoto from './assets/Tom.png'
import emailIcon from './assets/mail.svg'
import linkedinIcon from './assets/linkedin.svg'

export default function Info() {
	return (
		<>
			<img
				src={profilePhoto}
				className="profile-img"
				alt="Photo of Tom Serenander"
			/>
			<div className="inner-container">
				<h1>Tom Serenander</h1>
				<h3>Frontend Developer</h3>
				<a href="https://serenander.se" className="website">
					serenander.se
				</a>
				<div className="buttons">
					<button className="btn email-btn">
						<div className="button-content">
							<img src={emailIcon} alt="Email icon" />
							Email
						</div>
					</button>
					<button className="btn linkedin-btn">
						<div className="button-content">
							<img src={linkedinIcon} alt="Email icon" />
							LinkedIn
						</div>
					</button>
				</div>
			</div>
		</>
	)
}
