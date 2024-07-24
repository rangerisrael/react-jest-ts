yarn add -D jest @types/jest ts-node @babel/preset-env @babel/preset-react @babel/preset-typescript jest-environment-jsdom identity-obj-proxy @testing-library/react @testing-library/jest-dom @testing-library/dom


touch jest.config.ts setup.ts babel.config.cjs


//configure babel.cjs

module.exports = {
  presets:[
    ['@babel/preset-env',{
      targets:{
        node:'current'
      }
    }],
    '@babel/preset/react',
    '@babel/preset-typescript'
  ]
}


//confire setup.ts

import '@testing-library/jest-dom'



add jest.config.ts


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


export default config


//setup for file mocking
module.exports={
  _esModule:true,
  default:''
}


//add types for jest in tsconfog.app.json

"types": ["jest","@testing-library/jest-dom"],



//add to script package json

"test":"jest"