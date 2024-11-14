import { create } from 'zustand';

interface interactionStore {
  isClicked: boolean; 
  redirectToMain: () => void; 
}

const useInteractionStore = create<interactionStore>((set) => ({
  isClicked: false, 
  redirectToMain: () => set({ isClicked: true }), 
}));
export default useInteractionStore;