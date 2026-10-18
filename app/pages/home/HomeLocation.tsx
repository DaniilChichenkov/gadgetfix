import React from "react";

import { MapPin, Phone, Clock } from "lucide-react";

const HomeLocation = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="md:py-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Заходите. мы рядом.
          </h2>

          <dl className="mt-6 space-y-3">
            <div>
              <dt className="sr-only">Location</dt>

              <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                <MapPin className="text-blue-500" />

                <span className="font-medium">Narva, Joala 10-10</span>
              </dd>
            </div>

            <div>
              <dt className="sr-only">Phone number</dt>

              <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                <Phone className="text-blue-500" />

                <span className="font-medium">+372 55555555</span>
              </dd>
            </div>

            <div>
              <dt className="sr-only">Working hours</dt>

              <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                <Clock className="text-blue-500" />

                <span className="font-medium">Пн-Пт - 10:00 - 17:00</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
          <iframe
            title="GadgetFix Location"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Narva%2C%20Joala%2010&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
