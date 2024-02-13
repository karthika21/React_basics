Learning React

# Parcel
- Dev build
- Local server
- HMR - Hot Module Replacement
- File Matching Algorithm - written in c++
- Caching - Faster build
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking - remove unused code
- Different dev and prod bundle

# Food delivery app
- Header
    - Logo
    - Nav Items
- Body
    - Search
    - Restaurant container
    - Restaurant card
- Img
- Name of the restaurant,ratings,cuisines, delivery time
- Footer
    - Copyright
    - Links
    - Address
    - Contact


# React Hooks
(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()


# 2 types of export

- Default Import/Export

export default Component;
import Component from /** Path **/

- Named export / Import

export const Component;
import Component from /** Path **/

# 2 Types of routing in web apps
- Client side routing
- Server side routing

# Redux Toolkit
- Installation
    - Install Redux toolkit @reduxjs/toolkit
    - Install react-redux
- Build our store
- Connect our store to application
- Create cart slice
- Dispatch action
- Read the data using Selector

# Types of testing ( developer)
- Unit testing
- Integration testing
- End to end testing - e2e testing


# Setting up testing in app
- Install react Testing library
- Install Jest
- Installed babel dependencies for Jest
- Configure babel.config.js file
- Configure .parcelrc file to disable default babel transpilation which may conflict with the babel config of jest
- Jest Configuration Jest - "npx jest --init"
- Install JSDom Library "npm install --save-dev jest-environment-jsdom"
- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom


