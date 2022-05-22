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
import { getdomainApi } from "../../../../redux_main/actions/domain.actions";

export function DomainPage({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdomainApi());
  }, []);
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/users/domain/new");
    },
    openEditCustomerDialog: (_id) => {
      history.push(`/users/domain/${_id}/edit`);
    },
    openDeleteCustomerDialog: (_id) => {
      console.log("ID", _id);
      history.push(`/users/domain/${_id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/users/domain/deleteCenter`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/users/domain/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/users/domain/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/users/domain/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/users/domain");
            }}
          />
        )}
      </Route>
      <Route path="/users/domain/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/domain");
            }}
          />
        )}
      </Route>
      <Route path="/users/domain/deleteCenter">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/users/domain");
            }}
          />
        )}
      </Route>
      <Route path="/users/domain/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/domain");
            }}
          />
        )}
      </Route>
      <Route path="/users/domain/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/users/domain");
            }}
          />
        )}
      </Route>
      <Route path="/users/domain/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/users/domain");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
