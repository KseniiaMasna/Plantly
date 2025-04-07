import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware"

type UserState = {
    isOnboarded: boolean;
    toggleHasOnboarded: () => void
}

export const useUserStore = create(
    persist<UserState>((set) => ({
    isOnboarded: false,
    toggleHasOnboarded: () => {
        set((state) => {
            return {  
                ...state,
                 isOnboarded: !state.isOnboarded
            }
        })
    }
}), {
    name: "plantly-user-store",
    storage: createJSONStorage(() => AsyncStorage)
}))