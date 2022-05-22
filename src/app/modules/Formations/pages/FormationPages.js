import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function FormationPages() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect exact={true} from="/formations" to="/formations/list" />
        }
        <ContentRoute path="/formations/list" component={CustomersPage} />
        <ContentRoute path="/formations/ste/new" component={ProductEdit} />
        <ContentRoute path="/formations/ste/:id/edit" component={ProductEdit} />

        <ContentRoute path="/formations/ste" component={ProductsPage} />
      </Switch>
    </Suspense>
  );
}
