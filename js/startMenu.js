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
  (async function() {
    let b = document.querySelector(".textInputContainer");
    const d = document.getElementById("mainMenu");
    const e = document.getElementById("loading");
    const f = document.getElementById("changelog");
    const g = document.getElementById("loginMenu");
    const h = document.getElementById("canvas");
    const i = h.getContext('2d', {
      'alpha': false
    });
    const j = function() {
      const k = {};
      for (const l of [
          ['./resources/tiles/grass.svg', "grass"]
        ]) {
        const m = new Image();
        m.src = l[0x0];
        m.ready = true;
        k[l[0x1]] = m;
        m.addEventListener("load", () => m.ready = true);
      }
      return k;
    }();

    function o() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      i.textBaseline = "middle";
    }
    window.addEventListener("resize", o);
    o();

    function p(q, r, t) {
      if (!j.grass.ready) {
        return;
      }
      let v = j.grass.width * q;
      let w = j.grass.height * q;
      for (let aa = -r % v; aa <= innerWidth; aa += v) {
        for (let ab = -t % v; ab <= innerHeight; ab += v) {
          if (aa + v < 0x0 || ab + v < 0x0 || aa - v > innerWidth || ab - v > innerHeight) {
            continue;
          }
          i.drawImage(j.grass, aa | 0x0, ab | 0x0, v + 0x1 | 0x0, w + 0x1 | 0x0);
        }
      }
      i.globalAlpha = 0x1;
    }
    let ac = false;
    let ad = Math.max(innerWidth / 0x320, innerHeight / 0x320 / 0x438 * 0x780);
    let ae = 0x0;
    let af = 0x0;
    let ag = {
      'x': 0x0,
      'y': 0x0
    };
    let ah = [];
    let ai = 0x0;
    window.addEventListener("mousemove", function(aj) {
      ag.x = aj.clientX * window.devicePixelRatio;
      ag.y = aj.clientY * window.devicePixelRatio;
    });

    function ak(al, am, an, ao, ap, aq) {
      i.save();
      i.translate(am, an);
      i.rotate(ap);
      i.scale(ao * aq, ao * aq);
      let ar = 0x40 / ao / aq;
      let as = 0x40 / ao / aq;
      i.drawImage(al, -ar / 0x2, -as / 0x2, ar, as);
      i.restore();
    }
    let at = function() {
      let au = 0x0;
      let av = Object.keys(window.petalIcons).sort(() => Math.random() - 0.5);
      return function() {
        au = (au + 0x1) % av.length;
        return window.petalIcons[av[au]];
      };
    };

    function aw() {
      i.clearRect(0x0, 0x0, canvas.width, canvas.height);
      ae = ae + 0.01 * (0x0 - ae);
      af = af + 0.01 * (0x0 - af);
      p(ad, ae + 0.5 | 0x0, af + 0.5 | 0x0);
      if (ah.length < 0xfa && "petalIcons" in window && Object.values(window.petalIcons).length) {
        let ax = false;
        for (let ay = 0x0; ay < 0xfa - ah.length; ay++) {
          if (Math.random() > 0.9995) {
            let az = Math.random() * (canvas.height + innerHeight);
            ah.push({
              'id': ai++,
              'x': -0xa,
              'y': az,
              'yy': az,
              'z': Math.random() * 1.5 + 0x1,
              'yDir': Math.random() > 0.5 ? 0x1 : -0x1,
              'speed': 0x1 + Math.random() * 1.5,
              'spinSpeed': Math.random() * 0.1,
              'angle': 0x0,
              'image': at()
            });
            ax = true;
          }
        }
        if (ax) {
          ah = ah.sort((ba, bb) => ba.z - bb.z);
        }
      }
      for (let bc of ah) {
        bc.x += bc.speed;
        if (bc.x >= innerWidth + canvas.width + 0x64) {
          ah = ah.filter(bd => bd.id !== bc.id);
          continue;
        }
        if (Math.abs(bc.y + bc.yDir - bc.yy) > (bc.z + 0x1) / 0x5 * 0x32 * 0.8 * 0x2) {
          bc.yDir *= -0x1;
        }
        bc.y += bc.yDir * 0.1;
        bc.angle += 0.025 * (bc.speed * 0.667 + bc.spinSpeed);
        ak(bc.image, bc.x - ae, bc.y - af, bc.z, bc.angle, ad);
      }
      if (!ac) {
        requestAnimationFrame(aw);
      }
    }
    let bf = 0x32;

    function bg() {
      let bh = b.style.top;
      bh = +bh.slice(0x0, bh.length - 0x1);
      if (Math.abs(bh - bf) > 0.5) {
        b.style.top = bh + 0.05 * (bf - bh) + '%';
      }
    }
    let bi = false;
    let bj = false;

    function bk() {
      if (!bj) {
        at = at();
        bj = true;
      }
      e.style.display = "none";
      let bl = localStorage.getItem('lastLogin');
      if (!bi && (!bl || Date.now() - bl > 86400000)) {
        g.style.display = "block";
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      } else {
        b = document.getElementById('playButton');
      }
      d.style.display = 'block';
      document.body.classList.add('loaded');
      setInterval(bg, 16.666666666666668);
      bf = 0x32;
      aw();
    }
    const bm = (await (await fetch("/changelog.json")).json()).sort(function bn(bo, bp) {
      return bp.time - bo.time;
    });
    bm.forEach(function bq(br, bs) {
      f.innerHTML += "\n            <h1>" + br.name + "</h1>\n            <ul>\n                " + br.changes.map(function bt(bu) {
        return "<li>" + bu + '</li>';
      }).join('') + "\n            </ul>\n        ";
      if (bs !== bm.length - 0x1) {
        f.innerHTML += "<hr>";
      }
    });
    let bv = false;

    function bw() {
      f.classList.toggle('active');
      bv = !bv;
    }

    function bx() {
      settingsMenu.classList.toggle("active");
    }

    function bz() {
      let ca = document.getElementById('username').value.trim();
      let cb = document.getElementById("password").value.trim();
      let cc = document.getElementById("infoText");
      if (ca.length < 0x3 || !/^[a-zA-Z0-9_]+$/.test(ca)) {
        cc.innerText = "Invalid username";
        return;
      }
      sessionStorage.setItem("username", ca);
      sessionStorage.setItem("password", cb);
      bf = -0x64;
      let cd = setInterval(function() {
        let ce = b.style.top;
        ce = +ce.slice(0x0, ce.length - 0x1);
        if (Math.abs(ce - bf) > 0.5) {
          clearInterval(cd);
          bi = true;
          bk();
        }
      }, 0xfa);
    }
    let cf = false;

    function cg() {
      if (cf) {
        return;
      }
      cf = true;
      d.style.display = "none";
      bf = -0x64;
      let ch = setInterval(function() {
        let ci = b.style.top;
        ci = +ci.slice(0x0, ci.length - 0x1);
        if (Math.abs(ci - bf) > 0.5) {
          clearInterval(ch);
          ac = true;
          window.startGame();
          if (bv) {
            bw();
          }
        }
      }, 0xfa);
    }
    Object.defineProperty(window, "toggleChangelog", {
      'value': bw,
      'writable': false,
      'enumerable': false,
      'configurable': false
    });
    Object.defineProperty(window, "toggleSettingsMenu", {
      'value': bx,
      'writable': false,
      'enumerable': false,
      'configurable': false
    });
    Object.defineProperty(window, 'login', {
      'value': bz,
      'writable': false,
      'enumerable': false,
      'configurable': false
    });
    Object.defineProperty(window, "submit", {
      'value': cg,
      'writable': false,
      'enumerable': false,
      'configurable': false
    });
    Object.defineProperty(window, "loadFunc", {
      'value': bk,
      'writable': false,
      'enumerable': false,
      'configurable': false
    });
    if ("loadScript" in window) {
      window.loadScript();
    }
  })();
}
/*
     FILE ARCHIVED ON 19:01:37 Mar 19, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:37:14 Dec 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 349.465
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.078
  cdx.remote: 0.063
  esindex: 0.01
  LoadShardBlock: 39.188 (3)
  PetaboxLoader3.datanode: 53.006 (5)
  load_resource: 96.51
  PetaboxLoader3.resolve: 33.314
  loaddict: 48.52
*/
