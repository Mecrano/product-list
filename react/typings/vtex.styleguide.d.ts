declare module 'vtex.styleguide' {
  import { ComponentType } from 'react'

  interface InputProps {
    [key: string]: any
  }

  export const Button: ComponentType<any>
  export const Dropdown: ComponentType<any>
  export const Input: ComponentType<InputProps>
  export const Link: ComponentType<any>
  export const Spinner: ComponentType<any>
  export const IconDelete: ComponentType<any>
  export const NumericStepper: ComponentType<any>
}

declare module '@vtex/styleguide/lib/*' {
  const Component: ComponentType<any>
  export default Component
}
