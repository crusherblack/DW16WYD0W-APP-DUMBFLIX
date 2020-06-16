import React from 'react';
import './css/Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
	return (
		<div className="payment-container">
			<div className="payment-details">
				<div className="payment-desc">
					<h1
						style={{
							marginBottom: '60px'
						}}
					>
						Premium
					</h1>
					<p>
						Bayar sekarang dan nikmati streaming film-film yang kekinian dari{' '}
						<span className="red">DUMBFLIX </span> <br />{' '}
						<span className="red">DUMBFLIX </span> : 0981312323
					</p>
					<div className="form-payment">
						<div className="form-group">
							<input
								type="text"
								className="custom-input"
								placeholder="Input Your Account Number"
							/>
						</div>
						<div className="form-group">
							<button
								className="btn-light"
								style={{
									width: '100%',
									height: '50px',
									fontSize: '18px',
									textAlign: 'left',
									padding: '0 10px'
								}}
							>
								Attach proof of transfer{' '}
								<div
									style={{
										float: 'right',
										display: 'inline',
										fontSize: '20px'
									}}
								>
									<FontAwesomeIcon icon={faPaperclip} />
								</div>
							</button>
						</div>
						<div className="form-group">
							<button
								className="button"
								style={{
									height: '35px',
									fontSize: '16px',
									marginTop: '25px'
								}}
							>
								Kirim
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
