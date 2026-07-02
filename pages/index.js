export async function getServerSideProps({ res }) {
  const fs = require('fs');
  const path = require('path');
  const html = fs.readFileSync(path.join(process.cwd(), 'public', 'portal.html'), 'utf8');
  res.setHeader('Content-Type', 'text/html');
  res.write(html);
  res.end();
  return { props: {} };
}

export default function Page() { return null; }
