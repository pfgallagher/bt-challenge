import React, { Component } from "react";
import { Button, Dropdown, Grid, Input } from "semantic-ui-react";
class HomeNav extends Component {
	render() {
		// TODO: Modularize these.
		const language = [
			{ key: "English", text: "English", value: "en" },
			{ key: "Spanish", text: "Spanish", value: "es" },
			{ key: "Portuguese", text: "Portuguese", value: "pt" },
			{ key: "Indonesian", text: "Indonesian", value: "id" },
			{ key: "French", text: "French", value: "fr" },
			{ key: "Arabic", text: "Arabic", value: "ar" },
			{ key: "Turkish", text: "Turkish", value: "tr" },
			{ key: "Thai", text: "Thai", value: "th" },
			{ key: "Vietnamese", text: "Vietnamese", value: "vi" },
			{ key: "German", text: "German", value: "de" },
			{ key: "Italian", text: "Italian", value: "it" },
			{ key: "Japanese", text: "Japanese", value: "ja" },
			{ key: "Chinese Simplified", text: "Chinese Simplified", value: "zh-CN" },
			{
				key: "Chinese Traditional",
				text: "Chinese Traditional",
				value: "zh-TW",
			},
			{ key: "Russian", text: "Russian", value: "ru" },
			{ key: "Korean", text: "Korean", value: "ko" },
			{ key: "Polish", text: "Polish", value: "pl" },
			{ key: "Dutch", text: "Dutch", value: "nl" },
			{ key: "Romanian", text: "Romanian", value: "ro" },
			{ key: "Hungarian", text: "Hungarian", value: "hu" },
			{ key: "Swedish", text: "Swedish", value: "sv" },
			{ key: "Czech", text: "Czech", value: "cs" },
			{ key: "Hindi", text: "Hindi", value: "hi" },
			{ key: "Bengali", text: "Bengali", value: "bn" },
			{ key: "Danish", text: "Danish", value: "da" },
			{ key: "Farsi", text: "Farsi", value: "fa" },
			{ key: "Filipino", text: "Filipino", value: "tl" },
			{ key: "Finnish", text: "Finnish", value: "fi" },
			{ key: "Hebrew", text: "Hebrew", value: "iw" },
			{ key: "Malay", text: "Malay", value: "ms" },
			{ key: "Norwegian", text: "Norwegian", value: "no" },
			{ key: "Ukranian", text: "Ukranian", value: "uk" },
		];
		const rating = [
			{ key: "Y", text: "Y", value: "y" },
			{ key: "G", text: "G", value: "g" },
			{ key: "PG", text: "PG", value: "pg" },
			{ key: "PG-13", text: "PG-13", value: "pg-13" },
			{ key: "R", text: "R", value: "r" },
		];
		//
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
					<Dropdown
						button
						className="icon"
						floating
						labeled
						icon="world"
						options={language}
						search
						text="Search Language"
					/>
				</Grid.Column>
				<Grid.Column width="2" verticalAlign="middle">
					<Dropdown
						button
						className="icon"
						floating
						labeled
						options={rating}
						search
						text="Content Rating"
					/>
				</Grid.Column>
			</Grid.Row>
		);
	}
}

export default HomeNav;
