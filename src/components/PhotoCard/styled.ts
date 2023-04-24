import styled from "styled-components";

export namespace PhotoCardStyles {
  export const Div = styled.div`
    position: relative;
  `;
  export const Photo = styled.img`
    width: 250px;
    height: 350px;
    object-fit: cover;
  `;

  export const FavouriteIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
    position: absolute;
    z-index: 99;
    right: 0.5rem;
    top: 0.5rem;
    cursor: pointer;
    transition: all 1s;
  `;

  export const CameraIcon = styled.img`
    width: 24px;
    height: 24px;
  `;

  export const TitleDiv = styled.div`
    display: flex;
    gap: 0.5rem;
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
  `;
  export const Photographer = styled.p`
    color: white;
    font-weight: bold;
    margin: 0;
  `;
}
