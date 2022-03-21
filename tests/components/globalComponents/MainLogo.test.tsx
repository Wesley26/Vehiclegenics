import React from "react";
import renderer from "react-test-renderer";
import { MainLogo } from '../../../src/components/globalComponents/indexGlobal';

//required so tailwindcss + tailwind-rn play nice with test
jest.useFakeTimers();

describe (`describing MainLogo.tsx component`, () => {

    it(`render MainLogo.tsx test component`, () => {

        const view = renderer.create(<MainLogo />);
        expect(view).toMatchSnapshot();

    });

});