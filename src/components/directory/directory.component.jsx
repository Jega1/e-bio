import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			section: [
				{
					title: "hats",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					id: 1
				},
				{
					title: "hats",
					imageUrl: "https:/",
					id: 1
				},
				{
					title: "hats",
					imageUrl: "https:/",
					id: 1
				},
				{
					title: "hats",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
					id: 1
				},
				{
					title: "hats",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
					id: 5
				}
			]
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.section.map(({ title, imageUrl, id, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
