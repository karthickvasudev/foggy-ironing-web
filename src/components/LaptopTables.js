import React from "react";
import ActionGear from "./ActionGear";

function LaptopTables(props) {
  const { tableName, headerColumns, rows, actionGear } = props;
  return (
    <div className={tableName}>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            {headerColumns.map((header, key) => (
              <th key={key} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {getRows(rows)}
            <td>{ActionGear(actionGear)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function getRows(rows) {
  return rows.map((row, key) => (
    <th key={key} scope="row">
      {row}
    </th>
  ));
}

export default LaptopTables;
