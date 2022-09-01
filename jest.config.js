module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "jsdom",
  coverageThreshold: {
    // TODO: all global  configs should match 80% or above
    global: {
      branches: 50,
      functions: 70,
      lines: 70,
      statements: 0,
    },
  },
  coveragePathIgnorePatterns: ["/node_modules/"],
};
