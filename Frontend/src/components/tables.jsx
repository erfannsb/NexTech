export default function Table({
  className = "",
  headerItems = [],
  list = [],
  footer = null,
  px = 6,
  py = 4,
}) {
  if (list.length <= 0) {
    return <div>Invalid Table</div>;
  }

  const colSpan = list[0].length || (list[0]?.length ?? 1);
  return (
    <div
      className={`card-variant-3 overflow-x-auto rounded-xl shadow-lg border ${className}`}
    >
      <table className="min-w-full table-auto text-left text-sm">
        {/* Header */}
        {headerItems.length > 0 && (
          <thead className="text-base font-semibold border-b-[2px] border-[#3C3D48]">
            <tr>
              {headerItems.map((item, i) => (
                <th
                  key={`header-${i}`}
                  className={`px-${px} py-${py} whitespace-nowrap`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
        )}

        {/* Body */}
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

        {/* Footer */}
        {footer && (
          <tfoot>
            <tr className="">
              <td colSpan={colSpan} className="px-6 py-4">
                {footer}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
