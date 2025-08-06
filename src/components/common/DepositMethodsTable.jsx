import React from "react";

const DepositMethodsTable = ({
  heading,
  subtext,
  data,
  columns = ["Method", "Processing Time", "Fees", "Minimum Deposit"],
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
          <h2 className="text-2xl md:text-4xl font-bold mb-2">{heading}</h2>
        )}
        {subtext && <p className="mb-6 text-[24px] text-gray-600">{subtext}</p>}

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
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {columns.map((col, idx) => {
                    const key =
                      col === "Method" || col === "Action"
                        ? "method"
                        : col === "Processing Time" || col === "Speed"
                        ? "time"
                        : col === "Fees"
                        ? "fees"
                        : col === "Minimum Deposit"
                        ? "minDeposit"
                        : "";
                    return (
                      <td key={idx} className="px-4 py-3">
                        {item[key] || "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {columns.length > 3 && (
          <p className="mt-6 text-base text-gray-700">
            Remember that <strong>RightTrade Capital never charges you</strong>{" "}
            to make a deposit. However, your payment processor might charge for
            currency conversion or processing.
          </p>
        )}
      </div>
    </section>
  );
};

export default DepositMethodsTable;
