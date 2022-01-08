import React from "react";

export function Matches(props) {
  const onClickChoose = () => {
    props.page("choose");
  };

  return (
    <div>
      teste Matches
      <button onClick={onClickChoose}>Choose</button>
    </div>
  );
}
