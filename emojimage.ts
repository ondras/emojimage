import { serve } from "https://deno.land/std/http/server.ts";


const headers = {"content-type":"image/svg+xml"};

async function onRequest(r: Request) {
	let url = new URL(r.url);
	let path = url.pathname.substring(1);
	path = decodeURIComponent(path);
	let style = url.searchParams.get("style") || "";
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,100,100"><text x="50" y=".9em" text-anchor="middle" font-size="90" style="${style}">${path}</text></svg>`;
	return new Response(svg, {headers})
}

serve(onRequest);
