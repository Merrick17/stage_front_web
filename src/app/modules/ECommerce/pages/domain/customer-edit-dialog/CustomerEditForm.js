// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  addCenterApi,
  EditCenterApi,
} from "../../../../../redux_main/actions/center.actions";
import {
  adddomainApi,
  EditdomainApi,
} from "../../../../../redux_main/actions/domain.actions";
import { addUserApi } from "../../../../../redux_main/actions/users.actions";
export function CustomerEditForm({ userId, actionsLoading, onHide }) {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { entities } = useSelector((state) => state.domains);
  // const userState = useSelector((state) => state.users);
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm();
  useEffect(() => {
    let user = entities.find((elm) => elm._id == userId);
    console.log("user", user);
    if (user) {
      setValue("description", user.description);
      setValue("title", user.title);
    }
  }, [userId]);
  // Validation schema
  // nom: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  // },
  // phoneNumber: {
  //   type: String,
  //   required: true,
  // },
  // address:
  // responsable: {
  const submitForm = (data) => {
    if (!userId) {
      dispatch(adddomainApi(data, addToast));
    } else {
      dispatch(EditdomainApi(userId, data, addToast));
    }

    onHide();
  };
  return (
    <>
      <form
        className="form form-label-right"
        onSubmit={handleSubmit(submitForm)}
      >
        <Modal.Body className="overlay overlay-block cursor-default">
          {actionsLoading && (
            <div className="overlay-layer bg-transparent">
              <div className="spinner spinner-lg spinner-success" />
            </div>
          )}

          <div className="form-group row">
            {/* First Name */}
            <div className="col-lg-4">
              <input
                type={"text"}
                className="form-control"
                placeholder="Titre"
                {...register("title", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.title ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Titre Invalide ! </div>
                </div>
              ) : null}
            </div>
            {/* Last Name */}
            <div className="col-lg-4">
              <input
                type={"text"}
                className="form-control"
                placeholder="Description"
                {...register("description", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.description ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Description Invalide ! </div>
                </div>
              ) : null}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-light btn-elevate"
            onClick={() => onHide()}
          >
            Annuler
          </button>
          <> </>
          <button
            type="submit"
            // onClick={() => handleSubmit()}
            className="btn btn-primary btn-elevate"
          >
            Confirmer
          </button>
        </Modal.Footer>
      </form>
    </>
  );
}
