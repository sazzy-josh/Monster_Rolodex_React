import React from "react";
import ReactLoading from 'react-loading';

const Loader = ({type , color}) => (
    <div className="loader">
    
	<ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
);

export default Loader;