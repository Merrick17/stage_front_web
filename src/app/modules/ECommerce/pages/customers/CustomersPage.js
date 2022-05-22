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
import { getUserListApi } from "../../../../redux_main/actions/users.actions";

export function CustomersPage({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserListApi());
  }, []);
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/users/customers/new");
    },
    openEditCustomerDialog: (_id) => {
      history.push(`/users/customers/${_id}/edit`);
    },
    openDeleteCustomerDialog: (_id) => {
      history.push(`/users/customers/${_id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/users/customers/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/users/customers/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/users/customers/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/users/customers/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/users/customers");
            }}
          />
        )}
      </Route>
      <Route path="/users/customers/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/customers");
            }}
          />
        )}
      </Route>
      <Route path="/users/customers/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/users/customers");
            }}
          />
        )}
      </Route>
      <Route path="/users/customers/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/customers");
            }}
          />
        )}
      </Route>
      <Route path="/users/customers/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/users/customers");
            }}
          />
        )}
      </Route>
      <Route path="/users/customers/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/users/customers");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
