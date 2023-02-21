# emojimage

A two-line shell script CGI to convert emoji into a SVG image – suitable for favicons. Based on [a tweet](https://twitter.com/leaverou/status/1241619866475474946) by Lea Verou.

## Usage

*Note: emojimage.deno.dev is a development endpoint; its stability is not guaranteed.*

```html
<link rel="icon" href="https://emojimage.deno.dev/😃" />

<link rel="icon" href="https://emojimage.deno.dev/🎵" />

<link rel="icon" href="https://emojimage.deno.dev/🥓" />

...you got the idea
```

## Installation

### Apache

```apache
AddHandler cgi-script .cgi
RewriteEngine On
RewriteRule .* /emojimage.cgi [L]
```

### Other web servers

I have no idea! Please share your configs.
