import React, { Component } from 'react';
// import Like from './Like'
import _ from 'lodash';

class TableBody extends Component {

    renderCells = (item, column) => {
        if(column.content) return column.content(item);
        
        return _.get(item, column.path);
    }

    render() {
        const {data, columns} = this.props;
        return (
            <tbody>                  
                {data.map( item => <tr>
                    {columns.map( column => <td> {this.renderCells(item, column)} </td>)}
                </tr>)}

            </tbody>
        );
    }
}
 
export default TableBody;