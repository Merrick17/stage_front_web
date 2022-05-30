import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import { ParticipationPage } from "./participation/ParticipationPage";
export default function OffresPages() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect exact={true} from="/offres" to="/offres/list" />
        }
        <ContentRoute path="/offres/list" component={CustomersPage} />
        <ContentRoute
          path="/offres/participation/list"
          component={ParticipationPage}
        />
        <ContentRoute path="/users/ste/new" component={ProductEdit} />
        <ContentRoute path="/users/ste/:id/edit" component={ProductEdit} />

        <ContentRoute path="/users/ste" component={ProductsPage} />
      </Switch>
    </Suspense>
  );
}
