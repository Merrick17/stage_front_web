import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";
import { useDispatch } from "react-redux";

import { getCenterApi } from "../../../../redux_main/actions/center.actions";

export function FormationPage({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCenterApi());
  }, []);
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/users/center/new");
    },
    openEditCustomerDialog: (_id) => {
      history.push(`/users/center/${_id}/edit`);
    },
    openDeleteCustomerDialog: (_id) => {
      console.log("ID", _id);
      history.push(`/users/center/${_id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/users/center/deleteCenter`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/users/center/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/users/center/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/users/center/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/users/center");
            }}
          />
        )}
      </Route>
      <Route path="/users/center/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/center");
            }}
          />
        )}
      </Route>
      <Route path="/users/center/deleteCenter">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/users/center");
            }}
          />
        )}
      </Route>
      <Route path="/users/center/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/center");
            }}
          />
        )}
      </Route>
      <Route path="/users/center/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/users/center");
            }}
          />
        )}
      </Route>
      <Route path="/users/center/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/users/center");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
