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
import { addUserApi } from "../../../../../redux_main/actions/users.actions";
export function CustomerEditForm({ userId, actionsLoading, onHide }) {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { entities } = useSelector((state) => state.center);
  const userState = useSelector((state) => state.users);
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
      setValue("nom", user.nom);
      setValue("address", user.address);
      setValue("phoneNumber", user.phoneNumber);
      setValue("email", user.email);
      setValue("responsable", user.responsable._id);
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
      dispatch(addCenterApi(data, addToast));
    } else {
      dispatch(EditCenterApi(userId, data, addToast));
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
                placeholder="Nom"
                {...register("nom", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.nom ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Nom Invalide ! </div>
                </div>
              ) : null}
            </div>
            {/* Last Name */}
            <div className="col-lg-4">
              <input
                type={"text"}
                className="form-control"
                placeholder="Adresse"
                {...register("address", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.address ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Adresse Invalide ! </div>
                </div>
              ) : null}
            </div>
            {/* Login */}
            <div className="col-lg-4">
              <input
                type={"text"}
                className="form-control"
                placeholder="Numéro Téléphone"
                {...register("phoneNumber", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.phoneNumber ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    Numéro Téléphone Invalide !{" "}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Email */}
          <div className="form-group row">
            <div className="col-lg-4">
              <input
                type={"email"}
                className="form-control"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.email ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Email Invalide ! </div>
                </div>
              ) : null}
            </div>

            <div className="col-lg-4">
              <select
                name="Role"
                label="Role"
                className="form-control"
                {...register("responsable", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              >
                {userState.entities.map((elm) => (
                  <option value={elm._id}>
                    {elm.firstName} {elm.lastName}
                  </option>
                ))}
              </select>
            </div>
            {/* Date of birth */}
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
