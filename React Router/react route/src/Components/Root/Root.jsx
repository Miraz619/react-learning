import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Slider from '../Slider/Slider';
import { useNavigation } from "react-router";

import  './Root.css'

const Root = () => {

    const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
    return (
        <div>

            
            {isNavigating && <GlobalSpinner />}
            <Header></Header>


            <div className='root-main'>
            
            <Slider></Slider>
                 {isNavigating && <span>loading....</span>}
            <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Root;