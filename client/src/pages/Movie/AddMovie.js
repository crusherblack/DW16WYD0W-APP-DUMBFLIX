import React from 'react';
import '../css/Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import AddEpisode from '../../components/AddEpisode/AddEpisode';

const AddMovie = () => {
	return (
		<div className="container">
			<div className="list-movie">
				<h2>Add Film</h2>
				<br />
				<div className="satuline">
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="Title"
							style={{
								width: '160%'
							}}
						/>
					</div>
					<div className="form-group">
						<button
							className="btn-grey"
							style={{
								width: '40%',
								height: '50px',
								fontSize: '18px',
								textAlign: 'left',
								float: 'right'
							}}
						>
							Attach Thumbnail{' '}
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
				</div>
				<div className="form-group">
					<input type="date" className="custom-input" placeholder="Year" />
				</div>
				<div className="form-group">
					<select name="" id="" className="custom-select">
						<option value="">Category</option>
						<option value="">TV Series</option>
						<option value="">Movie</option>
					</select>
				</div>
				<div className="form-group">
					<textarea type="text" className="custom-textarea" />
				</div>
				<AddEpisode />

				<div className="form-group">
					<button
						className="btn-merah"
						style={{ width: '10em', float: 'right', position: 'relative' }}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddMovie;
