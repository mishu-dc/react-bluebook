import React, {Component} from 'react';
import {Breadcrumb} from 'react-bootstrap';

class BreadcrumbCreator extends Component{
    render(){
        let items = this.props.items;
        return (
            <Breadcrumb>
                {
                    items.map(
                        (item, index)=>
                            <Breadcrumb.Item href={item.href} key ={index} active={item.isActive}>{item.name}</Breadcrumb.Item>
                    )
                }
            </Breadcrumb>
        );
    }
}

export default BreadcrumbCreator;
