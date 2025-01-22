import clsx from "clsx";
import React from "react";

function InputBox({ userData, name, placeholder, title, errorMsg, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col md:gap-4 gap-2">
        <p className="font-bold md:text-[18px] text-[14px]">{title}</p>
        <input
          name={name}
          className={clsx(
            "md:w-[640px] md:h-p[56px] rounded-xl px-6 py-4 bg-[#F3F4F6] w-[343px] h-14 focus:outline-blue",
            { "outline outline-1 outline-red ": errorMsg !== "" }
          )}
          placeholder={placeholder}
          value={userData}
          type={
            name === "password" || name === "passwordConfirmation"
              ? "password"
              : "text"
          }
          {...props}
        />
      </div>
      {errorMsg && <div className="text-red pl-4">{errorMsg}</div>}
    </div>
  );
}

export default InputBox;
