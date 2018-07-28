import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

// THIS IS THE ORIGINAL DUMB COMPONENT - KEPT FOR COMPARISON
// const SearchBar = () => {
//     return (
//         <h2>Search Bar</h2>
//     )
// }

class SearchBar extends Component {
    state = {
        term: ""
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="term" hidden>Search Term</Label>
                    <Input 
                        type="term" 
                        name="term" 
                        id="term" 
                        placeholder="Search Term(s)..." 
                    />
                </FormGroup>
            </Form>
        )
    }
}

// we use export default if the component is only returning one thing (like in this case) or if we want a default export (conditional returns?)
export default SearchBar;