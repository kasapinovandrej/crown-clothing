import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreviw from "../../components/collection-preview/CollectonPreview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreviw key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
