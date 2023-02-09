import { Banner } from "./Banner"
import { render, screen } from "@testing-library/react"
test('heading should be rendered', ()=>{
    render(<Banner/>)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
})