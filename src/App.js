import React, { Component } from 'react';
import "./App.css"

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
<br/>

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
            </div>
        );
    }
}

export default App;