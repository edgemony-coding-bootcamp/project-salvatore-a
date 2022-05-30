import { useEffect } from "react";
import { Film } from "./Film";
import styles from "./Slider.module.scss";

const mock = [{
  id: 0,
  title: "film 1",
  description: "lorem ipsum",
  image: "",
},
{
  id: 1,
  title: "film 2",
  description: "lorem ipsum",
  image: "",
},
{
  id: 2,
  title: "film 3",
  description: "lorem ipsum",
  image: "",
},
];

export default function Slider() {
  const [films, setFilms] = useState(mock);

  const getData = async () => {
    const response = await fetch(`https://edgemony-backend.herokuapp.com/series/`);
    const data = await response.json();
    setFilms(data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.Slider}>
      <h1>I più visti</h1>
      <ul className="CardList__wrapper">
        {films.map((item) => (
          <li key={item.id}>
            <Film name={item.title} description={item.description} image={item.poster} />
          </li>
        ))}
      </ul>
    </div>
  );
}
