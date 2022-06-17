/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../LoginForm';
import { render } from '../../../utils/testing';
import authServices from '../../../services/auth';

jest.mock('../../../services/auth');

afterEach(() => {
  jest.resetAllMocks();
});

describe('LoginForm', () => {
  test('initial state', () => {
    render(<LoginForm />);

    // it renders empty email and password fields
    const emailField = screen.getByPlaceholderText('Email');
    expect(emailField).toHaveValue('');
    const passwordField = screen.getByPlaceholderText('Password');
    expect(passwordField).toHaveValue('');

    // it renders enabled login/register button
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent('Login/Register');
  });

  it('calls onSubmit with form data on submit button click', () => {
    authServices.login.mockResolvedValueOnce({ data: [] });

    render(<LoginForm />);

    const emailField = screen.getByPlaceholderText('Email');
    const passwordField = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button');

    // fill out and submit form
    fireEvent.change(emailField, { target: { value: 'test@email.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.click(button);

    expect(authServices.login).toBeCalledTimes(1);
  });

  it('displays validate require error', () => {
    render(<LoginForm />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const errorText = screen.getAllByText('This field is required');
    expect(errorText.length).toBeGreaterThan(0);
  });

  it('displays validate email error', () => {
    render(<LoginForm />);

    const emailField = screen.getByPlaceholderText('Email');

    fireEvent.change(emailField, { target: { value: 'test' } });

    const errorText = screen.getByText('Email is invalid');
    expect(errorText).toBeInTheDocument()
  });
});
