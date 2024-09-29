import React from "react";

interface IPrice {
  name: string;
  price: string;
}

interface ReportPricePros {
  listPrice: IPrice[];
}

export default function ReportPrice({ listPrice }: ReportPricePros) {
  return (
    <div>
      <table className="table-auto w-full text-lg">
        <thead className="font-semibold uppercase  bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap ">
              <div className="font-semibold text-left">Hạng mục sữa chữa</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Giá dịch vụ</div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white bg-[#f0f0f0]">
          {listPrice.map((item, index) => (
            <tr key={index}>
              <td className="p-2 whitespace-nowrap">
                <p className="font-medium text-green-500">{item.name}</p>
              </td>
              <td className="p-2 whitespace-nowrap">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
