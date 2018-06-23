import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return (
            <div className="container">
                <h2>Contact</h2>
                <address>
                    4200 Conally Street <br/>
                    Annandale, VA 22003 <br />
                    <abbr title="Phone">P:571-409-85XX</abbr>    
                </address>

                <address>
                    <strong>Support:</strong>   <a href="mailto:support@bluebook.com">Support@bluebook.com</a><br />
                    <strong>Marketing:</strong> <a href="mailto:marketing@bluebook.com">Marketing@bluebook.com</a>
                </address>
            </div>
        )
    }
}

export default Contact;