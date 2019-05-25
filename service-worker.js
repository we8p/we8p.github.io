/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fccfe4217d3e039f2797555298450827"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "db2664c6dca6f9c51d475f01473a395c"
  },
  {
    "url": "assets/css/0.styles.bfd1efc9.css",
    "revision": "b511fabb83f079ed01ece1daff9c8453"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.f423a4fc.js",
    "revision": "539096279149ed6d8d215e9732e397ca"
  },
  {
    "url": "assets/js/10.329b430f.js",
    "revision": "28b9f707294b30f5196bdd4471535f13"
  },
  {
    "url": "assets/js/11.cd2adbb2.js",
    "revision": "34a35732bbd3614f593749b6d168be24"
  },
  {
    "url": "assets/js/12.f2c6422f.js",
    "revision": "db9ebeee5517c7d38155796fb288e579"
  },
  {
    "url": "assets/js/13.ed8af8a7.js",
    "revision": "6be41ebf7a44a675397340ae358f9f72"
  },
  {
    "url": "assets/js/14.c77126b8.js",
    "revision": "3da1b4c7bc06228ff24456158ad44f6d"
  },
  {
    "url": "assets/js/15.13ffefee.js",
    "revision": "e5ec23810fbbdb18502c4176e1085e60"
  },
  {
    "url": "assets/js/16.d59d0d1c.js",
    "revision": "a17fed18ee108563ca2892b1aa6439ee"
  },
  {
    "url": "assets/js/17.a333b823.js",
    "revision": "6d7eaae015150469230b8e951ce2de76"
  },
  {
    "url": "assets/js/18.4ecb947a.js",
    "revision": "b6d2efb420000e6488a9defbd5e41ab5"
  },
  {
    "url": "assets/js/19.eea177bf.js",
    "revision": "872b8ecaeef1f6793b0468e29d4f8465"
  },
  {
    "url": "assets/js/2.8a0613d6.js",
    "revision": "4be320f96a30f2969fff5ed610d03659"
  },
  {
    "url": "assets/js/20.d69e275c.js",
    "revision": "993ffeedbb5bc8e666633c3adc42795c"
  },
  {
    "url": "assets/js/21.0984eb29.js",
    "revision": "51f3c73147753e87034a21ceb31462fe"
  },
  {
    "url": "assets/js/22.d655a4f1.js",
    "revision": "d3dbee45ba0971b31c6bb6012938b39d"
  },
  {
    "url": "assets/js/23.0537216f.js",
    "revision": "4a8e6ea86dcf0b817ea7312f7147e8de"
  },
  {
    "url": "assets/js/24.6f54c907.js",
    "revision": "694c8929dfda07326c99effa839730aa"
  },
  {
    "url": "assets/js/25.01d5d0c9.js",
    "revision": "79332ea6e76963b7afda4cd469f6a7d2"
  },
  {
    "url": "assets/js/26.e1a42b95.js",
    "revision": "66b35b56db49af88f81a20e2d8be6a22"
  },
  {
    "url": "assets/js/27.eb34f2c9.js",
    "revision": "c821c77fba29e737750617689a45b57c"
  },
  {
    "url": "assets/js/28.b440c81b.js",
    "revision": "56f147dcec82d2321931358d6d11b11e"
  },
  {
    "url": "assets/js/29.59a71f6d.js",
    "revision": "e1e4077bf6d381a1c8f0fa3d28efbcf0"
  },
  {
    "url": "assets/js/3.3d544124.js",
    "revision": "9136205e6d9f9942df9996ecba311611"
  },
  {
    "url": "assets/js/30.5c43fedf.js",
    "revision": "96946c712d32ce201b581e4014ab0893"
  },
  {
    "url": "assets/js/31.eafca05e.js",
    "revision": "28835060e456e535610ad522879d40ec"
  },
  {
    "url": "assets/js/32.f81540fd.js",
    "revision": "a5f96fb9315a2a71beb47bbf12ad4e5a"
  },
  {
    "url": "assets/js/33.c7c26ead.js",
    "revision": "d57428c2c128eeaa3361c6c0eb0d5a4c"
  },
  {
    "url": "assets/js/34.515a3f73.js",
    "revision": "fd86af16f8e9e3b32ec3278eed1d56bc"
  },
  {
    "url": "assets/js/35.8437bb19.js",
    "revision": "ee49eb8d28d1bcf1760bc50ccfc7e8cd"
  },
  {
    "url": "assets/js/36.99e40922.js",
    "revision": "2e3920750185ad410fad53303d4cdc6c"
  },
  {
    "url": "assets/js/37.bf2c8bc9.js",
    "revision": "15ab7f7047ad4c7cafd657d60f9fbee0"
  },
  {
    "url": "assets/js/38.f498b5aa.js",
    "revision": "98c3cc8ec62e0083019935ccdc824203"
  },
  {
    "url": "assets/js/39.a20661b7.js",
    "revision": "574b8483c20825896c1c1ce11caa3947"
  },
  {
    "url": "assets/js/4.dda3005b.js",
    "revision": "fbd8c2ecb1af64be9fd83ba7b843918e"
  },
  {
    "url": "assets/js/40.36215ba0.js",
    "revision": "2594770ed005f4f3411ffdf17b9a1161"
  },
  {
    "url": "assets/js/41.c0a58ffb.js",
    "revision": "d286b8b64dea6657a33a489ae28d30b0"
  },
  {
    "url": "assets/js/42.b670d5b6.js",
    "revision": "047005c8a44813691e58b023f1363d02"
  },
  {
    "url": "assets/js/43.80011eac.js",
    "revision": "a1c42d56b6a4ba5d24ac4ebcd09d4705"
  },
  {
    "url": "assets/js/44.dfdd2228.js",
    "revision": "f4eed2cb3b6971fbf35d1ec151b85444"
  },
  {
    "url": "assets/js/45.3431af72.js",
    "revision": "c4e5f48ff2c1eb4519455f2cdd9abf82"
  },
  {
    "url": "assets/js/46.4a492066.js",
    "revision": "27c24e3a294efe3ab391a142cbd33c37"
  },
  {
    "url": "assets/js/47.f3d28a8b.js",
    "revision": "4f398e2de7dfe477c2c2483e2e1124b3"
  },
  {
    "url": "assets/js/48.104680ab.js",
    "revision": "b3746c42667a7c60df158b3c4fcbda07"
  },
  {
    "url": "assets/js/49.1dc15148.js",
    "revision": "93429c7c86606295db6dde608c8db23b"
  },
  {
    "url": "assets/js/5.fd740f62.js",
    "revision": "87abb5d5a1f4b6093dd2ca04ca0ddd34"
  },
  {
    "url": "assets/js/50.3145251a.js",
    "revision": "3b5fe3f548a84c8104544f88c3fccfe6"
  },
  {
    "url": "assets/js/51.fe095eec.js",
    "revision": "7b4c28b2969e5631e7e813596dc3f44c"
  },
  {
    "url": "assets/js/52.e8e5ff0f.js",
    "revision": "10ed7cae177b3b15a3ca5e347bdbc6ad"
  },
  {
    "url": "assets/js/53.6d9177c3.js",
    "revision": "f4737651547a0b05d2e3361bc98eab5f"
  },
  {
    "url": "assets/js/54.ec33a36b.js",
    "revision": "3484554ea47ce99ba13a18c43b09e771"
  },
  {
    "url": "assets/js/6.051e918d.js",
    "revision": "bda05f1d80f7d5224e42ec89f31dda96"
  },
  {
    "url": "assets/js/7.3c977809.js",
    "revision": "56fbc9ec595dcb4b9f8eaf411a12723b"
  },
  {
    "url": "assets/js/9.ff076c72.js",
    "revision": "a8e0040b3c36104838e3e03eff1303bd"
  },
  {
    "url": "assets/js/app.2d80a223.js",
    "revision": "fccd27f4450e846a6f6ff6e237445188"
  },
  {
    "url": "authors/index.html",
    "revision": "b44cfe307f3f4fecf8f220d6b63df223"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "1d45a3e1fbbe36cf4e7c46ec75e08991"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "categories/index.html",
    "revision": "9ddf3db9f64098a53036e226e781e7e9"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "b9698cd3b9c14dc99ed793dfdbd5de70"
  },
  {
    "url": "contact/index.html",
    "revision": "012873a0de81a734b9b316889b88030f"
  },
  {
    "url": "es/autores/index.html",
    "revision": "2d839652265399c334d086b6da83725b"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "c4a331dc85ba0e999c8d4e8179077020"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "be79021e2469e4222be8b3f6d2beef10"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "4fd57c5ada686e58bdc33a0602879319"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "a668bae6167505f6f7139d7e47fe1252"
  },
  {
    "url": "es/index.html",
    "revision": "dbad722d0a48ee6a4e1ba0c7c5506f66"
  },
  {
    "url": "es/posts/index.html",
    "revision": "a2366a4e0f96ce5875eba5be67e62d34"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "e3bdbb758f02ac0c75a24c31f6638232"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "e3ea90ef8c6e53cf2e2da30908109980"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "index.html",
    "revision": "582960104cdad33bdab1c226f2a5e719"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "posts/index.html",
    "revision": "6445a71da16b5bfe9be6231960c90ce2"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "496593bb6e0dfe2ad3e77384b8c8ea73"
  },
  {
    "url": "posts/prueba.html",
    "revision": "555c010c1a3be77d660a528e28098b77"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "d8c57ae40717a9439404c0fefe1ecde4"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "0e24e64ba506dcd236179acec30e9f24"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "0691b804a67d858b1986ca1ec4d8f3f0"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "4105ac4decf2099e84bfb35a7ab06384"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "45f886d1bd8eb89a00568262e6432c3f"
  },
  {
    "url": "pt/index.html",
    "revision": "e950a4a2f01f3c1d3861bfc3447a53f1"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "8348b4f4daabe9e63cc7d074bb57017f"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "582b709ee8b8fe1d6fd5d32ca99ec0ba"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "7a1566b2500b43f1eb5efaab79425d4b"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
