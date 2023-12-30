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
  let self = self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init("self") || self.self;
  (async function () {
    const b = function () {
      let d = true;
      return function (e, f) {
        const g = d ? function () {
          if (f) {
            const h = f.apply(e, arguments);
            f = null;
            return h;
          }
        } : function () {};
        d = false;
        return g;
      };
    }();
    const i = b(this, function () {
      return i.toString().search("(((.+)+)+)+$").toString().constructor(i).search("(((.+)+)+)+$");
    });
    i();
    class j {
      constructor(k) {
        this.writer = true;
        this.tmpBuf = new DataView(new ArrayBuffer(8));
        this._e = k;
        this.reset();
        return this;
      }
      ["reset"](l = this._e) {
        this._e = l;
        this._b = [];
        this._o = 0;
      }
      ["setUint8"](m) {
        if (m >= 0 && m < 256) {
          this._b.push(m);
        }
        return this;
      }
      ["setInt8"](n) {
        if (n >= -128 && n < 128) {
          this._b.push(n);
        }
        return this;
      }
      ["setUint16"](o) {
        this.tmpBuf.setUint16(0, o, this._e);
        this._move(2);
        return this;
      }
      ["setInt16"](p) {
        this.tmpBuf.setInt16(0, p, this._e);
        this._move(2);
        return this;
      }
      ["setUint32"](q) {
        this.tmpBuf.setUint32(0, q, this._e);
        this._move(4);
        return this;
      }
      ["setInt32"](r) {
        this.tmpBuf.setInt32(0, r, this._e);
        this._move(4);
        return this;
      }
      ["setFloat32"](t) {
        this.tmpBuf.setFloat32(0, t, this._e);
        this._move(4);
        return this;
      }
      ["setFloat64"](v) {
        this.tmpBuf.setFloat64(0, v, this._e);
        this._move(8);
        return this;
      }
      ["_move"](w) {
        for (let z = 0; z < w; z++) {
          this._b.push(this.tmpBuf.getUint8(z));
        }
      }
      ["setStringUTF8"](aa) {
        const ab = unescape(encodeURIComponent(aa));
        let ac = 0;
        for (let ad = ab.length; ac < ad; ac++) {
          this._b.push(ab.charCodeAt(ac));
        }
        this._b.push(0);
        return this;
      }
      ["build"]() {
        return new Uint8Array(this._b);
      }
    }
    class ae {
      constructor(af, ag, ah) {
        this.reader = true;
        this._e = ah;
        if (af) {
          this.repurpose(af, ag);
        }
      }
      ["repurpose"](ai, aj) {
        this.view = ai;
        this._o = aj || 0;
      }
      ["getUint8"]() {
        return this.view.getUint8(this._o++, this._e);
      }
      ["getInt8"]() {
        return this.view.getInt8(this._o++, this._e);
      }
      ["getUint16"]() {
        return this.view.getUint16((this._o += 2) - 2, this._e);
      }
      ["getInt16"]() {
        return this.view.getInt16((this._o += 2) - 2, this._e);
      }
      ["getUint32"]() {
        return this.view.getUint32((this._o += 4) - 4, this._e);
      }
      ["getInt32"]() {
        return this.view.getInt32((this._o += 4) - 4, this._e);
      }
      ["getFloat32"]() {
        return this.view.getFloat32((this._o += 4) - 4, this._e);
      }
      ["getFloat64"]() {
        return this.view.getFloat64((this._o += 8) - 8, this._e);
      }
      ["getStringUTF8"]() {
        let ak = "";
        let al;
        while ((al = this.view.getUint8(this._o++)) !== 0) {
          ak += String.fromCharCode(al);
        }
        return decodeURIComponent(escape(ak));
      }
    }
    function am(an) {
      let ao = new j(true);
      ao.setUint8(an.type);
      switch (an.type) {
        case 0:
          ao.setFloat64(an.time);
          break;
        case 1:
          break;
        case 2:
          ao.setUint8(an.inputs);
          ao.setFloat32(an.mouseAngle);
          if (an.inputs & 64) {
            ao.setFloat32(an.intensity);
          }
          break;
        case 3:
          ao.setUint8(+an.newIndex);
          ao.setUint8(an.newRarity);
          ao.setUint8(an.oldIndex);
          break;
        case 4:
          ao.setStringUTF8(an.code);
          break;
        case 5:
          ao.setUint8(Object.keys(an.data).length);
          for (const ap in an.data) {
            ao.setUint8(ap);
            an.data[ap].forEach(aq => {
              ao.setUint32(aq);
            });
          }
          break;
        case 6:
          ao.setUint8(an.index);
          ao.setUint8(an.level);
          break;
        default:
          throw new Error("Unknown outgoing packet type \"" + an.type + "\"");
      }
      return ao.build();
    }
    class ar {
      constructor() {
        this.entities = {};
      }
      ["create"](as, at) {
        this.entities[as] = at;
      }
      ["update"](au, av) {
        this.entities[au] = {
          ...this.entities[au],
          ...av
        };
      }
      ["delete"](aw) {
        delete this.entities[aw];
      }
    }
    const ax = new ar();
    function ay(az) {
      let ba = new ae(new DataView(az), 0, true);
      let bb = ba.getUint8();
      let bc = {};
      let bd = {
        "type": bb
      };
      switch (bb) {
        case 0:
          bd.server = JSON.parse(ba.getStringUTF8());
          break;
        case 1:
          bd.playerID = ba.getFloat64();
          bd.deleteEntities = [];
          bd.createEntities = {};
          bd.updateEntities = {};
          let bf;
          for (bf = ba.getUint16(); bf--;) {
            ax["delete"](ba.getUint32());
          }
          bf = ba.getUint32();
          while (bf !== 0) {
            let bg = ba.getUint16();
            let bh = {
              "id": bf,
              "flags": bg
            };
            if (bg & 1) {
              bh.type = ba.getUint8();
              bh.x = ba.getFloat32();
              bh.y = ba.getFloat32();
              bh.size = ba.getFloat32();
              switch (bh.type) {
                case 1:
                  bh.rotation = ba.getFloat32();
                  bh.health = ba.getUint8() / 255;
                  bh.shield = ba.getUint8() / 255;
                  bh.name = ba.getStringUTF8();
                  let bi = ba.getUint8();
                  bh.antennae = bi & 1;
                  bh.isPoisoned = bi & 2;
                  bh.armor = bi & 4;
                  bh.thirdEye = bi & 8;
                  bh.attack = bi & 16;
                  bh.defend = bi & 32;
                  break;
                case 3:
                  bh.index = ba.getUint8();
                  bh.rarity = ba.getUint8();
                  bh.health = ba.getUint8() / 255;
                  bh.rotation = ba.getFloat32();
                  let bj = ba.getUint8();
                  bh.isPlayerMob = bj & 1;
                  bh.isPoisoned = bj & 2;
                  break;
                case 2:
                case 5:
                  bh.index = ba.getUint8();
                  bh.rarity = ba.getUint8();
                  bh.rotation = ba.getFloat32();
                  break;
                case 4:
                  bh.index = ba.getUint8();
                  bh.rotation = ba.getFloat32();
                  if (bh.index === 1) {
                    let bk = ba.getUint8();
                    bh.path = [];
                    for (let bl = 0; bl < bk; bl++) {
                      bh.path.push({
                        "x": ba.getFloat32(),
                        "y": ba.getFloat32()
                      });
                    }
                  }
                  break;
                case 6:
                  bh.width = ba.getFloat32();
                  bh.height = ba.getFloat32();
                  break;
              }
              ax.create(bf, bh);
              continue;
            }
            let bm = ax.entities[bf];
            if (!bm) {
              throw new Error("Entity " + bf + " does not exist; flags: " + bg);
            }
            if (bg & 2) {
              bh.x = ba.getFloat32();
            }
            if (bg & 4) {
              bh.y = ba.getFloat32();
            }
            if (bg & 8) {
              bh.size = ba.getFloat32();
            }
            switch (bm.type) {
              case 1:
                if (bg & 16) {
                  bh.rotation = ba.getFloat32();
                }
                if (bg & 32) {
                  bh.health = ba.getUint8() / 255;
                }
                if (bg & 64) {
                  bh.shield = ba.getUint8() / 255;
                }
                if (bg & 128) {
                  let bn = ba.getUint8();
                  bh.antennae = bn & 1;
                  bh.isPoisoned = bn & 2;
                  bh.armor = bn & 4;
                  bh.thirdEye = bn & 8;
                  bh.attack = bn & 16;
                  bh.defend = bn & 32;
                }
                break;
              case 3:
                if (bg & 16) {
                  bh.health = ba.getUint8() / 255;
                }
                if (bg & 32) {
                  bh.rotation = ba.getFloat32();
                }
                if (bg & 64) {
                  let bo = ba.getUint8();
                  bh.isPlayerMob = bo & 1;
                  bh.isPoisoned = bo & 2;
                }
                break;
              case 2:
              case 5:
                if (bg & 16) {
                  bh.rotation = ba.getFloat32();
                }
                break;
              case 4:
                if (bg & 16) {
                  bh.rotation = ba.getFloat32();
                }
                if (bg & 32) {
                  let bp = ba.getUint8();
                  bh.points = [];
                  for (let bq = 0; bq < bp; bq++) {
                    bh.points.push({
                      "x": ba.getFloat32(),
                      "y": ba.getFloat32()
                    });
                  }
                }
                break;
              case 6:
                break;
            }
            ax.update(bf, bh);
          }
          bd.entities = ax.entities;
          if (bd.playerID !== -1) {
            bd.fov = ba.getFloat32();
            bd.petals = [];
            let br = ba.getUint8();
            for (let bs = 0; bs < br; bs++) {
              bd.petals.push({
                "index": ba.getUint8(),
                "rarity": ba.getUint16(),
                "alive": ba.getUint8() === 0,
                "ratio": ba.getFloat32()
              });
            }
          }
          break;
        case 2:
          bd.hardcodedPaths = JSON.parse(ba.getStringUTF8());
          break;
        case 3:
          bd.width = ba.getFloat32();
          bd.height = ba.getFloat32();
          bd.scene = ba.getUint8();
          break;
        case 4:
          bc.flags = ba.getUint8();
          if (bc.flags & 1) {
            bc.amount = ba.getUint16();
            bd.inventory = {};
            for (let bt = 0; bt < bc.amount; bt++) {
              let bu = ba.getUint8();
              let bv = ba.getUint8();
              bd.inventory[bu] = new Array(bv).fill(0).map(() => {
                return ba.getUint32();
              });
            }
          }
          if (bc.flags & 2) {
            bd.level = ba.getUint32();
            bd.levelProgress = ba.getUint8() / 255;
            bd.skillPoints = ba.getUint16();
          }
          if (bc.flags & 4) {
            bd.skillInfo = JSON.parse(ba.getStringUTF8());
          }
          break;
        case 5:
        case 6:
          break;
        case 7:
          bd.response = ba.getUint8();
          break;
        case 8:
          bc.flags = ba.getUint8();
          bd.enabled = !!(bc.flags & 1);
          if (bd.enabled) {
            bd.wave = ba.getUint16();
            bd.progress = ba.getUint8() / 255;
          }
          break;
        default:
          throw new Error("Unknown incoming packet type \"" + bb + "\"");
      }
      return bd;
    }
    self.onmessage = function ({
      data: bw
    }) {
      const bx = performance.now();
      switch (bw.type) {
        case "encode":
          self.postMessage({
            "id": bw.id,
            "type": "encode",
            "data": am(bw.data),
            "time": performance.now() - bx
          });
          break;
        case "decode":
          self.postMessage({
            "id": bw.id,
            "type": "decode",
            "data": ay(bw.data),
            "time": performance.now() - bx
          });
          break;
      }
    };
  })();
}
/*
     FILE ARCHIVED ON 12:03:42 Mar 27, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:55:47 Dec 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 79.521
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.076
  cdx.remote: 0.066
  esindex: 0.009
  LoadShardBlock: 42.096 (3)
  PetaboxLoader3.datanode: 55.498 (4)
  load_resource: 61.059
  PetaboxLoader3.resolve: 43.933
*/
