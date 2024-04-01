declare global {
  interface Window {
    ethereum: any;
  }
}

export interface NavItem {
  page: string;
  logo: React.ReactElement;
  isActive: boolean;
}
export interface Dimensions {
  width: number;
  height: number;
}
export interface AppContextType {
  dimensions: Dimensions;
}
export interface AppContextProviderProps {
  children: React.ReactNode;
}
export interface Currency {
  code: string;
  description: string;
  rate: string;
  rate_float: number;
}
