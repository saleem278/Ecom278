import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  let match = useMatch()
  console.log(match);
  return (
    <div className="shop-page">
      <Routes>
        <Route
          exact
          path={`${match.pathname}`}
          element={<CollectionsOverview />}
        />
        <Route path={`${match.pathname}/:collectionId`} element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
