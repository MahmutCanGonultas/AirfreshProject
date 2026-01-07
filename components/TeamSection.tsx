'use client';

import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ayşe Yılmaz",
      role: "Kurucu & CEO",
      image: "/images/WebSitesi Görseller/A-500/6.png",
      bio: "15 yıllık parfüm endüstrisi deneyimi",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Mehmet Demir",
      role: "Yaratıcı Direktör",
      image: "/images/WebSitesi Görseller/A-400/siyah1.jpg",
      bio: "Parfüm tasarımında uzman",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Zeynep Kaya",
      role: "Kalite Müdürü",
      image: "/images/WebSitesi Görseller/A-200/beyaz2.png",
      bio: "Kimyager, 10+ yıl deneyim",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Can Öztürk",
      role: "Müşteri İlişkileri Müdürü",
      image: "/images/WebSitesi Görseller/A-900/2.jpg",
      bio: "Müşteri memnuniyeti uzmanı",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Ekibimiz
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-3 tracking-tight">
            Uzman Ekibimiz
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Tutku ve deneyimle çalışan profesyoneller
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3 justify-center">
                    <a href={member.social.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-gray-600">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

