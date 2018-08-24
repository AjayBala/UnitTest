import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import React, {Component} from 'react'


export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}