import { services } from "@/constants";
import Image from "next/image";

const ServiceCard = () => {
    return (
        <>
            {services && services.length > 0 ? (
                services.map((service) => (
                    <div
                        key={service?.id}
                        className="flex flex-col items-center bg-secondary rounded-lg p-8 space-y-5 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <Image
                            src={service?.img}
                            width={300}
                            height={400}
                            alt={service?.title || "Service Image"}
                            className="rounded-md object-cover"
                        />
                        <div className="text-center space-y-3">
                            <h3 className="font-bold text-2xl">{service?.title}</h3>
                            <p className="text-sm text-gray-500">{service?.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No services available at the moment.</p>
            )}
        </>
    );
};

export default ServiceCard;
