import { Card, CardActionArea, Grid } from "@mui/material";
import { styled } from "@mui/system";

const WrapperCardPokemon = styled(Card)`
  box-shadow: 2px 2px 5px 1px rgb(50 50 50 / 50%);
  background: #f5f1f1d9;
  margin: 10px;
  min-width: 300px;
  position: relative;
  & > button {
    height: 250px;
    &::before {
      content: "";
      z-index: 5;
      position: absolute;
      top: 84px;
      left: 50%;
      border-radius: 50%;
      width: 65px;
      height: 65px;
      background: white;
      border: 9px solid #9595952e;
    }
    &::after {
      content: "";
      z-index: 5;
      position: absolute;
      top: 95px;
      left: 50%;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      background: white;
      border: 9px solid #9595952e;
    }
  }
`;
const ActionArea = styled(CardActionArea)``;
const PokemonAnimated = styled("img")`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const MainPokemon = styled("img")`
  position: absolute;
  width: 150px;
  bottom: 10px;
  left: 10px;
  height: 150px;
  cursor: pointer;
`;
const PokemonNO = styled("div")`
  position: absolute;
  left: 10px;
  top: 10px;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  border: 4px solid #e30e0ea6;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #000;
  font-size: 17px;
`;

const WrapperListCard = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  background: linear-gradient(
    45deg,
    rgba(140, 0, 255, 0.6) 0%,
    rgba(2, 242, 114, 0.7) 50%,
    rgba(140, 0, 255, 0.5)
  );
`;
export {
  WrapperCardPokemon,
  ActionArea,
  PokemonAnimated,
  WrapperListCard,
  PokemonNO,
  MainPokemon,
};
