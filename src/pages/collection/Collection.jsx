import React from "react";
import "./collection.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((el) => (
          <CollectionItem key={el.id} item={el} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
