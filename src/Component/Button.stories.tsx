// src/components/Button.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    primary: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Secondary Button',
};

export const Clickable = Template.bind({});
Clickable.args = {
  primary: true,
  label: 'Clickable Button',
  onClick: () => alert('Button clicked!'),
};