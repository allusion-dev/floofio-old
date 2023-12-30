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
  let location = self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init("location") || self.location;
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
    const j = document.querySelector("canvas");
    const k = j.getContext('2d');
    async function l(m, n = new OffscreenCanvas(0x32, 0x32), o = n.getContext('2d')) {
      return new Promise((p, q) => {
        const r = new Image();
        r.src = m;
        r.addEventListener("load", () => {
          n.width = 0x32;
          n.height = 0x32;
          o.drawImage(r, 0x0, 0x0, 0x32, 0x32);
          p(n);
        });
        r.addEventListener("error", q);
      });
    }
    const t = await async function v() {
      const w = d(this, function() {
        return w.toString().search("(((.+)+)+)+$").toString().constructor(w).search("(((.+)+)+)+$");
      });
      w();
      const z = {
        "garden": k.createPattern(await l('./resources/tiles/grass.svg'), "repeat"),
        "antHole": k.createPattern(await l("./resources/tiles/ant.svg"), "repeat"),
        "desert": k.createPattern(await l("./resources/tiles/desert.svg"), "repeat"),
        ocean: k.createPattern(await l('./resources/tiles/ocean.svg'), "repeat"),
        water: k.createPattern(await l("./resources/tiles/water.svg"), "repeat"),
        "dirt": k.createPattern(await l("./resources/tiles/dirt.svg"), "repeat"),
        "sewer": k.createPattern(await l("./resources/tiles/sewerGrates.svg"), "repeat"),
        "forest": k.createPattern(await l('./resources/tiles/forest.svg'), "repeat"),
        "tundra": k.createPattern(await l('./resources/tiles/tundra.svg'), "repeat")
      };
      return z;
    }();
    const aa = location.hostname.includes("localhost") ? "localhost:3001" : 'us1.ovh.woomy-arras.xyz:3001';
    const ab = [];

    function ac() {
      let ad = Infinity;
      let ae = Infinity;
      let af = -Infinity;
      let ag = -Infinity;
      for (const ah of ab) {
        ad = Math.min(ad, ah.x1);
        ae = Math.min(ae, ah.y1);
        af = Math.max(af, ah.x2);
        ag = Math.max(ag, ah.y2);
      }
      return {
        'width': af - ad,
        'height': ag - ae,
        'minX': ad,
        'minY': ae,
        'spacing': 0x14
      };
    }
    class ai {
      constructor(aj, ak, al, am, an, ao, ap) {
          aj *= 0x64;
          ak *= 0x64;
          al *= 0x64;
          am *= 0x64;
          this.x = aj;
          this.y = ak;
          this.width = al * 0.75;
          this.height = am * 0.75;
          this.x1 = aj - al * 0.75;
          this.y1 = ak - am * 0.75;
          this.x2 = aj + al * 0.75;
          this.y2 = ak + am * 0.75;
          this.type = an;
          this.portals = ao;
          this.name = ap;
          ab.push(this);
        }
        ["draw"]() {
          k.fillStyle = t[["garden", "antHole", "desert", 'ocean', "sewer", 'forest', "tundra"][this.type]];
          k.fillRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
          k.fillStyle = k.strokeStyle = "#000000";
          k.lineWidth = 0.01;
          k.strokeRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
          if (this.portals) {
            for (const aq of this.portals) {
              k.beginPath();
              k.arc(this.x + aq.x * this.width, this.y + aq.y * this.height, 10, 0x0, Math.PI * 0x2);
              k.fill();
              k.stroke();
              k.closePath();
            }
          }
          k.fillStyle = "#FFFFFF";
          k.strokeStyle = "#000000";
          k.lineWidth = 0x3;
          k.strokeText(this.name, this.x, this.y);
          k.fillText(this.name, this.x, this.y);
        }
    }
    const ar = await (await fetch('//' + aa + '/worldMap')).json();
    let as = new Set();

    function at(au, av, aw) {
      au = ar[au];
      if (as.has(au.name)) {
        return;
      }
      as.add(au.name);
      new ai(av + au.x, aw + au.y, au.width, au.height, au.type, au.portals, au.name || "???");
      for (const ax of au.portals) {
        at(ax.leadsTo, av + au.x, aw + au.y);
      }
    }
    at("Spawn", 0x5, 0x5);
    const {
      width: ay,
      height: az,
      minX: ba,
      minY: bb,
      spacing: bc
    } = ac();
    j.width = ay + bc * 0x2;
    j.height = az + bc * 0x2;
    k.textAlign = "center";
    k.textBaseline = "middle";
    k.lineCap = k.lineJoin = 'round';
    k.font = "bold 10px sans-serif";
    k.globalAlpha = 0.85;
    k.fillStyle = t.dirt;
    k.fillRect(0x0, 0x0, j.width, j.height);
    k.globalAlpha = 0x1;
    k.translate(bc, bc);
    k.translate(-ba, -bb);
    for (const bd of ab) {
      bd.draw();
    }
    window.tiles = ab;
    console.log(ac());
  })();
}
/*
     FILE ARCHIVED ON 08:07:40 May 05, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:50:58 Dec 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 74.62
  exclusion.robots: 0.18
  exclusion.robots.policy: 0.163
  cdx.remote: 0.105
  esindex: 0.014
  LoadShardBlock: 32.611 (3)
  PetaboxLoader3.datanode: 50.499 (4)
  load_resource: 55.803
  PetaboxLoader3.resolve: 31.886
*/
