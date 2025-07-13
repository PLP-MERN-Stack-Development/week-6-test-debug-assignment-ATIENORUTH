// src/__tests__/BugForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('renders form and submits a bug', () => {
  const mockSubmit = jest.fn();

  render(<BugForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/Title/i), {
    target: { value: 'Sample Bug' },
  });
  fireEvent.change(screen.getByLabelText(/Description/i), {
    target: { value: 'Bug description' },
  });

  fireEvent.click(screen.getByText(/Submit/i));

  expect(mockSubmit).toHaveBeenCalled(); // Confirm submit triggered
});
