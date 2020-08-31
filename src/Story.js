import React, { useContext } from "react";
import "./Story.css";
import { User } from "./App";

function Story() {
  const [account, setAccount] = useContext(User);
  const stories = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1235077513207902215/V1RtvlkE_400x400.jpg",
      name: "testaccount",
      active: true,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.aHp76N635ENUcRETA5bilAHaFj?pid=Api&rs=1",
      name: "strawberry",
      active: false,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.aHp76N635ENUcRETA5bilAHaFj?pid=Api&rs=1",
      name: "strawberry",
      active: false,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.aHp76N635ENUcRETA5bilAHaFj?pid=Api&rs=1",
      name: "strawberry",
      active: false,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.aHp76N635ENUcRETA5bilAHaFj?pid=Api&rs=1",
      name: "strawberrrrrrrrrrrrrry",
      active: false,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.aHp76N635ENUcRETA5bilAHaFj?pid=Api&rs=1",
      name: "s",
      active: true,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.aHp76N635ENUcRETA5bilAHaFj?pid=Api&rs=1",
      name: "strawberry",
      active: false,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.aHp76N635ENUcRETA5bilAHaFj?pid=Api&rs=1",
      name: "strawberry",
      active: false,
    },
  ];
  return (
    <div className="story">
      <div className="story__container">
        {stories.concat(account).map((e) => (
          <div className="story__item" key={e.image}>
            <div
              style={{
                margin: "0 auto",
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundImage:
                  e.active &&
                  "linear-gradient(-135deg, #515BD4,#8134AF,#DD2A7B,#FEDA77,#F58529)",
                backgroundColor: !e.active && "lightgray",
              }}
            >
              <img
                className="story__image"
                src={e.image}
                alt={e.name}
                style={{ backgroundColor: "white" }}
              />
            </div>

            <p
              className="story__name"
              style={{ color: e.active ? "black" : "gray" }}
            >
              {e.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
