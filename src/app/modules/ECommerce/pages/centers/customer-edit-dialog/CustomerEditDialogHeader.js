import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";

export function CustomerEditDialogHeader({ id }) {
  const [actionsLoading,setActionsLoading]=useState(false); 
  // Customers Redux state
  // const { customerForEdit, actionsLoading } = useSelector(
  //   (state) => ({
  //     customerForEdit: state.users.customerForEdit,
  //     actionsLoading: state.users.loading,
  //   }),
  //   shallowEqual
  // );

  const [title, setTitle] = useState("");
  // Title couting
  // useEffect(() => {
  //   let _title = id ? "" : "New Customer";
  //   if (customerForEdit && id) {
  //     _title = `Edit customer '${customerForEdit.firstName} ${customerForEdit.lastName}'`;
  //   }

  //   setTitle(_title);
  //   // eslint-disable-next-line
  // }, [customerForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
