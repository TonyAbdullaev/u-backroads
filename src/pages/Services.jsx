import React from 'react';
import Title from "../components/Title";
import {services} from "../data";
import Service from "../components/Service";

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title ordinary="Our" blueText="services" />
            <div className="section-center services-center">
                {
                    services.map(({id, icon, title, description}) =>
                        <Service icon={icon} title={title} description={description} id={id} />
                    )
                }
            </div>
        </section>
    );
};

export default Services;