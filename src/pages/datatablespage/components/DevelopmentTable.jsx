import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { RiDeleteBin6Line } from "react-icons/ri";
// import Modal from 'react-modal';

import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiWindows } from "react-icons/di";
import CardMenu from "../../../components/card/CardMenu";
import Card from "../../../components/card";
import Progress from "../../../components/progress";
import ReactModal from "react-modal";

function DevelopmentTable(props) {
  const { tableData } = props;
  const [data, setData] = useState(tableData);
  const [sorting, setSorting] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    tech: [],
    date: "",
    progress: 0,
  });

  const addData = () => {
    setData((prevData) => [...prevData, formData]);
    setFormData({
      name: "",
      tech: [],
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
    const { name, value, checked } = e.target;
    if (name === "tech") {
      if (checked) {
        setFormData((prevState) => ({
          ...prevState,
          tech: [...prevState.tech, value],
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          tech: prevState.tech.filter((tech) => tech !== value),
        }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => <p className="text-sm font-bold text-gray-400">NAME</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-[#1B254B]">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("tech", {
      id: "tech",
      header: () => <p className="text-sm font-bold text-gray-400">TECH</p>,
      cell: (info) => (
        <div className="flex items-center gap-2">
          {info.getValue().map((item, key) => {
            if (item === "apple") {
              return (
                <div key={key} className="text-[22px] text-gray-400">
                  <DiApple />
                </div>
              );
            } else if (item === "android") {
              return (
                <div key={key} className="text-[21px] text-gray-400">
                  <DiAndroid />
                </div>
              );
            } else if (item === "windows") {
              return (
                <div key={key} className="text-xl text-gray-400">
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
      header: () => <p className="text-sm font-bold text-gray-400">DATE</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-[#1B254B]">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => <p className="text-sm font-bold text-gray-400">PROGRESS</p>,
      cell: (info) => (
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#1B254B]">{info.getValue()}%</p>
          <Progress width="w-[68px]" value={info.getValue()} />
        </div>
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
        <div className="text-xl font-bold text-[#1B254B]">
          Development Table
        </div>

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
        <h2 className="text-xl font-bold mb-4">
          Add New Data Development Table
        </h2>
        <form className="flex flex-col gap-y-2">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label>Tech:</label>
            <div>
              <input
                className="mr-1"
                type="checkbox"
                name="tech"
                value="apple"
                onChange={handleChange}
                checked={formData.tech.includes("apple")}
              />
              <label>Apple</label>
            </div>
            <div>
              <input
                className="mr-1"
                type="checkbox"
                name="tech"
                value="android"
                onChange={handleChange}
                checked={formData.tech.includes("android")}
              />
              <label>Android</label>
            </div>
            <div>
              <input
                className="mr-1"
                type="checkbox"
                name="tech"
                value="windows"
                onChange={handleChange}
                checked={formData.tech.includes("windows")}
              />
              <label>Windows</label>
            </div>
          </div>
          <div>
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
          <div>
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
            {table.getRowModel().rows.map((row) => {
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
