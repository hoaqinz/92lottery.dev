export async function middleware(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Nếu là file tĩnh, cho phép truy cập trực tiếp
  if (
    path.startsWith('/_next/') ||
    path.startsWith('/static/') ||
    path.startsWith('/images/') ||
    path.includes('.')
  ) {
    return;
  }

  // Nếu không phải file tĩnh, chuyển hướng về index.html
  return new Response(null, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
} 