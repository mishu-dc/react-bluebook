import React, {Component} from 'react';


class Footer extends Component{
    render(){
        let year = new Date().getFullYear();
        return (
            <footer className="footer">
                <p>&copy; {year} - Blue Book ReactJs Application</p>
            </footer>
        );
    }
}

export default Footer;