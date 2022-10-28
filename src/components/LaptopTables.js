import React from "react";

function LaptopTables({ tableName, headers, rows }) {
  
  return (
    <div className={tableName}>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            {headers.map((header, key) => (
              <th key={key} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, key) => {
            return <tr key={key}>{getColumns(row)}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

function getColumns(rows) {
  return rows.map((row, key) => (
    <td key={key} scope="col">
      {row}
    </td>
  ));
}

export default LaptopTables;
