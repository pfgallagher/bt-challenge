import React, { Component } from "react";
const dummyData = require("./settingsData/dummyData.json");
import { Card, Icon, Image } from "semantic-ui-react";
class SearchResults extends Component {
	render() {
		return (
			<>
				<Icon
					className="scrollToTopColorOverride"
					name="arrow alternate circle up outline"
					size="big"
					link
					onClick={() =>
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth",
						})
					}
					style={{ position: "fixed", top: "95%", left: "95%" }}
				/>
				<Card.Group centered>
					{dummyData.data.map(el => (
						<Card className="cardColorOverride" key={el.id} link>
							<Image src={el.images.fixed_height.url} />
						</Card>
					))}
					{dummyData.data.map(el => (
						<Card className="cardColorOverride" key={el.id} link>
							<Image src={el.images.fixed_height.url} />
						</Card>
					))}
				</Card.Group>
			</>
		);
	}
}

export default SearchResults;
