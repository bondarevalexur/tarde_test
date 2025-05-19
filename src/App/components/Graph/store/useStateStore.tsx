import {create} from 'zustand'
import {IStateState} from "./interface.ts";

const useStateStore = create<IStateState>((set) => ({
    pixelsPerPoint: 10,
    updatePixels: (newValue) => set({pixelsPerPoint: newValue})
}))

export default useStateStore