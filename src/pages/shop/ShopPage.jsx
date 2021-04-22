import React from "react";
import CollectionOwerview from "../../components/collections-owerview/CollectionsOwerview";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOwerview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
