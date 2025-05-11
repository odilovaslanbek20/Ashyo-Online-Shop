import { create } from 'zustand'

type StoreState = {
  isModal: boolean
  isOpen: boolean
  toggleModal: () => void
  isOpenModal: () => void
}

export const useStore = create<StoreState>((set) => ({
  isModal: false,
  isOpen: false,
  toggleModal: () => set((state) => ({ isModal: !state.isModal })), 
  isOpenModal: () => set((state) => ({ isOpen: !state.isOpen })), 
}))
