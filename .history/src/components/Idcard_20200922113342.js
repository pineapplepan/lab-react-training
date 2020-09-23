import React from 'react';
// import logo from '../logo.svg';

export default class IdCard extends Component {
  render() {
    return (
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
    );
  }
}
