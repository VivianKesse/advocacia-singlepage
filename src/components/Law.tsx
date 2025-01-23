import React from "react";

interface LawProps {
  title: string,
  text: string,
  img: string;
}
export default function Law(props: LawProps) {
  return (
    <>
      <div className="flex gap-2 justify-start items-center flex-col text-mainWhite ">
        <div>
          <img className="" src={props.img} alt="ícone ilustrativo" />
        </div>

        <div className="text-center">
          <h3 className="text-base font-medium md:text-lg">{props.title}</h3>
          <p className="text-sm md:text-base">{props.text}</p>
        </div>
      </div>
    </>
  )
}