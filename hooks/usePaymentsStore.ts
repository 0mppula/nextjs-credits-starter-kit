import { create } from 'zustand';

interface IUsePaymentsStore {
	selectedPlan: string;
	setSelectedPlan: (plan: string) => void;
	isCheckoutSessionLoading: boolean;
	setIsCheckoutSessionLoading: (isLoading: boolean) => void;
}

const usePaymentsStore = create<IUsePaymentsStore>((set) => ({
	selectedPlan: '',
	setSelectedPlan: (plan: string) => set({ selectedPlan: plan }),
	isCheckoutSessionLoading: false,
	setIsCheckoutSessionLoading: (isLoading: boolean) =>
		set({ isCheckoutSessionLoading: isLoading }),
}));

export default usePaymentsStore;
