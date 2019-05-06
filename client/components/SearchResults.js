import React, { Component } from "react";
import { Card, Icon, Image, Visibility } from "semantic-ui-react";
import { connect } from "react-redux";
const dummyData = require("./../components/settingsData/dummyData.json");
import { infiniteScroll } from "./../store";
import NavButton from "./NavButton";

class SearchResults extends Component {
	render() {
		const { infiniteScroll, results, loading } = this.props;
		return (
			<>
				{loading ? (
					<NavButton
						name="circle notched"
						loading={true}
						link={false}
						onClick={() => {}}
					/>
				) : (
					<NavButton
						name="arrow alternate circle up outline"
						link
						loading={false}
						onClick={() =>
							window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
						}
					/>
				)}
				{results && results.length ? (
					<Visibility continuous onBottomVisible={() => infiniteScroll()}>
						<Card.Group centered>
							{results.map(el => (
								<Card className="cardColorOverride" key={el.id} link>
									<Image src={el.images.fixed_height.url} />
								</Card>
							))}
						</Card.Group>
					</Visibility>
				) : (
					""
				)}
			</>
		);
	}
}

const mapStateToProps = state => ({
	results: state.search.results,
	loading: state.search.loading,
});

const mapDispatchToProps = dispatch => ({
	infiniteScroll: () => {
		dispatch(infiniteScroll());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
