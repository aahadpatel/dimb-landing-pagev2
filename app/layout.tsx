import { ColorModeScript } from '@chakra-ui/react'

import { Provider } from './provider'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('chakra-ui-color-mode');
                  if (mode) {
                    document.documentElement.dataset.theme = mode;
                    document.documentElement.style.colorScheme = mode;
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body suppressHydrationWarning>
        <ColorModeScript initialColorMode="dark" type="localStorage" />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
