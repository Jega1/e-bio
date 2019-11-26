import React from "react";

import CollectionItem from "../collection-items/collection-item.component";
import "./collection-preview.styles.scss";
// import { isTemplateElement } from "@babel/types";

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{/* all items will be displayed
			 {
			items.map(item => (
				<div key={items.id}>{item.name}</div>
			))} */}

			{/* only 4 items will be displayed */}
			{items
				.filter((item, idx) => idx < 4)
				.map(({ id, ...otherItemProps }) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
