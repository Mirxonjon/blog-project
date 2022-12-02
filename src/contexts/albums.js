import { createContext, useEffect, useState } from "react"
import { types } from "../consts";
import getRndInteger from "../utils";

export const AlbumsContext = createContext();

const AlbumsProvider = (props) => {

  const [albums, setAlbums] = useState(); 
  const [type, setType] = useState(null);
  const [filteredAlbums, setFilteredAlbums] = useState();
  const [activePage, setActivePage] =useState(1);
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    .then(data => {
      const albumsArray = data.map(album => {
        return {
          ...album, 
          likes: getRndInteger(1, 1000),
          shares: getRndInteger(1, 200),
          img: "https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png",
          body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa officia assumenda repellendus eligendi voluptates vel amet, exercitationem maxime veniam ut temporibus qui dolores dolore sunt reiciendis rem? Nesciunt ducimus laboriosam ut officia perspiciatis, quisquam sint in, hic voluptatum ipsam exercitationem eveniet, debitis numquam suscipit magni atque? Veniam commodi veritatis sed facilis iusto. Voluptatum, eligendi! Exercitationem veniam culpa accusantium temporibus. Magni, accusantium. Consequuntur numquam iure voluptatum quaerat debitis sunt cupiditate alias voluptas ab ducimus facere corrupti voluptatibus repellat blanditiis qui atque eveniet aut in quidem laborum, minus perferendis est. Debitis veniam facilis distinctio possimus autem et magnam. Et nulla ab possimus deserunt exercitationem, neque veniam nihil tenetur earum, totam impedit quisquam commodi ipsa. Sunt quod aperiam aliquid voluptas beatae dolor quibusdam totam iste nulla cumque? Explicabo architecto optio ipsum consequuntur placeat saepe eligendi dicta, totam libero odit hic, nobis adipisci culpa molestias vitae nulla officia accusamus natus perspiciatis at harum commodi atque reprehenderit sequi. Deserunt, deleniti repellendus aliquid quam accusantium fugiat praesentium minus. Veniam ratione consequuntur id vitae. Porro fugit veniam eaque incidunt vel, qui, doloribus ullam dicta enim quam eveniet voluptatum odit dignissimos adipisci vero nostrum facilis, sed ipsa quos animi magni alias! Dicta sit quasi porro eos, dolore amet.",
          date: `${getRndInteger(2001, 2022)}.${getRndInteger(1, 12)}.${getRndInteger(1, 28)}`,
          type: types[getRndInteger(0, 4)],
          duration: getRndInteger(1, 5)
        }
      });
      setAlbums(albumsArray)
      setFilteredAlbums(albumsArray)
    })
  }, [])

  

  return <AlbumsContext.Provider value={{albums, setAlbums, type, setType, filteredAlbums, setFilteredAlbums, activePage, setActivePage}} {...props} />
}

export default AlbumsProvider;