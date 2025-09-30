export const createStackNavigator = jest.fn().mockReturnValue({
  Navigator: ({ children }) => children,
  Screen: ({ children }) => children,
});
