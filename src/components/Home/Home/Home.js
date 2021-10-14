import React from 'react';
import Abouts from '../../About/Abouts';
import Banner from '../Banner/Banner';
import Survices from '../Survices/Survices';

const Home = () => {
    return (
        <div>
            <Banner>
            </Banner>
            <Survices></Survices>
           <Abouts></Abouts>
        </div>
    );
};

export default Home;