import React from "react";
import { Dropdown } from "semantic-ui-react";

const HomeNavDropdown = props => {
	const { defaultValue, header, icon, onChange, options } = props;
	return (
		<Dropdown
			header={header}
			icon={icon}
			options={options}
			defaultValue={defaultValue}
			onChange={onChange}
			button
			className="icon"
			floating
			labeled
			search
		/>
	);
};

export default HomeNavDropdown;
