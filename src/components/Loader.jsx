import React from "react";
import { Spinner } from "@chakra-ui/react";
function Loader() {
  return (
    <div
      style={{
        position:'absolute',
        top:'50%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:'#DCAC54',
        background: 'transparent',
      }}
    >
      <Spinner size="xl" thickness="4px" />
    </div>
  );
}

export default Loader;
