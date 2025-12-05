import "./categories.styles.scss";
import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "/images/hats.jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "/images/jackets.jpg",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "/images/sneakers.jpg",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "/images/womens.jpg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "/images/mens.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
