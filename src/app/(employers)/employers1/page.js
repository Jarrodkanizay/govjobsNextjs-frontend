import Link from 'next/link';

const companies = [
  { name: 'Blackall Tambo Regional Council', logo: 'https://govjobs.com.au/files/pictures/blacktambo1.jpg', jobs: 1, link: 'https://govjobs.com.au/company/78/blackall-tambo-regional-council/' },
  { name: 'City of Boroondara', logo: 'https://govjobs.com.au/files/pictures/boroondora.jpg', jobs: 1, link: 'https://govjobs.com.au/company/83/city-of-boroondara/' },
  
  { name: 'Dundas Shire Council', logo: 'https://govjobs.com.au/files/pictures/Shire-of-Dundas-Logo-HighRes.jpg', jobs: 1, link: 'https://govjobs.com.au/company/170/dundas-shire-council/' },
  { name: 'East Pilbara Shire Council', logo: 'https://govjobs.com.au/files/pictures/Eastpilb1.jpg', jobs: 7, link: 'https://govjobs.com.au/company/172/east-pilbara-shire-council/' },
  { name: 'Kalgoorlie-Boulder City Council', logo: 'https://govjobs.com.au/files/pictures/kalgo1_1.png', jobs: 1, link: 'https://govjobs.com.au/company/213/kalgoorlie-boulder-city-council/' },
  { name: 'NSW Government', logo: 'https://govjobs.com.au/files/pictures/3220c7927ac6482659ec014ef63372e0.jpg', jobs: 31, link: 'https://govjobs.com.au/company/506/nsw-government/' },
  { name: 'Queensland Government', logo: 'https://govjobs.com.au/files/pictures/054c8a2b4f31151871023a976d0417dc.jpg', jobs: 57, link: 'https://govjobs.com.au/company/483/queensland-government/' },
  { name: 'Shire of Broome', logo: 'https://govjobs.com.au/files/pictures/broome1.jpg', jobs: 3, link: 'https://govjobs.com.au/company/92/shire-of-broome/' },
  { name: 'Talent Propeller Pty Limited', logo: 'https://govjobs.com.au/files/pictures/TP_Logo_Primary.png', jobs: 13, link: 'https://govjobs.com.au/company/12/talent-propeller-pty-limited/' },
  { name: 'Victoria State Government', logo: 'https://govjobs.com.au/files/pictures/b878448acb73d7b1264dabdfd6a06dce.png', jobs: 56, link: 'https://govjobs.com.au/company/484/victoria-state-government/' },
  { name: 'Victoria State Government - Education and Training', logo: 'https://govjobs.com.au/files/pictures/9b3e0a127f00903437fb0f730dd0bae4.png', jobs: 1, link: 'https://govjobs.com.au/company/488/victoria-state-government-education-and-training/' },
  { name: 'Whittlesea City Council', logo: 'https://govjobs.com.au/files/pictures/witthlesea1.jpg', jobs: 1, link: 'https://govjobs.com.au/company/377/whittlesea-city-council/' },
  { name: 'Dardanup Shire Council', logo: 'https://govjobs.com.au/files/pictures/dardanup6.jpg', jobs: 1, link: 'https://govjobs.com.au/company/145/dardanup-shire-council/' },
];

const CompanyCard = ({ name, logo, jobs, link }) => (
  <div className="featured-company" aria-hidden="false">
    <Link href={link}>
     
        <div className="panel panel-default featured-company__panel border rounded-3xl mb-8 p-4">
          <div className="panel-body featured-company__panel-body text-left items-center">
            {logo ? <img src={logo} alt={name} className="featured-company__image" /> : <div className="company__no-image"></div>}
          </div>
          <div className="panel-footer featured-company__panel-footer">
            <div className="featured-companies__name">
              <span>{name}</span>
            </div>
            <div className="featured-companies__jobs">{jobs} job(s)</div>
          </div>
        </div>
    
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="search-results search-results__companies featured-companies text-center clearfix columns-3 max-w-screen-lg mx-auto mt-8">
      {companies.map((company, index) => (
        <CompanyCard key={index} {...company} />
      ))}
    </div>
  );
}