import React from "react";
import { Button } from "./styled";
import { useNavigate, useNavigation } from "react-router-dom";

interface ILinkButtonProps {
  text: string;
  url: string;
}

export const LinkButton: React.FC<ILinkButtonProps> = ({ text, url }) => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(url)}>{text}</Button>;
};
