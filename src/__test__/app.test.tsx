//@ts-ignore
import React from 'react'
import {render,screen} from '@testing-library/react'
import App from '@/App';




test('render app',()=>{
  render(<App/>);


  let label = screen.getByText(/testing jest/i);

  expect(label).toBeInTheDocument()
})