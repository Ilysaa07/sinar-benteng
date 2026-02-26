// Helper to get projects data - normally this would come from a CMS or DB
const projects = [
  { slug: 'gedung-perkantoran-megah', date: '2024-03-01' },
  { slug: 'perumahan-elite-cluster', date: '2023-11-15' },
  { slug: 'jembatan-penghubung', date: '2023-08-10' },
  { slug: 'renovasi-hotel-berbintang', date: '2024-01-20' },
  { slug: 'pabrik-manufaktur', date: '2022-09-05' },
  { slug: 'gedung-sekolah-modern', date: '2023-06-12' },
];

const areas = [
  'tangerang',
  'tangerang-selatan',
  'kabupaten-tangerang',
  'banten'
];

export default function sitemap() {
  const baseUrl = 'https://sinarbenteng.com';

  const caseStudies = projects.map((project) => ({
    url: `${baseUrl}/proyek/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const localAreas = areas.map((area) => ({
    url: `${baseUrl}/area/${area}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/proyek`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...localAreas,
    ...caseStudies,
  ];
}
