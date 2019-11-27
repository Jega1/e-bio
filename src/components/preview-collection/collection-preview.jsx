import React from "react";

import CollectionItem from "../collection-items/collection-item.component";
import "./collection-preview.styles.scss";
// import { isTemplateElement } from "@babel/types";

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{/* {items.map(item => (
				<div key={items.id}>{item.name}</div>
			))} */}

			{/* only 4 items will be displayed */}
			{items
				.filter((item, idx) => idx < 4)
				// .map(({ id, ...otherItemProps }) => (
				.map(item => (
					<CollectionItem
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						imageUrl={item.imageUrl}
					/>
				))}
		</div>
	</div>
);

export default CollectionPreview;
