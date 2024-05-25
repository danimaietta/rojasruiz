
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from './page'; // replace with the actual path to your page.tsx file

describe('Contact', () => {
it('checks input correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Contact />);

    const nameInput = getByPlaceholderText('Nombre');
    fireEvent.change(nameInput, { target: { value: '123' } });
    expect(getByText('* nombre solo puede contener letras')).toBeInTheDocument();

    const emailInput = getByPlaceholderText('Correo');
    fireEvent.change(emailInput, { target: { value: 'not an email' } });
    expect(getByText('* correo no válido')).toBeInTheDocument();

    const phoneInput = getByPlaceholderText('Teléfono');
    fireEvent.change(phoneInput, { target: { value: 'not a number' } });
    expect(getByText('* teléfono solo puede container números')).toBeInTheDocument();
});

  it('prevents form submission when inputs are incorrect', () => {
    const { getByPlaceholderText, getByText } = render(<Contact />);

    const nameInput = getByPlaceholderText('Nombre');
    fireEvent.change(nameInput, { target: { value: '123' } });

    const emailInput = getByPlaceholderText('Correo');
    fireEvent.change(emailInput, { target: { value: 'not an email' } });

    const phoneInput = getByPlaceholderText('Teléfono');
    fireEvent.change(phoneInput, { target: { value: 'not a number' } });

    const submitButton = getByText('Enviar');
    fireEvent.click(submitButton);

    expect(getByText('* nombre solo puede contener letras')).toBeInTheDocument();
    expect(getByText('* correo no válido')).toBeInTheDocument();
    expect(getByText('* teléfono solo puede container números')).toBeInTheDocument();
  });
});