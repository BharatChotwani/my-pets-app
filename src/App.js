import React from "react";
import "./App.css";

function App() {
  const dogs = [
    {
      name: "Milo",
      type: "Dog's image",
      description: "Milo is very cute and clever.",
      skills: ["Stay", "Drop It", "Watch Me"],
      pictures:
        "https://thumbs.dreamstime.com/b/golden-retriever-dog-sitting-white-24750790.jpg",
    },

    {
      name: "Ollie",
      type: "Dog's image",
      description: "Ollie is very angry and rude.",
      skills: ["Come", "Off", "Wait"],
      pictures:
        "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },

    {
      name: "Buddy",
      type: "Dog's image",
      description:
        "Buddy is like friendly dog and everyone feel safe around it.",
      skills: ["Watch Me", "Come", "Wait"],
      pictures:
        "https://images.unsplash.com/photo-1519120430-a7d2287c986a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className="App">
      <h1>My Pets</h1>

      {/* Container-start */}
      <ul className="Container">
        {dogs.map((dog, index) => {
          return (
            <li key={index}>
              <h2>{dog.name}</h2>
              <p>{dog.description}</p>
              <img
                src={dog.pictures}
                alt={dog.type}
                width="200px"
                height="200px"
              />

              <ul className="skills">
                {dog.skills.map((skill) => {
                  return (
                    <li key={skill}>
                      <p>{skill}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      {/* Container-end */}

      <p>
        Made by{" "}
        <a href="https://github.com/BharatChotwani" target="_blank">
          Me ❤️
        </a>
      </p>
    </div>
  );
}

export default App;
