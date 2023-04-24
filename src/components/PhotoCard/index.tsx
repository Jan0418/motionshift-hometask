import React from "react";
import { PhotoCardStyles as S } from "./styled";
import FavouriteOutlineIcon from "../../assets/images/favourite-outline.svg";
import FavouriteFillIcon from "../../assets/images/favourite-fill.svg";
import CameraIcon from "../../assets/images/camera.svg";
import { IPhotoInfo } from "../../types/common";
import { usePhotoStore } from "../../store/photoStore";

export const PhotoCard: React.FC<IPhotoInfo & { index: number }> = ({
  url,
  photographer,
  isFavourite,
  index,
}) => {
  const { updateStatus } = usePhotoStore();

  return (
    <S.Div>
      <S.Photo src={url} />
      <S.FavouriteIcon
        src={isFavourite ? FavouriteFillIcon : FavouriteOutlineIcon}
        onClick={() => updateStatus(index)}
      />
      <S.TitleDiv>
        <S.CameraIcon src={CameraIcon} />
        <S.Photographer>{photographer}</S.Photographer>
      </S.TitleDiv>
    </S.Div>
  );
};
