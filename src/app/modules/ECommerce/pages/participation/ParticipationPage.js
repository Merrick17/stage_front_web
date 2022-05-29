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

export function ParticipationPage({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdomainApi());
  }, []);
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/users/participation/new");
    },
    openEditCustomerDialog: (_id) => {
      history.push(`/users/participation/${_id}/edit`);
    },
    openDeleteCustomerDialog: (_id) => {
      console.log("ID", _id);
      history.push(`/users/participation/${_id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/users/participation/deleteCenter`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/users/participation/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/users/participation/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/users/participation/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/users/participation");
            }}
          />
        )}
      </Route>
      <Route path="/users/participation/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/participation");
            }}
          />
        )}
      </Route>
      <Route path="/users/participation/deleteCenter">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/users/participation");
            }}
          />
        )}
      </Route>
      <Route path="/users/participation/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/participation");
            }}
          />
        )}
      </Route>
      <Route path="/users/participation/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/users/participation");
            }}
          />
        )}
      </Route>
      <Route path="/users/participation/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/users/participation");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
