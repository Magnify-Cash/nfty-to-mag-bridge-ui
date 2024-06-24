import create from "zustand";

interface StepState {
  activeStep: number | null;
  setActiveStep: (step: number) => void;
}

export const useStore = create<StepState>((set) => ({
  activeStep: 1,
  setActiveStep: (step) => set({ activeStep: step }),
}));
