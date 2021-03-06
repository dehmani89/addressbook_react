import React, { Component } from 'react';
import "./App.css";
import "./components/card.css";
import Logo from "./images/address-icon-png-256_256.png"

class App extends Component {

    state = {
        addresses: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/select/address')
            .then(res => res.json())
            .then((data) => {
                this.setState({ addresses: data })
                console.log(this.state.addresses)
            })
            .catch(console.log)
    }

   render() {
        return (

            <div className="container">

                <section id="team" className="pb-5">
                        <h5 className="section-title h1">Address List</h5>
                        <div className="row">


                            {this.state.addresses.map((address) => (

                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                            <div className="mainflip">
                                                <div className="frontside">
                                                    <div className="card">
                                                        <div className="card-body text-center">
                                                            <p><img className=" img-fluid"
                                                                    src={Logo}
                                                                    alt="card image"></img></p>
                                                            <h4 className="card-title">{address.username} Address</h4>
                                                            <p className="card-text">This is basic card with image on
                                                                top, title, description and button.</p>


                                                            <table className="table">
                                                                <tbody>
                                                                <tr>
                                                                    <th>username</th>
                                                                    <td>{address.username}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>street</th>
                                                                    <td>{address.street}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>city</th>
                                                                    <td>{address.city}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>state</th>
                                                                    <td>{address.state}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>zip</th>
                                                                    <td>{address.zip}</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>

                                                            {/*<a href="#" className="btn btn-primary btn-sm"><i
                                                                className="fa fa-plus"></i></a>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="backside">
                                                    <div className="card">
                                                        <div className="card-body text-center mt-4">
                                                            <h4 className="card-title">Edit User Address</h4>
                                                            <p className="card-text">Please click on the edit button to update a user's Address</p>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item">
                                                                    <a className="social-icon text-xs-center"
                                                                       target="_blank" href="#">
                                                                        <i className="fa fa-edit fa-2x"></i>
                                                                    </a>
                                                                </li>

                                                                <li className="list-inline-item">
                                                                    <a className="social-icon text-xs-center"
                                                                       target="_blank" href="#">
                                                                        <i className="fa fa-trash fa-2x"></i>
                                                                    </a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                            ))}











                        </div>
                </section>

<br/>

                <table className="table table-hover table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
{/*
               <div className="card border-dark mb-3">
                    <h1 className="text-center"><i className="fa fa-address-card fa-lg" aria-hidden="true"></i>
                         Address List</h1>
                    {this.state.addresses.map((address) => (
                        <div className="card-header">
                            <div className="card-body text-dark">
                                <h5 className="card-title"><i className="fa fa-user" aria-hidden="true"></i>
                                    <span className="bold">Username:  </span>{address.username}</h5>
                                <h6 className="card-text">
                                    <span className="bold"><i className="fa fa-road" aria-hidden="true"></i>
 Street:  </span>{address.street}<br/>
                                    <span className="bold"><i className="fa fa-building-o" aria-hidden="true"></i>
 City:  </span>{address.city}<br/>
                                    <span className="bold"><i className="fa fa-flag" aria-hidden="true"></i>
 State:  </span>{address.state}<br/>
                                    <span className="bold"><i className="fa fa-location-arrow" aria-hidden="true"></i>
 Zip:  </span>{address.zip}<br/>
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>

 */}



            </div>
        );
    }
}

export default App;