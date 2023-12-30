var _____WB$wombat$assign$function_____ = function(name) {
  return self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function(obj) {
    this.__WB_source = obj;
    return this;
  };
} {
  (async function() {
    const b = function() {
      let e = true;
      return function(f, i) {
        const j = e ? function() {
          if (i) {
            const k = i.apply(f, arguments);
            i = null;
            return k;
          }
        } : function() {};
        e = false;
        return j;
      };
    }();
    const n = {
      'id': 'id',
      'class': "class",
      'fill': "fill",
      'stroke': 'stroke',
      'strokeWidth': "stroke-width",
      'strokeLinecap': "stroke-linecap",
      'strokeLinejoin': "stroke-linejoin",
      'strokeMiterlimit': "stroke-miterlimit",
      'strokeDasharray': "stroke-dasharray",
      'strokeDashoffset': 'stroke-dashoffset',
      'strokeOpacity': "stroke-opacity",
      'fillRule': 'fill-rule',
      'fillOpacity': 'fill-opacity',
      'clipRule': "clip-rule",
      'opacity': "opacity",
      'transform': 'transform',
      'clipPath': "clip-path"
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
      get["transform"]() {
        let p = '';
        if (this.scaleValues[0] !== 1 || this.scaleValues[1] !== 1) {
          p += " scale(" + this.scaleValues[0] + ", " + this.scaleValues[1] + ')';
        }
        if (this.translateValues[0] !== 0 || this.translateValues[1] !== 0) {
          p += " translate(" + this.translateValues[0] + ", " + this.translateValues[1] + ')';
        }
        if (this.rotation !== 0) {
          p += " rotate(" + this.rotation + ')';
        }
        return p.trim();
      }
      get["clipPath"]() {
          if (this.clipPathID === undefined) {
            return undefined;
          }
          return "url(#" + this.clipPathID + ')';
        }
        ['translate'](r, aa, ab = true) {
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
      get["svg"]() {
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
        this.path = '';
        this.minX = 0;
        this.minY = 0;
        this.maxX = 0;
        this.maxY = 0;
      }
      get["width"]() {
        return this.maxX - this.minX;
      }
      get["height"]() {
        return this.maxY - this.minY;
      }
      get["minifiedPath"]() {
          return this.path;
        }
        ['addPath'](as) {
          let at = as.split(" ");
          for (let au = 0; au < at.length; au++) {
            switch (at[au]) {
              case 'M':
                this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 1]), parseFloat(at[au + 2]));
                break;
              case 'H':
                this.#configureViewBox(parseFloat(at[au + 1]), this.minY, parseFloat(at[au + 1]), this.maxY);
                break;
              case 'V':
                this.#configureViewBox(this.minX, parseFloat(at[au + 1]), this.maxX, parseFloat(at[au + 1]));
                break;
              case 'L':
                this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 1]), parseFloat(at[au + 2]));
                break;
              case 'C':
                this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 5]), parseFloat(at[au + 6]));
                break;
              case 'S':
                this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 3]), parseFloat(at[au + 4]));
                break;
              case 'Q':
                this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 3]), parseFloat(at[au + 4]));
                break;
              case 'T':
                this.#configureViewBox(parseFloat(at[au + 1]), parseFloat(at[au + 2]), parseFloat(at[au + 1]), parseFloat(at[au + 2]));
                break;
              case 'A':
                this.#configureViewBox(parseFloat(at[au + 6]), parseFloat(at[au + 7]), parseFloat(at[au + 6]), parseFloat(at[au + 7]));
                break;
              case 'Z':
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
        ['drawCurve'](bw, bx, bz = 1) {
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
        ['circle'](cq, cr, cs, ct = true) {
          cq = +cq.toFixed(this.decimals);
          cr = +cr.toFixed(this.decimals);
          cs = +cs.toFixed(this.decimals);
          this.#configureViewBox(cq - cs, cr - cs, cq + cs, cr + cs);
          this.path += (ct ? "M " + cq + ", " + (cr - cs) + " " : '') + ("A " + cs + ", " + cs + " 0 1 1 " + cq + ", " + (cr + cs) + " A " + cs + ", " + cs + " 0 1 1 " + cq + ", " + (cr - cs));
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
          this.moveTo(dg, 0);
          for (let dk = 0; dk < dd; dk++) {
            let dl = (dk + 1) / dd * Math.PI * 2;
            let dm = (dk + 0.5) / dd * Math.PI * 2;
            this.quadraticCurveTo(dg * Math.cos(dm) * dj, dg * Math.sin(dm) * dj, dg * Math.cos(dl), dg * Math.sin(dl));
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
        ['closePath']() {
          this.path += 'Z';
          return this;
        }
        ['sterilize']() {
          return new an().addPath(this.path);
        }
      get["svg"]() {
        let dt = Object.keys(n).map(du => {
          if (this[du] == null) {
            return '';
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
        ['parsePathElement'](dx) {
          function dy(dz, ea = dz) {
            if (dx[ea] == null) {
              return '';
            }
            return dz + "=\"" + dx[ea] + "\"";
          }
          let eb = Object.keys(n).map(ec => dy(n[ec], ec)).join(" ");
          while (eb.includes("  ")) {
            eb = eb.replace("  ", " ");
          }
          return ("<path " + eb + " d=\"" + dx.path + "\" />").replace("   ", " ").replace("  ", " ");
        }
      get["paths"]() {
        let ed = '';
        for (let ee of this.elements) {
          ed += ee.svg;
        }
        return ed;
      }
    }
    let ef = 0;
    class eg extends dv {
      constructor(eh = "svg" + ef++) {
        super();
        this.id = eh;
      }
      get["svg"]() {
        return "<clipPath id=\"" + this.id + "\">" + this.paths + '</clipPath>';
      }
    }
    class ei extends dv {
      constructor(ej, ek) {
          super();
          this.width = ej;
          this.height = ek;
          this.definitions = [];
          this.viewBox = {
            'minX': 0,
            'minY': 0,
            'maxX': ej,
            'maxY': ek
          };
          this.scaleValues = [1, 1];
          this.translateValues = [0, 0];
        }
        ["scale"](el, em) {
          this.scaleValues[0] *= el;
          this.scaleValues[1] *= em;
        }
        ["translate"](en, eo) {
          this.translateValues[0] += en;
          this.translateValues[1] += eo;
        }
        ["setView"](ep, eq, er, es) {
          this.viewBox = {
            'minX': ep,
            'minY': eq,
            'maxX': er,
            'maxY': es
          };
        }
      get['minifiedPath']() {
        return this.elements.map(et => et.minifiedPath).join('');
      }
      get["defs"]() {
        return this.definitions.map(eu => eu.svg).join('');
      }
      get['svg']() {
          return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + this.width + "px\" height=\"" + this.height + "px\" viewBox=\"" + this.viewBox.minX + " " + this.viewBox.minY + " " + this.viewBox.maxX + " " + this.viewBox.maxY + "\" transform=\"translate(" + this.translateValues[0] + ", " + this.translateValues[1] + ") scale(" + this.scaleValues[0] + ", " + this.scaleValues[1] + ")\"><defs>" + this.defs + "</defs>" + this.paths + "</svg>";
        }
        ["addDefinition"](ev) {
          this.definitions.push(ev);
          return this;
        }
    }
    onmessage = function({
      data: ew
    }) {
      ew;
      ex();
    };
    const ey = function() {
      const ez = b(this, function() {
        return ez.toString().search('(((.+)+)+)+$').toString().constructor(ez).search("(((.+)+)+)+$");
      });
      ez();
      const fa = {};
      return function(fb, fc, fd) {
        const fe = '' + fb + fc + fd;
        if (fa[fe] !== undefined) {
          return fa[fe];
        }
        var [fb, ff, fg] = fb.match(/\w\w/g).map(fh => parseInt(fh, 16));
        var [fc, fi, fj] = fc.match(/\w\w/g).map(fk => parseInt(fk, 16));
        return fa[fe] = '#' + Math.round(fb + (fc - fb) * fd).toString(16).padStart(2, '0') + Math.round(ff + (fi - ff) * fd).toString(16).padStart(2, '0') + Math.round(fg + (fj - fg) * fd).toString(16).padStart(2, '0');
      };
    }();

    function fl(fm, fn) {
      fm.fill = fn;
      fm.stroke = ey(fn, ew.black, 0.2);
    }
    const fo = {
      'Ladybug'(fp, fq) {
        let fr = new an();
        let fs = new eg();
        {
          let ft = new an();
          ft.circle(0, 0, 0.7);
          ft.scale(0.45, 0.45);
          ft.translate(-0.8, -0.95);
          ft.strokeWidth = 0.1;
          fl(ft, ew.stingerBlack);
          fp.addElement(ft);
        } {
          fr.addPath("M -0.0001 -1 A 1 1 0 0 0 -1 0 A 1 1 0 0 0 0 1 A 1 1 0 0 0 0.8 0.618 A 0.625 0.625 0 0 1 0.25 0 A 0.625 0.625 0 0 1 0.8 -0.6181 A 1 1 0 0 0 0 -1 z");
          fr.scale(0.45, 0.45);
          fr.translate(-0.95, -0.95);
          fr.strokeWidth = 0.1;
          fr.fill = fq;
          fp.addElement(fr);
          fs.addElement(fr.sterilize());
        } {
          let fu = new an();
          fu.clipPathID = fs.id;
          let fv = Math.random() * Math.PI * 2;
          let fw = 0;
          for (let fx = 2 + Math.round(Math.random() * 3); fw < fx; fw++) {
            fv += Math.PI * 2 / fx + Math.PI / fx * Math.random();
            let fy = 0.2 + 0.75 * Math.random();
            let fz = 0.15 + 0.15 * Math.random();
            if (Math.abs(fv) < Math.PI / 3) {
              fy = 0.3 * Math.random();
            }
            fu.circle(Math.cos(fv) * fy, Math.sin(fv) * fy, fz);
          }
          fu.scale(0.45, 0.45);
          fu.translate(-0.95, -0.95);
          fu.strokeWidth = 0.1;
          fp.addElement(fu);
        } {
          let ga = fr.sterilize();
          ga.scale(0.45, 0.45);
          ga.translate(-0.95, -0.95);
          ga.strokeWidth = 0.1;
          ga.fill = 'none';
          ga.stroke = ey(fq, ew.black, 0.2);
          fp.addElement(ga);
        }
        fp.addDefinition(fs);
        fp.setView(-1, -1, 0.95, 0.95);
      },
      "Baby Ant"(gb, gc) {
        let gd = new an();
        let ge = new an();
        fl(ge, gc);
        ge.strokeWidth = 0.1;
        fl(gd, ew.stingerBlack);
        gd.strokeWidth = 0.5;
        gd.strokeLinecap = gd.strokeLinejoin = "round";
        gd.scale(0.25, 0.25);
        gd.moveTo(0, -0.8);
        gd.lineTo(1.75, -0.5);
        gd.moveTo(0, 0.8);
        gd.lineTo(1.75, 0.5);
        ge.circle(0, 0, 0.3);
        gb.addElement(gd);
        gb.addElement(ge);
        gb.setView(-0.5, -0.5, 1, 1);
      },
      "Worker Ant"(gf, gg) {
        let gh = new an();
        let gi = new an();
        let gj = new an();
        fl(gj, gg);
        gj.strokeWidth = 0.1;
        fl(gi, gg);
        gi.strokeWidth = 0.1;
        fl(gh, ew.stingerBlack);
        gh.strokeWidth = 0.5;
        gh.strokeLinecap = gh.strokeLinejoin = 'round';
        gh.scale(0.25, 0.25);
        gh.moveTo(0, -0.8);
        gh.lineTo(1.75, -0.5);
        gh.moveTo(0, 0.8);
        gh.lineTo(1.75, 0.5);
        gi.circle(-0.25, 0, 0.2);
        gj.circle(0.025, 0, 0.3);
        gf.addElement(gh);
        gf.addElement(gi);
        gf.addElement(gj);
        gf.setView(-0.5, -0.5, 1, 1);
      },
      "Soldier Ant"(gk, gl) {
        let gm = new an();
        let gn = new an();
        let go = new an();
        let gp = new ag(-0.5, 0, 1.3, 0.6);
        let gq = new ag(-0.5, 0, 1.3, 0.6);
        fl(go, gl);
        go.strokeWidth = 0.1;
        fl(gn, gl);
        gn.strokeWidth = 0.1;
        gp.fill = ew.white;
        gp.fillOpacity = 0.6666666666666666;
        gp.rotation = 30;
        gp.scale(0.3, 0.3);
        gq.fill = ew.white;
        gq.fillOpacity = 0.6666666666666666;
        gq.rotation = -30;
        gq.scale(0.3, 0.3);
        fl(gm, ew.stingerBlack);
        gm.strokeWidth = 0.5;
        gm.strokeLinecap = gm.strokeLinejoin = "round";
        gm.scale(0.25, 0.25);
        gm.moveTo(0, -0.8);
        gm.lineTo(1.75, -0.5);
        gm.moveTo(0, 0.8);
        gm.lineTo(1.75, 0.5);
        gn.circle(-0.25, 0, 0.2);
        go.circle(0.025, 0, 0.3);
        gk.addElement(gm);
        gk.addElement(gn);
        gk.addElement(gp);
        gk.addElement(gq);
        gk.addElement(go);
        gk.setView(-0.5, -0.5, 1, 1);
      },
      "Queen Ant"(gr, gs) {
        gr.scale(1.275, 1.275);
        let gt = new an();
        let gu = new an();
        let gv = new an();
        let gw = new an();
        let gx = new ag(-0.5, -0.4, 1.5, 0.6);
        let gy = new ag(-0.5, 0.4, 1.5, 0.6);
        fl(gw, gs);
        gw.strokeWidth = 0.05;
        fl(gv, gs);
        gv.strokeWidth = 0.05;
        fl(gu, gs);
        gu.strokeWidth = 0.05;
        gx.fill = ew.white;
        gx.fillOpacity = 0.6666666666666666;
        gx.rotation = 20;
        gx.scale(0.15, 0.15);
        gy.fill = ew.white;
        gy.fillOpacity = 0.6666666666666666;
        gy.rotation = -20;
        gy.scale(0.15, 0.15);
        fl(gt, ew.stingerBlack);
        gt.strokeWidth = 0.5;
        gt.strokeLinecap = gt.strokeLinejoin = "round";
        gt.scale(0.1, 0.1);
        gt.translate(0.1, 0);
        gt.moveTo(0, -0.8);
        gt.lineTo(1.75, -0.5);
        gt.moveTo(0, 0.8);
        gt.lineTo(1.75, 0.5);
        gu.circle(-0.25, 0, 0.2);
        gv.circle(-0.1, 0, 0.175);
        gw.circle(0.05, 0, 0.15);
        gr.addElement(gt);
        gr.addElement(gu);
        gr.addElement(gv);
        gr.addElement(gx);
        gr.addElement(gy);
        gr.addElement(gw);
        gr.setView(-0.6, -0.5, 1, 1);
      },
      "Ant Hole"(gz, ha) {
        let hb = new an();
        let hc = new an();
        let hd = new an();
        hb.fill = ha;
        hc.fill = ey(hb.fill, "#000000", 0.2);
        hd.fill = ey(ha, "#000000", 0.5);
        hb.stroke = hc.stroke = hd.stroke = "none";
        hb.circle(0, 0, 0.5);
        hc.circle(0, 0, 0.375);
        hd.circle(0, 0, 0.25);
        gz.addElement(hb);
        gz.addElement(hc);
        gz.addElement(hd);
        gz.setView(-0.5, -0.5, 1, 1);
      },
      'Rock'(he, hf) {
        const hg = [];
        let hh = 0;
        for (let hi = Math.round(hf * 1.5) + 5; hh < hi; hh++) {
          let hj = hh / hi * Math.PI * 2;
          let hk = 0.85 + Math.random() * 0.15;
          hg.push({
            'x': Math.cos(hj) * hk,
            'y': Math.sin(hj) * hk
          });
        }
        let hl = new an();
        fl(hl, ew.rockGray);
        hl.strokeWidth = 0.1 / ((hf + 10) * 0.1);
        hl.pointPath(0, 0, 0.5, hg);
        he.addElement(hl);
        he.setView(-0.5, -0.5, 1, 1);
      },
      'Sponge'(hm, hn) {
        let ho = new an();
        let hp = new an();
        fl(ho, hn);
        ho.strokeWidth = 0.05;
        ho.scale(0.55, 0.55);
        hp.fill = ho.stroke;
        hp.stroke = 'none';
        hp.rotation = Math.PI / 15;
        hp.scale(0.55, 0.55);
        let hq = Math.PI / 15;
        for (let hr = 0; hr < 15; hr++) {
          let hs = hr / 15 * Math.PI * 2;
          ho.drawCurve([
            [Math.cos(hs - hq) * 0.725, Math.sin(hs - hq) * 0.725],
            [Math.cos(hs), Math.sin(hs)],
            [Math.cos(hs + hq) * 0.725, Math.sin(hs + hq) * 0.725]
          ], hr > 0);
        }
        ho.closePath();
        for (let ht = 0; ht < 5; ht++) {
          let hu = ht / 5 * Math.PI * 2;
          hp.circle(Math.cos(hu) * 0.575, Math.sin(hu) * 0.575, 0.15);
          hp.circle(Math.cos(hu) * 0.275, Math.sin(hu) * 0.275, 0.1);
          hp.circle(Math.cos(hu) * 0.075, Math.sin(hu) * 0.075, 0.05);
        }
        hm.addElement(ho);
        hm.addElement(hp);
        hm.setView(-0.5, -0.5, 1, 1);
      },
      'Hornet'(hv, hw, hx) {
        let hy = new an();
        fl(hy, hx);
        hy.stroke = 'none';
        hy.moveTo(-0.1, -0.1334);
        hy.lineTo(-0.45, 0);
        hy.lineTo(-0.1, 0.1334);
        hv.addElement(hy);
        let hz = new ag(0.025, 0, 0.3, 0.1875);
        let ia = new eg();
        fl(hz, hw);
        hz.strokeWidth = 0.0175;
        hv.addElement(hz);
        ia.addElement(hz);
        hv.addDefinition(ia);
        let ib = new an();
        ib.translate(0.025, 0);
        ib.addRect(-0.275, -1, 0.115, 1);
        ib.addRect(-0.0575, -1, 0.115, 1);
        ib.addRect(0.16000000000000003, -1, 0.115, 1);
        ib.stroke = 'none';
        ib.fill = hx;
        ib.clipPathID = ia.id;
        hv.addElement(ib);
        let ic = new ag(0.025, 0, 0.3, 0.1875);
        fl(ic, hw);
        ic.strokeWidth = 0.035;
        ic.fill = "none";
        hv.addElement(ic);
        {
          let ie = new an();
          fl(ie, hx);
          ie.fill = "none";
          ie.strokeWidth = 0.1;
          ie.strokeLinecap = ie.strokeLinejoin = 'round';
          ie.rotation = 90;
          ie.scale(0.5, 0.75);
          ie.translate(1.5, 0);
          ie.drawCurve([
            [-0.4, -0.4],
            [-0.16666666666666666, 0],
            [-0.125, 0.5]
          ]);
          ie.closePath();
          ie.scale(0.5, 0.5);
          hv.addElement(ie);
        } {
          let ig = new an();
          fl(ig, hx);
          ig.fill = 'none';
          ig.strokeWidth = 0.1;
          ig.strokeLinecap = ig.strokeLinejoin = "round";
          ig.rotation = 90;
          ig.scale(0.5, 0.75);
          ig.translate(1.5, 0);
          ig.drawCurve([
            [0.4, -0.4],
            [0.16666666666666666, 0],
            [0.125, 0.5]
          ]);
          ig.closePath();
          ig.scale(0.5, 0.5);
          hv.addElement(ig);
        }
        hv.translate(-2, 0);
        hv.scale(0.9, 0.9);
        hv.setView(-0.5, -0.5, 1, 1);
      },
      'Cactus'(ih, ii) {
        let ij = new an();
        let ik = new an();
        let il = [7, 9, 12, 16, 24, 28, 32, 32, 32, 38, 38][ii];
        fl(ij, ew.cactusGreen);
        fl(ik, ew.stingerBlack);
        ij.strokeWidth = 0.05;
        ij.strokeLinecap = ij.strokeLinejoin = 'round';
        ik.stroke = "none";
        ij.dipPolygon(il, 0, 0, 0.45, 0, 6 * (il / 24));
        for (let im = 0; im < il; im++) {
          let io = im / il * Math.PI * 2;
          ik.polygon(3, Math.cos(io) * 0.465, Math.sin(io) * 0.465, 0.05, io);
        }
        ih.addElement(ik);
        ih.addElement(ij);
        ih.setView(-0.5, -0.5, 1, 1);
      },
      'BeetleBody'(ip, iq) {
        let ir = new an();
        let is = new an();
        let it = new an();
        fl(ir, iq);
        is.fill = it.stroke = ir.stroke;
        is.stroke = it.fill = "none";
        ir.strokeWidth = it.strokeWidth = 0.075;
        ir.strokeLinecap = ir.strokeLinejoin = it.strokeLinecap = it.strokeLinejoin = "round";
        ir.drawCurve([
          [0, 0.675],
          [0.9, 0.675],
          [0.9, -0.675],
          [0, -0.675]
        ], false, 0.5);
        ir.drawCurve([
          [0, -0.675],
          [-0.9, -0.675],
          [-0.9, 0.675],
          [0, 0.675]
        ], true, 0.5);
        ir.closePath();
        for (let iu = 0; iu < 3; iu++) {
          let iv = -0.25 + iu * 0.25;
          let iw = 0.125 + (iu === 1 ? 0.0375 : 0);
          is.circle(iv, iw, 0.0667);
          is.circle(iv, -iw, 0.0667);
        }
        it.drawCurve([
          [-0.3, 0],
          [0, 0.05],
          [0.3, 0]
        ]);
        ip.addElement(ir);
        ip.addElement(is);
        ip.addElement(it);
        ip.setView(-0.5, -0.5, 1, 1);
      },
      'Pincer'(ix, iy) {
        let iz = new an();
        iz.fill = iy;
        iz.stroke = iy;
        iz.strokeWidth = 3.75;
        iz.strokeLinecap = iz.strokeLinejoin = "round";
        iz.scale(-0.02, -0.02);
        iz.translate(-0.25, -0.1);
        iz.moveTo(5, 0);
        iz.quadraticCurveTo(-17, 8, -35, -5);
        iz.quadraticCurveTo(-17, -1, 0, -10);
        iz.closePath();
        return iz;
      },
      'ScoprionBody'(ja) {
        let jb = new an();
        let jc = new an();
        let jd = new an();
        let je = new an();
        fl(jb, ew.scorpionBrown);
        jb.strokeWidth = 0.05;
        jb.strokeLinecap = jb.strokeLinejoin = "round";
        jc.fill = "none";
        jc.stroke = jb.stroke;
        jc.strokeWidth = 0.05;
        jc.strokeLinecap = jc.strokeLinejoin = "round";
        jb.addPath("m -0.2415 0.342 c -0.146 -0.067 -0.196 -0.175 -0.18 -0.394 c 0.01 -0.15 0.042 -0.224 0.124 -0.286 c 0.044 -0.032 0.074 -0.037 0.229 -0.047 c 0.165 0.01 0.191 0.015 0.297 0.066 c 0.129 0.061 0.242 0.154 0.299 0.244 c 0.035 0.057 0.035 0.064 0.009 0.115 c -0.124 0.24 -0.554 0.407 -0.778 0.302 z");
        ja.addElement(jb);
        jc.drawCurve([
          [0.55, 0.3],
          [0.6, 0],
          [0.55, -0.3]
        ], false, 0.5);
        jc.drawCurve([
          [0.2, 0.4],
          [0.275, 0],
          [0.2, -0.4]
        ], false, 0.5);
        jc.drawCurve([
          [-0.2, 0.4],
          [-0.275, 0],
          [-0.2, -0.4]
        ], false, 0.5);
        jc.drawCurve([
          [-0.55, 0.35],
          [-0.6, 0],
          [-0.55, -0.35]
        ], false, 0.5);
        ja.addElement(jc);
        let jf = jb.sterilize();
        fl(jf, ew.scorpionBrown);
        jf.strokeWidth = 0.1;
        jf.strokeLinecap = jf.strokeLinejoin = "round";
        jd.fill = "none";
        jd.stroke = jb.stroke;
        jd.strokeWidth = 0.05;
        jd.strokeLinecap = jd.strokeLinejoin = "round";
        jf.scale(0.5, 0.5);
        jf.translate(-0.5, 0);
        ja.addElement(jf);
        jd.drawCurve([
          [-0.4, 0.15],
          [-0.45, 0],
          [-0.4, -0.15]
        ], false, 0.5);
        jd.drawCurve([
          [-0.65, 0.15],
          [-0.7, 0],
          [-0.65, -0.15]
        ], false, 0.5);
        ja.addElement(jd);
        fl(je, ew.stingerBlack);
        je.strokeWidth = 0.05;
        je.strokeLinecap = je.strokeLinejoin = "round";
        je.pointPath(0, 0, 0.1, [{
          'x': 0.5,
          'y': 0
        }, {
          'x': -0.5,
          'y': -0.75
        }, {
          'x': -0.5,
          'y': 0.75
        }]);
        je.closePath();
        ja.addElement(je);
        ja.setView(-0.475, -0.5, 1.15, 1);
      },
      'Square'(jg, jh) {
        let ji = new an();
        fl(ji, jh);
        ji.strokeWidth = 0.05;
        ji.strokeLinecap = ji.strokeLinejoin = "round";
        ji.polygon(4, 0, 0, 0.5, Math.PI / 4);
        jg.addElement(ji);
        jg.setView(-0.5, -0.5, 1, 1);
      },
      'Triangle'(jj, jk) {
        let jl = new an();
        fl(jl, jk);
        jl.strokeWidth = 0.05;
        jl.strokeLinecap = jl.strokeLinejoin = "round";
        jl.polygon(3, 0, 0.1, 0.5, Math.PI / 6);
        jj.addElement(jl);
        jj.setView(-0.5, -0.5, 1, 1);
      },
      'Pentagon'(jm, jn) {
        let jo = new an();
        fl(jo, jn);
        jo.strokeWidth = 0.05;
        jo.strokeLinecap = jo.strokeLinejoin = "round";
        jo.polygon(5, 0, 0, 0.45, -Math.PI / 10);
        jm.addElement(jo);
        jm.setView(-0.5, -0.5, 1, 1);
      },
      'Shrub'(jp) {
        for (let jq = 0; jq < 3; jq++) {
          let jr = new an();
          jr.polygon(9 - jq, 0, 0, 0.475 - 0.1 * jq, Math.PI / 4 + Math.PI / 9 * jq);
          fl(jr, ew.darkGreen);
          jr.strokeWidth = 0.05;
          jp.addElement(jr);
        }
        for (let js = 0; js < 3 + Math.random() * 3; js++) {
          let jt = new an();
          jt.circle(Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25, 0.05 + Math.random() * 0.05);
          jt.fill = ey(ew.darkGreen, ew.black, Math.random() * 0.4);
          jt.stroke = "none";
          jp.addElement(jt);
        }
        jp.setView(-0.5, -0.5, 1, 1);
      },
      'CentipedeSegment'(ju, jv) {
        let jw = new an();
        let jx = new an();
        fl(jw, jv);
        jw.strokeWidth = 0.05;
        fl(jx, ew.stingerBlack);
        jx.strokeWidth = 0.05;
        jw.circle(0, 0, 0.2);
        jx.circle(0, -0.175, 0.075);
        jx.circle(0, 0.175, 0.075);
        ju.addElement(jx);
        ju.addElement(jw);
        ju.setView(-0.3, -0.3, 0.6, 0.6);
      },
      'CentipedeHead'(jy, jz) {
        fo.CentipedeSegment(jy, jz);
        let ka = new an();
        fl(ka, ew.stingerBlack);
        ka.fill = "none";
        ka.strokeWidth = 0.0334;
        ka.strokeLinecap = ka.strokeLinejoin = "round";
        ka.moveTo(0.3, -0.05);
        ka.quadraticCurveTo(0.435, -0.05, 0.465, -0.165);
        ka.moveTo(0.3, 0.05);
        ka.quadraticCurveTo(0.435, 0.05, 0.465, 0.165);
        ka.translateValues[0] = -0.2;
        jy.addElement(ka);
      }
    };
    const kb = {
      'Bee'(kc) {
        let kd = new an();
        fl(kd, ew.stingerBlack);
        kd.stroke = "none";
        kd.polygon(3, -0.3, 0, 0.15, Math.PI);
        kc.addElement(kd);
        let ke = new ag(0, 0, 0.334, 0.2505);
        let kf = new eg();
        fl(ke, ew.beeYellow);
        ke.strokeWidth = 0.05;
        kc.addElement(ke);
        kf.addElement(ke);
        kc.addDefinition(kf);
        let kg = new an();
        kg.addRect(-0.275, -1, 0.115, 1);
        kg.addRect(-0.0575, -1, 0.115, 1);
        kg.addRect(0.16000000000000003, -1, 0.115, 1);
        kg.stroke = "none";
        kg.fill = ew.stingerBlack;
        kg.clipPathID = kf.id;
        kc.addElement(kg);
        let kh = new ag(0, 0, 0.334, 0.2505);
        fl(kh, ew.beeYellow);
        kh.strokeWidth = 0.05;
        kh.fill = "none";
        kc.addElement(kh);
        let ki = new an();
        fl(ki, ew.stingerBlack);
        ki.fill = "none";
        ki.strokeWidth = 0.0334;
        ki.strokeLinecap = ki.strokeLinejoin = 'round';
        ki.moveTo(0.3, -0.05);
        ki.quadraticCurveTo(0.435, -0.05, 0.465, -0.165);
        ki.moveTo(0.3, 0.05);
        ki.quadraticCurveTo(0.435, 0.05, 0.465, 0.165);
        kc.addElement(ki);
        let kj = new an();
        kj.fill = ew.stingerBlack;
        kj.stroke = "none";
        kj.circle(0.465, -0.165, 0.05);
        kj.circle(0.465, 0.165, 0.05);
        kc.addElement(kj);
        kc.translate(-2, 0);
        kc.setView(-0.45, -0.5, 1, 1);
      },
      "Baby Ant"(kk) {
        fo["Baby Ant"](kk, ew.ants);
      },
      "Worker Ant"(kl) {
        fo["Worker Ant"](kl, ew.ants);
      },
      "Soldier Ant"(km) {
        fo["Soldier Ant"](km, ew.ants);
      },
      "Queen Ant"(kn) {
        fo["Queen Ant"](kn, ew.ants);
      },
      "Ant Hole"(ko) {
        fo["Ant Hole"](ko, ew.antHole);
      },
      "Baby Fire Ant"(kp) {
        fo["Baby Ant"](kp, ew.fireAnt);
      },
      "Worker Fire Ant"(kq) {
        fo["Worker Ant"](kq, ew.fireAnt);
      },
      "Soldier Fire Ant"(kr) {
        fo["Soldier Ant"](kr, ew.fireAnt);
      },
      "Queen Fire Ant"(ks) {
        fo["Queen Ant"](ks, ew.fireAnt);
      },
      "Fire Ant Hole"(kt) {
        fo["Ant Hole"](kt, ew.fireAnt);
      },
      "Baby Pharaoh Ant"(ku) {
        fo["Baby Ant"](ku, ew.pharoahAnt);
      },
      "Worker Pharaoh Ant"(kv) {
        fo["Worker Ant"](kv, ew.pharoahAnt);
      },
      "Soldier Pharaoh Ant"(kw) {
        fo["Soldier Ant"](kw, ew.pharoahAnt);
      },
      "Queen Pharaoh Ant"(kx) {
        fo["Queen Ant"](kx, ew.pharoahAnt);
      },
      "Pharaoh Ant Hole"(ky) {
        fo["Ant Hole"](ky, ew.pharoahAnt);
      },
      'Sponge_0'(kz) {
        fo.Sponge(kz, ew.peach);
      },
      'Sponge_1'(la) {
        fo.Sponge(la, ew.rosePink);
      },
      'Sponge_2'(lb) {
        fo.Sponge(lb, ew.sandGold);
      },
      'Hornet'(lc) {
        return fo.Hornet(lc, ew.beeYellow, ew.stingerBlack);
      },
      'Wasp'(ld) {
        return fo.Hornet(ld, ew.wasp, ey(ew.wasp, ew.stingerBlack, 0.75));
      },
      'Bubble'(le) {
        let lf = new an();
        let lg = new an();
        lf.fill = ew.white;
        lf.stroke = ey(ew.bubbleGrey, ew.black, 0.334);
        lf.fillOpacity = 0.5;
        lf.strokeWidth = 0.025;
        lf.circle(0, 0, 0.475);
        le.addElement(lf);
        lg.fill = ew.bubbleGrey;
        lg.stroke = "none";
        lg.circle(0.2, -0.2, 0.1);
        le.addElement(lg);
        le.setView(-0.5, -0.5, 1, 1);
      },
      'Jellyfish'(lh) {
        let li = new an();
        let lj = new an();
        fl(li, ew.jellyfish);
        li.fillOpacity = 0.5;
        li.strokeWidth = 0.025;
        fl(lj, ew.jellyfish);
        lj.fill = "none";
        lj.strokeWidth = 0.025;
        lj.strokeLinecap = lj.strokeLinejoin = "round";
        li.circle(0.05, 0.05, 0.275);
        lh.addElement(li);
        for (let lk = 0; lk < 8; lk++) {
          let ll = lk / 8 * Math.PI * 2;
          let lm = Math.cos(ll);
          let ln = Math.sin(ll);
          lj.moveTo(0.05 + lm * 0.26, 0.05 + ln * 0.26);
          lj.lineTo(0.05 + lm * 0.45, 0.05 + ln * 0.45);
        }
        lj.closePath();
        lh.addElement(lj);
        lh.setView(-0.5, -0.5, 1, 1);
      },
      'Beetle_Body'(lo) {
        return fo.BeetleBody(lo, ew.beetlePurple);
      },
      'Beetle_Body_Player'(lp) {
        return fo.BeetleBody(lp, ew.playerYellow);
      },
      'Pincer'(lq) {
        const lr = fo.Pincer(lq, ew.pincer);
        lq.addElement(lr);
        lq.setView(-0.5, -0.5, 1, 1);
        return lr;
      },
      'Beetle'(ls) {
        let lt = fo.Pincer(ls, ew.pincer);
        lt.scale(1.075, 1.075);
        lt.translateValues = [-1, 5];
        lt.rotation = -15;
        ls.addElement(lt);
        let lu = fo.Pincer(ls, ew.pincer);
        lu.scale(1.075, -1.075);
        lu.translateValues = [-1, 5];
        lu.rotation = -15;
        ls.addElement(lu);
        this.Beetle_Body(ls);
        ls.setView(-0.5, -0.75, 1.5, 1.5);
      },
      'Scorpion_Body'(lv) {
        return fo.ScoprionBody(lv);
      },
      'ScorpionStinger'(lw) {
        let lx = new an();
        lx.pointPath(0, 0, 0.5, [{
          'x': 0.5,
          'y': 0
        }, {
          'x': -0.5,
          'y': -0.75
        }, {
          'x': -0.5,
          'y': 0.75
        }]);
        fl(lx, ew.stingerBlack);
        lx.strokeWidth = 0.125;
        lw.addElement(lx);
        lw.setView(-0.5, -0.5, 1, 1);
      },
      'Scorpion'(ly) {
        let lz = new an();
        lz.fill = "none";
        lz.stroke = ew.stingerBlack;
        lz.strokeWidth = 0.05;
        lz.strokeLinecap = lz.strokeLinejoin = "round";
        let ma = [0.6, 0.5, 0.4, 0.5, 0.6, 0.4];
        for (let mb = 0; mb < 6; mb++) {
          let mc = -0.2 + mb % 3 / 3 * 0.667;
          let md = mb > 2 ? 0.25 : -0.25;
          let me = mb > 2 ? ma[mb] : -ma[mb];
          let mf = mb > 2 ? Math.PI * 0.2 : Math.PI * 0.2;
          lz.moveTo(mc, md);
          lz.lineTo(mc * Math.cos(mf), md + me * 0.675 * Math.sin(mf));
        }
        ly.addElement(lz);
        let mg = fo.Pincer(ly, ew.pincer);
        mg.scale(0.85, 0.85);
        mg.translateValues = [-1, 5];
        mg.rotation = -15;
        ly.addElement(mg);
        let mh = fo.Pincer(ly, ew.pincer);
        mh.scale(0.85, -0.85);
        mh.translateValues = [-1, 5];
        mh.rotation = -15;
        ly.addElement(mh);
        fo.ScoprionBody(ly);
        ly.setView(-0.475, -0.6, 1.3, 1.2);
      },
      'Shell'(mi) {
        let mj = new an();
        let mk = new an();
        let ml = new an();
        fl(mj, ew.peach);
        mj.strokeWidth = ml.strokeWidth = 0.05;
        mj.strokeLinecap = mj.strokeLinejoin = "round";
        mk.fill = ml.stroke = mj.stroke;
        mk.stroke = ml.fill = "none";
        mj.drawCurve([
          [0.3, -0.95],
          [1.5, 0],
          [0.3, 0.95]
        ]);
        mj.lineTo(-0.8, 0.3);
        mj.drawCurve([
          [-0.8, 0.3],
          [-1, 0],
          [-0.8, -0.3]
        ], true);
        mj.closePath();
        mj.scale(0.5, 0.5);
        mk.moveTo(0, 0);
        mk.lineTo(-0.95, -0.75);
        mk.lineTo(-0.95, 0.75);
        mk.closePath();
        mk.scale(0.5, 0.5);
        ml.moveTo(-0.6, -0.15);
        ml.lineTo(0.6, -0.45);
        ml.moveTo(-0.55, -0.05);
        ml.lineTo(0.6, -0.2);
        ml.moveTo(-0.55, 0.05);
        ml.lineTo(0.6, 0.2);
        ml.moveTo(-0.6, 0.15);
        ml.lineTo(0.6, 0.45);
        ml.scale(0.5, 0.5);
        mi.addElement(mk);
        mi.addElement(mj);
        mi.addElement(ml);
        mi.setView(-0.5, -0.5, 1, 1);
      },
      'Spider'(mm) {
        let mn = new an();
        let mo = new an();
        fl(mn, ew.spider);
        mn.strokeWidth = 0.05;
        mo.fill = "none";
        mo.stroke = ew.stingerBlack;
        mo.strokeWidth = 0.05;
        mo.strokeLinecap = mo.strokeLinejoin = 'round';
        mn.circle(0, 0, 0.175);
        mo.moveTo(0, -0.05);
        mo.quadraticCurveTo(0.2, -0.05, 0.3, -0.25);
        mo.moveTo(0, 0.05);
        mo.quadraticCurveTo(0.25, 0.1, 0.325, 0.2);
        mo.moveTo(0, 0);
        mo.quadraticCurveTo(0.125, -0.15, 0.05, -0.35);
        mo.moveTo(0.1, 0);
        mo.quadraticCurveTo(0.1, 0.1, 0.1, 0.3);
        mo.moveTo(0, 0);
        mo.quadraticCurveTo(-0.15, -0.15, -0.1, -0.35);
        mo.moveTo(-0.1, 0);
        mo.quadraticCurveTo(-0.125, 0.1, -0.075, 0.325);
        mo.moveTo(0, -0.05);
        mo.quadraticCurveTo(-0.2, -0.1, -0.25, -0.3);
        mo.moveTo(0, 0);
        mo.quadraticCurveTo(-0.175, 0.15, -0.3, 0.2);
        mm.addElement(mo);
        mm.addElement(mn);
        mm.setView(-0.5, -0.5, 1, 1);
      },
      'Web'(mp) {
        let mq = new an();
        mq.fill = "none";
        mq.stroke = ew.cumWhite;
        mq.strokeWidth = 0.1;
        mq.dipPolygon(9, 0, 0, 1, 0, 3);
        mq.dipPolygon(9, 0, 0, 0.8, 0, 3);
        mq.dipPolygon(9, 0, 0, 0.6, 0, 3);
        mq.dipPolygon(9, 0, 0, 0.4, 0, 3);
        if (Math.random() > 0.9999) {
          mq.dipPolygon(9, 0, 0, 0.2, 0, 3);
        }
        mq.scale(0.95, 0.95);
        mp.addElement(mq);
        mp.setView(-1, -1, 2, 2);
      },
      'Wing'(mr, mt = 1, mu = 1) {
        const mv = new ag(0, 0, mt, mu * 0.75);
        mv.fill = ew.cumWhite;
        mv.stroke = 'none';
        if (mr instanceof ei) {
          mr.addElement(mv);
          mr.setView(-1, -1, 2, 2);
          return;
        }
        return mv;
      },
      'Fly'(mw) {
        let mx = new an();
        let my = this.Wing(null, 1.25, 1.1);
        let mz = this.Wing(null, 1.25, 1.1);
        fl(mx, ew.ants);
        mx.strokeWidth = 0.1;
        my.translate(-0.73, -0.8, false);
        my.scale(0.25, 0.25);
        my.rotation = 195;
        my.opacity = 0.75;
        mz.translate(-0.75, 0.8, false);
        mz.scale(0.25, 0.25);
        mz.rotation = 165;
        mz.opacity = 0.75;
        mx.circle(0, 0, 0.4);
        mw.addElement(mx);
        mw.addElement(my);
        mw.addElement(mz);
        mw.setView(-0.5, -0.5, 1, 1);
      },
      'Square'(na) {
        return fo.Square(na, ew.diepSquare);
      },
      'Triangle'(nb) {
        return fo.Triangle(nb, ew.diepTriangle);
      },
      'Pentagon'(nc) {
        return fo.Pentagon(nc, ew.diepPentagon);
      },
      'WalkingstickBody'(nd) {
        let ne = new an();
        let nf = new an();
        fl(ne, ew.peach);
        ne.strokeWidth = 0.0667;
        ne.scale(0.95, 0.95);
        fl(nf, ew.shinyLadybugGold);
        nf.strokeWidth = 0.0667;
        ne.addPath("M -1 0 C -0.9 -0.45 0.35 -0.45 1 -0.25 A 0.05 0.05 90 0 0 1 0.25 C 0.35 0.45 -0.95 0.45 -1 0");
        nf.circle(0.7, 0, 0.25);
        nd.addElement(nf);
        nd.addElement(ne);
        nd.setView(-1, -1, 2, 2);
      },
      'WalkingstickLegs'(ng) {
        let nh = new an();
        fl(nh, ew.spider);
        nh.strokeWidth = 0.1;
        for (let ni = 0; ni < 3; ni++) {
          nh.moveTo(-0.5 + 0.5 * ni, 0);
          nh.quadraticCurveTo(-0.335 + 0.5 * ni, 0.4, -0.65 + 0.5 * ni, 0.75);
          nh.moveTo(-0.5 + 0.5 * ni, 0);
          nh.quadraticCurveTo(-0.335 + 0.5 * ni, -0.4, -0.65 + 0.5 * ni, -0.75);
        }
        ng.addElement(nh);
        ng.setView(-1, -1, 2, 2);
      },
      'Walkingstick'(nj) {
        this.WalkingstickLegs(nj);
        this.WalkingstickBody(nj);
        nj.setView(-1, -1, 2, 2);
      },
      'LadybugMobGalleryIcon'(nk) {
        return fo.Ladybug(nk, "#444444");
      },
      'TiledMotherfucker'(nl) {
        let nm = new an();
        let nn = new an();
        nm.stroke = nn.fill = "none";
        nm.fill = '#454545';
        nm.addRect(-1, -1, 2, 2);
        nn.stroke = "#000000";
        nn.opacity = 0.1;
        nn.strokeWidth = 0.0175;
        for (let no = -1; no < 1; no += 0.125) {
          nn.moveTo(no, -1);
          nn.lineTo(no, 1);
          nn.moveTo(-1, no);
          nn.lineTo(1, no);
        }
        nl.addElement(nm);
        nl.addElement(nn);
        nl.setView(-1, -1, 2, 2);
      },
      'CentipedeSegment'(np) {
        return fo.CentipedeSegment(np, ew.peaGreen);
      },
      'CentipedeHead'(nq) {
        return fo.CentipedeHead(nq, ew.peaGreen);
      },
      'EvilCentipedeSegment'(nr) {
        return fo.CentipedeSegment(nr, ew.grapePurple);
      },
      'EvilCentipedeHead'(ns) {
        return fo.CentipedeHead(ns, ew.grapePurple);
      },
      'DesertCentipedeSegment'(nt) {
        return fo.CentipedeSegment(nt, ew.sandGold);
      },
      'DesertCentipedeHead'(nu) {
        return fo.CentipedeHead(nu, ew.sandGold);
      },
      'DemonCoreBody'(nv) {
        let nw = new an();
        let nx = new an();
        fl(nw, ew.rockGray);
        nw.strokeWidth = 0.1;
        fl(nx, ey(ew.rockGray, ew.evilLadybugRed, 0.5));
        nx.strokeWidth = 0.05;
        nx.strokeLinecap = "round";
        nx.fill = "none";
        nw.circle(0, 0, 0.85);
        for (let ny = 0; ny < 5; ny++) {
          let nz = Math.random() * 360;
          let oa = Math.random() * 360;
          let ob = Math.random() * 360;
          let oc = Math.random() * 360;
          let od = Math.random() * 360;
          let oe = Math.random() * 360;
          nx.moveTo(Math.cos(nz) * 0.8, Math.sin(nz) * 0.8);
          nx.quadraticCurveTo(Math.cos(oa) * 0.8, Math.sin(oa) * 0.8, Math.cos(ob) * 0.8, Math.sin(ob) * 0.8);
          nx.quadraticCurveTo(Math.cos(oc) * 0.8, Math.sin(oc) * 0.8, Math.cos(od) * 0.8, Math.sin(od) * 0.8);
          nx.quadraticCurveTo(Math.cos(oe) * 0.8, Math.sin(oe) * 0.8, Math.cos(nz) * 0.8, Math.sin(nz) * 0.8);
        }
        nv.addElement(nw);
        nv.addElement(nx);
        nv.setView(-1, -1, 2, 2);
      },
      'DemonCoreOrb'(og) {
        let oh = new an();
        let oi = new an();
        fl(oh, ew.evilLadybugRed);
        oh.strokeWidth = 0.1;
        fl(oi, ey(ew.rockGray, ew.evilLadybugRed, 0.75));
        oi.strokeWidth = 0.05;
        oi.strokeLinecap = "round";
        oi.fill = "none";
        oh.circle(0, 0, 0.95);
        for (let oj = 0; oj < 5; oj++) {
          let ok = Math.random() * 360;
          let ol = Math.random() * 360;
          let om = Math.random() * 360;
          let oo = Math.random() * 360;
          let op = Math.random() * 360;
          let oq = Math.random() * 360;
          oi.moveTo(Math.cos(ok) * 0.8, Math.sin(ok) * 0.8);
          oi.quadraticCurveTo(Math.cos(ol) * 0.8, Math.sin(ol) * 0.8, Math.cos(om) * 0.8, Math.sin(om) * 0.8);
          oi.quadraticCurveTo(Math.cos(oo) * 0.925, Math.sin(oo) * 0.925, Math.cos(op) * 0.925, Math.sin(op) * 0.925);
          oi.quadraticCurveTo(Math.cos(oq) * 0.8, Math.sin(oq) * 0.8, Math.cos(ok) * 0.8, Math.sin(ok) * 0.8);
        }
        og.addElement(oh);
        og.addElement(oi);
        og.setView(-1, -1, 2, 2);
      },
      'DemonCore'(or) {
        kb.DemonCoreBody(or);
        for (let os = 0; os < 16; os++) {
          let ot = new an();
          fl(ot, ew.evilLadybugRed);
          ot.strokeWidth = 0.03;
          ot.circle(Math.cos(os * (Math.PI * 2 / 16)) * 0.8, Math.sin(os * (Math.PI * 2 / 16)) * 0.8, 0.175);
          or.addElement(ot);
        }
      },
      'DemonCoreMissile'(ou) {
        let ov = new an();
        fl(ov, ew.evilLadybugRed);
        ov.strokeWidth = 0.075;
        ov.strokeLinecap = ov.strokeLinejoin = "round";
        ov.fillOpacity = 0.8;
        ov.addPath("M1 0C-.73-1.33.07.13-1-.67-.6 0-.6 0-1 .67.07-.13-.73 1.33 1 0z");
        ou.addElement(ov);
        ou.setView(-1, -1, 2, 2);
      },
      'hiveMain'(ow) {
        let ox = new an();
        let oy = new an();
        let oz = new an();
        ox.stroke = oz.stroke = "none";
        ox.fill = ey("#F5D230", '#000000', 0.15);
        fl(oy, '#F5D230');
        oy.strokeWidth = 0.125;
        oz.fill = ey("#F5D230", "#000000", 0.25);
        ox.addRect(-1, -1, 2, 2);
        oz.polygon(6, -1, -1, 0.3, 0);
        oz.polygon(6, 1, -1, 0.3, 0);
        oz.polygon(6, -1, 1, 0.3, 0);
        oz.polygon(6, 1, 1, 0.3, 0);
        oy.polygon(6, 0, 0, 0.85, 0);
        ow.addElement(ox);
        ow.addElement(oz);
        ow.addElement(oy);
        ow.setView(-1, -1, 2, 2);
        console.log(ow.svg);
      }
    };
    for (let pa = 0; pa < 11; pa++) {
      kb['Rock_' + pa] = function(pb) {
        fo.Rock(pb, pa);
      };
      kb["Cactus_" + pa] = function(pc) {
        fo.Cactus(pc, pa);
      };
      kb["Ladybug_" + pa] = function(pd) {
        fo.Ladybug(pd, ew.ladybugRed);
      };
      kb["Evil Ladybug_" + pa] = function(pe) {
        fo.Ladybug(pe, ew.evilLadybugRed);
      };
      kb["Shiny Ladybug_" + pa] = function(pf) {
        fo.Ladybug(pf, ew.shinyLadybugGold);
      };
      kb['Shrub_' + pa] = function(pg) {
        fo.Shrub(pg, pa);
      };
    }
    async function ex() {
      for (let ph in kb) {
        let pj = new ei(512, 512);
        kb[ph](pj);
        postMessage({
          'key': ph,
          'value': pj.svg
        });
      }
      postMessage("DONE");
    }
  })();
}
/*
     FILE ARCHIVED ON 09:13:50 Apr 29, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:54:12 Dec 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 321.675
  exclusion.robots: 0.143
  exclusion.robots.policy: 0.127
  cdx.remote: 0.121
  esindex: 0.013
  LoadShardBlock: 261.029 (3)
  PetaboxLoader3.datanode: 278.042 (4)
  load_resource: 51.998
  PetaboxLoader3.resolve: 27.835
*/
