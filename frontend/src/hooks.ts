/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // SPA mode (https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode)
  const response = await resolve(event, { ssr: false });
  return response;
}
