import React, { Component } from "react";
import { Icon, Responsive } from "semantic-ui-react";

class SearchResultsButton extends Component {
	state = {
		width: `${window.innerWidth - 33}px`,
	};
	render() {
		const { name, onClick, loading, link } = this.props;

		return (
			<Responsive
				onUpdate={(event, data) => {
					this.setState({
						width: `${data.width - 33}px`,
					});
				}}
			>
				<Icon
					className="scrollToTopColorOverride"
					name={name}
					size="big"
					link={link}
					onClick={onClick}
					loading={loading}
					style={{
						position: "fixed",
						top: "95%",
						left: this.state.width,
					}}
				/>
			</Responsive>
		);
	}
}

export default SearchResultsButton;
