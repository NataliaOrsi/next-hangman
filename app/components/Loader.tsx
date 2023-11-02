import React from 'react'
import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Hearts
        height={50}
        width={200}
        color="#00BFFF"
        ariaLabel="hearts-loading"
        wrapperClass="justify-center"
        visible={true}
      />
      <p className="text-lg text-center px-2">Selecting the word...</p>
    </div>
  );
}

export default Loader
