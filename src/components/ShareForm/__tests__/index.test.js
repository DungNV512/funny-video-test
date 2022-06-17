import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import ShareForm from "..";
import { render } from '../../../utils/testing'
import '@testing-library/jest-dom'

describe('ShareForm', () => {
  test('initial state', () => {
    render(<ShareForm />)

    // it renders empty url field
    const urlField = screen.getByRole('textbox', {name: 'Youtube URL'})
    expect(urlField).toHaveValue('')

    // it renders enabled share button
    const buttonShare = screen.getByRole('button', { name: /Share/i})
    expect(buttonShare).not.toBeDisabled()
  })

  it('calls onShare with form data on share button click', () => {
    const onShareSpy = jest.fn()

    render(<ShareForm onShare={onShareSpy}/>)

    const urlField = screen.getByRole('textbox', {name: 'Youtube URL'})
    const buttonShare = screen.getByRole('button', { name: /Share/i})

    // fill out and submit form
    fireEvent.change(urlField, { target: { value: 'https://youtube.com' }})
    fireEvent.click(buttonShare)

    expect(onShareSpy).toHaveBeenCalledWith({
      url: 'https://youtube.com'
    })
  })

  it('renders error if urlField empty', () => {
    render(<ShareForm />)
    const buttonShare = screen.getByRole('button', { name: /Share/i})

    fireEvent.click(buttonShare)

    const errorText = screen.getByText('This field is required')
    expect(errorText).toBeInTheDocument()
  })
})