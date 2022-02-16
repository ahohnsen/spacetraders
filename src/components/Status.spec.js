import { render } from '@testing-library/react';
import Status from './Status.js';

describe('Status', () => {
  it('renders without error', () => {
    render(<Status />);
  });

  it.todo('shows a green state with isGreen={true}');
  it.todo('shows a red state with isGreen={false}');
});
