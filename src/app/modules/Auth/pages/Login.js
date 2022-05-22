import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUserApi } from "../../../redux_main/actions/users.actions";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

const Login = (props) => {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { addToast } = useToasts();
  const onSubmit = (data) => {
    console.log("Form Input", data);
    dispatch(loginUserApi(data, history, addToast));

    // navigator("/admin");
  };
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  // const getInputClasses = (fieldname) => {
  //   if (formik.touched[fieldname] && formik.errors[fieldname]) {
  //     return "is-invalid";
  //   }

  //   if (formik.touched[fieldname] && !formik.errors[fieldname]) {
  //     return "is-valid";
  //   }

  //   return "";
  // };

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">Se Connecter</h3>
        <p className="text-muted font-weight-bold"></p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {/* {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
            <div className="alert-text ">
              Use account <strong>admin@demo.com</strong> and password{" "}
              <strong>demo</strong> to continue.
            </div>
          </div>
        )} */}

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 `}
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">Email Invalide ! </div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 `}
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">Mot de passe invalide ! </div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            Mot de passe oublié ?
          </Link>
          <button
            id="kt_login_signin_submit"
            type="submit"
            // disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>Connexion</span>
            {/* {loading && <span className="ml-3 spinner spinner-white"></span>} */}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
};

export default Login;
