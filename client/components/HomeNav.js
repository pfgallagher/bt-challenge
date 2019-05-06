import React, { Component } from "react";
import { Button, Grid, Input } from "semantic-ui-react";
import { connect } from "react-redux";

import { languages, ratings } from "./settingsData";
import {
	initialSearch,
	setLanguage,
	setRating,
	updateSearchQuery,
	updateSearchType,
} from "./../store";
import HomeNavDropdown from "./HomeNavDropdown";

class HomeNav extends Component {
	render() {
		const {
			initialSearch,
			language,
			rating,
			searchQuery,
			setLanguage,
			setRating,
			updateSearchQuery,
		} = this.props;
		return (
			<Grid.Row centered>
				<Grid.Column textAlign="center" width="4" verticalAlign="middle">
					<Button.Group>
						<Button
							onClick={() => {
								initialSearch("trending");
							}}
							className="icon"
						>
							Trending
						</Button>
						<Button
							onClick={() => {
								initialSearch("random");
							}}
							className="icon"
						>
							Random
						</Button>
					</Button.Group>
				</Grid.Column>
				<Grid.Column width="8" textAlign="center" verticalAlign="middle">
					<Input
						size="huge"
						fluid
						placeholder="Search Giphy"
						action
						onChange={event => {
							updateSearchQuery(event.target.value);
						}}
						onKeyDown={event => {
							if (event.key === "Enter") initialSearch("search", searchQuery);
						}}
					>
						<input value={searchQuery} />
						<Button
							size="huge"
							type="submit"
							onClick={() => {
								initialSearch("search", searchQuery);
							}}
						>
							Search
						</Button>
					</Input>
				</Grid.Column>
				<Grid.Column width="4" verticalAlign="middle" textAlign="center">
					<HomeNavDropdown
						icon="world"
						defaultValue={language}
						onChange={(event, data) => {
							setLanguage(data.value);
						}}
						options={languages}
						header="Search Language"
					/>
					<HomeNavDropdown
						icon="dropdown"
						defaultValue={rating}
						onChange={(event, data) => {
							setRating(data.value);
						}}
						options={ratings}
						header="Content Rating"
					/>
				</Grid.Column>
			</Grid.Row>
		);
	}
}

const mapStateToProps = state => ({
	language: state.settings.language,
	rating: state.settings.rating,
	searchQuery: state.search.searchQuery,
});

const mapDispatchToProps = dispatch => ({
	setLanguage: language => {
		dispatch(setLanguage(language));
	},
	setRating: rating => {
		dispatch(setRating(rating));
	},
	updateSearchType: searchType => {
		dispatch(updateSearchType(searchType));
	},
	initialSearch: (searchType, searchQuery) => {
		dispatch(initialSearch(searchType, searchQuery));
	},
	updateSearchQuery: searchQuery => {
		dispatch(updateSearchQuery(searchQuery));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
