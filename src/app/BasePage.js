import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import { useSelector } from "react-redux";
import { ParticipationPage } from "./modules/ECommerce/pages/participation/ParticipationPage";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const OffrePage = lazy(() => import("./modules/Offres/pages/OffresPages"));
const FormationPage = lazy(() =>
  import("./modules/Formations/pages/FormationPages")
);
export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect
  const { userInfo } = useSelector((state) => state.users);
  const redirectUser = () => {
    if (userInfo) {
      if (userInfo.role == "ADMIN") {
        return <Redirect exact from="/" to="/users" />;
      } else if (userInfo.role == "STE") {
        return <Redirect exact from="/" to="/offres" />;
      } else if (userInfo.role == "CENTER") {
        return <Redirect exact from="/" to="/formations" />;
      }
    }
  };
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {/* Redirect from root URL to /dashboard. */
        // <Redirect exact from="/" to="/users" />
        redirectUser()}
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/users" component={ECommercePage} />
        <Route path="/offres" component={OffrePage} />
        <Route path="/formations" component={FormationPage} />
        <Route path={"/participation"} component={ParticipationPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
