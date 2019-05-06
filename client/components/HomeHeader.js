import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { clearResults } from "./../store";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
class HomeHeader extends Component {
	render() {
		console.log(HomeNav);
		const { clearResults } = this.props;
		return (
			<Grid.Row>
				<Grid.Column width="4" />
				<Grid.Column width="8" verticalAlign="middle" textAlign="center">
					<Link
						to=""
						onClick={event => {
							event.preventDefault();
							clearResults();
						}}
					>
						<Header inverted size="huge">
							<Image src="/giphylogo.png" size="mini" verticalAlign="middle" />
							<Header.Content>UI Developer Challenge</Header.Content>
						</Header>
					</Link>
				</Grid.Column>
				<Grid.Column width="4" />
			</Grid.Row>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	clearResults: () => {
		dispatch(clearResults());
	},
});

export default connect(null, mapDispatchToProps)(HomeHeader);
