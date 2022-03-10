import React from "react";
import renderer from "react-test-renderer";
import App from '../App';

//required so tailwindcss + tailwind-rn play nice with test
jest.useFakeTimers();

describe (`describing App.tsx component`, () => {

    it(`render App.tsx test component`, () => {

        const view = renderer.create(<App />);
        expect(view).toMatchSnapshot();

    });

});