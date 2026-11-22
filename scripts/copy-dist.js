import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

async function prepareDist() {
  const source = ".output/public";
  const target = "dist/client";
  const serverDir = ".output/server";

  if (!fs.existsSync(source)) return;

  fs.mkdirSync(target, { recursive: true });
  fs.cpSync(source, target, { recursive: true, force: true });

  // Locate the bundled CSS and JS files
  const assetsDir = path.join(target, "assets");
  let cssFile = "";
  let jsFile = "";

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css")) || "";
    jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || "";
  }

  // Load the real TanStack Start manifest generated during build
  let manifest = { routes: {} };
  if (fs.existsSync(serverDir)) {
    const serverFiles = fs.readdirSync(serverDir);
    const manifestFile = serverFiles.find(
      (f) => f.startsWith("_tanstack-start-manifest") && f.endsWith(".mjs"),
    );
    if (manifestFile) {
      try {
        const manifestPath = path.resolve(serverDir, manifestFile);
        const mod = await import(pathToFileURL(manifestPath).href);
        if (typeof mod.tsrStartManifest === "function") {
          manifest = mod.tsrStartManifest();
        }
      } catch (err) {
        console.warn("Could not load SSR manifest:", err);
      }
    }
  }

  // Ensure default fallback routes exist
  if (!manifest.routes) {
    manifest.routes = {};
  }
  const defaultRoute = { css: [], preloads: [], scripts: [] };
  if (!manifest.routes.__root__) {
    manifest.routes.__root__ = defaultRoute;
  }
  if (!manifest.routes["/"]) {
    manifest.routes["/"] = defaultRoute;
  }

  const manifestJson = JSON.stringify(manifest);

  // TanStack Start client bundle expects window.$_TSR, window.__TSS_START_OPTIONS__,
  // and the SSR manifest to exist during hydration. In a static hosting environment
  // like Render Static Site, we provide the full build manifest and a proxy fallback
  // so the client router initializes gracefully and mounts without runtime errors.
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
        self.__TSS_START_OPTIONS__ = { serializationAdapters: [] };
        var loadedManifest = ${manifestJson};
        var routeFallback = { css: [], preloads: [], scripts: [] };
        if (typeof Proxy !== "undefined" && loadedManifest && loadedManifest.routes) {
          loadedManifest.routes = new Proxy(loadedManifest.routes, {
            get: function(target, prop) {
              return prop in target ? target[prop] : routeFallback;
            }
          });
        }
        self.$_TSR = {
          buffer: [],
          initialized: true,
          h: function() { this.hydrated = true; this.c(); },
          e: function() { this.streamEnded = true; this.c(); },
          c: function() {},
          p: function(fn) { if (typeof fn === 'function') fn(); },
          router: {
            manifest: loadedManifest,
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

  // Write index.html, 200.html, and 404.html to root
  fs.writeFileSync(path.join(target, "index.html"), html, "utf8");
  fs.writeFileSync(path.join(target, "200.html"), html, "utf8");
  fs.writeFileSync(path.join(target, "404.html"), html, "utf8");
  fs.writeFileSync(path.join(source, "index.html"), html, "utf8");

  // Pre-generate static HTML directories for all defined app routes
  const knownRoutes = [
    "about",
    "attractions",
    "blog",
    "book",
    "contact",
    "dining",
    "experience",
    "family-homestay-in-kalpa",
    "gallery",
    "homestay-in-kalpa",
    "homestay-in-kinnaur",
    "homestay-in-reckong-peo",
    "homestay-in-shudharang",
    "homestay-near-kinnaur-kailash",
    "kalpa-travel-guide",
    "kinnaur-kailash-travel-guide",
    "mountain-view-homestay-kalpa",
    "reviews",
    "rooms",
    "things-to-do-in-kalpa",
  ];

  for (const route of knownRoutes) {
    const routeDir = path.join(target, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf8");
  }

  console.log(
    "Successfully prepared dist/client, manifest hydration, route directories, and index.html for static deployment",
  );
}

prepareDist();
