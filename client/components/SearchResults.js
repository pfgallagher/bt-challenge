import React, { Component } from "react";
import { Card, Container, Image, Modal, Visibility } from "semantic-ui-react";
import { connect } from "react-redux";

import { infiniteScroll } from "./../store";
import SearchResultsButton from "./SearchResultsButton";

class SearchResults extends Component {
	state = {
		modalOpen: false,
		modalImage: "",
	};
	render() {
		const { infiniteScroll, results, loading } = this.props;
		return (
			<>
				{loading ? (
					<SearchResultsButton
						name="circle notched"
						loading={true}
						link={false}
						onClick={() => {}}
					/>
				) : (
					<SearchResultsButton
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
						<Modal
							className="transparentModal"
							onClose={() => {
								this.setState({ modalOpen: false });
							}}
							closeIcon
							open={this.state.modalOpen}
						>
							<Container>
								<Image centered src={this.state.modalImage} />
							</Container>
						</Modal>
						<Card.Group centered>
							{results.map(el => (
								<Card
									onClick={() =>
										this.setState({
											modalOpen: true,
											modalImage: el.images.original.url,
										})
									}
									className="cardColorOverride"
									key={el.id}
									link
								>
									<Image centered src={el.images.fixed_height.url} />
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
