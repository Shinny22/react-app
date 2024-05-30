import { Meta, StoryObj } from '@storybook/react';
import Form from '../Component/Form';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Form> = {
  title: 'Example/Form',
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    onSubmit: (email, password) => {
      alert(`Email: ${email}, Password: ${password}`);
    },
  },
};

export const WithPreFilledData: Story = {
  args: {
    onSubmit: (email, password) => {
      alert(`Email: ${email}, Password: ${password}`);
    },
    initialEmail: 'user@example.com',
    initialPassword: 'password123',
  },
};


export const Play: Story = {
    args: {
      initialEmail: '',
      initialPassword: '',
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const emailInput = await canvas.getByLabelText('Email');
      const passwordInput = await canvas.getByLabelText('Password');
      const submitButton = await canvas.getByRole('button', { name: /send/i });
  
      await userEvent.type(emailInput, 'user@example.com');
      await userEvent.type(passwordInput, 'password123');
      await userEvent.click(submitButton);
    },
  };