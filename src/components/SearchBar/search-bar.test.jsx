import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('render component SearchBar', () => {
  it('should render elements form, label, span, input, button', async () => {
    let search = '';
    const setSearch = (val) => {
      search += val;
    };

    render(<SearchBar search={search} setSearch={setSearch} />);
    const form = await screen.findByRole('form');
    const label = await screen.findByText(/browse/i, {
      exact: false,
    });
    const span = await screen.findByText(/unsplash/i);
    let input = await screen.findByPlaceholderText(/search by keyword/i);
    const button = await screen.findByRole('button');

    expect(form).toHaveFormValues({
      search: '',
    });
    expect(label).toHaveTextContent(/browse unsplash images:/i);
    expect(span).toHaveTextContent(/unsplash/i);
    expect(input).toHaveAttribute('name', 'search');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveTextContent('');
    expect(button).toHaveTextContent(/search/i);

    userEvent.type(input, 'portland');
    expect(search).toEqual('portland');
  });
});
