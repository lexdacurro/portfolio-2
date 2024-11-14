import { create } from 'zustand';

interface DataStore {
    items: string[]; 
    appendItems: (newItems: string[]) => void; 
}

const useDataStore = create<DataStore>((set) => ({
    items: [], 
    appendItems: (newItems) =>  set((state) => ({ items: [...newItems] }))
    
}));

export default useDataStore;