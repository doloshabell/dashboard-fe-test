import React from "react";

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
        <DevelopmentTable tableData={dataDevelopment} />
        <CheckTable tableData={dataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={dataColumns} />
        <ComplexTable tableData={dataComplex} />
      </div>
    </div>
  );
}

export default DataTablesPage;
