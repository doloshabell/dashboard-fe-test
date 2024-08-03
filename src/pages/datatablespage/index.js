import React from "react";

import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./data/columnsDataTable";
import dataCheck from "./data/dataCheck.json";
import dataColumns from "./data/dataColumns.json";
import dataComplex from "./data/dataComplex.json";
import dataDevelopment from "./data/dataDevelopment.json";
import CheckTable from "./components/CheckTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import DevelopmentTable from "./components/DevelopmentTable";

function DataTablesPage() {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={dataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={dataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={dataColumns}
        />

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={dataComplex}
        />
      </div>
    </div>
  );
}

export default DataTablesPage;
