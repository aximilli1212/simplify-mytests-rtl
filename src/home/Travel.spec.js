import {render, screen} from "@testing-library/react";
import Travel from "./Travel";

describe('Travel Element', ()=>{
    it('displays the header and paragraph text',  ()=>{
        const {container} = render(<Travel/>) // container represents the resulting HTML output of the component
        expect(container).toMatchInlineSnapshot(
            `
            <div>
            <div class="card text-center m-1"
                 style="width: 18rem"
            >
            <i class="material-icons"
               style="font-size: 4rem"
             > 
                airplanemode_active
            </i>
            </div>
            `
        )
    })
})
