import { serve } from "https://deno.land/std/http/server.ts";


const headers = {"content-type":"image/svg+xml"};

async function onRequest(r: Request) {
	let path = new URL(r.url).pathname.substring(1);
	path = decodeURIComponent(path);
	const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,100,100'><text y='.9em' font-size='90'>${path}</text></svg>`;
	return new Response(svg, {headers})
}

serve(onRequest);
