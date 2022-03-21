import React from "react";
import renderer from "react-test-renderer";
import Home from '../../../src/components/appPages/Home';

//required so tailwindcss + tailwind-rn play nice with test
jest.useFakeTimers();

describe (`describing Home.tsx component`, () => {

    it(`render Home.tsx test component`, () => {

        const view = renderer.create(<Home />);
        expect(view).toMatchSnapshot();

    });

});