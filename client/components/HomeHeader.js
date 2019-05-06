import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import { connect } from "react-redux";

import { clearResults } from "./../store";

class HomeHeader extends Component {
	render() {
		const { clearResults } = this.props;
		return (
			<Grid.Row>
				<Grid.Column width="16" verticalAlign="middle" textAlign="center">
					<Header
						className="headerCursor"
						onClick={() => {
							clearResults();
						}}
						inverted
						size="huge"
					>
						<Image src="/giphylogo.png" size="mini" verticalAlign="middle" />
						<Header.Content>UI Developer Challenge</Header.Content>
					</Header>
				</Grid.Column>
			</Grid.Row>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	clearResults: () => {
		dispatch(clearResults());
	},
});

export default connect(null, mapDispatchToProps)(HomeHeader);
