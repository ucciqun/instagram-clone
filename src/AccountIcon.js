import React, { useContext } from "react";
import "./AccountIcon.css";
import { User } from "./App";

function AccountIcon({ active, ...props }) {
  const [account, setAccount] = useContext(User);
  return (
    <div
      className="accountIcon"
      style={{
        backgroundImage:
          active &&
          "linear-gradient(-135deg, #515BD4,#8134AF,#DD2A7B,#FEDA77,#F58529)",
        backgroundColor: !active && "lightgray",
        width: props.style.width,
        height: props.style.height,
      }}
    >
      <img
        className="accountIcon__img"
        src={account.image}
        alt={account.name}
      />
    </div>
  );
}

export default AccountIcon;
{
}
