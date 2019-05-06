import React, { Component } from "react";
import { Card, Icon, Image, Visibility } from "semantic-ui-react";
import { connect } from "react-redux";
const dummyData = require("./../components/settingsData/dummyData.json");
import { infiniteScroll } from "./../store";

class SearchResults extends Component {
	render() {
		const { infiniteScroll, results } = this.props;
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
				<Visibility
					continuous
					onBottomVisible={() => infiniteScroll(dummyData.data)}
				>
					<Card.Group centered>
						{results.map(el => (
							<Card className="cardColorOverride" key={el.id} link>
								<Image src={el.images.fixed_height.url} />
							</Card>
						))}
					</Card.Group>
				</Visibility>
			</>
		);
	}
}

const mapStateToProps = state => ({
	results: state.search.results,
});

const mapDispatchToProps = dispatch => ({
	infiniteScroll: additionalResults => {
		dispatch(infiniteScroll(additionalResults));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
