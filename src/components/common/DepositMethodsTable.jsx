import React from "react";

const DepositMethodsTable = ({
  heading,
  subtext,
  data,
  columns,
  columnKeys, // must match the structure of the data
  note, // Optional bottom note
  bgColor = "#f9fafb",
  textColor = "#111827",
}) => {
  return (
    <section
      className="w-full py-10 px-4 md:px-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-7xl mx-auto">
        {heading && (
          <h2 className="text-2xl md:text-4xl text-center font-bold mb-2">
            {heading}
          </h2>
        )}
        {subtext && (
          <p className="mb-6 text-center text-[20px] text-gray-600">
            {subtext}
          </p>
        )}

        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-3 text-left text-base font-semibold uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white text-base">
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  {columnKeys.map((key, colIndex) => (
                    <td key={colIndex} className="px-4 py-3">
                      {row[key] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {note && (
          <p className="mt-6 text-base text-gray-700 text-center max-w-4xl mx-auto">
            {note}
          </p>
        )}
      </div>
    </section>
  );
};

export default DepositMethodsTable;
