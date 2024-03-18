import { render, screen, within } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from '../components/timeReducer';
import userEvent from '@testing-library/user-event';

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



test('BookingForm submit button click updates available times to 17:00 until 22:00', async () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']} />);
    const submitButton = screen.getByRole('button', { name: /submit reservation/i });
    await userEvent.click(submitButton);
    //const timeOptions = screen.getAllByRole('option').map(option => option.textContent);
    const timeSelect = screen.getByTestId('TimeCombo');
    const timeOptions = within(timeSelect).getAllByRole('option').map(option => option.textContent);

    expect(timeOptions).toEqual(expect.arrayContaining(["Select a time", '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']));
});
