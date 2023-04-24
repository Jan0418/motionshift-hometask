export interface IPhotoInfo {
  id: number;
  url: string;
  avg_color: string;
  photographer: string;
  isFavourite: boolean;
}

export interface IContainer {
  centerAlign?: boolean;
  centerJustify?: boolean;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  flexWrap?: string;
  gap?: string;
  padding?: string;
  borderRadius?: string;
  flexDirection?: string;
  width?: string;
}

export interface ITypography {
  textAlign?: string;
}
