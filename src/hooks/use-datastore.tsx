import { create } from 'zustand';

interface DataStore {
    items: string[]; 
    appendItems: (newItems: string[]) => void; 
}
const useDataStore = create<DataStore>((set) => ({
    items: [], 
    // Fetch JSON data and update items
    fetchItems: async () => {
        try {
            const response = await fetch('/data/resume.json'); // 
            const data = await response.json();
            set(() => ({ items: data }));
        } catch (error) {
            console.error('Failed to fetch items:', error);
        }
    },
    appendItems: async (newItems) =>  set(() => ({ items: [...newItems] }))
    
}));

export default useDataStore;