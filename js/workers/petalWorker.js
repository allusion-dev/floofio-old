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
  (async function () {
    const b = function () {
      let e = true;
      return function (f, i) {
        const j = e ? function () {
          if (i) {
            const k = i.apply(f, arguments);
            i = null;
            return k;
          }
        } : function () {};
        e = false;
        return j;
      };
    }();
    const n = {
      "id": "id",
      "class": "class",
      "fill": "fill",
      "stroke": "stroke",
      "strokeWidth": "stroke-width",
      "strokeLinecap": "stroke-linecap",
      "strokeLinejoin": "stroke-linejoin",
      "strokeMiterlimit": "stroke-miterlimit",
      "strokeDasharray": "stroke-dasharray",
      "strokeDashoffset": "stroke-dashoffset",
      "strokeOpacity": "stroke-opacity",
      "fillRule": "fill-rule",
      "fillOpacity": "fill-opacity",
      "clipRule": "clip-rule",
      "opacity": "opacity",
      "transform": "transform",
      "clipPath": "clip-path"
    };
    class o {
      constructor() {
        this.id = undefined;
        this["class"] = undefined;
        this.fill = undefined;
        this.stroke = undefined;
        this.strokeWidth = undefined;
        this.strokeLinecap = undefined;
        this.strokeLinejoin = undefined;
        this.strokeMiterlimit = undefined;
        this.strokeDasharray = undefined;
        this.strokeDashoffset = undefined;
        this.strokeOpacity = undefined;
        this.fillRule = undefined;
        this.fillOpacity = undefined;
        this.clipRule = undefined;
        this.opacity = undefined;
        this.clipPathID = undefined;
        this.scaleValues = [1, 1];
        this.translateValues = [0, 0];
        this.rotation = 0;
        this.decimals = 3;
      }
      get ["transform"]() {
        let p = "";
        if (this.scaleValues[0] !== 1 || this.scaleValues[1] !== 1) {
          p += " scale(" + this.scaleValues[0] + ", " + this.scaleValues[1] + ")";
        }
        if (this.translateValues[0] !== 0 || this.translateValues[1] !== 0) {
          p += " translate(" + this.translateValues[0] + ", " + this.translateValues[1] + ")";
        }
        if (this.rotation !== 0) {
          p += " rotate(" + this.rotation + ")";
        }
        return p.trim();
      }
      get ["clipPath"]() {
        if (this.clipPathID === undefined) {
          return undefined;
        }
        return "url(#" + this.clipPathID + ")";
      }
      ["translate"](r, aa, ab = true) {
        if (!ab) {
          this.translateValues[0] += +r.toFixed(this.decimals);
          this.translateValues[1] += +aa.toFixed(this.decimals);
        }
        let ac = r / this.scaleValues[0];
        let ad = aa / this.scaleValues[1];
        this.translateValues[0] += +(ac - r).toFixed(this.decimals);
        this.translateValues[1] += +(ad - aa).toFixed(this.decimals);
      }
      ["scale"](ae, af) {
        ae = +ae.toFixed(this.decimals);
        af = +af.toFixed(this.decimals);
        this.scaleValues[0] *= ae;
        this.scaleValues[1] *= af;
      }
    }
    class ag extends o {
      constructor(ah, ai, aj, ak) {
        super();
        this.cx = ah;
        this.cy = ai;
        this.rx = aj;
        this.ry = ak;
      }
      get ["svg"]() {
        let al = "<ellipse cx=\"" + this.cx + "\" cy=\"" + this.cy + "\" rx=\"" + this.rx + "\" ry=\"" + this.ry + "\"";
        for (let am in n) {
          if (this[am] !== undefined) {
            al += " " + n[am] + "=\"" + this[am] + "\"";
          }
        }
        al += " />";
        return al;
      }
    }
    class an extends o {
      #configureViewBox(ao, ap, aq, ar) {
        ao = ao * this.scaleValues[0] + this.translateValues[0];
        ap = ap * this.scaleValues[1] + this.translateValues[1];
        aq = aq * this.scaleValues[0] + this.translateValues[0];
        ar = ar * this.scaleValues[1] + this.translateValues[1];
        this.minX = Math.min(ao, this.minX);
        this.minY = Math.min(ap, this.minY);
        this.maxX = Math.max(aq, this.maxX);
        this.maxY = Math.max(ar, this.maxY);
      }
      constructor() {
        super();
        this.path = "";
        this.minX = 0;
        this.minY = 0;
        this.maxX = 0;
        this.maxY = 0;
      }
      get ["width"]() {
        return this.maxX - this.minX;
      }
      get ["height"]() {
        return this.maxY - this.minY;
      }
      get ["minifiedPath"]() {
        return this.path;
      }
      ["addPath"](as) {
        let at = as.split(" ");
        for (let au = 0; au < at.length; au++) {
          switch (at[au]) {
            case "M":
              this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 1]), parseFloat(at[au + 2]));
              break;
            case "H":
              this.#configureViewBox(parseFloat(at[au + 1]), this.minY, parseFloat(at[au + 1]), this.maxY);
              break;
            case "V":
              this.#configureViewBox(this.minX, parseFloat(at[au + 1]), this.maxX, parseFloat(at[au + 1]));
              break;
            case "L":
              this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 1]), parseFloat(at[au + 2]));
              break;
            case "C":
              this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 5]), parseFloat(at[au + 6]));
              break;
            case "S":
              this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 3]), parseFloat(at[au + 4]));
              break;
            case "Q":
              this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 3]), parseFloat(at[au + 4]));
              break;
            case "T":
              this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 1]), parseFloat(at[au + 2]));
              break;
            case "A":
              this.#configureViewBox(parseFloat(at[au + 6]), parseFloat(at[au + 7]), parseFloat(at[au + 6]), parseFloat(at[au + 7]));
              break;
            case "Z":
              break;
          }
        }
        this.path += as;
        return this;
      }
      ["addRect"](av, aw, ax, ay) {
        av = +av.toFixed(this.decimals);
        aw = +aw.toFixed(this.decimals);
        ax = +ax.toFixed(this.decimals);
        ay = +ay.toFixed(this.decimals);
        this.#configureViewBox(av, aw, av + ax, aw + ay);
        this.path += "M " + av + ", " + aw + " H " + (av + ax) + " V " + (av + ay) + " H " + av + " Z";
        return this;
      }
      ["moveTo"](az, ba) {
        az = +az.toFixed(this.decimals);
        ba = +ba.toFixed(this.decimals);
        this.#configureViewBox(az, ba, az, ba);
        this.path += "M " + az + ", " + ba;
        return this;
      }
      ["horizontalLineTo"](bb) {
        bb = +bb.toFixed(this.decimals);
        this.#configureViewBox(bb, this.minY, bb, this.maxY);
        this.path += "H " + bb;
        return this;
      }
      ["verticalLineTo"](bc) {
        bc = +bc.toFixed(this.decimals);
        this.#configureViewBox(this.minX, bc, this.maxX, bc);
        this.path += "V " + bc;
        return this;
      }
      ["lineTo"](bd, bf) {
        bd = +bd.toFixed(this.decimals);
        bf = +bf.toFixed(this.decimals);
        this.#configureViewBox(bd, bf, bd, bf);
        this.path += "L " + bd + ", " + bf;
        return this;
      }
      ["bezierCurveTo"](bg, bh, bi, bj, bk, bl) {
        bg = +bg.toFixed(this.decimals);
        bh = +bh.toFixed(this.decimals);
        bi = +bi.toFixed(this.decimals);
        bj = +bj.toFixed(this.decimals);
        bk = +bk.toFixed(this.decimals);
        bl = +bl.toFixed(this.decimals);
        this.#configureViewBox(bg, bh, bk, bl);
        this.path += "C " + bg + ", " + bh + " " + bi + ", " + bj + " " + bk + ", " + bl;
        return this;
      }
      ["shortHandBezierCurveTo"](bm, bn, bo, bp) {
        bm = +bm.toFixed(this.decimals);
        bn = +bn.toFixed(this.decimals);
        bo = +bo.toFixed(this.decimals);
        bp = +bp.toFixed(this.decimals);
        this.#configureViewBox(bm, bn, bo, bp);
        this.path += "S " + bm + ", " + bn + " " + bo + ", " + bp;
        return this;
      }
      ["quadraticCurveTo"](bq, br, bs, bt) {
        bq = +bq.toFixed(this.decimals);
        br = +br.toFixed(this.decimals);
        bs = +bs.toFixed(this.decimals);
        bt = +bt.toFixed(this.decimals);
        this.#configureViewBox(bq, br, bs, bt);
        this.path += "Q " + bq + ", " + br + " " + bs + ", " + bt;
        return this;
      }
      ["shortHandQuadraticCurveTo"](bu, bv) {
        bu = +bu.toFixed(this.decimals);
        bv = +bv.toFixed(this.decimals);
        this.#configureViewBox(bu, bv, bu, bv);
        this.path += "T " + bu + ", " + bv;
        return this;
      }
      ["drawCurve"](bw, bx, bz = 1) {
        bw = bw.map(([ca, cb]) => [ca * bz, cb * bz]);
        let cc;
        this[bx ? "lineTo" : "moveTo"](...bw[0]);
        for (cc = 1; cc < bw.length - 2; cc++) {
          let [cd, ce] = bw[cc];
          let [cf, cg] = bw[cc + 1];
          let ch = (cd + cf) / 2;
          let ci = (ce + cg) / 2;
          this.quadraticCurveTo(...bw[cc], ch, ci);
        }
        this.quadraticCurveTo(...bw[cc], ...bw[cc + 1]);
      }
      ["arcTo"](cj, ck, cl, cm, cn, co, cp) {
        cj = +cj.toFixed(this.decimals);
        ck = +ck.toFixed(this.decimals);
        cl = +cl.toFixed(this.decimals);
        co = +co.toFixed(this.decimals);
        cp = +cp.toFixed(this.decimals);
        this.#configureViewBox(co, cp, co, cp);
        this.path += "A " + cj + ", " + ck + " " + cl + " " + cm + " " + cn + " " + co + ", " + cp;
        return this;
      }
      ["circle"](cq, cr, cs, ct = true) {
        cq = +cq.toFixed(this.decimals);
        cr = +cr.toFixed(this.decimals);
        cs = +cs.toFixed(this.decimals);
        this.#configureViewBox(cq - cs, cr - cs, cq + cs, cr + cs);
        this.path += (ct ? "M " + cq + ", " + (cr - cs) + " " : "") + ("A " + cs + ", " + cs + " 0 1 1 " + cq + ", " + (cr + cs) + " A " + cs + ", " + cs + " 0 1 1 " + cq + ", " + (cr - cs));
        return this;
      }
      ["polygon"](cu, cv, cw, cz, da) {
        cv = +cv.toFixed(this.decimals);
        cw = +cw.toFixed(this.decimals);
        cz = +cz.toFixed(this.decimals);
        da = +da.toFixed(this.decimals);
        this.#configureViewBox(cv - cz, cw - cz, cv + cz, cw + cz);
        this.path += "M " + (cv + cz * Math.cos(da)) + ", " + (cw + cz * Math.sin(da));
        for (let db = 1; db <= cu; db++) {
          let dc = da + db * 2 * Math.PI / cu;
          this.path += " L " + (cv + cz * Math.cos(dc)) + ", " + (cw + cz * Math.sin(dc));
        }
        this.closePath();
        return this;
      }
      ["dipPolygon"](dd, de, df, dg, dh, di) {
        dd = -dd;
        let dj = 1 - 7 / dd / dd * di;
        dd = -dd;
        de = +de.toFixed(this.decimals);
        df = +df.toFixed(this.decimals);
        dg = +dg.toFixed(this.decimals);
        dh = +dh.toFixed(this.decimals);
        this.#configureViewBox(de - dg, df - dg, de + dg, df + dg);
        this.moveTo(de + dg, df);
        for (let dk = 0; dk < dd; dk++) {
          let dl = (dk + 1) / dd * Math.PI * 2;
          let dm = (dk + 0.5) / dd * Math.PI * 2;
          this.quadraticCurveTo(de + dg * Math.cos(dm) * dj, df + dg * Math.sin(dm) * dj, de + dg * Math.cos(dl), df + dg * Math.sin(dl));
        }
        this.closePath();
      }
      ["pointPath"](dn, dp, dq, dr) {
        dn = +dn.toFixed(this.decimals);
        dp = +dp.toFixed(this.decimals);
        dq = +dq.toFixed(this.decimals);
        this.#configureViewBox(dn - dq, dp - dq, dn + dq, dp + dq);
        this.path += "M " + (dn + dq * dr[0].x) + ", " + (dp + dq * dr[0].y);
        for (let ds = 1; ds < dr.length; ds++) {
          this.path += " L " + (dn + dq * dr[ds].x) + ", " + (dp + dq * dr[ds].y);
        }
        this.closePath();
        return this;
      }
      ["closePath"]() {
        this.path += "Z";
        return this;
      }
      ["sterilize"]() {
        return new an().addPath(this.path);
      }
      get ["svg"]() {
        let dt = Object.keys(n).map(du => {
          if (this[du] == null) {
            return "";
          }
          return n[du] + "=\"" + this[du] + "\"";
        }).join(" ");
        while (dt.includes("  ")) {
          dt = dt.replace("  ", " ");
        }
        return ("<path " + dt + " d=\"" + this.path + "\" />").replace("   ", " ").replace("  ", " ");
      }
    }
    class dv {
      constructor() {
        this.elements = [];
      }
      ["addElement"](dw) {
        this.elements.push(dw);
        return this;
      }
      ["parsePathElement"](dx) {
        function dy(dz, ea = dz) {
          if (dx[ea] == null) {
            return "";
          }
          return dz + "=\"" + dx[ea] + "\"";
        }
        let eb = Object.keys(n).map(ec => dy(n[ec], ec)).join(" ");
        while (eb.includes("  ")) {
          eb = eb.replace("  ", " ");
        }
        return ("<path " + eb + " d=\"" + dx.path + "\" />").replace("   ", " ").replace("  ", " ");
      }
      get ["paths"]() {
        let ed = "";
        for (let ee of this.elements) {
          ed += ee.svg;
        }
        return ed;
      }
    }
    class ef extends dv {
      constructor(eg, eh) {
        super();
        this.width = eg;
        this.height = eh;
        this.definitions = [];
        this.viewBox = {
          "minX": 0,
          "minY": 0,
          "maxX": eg,
          "maxY": eh
        };
        this.scaleValues = [1, 1];
        this.translateValues = [0, 0];
      }
      ["scale"](ei, ej) {
        this.scaleValues[0] *= ei;
        this.scaleValues[1] *= ej;
      }
      ["translate"](ek, el) {
        this.translateValues[0] += ek;
        this.translateValues[1] += el;
      }
      ["setView"](em, en, eo, ep) {
        this.viewBox = {
          "minX": em,
          "minY": en,
          "maxX": eo,
          "maxY": ep
        };
      }
      get ["minifiedPath"]() {
        return this.elements.map(eq => eq.minifiedPath).join("");
      }
      get ["defs"]() {
        return this.definitions.map(er => er.svg).join("");
      }
      get ["svg"]() {
        return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + this.width + "px\" height=\"" + this.height + "px\" viewBox=\"" + this.viewBox.minX + " " + this.viewBox.minY + " " + this.viewBox.maxX + " " + this.viewBox.maxY + "\" transform=\"translate(" + this.translateValues[0] + ", " + this.translateValues[1] + ") scale(" + this.scaleValues[0] + ", " + this.scaleValues[1] + ")\"><defs>" + this.defs + "</defs>" + this.paths + "</svg>";
      }
      ["addDefinition"](es) {
        this.definitions.push(es);
        return this;
      }
    }
    onmessage = function ({
      data: et
    }) {
      et;
      eu();
    };
    const ev = function () {
      const ew = b(this, function () {
        return ew.toString().search("(((.+)+)+)+$").toString().constructor(ew).search("(((.+)+)+)+$");
      });
      ew();
      const ex = {};
      return function (ey, ez, fa) {
        const fb = "" + ey + ez + fa;
        if (ex[fb] !== undefined) {
          return ex[fb];
        }
        var [ey, fc, fd] = ey.match(/\w\w/g).map(fe => parseInt(fe, 16));
        var [ez, ff, fg] = ez.match(/\w\w/g).map(fh => parseInt(fh, 16));
        return ex[fb] = "#" + Math.round(ey + (ez - ey) * fa).toString(16).padStart(2, "0") + Math.round(fc + (ff - fc) * fa).toString(16).padStart(2, "0") + Math.round(fd + (fg - fd) * fa).toString(16).padStart(2, "0");
      };
    }();
    function fi(fj, fk) {
      fj.fill = fk;
      fj.stroke = ev(fk, et.black, 0.2);
    }
    const fl = {
      "Circle"(fm, fn, fo = 1) {
        let fp = new an();
        fp.circle(0, 0, fo * 0.225);
        fi(fp, fn);
        fp.strokeWidth = 0.075 * (fo / 1);
        fm.addElement(fp);
        return fp;
      },
      "Leaf"(fq, fr) {
        let fs = new an();
        let ft = new an();
        fi(fs, fr);
        fs.strokeWidth = 0.1;
        fs.strokeLinecap = fs.strokeLinejoin = "round";
        ft.stroke = fs.stroke;
        ft.strokeWidth = fs.strokeWidth;
        ft.strokeLinecap = ft.strokeLinejoin = "round";
        fs.scale(0.5, 0.5);
        ft.scale(0.5, 0.5);
        fs.drawCurve([[0, -1], [-0.3, -0.8], [-0.75, 0], [-0.45, 0.8], [0, 1], [0.45, 0.8], [0.75, 0], [0.3, -0.8], [0, -1]], false, 0.5);
        fs.closePath();
        ft.drawCurve([[0, -0.6], [-0.175, 0], [0, 0.75], [-0.175, 0], [0, -0.6]], false, 0.5);
        ft.closePath();
        ft.moveTo(0, 0.5);
        ft.lineTo(0, 0.61875);
        fq.addElement(fs);
        fq.addElement(ft);
        return [fs, ft];
      },
      "Square"(fu, fv, fw) {
        let fx = new an();
        let fy = fw ? 1.9 : 0.8;
        fi(fx, fv);
        fx.strokeWidth = 0.05;
        fx.strokeLinecap = fx.strokeLinejoin = "round";
        fx.polygon(4, 0, 0, 0.7, Math.PI / 4);
        fx.scale(0.5 * fy, 0.5 * fy);
        fu.addElement(fx);
      },
      "Triangle"(fz, ga, gb) {
        let gc = new an();
        let gd = gb ? 1.9 : 0.8;
        fi(gc, ga);
        gc.strokeWidth = 0.05;
        gc.strokeLinecap = gc.strokeLinejoin = "round";
        gc.polygon(3, 0, 0.1, 0.6, Math.PI / 6);
        gc.scale(0.5 * gd, 0.5 * gd);
        fz.addElement(gc);
      },
      "Pentagon"(ge, gf, gg) {
        let gh = new an();
        let gi = gg ? 1.9 : 1;
        fi(gh, gf);
        gh.strokeWidth = 0.05;
        gh.strokeLinecap = gh.strokeLinejoin = "round";
        gh.polygon(5, 0, 0, 0.5, -Math.PI / 10);
        gh.scale(0.5 * gi, 0.5 * gi);
        ge.addElement(gh);
      },
      "Tank"(gj, gk, gl) {
        let gm = new an();
        let gn = new an();
        fi(gm, gk);
        fi(gn, et.stingerBlack);
        gm.strokeWidth = gn.strokeWidth = 0.05;
        gm.strokeLinecap = gm.strokeLinejoin = "round";
        gn.strokeLinecap = gn.strokeLinejoin = "round";
        gm.circle(-0.175, 0, 0.3);
        gn.addRect(-0.1, -0.125, 0.5, 0.25);
        gj.addElement(gn);
        gj.addElement(gm);
      }
    };
    const go = {
      "Basic"(gp, gq, gr) {
        fl.Circle(gp, et.white, gr ? 1.9 : 1);
      },
      "Light"(gs, gt) {
        let gu = 0;
        let gv = 1;
        let gw = 0;
        let gx = 0.1;
        switch (gt) {
          case 0:
          case 1:
            gx /= 1.6;
            break;
          case 2:
          case 3:
            gu = 0.7;
            gv = 2;
            gx /= 1.6;
            break;
          case 4:
          case 5:
            gu = 0.75;
            gv = 3;
            gx /= 1.75;
            break;
          case 6:
          case 7:
            gu = 0.75;
            gv = 4;
            gx /= 1.75;
            gw = -Math.PI / 2;
            break;
          case 8:
          case 9:
            gu = 0.8;
            gv = 5;
            gx /= 1.9;
            gw = -Math.PI / 2;
            break;
          case 10:
            gu = 0.8;
            gv = 7;
            gx /= 1.9;
            gw = -Math.PI / 2;
            break;
        }
        gu /= 4;
        for (let gy = gv - 1; gy >= 0; gy--) {
          let gz = gy / gv * Math.PI * 2 + gw;
          let ha = new an();
          fi(ha, et.white);
          ha.strokeWidth = gx;
          ha.circle(Math.cos(gz) * gu, Math.sin(gz) * gu, 0.15);
          gs.addElement(ha);
        }
      },
      "Faster"(hb, hc, hd) {
        fl.Circle(hb, et.cumWhite, hd ? 1.9 : 0.667);
      },
      "Stinger"(he, hf, hg) {
        let hh = 0;
        let hi = 1;
        let hj = 0;
        let hk = 0.075;
        let hl = false;
        switch (hf) {
          case 0:
          case 1:
            hk /= 1.6;
            break;
          case 2:
          case 3:
            hh = 0.7;
            hi = 2;
            hk /= 1.6;
            hj = Math.PI / 4;
            hl = 0;
            break;
          case 4:
          case 5:
            hh = 0.75;
            hi = 3;
            hk /= 1.75;
            hj = 0;
            hl = 0;
            break;
          case 6:
          case 7:
            hh = 0.75;
            hi = 4;
            hk /= 1.75;
            hj = -Math.PI / 4;
            break;
          case 8:
          case 9:
            hh = 0.8;
            hi = 5;
            hk /= 1.9;
            hj = -Math.PI / 2;
            break;
          case 10:
            hh = 0.9;
            hi = 7;
            hk /= 1.9;
            hj = -Math.PI / 2;
            break;
        }
        hh /= 4;
        for (let hm = hi - 1; hm >= 0; hm--) {
          let hn = hm / hi * Math.PI * 2 + hj;
          let ho = new an();
          fi(ho, et.stingerBlack);
          ho.strokeWidth = hk;
          ho.polygon(3, Math.cos(hn) * hh, Math.sin(hn) * hh, hg ? 0.475 : 0.15, hl !== false ? hl : hi === 1 ? 0 : hn + Math.PI);
          he.addElement(ho);
        }
      },
      "Rock"(hp, hq, hr) {
        const hs = [];
        for (let ht = 0; ht < 5; ht++) {
          let hu = ht / 5 * Math.PI * 2;
          let hv = ht === 4 ? 1.35 : 1.25;
          hs.push({
            "x": Math.cos(hu) * hv,
            "y": Math.sin(hu) * hv
          });
        }
        let hw = new an();
        fi(hw, et.rockGray);
        hw.strokeWidth = 0.075;
        hw.pointPath(0, 0, hr ? 0.38 : 0.25, hs);
        hp.addElement(hw);
      },
      "Sponge"(hx, hy, hz) {
        let ia = new an();
        fi(ia, et.peach);
        ia.strokeWidth = 0.075;
        ia.strokeLinecap = ia.strokeLinejoin = "round";
        ia.scale(hz ? 0.6333333333333333 : 0.35, hz ? 0.6333333333333333 : 0.35);
        let ib = 0;
        for (let ic = Math.PI / 7; ib < 7; ib++) {
          let ie = ib / 7 * Math.PI * 2;
          ia.drawCurve([[Math.cos(ie - ic) * 0.55, Math.sin(ie - ic) * 0.55], [Math.cos(ie), Math.sin(ie)], [Math.cos(ie + ic) * 0.55, Math.sin(ie + ic) * 0.55]], ib > 0);
        }
        hx.addElement(ia);
      },
      "Antennae"(ig) {
        let ih = new an();
        ih.fill = "none";
        ih.stroke = et.black;
        ih.strokeWidth = 0.15;
        ih.strokeLinecap = ih.strokeLinejoin = "round";
        ih.scale(0.3, 0.3);
        ih.drawCurve([[-0.8, -0.8], [-0.334, 0], [-0.25, 1]]);
        ih.closePath();
        ih.drawCurve([[0.8, -0.8], [0.334, 0], [0.25, 1]]);
        ih.closePath();
        ig.addElement(ih);
      },
      "god"(ii, ij, ik) {
        let il = new an();
        fi(il, et.lightningTeal);
        il.strokeWidth = 0.05;
        il.strokeLinecap = il.strokeLinejoin = "round";
        const im = [];
        for (let io = 0; io < 3; io++) {
          let ip = io / 3 * Math.PI * 2;
          let iq = Math.PI / 6;
          im.push({
            "x": Math.cos(ip - iq) * 0.75,
            "y": Math.sin(ip - iq) * 0.75
          }, {
            "x": Math.cos(ip),
            "y": Math.sin(ip)
          }, {
            "x": Math.cos(ip + iq) * 0.75,
            "y": Math.sin(ip + iq) * 0.75
          }, {
            "x": Math.cos(ip + Math.PI / 3) * 0.5,
            "y": Math.sin(ip + Math.PI / 3) * 0.5
          }, {
            "x": Math.cos(ip + Math.PI / 3 * 2) * 0.5,
            "y": Math.sin(ip + Math.PI / 3 * 2) * 0.5
          });
        }
        il.pointPath(0, 0, ik ? 0.5066666666666666 : 0.25, im);
        ii.addElement(il);
      },
      "Lightning"(ir, is, it) {
        let iu = new an();
        let iv = it ? 0.95 : 0.5;
        fi(iu, et.lightningTeal);
        iu.strokeWidth = 0.05;
        iu.scale(iv, iv);
        for (let iw = 0; iw <= 10; iw++) {
          let ix = iw / 10 * Math.PI * 2;
          let iy = Math.PI / 10;
          iu[iw === 0 ? "moveTo" : "lineTo"](Math.cos(ix - iy) * 0.25, Math.sin(ix - iy) * 0.25);
          iu.lineTo(Math.cos(ix) * 0.5, Math.sin(ix) * 0.5);
          iu.lineTo(Math.cos(ix + iy) * 0.25, Math.sin(ix + iy) * 0.25);
        }
        ir.addElement(iu);
      },
      "Cactus"(iz, ja, jb) {
        let jc = new an();
        let jd = new an();
        let je = jb ? 0.4222222222222222 : 0.25;
        fi(jc, et.cactusGreen);
        jc.strokeWidth = 0.2;
        jc.strokeLinecap = jc.strokeLinejoin = "round";
        jd.fill = et.cactusLightGreen;
        jd.stroke = "none";
        jc.scale(je, je);
        jd.scale(je, je);
        jc.dipPolygon(8, 0, 0, 1.1, 0, 2.5);
        jd.circle(0, 0, 0.6);
        iz.addElement(jc);
        iz.addElement(jd);
      },
      "Leaf"(jf, jg, jh) {
        let [ji, jj] = fl.Leaf(jf, et.leafGreen);
        let jk = jh ? 1.52 : 1;
        ji.scale(jk, jk);
        jj.scale(jk, jk);
      },
      "Egg"(jl, jm, jn) {
        let jo = 0.9 + jm / 10 * 0.1;
        let jp = new ag(0, 0, jo * 0.775, jo);
        let jq = jn ? 0.475 : 0.25;
        fi(jp, et.peach);
        jp.strokeWidth = 0.2;
        jp.scale(jq, jq);
        jl.addElement(jp);
      },
      "Ant Egg"(jr, js, jt) {
        let ju = 0.75 + js / 10 * 0.1;
        let jv = jt ? 0.33043478260869563 : 0.25;
        for (let jw = 0; jw < 4; jw++) {
          let jx = jw / 4 * Math.PI * 2;
          let jy = new an();
          fi(jy, et.peach);
          jy.strokeWidth = 0.2;
          jy.scale(jv, jv);
          jy.circle(Math.cos(jx) * ju * 0.775, Math.sin(jx) * ju * 0.775, ju);
          jy.closePath();
          jr.addElement(jy);
        }
      },
      "Hornet Egg"(jz, ka, kb) {
        let kc = 0.75 + ka / 10 * 0.1;
        let kd = kb ? 0.39999999999999997 : 0.25;
        {
          path = new ag(-0.5, 0, kc * 0.775, kc);
          fi(path, et.peach);
          path.strokeWidth = 0.2;
          path.scale(kd, kd);
          jz.addElement(path);
        }
        {
          path = new ag(0.5, 0, kc * 0.775, kc);
          fi(path, et.peach);
          path.strokeWidth = 0.2;
          path.scale(kd, kd);
          jz.addElement(path);
        }
      },
      "SingleEgg"(ke, kf, kg) {
        let kh = 0.75 + kf / 10 * 0.1;
        let ki = kg ? 0.5066666666666666 : 0.25;
        let kj = new an();
        fi(kj, et.peach);
        kj.strokeWidth = 0.2;
        kj.scale(ki, ki);
        kj.circle(0, 0, kh);
        ke.addElement(kj);
      },
      "Walkingstick Egg"(kk, kl, km) {
        let kn = 0.9 + kl / 10 * 0.1;
        let ko = new ag(0, 0, kn, kn * 0.85);
        let kp = km ? 0.475 : 0.25;
        fi(ko, et.peach);
        ko.strokeWidth = 0.2;
        ko.scale(kp, kp);
        kk.addElement(ko);
      },
      "Missile"(kq, kr, ks) {
        const kt = [[-1, -0.6666666666666666], [-1, 0.6666666666666666], [1, 0]].map(([ku, kv]) => ({
          "x": ku,
          "y": kv
        }));
        let kw;
        if (kr === 10) {
          kw = ks ? 1.1874999999999998 : 1.25;
          for (let kx = 0; kx < 5; kx++) {
            let ky = kx / 5 * Math.PI * 2;
            let kz = new an();
            fi(kz, et.stingerBlack);
            kz.strokeWidth = 0.025;
            kz.strokeLinecap = kz.strokeLinejoin = "round";
            kz.rotation = 180 - ky / Math.PI * 180;
            kz.pointPath(0.175, 0.175, 0.175, kt);
            kz.scale(kw, kw);
            kq.addElement(kz);
          }
          return;
        }
        kw = ks ? 1.6521739130434783 : 1;
        let la = new an();
        fi(la, et.stingerBlack);
        la.strokeWidth = 0.1;
        la.strokeLinecap = la.strokeLinejoin = "round";
        la.pointPath(0, 0, 0.25, kt);
        la.scale(kw, kw);
        kq.addElement(la);
      },
      "Iris"(lb, lc, ld) {
        fl.Circle(lb, et.grapePurple, ld ? 1.9 : 0.5);
      },
      "Pincer"(le, lf, lg) {
        let lh = new an();
        fi(lh, et.pincer);
        lh.strokeWidth = 0.05;
        lh.strokeLinecap = lh.strokeLinejoin = "round";
        lh.drawCurve([[-1, -0.2], [-0.2, -0.95], [0.9, 0.2]], false, lg ? 0.45 : 0.334);
        lh.drawCurve([[0.9, 0.2], [0.2, -0.1], [-1, 0.2], [-1, -0.2]], true, lg ? 0.45 : 0.334);
        lh.closePath();
        le.addElement(lh);
      },
      "Magnet"(li, lj, lk) {
        let ll = new an();
        let lm = new an();
        let ln = lk ? 0.7124109486314211 : 0.5;
        fi(ll, "#0000CC");
        ll.strokeWidth = 0.075;
        ll.strokeLinecap = ll.strokeLinejoin = "round";
        fi(lm, "#CC0000");
        lm.strokeWidth = 0.075;
        lm.strokeLinecap = lm.strokeLinejoin = "round";
        ll.addPath("M 0.4381 0.7307 L 0.2023 1 L 0.1405 0.9459 L 0.0838 0.8698 L 0.0296 0.7448 L 0 0.5889 L 0.0232 0.4601 L 0.0541 0.3544 L 0.1314 0.259 L 0.2023 0.1881 L 0.3144 0.1147 L 0.3982 0.0515 L 0.4961 -0 L 0.5915 0.0052 L 0.6714 0.058 L 0.7075 0.1727 L 0.683 0.2835 L 0.5876 0.3647 L 0.4162 0.4987 L 0.3776 0.5838 L 0.4021 0.6714 L 0.4381 0.7062 L 0.451 0.7113 Z");
        lm.addPath("M 0.255 0.3525 L -0 0.6368 L 0.0401 0.6809 L 0.1308 0.7543 L 0.235 0.7917 L 0.3725 0.8184 L 0.5073 0.7957 L 0.6649 0.725 L 0.7717 0.6382 L 0.8892 0.4726 L 0.9853 0.3044 L 1 0.1135 L 0.9332 0.0334 L 0.8251 -0 L 0.6862 0.0521 L 0.5995 0.1829 L 0.5113 0.3458 L 0.4032 0.4112 L 0.2911 0.3818 Z");
        ll.scale(ln, ln);
        if (lk) {
          ll.translate(-1.5, -1.5);
        } else {
          ll.translate(-0.6, -0.6);
        }
        lm.scale(ln, ln);
        if (lk) {
          lm.translate(-0.85, -0.5);
          lm.rotation = 0;
        } else {
          lm.translate(-0.35, -0.225);
          lm.rotation = 5;
        }
        li.addElement(ll);
        li.addElement(lm);
      },
      "Armor"(lo, lp, lq) {
        let lr = new an();
        let ls = lq ? 0.475 : 0.25;
        fi(lr, et.stingerBlack);
        lr.strokeWidth = 0.075;
        lr.strokeLinecap = lr.strokeLinejoin = "round";
        lr.addPath("M -0.875 -0.506 L -0.438 -0.753 L -0.005 -1.008 L 0.428 -0.753 L 0.865 -0.506 L 0.861 -0.004 L 0.865 0.498 L 0.428 0.746 L -0.005 1 L -0.438 0.746 L -0.875 0.498 L -0.871 -0.004 Z M 0.802 -0.004 C 0.802 -0.449 0.441 -0.811 -0.005 -0.811 C -0.219 -0.811 -0.424 -0.726 -0.575 -0.574 C -0.727 -0.423 -0.812 -0.218 -0.812 -0.004 C -0.812 0.442 -0.45 0.803 -0.005 0.803 C 0.441 0.803 0.802 0.442 0.802 -0.004 Z");
        lr.scale(ls, ls);
        lo.addElement(lr);
      },
      "Bubble"(lt, lu, lv) {
        let lw = new an();
        let lx = new an();
        let ly = lv ? 0.95 : 0.5;
        lw.fill = et.white;
        lw.stroke = ev(et.bubbleGrey, et.black, 0.2);
        lw.fillOpacity = 0.5;
        lw.strokeWidth = 0.025;
        lw.circle(0, 0, 0.475);
        lw.scale(ly, ly);
        lt.addElement(lw);
        lx.fill = et.bubbleGrey;
        lx.stroke = "none";
        lx.circle(0.2, -0.2, 0.1);
        lx.scale(ly, ly);
        lt.addElement(lx);
      },
      "Pearl"(lz, ma, mb) {
        fl.Circle(lz, et.peach, mb ? 1.9 : 1.25).strokeWidth *= 0.667;
        let mc = new an();
        let md = mb ? 0.95 : 0.5;
        mc.fill = et.white;
        mc.stroke = "none";
        mc.circle(0.15, -0.15, 0.2);
        mc.scale(md, md);
        lz.addElement(mc);
      },
      "Shell"(me, mf, mg) {
        let mh = new an();
        let mi = new an();
        let mj = mg ? 0.5181347150259067 : 0.25;
        fi(mh, et.peach);
        mh.strokeWidth = mi.strokeWidth = 0.1;
        mh.strokeLinecap = mh.strokeLinejoin = "round";
        mi.stroke = mh.stroke;
        mi.fill = "none";
        mh.drawCurve([[0.3, -0.95], [1.5, 0], [0.3, 0.95]]);
        mh.lineTo(-0.8, 0.3);
        mh.drawCurve([[-0.8, 0.3], [-1, 0], [-0.8, -0.3]], true);
        mh.closePath();
        mh.scale(mj, mj);
        mi.moveTo(-0.6, -0.15);
        mi.lineTo(0.6, -0.45);
        mi.moveTo(-0.55, -0.05);
        mi.lineTo(0.6, -0.2);
        mi.moveTo(-0.55, 0.05);
        mi.lineTo(0.6, 0.2);
        mi.moveTo(-0.6, 0.15);
        mi.lineTo(0.6, 0.45);
        mi.scale(mj, mj);
        me.addElement(mh);
        me.addElement(mi);
      },
      "Web"(mk, ml, mm) {
        let mn = mm ? 0.95 : 0.5;
        if (ml === 10) {
          for (let mo = 0; mo < 3; mo++) {
            let mp = new an();
            fi(mp, et.white);
            mp.strokeWidth = 0.075;
            mp.dipPolygon(5, 0.225, 0.225, 0.25, 0, 1.5);
            mp.rotation = mo * 120;
            mp.scale(mn, mn);
            mk.addElement(mp);
          }
          return;
        }
        let mq = new an();
        fi(mq, et.white);
        mq.strokeWidth = 0.075;
        mq.dipPolygon(5, 0, 0, 0.5, 0, 1.5);
        mq.scale(mn, mn);
        mk.addElement(mq);
      },
      "Wing"(mr, mt, mu) {
        let mv = new an();
        let mw = mu ? 0.95 : 0.5;
        fi(mv, et.white);
        mv.strokeWidth = 0.075;
        mv.strokeLinecap = mv.strokeLinejoin = "round";
        mx[0] -= 0.3;
        mv.drawCurve([[0.85, -1], [0.2, -0.85], [-0.25, 0], [0.2, 0.85], [0.85, 1]].map(mx => mx), false, 0.5);
        my[0] -= 0.3;
        mv.drawCurve([[0.85, 1], [-0.2, 0], [0.85, -1]].map(my => my), true, 0.5);
        mv.closePath();
        mv.scale(mw, mw);
        mv.rotation = -Math.PI * 0.1 * 180 / Math.PI;
        mr.addElement(mv);
      },
      "Third Eye"(mz, na, nb) {
        let nc = new ag(0, 0, 0.4, 1.2);
        let nd = new an();
        let ne = nb ? 1.9 : 1;
        nc.fill = et.stingerBlack;
        nc.stroke = "none";
        nc.scale(0.225 * ne, 0.225 * ne);
        nd.fill = et.white;
        nd.stroke = "none";
        nd.circle(0, 0, 0.2);
        nd.scale(0.5 * ne, 0.5 * ne);
        mz.addElement(nc);
        mz.addElement(nd);
      },
      "Square"(nf, ng, nh) {
        return fl.Square(nf, et.diepSquare, nh);
      },
      "Triangle"(ni, nj, nk) {
        return fl.Triangle(ni, et.diepTriangle, nk);
      },
      "Pentagon"(nl, nm, nn) {
        return fl.Pentagon(nl, et.diepPentagon, nn);
      },
      "Peas"(no, np, nq) {
        for (let nr = 0; nr < 4; nr++) {
          let ns = new an();
          let nt = Math.PI / 2 * nr + Math.PI / 8;
          let nu = nq ? 1.2666666666666666 : 1;
          fi(ns, et.peaGreen);
          ns.strokeWidth = 0.075;
          ns.scale(nu, nu);
          ns.circle(0.175 * Math.cos(nt), 0.175 * Math.sin(nt), 0.175);
          no.addElement(ns);
        }
      },
      "SingularPea"(nv, nw, nx) {
        return fl.Circle(nv, et.peaGreen, nx ? 1.9 : 1);
      },
      "Grapes"(ny, nz, oa) {
        for (let ob = 0; ob < 4; ob++) {
          let oc = new an();
          let od = Math.PI / 2 * ob + Math.PI / 8;
          let oe = oa ? 1.1874999999999998 : 1;
          fi(oc, et.grapePurple);
          oc.strokeWidth = 0.075;
          oc.scale(oe, oe);
          oc.circle(0.2 * Math.cos(od), 0.2 * Math.sin(od), 0.2);
          ny.addElement(oc);
        }
      },
      "SingularGrape"(og, oh, oi) {
        return fl.Circle(og, et.grapePurple, oi ? 1.9 : 1);
      },
      "Salt"(oj, ok, ol) {
        let om = new an();
        let oo = ol ? 0.95 : 0.5;
        fi(om, et.white);
        om.strokeWidth = 0.075;
        om.scale(oo, oo);
        om.polygon(7, 0, 0, 0.5, 0);
        oj.addElement(om);
      },
      "Peagun"(op, oq, or) {
        return fl.Tank(op, et.peaGreen, or);
      },
      "Pollen"(os, ot, ou) {
        if (ou) {
          let ov = new an();
          fi(ov, et.playerYellow);
          ov.strokeWidth = 0.075;
          ov.scale(0.95, 0.95);
          ov.circle(0, 0, 0.5);
          os.addElement(ov);
          return;
        }
        let ow = 0;
        let ox = 1;
        let oy = 0;
        let oz = 0.1;
        switch (ot) {
          case 0:
          case 1:
          case 2:
            oz /= 1.6;
            break;
          case 3:
          case 4:
          case 5:
            ow = 0.7;
            ox = 2;
            oz /= 1.6;
            break;
          case 6:
          case 7:
          case 8:
            ow = 0.75;
            ox = 3;
            oz /= 1.75;
            break;
          case 9:
          case 10:
            ow = 0.75;
            ox = 4;
            oz /= 1.75;
            oy = -Math.PI / 2;
            break;
        }
        ow /= 4;
        for (let pa = ox - 1; pa >= 0; pa--) {
          let pb = pa / ox * Math.PI * 2 + oy;
          let pc = new an();
          fi(pc, et.playerYellow);
          pc.strokeWidth = oz;
          pc.circle(Math.cos(pb) * ow, Math.sin(pb) * ow, 0.15);
          os.addElement(pc);
        }
      },
      "Rose"(pd, pe, pf) {
        return fl.Circle(pd, et.rosePink, pf ? 1.9 : 1);
      },
      "Dahlia"(pg, ph, pj) {
        for (let pk = 0; pk < 3; pk++) {
          let pl = new an();
          let pm = Math.PI * 2 / 3 * pk;
          let pn = pj ? 1.2666666666666666 : 1;
          fi(pl, et.rosePink);
          pl.strokeWidth = 0.075;
          pl.scale(pn, pn);
          pl.circle(0.2 * Math.cos(pm), 0.2 * Math.sin(pm), 0.15);
          pg.addElement(pl);
        }
      },
      "Primrose"(po, pp, pq) {
        {
          let pr = new an();
          fi(pr, et.honeyGold);
          pr.strokeWidth = 0.2;
          pr.strokeLinecap = pr.strokeLinejoin = "round";
          pr.dipPolygon(3, 0, 0, (pq ? 1.9 : 1) * 1.05, 0, 0.1);
          pr.scale(0.25, 0.25);
          if (pq) {
            pr.translate(0.05, 0);
          }
          pr.rotation = 180;
          po.addElement(pr);
        }
        {
          let ps = new an();
          fi(ps, et.honeyGold);
          ps.strokeWidth = 0.2;
          ps.strokeLinecap = ps.strokeLinejoin = "round";
          ps.dipPolygon(3, 0, 0, (pq ? 1.9 : 1) * 0.9, 0, 0.1);
          ps.scale(0.25, 0.25);
          if (pq) {
            ps.translate(0.05, 0);
          }
          po.addElement(ps);
        }
        function pt(pu, pv, pw) {
          let py = new an();
          fi(py, et.rosePink);
          py.strokeWidth = 0.025;
          py.circle(pu, pv, pw);
          py.scale(pq ? 1.9 : 1, pq ? 1.9 : 1);
          if (pq) {
            py.translate(-0.05, 0);
          }
          po.addElement(py);
        }
        for (let pz = 0; pz < 3; pz++) {
          let qa = Math.PI * 2 / 3 * pz;
          pt(0.075 * Math.cos(qa), 0.075 * Math.sin(qa), 0.0334);
        }
      },
      "Powder"(qb, qc, qd) {
        let qe = new an();
        let qf = qd ? 1.2666666666666666 : 0.5;
        qe.fill = et.white;
        qe.stroke = "none";
        qe.scale(qf, qf);
        let qg = 0;
        for (let qh = 0; qg < 12; qg++) {
          qh += Math.PI * 2 / 8;
          let qi = qg % 3 == 0 ? 0.25 : 0.125;
          qe.circle(qi * Math.cos(qh), qi * Math.sin(qh), 0.15);
        }
        qb.addElement(qe);
      }
    };
    async function eu() {
      for (let qj in go) {
        for (let qk = 0; qk < 11; qk++) {
          {
            let ql = new ef(512, 512);
            go[qj](ql, qk, false);
            ql.setView(-0.5, -0.5, 1, 1);
            postMessage({
              "key": "icon_" + qj + "_" + qk,
              "value": ql.svg
            });
          }
          {
            let qm = new ef(512, 512);
            go[qj](qm, qk, true);
            qm.setView(-0.5, -0.5, 1, 1);
            postMessage({
              "key": "render_" + qj + "_" + qk,
              "value": qm.svg
            });
          }
        }
      }
      postMessage("DONE");
    }
  })();
}
/*
     FILE ARCHIVED ON 12:04:07 Mar 27, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:56:33 Dec 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 139.724
  exclusion.robots: 0.106
  exclusion.robots.policy: 0.096
  cdx.remote: 0.068
  esindex: 0.01
  LoadShardBlock: 95.567 (3)
  PetaboxLoader3.datanode: 68.097 (4)
  load_resource: 141.43
  PetaboxLoader3.resolve: 121.82
*/
