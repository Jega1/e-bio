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
					id: 1,
					linkUrl: 'hats'
				},
				{
					title: "Snakers",
					imageUrl: "https:/",
					id: 1,
					linkUrl: ''
				},
				{
					title: "Jackets",
					imageUrl: "https:/",
					id: 1,
					linkUrl: ''
				},
				{
					title: "Womens",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
					id: 1,
					linkUrl: ''
				},
				{
					title: "Mens",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
					id: 5,
					linkUrl: ''
				}
			]
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{/* {this.state.section.map(({ title, imageUrl, id, size, linkUrl}) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
				))} */}

				{this.state.section.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} { ...otherSectionProps} />
				))} 
			</div>
		);
	}
}

export default Directory;
