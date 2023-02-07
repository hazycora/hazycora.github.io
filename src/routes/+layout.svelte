<script>
  import "../app.postcss";
  const title = "hazycora";
  const description = "All about me!";
  const image = "/pfp.webp";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet">

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
