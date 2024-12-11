import React from 'react';
import gil from '../assets/face/WhatsApp Image 2024-12-06 at 23.07.48.jpeg';
import gio from '../assets/face/WhatsApp Image 2024-12-06 at 23.08.07.jpeg';
import gu from '../assets/face/WhatsApp Image 2024-12-06 at 23.08.23.jpeg';

const team = [
  {
    name: 'Gilberto',
    role: 'Lead Dentist',
    image: 'https://scontent.fcgh35-1.fna.fbcdn.net/v/t1.6435-9/104408536_3125815254107955_5871361863293748436_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHvcBbD8pP6L5eUoBCr1tUqVIW3PXLbC_BUhbc9ctsL8Fdn_NLwKq4tvahqphQraKvWDJcxNCgnvqOBsUfZwLJ5&_nc_ohc=D-pL7wqvv6AQ7kNvgFXYP96&_nc_zt=23&_nc_ht=scontent.fcgh35-1.fna&_nc_gid=A-oTab17LKC23bgqkFv2mgs&oh=00_AYCBvetiToillaPQjoBiPVBvUbxw1WJkimwlR7DkQ5whiQ&oe=677B345B',
    description: 'Specialized in Cosmetic Dentistry with 15+ years of experience.',
  },
  {
    name: 'Gustavo',
    role: 'Orthodontist',
    image: 'https://scontent.fcgh35-1.fna.fbcdn.net/v/t39.30808-6/366021633_6508714969220216_5944804339482916269_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFbERuIQ1UWAJwDDJfA3CsSHmSD7d4Skk8eZIPt3hKST8AOkrI1Q7yp9qBth9A1CdyTAHUvKnuzM_-sbc2uGfnm&_nc_ohc=Gb5Ha5VB1HgQ7kNvgFU1vnS&_nc_zt=23&_nc_ht=scontent.fcgh35-1.fna&_nc_gid=AQ3PEaliG6cZMNKHDXfbGai&oh=00_AYDENlROAgswy0vbgy5BsmTgIJUuTI9V4IbDQWy8nOeU-w&oe=6759926D',
    description: 'Expert in modern orthodontic treatments and smile design.',
  },
  {
    name: 'Giovanni',
    role: 'Pediatric Dentist',
    image: 'https://scontent.fcgh35-1.fna.fbcdn.net/v/t39.30808-6/434744442_18428085961053103_7053710260896031131_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvmI0IcuM2fDddfFD2LTavma5a_gcl0laZrlr-ByXSVu3tJOpHLMCAmjHRHAnjU9M1eodb7_3FeEDydLIEAxVY&_nc_ohc=owik4agl31UQ7kNvgFgTofP&_nc_zt=23&_nc_ht=scontent.fcgh35-1.fna&_nc_gid=Aq0ikEbsvLE1_DaAkWPOqlZ&oh=00_AYDAtT-pHW1msuXGe3VhX_aU6VGeAU0ekGbEBSMXmXoRUQ&oe=675980E9',
    description: 'Specialized in making dental visits fun and comfortable for kids.',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Conheça nossa Equipe
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Profissionais experientes dedicados à sua saúde bucal
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-48 rounded-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}