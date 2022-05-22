import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
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
  const location = useLocation();
  useEffect(() => {
    // dispatch(getUserListApi());
  }, []);
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/offres/list/new");
    },
    openEditCustomerDialog: (_id) => {
      history.push(`/offres/list/${_id}/edit`);
    },
    openDeleteCustomerDialog: (_id) => {
      history.push(`/offres/list/${_id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/offres/list/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/offres/list/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/offres/list/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/offres/list/new">
        {({ history, match }) => {
          console.log("Match", match);
          return (
            <CustomerEditDialog
              show={match != null}
              onHide={() => {
                history.push("/offres/list");
              }}
            />
          );
        }}
      </Route>
      <Route path="/offres/list/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/offres/list");
            }}
          />
        )}
      </Route>
      <Route path="/offres/list/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/offres/list");
            }}
          />
        )}
      </Route>
      <Route path="/offres/list/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/offres/list");
            }}
          />
        )}
      </Route>
      <Route path="/offres/list/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/offres/list");
            }}
          />
        )}
      </Route>
      <Route path="/offres/list/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/offres/list");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
