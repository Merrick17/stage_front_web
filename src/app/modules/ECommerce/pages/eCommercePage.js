import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import { CenterPage } from "./centers/CenterPage";
import { DomainPage } from "./domain/DomainePage";
import { FormationPage } from "./formations/FormationPage";
import { ParticipationPage } from "./participation/ParticipationPage";
export default function eCommercePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect exact={true} from="/users" to="/users/customers" />
        }
        <ContentRoute path="/users/customers" component={CustomersPage} />
        <ContentRoute path="/users/ste/new" component={ProductEdit} />
        <ContentRoute path="/users/ste/:id/edit" component={ProductEdit} />

        <ContentRoute path="/users/ste" component={ProductsPage} />
        <ContentRoute path="/users/center" component={CenterPage} />
        <ContentRoute path="/users/domain" component={DomainPage} />
        <ContentRoute path="/users/formation" component={FormationPage} />
        <ContentRoute
          path="/users/participation"
          component={ParticipationPage}
        />
      </Switch>
    </Suspense>
  );
}
