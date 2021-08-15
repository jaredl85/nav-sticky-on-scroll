import React from 'react'
import './App.css'

class Navbar extends React.Component {
    listener = null;
    state = {
      nav:false
    }
    componentDidMount() {
       window.addEventListener("scroll", this.handleScroll);
     }
     componentWillUnmount() {
        window.removeEventListener('scroll');
      }
     handleScroll= () => {
       if (window.pageYOffset < 150) {
           if(!this.state.nav){
             this.setState({ nav: true });
           }
       }else{
           if(this.state.nav){
             this.setState({ nav: false });
           }
       }
  
     }
  
    render(){
    return (
        <div className={`Nav ${this.state.nav && 'Nav__black'}`}>
            NAVBAR
        </div>
    );}
  }

  export default Navbar