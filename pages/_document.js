import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Vegan Recipes" key="title"/>
        <meta property="og:description" content="find your next recipe" key="description"/>
        <meta
          // property="og:image"
          // content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
        />
        {/* <meta name="twitter:card" content="summary_large_image"></meta> */}
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1RM9PF9TSQ"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1RM9PF9TSQ');
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
