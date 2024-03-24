
import Directory from "../../../components/directory/directory.component";
/**
 * Renders a `Directory` component with a list of categories as a prop.
 * @returns {JSX.Element} The rendered `Directory` component.
 */
const Home = () => {
  /**
   * An array of category objects, each containing an `id`, `title`, and `imageUrl`.
   * @type {Array<Object>}
   */
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />;
    </div>
  );
};

export default Home;
