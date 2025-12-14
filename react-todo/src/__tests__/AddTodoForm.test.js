import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm', () => {
  test('calls onAdd with input value and clears input when Add is clicked', () => {
    const onAdd = jest.fn();
    render(<AddTodoForm onAdd={onAdd} />);

    const input = screen.getByPlaceholderText('Add new todo');
    fireEvent.change(input, { target: { value: 'Buy milk' } });
    fireEvent.click(screen.getByText('Add'));

    expect(onAdd).toHaveBeenCalledWith('Buy milk');
    expect(input.value).toBe('');
  });
});
