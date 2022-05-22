/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/products/productsActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { ProductEditForm } from "./ProductEditForm";
import { Specifications } from "../product-specifications/Specifications";
import { SpecificationsUIProvider } from "../product-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../product-remarks/RemarksUIContext";
import { Remarks } from "../product-remarks/Remarks";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { addSteApi } from "../../../../../redux_main/actions/ste.actions";
const initProduct = {
  id: undefined,
  model: "",
  manufacture: "Pontiac",
  modelYear: 2020,
  mileage: 0,
  description: "",
  color: "Red",
  price: 10000,
  condition: 1,
  status: 0,
  VINCode: "",
};

export function ProductEdit({
  history,
  onHide,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, productForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.ste.actionsLoading,
      productForEdit: state.ste.productForEdit,
    }),
    shallowEqual
  );
  const { entities } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(actions.fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "Nouveau entreprise";
    if (productForEdit && id) {
      _title = `Modifier '${productForEdit.manufacture} ${productForEdit.model} - ${productForEdit.modelYear}'`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productForEdit, id]);
  // useMemo(() => {
  //   setValue("responsable", entities.filter((elm) => elm.role == "STE")[0], {
  //     shouldValidate: true,
  //   });
  // }, [entities]);

  const saveProduct = (values) => {
    if (!id) {
      dispatch(actions.createProduct(values)).then(() => backToProductsList());
    } else {
      dispatch(actions.updateProduct(values)).then(() => backToProductsList());
    }
  };

  const btnRef = useRef();
  const saveProductClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };
  const submitForm = (data) => {
    dispatch(addSteApi(data, addToast, history));
  };

  const backToProductsList = () => {
    history.push(`/users/products`);
  };
  const { addToast } = useToasts();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm();
  // nomSte,
  // addresse,
  // phone,
  // repsonsable,
  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}></CardHeader>
      <CardBody>
        <form
          className="form form-label-right"
          onSubmit={handleSubmit(submitForm)}
        >
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
                placeholder="Nom de l'entreprise"
                {...register("nomSte", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.nomSte ? (
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
                placeholder="Addresse"
                {...register("addresse", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.addresse ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">Addresse Invalide ! </div>
                </div>
              ) : null}
            </div>
            {/* Login */}
            <div className="col-lg-4">
              <input
                type={"text"}
                className="form-control"
                placeholder="Numéro Téléphone"
                {...register("phone", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.phone ? (
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
                defaultValue={"Responsable"}
                {...register("responsable", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              >
                <option value={"Responsable"}>Responsable</option>
                {entities
                  .filter((user) => user.role == "STE")
                  .map((elm) => (
                    <option value={elm._id}>
                      {elm.firstName} {elm.lastName}
                    </option>
                  ))}
              </select>
            </div>
            {/* Date of birth */}
          </div>
          <div className="form-group row">
            {/* Gender */}

            {/* Type */}
            <div className="col-lg-4"></div>
          </div>

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
        </form>
      </CardBody>
    </Card>
  );
}
