import React from "react";
import { usePhotoStore } from "../store/photoStore";
import { PhotoCard } from "../components/PhotoCard";
import { IPhotoInfo } from "../types/common";
import { LinkButton } from "../components/LinkButton";
import { Container } from "../UiLibrary/Container";
import { Typography } from "../UiLibrary/Typography";
const Collections: React.FC = () => {
  const { amount, photos } = usePhotoStore();

  return (
    <Container flexDirection="column" gap="0.5rem">
      <Container gap="1rem" width="100%" centerJustify>
        <LinkButton text="Collections" url="/collections" />
        <LinkButton text="Favourites" url="/favourites" />
      </Container>
      <Typography textAlign="right">{amount} collections</Typography>
      <Container
        gap="1rem"
        flexWrap="wrap"
        borderColor="#0000001f"
        borderStyle="solid"
        borderWidth="1px"
        padding="1rem"
        borderRadius="20px"
        width="1315px"
        centerAlign
        centerJustify
      >
        {photos
          ?.filter((photo) => photo.isFavourite)
          .map((photo: IPhotoInfo, index: number) => (
            <PhotoCard key={photo.id} index={index} {...photo} />
          ))}
      </Container>
    </Container>
  );
};

export default Collections;
