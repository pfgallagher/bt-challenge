import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Switch>
		);
	}
}

export default withRouter(Routes);
