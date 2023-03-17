import React from "react";

const Search = (props) => {
	const { handleOnChange, query, handleOnClick } = props;

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleOnClick();
		}
	};
	return (
		<div className="search-container">
			<input
				className="search-input"
				type="text"
				value={query}
				onChange={handleOnChange}
				onKeyDown={handleKeyPress}
				placeholder="e.g. London,England"
			/>
			<button className="search-button" type="submit" onClick={handleOnClick}>
				<i className="fas fa-search"></i>
			</button>
		</div>
	);
};

export default Search;
