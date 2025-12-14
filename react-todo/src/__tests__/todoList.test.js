import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add new todo'), { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Learn React'));
    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
