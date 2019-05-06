import React from "react";
import { Icon } from "semantic-ui-react";

const NavButton = props => {
	const { name, onClick, loading, link } = props;
	return (
		<Icon
			className="scrollToTopColorOverride"
			name={name}
			size="big"
			link={link}
			onClick={onClick}
			loading={loading}
			style={{ position: "fixed", top: "95%", left: "95%" }}
		/>
	);
};

export default NavButton;
