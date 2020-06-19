import React, { useRef, useState } from 'react';
import '../css/Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { styles } from './Styles';

const AddMovie = () => {
	const [ categoryType, setCategoryType ] = useState('');
	const [ episodes, setEpisodes ] = React.useState([
		{ titleEpisode: '', attachThumbnail: '', linkFilm: '' }
	]);

	const [ formData, setFormData ] = useState({
		title: '',
		year: '',
		description: '',
		thumbnailFilm: null,
		urlMovie: ''
	});

	const onChange = (event) => {
		const updateForm = { ...formData };
		updateForm[event.target.name] =
			event.target.type === 'file' ? event.target.files[0] : event.target.value;
		setFormData(updateForm);
	};

	const { title, year, description, urlMovie, thumbnailFilm } = formData;

	const inputFileRef = useRef(null);

	const addRate = () => {
		setEpisodes([
			...episodes,
			{ titleEpisode: '', attachThumbnail: '', linkFilm: '' }
		]);
	};

	const handleChange = (event) => {
		const updateForm = [ ...episodes ];
		updateForm[event.target.dataset.id][event.target.className] =
			event.target.type === 'text' ? event.target.value : event.target.files[0];
		setEpisodes(updateForm);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const onBtnClick = () => {
		inputFileRef.current.click();
	};

	return (
		<div className="container">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log({
						title,
						year,
						categoryType,
						description,
						urlMovie,
						thumbnailFilm,
						episodes
					});
				}}
			>
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
								onChange={(e) => onChange(e)}
								value={title}
								name="title"
							/>
						</div>
						<div className="form-group">
							<button
								type="button"
								onClick={onBtnClick}
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
							<input
								type="file"
								ref={inputFileRef}
								style={{ display: 'none' }}
								onChange={(e) => onChange(e)}
								name="thumbnailFilm"
							/>
						</div>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="Year"
							onChange={(e) => onChange(e)}
							value={year}
							name="year"
						/>
					</div>
					<div className="form-group">
						<select
							name="categoryId"
							className="custom-select"
							onChange={(e) => {
								setCategoryType(e.target.value);
								onChange(e);
							}}
						>
							<option value="">Category</option>
							<option value="1">TV Series</option>
							<option value="2">Movie</option>
						</select>
					</div>
					<div className="form-group">
						<textarea
							type="text"
							className="custom-textarea"
							onChange={(e) => onChange(e)}
							value={description}
							name="description"
						/>
					</div>
					{categoryType === '2' ? (
						<div className="form-group">
							<input
								type="text"
								className="custom-input"
								placeholder="Url / Link Film"
								onChange={(e) => onChange(e)}
								value={urlMovie}
								name="urlMovie"
							/>
						</div>
					) : null}

					{categoryType === '1' ? (
						<div>
							<div onChange={handleChange}>
								{episodes.map((row, index) => {
									const titleEpisodeId = `title-${index}`,
										attachThumbnailId = `attach-${index}`,
										linkFilmId = `link-${index}`;

									return (
										<div key={index} style={{ marginTop: '3rem' }}>
											<div className="form-group">
												<div
													style={{
														display: 'grid',
														gridTemplateColumns:
															'repeat(2, 1fr)',
														gridGap: '1rem'
													}}
												>
													<input
														type="text"
														name={titleEpisodeId}
														data-id={index}
														id={titleEpisodeId}
														className="titleEpisode"
														placeholder="Title Episode"
														style={styles.customInputTitle}
													/>
													<input
														type="file"
														name={attachThumbnailId}
														data-id={index}
														id={attachThumbnailId}
														className="attachThumbnail"
														style={styles.customInputFile}
														ref={inputFileRef}
													/>
													<button
														type="button"
														className="btn-grey"
														onClick={() => {
															document
																.getElementsByName(
																	attachThumbnailId
																)[0]
																.click();
														}}
														style={{
															width: '40%',
															height: '50px',
															fontSize: '18px',
															textAlign: 'left',
															float: 'right',
															justifySelf: 'right'
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
															<FontAwesomeIcon
																icon={faPaperclip}
															/>
														</div>
													</button>
												</div>
											</div>
											<div className="form-group">
												<input
													type="text"
													name={linkFilmId}
													data-id={index}
													id={linkFilmId}
													className="linkFilm"
													placeholder="Link Film"
													style={styles.customInput}
												/>
											</div>
										</div>
									);
								})}
								<div className="form-group">
									<button
										type="button"
										className="btn-grey"
										style={{
											width: '100%',
											height: '50px',
											color: '#e50914'
										}}
										onClick={addRate}
									>
										<FontAwesomeIcon icon={faPlus} />
									</button>
								</div>
							</div>
						</div>
					) : null}

					<div className="form-group">
						<button
							type="submit"
							className="btn-merah"
							style={{
								width: '10em',
								float: 'right',
								position: 'relative'
							}}
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddMovie;
