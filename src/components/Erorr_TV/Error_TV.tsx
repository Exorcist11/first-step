import Image from "next/image";
import React from "react";

interface IErorrTV {
  erorr_name: string;
  description: string;
  image: string;
}

interface ErorrPros {
  lst_erorr: IErorrTV[];
}

export default function Error_TV({ lst_erorr }: ErorrPros) {
  return (
    <div className="text-lg gap-4 flex flex-col text-justify">
      <ul>
        {lst_erorr.map((item, index) => (
          <li className="flex flex-col gap-4" key={index}>
            <strong className="text-xl">{item.erorr_name}</strong>
            <p>{item.description}</p>

            <div className="flex items-center justify-center">
              <Image
                src={`/images/sua-tv/${item.image}`}
                alt={item.image.split(".")[0]}
                width={600}
                height={300}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
