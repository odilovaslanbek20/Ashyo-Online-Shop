import { create } from 'zustand'

type StoreState = {
  isModal: boolean
  isOpen: boolean
  brand_id: string
  toggleModal: () => void
  isOpenModal: () => void
}

export const useStore = create<StoreState>((set) => ({
  isModal: false,
  isOpen: false,
  brand_id: "",
  toggleModal: () => set((state) => ({ isModal: !state.isModal })), 
  isOpenModal: () => set((state) => ({ isOpen: !state.isOpen })), 
}));

