import React, { useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { CustomersFilter } from "./customers-filter/CustomersFilter";
import { CustomersTable } from "./customers-table/CustomersTable";
import { CustomersGrouping } from "./customers-grouping/CustomersGrouping";
import { useCustomersUIContext } from "./CustomersUIContext";
import { useDispatch, useSelector } from "react-redux";
import { getParticipationByOffer } from "../../../../redux_main/actions/participation.actions";

export function CustomersCard() {
  const { entities } = useSelector((state) => state.offres);
  const dispatch = useDispatch();
  const [selectedOffre, setSelectedOffre] = useState("");
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      newCustomerButtonClick: customersUIContext.newCustomerButtonClick,
    };
  }, [customersUIContext]);

  return (
    <Card>
      <CardHeader title="List des participation">
        <CardHeaderToolbar>
          <div className="row w-100 d-flex">
            <div className="col-md-8">
              <select
                className="form-control"
                value={selectedOffre}
                onChange={(e) => {
                  setSelectedOffre(e.target.value);
                }}
              >
                <option selected defaultValue={""}>
                  Selectioner une offre
                </option>
                {entities.map((elm) => (
                  <option value={elm._id}>{elm.title}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  dispatch(getParticipationByOffer(selectedOffre));
                }}
              >
                Afficher
              </button>
            </div>
          </div>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <CustomersFilter /> */}
        {customersUIProps.ids.length > 0 && <CustomersGrouping />}
        <CustomersTable />
      </CardBody>
    </Card>
  );
}
