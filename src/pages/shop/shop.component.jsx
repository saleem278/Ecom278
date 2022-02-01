import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherprops }) => (
      <CollectionPreview key={id} {...otherprops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
collections:selectCollections
})
export default connect(mapStateToProps)(Shop);
