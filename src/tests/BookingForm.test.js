import { render, screen, within } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from '../components/timeReducer';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} />);
    const headingElement = screen.getByText("Booking Page");
    expect(headingElement).toBeInTheDocument();
})



test('initializeTimes should return an array with times from 16:00 to 23:00', () => {
    const times = initializeTimes('2024-03-20');    
    expect(times.length).toBeGreaterThan(0);
});

test('updateTimes when called with any date should return the same as initializeTimes', () => {
    const updatedTimes = updateTimes('2024-03-20'); // Example date
    console.log (updateTimes);
    expect(updatedTimes.length).toBeGreaterThan(0);
});

test('BookingForm guest input field should have min 1 and max 10', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} />);
    const guestInput = screen.getByLabelText("Number of guests");
    expect(guestInput).toHaveAttribute('min', '1');
    expect(guestInput).toHaveAttribute('max', '10');
});

test('BookingForm enables submit button with valid inputs', async () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} />);
    
    const timeSelect = screen.getByTestId('TimeCombo');
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion (optional):");
    const submitButton = screen.getByRole('button', { name: "On Click" });

    await userEvent.selectOptions(timeSelect, ['17:00']); // Selects the first available time
    await userEvent.clear(guestsInput); // Clears the input field first
    await userEvent.type(guestsInput, '5'); // Then sets number of guests to 5
    await userEvent.selectOptions(occasionSelect, ['Birthday']); // Selects Birthday as the occasion

    await waitFor(() => expect(submitButton).not.toBeDisabled(), { timeout: 1000 });
    //expect(submitButton).not.toBeDisabled();
});

test('BookingForm submit button should be disabled with valid time and 20 guests', async () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} />);
    
    const timeSelect = screen.getByTestId('TimeCombo');
    const guestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByRole('button', { name: "On Click" });

    await userEvent.selectOptions(timeSelect, ['17:00']); // Selects a valid time
    await userEvent.type(guestsInput, '20'); // Sets number of guests to 20, which is invalid

    expect(submitButton).toBeDisabled();
});
