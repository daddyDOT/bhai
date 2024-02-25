"use client"

import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import RelatedCard from './RelatedCard';

const RelatedPublications = ({ publication_id }:any) => {

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true)
    console.log("ovdje" + publication_id);
    useEffect(() => {
        const fetchPublicationId = async () => {
            const res = await fetch(`http://localhost:5000/api/suggested/publications/${publication_id}`);
            const publications = await res.json();
            setData(publications)
            setIsLoading(false);
        };

        fetchPublicationId();
    }, [publication_id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    
    return (
        <Slider {...settings} className='mt-10'>
            {data && data.map((data)=>(
                <RelatedCard data={data} key={data.id} />
            ))}
        </Slider>
    );
    
}

export default RelatedPublications