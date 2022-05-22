// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { addUserApi } from "../../../../../redux_main/actions/users.actions";
export function CustomerEditForm({
  saveCustomer,
  customer,
  actionsLoading,
  onHide,
}) {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  // Validation schema
  //firstName, lastName, email, password, role, phoneNumber
  const submitForm = (data) => {
    dispatch(addUserApi(data, addToast));
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
                {...register("lastName", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.lastName ? (
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
                placeholder="Prénom"
                {...register("firstName", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.firstName ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Prénom Invalide ! </div>
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
                placeholder="Numéro Téléphone"
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
              <input
                type={"password"}
                className="form-control"
                placeholder="Mot de passe "
                {...register("password", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.password ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">mot de passe Invalide ! </div>
                </div>
              ) : null}
            </div>
            <div className="col-lg-4">
              <select
                name="Role"
                label="Role"
                className="form-control"
                {...register("role", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              >
                <option value="ADMIN">Administrateur</option>
                <option value="USER">Etudiant</option>
                <option value="STE">Entreprises</option>
                <option value="CENTER">Centre de formation</option>
              </select>
            </div>
            {/* Date of birth */}
          </div>
          <div className="form-group row">
            {/* Gender */}

            {/* Type */}
            <div className="col-lg-4"></div>
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
