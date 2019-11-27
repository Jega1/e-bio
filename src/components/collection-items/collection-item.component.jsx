import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = (id, name, price, imageUrl) => (
	<div className="collection-item">
		{/* <div
			className="image"
			style={{
				backgroundImage: `url(${id.imageUrl})`
			}}
		/> */}
		<img src={id.imageUrl} alt=""/>
		<div className="collection-footer">
			<span>{id.name}</span>
			<span>{id.imageUrl}</span>
			<span className="price">{id.price}</span>
		</div>
	</div>
);

export default CollectionItem;
