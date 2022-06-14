import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { LoginForm } from '../LoginForm';
import '@testing-library/jest-dom'

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
    const onSubmitSpy = jest.fn();
    render(<LoginForm onSubmit={onSubmitSpy} />);

    const emailField = screen.getByPlaceholderText('Email');
    const passwordField = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button');

    // fill out and submit form
    fireEvent.change(emailField, { target: { value: 'test@email.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.click(button);

    expect(onSubmitSpy).toHaveBeenCalledWith({
      email: 'test@email.com',
      password: 'password',
    });
  });

  it('updates button on loading state', () => {
    render(<LoginForm isLoading />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Loading...');
  });

  it('displays validate error', () => {
    render(<LoginForm />)

    const button = screen.getByRole('button');

    fireEvent.click(button)

    const errorText = screen.getAllByText('This field is required')
    expect(errorText.length).toBeGreaterThan(0)
  })
});
