
import '../src/index.css'
import type { Preview } from "@storybook/react";
import '@storybook/testing-library';

export const preview = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


export default preview;
