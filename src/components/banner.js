import React from 'react';
import './banner.css';

class Banner extends React.Component {
    constructor() {
       super();
       this.state = {
          showHeader: false
       }
    }

    componentDidMount() {
       setTimeout(() => this.setState({showHeader: true}), 2000);
    }
    
      render() {
       return (
         <div>
             {this.state.showHeader ? <div className="test">Admissions are now open for &nbsp; <b>Machine Learning</b>. Sign up &nbsp;<a href="https://forms.gle/RqL5oxcHtARV5Rgk6">here</a>.</div> : null }
         </div>
       );
     }
}
export default Banner;

//ReactDOM.render(<Banner/>, document.getElementById('banner'))