// Endpoint de liveness para el healthcheck de Docker/Coolify.
// Sin `export const dynamic`: en Next 16 los route handlers no se cachean por defecto y corren en
// cada request, así que el 200 prueba que el servidor está sirviendo y no que existe un archivo estático.
// Solo GET: el healthcheck usa el wget de busybox, que en modo --spider manda GET (no HEAD).
export async function GET(): Promise<Response> {
  return new Response("ok", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
