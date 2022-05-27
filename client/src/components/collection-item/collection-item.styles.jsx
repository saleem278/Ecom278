import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;
  border: 2px solid #f7f7f7;
  padding: 5px;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    mid-width: unset !important;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  margin-bottom: 7px;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 85%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 15%;
  text-align: right;
`;
