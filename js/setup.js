var _____WB$wombat$assign$function_____ = function(name) {
  return self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function(obj) {
    this.__WB_source = obj;
    return this;
  };
} {
  let window = self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init("window") || self.window;
  let document = self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init("document") || self.document;
  (async function b() {
    const d = function() {
      let e = true;
      return function(f, g) {
        const h = e ? function() {
          if (g) {
            const i = g.apply(f, arguments);
            g = null;
            return i;
          }
        } : function() {};
        e = false;
        return h;
      };
    }();
    async function j(k, l) {
      return new Promise(function(m, n) {
        const o = new Worker(k);
        o.postMessage(l);
        o.onerror = function(p) {
          o.terminate();
          n(p);
        };
        const q = {};
        o.onmessage = function({
          data: r
        }) {
          if (r === "DONE") {
            o.terminate();
            m(q);
            return;
          }
          q[r.key] = r.value;
        };
      });
    }

    function t(v, w = Math.random()) {
      return new Promise((x, y) => {
        let z = new Image();
        z.onload = () => {
          if (w === "LadybugMobGalleryIcon") {
            let aa = document.createElement("canvas");
            let ab = aa.getContext("2d");
            aa.width = z.width;
            aa.height = z.height;
            ab.fillStyle = "#929031";
            ab.globalCompositeOperation = "multiply";
            ab.fillRect(0, 0, aa.width, aa.height);
            ab.translate(aa.width / 2, aa.height / 2);
            ab.rotate(-Math.PI / 4);
            ab.globalAlpha = 0.5;
            ab.globalCompositeOperation = "destination-in";
            ab.drawImage(z, -z.width / 2, -z.height / 2, z.width, z.height);
            aa.floofName = w;
            return x(aa);
          }
          x(z);
        };
        z.onerror = y;
        z.floofName = w;
        z.src = "data:image/svg+xml;base64," + btoa(v);
      });
    }

    function ac(ad, ae) {
      const af = d(this, function() {
        return af.toString().search("(((.+)+)+)+$").toString().constructor(af).search("(((.+)+)+)+$");
      });
      af();
      Object.defineProperty(window, ad, {
        "value": ae,
        "writable": false,
        "configurable": false,
        "enumerable": false
      });
    }
    ac("gameColors", ["#1EA761", "#7EEF6D", "#FFE65D", "#455FCF", "#7633CB", "#C13328", "#1ED2CB", "#FFE763", "#04190E", "#BB5555", "#AAAAAA", "#FFFFFF", "#FFFFFF", "#75DD34", "#EB4034", "#000000", "#FFE763", "#A8711E", "#69462E", "#1A9658", "#DDD17B", "#C7BB6F", "#4E79B0", "#476FA3", "#555555", "#9fa0a0", "#2a2a2a", "#ff2b75", "#2affa3", "#ff7b29", "#895adc", "#a82a01", "#d966e8", "#333333", "#d3a35b"]);
    ac("renderColors", {
      "white": "#FFFFFF",
      "peach": "#FFF0B7",
      "cumWhite": "#ffffC9",
      "black": "#000000",
      "rosePink": "#FC93C5",
      "irisPurple": "#CD75DE",
      "pollenGold": "#FEE86B",
      "peaGreen": "#8CC05B",
      "sandGold": "#DDC758",
      "grapePurple": "#C973D8",
      "leafGreen": "#3AB54A",
      "uraniumLime": "#66BB2A",
      "honeyGold": "#F5D230",
      "lightningTeal": "#00FFFF",
      "rockGray": "#7B727C",
      "stingerBlack": "#222222",
      "cactusGreen": "#39C660",
      "cactusLightGreen": "#75D68F",
      "bubbleGrey": "#B8B8B8",
      "playerYellow": "#FFE763",
      "scorpionBrown": "#C69A2D",
      "diepSquare": "#ffe46b",
      "diepTriangle": "#fc7676",
      "diepPentagon": "#768cfc",
      "ladybugRed": "#EB4034",
      "evilLadybugRed": "#962921",
      "shinyLadybugGold": "#ebeb34",
      "beeYellow": "#FFE763",
      "pincer": "#2a2a2a",
      "antHole": "#A8711E",
      "ants": "#555555",
      "fireAnt": "#a82a01",
      "pharoahAnt": "#d3a35b",
      "wasp": "#9f4627",
      "jellyfish": "#EEEEFF",
      "spider": "#4f412e",
      "darkGreen": "#118240",
      "beetlePurple": "#915db0"
    });
    {
      const ag = await j("./js/workers/petalWorker.js", window.renderColors);
      let ah = await Promise.all(Object.entries(ag).map(([ai, aj]) => t(aj, ai)));
      const ak = {};
      const al = {};
      for (let am of ah) {
        let an = am.floofName;
        an = an.split("_");
        const ao = an.shift();
        an = an.join("_");
        if (ao === "icon") {
          ak[an] = am;
        }
        if (ao === "render") {
          al[an] = am;
        }
      }
      ac("petalIcons", ak);
      ac("petalRenders", al);
    } {
      const ap = await j("./js/workers/mobWorker.js", window.renderColors);
      let aq = await Promise.all(Object.entries(ap).map(([ar, as]) => t(as, ar)));
      const at = {};
      for (let au of aq) {
        at[au.floofName] = au;
      }
      ac("mobIcons", at);
    }
    ac("maximumSocketWorkers", (navigator.hardwareConcurrency ?? 4) - 2);
    ac("floofConfig", new Proxy(JSON.parse(localStorage.getItem("floofConfig") ?? "{}"), {
      "get"(av, aw) {
        return av[aw];
      },
      "set"() {
        Reflect.set(...arguments);
        localStorage.setItem("floofConfig", JSON.stringify(window.floofConfig));
      }
    }));
    window.floofConfig.wipe = function ax() {
      delete localStorage.floofConfig;
      for (let ay in window.floofConfig) {
        if (ay !== "wipe") {
          delete window.floofConfig[ay];
        }
      }
    };
    if ("loadScript" in window) {
      window.loadScript();
    }
  })();
}
/*
     FILE ARCHIVED ON 00:27:31 Mar 20, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:37:14 Dec 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 113.841
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.066
  cdx.remote: 0.058
  esindex: 0.01
  LoadShardBlock: 74.476 (3)
  PetaboxLoader3.datanode: 109.561 (5)
  load_resource: 130.271
  PetaboxLoader3.resolve: 47.476
  loaddict: 22.008
*/
