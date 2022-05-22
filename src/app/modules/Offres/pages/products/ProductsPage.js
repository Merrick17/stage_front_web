import React from "react";
import { Route } from "react-router-dom";
import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { ProductsCard } from "./ProductsCard";
import { ProductsUIProvider } from "./ProductsUIContext";

export function ProductsPage({ history }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push("/users/ste/new");
    },
    openEditProductPage: (_id) => {
      history.push(`/users/ste/${_id}/edit`);
    },
    openDeleteProductDialog: (_id) => {
      history.push(`/users/ste/${_id}/delete`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/users/ste/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/users/ste/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push("/users/ste/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/users/ste/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/users/ste");
            }}
          />
        )}
      </Route>
      <Route path="/users/ste/:id/delete">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users/ste");
            }}
          />
        )}
      </Route>
      <Route path="/users/ste/fetch">
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/users/ste");
            }}
          />
        )}
      </Route>
      <Route path="/users/ste/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/users/ste");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}
