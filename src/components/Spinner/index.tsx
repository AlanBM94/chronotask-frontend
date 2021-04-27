import React from 'react';
import Loader from 'react-loader-spinner';
import './spinner.scss';

export default class Spinner extends React.Component {
    //other logic
    render() {
        return (
            <div className="spinner">
                <Loader type="Watch" color="#0be8d1" height={100} width={100} />
            </div>
        );
    }
}
