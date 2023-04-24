import create from "zustand";
import DataSet from "../utils/dataset.json";
import { IPhotoInfo } from "../types/common";

interface State {
  amount: number;
  photos: IPhotoInfo[];
}

interface Action {
  updateStatus: (index: number) => void;
}

export const usePhotoStore = create<State & Action>((set) => {
  const photos = DataSet.map((data: Omit<IPhotoInfo, "isFavourite">) => ({
    ...data,
    isFavourite: false,
  }));
  return {
    updateStatus: (index: number) =>
      set(() => {
        const _photos = [...photos];
        _photos[index].isFavourite = !_photos[index].isFavourite;
        return { photos: _photos };
      }),
    amount: photos.length,
    photos,
  };
});
