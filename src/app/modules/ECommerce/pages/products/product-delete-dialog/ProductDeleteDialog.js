/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { deleteSteApi } from "../../../../../redux_main/actions/ste.actions";
import * as actions from "../../../_redux/products/productsActions";
import { useProductsUIContext } from "../ProductsUIContext";

export function ProductDeleteDialog({ id, show, onHide }) {
  // Products UI Context
  const productsUIContext = useProductsUIContext();
  const productsUIProps = useMemo(() => {
    return {
      setIds: productsUIContext.setIds,
      queryParams: productsUIContext.queryParams,
    };
  }, [productsUIContext]);

  // Products Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.ste.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteProduct = () => {
    console.log("delete");
    dispatch(deleteSteApi(id));
    onHide();
    // server request for deleting product by id
    // dispatch(actions.deleteProduct(id)).then(() => {
    //   // refresh list after deletion
    //   dispatch(actions.fetchProducts(productsUIProps.queryParams));
    //   // clear selections list
    //   productsUIProps.setIds([]);
    //   // closing delete modal
    //   onHide();
    // });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Supprimer Entreprise
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && <span>Vous etes sure de supprimer cet Entreprise?</span>}
        {isLoading && <span>Product is deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteProduct}
            className="btn btn-danger btn-elevate "
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}