export default function Table({
  className = "",
  headerItems = [],
  list = [],
  footer = null,
  px = 6,
  py = 4,
  headerFontWeight = "semibold",
  headerFontSize = "md",
  responsive = true,
  alternative_style = false,
}) {
  if (list.length <= 0) {
    return <div>Invalid Table</div>;
  }

  const colSpan = list[0].length || (list[0]?.length ?? 1);

  return (
    <div
      className={` ${
        alternative_style ? "admin-card" : "card-variant-3"
      } rounded-xl border overflow-auto ${className}`}
    >
      {/* Desktop Table */}
      <div className={`${responsive ? "hidden sm:block" : ""} overflow-y-auto`}>
        <table className="min-w-full table-auto text-left text-sm">
          {headerItems.length > 0 && (
            <thead className="text-base border-b-[2px] border-[#3C3D48]">
              <tr>
                {headerItems.map((item, i) => (
                  <th
                    key={`header-${i}`}
                    className={`px-${px} py-${
                      py + 1
                    } whitespace-nowrap font-${headerFontWeight} text-${headerFontSize}`}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody>
            {list.length > 0 ? (
              list.map((row, rowIndex) => (
                <tr
                  key={`row-${rowIndex}`}
                  className="even:bg-black/20 hover:bg-[#33333C] not-last:border-b border-[#26262B] transition-colors"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`cell-${rowIndex}-${cellIndex}`}
                      className={`px-${px} py-${py}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headerItems.length || 1}
                  className="text-center py-4 text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>

          {footer && (
            <tfoot>
              <tr>
                <td colSpan={colSpan} className="px-6 py-4">
                  {footer}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {/* Mobile Version */}
      <div
        className={`${
          responsive ? "block sm:hidden" : "hidden"
        }  space-y-4 p-2`}
      >
        {list.map((row, rowIndex) => (
          <div
            key={`mobile-row-${rowIndex}`}
            className=" rounded-lg p-4 border border-[#333] shadow"
          >
            {row.map((cell, cellIndex) => (
              <div
                key={`mobile-cell-${rowIndex}-${cellIndex}`}
                className="mb-2"
              >
                <div className="text-xs text-gray-400 font-medium mb-1">
                  {headerItems[cellIndex]}
                </div>
                <div className="text-base font-bold">{cell}</div>
              </div>
            ))}
          </div>
        ))}

        {list.length === 0 && (
          <div className="text-center text-gray-500">No data available</div>
        )}

        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}
