export const NavigationContainer = ({ children }) => children;

export const useNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
});

export const useRoute = () => ({
  params: {},
});

export const createNavigationContainerRef = jest.fn();
