export interface LandingPageState {
  isLoading: boolean;
  message: string;
  error: string;
}

export interface LandingPageProps {
  isLoading: boolean;
  message: string;
  error: string;
  reduxRequest(): void;
};