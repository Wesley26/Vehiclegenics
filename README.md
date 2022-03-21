![Vehiclegenics React Native App Icon](https://github.com/Wesley26/Vehiclegenics/blob/main/assets/icon.png)
# Vehiclegenics React Native App

This TypeScript React Native App uses the following dependencies: [React Native Docs](https://reactnative.dev/), [Expo](https://docs.expo.dev/index.html), [Expo Google Fonts](https://github.com/expo/google-fonts), [tailwindcss](https://tailwindcss.com/), and [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn#readme).

Unit testing with Jest: [Jest and Jest-expo](https://docs.expo.dev/guides/testing-with-jest/), [react-test-renderer + types](https://jestjs.io/docs/snapshot-testing),  and [jest-transform-stub](https://github.com/eddyerburgh/jest-transform-stub). Note: Inside "Jest" under package.json, ensure moduleNameMapper includes every image extension used in the app. Ensure moduleFileExtensions is required to include .ts and .tsx file extensions. They are prioritized to render first in Jest tests.


## Main App Functions

- Open iOS simulator with: `open -a Simulator.app`.
- Run tailwind-rn in development mode: `yarn dev:tailwind` (enables JIT tailwind runtime).
- Build tailwind styles with: `build:tailwind`.
- Run tests with `yarn test` to run "jest --updateSnapshot" command. Used for snapshot rendering tests.


## Goals:

NOTE: All these goals are **SUBJECT TO CHANGE**
- Simple car app idea implementing (or planning to implement) [CarsXE API](https://api.carsxe.com/). Selection of API is still not finalized and may be subject to change.
- Potentially search vehicles by VIN ID.
- Continue exploring what the API is capable of, add features as we go along.
- Include React Navigation to render more than one page.
- Use Axios to fetch data from API.