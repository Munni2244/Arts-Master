import React from 'react';
import About from './About';

const Artists=[
    {name:"D-Horley", id:1, img:"https://blackburnnews.com/wp-content/uploads/2020/02/LA3-1116-e1582321388605.jpg"},
    {name:"p-Hy", id:2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-u_lmGZfnL9NMKztamxGLc8n4i9BoMvtU3Q&usqp=CAU"},
    {name:"m-korley", id:2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LeYx2w8NMvT1at_IF68dPmgY2B6n7StOqg&usqp=CAU"},
]
const Abouts = () => {
    return (
        <div className="row m-5">
       {
           Artists.map(artist=> <About artist={artist}></About>)
       }
        </div>
    );
};

export default Abouts;