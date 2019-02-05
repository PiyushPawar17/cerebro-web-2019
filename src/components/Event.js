import React from 'react';

import CSGOLogo from '../img/csgo-logo.svg';

class Event extends React.Component {
	render() {
		return (
			<main className="event">
				<div className="container">
					<button className="btn">Back</button>
					<section className="event__header">
						<div className="event__header-logo">
							<img src={CSGOLogo} alt="Logo" />
						</div>
						<div className="event__header-name">Counter Strike : Global Offensive</div>
					</section>
					<section className="event__content">
						<div className="event__info">
							<p>
								It is a multiplayer first person shooter game played between counter terrorists and
								terrorists. It shall comprise of knockout rounds to semis to finals.
							</p>
							<a href="#">Sign In to Register</a>
							<div className="event__details">
								<p>
									<span className="paragraph__highlight">Prizes Worth:</span> ₹10,000
								</p>
								<p>
									<span className="paragraph__highlight">Team Size:</span> 5
								</p>
								<p>
									<span className="paragraph__highlight">Venue:</span> Lab 9102
								</p>
								<p>
									<span className="paragraph__highlight">Date:</span> March 3, 2019
								</p>
								<p>
									<span className="paragraph__highlight">Time:</span> 9:30 AM to 12:30 PM
								</p>
							</div>
							<div className="event__contact">
								<h2 className="heading--secondary">Contact</h2>
								<p>Aashutosh Rathi (+91 6789998212)</p>
								<p>Aashutosh Rathi (+91 6789998212)</p>
								<p>Aashutosh Rathi (+91 6789998212)</p>
							</div>
						</div>
						<div className="event__rules">
							<h2 className="heading--secondary">Rules</h2>
							<ul>
								<li className="event__rule">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</li>
								<li className="event__rule">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
								<li className="event__rule">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
								</li>
								<li className="event__rule">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
									amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua.
								</li>
								<li className="event__rule">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
								</li>
								<li className="event__rule">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									consectetur adipisicing elit.
								</li>
							</ul>
						</div>
					</section>
				</div>
			</main>
		);
	}
}

export default Event;
