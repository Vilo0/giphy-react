import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState({ loading: false, results: []});

  useEffect(() => {
    setGifs(actualGifs => ({ loading: true, results: actualGifs.results}));
    getGifs({ keyword }).then((gifs) => {
      setGifs({ loading: false, results: gifs});
    });
  }, [keyword]);

  if(gifs.resultsloading) return <i>Cargando...</i>

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif
          key={id}
          //{...singleGif}
          title={title}
          id={id}
          url={url}
        />
      ))}
    </div>
  );
}
