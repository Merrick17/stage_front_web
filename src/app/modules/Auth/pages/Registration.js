import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { registerUserApi } from "../../../redux_main/actions/users.actions";
import { useDispatch } from "react-redux";
const Registration = (props) => {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };
  const { addToast } = useToasts();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const submitRegister = (data) => {
    let body = { ...data, role: "USER" };
    dispatch(registerUserApi(body, addToast));
  };
  return (
    <div className="login-form login-signin" style={{ display: "block" }}>
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">Inscription</h3>
      </div>

      <form
        id="kt_login_signin_form"
        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
        onSubmit={handleSubmit(submitRegister)}
      >
        {/* begin: Alert */}
        {/* {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )} */}
        {/* end: Alert */}

        {/* begin: Fullname */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Nom"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 `}
            name="lastName"
            {...register("lastName", {
              required: true,
              // pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.lastName ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">Nom Invalide !</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Prénom"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 `}
            name="firstName"
            {...register("firstName", {
              required: true,
              // pattern: /^[A-Za-z]+$/i,
            })}
          />

          {errors.firstName ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">Prénom Invalide !</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Numéro Téléphone"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 `}
            name="phoneNumber"
            {...register("phoneNumber", {
              required: true,
            })}
          />
          {errors.phoneNumber ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">Numéro Invalide !</div>
            </div>
          ) : null}
        </div>
        {/* end: Fullname */}

        {/* begin: Email */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 `}
            name="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">Email Invalide !</div>
            </div>
          ) : null}
          {/* {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null} */}
        </div>
        {/* end: Email */}

        {/* end: Username */}

        {/* begin: Password */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 `}
            name="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">Mot de passe Invalide !</div>
            </div>
          ) : null}
          {/* {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null} */}
        </div>

        <div className="form-group d-flex flex-wrap flex-center">
          <button
            type="submit"
            // disabled={formik.isSubmitting || !formik.values.acceptTerms}
            className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
          >
            <span>Confirmer</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>

          <Link to="/auth/login">
            <button
              type="button"
              className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
            >
              Annuler
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
