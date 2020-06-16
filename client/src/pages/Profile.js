import React from 'react';
import './css/Profile.css';
import avatar from '../img/profile/avatar.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faEnvelope,
	faMoneyBillAlt,
	faTransgender,
	faPhone,
	faAddressBook
} from '@fortawesome/free-solid-svg-icons';

const fakeprofile = {
	name: 'Fadhil Darma Putera Z',
	email: 'fadhildarma13@gmail.com',
	status: true,
	gender: 'male',
	phone: '02934238429',
	address: 'Jl. Jala Mitra No.7 Padang'
};

const Profile = () => {
	const { name, email, status, gender, phone, address } = fakeprofile;

	return (
		<div className="profile-container">
			<div className="profile-card">
				<div className="profile-desc">
					<div className="profile-data">
						<h2>Profile Info</h2>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faUser} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{name}
							</span>
							<span>Fullname</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{email}
							</span>
							<span>Email</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faMoneyBillAlt} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{status ? 'Active' : 'Not Active Please Subscribe'}
							</span>
							<span>Status</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faTransgender} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{gender}
							</span>
							<span>Gender</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faPhone} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{phone}
							</span>
							<span>Phone</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faAddressBook} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{address}
							</span>
							<span>Address</span>
						</div>
					</div>
				</div>
				<div className="profile-img">
					<img src={avatar} alt="avatar" className="profile-avatar" />
					<button className="profile-button">Change Photo Profile</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
