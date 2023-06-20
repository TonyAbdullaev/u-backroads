import React from 'react';
import Title from "../components/Title";
import {tours} from "../data";
import Tour from "../components/Tour";

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title ordinary="FEATURED" blueText="TOURS" />
            <div className="section-center featured-center">
                {
                   tours.map(({img, date, title, description, country, duration, startPrice}) =>
                       <Tour img={img} date={date} title={title} description={description} country={country} duration={duration} startPrice={startPrice} />
                   )
                }
            </div>
        </section>
    );
};

export default Tours;