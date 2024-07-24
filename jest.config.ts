import { Config } from "@jest/types";

const config:Config.InitialOptions = {
  testEnvironment:'jsdom',
  setupFilesAfterEnv:['<rootDir>/setup.ts'],
  moduleNameMapper:{
    '\\.(css|scss)$':'identity-obj-proxy',
    '\\.(jpg|jpeg|webp|svg|png)$': '<rootDir>/src/__test__/file/configuration.js',
  }
}


export default config