import React from "react";
import styled from "styled-components";

function Loading() {
  return <LoaddingStyle ></LoaddingStyle>;
}

const LoaddingStyle = styled.div`
.a-loading {
    width: 60px;
    height: 60px;
    margin: 64px auto 0;
    border-left: 4px solid #ea7aa0;
    border-radius: 50%;
    transform: translateZ(0);
    animation: loading 0.5s infinite linear;

   
}
@keyframes loading {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

`
export default Loading;