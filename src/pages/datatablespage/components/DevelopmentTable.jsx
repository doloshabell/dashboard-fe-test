import React, { useState } from "react";
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiWindows } from "react-icons/di";
import CardMenu from "../../../components/card/CardMenu";
import Card from "../../../components/card";
import Progress from "../../../components/progress";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

function DevelopmentTable(props) {
  const { tableData } = props;
  const [sorting, setSorting] = useState([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-400">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-[#1B254B]">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("tech", {
      id: "tech",
      header: () => (
        <p className="text-sm font-bold text-gray-400">TECH</p>
      ),
      cell: (info) => (
        <div className="flex items-center gap-2">
          {info.getValue().map((item, key) => {
            if (item === "apple") {
              return (
                <div
                  key={key}
                  className="text-[22px] text-gray-400"
                >
                  <DiApple />
                </div>
              );
            } else if (item === "android") {
              return (
                <div
                  key={key}
                  className="text-[21px] text-gray-400"
                >
                  <DiAndroid />
                </div>
              );
            } else if (item === "windows") {
              return (
                <div
                  key={key}
                  className="text-xl text-gray-400"
                >
                  <DiWindows />
                </div>
              );
            } else return null;
          })}
        </div>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-400">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-[#1B254B]">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => (
        <p className="text-sm font-bold text-gray-400">
          PROGRESS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#1B254B]">
            {info.getValue()}%
          </p>
          <Progress width="w-[68px]" value={info.getValue()} />
        </div>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={"w-full h-full px-6 mb-20"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-[#1B254B]">
          Development Table
        </div>

        <CardMenu />
      </header>

      <div className="mt-2 overflow-x-scroll custom-scrollbar-none">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default DevelopmentTable;
const columnHelper = createColumnHelper();
