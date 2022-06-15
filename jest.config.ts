export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.unit-test.ts", "**/**/*.e2e-test.ts"],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};
