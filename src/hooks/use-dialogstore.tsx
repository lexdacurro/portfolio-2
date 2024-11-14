import { create } from 'zustand';

interface DialogStore {
  isOpen: boolean; 
  openDialog: () => void; 
  closeDialog: () => void; 
}

const useDialogStore = create<DialogStore>((set) => ({
  isOpen: false, 
  openDialog: () => set({ isOpen: true }), 
  closeDialog: () => set({ isOpen: false }), 
}));
export default useDialogStore;