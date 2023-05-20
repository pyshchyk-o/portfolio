const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

let links = [
  { url: '/', changefreq: 'daily', priority: 0.3 },
  // include other urls
];

const stream = new SitemapStream({ hostname: 'https://olhapyshchyk.com' });

// Pass the links directly to the stream
links.forEach(link => {
  stream.write(link);
});

// End the stream
stream.end();

// Setup the pipeline and handle errors
stream
  .pipe(createWriteStream('./public/sitemap.xml'))
  .on('error', (error) => console.log(error))
  .on('finish', () => console.log('Sitemap created successfully'));

streamToPromise(stream).then(data => console.log('Done')).catch(error => console.error(error));
