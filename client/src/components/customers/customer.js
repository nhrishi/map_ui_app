import React, { Component } from 'react';
import './customer.css';

class Customers extends Component {

  constructor() {
      super();
      this.state = {
          customers: []
      }
  }  

  componentDidMount() {
      fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('Customer fetched..', 
            customers)));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
				<ul>
					{this.state.customers.map(customer => 
							<li key={customer.id}>{customer.firstname} {customer.lastname} </li>
						)}
				</ul>
      </div>
    );
  }
}

export default Customers;
