import fs from "fs";
import path from "path";

function prepareDist() {
  const source = ".output/public";
  const target = "dist/client";

  if (!fs.existsSync(source)) return;

  fs.mkdirSync(target, { recursive: true });
  fs.cpSync(source, target, { recursive: true, force: true });

  // Ensure index.html exists for static hosting providers like Render
  const assetsDir = path.join(target, "assets");
  let cssFile = "";
  let jsFile = "";

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css")) || "";
    jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || "";
  }

  // TanStack Start client bundle expects window.$_TSR to exist for hydration.
  // In a static SPA fallback context without SSR, we provide a valid fallback
  // so the client router initializes gracefully and navigates to the requested route.
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KinVatika Homestay | Official Website in Kalpa, Kinnaur</title>
    <meta name="description" content="Official website of KinVatika Homestay in Village Shudharang, Kalpa, Kinnaur. Boutique mountain-view rooms, panoramic Kinnaur Kailash views, homemade Himachali food and authentic family hospitality." />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Karla:wght@300;400;500;600&display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
    <script>
      (function() {
        self.$R = self.$R || {};
        self.$R["tsr"] = [];
        self.$_TSR = {
          buffer: [],
          initialized: true,
          h: function() { this.hydrated = true; this.c(); },
          e: function() { this.streamEnded = true; this.c(); },
          c: function() {},
          p: function(fn) { if (typeof fn === 'function') fn(); },
          router: {
            manifest: {},
            matches: [],
            dehydratedData: undefined
          }
        };
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
  </body>
</html>`;

  fs.writeFileSync(path.join(target, "index.html"), html, "utf8");
  fs.writeFileSync(path.join(target, "200.html"), html, "utf8");
  fs.writeFileSync(path.join(target, "404.html"), html, "utf8");
  fs.writeFileSync(path.join(source, "index.html"), html, "utf8");

  console.log("Successfully prepared dist/client and index.html for static deployment");
}

prepareDist();
