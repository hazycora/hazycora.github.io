<script>
	import { base } from '$app/paths'
  import "../app.postcss";
  const title = "hazycora";
  const description = "";
  const image = "/pfp.webp";
</script>

<svelte:head>
  <link href="{base}/fonts/style.css" rel="stylesheet">

  <meta name="title" content="{title}">
	<meta name="description" content="{description}">
	
	<meta property="og:type" content="website">
	<meta property="og:title" content="{title}">
	<meta property="og:description" content="{description}">
  <meta property="og:image" content="{image}">

	<meta property="twitter:card" content="summary">
	<meta property="twitter:title" content="{title}">
	<meta property="twitter:description" content="{description}">
  <meta property="twitter:image" content="{image}">
</svelte:head>

<slot />
