import React, { Component } from "react";
import { Button, Grid, Input } from "semantic-ui-react";
import { languages, ratings } from "./settingsData";
import { connect } from "react-redux";
import { setLanguage, setRating } from "./../store";
import HomeNavDropdown from "./HomeNavDropdown";
class HomeNav extends Component {
	render() {
		const { language, rating, setLanguage, setRating } = this.props;
		return (
			<Grid.Row>
				<Grid.Column width="1" />
				<Grid.Column textAlign="center" width="2" verticalAlign="middle">
					<Button.Group>
						<Button size="huge" className="icon">
							Trending
						</Button>
						<Button size="huge" className="icon">
							Random
						</Button>
					</Button.Group>
				</Grid.Column>
				<Grid.Column width="1" />
				<Grid.Column width="8" textAlign="center">
					<Input size="massive" placeholder="Search Giphy" action>
						<input />
						<Button size="massive" type="submit">
							Search
						</Button>
					</Input>
				</Grid.Column>
				<Grid.Column width="2" verticalAlign="middle">
					<HomeNavDropdown
						icon="world"
						defaultValue={language}
						onChange={(event, data) => {
							setLanguage(data.value);
						}}
						options={languages}
						header="Search Language"
					/>
				</Grid.Column>
				<Grid.Column width="2" verticalAlign="middle">
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
});

const mapDispatchToProps = dispatch => ({
	setLanguage: language => {
		dispatch(setLanguage(language));
	},
	setRating: rating => {
		dispatch(setRating(rating));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
