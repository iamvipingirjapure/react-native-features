module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@react-navigation|react-native|@react-native|react-clone-referenced-element|immer|react-redux)/)",
  ],
  moduleNameMapper: {
    "^@react-navigation/native$": "<rootDir>/__mocks__/@react-navigation/native.js",
    "^@react-navigation/stack$": "<rootDir>/__mocks__/@react-navigation/stack.js",
     "\\.(ttf|otf|woff|woff2)$": "<rootDir>/__mocks__/fileMock.js",
    "^react-native-vector-icons/(.*)$": "<rootDir>/__mocks__/reactNativeVectorIconsMock.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
};
