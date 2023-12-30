var _____WB$wombat$assign$function_____ = function (name) {
  return self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init("window") || self.window;
  let document = self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init("document") || self.document;
  let location = self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init("location") || self.location;
  void !async function () {
    const d = function () {
      let e = true;
      return function (f, i) {
        const j = e ? function () {
          if (i) {
            const n = i.apply(f, arguments);
            i = null;
            return n;
          }
        } : function () {};
        e = false;
        return j;
      };
    }();
    let o = {};
    let p = {};
    let q = 1;
    const r = location.host === 'localhost:3001' || location.host.startsWith("10.0.0.") ? location.host : "us1.ovh.woomy-arras.xyz:3001";
    try {
      const t = await fetch("./static/petals.json");
      o = await t.json();
    } catch (v) {}
    try {
      const aa = await fetch("./static/mobs.json");
      p = await aa.json();
    } catch (ab) {}
    try {
      const ac = await fetch('//' + r + "/ping");
      q = (await ac.json()).tps ?? 30;
    } catch (ad) {
      window.noConnect();
      return;
    }
    let ae = {
      0: new Array(6).fill(0).map(() => Math.floor(Math.random() * 25)),
      1: new Array(6).fill(0).map(() => Math.floor(Math.random() * 25)),
      2: new Array(6).fill(0).map(() => Math.floor(Math.random() * 25))
    };
    let af = [];
    let ag = 0;
    let ah = 1;
    const ai = document.getElementById("canvas");
    const aj = ai.getContext('2d', {
      'alpha': false
    });
    let ak = window.gameColors;
    const al = function () {
      const am = d(this, function () {
        return am.toString().search('(((.+)+)+)+$').toString().constructor(am).search("(((.+)+)+)+$");
      });
      am();
      const an = {};
      for (const ao of [["./resources/tiles/grass.svg", "grass"], ['./resources/tiles/ant.svg', "ant"], ['./resources/tiles/dirt.svg', "dirt"], ['./resources/tiles/desert.svg', "desert"], ['./resources/tiles/ocean.svg', "ocean"], ["./resources/tiles/water.svg", "water"], ["./resources/tiles/sewer.svg", "sewer"], ["./resources/tiles/sewerGrates.svg", "sewerGrates"], ["./resources/tiles/forest.svg", "forest"], ["./resources/tiles/tundra.svg", "tundra"]]) {
        const ap = new Image();
        ap.src = ao[0];
        ap.ready = true;
        an[ao[1]] = ap;
        ap.addEventListener("load", () => ap.ready = true);
      }
      return an;
    }();
    const aq = {
      'GRASS': 0,
      'ANT': 1,
      'DESERT': 2,
      'OCEAN': 3,
      'SEWER': 4,
      'FOREST': 5,
      'TUNDRA': 6
    };
    const ar = {
      0: "Basic",
      1: "Light",
      2: "Faster",
      3: "Stinger",
      4: "Rock",
      5: "Sponge",
      6: "Antennae",
      7: "god",
      8: 'Lightning',
      9: 'Cactus',
      10: "Leaf",
      11: "Egg",
      12: "Ant Egg",
      13: "Hornet Egg",
      14: "Missile",
      15: "Iris",
      16: "Pincer",
      17: 'Magnet',
      18: "Armor",
      19: "Bubble",
      20: "Pearl",
      21: "Shell",
      22: 'Web',
      23: "Wing",
      24: "Third Eye",
      25: "Square",
      26: "Triangle",
      27: "Pentagon",
      28: 'Peas',
      29: "Grapes",
      30: "Salt",
      31: "Walkingstick Egg",
      32: "Peagun",
      33: 'Pollen',
      34: "Rose",
      35: "Dahlia",
      36: 'Primrose',
      37: "Powder"
    };
    let as;
    const at = {
      0: {
        'name': 'Common',
        'color': ak[1],
        'index': 0,
        'absorbValue': 1
      },
      1: {
        'name': "Uncommon",
        'color': ak[2],
        'index': 1,
        'absorbValue': 5
      },
      2: {
        'name': "Rare",
        'color': ak[3],
        'index': 2,
        'absorbValue': 50
      },
      3: {
        'name': 'Epic',
        'color': ak[4],
        'index': 3,
        'absorbValue': 500
      },
      4: {
        'name': "Legendary",
        'color': ak[5],
        'index': 4,
        'absorbValue': 10000
      },
      5: {
        'name': "Mythic",
        'color': ak[6],
        'index': 5,
        'absorbValue': 250000
      },
      6: {
        'name': 'Ultra',
        'color': ak[27],
        'index': 6,
        'absorbValue': 20000000
      },
      7: {
        'name': "Super",
        'color': ak[28],
        'index': 7,
        'absorbValue': 1000000000
      },
      8: {
        'name': "Ancient",
        'color': ak[29],
        'index': 8,
        'absorbValue': 25000000000
      },
      9: {
        'name': 'Omega',
        'color': ak[32],
        'index': 9,
        'absorbValue': 150000000000
      },
      10: {
        'name': "???",
        'color': ak[33],
        'index': 10,
        'absorbValue': 1000000000000
      }
    };
    const au = {
      0: {
        'key': "HEALTH",
        'name': "Max Health",
        'description': "Increases the health of your flower.",
        'tiers': [3, 9, 16, 24, 33, 48, 69, 100]
      },
      1: {
        'key': 'SLOTS',
        'name': "Extra Slot",
        'description': "Unlocks a new petal slot.",
        'tiers': [2, 12, 26, 48, 82]
      },
      3: {
        'key': "RELOAD",
        'name': "Petal Reload",
        'description': "Decreases the reload time of your petals.",
        'tiers': [1, 4, 9, 16, 25, 36, 49, 64]
      },
      4: {
        'key': 'DAMAGE',
        'name': "Body Damage",
        'description': "Increases your flower's collision damage.",
        'tiers': [4, 12, 22, 34, 48]
      }
    };
    function av(aw) {
      if (aw < 1000) {
        return aw;
      }
      if (aw < 1000000) {
        return (aw / 1000).toFixed(1) + 'k';
      }
      if (aw < 1000000000) {
        return (aw / 1000000).toFixed(1) + 'm';
      }
      return (aw / 1000000000).toFixed(1) + 'b';
    }
    class ax {
      constructor() {
        this.commands = [false, false, false, false, false, false];
        this.mouse = {
          'x': 0,
          'y': 0
        };
        this.target = {
          'x': 0,
          'y': 0
        };
        this.elements = new Map();
        ai.addEventListener("mousedown", ay => this.mouseEvent(ay, true), false);
        ai.addEventListener("mouseup", az => this.mouseEvent(az, false), false);
        ai.addEventListener("mousemove", ba => this.mouseMoveEvent(ba), false);
        document.addEventListener("keydown", bb => this.keyEvent(bb, true), false);
        document.addEventListener("keyup", bc => this.keyEvent(bc, false), false);
        this.rwheel = 0;
        this.wheel = 0;
        ai.addEventListener("wheel", bd => this.wheelEvent(bd), false);
        this.inventoryOpen = false;
        this.lastClick = {
          'id': "dummyObject",
          'time': 0
        };
        this.frames = 0;
        this.fps = 0;
      }
      ['wheelEvent'](bf) {
        this.rwheel += bf.deltaY > 0 ? 25 : -25;
      }
      ["keyEvent"](bg, bh) {
        switch (bg.keyCode) {
          case 16:
            this.commands[5] = bh;
            break;
          case 32:
            this.commands[4] = bh;
            break;
          case 38:
          case 87:
            this.commands[0] = bh;
            break;
          case 40:
          case 83:
            this.commands[1] = bh;
            break;
          case 37:
          case 65:
            this.commands[2] = bh;
            break;
          case 39:
          case 68:
            this.commands[3] = bh;
            break;
        }
      }
      ['mouseMoveEvent'](bi) {
        this.mouse.x = bi.clientX;
        this.mouse.y = bi.clientY;
      }
      ["mouseEvent"](bj, bk) {
        if (bj.button === 0) {
          let bl = false;
          if (bk === true) {
            this.mouseMoveEvent(bj);
            const bm = this.getElements();
            for (let bn = bm.length - 1; bn >= 0; bn--) {
              let bo = bm[bn];
              if (bo !== undefined) {
                this.elements.get(bo).click();
                if (this.elements.get(bo).clickable) {
                  this.lastClick = {
                    'timeStamp': Date.now(),
                    'id': bo
                  };
                  bl = true;
                  break;
                }
              }
            }
          }
          if (bl === false) {
            this.commands[4] = bk;
          }
        } else {
          if (bj.button === 2) {
            this.commands[5] = bk;
          }
        }
      }
      ["update"]() {
        let bp = 0;
        let bq = 1;
        for (let br = 0; br < this.commands.length; br++) {
          if (this.commands[br]) {
            bp += bq;
          }
          bq *= 2;
        }
        if (window.floofConfig.mouseMovement && this.getElements().length === 0) {
          bp += 64;
        }
        return bp;
      }
      ["clearElements"]() {
        this.elements.clear();
      }
      ["addElement"](bs, bt, bu, bv, bw, bx = () => {}, bz = true) {
        this.elements.set(bs, {
          'x1': bt,
          'y1': bu,
          'x2': bv,
          'y2': bw,
          'click': bx,
          'clickable': bz
        });
      }
      ["getElements"]() {
        let ca = [];
        for (const [cb, {
          x1: cc,
          y1: cd,
          x2: ce,
          y2: cf
        }] of this.elements) {
          if (this.mouse.x >= cc && this.mouse.x <= ce && this.mouse.y >= cd && this.mouse.y <= cf) {
            ca.push(cb);
          }
        }
        return ca;
      }
    }
    class cg {
      constructor() {
        this.level = 0;
        this.levelProgress = 0;
        this.discordWidget = false;
        this.isDead = false;
        this.width = 0;
        this.height = 0;
        this.playerID = -1;
        this.entities = new Map();
        this.player = null;
        this.petals = [];
        this.scene = 0;
        this.camera = {
          'x': 0,
          'y': 0,
          'fov': 1000,
          'getRatio'() {
            const ch = this.fov;
            return Math.max(innerWidth / ch, innerHeight / ch / 1080 * 1920);
          }
        };
        this.portalObjects = [];
        for (let ci = 0; ci < 50; ci++) {
          this.portalObjects.push({
            'x': 0,
            'y': 0,
            'size': 0.01 + Math.random() * 0.1,
            'speed': 0.001 + Math.random() * 0.03,
            'angle': Math.random() * Math.PI * 2,
            'alpha': 0.2 + Math.random() * 0.3
          });
        }
        this.inventorySelection = [-1, -1];
        this.slotSelection = -1;
        this.absorbSelection = {};
        this.absorbInventory = {};
        this.waves = {
          'enabled': false,
          'wave': 1,
          'progress': 0,
          'progressTarget': 0,
          'mobs': []
        };
      }
      ["selectInventoryItem"](cj, ck) {
        this.inventorySelection = [cj, ck];
        if (this.slotSelection > -1) {
          this.swapItems();
        }
      }
      ["selectSlotItem"](cl) {
        this.slotSelection = cl;
        if (this.inventorySelection[0] > -1) {
          this.swapItems();
        }
      }
      ["swapItems"]() {
        if (this.inventorySelection[0] > -1 && this.slotSelection > -1) {
          this.socket.talk({
            'type': 3,
            'newIndex': this.inventorySelection[0],
            'newRarity': this.inventorySelection[1],
            'oldIndex': this.slotSelection
          });
        }
        this.inventorySelection = [-1, -1];
        this.slotSelection = -1;
      }
      ["update"](cm, cn, co, cp) {
        this.width = cn;
        this.height = co;
        this.scene = cp;
        if (cm !== -1) {
          this.playerID = cm;
          this.player = this.entities.get(cm);
        } else {
          this.player = null;
        }
      }
      ["updatePortalObjects"]() {
        for (let cq = 0; cq < this.portalObjects.length; cq++) {
          let cr = this.portalObjects[cq];
          cr.x += Math.cos(cr.angle) * cr.speed;
          cr.y += Math.sin(cr.angle) * cr.speed;
          if (cr.x < -1 || cr.x > 1 || cr.y < -1 || cr.y > 1) {
            cr.alpha -= cr.speed * 0.25;
            if (cr.alpha <= 0) {
              cr.x = 0;
              cr.y = 0;
              cr.size = 0.01 + Math.random() * 0.1;
              cr.speed = 0.01 + Math.random() * 0.03;
              cr.angle = Math.random() * Math.PI * 2;
              cr.alpha = 0.2 + Math.random() * 0.3;
            }
          }
        }
      }
      ["filterEntities"](cs) {
        for (const ct of this.entities.keys()) {
          if (cs.indexOf(ct) === -1) {
            this.entities['delete'](ct);
          }
        }
      }
    }
    class cu {
      constructor() {
        this.socket = null;
        this.inbound = 0;
        this.outbound = 0;
        this.inboundData = 0;
        this.outboundData = 0;
        this.latency = 0;
        this.server = {
          'fps': 0,
          'tick': 0,
          'entities': 0
        };
        this.world = new cg();
        this.world.socket = this;
        this.username = '';
        this.password = '';
        this.validated = false;
        this.worker = new Worker("./js/workers/packer.js");
        this.workerMap = new Map();
        this.workerJobID = 0;
        this.worker.addEventListener("message", cv => {
          const {
            id: cw,
            data: cx
          } = cv.data;
          this.workerMap.get(cw)(cx);
          this.workerMap["delete"](cw);
        });
      }
      async ['encode'](cy) {
        return new Promise((cz, da) => {
          const db = this.workerJobID++;
          this.workerMap.set(db, cz);
          this.worker.postMessage({
            'type': "encode",
            'id': db,
            'data': cy
          });
        });
      }
      async ["decode"](dc) {
        return new Promise((dd, de) => {
          const df = this.workerJobID++;
          this.workerMap.set(df, dd);
          this.worker.postMessage({
            'type': "decode",
            'id': df,
            'data': dc
          }, [dc]);
        });
      }
      ["validate"]() {
        if (this.validated) {
          return;
        }
        this.validated = true;
        localStorage.setItem('username', this.username);
        localStorage.setItem("password", this.password);
        localStorage.setItem("lastLogin", Date.now());
        this.talk({
          'type': 0,
          'time': performance.now()
        });
        this.talk({
          'type': 1
        });
      }
      ["connect"](dg, dh, di) {
        this.username = dh;
        this.password = di;
        const dj = new WebSocket(dg + '?username=' + encodeURIComponent(dh) + '&password=' + encodeURIComponent(di));
        dj.binaryType = "arraybuffer";
        dj.addEventListener('open', () => this.openEvent());
        dj.addEventListener('close', () => this.closeEvent());
        dj.addEventListener("message", dk => this.messageEvent(dk));
        this.url = dg;
        this.socket = dj;
      }
      ["openEvent"]() {
        console.log("Connected to " + this.url);
      }
      ["closeEvent"]() {
        console.log("Disconnected from " + this.url);
        ah = 0;
        setTimeout(() => location.reload(), 3500);
        if (!this.validated) {
          localStorage.clear();
        }
      }
      async ["talk"](dl) {
        if (this.socket?.["readyState"] !== 1) {
          return;
        }
        const dm = await this.encode(dl);
        switch (dl.type) {
          case 0:
            this.lastPing = performance.now();
            break;
          case 1:
            this.world.isDead = false;
            break;
        }
        this.outbound += dm.byteLength;
        this.socket.send(dm.buffer);
      }
      async ["messageEvent"]({
        data: dn
      }) {
        this.validate();
        const dp = new DataView(dn);
        this.inbound += dp.byteLength;
        let dq = await this.decode(dn);
        let dr = dq.type;
        switch (dr) {
          case 0:
            this.latency = performance.now() - this.lastPing;
            this.server = dq.server;
            setTimeout(() => this.talk({
              'type': 0,
              'time': performance.now()
            }), 1000);
            break;
          case 1:
            this.world.entities.forEach(ds => {
              if (dq.entities[ds.id] === undefined) {
                this.world.entities["delete"](ds.id);
              }
            });
            for (let dt in dq.entities) {
              let du = dq.entities[dt];
              let dv = this.world.entities.get(+dt);
              if (dv === undefined) {
                dv = {
                  'id': +dt,
                  'type': du.type,
                  'size': 1,
                  'animations': {
                    'mouthDip': 0,
                    'mood': 0
                  }
                };
                dv.x = dv.rx = du.x;
                dv.y = dv.ry = du.y;
                dv.rsize = dv.size;
                dv.rotation = dv.rrotation = du.rotation;
                dv.health = {
                  'draws': du.health > 0,
                  'real': du.health,
                  'display': 1,
                  'backbar': 1,
                  'backbarTicker': 50,
                  'alpha': 0
                };
                dv.shield = {
                  'draws': du.shield > 0,
                  'real': du.shield,
                  'display': 0,
                  'alpha': 0
                };
                if (du.index !== undefined) {
                  dv.index = du.index;
                }
                if (du.name !== undefined) {
                  dv.name = du.name;
                }
                if (du.rarity !== undefined) {
                  dv.rarity = at[du.rarity];
                }
                if (du.width !== undefined) {
                  dv.width = du.width;
                }
                if (du.height !== undefined) {
                  dv.height = du.height;
                }
                if (du.points !== undefined) {
                  dv.points = du.points;
                }
                dv.antennae = du.antennae;
                dv.isPoisoned = du.isPoisoned;
                dv.armor = du.armor;
                dv.thirdEye = du.thirdEye;
                dv.attack = du.attack;
                dv.defend = du.defend;
                dv.isPlayerMob = du.isPlayerMob;
              } else {
                dv.rx = du.x;
                dv.ry = du.y;
                dv.rrotation = du.rotation;
                dv.rsize = du.size;
                dv.health.real = du.health;
                dv.shield.real = du.shield;
                dv.shield.draws = du.shield > 0;
                if (du.points !== undefined) {
                  dv.points = du.points;
                }
                dv.antennae = du.antennae;
                dv.isPoisoned = du.isPoisoned;
                dv.armor = du.armor;
                dv.thirdEye = du.thirdEye;
                dv.attack = du.attack;
                dv.defend = du.defend;
                dv.isPlayerMob = du.isPlayerMob;
              }
              this.world.entities.set(+dt, dv);
            }
            if (dq.playerID !== -1) {
              this.world.camera.fov = dq.fov;
              let dw = [];
              for (let dx = 0; dx < dq.petals.length; dx++) {
                let dy = dq.petals[dx];
                let dz = this.world.petals.find((ea, eb) => {
                  return eb === dx && ea.alive === dy.alive && ea.index === dy.index && ea.rarity === at[dy.rarity];
                });
                dw.push({
                  ...dy,
                  'rarity': at[dy.rarity],
                  'ratio': dz ? dz.ratio : dy.ratio,
                  'rratio': dy.ratio,
                  'spinAngle': dz ? dz.spinAngle : 0
                });
              }
              this.world.petals = dw;
            }
            this.world.update(dq.playerID, this.world.width, this.world.height, this.world.scene);
            break;
          case 2:
            af = dq.hardcodedPaths;
            break;
          case 3:
            this.world.update(-1, dq.width, dq.height, dq.scene);
            break;
          case 4:
            if (dq.inventory) {
              ae = dq.inventory;
            }
            if (dq.level !== undefined) {
              const ec = this.world.level;
              const ed = this.world.levelProgress;
              this.world.level = dq.level;
              this.world.levelProgress = dq.levelProgress;
              this.world.skillPoints = dq.skillPoints;
              if (ec !== this.world.level || ed !== this.world.levelProgress) {
                this.world.absorbInventory = JSON.parse(JSON.stringify(ae));
                this.world.absorbSelection = {};
              }
              if (dq.skillInfo !== undefined) {
                this.world.mySkillInfo = dq.skillInfo;
              }
            }
            break;
          case 5:
            this.world.isDead = true;
            break;
          case 6:
            this.world.discordWidget = true;
            break;
          case 7:
            this.world.discordWidget = dq.response ? 4 : 1;
            break;
          case 8:
            this.world.waves = {
              'enabled': dq.enabled,
              'wave': dq.wave ?? 0,
              'progressTarget': dq.progress ?? 0,
              'progress': this.world.waves.progress
            };
            break;
        }
      }
    }
    const ee = new ax();
    const ef = new cu();
    function eg() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      aj.textBaseline = 'middle';
    }
    window.addEventListener("resize", eg);
    eg();
    const eh = function () {
      const ei = {};
      return function (ej, ek, el) {
        const em = '' + ej + ek + el;
        if (ei[em] !== undefined) {
          return ei[em];
        }
        var [ej, en, eo] = ej.match(/\w\w/g).map(ep => parseInt(ep, 16));
        var [ek, eq, er] = ek.match(/\w\w/g).map(es => parseInt(es, 16));
        return ei[em] = '#' + Math.round(ej + (ek - ej) * el).toString(16).padStart(2, '0') + Math.round(en + (eq - en) * el).toString(16).padStart(2, '0') + Math.round(eo + (er - eo) * el).toString(16).padStart(2, '0');
      };
    }();
    function et(eu, ev, ew, ex = ef.world) {
      let ey;
      switch (ex.scene) {
        case 1:
          ey = al.ant;
          break;
        case 2:
          ey = al.desert;
          break;
        case 3:
          ey = al.ocean;
          break;
        case 4:
          ey = al.sewerGrates;
          break;
        case 5:
          ey = al.forest;
          break;
        case 6:
          ey = al.tundra;
          break;
        default:
          ey = al.grass;
          break;
      }
      if (ey === undefined || ey.ready === false) {
        const ez = 12 * eu;
        let fa;
        let fb;
        switch (ex.scene) {
          case 1:
            {
              fa = ak[18];
              fb = ak[17];
            }
            ;
            break;
          case 2:
            {
              fa = ak[20];
              fb = ak[21];
            }
            ;
            break;
          case 3:
            {
              fa = ak[22];
              fb = ak[23];
            }
            ;
            break;
          default:
            {
              fa = ak[0];
              fb = ak[19];
            }
            ;
        }
        aj.fillStyle = fb;
        aj.strokeStyle = ak[15];
        aj.fillRect(0, 0, innerWidth, innerHeight);
        aj.fillStyle = fa;
        aj.fillRect(-ev + innerWidth * 0.5 - ex.width * eu, -ew + innerHeight * 0.5 - ex.height * eu, ex.width * eu * 2, ex.height * eu * 2);
        aj.globalAlpha = 0.04;
        aj.lineWidth = eu;
        for (let fc = (innerWidth * 0.5 - ev) % ez; fc <= innerWidth; fc += ez) {
          aj.beginPath();
          aj.moveTo(fc, 0);
          aj.lineTo(fc, innerHeight);
          aj.stroke();
        }
        for (let fd = (innerHeight * 0.5 - ew) % ez; fd <= innerHeight; fd += ez) {
          aj.beginPath();
          aj.moveTo(0, fd);
          aj.lineTo(innerWidth, fd);
          aj.stroke();
        }
        aj.globalAlpha = 1;
        return;
      }
      aj.clearRect(0, 0, innerWidth, innerHeight);
      aj.save();
      {
        let fe = ex.scene === 4 ? al.sewer : al.dirt;
        let ff = fe.width * eu;
        let fg = fe.height * eu;
        for (let fh = -ev % ff - fg; fh <= innerWidth; fh += ff) {
          for (let fi = -ew % ff - ff; fi <= innerHeight; fi += ff) {
            aj.drawImage(fe, fh - 1 | 0, fi - 1 | 0, ff + 2 | 0, fg + 2 | 0);
          }
        }
      }
      aj.beginPath();
      aj.rect(-ev + innerWidth * 0.5 - ex.width * eu, -ew + innerHeight * 0.5 - ex.height * eu, ex.width * eu * 2, ex.height * eu * 2);
      aj.clip();
      let fj = ey.width * eu;
      let fk = ey.height * eu;
      for (let fl = -ev % fj - fk; fl <= innerWidth; fl += fj) {
        for (let fm = -ew % fj - fj; fm <= innerHeight; fm += fj) {
          aj.drawImage(ey, fl - 1 | 0, fm - 1 | 0, fj + 2 | 0, fk + 2 | 0);
        }
      }
      aj.restore();
    }
    function fn(fo) {
      aj.strokeStyle = eh(fo, ak[15], 0.2);
      aj.fillStyle = fo;
    }
    function fp(fq, fr, fs, ft, fu, fv = true) {
      aj.beginPath();
      switch (fq) {
        case 0:
          {
            const fw = aj.fillStyle;
            if (fv) {
              aj.fillStyle = aj.strokeStyle;
              aj.arc(fr, fs, ft + aj.lineWidth, 0, Math.PI * 2);
              aj.fill();
              aj.closePath();
              aj.beginPath();
            }
            aj.arc(fr, fs, ft, 0, Math.PI * 2);
            aj.fillStyle = fw;
            aj.fill();
            return aj.closePath();
          }
          break;
        default:
          {
            aj.translate(fr, fs);
            aj.rotate(fu);
            if (fq > 0) {
              for (let fx = 0; fx < fq; fx++) {
                const fy = fx / fq * Math.PI * 2;
                aj.lineTo(ft * Math.cos(fy), ft * Math.sin(fy));
              }
            } else {
              const fz = 1 - 7 / fq / fq;
              fq = -fq;
              aj.moveTo(ft, 0);
              for (let ga = 0; ga < fq; ga++) {
                const gc = (ga + 1) / fq * Math.PI * 2;
                const gd = (ga + 0.5) / fq * Math.PI * 2;
                aj.quadraticCurveTo(ft * fz * Math.cos(gd), ft * fz * Math.sin(gd), ft * Math.cos(gc), ft * Math.sin(gc));
              }
            }
            aj.rotate(-fu);
            aj.translate(-fr, -fs);
          }
          ;
          break;
      }
      aj.closePath();
      aj.fill();
      if (fv) {
        aj.stroke();
      }
    }
    function ge(gf, gg, gh, gi, gj) {
      aj.lineCap = aj.lineJoin = "round";
      aj.strokeStyle = gj;
      aj.lineWidth = gi;
      aj.beginPath();
      aj.moveTo(gf, gh);
      aj.lineTo(gg, gh);
      aj.stroke();
    }
    function gk(gl, gm, gn, go, gp, gq = "center") {
      aj.fillStyle = gp;
      aj.font = (go | 0) + "px 'Ubuntu'";
      aj.textAlign = gq;
      aj.strokeStyle = eh(gp, "#000000", 0.8);
      aj.lineWidth = go * 0.15;
      aj.strokeText(gl, gm, gn);
      aj.fillText(gl, gm, gn);
    }
    const gr = {
      'ladybug': new Path2D("M -0.0001 -1 A 1 1 0 0 0 -1 0 A 1 1 0 0 0 0 1 A 1 1 0 0 0 0.8 0.618 A 0.625 0.625 0 0 1 0.25 0 A 0.625 0.625 0 0 1 0.8 -0.6181 A 1 1 0 0 0 0 -1 z"),
      'inventory': new Path2D("M 0.7532 0.0021 C 0.7314 0.0023 0.7162 0.0086 0.7069 0.0239 C 0.6679 0.0881 0.6212 0.155 0.5987 0.2308 C 0.605 0.2326 0.6113 0.2346 0.6174 0.2369 C 0.6337 0.2429 0.6494 0.2506 0.6631 0.26 C 0.7245 0.2056 0.7929 0.1638 0.8581 0.1207 C 0.8834 0.1039 0.8854 0.0918 0.8808 0.0764 C 0.8762 0.061 0.8588 0.0416 0.835 0.0271 C 0.8113 0.0125 0.7818 0.0029 0.7576 0.0022 C 0.7561 0.0021 0.7546 0.0021 0.7532 0.0021 Z M 0.5993 0.0037 C 0.577 0.0034 0.5596 0.0173 0.546 0.0468 C 0.5261 0.0898 0.5232 0.1605 0.5428 0.2237 C 0.543 0.2237 0.5434 0.2237 0.5438 0.2237 C 0.5483 0.2235 0.5526 0.2236 0.5571 0.2237 C 0.5782 0.1497 0.6195 0.0861 0.6553 0.029 C 0.6323 0.011 0.6133 0.004 0.5993 0.0037 Z M 0.3824 0.1276 L 0.3589 0.1605 C 0.392 0.1819 0.4238 0.2024 0.4477 0.2272 C 0.4565 0.2362 0.4642 0.2458 0.4707 0.2562 C 0.4792 0.2461 0.4898 0.2384 0.5012 0.2332 C 0.5021 0.2328 0.5031 0.2325 0.504 0.2321 C 0.4964 0.2205 0.4878 0.21 0.4783 0.2003 C 0.4499 0.1708 0.4154 0.1489 0.3824 0.1276 Z M 0.8813 0.1537 C 0.8161 0.1967 0.7507 0.237 0.6932 0.2873 C 0.6942 0.2884 0.6952 0.2897 0.6961 0.2909 C 0.7422 0.2766 0.8065 0.2584 0.8608 0.2497 C 0.8865 0.2456 0.8958 0.2358 0.9 0.2215 C 0.9044 0.2074 0.901 0.186 0.8882 0.1641 C 0.8862 0.1607 0.8838 0.1571 0.8813 0.1537 Z M 0.382 0.2555 C 0.3487 0.256 0.3158 0.2647 0.284 0.2827 L 0.3053 0.3168 C 0.3536 0.2894 0.4003 0.2867 0.4507 0.3071 C 0.452 0.2952 0.4547 0.2844 0.4591 0.2747 C 0.4598 0.273 0.4607 0.2713 0.4616 0.2697 C 0.4351 0.2601 0.4085 0.2552 0.382 0.2555 Z M 0.551 0.2639 C 0.5385 0.2637 0.5274 0.2654 0.5188 0.2693 C 0.5091 0.2736 0.5022 0.2797 0.4974 0.2905 C 0.4954 0.2949 0.4939 0.3001 0.4929 0.3064 C 0.4939 0.3064 0.495 0.3064 0.496 0.3064 C 0.5318 0.3062 0.5686 0.3122 0.6059 0.3259 C 0.6231 0.3322 0.6394 0.3417 0.655 0.3539 C 0.6623 0.3488 0.6663 0.3439 0.668 0.34 C 0.6706 0.3341 0.6704 0.329 0.6665 0.3213 C 0.6588 0.3058 0.6326 0.2852 0.6022 0.2739 C 0.5869 0.2683 0.571 0.2649 0.5564 0.2641 C 0.5546 0.2639 0.5528 0.2639 0.551 0.2639 Z M 0.4959 0.3457 C 0.4446 0.3459 0.3961 0.3615 0.351 0.3878 C 0.2786 0.43 0.2159 0.5008 0.1717 0.5793 C 0.1277 0.6579 0.1024 0.744 0.1022 0.8145 C 0.1021 0.8849 0.1251 0.9364 0.1753 0.9588 C 0.1755 0.9588 0.1756 0.9588 0.1757 0.9588 H 0.1757 C 0.2312 0.9833 0.322 1 0.4174 1.0016 C 0.5128 1.0032 0.6133 0.99 0.6892 0.9587 C 0.7381 0.9385 0.7662 0.8981 0.7795 0.8434 C 0.7927 0.7887 0.7896 0.7208 0.7742 0.6534 C 0.7588 0.586 0.7314 0.5192 0.6982 0.4665 C 0.665 0.4136 0.6255 0.3757 0.5911 0.3631 C 0.5584 0.3511 0.5266 0.3456 0.4959 0.3457 Z"),
      'skills': new Path2D("M 0.5864 0.0479 C 0.5069 0.0486 0.4276 0.0747 0.3618 0.1261 C 0.5068 0.0532 0.6888 0.0769 0.8097 0.1978 C 0.9307 0.3188 0.9535 0.4999 0.8806 0.6449 C 0.994 0.4997 0.9851 0.2896 0.8515 0.156 C 0.7785 0.083 0.6823 0.047 0.5864 0.0479 Z M 0.5327 0.1721 C 0.4596 0.173 0.3867 0.2003 0.33 0.2542 C 0.4483 0.1825 0.6049 0.1984 0.7071 0.3005 C 0.8092 0.4027 0.8242 0.5583 0.7525 0.6767 C 0.8637 0.5597 0.8627 0.3744 0.7479 0.2596 C 0.6887 0.2004 0.6106 0.1713 0.5327 0.1721 Z M 0.5 0.2893 C 0.4443 0.2893 0.3886 0.3106 0.3461 0.3531 C 0.2611 0.4381 0.2611 0.576 0.3461 0.661 C 0.4311 0.746 0.5689 0.746 0.654 0.661 C 0.739 0.576 0.739 0.4381 0.654 0.3531 C 0.6114 0.3106 0.5557 0.2893 0.5 0.2893 Z M 0.2389 0.3452 C 0.1277 0.4623 0.1296 0.6484 0.2444 0.7632 C 0.3592 0.878 0.5444 0.879 0.6614 0.7677 C 0.5431 0.8394 0.3874 0.8245 0.2853 0.7223 C 0.1831 0.6201 0.1673 0.4636 0.2389 0.3452 Z M 0.1108 0.377 C -0.0026 0.5222 0.0073 0.7332 0.1408 0.8668 C 0.2743 1.0003 0.4845 1.0092 0.6296 0.8958 C 0.4847 0.9687 0.3035 0.9459 0.1826 0.825 C 0.0617 0.704 0.038 0.522 0.1108 0.377 Z"),
      'absorb': new Path2D("M 0.1944 0.2758 a 0.3456 0.3456 90 0 0 -0.0407 0.0483 a 0.2211 0.2211 90 1 1 0.4149 -0.1199 a 0.3418 0.3418 90 0 0 -0.1295 -0.027 h -0.0044 a 0.3402 0.3402 90 0 0 -0.2403 0.0986 z m 0.236 0.5858 A 0.3427 0.3427 90 0 1 0.1072 0.6189 a 0.2211 0.2211 90 1 0 0.3627 0.2409 a 0.3474 0.3474 90 0 1 -0.035 0.0018 h -0.0044 z m 0.2786 -0.5151 h -0.0024 a 0.1885 0.1885 90 0 0 -0.0023 0.377 h 0.0024 a 0.1885 0.1885 90 0 0 0.0023 -0.377 z m -0.2334 0.1856 a 0.2313 0.2313 90 0 1 0.1744 -0.2211 a 0.2987 0.2987 90 0 0 -0.2115 -0.0912 h -0.0039 a 0.2997 0.2997 90 0 0 -0.0037 0.5993 h 0.0039 a 0.2984 0.2984 90 0 0 0.19 -0.068 a 0.2314 0.2314 90 0 1 -0.1493 -0.219 z"),
      'settings': new Path2D("m.945.401h-.053c-.01-.038-.025-.074-.045-.107l.038-.038c.01-.01.016-.024.016-.039 0-.015-.006-.028-.016-.039l-.063-.063c-.021-.021-.057-.021-.077 0l-.04.039c-.033-.019-.067-.034-.106-.043v-.057c0-.03-.024-.055-.054-.055h-.09c-.03 0-.054.025-.054.055v.057c-.038.009-.073.024-.106.043l-.04-.039c-.021-.021-.057-.021-.077 0l-.063.063c-.01.01-.016.024-.016.039 0 .015.006.028.016.039l.038.038c-.02.033-.035.069-.045.107h-.053c-.03 0-.054.024-.054.054v.09c0 .03.024.054.054.054h.053c.01.038.025.075.045.107l-.038.038c-.01.01-.016.024-.016.039s.006.028.016.039l.063.063c.01.01.024.016.039.016s.028-.006.039-.016l.04-.039c.033.019.068.034.106.043v.057c0 .03.024.054.054.054h.09c.03 0 .054-.024.054-.054v-.057c.038-.009.073-.024.106-.043l.039.039c.01.01.024.016.039.016.015 0 .028-.006.039-.016l.063-.063c.01-.01.016-.024.016-.039 0-.015-.006-.028-.016-.039l-.038-.038c.02-.033.035-.069.045-.107h.053c.03 0 .055-.024.055-.054v-.09c0-.03-.025-.054-.055-.054zm-.445.27c-.095 0-.172-.076-.172-.171 0-.094.077-.171.172-.171.095 0 .172.076.172.171 0 .094-.077.171-.172.171z")
    };
    function gs(gt, gu, gv, gw, gx) {
      fn(gx);
      aj.save();
      aj.strokeStyle = ak[26];
      aj.lineWidth *= 1.5;
      const gy = Math.sin(performance.now() * 0.02 + gw) * 0.1;
      aj.beginPath();
      aj.moveTo(0, -gv * 0.8);
      aj.rotate(gy);
      aj.lineTo(gv * 1.8, -gv * 0.425);
      aj.closePath();
      aj.stroke();
      aj.rotate(-gy);
      aj.beginPath();
      aj.moveTo(0, gv * 0.8);
      aj.rotate(-gy);
      aj.lineTo(gv * 1.8, gv * 0.425);
      aj.closePath();
      aj.stroke();
      aj.restore();
      fp(0, gt, gu, gv, 0, true);
    }
    function gz(ha, hb, hc, hd, he, hf, hg, hh = 0, hi = {}) {
      const hj = he * hf;
      aj.translate(hc, hd);
      aj.rotate(hg);
      const hk = Math.abs(hi.health.display - hi.health.real);
      const hl = hk && hk > 0.025 ? 0.5 : 0;
      hi.health.display = hi.health.display + 0.075 * (hi.health.real - hi.health.display);
      hi.shield.display = hi.shield.display + 0.075 * (hi.shield.real - hi.shield.display);
      if (hk < 0.01) {
        hi.health.backbar = hi.health.backbar + 0.1 * (hi.health.real - hi.health.backbar);
      }
      switch (ha) {
        case 1:
          {
            aj.lineWidth = hj * 0.1;
            let hm = ak[7];
            if (hi.isPoisoned) {
              hm = eh(hm, ak[30], 0.85);
            }
            if (hi.armor) {
              let hn = window.petalIcons.Armor_0;
              if (hn) {
                let ho = performance.now() / 333.3333333333333 * (hi.id % 2 ? -1 : 1);
                aj.rotate(ho - hg);
                aj.drawImage(hn, -hj * 2.9, -hj * 2.9, hj * 5.8, hj * 5.8);
                aj.rotate(-ho + hg);
              }
            }
            fn(eh(hm, "#FFFFFF", hl));
            fp(0, 0, 0, hj, hg);
            aj.rotate(-hg);
            hq(aj, hi, hi.attack ? 2 : hi.defend ? 3 : 1, hj, hg);
            aj.rotate(hg);
            if (hi.antennae) {
              let hr = window.petalIcons.Antennae_0;
              if (hr) {
                aj.rotate(-hg);
                aj.drawImage(hr, -hj * 1.25, -hj * 2.667, hj * 2.5, hj * 2.5);
                aj.rotate(hg);
              }
            }
            if (hi.thirdEye) {
              let hs = window.petalIcons["Third Eye_0"];
              if (hs) {
                aj.rotate(-hg);
                aj.drawImage(hs, -hj * 0.6, -hj, hj * 1.2, hj * 1.2);
                aj.rotate(hg);
              }
            }
          }
          ;
          break;
        case 2:
          {
            let ht;
            switch (hb) {
              case 0:
              case 1:
                ht = window.petalRenders.Basic_0;
                break;
              case 3:
                ht = window.petalRenders.Stinger_0;
                break;
              case 12:
                ht = window.petalRenders.SingleEgg_0;
                break;
              case 13:
                ht = window.petalRenders.Egg_7;
                break;
              case 35:
                ht = window.petalRenders.Rose_0;
                break;
              case 36:
                aj.save();
                aj.globalAlpha = 0.2;
                aj.beginPath();
                aj.arc(0, 0, Math.abs(hj * 1.5 + Math.sin(hi.id + performance.now() / 750) * hj * 4), 0, Math.PI * 2);
                aj.closePath();
                aj.fillStyle = "#FFFFFF";
                aj.fill();
                aj.restore();
                ht = window.petalRenders[ar[hb] + '_' + hi.rarity.index];
                break;
              default:
                ht = window.petalRenders[ar[hb] + '_' + hi.rarity.index];
            }
            aj.drawImage(ht, -hj * 2, -hj * 2, hj * 4, hj * 4);
          }
          break;
        case 3:
          {
            let hu;
            let hv = 2;
            switch (hb) {
              case 0:
                {
                  hu = mobIcons["Ladybug_" + hi.id % 10];
                }
                ;
                break;
              case 1:
                {
                  hu = mobIcons.Bee;
                  hv = 3.5;
                }
                ;
                break;
              case 2:
              case 3:
              case 4:
              case 5:
              case 15:
              case 16:
              case 17:
              case 18:
              case 32:
              case 33:
              case 34:
              case 35:
                {
                  let hw = hi.isPlayerMob ? ak[7] : hb > 31 ? ak[34] : hb > 5 ? ak[31] : ak[24];
                  aj.save();
                  fn(eh(hw, "#FFFFFF", hl));
                  aj.lineWidth = 0.4;
                  aj.scale(hj, hj);
                  switch (hb) {
                    case 2:
                    case 15:
                    case 32:
                      gs(0, 0, 1, hi.id, eh(hw, "#FFFFFF", hl));
                      break;
                    case 3:
                    case 16:
                    case 33:
                      fp(0, -1.1, 0, 0.667, 0, true);
                      gs(0, 0, 1, hi.id, eh(hw, '#FFFFFF', hl));
                      break;
                    case 4:
                    case 17:
                    case 34:
                      fp(0, -1.1, 0, 0.667, 0, true);
                      const hx = Math.sin(performance.now() * 0.01 + hi.id) * 0.3 + Math.PI / 10;
                      aj.save();
                      aj.globalAlpha = 0.5;
                      aj.fillStyle = eh(ak[25], "#FFFFFF", hl);
                      aj.rotate(hx);
                      aj.beginPath();
                      aj.moveTo(0, 0);
                      aj.ellipse(-1, -0.3, 1.35, 0.5, 0, 0, Math.PI * 2);
                      aj.rotate(-hx * 2);
                      aj.ellipse(-1, 0.3, 1.35, 0.5, 0, 0, Math.PI * 2);
                      aj.closePath();
                      aj.fill();
                      aj.restore();
                      gs(0, 0, 1, hi.id, eh(hw, "#FFFFFF", hl));
                      break;
                    case 5:
                    case 18:
                    case 35:
                      aj.lineWidth *= 0.8;
                      fp(0, -2, 0, 1.3, 0, true);
                      fp(0, -1.1, 0, 1.15, 0, true);
                      const hy = Math.sin(performance.now() * 0.01 + hi.id) * 0.3 + Math.PI / 10;
                      aj.save();
                      aj.globalAlpha = 0.5;
                      aj.fillStyle = eh(ak[25], "#FFFFFF", hl);
                      aj.rotate(hy);
                      aj.beginPath();
                      aj.moveTo(0, 0);
                      aj.ellipse(-1, -0.3, 1.35, 0.5, 0, 0, Math.PI * 2);
                      aj.rotate(-hy * 2);
                      aj.ellipse(-1, 0.3, 1.35, 0.5, 0, 0, Math.PI * 2);
                      aj.closePath();
                      aj.fill();
                      aj.restore();
                      gs(0, 0, 1, hi.id, eh(hw, "#FFFFFF", hl));
                      break;
                  }
                  aj.restore();
                }
                break;
              case 6:
                hu = mobIcons["Ant Hole"];
                break;
              case 19:
                hu = mobIcons["Fire Ant Hole"];
                break;
              case 36:
                hu = mobIcons["Pharaoh Ant Hole"];
                break;
              case 7:
                hu = mobIcons["Rock_" + hi.rarity.index];
                break;
              case 8:
                hu = mobIcons["Sponge_" + hi.id % 3];
                break;
              case 9:
                {
                  hu = mobIcons.Hornet;
                  hv = 3.5;
                }
                ;
                break;
              case 10:
                hu = mobIcons.Bubble;
                break;
              case 11:
                aj.save();
                aj.lineWidth = 0.125;
                aj.scale(hj, hj);
                fn(eh("#DFDFDF", "#FFFFFF", hl));
                aj.beginPath();
                aj.arc(0, 0, 1, 0, Math.PI * 2);
                aj.closePath();
                aj.globalAlpha = 0.5;
                aj.fill();
                aj.globalAlpha = 1;
                aj.stroke();
                for (let hz = 0; hz < 8; hz++) {
                  aj.save();
                  aj.rotate(Math.PI * 2 / 8 * hz);
                  aj.beginPath();
                  aj.moveTo(0.8, 0);
                  let ia = Math.sin(performance.now() * 0.00125 + hi.id) * 0.3;
                  aj.lineTo(1.6, ia * (hz % 2 == 0 ? 1 : 0.8));
                  aj.closePath();
                  aj.stroke();
                  aj.restore();
                }
                aj.restore();
                break;
              case 12:
                hu = mobIcons['Cactus_' + hi.rarity.index];
                break;
              case 13:
                {
                  aj.save();
                  aj.scale(hj, hj);
                  let ib = Math.sin(performance.now() * 0.01 + hi.id) * 0.05;
                  aj.rotate(ib);
                  aj.drawImage(window.mobIcons.Pincer, 0.575, -1, 1, 1.334);
                  aj.rotate(-ib * 2);
                  aj.scale(1, -1);
                  aj.drawImage(window.mobIcons.Pincer, 0.575, -1, 1, 1.334);
                  aj.restore();
                }
                aj.drawImage(window.mobIcons[hi.isPlayerMob ? 'Beetle_Body_Player' : "Beetle_Body"], -hj, -hj, hj * 2, hj * 2);
                break;
              case 14:
                {
                  aj.strokeStyle = "#444444";
                  aj.save();
                  aj.scale(hj, hj);
                  aj.lineWidth = 0.1;
                  let ic = Math.sin(performance.now() * 0.01 + hi.id) * 0.05;
                  let ie = Math.sin(performance.now() * 0.01 + hi.id + Math.PI / 3) * 0.05;
                  let ig = Math.sin(performance.now() * 0.01 + hi.id + Math.PI / 3 * 2) * 0.05;
                  aj.rotate(ic);
                  aj.beginPath();
                  aj.moveTo(0.45, 0);
                  aj.lineTo(0.45, 0.725);
                  aj.closePath();
                  aj.stroke();
                  aj.beginPath();
                  aj.moveTo(0.45, 0);
                  aj.lineTo(0.45, -0.725);
                  aj.closePath();
                  aj.stroke();
                  aj.rotate(-ic + ie);
                  aj.beginPath();
                  aj.moveTo(0.1, 0);
                  aj.lineTo(0, 0.8);
                  aj.closePath();
                  aj.stroke();
                  aj.beginPath();
                  aj.moveTo(0.1, 0);
                  aj.lineTo(0, -0.775);
                  aj.closePath();
                  aj.stroke();
                  aj.rotate(-ie - ig);
                  aj.beginPath();
                  aj.moveTo(-0.5, 0);
                  aj.lineTo(-0.5, 0.775);
                  aj.closePath();
                  aj.stroke();
                  aj.beginPath();
                  aj.moveTo(-0.5, 0);
                  aj.lineTo(-0.5, -0.8);
                  aj.closePath();
                  aj.stroke();
                  aj.restore();
                }
                {
                  aj.save();
                  aj.scale(hj, hj);
                  let ih = Math.sin(performance.now() * 0.01 + hi.id) * 0.05;
                  aj.rotate(ih);
                  aj.drawImage(window.mobIcons.Pincer, 0.3, -0.7, 0.675, 0.8);
                  aj.rotate(-ih * 2);
                  aj.scale(1, -1);
                  aj.drawImage(window.mobIcons.Pincer, 0.3, -0.7, 0.675, 0.8);
                  aj.restore();
                }
                aj.drawImage(window.mobIcons.Scorpion_Body, -hj, -hj, hj * 2, hj * 2);
                break;
              case 20:
                hu = window.mobIcons.Shell;
                break;
              case 21:
                aj.save();
                fn(eh(ak[24], "#FFFFFF", hl));
                aj.scale(hj, hj);
                aj.lineWidth = 0.25;
                aj.beginPath();
                {
                  let ii = Math.sin(performance.now() * 0.01 + hi.id) * 0.05 * 0.5;
                  aj.rotate(ii);
                  aj.moveTo(0.9, -0.7);
                  aj.bezierCurveTo(1.1, -1.1, 1.7, -1.3, 1.5, -2);
                  aj.rotate(-ii);
                }
                {
                  let ij = Math.sin(performance.now() * 0.02 + hi.id) * 0.05 * 0.75;
                  aj.rotate(ij);
                  aj.moveTo(0.9, 0.7);
                  aj.bezierCurveTo(1.1, 1.1, 1.7, 1.3, 1.5, 2);
                  aj.rotate(-ij);
                }
                {
                  let ik = Math.sin(performance.now() * 0.0125 + hi.id) * 0.05 * 0.125;
                  aj.rotate(ik);
                  aj.moveTo(-0.9, -0.7);
                  aj.bezierCurveTo(-1.1, -1.1, -1.7, -1.3, -1.4, -1.9);
                  aj.rotate(-ik);
                }
                {
                  let il = Math.sin(performance.now() * 0.03 + hi.id) * 0.05 * 0.75;
                  aj.rotate(il);
                  aj.moveTo(-0.9, 0.7);
                  aj.bezierCurveTo(-1.1, 1.1, -1.7, 1.3, -1.4, 1.9);
                  aj.rotate(-il);
                }
                {
                  let im = Math.sin(performance.now() * 0.015 + hi.id) * 0.05 * 0.625;
                  aj.rotate(im);
                  aj.moveTo(0.3, 0.8);
                  aj.bezierCurveTo(0.5, 1.1, 0.9, 1.3, 0.9, 1.8);
                  aj.rotate(-im);
                }
                {
                  let io = Math.sin(performance.now() * 0.025 + hi.id) * 0.05 * 0.25;
                  aj.rotate(io);
                  aj.moveTo(0.3, -0.8);
                  aj.bezierCurveTo(0.5, -1.1, 0.9, -1.3, 0.9, -1.8);
                  aj.rotate(-io);
                }
                {
                  let ip = Math.sin(performance.now() * 0.01 + hi.id) * 0.05 * 0.875;
                  aj.rotate(ip);
                  aj.moveTo(-0.3, 0.8);
                  aj.bezierCurveTo(-0.5, 1.1, -0.9, 1.3, -0.9, 1.8);
                  aj.rotate(-ip);
                }
                {
                  let iq = Math.sin(performance.now() * 0.03 + hi.id) * 0.05 * 0.375;
                  aj.rotate(iq);
                  aj.moveTo(-0.3, -0.8);
                  aj.bezierCurveTo(-0.5, -1.1, -0.9, -1.3, -0.9, -1.8);
                  aj.rotate(-iq);
                }
                aj.stroke();
                aj.closePath();
                fp(0, 0, 0, 1, 0);
                aj.restore();
                break;
              case 22:
                hu = window.mobIcons.Web;
                break;
              case 23:
                fn(eh(ak[24], '#FFFFFF', hl));
                aj.lineWidth = hj * 0.15;
                fp(0, 0, 0, hj, 0);
                const ir = Math.sin(performance.now() * 0.01 + hi.id) * 0.35 + Math.PI / 10;
                aj.save();
                aj.globalAlpha = 0.5;
                aj.scale(hj * 1.25, hj * 1.25);
                aj.translate(0, -0.5);
                aj.rotate(ir);
                aj.drawImage(window.mobIcons.Wing, -0.5, -0.5, 1, 1);
                aj.rotate(-ir);
                aj.translate(0, 1);
                aj.rotate(-ir);
                aj.drawImage(window.mobIcons.Wing, -0.5, -0.5, 1, 1);
                aj.restore();
                break;
              case 24:
                hu = window.mobIcons.Square;
                break;
              case 25:
                hu = window.mobIcons.Triangle;
                break;
              case 26:
                hu = window.mobIcons.Pentagon;
                break;
              case 27:
                hu = window.mobIcons.Wasp;
                hv = 3.5;
                break;
              case 28:
                hu = window.mobIcons["Evil Ladybug_" + hi.id % 10];
                break;
              case 29:
                hu = window.mobIcons["Shrub_" + hi.id % 10];
                break;
              case 30:
                hu = window.mobIcons.WalkingstickBody;
                aj.save();
                hi.stickbugRotate = (hi.stickbugRotate || 0) + 0.16666666666666666 * ((hi.rstickBugRotate || 0) - (hi.stickbugRotate || 0));
                aj.rotate(hi.stickbugRotate);
                aj.drawImage(window.mobIcons.WalkingstickLegs, -hj * (hv / 2), -hj * (hv / 2), hj * hv, hj * hv);
                aj.restore();
                break;
              case 31:
                hu = window.mobIcons["Shiny Ladybug_" + hi.id % 10];
                break;
              case 37:
                hu = window.mobIcons.CentipedeHead;
                hv = 3;
                break;
              case 38:
                hu = window.mobIcons.CentipedeSegment;
                hv = 3;
                break;
              case 39:
                hu = window.mobIcons.EvilCentipedeHead;
                hv = 3;
                break;
              case 40:
                hu = window.mobIcons.EvilCentipedeSegment;
                hv = 3;
                break;
              case 41:
                hu = window.mobIcons.DesertCentipedeHead;
                hv = 3;
                break;
              case 42:
                hu = window.mobIcons.DesertCentipedeSegment;
                hv = 3;
                break;
              case 43:
                hu = window.mobIcons.DemonCoreBody;
                hv = 2.5;
                break;
              case 44:
                hu = window.mobIcons.DemonCoreOrb;
                hv = 2.5;
                hi.health.draws = false;
                break;
            }
            if (hu) {
              aj.drawImage(hu, -hj * (hv / 2), -hj * (hv / 2), hj * hv, hj * hv);
            }
          }
          ;
          break;
        case 6:
          {
            let is = hj * hi.width;
            let iu = hj * hi.height;
            fn(ak[18], "#000000", 0.2);
            aj.fillRect(-is - 1, -iu - 1, is * 2 + 2, iu * 2 + 2);
          }
          break;
        case 8:
          fn('#FFFFFF');
          aj.lineWidth = hj * 0.05;
          aj.globalAlpha = 0.3333333333333333;
          fp(0, 0, 0, hj, 0, false);
          fp(6, 0, 0, hj * 0.9, performance.now() / 500, true);
          fp(6, 0, 0, hj * 0.7, -performance.now() / 400, true);
          fp(6, 0, 0, hj * 0.5, performance.now() / 300, true);
          fp(6, 0, 0, hj * 0.3, -performance.now() / 200, true);
          ef.world.portalObjects.forEach(function iv(iw) {
            aj.globalAlpha = iw.alpha;
            fp(0, iw.x * hj, iw.y * hj, hj * iw.size, 0, false);
          });
          aj.globalAlpha = 1;
          break;
        case 5:
          fn(hi.rarity.color);
          aj.lineWidth = hj * 0.1;
          aj.globalAlpha = 0.9;
          fp(4, 0, 0, hj, Math.PI / 4);
          {
            let ix = window.petalIcons[ar[hi.index] + '_' + hi.rarity.index];
            if (ix) {
              aj.drawImage(ix, -hj * 0.8, -hj * 0.8, hj * 1.6, hj * 1.6);
            }
          }
          gk(ar[hi.index], 0, hj * 0.5, hj / 2.5, "#FFFFFF", "center");
          aj.globalAlpha = 1;
          break;
        case 4:
          switch (hi.index) {
            case 0:
              aj.drawImage(window.petalRenders.Missile_0, -hj * 2, -hj * 2, hj * 4, hj * 4);
              break;
            case 1:
              aj.save();
              aj.lineWidth = 2;
              aj.beginPath();
              aj.moveTo(0, 0);
              if (hi.points) {
                for (let iy = 0; iy < hi.points.length; iy++) {
                  aj.lineTo(hi.points[iy].x * hf, hi.points[iy].y * hf);
                }
              }
              aj.strokeStyle = "#FFFFFF";
              aj.stroke();
              aj.restore();
              break;
            case 2:
              aj.drawImage(window.mobIcons.ScorpionStinger, -hj, -hj, hj * 2, hj * 2);
              break;
            case 3:
              aj.drawImage(window.petalRenders.SingularPea_0, -hj, -hj, hj * 2, hj * 2);
              break;
            case 4:
              aj.drawImage(window.petalRenders.SingularGrape_0, -hj, -hj, hj * 2, hj * 2);
              break;
            case 5:
              aj.drawImage(window.petalRenders.Rose_0, -hj, -hj, hj * 2, hj * 2);
              break;
            case 6:
              aj.drawImage(window.mobIcons.DemonCoreMissile, -hj, -hj, hj * 2, hj * 2);
              break;
          }
          break;
      }
      aj.rotate(-hg);
      if (hi.health.draws && hi.index !== 22) {
        let iz = Math.max(hj * 2, 30 * hf);
        let ja = -iz / 2;
        let jb = iz / 2;
        let jc = hj + 18 * hf;
        if (hi.rarity) {
          gk(hi.rarity.name, jb, jc + 6 * hf, 5 * hf, hi.rarity.color, 'right');
        }
        if (hi.name) {
          gk(hi.name, ja, jc - 6 * hf, 5 * hf, "#FFFFFF", 'left');
        }
        ge(ja, jb, jc, 3 * hf, ak[15]);
        aj.globalAlpha *= 0.5;
        ge(ja, ja + iz * hi.health.backbar, jc, 1 * hf, ak[14]);
        aj.globalAlpha *= 2;
        ge(ja, ja + iz * hi.health.display, jc, 2 * hf, ak[13]);
        if (hi.shield.draws) {
          ge(ja, ja + iz * hi.shield.display, jc, 1.75 * hf, '#FFFFFF');
        }
      }
      aj.translate(-hc, -hd);
    }
    const jd = function () {
      function je(jf, jg, jh, ji, jj, jk = true, jl = true) {
        fn(jj);
        aj.beginPath();
        aj.rect(jf, jg, jh, ji);
        aj.closePath();
        if (jk) {
          aj.fill();
        }
        if (jl) {
          aj.lineWidth = 4;
          aj.stroke();
        }
      }
      function jm(jn, jo, jp, jq, jr, jt, ju) {
        fn(jr);
        aj.beginPath();
        aj.rect(jn, jo, jp, jq);
        aj.closePath();
        if (jt) {
          aj.fill();
        }
        if (ju) {
          aj.lineWidth = 5;
          aj.stroke();
        }
      }
      function jv(jw, jx, jy, jz, ka, kc, kd = eh(jz, '#000000', 0.2)) {
        if (kc) {
          ka.spinAngle += 0.05 + ka.ratio / 5;
        }
        let ke = jy / 2;
        aj.save();
        aj.fillStyle = eh(kd, "#000000", 0.334);
        aj.beginPath();
        aj.rect(jw - 2.5, jx - 2.5, jy + 5, jy + 5);
        aj.closePath();
        aj.fill();
        aj.clip();
        aj.fillStyle = jz;
        aj.beginPath();
        aj.arc(jw + ke, jx + ke, jy, ka.spinAngle, ka.spinAngle + Math.PI * 2 * ka.ratio);
        aj.lineTo(jw + ke, jx + ke);
        aj.closePath();
        aj.fill();
        aj.strokeStyle = kd;
        aj.lineWidth = 5;
        aj.strokeRect(jw, jx, jy, jy);
        aj.restore();
        return ka;
      }
      function kf(kg) {
        const kh = innerWidth * 0.5;
        const ki = innerHeight - 20 - 65;
        let kj = 0;
        for (let kk = kg.petals.length; kj < kk; kj++) {
          let kl = kg.petals[kj];
          kl.ratio = kl.ratio + 0.125 * (kl.rratio - kl.ratio);
          kl.ratio = Math.max(0, Math.min(1, kl.ratio));
          const km = 79 * kk * 0.5 - 79 * kj;
          if (kl.alive) {
            jm(kh - km, ki, 65, 65, eh(kl.rarity.color, "#000000", 0.334), true, false);
            jm(kh - km, ki + 65, 65, -65 * kl.ratio, kl.rarity.color, true, false);
            jm(kh - km, ki, 65, 65, kl.rarity.color, false, true);
          } else {
            jv(kh - km, ki, 65, kl.rarity.color, kl, true);
          }
          let kn = window.petalIcons[ar[kl.index] + '_' + kl.rarity.index];
          if (kn) {
            aj.drawImage(kn, kh - km + 6.5, ki, 52, 52);
          }
          gk(ar[kl.index], kh - km + 32.5, ki + 52, 13, "#ffffff", 'center');
          ee.addElement("actionBar" + kj, kh - km, ki, kh - km + 65, ki + 65, () => {
            if (kg.player !== null) {
              kg.selectSlotItem(kj);
            }
          });
        }
      }
      let ko = 160;
      function kp(kq) {
        ko = ko + 0.125 * ((kq.includes('minimap') ? 240 : 160) - ko);
        aj.fillStyle = ak[15];
        aj.fillRect(innerWidth - 20 - ko, 20, ko, ko);
        ee.addElement('minimap', innerWidth - 20 - ko, 20, innerWidth - 20, 20 + ko);
      }
      const kr = ["#dbd849", "#895adc", '#dc5a5a', '#5a9edb', "#C8C8C8"];
      aj.save();
      kr.forEach(ks => {
        fn(ks);
        kr.push('#' + aj.strokeStyle.slice(1));
      });
      aj.restore();
      function kt(ku) {
        let kv = innerHeight - 14 - 55;
        for (let kw = 0; kw < 5; kw++) {
          je(14, kv, 55, 55, eh(kr[kw], "#FFFFFF", ku.includes(kw) ? 0.2 : 0));
          switch (kw) {
            case 4:
              ee.addElement(kw, 14, kv, 69, kv + 55, () => ee.settingsOpen = true);
              aj.save();
              aj.fillStyle = aj.strokeStyle;
              aj.translate(25, kv + 11);
              aj.scale(33, 33);
              aj.beginPath();
              aj.fill(gr.settings);
              aj.closePath();
              aj.restore();
              break;
            case 3:
              ee.addElement(kw, 14, kv, 69, kv + 55, () => ee.inventoryOpen = true);
              aj.save();
              aj.fillStyle = aj.strokeStyle;
              aj.translate(25, kv + 11);
              aj.scale(33, 33);
              aj.beginPath();
              aj.fill(gr.inventory);
              aj.closePath();
              aj.restore();
              break;
            case 2:
              ee.addElement(kw, 14, kv, 69, kv + 55, () => ee.skillOpen = true);
              aj.save();
              aj.fillStyle = aj.strokeStyle;
              aj.translate(25, kv + 11);
              aj.scale(33, 33);
              aj.beginPath();
              aj.fill(gr.skills);
              aj.closePath();
              aj.restore();
              break;
            case 1:
              ee.addElement(kw, 14, kv, 69, kv + 55, () => {
                ee.absorbOpen = true;
                ef.world.absorbInventory = JSON.parse(JSON.stringify(ae));
                ef.world.absorbSelection = {};
              });
              aj.save();
              aj.fillStyle = aj.strokeStyle;
              aj.translate(25, kv + 11);
              aj.scale(33, 33);
              aj.beginPath();
              aj.fill(gr.absorb);
              aj.closePath();
              aj.restore();
              break;
            case 0:
              ee.addElement(kw, 14, kv, 69, kv + 55, () => ee.mobGalleryOpen = true);
              aj.save();
              aj.drawImage(window.mobIcons.LadybugMobGalleryIcon, 25, kv + 11, 33, 33);
              aj.restore();
              break;
          }
          gk("[Z]", 65, kv + 38.5, 15.125000000000002, "#ffffff", "right");
          kv -= 69;
        }
      }
      function kx(ky, kz) {
        let la = ef.world.absorbSelection[ky] || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        la[kz]++;
        ef.world.absorbInventory[ky][kz]--;
        ef.world.absorbSelection[ky] = la;
      }
      function lb(lc) {
        if (!lc.waves.enabled) {
          return;
        }
        gk("Wave " + lc.waves.wave, innerWidth / 2, 24, 30, "#ffffff", "center");
        lc.waves.progress = lc.waves.progress + 0.1 * (lc.waves.progressTarget - lc.waves.progress);
        let ld;
        let le = 0;
        let lf = 1;
        let lg = lc.waves.progress / 0.1;
        if (lc.waves.progress > 0.9) {
          le = 6;
          lf = 7;
          lg = (lc.waves.progress - 0.9) / 0.1;
        } else {
          if (lc.waves.progress > 0.8) {
            le = 5;
            lf = 6;
            lg = (lc.waves.progress - 0.8) / 0.1;
          } else {
            if (lc.waves.progress > 0.65) {
              le = 4;
              lf = 5;
              lg = (lc.waves.progress - 0.65) / 0.15;
            } else {
              if (lc.waves.progress > 0.45) {
                le = 3;
                lf = 4;
                lg = (lc.waves.progress - 0.45) / 0.2;
              } else {
                if (lc.waves.progress > 0.25) {
                  le = 2;
                  lf = 3;
                  lg = (lc.waves.progress - 0.25) / 0.2;
                } else if (lc.waves.progress > 0.1) {
                  le = 1;
                  lf = 2;
                  lg = (lc.waves.progress - 0.1) / 0.15;
                }
              }
            }
          }
        }
        ld = eh(at[le].color, at[lf].color, lg);
        je(innerWidth / 2 - 150, 54, 300, 20, '#000000', true, true);
        je(innerWidth / 2 - 150, 54, 300 * (1 - lc.waves.progress), 20, ld, true, true);
      }
      function lh(li) {
        if (li < 1024) {
          return li + 'b';
        }
        if (li < 1048576) {
          return (li / 1024).toFixed(1) + 'kb';
        }
        if (li < 1073741824) {
          return (li / 1048576).toFixed(1) + 'mb';
        }
        return (li / 1073741824).toFixed(1) + 'gb';
      }
      function lj() {
        let lk = 14;
        let ll = 14;
        let lm = false;
        if (window.floofConfig.showFPS) {
          let ln = "FPS: " + ee.fps;
          gk(ln, lk, ll, 15, '#ffffff', "left");
          lk += aj.measureText(ln).width + 14;
          lm = true;
        }
        if (window.floofConfig.showPing) {
          let lo = "Ping: " + ef.latency.toFixed(1) + 'ms';
          gk(lo, lk, ll, 15, "#ffffff", "left");
          lk += aj.measureText(lo).width + 14;
          lm = true;
        }
        if (window.floofConfig.showBandwidth) {
          let lp = "In: " + lh(ef.inboundData) + '/s';
          gk(lp, lk, ll, 15, "#ffffff", "left");
          lk += aj.measureText(lp).width + 14;
          lp = "Out: " + lh(ef.outboundData) + '/s';
          gk(lp, lk, ll, 15, "#ffffff", "left");
          lk += aj.measureText(lp).width + 14;
          lm = true;
        }
        if (lm) {
          lk = 14;
          ll += 14;
        }
        if (window.floofConfig.showServerDebug && ef.server.tick) {
          for (let lq of ["Server FPS: " + ef.server.fps, "Server Tick: " + ef.server.tick.toFixed(2) + "ms/tick", "Server Entities: " + ef.server.entities]) {
            gk(lq, lk, ll, 15, "#ffffff", 'left');
            lk += aj.measureText(lq).width + 14;
          }
        }
      }
      return function (lr) {
        const ls = ee.getElements();
        ee.clearElements();
        kf(lr);
        kp(ls);
        lb(lr);
        lj();
        if (lr.discordWidget) {
          je(14, innerHeight - 14 - 125, 300, 125, "#5865F2", true, true);
          if (lr.discordWidget === 4) {
            gk("Successfully linked", 164, innerHeight - 14 - 125 + 20, 25, "#ffffff", "center");
          } else {
            gk("Would you like to link", 164, innerHeight - 14 - 125 + 18, 20, "#ffffff", "center");
            gk("your Discord Account?", 164, innerHeight - 14 - 125 + 18 + 23, 20, "#ffffff", 'center');
          }
          switch (lr.discordWidget) {
            case 2:
              {
                je(28, innerHeight - 14 - 125 + 125 - 50 - 14, 272, 50, "#43B581", true, true);
                gk("Waiting...", 164, innerHeight - 14 - 125 + 125 - 50 - 14 + 25, 20, "#ffffff", "center");
              }
              break;
            case 3:
              {
                je(28, innerHeight - 14 - 125 + 125 - 50 - 14, 272, 50, "#43B581", true, true);
                gk('Verifying...', 164, innerHeight - 14 - 125 + 125 - 50 - 14 + 25, 20, "#ffffff", 'center');
              }
              break;
            case 4:
              {
                je(28, innerHeight - 14 - 125 + 125 - 50 - 14, 272, 50, eh("#F04747", "#FFFFFF", ls.includes("discordClose") ? 0.2 : 0), true, true);
                gk("Close", 164, innerHeight - 14 - 125 + 125 - 50 - 14 + 25, 20, '#ffffff', "center");
                ee.addElement("discordClose", 28, innerHeight - 14 - 125 + 125 - 50 - 14, 300, innerHeight - 14 - 125 + 125 - 14, () => {
                  lr.discordWidget = false;
                });
              }
              break;
            default:
              {
                je(28, innerHeight - 14 - 125 + 125 - 50 - 14, 129, 50, eh("#43B581", '#FFFFFF', ls.includes('discordYes') ? 0.2 : 0), true, true);
                gk("Yes", 92.5, innerHeight - 14 - 125 + 125 - 50 - 14 + 25, 20, "#ffffff", "center");
                ee.addElement("discordYes", 28, innerHeight - 14 - 125 + 125 - 50 - 14, 157, innerHeight - 14 - 125 + 125 - 14, () => {
                  let lt = false;
                  let lu = window.open('/discordModal.html', "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
                  let lv = setInterval(function lw() {
                    if (lu.closed) {
                      clearInterval(lv);
                      window.removeEventListener("storage", lx);
                      if (lt) {
                        lr.discordWidget = 3;
                      } else {
                        lr.discordWidget = true;
                      }
                    }
                  }, 250);
                  let lx = ly => {
                    if (ly.key === 'discordCode') {
                      lt = true;
                      ef.talk({
                        'type': 4,
                        'code': ly.newValue
                      });
                      window.removeEventListener("storage", lx);
                      lu.close();
                    }
                  };
                  window.addEventListener("storage", lx);
                  lr.discordWidget = 2;
                });
                je(171, innerHeight - 14 - 125 + 125 - 50 - 14, 129, 50, eh('#F04747', "#FFFFFF", ls.includes("discordNo") ? 0.2 : 0), true, true);
                gk('No', 235.5, innerHeight - 14 - 125 + 125 - 50 - 14 + 25, 20, "#ffffff", "center");
                ee.addElement("discordNo", 171, innerHeight - 14 - 125 + 125 - 50 - 14, 300, innerHeight - 14 - 125 + 125 - 14, () => {
                  lr.discordWidget = false;
                });
              }
          }
          return;
        }
        if (ee.settingsOpen) {
          je(14, innerHeight - 14 - 400, 350, 400, kr[4], true, true);
          ee.addElement("currentMenuOpen", 14, innerHeight - 14 - 400, 364, innerHeight - 14, () => {});
          gk("Settings", 189, innerHeight - 14 - 400 + 35, 30, '#ffffff', 'center');
          je(324, innerHeight - 14 - 400 + 10, 30, 30, eh(ak[5], "#FFFFFF", ls.includes("closeSettings") ? 0.2 : 0), true, true);
          gk('X', 339, innerHeight - 14 - 400 + 25, 20, '#ffffff', "center");
          ee.addElement("closeSettings", 324, innerHeight - 14 - 400 + 10, 354, innerHeight - 14 - 400 + 40, () => ee.settingsOpen = false);
          let lz = innerHeight - 14 - 400 + 100;
          function ma(mc, md) {
            je(44, lz, 20, 20, eh(eh(kr[4], '#000000', window.floofConfig[md] ? 0.2 : 0), "#FFFFFF", ls.includes("settings" + md) ? 0.2 : 0), true, true);
            gk(mc, 74, lz + 15, 20, "#ffffff", "left");
            ee.addElement("settings" + md, 44, lz, 64, lz + 20, () => {
              window.floofConfig[md] = !window.floofConfig[md];
            });
            lz += 40;
          }
          ma("Show FPS", "showFPS");
          ma("Show Server Debug", "showServerDebug");
          ma("Show ping", "showPing");
          ma("Mouse Movement", "mouseMovement");
          ma("Show Bandwidth", "showBandwidth");
          return;
        }
        if (ee.inventoryOpen) {
          let me = -1;
          je(14, innerHeight - 14 - 550, 400, 550, kr[3], true, true);
          ee.addElement("currentMenuOpen", 14, innerHeight - 14 - 550, 414, innerHeight - 14, () => {});
          gk("Inventory", 214, innerHeight - 14 - 550 + 35, 30, "#ffffff", 'center');
          gk("Click a petal then click a slot to equip it", 214, innerHeight - 14 - 550 + 65, 20, '#ffffff', "center");
          je(374, innerHeight - 14 - 550 + 10, 30, 30, eh(ak[5], '#FFFFFF', ls.includes("closeInventory") ? 0.2 : 0), true, true);
          gk('X', 389, innerHeight - 14 - 550 + 25, 20, "#ffffff", "center");
          ee.addElement('closeInventory', 374, innerHeight - 14 - 550 + 10, 404, innerHeight - 14 - 550 + 40, () => ee.inventoryOpen = false);
          let mf = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: []
          };
          for (let mg in ae) {
            let mh = ae[mg];
            mh.forEach((mi, mj) => {
              if (mi > 0) {
                mf[mj].push({
                  'index': mg,
                  'rarity': mj,
                  'count': mi
                });
              }
            });
          }
          let mk = [];
          for (let ml in mf) {
            let mm = mf[ml];
            mk.unshift(...mm);
          }
          ee.rwheel = Math.max(ee.rwheel, -20);
          ee.rwheel = Math.min(ee.rwheel, mk.length / 5 * 65 - 20);
          let mn = 39;
          let mo = -ee.wheel + innerHeight - 14 - 550 + 100;
          aj.save();
          aj.beginPath();
          aj.rect(14, innerHeight - 14 - 550 + 100, 390, 430);
          aj.clip();
          aj.closePath();
          for (let mp = 0; mp < mk.length; mp++) {
            let mq = mk[mp];
            if (ls.includes("inventory" + mp)) {
              me = mq;
            }
            je(mn, mo, 55, 55, eh(at[mq.rarity].color, "#FFFFFF", ls.includes("inventory" + mp) ? 0.2 : 0), true, true);
            let mr = window.petalIcons[ar[mq.index] + '_' + mq.rarity];
            if (mr) {
              aj.drawImage(mr, mn, mo - 5.5, 55, 55);
            }
            aj.save();
            aj.translate(mn + 55, mo);
            aj.rotate(Math.PI / 4);
            gk('x' + av(mq.count), 0, 0, 15.125000000000002, "#ffffff", "center");
            aj.restore();
            gk(ar[mq.index], mn + 27.5, mo + 46.75, 13.75, '#ffffff', 'center');
            ee.addElement("inventory" + mp, mn, mo, mn + 55, mo + 55, () => {
              if (lr.player !== null) {
                lr.selectInventoryItem(mq.index, mq.rarity);
              }
            });
            mn += 72.5;
            if (mn + 55 > 404) {
              mn = 39;
              mo += 72.5;
            }
          }
          aj.restore();
          if (me !== -1) {
            let mt = ar[me.index].toUpperCase().replace(/ /g, '_');
            rarity = at[me.rarity];
            config = o[mt];
            stats = config.rarities[rarity.name.toUpperCase()];
            let mu = innerHeight - 14 - 550 + 100;
            let mv = config.description;
            let mw = mv.split(" ");
            let mx = '';
            aj.font = "15px Ubuntu";
            let my = [];
            for (let mz = 0; mz < mw.length; mz++) {
              let na = mx + mw[mz] + " ";
              let nb = aj.measureText(na);
              let nc = nb.width;
              if (nc > 272) {
                my.push(mx);
                mx = mw[mz] + " ";
              } else {
                mx = na;
              }
            }
            my.push(mx);
            let nd = 75 + ((stats.damage ? 20 : 0) + (stats.health ? 20 : 0) + (stats.bounces ? 20 : 0) + (stats.radians ? 20 : 0) + (stats.healthIncrease ? 20 : 0) + (stats.extraView ? 20 : 0) + (stats.healPerSecond ? 20 : 0) + (stats.poison ? 20 : 0) + (stats.heal ? 20 : 0) + (stats.pickupRadius ? 20 : 0) + (stats.speedIncrease ? 20 : 0) + (stats.armor ? 20 : 0) + (stats.boost ? 20 : 0) + (stats.shield ? 20 : 0) + (stats.period ? 20 : 0) + (stats.duration ? 20 : 0) + (stats.damageReflection ? 20 : 0) + (stats.extraRange ? 20 : 0) + (stats.spawn ? 20 : 0) + my.length * 20);
            je(424, mu, 300, nd, kr[3], true, true);
            gk(config.name, 438, mu + 25, 25, "#ffffff", "left");
            gk(rarity.name, 710, mu + 25, 20, rarity.color, 'right');
            for (let ne = 0; ne < my.length; ne++) {
              gk(my[ne], 438, mu + 50 + 20 * ne, 15, "#ffffff", "left");
            }
            mu += 50 + 20 * my.length;
            if (stats.damage !== undefined) {
              gk("Damage: " + av(stats.damage), 438, mu, 15, "#FF6666", "left");
              mu += 20;
            }
            if (stats.health !== undefined) {
              gk("Health: " + av(stats.health), 438, mu, 15, "#66FF66", 'left');
              mu += 20;
            }
            if (stats.bounces !== undefined) {
              gk("Bounces: " + stats.bounces, 438, mu, 15, "#FF6666", "left");
              mu += 20;
            }
            if (stats.radians !== undefined) {
              gk("Rotation Speed: +" + (stats.radians * q).toFixed(2) + "rad/s", 438, mu, 15, "#FF66FF", 'left');
              mu += 20;
            }
            if (stats.healthIncrease !== undefined) {
              gk("Health Increase: " + av(stats.healthIncrease), 438, mu, 15, "#66FF66", "left");
              mu += 20;
            }
            if (stats.extraView !== undefined) {
              gk("Extra Vision: " + (stats.extraView * 100).toFixed(1) + '%', 438, mu, 15, '#6666FF', "left");
              mu += 20;
            }
            if (stats.healPerSecond !== undefined) {
              gk("Heal: " + av(Math.round(stats.healPerSecond)) + "HP/s", 438, mu, 15, "#6666FF", 'left');
              mu += 20;
            }
            if (stats.poison !== undefined) {
              gk("Poison: " + av(stats.poison[0] / 1000 * stats.poison[1]) + " (" + av(stats.poison[1]) + '/s)', 438, mu, 15, "#FFFF66", "left");
              mu += 20;
            }
            if (stats.heal !== undefined) {
              gk("Heal: " + av(+stats.heal.toFixed(2)), 438, mu, 15, '#FFC8EF', "left");
              mu += 20;
            }
            if (stats.pickupRadius !== undefined) {
              gk("Pickup Radius: +" + stats.pickupRadius, 438, mu, 15, "#66FFFF", "left");
              mu += 20;
            }
            if (stats.speedIncrease !== undefined) {
              gk("Speed Increase: " + (stats.speedIncrease * 100).toFixed(1) + '%', 438, mu, 15, "#66FFFF", "left");
              mu += 20;
            }
            if (stats.armor !== undefined) {
              gk("Damage Taken: " + (stats.armor * 100).toFixed(1) + '%', 438, mu, 15, "#C8FFAA", "left");
              mu += 20;
            }
            if (stats.boost !== undefined) {
              gk("Velocity Boost: " + (stats.boost * 100).toFixed(1) + '%', 438, mu, 15, "#AAC8FF", "left");
              mu += 20;
            }
            if (stats.shield !== undefined) {
              gk("Shield: " + av(stats.shield) + 'HP', 438, mu, 15, '#C8C8FF', "left");
              mu += 20;
            }
            if (stats.period !== undefined) {
              gk("Capacity: " + av(stats.period) + 'HP', 438, mu, 15, "#C8FFC8", "left");
              mu += 20;
            }
            if (stats.duration !== undefined) {
              gk("Duration: " + (stats.duration / 1000).toFixed(2) + 's', 438, mu, 15, "#FFC8FF", 'left');
              mu += 20;
            }
            if (stats.damageReflection !== undefined) {
              gk("Damage Reflection: " + (stats.damageReflection * 100).toFixed(1) + '%', 438, mu, 15, '#FFC800', "left");
              mu += 20;
            }
            if (stats.extraRange !== undefined) {
              gk("Petal Range: +" + stats.extraRange, 438, mu, 15, "#C8FFFF", 'left');
              mu += 20;
            }
            if (stats.spawn) {
              aj.font = "15px Ubuntu";
              let nf = 0;
              gk("Spawns: ", 438, mu, 15, "#AABBAF", "left");
              nf += aj.measureText("Spawns: ").width;
              let ng = stats.spawn.type.toLowerCase().split('_').join(" ").split(" ").map(nh => nh.charAt(0).toUpperCase() + nh.slice(1)).join(" ") + " ";
              gk(ng, 438 + nf, mu, 15, "#FFFFFF", "left");
              nf += aj.measureText(ng).width;
              let ni = at[stats.spawn.rarity];
              gk('(' + ni.name + ')', 438 + nf, mu, 15, ni.color, "left");
              mu += 20;
            }
            let nj = "Recharge: " + ((stats.recharge ?? o.DEFAULT_PROPERTIES.recharge) / 1000).toFixed(1) + 's';
            if (stats.spawnCharge) {
              nj += " + " + (stats.spawnCharge / 1000).toFixed(1) + 's';
            }
            if (stats.shootDelay) {
              nj += " + " + (stats.shootDelay / 1000).toFixed(1) + 's';
            }
            if (stats.waitTime) {
              nj += " + " + (stats.waitTime / 1000).toFixed(1) + 's';
            }
            gk(nj, 710, innerHeight - 14 - 550 + 100 + nd - 20, 15, "#ffffff", 'right');
          }
          return;
        }
        if (ee.absorbOpen) {
          je(14, innerHeight - 14 - 575, 685, 575, kr[1], true, true);
          ee.addElement('currentMenuOpen', 14, innerHeight - 14 - 575, 699, innerHeight - 14, () => {});
          gk("Absorb", 356.5, innerHeight - 14 - 575 + 35, 30, "#ffffff", 'center');
          gk("Click a petal to absorb it!", 356.5, innerHeight - 14 - 575 + 65, 20, "#ffffff", "center");
          je(659, innerHeight - 14 - 575 + 10, 30, 30, eh(ak[5], '#FFFFFF', ls.includes("closeAbsorb") ? 0.2 : 0), true, true);
          gk('X', 674, innerHeight - 14 - 575 + 25, 20, '#ffffff', "center");
          ee.addElement("closeAbsorb", 659, innerHeight - 14 - 575 + 10, 689, innerHeight - 14 - 575 + 40, () => ee.absorbOpen = false);
          aj.save();
          aj.fillStyle = kr[6];
          let nk = innerHeight - 14 - 575 + 200;
          aj.translate(185.25, innerHeight - 14 - 575 + 200);
          aj.beginPath();
          aj.arc(0, 0, 100, 0, Math.PI * 2);
          aj.fill();
          aj.closePath();
          let nl = [];
          for (let nm in lr.absorbSelection) {
            let nn = lr.absorbSelection[nm];
            nn.forEach((np, nq) => {
              if (np > 0) {
                nl.push({
                  'index': nm,
                  'rarity': nq,
                  'count': np
                });
              }
            });
          }
          for (let nr = 0; nr < nl.length; nr++) {
            let ns = nl[nr];
            let nt = nr * Math.PI * 2 / nl.length;
            aj.save();
            aj.translate(Math.cos(nt) * 75, Math.sin(nt) * 75);
            je(-27.5, -27.5, 55, 55, eh(at[ns.rarity].color, "#FFFFFF", ls.includes("selection" + nr) ? 0.2 : 0), true, true);
            let nu = window.petalIcons[ar[ns.index] + '_' + ns.rarity];
            if (nu) {
              aj.drawImage(nu, -27.5, -33, 55, 55);
            }
            aj.rotate(Math.PI / 4);
            gk('x' + av(ns.count), 0, -36.666666666666664, 15.125000000000002, "#ffffff", 'center');
            aj.rotate(-Math.PI / 4);
            gk(ar[ns.index], 0, 18.333333333333332, 13.75, "#ffffff", 'center');
            aj.restore();
          }
          je(200, -27.5, 110, 55, eh(ak[5], '#FFFFFF', ls.includes('absorb') ? 0.2 : 0), true, true);
          gk("Absorb", 255, 0, 18.37, "#ffffff", "center");
          ee.addElement("absorb", 385.25, nk - 27.5, 495.25, nk - 27.5 + 55, () => {
            ef.talk({
              'type': 5,
              'data': lr.absorbSelection
            });
            lr.absorbSelection = {};
          });
          gk("Warning: This will delete the selected petals!", 255, 50, 13.75, "#ffffff", "center");
          {
            let nv = 0;
            for (let nw in lr.absorbSelection) {
              let nx = lr.absorbSelection[nw];
              nx.forEach((ny, nz) => {
                nv += ny * at[nz].absorbValue;
              });
            }
            gk("Total XP: " + av(nv), 255, 100, 13.75, "#ffffff", 'center');
            gk("Level: " + lr.level, 255, 125, 13.75, "#ffffff", "center");
          }
          aj.restore();
          let oa = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: []
          };
          for (let ob in lr.absorbInventory) {
            let oc = lr.absorbInventory[ob];
            oc.forEach((od, oe) => {
              if (od > 0) {
                oa[oe].push({
                  'index': ob,
                  'rarity': oe,
                  'count': od
                });
              }
            });
          }
          let og = [];
          for (let oh in oa) {
            let oi = oa[oh];
            og.unshift(...oi);
          }
          ee.rwheel = Math.max(ee.rwheel, -20);
          ee.rwheel = Math.min(ee.rwheel, og.length / 8 * 65);
          let oj = 39;
          let ok = -ee.wheel + innerHeight - 14 - 575 + 350;
          aj.save();
          aj.beginPath();
          aj.rect(14, innerHeight - 14 - 575 + 350, 675, 205);
          aj.clip();
          aj.closePath();
          for (let ol = 0; ol < og.length; ol++) {
            let om = og[ol];
            if (om.count > 0) {
              je(oj, ok, 55, 55, eh(at[om.rarity].color, "#FFFFFF", ls.includes("inventory" + ol) ? 0.2 : 0), true, true);
              let oo = window.petalIcons[ar[om.index] + '_' + om.rarity];
              if (oo) {
                aj.drawImage(oo, oj, ok - 5.5, 55, 55);
              }
              aj.save();
              aj.translate(oj + 55, ok);
              aj.rotate(Math.PI / 4);
              gk('x' + av(om.count), 0, 0, 15.125000000000002, '#ffffff', "center");
              aj.restore();
              gk(ar[om.index], oj + 27.5, ok + 46.75, 13.75, "#ffffff", "center");
              ee.addElement("inventory" + ol, oj, ok, oj + 55, ok + 55, () => {
                if (lr.player !== null) {
                  kx(om.index, om.rarity);
                }
              });
            } else {
              continue;
            }
            oj += 72.5;
            if (oj + 55 > 689) {
              oj = 39;
              ok += 72.5;
            }
          }
          aj.restore();
          return;
        }
        if (ee.skillOpen) {
          je(14, innerHeight - 500 - 14, 500, 500, kr[2]);
          ee.addElement("currentMenuOpen", 14, innerHeight - 14 - 500, 514, innerHeight - 14, () => {});
          gk("Skills", 264, innerHeight - 14 - 500 + 35, 30, '#ffffff', "center");
          gk(lr.skillPoints + " SP", 29, innerHeight - 14 - 500 + 30, 25, '#FFFFFF', "left");
          gk(av(lr.mySkillInfo.health.toFixed(2)) + " HP", 29, innerHeight - 14 - 500 + 60, 18, "#FFFFFF", "left");
          gk(av(lr.mySkillInfo.damage.toFixed(2)) + " DMG", 29, innerHeight - 14 - 500 + 85, 18, "#FFFFFF", 'left');
          gk(av(lr.mySkillInfo.reload.toFixed(2)) + "x RLD", 499, innerHeight - 14 - 500 + 60, 18, "#FFFFFF", "right");
          gk(av(lr.mySkillInfo.slots + 5) + " Slots", 499, innerHeight - 14 - 500 + 85, 18, '#FFFFFF', 'right');
          je(474, innerHeight - 14 - 500 + 10, 30, 30, eh(ak[5], "#FFFFFF", ls.includes('closeSkills') ? 0.2 : 0), true, true);
          gk('X', 489, innerHeight - 14 - 500 + 25, 20, "#ffffff", "center");
          ee.addElement("closeSkills", 474, innerHeight - 14 - 500 + 10, 504, innerHeight - 14 - 500 + 40, () => ee.skillOpen = false);
          ee.rwheel = Math.max(ee.rwheel, -20);
          ee.rwheel = Math.min(ee.rwheel, 536);
          aj.save();
          aj.beginPath();
          aj.rect(14, innerHeight - 14 - 500 + 125, 483, 341);
          aj.clip();
          aj.closePath();
          let op = 78;
          let oq = -ee.wheel + innerHeight - 500 - 14 + 150 + 17;
          for (let or in au) {
            let os = au[or];
            const ot = op - 50;
            const ou = oq - 50 - 50;
            gk(os.name, op, oq - 45, 15, "#FFFFFF", "center");
            aj.beginPath();
            aj.moveTo(op, oq);
            aj.lineTo(op, oq + 67 * (os.tiers.length - 1));
            aj.closePath();
            aj.strokeStyle = '#FFFFFF';
            aj.stroke();
            for (let ov = 0; ov < os.tiers.length; ov++) {
              let ow = lr.mySkillInfo[au[or].key];
              let ox = ow >= ov && lr.skillPoints > 0;
              let oy = at[ov].color;
              if (ow + 1 <= ov || os.tiers[ov] > lr.skillPoints) {
                oy = eh(oy, '#C8C8C8', 0.9);
              } else {
                if (ow > ov) {
                  oy = eh(oy, "#000000", 0.1);
                } else if (ls.includes('skill_' + or + '_' + ov)) {
                  oy = eh(oy, "#FFFFFF", 0.2);
                }
              }
              je(op - 25, oq - 25, 50, 50, oy);
              gk(ow <= ov ? os.tiers[ov] + " SP" : ':)', op, oq, 13, "#FFFFFF", "center");
              ee.addElement('skill_' + or + '_' + ov, op - 25, oq - 25, op + 25, oq + 25, function oz() {
                if (ee.lastClick.id === 'skill_' + or + '_' + ov) {
                  if (Date.now() - ee.lastClick.timeStamp < 500) {
                    ef.talk({
                      'type': 6,
                      'index': or,
                      'level': ov
                    });
                  }
                }
              }, ox && os.tiers[ov] <= lr.skillPoints);
              oq += 67;
            }
            ee.addElement("skill_" + or, ot, ou, op + 50, oq, () => {}, false);
            op += 101;
            oq = -ee.wheel + innerHeight - 500 - 14 + 150 + 17;
          }
          aj.restore();
          for (let pa in au) {
            if (ls.includes("skill_" + pa)) {
              let pb = au[pa];
              aj.save();
              aj.globalAlpha = 0.8;
              je(28, innerHeight - 14 - 500 + 100, 472, 20, "#000000", true, false);
              aj.globalAlpha = 1;
              gk(pb.description, 264, innerHeight - 14 - 500 + 100 + 10, 10, '#FFFFFF', "center");
              aj.restore();
            }
          }
          return;
        }
        if (ee.mobGalleryOpen) {
          let pc = -1;
          je(14, innerHeight - 14 - 475, 835, 475, kr[0], true, true);
          ee.addElement("currentMenuOpen", 14, innerHeight - 14 - 475, 849, innerHeight - 14, () => {});
          gk("Mob Gallery", 431.5, innerHeight - 14 - 475 + 35, 30, "#ffffff", "center");
          je(809, innerHeight - 14 - 475 + 10, 30, 30, eh(ak[5], "#FFFFFF", ls.includes('closeInventory') ? 0.2 : 0), true, true);
          gk('X', 824, innerHeight - 14 - 475 + 25, 20, '#ffffff', "center");
          ee.addElement("closemobGallery", 809, innerHeight - 14 - 475 + 10, 839, innerHeight - 14 - 475 + 40, () => ee.mobGalleryOpen = false);
          let pd = [];
          for (let pe in p) {
            for (let pf in p[pe].rarities) {
              if (as[pe] == null) {
                continue;
              }
              let pg = {
                ...p[pe]
              };
              delete pg.rarities;
              pg = {
                ...pg,
                ...p[pe].rarities[pf]
              };
              pd.push({
                ...pg,
                'image': as[pe],
                'rarity': {
                  'COMMON': 0,
                  'UNCOMMON': 1,
                  'RARE': 2,
                  'EPIC': 3,
                  'LEGENDARY': 4,
                  'MYTHIC': 5,
                  'ULTRA': 6,
                  'SUPER': 7,
                  'ANCIENT': 8,
                  'OMEGA': 9,
                  '???': 10
                }[pf]
              });
            }
          }
          ee.rwheel = Math.max(ee.rwheel, -20);
          ee.rwheel = Math.min(ee.rwheel, pd.length / 11 * 65 - 20);
          let ph = 39;
          let pj = -ee.wheel + innerHeight - 14 - 475 + 100;
          aj.save();
          aj.beginPath();
          aj.rect(14, innerHeight - 14 - 475 + 100, 825, 355);
          aj.clip();
          aj.closePath();
          for (let pk = 0; pk < pd.length; pk++) {
            if (pj + 55 < innerHeight - 14 - 475 + 100) {
              ph += 72.5;
              if (ph + 55 > 839) {
                ph = 39;
                pj += 72.5;
              }
              continue;
            }
            let pl = pd[pk];
            if (ls.includes("mobGallery" + pk)) {
              pc = pl;
            }
            je(ph, pj, 55, 55, eh(at[pl.rarity].color, "#FFFFFF", ls.includes("mobGallery" + pk) ? 0.2 : 0), true, true);
            let pm = pl.image;
            if (pm) {
              aj.drawImage(pm, ph + 5.5, pj + 5.5, 44, 44);
            }
            aj.save();
            aj.translate(ph + 55, pj);
            aj.rotate(Math.PI / 4);
            aj.restore();
            ee.addElement("mobGallery" + pk, ph, pj, ph + 55, pj + 55, () => {});
            ph += 72.5;
            if (ph + 55 > 839) {
              ph = 39;
              pj += 72.5;
            }
          }
          aj.restore();
          if (pc !== -1) {
            let pn = innerHeight - 14 - 475 + 100;
            je(859, pn, 300, 275, kr[3], true, true);
            let po = at[pc.rarity];
            gk(pc.name, 873, pn + 25, 25, "#ffffff", "left");
            gk(po.name, 1145, pn + 25, 20, po.color, "right");
            let pp = pc.description;
            let pq = pp.split(" ");
            let pr = '';
            aj.font = "15px Ubuntu";
            let ps = [];
            for (let pt = 0; pt < pq.length; pt++) {
              let pu = pr + pq[pt] + " ";
              let pv = aj.measureText(pu);
              let pw = pv.width;
              if (pw > 272) {
                ps.push(pr);
                pr = pq[pt] + " ";
              } else {
                pr = pu;
              }
            }
            ps.push(pr);
            for (let py = 0; py < ps.length; py++) {
              gk(ps[py], 873, pn + 50 + 20 * py, 15, "#ffffff", 'left');
            }
            pn += 50 + 20 * ps.length;
            if (pc.damage !== undefined) {
              gk("Damage: " + av(+pc.damage.toFixed(2)), 873, pn, 15, '#FF6666', 'left');
              pn += 20;
            }
            if (pc.health !== undefined) {
              gk("Health: " + av(+pc.health.toFixed(2)), 873, pn, 15, "#66FF66", "left");
              pn += 20;
            }
            if (pc.poison !== undefined) {
              gk("Poison: " + av(+(pc.poison[0] / 1000 * pc.poison[1]).toFixed(2)) + " (" + av(+pc.poison[1].toFixed(2)) + "/s)", 873, pn, 15, "#FFFF66", 'left');
              pn += 20;
            }
            if (pc.armor !== undefined) {
              gk("Damage Taken: " + (pc.armor * 100).toFixed(1) + '%', 873, pn, 15, "#C8FFAA", "left");
              pn += 20;
            }
            if (pc.damageReflection !== undefined) {
              gk("Damage Reflection: " + (pc.damageReflection * 100).toFixed(1) + '%', 873, pn, 15, '#FFC800', "left");
              pn += 20;
            }
            if (pc.drops !== undefined) {
              pc.drops.forEach(pz => {
                let qa = 14;
                for (let qb = 0; qb < pz.chance.length; qb++) {
                  if (pz.chance[qb] === 0) {
                    continue;
                  }
                  je(859 + qa, pn, 50, 50, at[qb].color);
                  aj.drawImage(window.petalIcons[ar[pz.index] + '_' + qb], 859 + qa + 5, pn + 5, 40, 40);
                  gk(ar[pz.index].split(" ").pop(), 859 + qa + 25, pn + 50 - 12, 12, '#ffffff', 'center');
                  qa += 64;
                }
                pn += 64;
              });
              pn = pn;
              pc.drops.forEach(qc => {
                let qd = 14;
                for (let qe = 0; qe < qc.chance.length; qe++) {
                  if (qc.chance[qe] === 0) {
                    continue;
                  }
                  aj.save();
                  aj.translate(859 + qd + 50, pn);
                  aj.rotate(Math.PI / 7.5);
                  gk(av((qc.chance[qe] * 100).toFixed(1)) + '%', 0, 0, 12, "#ffffff", "center");
                  aj.restore();
                  qd += 64;
                }
                pn += 64;
              });
            }
          }
          return;
        }
        kt(ls);
        if (lr.isDead) {
          gk("You died!", innerWidth / 2, innerHeight / 2, 100, '#ffffff', 'center');
          je(innerWidth / 2 - 100, innerHeight / 2 + 100, 200, 50, eh(ak[5], "#FFFFFF", ls.includes('respawn') ? 0.2 : 0), true, true);
          gk("Respawn", innerWidth / 2, innerHeight / 2 + 125, 30, "#ffffff", 'center');
          ee.addElement("respawn", innerWidth / 2 - 100, innerHeight / 2 + 100, innerWidth / 2 + 100, innerHeight / 2 + 150, () => {
            ef.talk({
              'type': 1
            });
          });
        }
      };
    }();
    function hq(qf, qg, qh, qi, qj) {
      qg.animations.mood = qg.animations.mood + 0.2 * (qh - qg.animations.mood);
      qg.animations.mouthDip = qg.animations.mouthDip + 0.1 * ((qh === 1 ? 1.7 : qh === 2 ? 0.35 : 0.9) - qg.animations.mouthDip);
      qf.save();
      qf.scale(qi / 2.5, qi / 2.5);
      function qk(ql, qm) {
        qf.save();
        qf.translate(ql, qm);
        qf.beginPath();
        switch (qh) {
          case 1:
          case 3:
            qf.ellipse(0, 0, 0.334, 0.667, 0, 0, Math.PI * 2);
            break;
          case 2:
            qf.ellipse(0, 0, 0.334, 0.667, 0, -Math.PI / 10, -Math.PI / 10 - (-Math.PI / 10 - -Math.PI / 2) * (qg.animations.mood / 2));
            break;
        }
        qf.closePath();
        qf.fillStyle = qf.strokeStyle = "#04190E";
        qf.lineWidth = 0.075;
        qf.stroke();
        qf.fill();
        qf.clip();
        qf.beginPath();
        qf.arc(Math.cos(qj) * 0.334, Math.sin(qj) * 0.667, 0.334, 0, Math.PI * 2);
        qf.fillStyle = "#FFFFFF";
        qf.fill();
        qf.closePath();
        qf.restore();
      }
      qk(-0.75, -0.5);
      qk(0.75, -0.5);
      qf.strokeStyle = "#04190E";
      qf.lineWidth = 0.15;
      qf.lineCap = "round";
      qf.beginPath();
      qf.moveTo(-0.75, 1.15);
      qf.quadraticCurveTo(0, qg.animations.mouthDip, 0.75, 1.15);
      qf.stroke();
      qf.closePath();
      qf.restore();
    }
    function qn() {
      ee.wheel = ee.wheel + 0.1 * (ee.rwheel - ee.wheel);
      const qo = ef.world;
      qo.updatePortalObjects();
      const qp = qo.camera;
      const qq = qo.player;
      const qr = qp.getRatio();
      if (qq != null) {
        qp.x = qq.x;
        qp.y = qq.y;
      }
      const qs = qp.x * qr;
      const qt = qp.y * qr;
      et(qr, qs, qt);
      if (ef.world.scene === aq.GARDEN || 1) {
        aj.save();
        const qu = -qs + innerWidth * 0.5;
        const qv = -qt + innerHeight * 0.5;
        aj.translate(qu, qv);
        af.forEach(qw => {
          aj.save();
          aj.beginPath();
          for (let qx = 0; qx < qw.length; qx++) {
            const {
              x: qy,
              y: qz
            } = qw[qx];
            aj.lineTo(qy * qr, qz * qr);
          }
          aj.closePath();
          aj.clip();
          aj.translate(-qu, -qv);
          const ra = al.dirt;
          let rb = ra.width * qr;
          let rc = ra.height * qr;
          for (let rd = -qs % rb - rc; rd <= innerWidth * devicePixelRatio; rd += rb) {
            for (let re = -qt % rb - rb; re <= innerHeight * devicePixelRatio; re += rb) {
              aj.drawImage(ra, rd - 1 | 0, re - 1 | 0, rb + 2 | 0, rc + 2 | 0);
            }
          }
          aj.restore();
        });
        aj.restore();
      }
      try {
        qo.entities.forEach(rf => {
          const rg = rf.id === qq?.['id'];
          rf.x = rf.x + 0.1 * (rf.rx - rf.x);
          rf.y = rf.y + 0.1 * (rf.ry - rf.y);
          rf.size = rf.size + 0.125 * (rf.rsize - rf.size);
          rf.rotation = Math.atan2(Math.sin(rf.rotation) + 0.15 * (Math.sin(rf.rrotation) - Math.sin(rf.rotation)), Math.cos(rf.rotation) + 0.15 * (Math.cos(rf.rrotation) - Math.cos(rf.rotation)));
          gz(rf.type, rf.index, rg ? innerWidth * 0.5 : rf.x * qr - qs + innerWidth * 0.5, rg ? innerHeight * 0.5 : rf.y * qr - qt + innerHeight * 0.5, rf.size, qr, rf.rotation, rf.id, rf);
        });
      } catch (rh) {
        if (location.hostname === 'localhost') {
          console.error(rh);
        }
      }
      if (qo.scene === 3) {
        aj.globalAlpha = 0.1;
        const ri = al.water;
        let rj = ri.width * qr;
        let rk = ri.height * qr;
        const rl = rj * (performance.now() % 10000) * 0.00005;
        for (let rm = -qs % rj - rk - rl; rm <= innerWidth * devicePixelRatio; rm += rj) {
          for (let rn = -qt % rj - rj - rl; rn <= innerHeight * devicePixelRatio; rn += rj) {
            aj.drawImage(ri, rm, rn, rj, rk);
          }
        }
        aj.globalAlpha = 1;
      }
      if (Math.abs(ah - ag) > 0.01 || ah === 0) {
        let ro = Math.max(canvas.width, canvas.height);
        aj.beginPath();
        aj.arc(canvas.width / 2, canvas.height / 2, ro * 1.5, 0, 2 * Math.PI, true);
        aj.arc(canvas.width / 2, canvas.height / 2, ag * ro, 0, 2 * Math.PI, false);
        aj.closePath();
        aj.fillStyle = "#000000";
        aj.fill();
        ag = Math.max(0, ag + 0.015 * (ah === 1 ? 1 : -1));
      }
      try {
        jd(qo);
      } catch (rp) {
        if (location.hostname === 'localhost') {
          console.error(rp);
        }
      }
      ee.frames++;
      requestAnimationFrame(qn);
    }
    setInterval(function rq() {
      ef.world.entities.forEach(rr => {
        if (rr.type === 3 && rr.index === 30) {
          let rs = Math.max(Math.abs(rr.rx - rr.x), Math.abs(rr.ry - rr.y));
          let rt = Math.cbrt(rs) / 750;
          rr.rstickBugRotate = Math.sin(performance.now() * rt + rr.id) * 0.3;
        }
      });
    }, 100);
    setInterval(function ru() {
      ee.fps = ee.frames;
      ee.frames = 0;
      ef.inboundData = ef.inbound;
      ef.outboundData = ef.outbound;
      ef.inbound = 0;
      ef.outbound = 0;
    }, 1000);
    let rv = false;
    async function rw() {
      if (rv) {
        return;
      }
      as = {
        'LADYBUG': window.mobIcons.Ladybug_0,
        'SHINY_LADYBUG': window.mobIcons["Shiny Ladybug_0"],
        'EVIL_LADYBUG': window.mobIcons["Evil Ladybug_0"],
        'SHRUB': window.mobIcons.Shrub_0,
        'CACTUS': window.mobIcons.Cactus_0,
        'ROCK': window.mobIcons.Rock_0,
        'BEE': window.mobIcons.Bee,
        'BABY_ANT': window.mobIcons["Baby Ant"],
        'WORKER_ANT': window.mobIcons["Worker Ant"],
        'SOLDIER_ANT': window.mobIcons["Soldier Ant"],
        'QUEEN_ANT': window.mobIcons["Queen Ant"],
        'SURFACE_ANT_HOLE': window.mobIcons["Ant Hole"],
        'BABY_FIRE_ANT': window.mobIcons["Baby Fire Ant"],
        'WORKER_FIRE_ANT': window.mobIcons["Worker Fire Ant"],
        'SOLDIER_FIRE_ANT': window.mobIcons["Soldier Fire Ant"],
        'QUEEN_FIRE_ANT': window.mobIcons["Queen Fire Ant"],
        'SURFACE_FIRE_ANT_HOLE': window.mobIcons["Fire Ant Hole"],
        'BABY_PHARAOH_ANT': window.mobIcons["Baby Pharaoh Ant"],
        'WORKER_PHARAOH_ANT': window.mobIcons["Worker Pharaoh Ant"],
        'SOLDIER_PHARAOH_ANT': window.mobIcons["Soldier Pharaoh Ant"],
        'QUEEN_PHARAOH_ANT': window.mobIcons["Queen Pharaoh Ant"],
        'SURFACE_PHARAOH_ANT_HOLE': window.mobIcons["Pharaoh Ant Hole"],
        'SPONGE': window.mobIcons.Sponge_0,
        'HORNET': window.mobIcons.Hornet,
        'WASP': window.mobIcons.Wasp,
        'BUBBLE': window.mobIcons.Bubble,
        'JELLYFISH': window.mobIcons.Jellyfish,
        'BEETLE': window.mobIcons.Beetle,
        'SCORPION': window.mobIcons.Scorpion,
        'SHELL': window.mobIcons.Shell,
        'SPIDER': window.mobIcons.Spider,
        'FLY': window.mobIcons.Fly,
        'SQUARE': window.mobIcons.Square,
        'TRIANGLE': window.mobIcons.Triangle,
        'PENTAGON': window.mobIcons.Pentagon,
        'WALKINGSTICK': window.mobIcons.Walkingstick,
        'CENTIPEDE': window.mobIcons.CentipedeHead,
        'EVIL_CENTIPEDE': window.mobIcons.EvilCentipedeHead,
        'DESERT_CENTIPEDE': window.mobIcons.DesertCentipedeHead,
        'DEMON_CORE': window.mobIcons.DemonCore
      };
      rv = true;
      ef.connect((location.protocol === "https:" ? "wss:" : 'ws:') + '//' + r + '/', sessionStorage.getItem("username") || localStorage.getItem("username"), sessionStorage.getItem('password') || localStorage.getItem("password"));
      let rz = -1;
      let sa = 0;
      setInterval(function sb() {
        let sc = ee.update();
        let sd = Math.atan2(ee.mouse.y - canvas.height / 2, ee.mouse.x - canvas.width / 2);
        let se = Math.sqrt(Math.pow(ee.mouse.x - canvas.width / 2, 2) + Math.pow(ee.mouse.y - canvas.height / 2, 2)) / (Math.min(canvas.width, canvas.height) / 3);
        if (sc !== rz || sa !== sd) {
          rz = sc;
          sa = sd;
          ef.talk({
            'type': 2,
            'inputs': sc,
            'mouseAngle': sd,
            'intensity': Math.min(1, Math.max(0, se))
          });
        }
      }, 33.333333333333336);
      qn();
    }
    Object.defineProperty(window, 'startGame', {
      'value': rw,
      'writable': false,
      'configurable': false,
      'enumerable': false
    });
    if ("loadScript" in window) {
      window.loadScript();
    }
  }();
}
/*
     FILE ARCHIVED ON 16:45:37 Mar 19, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:05:24 Dec 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 84.76
  exclusion.robots: 0.118
  exclusion.robots.policy: 0.104
  cdx.remote: 0.085
  esindex: 0.013
  LoadShardBlock: 35.361 (3)
  PetaboxLoader3.datanode: 90.584 (5)
  load_resource: 152.334
  PetaboxLoader3.resolve: 72.076
  loaddict: 46.749
*/
