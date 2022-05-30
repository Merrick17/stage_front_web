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

export function ParticipationPage({ history }) {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    // dispatch(getUserListApi());
  }, []);
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/offres/participation/list/new");
    },
    openEditCustomerDialog: (_id) => {
      history.push(`/offres/participation/list/${_id}/edit`);
    },
    openDeleteCustomerDialog: (_id) => {
      history.push(`/offres/participation/list/${_id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/offres/participation/list/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/offres/participation/list/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/offres/participation/list/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/participation/list/new">
        {({ history, match }) => {
          console.log("Match", match);
          return (
            <CustomerEditDialog
              show={match != null}
              onHide={() => {
                history.push("/offres/participation/list");
              }}
            />
          );
        }}
      </Route>
      <Route path="/offres/participation/list/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/offres/participation/list");
            }}
          />
        )}
      </Route>
      <Route path="/offres/participation/list/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/offres/participation/list");
            }}
          />
        )}
      </Route>
      <Route path="/offres/participation/list/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/offres/participation/list");
            }}
          />
        )}
      </Route>
      <Route path="/offres/participation/list/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/offres/participation/list");
            }}
          />
        )}
      </Route>
      <Route path="/offres/participation/list/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/offres/participation/list");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
