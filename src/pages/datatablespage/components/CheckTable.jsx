import React, { useState } from "react";
import Checkbox from "../../../components/checkbox";
import CardMenu from "../../../components/card/CardMenu";
import Card from "../../../components/card";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReactModal from "react-modal";

function CheckTable(props) {
  const { tableData } = props;
  const [data, setData] = useState(tableData);
  const [sorting, setSorting] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: ["", false],
    quantity: 0,
    date: "",
    progress: 0,
  });

  const addData = () => {
    setData((prevData) => [...prevData, formData]);
    setFormData({
      name: ["", false],
      quantity: 0,
      date: "",
      progress: 0,
    });
    setIsModalOpen(false);
  };

  const removeData = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "name") {
      setFormData((prevState) => ({
        ...prevState,
        name: [value, prevState.name[1]],
      }));
    } else {
      setFormData({ ...formData, [name]: type === "number" ? +value : value });
    }
  };

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => <p className="text-sm font-bold text-gray-400">NAME</p>,
      cell: (info) => (
        <div className="flex items-center">
          <Checkbox defaultChecked={info.getValue()[1]} me="10px" />
          <p className="ml-3 text-sm font-bold text-[#1B254B]">
            {info.getValue()[0]}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => <p className="text-sm font-bold text-gray-400">PROGRESS</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-[#1B254B]">{info.getValue()}%</p>
      ),
    }),
    columnHelper.accessor("quantity", {
      id: "quantity",
      header: () => <p className="text-sm font-bold text-gray-400">QUANTITY</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-[#1B254B]">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => <p className="text-sm font-bold text-gray-400">DATE</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-[#1B254B]">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("action", {
      id: "action",
      header: () => <p className="text-sm font-bold text-gray-400">ACTION</p>,
      cell: (info) => (
        <div
          onClick={() => removeData(info.row.index)}
          className="flex items-center w-fit gap-x-1 bg-gray-100 px-2 py-1 rounded-md text-sm font-bold hover:text-red-600 hover:cursor-pointer"
        >
          <RiDeleteBin6Line />
          <p>Delete</p>
        </div>
      ),
    }),
  ];

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
        <div className="text-xl font-bold text-[#1B254B]">Check Table</div>

        <div className="flex items-center gap-2">
          <div
            className="bg-gray-300 font-bold text-gray-700 p-2 rounded-md hover:cursor-pointer hover:text-[#422AFB]"
            onClick={() => setIsModalOpen(true)}
          >
            Add Data
          </div>
          <CardMenu />
        </div>
      </header>

      {/* Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            zIndex: 1000,
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            zIndex: 999,
          },
        }}
      >
        <h2 className="text-xl font-bold mb-4">Add New Data Check Table</h2>
        <form className="flex flex-col gap-y-2">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name[0]}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label>Date:</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
            <span className="text-xs text-red-600">
              *contoh format tanggal: 12.Mar.2001
            </span>
          </div>
          <div className="mt-4">
            <label>Progress:</label>
            <input
              type="number"
              name="progress"
              value={formData.progress}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
            <span className="text-xs text-red-600">
              *tidak perlu menambahkan %
            </span>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={addData}
              className="px-4 py-2 font-bold text-white bg-green-500 rounded-md"
            >
              Tambah
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 font-bold text-white bg-red-500 rounded-md ml-2"
            >
              Batal
            </button>
          </div>
        </form>
      </ReactModal>

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
              .rows.slice(0, 7)
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

export default CheckTable;
const columnHelper = createColumnHelper();
