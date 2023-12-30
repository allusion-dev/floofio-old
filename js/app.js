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
    let q = 0x1;
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
      q = (await ac.json()).tps ?? 0x1e;
    } catch (ad) {
      window.noConnect();
      return;
    }
    let ae = {
      0x0: new Array(0x6).fill(0x0).map(() => Math.floor(Math.random() * 0x19)),
      0x1: new Array(0x6).fill(0x0).map(() => Math.floor(Math.random() * 0x19)),
      0x2: new Array(0x6).fill(0x0).map(() => Math.floor(Math.random() * 0x19))
    };
    let af = [];
    let ag = 0x0;
    let ah = 0x1;
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
        ap.src = ao[0x0];
        ap.ready = true;
        an[ao[0x1]] = ap;
        ap.addEventListener("load", () => ap.ready = true);
      }
      return an;
    }();
    const aq = {
      'GRASS': 0x0,
      'ANT': 0x1,
      'DESERT': 0x2,
      'OCEAN': 0x3,
      'SEWER': 0x4,
      'FOREST': 0x5,
      'TUNDRA': 0x6
    };
    const ar = {
      0x0: "Basic",
      0x1: "Light",
      0x2: "Faster",
      0x3: "Stinger",
      0x4: "Rock",
      0x5: "Sponge",
      0x6: "Antennae",
      0x7: "god",
      0x8: 'Lightning',
      0x9: 'Cactus',
      0xa: "Leaf",
      0xb: "Egg",
      0xc: "Ant Egg",
      0xd: "Hornet Egg",
      0xe: "Missile",
      0xf: "Iris",
      0x10: "Pincer",
      0x11: 'Magnet',
      0x12: "Armor",
      0x13: "Bubble",
      0x14: "Pearl",
      0x15: "Shell",
      0x16: 'Web',
      0x17: "Wing",
      0x18: "Third Eye",
      0x19: "Square",
      0x1a: "Triangle",
      0x1b: "Pentagon",
      0x1c: 'Peas',
      0x1d: "Grapes",
      0x1e: "Salt",
      0x1f: "Walkingstick Egg",
      0x20: "Peagun",
      0x21: 'Pollen',
      0x22: "Rose",
      0x23: "Dahlia",
      0x24: 'Primrose',
      0x25: "Powder"
    };
    let as;
    const at = {
      0x0: {
        'name': 'Common',
        'color': ak[0x1],
        'index': 0x0,
        'absorbValue': 0x1
      },
      0x1: {
        'name': "Uncommon",
        'color': ak[0x2],
        'index': 0x1,
        'absorbValue': 0x5
      },
      0x2: {
        'name': "Rare",
        'color': ak[0x3],
        'index': 0x2,
        'absorbValue': 0x32
      },
      0x3: {
        'name': 'Epic',
        'color': ak[0x4],
        'index': 0x3,
        'absorbValue': 0x1f4
      },
      0x4: {
        'name': "Legendary",
        'color': ak[0x5],
        'index': 0x4,
        'absorbValue': 0x2710
      },
      0x5: {
        'name': "Mythic",
        'color': ak[0x6],
        'index': 0x5,
        'absorbValue': 0x3d090
      },
      0x6: {
        'name': 'Ultra',
        'color': ak[0x1b],
        'index': 0x6,
        'absorbValue': 0x1312d00
      },
      0x7: {
        'name': "Super",
        'color': ak[0x1c],
        'index': 0x7,
        'absorbValue': 0x3b9aca00
      },
      0x8: {
        'name': "Ancient",
        'color': ak[0x1d],
        'index': 0x8,
        'absorbValue': 0x5d21dba00
      },
      0x9: {
        'name': 'Omega',
        'color': ak[0x20],
        'index': 0x9,
        'absorbValue': 0x22ecb25c00
      },
      0xa: {
        'name': "???",
        'color': ak[0x21],
        'index': 0xa,
        'absorbValue': 0xe8d4a51000
      }
    };
    const au = {
      0x0: {
        'key': "HEALTH",
        'name': "Max Health",
        'description': "Increases the health of your flower.",
        'tiers': [0x3, 0x9, 0x10, 0x18, 0x21, 0x30, 0x45, 0x64]
      },
      0x1: {
        'key': 'SLOTS',
        'name': "Extra Slot",
        'description': "Unlocks a new petal slot.",
        'tiers': [0x2, 0xc, 0x1a, 0x30, 0x52]
      },
      0x3: {
        'key': "RELOAD",
        'name': "Petal Reload",
        'description': "Decreases the reload time of your petals.",
        'tiers': [0x1, 0x4, 0x9, 0x10, 0x19, 0x24, 0x31, 0x40]
      },
      0x4: {
        'key': 'DAMAGE',
        'name': "Body Damage",
        'description': "Increases your flower's collision damage.",
        'tiers': [0x4, 0xc, 0x16, 0x22, 0x30]
      }
    };
    function av(aw) {
      if (aw < 0x3e8) {
        return aw;
      }
      if (aw < 0xf4240) {
        return (aw / 0x3e8).toFixed(0x1) + 'k';
      }
      if (aw < 0x3b9aca00) {
        return (aw / 0xf4240).toFixed(0x1) + 'm';
      }
      return (aw / 0x3b9aca00).toFixed(0x1) + 'b';
    }
    class ax {
      constructor() {
        this.commands = [false, false, false, false, false, false];
        this.mouse = {
          'x': 0x0,
          'y': 0x0
        };
        this.target = {
          'x': 0x0,
          'y': 0x0
        };
        this.elements = new Map();
        ai.addEventListener("mousedown", ay => this.mouseEvent(ay, true), false);
        ai.addEventListener("mouseup", az => this.mouseEvent(az, false), false);
        ai.addEventListener("mousemove", ba => this.mouseMoveEvent(ba), false);
        document.addEventListener("keydown", bb => this.keyEvent(bb, true), false);
        document.addEventListener("keyup", bc => this.keyEvent(bc, false), false);
        this.rwheel = 0x0;
        this.wheel = 0x0;
        ai.addEventListener("wheel", bd => this.wheelEvent(bd), false);
        this.inventoryOpen = false;
        this.lastClick = {
          'id': "dummyObject",
          'time': 0x0
        };
        this.frames = 0x0;
        this.fps = 0x0;
      }
      ['wheelEvent'](bf) {
        this.rwheel += bf.deltaY > 0x0 ? 0x19 : -0x19;
      }
      ["keyEvent"](bg, bh) {
        switch (bg.keyCode) {
          case 0x10:
            this.commands[0x5] = bh;
            break;
          case 0x20:
            this.commands[0x4] = bh;
            break;
          case 0x26:
          case 0x57:
            this.commands[0x0] = bh;
            break;
          case 0x28:
          case 0x53:
            this.commands[0x1] = bh;
            break;
          case 0x25:
          case 0x41:
            this.commands[0x2] = bh;
            break;
          case 0x27:
          case 0x44:
            this.commands[0x3] = bh;
            break;
        }
      }
      ['mouseMoveEvent'](bi) {
        this.mouse.x = bi.clientX;
        this.mouse.y = bi.clientY;
      }
      ["mouseEvent"](bj, bk) {
        if (bj.button === 0x0) {
          let bl = false;
          if (bk === true) {
            this.mouseMoveEvent(bj);
            const bm = this.getElements();
            for (let bn = bm.length - 0x1; bn >= 0x0; bn--) {
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
            this.commands[0x4] = bk;
          }
        } else {
          if (bj.button === 0x2) {
            this.commands[0x5] = bk;
          }
        }
      }
      ["update"]() {
        let bp = 0x0;
        let bq = 0x1;
        for (let br = 0x0; br < this.commands.length; br++) {
          if (this.commands[br]) {
            bp += bq;
          }
          bq *= 0x2;
        }
        if (window.floofConfig.mouseMovement && this.getElements().length === 0x0) {
          bp += 0x40;
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
        this.level = 0x0;
        this.levelProgress = 0x0;
        this.discordWidget = false;
        this.isDead = false;
        this.width = 0x0;
        this.height = 0x0;
        this.playerID = -0x1;
        this.entities = new Map();
        this.player = null;
        this.petals = [];
        this.scene = 0x0;
        this.camera = {
          'x': 0x0,
          'y': 0x0,
          'fov': 0x3e8,
          'getRatio'() {
            const ch = this.fov;
            return Math.max(innerWidth / ch, innerHeight / ch / 0x438 * 0x780);
          }
        };
        this.portalObjects = [];
        for (let ci = 0x0; ci < 0x32; ci++) {
          this.portalObjects.push({
            'x': 0x0,
            'y': 0x0,
            'size': 0.01 + Math.random() * 0.1,
            'speed': 0.001 + Math.random() * 0.03,
            'angle': Math.random() * Math.PI * 0x2,
            'alpha': 0.2 + Math.random() * 0.3
          });
        }
        this.inventorySelection = [-0x1, -0x1];
        this.slotSelection = -0x1;
        this.absorbSelection = {};
        this.absorbInventory = {};
        this.waves = {
          'enabled': false,
          'wave': 0x1,
          'progress': 0x0,
          'progressTarget': 0x0,
          'mobs': []
        };
      }
      ["selectInventoryItem"](cj, ck) {
        this.inventorySelection = [cj, ck];
        if (this.slotSelection > -0x1) {
          this.swapItems();
        }
      }
      ["selectSlotItem"](cl) {
        this.slotSelection = cl;
        if (this.inventorySelection[0x0] > -0x1) {
          this.swapItems();
        }
      }
      ["swapItems"]() {
        if (this.inventorySelection[0x0] > -0x1 && this.slotSelection > -0x1) {
          this.socket.talk({
            'type': 0x3,
            'newIndex': this.inventorySelection[0x0],
            'newRarity': this.inventorySelection[0x1],
            'oldIndex': this.slotSelection
          });
        }
        this.inventorySelection = [-0x1, -0x1];
        this.slotSelection = -0x1;
      }
      ["update"](cm, cn, co, cp) {
        this.width = cn;
        this.height = co;
        this.scene = cp;
        if (cm !== -0x1) {
          this.playerID = cm;
          this.player = this.entities.get(cm);
        } else {
          this.player = null;
        }
      }
      ["updatePortalObjects"]() {
        for (let cq = 0x0; cq < this.portalObjects.length; cq++) {
          let cr = this.portalObjects[cq];
          cr.x += Math.cos(cr.angle) * cr.speed;
          cr.y += Math.sin(cr.angle) * cr.speed;
          if (cr.x < -0x1 || cr.x > 0x1 || cr.y < -0x1 || cr.y > 0x1) {
            cr.alpha -= cr.speed * 0.25;
            if (cr.alpha <= 0x0) {
              cr.x = 0x0;
              cr.y = 0x0;
              cr.size = 0.01 + Math.random() * 0.1;
              cr.speed = 0.01 + Math.random() * 0.03;
              cr.angle = Math.random() * Math.PI * 0x2;
              cr.alpha = 0.2 + Math.random() * 0.3;
            }
          }
        }
      }
      ["filterEntities"](cs) {
        for (const ct of this.entities.keys()) {
          if (cs.indexOf(ct) === -0x1) {
            this.entities['delete'](ct);
          }
        }
      }
    }
    class cu {
      constructor() {
        this.socket = null;
        this.inbound = 0x0;
        this.outbound = 0x0;
        this.inboundData = 0x0;
        this.outboundData = 0x0;
        this.latency = 0x0;
        this.server = {
          'fps': 0x0,
          'tick': 0x0,
          'entities': 0x0
        };
        this.world = new cg();
        this.world.socket = this;
        this.username = '';
        this.password = '';
        this.validated = false;
        this.worker = new Worker("./js/workers/packer.js");
        this.workerMap = new Map();
        this.workerJobID = 0x0;
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
          'type': 0x0,
          'time': performance.now()
        });
        this.talk({
          'type': 0x1
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
        ah = 0x0;
        setTimeout(() => location.reload(), 0xdac);
        if (!this.validated) {
          localStorage.clear();
        }
      }
      async ["talk"](dl) {
        if (this.socket?.["readyState"] !== 0x1) {
          return;
        }
        const dm = await this.encode(dl);
        switch (dl.type) {
          case 0x0:
            this.lastPing = performance.now();
            break;
          case 0x1:
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
          case 0x0:
            this.latency = performance.now() - this.lastPing;
            this.server = dq.server;
            setTimeout(() => this.talk({
              'type': 0x0,
              'time': performance.now()
            }), 0x3e8);
            break;
          case 0x1:
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
                  'size': 0x1,
                  'animations': {
                    'mouthDip': 0x0,
                    'mood': 0x0
                  }
                };
                dv.x = dv.rx = du.x;
                dv.y = dv.ry = du.y;
                dv.rsize = dv.size;
                dv.rotation = dv.rrotation = du.rotation;
                dv.health = {
                  'draws': du.health > 0x0,
                  'real': du.health,
                  'display': 0x1,
                  'backbar': 0x1,
                  'backbarTicker': 0x32,
                  'alpha': 0x0
                };
                dv.shield = {
                  'draws': du.shield > 0x0,
                  'real': du.shield,
                  'display': 0x0,
                  'alpha': 0x0
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
                dv.shield.draws = du.shield > 0x0;
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
            if (dq.playerID !== -0x1) {
              this.world.camera.fov = dq.fov;
              let dw = [];
              for (let dx = 0x0; dx < dq.petals.length; dx++) {
                let dy = dq.petals[dx];
                let dz = this.world.petals.find((ea, eb) => {
                  return eb === dx && ea.alive === dy.alive && ea.index === dy.index && ea.rarity === at[dy.rarity];
                });
                dw.push({
                  ...dy,
                  'rarity': at[dy.rarity],
                  'ratio': dz ? dz.ratio : dy.ratio,
                  'rratio': dy.ratio,
                  'spinAngle': dz ? dz.spinAngle : 0x0
                });
              }
              this.world.petals = dw;
            }
            this.world.update(dq.playerID, this.world.width, this.world.height, this.world.scene);
            break;
          case 0x2:
            af = dq.hardcodedPaths;
            break;
          case 0x3:
            this.world.update(-0x1, dq.width, dq.height, dq.scene);
            break;
          case 0x4:
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
          case 0x5:
            this.world.isDead = true;
            break;
          case 0x6:
            this.world.discordWidget = true;
            break;
          case 0x7:
            this.world.discordWidget = dq.response ? 0x4 : 0x1;
            break;
          case 0x8:
            this.world.waves = {
              'enabled': dq.enabled,
              'wave': dq.wave ?? 0x0,
              'progressTarget': dq.progress ?? 0x0,
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
        var [ej, en, eo] = ej.match(/\w\w/g).map(ep => parseInt(ep, 0x10));
        var [ek, eq, er] = ek.match(/\w\w/g).map(es => parseInt(es, 0x10));
        return ei[em] = '#' + Math.round(ej + (ek - ej) * el).toString(0x10).padStart(0x2, '0') + Math.round(en + (eq - en) * el).toString(0x10).padStart(0x2, '0') + Math.round(eo + (er - eo) * el).toString(0x10).padStart(0x2, '0');
      };
    }();
    function et(eu, ev, ew, ex = ef.world) {
      let ey;
      switch (ex.scene) {
        case 0x1:
          ey = al.ant;
          break;
        case 0x2:
          ey = al.desert;
          break;
        case 0x3:
          ey = al.ocean;
          break;
        case 0x4:
          ey = al.sewerGrates;
          break;
        case 0x5:
          ey = al.forest;
          break;
        case 0x6:
          ey = al.tundra;
          break;
        default:
          ey = al.grass;
          break;
      }
      if (ey === undefined || ey.ready === false) {
        const ez = 0xc * eu;
        let fa;
        let fb;
        switch (ex.scene) {
          case 0x1:
            {
              fa = ak[0x12];
              fb = ak[0x11];
            }
            ;
            break;
          case 0x2:
            {
              fa = ak[0x14];
              fb = ak[0x15];
            }
            ;
            break;
          case 0x3:
            {
              fa = ak[0x16];
              fb = ak[0x17];
            }
            ;
            break;
          default:
            {
              fa = ak[0x0];
              fb = ak[0x13];
            }
            ;
        }
        aj.fillStyle = fb;
        aj.strokeStyle = ak[0xf];
        aj.fillRect(0x0, 0x0, innerWidth, innerHeight);
        aj.fillStyle = fa;
        aj.fillRect(-ev + innerWidth * 0.5 - ex.width * eu, -ew + innerHeight * 0.5 - ex.height * eu, ex.width * eu * 0x2, ex.height * eu * 0x2);
        aj.globalAlpha = 0.04;
        aj.lineWidth = eu;
        for (let fc = (innerWidth * 0.5 - ev) % ez; fc <= innerWidth; fc += ez) {
          aj.beginPath();
          aj.moveTo(fc, 0x0);
          aj.lineTo(fc, innerHeight);
          aj.stroke();
        }
        for (let fd = (innerHeight * 0.5 - ew) % ez; fd <= innerHeight; fd += ez) {
          aj.beginPath();
          aj.moveTo(0x0, fd);
          aj.lineTo(innerWidth, fd);
          aj.stroke();
        }
        aj.globalAlpha = 0x1;
        return;
      }
      aj.clearRect(0x0, 0x0, innerWidth, innerHeight);
      aj.save();
      {
        let fe = ex.scene === 0x4 ? al.sewer : al.dirt;
        let ff = fe.width * eu;
        let fg = fe.height * eu;
        for (let fh = -ev % ff - fg; fh <= innerWidth; fh += ff) {
          for (let fi = -ew % ff - ff; fi <= innerHeight; fi += ff) {
            aj.drawImage(fe, fh - 0x1 | 0x0, fi - 0x1 | 0x0, ff + 0x2 | 0x0, fg + 0x2 | 0x0);
          }
        }
      }
      aj.beginPath();
      aj.rect(-ev + innerWidth * 0.5 - ex.width * eu, -ew + innerHeight * 0.5 - ex.height * eu, ex.width * eu * 0x2, ex.height * eu * 0x2);
      aj.clip();
      let fj = ey.width * eu;
      let fk = ey.height * eu;
      for (let fl = -ev % fj - fk; fl <= innerWidth; fl += fj) {
        for (let fm = -ew % fj - fj; fm <= innerHeight; fm += fj) {
          aj.drawImage(ey, fl - 0x1 | 0x0, fm - 0x1 | 0x0, fj + 0x2 | 0x0, fk + 0x2 | 0x0);
        }
      }
      aj.restore();
    }
    function fn(fo) {
      aj.strokeStyle = eh(fo, ak[0xf], 0.2);
      aj.fillStyle = fo;
    }
    function fp(fq, fr, fs, ft, fu, fv = true) {
      aj.beginPath();
      switch (fq) {
        case 0x0:
          {
            const fw = aj.fillStyle;
            if (fv) {
              aj.fillStyle = aj.strokeStyle;
              aj.arc(fr, fs, ft + aj.lineWidth, 0x0, Math.PI * 0x2);
              aj.fill();
              aj.closePath();
              aj.beginPath();
            }
            aj.arc(fr, fs, ft, 0x0, Math.PI * 0x2);
            aj.fillStyle = fw;
            aj.fill();
            return aj.closePath();
          }
          break;
        default:
          {
            aj.translate(fr, fs);
            aj.rotate(fu);
            if (fq > 0x0) {
              for (let fx = 0x0; fx < fq; fx++) {
                const fy = fx / fq * Math.PI * 0x2;
                aj.lineTo(ft * Math.cos(fy), ft * Math.sin(fy));
              }
            } else {
              const fz = 0x1 - 0x7 / fq / fq;
              fq = -fq;
              aj.moveTo(ft, 0x0);
              for (let ga = 0x0; ga < fq; ga++) {
                const gc = (ga + 0x1) / fq * Math.PI * 0x2;
                const gd = (ga + 0.5) / fq * Math.PI * 0x2;
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
      aj.font = (go | 0x0) + "px 'Ubuntu'";
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
      aj.strokeStyle = ak[0x1a];
      aj.lineWidth *= 1.5;
      const gy = Math.sin(performance.now() * 0.02 + gw) * 0.1;
      aj.beginPath();
      aj.moveTo(0x0, -gv * 0.8);
      aj.rotate(gy);
      aj.lineTo(gv * 1.8, -gv * 0.425);
      aj.closePath();
      aj.stroke();
      aj.rotate(-gy);
      aj.beginPath();
      aj.moveTo(0x0, gv * 0.8);
      aj.rotate(-gy);
      aj.lineTo(gv * 1.8, gv * 0.425);
      aj.closePath();
      aj.stroke();
      aj.restore();
      fp(0x0, gt, gu, gv, 0x0, true);
    }
    function gz(ha, hb, hc, hd, he, hf, hg, hh = 0x0, hi = {}) {
      const hj = he * hf;
      aj.translate(hc, hd);
      aj.rotate(hg);
      const hk = Math.abs(hi.health.display - hi.health.real);
      const hl = hk && hk > 0.025 ? 0.5 : 0x0;
      hi.health.display = hi.health.display + 0.075 * (hi.health.real - hi.health.display);
      hi.shield.display = hi.shield.display + 0.075 * (hi.shield.real - hi.shield.display);
      if (hk < 0.01) {
        hi.health.backbar = hi.health.backbar + 0.1 * (hi.health.real - hi.health.backbar);
      }
      switch (ha) {
        case 0x1:
          {
            aj.lineWidth = hj * 0.1;
            let hm = ak[0x7];
            if (hi.isPoisoned) {
              hm = eh(hm, ak[0x1e], 0.85);
            }
            if (hi.armor) {
              let hn = window.petalIcons.Armor_0;
              if (hn) {
                let ho = performance.now() / 333.3333333333333 * (hi.id % 0x2 ? -0x1 : 0x1);
                aj.rotate(ho - hg);
                aj.drawImage(hn, -hj * 2.9, -hj * 2.9, hj * 5.8, hj * 5.8);
                aj.rotate(-ho + hg);
              }
            }
            fn(eh(hm, "#FFFFFF", hl));
            fp(0x0, 0x0, 0x0, hj, hg);
            aj.rotate(-hg);
            hq(aj, hi, hi.attack ? 0x2 : hi.defend ? 0x3 : 0x1, hj, hg);
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
        case 0x2:
          {
            let ht;
            switch (hb) {
              case 0x0:
              case 0x1:
                ht = window.petalRenders.Basic_0;
                break;
              case 0x3:
                ht = window.petalRenders.Stinger_0;
                break;
              case 0xc:
                ht = window.petalRenders.SingleEgg_0;
                break;
              case 0xd:
                ht = window.petalRenders.Egg_7;
                break;
              case 0x23:
                ht = window.petalRenders.Rose_0;
                break;
              case 0x24:
                aj.save();
                aj.globalAlpha = 0.2;
                aj.beginPath();
                aj.arc(0x0, 0x0, Math.abs(hj * 1.5 + Math.sin(hi.id + performance.now() / 0x2ee) * hj * 0x4), 0x0, Math.PI * 0x2);
                aj.closePath();
                aj.fillStyle = "#FFFFFF";
                aj.fill();
                aj.restore();
                ht = window.petalRenders[ar[hb] + '_' + hi.rarity.index];
                break;
              default:
                ht = window.petalRenders[ar[hb] + '_' + hi.rarity.index];
            }
            aj.drawImage(ht, -hj * 0x2, -hj * 0x2, hj * 0x4, hj * 0x4);
          }
          break;
        case 0x3:
          {
            let hu;
            let hv = 0x2;
            switch (hb) {
              case 0x0:
                {
                  hu = mobIcons["Ladybug_" + hi.id % 0xa];
                }
                ;
                break;
              case 0x1:
                {
                  hu = mobIcons.Bee;
                  hv = 3.5;
                }
                ;
                break;
              case 0x2:
              case 0x3:
              case 0x4:
              case 0x5:
              case 0xf:
              case 0x10:
              case 0x11:
              case 0x12:
              case 0x20:
              case 0x21:
              case 0x22:
              case 0x23:
                {
                  let hw = hi.isPlayerMob ? ak[0x7] : hb > 0x1f ? ak[0x22] : hb > 0x5 ? ak[0x1f] : ak[0x18];
                  aj.save();
                  fn(eh(hw, "#FFFFFF", hl));
                  aj.lineWidth = 0.4;
                  aj.scale(hj, hj);
                  switch (hb) {
                    case 0x2:
                    case 0xf:
                    case 0x20:
                      gs(0x0, 0x0, 0x1, hi.id, eh(hw, "#FFFFFF", hl));
                      break;
                    case 0x3:
                    case 0x10:
                    case 0x21:
                      fp(0x0, -1.1, 0x0, 0.667, 0x0, true);
                      gs(0x0, 0x0, 0x1, hi.id, eh(hw, '#FFFFFF', hl));
                      break;
                    case 0x4:
                    case 0x11:
                    case 0x22:
                      fp(0x0, -1.1, 0x0, 0.667, 0x0, true);
                      const hx = Math.sin(performance.now() * 0.01 + hi.id) * 0.3 + Math.PI / 0xa;
                      aj.save();
                      aj.globalAlpha = 0.5;
                      aj.fillStyle = eh(ak[0x19], "#FFFFFF", hl);
                      aj.rotate(hx);
                      aj.beginPath();
                      aj.moveTo(0x0, 0x0);
                      aj.ellipse(-0x1, -0.3, 1.35, 0.5, 0x0, 0x0, Math.PI * 0x2);
                      aj.rotate(-hx * 0x2);
                      aj.ellipse(-0x1, 0.3, 1.35, 0.5, 0x0, 0x0, Math.PI * 0x2);
                      aj.closePath();
                      aj.fill();
                      aj.restore();
                      gs(0x0, 0x0, 0x1, hi.id, eh(hw, "#FFFFFF", hl));
                      break;
                    case 0x5:
                    case 0x12:
                    case 0x23:
                      aj.lineWidth *= 0.8;
                      fp(0x0, -0x2, 0x0, 1.3, 0x0, true);
                      fp(0x0, -1.1, 0x0, 1.15, 0x0, true);
                      const hy = Math.sin(performance.now() * 0.01 + hi.id) * 0.3 + Math.PI / 0xa;
                      aj.save();
                      aj.globalAlpha = 0.5;
                      aj.fillStyle = eh(ak[0x19], "#FFFFFF", hl);
                      aj.rotate(hy);
                      aj.beginPath();
                      aj.moveTo(0x0, 0x0);
                      aj.ellipse(-0x1, -0.3, 1.35, 0.5, 0x0, 0x0, Math.PI * 0x2);
                      aj.rotate(-hy * 0x2);
                      aj.ellipse(-0x1, 0.3, 1.35, 0.5, 0x0, 0x0, Math.PI * 0x2);
                      aj.closePath();
                      aj.fill();
                      aj.restore();
                      gs(0x0, 0x0, 0x1, hi.id, eh(hw, "#FFFFFF", hl));
                      break;
                  }
                  aj.restore();
                }
                break;
              case 0x6:
                hu = mobIcons["Ant Hole"];
                break;
              case 0x13:
                hu = mobIcons["Fire Ant Hole"];
                break;
              case 0x24:
                hu = mobIcons["Pharaoh Ant Hole"];
                break;
              case 0x7:
                hu = mobIcons["Rock_" + hi.rarity.index];
                break;
              case 0x8:
                hu = mobIcons["Sponge_" + hi.id % 0x3];
                break;
              case 0x9:
                {
                  hu = mobIcons.Hornet;
                  hv = 3.5;
                }
                ;
                break;
              case 0xa:
                hu = mobIcons.Bubble;
                break;
              case 0xb:
                aj.save();
                aj.lineWidth = 0.125;
                aj.scale(hj, hj);
                fn(eh("#DFDFDF", "#FFFFFF", hl));
                aj.beginPath();
                aj.arc(0x0, 0x0, 0x1, 0x0, Math.PI * 0x2);
                aj.closePath();
                aj.globalAlpha = 0.5;
                aj.fill();
                aj.globalAlpha = 0x1;
                aj.stroke();
                for (let hz = 0x0; hz < 0x8; hz++) {
                  aj.save();
                  aj.rotate(Math.PI * 0x2 / 0x8 * hz);
                  aj.beginPath();
                  aj.moveTo(0.8, 0x0);
                  let ia = Math.sin(performance.now() * 0.00125 + hi.id) * 0.3;
                  aj.lineTo(1.6, ia * (hz % 0x2 == 0x0 ? 0x1 : 0.8));
                  aj.closePath();
                  aj.stroke();
                  aj.restore();
                }
                aj.restore();
                break;
              case 0xc:
                hu = mobIcons['Cactus_' + hi.rarity.index];
                break;
              case 0xd:
                {
                  aj.save();
                  aj.scale(hj, hj);
                  let ib = Math.sin(performance.now() * 0.01 + hi.id) * 0.05;
                  aj.rotate(ib);
                  aj.drawImage(window.mobIcons.Pincer, 0.575, -0x1, 0x1, 1.334);
                  aj.rotate(-ib * 0x2);
                  aj.scale(0x1, -0x1);
                  aj.drawImage(window.mobIcons.Pincer, 0.575, -0x1, 0x1, 1.334);
                  aj.restore();
                }
                aj.drawImage(window.mobIcons[hi.isPlayerMob ? 'Beetle_Body_Player' : "Beetle_Body"], -hj, -hj, hj * 0x2, hj * 0x2);
                break;
              case 0xe:
                {
                  aj.strokeStyle = "#444444";
                  aj.save();
                  aj.scale(hj, hj);
                  aj.lineWidth = 0.1;
                  let ic = Math.sin(performance.now() * 0.01 + hi.id) * 0.05;
                  let ie = Math.sin(performance.now() * 0.01 + hi.id + Math.PI / 0x3) * 0.05;
                  let ig = Math.sin(performance.now() * 0.01 + hi.id + Math.PI / 0x3 * 0x2) * 0.05;
                  aj.rotate(ic);
                  aj.beginPath();
                  aj.moveTo(0.45, 0x0);
                  aj.lineTo(0.45, 0.725);
                  aj.closePath();
                  aj.stroke();
                  aj.beginPath();
                  aj.moveTo(0.45, 0x0);
                  aj.lineTo(0.45, -0.725);
                  aj.closePath();
                  aj.stroke();
                  aj.rotate(-ic + ie);
                  aj.beginPath();
                  aj.moveTo(0.1, 0x0);
                  aj.lineTo(0x0, 0.8);
                  aj.closePath();
                  aj.stroke();
                  aj.beginPath();
                  aj.moveTo(0.1, 0x0);
                  aj.lineTo(0x0, -0.775);
                  aj.closePath();
                  aj.stroke();
                  aj.rotate(-ie - ig);
                  aj.beginPath();
                  aj.moveTo(-0.5, 0x0);
                  aj.lineTo(-0.5, 0.775);
                  aj.closePath();
                  aj.stroke();
                  aj.beginPath();
                  aj.moveTo(-0.5, 0x0);
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
                  aj.rotate(-ih * 0x2);
                  aj.scale(0x1, -0x1);
                  aj.drawImage(window.mobIcons.Pincer, 0.3, -0.7, 0.675, 0.8);
                  aj.restore();
                }
                aj.drawImage(window.mobIcons.Scorpion_Body, -hj, -hj, hj * 0x2, hj * 0x2);
                break;
              case 0x14:
                hu = window.mobIcons.Shell;
                break;
              case 0x15:
                aj.save();
                fn(eh(ak[0x18], "#FFFFFF", hl));
                aj.scale(hj, hj);
                aj.lineWidth = 0.25;
                aj.beginPath();
                {
                  let ii = Math.sin(performance.now() * 0.01 + hi.id) * 0.05 * 0.5;
                  aj.rotate(ii);
                  aj.moveTo(0.9, -0.7);
                  aj.bezierCurveTo(1.1, -1.1, 1.7, -1.3, 1.5, -0x2);
                  aj.rotate(-ii);
                }
                {
                  let ij = Math.sin(performance.now() * 0.02 + hi.id) * 0.05 * 0.75;
                  aj.rotate(ij);
                  aj.moveTo(0.9, 0.7);
                  aj.bezierCurveTo(1.1, 1.1, 1.7, 1.3, 1.5, 0x2);
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
                fp(0x0, 0x0, 0x0, 0x1, 0x0);
                aj.restore();
                break;
              case 0x16:
                hu = window.mobIcons.Web;
                break;
              case 0x17:
                fn(eh(ak[0x18], '#FFFFFF', hl));
                aj.lineWidth = hj * 0.15;
                fp(0x0, 0x0, 0x0, hj, 0x0);
                const ir = Math.sin(performance.now() * 0.01 + hi.id) * 0.35 + Math.PI / 0xa;
                aj.save();
                aj.globalAlpha = 0.5;
                aj.scale(hj * 1.25, hj * 1.25);
                aj.translate(0x0, -0.5);
                aj.rotate(ir);
                aj.drawImage(window.mobIcons.Wing, -0.5, -0.5, 0x1, 0x1);
                aj.rotate(-ir);
                aj.translate(0x0, 0x1);
                aj.rotate(-ir);
                aj.drawImage(window.mobIcons.Wing, -0.5, -0.5, 0x1, 0x1);
                aj.restore();
                break;
              case 0x18:
                hu = window.mobIcons.Square;
                break;
              case 0x19:
                hu = window.mobIcons.Triangle;
                break;
              case 0x1a:
                hu = window.mobIcons.Pentagon;
                break;
              case 0x1b:
                hu = window.mobIcons.Wasp;
                hv = 3.5;
                break;
              case 0x1c:
                hu = window.mobIcons["Evil Ladybug_" + hi.id % 0xa];
                break;
              case 0x1d:
                hu = window.mobIcons["Shrub_" + hi.id % 0xa];
                break;
              case 0x1e:
                hu = window.mobIcons.WalkingstickBody;
                aj.save();
                hi.stickbugRotate = (hi.stickbugRotate || 0x0) + 0.16666666666666666 * ((hi.rstickBugRotate || 0x0) - (hi.stickbugRotate || 0x0));
                aj.rotate(hi.stickbugRotate);
                aj.drawImage(window.mobIcons.WalkingstickLegs, -hj * (hv / 0x2), -hj * (hv / 0x2), hj * hv, hj * hv);
                aj.restore();
                break;
              case 0x1f:
                hu = window.mobIcons["Shiny Ladybug_" + hi.id % 0xa];
                break;
              case 0x25:
                hu = window.mobIcons.CentipedeHead;
                hv = 0x3;
                break;
              case 0x26:
                hu = window.mobIcons.CentipedeSegment;
                hv = 0x3;
                break;
              case 0x27:
                hu = window.mobIcons.EvilCentipedeHead;
                hv = 0x3;
                break;
              case 0x28:
                hu = window.mobIcons.EvilCentipedeSegment;
                hv = 0x3;
                break;
              case 0x29:
                hu = window.mobIcons.DesertCentipedeHead;
                hv = 0x3;
                break;
              case 0x2a:
                hu = window.mobIcons.DesertCentipedeSegment;
                hv = 0x3;
                break;
              case 0x2b:
                hu = window.mobIcons.DemonCoreBody;
                hv = 2.5;
                break;
              case 0x2c:
                hu = window.mobIcons.DemonCoreOrb;
                hv = 2.5;
                hi.health.draws = false;
                break;
            }
            if (hu) {
              aj.drawImage(hu, -hj * (hv / 0x2), -hj * (hv / 0x2), hj * hv, hj * hv);
            }
          }
          ;
          break;
        case 0x6:
          {
            let is = hj * hi.width;
            let iu = hj * hi.height;
            fn(ak[0x12], "#000000", 0.2);
            aj.fillRect(-is - 0x1, -iu - 0x1, is * 0x2 + 0x2, iu * 0x2 + 0x2);
          }
          break;
        case 0x8:
          fn('#FFFFFF');
          aj.lineWidth = hj * 0.05;
          aj.globalAlpha = 0.3333333333333333;
          fp(0x0, 0x0, 0x0, hj, 0x0, false);
          fp(0x6, 0x0, 0x0, hj * 0.9, performance.now() / 0x1f4, true);
          fp(0x6, 0x0, 0x0, hj * 0.7, -performance.now() / 0x190, true);
          fp(0x6, 0x0, 0x0, hj * 0.5, performance.now() / 0x12c, true);
          fp(0x6, 0x0, 0x0, hj * 0.3, -performance.now() / 0xc8, true);
          ef.world.portalObjects.forEach(function iv(iw) {
            aj.globalAlpha = iw.alpha;
            fp(0x0, iw.x * hj, iw.y * hj, hj * iw.size, 0x0, false);
          });
          aj.globalAlpha = 0x1;
          break;
        case 0x5:
          fn(hi.rarity.color);
          aj.lineWidth = hj * 0.1;
          aj.globalAlpha = 0.9;
          fp(0x4, 0x0, 0x0, hj, Math.PI / 0x4);
          {
            let ix = window.petalIcons[ar[hi.index] + '_' + hi.rarity.index];
            if (ix) {
              aj.drawImage(ix, -hj * 0.8, -hj * 0.8, hj * 1.6, hj * 1.6);
            }
          }
          gk(ar[hi.index], 0x0, hj * 0.5, hj / 2.5, "#FFFFFF", "center");
          aj.globalAlpha = 0x1;
          break;
        case 0x4:
          switch (hi.index) {
            case 0x0:
              aj.drawImage(window.petalRenders.Missile_0, -hj * 0x2, -hj * 0x2, hj * 0x4, hj * 0x4);
              break;
            case 0x1:
              aj.save();
              aj.lineWidth = 0x2;
              aj.beginPath();
              aj.moveTo(0x0, 0x0);
              if (hi.points) {
                for (let iy = 0x0; iy < hi.points.length; iy++) {
                  aj.lineTo(hi.points[iy].x * hf, hi.points[iy].y * hf);
                }
              }
              aj.strokeStyle = "#FFFFFF";
              aj.stroke();
              aj.restore();
              break;
            case 0x2:
              aj.drawImage(window.mobIcons.ScorpionStinger, -hj, -hj, hj * 0x2, hj * 0x2);
              break;
            case 0x3:
              aj.drawImage(window.petalRenders.SingularPea_0, -hj, -hj, hj * 0x2, hj * 0x2);
              break;
            case 0x4:
              aj.drawImage(window.petalRenders.SingularGrape_0, -hj, -hj, hj * 0x2, hj * 0x2);
              break;
            case 0x5:
              aj.drawImage(window.petalRenders.Rose_0, -hj, -hj, hj * 0x2, hj * 0x2);
              break;
            case 0x6:
              aj.drawImage(window.mobIcons.DemonCoreMissile, -hj, -hj, hj * 0x2, hj * 0x2);
              break;
          }
          break;
      }
      aj.rotate(-hg);
      if (hi.health.draws && hi.index !== 0x16) {
        let iz = Math.max(hj * 0x2, 0x1e * hf);
        let ja = -iz / 0x2;
        let jb = iz / 0x2;
        let jc = hj + 0x12 * hf;
        if (hi.rarity) {
          gk(hi.rarity.name, jb, jc + 0x6 * hf, 0x5 * hf, hi.rarity.color, 'right');
        }
        if (hi.name) {
          gk(hi.name, ja, jc - 0x6 * hf, 0x5 * hf, "#FFFFFF", 'left');
        }
        ge(ja, jb, jc, 0x3 * hf, ak[0xf]);
        aj.globalAlpha *= 0.5;
        ge(ja, ja + iz * hi.health.backbar, jc, 0x1 * hf, ak[0xe]);
        aj.globalAlpha *= 0x2;
        ge(ja, ja + iz * hi.health.display, jc, 0x2 * hf, ak[0xd]);
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
          aj.lineWidth = 0x4;
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
          aj.lineWidth = 0x5;
          aj.stroke();
        }
      }
      function jv(jw, jx, jy, jz, ka, kc, kd = eh(jz, '#000000', 0.2)) {
        if (kc) {
          ka.spinAngle += 0.05 + ka.ratio / 0x5;
        }
        let ke = jy / 0x2;
        aj.save();
        aj.fillStyle = eh(kd, "#000000", 0.334);
        aj.beginPath();
        aj.rect(jw - 2.5, jx - 2.5, jy + 5, jy + 5);
        aj.closePath();
        aj.fill();
        aj.clip();
        aj.fillStyle = jz;
        aj.beginPath();
        aj.arc(jw + ke, jx + ke, jy, ka.spinAngle, ka.spinAngle + Math.PI * 0x2 * ka.ratio);
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
        const ki = innerHeight - 0x14 - 0x41;
        let kj = 0x0;
        for (let kk = kg.petals.length; kj < kk; kj++) {
          let kl = kg.petals[kj];
          kl.ratio = kl.ratio + 0.125 * (kl.rratio - kl.ratio);
          kl.ratio = Math.max(0x0, Math.min(0x1, kl.ratio));
          const km = 79 * kk * 0.5 - 79 * kj;
          if (kl.alive) {
            jm(kh - km, ki, 0x41, 0x41, eh(kl.rarity.color, "#000000", 0.334), true, false);
            jm(kh - km, ki + 0x41, 0x41, -0x41 * kl.ratio, kl.rarity.color, true, false);
            jm(kh - km, ki, 0x41, 0x41, kl.rarity.color, false, true);
          } else {
            jv(kh - km, ki, 0x41, kl.rarity.color, kl, true);
          }
          let kn = window.petalIcons[ar[kl.index] + '_' + kl.rarity.index];
          if (kn) {
            aj.drawImage(kn, kh - km + 6.5, ki, 52, 52);
          }
          gk(ar[kl.index], kh - km + 32.5, ki + 52, 13, "#ffffff", 'center');
          ee.addElement("actionBar" + kj, kh - km, ki, kh - km + 0x41, ki + 0x41, () => {
            if (kg.player !== null) {
              kg.selectSlotItem(kj);
            }
          });
        }
      }
      let ko = 0xa0;
      function kp(kq) {
        ko = ko + 0.125 * ((kq.includes('minimap') ? 0xf0 : 0xa0) - ko);
        aj.fillStyle = ak[0xf];
        aj.fillRect(innerWidth - 0x14 - ko, 0x14, ko, ko);
        ee.addElement('minimap', innerWidth - 0x14 - ko, 0x14, innerWidth - 0x14, 0x14 + ko);
      }
      const kr = ["#dbd849", "#895adc", '#dc5a5a', '#5a9edb', "#C8C8C8"];
      aj.save();
      kr.forEach(ks => {
        fn(ks);
        kr.push('#' + aj.strokeStyle.slice(0x1));
      });
      aj.restore();
      function kt(ku) {
        let kv = innerHeight - 0xe - 0x37;
        for (let kw = 0x0; kw < 0x5; kw++) {
          je(0xe, kv, 0x37, 0x37, eh(kr[kw], "#FFFFFF", ku.includes(kw) ? 0.2 : 0x0));
          switch (kw) {
            case 0x4:
              ee.addElement(kw, 0xe, kv, 69, kv + 0x37, () => ee.settingsOpen = true);
              aj.save();
              aj.fillStyle = aj.strokeStyle;
              aj.translate(25, kv + 11);
              aj.scale(33, 33);
              aj.beginPath();
              aj.fill(gr.settings);
              aj.closePath();
              aj.restore();
              break;
            case 0x3:
              ee.addElement(kw, 0xe, kv, 69, kv + 0x37, () => ee.inventoryOpen = true);
              aj.save();
              aj.fillStyle = aj.strokeStyle;
              aj.translate(25, kv + 11);
              aj.scale(33, 33);
              aj.beginPath();
              aj.fill(gr.inventory);
              aj.closePath();
              aj.restore();
              break;
            case 0x2:
              ee.addElement(kw, 0xe, kv, 69, kv + 0x37, () => ee.skillOpen = true);
              aj.save();
              aj.fillStyle = aj.strokeStyle;
              aj.translate(25, kv + 11);
              aj.scale(33, 33);
              aj.beginPath();
              aj.fill(gr.skills);
              aj.closePath();
              aj.restore();
              break;
            case 0x1:
              ee.addElement(kw, 0xe, kv, 69, kv + 0x37, () => {
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
            case 0x0:
              ee.addElement(kw, 0xe, kv, 69, kv + 0x37, () => ee.mobGalleryOpen = true);
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
        let la = ef.world.absorbSelection[ky] || [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        la[kz]++;
        ef.world.absorbInventory[ky][kz]--;
        ef.world.absorbSelection[ky] = la;
      }
      function lb(lc) {
        if (!lc.waves.enabled) {
          return;
        }
        gk("Wave " + lc.waves.wave, innerWidth / 0x2, 24, 0x1e, "#ffffff", "center");
        lc.waves.progress = lc.waves.progress + 0.1 * (lc.waves.progressTarget - lc.waves.progress);
        let ld;
        let le = 0x0;
        let lf = 0x1;
        let lg = lc.waves.progress / 0.1;
        if (lc.waves.progress > 0.9) {
          le = 0x6;
          lf = 0x7;
          lg = (lc.waves.progress - 0.9) / 0.1;
        } else {
          if (lc.waves.progress > 0.8) {
            le = 0x5;
            lf = 0x6;
            lg = (lc.waves.progress - 0.8) / 0.1;
          } else {
            if (lc.waves.progress > 0.65) {
              le = 0x4;
              lf = 0x5;
              lg = (lc.waves.progress - 0.65) / 0.15;
            } else {
              if (lc.waves.progress > 0.45) {
                le = 0x3;
                lf = 0x4;
                lg = (lc.waves.progress - 0.45) / 0.2;
              } else {
                if (lc.waves.progress > 0.25) {
                  le = 0x2;
                  lf = 0x3;
                  lg = (lc.waves.progress - 0.25) / 0.2;
                } else if (lc.waves.progress > 0.1) {
                  le = 0x1;
                  lf = 0x2;
                  lg = (lc.waves.progress - 0.1) / 0.15;
                }
              }
            }
          }
        }
        ld = eh(at[le].color, at[lf].color, lg);
        je(innerWidth / 0x2 - 150, 54, 0x12c, 0x14, '#000000', true, true);
        je(innerWidth / 0x2 - 150, 54, 0x12c * (0x1 - lc.waves.progress), 0x14, ld, true, true);
      }
      function lh(li) {
        if (li < 0x400) {
          return li + 'b';
        }
        if (li < 0x100000) {
          return (li / 0x400).toFixed(0x1) + 'kb';
        }
        if (li < 0x40000000) {
          return (li / 0x100000).toFixed(0x1) + 'mb';
        }
        return (li / 0x40000000).toFixed(0x1) + 'gb';
      }
      function lj() {
        let lk = 0xe;
        let ll = 0xe;
        let lm = false;
        if (window.floofConfig.showFPS) {
          let ln = "FPS: " + ee.fps;
          gk(ln, lk, ll, 0xf, '#ffffff', "left");
          lk += aj.measureText(ln).width + 0xe;
          lm = true;
        }
        if (window.floofConfig.showPing) {
          let lo = "Ping: " + ef.latency.toFixed(0x1) + 'ms';
          gk(lo, lk, ll, 0xf, "#ffffff", "left");
          lk += aj.measureText(lo).width + 0xe;
          lm = true;
        }
        if (window.floofConfig.showBandwidth) {
          let lp = "In: " + lh(ef.inboundData) + '/s';
          gk(lp, lk, ll, 0xf, "#ffffff", "left");
          lk += aj.measureText(lp).width + 0xe;
          lp = "Out: " + lh(ef.outboundData) + '/s';
          gk(lp, lk, ll, 0xf, "#ffffff", "left");
          lk += aj.measureText(lp).width + 0xe;
          lm = true;
        }
        if (lm) {
          lk = 0xe;
          ll += 0xe;
        }
        if (window.floofConfig.showServerDebug && ef.server.tick) {
          for (let lq of ["Server FPS: " + ef.server.fps, "Server Tick: " + ef.server.tick.toFixed(0x2) + "ms/tick", "Server Entities: " + ef.server.entities]) {
            gk(lq, lk, ll, 0xf, "#ffffff", 'left');
            lk += aj.measureText(lq).width + 0xe;
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
          je(0xe, innerHeight - 0xe - 0x7d, 0x12c, 0x7d, "#5865F2", true, true);
          if (lr.discordWidget === 0x4) {
            gk("Successfully linked", 164, innerHeight - 0xe - 0x7d + 0x14, 0x19, "#ffffff", "center");
          } else {
            gk("Would you like to link", 164, innerHeight - 0xe - 0x7d + 0x12, 0x14, "#ffffff", "center");
            gk("your Discord Account?", 164, innerHeight - 0xe - 0x7d + 0x12 + 0x17, 0x14, "#ffffff", 'center');
          }
          switch (lr.discordWidget) {
            case 0x2:
              {
                je(28, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe, 272, 0x32, "#43B581", true, true);
                gk("Waiting...", 164, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe + 0x19, 0x14, "#ffffff", "center");
              }
              break;
            case 0x3:
              {
                je(28, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe, 272, 0x32, "#43B581", true, true);
                gk('Verifying...', 164, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe + 0x19, 0x14, "#ffffff", 'center');
              }
              break;
            case 0x4:
              {
                je(28, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe, 272, 0x32, eh("#F04747", "#FFFFFF", ls.includes("discordClose") ? 0.2 : 0x0), true, true);
                gk("Close", 164, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe + 0x19, 0x14, '#ffffff', "center");
                ee.addElement("discordClose", 28, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe, 300, innerHeight - 0xe - 0x7d + 0x7d - 0xe, () => {
                  lr.discordWidget = false;
                });
              }
              break;
            default:
              {
                je(28, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe, 129, 0x32, eh("#43B581", '#FFFFFF', ls.includes('discordYes') ? 0.2 : 0x0), true, true);
                gk("Yes", 92.5, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe + 25, 0x14, "#ffffff", "center");
                ee.addElement("discordYes", 28, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe, 157, innerHeight - 0xe - 0x7d + 0x7d - 0xe, () => {
                  let lt = false;
                  let lu = window.open('/discordModal.html', "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
                  let lv = setInterval(function lw() {
                    if (lu.closed) {
                      clearInterval(lv);
                      window.removeEventListener("storage", lx);
                      if (lt) {
                        lr.discordWidget = 0x3;
                      } else {
                        lr.discordWidget = true;
                      }
                    }
                  }, 0xfa);
                  let lx = ly => {
                    if (ly.key === 'discordCode') {
                      lt = true;
                      ef.talk({
                        'type': 0x4,
                        'code': ly.newValue
                      });
                      window.removeEventListener("storage", lx);
                      lu.close();
                    }
                  };
                  window.addEventListener("storage", lx);
                  lr.discordWidget = 0x2;
                });
                je(171, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe, 129, 0x32, eh('#F04747', "#FFFFFF", ls.includes("discordNo") ? 0.2 : 0x0), true, true);
                gk('No', 235.5, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe + 25, 0x14, "#ffffff", "center");
                ee.addElement("discordNo", 171, innerHeight - 0xe - 0x7d + 0x7d - 0x32 - 0xe, 300, innerHeight - 0xe - 0x7d + 0x7d - 0xe, () => {
                  lr.discordWidget = false;
                });
              }
          }
          return;
        }
        if (ee.settingsOpen) {
          je(0xe, innerHeight - 0xe - 0x190, 0x15e, 0x190, kr[0x4], true, true);
          ee.addElement("currentMenuOpen", 0xe, innerHeight - 0xe - 0x190, 364, innerHeight - 0xe, () => {});
          gk("Settings", 189, innerHeight - 0xe - 0x190 + 0x23, 0x1e, '#ffffff', 'center');
          je(324, innerHeight - 0xe - 0x190 + 0xa, 0x1e, 0x1e, eh(ak[0x5], "#FFFFFF", ls.includes("closeSettings") ? 0.2 : 0x0), true, true);
          gk('X', 339, innerHeight - 0xe - 0x190 + 0x19, 0x14, '#ffffff', "center");
          ee.addElement("closeSettings", 324, innerHeight - 0xe - 0x190 + 0xa, 354, innerHeight - 0xe - 0x190 + 0x28, () => ee.settingsOpen = false);
          let lz = innerHeight - 0xe - 0x190 + 0x64;
          function ma(mc, md) {
            je(44, lz, 0x14, 0x14, eh(eh(kr[0x4], '#000000', window.floofConfig[md] ? 0.2 : 0x0), "#FFFFFF", ls.includes("settings" + md) ? 0.2 : 0x0), true, true);
            gk(mc, 74, lz + 0xf, 0x14, "#ffffff", "left");
            ee.addElement("settings" + md, 44, lz, 64, lz + 0x14, () => {
              window.floofConfig[md] = !window.floofConfig[md];
            });
            lz += 0x28;
          }
          ma("Show FPS", "showFPS");
          ma("Show Server Debug", "showServerDebug");
          ma("Show ping", "showPing");
          ma("Mouse Movement", "mouseMovement");
          ma("Show Bandwidth", "showBandwidth");
          return;
        }
        if (ee.inventoryOpen) {
          let me = -0x1;
          je(0xe, innerHeight - 0xe - 0x226, 0x190, 0x226, kr[0x3], true, true);
          ee.addElement("currentMenuOpen", 0xe, innerHeight - 0xe - 0x226, 414, innerHeight - 0xe, () => {});
          gk("Inventory", 214, innerHeight - 0xe - 0x226 + 0x23, 0x1e, "#ffffff", 'center');
          gk("Click a petal then click a slot to equip it", 214, innerHeight - 0xe - 0x226 + 0x41, 0x14, '#ffffff', "center");
          je(374, innerHeight - 0xe - 0x226 + 0xa, 0x1e, 0x1e, eh(ak[0x5], '#FFFFFF', ls.includes("closeInventory") ? 0.2 : 0x0), true, true);
          gk('X', 389, innerHeight - 0xe - 0x226 + 0x19, 0x14, "#ffffff", "center");
          ee.addElement('closeInventory', 374, innerHeight - 0xe - 0x226 + 0xa, 404, innerHeight - 0xe - 0x226 + 0x28, () => ee.inventoryOpen = false);
          let mf = {
            0x0: [],
            0x1: [],
            0x2: [],
            0x3: [],
            0x4: [],
            0x5: [],
            0x6: [],
            0x7: [],
            0x8: [],
            0x9: [],
            0xa: []
          };
          for (let mg in ae) {
            let mh = ae[mg];
            mh.forEach((mi, mj) => {
              if (mi > 0x0) {
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
          ee.rwheel = Math.max(ee.rwheel, -0x14);
          ee.rwheel = Math.min(ee.rwheel, mk.length / 0x5 * 65 - 0x14);
          let mn = 39;
          let mo = -ee.wheel + innerHeight - 0xe - 0x226 + 0x64;
          aj.save();
          aj.beginPath();
          aj.rect(0xe, innerHeight - 0xe - 0x226 + 0x64, 390, 430);
          aj.clip();
          aj.closePath();
          for (let mp = 0x0; mp < mk.length; mp++) {
            let mq = mk[mp];
            if (ls.includes("inventory" + mp)) {
              me = mq;
            }
            je(mn, mo, 0x37, 0x37, eh(at[mq.rarity].color, "#FFFFFF", ls.includes("inventory" + mp) ? 0.2 : 0x0), true, true);
            let mr = window.petalIcons[ar[mq.index] + '_' + mq.rarity];
            if (mr) {
              aj.drawImage(mr, mn, mo - 5.5, 0x37, 0x37);
            }
            aj.save();
            aj.translate(mn + 0x37, mo);
            aj.rotate(Math.PI / 0x4);
            gk('x' + av(mq.count), 0x0, 0x0, 15.125000000000002, "#ffffff", "center");
            aj.restore();
            gk(ar[mq.index], mn + 27.5, mo + 46.75, 13.75, '#ffffff', 'center');
            ee.addElement("inventory" + mp, mn, mo, mn + 0x37, mo + 0x37, () => {
              if (lr.player !== null) {
                lr.selectInventoryItem(mq.index, mq.rarity);
              }
            });
            mn += 72.5;
            if (mn + 0x37 > 404) {
              mn = 39;
              mo += 72.5;
            }
          }
          aj.restore();
          if (me !== -0x1) {
            let mt = ar[me.index].toUpperCase().replace(/ /g, '_');
            rarity = at[me.rarity];
            config = o[mt];
            stats = config.rarities[rarity.name.toUpperCase()];
            let mu = innerHeight - 0xe - 0x226 + 0x64;
            let mv = config.description;
            let mw = mv.split(" ");
            let mx = '';
            aj.font = "15px Ubuntu";
            let my = [];
            for (let mz = 0x0; mz < mw.length; mz++) {
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
            let nd = 0x4b + ((stats.damage ? 0x14 : 0x0) + (stats.health ? 0x14 : 0x0) + (stats.bounces ? 0x14 : 0x0) + (stats.radians ? 0x14 : 0x0) + (stats.healthIncrease ? 0x14 : 0x0) + (stats.extraView ? 0x14 : 0x0) + (stats.healPerSecond ? 0x14 : 0x0) + (stats.poison ? 0x14 : 0x0) + (stats.heal ? 0x14 : 0x0) + (stats.pickupRadius ? 0x14 : 0x0) + (stats.speedIncrease ? 0x14 : 0x0) + (stats.armor ? 0x14 : 0x0) + (stats.boost ? 0x14 : 0x0) + (stats.shield ? 0x14 : 0x0) + (stats.period ? 0x14 : 0x0) + (stats.duration ? 0x14 : 0x0) + (stats.damageReflection ? 0x14 : 0x0) + (stats.extraRange ? 0x14 : 0x0) + (stats.spawn ? 0x14 : 0x0) + my.length * 0x14);
            je(424, mu, 0x12c, nd, kr[0x3], true, true);
            gk(config.name, 438, mu + 0x19, 0x19, "#ffffff", "left");
            gk(rarity.name, 710, mu + 0x19, 0x14, rarity.color, 'right');
            for (let ne = 0x0; ne < my.length; ne++) {
              gk(my[ne], 438, mu + 0x32 + 0x14 * ne, 0xf, "#ffffff", "left");
            }
            mu += 0x32 + 0x14 * my.length;
            if (stats.damage !== undefined) {
              gk("Damage: " + av(stats.damage), 438, mu, 0xf, "#FF6666", "left");
              mu += 0x14;
            }
            if (stats.health !== undefined) {
              gk("Health: " + av(stats.health), 438, mu, 0xf, "#66FF66", 'left');
              mu += 0x14;
            }
            if (stats.bounces !== undefined) {
              gk("Bounces: " + stats.bounces, 438, mu, 0xf, "#FF6666", "left");
              mu += 0x14;
            }
            if (stats.radians !== undefined) {
              gk("Rotation Speed: +" + (stats.radians * q).toFixed(0x2) + "rad/s", 438, mu, 0xf, "#FF66FF", 'left');
              mu += 0x14;
            }
            if (stats.healthIncrease !== undefined) {
              gk("Health Increase: " + av(stats.healthIncrease), 438, mu, 0xf, "#66FF66", "left");
              mu += 0x14;
            }
            if (stats.extraView !== undefined) {
              gk("Extra Vision: " + (stats.extraView * 0x64).toFixed(0x1) + '%', 438, mu, 0xf, '#6666FF', "left");
              mu += 0x14;
            }
            if (stats.healPerSecond !== undefined) {
              gk("Heal: " + av(Math.round(stats.healPerSecond)) + "HP/s", 438, mu, 0xf, "#6666FF", 'left');
              mu += 0x14;
            }
            if (stats.poison !== undefined) {
              gk("Poison: " + av(stats.poison[0x0] / 0x3e8 * stats.poison[0x1]) + " (" + av(stats.poison[0x1]) + '/s)', 438, mu, 0xf, "#FFFF66", "left");
              mu += 0x14;
            }
            if (stats.heal !== undefined) {
              gk("Heal: " + av(+stats.heal.toFixed(0x2)), 438, mu, 0xf, '#FFC8EF', "left");
              mu += 0x14;
            }
            if (stats.pickupRadius !== undefined) {
              gk("Pickup Radius: +" + stats.pickupRadius, 438, mu, 0xf, "#66FFFF", "left");
              mu += 0x14;
            }
            if (stats.speedIncrease !== undefined) {
              gk("Speed Increase: " + (stats.speedIncrease * 0x64).toFixed(0x1) + '%', 438, mu, 0xf, "#66FFFF", "left");
              mu += 0x14;
            }
            if (stats.armor !== undefined) {
              gk("Damage Taken: " + (stats.armor * 0x64).toFixed(0x1) + '%', 438, mu, 0xf, "#C8FFAA", "left");
              mu += 0x14;
            }
            if (stats.boost !== undefined) {
              gk("Velocity Boost: " + (stats.boost * 0x64).toFixed(0x1) + '%', 438, mu, 0xf, "#AAC8FF", "left");
              mu += 0x14;
            }
            if (stats.shield !== undefined) {
              gk("Shield: " + av(stats.shield) + 'HP', 438, mu, 0xf, '#C8C8FF', "left");
              mu += 0x14;
            }
            if (stats.period !== undefined) {
              gk("Capacity: " + av(stats.period) + 'HP', 438, mu, 0xf, "#C8FFC8", "left");
              mu += 0x14;
            }
            if (stats.duration !== undefined) {
              gk("Duration: " + (stats.duration / 0x3e8).toFixed(0x2) + 's', 438, mu, 0xf, "#FFC8FF", 'left');
              mu += 0x14;
            }
            if (stats.damageReflection !== undefined) {
              gk("Damage Reflection: " + (stats.damageReflection * 0x64).toFixed(0x1) + '%', 438, mu, 0xf, '#FFC800', "left");
              mu += 0x14;
            }
            if (stats.extraRange !== undefined) {
              gk("Petal Range: +" + stats.extraRange, 438, mu, 0xf, "#C8FFFF", 'left');
              mu += 0x14;
            }
            if (stats.spawn) {
              aj.font = "15px Ubuntu";
              let nf = 0x0;
              gk("Spawns: ", 438, mu, 0xf, "#AABBAF", "left");
              nf += aj.measureText("Spawns: ").width;
              let ng = stats.spawn.type.toLowerCase().split('_').join(" ").split(" ").map(nh => nh.charAt(0x0).toUpperCase() + nh.slice(0x1)).join(" ") + " ";
              gk(ng, 438 + nf, mu, 0xf, "#FFFFFF", "left");
              nf += aj.measureText(ng).width;
              let ni = at[stats.spawn.rarity];
              gk('(' + ni.name + ')', 438 + nf, mu, 0xf, ni.color, "left");
              mu += 0x14;
            }
            let nj = "Recharge: " + ((stats.recharge ?? o.DEFAULT_PROPERTIES.recharge) / 0x3e8).toFixed(0x1) + 's';
            if (stats.spawnCharge) {
              nj += " + " + (stats.spawnCharge / 0x3e8).toFixed(0x1) + 's';
            }
            if (stats.shootDelay) {
              nj += " + " + (stats.shootDelay / 0x3e8).toFixed(0x1) + 's';
            }
            if (stats.waitTime) {
              nj += " + " + (stats.waitTime / 0x3e8).toFixed(0x1) + 's';
            }
            gk(nj, 710, innerHeight - 0xe - 0x226 + 0x64 + nd - 0x14, 0xf, "#ffffff", 'right');
          }
          return;
        }
        if (ee.absorbOpen) {
          je(0xe, innerHeight - 0xe - 0x23f, 0x2ad, 0x23f, kr[0x1], true, true);
          ee.addElement('currentMenuOpen', 0xe, innerHeight - 0xe - 0x23f, 699, innerHeight - 0xe, () => {});
          gk("Absorb", 356.5, innerHeight - 0xe - 0x23f + 0x23, 0x1e, "#ffffff", 'center');
          gk("Click a petal to absorb it!", 356.5, innerHeight - 0xe - 0x23f + 0x41, 0x14, "#ffffff", "center");
          je(659, innerHeight - 0xe - 0x23f + 0xa, 0x1e, 0x1e, eh(ak[0x5], '#FFFFFF', ls.includes("closeAbsorb") ? 0.2 : 0x0), true, true);
          gk('X', 674, innerHeight - 0xe - 0x23f + 0x19, 0x14, '#ffffff', "center");
          ee.addElement("closeAbsorb", 659, innerHeight - 0xe - 0x23f + 0xa, 689, innerHeight - 0xe - 0x23f + 0x28, () => ee.absorbOpen = false);
          aj.save();
          aj.fillStyle = kr[0x6];
          let nk = innerHeight - 0xe - 0x23f + 0xc8;
          aj.translate(185.25, innerHeight - 0xe - 0x23f + 0xc8);
          aj.beginPath();
          aj.arc(0x0, 0x0, 0x64, 0x0, Math.PI * 0x2);
          aj.fill();
          aj.closePath();
          let nl = [];
          for (let nm in lr.absorbSelection) {
            let nn = lr.absorbSelection[nm];
            nn.forEach((np, nq) => {
              if (np > 0x0) {
                nl.push({
                  'index': nm,
                  'rarity': nq,
                  'count': np
                });
              }
            });
          }
          for (let nr = 0x0; nr < nl.length; nr++) {
            let ns = nl[nr];
            let nt = nr * Math.PI * 0x2 / nl.length;
            aj.save();
            aj.translate(Math.cos(nt) * 0x4b, Math.sin(nt) * 0x4b);
            je(-27.5, -27.5, 0x37, 0x37, eh(at[ns.rarity].color, "#FFFFFF", ls.includes("selection" + nr) ? 0.2 : 0x0), true, true);
            let nu = window.petalIcons[ar[ns.index] + '_' + ns.rarity];
            if (nu) {
              aj.drawImage(nu, -27.5, -33, 0x37, 0x37);
            }
            aj.rotate(Math.PI / 0x4);
            gk('x' + av(ns.count), 0x0, -36.666666666666664, 15.125000000000002, "#ffffff", 'center');
            aj.rotate(-Math.PI / 0x4);
            gk(ar[ns.index], 0x0, 18.333333333333332, 13.75, "#ffffff", 'center');
            aj.restore();
          }
          je(0xc8, -27.5, 110, 0x37, eh(ak[0x5], '#FFFFFF', ls.includes('absorb') ? 0.2 : 0x0), true, true);
          gk("Absorb", 255, 0, 18.37, "#ffffff", "center");
          ee.addElement("absorb", 385.25, nk - 27.5, 495.25, nk - 27.5 + 0x37, () => {
            ef.talk({
              'type': 0x5,
              'data': lr.absorbSelection
            });
            lr.absorbSelection = {};
          });
          gk("Warning: This will delete the selected petals!", 255, 50, 13.75, "#ffffff", "center");
          {
            let nv = 0x0;
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
            0x0: [],
            0x1: [],
            0x2: [],
            0x3: [],
            0x4: [],
            0x5: [],
            0x6: [],
            0x7: [],
            0x8: [],
            0x9: [],
            0xa: []
          };
          for (let ob in lr.absorbInventory) {
            let oc = lr.absorbInventory[ob];
            oc.forEach((od, oe) => {
              if (od > 0x0) {
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
          ee.rwheel = Math.max(ee.rwheel, -0x14);
          ee.rwheel = Math.min(ee.rwheel, og.length / 0x8 * 65);
          let oj = 39;
          let ok = -ee.wheel + innerHeight - 0xe - 0x23f + 0x15e;
          aj.save();
          aj.beginPath();
          aj.rect(0xe, innerHeight - 0xe - 0x23f + 0x15e, 675, 205);
          aj.clip();
          aj.closePath();
          for (let ol = 0x0; ol < og.length; ol++) {
            let om = og[ol];
            if (om.count > 0x0) {
              je(oj, ok, 0x37, 0x37, eh(at[om.rarity].color, "#FFFFFF", ls.includes("inventory" + ol) ? 0.2 : 0x0), true, true);
              let oo = window.petalIcons[ar[om.index] + '_' + om.rarity];
              if (oo) {
                aj.drawImage(oo, oj, ok - 5.5, 0x37, 0x37);
              }
              aj.save();
              aj.translate(oj + 0x37, ok);
              aj.rotate(Math.PI / 0x4);
              gk('x' + av(om.count), 0x0, 0x0, 15.125000000000002, '#ffffff', "center");
              aj.restore();
              gk(ar[om.index], oj + 27.5, ok + 46.75, 13.75, "#ffffff", "center");
              ee.addElement("inventory" + ol, oj, ok, oj + 0x37, ok + 0x37, () => {
                if (lr.player !== null) {
                  kx(om.index, om.rarity);
                }
              });
            } else {
              continue;
            }
            oj += 72.5;
            if (oj + 0x37 > 689) {
              oj = 39;
              ok += 72.5;
            }
          }
          aj.restore();
          return;
        }
        if (ee.skillOpen) {
          je(0xe, innerHeight - 0x1f4 - 0xe, 0x1f4, 0x1f4, kr[0x2]);
          ee.addElement("currentMenuOpen", 0xe, innerHeight - 0xe - 0x1f4, 514, innerHeight - 0xe, () => {});
          gk("Skills", 264, innerHeight - 0xe - 0x1f4 + 0x23, 0x1e, '#ffffff', "center");
          gk(lr.skillPoints + " SP", 29, innerHeight - 0xe - 0x1f4 + 0x1e, 0x19, '#FFFFFF', "left");
          gk(av(lr.mySkillInfo.health.toFixed(0x2)) + " HP", 29, innerHeight - 0xe - 0x1f4 + 0x3c, 0x12, "#FFFFFF", "left");
          gk(av(lr.mySkillInfo.damage.toFixed(0x2)) + " DMG", 29, innerHeight - 0xe - 0x1f4 + 0x55, 0x12, "#FFFFFF", 'left');
          gk(av(lr.mySkillInfo.reload.toFixed(0x2)) + "x RLD", 499, innerHeight - 0xe - 0x1f4 + 0x3c, 0x12, "#FFFFFF", "right");
          gk(av(lr.mySkillInfo.slots + 0x5) + " Slots", 499, innerHeight - 0xe - 0x1f4 + 0x55, 0x12, '#FFFFFF', 'right');
          je(474, innerHeight - 0xe - 0x1f4 + 0xa, 0x1e, 0x1e, eh(ak[0x5], "#FFFFFF", ls.includes('closeSkills') ? 0.2 : 0x0), true, true);
          gk('X', 489, innerHeight - 0xe - 0x1f4 + 0x19, 0x14, "#ffffff", "center");
          ee.addElement("closeSkills", 474, innerHeight - 0xe - 0x1f4 + 0xa, 504, innerHeight - 0xe - 0x1f4 + 0x28, () => ee.skillOpen = false);
          ee.rwheel = Math.max(ee.rwheel, -0x14);
          ee.rwheel = Math.min(ee.rwheel, 536);
          aj.save();
          aj.beginPath();
          aj.rect(0xe, innerHeight - 0xe - 0x1f4 + 0x7d, 483, 341);
          aj.clip();
          aj.closePath();
          let op = 78;
          let oq = -ee.wheel + innerHeight - 0x1f4 - 0xe + 150 + 0x11;
          for (let or in au) {
            let os = au[or];
            const ot = op - 0x32;
            const ou = oq - 0x32 - 0x32;
            gk(os.name, op, oq - 0x2d, 0xf, "#FFFFFF", "center");
            aj.beginPath();
            aj.moveTo(op, oq);
            aj.lineTo(op, oq + 67 * (os.tiers.length - 0x1));
            aj.closePath();
            aj.strokeStyle = '#FFFFFF';
            aj.stroke();
            for (let ov = 0x0; ov < os.tiers.length; ov++) {
              let ow = lr.mySkillInfo[au[or].key];
              let ox = ow >= ov && lr.skillPoints > 0x0;
              let oy = at[ov].color;
              if (ow + 0x1 <= ov || os.tiers[ov] > lr.skillPoints) {
                oy = eh(oy, '#C8C8C8', 0.9);
              } else {
                if (ow > ov) {
                  oy = eh(oy, "#000000", 0.1);
                } else if (ls.includes('skill_' + or + '_' + ov)) {
                  oy = eh(oy, "#FFFFFF", 0.2);
                }
              }
              je(op - 25, oq - 25, 0x32, 0x32, oy);
              gk(ow <= ov ? os.tiers[ov] + " SP" : ':)', op, oq, 0xd, "#FFFFFF", "center");
              ee.addElement('skill_' + or + '_' + ov, op - 25, oq - 25, op + 25, oq + 25, function oz() {
                if (ee.lastClick.id === 'skill_' + or + '_' + ov) {
                  if (Date.now() - ee.lastClick.timeStamp < 0x1f4) {
                    ef.talk({
                      'type': 0x6,
                      'index': or,
                      'level': ov
                    });
                  }
                }
              }, ox && os.tiers[ov] <= lr.skillPoints);
              oq += 67;
            }
            ee.addElement("skill_" + or, ot, ou, op + 0x32, oq, () => {}, false);
            op += 101;
            oq = -ee.wheel + innerHeight - 0x1f4 - 0xe + 150 + 0x11;
          }
          aj.restore();
          for (let pa in au) {
            if (ls.includes("skill_" + pa)) {
              let pb = au[pa];
              aj.save();
              aj.globalAlpha = 0.8;
              je(28, innerHeight - 0xe - 0x1f4 + 0x64, 472, 0x14, "#000000", true, false);
              aj.globalAlpha = 0x1;
              gk(pb.description, 264, innerHeight - 0xe - 0x1f4 + 0x64 + 0xa, 0xa, '#FFFFFF', "center");
              aj.restore();
            }
          }
          return;
        }
        if (ee.mobGalleryOpen) {
          let pc = -0x1;
          je(0xe, innerHeight - 0xe - 0x1db, 0x343, 0x1db, kr[0x0], true, true);
          ee.addElement("currentMenuOpen", 0xe, innerHeight - 0xe - 0x1db, 849, innerHeight - 0xe, () => {});
          gk("Mob Gallery", 431.5, innerHeight - 0xe - 0x1db + 0x23, 0x1e, "#ffffff", "center");
          je(809, innerHeight - 0xe - 0x1db + 0xa, 0x1e, 0x1e, eh(ak[0x5], "#FFFFFF", ls.includes('closeInventory') ? 0.2 : 0x0), true, true);
          gk('X', 824, innerHeight - 0xe - 0x1db + 0x19, 0x14, '#ffffff', "center");
          ee.addElement("closemobGallery", 809, innerHeight - 0xe - 0x1db + 0xa, 839, innerHeight - 0xe - 0x1db + 0x28, () => ee.mobGalleryOpen = false);
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
                  'COMMON': 0x0,
                  'UNCOMMON': 0x1,
                  'RARE': 0x2,
                  'EPIC': 0x3,
                  'LEGENDARY': 0x4,
                  'MYTHIC': 0x5,
                  'ULTRA': 0x6,
                  'SUPER': 0x7,
                  'ANCIENT': 0x8,
                  'OMEGA': 0x9,
                  '???': 0xa
                }[pf]
              });
            }
          }
          ee.rwheel = Math.max(ee.rwheel, -0x14);
          ee.rwheel = Math.min(ee.rwheel, pd.length / 0xb * 65 - 0x14);
          let ph = 39;
          let pj = -ee.wheel + innerHeight - 0xe - 0x1db + 0x64;
          aj.save();
          aj.beginPath();
          aj.rect(0xe, innerHeight - 0xe - 0x1db + 0x64, 825, 355);
          aj.clip();
          aj.closePath();
          for (let pk = 0x0; pk < pd.length; pk++) {
            if (pj + 0x37 < innerHeight - 0xe - 0x1db + 0x64) {
              ph += 72.5;
              if (ph + 0x37 > 839) {
                ph = 39;
                pj += 72.5;
              }
              continue;
            }
            let pl = pd[pk];
            if (ls.includes("mobGallery" + pk)) {
              pc = pl;
            }
            je(ph, pj, 0x37, 0x37, eh(at[pl.rarity].color, "#FFFFFF", ls.includes("mobGallery" + pk) ? 0.2 : 0x0), true, true);
            let pm = pl.image;
            if (pm) {
              aj.drawImage(pm, ph + 5.5, pj + 5.5, 44, 44);
            }
            aj.save();
            aj.translate(ph + 0x37, pj);
            aj.rotate(Math.PI / 0x4);
            aj.restore();
            ee.addElement("mobGallery" + pk, ph, pj, ph + 0x37, pj + 0x37, () => {});
            ph += 72.5;
            if (ph + 0x37 > 839) {
              ph = 39;
              pj += 72.5;
            }
          }
          aj.restore();
          if (pc !== -0x1) {
            let pn = innerHeight - 0xe - 0x1db + 0x64;
            je(859, pn, 0x12c, 0x113, kr[0x3], true, true);
            let po = at[pc.rarity];
            gk(pc.name, 873, pn + 0x19, 0x19, "#ffffff", "left");
            gk(po.name, 1145, pn + 0x19, 0x14, po.color, "right");
            let pp = pc.description;
            let pq = pp.split(" ");
            let pr = '';
            aj.font = "15px Ubuntu";
            let ps = [];
            for (let pt = 0x0; pt < pq.length; pt++) {
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
            for (let py = 0x0; py < ps.length; py++) {
              gk(ps[py], 873, pn + 0x32 + 0x14 * py, 0xf, "#ffffff", 'left');
            }
            pn += 0x32 + 0x14 * ps.length;
            if (pc.damage !== undefined) {
              gk("Damage: " + av(+pc.damage.toFixed(0x2)), 873, pn, 0xf, '#FF6666', 'left');
              pn += 0x14;
            }
            if (pc.health !== undefined) {
              gk("Health: " + av(+pc.health.toFixed(0x2)), 873, pn, 0xf, "#66FF66", "left");
              pn += 0x14;
            }
            if (pc.poison !== undefined) {
              gk("Poison: " + av(+(pc.poison[0x0] / 0x3e8 * pc.poison[0x1]).toFixed(0x2)) + " (" + av(+pc.poison[0x1].toFixed(0x2)) + "/s)", 873, pn, 0xf, "#FFFF66", 'left');
              pn += 0x14;
            }
            if (pc.armor !== undefined) {
              gk("Damage Taken: " + (pc.armor * 0x64).toFixed(0x1) + '%', 873, pn, 0xf, "#C8FFAA", "left");
              pn += 0x14;
            }
            if (pc.damageReflection !== undefined) {
              gk("Damage Reflection: " + (pc.damageReflection * 0x64).toFixed(0x1) + '%', 873, pn, 0xf, '#FFC800', "left");
              pn += 0x14;
            }
            if (pc.drops !== undefined) {
              pc.drops.forEach(pz => {
                let qa = 0xe;
                for (let qb = 0x0; qb < pz.chance.length; qb++) {
                  if (pz.chance[qb] === 0x0) {
                    continue;
                  }
                  je(859 + qa, pn, 0x32, 0x32, at[qb].color);
                  aj.drawImage(window.petalIcons[ar[pz.index] + '_' + qb], 859 + qa + 5, pn + 5, 40, 40);
                  gk(ar[pz.index].split(" ").pop(), 859 + qa + 25, pn + 0x32 - 0xc, 0xc, '#ffffff', 'center');
                  qa += 64;
                }
                pn += 64;
              });
              pn = pn;
              pc.drops.forEach(qc => {
                let qd = 0xe;
                for (let qe = 0x0; qe < qc.chance.length; qe++) {
                  if (qc.chance[qe] === 0x0) {
                    continue;
                  }
                  aj.save();
                  aj.translate(859 + qd + 0x32, pn);
                  aj.rotate(Math.PI / 7.5);
                  gk(av((qc.chance[qe] * 0x64).toFixed(0x1)) + '%', 0x0, 0x0, 0xc, "#ffffff", "center");
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
          gk("You died!", innerWidth / 0x2, innerHeight / 0x2, 0x64, '#ffffff', 'center');
          je(innerWidth / 0x2 - 0x64, innerHeight / 0x2 + 0x64, 0xc8, 0x32, eh(ak[0x5], "#FFFFFF", ls.includes('respawn') ? 0.2 : 0x0), true, true);
          gk("Respawn", innerWidth / 0x2, innerHeight / 0x2 + 0x7d, 0x1e, "#ffffff", 'center');
          ee.addElement("respawn", innerWidth / 0x2 - 0x64, innerHeight / 0x2 + 0x64, innerWidth / 0x2 + 0x64, innerHeight / 0x2 + 0x96, () => {
            ef.talk({
              'type': 0x1
            });
          });
        }
      };
    }();
    function hq(qf, qg, qh, qi, qj) {
      qg.animations.mood = qg.animations.mood + 0.2 * (qh - qg.animations.mood);
      qg.animations.mouthDip = qg.animations.mouthDip + 0.1 * ((qh === 0x1 ? 1.7 : qh === 0x2 ? 0.35 : 0.9) - qg.animations.mouthDip);
      qf.save();
      qf.scale(qi / 2.5, qi / 2.5);
      function qk(ql, qm) {
        qf.save();
        qf.translate(ql, qm);
        qf.beginPath();
        switch (qh) {
          case 0x1:
          case 0x3:
            qf.ellipse(0x0, 0x0, 0.334, 0.667, 0x0, 0x0, Math.PI * 0x2);
            break;
          case 0x2:
            qf.ellipse(0x0, 0x0, 0.334, 0.667, 0x0, -Math.PI / 0xa, -Math.PI / 0xa - (-Math.PI / 0xa - -Math.PI / 0x2) * (qg.animations.mood / 0x2));
            break;
        }
        qf.closePath();
        qf.fillStyle = qf.strokeStyle = "#04190E";
        qf.lineWidth = 0.075;
        qf.stroke();
        qf.fill();
        qf.clip();
        qf.beginPath();
        qf.arc(Math.cos(qj) * 0.334, Math.sin(qj) * 0.667, 0.334, 0x0, Math.PI * 0x2);
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
      qf.quadraticCurveTo(0x0, qg.animations.mouthDip, 0.75, 1.15);
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
      if (ef.world.scene === aq.GARDEN || 0x1) {
        aj.save();
        const qu = -qs + innerWidth * 0.5;
        const qv = -qt + innerHeight * 0.5;
        aj.translate(qu, qv);
        af.forEach(qw => {
          aj.save();
          aj.beginPath();
          for (let qx = 0x0; qx < qw.length; qx++) {
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
              aj.drawImage(ra, rd - 0x1 | 0x0, re - 0x1 | 0x0, rb + 0x2 | 0x0, rc + 0x2 | 0x0);
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
      if (qo.scene === 0x3) {
        aj.globalAlpha = 0.1;
        const ri = al.water;
        let rj = ri.width * qr;
        let rk = ri.height * qr;
        const rl = rj * (performance.now() % 0x2710) * 0.00005;
        for (let rm = -qs % rj - rk - rl; rm <= innerWidth * devicePixelRatio; rm += rj) {
          for (let rn = -qt % rj - rj - rl; rn <= innerHeight * devicePixelRatio; rn += rj) {
            aj.drawImage(ri, rm, rn, rj, rk);
          }
        }
        aj.globalAlpha = 0x1;
      }
      if (Math.abs(ah - ag) > 0.01 || ah === 0x0) {
        let ro = Math.max(canvas.width, canvas.height);
        aj.beginPath();
        aj.arc(canvas.width / 0x2, canvas.height / 0x2, ro * 1.5, 0x0, 0x2 * Math.PI, true);
        aj.arc(canvas.width / 0x2, canvas.height / 0x2, ag * ro, 0x0, 0x2 * Math.PI, false);
        aj.closePath();
        aj.fillStyle = "#000000";
        aj.fill();
        ag = Math.max(0x0, ag + 0.015 * (ah === 0x1 ? 0x1 : -0x1));
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
        if (rr.type === 0x3 && rr.index === 0x1e) {
          let rs = Math.max(Math.abs(rr.rx - rr.x), Math.abs(rr.ry - rr.y));
          let rt = Math.cbrt(rs) / 0x2ee;
          rr.rstickBugRotate = Math.sin(performance.now() * rt + rr.id) * 0.3;
        }
      });
    }, 100);
    setInterval(function ru() {
      ee.fps = ee.frames;
      ee.frames = 0x0;
      ef.inboundData = ef.inbound;
      ef.outboundData = ef.outbound;
      ef.inbound = 0x0;
      ef.outbound = 0x0;
    }, 0x3e8);
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
      let rz = -0x1;
      let sa = 0x0;
      setInterval(function sb() {
        let sc = ee.update();
        let sd = Math.atan2(ee.mouse.y - canvas.height / 0x2, ee.mouse.x - canvas.width / 0x2);
        let se = Math.sqrt(Math.pow(ee.mouse.x - canvas.width / 0x2, 0x2) + Math.pow(ee.mouse.y - canvas.height / 0x2, 0x2)) / (Math.min(canvas.width, canvas.height) / 0x3);
        if (sc !== rz || sa !== sd) {
          rz = sc;
          sa = sd;
          ef.talk({
            'type': 0x2,
            'inputs': sc,
            'mouseAngle': sd,
            'intensity': Math.min(0x1, Math.max(0x0, se))
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
