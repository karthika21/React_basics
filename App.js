const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "Iam an H1 tag"),
    React.createElement("h2", { id: "h2" }, "Iam an H2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
