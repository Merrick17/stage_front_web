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
import { getformationApi } from "../../../../redux_main/actions/formation.actions";

export function CustomersPage({ history }) {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getformationApi());
  }, []);
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/formations/list/new");
    },
    openEditCustomerDialog: (_id) => {
      history.push(`/formations/list/${_id}/edit`);
    },
    openDeleteCustomerDialog: (_id) => {
      history.push(`/formations/list/${_id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/formations/list/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/formations/list/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/formations/list/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/formations/list/new">
        {({ history, match }) => {
          console.log("Match", match);
          return (
            <CustomerEditDialog
              show={match != null}
              onHide={() => {
                history.push("/formations/list");
              }}
            />
          );
        }}
      </Route>
      <Route path="/formations/list/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/formations/list");
            }}
          />
        )}
      </Route>
      <Route path="/formations/list/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/formations/list");
            }}
          />
        )}
      </Route>
      <Route path="/formations/list/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/formations/list");
            }}
          />
        )}
      </Route>
      <Route path="/formations/list/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/formations/list");
            }}
          />
        )}
      </Route>
      <Route path="/formations/list/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/formations/list");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
