// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { addOffre } from "../../../../../redux_main/actions/offres.actions";
import { addUserApi } from "../../../../../redux_main/actions/users.actions";
export function CustomerEditForm({
  saveCustomer,
  customer,
  actionsLoading,
  onHide,
}) {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { ste } = useSelector((state) => state.users);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  // Validation schema
  //title, description, startDate, endDate
  const submitForm = (data) => {
    console.log("Data", data);
    let body = { ...data, addedBy: ste._id };
    dispatch(addOffre(body, addToast));
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
                type={"date"}
                className="form-control"
                placeholder="Date Fin"
                {...register("endDate", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.endDate ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Date Fin Invalide ! </div>
                </div>
              ) : null}
            </div>

            {/* Login */}
            <div className="col-lg-4">
              <input
                type={"date"}
                className="form-control"
                placeholder="Date Début"
                {...register("startDate", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.startDate ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Date Début Invalide ! </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="form-group row">
            {/* Gender */}

            {/* Type */}
            <div className="col-lg-4">
              <select
                className="form-control"
                {...register("offerType", {
                  required: true,
                })}
              >
                <option value={"STAGE"}>Stage</option>
                <option value={"OFFRE"}>Offre d'emploi</option>
              </select>
            </div>
          </div>
          {/* Email */}
          <div className="form-group row">
            <div className="col-lg">
              <textarea
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
                  <div className="fv-help-block">Déscription Invalide ! </div>
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
