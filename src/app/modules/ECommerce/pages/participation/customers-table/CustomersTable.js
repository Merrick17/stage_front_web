// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/customers/customersActions";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from "../../../../../../_metronic/_helpers";
import * as uiHelpers from "../CustomersUIHelpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useCustomersUIContext } from "../CustomersUIContext";
import { getparticipationApi } from "../../../../../redux_main/actions/participation.actions";
import { BASE_URL } from "../../../../../utils/apiHelpers";

export function CustomersTable() {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams,
      setQueryParams: customersUIContext.setQueryParams,
      openEditCustomerDialog: customersUIContext.openEditCustomerDialog,
      openDeleteCustomerDialog: customersUIContext.openDeleteCustomerDialog,
    };
  }, [customersUIContext]);
  const displayStatus = (status) => {
    switch (status) {
      case "EN_COURS":
        return "En cours";
      case "CONFIRMED":
        return "Confirmer";
      case "REFUSED":
        return "Refuser";
      default:
        return "En Cours";
    }
  };
  // Getting curret state of customers list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.participation }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;

  // Customers Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    customersUIProps.setIds([]);
    // server call by queryParams
    dispatch(getparticipationApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "_id",
      text: "ID",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "title",
      text: "Titre",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
      formatter: (text, row) => {
        console.log("Row", row);
        return <span>{row && row.offre && row.offre.title}</span>;
      },
    },
    {
      dataField: "description",
      text: "description",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
      formatter: (text, row) => {
        console.log("Row", row);
        return <span>{row && row.offre && row.offre.description}</span>;
      },
    },
    {
      dataField: "createdAt",
      text: "Utilisateut",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
      formatter: (text, row) => {
        console.log("Row", row);
        return (
          <span>
            {row &&
              row.sendedBy &&
              `${row.sendedBy.firstName} ${row.sendedBy.lastName}`}
          </span>
        );
      },
    },
    {
      dataField: "resume",
      text: "CV",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
      formatter: (text, row) => {
        console.log("Row", row);
        return (
          <a
            href={`${BASE_URL}/${row.resume}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Afficher
          </a>
        );
      },
    },
    {
      dataField: "confirmed",
      text: "Etat",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
      formatter: (text, row) => {
        console.log("Row", row);
        return <span>{displayStatus(row.confirmed)}</span>;
        // return (
        //   <a
        //     href={`${BASE_URL}/${row.resume}`}
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     Afficher
        //   </a>
        // );
      },
    },

    // {
    //   dataField: "action",
    //   text: "Actions",
    //   formatter: columnFormatters.ActionsColumnFormatter,
    //   formatExtraData: {
    //     openEditCustomerDialog: customersUIProps.openEditCustomerDialog,
    //     openDeleteCustomerDialog: customersUIProps.openDeleteCustomerDialog,
    //   },
    //   classes: "text-right pr-0",
    //   headerClasses: "text-right pr-3",
    //   style: {
    //     minWidth: "100px",
    //   },
    // },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: customersUIProps.queryParams.pageSize,
    page: customersUIProps.queryParams.pageNumber,
  };
  return (
    <>
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <BootstrapTable
              wrapperClasses="table-responsive"
              bordered={false}
              classes="table table-head-custom table-vertical-center overflow-hidden"
              bootstrap4
              remote
              keyField="id"
              data={entities === null ? [] : entities}
              columns={columns}
              defaultSorted={uiHelpers.defaultSorted}
              onTableChange={getHandlerTableChange(
                customersUIProps.setQueryParams
              )}
              selectRow={getSelectRow({
                entities,
                ids: customersUIProps.ids,
                setIds: customersUIProps.setIds,
              })}
              {...paginationTableProps}
            >
              <PleaseWaitMessage entities={entities} />
              <NoRecordsFoundMessage entities={entities} />
            </BootstrapTable>
          );
        }}
      </PaginationProvider>
    </>
  );
}
