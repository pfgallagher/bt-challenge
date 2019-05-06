import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";

import HomeHeader from "./HomeHeader";
import HomeNav from "./HomeNav";
import SearchResults from "./SearchResults";

class Home extends Component {
	render() {
		return (
			<>
				<Segment className="bgColorOverride">
					<Grid stackable>
						<HomeHeader />
						<HomeNav />
					</Grid>
				</Segment>
				<SearchResults />
			</>
		);
	}
}

export default Home;
