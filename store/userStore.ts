import { create } from "zustand";

type UserState = {
    isOnboarded: boolean;
    toggleHasOnboarded: () => void
}

export const useUserStore = create<UserState>((set) => ({
    isOnboarded: false,
    toggleHasOnboarded: () => {
        set((state) => {
            return {  
                ...state,
                 isOnboarded: !state.isOnboarded
            }
        })
    }
}))