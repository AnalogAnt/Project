import {render , screen, cleanup} from '@testing-library/react';
import Home from '../Home';

test('Should render component', ()=>{
    render(<Home />);
    const homeEle = screen.getByTestId('home-1');
    expect(homeEle).toBeInTheDocument();
    expect(homeEle).toHaveTextContent("hirex");
})