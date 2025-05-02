export type LoadingScreenProps = {
  onLoaded: () => void;
};

export type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};
