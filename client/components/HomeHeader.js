import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
class HomeHeader extends Component {
	render() {
		return (
			<Grid.Row>
				<Grid.Column width="4" />
				<Grid.Column width="8" textAlign="center">
					<Header inverted size="huge">
						<Image src="/giphylogo.png" size="mini" verticalAlign="middle" />
						<Header.Content>UI Developer Challenge</Header.Content>
					</Header>
				</Grid.Column>
				<Grid.Column width="4" />
			</Grid.Row>
		);
	}
}

export default HomeHeader;
