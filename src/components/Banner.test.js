import { Banner } from "./Banner"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';

test('heading should be rendered', ()=>{
    render(<Banner/>)
    const headingEl = screen.getByRole("heading")
    expect(headingEl).toBeInTheDocument();
})
test('agency should be rendered', ()=>{
    render(<Banner/>)
    const agencyEl = screen.getByTestId("agency")
    expect(agencyEl).not.toBeInTheDocument();
})