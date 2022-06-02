import { ListImage } from "apis/api";
import { CardPokemon } from "components/CardPokemon/Card";
import { WrapperListCard } from "components/CardPokemon/styled";

import { useInfiniteScroll } from "hooks";
import React, { useEffect, useState } from "react";

function Landing() {
  const [items, setItems] = useState(
    Array.from(Array(60).keys(), (n) => n + 1)
  );
  const [back, setBack] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setBack(!back);
    }, 3000);
  }, [back]);

  const fetchMoreListItems = () => {
    setTimeout(() => {
      setItems((prevState) => [
        ...prevState,
        ...Array.from(Array(10).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000);
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <WrapperListCard>
        {items.map((val) => {
          return (
            <CardPokemon
              isLoading={loading}
              urlSticker={ListImage.API_IMAGE_SVG(val)}
              urlIconMini={ListImage.API_IMAGE_GIF(val, back)}
              no={val}
              key={val}
            ></CardPokemon>
          );
        })}
      </WrapperListCard>
      {isFetching && "Fetching more list items..."}
    </>
  );
}

export default Landing;
