import React from "react";
import "./Story.css";

function Story() {
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
      name: "strawberry",
      active: false,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.aHp76N635ENUcRETA5bilAHaFj?pid=Api&rs=1",
      name: "strawberry",
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
        {stories.map((e) => (
          <div className="story__item">
            <div
              style={{
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
