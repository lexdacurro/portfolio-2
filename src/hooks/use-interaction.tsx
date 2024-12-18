import { create } from 'zustand';

interface interactionStore {
  isClicked: boolean; 
  isSideBarOpen : boolean;
  redirectToMain: () => void; 
  openSideBar: () => void; 
  closeSideBar: () => void; 
}

const useInteractionStore = create<interactionStore>((set) => ({
  isClicked: false, 
  isSideBarOpen : false,
  redirectToMain: () => set({ isClicked: true }), 
  openSideBar : () => set({ isSideBarOpen: true }),
  closeSideBar : () => set({ isSideBarOpen: false }),
}));
export default useInteractionStore;