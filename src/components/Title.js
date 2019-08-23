import React from "react";
import styled from "styled-components";

export default function Title({ title, center }) {
  return (
    <TittleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="text-underline" />
      </div>
    </TittleWrapper>
  );
}

const TittleWrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};
  .text-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${props => (props.center ? "0 auto" : "0")};
  }
`;
