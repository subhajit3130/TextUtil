import React from 'react'

export default function About(props) {

    let myStyleDiv = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#6e550b" : "beige"
    }

    let myStyleAccordion = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "black" : "white",
    }

    let myStyleAccordionBody = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#62060e" : "#eecec3",
    }

    return (
        <div className="container mt-3" style={myStyleDiv}>
            <h4 className="pt-3">About Us</h4>
            <hr />
            <div className="accordion pb-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={myStyleAccordion}>
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyleAccordionBody}>
                            This is a utility to manipulate your given text input, e.g. : converting to upper case, converting to lower case, capitalize each word, remove extra spaces etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyleAccordion}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyleAccordionBody}>
                            This is a free tool to quickly manipulate any given string as per user's choice.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyleAccordion}>
                            <strong>Supported Browsers</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyleAccordionBody}>
                            <table className="table table-sm w-75 mx-auto table-bordered border-secondary"
                                style={myStyleAccordionBody}>
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">Sr. No.</th>
                                        <th scope="col">Browsers</th>
                                        <th scope="col">Platform</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="text-center">1</th>
                                        <td>Google Chrome (latest version)</td>
                                        <td>Windows, Mac OS X, iOS, Android</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-center">2</th>
                                        <td>Apple Safari (latest version)</td>
                                        <td>Mac OS X, iOS</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-center">3</th>
                                        <td>Microsoft Internet Explorer 11+</td>
                                        <td>Windows</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-center">4</th>
                                        <td>Microsoft Edge (latest version)</td>
                                        <td>Windows</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-center">5</th>
                                        <td>Mozilla Firefox (latest version)</td>
                                        <td>Windows</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
