import { create } from 'zustand'

type StoreState = {
	isModal: boolean,
	toggleModal: () => void,
}

export const useStore = create<StoreState>((set) => ({
  isModal: false,
  toggleModal: () => set((state) => ({ isModal: !state.isModal }))
}))
