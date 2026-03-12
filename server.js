import { createServer } from 'http';
import handler from 'serve-handler';

const PORT = process.env.PORT || 80;

const server = createServer((req, res) => {
  return handler(req, res, {
    public: 'dist',
    cleanUrls: true,
    trailingSlash: false,
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
