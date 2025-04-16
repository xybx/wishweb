const pl = "169";
const zr = "", Qn = "srgb", Mi = "srgb-linear", wl = "display-p3", Io = "display-p3-linear", Mo = "linear", wt = "srgb", Eo = "rec709", wo = "p3";
const Th = "300 es";
class Oi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e];
    if (n !== void 0) {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const t = this._listeners[e.type];
    if (t !== void 0) {
      e.target = this;
      const n = t.slice(0);
      for (let r = 0, o = n.length; r < o; r++) n[r].call(this, e);
      e.target = null;
    }
  }
}
const an = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], yo = Math.PI / 180, fl = 180 / Math.PI;
function Yr() {
  const i = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, t = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0;
  return (an[255 & i] + an[i >> 8 & 255] + an[i >> 16 & 255] + an[i >> 24 & 255] + "-" + an[255 & e] + an[e >> 8 & 255] + "-" + an[e >> 16 & 15 | 64] + an[e >> 24 & 255] + "-" + an[63 & t | 128] + an[t >> 8 & 255] + "-" + an[t >> 16 & 255] + an[t >> 24 & 255] + an[255 & n] + an[n >> 8 & 255] + an[n >> 16 & 255] + an[n >> 24 & 255]).toLowerCase();
}
function sn(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function vm(i, e) {
  return (i % e + e) % e;
}
function Rs(i, e, t) {
  return (1 - t) * i + t * e;
}
function sa(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function fn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(4294967295 * i);
    case Uint16Array:
      return Math.round(65535 * i);
    case Uint8Array:
      return Math.round(255 * i);
    case Int32Array:
      return Math.round(2147483647 * i);
    case Int16Array:
      return Math.round(32767 * i);
    case Int8Array:
      return Math.round(127 * i);
    default:
      throw new Error("Invalid component type.");
  }
}
const ym = yo;
class We {
  constructor(e = 0, t = 0) {
    We.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(sn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), o = this.x - e.x, s = this.y - e.y;
    return this.x = o * n - s * r + e.x, this.y = o * r + s * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class et {
  constructor(e, t, n, r, o, s, h, c, u) {
    et.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, o, s, h, c, u);
  }
  set(e, t, n, r, o, s, h, c, u) {
    const d = this.elements;
    return d[0] = e, d[1] = r, d[2] = h, d[3] = t, d[4] = o, d[5] = c, d[6] = n, d[7] = s, d[8] = u, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, o = this.elements, s = n[0], h = n[3], c = n[6], u = n[1], d = n[4], f = n[7], m = n[2], v = n[5], y = n[8], M = r[0], b = r[3], _ = r[6], T = r[1], w = r[4], E = r[7], U = r[2], N = r[5], O = r[8];
    return o[0] = s * M + h * T + c * U, o[3] = s * b + h * w + c * N, o[6] = s * _ + h * E + c * O, o[1] = u * M + d * T + f * U, o[4] = u * b + d * w + f * N, o[7] = u * _ + d * E + f * O, o[2] = m * M + v * T + y * U, o[5] = m * b + v * w + y * N, o[8] = m * _ + v * E + y * O, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], o = e[3], s = e[4], h = e[5], c = e[6], u = e[7], d = e[8];
    return t * s * d - t * h * u - n * o * d + n * h * c + r * o * u - r * s * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], o = e[3], s = e[4], h = e[5], c = e[6], u = e[7], d = e[8], f = d * s - h * u, m = h * c - d * o, v = u * o - s * c, y = t * f + n * m + r * v;
    if (y === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / y;
    return e[0] = f * M, e[1] = (r * u - d * n) * M, e[2] = (h * n - r * s) * M, e[3] = m * M, e[4] = (d * t - r * c) * M, e[5] = (r * o - h * t) * M, e[6] = v * M, e[7] = (n * c - u * t) * M, e[8] = (s * t - n * o) * M, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, o, s, h) {
    const c = Math.cos(o), u = Math.sin(o);
    return this.set(n * c, n * u, -n * (c * s + u * h) + s + e, -r * u, r * c, -r * (-u * s + c * h) + h + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Cs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Cs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Cs.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Cs = new et();
function Nu(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function xa(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function xm() {
  const i = xa("canvas");
  return i.style.display = "block", i;
}
const Ah = {};
function xo(i) {
  i in Ah || (Ah[i] = !0, console.warn(i));
}
const Ph = new et().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199), Rh = new et().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735), la = { [Mi]: { transfer: Mo, primaries: Eo, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (i) => i, fromReference: (i) => i }, [Qn]: { transfer: wt, primaries: Eo, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (i) => i.convertSRGBToLinear(), fromReference: (i) => i.convertLinearToSRGB() }, [Io]: { transfer: Mo, primaries: wo, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (i) => i.applyMatrix3(Rh), fromReference: (i) => i.applyMatrix3(Ph) }, [wl]: { transfer: wt, primaries: wo, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Rh), fromReference: (i) => i.applyMatrix3(Ph).convertLinearToSRGB() } }, bm = /* @__PURE__ */ new Set([Mi, Io]), dt = { enabled: !0, _workingColorSpace: Mi, get workingColorSpace() {
  return this._workingColorSpace;
}, set workingColorSpace(i) {
  if (!bm.has(i)) throw new Error(`Unsupported working color space, "${i}".`);
  this._workingColorSpace = i;
}, convert: function(i, e, t) {
  if (this.enabled === !1 || e === t || !e || !t) return i;
  const n = la[e].toReference;
  return (0, la[t].fromReference)(n(i));
}, fromWorkingColorSpace: function(i, e) {
  return this.convert(i, this._workingColorSpace, e);
}, toWorkingColorSpace: function(i, e) {
  return this.convert(i, e, this._workingColorSpace);
}, getPrimaries: function(i) {
  return la[i].primaries;
}, getTransfer: function(i) {
  return i === zr ? Mo : la[i].transfer;
}, getLuminanceCoefficients: function(i, e = this._workingColorSpace) {
  return i.fromArray(la[e].luminanceCoefficients);
} };
function Wr(i) {
  return i < 0.04045 ? 0.0773993808 * i : Math.pow(0.9478672986 * i + 0.0521327014, 2.4);
}
function Ds(i) {
  return i < 31308e-7 ? 12.92 * i : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Pr;
class Sm {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Pr === void 0 && (Pr = xa("canvas")), Pr.width = e.width, Pr.height = e.height;
      const n = Pr.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Pr;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = xa("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), o = r.data;
      for (let s = 0; s < o.length; s++) o[s] = 255 * Wr(o[s] / 255);
      return n.putImageData(r, 0, 0), t;
    }
    if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(255 * Wr(t[n] / 255)) : t[n] = Wr(t[n]);
      return { data: t, width: e.width, height: e.height };
    }
    return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Mm = 0;
class Ou {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Mm++ }), this.uuid = Yr(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, r = this.data;
    if (r !== null) {
      let o;
      if (Array.isArray(r)) {
        o = [];
        for (let s = 0, h = r.length; s < h; s++) r[s].isDataTexture ? o.push(Is(r[s].image)) : o.push(Is(r[s]));
      } else o = Is(r);
      n.url = o;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Is(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Sm.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Em = 0;
class Gt extends Oi {
  constructor(e = Gt.DEFAULT_IMAGE, t = Gt.DEFAULT_MAPPING, n = 1001, r = 1001, o = 1006, s = 1008, h = 1023, c = 1009, u = Gt.DEFAULT_ANISOTROPY, d = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Em++ }), this.uuid = Yr(), this.name = "", this.source = new Ou(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = o, this.minFilter = s, this.anisotropy = u, this.format = h, this.internalFormat = null, this.type = c, this.offset = new We(0, 0), this.repeat = new We(1, 1), this.center = new We(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new et(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case 1e3:
        e.x = e.x - Math.floor(e.x);
        break;
      case 1001:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case 1002:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case 1e3:
        e.y = e.y - Math.floor(e.y);
        break;
      case 1001:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case 1002:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Gt.DEFAULT_IMAGE = null, Gt.DEFAULT_MAPPING = 300, Gt.DEFAULT_ANISOTROPY = 1;
class Mt {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    Mt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, o = this.w, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r + s[12] * o, this.y = s[1] * t + s[5] * n + s[9] * r + s[13] * o, this.z = s[2] * t + s[6] * n + s[10] * r + s[14] * o, this.w = s[3] * t + s[7] * n + s[11] * r + s[15] * o, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, o;
    const c = e.elements, u = c[0], d = c[4], f = c[8], m = c[1], v = c[5], y = c[9], M = c[2], b = c[6], _ = c[10];
    if (Math.abs(d - m) < 0.01 && Math.abs(f - M) < 0.01 && Math.abs(y - b) < 0.01) {
      if (Math.abs(d + m) < 0.1 && Math.abs(f + M) < 0.1 && Math.abs(y + b) < 0.1 && Math.abs(u + v + _ - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const w = (u + 1) / 2, E = (v + 1) / 2, U = (_ + 1) / 2, N = (d + m) / 4, O = (f + M) / 4, te = (y + b) / 4;
      return w > E && w > U ? w < 0.01 ? (n = 0, r = 0.707106781, o = 0.707106781) : (n = Math.sqrt(w), r = N / n, o = O / n) : E > U ? E < 0.01 ? (n = 0.707106781, r = 0, o = 0.707106781) : (r = Math.sqrt(E), n = N / r, o = te / r) : U < 0.01 ? (n = 0.707106781, r = 0.707106781, o = 0) : (o = Math.sqrt(U), n = O / o, r = te / o), this.set(n, r, o, t), this;
    }
    let T = Math.sqrt((b - y) * (b - y) + (f - M) * (f - M) + (m - d) * (m - d));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (b - y) / T, this.y = (f - M) / T, this.z = (m - d) / T, this.w = Math.acos((u + v + _ - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class wm extends Oi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Mt(0, 0, e, t), this.scissorTest = !1, this.viewport = new Mt(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: 1006, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1 }, n);
    const o = new Gt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    o.flipY = !1, o.generateMipmaps = n.generateMipmaps, o.internalFormat = n.internalFormat, this.textures = [];
    const s = n.count;
    for (let h = 0; h < s; h++) this.textures[h] = o.clone(), this.textures[h].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, o = this.textures.length; r < o; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, r = e.textures.length; n < r; n++) this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Ou(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class fr extends wm {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Fu extends Gt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Tm extends Gt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class In {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, o, s, h) {
    let c = n[r + 0], u = n[r + 1], d = n[r + 2], f = n[r + 3];
    const m = o[s + 0], v = o[s + 1], y = o[s + 2], M = o[s + 3];
    if (h === 0) return e[t + 0] = c, e[t + 1] = u, e[t + 2] = d, void (e[t + 3] = f);
    if (h === 1) return e[t + 0] = m, e[t + 1] = v, e[t + 2] = y, void (e[t + 3] = M);
    if (f !== M || c !== m || u !== v || d !== y) {
      let b = 1 - h;
      const _ = c * m + u * v + d * y + f * M, T = _ >= 0 ? 1 : -1, w = 1 - _ * _;
      if (w > Number.EPSILON) {
        const U = Math.sqrt(w), N = Math.atan2(U, _ * T);
        b = Math.sin(b * N) / U, h = Math.sin(h * N) / U;
      }
      const E = h * T;
      if (c = c * b + m * E, u = u * b + v * E, d = d * b + y * E, f = f * b + M * E, b === 1 - h) {
        const U = 1 / Math.sqrt(c * c + u * u + d * d + f * f);
        c *= U, u *= U, d *= U, f *= U;
      }
    }
    e[t] = c, e[t + 1] = u, e[t + 2] = d, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, o, s) {
    const h = n[r], c = n[r + 1], u = n[r + 2], d = n[r + 3], f = o[s], m = o[s + 1], v = o[s + 2], y = o[s + 3];
    return e[t] = h * y + d * f + c * v - u * m, e[t + 1] = c * y + d * m + u * f - h * v, e[t + 2] = u * y + d * v + h * m - c * f, e[t + 3] = d * y - h * f - c * m - u * v, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, o = e._z, s = e._order, h = Math.cos, c = Math.sin, u = h(n / 2), d = h(r / 2), f = h(o / 2), m = c(n / 2), v = c(r / 2), y = c(o / 2);
    switch (s) {
      case "XYZ":
        this._x = m * d * f + u * v * y, this._y = u * v * f - m * d * y, this._z = u * d * y + m * v * f, this._w = u * d * f - m * v * y;
        break;
      case "YXZ":
        this._x = m * d * f + u * v * y, this._y = u * v * f - m * d * y, this._z = u * d * y - m * v * f, this._w = u * d * f + m * v * y;
        break;
      case "ZXY":
        this._x = m * d * f - u * v * y, this._y = u * v * f + m * d * y, this._z = u * d * y + m * v * f, this._w = u * d * f - m * v * y;
        break;
      case "ZYX":
        this._x = m * d * f - u * v * y, this._y = u * v * f + m * d * y, this._z = u * d * y - m * v * f, this._w = u * d * f + m * v * y;
        break;
      case "YZX":
        this._x = m * d * f + u * v * y, this._y = u * v * f + m * d * y, this._z = u * d * y - m * v * f, this._w = u * d * f - m * v * y;
        break;
      case "XZY":
        this._x = m * d * f - u * v * y, this._y = u * v * f - m * d * y, this._z = u * d * y + m * v * f, this._w = u * d * f + m * v * y;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], o = t[8], s = t[1], h = t[5], c = t[9], u = t[2], d = t[6], f = t[10], m = n + h + f;
    if (m > 0) {
      const v = 0.5 / Math.sqrt(m + 1);
      this._w = 0.25 / v, this._x = (d - c) * v, this._y = (o - u) * v, this._z = (s - r) * v;
    } else if (n > h && n > f) {
      const v = 2 * Math.sqrt(1 + n - h - f);
      this._w = (d - c) / v, this._x = 0.25 * v, this._y = (r + s) / v, this._z = (o + u) / v;
    } else if (h > f) {
      const v = 2 * Math.sqrt(1 + h - n - f);
      this._w = (o - u) / v, this._x = (r + s) / v, this._y = 0.25 * v, this._z = (c + d) / v;
    } else {
      const v = 2 * Math.sqrt(1 + f - n - h);
      this._w = (s - r) / v, this._x = (o + u) / v, this._y = (c + d) / v, this._z = 0.25 * v;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(sn(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, o = e._z, s = e._w, h = t._x, c = t._y, u = t._z, d = t._w;
    return this._x = n * d + s * h + r * u - o * c, this._y = r * d + s * c + o * h - n * u, this._z = o * d + s * u + n * c - r * h, this._w = s * d - n * h - r * c - o * u, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, o = this._z, s = this._w;
    let h = s * e._w + n * e._x + r * e._y + o * e._z;
    if (h < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, h = -h) : this.copy(e), h >= 1) return this._w = s, this._x = n, this._y = r, this._z = o, this;
    const c = 1 - h * h;
    if (c <= Number.EPSILON) {
      const v = 1 - t;
      return this._w = v * s + t * this._w, this._x = v * n + t * this._x, this._y = v * r + t * this._y, this._z = v * o + t * this._z, this.normalize(), this;
    }
    const u = Math.sqrt(c), d = Math.atan2(u, h), f = Math.sin((1 - t) * d) / u, m = Math.sin(t * d) / u;
    return this._w = s * f + this._w * m, this._x = n * f + this._x * m, this._y = r * f + this._y * m, this._z = o * f + this._z * m, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), o = Math.sqrt(n);
    return this.set(r * Math.sin(e), r * Math.cos(e), o * Math.sin(t), o * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class X {
  constructor(e = 0, t = 0, n = 0) {
    X.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ch.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ch.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, o = e.elements;
    return this.x = o[0] * t + o[3] * n + o[6] * r, this.y = o[1] * t + o[4] * n + o[7] * r, this.z = o[2] * t + o[5] * n + o[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, o = e.elements, s = 1 / (o[3] * t + o[7] * n + o[11] * r + o[15]);
    return this.x = (o[0] * t + o[4] * n + o[8] * r + o[12]) * s, this.y = (o[1] * t + o[5] * n + o[9] * r + o[13]) * s, this.z = (o[2] * t + o[6] * n + o[10] * r + o[14]) * s, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, o = e.x, s = e.y, h = e.z, c = e.w, u = 2 * (s * r - h * n), d = 2 * (h * t - o * r), f = 2 * (o * n - s * t);
    return this.x = t + c * u + s * f - h * d, this.y = n + c * d + h * u - o * f, this.z = r + c * f + o * d - s * u, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r, this.y = o[1] * t + o[5] * n + o[9] * r, this.z = o[2] * t + o[6] * n + o[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, o = e.z, s = t.x, h = t.y, c = t.z;
    return this.x = r * c - o * h, this.y = o * s - n * c, this.z = n * h - r * s, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ls.copy(this).projectOnVector(e), this.sub(Ls);
  }
  reflect(e) {
    return this.sub(Ls.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(sn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, 4 * t);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, 3 * t);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = 2 * Math.random() - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ls = new X(), Ch = new In();
class Sa {
  constructor(e = new X(1 / 0, 1 / 0, 1 / 0), t = new X(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Hn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Hn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Hn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const o = n.getAttribute("position");
      if (t === !0 && o !== void 0 && e.isInstancedMesh !== !0) for (let s = 0, h = o.count; s < h; s++) e.isMesh === !0 ? e.getVertexPosition(s, Hn) : Hn.fromBufferAttribute(o, s), Hn.applyMatrix4(e.matrixWorld), this.expandByPoint(Hn);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Va.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Va.copy(n.boundingBox)), Va.applyMatrix4(e.matrixWorld), this.union(Va);
    }
    const r = e.children;
    for (let o = 0, s = r.length; o < s; o++) this.expandByObject(r[o], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Hn), Hn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ca), Ha.subVectors(this.max, ca), Rr.subVectors(e.a, ca), Cr.subVectors(e.b, ca), Dr.subVectors(e.c, ca), Ai.subVectors(Cr, Rr), Pi.subVectors(Dr, Cr), ar.subVectors(Rr, Dr);
    let t = [0, -Ai.z, Ai.y, 0, -Pi.z, Pi.y, 0, -ar.z, ar.y, Ai.z, 0, -Ai.x, Pi.z, 0, -Pi.x, ar.z, 0, -ar.x, -Ai.y, Ai.x, 0, -Pi.y, Pi.x, 0, -ar.y, ar.x, 0];
    return !!Us(t, Rr, Cr, Dr, Ha) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Us(t, Rr, Cr, Dr, Ha) && (ja.crossVectors(Ai, Pi), t = [ja.x, ja.y, ja.z], Us(t, Rr, Cr, Dr, Ha)));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Hn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = 0.5 * this.getSize(Hn).length()), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() || (gi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), gi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), gi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), gi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), gi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), gi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), gi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), gi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(gi)), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const gi = [new X(), new X(), new X(), new X(), new X(), new X(), new X(), new X()], Hn = new X(), Va = new Sa(), Rr = new X(), Cr = new X(), Dr = new X(), Ai = new X(), Pi = new X(), ar = new X(), ca = new X(), Ha = new X(), ja = new X(), or = new X();
function Us(i, e, t, n, r) {
  for (let o = 0, s = i.length - 3; o <= s; o += 3) {
    or.fromArray(i, o);
    const h = r.x * Math.abs(or.x) + r.y * Math.abs(or.y) + r.z * Math.abs(or.z), c = e.dot(or), u = t.dot(or), d = n.dot(or);
    if (Math.max(-Math.max(c, u, d), Math.min(c, u, d)) > h) return !1;
  }
  return !0;
}
const Am = new Sa(), ha = new X(), Ns = new X();
class Lo {
  constructor(e = new X(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Am.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let o = 0, s = e.length; o < s; o++) r = Math.max(r, n.distanceToSquared(e[o]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    ha.subVectors(e, this.center);
    const t = ha.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = 0.5 * (n - this.radius);
      this.center.addScaledVector(ha, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ns.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ha.copy(e.center).add(Ns)), this.expandByPoint(ha.copy(e.center).sub(Ns))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _i = new X(), Os = new X(), Ga = new X(), Ri = new X(), Fs = new X(), Wa = new X(), Bs = new X();
class Uo {
  constructor(e = new X(), t = new X(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, _i)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = _i.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (_i.copy(this.origin).addScaledVector(this.direction, t), _i.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Os.copy(e).add(t).multiplyScalar(0.5), Ga.copy(t).sub(e).normalize(), Ri.copy(this.origin).sub(Os);
    const o = 0.5 * e.distanceTo(t), s = -this.direction.dot(Ga), h = Ri.dot(this.direction), c = -Ri.dot(Ga), u = Ri.lengthSq(), d = Math.abs(1 - s * s);
    let f, m, v, y;
    if (d > 0) if (f = s * c - h, m = s * h - c, y = o * d, f >= 0) if (m >= -y) if (m <= y) {
      const M = 1 / d;
      f *= M, m *= M, v = f * (f + s * m + 2 * h) + m * (s * f + m + 2 * c) + u;
    } else m = o, f = Math.max(0, -(s * m + h)), v = -f * f + m * (m + 2 * c) + u;
    else m = -o, f = Math.max(0, -(s * m + h)), v = -f * f + m * (m + 2 * c) + u;
    else m <= -y ? (f = Math.max(0, -(-s * o + h)), m = f > 0 ? -o : Math.min(Math.max(-o, -c), o), v = -f * f + m * (m + 2 * c) + u) : m <= y ? (f = 0, m = Math.min(Math.max(-o, -c), o), v = m * (m + 2 * c) + u) : (f = Math.max(0, -(s * o + h)), m = f > 0 ? o : Math.min(Math.max(-o, -c), o), v = -f * f + m * (m + 2 * c) + u);
    else m = s > 0 ? -o : o, f = Math.max(0, -(s * m + h)), v = -f * f + m * (m + 2 * c) + u;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Os).addScaledVector(Ga, m), v;
  }
  intersectSphere(e, t) {
    _i.subVectors(e.center, this.origin);
    const n = _i.dot(this.direction), r = _i.dot(_i) - n * n, o = e.radius * e.radius;
    if (r > o) return null;
    const s = Math.sqrt(o - r), h = n - s, c = n + s;
    return c < 0 ? null : h < 0 ? this.at(c, t) : this.at(h, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 ? !0 : e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, o, s, h, c;
    const u = 1 / this.direction.x, d = 1 / this.direction.y, f = 1 / this.direction.z, m = this.origin;
    return u >= 0 ? (n = (e.min.x - m.x) * u, r = (e.max.x - m.x) * u) : (n = (e.max.x - m.x) * u, r = (e.min.x - m.x) * u), d >= 0 ? (o = (e.min.y - m.y) * d, s = (e.max.y - m.y) * d) : (o = (e.max.y - m.y) * d, s = (e.min.y - m.y) * d), n > s || o > r ? null : ((o > n || isNaN(n)) && (n = o), (s < r || isNaN(r)) && (r = s), f >= 0 ? (h = (e.min.z - m.z) * f, c = (e.max.z - m.z) * f) : (h = (e.max.z - m.z) * f, c = (e.min.z - m.z) * f), n > c || h > r ? null : ((h > n || n != n) && (n = h), (c < r || r != r) && (r = c), r < 0 ? null : this.at(n >= 0 ? n : r, t)));
  }
  intersectsBox(e) {
    return this.intersectBox(e, _i) !== null;
  }
  intersectTriangle(e, t, n, r, o) {
    Fs.subVectors(t, e), Wa.subVectors(n, e), Bs.crossVectors(Fs, Wa);
    let s, h = this.direction.dot(Bs);
    if (h > 0) {
      if (r) return null;
      s = 1;
    } else {
      if (!(h < 0)) return null;
      s = -1, h = -h;
    }
    Ri.subVectors(this.origin, e);
    const c = s * this.direction.dot(Wa.crossVectors(Ri, Wa));
    if (c < 0) return null;
    const u = s * this.direction.dot(Fs.cross(Ri));
    if (u < 0 || c + u > h) return null;
    const d = -s * Ri.dot(Bs);
    return d < 0 ? null : this.at(d / h, o);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Tt {
  constructor(e, t, n, r, o, s, h, c, u, d, f, m, v, y, M, b) {
    Tt.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, o, s, h, c, u, d, f, m, v, y, M, b);
  }
  set(e, t, n, r, o, s, h, c, u, d, f, m, v, y, M, b) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = r, _[1] = o, _[5] = s, _[9] = h, _[13] = c, _[2] = u, _[6] = d, _[10] = f, _[14] = m, _[3] = v, _[7] = y, _[11] = M, _[15] = b, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Tt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / Ir.setFromMatrixColumn(e, 0).length(), o = 1 / Ir.setFromMatrixColumn(e, 1).length(), s = 1 / Ir.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * o, t[5] = n[5] * o, t[6] = n[6] * o, t[7] = 0, t[8] = n[8] * s, t[9] = n[9] * s, t[10] = n[10] * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, o = e.z, s = Math.cos(n), h = Math.sin(n), c = Math.cos(r), u = Math.sin(r), d = Math.cos(o), f = Math.sin(o);
    if (e.order === "XYZ") {
      const m = s * d, v = s * f, y = h * d, M = h * f;
      t[0] = c * d, t[4] = -c * f, t[8] = u, t[1] = v + y * u, t[5] = m - M * u, t[9] = -h * c, t[2] = M - m * u, t[6] = y + v * u, t[10] = s * c;
    } else if (e.order === "YXZ") {
      const m = c * d, v = c * f, y = u * d, M = u * f;
      t[0] = m + M * h, t[4] = y * h - v, t[8] = s * u, t[1] = s * f, t[5] = s * d, t[9] = -h, t[2] = v * h - y, t[6] = M + m * h, t[10] = s * c;
    } else if (e.order === "ZXY") {
      const m = c * d, v = c * f, y = u * d, M = u * f;
      t[0] = m - M * h, t[4] = -s * f, t[8] = y + v * h, t[1] = v + y * h, t[5] = s * d, t[9] = M - m * h, t[2] = -s * u, t[6] = h, t[10] = s * c;
    } else if (e.order === "ZYX") {
      const m = s * d, v = s * f, y = h * d, M = h * f;
      t[0] = c * d, t[4] = y * u - v, t[8] = m * u + M, t[1] = c * f, t[5] = M * u + m, t[9] = v * u - y, t[2] = -u, t[6] = h * c, t[10] = s * c;
    } else if (e.order === "YZX") {
      const m = s * c, v = s * u, y = h * c, M = h * u;
      t[0] = c * d, t[4] = M - m * f, t[8] = y * f + v, t[1] = f, t[5] = s * d, t[9] = -h * d, t[2] = -u * d, t[6] = v * f + y, t[10] = m - M * f;
    } else if (e.order === "XZY") {
      const m = s * c, v = s * u, y = h * c, M = h * u;
      t[0] = c * d, t[4] = -f, t[8] = u * d, t[1] = m * f + M, t[5] = s * d, t[9] = v * f - y, t[2] = y * f - v, t[6] = h * d, t[10] = M * f + m;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Pm, e, Rm);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Mn.subVectors(e, t), Mn.lengthSq() === 0 && (Mn.z = 1), Mn.normalize(), Ci.crossVectors(n, Mn), Ci.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Mn.x += 1e-4 : Mn.z += 1e-4, Mn.normalize(), Ci.crossVectors(n, Mn)), Ci.normalize(), Xa.crossVectors(Mn, Ci), r[0] = Ci.x, r[4] = Xa.x, r[8] = Mn.x, r[1] = Ci.y, r[5] = Xa.y, r[9] = Mn.y, r[2] = Ci.z, r[6] = Xa.z, r[10] = Mn.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, o = this.elements, s = n[0], h = n[4], c = n[8], u = n[12], d = n[1], f = n[5], m = n[9], v = n[13], y = n[2], M = n[6], b = n[10], _ = n[14], T = n[3], w = n[7], E = n[11], U = n[15], N = r[0], O = r[4], te = r[8], G = r[12], Z = r[1], re = r[5], F = r[9], V = r[13], B = r[2], ae = r[6], ce = r[10], ue = r[14], ge = r[3], Ee = r[7], xe = r[11], le = r[15];
    return o[0] = s * N + h * Z + c * B + u * ge, o[4] = s * O + h * re + c * ae + u * Ee, o[8] = s * te + h * F + c * ce + u * xe, o[12] = s * G + h * V + c * ue + u * le, o[1] = d * N + f * Z + m * B + v * ge, o[5] = d * O + f * re + m * ae + v * Ee, o[9] = d * te + f * F + m * ce + v * xe, o[13] = d * G + f * V + m * ue + v * le, o[2] = y * N + M * Z + b * B + _ * ge, o[6] = y * O + M * re + b * ae + _ * Ee, o[10] = y * te + M * F + b * ce + _ * xe, o[14] = y * G + M * V + b * ue + _ * le, o[3] = T * N + w * Z + E * B + U * ge, o[7] = T * O + w * re + E * ae + U * Ee, o[11] = T * te + w * F + E * ce + U * xe, o[15] = T * G + w * V + E * ue + U * le, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], o = e[12], s = e[1], h = e[5], c = e[9], u = e[13], d = e[2], f = e[6], m = e[10], v = e[14];
    return e[3] * (+o * c * f - r * u * f - o * h * m + n * u * m + r * h * v - n * c * v) + e[7] * (+t * c * v - t * u * m + o * s * m - r * s * v + r * u * d - o * c * d) + e[11] * (+t * u * f - t * h * v - o * s * f + n * s * v + o * h * d - n * u * d) + e[15] * (-r * h * d - t * c * f + t * h * m + r * s * f - n * s * m + n * c * d);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], o = e[3], s = e[4], h = e[5], c = e[6], u = e[7], d = e[8], f = e[9], m = e[10], v = e[11], y = e[12], M = e[13], b = e[14], _ = e[15], T = f * b * u - M * m * u + M * c * v - h * b * v - f * c * _ + h * m * _, w = y * m * u - d * b * u - y * c * v + s * b * v + d * c * _ - s * m * _, E = d * M * u - y * f * u + y * h * v - s * M * v - d * h * _ + s * f * _, U = y * f * c - d * M * c - y * h * m + s * M * m + d * h * b - s * f * b, N = t * T + n * w + r * E + o * U;
    if (N === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const O = 1 / N;
    return e[0] = T * O, e[1] = (M * m * o - f * b * o - M * r * v + n * b * v + f * r * _ - n * m * _) * O, e[2] = (h * b * o - M * c * o + M * r * u - n * b * u - h * r * _ + n * c * _) * O, e[3] = (f * c * o - h * m * o - f * r * u + n * m * u + h * r * v - n * c * v) * O, e[4] = w * O, e[5] = (d * b * o - y * m * o + y * r * v - t * b * v - d * r * _ + t * m * _) * O, e[6] = (y * c * o - s * b * o - y * r * u + t * b * u + s * r * _ - t * c * _) * O, e[7] = (s * m * o - d * c * o + d * r * u - t * m * u - s * r * v + t * c * v) * O, e[8] = E * O, e[9] = (y * f * o - d * M * o - y * n * v + t * M * v + d * n * _ - t * f * _) * O, e[10] = (s * M * o - y * h * o + y * n * u - t * M * u - s * n * _ + t * h * _) * O, e[11] = (d * h * o - s * f * o - d * n * u + t * f * u + s * n * v - t * h * v) * O, e[12] = U * O, e[13] = (d * M * r - y * f * r + y * n * m - t * M * m - d * n * b + t * f * b) * O, e[14] = (y * h * r - s * M * r - y * n * c + t * M * c + s * n * b - t * h * b) * O, e[15] = (s * f * r - d * h * r + d * n * c - t * f * c - s * n * m + t * h * m) * O, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, o = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= o, t[1] *= n, t[5] *= r, t[9] *= o, t[2] *= n, t[6] *= r, t[10] *= o, t[3] *= n, t[7] *= r, t[11] *= o, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), o = 1 - n, s = e.x, h = e.y, c = e.z, u = o * s, d = o * h;
    return this.set(u * s + n, u * h - r * c, u * c + r * h, 0, u * h + r * c, d * h + n, d * c - r * s, 0, u * c - r * h, d * c + r * s, o * c * c + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, o, s) {
    return this.set(1, n, o, 0, e, 1, s, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements, o = t._x, s = t._y, h = t._z, c = t._w, u = o + o, d = s + s, f = h + h, m = o * u, v = o * d, y = o * f, M = s * d, b = s * f, _ = h * f, T = c * u, w = c * d, E = c * f, U = n.x, N = n.y, O = n.z;
    return r[0] = (1 - (M + _)) * U, r[1] = (v + E) * U, r[2] = (y - w) * U, r[3] = 0, r[4] = (v - E) * N, r[5] = (1 - (m + _)) * N, r[6] = (b + T) * N, r[7] = 0, r[8] = (y + w) * O, r[9] = (b - T) * O, r[10] = (1 - (m + M)) * O, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let o = Ir.set(r[0], r[1], r[2]).length();
    const s = Ir.set(r[4], r[5], r[6]).length(), h = Ir.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (o = -o), e.x = r[12], e.y = r[13], e.z = r[14], jn.copy(this);
    const c = 1 / o, u = 1 / s, d = 1 / h;
    return jn.elements[0] *= c, jn.elements[1] *= c, jn.elements[2] *= c, jn.elements[4] *= u, jn.elements[5] *= u, jn.elements[6] *= u, jn.elements[8] *= d, jn.elements[9] *= d, jn.elements[10] *= d, t.setFromRotationMatrix(jn), n.x = o, n.y = s, n.z = h, this;
  }
  makePerspective(e, t, n, r, o, s, h = 2e3) {
    const c = this.elements, u = 2 * o / (t - e), d = 2 * o / (n - r), f = (t + e) / (t - e), m = (n + r) / (n - r);
    let v, y;
    if (h === 2e3) v = -(s + o) / (s - o), y = -2 * s * o / (s - o);
    else {
      if (h !== 2001) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + h);
      v = -s / (s - o), y = -s * o / (s - o);
    }
    return c[0] = u, c[4] = 0, c[8] = f, c[12] = 0, c[1] = 0, c[5] = d, c[9] = m, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = v, c[14] = y, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, o, s, h = 2e3) {
    const c = this.elements, u = 1 / (t - e), d = 1 / (n - r), f = 1 / (s - o), m = (t + e) * u, v = (n + r) * d;
    let y, M;
    if (h === 2e3) y = (s + o) * f, M = -2 * f;
    else {
      if (h !== 2001) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + h);
      y = o * f, M = -1 * f;
    }
    return c[0] = 2 * u, c[4] = 0, c[8] = 0, c[12] = -m, c[1] = 0, c[5] = 2 * d, c[9] = 0, c[13] = -v, c[2] = 0, c[6] = 0, c[10] = M, c[14] = -y, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Ir = new X(), jn = new Tt(), Pm = new X(0, 0, 0), Rm = new X(1, 1, 1), Ci = new X(), Xa = new X(), Mn = new X(), Dh = new Tt(), Ih = new In();
class ti {
  constructor(e = 0, t = 0, n = 0, r = ti.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, o = r[0], s = r[4], h = r[8], c = r[1], u = r[5], d = r[9], f = r[2], m = r[6], v = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(sn(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(-d, v), this._z = Math.atan2(-s, o)) : (this._x = Math.atan2(m, u), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-sn(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(h, v), this._z = Math.atan2(c, u)) : (this._y = Math.atan2(-f, o), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(sn(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._y = Math.atan2(-f, v), this._z = Math.atan2(-s, u)) : (this._y = 0, this._z = Math.atan2(c, o));
        break;
      case "ZYX":
        this._y = Math.asin(-sn(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(m, v), this._z = Math.atan2(c, o)) : (this._x = 0, this._z = Math.atan2(-s, u));
        break;
      case "YZX":
        this._z = Math.asin(sn(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-d, u), this._y = Math.atan2(-f, o)) : (this._x = 0, this._y = Math.atan2(h, v));
        break;
      case "XZY":
        this._z = Math.asin(-sn(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(m, u), this._y = Math.atan2(h, o)) : (this._x = Math.atan2(-d, v), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Dh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Dh, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ih.setFromEuler(this), this.setFromQuaternion(Ih, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ti.DEFAULT_ORDER = "XYZ";
class Tl {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = 1 << e >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e;
  }
  disable(e) {
    this.mask &= ~(1 << e);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return !!(this.mask & e.mask);
  }
  isEnabled(e) {
    return !!(this.mask & 1 << e);
  }
}
let Cm = 0;
const Lh = new X(), Lr = new In(), vi = new Tt(), qa = new X(), ua = new X(), Dm = new X(), Im = new In(), Uh = new X(1, 0, 0), Nh = new X(0, 1, 0), Oh = new X(0, 0, 1), Fh = { type: "added" }, Lm = { type: "removed" }, Ur = { type: "childadded", child: null }, ks = { type: "childremoved", child: null };
class tn extends Oi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Cm++ }), this.uuid = Yr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = tn.DEFAULT_UP.clone();
    const e = new X(), t = new ti(), n = new In(), r = new X(1, 1, 1);
    t._onChange(function() {
      n.setFromEuler(t, !1);
    }), n._onChange(function() {
      t.setFromQuaternion(n, void 0, !1);
    }), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: r }, modelViewMatrix: { value: new Tt() }, normalMatrix: { value: new et() } }), this.matrix = new Tt(), this.matrixWorld = new Tt(), this.matrixAutoUpdate = tn.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Tl(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Lr.setFromAxisAngle(e, t), this.quaternion.multiply(Lr), this;
  }
  rotateOnWorldAxis(e, t) {
    return Lr.setFromAxisAngle(e, t), this.quaternion.premultiply(Lr), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Uh, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Nh, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Oh, e);
  }
  translateOnAxis(e, t) {
    return Lh.copy(e).applyQuaternion(this.quaternion), this.position.add(Lh.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Uh, e);
  }
  translateY(e) {
    return this.translateOnAxis(Nh, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Oh, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(vi.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? qa.copy(e) : qa.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ua.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? vi.lookAt(ua, qa, this.up) : vi.lookAt(qa, ua, this.up), this.quaternion.setFromRotationMatrix(vi), r && (vi.extractRotation(r.matrixWorld), Lr.setFromRotationMatrix(vi), this.quaternion.premultiply(Lr.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Fh), Ur.child = e, this.dispatchEvent(Ur), Ur.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Lm), ks.child = e, this.dispatchEvent(ks), ks.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), vi.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), vi.multiply(e.parent.matrixWorld)), e.applyMatrix4(vi), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Fh), Ur.child = e, this.dispatchEvent(Ur), Ur.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let o = 0, s = r.length; o < s; o++) r[o].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ua, e, Dm), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ua, Im, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let o = 0, s = r.length; o < s; o++)
        r[o].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const r = {};
    function o(h, c) {
      return h[c.uuid] === void 0 && (h[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((h) => ({ boxInitialized: h.boxInitialized, boxMin: h.box.min.toArray(), boxMax: h.box.max.toArray(), sphereInitialized: h.sphereInitialized, sphereRadius: h.sphere.radius, sphereCenter: h.sphere.center.toArray() })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = { center: r.boundingSphere.center.toArray(), radius: r.boundingSphere.radius }), this.boundingBox !== null && (r.boundingBox = { min: r.boundingBox.min.toArray(), max: r.boundingBox.max.toArray() })), this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = o(e.geometries, this.geometry);
      const h = this.geometry.parameters;
      if (h !== void 0 && h.shapes !== void 0) {
        const c = h.shapes;
        if (Array.isArray(c)) for (let u = 0, d = c.length; u < d; u++) {
          const f = c[u];
          o(e.shapes, f);
        }
        else o(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (o(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const h = [];
      for (let c = 0, u = this.material.length; c < u; c++) h.push(o(e.materials, this.material[c]));
      r.material = h;
    } else r.material = o(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let h = 0; h < this.children.length; h++) r.children.push(this.children[h].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let h = 0; h < this.animations.length; h++) {
        const c = this.animations[h];
        r.animations.push(o(e.animations, c));
      }
    }
    if (t) {
      const h = s(e.geometries), c = s(e.materials), u = s(e.textures), d = s(e.images), f = s(e.shapes), m = s(e.skeletons), v = s(e.animations), y = s(e.nodes);
      h.length > 0 && (n.geometries = h), c.length > 0 && (n.materials = c), u.length > 0 && (n.textures = u), d.length > 0 && (n.images = d), f.length > 0 && (n.shapes = f), m.length > 0 && (n.skeletons = m), v.length > 0 && (n.animations = v), y.length > 0 && (n.nodes = y);
    }
    return n.object = r, n;
    function s(h) {
      const c = [];
      for (const u in h) {
        const d = h[u];
        delete d.metadata, c.push(d);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let n = 0; n < e.children.length; n++) {
      const r = e.children[n];
      this.add(r.clone());
    }
    return this;
  }
}
tn.DEFAULT_UP = new X(0, 1, 0), tn.DEFAULT_MATRIX_AUTO_UPDATE = !0, tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Gn = new X(), yi = new X(), zs = new X(), xi = new X(), Nr = new X(), Or = new X(), Bh = new X(), Vs = new X(), Hs = new X(), js = new X(), Gs = new Mt(), Ws = new Mt(), Xs = new Mt();
class Xn {
  constructor(e = new X(), t = new X(), n = new X()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Gn.subVectors(e, t), r.cross(Gn);
    const o = r.lengthSq();
    return o > 0 ? r.multiplyScalar(1 / Math.sqrt(o)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, o) {
    Gn.subVectors(r, t), yi.subVectors(n, t), zs.subVectors(e, t);
    const s = Gn.dot(Gn), h = Gn.dot(yi), c = Gn.dot(zs), u = yi.dot(yi), d = yi.dot(zs), f = s * u - h * h;
    if (f === 0) return o.set(0, 0, 0), null;
    const m = 1 / f, v = (u * c - h * d) * m, y = (s * d - h * c) * m;
    return o.set(1 - v - y, y, v);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, xi) !== null && xi.x >= 0 && xi.y >= 0 && xi.x + xi.y <= 1;
  }
  static getInterpolation(e, t, n, r, o, s, h, c) {
    return this.getBarycoord(e, t, n, r, xi) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(o, xi.x), c.addScaledVector(s, xi.y), c.addScaledVector(h, xi.z), c);
  }
  static getInterpolatedAttribute(e, t, n, r, o, s) {
    return Gs.setScalar(0), Ws.setScalar(0), Xs.setScalar(0), Gs.fromBufferAttribute(e, t), Ws.fromBufferAttribute(e, n), Xs.fromBufferAttribute(e, r), s.setScalar(0), s.addScaledVector(Gs, o.x), s.addScaledVector(Ws, o.y), s.addScaledVector(Xs, o.z), s;
  }
  static isFrontFacing(e, t, n, r) {
    return Gn.subVectors(n, t), yi.subVectors(e, t), Gn.cross(yi).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Gn.subVectors(this.c, this.b), yi.subVectors(this.a, this.b), 0.5 * Gn.cross(yi).length();
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Xn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Xn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, o) {
    return Xn.getInterpolation(e, this.a, this.b, this.c, t, n, r, o);
  }
  containsPoint(e) {
    return Xn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Xn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, o = this.c;
    let s, h;
    Nr.subVectors(r, n), Or.subVectors(o, n), Vs.subVectors(e, n);
    const c = Nr.dot(Vs), u = Or.dot(Vs);
    if (c <= 0 && u <= 0) return t.copy(n);
    Hs.subVectors(e, r);
    const d = Nr.dot(Hs), f = Or.dot(Hs);
    if (d >= 0 && f <= d) return t.copy(r);
    const m = c * f - d * u;
    if (m <= 0 && c >= 0 && d <= 0) return s = c / (c - d), t.copy(n).addScaledVector(Nr, s);
    js.subVectors(e, o);
    const v = Nr.dot(js), y = Or.dot(js);
    if (y >= 0 && v <= y) return t.copy(o);
    const M = v * u - c * y;
    if (M <= 0 && u >= 0 && y <= 0) return h = u / (u - y), t.copy(n).addScaledVector(Or, h);
    const b = d * y - v * f;
    if (b <= 0 && f - d >= 0 && v - y >= 0) return Bh.subVectors(o, r), h = (f - d) / (f - d + (v - y)), t.copy(r).addScaledVector(Bh, h);
    const _ = 1 / (b + M + m);
    return s = M * _, h = m * _, t.copy(n).addScaledVector(Nr, s).addScaledVector(Or, h);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Bu = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Di = { h: 0, s: 0, l: 0 }, Ya = { h: 0, s: 0, l: 0 };
function qs(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + 6 * (e - i) * t : t < 0.5 ? e : t < 2 / 3 ? i + 6 * (e - i) * (2 / 3 - t) : i;
}
class lt {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Qn) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, dt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = dt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, dt.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = dt.workingColorSpace) {
    if (e = vm(e, 1), t = sn(t, 0, 1), n = sn(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const o = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
      this.r = qs(s, o, e + 1 / 3), this.g = qs(s, o, e), this.b = qs(s, o, e - 1 / 3);
    }
    return dt.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Qn) {
    function n(o) {
      o !== void 0 && parseFloat(o) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let o;
      const s = r[1], h = r[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (o = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h)) return n(o[4]), this.setRGB(Math.min(255, parseInt(o[1], 10)) / 255, Math.min(255, parseInt(o[2], 10)) / 255, Math.min(255, parseInt(o[3], 10)) / 255, t);
          if (o = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h)) return n(o[4]), this.setRGB(Math.min(100, parseInt(o[1], 10)) / 100, Math.min(100, parseInt(o[2], 10)) / 100, Math.min(100, parseInt(o[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (o = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h)) return n(o[4]), this.setHSL(parseFloat(o[1]) / 360, parseFloat(o[2]) / 100, parseFloat(o[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const o = r[1], s = o.length;
      if (s === 3) return this.setRGB(parseInt(o.charAt(0), 16) / 15, parseInt(o.charAt(1), 16) / 15, parseInt(o.charAt(2), 16) / 15, t);
      if (s === 6) return this.setHex(parseInt(o, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Qn) {
    const n = Bu[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Wr(e.r), this.g = Wr(e.g), this.b = Wr(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ds(e.r), this.g = Ds(e.g), this.b = Ds(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Qn) {
    return dt.fromWorkingColorSpace(on.copy(this), e), 65536 * Math.round(sn(255 * on.r, 0, 255)) + 256 * Math.round(sn(255 * on.g, 0, 255)) + Math.round(sn(255 * on.b, 0, 255));
  }
  getHexString(e = Qn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = dt.workingColorSpace) {
    dt.fromWorkingColorSpace(on.copy(this), t);
    const n = on.r, r = on.g, o = on.b, s = Math.max(n, r, o), h = Math.min(n, r, o);
    let c, u;
    const d = (h + s) / 2;
    if (h === s) c = 0, u = 0;
    else {
      const f = s - h;
      switch (u = d <= 0.5 ? f / (s + h) : f / (2 - s - h), s) {
        case n:
          c = (r - o) / f + (r < o ? 6 : 0);
          break;
        case r:
          c = (o - n) / f + 2;
          break;
        case o:
          c = (n - r) / f + 4;
      }
      c /= 6;
    }
    return e.h = c, e.s = u, e.l = d, e;
  }
  getRGB(e, t = dt.workingColorSpace) {
    return dt.fromWorkingColorSpace(on.copy(this), t), e.r = on.r, e.g = on.g, e.b = on.b, e;
  }
  getStyle(e = Qn) {
    dt.fromWorkingColorSpace(on.copy(this), e);
    const t = on.r, n = on.g, r = on.b;
    return e !== Qn ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(255 * t)},${Math.round(255 * n)},${Math.round(255 * r)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Di), this.setHSL(Di.h + e, Di.s + t, Di.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Di), e.getHSL(Ya);
    const n = Rs(Di.h, Ya.h, t), r = Rs(Di.s, Ya.s, t), o = Rs(Di.l, Ya.l, t);
    return this.setHSL(n, r, o), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, o = e.elements;
    return this.r = o[0] * t + o[3] * n + o[6] * r, this.g = o[1] * t + o[4] * n + o[7] * r, this.b = o[2] * t + o[5] * n + o[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const on = new lt();
lt.NAMES = Bu;
let Um = 0;
class Kr extends Oi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Um++ }), this.uuid = Yr(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new lt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      r !== void 0 ? r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n : console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    function r(o) {
      const s = [];
      for (const h in o) {
        const c = o[h];
        delete c.metadata, s.push(c);
      }
      return s;
    }
    if (n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData), t) {
      const o = r(e.textures), s = r(e.images);
      o.length > 0 && (n.textures = o), s.length > 0 && (n.images = s);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let o = 0; o !== r; ++o) n[o] = t[o].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class ba extends Kr {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new lt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ti(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const bi = Nm();
function Nm() {
  const i = new ArrayBuffer(4), e = new Float32Array(i), t = new Uint32Array(i), n = new Uint32Array(512), r = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const u = c - 127;
    u < -27 ? (n[c] = 0, n[256 | c] = 32768, r[c] = 24, r[256 | c] = 24) : u < -14 ? (n[c] = 1024 >> -u - 14, n[256 | c] = 1024 >> -u - 14 | 32768, r[c] = -u - 1, r[256 | c] = -u - 1) : u <= 15 ? (n[c] = u + 15 << 10, n[256 | c] = u + 15 << 10 | 32768, r[c] = 13, r[256 | c] = 13) : u < 128 ? (n[c] = 31744, n[256 | c] = 64512, r[c] = 24, r[256 | c] = 24) : (n[c] = 31744, n[256 | c] = 64512, r[c] = 13, r[256 | c] = 13);
  }
  const o = new Uint32Array(2048), s = new Uint32Array(64), h = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let u = c << 13, d = 0;
    for (; !(8388608 & u); ) u <<= 1, d -= 8388608;
    u &= -8388609, d += 947912704, o[c] = u | d;
  }
  for (let c = 1024; c < 2048; ++c) o[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c) s[c] = c << 23;
  s[31] = 1199570944, s[32] = 2147483648;
  for (let c = 33; c < 63; ++c) s[c] = 2147483648 + (c - 32 << 23);
  s[63] = 3347054592;
  for (let c = 1; c < 64; ++c) c !== 32 && (h[c] = 1024);
  return { floatView: e, uint32View: t, baseTable: n, shiftTable: r, mantissaTable: o, exponentTable: s, offsetTable: h };
}
const Ka = { toHalfFloat: function(i) {
  Math.abs(i) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), i = sn(i, -65504, 65504), bi.floatView[0] = i;
  const e = bi.uint32View[0], t = e >> 23 & 511;
  return bi.baseTable[t] + ((8388607 & e) >> bi.shiftTable[t]);
}, fromHalfFloat: function(i) {
  const e = i >> 10;
  return bi.uint32View[0] = bi.mantissaTable[bi.offsetTable[e] + (1023 & i)] + bi.exponentTable[e], bi.floatView[0];
} }, Ot = new X(), Za = new We();
class Ln {
  constructor(e, t, n = !1) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, o = this.itemSize; r < o; r++) this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Za.fromBufferAttribute(this, t), Za.applyMatrix3(e), this.setXY(t, Za.x, Za.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Ot.fromBufferAttribute(this, t), Ot.applyMatrix3(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) Ot.fromBufferAttribute(this, t), Ot.applyMatrix4(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) Ot.fromBufferAttribute(this, t), Ot.applyNormalMatrix(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) Ot.fromBufferAttribute(this, t), Ot.transformDirection(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = sa(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = fn(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = sa(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = fn(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = sa(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = fn(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = sa(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = fn(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = sa(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = fn(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = fn(t, this.array), n = fn(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = fn(t, this.array), n = fn(n, this.array), r = fn(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, o) {
    return e *= this.itemSize, this.normalized && (t = fn(t, this.array), n = fn(n, this.array), r = fn(r, this.array), o = fn(o, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = o, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}
class Om extends Ln {
  constructor(e, t, n) {
    super(new Uint8Array(e), t, n);
  }
}
class ku extends Ln {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class zu extends Ln {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class jt extends Ln {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Fm = 0;
const Rn = new Tt(), Ys = new tn(), Fr = new X(), En = new Sa(), da = new Sa(), Jt = new X();
class Un extends Oi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Fm++ }), this.uuid = Yr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Nu(e) ? zu : ku)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const o = new et().getNormalMatrix(e);
      n.applyNormalMatrix(o), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Rn.makeRotationFromQuaternion(e), this.applyMatrix4(Rn), this;
  }
  rotateX(e) {
    return Rn.makeRotationX(e), this.applyMatrix4(Rn), this;
  }
  rotateY(e) {
    return Rn.makeRotationY(e), this.applyMatrix4(Rn), this;
  }
  rotateZ(e) {
    return Rn.makeRotationZ(e), this.applyMatrix4(Rn), this;
  }
  translate(e, t, n) {
    return Rn.makeTranslation(e, t, n), this.applyMatrix4(Rn), this;
  }
  scale(e, t, n) {
    return Rn.makeScale(e, t, n), this.applyMatrix4(Rn), this;
  }
  lookAt(e) {
    return Ys.lookAt(e), Ys.updateMatrix(), this.applyMatrix4(Ys.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Fr).negate(), this.translate(Fr.x, Fr.y, Fr.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n];
      t.push(o.x, o.y, o.z || 0);
    }
    return this.setAttribute("position", new jt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Sa());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new X(-1 / 0, -1 / 0, -1 / 0), new X(1 / 0, 1 / 0, 1 / 0));
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, r = t.length; n < r; n++) {
        const o = t[n];
        En.setFromBufferAttribute(o), this.morphTargetsRelative ? (Jt.addVectors(this.boundingBox.min, En.min), this.boundingBox.expandByPoint(Jt), Jt.addVectors(this.boundingBox.max, En.max), this.boundingBox.expandByPoint(Jt)) : (this.boundingBox.expandByPoint(En.min), this.boundingBox.expandByPoint(En.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Lo());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new X(), 1 / 0);
    if (e) {
      const n = this.boundingSphere.center;
      if (En.setFromBufferAttribute(e), t) for (let o = 0, s = t.length; o < s; o++) {
        const h = t[o];
        da.setFromBufferAttribute(h), this.morphTargetsRelative ? (Jt.addVectors(En.min, da.min), En.expandByPoint(Jt), Jt.addVectors(En.max, da.max), En.expandByPoint(Jt)) : (En.expandByPoint(da.min), En.expandByPoint(da.max));
      }
      En.getCenter(n);
      let r = 0;
      for (let o = 0, s = e.count; o < s; o++) Jt.fromBufferAttribute(e, o), r = Math.max(r, n.distanceToSquared(Jt));
      if (t) for (let o = 0, s = t.length; o < s; o++) {
        const h = t[o], c = this.morphTargetsRelative;
        for (let u = 0, d = h.count; u < d; u++) Jt.fromBufferAttribute(h, u), c && (Fr.fromBufferAttribute(e, u), Jt.add(Fr)), r = Math.max(r, n.distanceToSquared(Jt));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
    const n = t.position, r = t.normal, o = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ln(new Float32Array(4 * n.count), 4));
    const s = this.getAttribute("tangent"), h = [], c = [];
    for (let te = 0; te < n.count; te++) h[te] = new X(), c[te] = new X();
    const u = new X(), d = new X(), f = new X(), m = new We(), v = new We(), y = new We(), M = new X(), b = new X();
    function _(te, G, Z) {
      u.fromBufferAttribute(n, te), d.fromBufferAttribute(n, G), f.fromBufferAttribute(n, Z), m.fromBufferAttribute(o, te), v.fromBufferAttribute(o, G), y.fromBufferAttribute(o, Z), d.sub(u), f.sub(u), v.sub(m), y.sub(m);
      const re = 1 / (v.x * y.y - y.x * v.y);
      isFinite(re) && (M.copy(d).multiplyScalar(y.y).addScaledVector(f, -v.y).multiplyScalar(re), b.copy(f).multiplyScalar(v.x).addScaledVector(d, -y.x).multiplyScalar(re), h[te].add(M), h[G].add(M), h[Z].add(M), c[te].add(b), c[G].add(b), c[Z].add(b));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let te = 0, G = T.length; te < G; ++te) {
      const Z = T[te], re = Z.start;
      for (let F = re, V = re + Z.count; F < V; F += 3) _(e.getX(F + 0), e.getX(F + 1), e.getX(F + 2));
    }
    const w = new X(), E = new X(), U = new X(), N = new X();
    function O(te) {
      U.fromBufferAttribute(r, te), N.copy(U);
      const G = h[te];
      w.copy(G), w.sub(U.multiplyScalar(U.dot(G))).normalize(), E.crossVectors(N, G);
      const Z = E.dot(c[te]) < 0 ? -1 : 1;
      s.setXYZW(te, w.x, w.y, w.z, Z);
    }
    for (let te = 0, G = T.length; te < G; ++te) {
      const Z = T[te], re = Z.start;
      for (let F = re, V = re + Z.count; F < V; F += 3) O(e.getX(F + 0)), O(e.getX(F + 1)), O(e.getX(F + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Ln(new Float32Array(3 * t.count), 3), this.setAttribute("normal", n);
      else for (let m = 0, v = n.count; m < v; m++) n.setXYZ(m, 0, 0, 0);
      const r = new X(), o = new X(), s = new X(), h = new X(), c = new X(), u = new X(), d = new X(), f = new X();
      if (e) for (let m = 0, v = e.count; m < v; m += 3) {
        const y = e.getX(m + 0), M = e.getX(m + 1), b = e.getX(m + 2);
        r.fromBufferAttribute(t, y), o.fromBufferAttribute(t, M), s.fromBufferAttribute(t, b), d.subVectors(s, o), f.subVectors(r, o), d.cross(f), h.fromBufferAttribute(n, y), c.fromBufferAttribute(n, M), u.fromBufferAttribute(n, b), h.add(d), c.add(d), u.add(d), n.setXYZ(y, h.x, h.y, h.z), n.setXYZ(M, c.x, c.y, c.z), n.setXYZ(b, u.x, u.y, u.z);
      }
      else for (let m = 0, v = t.count; m < v; m += 3) r.fromBufferAttribute(t, m + 0), o.fromBufferAttribute(t, m + 1), s.fromBufferAttribute(t, m + 2), d.subVectors(s, o), f.subVectors(r, o), d.cross(f), n.setXYZ(m + 0, d.x, d.y, d.z), n.setXYZ(m + 1, d.x, d.y, d.z), n.setXYZ(m + 2, d.x, d.y, d.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) Jt.fromBufferAttribute(e, t), Jt.normalize(), e.setXYZ(t, Jt.x, Jt.y, Jt.z);
  }
  toNonIndexed() {
    function e(h, c) {
      const u = h.array, d = h.itemSize, f = h.normalized, m = new u.constructor(c.length * d);
      let v = 0, y = 0;
      for (let M = 0, b = c.length; M < b; M++) {
        v = h.isInterleavedBufferAttribute ? c[M] * h.data.stride + h.offset : c[M] * d;
        for (let _ = 0; _ < d; _++) m[y++] = u[v++];
      }
      return new Ln(m, d, f);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Un(), n = this.index.array, r = this.attributes;
    for (const h in r) {
      const c = e(r[h], n);
      t.setAttribute(h, c);
    }
    const o = this.morphAttributes;
    for (const h in o) {
      const c = [], u = o[h];
      for (let d = 0, f = u.length; d < f; d++) {
        const m = e(u[d], n);
        c.push(m);
      }
      t.morphAttributes[h] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let h = 0, c = s.length; h < c; h++) {
      const u = s[h];
      t.addGroup(u.start, u.count, u.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const u in c) c[u] !== void 0 && (e[u] = c[u]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const c in n) {
      const u = n[c];
      e.data.attributes[c] = u.toJSON(e.data);
    }
    const r = {};
    let o = !1;
    for (const c in this.morphAttributes) {
      const u = this.morphAttributes[c], d = [];
      for (let f = 0, m = u.length; f < m; f++) {
        const v = u[f];
        d.push(v.toJSON(e.data));
      }
      d.length > 0 && (r[c] = d, o = !0);
    }
    o && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const s = this.groups;
    s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
    const h = this.boundingSphere;
    return h !== null && (e.data.boundingSphere = { center: h.center.toArray(), radius: h.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const u in r) {
      const d = r[u];
      this.setAttribute(u, d.clone(t));
    }
    const o = e.morphAttributes;
    for (const u in o) {
      const d = [], f = o[u];
      for (let m = 0, v = f.length; m < v; m++) d.push(f[m].clone(t));
      this.morphAttributes[u] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let u = 0, d = s.length; u < d; u++) {
      const f = s[u];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const h = e.boundingBox;
    h !== null && (this.boundingBox = h.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const kh = new Tt(), sr = new Uo(), Ja = new Lo(), zh = new X(), $a = new X(), Qa = new X(), eo = new X(), Ks = new X(), to = new X(), Vh = new X(), no = new X();
class Tn extends tn {
  constructor(e = new Un(), t = new ba()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = n.length; r < o; r++) {
          const s = n[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, o = n.morphAttributes.position, s = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const h = this.morphTargetInfluences;
    if (o && h) {
      to.set(0, 0, 0);
      for (let c = 0, u = o.length; c < u; c++) {
        const d = h[c], f = o[c];
        d !== 0 && (Ks.fromBufferAttribute(f, e), s ? to.addScaledVector(Ks, d) : to.addScaledVector(Ks.sub(t), d));
      }
      t.add(to);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, o = this.matrixWorld;
    if (r !== void 0) {
      if (n.boundingSphere === null && n.computeBoundingSphere(), Ja.copy(n.boundingSphere), Ja.applyMatrix4(o), sr.copy(e.ray).recast(e.near), Ja.containsPoint(sr.origin) === !1 && (sr.intersectSphere(Ja, zh) === null || sr.origin.distanceToSquared(zh) > (e.far - e.near) ** 2))
        return;
      kh.copy(o).invert(), sr.copy(e.ray).applyMatrix4(kh), n.boundingBox !== null && sr.intersectsBox(n.boundingBox) === !1 || this._computeIntersections(e, t, sr);
    }
  }
  _computeIntersections(e, t, n) {
    let r;
    const o = this.geometry, s = this.material, h = o.index, c = o.attributes.position, u = o.attributes.uv, d = o.attributes.uv1, f = o.attributes.normal, m = o.groups, v = o.drawRange;
    if (h !== null) if (Array.isArray(s)) for (let y = 0, M = m.length; y < M; y++) {
      const b = m[y], _ = s[b.materialIndex];
      for (let T = Math.max(b.start, v.start), w = Math.min(h.count, Math.min(b.start + b.count, v.start + v.count)); T < w; T += 3)
        r = io(this, _, e, n, u, d, f, h.getX(T), h.getX(T + 1), h.getX(T + 2)), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = b.materialIndex, t.push(r));
    }
    else
      for (let y = Math.max(0, v.start), M = Math.min(h.count, v.start + v.count); y < M; y += 3)
        r = io(this, s, e, n, u, d, f, h.getX(y), h.getX(y + 1), h.getX(y + 2)), r && (r.faceIndex = Math.floor(y / 3), t.push(r));
    else if (c !== void 0) if (Array.isArray(s)) for (let y = 0, M = m.length; y < M; y++) {
      const b = m[y], _ = s[b.materialIndex];
      for (let T = Math.max(b.start, v.start), w = Math.min(c.count, Math.min(b.start + b.count, v.start + v.count)); T < w; T += 3)
        r = io(this, _, e, n, u, d, f, T, T + 1, T + 2), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = b.materialIndex, t.push(r));
    }
    else
      for (let y = Math.max(0, v.start), M = Math.min(c.count, v.start + v.count); y < M; y += 3)
        r = io(this, s, e, n, u, d, f, y, y + 1, y + 2), r && (r.faceIndex = Math.floor(y / 3), t.push(r));
  }
}
function io(i, e, t, n, r, o, s, h, c, u) {
  i.getVertexPosition(h, $a), i.getVertexPosition(c, Qa), i.getVertexPosition(u, eo);
  const d = function(f, m, v, y, M, b, _, T) {
    let w;
    if (w = m.side === 1 ? y.intersectTriangle(_, b, M, !0, T) : y.intersectTriangle(M, b, _, m.side === 0, T), w === null) return null;
    no.copy(T), no.applyMatrix4(f.matrixWorld);
    const E = v.ray.origin.distanceTo(no);
    return E < v.near || E > v.far ? null : { distance: E, point: no.clone(), object: f };
  }(i, e, t, n, $a, Qa, eo, Vh);
  if (d) {
    const f = new X();
    Xn.getBarycoord(Vh, $a, Qa, eo, f), r && (d.uv = Xn.getInterpolatedAttribute(r, h, c, u, f, new We())), o && (d.uv1 = Xn.getInterpolatedAttribute(o, h, c, u, f, new We())), s && (d.normal = Xn.getInterpolatedAttribute(s, h, c, u, f, new X()), d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
    const m = { a: h, b: c, c: u, normal: new X(), materialIndex: 0 };
    Xn.getNormal($a, Qa, eo, m.normal), d.face = m, d.barycoord = f;
  }
  return d;
}
class Zr extends Un {
  constructor(e = 1, t = 1, n = 1, r = 1, o = 1, s = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: r, heightSegments: o, depthSegments: s };
    const h = this;
    r = Math.floor(r), o = Math.floor(o), s = Math.floor(s);
    const c = [], u = [], d = [], f = [];
    let m = 0, v = 0;
    function y(M, b, _, T, w, E, U, N, O, te, G) {
      const Z = E / O, re = U / te, F = E / 2, V = U / 2, B = N / 2, ae = O + 1, ce = te + 1;
      let ue = 0, ge = 0;
      const Ee = new X();
      for (let xe = 0; xe < ce; xe++) {
        const le = xe * re - V;
        for (let de = 0; de < ae; de++) {
          const Se = de * Z - F;
          Ee[M] = Se * T, Ee[b] = le * w, Ee[_] = B, u.push(Ee.x, Ee.y, Ee.z), Ee[M] = 0, Ee[b] = 0, Ee[_] = N > 0 ? 1 : -1, d.push(Ee.x, Ee.y, Ee.z), f.push(de / O), f.push(1 - xe / te), ue += 1;
        }
      }
      for (let xe = 0; xe < te; xe++) for (let le = 0; le < O; le++) {
        const de = m + le + ae * xe, Se = m + le + ae * (xe + 1), Te = m + (le + 1) + ae * (xe + 1), L = m + (le + 1) + ae * xe;
        c.push(de, Se, L), c.push(Se, Te, L), ge += 6;
      }
      h.addGroup(v, ge, G), v += ge, m += ue;
    }
    y("z", "y", "x", -1, -1, n, t, e, s, o, 0), y("z", "y", "x", 1, -1, n, t, -e, s, o, 1), y("x", "z", "y", 1, 1, e, n, t, r, s, 2), y("x", "z", "y", 1, -1, e, n, -t, r, s, 3), y("x", "y", "z", 1, -1, e, t, n, r, o, 4), y("x", "y", "z", -1, -1, e, t, -n, r, o, 5), this.setIndex(c), this.setAttribute("position", new jt(u, 3)), this.setAttribute("normal", new jt(d, 3)), this.setAttribute("uv", new jt(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Zr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function qr(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function un(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = qr(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Vu(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : dt.workingColorSpace;
}
const Bm = { clone: qr, merge: un };
class qn extends Kr {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, this.fragmentShader = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = qr(e.uniforms), this.uniformsGroups = function(t) {
      const n = [];
      for (let r = 0; r < t.length; r++) n.push(t[r].clone());
      return n;
    }(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[r] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[r] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[r] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[r] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[r] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[r] = { type: "m4", value: o.toArray() } : t.uniforms[r] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Al extends tn {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Tt(), this.projectionMatrix = new Tt(), this.projectionMatrixInverse = new Tt(), this.coordinateSystem = 2e3;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ii = new X(), Hh = new We(), jh = new We();
class Cn extends Al {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = 2 * fl * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(0.5 * yo * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return 2 * fl * Math.atan(Math.tan(0.5 * yo * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Ii.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Ii.x, Ii.y).multiplyScalar(-e / Ii.z), Ii.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Ii.x, Ii.y).multiplyScalar(-e / Ii.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Hh, jh), t.subVectors(jh, Hh);
  }
  setViewOffset(e, t, n, r, o, s) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = o, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(0.5 * yo * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, o = -0.5 * r;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = s.fullWidth, u = s.fullHeight;
      o += s.offsetX * r / c, t -= s.offsetY * n / u, r *= s.width / c, n *= s.height / u;
    }
    const h = this.filmOffset;
    h !== 0 && (o += e * h / this.getFilmWidth()), this.projectionMatrix.makePerspective(o, o + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Br = -90;
class km extends tn {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Cn(Br, 1, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Cn(Br, 1, e, t);
    o.layers = this.layers, this.add(o);
    const s = new Cn(Br, 1, e, t);
    s.layers = this.layers, this.add(s);
    const h = new Cn(Br, 1, e, t);
    h.layers = this.layers, this.add(h);
    const c = new Cn(Br, 1, e, t);
    c.layers = this.layers, this.add(c);
    const u = new Cn(Br, 1, e, t);
    u.layers = this.layers, this.add(u);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, o, s, h, c] = t;
    for (const u of t) this.remove(u);
    if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), o.up.set(0, 0, -1), o.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), h.up.set(0, 1, 0), h.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else {
      if (e !== 2001) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), o.up.set(0, 0, 1), o.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), h.up.set(0, -1, 0), h.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    }
    for (const u of t) this.add(u), u.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [o, s, h, c, u, d] = this.children, f = e.getRenderTarget(), m = e.getActiveCubeFace(), v = e.getActiveMipmapLevel(), y = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, o), e.setRenderTarget(n, 1, r), e.render(t, s), e.setRenderTarget(n, 2, r), e.render(t, h), e.setRenderTarget(n, 3, r), e.render(t, c), e.setRenderTarget(n, 4, r), e.render(t, u), n.texture.generateMipmaps = M, e.setRenderTarget(n, 5, r), e.render(t, d), e.setRenderTarget(f, m, v), e.xr.enabled = y, n.texture.needsPMREMUpdate = !0;
  }
}
class Hu extends Gt {
  constructor(e, t, n, r, o, s, h, c, u, d) {
    super(e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, n, r, o, s, h, c, u, d), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class zm extends fr {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Hu(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 && t.generateMipmaps, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, r = new Zr(5, 5, 5), o = new qn({ name: "CubemapFromEquirect", uniforms: qr(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: 1, blending: 0 });
    o.uniforms.tEquirect.value = t;
    const s = new Tn(r, o), h = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new km(1, 10, this).update(e, s), t.minFilter = h, s.geometry.dispose(), s.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const o = e.getRenderTarget();
    for (let s = 0; s < 6; s++) e.setRenderTarget(this, s), e.clear(t, n, r);
    e.setRenderTarget(o);
  }
}
const Zs = new X(), Vm = new X(), Hm = new et();
class Ni {
  constructor(e = new X(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Zs.subVectors(n, t).cross(Vm.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Zs), r = this.normal.dot(n);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const o = -(e.start.dot(this.normal) + this.constant) / r;
    return o < 0 || o > 1 ? null : t.copy(e.start).addScaledVector(n, o);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Hm.getNormalMatrix(e), r = this.coplanarPoint(Zs).applyMatrix4(e), o = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(o), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const lr = new Lo(), ro = new X();
class ju {
  constructor(e = new Ni(), t = new Ni(), n = new Ni(), r = new Ni(), o = new Ni(), s = new Ni()) {
    this.planes = [e, t, n, r, o, s];
  }
  set(e, t, n, r, o, s) {
    const h = this.planes;
    return h[0].copy(e), h[1].copy(t), h[2].copy(n), h[3].copy(r), h[4].copy(o), h[5].copy(s), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    const n = this.planes, r = e.elements, o = r[0], s = r[1], h = r[2], c = r[3], u = r[4], d = r[5], f = r[6], m = r[7], v = r[8], y = r[9], M = r[10], b = r[11], _ = r[12], T = r[13], w = r[14], E = r[15];
    if (n[0].setComponents(c - o, m - u, b - v, E - _).normalize(), n[1].setComponents(c + o, m + u, b + v, E + _).normalize(), n[2].setComponents(c + s, m + d, b + y, E + T).normalize(), n[3].setComponents(c - s, m - d, b - y, E - T).normalize(), n[4].setComponents(c - h, m - f, b - M, E - w).normalize(), t === 2e3) n[5].setComponents(c + h, m + f, b + M, E + w).normalize();
    else {
      if (t !== 2001) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
      n[5].setComponents(h, f, M, w).normalize();
    }
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(lr);
  }
  intersectsSprite(e) {
    return lr.center.set(0, 0, 0), lr.radius = 0.7071067811865476, lr.applyMatrix4(e.matrixWorld), this.intersectsSphere(lr);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let o = 0; o < 6; o++)
      if (t[o].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (ro.x = r.normal.x > 0 ? e.max.x : e.min.x, ro.y = r.normal.y > 0 ? e.max.y : e.min.y, ro.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(ro) < 0) return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Gu() {
  let i = null, e = !1, t = null, n = null;
  function r(o, s) {
    t(o, s), n = i.requestAnimationFrame(r);
  }
  return { start: function() {
    e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
  }, stop: function() {
    i.cancelAnimationFrame(n), e = !1;
  }, setAnimationLoop: function(o) {
    t = o;
  }, setContext: function(o) {
    i = o;
  } };
}
function jm(i) {
  const e = /* @__PURE__ */ new WeakMap();
  return { get: function(t) {
    return t.isInterleavedBufferAttribute && (t = t.data), e.get(t);
  }, remove: function(t) {
    t.isInterleavedBufferAttribute && (t = t.data);
    const n = e.get(t);
    n && (i.deleteBuffer(n.buffer), e.delete(t));
  }, update: function(t, n) {
    if (t.isInterleavedBufferAttribute && (t = t.data), t.isGLBufferAttribute) {
      const o = e.get(t);
      return void ((!o || o.version < t.version) && e.set(t, { buffer: t.buffer, type: t.type, bytesPerElement: t.elementSize, version: t.version }));
    }
    const r = e.get(t);
    if (r === void 0) e.set(t, function(o, s) {
      const h = o.array, c = o.usage, u = h.byteLength, d = i.createBuffer();
      let f;
      if (i.bindBuffer(s, d), i.bufferData(s, h, c), o.onUploadCallback(), h instanceof Float32Array) f = i.FLOAT;
      else if (h instanceof Uint16Array) f = o.isFloat16BufferAttribute ? i.HALF_FLOAT : i.UNSIGNED_SHORT;
      else if (h instanceof Int16Array) f = i.SHORT;
      else if (h instanceof Uint32Array) f = i.UNSIGNED_INT;
      else if (h instanceof Int32Array) f = i.INT;
      else if (h instanceof Int8Array) f = i.BYTE;
      else if (h instanceof Uint8Array) f = i.UNSIGNED_BYTE;
      else {
        if (!(h instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
        f = i.UNSIGNED_BYTE;
      }
      return { buffer: d, type: f, bytesPerElement: h.BYTES_PER_ELEMENT, version: o.version, size: u };
    }(t, n));
    else if (r.version < t.version) {
      if (r.size !== t.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      (function(o, s, h) {
        const c = s.array, u = s.updateRanges;
        if (i.bindBuffer(h, o), u.length === 0) i.bufferSubData(h, 0, c);
        else {
          u.sort((f, m) => f.start - m.start);
          let d = 0;
          for (let f = 1; f < u.length; f++) {
            const m = u[d], v = u[f];
            v.start <= m.start + m.count + 1 ? m.count = Math.max(m.count, v.start + v.count - m.start) : (++d, u[d] = v);
          }
          u.length = d + 1;
          for (let f = 0, m = u.length; f < m; f++) {
            const v = u[f];
            i.bufferSubData(h, v.start * c.BYTES_PER_ELEMENT, c, v.start, v.count);
          }
          s.clearUpdateRanges();
        }
        s.onUploadCallback();
      })(r.buffer, t, n), r.version = t.version;
    }
  } };
}
class Ma extends Un {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r };
    const o = e / 2, s = t / 2, h = Math.floor(n), c = Math.floor(r), u = h + 1, d = c + 1, f = e / h, m = t / c, v = [], y = [], M = [], b = [];
    for (let _ = 0; _ < d; _++) {
      const T = _ * m - s;
      for (let w = 0; w < u; w++) {
        const E = w * f - o;
        y.push(E, -T, 0), M.push(0, 0, 1), b.push(w / h), b.push(1 - _ / c);
      }
    }
    for (let _ = 0; _ < c; _++) for (let T = 0; T < h; T++) {
      const w = T + u * _, E = T + u * (_ + 1), U = T + 1 + u * (_ + 1), N = T + 1 + u * _;
      v.push(w, E, N), v.push(E, U, N);
    }
    this.setIndex(v), this.setAttribute("position", new jt(y, 3)), this.setAttribute("normal", new jt(M, 3)), this.setAttribute("uv", new jt(b, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ma(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
const rt = { alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, color_fragment: `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, color_pars_fragment: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, color_pars_vertex: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, color_vertex: `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, lights_lambert_pars_fragment: `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, lights_physical_pars_fragment: `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, lights_fragment_begin: `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, logdepthbuf_fragment: `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, logdepthbuf_pars_fragment: `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, logdepthbuf_pars_vertex: `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, logdepthbuf_vertex: `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, transmission_fragment: `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, distanceRGBA_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, distanceRGBA_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}` }, we = { common: { diffuse: { value: new lt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new et() }, alphaMap: { value: null }, alphaMapTransform: { value: new et() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new et() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new et() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new et() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new et() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new et() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new et() }, normalScale: { value: new We(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new et() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new et() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new et() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new et() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new lt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new lt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new et() }, alphaTest: { value: 0 }, uvTransform: { value: new et() } }, sprite: { diffuse: { value: new lt(16777215) }, opacity: { value: 1 }, center: { value: new We(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new et() }, alphaMap: { value: null }, alphaMapTransform: { value: new et() }, alphaTest: { value: 0 } } }, wn = { basic: { uniforms: un([we.common, we.specularmap, we.envmap, we.aomap, we.lightmap, we.fog]), vertexShader: rt.meshbasic_vert, fragmentShader: rt.meshbasic_frag }, lambert: { uniforms: un([we.common, we.specularmap, we.envmap, we.aomap, we.lightmap, we.emissivemap, we.bumpmap, we.normalmap, we.displacementmap, we.fog, we.lights, { emissive: { value: new lt(0) } }]), vertexShader: rt.meshlambert_vert, fragmentShader: rt.meshlambert_frag }, phong: { uniforms: un([we.common, we.specularmap, we.envmap, we.aomap, we.lightmap, we.emissivemap, we.bumpmap, we.normalmap, we.displacementmap, we.fog, we.lights, { emissive: { value: new lt(0) }, specular: { value: new lt(1118481) }, shininess: { value: 30 } }]), vertexShader: rt.meshphong_vert, fragmentShader: rt.meshphong_frag }, standard: { uniforms: un([we.common, we.envmap, we.aomap, we.lightmap, we.emissivemap, we.bumpmap, we.normalmap, we.displacementmap, we.roughnessmap, we.metalnessmap, we.fog, we.lights, { emissive: { value: new lt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: rt.meshphysical_vert, fragmentShader: rt.meshphysical_frag }, toon: { uniforms: un([we.common, we.aomap, we.lightmap, we.emissivemap, we.bumpmap, we.normalmap, we.displacementmap, we.gradientmap, we.fog, we.lights, { emissive: { value: new lt(0) } }]), vertexShader: rt.meshtoon_vert, fragmentShader: rt.meshtoon_frag }, matcap: { uniforms: un([we.common, we.bumpmap, we.normalmap, we.displacementmap, we.fog, { matcap: { value: null } }]), vertexShader: rt.meshmatcap_vert, fragmentShader: rt.meshmatcap_frag }, points: { uniforms: un([we.points, we.fog]), vertexShader: rt.points_vert, fragmentShader: rt.points_frag }, dashed: { uniforms: un([we.common, we.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: rt.linedashed_vert, fragmentShader: rt.linedashed_frag }, depth: { uniforms: un([we.common, we.displacementmap]), vertexShader: rt.depth_vert, fragmentShader: rt.depth_frag }, normal: { uniforms: un([we.common, we.bumpmap, we.normalmap, we.displacementmap, { opacity: { value: 1 } }]), vertexShader: rt.meshnormal_vert, fragmentShader: rt.meshnormal_frag }, sprite: { uniforms: un([we.sprite, we.fog]), vertexShader: rt.sprite_vert, fragmentShader: rt.sprite_frag }, background: { uniforms: { uvTransform: { value: new et() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: rt.background_vert, fragmentShader: rt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new et() } }, vertexShader: rt.backgroundCube_vert, fragmentShader: rt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: rt.cube_vert, fragmentShader: rt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: rt.equirect_vert, fragmentShader: rt.equirect_frag }, distanceRGBA: { uniforms: un([we.common, we.displacementmap, { referencePosition: { value: new X() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: rt.distanceRGBA_vert, fragmentShader: rt.distanceRGBA_frag }, shadow: { uniforms: un([we.lights, we.fog, { color: { value: new lt(0) }, opacity: { value: 1 } }]), vertexShader: rt.shadow_vert, fragmentShader: rt.shadow_frag } };
wn.physical = { uniforms: un([wn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new et() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new et() }, clearcoatNormalScale: { value: new We(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new et() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new et() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new et() }, sheen: { value: 0 }, sheenColor: { value: new lt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new et() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new et() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new et() }, transmissionSamplerSize: { value: new We() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new et() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new lt(0) }, specularColor: { value: new lt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new et() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new et() }, anisotropyVector: { value: new We() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new et() } }]), vertexShader: rt.meshphysical_vert, fragmentShader: rt.meshphysical_frag };
const ao = { r: 0, b: 0, g: 0 }, cr = new ti(), Gm = new Tt();
function Wm(i, e, t, n, r, o, s) {
  const h = new lt(0);
  let c, u, d = o === !0 ? 0 : 1, f = null, m = 0, v = null;
  function y(b) {
    let _ = b.isScene === !0 ? b.background : null;
    return _ && _.isTexture && (_ = (b.backgroundBlurriness > 0 ? t : e).get(_)), _;
  }
  function M(b, _) {
    b.getRGB(ao, Vu(i)), n.buffers.color.setClear(ao.r, ao.g, ao.b, _, s);
  }
  return { getClearColor: function() {
    return h;
  }, setClearColor: function(b, _ = 1) {
    h.set(b), d = _, M(h, d);
  }, getClearAlpha: function() {
    return d;
  }, setClearAlpha: function(b) {
    d = b, M(h, d);
  }, render: function(b) {
    let _ = !1;
    const T = y(b);
    T === null ? M(h, d) : T && T.isColor && (M(T, 1), _ = !0);
    const w = i.xr.getEnvironmentBlendMode();
    w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, s) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || _) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }, addToRenderList: function(b, _) {
    const T = y(_);
    T && (T.isCubeTexture || T.mapping === 306) ? (u === void 0 && (u = new Tn(new Zr(1, 1, 1), new qn({ name: "BackgroundCubeMaterial", uniforms: qr(wn.backgroundCube.uniforms), vertexShader: wn.backgroundCube.vertexShader, fragmentShader: wn.backgroundCube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1 })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(w, E, U) {
      this.matrixWorld.copyPosition(U.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), r.update(u)), cr.copy(_.backgroundRotation), cr.x *= -1, cr.y *= -1, cr.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (cr.y *= -1, cr.z *= -1), u.material.uniforms.envMap.value = T, u.material.uniforms.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(cr)), u.material.toneMapped = dt.getTransfer(T.colorSpace) !== wt, f === T && m === T.version && v === i.toneMapping || (u.material.needsUpdate = !0, f = T, m = T.version, v = i.toneMapping), u.layers.enableAll(), b.unshift(u, u.geometry, u.material, 0, 0, null)) : T && T.isTexture && (c === void 0 && (c = new Tn(new Ma(2, 2), new qn({ name: "BackgroundMaterial", uniforms: qr(wn.background.uniforms), vertexShader: wn.background.vertexShader, fragmentShader: wn.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), r.update(c)), c.material.uniforms.t2D.value = T, c.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, c.material.toneMapped = dt.getTransfer(T.colorSpace) !== wt, T.matrixAutoUpdate === !0 && T.updateMatrix(), c.material.uniforms.uvTransform.value.copy(T.matrix), f === T && m === T.version && v === i.toneMapping || (c.material.needsUpdate = !0, f = T, m = T.version, v = i.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  } };
}
function Xm(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let o = r, s = !1;
  function h(_) {
    return i.bindVertexArray(_);
  }
  function c(_) {
    return i.deleteVertexArray(_);
  }
  function u(_) {
    const T = [], w = [], E = [];
    for (let U = 0; U < t; U++) T[U] = 0, w[U] = 0, E[U] = 0;
    return { geometry: null, program: null, wireframe: !1, newAttributes: T, enabledAttributes: w, attributeDivisors: E, object: _, attributes: {}, index: null };
  }
  function d() {
    const _ = o.newAttributes;
    for (let T = 0, w = _.length; T < w; T++) _[T] = 0;
  }
  function f(_) {
    m(_, 0);
  }
  function m(_, T) {
    const w = o.newAttributes, E = o.enabledAttributes, U = o.attributeDivisors;
    w[_] = 1, E[_] === 0 && (i.enableVertexAttribArray(_), E[_] = 1), U[_] !== T && (i.vertexAttribDivisor(_, T), U[_] = T);
  }
  function v() {
    const _ = o.newAttributes, T = o.enabledAttributes;
    for (let w = 0, E = T.length; w < E; w++) T[w] !== _[w] && (i.disableVertexAttribArray(w), T[w] = 0);
  }
  function y(_, T, w, E, U, N, O) {
    O === !0 ? i.vertexAttribIPointer(_, T, w, U, N) : i.vertexAttribPointer(_, T, w, E, U, N);
  }
  function M() {
    b(), s = !0, o !== r && (o = r, h(o.object));
  }
  function b() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return { setup: function(_, T, w, E, U) {
    let N = !1;
    const O = function(te, G, Z) {
      const re = Z.wireframe === !0;
      let F = n[te.id];
      F === void 0 && (F = {}, n[te.id] = F);
      let V = F[G.id];
      V === void 0 && (V = {}, F[G.id] = V);
      let B = V[re];
      return B === void 0 && (B = u(i.createVertexArray()), V[re] = B), B;
    }(E, w, T);
    o !== O && (o = O, h(o.object)), N = function(te, G, Z, re) {
      const F = o.attributes, V = G.attributes;
      let B = 0;
      const ae = Z.getAttributes();
      for (const ce in ae)
        if (ae[ce].location >= 0) {
          const ue = F[ce];
          let ge = V[ce];
          if (ge === void 0 && (ce === "instanceMatrix" && te.instanceMatrix && (ge = te.instanceMatrix), ce === "instanceColor" && te.instanceColor && (ge = te.instanceColor)), ue === void 0 || ue.attribute !== ge || ge && ue.data !== ge.data) return !0;
          B++;
        }
      return o.attributesNum !== B || o.index !== re;
    }(_, E, w, U), N && function(te, G, Z, re) {
      const F = {}, V = G.attributes;
      let B = 0;
      const ae = Z.getAttributes();
      for (const ce in ae)
        if (ae[ce].location >= 0) {
          let ue = V[ce];
          ue === void 0 && (ce === "instanceMatrix" && te.instanceMatrix && (ue = te.instanceMatrix), ce === "instanceColor" && te.instanceColor && (ue = te.instanceColor));
          const ge = {};
          ge.attribute = ue, ue && ue.data && (ge.data = ue.data), F[ce] = ge, B++;
        }
      o.attributes = F, o.attributesNum = B, o.index = re;
    }(_, E, w, U), U !== null && e.update(U, i.ELEMENT_ARRAY_BUFFER), (N || s) && (s = !1, function(te, G, Z, re) {
      d();
      const F = re.attributes, V = Z.getAttributes(), B = G.defaultAttributeValues;
      for (const ae in V) {
        const ce = V[ae];
        if (ce.location >= 0) {
          let ue = F[ae];
          if (ue === void 0 && (ae === "instanceMatrix" && te.instanceMatrix && (ue = te.instanceMatrix), ae === "instanceColor" && te.instanceColor && (ue = te.instanceColor)), ue !== void 0) {
            const ge = ue.normalized, Ee = ue.itemSize, xe = e.get(ue);
            if (xe === void 0) continue;
            const le = xe.buffer, de = xe.type, Se = xe.bytesPerElement, Te = de === i.INT || de === i.UNSIGNED_INT || ue.gpuType === 1013;
            if (ue.isInterleavedBufferAttribute) {
              const L = ue.data, A = L.stride, j = ue.offset;
              if (L.isInstancedInterleavedBuffer) {
                for (let Q = 0; Q < ce.locationSize; Q++) m(ce.location + Q, L.meshPerAttribute);
                te.isInstancedMesh !== !0 && re._maxInstanceCount === void 0 && (re._maxInstanceCount = L.meshPerAttribute * L.count);
              } else for (let Q = 0; Q < ce.locationSize; Q++) f(ce.location + Q);
              i.bindBuffer(i.ARRAY_BUFFER, le);
              for (let Q = 0; Q < ce.locationSize; Q++) y(ce.location + Q, Ee / ce.locationSize, de, ge, A * Se, (j + Ee / ce.locationSize * Q) * Se, Te);
            } else {
              if (ue.isInstancedBufferAttribute) {
                for (let L = 0; L < ce.locationSize; L++) m(ce.location + L, ue.meshPerAttribute);
                te.isInstancedMesh !== !0 && re._maxInstanceCount === void 0 && (re._maxInstanceCount = ue.meshPerAttribute * ue.count);
              } else for (let L = 0; L < ce.locationSize; L++) f(ce.location + L);
              i.bindBuffer(i.ARRAY_BUFFER, le);
              for (let L = 0; L < ce.locationSize; L++) y(ce.location + L, Ee / ce.locationSize, de, ge, Ee * Se, Ee / ce.locationSize * L * Se, Te);
            }
          } else if (B !== void 0) {
            const ge = B[ae];
            if (ge !== void 0) switch (ge.length) {
              case 2:
                i.vertexAttrib2fv(ce.location, ge);
                break;
              case 3:
                i.vertexAttrib3fv(ce.location, ge);
                break;
              case 4:
                i.vertexAttrib4fv(ce.location, ge);
                break;
              default:
                i.vertexAttrib1fv(ce.location, ge);
            }
          }
        }
      }
      v();
    }(_, T, w, E), U !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(U).buffer));
  }, reset: M, resetDefaultState: b, dispose: function() {
    M();
    for (const _ in n) {
      const T = n[_];
      for (const w in T) {
        const E = T[w];
        for (const U in E) c(E[U].object), delete E[U];
        delete T[w];
      }
      delete n[_];
    }
  }, releaseStatesOfGeometry: function(_) {
    if (n[_.id] === void 0) return;
    const T = n[_.id];
    for (const w in T) {
      const E = T[w];
      for (const U in E) c(E[U].object), delete E[U];
      delete T[w];
    }
    delete n[_.id];
  }, releaseStatesOfProgram: function(_) {
    for (const T in n) {
      const w = n[T];
      if (w[_.id] === void 0) continue;
      const E = w[_.id];
      for (const U in E) c(E[U].object), delete E[U];
      delete w[_.id];
    }
  }, initAttributes: d, enableAttribute: f, disableUnusedAttributes: v };
}
function qm(i, e, t) {
  let n;
  function r(o, s, h) {
    h !== 0 && (i.drawArraysInstanced(n, o, s, h), t.update(s, n, h));
  }
  this.setMode = function(o) {
    n = o;
  }, this.render = function(o, s) {
    i.drawArrays(n, o, s), t.update(s, n, 1);
  }, this.renderInstances = r, this.renderMultiDraw = function(o, s, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, o, 0, s, 0, h);
    let c = 0;
    for (let u = 0; u < h; u++) c += s[u];
    t.update(c, n, 1);
  }, this.renderMultiDrawInstances = function(o, s, h, c) {
    if (h === 0) return;
    const u = e.get("WEBGL_multi_draw");
    if (u === null) for (let d = 0; d < o.length; d++) r(o[d], s[d], c[d]);
    else {
      u.multiDrawArraysInstancedWEBGL(n, o, 0, s, 0, c, 0, h);
      let d = 0;
      for (let f = 0; f < h; f++) d += s[f];
      for (let f = 0; f < c.length; f++) t.update(d, n, c[f]);
    }
  };
}
function Ym(i, e, t, n) {
  let r;
  function o(m) {
    if (m === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      m = "mediump";
    }
    return m === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let s = t.precision !== void 0 ? t.precision : "highp";
  const h = o(s);
  h !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", h, "instead."), s = h);
  const c = t.logarithmicDepthBuffer === !0, u = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (u === !0) {
    const m = e.get("EXT_clip_control");
    m.clipControlEXT(m.LOWER_LEFT_EXT, m.ZERO_TO_ONE_EXT);
  }
  const d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), f = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  return { isWebGL2: !0, getMaxAnisotropy: function() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const m = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }, getMaxPrecision: o, textureFormatReadable: function(m) {
    return m === 1023 || n.convert(m) === i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT);
  }, textureTypeReadable: function(m) {
    const v = m === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(m !== 1009 && n.convert(m) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && m !== 1015 && !v);
  }, precision: s, logarithmicDepthBuffer: c, reverseDepthBuffer: u, maxTextures: d, maxVertexTextures: f, maxTextureSize: i.getParameter(i.MAX_TEXTURE_SIZE), maxCubemapSize: i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), maxAttributes: i.getParameter(i.MAX_VERTEX_ATTRIBS), maxVertexUniforms: i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), maxVaryings: i.getParameter(i.MAX_VARYING_VECTORS), maxFragmentUniforms: i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), vertexTextures: f > 0, maxSamples: i.getParameter(i.MAX_SAMPLES) };
}
function Km(i) {
  const e = this;
  let t = null, n = 0, r = !1, o = !1;
  const s = new Ni(), h = new et(), c = { value: null, needsUpdate: !1 };
  function u(d, f, m, v) {
    const y = d !== null ? d.length : 0;
    let M = null;
    if (y !== 0) {
      if (M = c.value, v !== !0 || M === null) {
        const b = m + 4 * y, _ = f.matrixWorldInverse;
        h.getNormalMatrix(_), (M === null || M.length < b) && (M = new Float32Array(b));
        for (let T = 0, w = m; T !== y; ++T, w += 4) s.copy(d[T]).applyMatrix4(_, h), s.normal.toArray(M, w), M[w + 3] = s.constant;
      }
      c.value = M, c.needsUpdate = !0;
    }
    return e.numPlanes = y, e.numIntersection = 0, M;
  }
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || n !== 0 || r;
    return r = f, n = d.length, m;
  }, this.beginShadows = function() {
    o = !0, u(null);
  }, this.endShadows = function() {
    o = !1;
  }, this.setGlobalState = function(d, f) {
    t = u(d, f, 0);
  }, this.setState = function(d, f, m) {
    const v = d.clippingPlanes, y = d.clipIntersection, M = d.clipShadows, b = i.get(d);
    if (!r || v === null || v.length === 0 || o && !M) o ? u(null) : function() {
      c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
    }();
    else {
      const _ = o ? 0 : n, T = 4 * _;
      let w = b.clippingState || null;
      c.value = w, w = u(v, f, T, m);
      for (let E = 0; E !== T; ++E) w[E] = t[E];
      b.clippingState = w, this.numIntersection = y ? this.numPlanes : 0, this.numPlanes += _;
    }
  };
}
function Zm(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, o) {
    return o === 303 ? r.mapping = 301 : o === 304 && (r.mapping = 302), r;
  }
  function n(r) {
    const o = r.target;
    o.removeEventListener("dispose", n);
    const s = e.get(o);
    s !== void 0 && (e.delete(o), s.dispose());
  }
  return { get: function(r) {
    if (r && r.isTexture) {
      const o = r.mapping;
      if (o === 303 || o === 304) {
        if (e.has(r))
          return t(e.get(r).texture, r.mapping);
        {
          const s = r.image;
          if (s && s.height > 0) {
            const h = new zm(s.height);
            return h.fromEquirectangularTexture(i, r), e.set(r, h), r.addEventListener("dispose", n), t(h.texture, r.mapping);
          }
          return null;
        }
      }
    }
    return r;
  }, dispose: function() {
    e = /* @__PURE__ */ new WeakMap();
  } };
}
class Jm extends Al {
  constructor(e = -1, t = 1, n = 1, r = -1, o = 0.1, s = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = o, this.far = s, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, o, s) {
    this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = o, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let o = n - e, s = n + e, h = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const u = (this.right - this.left) / this.view.fullWidth / this.zoom, d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      o += u * this.view.offsetX, s = o + u * this.view.width, h -= d * this.view.offsetY, c = h - d * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(o, s, h, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Gh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], pa = 20, Js = new Jm(), Wh = new lt();
let $s = null, Qs = 0, el = 0, tl = !1;
const ur = (1 + Math.sqrt(5)) / 2, kr = 1 / ur, Xh = [new X(-ur, kr, 0), new X(ur, kr, 0), new X(-kr, 0, ur), new X(kr, 0, ur), new X(0, ur, -kr), new X(0, ur, kr), new X(-1, 1, -1), new X(1, 1, -1), new X(-1, 1, 1), new X(1, 1, 1)];
class qh {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    $s = this._renderer.getRenderTarget(), Qs = this._renderer.getActiveCubeFace(), el = this._renderer.getActiveMipmapLevel(), tl = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const o = this._allocateTargets();
    return o.depthBuffer = !0, this._sceneToCubeUV(e, n, r, o), t > 0 && this._blur(o, 0, 0, t), this._applyPMREM(o), this._cleanup(o), o;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Zh(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Kh(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget($s, Qs, el), this._renderer.xr.enabled = tl, e.scissorTest = !1, oo(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), $s = this._renderer.getRenderTarget(), Qs = this._renderer.getActiveCubeFace(), el = this._renderer.getActiveMipmapLevel(), tl = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: 1006, minFilter: 1006, generateMipmaps: !1, type: 1016, format: 1023, colorSpace: Mi, depthBuffer: !1 }, r = Yh(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Yh(e, t, n);
      const { _lodMax: o } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function(s) {
        const h = [], c = [], u = [];
        let d = s;
        const f = s - 4 + 1 + Gh.length;
        for (let m = 0; m < f; m++) {
          const v = Math.pow(2, d);
          c.push(v);
          let y = 1 / v;
          m > s - 4 ? y = Gh[m - s + 4 - 1] : m === 0 && (y = 0), u.push(y);
          const M = 1 / (v - 2), b = -M, _ = 1 + M, T = [b, b, _, b, _, _, b, b, _, _, b, _], w = 6, E = 6, U = 3, N = 2, O = 1, te = new Float32Array(U * E * w), G = new Float32Array(N * E * w), Z = new Float32Array(O * E * w);
          for (let F = 0; F < w; F++) {
            const V = F % 3 * 2 / 3 - 1, B = F > 2 ? 0 : -1, ae = [V, B, 0, V + 2 / 3, B, 0, V + 2 / 3, B + 1, 0, V, B, 0, V + 2 / 3, B + 1, 0, V, B + 1, 0];
            te.set(ae, U * E * F), G.set(T, N * E * F);
            const ce = [F, F, F, F, F, F];
            Z.set(ce, O * E * F);
          }
          const re = new Un();
          re.setAttribute("position", new Ln(te, U)), re.setAttribute("uv", new Ln(G, N)), re.setAttribute("faceIndex", new Ln(Z, O)), h.push(re), d > 4 && d--;
        }
        return { lodPlanes: h, sizeLods: c, sigmas: u };
      }(o)), this._blurMaterial = function(s, h, c) {
        const u = new Float32Array(pa), d = new X(0, 1, 0);
        return new qn({ name: "SphericalGaussianBlur", defines: { n: pa, CUBEUV_TEXEL_WIDTH: 1 / h, CUBEUV_TEXEL_HEIGHT: 1 / c, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: u }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: d } }, vertexShader: Pl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: 0, depthTest: !1, depthWrite: !1 });
      }(o, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Tn(this._lodPlanes[0], e);
    this._renderer.compile(t, Js);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Cn(90, 1, t, n), s = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], c = this._renderer, u = c.autoClear, d = c.toneMapping;
    c.getClearColor(Wh), c.toneMapping = 0, c.autoClear = !1;
    const f = new ba({ name: "PMREM.Background", side: 1, depthWrite: !1, depthTest: !1 }), m = new Tn(new Zr(), f);
    let v = !1;
    const y = e.background;
    y ? y.isColor && (f.color.copy(y), e.background = null, v = !0) : (f.color.copy(Wh), v = !0);
    for (let M = 0; M < 6; M++) {
      const b = M % 3;
      b === 0 ? (o.up.set(0, s[M], 0), o.lookAt(h[M], 0, 0)) : b === 1 ? (o.up.set(0, 0, s[M]), o.lookAt(0, h[M], 0)) : (o.up.set(0, s[M], 0), o.lookAt(0, 0, h[M]));
      const _ = this._cubeSize;
      oo(r, b * _, M > 2 ? _ : 0, _, _), c.setRenderTarget(r), v && c.render(m, o), c.render(e, o);
    }
    m.geometry.dispose(), m.material.dispose(), c.toneMapping = d, c.autoClear = u, e.background = y;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Zh()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Kh());
    const o = r ? this._cubemapMaterial : this._equirectMaterial, s = new Tn(this._lodPlanes[0], o);
    o.uniforms.envMap.value = e;
    const h = this._cubeSize;
    oo(t, 0, 0, 3 * h, 2 * h), n.setRenderTarget(t), n.render(s, Js);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let o = 1; o < r; o++) {
      const s = Math.sqrt(this._sigmas[o] * this._sigmas[o] - this._sigmas[o - 1] * this._sigmas[o - 1]), h = Xh[(r - o - 1) % Xh.length];
      this._blur(e, o - 1, o, s, h);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, o) {
    const s = this._pingPongRenderTarget;
    this._halfBlur(e, s, t, n, r, "latitudinal", o), this._halfBlur(s, e, n, n, r, "longitudinal", o);
  }
  _halfBlur(e, t, n, r, o, s, h) {
    const c = this._renderer, u = this._blurMaterial;
    s !== "latitudinal" && s !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const d = new Tn(this._lodPlanes[r], u), f = u.uniforms, m = this._sizeLods[n] - 1, v = isFinite(o) ? Math.PI / (2 * m) : 2 * Math.PI / 39, y = o / v, M = isFinite(o) ? 1 + Math.floor(3 * y) : pa;
    M > pa && console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${M} samples when the maximum is set to 20`);
    const b = [];
    let _ = 0;
    for (let E = 0; E < pa; ++E) {
      const U = E / y, N = Math.exp(-U * U / 2);
      b.push(N), E === 0 ? _ += N : E < M && (_ += 2 * N);
    }
    for (let E = 0; E < b.length; E++) b[E] = b[E] / _;
    f.envMap.value = e.texture, f.samples.value = M, f.weights.value = b, f.latitudinal.value = s === "latitudinal", h && (f.poleAxis.value = h);
    const { _lodMax: T } = this;
    f.dTheta.value = v, f.mipInt.value = T - n;
    const w = this._sizeLods[r];
    oo(t, 3 * w * (r > T - 4 ? r - T + 4 : 0), 4 * (this._cubeSize - w), 3 * w, 2 * w), c.setRenderTarget(t), c.render(d, Js);
  }
}
function Yh(i, e, t) {
  const n = new fr(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function oo(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Kh() {
  return new qn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Pl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: 0, depthTest: !1, depthWrite: !1 });
}
function Zh() {
  return new qn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Pl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: 0, depthTest: !1, depthWrite: !1 });
}
function Pl() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function $m(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(r) {
    const o = r.target;
    o.removeEventListener("dispose", n);
    const s = e.get(o);
    s !== void 0 && (e.delete(o), s.dispose());
  }
  return { get: function(r) {
    if (r && r.isTexture) {
      const o = r.mapping, s = o === 303 || o === 304, h = o === 301 || o === 302;
      if (s || h) {
        let c = e.get(r);
        const u = c !== void 0 ? c.texture.pmremVersion : 0;
        if (r.isRenderTargetTexture && r.pmremVersion !== u) return t === null && (t = new qh(i)), c = s ? t.fromEquirectangular(r, c) : t.fromCubemap(r, c), c.texture.pmremVersion = r.pmremVersion, e.set(r, c), c.texture;
        if (c !== void 0) return c.texture;
        {
          const d = r.image;
          return s && d && d.height > 0 || h && d && function(f) {
            let m = 0;
            const v = 6;
            for (let y = 0; y < v; y++) f[y] !== void 0 && m++;
            return m === v;
          }(d) ? (t === null && (t = new qh(i)), c = s ? t.fromEquirectangular(r) : t.fromCubemap(r), c.texture.pmremVersion = r.pmremVersion, e.set(r, c), r.addEventListener("dispose", n), c.texture) : null;
        }
      }
    }
    return r;
  }, dispose: function() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  } };
}
function Qm(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const r = t(n);
    return r === null && xo("THREE.WebGLRenderer: " + n + " extension not supported."), r;
  } };
}
function eg(i, e, t, n) {
  const r = {}, o = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const u = c.target;
    u.index !== null && e.remove(u.index);
    for (const f in u.attributes) e.remove(u.attributes[f]);
    for (const f in u.morphAttributes) {
      const m = u.morphAttributes[f];
      for (let v = 0, y = m.length; v < y; v++) e.remove(m[v]);
    }
    u.removeEventListener("dispose", s), delete r[u.id];
    const d = o.get(u);
    d && (e.remove(d), o.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function h(c) {
    const u = [], d = c.index, f = c.attributes.position;
    let m = 0;
    if (d !== null) {
      const M = d.array;
      m = d.version;
      for (let b = 0, _ = M.length; b < _; b += 3) {
        const T = M[b + 0], w = M[b + 1], E = M[b + 2];
        u.push(T, w, w, E, E, T);
      }
    } else {
      if (f === void 0) return;
      {
        const M = f.array;
        m = f.version;
        for (let b = 0, _ = M.length / 3 - 1; b < _; b += 3) {
          const T = b + 0, w = b + 1, E = b + 2;
          u.push(T, w, w, E, E, T);
        }
      }
    }
    const v = new (Nu(u) ? zu : ku)(u, 1);
    v.version = m;
    const y = o.get(c);
    y && e.remove(y), o.set(c, v);
  }
  return { get: function(c, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", s), r[u.id] = !0, t.memory.geometries++), u;
  }, update: function(c) {
    const u = c.attributes;
    for (const f in u) e.update(u[f], i.ARRAY_BUFFER);
    const d = c.morphAttributes;
    for (const f in d) {
      const m = d[f];
      for (let v = 0, y = m.length; v < y; v++) e.update(m[v], i.ARRAY_BUFFER);
    }
  }, getWireframeAttribute: function(c) {
    const u = o.get(c);
    if (u) {
      const d = c.index;
      d !== null && u.version < d.version && h(c);
    } else h(c);
    return o.get(c);
  } };
}
function tg(i, e, t) {
  let n, r, o;
  function s(h, c, u) {
    u !== 0 && (i.drawElementsInstanced(n, c, r, h * o, u), t.update(c, n, u));
  }
  this.setMode = function(h) {
    n = h;
  }, this.setIndex = function(h) {
    r = h.type, o = h.bytesPerElement;
  }, this.render = function(h, c) {
    i.drawElements(n, c, r, h * o), t.update(c, n, 1);
  }, this.renderInstances = s, this.renderMultiDraw = function(h, c, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, c, 0, r, h, 0, u);
    let d = 0;
    for (let f = 0; f < u; f++) d += c[f];
    t.update(d, n, 1);
  }, this.renderMultiDrawInstances = function(h, c, u, d) {
    if (u === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null) for (let m = 0; m < h.length; m++) s(h[m] / o, c[m], d[m]);
    else {
      f.multiDrawElementsInstancedWEBGL(n, c, 0, r, h, 0, d, 0, u);
      let m = 0;
      for (let v = 0; v < u; v++) m += c[v];
      for (let v = 0; v < d.length; v++) t.update(m, n, d[v]);
    }
  };
}
function ng(i) {
  const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return { memory: { geometries: 0, textures: 0 }, render: e, programs: null, autoReset: !0, reset: function() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }, update: function(t, n, r) {
    switch (e.calls++, n) {
      case i.TRIANGLES:
        e.triangles += r * (t / 3);
        break;
      case i.LINES:
        e.lines += r * (t / 2);
        break;
      case i.LINE_STRIP:
        e.lines += r * (t - 1);
        break;
      case i.LINE_LOOP:
        e.lines += r * t;
        break;
      case i.POINTS:
        e.points += r * t;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", n);
    }
  } };
}
function ig(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new Mt();
  return { update: function(o, s, h) {
    const c = o.morphTargetInfluences, u = s.morphAttributes.position || s.morphAttributes.normal || s.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let f = n.get(s);
    if (f === void 0 || f.count !== d) {
      let te = function() {
        N.dispose(), n.delete(s), s.removeEventListener("dispose", te);
      };
      f !== void 0 && f.texture.dispose();
      const m = s.morphAttributes.position !== void 0, v = s.morphAttributes.normal !== void 0, y = s.morphAttributes.color !== void 0, M = s.morphAttributes.position || [], b = s.morphAttributes.normal || [], _ = s.morphAttributes.color || [];
      let T = 0;
      m === !0 && (T = 1), v === !0 && (T = 2), y === !0 && (T = 3);
      let w = s.attributes.position.count * T, E = 1;
      w > e.maxTextureSize && (E = Math.ceil(w / e.maxTextureSize), w = e.maxTextureSize);
      const U = new Float32Array(w * E * 4 * d), N = new Fu(U, w, E, d);
      N.type = 1015, N.needsUpdate = !0;
      const O = 4 * T;
      for (let G = 0; G < d; G++) {
        const Z = M[G], re = b[G], F = _[G], V = w * E * 4 * G;
        for (let B = 0; B < Z.count; B++) {
          const ae = B * O;
          m === !0 && (r.fromBufferAttribute(Z, B), U[V + ae + 0] = r.x, U[V + ae + 1] = r.y, U[V + ae + 2] = r.z, U[V + ae + 3] = 0), v === !0 && (r.fromBufferAttribute(re, B), U[V + ae + 4] = r.x, U[V + ae + 5] = r.y, U[V + ae + 6] = r.z, U[V + ae + 7] = 0), y === !0 && (r.fromBufferAttribute(F, B), U[V + ae + 8] = r.x, U[V + ae + 9] = r.y, U[V + ae + 10] = r.z, U[V + ae + 11] = F.itemSize === 4 ? r.w : 1);
        }
      }
      f = { count: d, texture: N, size: new We(w, E) }, n.set(s, f), s.addEventListener("dispose", te);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null) h.getUniforms().setValue(i, "morphTexture", o.morphTexture, t);
    else {
      let m = 0;
      for (let y = 0; y < c.length; y++) m += c[y];
      const v = s.morphTargetsRelative ? 1 : 1 - m;
      h.getUniforms().setValue(i, "morphTargetBaseInfluence", v), h.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    h.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t), h.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  } };
}
function rg(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function o(s) {
    const h = s.target;
    h.removeEventListener("dispose", o), t.remove(h.instanceMatrix), h.instanceColor !== null && t.remove(h.instanceColor);
  }
  return { update: function(s) {
    const h = n.render.frame, c = s.geometry, u = e.get(s, c);
    if (r.get(u) !== h && (e.update(u), r.set(u, h)), s.isInstancedMesh && (s.hasEventListener("dispose", o) === !1 && s.addEventListener("dispose", o), r.get(s) !== h && (t.update(s.instanceMatrix, i.ARRAY_BUFFER), s.instanceColor !== null && t.update(s.instanceColor, i.ARRAY_BUFFER), r.set(s, h))), s.isSkinnedMesh) {
      const d = s.skeleton;
      r.get(d) !== h && (d.update(), r.set(d, h));
    }
    return u;
  }, dispose: function() {
    r = /* @__PURE__ */ new WeakMap();
  } };
}
class Wu extends Gt {
  constructor(e, t, n, r, o, s, h, c, u, d = 1026) {
    if (d !== 1026 && d !== 1027) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && d === 1026 && (n = 1014), n === void 0 && d === 1027 && (n = 1020), super(null, r, o, s, h, c, d, n, u), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = h !== void 0 ? h : 1003, this.minFilter = c !== void 0 ? c : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Xu = new Gt(), Jh = new Wu(1, 1), qu = new Fu(), Yu = new Tm(), Ku = new Hu(), $h = [], Qh = [], eu = new Float32Array(16), tu = new Float32Array(9), nu = new Float32Array(4);
function Jr(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let o = $h[r];
  if (o === void 0 && (o = new Float32Array(r), $h[r] = o), e !== 0) {
    n.toArray(o, 0);
    for (let s = 1, h = 0; s !== e; ++s) h += t, i[s].toArray(o, h);
  }
  return o;
}
function Wt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function Xt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function No(i, e) {
  let t = Qh[e];
  t === void 0 && (t = new Int32Array(e), Qh[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function ag(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function og(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y || (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Wt(t, e)) return;
    i.uniform2fv(this.addr, e), Xt(t, e);
  }
}
function sg(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y && t[2] === e.z || (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) t[0] === e.r && t[1] === e.g && t[2] === e.b || (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Wt(t, e)) return;
    i.uniform3fv(this.addr, e), Xt(t, e);
  }
}
function lg(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y && t[2] === e.z && t[3] === e.w || (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Wt(t, e)) return;
    i.uniform4fv(this.addr, e), Xt(t, e);
  }
}
function cg(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Wt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Xt(t, e);
  } else {
    if (Wt(t, n)) return;
    nu.set(n), i.uniformMatrix2fv(this.addr, !1, nu), Xt(t, n);
  }
}
function hg(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Wt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Xt(t, e);
  } else {
    if (Wt(t, n)) return;
    tu.set(n), i.uniformMatrix3fv(this.addr, !1, tu), Xt(t, n);
  }
}
function ug(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Wt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Xt(t, e);
  } else {
    if (Wt(t, n)) return;
    eu.set(n), i.uniformMatrix4fv(this.addr, !1, eu), Xt(t, n);
  }
}
function dg(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function pg(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y || (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Wt(t, e)) return;
    i.uniform2iv(this.addr, e), Xt(t, e);
  }
}
function fg(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y && t[2] === e.z || (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Wt(t, e)) return;
    i.uniform3iv(this.addr, e), Xt(t, e);
  }
}
function mg(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y && t[2] === e.z && t[3] === e.w || (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Wt(t, e)) return;
    i.uniform4iv(this.addr, e), Xt(t, e);
  }
}
function gg(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function _g(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y || (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Wt(t, e)) return;
    i.uniform2uiv(this.addr, e), Xt(t, e);
  }
}
function vg(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y && t[2] === e.z || (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Wt(t, e)) return;
    i.uniform3uiv(this.addr, e), Xt(t, e);
  }
}
function yg(i, e) {
  const t = this.cache;
  if (e.x !== void 0) t[0] === e.x && t[1] === e.y && t[2] === e.z && t[3] === e.w || (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Wt(t, e)) return;
    i.uniform4uiv(this.addr, e), Xt(t, e);
  }
}
function xg(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  let o;
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), this.type === i.SAMPLER_2D_SHADOW ? (Jh.compareFunction = 515, o = Jh) : o = Xu, t.setTexture2D(e || o, r);
}
function bg(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Yu, r);
}
function Sg(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Ku, r);
}
function Mg(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || qu, r);
}
function Eg(i, e) {
  i.uniform1fv(this.addr, e);
}
function wg(i, e) {
  const t = Jr(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Tg(i, e) {
  const t = Jr(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Ag(i, e) {
  const t = Jr(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Pg(i, e) {
  const t = Jr(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Rg(i, e) {
  const t = Jr(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Cg(i, e) {
  const t = Jr(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Dg(i, e) {
  i.uniform1iv(this.addr, e);
}
function Ig(i, e) {
  i.uniform2iv(this.addr, e);
}
function Lg(i, e) {
  i.uniform3iv(this.addr, e);
}
function Ug(i, e) {
  i.uniform4iv(this.addr, e);
}
function Ng(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Og(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Fg(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Bg(i, e) {
  i.uniform4uiv(this.addr, e);
}
function kg(i, e, t) {
  const n = this.cache, r = e.length, o = No(t, r);
  Wt(n, o) || (i.uniform1iv(this.addr, o), Xt(n, o));
  for (let s = 0; s !== r; ++s) t.setTexture2D(e[s] || Xu, o[s]);
}
function zg(i, e, t) {
  const n = this.cache, r = e.length, o = No(t, r);
  Wt(n, o) || (i.uniform1iv(this.addr, o), Xt(n, o));
  for (let s = 0; s !== r; ++s) t.setTexture3D(e[s] || Yu, o[s]);
}
function Vg(i, e, t) {
  const n = this.cache, r = e.length, o = No(t, r);
  Wt(n, o) || (i.uniform1iv(this.addr, o), Xt(n, o));
  for (let s = 0; s !== r; ++s) t.setTextureCube(e[s] || Ku, o[s]);
}
function Hg(i, e, t) {
  const n = this.cache, r = e.length, o = No(t, r);
  Wt(n, o) || (i.uniform1iv(this.addr, o), Xt(n, o));
  for (let s = 0; s !== r; ++s) t.setTexture2DArray(e[s] || qu, o[s]);
}
class jg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = function(r) {
      switch (r) {
        case 5126:
          return ag;
        case 35664:
          return og;
        case 35665:
          return sg;
        case 35666:
          return lg;
        case 35674:
          return cg;
        case 35675:
          return hg;
        case 35676:
          return ug;
        case 5124:
        case 35670:
          return dg;
        case 35667:
        case 35671:
          return pg;
        case 35668:
        case 35672:
          return fg;
        case 35669:
        case 35673:
          return mg;
        case 5125:
          return gg;
        case 36294:
          return _g;
        case 36295:
          return vg;
        case 36296:
          return yg;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return xg;
        case 35679:
        case 36299:
        case 36307:
          return bg;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return Sg;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return Mg;
      }
    }(t.type);
  }
}
class Gg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = function(r) {
      switch (r) {
        case 5126:
          return Eg;
        case 35664:
          return wg;
        case 35665:
          return Tg;
        case 35666:
          return Ag;
        case 35674:
          return Pg;
        case 35675:
          return Rg;
        case 35676:
          return Cg;
        case 5124:
        case 35670:
          return Dg;
        case 35667:
        case 35671:
          return Ig;
        case 35668:
        case 35672:
          return Lg;
        case 35669:
        case 35673:
          return Ug;
        case 5125:
          return Ng;
        case 36294:
          return Og;
        case 36295:
          return Fg;
        case 36296:
          return Bg;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return kg;
        case 35679:
        case 36299:
        case 36307:
          return zg;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return Vg;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return Hg;
      }
    }(t.type);
  }
}
class Wg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let o = 0, s = r.length; o !== s; ++o) {
      const h = r[o];
      h.setValue(e, t[h.id], n);
    }
  }
}
const nl = /(\w+)(\])?(\[|\.)?/g;
function iu(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Xg(i, e, t) {
  const n = i.name, r = n.length;
  for (nl.lastIndex = 0; ; ) {
    const o = nl.exec(n), s = nl.lastIndex;
    let h = o[1];
    const c = o[2] === "]", u = o[3];
    if (c && (h |= 0), u === void 0 || u === "[" && s + 2 === r) {
      iu(t, u === void 0 ? new jg(h, i, e) : new Gg(h, i, e));
      break;
    }
    {
      let d = t.map[h];
      d === void 0 && (d = new Wg(h), iu(t, d)), t = d;
    }
  }
}
class bo {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const o = e.getActiveUniform(t, r);
      Xg(o, e.getUniformLocation(t, o.name), this);
    }
  }
  setValue(e, t, n, r) {
    const o = this.map[t];
    o !== void 0 && o.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let o = 0, s = t.length; o !== s; ++o) {
      const h = t[o], c = n[h.id];
      c.needsUpdate !== !1 && h.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, o = e.length; r !== o; ++r) {
      const s = e[r];
      s.id in t && n.push(s);
    }
    return n;
  }
}
function ru(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let qg = 0;
function au(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const o = /ERROR: 0:(\d+)/.exec(r);
  if (o) {
    const s = parseInt(o[1]);
    return t.toUpperCase() + `

` + r + `

` + function(h, c) {
      const u = h.split(`
`), d = [], f = Math.max(c - 6, 0), m = Math.min(c + 6, u.length);
      for (let v = f; v < m; v++) {
        const y = v + 1;
        d.push(`${y === c ? ">" : " "} ${y}: ${u[v]}`);
      }
      return d.join(`
`);
    }(i.getShaderSource(e), s);
  }
  return r;
}
function Yg(i, e) {
  const t = function(n) {
    const r = dt.getPrimaries(dt.workingColorSpace), o = dt.getPrimaries(n);
    let s;
    switch (r === o ? s = "" : r === wo && o === Eo ? s = "LinearDisplayP3ToLinearSRGB" : r === Eo && o === wo && (s = "LinearSRGBToLinearDisplayP3"), n) {
      case Mi:
      case Io:
        return [s, "LinearTransferOETF"];
      case Qn:
      case wl:
        return [s, "sRGBTransferOETF"];
      default:
        return console.warn("THREE.WebGLProgram: Unsupported color space:", n), [s, "LinearTransferOETF"];
    }
  }(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Kg(i, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "Cineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 7:
      t = "Neutral";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const so = new X();
function Zg() {
  return dt.getLuminanceCoefficients(so), ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${so.x.toFixed(4)}, ${so.y.toFixed(4)}, ${so.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function fa(i) {
  return i !== "";
}
function ou(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function su(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Jg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ml(i) {
  return i.replace(Jg, Qg);
}
const $g = /* @__PURE__ */ new Map();
function Qg(i, e) {
  let t = rt[e];
  if (t === void 0) {
    const n = $g.get(e);
    if (n === void 0) throw new Error("Can not resolve #include <" + e + ">");
    t = rt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
  }
  return ml(t);
}
const e_ = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function lu(i) {
  return i.replace(e_, t_);
}
function t_(i, e, t, n) {
  let r = "";
  for (let o = parseInt(e); o < parseInt(t); o++) r += n.replace(/\[\s*i\s*\]/g, "[ " + o + " ]").replace(/UNROLLED_LOOP_INDEX/g, o);
  return r;
}
function cu(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function n_(i, e, t, n) {
  const r = i.getContext(), o = t.defines;
  let s = t.vertexShader, h = t.fragmentShader;
  const c = function(re) {
    let F = "SHADOWMAP_TYPE_BASIC";
    return re.shadowMapType === 1 ? F = "SHADOWMAP_TYPE_PCF" : re.shadowMapType === 2 ? F = "SHADOWMAP_TYPE_PCF_SOFT" : re.shadowMapType === 3 && (F = "SHADOWMAP_TYPE_VSM"), F;
  }(t), u = function(re) {
    let F = "ENVMAP_TYPE_CUBE";
    if (re.envMap) switch (re.envMapMode) {
      case 301:
      case 302:
        F = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        F = "ENVMAP_TYPE_CUBE_UV";
    }
    return F;
  }(t), d = function(re) {
    let F = "ENVMAP_MODE_REFLECTION";
    return re.envMap && re.envMapMode === 302 && (F = "ENVMAP_MODE_REFRACTION"), F;
  }(t), f = function(re) {
    let F = "ENVMAP_BLENDING_NONE";
    if (re.envMap) switch (re.combine) {
      case 0:
        F = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        F = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        F = "ENVMAP_BLENDING_ADD";
    }
    return F;
  }(t), m = function(re) {
    const F = re.envMapCubeUVHeight;
    if (F === null) return null;
    const V = Math.log2(F) - 2, B = 1 / F;
    return { texelWidth: 1 / (3 * Math.max(Math.pow(2, V), 112)), texelHeight: B, maxMip: V };
  }(t), v = function(re) {
    return [re.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", re.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(fa).join(`
`);
  }(t), y = function(re) {
    const F = [];
    for (const V in re) {
      const B = re[V];
      B !== !1 && F.push("#define " + V + " " + B);
    }
    return F.join(`
`);
  }(o), M = r.createProgram();
  let b, _, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (b = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, y].filter(fa).join(`
`), b.length > 0 && (b += `
`), _ = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, y].filter(fa).join(`
`), _.length > 0 && (_ += `
`)) : (b = [cu(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, y, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + d : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(fa).join(`
`), _ = [cu(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, y, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + d : "", t.envMap ? "#define " + f : "", m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "", m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "", m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== 0 ? "#define TONE_MAPPING" : "", t.toneMapping !== 0 ? rt.tonemapping_pars_fragment : "", t.toneMapping !== 0 ? Kg("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", rt.colorspace_pars_fragment, Yg("linearToOutputTexel", t.outputColorSpace), Zg(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(fa).join(`
`)), s = ml(s), s = ou(s, t), s = su(s, t), h = ml(h), h = ou(h, t), h = su(h, t), s = lu(s), h = lu(h), t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, b = [v, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + b, _ = ["#define varying in", t.glslVersion === Th ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Th ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + _);
  const w = T + b + s, E = T + _ + h, U = ru(r, r.VERTEX_SHADER, w), N = ru(r, r.FRAGMENT_SHADER, E);
  function O(re) {
    if (i.debug.checkShaderErrors) {
      const F = r.getProgramInfoLog(M).trim(), V = r.getShaderInfoLog(U).trim(), B = r.getShaderInfoLog(N).trim();
      let ae = !0, ce = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1) if (ae = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, M, U, N);
      else {
        const ue = au(r, U, "vertex"), ge = au(r, N, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + re.name + `
Material Type: ` + re.type + `

Program Info Log: ` + F + `
` + ue + `
` + ge);
      }
      else F !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", F) : V !== "" && B !== "" || (ce = !1);
      ce && (re.diagnostics = { runnable: ae, programLog: F, vertexShader: { log: V, prefix: b }, fragmentShader: { log: B, prefix: _ } });
    }
    r.deleteShader(U), r.deleteShader(N), te = new bo(r, M), G = function(F, V) {
      const B = {}, ae = F.getProgramParameter(V, F.ACTIVE_ATTRIBUTES);
      for (let ce = 0; ce < ae; ce++) {
        const ue = F.getActiveAttrib(V, ce), ge = ue.name;
        let Ee = 1;
        ue.type === F.FLOAT_MAT2 && (Ee = 2), ue.type === F.FLOAT_MAT3 && (Ee = 3), ue.type === F.FLOAT_MAT4 && (Ee = 4), B[ge] = { type: ue.type, location: F.getAttribLocation(V, ge), locationSize: Ee };
      }
      return B;
    }(r, M);
  }
  let te, G;
  r.attachShader(M, U), r.attachShader(M, N), t.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M), this.getUniforms = function() {
    return te === void 0 && O(this), te;
  }, this.getAttributes = function() {
    return G === void 0 && O(this), G;
  };
  let Z = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return Z === !1 && (Z = r.getProgramParameter(M, 37297)), Z;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = qg++, this.cacheKey = e, this.usedTimes = 1, this.program = M, this.vertexShader = U, this.fragmentShader = N, this;
}
let i_ = 0;
class r_ {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), o = this._getShaderStage(n), s = this._getShaderCacheForMaterial(e);
    return s.has(r) === !1 && (s.add(r), r.usedTimes++), s.has(o) === !1 && (s.add(o), o.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new a_(e), t.set(e, n)), n;
  }
}
class a_ {
  constructor(e) {
    this.id = i_++, this.code = e, this.usedTimes = 0;
  }
}
function o_(i, e, t, n, r, o, s) {
  const h = new Tl(), c = new r_(), u = /* @__PURE__ */ new Set(), d = [], f = r.logarithmicDepthBuffer, m = r.reverseDepthBuffer, v = r.vertexTextures;
  let y = r.precision;
  const M = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function b(_) {
    return u.add(_), _ === 0 ? "uv" : `uv${_}`;
  }
  return { getParameters: function(_, T, w, E, U) {
    const N = E.fog, O = U.geometry, te = _.isMeshStandardMaterial ? E.environment : null, G = (_.isMeshStandardMaterial ? t : e).get(_.envMap || te), Z = G && G.mapping === 306 ? G.image.height : null, re = M[_.type];
    _.precision !== null && (y = r.getMaxPrecision(_.precision), y !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", y, "instead."));
    const F = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, V = F !== void 0 ? F.length : 0;
    let B, ae, ce, ue, ge = 0;
    if (O.morphAttributes.position !== void 0 && (ge = 1), O.morphAttributes.normal !== void 0 && (ge = 2), O.morphAttributes.color !== void 0 && (ge = 3), re) {
      const ii = wn[re];
      B = ii.vertexShader, ae = ii.fragmentShader;
    } else B = _.vertexShader, ae = _.fragmentShader, c.update(_), ce = c.getVertexShaderID(_), ue = c.getFragmentShaderID(_);
    const Ee = i.getRenderTarget(), xe = U.isInstancedMesh === !0, le = U.isBatchedMesh === !0, de = !!_.map, Se = !!_.matcap, Te = !!G, L = !!_.aoMap, A = !!_.lightMap, j = !!_.bumpMap, Q = !!_.normalMap, W = !!_.displacementMap, q = !!_.emissiveMap, D = !!_.metalnessMap, K = !!_.roughnessMap, $ = _.anisotropy > 0, _e = _.clearcoat > 0, ne = _.dispersion > 0, pe = _.iridescence > 0, ye = _.sheen > 0, me = _.transmission > 0, Re = $ && !!_.anisotropyMap, Pe = _e && !!_.clearcoatMap, Ne = _e && !!_.clearcoatNormalMap, je = _e && !!_.clearcoatRoughnessMap, Xe = pe && !!_.iridescenceMap, $e = pe && !!_.iridescenceThicknessMap, Ue = ye && !!_.sheenColorMap, Ye = ye && !!_.sheenRoughnessMap, at = !!_.specularMap, ht = !!_.specularColorMap, De = !!_.specularIntensityMap, Ke = me && !!_.transmissionMap, tt = me && !!_.thicknessMap, Bt = !!_.gradientMap, kt = !!_.alphaMap, Rt = _.alphaTest > 0, qt = !!_.alphaHash, It = !!_.extensions;
    let H = 0;
    _.toneMapped && (Ee !== null && Ee.isXRRenderTarget !== !0 || (H = i.toneMapping));
    const vn = { shaderID: re, shaderType: _.type, shaderName: _.name, vertexShader: B, fragmentShader: ae, defines: _.defines, customVertexShaderID: ce, customFragmentShaderID: ue, isRawShaderMaterial: _.isRawShaderMaterial === !0, glslVersion: _.glslVersion, precision: y, batching: le, batchingColor: le && U._colorsTexture !== null, instancing: xe, instancingColor: xe && U.instanceColor !== null, instancingMorph: xe && U.morphTexture !== null, supportsVertexTextures: v, outputColorSpace: Ee === null ? i.outputColorSpace : Ee.isXRRenderTarget === !0 ? Ee.texture.colorSpace : Mi, alphaToCoverage: !!_.alphaToCoverage, map: de, matcap: Se, envMap: Te, envMapMode: Te && G.mapping, envMapCubeUVHeight: Z, aoMap: L, lightMap: A, bumpMap: j, normalMap: Q, displacementMap: v && W, emissiveMap: q, normalMapObjectSpace: Q && _.normalMapType === 1, normalMapTangentSpace: Q && _.normalMapType === 0, metalnessMap: D, roughnessMap: K, anisotropy: $, anisotropyMap: Re, clearcoat: _e, clearcoatMap: Pe, clearcoatNormalMap: Ne, clearcoatRoughnessMap: je, dispersion: ne, iridescence: pe, iridescenceMap: Xe, iridescenceThicknessMap: $e, sheen: ye, sheenColorMap: Ue, sheenRoughnessMap: Ye, specularMap: at, specularColorMap: ht, specularIntensityMap: De, transmission: me, transmissionMap: Ke, thicknessMap: tt, gradientMap: Bt, opaque: _.transparent === !1 && _.blending === 1 && _.alphaToCoverage === !1, alphaMap: kt, alphaTest: Rt, alphaHash: qt, combine: _.combine, mapUv: de && b(_.map.channel), aoMapUv: L && b(_.aoMap.channel), lightMapUv: A && b(_.lightMap.channel), bumpMapUv: j && b(_.bumpMap.channel), normalMapUv: Q && b(_.normalMap.channel), displacementMapUv: W && b(_.displacementMap.channel), emissiveMapUv: q && b(_.emissiveMap.channel), metalnessMapUv: D && b(_.metalnessMap.channel), roughnessMapUv: K && b(_.roughnessMap.channel), anisotropyMapUv: Re && b(_.anisotropyMap.channel), clearcoatMapUv: Pe && b(_.clearcoatMap.channel), clearcoatNormalMapUv: Ne && b(_.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: je && b(_.clearcoatRoughnessMap.channel), iridescenceMapUv: Xe && b(_.iridescenceMap.channel), iridescenceThicknessMapUv: $e && b(_.iridescenceThicknessMap.channel), sheenColorMapUv: Ue && b(_.sheenColorMap.channel), sheenRoughnessMapUv: Ye && b(_.sheenRoughnessMap.channel), specularMapUv: at && b(_.specularMap.channel), specularColorMapUv: ht && b(_.specularColorMap.channel), specularIntensityMapUv: De && b(_.specularIntensityMap.channel), transmissionMapUv: Ke && b(_.transmissionMap.channel), thicknessMapUv: tt && b(_.thicknessMap.channel), alphaMapUv: kt && b(_.alphaMap.channel), vertexTangents: !!O.attributes.tangent && (Q || $), vertexColors: _.vertexColors, vertexAlphas: _.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, pointsUvs: U.isPoints === !0 && !!O.attributes.uv && (de || kt), fog: !!N, useFog: _.fog === !0, fogExp2: !!N && N.isFogExp2, flatShading: _.flatShading === !0, sizeAttenuation: _.sizeAttenuation === !0, logarithmicDepthBuffer: f, reverseDepthBuffer: m, skinning: U.isSkinnedMesh === !0, morphTargets: O.morphAttributes.position !== void 0, morphNormals: O.morphAttributes.normal !== void 0, morphColors: O.morphAttributes.color !== void 0, morphTargetsCount: V, morphTextureStride: ge, numDirLights: T.directional.length, numPointLights: T.point.length, numSpotLights: T.spot.length, numSpotLightMaps: T.spotLightMap.length, numRectAreaLights: T.rectArea.length, numHemiLights: T.hemi.length, numDirLightShadows: T.directionalShadowMap.length, numPointLightShadows: T.pointShadowMap.length, numSpotLightShadows: T.spotShadowMap.length, numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps, numLightProbes: T.numLightProbes, numClippingPlanes: s.numPlanes, numClipIntersection: s.numIntersection, dithering: _.dithering, shadowMapEnabled: i.shadowMap.enabled && w.length > 0, shadowMapType: i.shadowMap.type, toneMapping: H, decodeVideoTexture: de && _.map.isVideoTexture === !0 && dt.getTransfer(_.map.colorSpace) === wt, premultipliedAlpha: _.premultipliedAlpha, doubleSided: _.side === 2, flipSided: _.side === 1, useDepthPacking: _.depthPacking >= 0, depthPacking: _.depthPacking || 0, index0AttributeName: _.index0AttributeName, extensionClipCullDistance: It && _.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (It && _.extensions.multiDraw === !0 || le) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: _.customProgramCacheKey() };
    return vn.vertexUv1s = u.has(1), vn.vertexUv2s = u.has(2), vn.vertexUv3s = u.has(3), u.clear(), vn;
  }, getProgramCacheKey: function(_) {
    const T = [];
    if (_.shaderID ? T.push(_.shaderID) : (T.push(_.customVertexShaderID), T.push(_.customFragmentShaderID)), _.defines !== void 0) for (const w in _.defines) T.push(w), T.push(_.defines[w]);
    return _.isRawShaderMaterial === !1 && (function(w, E) {
      w.push(E.precision), w.push(E.outputColorSpace), w.push(E.envMapMode), w.push(E.envMapCubeUVHeight), w.push(E.mapUv), w.push(E.alphaMapUv), w.push(E.lightMapUv), w.push(E.aoMapUv), w.push(E.bumpMapUv), w.push(E.normalMapUv), w.push(E.displacementMapUv), w.push(E.emissiveMapUv), w.push(E.metalnessMapUv), w.push(E.roughnessMapUv), w.push(E.anisotropyMapUv), w.push(E.clearcoatMapUv), w.push(E.clearcoatNormalMapUv), w.push(E.clearcoatRoughnessMapUv), w.push(E.iridescenceMapUv), w.push(E.iridescenceThicknessMapUv), w.push(E.sheenColorMapUv), w.push(E.sheenRoughnessMapUv), w.push(E.specularMapUv), w.push(E.specularColorMapUv), w.push(E.specularIntensityMapUv), w.push(E.transmissionMapUv), w.push(E.thicknessMapUv), w.push(E.combine), w.push(E.fogExp2), w.push(E.sizeAttenuation), w.push(E.morphTargetsCount), w.push(E.morphAttributeCount), w.push(E.numDirLights), w.push(E.numPointLights), w.push(E.numSpotLights), w.push(E.numSpotLightMaps), w.push(E.numHemiLights), w.push(E.numRectAreaLights), w.push(E.numDirLightShadows), w.push(E.numPointLightShadows), w.push(E.numSpotLightShadows), w.push(E.numSpotLightShadowsWithMaps), w.push(E.numLightProbes), w.push(E.shadowMapType), w.push(E.toneMapping), w.push(E.numClippingPlanes), w.push(E.numClipIntersection), w.push(E.depthPacking);
    }(T, _), function(w, E) {
      h.disableAll(), E.supportsVertexTextures && h.enable(0), E.instancing && h.enable(1), E.instancingColor && h.enable(2), E.instancingMorph && h.enable(3), E.matcap && h.enable(4), E.envMap && h.enable(5), E.normalMapObjectSpace && h.enable(6), E.normalMapTangentSpace && h.enable(7), E.clearcoat && h.enable(8), E.iridescence && h.enable(9), E.alphaTest && h.enable(10), E.vertexColors && h.enable(11), E.vertexAlphas && h.enable(12), E.vertexUv1s && h.enable(13), E.vertexUv2s && h.enable(14), E.vertexUv3s && h.enable(15), E.vertexTangents && h.enable(16), E.anisotropy && h.enable(17), E.alphaHash && h.enable(18), E.batching && h.enable(19), E.dispersion && h.enable(20), E.batchingColor && h.enable(21), w.push(h.mask), h.disableAll(), E.fog && h.enable(0), E.useFog && h.enable(1), E.flatShading && h.enable(2), E.logarithmicDepthBuffer && h.enable(3), E.reverseDepthBuffer && h.enable(4), E.skinning && h.enable(5), E.morphTargets && h.enable(6), E.morphNormals && h.enable(7), E.morphColors && h.enable(8), E.premultipliedAlpha && h.enable(9), E.shadowMapEnabled && h.enable(10), E.doubleSided && h.enable(11), E.flipSided && h.enable(12), E.useDepthPacking && h.enable(13), E.dithering && h.enable(14), E.transmission && h.enable(15), E.sheen && h.enable(16), E.opaque && h.enable(17), E.pointsUvs && h.enable(18), E.decodeVideoTexture && h.enable(19), E.alphaToCoverage && h.enable(20), w.push(h.mask);
    }(T, _), T.push(i.outputColorSpace)), T.push(_.customProgramCacheKey), T.join();
  }, getUniforms: function(_) {
    const T = M[_.type];
    let w;
    if (T) {
      const E = wn[T];
      w = Bm.clone(E.uniforms);
    } else w = _.uniforms;
    return w;
  }, acquireProgram: function(_, T) {
    let w;
    for (let E = 0, U = d.length; E < U; E++) {
      const N = d[E];
      if (N.cacheKey === T) {
        w = N, ++w.usedTimes;
        break;
      }
    }
    return w === void 0 && (w = new n_(i, T, _, o), d.push(w)), w;
  }, releaseProgram: function(_) {
    if (--_.usedTimes == 0) {
      const T = d.indexOf(_);
      d[T] = d[d.length - 1], d.pop(), _.destroy();
    }
  }, releaseShaderCache: function(_) {
    c.remove(_);
  }, programs: d, dispose: function() {
    c.dispose();
  } };
}
function s_() {
  let i = /* @__PURE__ */ new WeakMap();
  return { has: function(e) {
    return i.has(e);
  }, get: function(e) {
    let t = i.get(e);
    return t === void 0 && (t = {}, i.set(e, t)), t;
  }, remove: function(e) {
    i.delete(e);
  }, update: function(e, t, n) {
    i.get(e)[t] = n;
  }, dispose: function() {
    i = /* @__PURE__ */ new WeakMap();
  } };
}
function l_(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function hu(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function uu() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function o(s, h, c, u, d, f) {
    let m = i[e];
    return m === void 0 ? (m = { id: s.id, object: s, geometry: h, material: c, groupOrder: u, renderOrder: s.renderOrder, z: d, group: f }, i[e] = m) : (m.id = s.id, m.object = s, m.geometry = h, m.material = c, m.groupOrder = u, m.renderOrder = s.renderOrder, m.z = d, m.group = f), e++, m;
  }
  return { opaque: t, transmissive: n, transparent: r, init: function() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }, push: function(s, h, c, u, d, f) {
    const m = o(s, h, c, u, d, f);
    c.transmission > 0 ? n.push(m) : c.transparent === !0 ? r.push(m) : t.push(m);
  }, unshift: function(s, h, c, u, d, f) {
    const m = o(s, h, c, u, d, f);
    c.transmission > 0 ? n.unshift(m) : c.transparent === !0 ? r.unshift(m) : t.unshift(m);
  }, finish: function() {
    for (let s = e, h = i.length; s < h; s++) {
      const c = i[s];
      if (c.id === null) break;
      c.id = null, c.object = null, c.geometry = null, c.material = null, c.group = null;
    }
  }, sort: function(s, h) {
    t.length > 1 && t.sort(s || l_), n.length > 1 && n.sort(h || hu), r.length > 1 && r.sort(h || hu);
  } };
}
function c_() {
  let i = /* @__PURE__ */ new WeakMap();
  return { get: function(e, t) {
    const n = i.get(e);
    let r;
    return n === void 0 ? (r = new uu(), i.set(e, [r])) : t >= n.length ? (r = new uu(), n.push(r)) : r = n[t], r;
  }, dispose: function() {
    i = /* @__PURE__ */ new WeakMap();
  } };
}
function h_() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new X(), color: new lt() };
        break;
      case "SpotLight":
        t = { position: new X(), direction: new X(), color: new lt(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new X(), color: new lt(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new X(), skyColor: new lt(), groundColor: new lt() };
        break;
      case "RectAreaLight":
        t = { color: new lt(), position: new X(), halfWidth: new X(), halfHeight: new X() };
    }
    return i[e.id] = t, t;
  } };
}
let u_ = 0;
function d_(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function p_(i) {
  const e = new h_(), t = /* @__PURE__ */ function() {
    const h = {};
    return { get: function(c) {
      if (h[c.id] !== void 0) return h[c.id];
      let u;
      switch (c.type) {
        case "DirectionalLight":
        case "SpotLight":
          u = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new We() };
          break;
        case "PointLight":
          u = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new We(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
      }
      return h[c.id] = u, u;
    } };
  }(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let h = 0; h < 9; h++) n.probe.push(new X());
  const r = new X(), o = new Tt(), s = new Tt();
  return { setup: function(h) {
    let c = 0, u = 0, d = 0;
    for (let O = 0; O < 9; O++) n.probe[O].set(0, 0, 0);
    let f = 0, m = 0, v = 0, y = 0, M = 0, b = 0, _ = 0, T = 0, w = 0, E = 0, U = 0;
    h.sort(d_);
    for (let O = 0, te = h.length; O < te; O++) {
      const G = h[O], Z = G.color, re = G.intensity, F = G.distance, V = G.shadow && G.shadow.map ? G.shadow.map.texture : null;
      if (G.isAmbientLight) c += Z.r * re, u += Z.g * re, d += Z.b * re;
      else if (G.isLightProbe) {
        for (let B = 0; B < 9; B++) n.probe[B].addScaledVector(G.sh.coefficients[B], re);
        U++;
      } else if (G.isDirectionalLight) {
        const B = e.get(G);
        if (B.color.copy(G.color).multiplyScalar(G.intensity), G.castShadow) {
          const ae = G.shadow, ce = t.get(G);
          ce.shadowIntensity = ae.intensity, ce.shadowBias = ae.bias, ce.shadowNormalBias = ae.normalBias, ce.shadowRadius = ae.radius, ce.shadowMapSize = ae.mapSize, n.directionalShadow[f] = ce, n.directionalShadowMap[f] = V, n.directionalShadowMatrix[f] = G.shadow.matrix, b++;
        }
        n.directional[f] = B, f++;
      } else if (G.isSpotLight) {
        const B = e.get(G);
        B.position.setFromMatrixPosition(G.matrixWorld), B.color.copy(Z).multiplyScalar(re), B.distance = F, B.coneCos = Math.cos(G.angle), B.penumbraCos = Math.cos(G.angle * (1 - G.penumbra)), B.decay = G.decay, n.spot[v] = B;
        const ae = G.shadow;
        if (G.map && (n.spotLightMap[w] = G.map, w++, ae.updateMatrices(G), G.castShadow && E++), n.spotLightMatrix[v] = ae.matrix, G.castShadow) {
          const ce = t.get(G);
          ce.shadowIntensity = ae.intensity, ce.shadowBias = ae.bias, ce.shadowNormalBias = ae.normalBias, ce.shadowRadius = ae.radius, ce.shadowMapSize = ae.mapSize, n.spotShadow[v] = ce, n.spotShadowMap[v] = V, T++;
        }
        v++;
      } else if (G.isRectAreaLight) {
        const B = e.get(G);
        B.color.copy(Z).multiplyScalar(re), B.halfWidth.set(0.5 * G.width, 0, 0), B.halfHeight.set(0, 0.5 * G.height, 0), n.rectArea[y] = B, y++;
      } else if (G.isPointLight) {
        const B = e.get(G);
        if (B.color.copy(G.color).multiplyScalar(G.intensity), B.distance = G.distance, B.decay = G.decay, G.castShadow) {
          const ae = G.shadow, ce = t.get(G);
          ce.shadowIntensity = ae.intensity, ce.shadowBias = ae.bias, ce.shadowNormalBias = ae.normalBias, ce.shadowRadius = ae.radius, ce.shadowMapSize = ae.mapSize, ce.shadowCameraNear = ae.camera.near, ce.shadowCameraFar = ae.camera.far, n.pointShadow[m] = ce, n.pointShadowMap[m] = V, n.pointShadowMatrix[m] = G.shadow.matrix, _++;
        }
        n.point[m] = B, m++;
      } else if (G.isHemisphereLight) {
        const B = e.get(G);
        B.skyColor.copy(G.color).multiplyScalar(re), B.groundColor.copy(G.groundColor).multiplyScalar(re), n.hemi[M] = B, M++;
      }
    }
    y > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = we.LTC_FLOAT_1, n.rectAreaLTC2 = we.LTC_FLOAT_2) : (n.rectAreaLTC1 = we.LTC_HALF_1, n.rectAreaLTC2 = we.LTC_HALF_2)), n.ambient[0] = c, n.ambient[1] = u, n.ambient[2] = d;
    const N = n.hash;
    N.directionalLength === f && N.pointLength === m && N.spotLength === v && N.rectAreaLength === y && N.hemiLength === M && N.numDirectionalShadows === b && N.numPointShadows === _ && N.numSpotShadows === T && N.numSpotMaps === w && N.numLightProbes === U || (n.directional.length = f, n.spot.length = v, n.rectArea.length = y, n.point.length = m, n.hemi.length = M, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = _, n.pointShadowMap.length = _, n.spotShadow.length = T, n.spotShadowMap.length = T, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = _, n.spotLightMatrix.length = T + w - E, n.spotLightMap.length = w, n.numSpotLightShadowsWithMaps = E, n.numLightProbes = U, N.directionalLength = f, N.pointLength = m, N.spotLength = v, N.rectAreaLength = y, N.hemiLength = M, N.numDirectionalShadows = b, N.numPointShadows = _, N.numSpotShadows = T, N.numSpotMaps = w, N.numLightProbes = U, n.version = u_++);
  }, setupView: function(h, c) {
    let u = 0, d = 0, f = 0, m = 0, v = 0;
    const y = c.matrixWorldInverse;
    for (let M = 0, b = h.length; M < b; M++) {
      const _ = h[M];
      if (_.isDirectionalLight) {
        const T = n.directional[u];
        T.direction.setFromMatrixPosition(_.matrixWorld), r.setFromMatrixPosition(_.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(y), u++;
      } else if (_.isSpotLight) {
        const T = n.spot[f];
        T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(y), T.direction.setFromMatrixPosition(_.matrixWorld), r.setFromMatrixPosition(_.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(y), f++;
      } else if (_.isRectAreaLight) {
        const T = n.rectArea[m];
        T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(y), s.identity(), o.copy(_.matrixWorld), o.premultiply(y), s.extractRotation(o), T.halfWidth.set(0.5 * _.width, 0, 0), T.halfHeight.set(0, 0.5 * _.height, 0), T.halfWidth.applyMatrix4(s), T.halfHeight.applyMatrix4(s), m++;
      } else if (_.isPointLight) {
        const T = n.point[d];
        T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(y), d++;
      } else if (_.isHemisphereLight) {
        const T = n.hemi[v];
        T.direction.setFromMatrixPosition(_.matrixWorld), T.direction.transformDirection(y), v++;
      }
    }
  }, state: n };
}
function du(i) {
  const e = new p_(i), t = [], n = [], r = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: function(o) {
    r.camera = o, t.length = 0, n.length = 0;
  }, state: r, setupLights: function() {
    e.setup(t);
  }, setupLightsView: function(o) {
    e.setupView(t, o);
  }, pushLight: function(o) {
    t.push(o);
  }, pushShadow: function(o) {
    n.push(o);
  } };
}
function f_(i) {
  let e = /* @__PURE__ */ new WeakMap();
  return { get: function(t, n = 0) {
    const r = e.get(t);
    let o;
    return r === void 0 ? (o = new du(i), e.set(t, [o])) : n >= r.length ? (o = new du(i), r.push(o)) : o = r[n], o;
  }, dispose: function() {
    e = /* @__PURE__ */ new WeakMap();
  } };
}
class m_ extends Kr {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class g_ extends Kr {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function __(i, e, t) {
  let n = new ju();
  const r = new We(), o = new We(), s = new Mt(), h = new m_({ depthPacking: 3201 }), c = new g_(), u = {}, d = t.maxTextureSize, f = { 0: 1, 1: 0, 2: 2 }, m = new qn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new We() }, radius: { value: 4 } }, vertexShader: `void main() {
	gl_Position = vec4( position, 1.0 );
}`, fragmentShader: `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}` }), v = m.clone();
  v.defines.HORIZONTAL_PASS = 1;
  const y = new Un();
  y.setAttribute("position", new Ln(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const M = new Tn(y, m), b = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let _ = this.type;
  function T(N, O) {
    const te = e.update(M);
    m.defines.VSM_SAMPLES !== N.blurSamples && (m.defines.VSM_SAMPLES = N.blurSamples, v.defines.VSM_SAMPLES = N.blurSamples, m.needsUpdate = !0, v.needsUpdate = !0), N.mapPass === null && (N.mapPass = new fr(r.x, r.y)), m.uniforms.shadow_pass.value = N.map.texture, m.uniforms.resolution.value = N.mapSize, m.uniforms.radius.value = N.radius, i.setRenderTarget(N.mapPass), i.clear(), i.renderBufferDirect(O, null, te, m, M, null), v.uniforms.shadow_pass.value = N.mapPass.texture, v.uniforms.resolution.value = N.mapSize, v.uniforms.radius.value = N.radius, i.setRenderTarget(N.map), i.clear(), i.renderBufferDirect(O, null, te, v, M, null);
  }
  function w(N, O, te, G) {
    let Z = null;
    const re = te.isPointLight === !0 ? N.customDistanceMaterial : N.customDepthMaterial;
    if (re !== void 0) Z = re;
    else if (Z = te.isPointLight === !0 ? c : h, i.localClippingEnabled && O.clipShadows === !0 && Array.isArray(O.clippingPlanes) && O.clippingPlanes.length !== 0 || O.displacementMap && O.displacementScale !== 0 || O.alphaMap && O.alphaTest > 0 || O.map && O.alphaTest > 0) {
      const F = Z.uuid, V = O.uuid;
      let B = u[F];
      B === void 0 && (B = {}, u[F] = B);
      let ae = B[V];
      ae === void 0 && (ae = Z.clone(), B[V] = ae, O.addEventListener("dispose", U)), Z = ae;
    }
    return Z.visible = O.visible, Z.wireframe = O.wireframe, Z.side = G === 3 ? O.shadowSide !== null ? O.shadowSide : O.side : O.shadowSide !== null ? O.shadowSide : f[O.side], Z.alphaMap = O.alphaMap, Z.alphaTest = O.alphaTest, Z.map = O.map, Z.clipShadows = O.clipShadows, Z.clippingPlanes = O.clippingPlanes, Z.clipIntersection = O.clipIntersection, Z.displacementMap = O.displacementMap, Z.displacementScale = O.displacementScale, Z.displacementBias = O.displacementBias, Z.wireframeLinewidth = O.wireframeLinewidth, Z.linewidth = O.linewidth, te.isPointLight === !0 && Z.isMeshDistanceMaterial === !0 && (i.properties.get(Z).light = te), Z;
  }
  function E(N, O, te, G, Z) {
    if (N.visible === !1) return;
    if (N.layers.test(O.layers) && (N.isMesh || N.isLine || N.isPoints) && (N.castShadow || N.receiveShadow && Z === 3) && (!N.frustumCulled || n.intersectsObject(N))) {
      N.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse, N.matrixWorld);
      const F = e.update(N), V = N.material;
      if (Array.isArray(V)) {
        const B = F.groups;
        for (let ae = 0, ce = B.length; ae < ce; ae++) {
          const ue = B[ae], ge = V[ue.materialIndex];
          if (ge && ge.visible) {
            const Ee = w(N, ge, G, Z);
            N.onBeforeShadow(i, N, O, te, F, Ee, ue), i.renderBufferDirect(te, null, F, Ee, N, ue), N.onAfterShadow(i, N, O, te, F, Ee, ue);
          }
        }
      } else if (V.visible) {
        const B = w(N, V, G, Z);
        N.onBeforeShadow(i, N, O, te, F, B, null), i.renderBufferDirect(te, null, F, B, N, null), N.onAfterShadow(i, N, O, te, F, B, null);
      }
    }
    const re = N.children;
    for (let F = 0, V = re.length; F < V; F++) E(re[F], O, te, G, Z);
  }
  function U(N) {
    N.target.removeEventListener("dispose", U);
    for (const O in u) {
      const te = u[O], G = N.target.uuid;
      G in te && (te[G].dispose(), delete te[G]);
    }
  }
  this.render = function(N, O, te) {
    if (b.enabled === !1 || b.autoUpdate === !1 && b.needsUpdate === !1 || N.length === 0) return;
    const G = i.getRenderTarget(), Z = i.getActiveCubeFace(), re = i.getActiveMipmapLevel(), F = i.state;
    F.setBlending(0), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    const V = _ !== 3 && this.type === 3, B = _ === 3 && this.type !== 3;
    for (let ae = 0, ce = N.length; ae < ce; ae++) {
      const ue = N[ae], ge = ue.shadow;
      if (ge === void 0) {
        console.warn("THREE.WebGLShadowMap:", ue, "has no shadow.");
        continue;
      }
      if (ge.autoUpdate === !1 && ge.needsUpdate === !1) continue;
      r.copy(ge.mapSize);
      const Ee = ge.getFrameExtents();
      if (r.multiply(Ee), o.copy(ge.mapSize), (r.x > d || r.y > d) && (r.x > d && (o.x = Math.floor(d / Ee.x), r.x = o.x * Ee.x, ge.mapSize.x = o.x), r.y > d && (o.y = Math.floor(d / Ee.y), r.y = o.y * Ee.y, ge.mapSize.y = o.y)), ge.map === null || V === !0 || B === !0) {
        const le = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        ge.map !== null && ge.map.dispose(), ge.map = new fr(r.x, r.y, le), ge.map.texture.name = ue.name + ".shadowMap", ge.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(ge.map), i.clear();
      const xe = ge.getViewportCount();
      for (let le = 0; le < xe; le++) {
        const de = ge.getViewport(le);
        s.set(o.x * de.x, o.y * de.y, o.x * de.z, o.y * de.w), F.viewport(s), ge.updateMatrices(ue, le), n = ge.getFrustum(), E(O, te, ge.camera, ue, this.type);
      }
      ge.isPointLightShadow !== !0 && this.type === 3 && T(ge, te), ge.needsUpdate = !1;
    }
    _ = this.type, b.needsUpdate = !1, i.setRenderTarget(G, Z, re);
  };
}
const v_ = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
function y_(i) {
  const e = new function() {
    let D = !1;
    const K = new Mt();
    let $ = null;
    const _e = new Mt(0, 0, 0, 0);
    return { setMask: function(ne) {
      $ === ne || D || (i.colorMask(ne, ne, ne, ne), $ = ne);
    }, setLocked: function(ne) {
      D = ne;
    }, setClear: function(ne, pe, ye, me, Re) {
      Re === !0 && (ne *= me, pe *= me, ye *= me), K.set(ne, pe, ye, me), _e.equals(K) === !1 && (i.clearColor(ne, pe, ye, me), _e.copy(K));
    }, reset: function() {
      D = !1, $ = null, _e.set(-1, 0, 0, 0);
    } };
  }(), t = new function() {
    let D = !1, K = !1, $ = null, _e = null, ne = null;
    return { setReversed: function(pe) {
      K = pe;
    }, setTest: function(pe) {
      pe ? Se(i.DEPTH_TEST) : Te(i.DEPTH_TEST);
    }, setMask: function(pe) {
      $ === pe || D || (i.depthMask(pe), $ = pe);
    }, setFunc: function(pe) {
      if (K && (pe = v_[pe]), _e !== pe) {
        switch (pe) {
          case 0:
            i.depthFunc(i.NEVER);
            break;
          case 1:
            i.depthFunc(i.ALWAYS);
            break;
          case 2:
            i.depthFunc(i.LESS);
            break;
          case 3:
          default:
            i.depthFunc(i.LEQUAL);
            break;
          case 4:
            i.depthFunc(i.EQUAL);
            break;
          case 5:
            i.depthFunc(i.GEQUAL);
            break;
          case 6:
            i.depthFunc(i.GREATER);
            break;
          case 7:
            i.depthFunc(i.NOTEQUAL);
        }
        _e = pe;
      }
    }, setLocked: function(pe) {
      D = pe;
    }, setClear: function(pe) {
      ne !== pe && (i.clearDepth(pe), ne = pe);
    }, reset: function() {
      D = !1, $ = null, _e = null, ne = null;
    } };
  }(), n = new function() {
    let D = !1, K = null, $ = null, _e = null, ne = null, pe = null, ye = null, me = null, Re = null;
    return { setTest: function(Pe) {
      D || (Pe ? Se(i.STENCIL_TEST) : Te(i.STENCIL_TEST));
    }, setMask: function(Pe) {
      K === Pe || D || (i.stencilMask(Pe), K = Pe);
    }, setFunc: function(Pe, Ne, je) {
      $ === Pe && _e === Ne && ne === je || (i.stencilFunc(Pe, Ne, je), $ = Pe, _e = Ne, ne = je);
    }, setOp: function(Pe, Ne, je) {
      pe === Pe && ye === Ne && me === je || (i.stencilOp(Pe, Ne, je), pe = Pe, ye = Ne, me = je);
    }, setLocked: function(Pe) {
      D = Pe;
    }, setClear: function(Pe) {
      Re !== Pe && (i.clearStencil(Pe), Re = Pe);
    }, reset: function() {
      D = !1, K = null, $ = null, _e = null, ne = null, pe = null, ye = null, me = null, Re = null;
    } };
  }(), r = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  let s = {}, h = {}, c = /* @__PURE__ */ new WeakMap(), u = [], d = null, f = !1, m = null, v = null, y = null, M = null, b = null, _ = null, T = null, w = new lt(0, 0, 0), E = 0, U = !1, N = null, O = null, te = null, G = null, Z = null;
  const re = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let F = !1, V = 0;
  const B = i.getParameter(i.VERSION);
  B.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL (\d)/.exec(B)[1]), F = V >= 1) : B.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL ES (\d)/.exec(B)[1]), F = V >= 2);
  let ae = null, ce = {};
  const ue = i.getParameter(i.SCISSOR_BOX), ge = i.getParameter(i.VIEWPORT), Ee = new Mt().fromArray(ue), xe = new Mt().fromArray(ge);
  function le(D, K, $, _e) {
    const ne = new Uint8Array(4), pe = i.createTexture();
    i.bindTexture(D, pe), i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let ye = 0; ye < $; ye++) D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(K, 0, i.RGBA, 1, 1, _e, 0, i.RGBA, i.UNSIGNED_BYTE, ne) : i.texImage2D(K + ye, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ne);
    return pe;
  }
  const de = {};
  function Se(D) {
    s[D] !== !0 && (i.enable(D), s[D] = !0);
  }
  function Te(D) {
    s[D] !== !1 && (i.disable(D), s[D] = !1);
  }
  de[i.TEXTURE_2D] = le(i.TEXTURE_2D, i.TEXTURE_2D, 1), de[i.TEXTURE_CUBE_MAP] = le(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), de[i.TEXTURE_2D_ARRAY] = le(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), de[i.TEXTURE_3D] = le(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), e.setClear(0, 0, 0, 1), t.setClear(1), n.setClear(0), Se(i.DEPTH_TEST), t.setFunc(3), Q(!1), W(1), Se(i.CULL_FACE), j(0);
  const L = { 100: i.FUNC_ADD, 101: i.FUNC_SUBTRACT, 102: i.FUNC_REVERSE_SUBTRACT };
  L[103] = i.MIN, L[104] = i.MAX;
  const A = { 200: i.ZERO, 201: i.ONE, 202: i.SRC_COLOR, 204: i.SRC_ALPHA, 210: i.SRC_ALPHA_SATURATE, 208: i.DST_COLOR, 206: i.DST_ALPHA, 203: i.ONE_MINUS_SRC_COLOR, 205: i.ONE_MINUS_SRC_ALPHA, 209: i.ONE_MINUS_DST_COLOR, 207: i.ONE_MINUS_DST_ALPHA, 211: i.CONSTANT_COLOR, 212: i.ONE_MINUS_CONSTANT_COLOR, 213: i.CONSTANT_ALPHA, 214: i.ONE_MINUS_CONSTANT_ALPHA };
  function j(D, K, $, _e, ne, pe, ye, me, Re, Pe) {
    if (D !== 0) {
      if (f === !1 && (Se(i.BLEND), f = !0), D === 5) ne = ne || K, pe = pe || $, ye = ye || _e, K === v && ne === b || (i.blendEquationSeparate(L[K], L[ne]), v = K, b = ne), $ === y && _e === M && pe === _ && ye === T || (i.blendFuncSeparate(A[$], A[_e], A[pe], A[ye]), y = $, M = _e, _ = pe, T = ye), me.equals(w) !== !1 && Re === E || (i.blendColor(me.r, me.g, me.b, Re), w.copy(me), E = Re), m = D, U = !1;
      else if (D !== m || Pe !== U) {
        if (v === 100 && b === 100 || (i.blendEquation(i.FUNC_ADD), v = 100, b = 100), Pe) switch (D) {
          case 1:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case 3:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case 4:
            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
        }
        else switch (D) {
          case 1:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            i.blendFunc(i.SRC_ALPHA, i.ONE);
            break;
          case 3:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case 4:
            i.blendFunc(i.ZERO, i.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
        }
        y = null, M = null, _ = null, T = null, w.set(0, 0, 0), E = 0, m = D, U = Pe;
      }
    } else f === !0 && (Te(i.BLEND), f = !1);
  }
  function Q(D) {
    N !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), N = D);
  }
  function W(D) {
    D !== 0 ? (Se(i.CULL_FACE), D !== O && (D === 1 ? i.cullFace(i.BACK) : D === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Te(i.CULL_FACE), O = D;
  }
  function q(D, K, $) {
    D ? (Se(i.POLYGON_OFFSET_FILL), G === K && Z === $ || (i.polygonOffset(K, $), G = K, Z = $)) : Te(i.POLYGON_OFFSET_FILL);
  }
  return { buffers: { color: e, depth: t, stencil: n }, enable: Se, disable: Te, bindFramebuffer: function(D, K) {
    return h[D] !== K && (i.bindFramebuffer(D, K), h[D] = K, D === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = K), D === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = K), !0);
  }, drawBuffers: function(D, K) {
    let $ = u, _e = !1;
    if (D) {
      $ = c.get(K), $ === void 0 && ($ = [], c.set(K, $));
      const ne = D.textures;
      if ($.length !== ne.length || $[0] !== i.COLOR_ATTACHMENT0) {
        for (let pe = 0, ye = ne.length; pe < ye; pe++) $[pe] = i.COLOR_ATTACHMENT0 + pe;
        $.length = ne.length, _e = !0;
      }
    } else $[0] !== i.BACK && ($[0] = i.BACK, _e = !0);
    _e && i.drawBuffers($);
  }, useProgram: function(D) {
    return d !== D && (i.useProgram(D), d = D, !0);
  }, setBlending: j, setMaterial: function(D, K) {
    D.side === 2 ? Te(i.CULL_FACE) : Se(i.CULL_FACE);
    let $ = D.side === 1;
    K && ($ = !$), Q($), D.blending === 1 && D.transparent === !1 ? j(0) : j(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), t.setFunc(D.depthFunc), t.setTest(D.depthTest), t.setMask(D.depthWrite), e.setMask(D.colorWrite);
    const _e = D.stencilWrite;
    n.setTest(_e), _e && (n.setMask(D.stencilWriteMask), n.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), n.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), q(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? Se(i.SAMPLE_ALPHA_TO_COVERAGE) : Te(i.SAMPLE_ALPHA_TO_COVERAGE);
  }, setFlipSided: Q, setCullFace: W, setLineWidth: function(D) {
    D !== te && (F && i.lineWidth(D), te = D);
  }, setPolygonOffset: q, setScissorTest: function(D) {
    D ? Se(i.SCISSOR_TEST) : Te(i.SCISSOR_TEST);
  }, activeTexture: function(D) {
    D === void 0 && (D = i.TEXTURE0 + re - 1), ae !== D && (i.activeTexture(D), ae = D);
  }, bindTexture: function(D, K, $) {
    $ === void 0 && ($ = ae === null ? i.TEXTURE0 + re - 1 : ae);
    let _e = ce[$];
    _e === void 0 && (_e = { type: void 0, texture: void 0 }, ce[$] = _e), _e.type === D && _e.texture === K || (ae !== $ && (i.activeTexture($), ae = $), i.bindTexture(D, K || de[D]), _e.type = D, _e.texture = K);
  }, unbindTexture: function() {
    const D = ce[ae];
    D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }, compressedTexImage2D: function() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, compressedTexImage3D: function() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, texImage2D: function() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, texImage3D: function() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, updateUBOMapping: function(D, K) {
    let $ = o.get(K);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), o.set(K, $));
    let _e = $.get(D);
    _e === void 0 && (_e = i.getUniformBlockIndex(K, D.name), $.set(D, _e));
  }, uniformBlockBinding: function(D, K) {
    const $ = o.get(K).get(D);
    r.get(K) !== $ && (i.uniformBlockBinding(K, $, D.__bindingPointIndex), r.set(K, $));
  }, texStorage2D: function() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, texStorage3D: function() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, texSubImage2D: function() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, texSubImage3D: function() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, compressedTexSubImage2D: function() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, compressedTexSubImage3D: function() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }, scissor: function(D) {
    Ee.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), Ee.copy(D));
  }, viewport: function(D) {
    xe.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), xe.copy(D));
  }, reset: function() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), s = {}, ae = null, ce = {}, h = {}, c = /* @__PURE__ */ new WeakMap(), u = [], d = null, f = !1, m = null, v = null, y = null, M = null, b = null, _ = null, T = null, w = new lt(0, 0, 0), E = 0, U = !1, N = null, O = null, te = null, G = null, Z = null, Ee.set(0, 0, i.canvas.width, i.canvas.height), xe.set(0, 0, i.canvas.width, i.canvas.height), e.reset(), t.reset(), n.reset();
  } };
}
function pu(i, e, t, n) {
  const r = function(o) {
    switch (o) {
      case 1009:
      case 1010:
        return { byteLength: 1, components: 1 };
      case 1012:
      case 1011:
      case 1016:
        return { byteLength: 2, components: 1 };
      case 1017:
      case 1018:
        return { byteLength: 2, components: 4 };
      case 1014:
      case 1013:
      case 1015:
        return { byteLength: 4, components: 1 };
      case 35902:
        return { byteLength: 4, components: 3 };
    }
    throw new Error(`Unknown texture type ${o}.`);
  }(n);
  switch (t) {
    case 1021:
    case 1024:
      return i * e;
    case 1025:
      return i * e * 2;
    case 1028:
    case 1029:
      return i * e / r.components * r.byteLength;
    case 1030:
    case 1031:
      return i * e * 2 / r.components * r.byteLength;
    case 1022:
      return i * e * 3 / r.components * r.byteLength;
    case 1023:
    case 1033:
      return i * e * 4 / r.components * r.byteLength;
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case 36196:
    case 37492:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function x_(i, e, t, n, r, o, s) {
  const h = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator < "u" && /OculusBrowser/g.test(navigator.userAgent), u = new We(), d = /* @__PURE__ */ new WeakMap();
  let f;
  const m = /* @__PURE__ */ new WeakMap();
  let v = !1;
  try {
    v = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function y(L, A) {
    return v ? new OffscreenCanvas(L, A) : xa("canvas");
  }
  function M(L, A, j) {
    let Q = 1;
    const W = Te(L);
    if ((W.width > j || W.height > j) && (Q = j / Math.max(W.width, W.height)), Q < 1) {
      if (typeof HTMLImageElement < "u" && L instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && L instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && L instanceof ImageBitmap || typeof VideoFrame < "u" && L instanceof VideoFrame) {
        const q = Math.floor(Q * W.width), D = Math.floor(Q * W.height);
        f === void 0 && (f = y(q, D));
        const K = A ? y(q, D) : f;
        return K.width = q, K.height = D, K.getContext("2d").drawImage(L, 0, 0, q, D), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + W.width + "x" + W.height + ") to (" + q + "x" + D + ")."), K;
      }
      return "data" in L && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + W.width + "x" + W.height + ")."), L;
    }
    return L;
  }
  function b(L) {
    return L.generateMipmaps && L.minFilter !== 1003 && L.minFilter !== 1006;
  }
  function _(L) {
    i.generateMipmap(L);
  }
  function T(L, A, j, Q, W = !1) {
    if (L !== null) {
      if (i[L] !== void 0) return i[L];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + L + "'");
    }
    let q = A;
    if (A === i.RED && (j === i.FLOAT && (q = i.R32F), j === i.HALF_FLOAT && (q = i.R16F), j === i.UNSIGNED_BYTE && (q = i.R8)), A === i.RED_INTEGER && (j === i.UNSIGNED_BYTE && (q = i.R8UI), j === i.UNSIGNED_SHORT && (q = i.R16UI), j === i.UNSIGNED_INT && (q = i.R32UI), j === i.BYTE && (q = i.R8I), j === i.SHORT && (q = i.R16I), j === i.INT && (q = i.R32I)), A === i.RG && (j === i.FLOAT && (q = i.RG32F), j === i.HALF_FLOAT && (q = i.RG16F), j === i.UNSIGNED_BYTE && (q = i.RG8)), A === i.RG_INTEGER && (j === i.UNSIGNED_BYTE && (q = i.RG8UI), j === i.UNSIGNED_SHORT && (q = i.RG16UI), j === i.UNSIGNED_INT && (q = i.RG32UI), j === i.BYTE && (q = i.RG8I), j === i.SHORT && (q = i.RG16I), j === i.INT && (q = i.RG32I)), A === i.RGB_INTEGER && (j === i.UNSIGNED_BYTE && (q = i.RGB8UI), j === i.UNSIGNED_SHORT && (q = i.RGB16UI), j === i.UNSIGNED_INT && (q = i.RGB32UI), j === i.BYTE && (q = i.RGB8I), j === i.SHORT && (q = i.RGB16I), j === i.INT && (q = i.RGB32I)), A === i.RGBA_INTEGER && (j === i.UNSIGNED_BYTE && (q = i.RGBA8UI), j === i.UNSIGNED_SHORT && (q = i.RGBA16UI), j === i.UNSIGNED_INT && (q = i.RGBA32UI), j === i.BYTE && (q = i.RGBA8I), j === i.SHORT && (q = i.RGBA16I), j === i.INT && (q = i.RGBA32I)), A === i.RGB && j === i.UNSIGNED_INT_5_9_9_9_REV && (q = i.RGB9_E5), A === i.RGBA) {
      const D = W ? Mo : dt.getTransfer(Q);
      j === i.FLOAT && (q = i.RGBA32F), j === i.HALF_FLOAT && (q = i.RGBA16F), j === i.UNSIGNED_BYTE && (q = D === wt ? i.SRGB8_ALPHA8 : i.RGBA8), j === i.UNSIGNED_SHORT_4_4_4_4 && (q = i.RGBA4), j === i.UNSIGNED_SHORT_5_5_5_1 && (q = i.RGB5_A1);
    }
    return q !== i.R16F && q !== i.R32F && q !== i.RG16F && q !== i.RG32F && q !== i.RGBA16F && q !== i.RGBA32F || e.get("EXT_color_buffer_float"), q;
  }
  function w(L, A) {
    let j;
    return L ? A === null || A === 1014 || A === 1020 ? j = i.DEPTH24_STENCIL8 : A === 1015 ? j = i.DEPTH32F_STENCIL8 : A === 1012 && (j = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : A === null || A === 1014 || A === 1020 ? j = i.DEPTH_COMPONENT24 : A === 1015 ? j = i.DEPTH_COMPONENT32F : A === 1012 && (j = i.DEPTH_COMPONENT16), j;
  }
  function E(L, A) {
    return b(L) === !0 || L.isFramebufferTexture && L.minFilter !== 1003 && L.minFilter !== 1006 ? Math.log2(Math.max(A.width, A.height)) + 1 : L.mipmaps !== void 0 && L.mipmaps.length > 0 ? L.mipmaps.length : L.isCompressedTexture && Array.isArray(L.image) ? A.mipmaps.length : 1;
  }
  function U(L) {
    const A = L.target;
    A.removeEventListener("dispose", U), function(j) {
      const Q = n.get(j);
      if (Q.__webglInit === void 0) return;
      const W = j.source, q = m.get(W);
      if (q) {
        const D = q[Q.__cacheKey];
        D.usedTimes--, D.usedTimes === 0 && O(j), Object.keys(q).length === 0 && m.delete(W);
      }
      n.remove(j);
    }(A), A.isVideoTexture && d.delete(A);
  }
  function N(L) {
    const A = L.target;
    A.removeEventListener("dispose", N), function(j) {
      const Q = n.get(j);
      if (j.depthTexture && j.depthTexture.dispose(), j.isWebGLCubeRenderTarget) for (let q = 0; q < 6; q++) {
        if (Array.isArray(Q.__webglFramebuffer[q])) for (let D = 0; D < Q.__webglFramebuffer[q].length; D++) i.deleteFramebuffer(Q.__webglFramebuffer[q][D]);
        else i.deleteFramebuffer(Q.__webglFramebuffer[q]);
        Q.__webglDepthbuffer && i.deleteRenderbuffer(Q.__webglDepthbuffer[q]);
      }
      else {
        if (Array.isArray(Q.__webglFramebuffer)) for (let q = 0; q < Q.__webglFramebuffer.length; q++) i.deleteFramebuffer(Q.__webglFramebuffer[q]);
        else i.deleteFramebuffer(Q.__webglFramebuffer);
        if (Q.__webglDepthbuffer && i.deleteRenderbuffer(Q.__webglDepthbuffer), Q.__webglMultisampledFramebuffer && i.deleteFramebuffer(Q.__webglMultisampledFramebuffer), Q.__webglColorRenderbuffer) for (let q = 0; q < Q.__webglColorRenderbuffer.length; q++) Q.__webglColorRenderbuffer[q] && i.deleteRenderbuffer(Q.__webglColorRenderbuffer[q]);
        Q.__webglDepthRenderbuffer && i.deleteRenderbuffer(Q.__webglDepthRenderbuffer);
      }
      const W = j.textures;
      for (let q = 0, D = W.length; q < D; q++) {
        const K = n.get(W[q]);
        K.__webglTexture && (i.deleteTexture(K.__webglTexture), s.memory.textures--), n.remove(W[q]);
      }
      n.remove(j);
    }(A);
  }
  function O(L) {
    const A = n.get(L);
    i.deleteTexture(A.__webglTexture);
    const j = L.source;
    delete m.get(j)[A.__cacheKey], s.memory.textures--;
  }
  let te = 0;
  function G(L, A) {
    const j = n.get(L);
    if (L.isVideoTexture && function(Q) {
      const W = s.render.frame;
      d.get(Q) !== W && (d.set(Q, W), Q.update());
    }(L), L.isRenderTargetTexture === !1 && L.version > 0 && j.__version !== L.version) {
      const Q = L.image;
      if (Q === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else {
        if (Q.complete !== !1) return void ae(j, L, A);
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      }
    }
    t.bindTexture(i.TEXTURE_2D, j.__webglTexture, i.TEXTURE0 + A);
  }
  const Z = { 1e3: i.REPEAT, 1001: i.CLAMP_TO_EDGE, 1002: i.MIRRORED_REPEAT }, re = { 1003: i.NEAREST, 1004: i.NEAREST_MIPMAP_NEAREST, 1005: i.NEAREST_MIPMAP_LINEAR, 1006: i.LINEAR, 1007: i.LINEAR_MIPMAP_NEAREST, 1008: i.LINEAR_MIPMAP_LINEAR }, F = { 512: i.NEVER, 519: i.ALWAYS, 513: i.LESS, 515: i.LEQUAL, 514: i.EQUAL, 518: i.GEQUAL, 516: i.GREATER, 517: i.NOTEQUAL };
  function V(L, A) {
    if (A.type !== 1015 || e.has("OES_texture_float_linear") !== !1 || A.magFilter !== 1006 && A.magFilter !== 1007 && A.magFilter !== 1005 && A.magFilter !== 1008 && A.minFilter !== 1006 && A.minFilter !== 1007 && A.minFilter !== 1005 && A.minFilter !== 1008 || console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(L, i.TEXTURE_WRAP_S, Z[A.wrapS]), i.texParameteri(L, i.TEXTURE_WRAP_T, Z[A.wrapT]), L !== i.TEXTURE_3D && L !== i.TEXTURE_2D_ARRAY || i.texParameteri(L, i.TEXTURE_WRAP_R, Z[A.wrapR]), i.texParameteri(L, i.TEXTURE_MAG_FILTER, re[A.magFilter]), i.texParameteri(L, i.TEXTURE_MIN_FILTER, re[A.minFilter]), A.compareFunction && (i.texParameteri(L, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(L, i.TEXTURE_COMPARE_FUNC, F[A.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (A.magFilter === 1003 || A.minFilter !== 1005 && A.minFilter !== 1008 || A.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (A.anisotropy > 1 || n.get(A).__currentAnisotropy) {
        const j = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(L, j.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(A.anisotropy, r.getMaxAnisotropy())), n.get(A).__currentAnisotropy = A.anisotropy;
      }
    }
  }
  function B(L, A) {
    let j = !1;
    L.__webglInit === void 0 && (L.__webglInit = !0, A.addEventListener("dispose", U));
    const Q = A.source;
    let W = m.get(Q);
    W === void 0 && (W = {}, m.set(Q, W));
    const q = function(D) {
      const K = [];
      return K.push(D.wrapS), K.push(D.wrapT), K.push(D.wrapR || 0), K.push(D.magFilter), K.push(D.minFilter), K.push(D.anisotropy), K.push(D.internalFormat), K.push(D.format), K.push(D.type), K.push(D.generateMipmaps), K.push(D.premultiplyAlpha), K.push(D.flipY), K.push(D.unpackAlignment), K.push(D.colorSpace), K.join();
    }(A);
    if (q !== L.__cacheKey) {
      W[q] === void 0 && (W[q] = { texture: i.createTexture(), usedTimes: 0 }, s.memory.textures++, j = !0), W[q].usedTimes++;
      const D = W[L.__cacheKey];
      D !== void 0 && (W[L.__cacheKey].usedTimes--, D.usedTimes === 0 && O(A)), L.__cacheKey = q, L.__webglTexture = W[q].texture;
    }
    return j;
  }
  function ae(L, A, j) {
    let Q = i.TEXTURE_2D;
    (A.isDataArrayTexture || A.isCompressedArrayTexture) && (Q = i.TEXTURE_2D_ARRAY), A.isData3DTexture && (Q = i.TEXTURE_3D);
    const W = B(L, A), q = A.source;
    t.bindTexture(Q, L.__webglTexture, i.TEXTURE0 + j);
    const D = n.get(q);
    if (q.version !== D.__version || W === !0) {
      t.activeTexture(i.TEXTURE0 + j);
      const K = dt.getPrimaries(dt.workingColorSpace), $ = A.colorSpace === zr ? null : dt.getPrimaries(A.colorSpace), _e = A.colorSpace === zr || K === $ ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, A.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, A.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, _e);
      let ne = M(A.image, !1, r.maxTextureSize);
      ne = Se(A, ne);
      const pe = o.convert(A.format, A.colorSpace), ye = o.convert(A.type);
      let me, Re = T(A.internalFormat, pe, ye, A.colorSpace, A.isVideoTexture);
      V(Q, A);
      const Pe = A.mipmaps, Ne = A.isVideoTexture !== !0, je = D.__version === void 0 || W === !0, Xe = q.dataReady, $e = E(A, ne);
      if (A.isDepthTexture) Re = w(A.format === 1027, A.type), je && (Ne ? t.texStorage2D(i.TEXTURE_2D, 1, Re, ne.width, ne.height) : t.texImage2D(i.TEXTURE_2D, 0, Re, ne.width, ne.height, 0, pe, ye, null));
      else if (A.isDataTexture) if (Pe.length > 0) {
        Ne && je && t.texStorage2D(i.TEXTURE_2D, $e, Re, Pe[0].width, Pe[0].height);
        for (let Ue = 0, Ye = Pe.length; Ue < Ye; Ue++) me = Pe[Ue], Ne ? Xe && t.texSubImage2D(i.TEXTURE_2D, Ue, 0, 0, me.width, me.height, pe, ye, me.data) : t.texImage2D(i.TEXTURE_2D, Ue, Re, me.width, me.height, 0, pe, ye, me.data);
        A.generateMipmaps = !1;
      } else Ne ? (je && t.texStorage2D(i.TEXTURE_2D, $e, Re, ne.width, ne.height), Xe && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ne.width, ne.height, pe, ye, ne.data)) : t.texImage2D(i.TEXTURE_2D, 0, Re, ne.width, ne.height, 0, pe, ye, ne.data);
      else if (A.isCompressedTexture) if (A.isCompressedArrayTexture) {
        Ne && je && t.texStorage3D(i.TEXTURE_2D_ARRAY, $e, Re, Pe[0].width, Pe[0].height, ne.depth);
        for (let Ue = 0, Ye = Pe.length; Ue < Ye; Ue++) if (me = Pe[Ue], A.format !== 1023) if (pe !== null) if (Ne) {
          if (Xe) if (A.layerUpdates.size > 0) {
            const at = pu(me.width, me.height, A.format, A.type);
            for (const ht of A.layerUpdates) {
              const De = me.data.subarray(ht * at / me.data.BYTES_PER_ELEMENT, (ht + 1) * at / me.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Ue, 0, 0, ht, me.width, me.height, 1, pe, De, 0, 0);
            }
            A.clearLayerUpdates();
          } else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Ue, 0, 0, 0, me.width, me.height, ne.depth, pe, me.data, 0, 0);
        } else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Ue, Re, me.width, me.height, ne.depth, 0, me.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Ne ? Xe && t.texSubImage3D(i.TEXTURE_2D_ARRAY, Ue, 0, 0, 0, me.width, me.height, ne.depth, pe, ye, me.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, Ue, Re, me.width, me.height, ne.depth, 0, pe, ye, me.data);
      } else {
        Ne && je && t.texStorage2D(i.TEXTURE_2D, $e, Re, Pe[0].width, Pe[0].height);
        for (let Ue = 0, Ye = Pe.length; Ue < Ye; Ue++) me = Pe[Ue], A.format !== 1023 ? pe !== null ? Ne ? Xe && t.compressedTexSubImage2D(i.TEXTURE_2D, Ue, 0, 0, me.width, me.height, pe, me.data) : t.compressedTexImage2D(i.TEXTURE_2D, Ue, Re, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ne ? Xe && t.texSubImage2D(i.TEXTURE_2D, Ue, 0, 0, me.width, me.height, pe, ye, me.data) : t.texImage2D(i.TEXTURE_2D, Ue, Re, me.width, me.height, 0, pe, ye, me.data);
      }
      else if (A.isDataArrayTexture) if (Ne) {
        if (je && t.texStorage3D(i.TEXTURE_2D_ARRAY, $e, Re, ne.width, ne.height, ne.depth), Xe) if (A.layerUpdates.size > 0) {
          const Ue = pu(ne.width, ne.height, A.format, A.type);
          for (const Ye of A.layerUpdates) {
            const at = ne.data.subarray(Ye * Ue / ne.data.BYTES_PER_ELEMENT, (Ye + 1) * Ue / ne.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Ye, ne.width, ne.height, 1, pe, ye, at);
          }
          A.clearLayerUpdates();
        } else t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ne.width, ne.height, ne.depth, pe, ye, ne.data);
      } else t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Re, ne.width, ne.height, ne.depth, 0, pe, ye, ne.data);
      else if (A.isData3DTexture) Ne ? (je && t.texStorage3D(i.TEXTURE_3D, $e, Re, ne.width, ne.height, ne.depth), Xe && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, ne.width, ne.height, ne.depth, pe, ye, ne.data)) : t.texImage3D(i.TEXTURE_3D, 0, Re, ne.width, ne.height, ne.depth, 0, pe, ye, ne.data);
      else if (A.isFramebufferTexture) {
        if (je) if (Ne) t.texStorage2D(i.TEXTURE_2D, $e, Re, ne.width, ne.height);
        else {
          let Ue = ne.width, Ye = ne.height;
          for (let at = 0; at < $e; at++) t.texImage2D(i.TEXTURE_2D, at, Re, Ue, Ye, 0, pe, ye, null), Ue >>= 1, Ye >>= 1;
        }
      } else if (Pe.length > 0) {
        if (Ne && je) {
          const Ue = Te(Pe[0]);
          t.texStorage2D(i.TEXTURE_2D, $e, Re, Ue.width, Ue.height);
        }
        for (let Ue = 0, Ye = Pe.length; Ue < Ye; Ue++) me = Pe[Ue], Ne ? Xe && t.texSubImage2D(i.TEXTURE_2D, Ue, 0, 0, pe, ye, me) : t.texImage2D(i.TEXTURE_2D, Ue, Re, pe, ye, me);
        A.generateMipmaps = !1;
      } else if (Ne) {
        if (je) {
          const Ue = Te(ne);
          t.texStorage2D(i.TEXTURE_2D, $e, Re, Ue.width, Ue.height);
        }
        Xe && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, pe, ye, ne);
      } else t.texImage2D(i.TEXTURE_2D, 0, Re, pe, ye, ne);
      b(A) && _(Q), D.__version = q.version, A.onUpdate && A.onUpdate(A);
    }
    L.__version = A.version;
  }
  function ce(L, A, j, Q, W, q) {
    const D = o.convert(j.format, j.colorSpace), K = o.convert(j.type), $ = T(j.internalFormat, D, K, j.colorSpace);
    if (!n.get(A).__hasExternalTextures) {
      const _e = Math.max(1, A.width >> q), ne = Math.max(1, A.height >> q);
      W === i.TEXTURE_3D || W === i.TEXTURE_2D_ARRAY ? t.texImage3D(W, q, $, _e, ne, A.depth, 0, D, K, null) : t.texImage2D(W, q, $, _e, ne, 0, D, K, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, L), de(A) ? h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, W, n.get(j).__webglTexture, 0, le(A)) : (W === i.TEXTURE_2D || W >= i.TEXTURE_CUBE_MAP_POSITIVE_X && W <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Q, W, n.get(j).__webglTexture, q), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ue(L, A, j) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, L), A.depthBuffer) {
      const Q = A.depthTexture, W = Q && Q.isDepthTexture ? Q.type : null, q = w(A.stencilBuffer, W), D = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, K = le(A);
      de(A) ? h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, K, q, A.width, A.height) : j ? i.renderbufferStorageMultisample(i.RENDERBUFFER, K, q, A.width, A.height) : i.renderbufferStorage(i.RENDERBUFFER, q, A.width, A.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, D, i.RENDERBUFFER, L);
    } else {
      const Q = A.textures;
      for (let W = 0; W < Q.length; W++) {
        const q = Q[W], D = o.convert(q.format, q.colorSpace), K = o.convert(q.type), $ = T(q.internalFormat, D, K, q.colorSpace), _e = le(A);
        j && de(A) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, _e, $, A.width, A.height) : de(A) ? h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, _e, $, A.width, A.height) : i.renderbufferStorage(i.RENDERBUFFER, $, A.width, A.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ge(L) {
    const A = n.get(L), j = L.isWebGLCubeRenderTarget === !0;
    if (A.__boundDepthTexture !== L.depthTexture) {
      const Q = L.depthTexture;
      if (A.__depthDisposeCallback && A.__depthDisposeCallback(), Q) {
        const W = () => {
          delete A.__boundDepthTexture, delete A.__depthDisposeCallback, Q.removeEventListener("dispose", W);
        };
        Q.addEventListener("dispose", W), A.__depthDisposeCallback = W;
      }
      A.__boundDepthTexture = Q;
    }
    if (L.depthTexture && !A.__autoAllocateDepthBuffer) {
      if (j) throw new Error("target.depthTexture not supported in Cube render targets");
      (function(Q, W) {
        if (W && W.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
        if (t.bindFramebuffer(i.FRAMEBUFFER, Q), !W.depthTexture || !W.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        n.get(W.depthTexture).__webglTexture && W.depthTexture.image.width === W.width && W.depthTexture.image.height === W.height || (W.depthTexture.image.width = W.width, W.depthTexture.image.height = W.height, W.depthTexture.needsUpdate = !0), G(W.depthTexture, 0);
        const q = n.get(W.depthTexture).__webglTexture, D = le(W);
        if (W.depthTexture.format === 1026) de(W) ? h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, q, 0, D) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, q, 0);
        else {
          if (W.depthTexture.format !== 1027) throw new Error("Unknown depthTexture format");
          de(W) ? h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, q, 0, D) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, q, 0);
        }
      })(A.__webglFramebuffer, L);
    } else if (j) {
      A.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++) if (t.bindFramebuffer(i.FRAMEBUFFER, A.__webglFramebuffer[Q]), A.__webglDepthbuffer[Q] === void 0) A.__webglDepthbuffer[Q] = i.createRenderbuffer(), ue(A.__webglDepthbuffer[Q], L, !1);
      else {
        const W = L.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, q = A.__webglDepthbuffer[Q];
        i.bindRenderbuffer(i.RENDERBUFFER, q), i.framebufferRenderbuffer(i.FRAMEBUFFER, W, i.RENDERBUFFER, q);
      }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, A.__webglFramebuffer), A.__webglDepthbuffer === void 0) A.__webglDepthbuffer = i.createRenderbuffer(), ue(A.__webglDepthbuffer, L, !1);
    else {
      const Q = L.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, W = A.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, W), i.framebufferRenderbuffer(i.FRAMEBUFFER, Q, i.RENDERBUFFER, W);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  const Ee = [], xe = [];
  function le(L) {
    return Math.min(r.maxSamples, L.samples);
  }
  function de(L) {
    const A = n.get(L);
    return L.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && A.__useRenderToTexture !== !1;
  }
  function Se(L, A) {
    const j = L.colorSpace, Q = L.format, W = L.type;
    return L.isCompressedTexture === !0 || L.isVideoTexture === !0 || j !== Mi && j !== zr && (dt.getTransfer(j) === wt ? Q === 1023 && W === 1009 || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", j)), A;
  }
  function Te(L) {
    return typeof HTMLImageElement < "u" && L instanceof HTMLImageElement ? (u.width = L.naturalWidth || L.width, u.height = L.naturalHeight || L.height) : typeof VideoFrame < "u" && L instanceof VideoFrame ? (u.width = L.displayWidth, u.height = L.displayHeight) : (u.width = L.width, u.height = L.height), u;
  }
  this.allocateTextureUnit = function() {
    const L = te;
    return L >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + L + " texture units while this GPU supports only " + r.maxTextures), te += 1, L;
  }, this.resetTextureUnits = function() {
    te = 0;
  }, this.setTexture2D = G, this.setTexture2DArray = function(L, A) {
    const j = n.get(L);
    L.version > 0 && j.__version !== L.version ? ae(j, L, A) : t.bindTexture(i.TEXTURE_2D_ARRAY, j.__webglTexture, i.TEXTURE0 + A);
  }, this.setTexture3D = function(L, A) {
    const j = n.get(L);
    L.version > 0 && j.__version !== L.version ? ae(j, L, A) : t.bindTexture(i.TEXTURE_3D, j.__webglTexture, i.TEXTURE0 + A);
  }, this.setTextureCube = function(L, A) {
    const j = n.get(L);
    L.version > 0 && j.__version !== L.version ? function(Q, W, q) {
      if (W.image.length !== 6) return;
      const D = B(Q, W), K = W.source;
      t.bindTexture(i.TEXTURE_CUBE_MAP, Q.__webglTexture, i.TEXTURE0 + q);
      const $ = n.get(K);
      if (K.version !== $.__version || D === !0) {
        t.activeTexture(i.TEXTURE0 + q);
        const _e = dt.getPrimaries(dt.workingColorSpace), ne = W.colorSpace === zr ? null : dt.getPrimaries(W.colorSpace), pe = W.colorSpace === zr || _e === ne ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, W.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, W.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, W.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, pe);
        const ye = W.isCompressedTexture || W.image[0].isCompressedTexture, me = W.image[0] && W.image[0].isDataTexture, Re = [];
        for (let De = 0; De < 6; De++) Re[De] = ye || me ? me ? W.image[De].image : W.image[De] : M(W.image[De], !0, r.maxCubemapSize), Re[De] = Se(W, Re[De]);
        const Pe = Re[0], Ne = o.convert(W.format, W.colorSpace), je = o.convert(W.type), Xe = T(W.internalFormat, Ne, je, W.colorSpace), $e = W.isVideoTexture !== !0, Ue = $.__version === void 0 || D === !0, Ye = K.dataReady;
        let at, ht = E(W, Pe);
        if (V(i.TEXTURE_CUBE_MAP, W), ye) {
          $e && Ue && t.texStorage2D(i.TEXTURE_CUBE_MAP, ht, Xe, Pe.width, Pe.height);
          for (let De = 0; De < 6; De++) {
            at = Re[De].mipmaps;
            for (let Ke = 0; Ke < at.length; Ke++) {
              const tt = at[Ke];
              W.format !== 1023 ? Ne !== null ? $e ? Ye && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, Ke, 0, 0, tt.width, tt.height, Ne, tt.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, Ke, Xe, tt.width, tt.height, 0, tt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : $e ? Ye && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, Ke, 0, 0, tt.width, tt.height, Ne, je, tt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, Ke, Xe, tt.width, tt.height, 0, Ne, je, tt.data);
            }
          }
        } else {
          if (at = W.mipmaps, $e && Ue) {
            at.length > 0 && ht++;
            const De = Te(Re[0]);
            t.texStorage2D(i.TEXTURE_CUBE_MAP, ht, Xe, De.width, De.height);
          }
          for (let De = 0; De < 6; De++) if (me) {
            $e ? Ye && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, 0, 0, 0, Re[De].width, Re[De].height, Ne, je, Re[De].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, 0, Xe, Re[De].width, Re[De].height, 0, Ne, je, Re[De].data);
            for (let Ke = 0; Ke < at.length; Ke++) {
              const tt = at[Ke].image[De].image;
              $e ? Ye && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, Ke + 1, 0, 0, tt.width, tt.height, Ne, je, tt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, Ke + 1, Xe, tt.width, tt.height, 0, Ne, je, tt.data);
            }
          } else {
            $e ? Ye && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, 0, 0, 0, Ne, je, Re[De]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, 0, Xe, Ne, je, Re[De]);
            for (let Ke = 0; Ke < at.length; Ke++) {
              const tt = at[Ke];
              $e ? Ye && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, Ke + 1, 0, 0, Ne, je, tt.image[De]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + De, Ke + 1, Xe, Ne, je, tt.image[De]);
            }
          }
        }
        b(W) && _(i.TEXTURE_CUBE_MAP), $.__version = K.version, W.onUpdate && W.onUpdate(W);
      }
      Q.__version = W.version;
    }(j, L, A) : t.bindTexture(i.TEXTURE_CUBE_MAP, j.__webglTexture, i.TEXTURE0 + A);
  }, this.rebindTextures = function(L, A, j) {
    const Q = n.get(L);
    A !== void 0 && ce(Q.__webglFramebuffer, L, L.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), j !== void 0 && ge(L);
  }, this.setupRenderTarget = function(L) {
    const A = L.texture, j = n.get(L), Q = n.get(A);
    L.addEventListener("dispose", N);
    const W = L.textures, q = L.isWebGLCubeRenderTarget === !0, D = W.length > 1;
    if (D || (Q.__webglTexture === void 0 && (Q.__webglTexture = i.createTexture()), Q.__version = A.version, s.memory.textures++), q) {
      j.__webglFramebuffer = [];
      for (let K = 0; K < 6; K++) if (A.mipmaps && A.mipmaps.length > 0) {
        j.__webglFramebuffer[K] = [];
        for (let $ = 0; $ < A.mipmaps.length; $++) j.__webglFramebuffer[K][$] = i.createFramebuffer();
      } else j.__webglFramebuffer[K] = i.createFramebuffer();
    } else {
      if (A.mipmaps && A.mipmaps.length > 0) {
        j.__webglFramebuffer = [];
        for (let K = 0; K < A.mipmaps.length; K++) j.__webglFramebuffer[K] = i.createFramebuffer();
      } else j.__webglFramebuffer = i.createFramebuffer();
      if (D) for (let K = 0, $ = W.length; K < $; K++) {
        const _e = n.get(W[K]);
        _e.__webglTexture === void 0 && (_e.__webglTexture = i.createTexture(), s.memory.textures++);
      }
      if (L.samples > 0 && de(L) === !1) {
        j.__webglMultisampledFramebuffer = i.createFramebuffer(), j.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, j.__webglMultisampledFramebuffer);
        for (let K = 0; K < W.length; K++) {
          const $ = W[K];
          j.__webglColorRenderbuffer[K] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, j.__webglColorRenderbuffer[K]);
          const _e = o.convert($.format, $.colorSpace), ne = o.convert($.type), pe = T($.internalFormat, _e, ne, $.colorSpace, L.isXRRenderTarget === !0), ye = le(L);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, ye, pe, L.width, L.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + K, i.RENDERBUFFER, j.__webglColorRenderbuffer[K]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), L.depthBuffer && (j.__webglDepthRenderbuffer = i.createRenderbuffer(), ue(j.__webglDepthRenderbuffer, L, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Q.__webglTexture), V(i.TEXTURE_CUBE_MAP, A);
      for (let K = 0; K < 6; K++) if (A.mipmaps && A.mipmaps.length > 0) for (let $ = 0; $ < A.mipmaps.length; $++) ce(j.__webglFramebuffer[K][$], L, A, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + K, $);
      else ce(j.__webglFramebuffer[K], L, A, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0);
      b(A) && _(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (D) {
      for (let K = 0, $ = W.length; K < $; K++) {
        const _e = W[K], ne = n.get(_e);
        t.bindTexture(i.TEXTURE_2D, ne.__webglTexture), V(i.TEXTURE_2D, _e), ce(j.__webglFramebuffer, L, _e, i.COLOR_ATTACHMENT0 + K, i.TEXTURE_2D, 0), b(_e) && _(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let K = i.TEXTURE_2D;
      if ((L.isWebGL3DRenderTarget || L.isWebGLArrayRenderTarget) && (K = L.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(K, Q.__webglTexture), V(K, A), A.mipmaps && A.mipmaps.length > 0) for (let $ = 0; $ < A.mipmaps.length; $++) ce(j.__webglFramebuffer[$], L, A, i.COLOR_ATTACHMENT0, K, $);
      else ce(j.__webglFramebuffer, L, A, i.COLOR_ATTACHMENT0, K, 0);
      b(A) && _(K), t.unbindTexture();
    }
    L.depthBuffer && ge(L);
  }, this.updateRenderTargetMipmap = function(L) {
    const A = L.textures;
    for (let j = 0, Q = A.length; j < Q; j++) {
      const W = A[j];
      if (b(W)) {
        const q = L.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, D = n.get(W).__webglTexture;
        t.bindTexture(q, D), _(q), t.unbindTexture();
      }
    }
  }, this.updateMultisampleRenderTarget = function(L) {
    if (L.samples > 0) {
      if (de(L) === !1) {
        const A = L.textures, j = L.width, Q = L.height;
        let W = i.COLOR_BUFFER_BIT;
        const q = L.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, D = n.get(L), K = A.length > 1;
        if (K) for (let $ = 0; $ < A.length; $++) t.bindFramebuffer(i.FRAMEBUFFER, D.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + $, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, D.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + $, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, D.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, D.__webglFramebuffer);
        for (let $ = 0; $ < A.length; $++) {
          if (L.resolveDepthBuffer && (L.depthBuffer && (W |= i.DEPTH_BUFFER_BIT), L.stencilBuffer && L.resolveStencilBuffer && (W |= i.STENCIL_BUFFER_BIT)), K) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, D.__webglColorRenderbuffer[$]);
            const _e = n.get(A[$]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, _e, 0);
          }
          i.blitFramebuffer(0, 0, j, Q, 0, 0, j, Q, W, i.NEAREST), c === !0 && (Ee.length = 0, xe.length = 0, Ee.push(i.COLOR_ATTACHMENT0 + $), L.depthBuffer && L.resolveDepthBuffer === !1 && (Ee.push(q), xe.push(q), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, xe)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Ee));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), K) for (let $ = 0; $ < A.length; $++) {
          t.bindFramebuffer(i.FRAMEBUFFER, D.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + $, i.RENDERBUFFER, D.__webglColorRenderbuffer[$]);
          const _e = n.get(A[$]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, D.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + $, i.TEXTURE_2D, _e, 0);
        }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, D.__webglMultisampledFramebuffer);
      } else if (L.depthBuffer && L.resolveDepthBuffer === !1 && c) {
        const A = L.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [A]);
      }
    }
  }, this.setupDepthRenderbuffer = ge, this.setupFrameBufferTexture = ce, this.useMultisampledRTT = de;
}
function b_(i, e) {
  return { convert: function(t, n = "") {
    let r;
    const o = dt.getTransfer(n);
    if (t === 1009) return i.UNSIGNED_BYTE;
    if (t === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (t === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (t === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (t === 1010) return i.BYTE;
    if (t === 1011) return i.SHORT;
    if (t === 1012) return i.UNSIGNED_SHORT;
    if (t === 1013) return i.INT;
    if (t === 1014) return i.UNSIGNED_INT;
    if (t === 1015) return i.FLOAT;
    if (t === 1016) return i.HALF_FLOAT;
    if (t === 1021) return i.ALPHA;
    if (t === 1022) return i.RGB;
    if (t === 1023) return i.RGBA;
    if (t === 1024) return i.LUMINANCE;
    if (t === 1025) return i.LUMINANCE_ALPHA;
    if (t === 1026) return i.DEPTH_COMPONENT;
    if (t === 1027) return i.DEPTH_STENCIL;
    if (t === 1028) return i.RED;
    if (t === 1029) return i.RED_INTEGER;
    if (t === 1030) return i.RG;
    if (t === 1031) return i.RG_INTEGER;
    if (t === 1033) return i.RGBA_INTEGER;
    if (t === 33776 || t === 33777 || t === 33778 || t === 33779) if (o === wt) {
      if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r === null) return null;
      if (t === 33776) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (t === 33777) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (t === 33778) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (t === 33779) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else {
      if (r = e.get("WEBGL_compressed_texture_s3tc"), r === null) return null;
      if (t === 33776) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (t === 33777) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (t === 33778) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (t === 33779) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }
    if (t === 35840 || t === 35841 || t === 35842 || t === 35843) {
      if (r = e.get("WEBGL_compressed_texture_pvrtc"), r === null) return null;
      if (t === 35840) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (t === 35841) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (t === 35842) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (t === 35843) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    }
    if (t === 36196 || t === 37492 || t === 37496) {
      if (r = e.get("WEBGL_compressed_texture_etc"), r === null) return null;
      if (t === 36196 || t === 37492) return o === wt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (t === 37496) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (t === 37808 || t === 37809 || t === 37810 || t === 37811 || t === 37812 || t === 37813 || t === 37814 || t === 37815 || t === 37816 || t === 37817 || t === 37818 || t === 37819 || t === 37820 || t === 37821) {
      if (r = e.get("WEBGL_compressed_texture_astc"), r === null) return null;
      if (t === 37808) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (t === 37809) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (t === 37810) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (t === 37811) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (t === 37812) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (t === 37813) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (t === 37814) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (t === 37815) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (t === 37816) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (t === 37817) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (t === 37818) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (t === 37819) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (t === 37820) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (t === 37821) return o === wt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    }
    if (t === 36492 || t === 36494 || t === 36495) {
      if (r = e.get("EXT_texture_compression_bptc"), r === null) return null;
      if (t === 36492) return o === wt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (t === 36494) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (t === 36495) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    }
    if (t === 36283 || t === 36284 || t === 36285 || t === 36286) {
      if (r = e.get("EXT_texture_compression_rgtc"), r === null) return null;
      if (t === 36492) return r.COMPRESSED_RED_RGTC1_EXT;
      if (t === 36284) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (t === 36285) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (t === 36286) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    }
    return t === 1020 ? i.UNSIGNED_INT_24_8 : i[t] !== void 0 ? i[t] : null;
  } };
}
class S_ extends Cn {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
let jr = class extends tn {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
};
const M_ = { type: "move" };
class il {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new jr(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new jr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new X(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new X()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new jr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new X(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new X()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, o = null, s = null;
    const h = this._targetRay, c = this._grip, u = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (u && e.hand) {
        s = !0;
        for (const M of e.hand.values()) {
          const b = t.getJointPose(M, n), _ = this._getHandJoint(u, M);
          b !== null && (_.matrix.fromArray(b.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.matrixWorldNeedsUpdate = !0, _.jointRadius = b.radius), _.visible = b !== null;
        }
        const d = u.joints["index-finger-tip"], f = u.joints["thumb-tip"], m = d.position.distanceTo(f.position), v = 0.02, y = 5e-3;
        u.inputState.pinching && m > v + y ? (u.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !u.inputState.pinching && m <= v - y && (u.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else c !== null && e.gripSpace && (o = t.getPose(e.gripSpace, n), o !== null && (c.matrix.fromArray(o.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, o.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(o.linearVelocity)) : c.hasLinearVelocity = !1, o.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(o.angularVelocity)) : c.hasAngularVelocity = !1));
      h !== null && (r = t.getPose(e.targetRaySpace, n), r === null && o !== null && (r = o), r !== null && (h.matrix.fromArray(r.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (h.hasLinearVelocity = !0, h.linearVelocity.copy(r.linearVelocity)) : h.hasLinearVelocity = !1, r.angularVelocity ? (h.hasAngularVelocity = !0, h.angularVelocity.copy(r.angularVelocity)) : h.hasAngularVelocity = !1, this.dispatchEvent(M_)));
    }
    return h !== null && (h.visible = r !== null), c !== null && (c.visible = o !== null), u !== null && (u.visible = s !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new jr();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class E_ {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new Gt();
      e.properties.get(r).__webglTexture = t.texture, t.depthNear == n.depthNear && t.depthFar == n.depthFar || (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new qn({ vertexShader: `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, fragmentShader: `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Tn(new Ma(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class w_ extends Oi {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, o = 1, s = null, h = "local-floor", c = 1, u = null, d = null, f = null, m = null, v = null, y = null;
    const M = new E_(), b = t.getContextAttributes();
    let _ = null, T = null;
    const w = [], E = [], U = new We();
    let N = null;
    const O = new Cn();
    O.layers.enable(1), O.viewport = new Mt();
    const te = new Cn();
    te.layers.enable(2), te.viewport = new Mt();
    const G = [O, te], Z = new S_();
    Z.layers.enable(1), Z.layers.enable(2);
    let re = null, F = null;
    function V(le) {
      const de = E.indexOf(le.inputSource);
      if (de === -1) return;
      const Se = w[de];
      Se !== void 0 && (Se.update(le.inputSource, le.frame, u || s), Se.dispatchEvent({ type: le.type, data: le.inputSource }));
    }
    function B() {
      r.removeEventListener("select", V), r.removeEventListener("selectstart", V), r.removeEventListener("selectend", V), r.removeEventListener("squeeze", V), r.removeEventListener("squeezestart", V), r.removeEventListener("squeezeend", V), r.removeEventListener("end", B), r.removeEventListener("inputsourceschange", ae);
      for (let le = 0; le < w.length; le++) {
        const de = E[le];
        de !== null && (E[le] = null, w[le].disconnect(de));
      }
      re = null, F = null, M.reset(), e.setRenderTarget(_), v = null, m = null, f = null, r = null, T = null, xe.stop(), n.isPresenting = !1, e.setPixelRatio(N), e.setSize(U.width, U.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    function ae(le) {
      for (let de = 0; de < le.removed.length; de++) {
        const Se = le.removed[de], Te = E.indexOf(Se);
        Te >= 0 && (E[Te] = null, w[Te].disconnect(Se));
      }
      for (let de = 0; de < le.added.length; de++) {
        const Se = le.added[de];
        let Te = E.indexOf(Se);
        if (Te === -1) {
          for (let A = 0; A < w.length; A++) {
            if (A >= E.length) {
              E.push(Se), Te = A;
              break;
            }
            if (E[A] === null) {
              E[A] = Se, Te = A;
              break;
            }
          }
          if (Te === -1) break;
        }
        const L = w[Te];
        L && L.connect(Se);
      }
    }
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(le) {
      let de = w[le];
      return de === void 0 && (de = new il(), w[le] = de), de.getTargetRaySpace();
    }, this.getControllerGrip = function(le) {
      let de = w[le];
      return de === void 0 && (de = new il(), w[le] = de), de.getGripSpace();
    }, this.getHand = function(le) {
      let de = w[le];
      return de === void 0 && (de = new il(), w[le] = de), de.getHandSpace();
    }, this.setFramebufferScaleFactor = function(le) {
      o = le, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(le) {
      h = le, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return u || s;
    }, this.setReferenceSpace = function(le) {
      u = le;
    }, this.getBaseLayer = function() {
      return m !== null ? m : v;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return y;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(le) {
      if (r = le, r !== null) {
        if (_ = e.getRenderTarget(), r.addEventListener("select", V), r.addEventListener("selectstart", V), r.addEventListener("selectend", V), r.addEventListener("squeeze", V), r.addEventListener("squeezestart", V), r.addEventListener("squeezeend", V), r.addEventListener("end", B), r.addEventListener("inputsourceschange", ae), b.xrCompatible !== !0 && await t.makeXRCompatible(), N = e.getPixelRatio(), e.getSize(U), r.renderState.layers === void 0) {
          const de = { antialias: b.antialias, alpha: !0, depth: b.depth, stencil: b.stencil, framebufferScaleFactor: o };
          v = new XRWebGLLayer(r, t, de), r.updateRenderState({ baseLayer: v }), e.setPixelRatio(1), e.setSize(v.framebufferWidth, v.framebufferHeight, !1), T = new fr(v.framebufferWidth, v.framebufferHeight, { format: 1023, type: 1009, colorSpace: e.outputColorSpace, stencilBuffer: b.stencil });
        } else {
          let de = null, Se = null, Te = null;
          b.depth && (Te = b.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, de = b.stencil ? 1027 : 1026, Se = b.stencil ? 1020 : 1014);
          const L = { colorFormat: t.RGBA8, depthFormat: Te, scaleFactor: o };
          f = new XRWebGLBinding(r, t), m = f.createProjectionLayer(L), r.updateRenderState({ layers: [m] }), e.setPixelRatio(1), e.setSize(m.textureWidth, m.textureHeight, !1), T = new fr(m.textureWidth, m.textureHeight, { format: 1023, type: 1009, depthTexture: new Wu(m.textureWidth, m.textureHeight, Se, void 0, void 0, void 0, void 0, void 0, void 0, de), stencilBuffer: b.stencil, colorSpace: e.outputColorSpace, samples: b.antialias ? 4 : 0, resolveDepthBuffer: m.ignoreDepthValues === !1 });
        }
        T.isXRRenderTarget = !0, this.setFoveation(c), u = null, s = await r.requestReferenceSpace(h), xe.setContext(r), xe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return M.getDepthTexture();
    };
    const ce = new X(), ue = new X();
    function ge(le, de) {
      de === null ? le.matrixWorld.copy(le.matrix) : le.matrixWorld.multiplyMatrices(de.matrixWorld, le.matrix), le.matrixWorldInverse.copy(le.matrixWorld).invert();
    }
    this.updateCamera = function(le) {
      if (r === null) return;
      let de = le.near, Se = le.far;
      M.texture !== null && (M.depthNear > 0 && (de = M.depthNear), M.depthFar > 0 && (Se = M.depthFar)), Z.near = te.near = O.near = de, Z.far = te.far = O.far = Se, re === Z.near && F === Z.far || (r.updateRenderState({ depthNear: Z.near, depthFar: Z.far }), re = Z.near, F = Z.far);
      const Te = le.parent, L = Z.cameras;
      ge(Z, Te);
      for (let A = 0; A < L.length; A++) ge(L[A], Te);
      L.length === 2 ? function(A, j, Q) {
        ce.setFromMatrixPosition(j.matrixWorld), ue.setFromMatrixPosition(Q.matrixWorld);
        const W = ce.distanceTo(ue), q = j.projectionMatrix.elements, D = Q.projectionMatrix.elements, K = q[14] / (q[10] - 1), $ = q[14] / (q[10] + 1), _e = (q[9] + 1) / q[5], ne = (q[9] - 1) / q[5], pe = (q[8] - 1) / q[0], ye = (D[8] + 1) / D[0], me = K * pe, Re = K * ye, Pe = W / (-pe + ye), Ne = Pe * -pe;
        if (j.matrixWorld.decompose(A.position, A.quaternion, A.scale), A.translateX(Ne), A.translateZ(Pe), A.matrixWorld.compose(A.position, A.quaternion, A.scale), A.matrixWorldInverse.copy(A.matrixWorld).invert(), q[10] === -1) A.projectionMatrix.copy(j.projectionMatrix), A.projectionMatrixInverse.copy(j.projectionMatrixInverse);
        else {
          const je = K + Pe, Xe = $ + Pe, $e = me - Ne, Ue = Re + (W - Ne), Ye = _e * $ / Xe * je, at = ne * $ / Xe * je;
          A.projectionMatrix.makePerspective($e, Ue, Ye, at, je, Xe), A.projectionMatrixInverse.copy(A.projectionMatrix).invert();
        }
      }(Z, O, te) : Z.projectionMatrix.copy(O.projectionMatrix), function(A, j, Q) {
        Q === null ? A.matrix.copy(j.matrixWorld) : (A.matrix.copy(Q.matrixWorld), A.matrix.invert(), A.matrix.multiply(j.matrixWorld)), A.matrix.decompose(A.position, A.quaternion, A.scale), A.updateMatrixWorld(!0), A.projectionMatrix.copy(j.projectionMatrix), A.projectionMatrixInverse.copy(j.projectionMatrixInverse), A.isPerspectiveCamera && (A.fov = 2 * fl * Math.atan(1 / A.projectionMatrix.elements[5]), A.zoom = 1);
      }(le, Z, Te);
    }, this.getCamera = function() {
      return Z;
    }, this.getFoveation = function() {
      if (m !== null || v !== null) return c;
    }, this.setFoveation = function(le) {
      c = le, m !== null && (m.fixedFoveation = le), v !== null && v.fixedFoveation !== void 0 && (v.fixedFoveation = le);
    }, this.hasDepthSensing = function() {
      return M.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return M.getMesh(Z);
    };
    let Ee = null;
    const xe = new Gu();
    xe.setAnimationLoop(function(le, de) {
      if (d = de.getViewerPose(u || s), y = de, d !== null) {
        const Se = d.views;
        v !== null && (e.setRenderTargetFramebuffer(T, v.framebuffer), e.setRenderTarget(T));
        let Te = !1;
        Se.length !== Z.cameras.length && (Z.cameras.length = 0, Te = !0);
        for (let A = 0; A < Se.length; A++) {
          const j = Se[A];
          let Q = null;
          if (v !== null) Q = v.getViewport(j);
          else {
            const q = f.getViewSubImage(m, j);
            Q = q.viewport, A === 0 && (e.setRenderTargetTextures(T, q.colorTexture, m.ignoreDepthValues ? void 0 : q.depthStencilTexture), e.setRenderTarget(T));
          }
          let W = G[A];
          W === void 0 && (W = new Cn(), W.layers.enable(A), W.viewport = new Mt(), G[A] = W), W.matrix.fromArray(j.transform.matrix), W.matrix.decompose(W.position, W.quaternion, W.scale), W.projectionMatrix.fromArray(j.projectionMatrix), W.projectionMatrixInverse.copy(W.projectionMatrix).invert(), W.viewport.set(Q.x, Q.y, Q.width, Q.height), A === 0 && (Z.matrix.copy(W.matrix), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale)), Te === !0 && Z.cameras.push(W);
        }
        const L = r.enabledFeatures;
        if (L && L.includes("depth-sensing")) {
          const A = f.getDepthInformation(Se[0]);
          A && A.isValid && A.texture && M.init(e, A, r.renderState);
        }
      }
      for (let Se = 0; Se < w.length; Se++) {
        const Te = E[Se], L = w[Se];
        Te !== null && L !== void 0 && L.update(Te, de, u || s);
      }
      Ee && Ee(le, de), de.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: de }), y = null;
    }), this.setAnimationLoop = function(le) {
      Ee = le;
    }, this.dispose = function() {
    };
  }
}
const hr = new ti(), T_ = new Tt();
function A_(i, e) {
  function t(r, o) {
    r.matrixAutoUpdate === !0 && r.updateMatrix(), o.value.copy(r.matrix);
  }
  function n(r, o) {
    r.opacity.value = o.opacity, o.color && r.diffuse.value.copy(o.color), o.emissive && r.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity), o.map && (r.map.value = o.map, t(o.map, r.mapTransform)), o.alphaMap && (r.alphaMap.value = o.alphaMap, t(o.alphaMap, r.alphaMapTransform)), o.bumpMap && (r.bumpMap.value = o.bumpMap, t(o.bumpMap, r.bumpMapTransform), r.bumpScale.value = o.bumpScale, o.side === 1 && (r.bumpScale.value *= -1)), o.normalMap && (r.normalMap.value = o.normalMap, t(o.normalMap, r.normalMapTransform), r.normalScale.value.copy(o.normalScale), o.side === 1 && r.normalScale.value.negate()), o.displacementMap && (r.displacementMap.value = o.displacementMap, t(o.displacementMap, r.displacementMapTransform), r.displacementScale.value = o.displacementScale, r.displacementBias.value = o.displacementBias), o.emissiveMap && (r.emissiveMap.value = o.emissiveMap, t(o.emissiveMap, r.emissiveMapTransform)), o.specularMap && (r.specularMap.value = o.specularMap, t(o.specularMap, r.specularMapTransform)), o.alphaTest > 0 && (r.alphaTest.value = o.alphaTest);
    const s = e.get(o), h = s.envMap, c = s.envMapRotation;
    h && (r.envMap.value = h, hr.copy(c), hr.x *= -1, hr.y *= -1, hr.z *= -1, h.isCubeTexture && h.isRenderTargetTexture === !1 && (hr.y *= -1, hr.z *= -1), r.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(hr)), r.flipEnvMap.value = h.isCubeTexture && h.isRenderTargetTexture === !1 ? -1 : 1, r.reflectivity.value = o.reflectivity, r.ior.value = o.ior, r.refractionRatio.value = o.refractionRatio), o.lightMap && (r.lightMap.value = o.lightMap, r.lightMapIntensity.value = o.lightMapIntensity, t(o.lightMap, r.lightMapTransform)), o.aoMap && (r.aoMap.value = o.aoMap, r.aoMapIntensity.value = o.aoMapIntensity, t(o.aoMap, r.aoMapTransform));
  }
  return { refreshFogUniforms: function(r, o) {
    o.color.getRGB(r.fogColor.value, Vu(i)), o.isFog ? (r.fogNear.value = o.near, r.fogFar.value = o.far) : o.isFogExp2 && (r.fogDensity.value = o.density);
  }, refreshMaterialUniforms: function(r, o, s, h, c) {
    o.isMeshBasicMaterial || o.isMeshLambertMaterial ? n(r, o) : o.isMeshToonMaterial ? (n(r, o), function(u, d) {
      d.gradientMap && (u.gradientMap.value = d.gradientMap);
    }(r, o)) : o.isMeshPhongMaterial ? (n(r, o), function(u, d) {
      u.specular.value.copy(d.specular), u.shininess.value = Math.max(d.shininess, 1e-4);
    }(r, o)) : o.isMeshStandardMaterial ? (n(r, o), function(u, d) {
      u.metalness.value = d.metalness, d.metalnessMap && (u.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, u.metalnessMapTransform)), u.roughness.value = d.roughness, d.roughnessMap && (u.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, u.roughnessMapTransform)), d.envMap && (u.envMapIntensity.value = d.envMapIntensity);
    }(r, o), o.isMeshPhysicalMaterial && function(u, d, f) {
      u.ior.value = d.ior, d.sheen > 0 && (u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), u.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (u.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, u.sheenColorMapTransform)), d.sheenRoughnessMap && (u.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, u.sheenRoughnessMapTransform))), d.clearcoat > 0 && (u.clearcoat.value = d.clearcoat, u.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (u.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, u.clearcoatMapTransform)), d.clearcoatRoughnessMap && (u.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, u.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (u.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, u.clearcoatNormalMapTransform), u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === 1 && u.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (u.dispersion.value = d.dispersion), d.iridescence > 0 && (u.iridescence.value = d.iridescence, u.iridescenceIOR.value = d.iridescenceIOR, u.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], u.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (u.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, u.iridescenceMapTransform)), d.iridescenceThicknessMap && (u.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, u.iridescenceThicknessMapTransform))), d.transmission > 0 && (u.transmission.value = d.transmission, u.transmissionSamplerMap.value = f.texture, u.transmissionSamplerSize.value.set(f.width, f.height), d.transmissionMap && (u.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, u.transmissionMapTransform)), u.thickness.value = d.thickness, d.thicknessMap && (u.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, u.thicknessMapTransform)), u.attenuationDistance.value = d.attenuationDistance, u.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (u.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (u.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, u.anisotropyMapTransform))), u.specularIntensity.value = d.specularIntensity, u.specularColor.value.copy(d.specularColor), d.specularColorMap && (u.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, u.specularColorMapTransform)), d.specularIntensityMap && (u.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, u.specularIntensityMapTransform));
    }(r, o, c)) : o.isMeshMatcapMaterial ? (n(r, o), function(u, d) {
      d.matcap && (u.matcap.value = d.matcap);
    }(r, o)) : o.isMeshDepthMaterial ? n(r, o) : o.isMeshDistanceMaterial ? (n(r, o), function(u, d) {
      const f = e.get(d).light;
      u.referencePosition.value.setFromMatrixPosition(f.matrixWorld), u.nearDistance.value = f.shadow.camera.near, u.farDistance.value = f.shadow.camera.far;
    }(r, o)) : o.isMeshNormalMaterial ? n(r, o) : o.isLineBasicMaterial ? (function(u, d) {
      u.diffuse.value.copy(d.color), u.opacity.value = d.opacity, d.map && (u.map.value = d.map, t(d.map, u.mapTransform));
    }(r, o), o.isLineDashedMaterial && function(u, d) {
      u.dashSize.value = d.dashSize, u.totalSize.value = d.dashSize + d.gapSize, u.scale.value = d.scale;
    }(r, o)) : o.isPointsMaterial ? function(u, d, f, m) {
      u.diffuse.value.copy(d.color), u.opacity.value = d.opacity, u.size.value = d.size * f, u.scale.value = 0.5 * m, d.map && (u.map.value = d.map, t(d.map, u.uvTransform)), d.alphaMap && (u.alphaMap.value = d.alphaMap, t(d.alphaMap, u.alphaMapTransform)), d.alphaTest > 0 && (u.alphaTest.value = d.alphaTest);
    }(r, o, s, h) : o.isSpriteMaterial ? function(u, d) {
      u.diffuse.value.copy(d.color), u.opacity.value = d.opacity, u.rotation.value = d.rotation, d.map && (u.map.value = d.map, t(d.map, u.mapTransform)), d.alphaMap && (u.alphaMap.value = d.alphaMap, t(d.alphaMap, u.alphaMapTransform)), d.alphaTest > 0 && (u.alphaTest.value = d.alphaTest);
    }(r, o) : o.isShadowMaterial ? (r.color.value.copy(o.color), r.opacity.value = o.opacity) : o.isShaderMaterial && (o.uniformsNeedUpdate = !1);
  } };
}
function P_(i, e, t, n) {
  let r = {}, o = {}, s = [];
  const h = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(f, m, v, y) {
    const M = f.value, b = m + "_" + v;
    if (y[b] === void 0) return y[b] = typeof M == "number" || typeof M == "boolean" ? M : M.clone(), !0;
    {
      const _ = y[b];
      if (typeof M == "number" || typeof M == "boolean") {
        if (_ !== M) return y[b] = M, !0;
      } else if (_.equals(M) === !1) return _.copy(M), !0;
    }
    return !1;
  }
  function u(f) {
    const m = { boundary: 0, storage: 0 };
    return typeof f == "number" || typeof f == "boolean" ? (m.boundary = 4, m.storage = 4) : f.isVector2 ? (m.boundary = 8, m.storage = 8) : f.isVector3 || f.isColor ? (m.boundary = 16, m.storage = 12) : f.isVector4 ? (m.boundary = 16, m.storage = 16) : f.isMatrix3 ? (m.boundary = 48, m.storage = 48) : f.isMatrix4 ? (m.boundary = 64, m.storage = 64) : f.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", f), m;
  }
  function d(f) {
    const m = f.target;
    m.removeEventListener("dispose", d);
    const v = s.indexOf(m.__bindingPointIndex);
    s.splice(v, 1), i.deleteBuffer(r[m.id]), delete r[m.id], delete o[m.id];
  }
  return { bind: function(f, m) {
    const v = m.program;
    n.uniformBlockBinding(f, v);
  }, update: function(f, m) {
    let v = r[f.id];
    v === void 0 && (function(b) {
      const _ = b.uniforms;
      let T = 0;
      const w = 16;
      for (let U = 0, N = _.length; U < N; U++) {
        const O = Array.isArray(_[U]) ? _[U] : [_[U]];
        for (let te = 0, G = O.length; te < G; te++) {
          const Z = O[te], re = Array.isArray(Z.value) ? Z.value : [Z.value];
          for (let F = 0, V = re.length; F < V; F++) {
            const B = u(re[F]), ae = T % w, ce = ae % B.boundary, ue = ae + ce;
            T += ce, ue !== 0 && w - ue < B.storage && (T += w - ue), Z.__data = new Float32Array(B.storage / Float32Array.BYTES_PER_ELEMENT), Z.__offset = T, T += B.storage;
          }
        }
      }
      const E = T % w;
      E > 0 && (T += w - E), b.__size = T, b.__cache = {};
    }(f), v = function(b) {
      const _ = function() {
        for (let U = 0; U < h; U++) if (s.indexOf(U) === -1) return s.push(U), U;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
      }();
      b.__bindingPointIndex = _;
      const T = i.createBuffer(), w = b.__size, E = b.usage;
      return i.bindBuffer(i.UNIFORM_BUFFER, T), i.bufferData(i.UNIFORM_BUFFER, w, E), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, _, T), T;
    }(f), r[f.id] = v, f.addEventListener("dispose", d));
    const y = m.program;
    n.updateUBOMapping(f, y);
    const M = e.render.frame;
    o[f.id] !== M && (function(b) {
      const _ = r[b.id], T = b.uniforms, w = b.__cache;
      i.bindBuffer(i.UNIFORM_BUFFER, _);
      for (let E = 0, U = T.length; E < U; E++) {
        const N = Array.isArray(T[E]) ? T[E] : [T[E]];
        for (let O = 0, te = N.length; O < te; O++) {
          const G = N[O];
          if (c(G, E, O, w) === !0) {
            const Z = G.__offset, re = Array.isArray(G.value) ? G.value : [G.value];
            let F = 0;
            for (let V = 0; V < re.length; V++) {
              const B = re[V], ae = u(B);
              typeof B == "number" || typeof B == "boolean" ? (G.__data[0] = B, i.bufferSubData(i.UNIFORM_BUFFER, Z + F, G.__data)) : B.isMatrix3 ? (G.__data[0] = B.elements[0], G.__data[1] = B.elements[1], G.__data[2] = B.elements[2], G.__data[3] = 0, G.__data[4] = B.elements[3], G.__data[5] = B.elements[4], G.__data[6] = B.elements[5], G.__data[7] = 0, G.__data[8] = B.elements[6], G.__data[9] = B.elements[7], G.__data[10] = B.elements[8], G.__data[11] = 0) : (B.toArray(G.__data, F), F += ae.storage / Float32Array.BYTES_PER_ELEMENT);
            }
            i.bufferSubData(i.UNIFORM_BUFFER, Z, G.__data);
          }
        }
      }
      i.bindBuffer(i.UNIFORM_BUFFER, null);
    }(f), o[f.id] = M);
  }, dispose: function() {
    for (const f in r) i.deleteBuffer(r[f]);
    s = [], r = {}, o = {};
  } };
}
class fu {
  constructor(e = {}) {
    const { canvas: t = xm(), context: n = null, depth: r = !0, stencil: o = !1, alpha: s = !1, antialias: h = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: u = !1, powerPreference: d = "default", failIfMajorPerformanceCaveat: f = !1 } = e;
    let m;
    if (this.isWebGLRenderer = !0, n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = s;
    const v = new Uint32Array(4), y = new Int32Array(4);
    let M = null, b = null;
    const _ = [], T = [];
    this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Qn, this.toneMapping = 0, this.toneMappingExposure = 1;
    const w = this;
    let E = !1, U = 0, N = 0, O = null, te = -1, G = null;
    const Z = new Mt(), re = new Mt();
    let F = null;
    const V = new lt(0);
    let B = 0, ae = t.width, ce = t.height, ue = 1, ge = null, Ee = null;
    const xe = new Mt(0, 0, ae, ce), le = new Mt(0, 0, ae, ce);
    let de = !1;
    const Se = new ju();
    let Te = !1, L = !1;
    const A = new Tt(), j = new Tt(), Q = new X(), W = new Mt(), q = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let D = !1;
    function K() {
      return O === null ? ue : 1;
    }
    let $, _e, ne, pe, ye, me, Re, Pe, Ne, je, Xe, $e, Ue, Ye, at, ht, De, Ke, tt, Bt, kt, Rt, qt, It, H = n;
    function vn(R, Y) {
      return t.getContext(R, Y);
    }
    try {
      const R = { alpha: !0, depth: r, stencil: o, antialias: h, premultipliedAlpha: c, preserveDrawingBuffer: u, powerPreference: d, failIfMajorPerformanceCaveat: f };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${pl}`), t.addEventListener("webglcontextlost", Nn, !1), t.addEventListener("webglcontextrestored", Fi, !1), t.addEventListener("webglcontextcreationerror", mr, !1), H === null) {
        const Y = "webgl2";
        if (H = vn(Y, R), H === null) throw vn(Y) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (R) {
      throw console.error("THREE.WebGLRenderer: " + R.message), R;
    }
    function ii() {
      $ = new Qm(H), $.init(), Rt = new b_(H, $), _e = new Ym(H, $, e, Rt), ne = new y_(H), _e.reverseDepthBuffer && ne.buffers.depth.setReversed(!0), pe = new ng(H), ye = new s_(), me = new x_(H, $, ne, ye, _e, Rt, pe), Re = new Zm(w), Pe = new $m(w), Ne = new jm(H), qt = new Xm(H, Ne), je = new eg(H, Ne, pe, qt), Xe = new rg(H, je, Ne, pe), tt = new ig(H, _e, me), ht = new Km(ye), $e = new o_(w, Re, Pe, $, _e, qt, ht), Ue = new A_(w, ye), Ye = new c_(), at = new f_($), Ke = new Wm(w, Re, Pe, ne, Xe, m, c), De = new __(w, Xe, _e), It = new P_(H, pe, _e, ne), Bt = new qm(H, $, pe), kt = new tg(H, $, pe), pe.programs = $e.programs, w.capabilities = _e, w.extensions = $, w.properties = ye, w.renderLists = Ye, w.shadowMap = De, w.state = ne, w.info = pe;
    }
    ii();
    const Ct = new w_(w, H);
    function Nn(R) {
      R.preventDefault(), E = !0;
    }
    function Fi() {
      E = !1;
      const R = pe.autoReset, Y = De.enabled, oe = De.autoUpdate, he = De.needsUpdate, ee = De.type;
      ii(), pe.autoReset = R, De.enabled = Y, De.autoUpdate = oe, De.needsUpdate = he, De.type = ee;
    }
    function mr(R) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", R.statusMessage);
    }
    function ri(R) {
      const Y = R.target;
      Y.removeEventListener("dispose", ri), function(oe) {
        (function(he) {
          const ee = ye.get(he).programs;
          ee !== void 0 && (ee.forEach(function(ve) {
            $e.releaseProgram(ve);
          }), he.isShaderMaterial && $e.releaseShaderCache(he));
        })(oe), ye.remove(oe);
      }(Y);
    }
    function Yn(R, Y, oe) {
      R.transparent === !0 && R.side === 2 && R.forceSinglePass === !1 ? (R.side = 1, R.needsUpdate = !0, oi(R, Y, oe), R.side = 0, R.needsUpdate = !0, oi(R, Y, oe), R.side = 2) : oi(R, Y, oe);
    }
    this.xr = Ct, this.getContext = function() {
      return H;
    }, this.getContextAttributes = function() {
      return H.getContextAttributes();
    }, this.forceContextLoss = function() {
      const R = $.get("WEBGL_lose_context");
      R && R.loseContext();
    }, this.forceContextRestore = function() {
      const R = $.get("WEBGL_lose_context");
      R && R.restoreContext();
    }, this.getPixelRatio = function() {
      return ue;
    }, this.setPixelRatio = function(R) {
      R !== void 0 && (ue = R, this.setSize(ae, ce, !1));
    }, this.getSize = function(R) {
      return R.set(ae, ce);
    }, this.setSize = function(R, Y, oe = !0) {
      Ct.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (ae = R, ce = Y, t.width = Math.floor(R * ue), t.height = Math.floor(Y * ue), oe === !0 && (t.style.width = R + "px", t.style.height = Y + "px"), this.setViewport(0, 0, R, Y));
    }, this.getDrawingBufferSize = function(R) {
      return R.set(ae * ue, ce * ue).floor();
    }, this.setDrawingBufferSize = function(R, Y, oe) {
      ae = R, ce = Y, ue = oe, t.width = Math.floor(R * oe), t.height = Math.floor(Y * oe), this.setViewport(0, 0, R, Y);
    }, this.getCurrentViewport = function(R) {
      return R.copy(Z);
    }, this.getViewport = function(R) {
      return R.copy(xe);
    }, this.setViewport = function(R, Y, oe, he) {
      R.isVector4 ? xe.set(R.x, R.y, R.z, R.w) : xe.set(R, Y, oe, he), ne.viewport(Z.copy(xe).multiplyScalar(ue).round());
    }, this.getScissor = function(R) {
      return R.copy(le);
    }, this.setScissor = function(R, Y, oe, he) {
      R.isVector4 ? le.set(R.x, R.y, R.z, R.w) : le.set(R, Y, oe, he), ne.scissor(re.copy(le).multiplyScalar(ue).round());
    }, this.getScissorTest = function() {
      return de;
    }, this.setScissorTest = function(R) {
      ne.setScissorTest(de = R);
    }, this.setOpaqueSort = function(R) {
      ge = R;
    }, this.setTransparentSort = function(R) {
      Ee = R;
    }, this.getClearColor = function(R) {
      return R.copy(Ke.getClearColor());
    }, this.setClearColor = function() {
      Ke.setClearColor.apply(Ke, arguments);
    }, this.getClearAlpha = function() {
      return Ke.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ke.setClearAlpha.apply(Ke, arguments);
    }, this.clear = function(R = !0, Y = !0, oe = !0) {
      let he = 0;
      if (R) {
        let ee = !1;
        if (O !== null) {
          const ve = O.texture.format;
          ee = ve === 1033 || ve === 1031 || ve === 1029;
        }
        if (ee) {
          const ve = O.texture.type, Ce = ve === 1009 || ve === 1014 || ve === 1012 || ve === 1020 || ve === 1017 || ve === 1018, Ie = Ke.getClearColor(), Be = Ke.getClearAlpha(), He = Ie.r, ze = Ie.g, Ve = Ie.b;
          Ce ? (v[0] = He, v[1] = ze, v[2] = Ve, v[3] = Be, H.clearBufferuiv(H.COLOR, 0, v)) : (y[0] = He, y[1] = ze, y[2] = Ve, y[3] = Be, H.clearBufferiv(H.COLOR, 0, y));
        } else he |= H.COLOR_BUFFER_BIT;
      }
      Y && (he |= H.DEPTH_BUFFER_BIT, H.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), oe && (he |= H.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), H.clear(he);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Nn, !1), t.removeEventListener("webglcontextrestored", Fi, !1), t.removeEventListener("webglcontextcreationerror", mr, !1), Ye.dispose(), at.dispose(), ye.dispose(), Re.dispose(), Pe.dispose(), Xe.dispose(), qt.dispose(), It.dispose(), $e.dispose(), Ct.dispose(), Ct.removeEventListener("sessionstart", gr), Ct.removeEventListener("sessionend", _r), On.stop();
    }, this.renderBufferDirect = function(R, Y, oe, he, ee, ve) {
      Y === null && (Y = q);
      const Ce = ee.isMesh && ee.matrixWorld.determinant() < 0, Ie = function(it, _t, Dt, Ze, Le) {
        _t.isScene !== !0 && (_t = q), me.resetTextureUnits();
        const nn = _t.fog, zi = Ze.isMeshStandardMaterial ? _t.environment : null, $r = O === null ? w.outputColorSpace : O.isXRRenderTarget === !0 ? O.texture.colorSpace : Mi, Bn = (Ze.isMeshStandardMaterial ? Pe : Re).get(Ze.envMap || zi), xr = Ze.vertexColors === !0 && !!Dt.attributes.color && Dt.attributes.color.itemSize === 4, Kn = !!Dt.attributes.tangent && (!!Ze.normalMap || Ze.anisotropy > 0), Yt = !!Dt.morphAttributes.position, br = !!Dt.morphAttributes.normal, Ei = !!Dt.morphAttributes.color;
        let Kt = 0;
        Ze.toneMapped && (O !== null && O.isXRRenderTarget !== !0 || (Kt = w.toneMapping));
        const zt = Dt.morphAttributes.position || Dt.morphAttributes.normal || Dt.morphAttributes.color, Sr = zt !== void 0 ? zt.length : 0, Je = ye.get(Ze), li = b.state.lights;
        if (Te === !0 && (L === !0 || it !== G)) {
          const rn = it === G && Ze.id === te;
          ht.setState(Ze, it, rn);
        }
        let At = !1;
        Ze.version === Je.__version ? Je.needsLights && Je.lightsStateVersion !== li.state.version || Je.outputColorSpace !== $r || Le.isBatchedMesh && Je.batching === !1 ? At = !0 : Le.isBatchedMesh || Je.batching !== !0 ? Le.isBatchedMesh && Je.batchingColor === !0 && Le.colorTexture === null || Le.isBatchedMesh && Je.batchingColor === !1 && Le.colorTexture !== null || Le.isInstancedMesh && Je.instancing === !1 ? At = !0 : Le.isInstancedMesh || Je.instancing !== !0 ? Le.isSkinnedMesh && Je.skinning === !1 ? At = !0 : Le.isSkinnedMesh || Je.skinning !== !0 ? Le.isInstancedMesh && Je.instancingColor === !0 && Le.instanceColor === null || Le.isInstancedMesh && Je.instancingColor === !1 && Le.instanceColor !== null || Le.isInstancedMesh && Je.instancingMorph === !0 && Le.morphTexture === null || Le.isInstancedMesh && Je.instancingMorph === !1 && Le.morphTexture !== null || Je.envMap !== Bn || Ze.fog === !0 && Je.fog !== nn ? At = !0 : Je.numClippingPlanes === void 0 || Je.numClippingPlanes === ht.numPlanes && Je.numIntersection === ht.numIntersection ? (Je.vertexAlphas !== xr || Je.vertexTangents !== Kn || Je.morphTargets !== Yt || Je.morphNormals !== br || Je.morphColors !== Ei || Je.toneMapping !== Kt || Je.morphTargetsCount !== Sr) && (At = !0) : At = !0 : At = !0 : At = !0 : At = !0 : (At = !0, Je.__version = Ze.version);
        let ln = Je.currentProgram;
        At === !0 && (ln = oi(Ze, _t, Le));
        let Zn = !1, kn = !1, ut = !1;
        const vt = ln.getUniforms(), cn = Je.uniforms;
        if (ne.useProgram(ln.program) && (Zn = !0, kn = !0, ut = !0), Ze.id !== te && (te = Ze.id, kn = !0), Zn || G !== it) {
          _e.reverseDepthBuffer ? (A.copy(it.projectionMatrix), function(zn) {
            const x = zn.elements;
            x[2] = 0.5 * x[2] + 0.5 * x[3], x[6] = 0.5 * x[6] + 0.5 * x[7], x[10] = 0.5 * x[10] + 0.5 * x[11], x[14] = 0.5 * x[14] + 0.5 * x[15];
          }(A), function(zn) {
            const x = zn.elements;
            x[11] === -1 ? (x[10] = -x[10] - 1, x[14] = -x[14]) : (x[10] = -x[10], x[14] = 1 - x[14]);
          }(A), vt.setValue(H, "projectionMatrix", A)) : vt.setValue(H, "projectionMatrix", it.projectionMatrix), vt.setValue(H, "viewMatrix", it.matrixWorldInverse);
          const rn = vt.map.cameraPosition;
          rn !== void 0 && rn.setValue(H, Q.setFromMatrixPosition(it.matrixWorld)), _e.logarithmicDepthBuffer && vt.setValue(H, "logDepthBufFC", 2 / (Math.log(it.far + 1) / Math.LN2)), (Ze.isMeshPhongMaterial || Ze.isMeshToonMaterial || Ze.isMeshLambertMaterial || Ze.isMeshBasicMaterial || Ze.isMeshStandardMaterial || Ze.isShaderMaterial) && vt.setValue(H, "isOrthographic", it.isOrthographicCamera === !0), G !== it && (G = it, kn = !0, ut = !0);
        }
        if (Le.isSkinnedMesh) {
          vt.setOptional(H, Le, "bindMatrix"), vt.setOptional(H, Le, "bindMatrixInverse");
          const rn = Le.skeleton;
          rn && (rn.boneTexture === null && rn.computeBoneTexture(), vt.setValue(H, "boneTexture", rn.boneTexture, me));
        }
        Le.isBatchedMesh && (vt.setOptional(H, Le, "batchingTexture"), vt.setValue(H, "batchingTexture", Le._matricesTexture, me), vt.setOptional(H, Le, "batchingIdTexture"), vt.setValue(H, "batchingIdTexture", Le._indirectTexture, me), vt.setOptional(H, Le, "batchingColorTexture"), Le._colorsTexture !== null && vt.setValue(H, "batchingColorTexture", Le._colorsTexture, me));
        const wi = Dt.morphAttributes;
        wi.position === void 0 && wi.normal === void 0 && wi.color === void 0 || tt.update(Le, Dt, ln), (kn || Je.receiveShadow !== Le.receiveShadow) && (Je.receiveShadow = Le.receiveShadow, vt.setValue(H, "receiveShadow", Le.receiveShadow)), Ze.isMeshGouraudMaterial && Ze.envMap !== null && (cn.envMap.value = Bn, cn.flipEnvMap.value = Bn.isCubeTexture && Bn.isRenderTargetTexture === !1 ? -1 : 1), Ze.isMeshStandardMaterial && Ze.envMap === null && _t.environment !== null && (cn.envMapIntensity.value = _t.environmentIntensity), kn && (vt.setValue(H, "toneMappingExposure", w.toneMappingExposure), Je.needsLights && ($t = ut, (dn = cn).ambientLightColor.needsUpdate = $t, dn.lightProbe.needsUpdate = $t, dn.directionalLights.needsUpdate = $t, dn.directionalLightShadows.needsUpdate = $t, dn.pointLights.needsUpdate = $t, dn.pointLightShadows.needsUpdate = $t, dn.spotLights.needsUpdate = $t, dn.spotLightShadows.needsUpdate = $t, dn.rectAreaLights.needsUpdate = $t, dn.hemisphereLights.needsUpdate = $t), nn && Ze.fog === !0 && Ue.refreshFogUniforms(cn, nn), Ue.refreshMaterialUniforms(cn, Ze, ue, ce, b.state.transmissionRenderTarget[it.id]), bo.upload(H, si(Je), cn, me));
        var dn, $t;
        if (Ze.isShaderMaterial && Ze.uniformsNeedUpdate === !0 && (bo.upload(H, si(Je), cn, me), Ze.uniformsNeedUpdate = !1), Ze.isSpriteMaterial && vt.setValue(H, "center", Le.center), vt.setValue(H, "modelViewMatrix", Le.modelViewMatrix), vt.setValue(H, "normalMatrix", Le.normalMatrix), vt.setValue(H, "modelMatrix", Le.matrixWorld), Ze.isShaderMaterial || Ze.isRawShaderMaterial) {
          const rn = Ze.uniformsGroups;
          for (let zn = 0, x = rn.length; zn < x; zn++) {
            const C = rn[zn];
            It.update(C, ln), It.bind(C, ln);
          }
        }
        return ln;
      }(R, Y, oe, he, ee);
      ne.setMaterial(he, Ce);
      let Be = oe.index, He = 1;
      if (he.wireframe === !0) {
        if (Be = je.getWireframeAttribute(oe), Be === void 0) return;
        He = 2;
      }
      const ze = oe.drawRange, Ve = oe.attributes.position;
      let nt = ze.start * He, pt = (ze.start + ze.count) * He;
      ve !== null && (nt = Math.max(nt, ve.start * He), pt = Math.min(pt, (ve.start + ve.count) * He)), Be !== null ? (nt = Math.max(nt, 0), pt = Math.min(pt, Be.count)) : Ve != null && (nt = Math.max(nt, 0), pt = Math.min(pt, Ve.count));
      const ft = pt - nt;
      if (ft < 0 || ft === 1 / 0) return;
      let mt;
      qt.setup(ee, he, Ie, oe, Be);
      let ot = Bt;
      if (Be !== null && (mt = Ne.get(Be), ot = kt, ot.setIndex(mt)), ee.isMesh) he.wireframe === !0 ? (ne.setLineWidth(he.wireframeLinewidth * K()), ot.setMode(H.LINES)) : ot.setMode(H.TRIANGLES);
      else if (ee.isLine) {
        let it = he.linewidth;
        it === void 0 && (it = 1), ne.setLineWidth(it * K()), ee.isLineSegments ? ot.setMode(H.LINES) : ee.isLineLoop ? ot.setMode(H.LINE_LOOP) : ot.setMode(H.LINE_STRIP);
      } else ee.isPoints ? ot.setMode(H.POINTS) : ee.isSprite && ot.setMode(H.TRIANGLES);
      if (ee.isBatchedMesh) if (ee._multiDrawInstances !== null) ot.renderMultiDrawInstances(ee._multiDrawStarts, ee._multiDrawCounts, ee._multiDrawCount, ee._multiDrawInstances);
      else if ($.get("WEBGL_multi_draw")) ot.renderMultiDraw(ee._multiDrawStarts, ee._multiDrawCounts, ee._multiDrawCount);
      else {
        const it = ee._multiDrawStarts, _t = ee._multiDrawCounts, Dt = ee._multiDrawCount, Ze = Be ? Ne.get(Be).bytesPerElement : 1, Le = ye.get(he).currentProgram.getUniforms();
        for (let nn = 0; nn < Dt; nn++) Le.setValue(H, "_gl_DrawID", nn), ot.render(it[nn] / Ze, _t[nn]);
      }
      else if (ee.isInstancedMesh) ot.renderInstances(nt, ft, ee.count);
      else if (oe.isInstancedBufferGeometry) {
        const it = oe._maxInstanceCount !== void 0 ? oe._maxInstanceCount : 1 / 0, _t = Math.min(oe.instanceCount, it);
        ot.renderInstances(nt, ft, _t);
      } else ot.render(nt, ft);
    }, this.compile = function(R, Y, oe = null) {
      oe === null && (oe = R), b = at.get(oe), b.init(Y), T.push(b), oe.traverseVisible(function(ee) {
        ee.isLight && ee.layers.test(Y.layers) && (b.pushLight(ee), ee.castShadow && b.pushShadow(ee));
      }), R !== oe && R.traverseVisible(function(ee) {
        ee.isLight && ee.layers.test(Y.layers) && (b.pushLight(ee), ee.castShadow && b.pushShadow(ee));
      }), b.setupLights();
      const he = /* @__PURE__ */ new Set();
      return R.traverse(function(ee) {
        if (!(ee.isMesh || ee.isPoints || ee.isLine || ee.isSprite)) return;
        const ve = ee.material;
        if (ve) if (Array.isArray(ve)) for (let Ce = 0; Ce < ve.length; Ce++) {
          const Ie = ve[Ce];
          Yn(Ie, oe, ee), he.add(Ie);
        }
        else Yn(ve, oe, ee), he.add(ve);
      }), T.pop(), b = null, he;
    }, this.compileAsync = function(R, Y, oe = null) {
      const he = this.compile(R, Y, oe);
      return new Promise((ee) => {
        function ve() {
          he.forEach(function(Ce) {
            ye.get(Ce).currentProgram.isReady() && he.delete(Ce);
          }), he.size !== 0 ? setTimeout(ve, 10) : ee(R);
        }
        $.get("KHR_parallel_shader_compile") !== null ? ve() : setTimeout(ve, 10);
      });
    };
    let Bi = null;
    function gr() {
      On.stop();
    }
    function _r() {
      On.start();
    }
    const On = new Gu();
    function ki(R, Y, oe, he) {
      if (R.visible === !1) return;
      if (R.layers.test(Y.layers)) {
        if (R.isGroup) oe = R.renderOrder;
        else if (R.isLOD) R.autoUpdate === !0 && R.update(Y);
        else if (R.isLight) b.pushLight(R), R.castShadow && b.pushShadow(R);
        else if (R.isSprite) {
          if (!R.frustumCulled || Se.intersectsSprite(R)) {
            he && W.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);
            const ve = Xe.update(R), Ce = R.material;
            Ce.visible && M.push(R, ve, Ce, oe, W.z, null);
          }
        } else if ((R.isMesh || R.isLine || R.isPoints) && (!R.frustumCulled || Se.intersectsObject(R))) {
          const ve = Xe.update(R), Ce = R.material;
          if (he && (R.boundingSphere !== void 0 ? (R.boundingSphere === null && R.computeBoundingSphere(), W.copy(R.boundingSphere.center)) : (ve.boundingSphere === null && ve.computeBoundingSphere(), W.copy(ve.boundingSphere.center)), W.applyMatrix4(R.matrixWorld).applyMatrix4(j)), Array.isArray(Ce)) {
            const Ie = ve.groups;
            for (let Be = 0, He = Ie.length; Be < He; Be++) {
              const ze = Ie[Be], Ve = Ce[ze.materialIndex];
              Ve && Ve.visible && M.push(R, ve, Ve, oe, W.z, ze);
            }
          } else Ce.visible && M.push(R, ve, Ce, oe, W.z, null);
        }
      }
      const ee = R.children;
      for (let ve = 0, Ce = ee.length; ve < Ce; ve++) ki(ee[ve], Y, oe, he);
    }
    function Fn(R, Y, oe, he) {
      const ee = R.opaque, ve = R.transmissive, Ce = R.transparent;
      b.setupLightsView(oe), Te === !0 && ht.setGlobalState(w.clippingPlanes, oe), he && ne.viewport(Z.copy(he)), ee.length > 0 && An(ee, Y, oe), ve.length > 0 && An(ve, Y, oe), Ce.length > 0 && An(Ce, Y, oe), ne.buffers.depth.setTest(!0), ne.buffers.depth.setMask(!0), ne.buffers.color.setMask(!0), ne.setPolygonOffset(!1);
    }
    function ai(R, Y, oe, he) {
      if ((oe.isScene === !0 ? oe.overrideMaterial : null) !== null) return;
      b.state.transmissionRenderTarget[he.id] === void 0 && (b.state.transmissionRenderTarget[he.id] = new fr(1, 1, { generateMipmaps: !0, type: $.has("EXT_color_buffer_half_float") || $.has("EXT_color_buffer_float") ? 1016 : 1009, minFilter: 1008, samples: 4, stencilBuffer: o, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: dt.workingColorSpace }));
      const ee = b.state.transmissionRenderTarget[he.id], ve = he.viewport || Z;
      ee.setSize(ve.z, ve.w);
      const Ce = w.getRenderTarget();
      w.setRenderTarget(ee), w.getClearColor(V), B = w.getClearAlpha(), B < 1 && w.setClearColor(16777215, 0.5), w.clear(), D && Ke.render(oe);
      const Ie = w.toneMapping;
      w.toneMapping = 0;
      const Be = he.viewport;
      if (he.viewport !== void 0 && (he.viewport = void 0), b.setupLightsView(he), Te === !0 && ht.setGlobalState(w.clippingPlanes, he), An(R, oe, he), me.updateMultisampleRenderTarget(ee), me.updateRenderTargetMipmap(ee), $.has("WEBGL_multisampled_render_to_texture") === !1) {
        let He = !1;
        for (let ze = 0, Ve = Y.length; ze < Ve; ze++) {
          const nt = Y[ze], pt = nt.object, ft = nt.geometry, mt = nt.material, ot = nt.group;
          if (mt.side === 2 && pt.layers.test(he.layers)) {
            const it = mt.side;
            mt.side = 1, mt.needsUpdate = !0, vr(pt, oe, he, ft, mt, ot), mt.side = it, mt.needsUpdate = !0, He = !0;
          }
        }
        He === !0 && (me.updateMultisampleRenderTarget(ee), me.updateRenderTargetMipmap(ee));
      }
      w.setRenderTarget(Ce), w.setClearColor(V, B), Be !== void 0 && (he.viewport = Be), w.toneMapping = Ie;
    }
    function An(R, Y, oe) {
      const he = Y.isScene === !0 ? Y.overrideMaterial : null;
      for (let ee = 0, ve = R.length; ee < ve; ee++) {
        const Ce = R[ee], Ie = Ce.object, Be = Ce.geometry, He = he === null ? Ce.material : he, ze = Ce.group;
        Ie.layers.test(oe.layers) && vr(Ie, Y, oe, Be, He, ze);
      }
    }
    function vr(R, Y, oe, he, ee, ve) {
      R.onBeforeRender(w, Y, oe, he, ee, ve), R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse, R.matrixWorld), R.normalMatrix.getNormalMatrix(R.modelViewMatrix), ee.onBeforeRender(w, Y, oe, he, R, ve), ee.transparent === !0 && ee.side === 2 && ee.forceSinglePass === !1 ? (ee.side = 1, ee.needsUpdate = !0, w.renderBufferDirect(oe, Y, he, ee, R, ve), ee.side = 0, ee.needsUpdate = !0, w.renderBufferDirect(oe, Y, he, ee, R, ve), ee.side = 2) : w.renderBufferDirect(oe, Y, he, ee, R, ve), R.onAfterRender(w, Y, oe, he, ee, ve);
    }
    function oi(R, Y, oe) {
      Y.isScene !== !0 && (Y = q);
      const he = ye.get(R), ee = b.state.lights, ve = b.state.shadowsArray, Ce = ee.state.version, Ie = $e.getParameters(R, ee.state, ve, Y, oe), Be = $e.getProgramCacheKey(Ie);
      let He = he.programs;
      he.environment = R.isMeshStandardMaterial ? Y.environment : null, he.fog = Y.fog, he.envMap = (R.isMeshStandardMaterial ? Pe : Re).get(R.envMap || he.environment), he.envMapRotation = he.environment !== null && R.envMap === null ? Y.environmentRotation : R.envMapRotation, He === void 0 && (R.addEventListener("dispose", ri), He = /* @__PURE__ */ new Map(), he.programs = He);
      let ze = He.get(Be);
      if (ze !== void 0) {
        if (he.currentProgram === ze && he.lightsStateVersion === Ce) return yr(R, Ie), ze;
      } else Ie.uniforms = $e.getUniforms(R), R.onBeforeCompile(Ie, w), ze = $e.acquireProgram(Ie, Be), He.set(Be, ze), he.uniforms = Ie.uniforms;
      const Ve = he.uniforms;
      return (R.isShaderMaterial || R.isRawShaderMaterial) && R.clipping !== !0 || (Ve.clippingPlanes = ht.uniform), yr(R, Ie), he.needsLights = function(nt) {
        return nt.isMeshLambertMaterial || nt.isMeshToonMaterial || nt.isMeshPhongMaterial || nt.isMeshStandardMaterial || nt.isShadowMaterial || nt.isShaderMaterial && nt.lights === !0;
      }(R), he.lightsStateVersion = Ce, he.needsLights && (Ve.ambientLightColor.value = ee.state.ambient, Ve.lightProbe.value = ee.state.probe, Ve.directionalLights.value = ee.state.directional, Ve.directionalLightShadows.value = ee.state.directionalShadow, Ve.spotLights.value = ee.state.spot, Ve.spotLightShadows.value = ee.state.spotShadow, Ve.rectAreaLights.value = ee.state.rectArea, Ve.ltc_1.value = ee.state.rectAreaLTC1, Ve.ltc_2.value = ee.state.rectAreaLTC2, Ve.pointLights.value = ee.state.point, Ve.pointLightShadows.value = ee.state.pointShadow, Ve.hemisphereLights.value = ee.state.hemi, Ve.directionalShadowMap.value = ee.state.directionalShadowMap, Ve.directionalShadowMatrix.value = ee.state.directionalShadowMatrix, Ve.spotShadowMap.value = ee.state.spotShadowMap, Ve.spotLightMatrix.value = ee.state.spotLightMatrix, Ve.spotLightMap.value = ee.state.spotLightMap, Ve.pointShadowMap.value = ee.state.pointShadowMap, Ve.pointShadowMatrix.value = ee.state.pointShadowMatrix), he.currentProgram = ze, he.uniformsList = null, ze;
    }
    function si(R) {
      if (R.uniformsList === null) {
        const Y = R.currentProgram.getUniforms();
        R.uniformsList = bo.seqWithValue(Y.seq, R.uniforms);
      }
      return R.uniformsList;
    }
    function yr(R, Y) {
      const oe = ye.get(R);
      oe.outputColorSpace = Y.outputColorSpace, oe.batching = Y.batching, oe.batchingColor = Y.batchingColor, oe.instancing = Y.instancing, oe.instancingColor = Y.instancingColor, oe.instancingMorph = Y.instancingMorph, oe.skinning = Y.skinning, oe.morphTargets = Y.morphTargets, oe.morphNormals = Y.morphNormals, oe.morphColors = Y.morphColors, oe.morphTargetsCount = Y.morphTargetsCount, oe.numClippingPlanes = Y.numClippingPlanes, oe.numIntersection = Y.numClipIntersection, oe.vertexAlphas = Y.vertexAlphas, oe.vertexTangents = Y.vertexTangents, oe.toneMapping = Y.toneMapping;
    }
    On.setAnimationLoop(function(R) {
      Bi && Bi(R);
    }), typeof self < "u" && On.setContext(self), this.setAnimationLoop = function(R) {
      Bi = R, Ct.setAnimationLoop(R), R === null ? On.stop() : On.start();
    }, Ct.addEventListener("sessionstart", gr), Ct.addEventListener("sessionend", _r), this.render = function(R, Y) {
      if (Y !== void 0 && Y.isCamera !== !0) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      if (E === !0) return;
      if (R.matrixWorldAutoUpdate === !0 && R.updateMatrixWorld(), Y.parent === null && Y.matrixWorldAutoUpdate === !0 && Y.updateMatrixWorld(), Ct.enabled === !0 && Ct.isPresenting === !0 && (Ct.cameraAutoUpdate === !0 && Ct.updateCamera(Y), Y = Ct.getCamera()), R.isScene === !0 && R.onBeforeRender(w, R, Y, O), b = at.get(R, T.length), b.init(Y), T.push(b), j.multiplyMatrices(Y.projectionMatrix, Y.matrixWorldInverse), Se.setFromProjectionMatrix(j), L = this.localClippingEnabled, Te = ht.init(this.clippingPlanes, L), M = Ye.get(R, _.length), M.init(), _.push(M), Ct.enabled === !0 && Ct.isPresenting === !0) {
        const ve = w.xr.getDepthSensingMesh();
        ve !== null && ki(ve, Y, -1 / 0, w.sortObjects);
      }
      ki(R, Y, 0, w.sortObjects), M.finish(), w.sortObjects === !0 && M.sort(ge, Ee), D = Ct.enabled === !1 || Ct.isPresenting === !1 || Ct.hasDepthSensing() === !1, D && Ke.addToRenderList(M, R), this.info.render.frame++, Te === !0 && ht.beginShadows();
      const oe = b.state.shadowsArray;
      De.render(oe, R, Y), Te === !0 && ht.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const he = M.opaque, ee = M.transmissive;
      if (b.setupLights(), Y.isArrayCamera) {
        const ve = Y.cameras;
        if (ee.length > 0) for (let Ce = 0, Ie = ve.length; Ce < Ie; Ce++)
          ai(he, ee, R, ve[Ce]);
        D && Ke.render(R);
        for (let Ce = 0, Ie = ve.length; Ce < Ie; Ce++) {
          const Be = ve[Ce];
          Fn(M, R, Be, Be.viewport);
        }
      } else ee.length > 0 && ai(he, ee, R, Y), D && Ke.render(R), Fn(M, R, Y);
      O !== null && (me.updateMultisampleRenderTarget(O), me.updateRenderTargetMipmap(O)), R.isScene === !0 && R.onAfterRender(w, R, Y), qt.resetDefaultState(), te = -1, G = null, T.pop(), T.length > 0 ? (b = T[T.length - 1], Te === !0 && ht.setGlobalState(w.clippingPlanes, b.state.camera)) : b = null, _.pop(), M = _.length > 0 ? _[_.length - 1] : null;
    }, this.getActiveCubeFace = function() {
      return U;
    }, this.getActiveMipmapLevel = function() {
      return N;
    }, this.getRenderTarget = function() {
      return O;
    }, this.setRenderTargetTextures = function(R, Y, oe) {
      ye.get(R.texture).__webglTexture = Y, ye.get(R.depthTexture).__webglTexture = oe;
      const he = ye.get(R);
      he.__hasExternalTextures = !0, he.__autoAllocateDepthBuffer = oe === void 0, he.__autoAllocateDepthBuffer || $.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), he.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(R, Y) {
      const oe = ye.get(R);
      oe.__webglFramebuffer = Y, oe.__useDefaultFramebuffer = Y === void 0;
    }, this.setRenderTarget = function(R, Y = 0, oe = 0) {
      O = R, U = Y, N = oe;
      let he = !0, ee = null, ve = !1, Ce = !1;
      if (R) {
        const Ie = ye.get(R);
        if (Ie.__useDefaultFramebuffer !== void 0) ne.bindFramebuffer(H.FRAMEBUFFER, null), he = !1;
        else if (Ie.__webglFramebuffer === void 0) me.setupRenderTarget(R);
        else if (Ie.__hasExternalTextures) me.rebindTextures(R, ye.get(R.texture).__webglTexture, ye.get(R.depthTexture).__webglTexture);
        else if (R.depthBuffer) {
          const ze = R.depthTexture;
          if (Ie.__boundDepthTexture !== ze) {
            if (ze !== null && ye.has(ze) && (R.width !== ze.image.width || R.height !== ze.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            me.setupDepthRenderbuffer(R);
          }
        }
        const Be = R.texture;
        (Be.isData3DTexture || Be.isDataArrayTexture || Be.isCompressedArrayTexture) && (Ce = !0);
        const He = ye.get(R).__webglFramebuffer;
        R.isWebGLCubeRenderTarget ? (ee = Array.isArray(He[Y]) ? He[Y][oe] : He[Y], ve = !0) : ee = R.samples > 0 && me.useMultisampledRTT(R) === !1 ? ye.get(R).__webglMultisampledFramebuffer : Array.isArray(He) ? He[oe] : He, Z.copy(R.viewport), re.copy(R.scissor), F = R.scissorTest;
      } else Z.copy(xe).multiplyScalar(ue).floor(), re.copy(le).multiplyScalar(ue).floor(), F = de;
      if (ne.bindFramebuffer(H.FRAMEBUFFER, ee) && he && ne.drawBuffers(R, ee), ne.viewport(Z), ne.scissor(re), ne.setScissorTest(F), ve) {
        const Ie = ye.get(R.texture);
        H.framebufferTexture2D(H.FRAMEBUFFER, H.COLOR_ATTACHMENT0, H.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Ie.__webglTexture, oe);
      } else if (Ce) {
        const Ie = ye.get(R.texture), Be = Y || 0;
        H.framebufferTextureLayer(H.FRAMEBUFFER, H.COLOR_ATTACHMENT0, Ie.__webglTexture, oe || 0, Be);
      }
      te = -1;
    }, this.readRenderTargetPixels = function(R, Y, oe, he, ee, ve, Ce) {
      if (!R || !R.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Ie = ye.get(R).__webglFramebuffer;
      if (R.isWebGLCubeRenderTarget && Ce !== void 0 && (Ie = Ie[Ce]), Ie) {
        ne.bindFramebuffer(H.FRAMEBUFFER, Ie);
        try {
          const Be = R.texture, He = Be.format, ze = Be.type;
          if (!_e.textureFormatReadable(He)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          if (!_e.textureTypeReadable(ze)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          Y >= 0 && Y <= R.width - he && oe >= 0 && oe <= R.height - ee && H.readPixels(Y, oe, he, ee, Rt.convert(He), Rt.convert(ze), ve);
        } finally {
          const Be = O !== null ? ye.get(O).__webglFramebuffer : null;
          ne.bindFramebuffer(H.FRAMEBUFFER, Be);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(R, Y, oe, he, ee, ve, Ce) {
      if (!R || !R.isWebGLRenderTarget) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Ie = ye.get(R).__webglFramebuffer;
      if (R.isWebGLCubeRenderTarget && Ce !== void 0 && (Ie = Ie[Ce]), Ie) {
        const Be = R.texture, He = Be.format, ze = Be.type;
        if (!_e.textureFormatReadable(He)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!_e.textureTypeReadable(ze)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (Y >= 0 && Y <= R.width - he && oe >= 0 && oe <= R.height - ee) {
          ne.bindFramebuffer(H.FRAMEBUFFER, Ie);
          const Ve = H.createBuffer();
          H.bindBuffer(H.PIXEL_PACK_BUFFER, Ve), H.bufferData(H.PIXEL_PACK_BUFFER, ve.byteLength, H.STREAM_READ), H.readPixels(Y, oe, he, ee, Rt.convert(He), Rt.convert(ze), 0);
          const nt = O !== null ? ye.get(O).__webglFramebuffer : null;
          ne.bindFramebuffer(H.FRAMEBUFFER, nt);
          const pt = H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return H.flush(), await function(ft, mt, ot) {
            return new Promise(function(it, _t) {
              setTimeout(function Dt() {
                switch (ft.clientWaitSync(mt, ft.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                  case ft.WAIT_FAILED:
                    _t();
                    break;
                  case ft.TIMEOUT_EXPIRED:
                    setTimeout(Dt, ot);
                    break;
                  default:
                    it();
                }
              }, ot);
            });
          }(H, pt, 4), H.bindBuffer(H.PIXEL_PACK_BUFFER, Ve), H.getBufferSubData(H.PIXEL_PACK_BUFFER, 0, ve), H.deleteBuffer(Ve), H.deleteSync(pt), ve;
        }
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(R, Y = null, oe = 0) {
      R.isTexture !== !0 && (xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."), Y = arguments[0] || null, R = arguments[1]);
      const he = Math.pow(2, -oe), ee = Math.floor(R.image.width * he), ve = Math.floor(R.image.height * he), Ce = Y !== null ? Y.x : 0, Ie = Y !== null ? Y.y : 0;
      me.setTexture2D(R, 0), H.copyTexSubImage2D(H.TEXTURE_2D, oe, 0, 0, Ce, Ie, ee, ve), ne.unbindTexture();
    }, this.copyTextureToTexture = function(R, Y, oe = null, he = null, ee = 0) {
      let ve, Ce, Ie, Be, He, ze;
      R.isTexture !== !0 && (xo("WebGLRenderer: copyTextureToTexture function signature has changed."), he = arguments[0] || null, R = arguments[1], Y = arguments[2], ee = arguments[3] || 0, oe = null), oe !== null ? (ve = oe.max.x - oe.min.x, Ce = oe.max.y - oe.min.y, Ie = oe.min.x, Be = oe.min.y) : (ve = R.image.width, Ce = R.image.height, Ie = 0, Be = 0), he !== null ? (He = he.x, ze = he.y) : (He = 0, ze = 0);
      const Ve = Rt.convert(Y.format), nt = Rt.convert(Y.type);
      me.setTexture2D(Y, 0), H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, Y.flipY), H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Y.premultiplyAlpha), H.pixelStorei(H.UNPACK_ALIGNMENT, Y.unpackAlignment);
      const pt = H.getParameter(H.UNPACK_ROW_LENGTH), ft = H.getParameter(H.UNPACK_IMAGE_HEIGHT), mt = H.getParameter(H.UNPACK_SKIP_PIXELS), ot = H.getParameter(H.UNPACK_SKIP_ROWS), it = H.getParameter(H.UNPACK_SKIP_IMAGES), _t = R.isCompressedTexture ? R.mipmaps[ee] : R.image;
      H.pixelStorei(H.UNPACK_ROW_LENGTH, _t.width), H.pixelStorei(H.UNPACK_IMAGE_HEIGHT, _t.height), H.pixelStorei(H.UNPACK_SKIP_PIXELS, Ie), H.pixelStorei(H.UNPACK_SKIP_ROWS, Be), R.isDataTexture ? H.texSubImage2D(H.TEXTURE_2D, ee, He, ze, ve, Ce, Ve, nt, _t.data) : R.isCompressedTexture ? H.compressedTexSubImage2D(H.TEXTURE_2D, ee, He, ze, _t.width, _t.height, Ve, _t.data) : H.texSubImage2D(H.TEXTURE_2D, ee, He, ze, ve, Ce, Ve, nt, _t), H.pixelStorei(H.UNPACK_ROW_LENGTH, pt), H.pixelStorei(H.UNPACK_IMAGE_HEIGHT, ft), H.pixelStorei(H.UNPACK_SKIP_PIXELS, mt), H.pixelStorei(H.UNPACK_SKIP_ROWS, ot), H.pixelStorei(H.UNPACK_SKIP_IMAGES, it), ee === 0 && Y.generateMipmaps && H.generateMipmap(H.TEXTURE_2D), ne.unbindTexture();
    }, this.copyTextureToTexture3D = function(R, Y, oe = null, he = null, ee = 0) {
      let ve, Ce, Ie, Be, He, ze, Ve, nt, pt;
      R.isTexture !== !0 && (xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."), oe = arguments[0] || null, he = arguments[1] || null, R = arguments[2], Y = arguments[3], ee = arguments[4] || 0);
      const ft = R.isCompressedTexture ? R.mipmaps[ee] : R.image;
      oe !== null ? (ve = oe.max.x - oe.min.x, Ce = oe.max.y - oe.min.y, Ie = oe.max.z - oe.min.z, Be = oe.min.x, He = oe.min.y, ze = oe.min.z) : (ve = ft.width, Ce = ft.height, Ie = ft.depth, Be = 0, He = 0, ze = 0), he !== null ? (Ve = he.x, nt = he.y, pt = he.z) : (Ve = 0, nt = 0, pt = 0);
      const mt = Rt.convert(Y.format), ot = Rt.convert(Y.type);
      let it;
      if (Y.isData3DTexture) me.setTexture3D(Y, 0), it = H.TEXTURE_3D;
      else {
        if (!Y.isDataArrayTexture && !Y.isCompressedArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        me.setTexture2DArray(Y, 0), it = H.TEXTURE_2D_ARRAY;
      }
      H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, Y.flipY), H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Y.premultiplyAlpha), H.pixelStorei(H.UNPACK_ALIGNMENT, Y.unpackAlignment);
      const _t = H.getParameter(H.UNPACK_ROW_LENGTH), Dt = H.getParameter(H.UNPACK_IMAGE_HEIGHT), Ze = H.getParameter(H.UNPACK_SKIP_PIXELS), Le = H.getParameter(H.UNPACK_SKIP_ROWS), nn = H.getParameter(H.UNPACK_SKIP_IMAGES);
      H.pixelStorei(H.UNPACK_ROW_LENGTH, ft.width), H.pixelStorei(H.UNPACK_IMAGE_HEIGHT, ft.height), H.pixelStorei(H.UNPACK_SKIP_PIXELS, Be), H.pixelStorei(H.UNPACK_SKIP_ROWS, He), H.pixelStorei(H.UNPACK_SKIP_IMAGES, ze), R.isDataTexture || R.isData3DTexture ? H.texSubImage3D(it, ee, Ve, nt, pt, ve, Ce, Ie, mt, ot, ft.data) : Y.isCompressedArrayTexture ? H.compressedTexSubImage3D(it, ee, Ve, nt, pt, ve, Ce, Ie, mt, ft.data) : H.texSubImage3D(it, ee, Ve, nt, pt, ve, Ce, Ie, mt, ot, ft), H.pixelStorei(H.UNPACK_ROW_LENGTH, _t), H.pixelStorei(H.UNPACK_IMAGE_HEIGHT, Dt), H.pixelStorei(H.UNPACK_SKIP_PIXELS, Ze), H.pixelStorei(H.UNPACK_SKIP_ROWS, Le), H.pixelStorei(H.UNPACK_SKIP_IMAGES, nn), ee === 0 && Y.generateMipmaps && H.generateMipmap(it), ne.unbindTexture();
    }, this.initRenderTarget = function(R) {
      ye.get(R).__webglFramebuffer === void 0 && me.setupRenderTarget(R);
    }, this.initTexture = function(R) {
      R.isCubeTexture ? me.setTextureCube(R, 0) : R.isData3DTexture ? me.setTexture3D(R, 0) : R.isDataArrayTexture || R.isCompressedArrayTexture ? me.setTexture2DArray(R, 0) : me.setTexture2D(R, 0), ne.unbindTexture();
    }, this.resetState = function() {
      U = 0, N = 0, O = null, ne.reset(), qt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === wl ? "display-p3" : "srgb", t.unpackColorSpace = dt.workingColorSpace === Io ? "display-p3" : "srgb";
  }
}
class Zu extends tn {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ti(), this.environmentIntensity = 1, this.environmentRotation = new ti(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Ju extends Gt {
  constructor(e = null, t = 1, n = 1, r, o, s, h, c, u = 1003, d = 1003, f, m) {
    super(null, s, h, c, u, d, r, o, f, m), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class R_ extends Kr {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new lt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const mu = new Tt(), gl = new Uo(), lo = new Lo(), co = new X();
class gu extends tn {
  constructor(e = new Un(), t = new R_()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, o = e.params.Points.threshold, s = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), lo.copy(n.boundingSphere), lo.applyMatrix4(r), lo.radius += o, e.ray.intersectsSphere(lo) === !1) return;
    mu.copy(r).invert(), gl.copy(e.ray).applyMatrix4(mu);
    const h = o / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = h * h, u = n.index, d = n.attributes.position;
    if (u !== null)
      for (let f = Math.max(0, s.start), m = Math.min(u.count, s.start + s.count); f < m; f++) {
        const v = u.getX(f);
        co.fromBufferAttribute(d, v), _u(co, v, c, r, e, t, this);
      }
    else
      for (let f = Math.max(0, s.start), m = Math.min(d.count, s.start + s.count); f < m; f++) co.fromBufferAttribute(d, f), _u(co, f, c, r, e, t, this);
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = n.length; r < o; r++) {
          const s = n[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = r;
        }
      }
    }
  }
}
function _u(i, e, t, n, r, o, s) {
  const h = gl.distanceSqToPoint(i);
  if (h < t) {
    const c = new X();
    gl.closestPointToPoint(i, c), c.applyMatrix4(n);
    const u = r.ray.origin.distanceTo(c);
    if (u < r.near || u > r.far) return;
    o.push({ distance: u, distanceToRay: Math.sqrt(h), point: c, index: e, face: null, faceIndex: null, barycoord: null, object: s });
  }
}
class Rl extends Un {
  constructor(e = [], t = [], n = 1, r = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: n, detail: r };
    const o = [], s = [];
    function h(m, v, y, M) {
      const b = M + 1, _ = [];
      for (let T = 0; T <= b; T++) {
        _[T] = [];
        const w = m.clone().lerp(y, T / b), E = v.clone().lerp(y, T / b), U = b - T;
        for (let N = 0; N <= U; N++) _[T][N] = N === 0 && T === b ? w : w.clone().lerp(E, N / U);
      }
      for (let T = 0; T < b; T++) for (let w = 0; w < 2 * (b - T) - 1; w++) {
        const E = Math.floor(w / 2);
        w % 2 == 0 ? (c(_[T][E + 1]), c(_[T + 1][E]), c(_[T][E])) : (c(_[T][E + 1]), c(_[T + 1][E + 1]), c(_[T + 1][E]));
      }
    }
    function c(m) {
      o.push(m.x, m.y, m.z);
    }
    function u(m, v) {
      const y = 3 * m;
      v.x = e[y + 0], v.y = e[y + 1], v.z = e[y + 2];
    }
    function d(m, v, y, M) {
      M < 0 && m.x === 1 && (s[v] = m.x - 1), y.x === 0 && y.z === 0 && (s[v] = M / 2 / Math.PI + 0.5);
    }
    function f(m) {
      return Math.atan2(m.z, -m.x);
    }
    (function(m) {
      const v = new X(), y = new X(), M = new X();
      for (let b = 0; b < t.length; b += 3) u(t[b + 0], v), u(t[b + 1], y), u(t[b + 2], M), h(v, y, M, m);
    })(r), function(m) {
      const v = new X();
      for (let y = 0; y < o.length; y += 3) v.x = o[y + 0], v.y = o[y + 1], v.z = o[y + 2], v.normalize().multiplyScalar(m), o[y + 0] = v.x, o[y + 1] = v.y, o[y + 2] = v.z;
    }(n), function() {
      const m = new X();
      for (let y = 0; y < o.length; y += 3) {
        m.x = o[y + 0], m.y = o[y + 1], m.z = o[y + 2];
        const M = f(m) / 2 / Math.PI + 0.5, b = (v = m, Math.atan2(-v.y, Math.sqrt(v.x * v.x + v.z * v.z)) / Math.PI + 0.5);
        s.push(M, 1 - b);
      }
      var v;
      (function() {
        const y = new X(), M = new X(), b = new X(), _ = new X(), T = new We(), w = new We(), E = new We();
        for (let U = 0, N = 0; U < o.length; U += 9, N += 6) {
          y.set(o[U + 0], o[U + 1], o[U + 2]), M.set(o[U + 3], o[U + 4], o[U + 5]), b.set(o[U + 6], o[U + 7], o[U + 8]), T.set(s[N + 0], s[N + 1]), w.set(s[N + 2], s[N + 3]), E.set(s[N + 4], s[N + 5]), _.copy(y).add(M).add(b).divideScalar(3);
          const O = f(_);
          d(T, N + 0, y, O), d(w, N + 2, M, O), d(E, N + 4, b, O);
        }
      })(), function() {
        for (let y = 0; y < s.length; y += 6) {
          const M = s[y + 0], b = s[y + 2], _ = s[y + 4], T = Math.max(M, b, _), w = Math.min(M, b, _);
          T > 0.9 && w < 0.1 && (M < 0.2 && (s[y + 0] += 1), b < 0.2 && (s[y + 2] += 1), _ < 0.2 && (s[y + 4] += 1));
        }
      }();
    }(), this.setAttribute("position", new jt(o, 3)), this.setAttribute("normal", new jt(o.slice(), 3)), this.setAttribute("uv", new jt(s, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Rl(e.vertices, e.indices, e.radius, e.details);
  }
}
class Cl extends Rl {
  constructor(e = 1, t = 0) {
    super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new Cl(e.radius, e.detail);
  }
}
class Dl extends Un {
  constructor(e = 1, t = 32, n = 16, r = 0, o = 2 * Math.PI, s = 0, h = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: r, phiLength: o, thetaStart: s, thetaLength: h }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(s + h, Math.PI);
    let u = 0;
    const d = [], f = new X(), m = new X(), v = [], y = [], M = [], b = [];
    for (let _ = 0; _ <= n; _++) {
      const T = [], w = _ / n;
      let E = 0;
      _ === 0 && s === 0 ? E = 0.5 / t : _ === n && c === Math.PI && (E = -0.5 / t);
      for (let U = 0; U <= t; U++) {
        const N = U / t;
        f.x = -e * Math.cos(r + N * o) * Math.sin(s + w * h), f.y = e * Math.cos(s + w * h), f.z = e * Math.sin(r + N * o) * Math.sin(s + w * h), y.push(f.x, f.y, f.z), m.copy(f).normalize(), M.push(m.x, m.y, m.z), b.push(N + E, 1 - w), T.push(u++);
      }
      d.push(T);
    }
    for (let _ = 0; _ < n; _++) for (let T = 0; T < t; T++) {
      const w = d[_][T + 1], E = d[_][T], U = d[_ + 1][T], N = d[_ + 1][T + 1];
      (_ !== 0 || s > 0) && v.push(w, E, N), (_ !== n - 1 || c < Math.PI) && v.push(E, U, N);
    }
    this.setIndex(v), this.setAttribute("position", new jt(y, 3)), this.setAttribute("normal", new jt(M, 3)), this.setAttribute("uv", new jt(b, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Dl(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class C_ extends Kr {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new lt(16777215), this.specular = new lt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new lt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new We(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ti(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
function ho(i, e, t) {
  return !i || !t && i.constructor === e ? i : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i) : Array.prototype.slice.call(i);
}
function D_(i) {
  const e = i.length, t = new Array(e);
  for (let n = 0; n !== e; ++n) t[n] = n;
  return t.sort(function(n, r) {
    return i[n] - i[r];
  }), t;
}
function vu(i, e, t) {
  const n = i.length, r = new i.constructor(n);
  for (let o = 0, s = 0; s !== n; ++o) {
    const h = t[o] * e;
    for (let c = 0; c !== e; ++c) r[s++] = i[h + c];
  }
  return r;
}
function $u(i, e, t, n) {
  let r = 1, o = i[0];
  for (; o !== void 0 && o[n] === void 0; ) o = i[r++];
  if (o === void 0) return;
  let s = o[n];
  if (s !== void 0) if (Array.isArray(s)) do
    s = o[n], s !== void 0 && (e.push(o.time), t.push.apply(t, s)), o = i[r++];
  while (o !== void 0);
  else if (s.toArray !== void 0) do
    s = o[n], s !== void 0 && (e.push(o.time), s.toArray(t, t.length)), o = i[r++];
  while (o !== void 0);
  else do
    s = o[n], s !== void 0 && (e.push(o.time), t.push(s)), o = i[r++];
  while (o !== void 0);
}
class Oo {
  constructor(e, t, n, r) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r !== void 0 ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, r = t[n], o = t[n - 1];
    e: {
      t: {
        let s;
        n: {
          i: if (!(e < r)) {
            for (let h = n + 2; ; ) {
              if (r === void 0) {
                if (e < o) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === h) break;
              if (o = r, r = t[++n], e < r) break t;
            }
            s = t.length;
            break n;
          }
          if (e >= o) break e;
          {
            const h = t[1];
            e < h && (n = 2, o = h);
            for (let c = n - 2; ; ) {
              if (o === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (r = o, o = t[--n - 1], e >= o) break t;
            }
            s = n, n = 0;
          }
        }
        for (; n < s; ) {
          const h = n + s >>> 1;
          e < t[h] ? s = h : n = h + 1;
        }
        if (r = t[n], o = t[n - 1], o === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, o, r);
    }
    return this.interpolate_(n, o, e, r);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, o = e * r;
    for (let s = 0; s !== r; ++s) t[s] = n[o + s];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class I_ extends Oo {
  constructor(e, t, n, r) {
    super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 };
  }
  intervalChanged_(e, t, n) {
    const r = this.parameterPositions;
    let o = e - 2, s = e + 1, h = r[o], c = r[s];
    if (h === void 0) switch (this.getSettings_().endingStart) {
      case 2401:
        o = e, h = 2 * t - n;
        break;
      case 2402:
        o = r.length - 2, h = t + r[o] - r[o + 1];
        break;
      default:
        o = e, h = n;
    }
    if (c === void 0) switch (this.getSettings_().endingEnd) {
      case 2401:
        s = e, c = 2 * n - t;
        break;
      case 2402:
        s = 1, c = n + r[1] - r[0];
        break;
      default:
        s = e - 1, c = t;
    }
    const u = 0.5 * (n - t), d = this.valueSize;
    this._weightPrev = u / (t - h), this._weightNext = u / (c - n), this._offsetPrev = o * d, this._offsetNext = s * d;
  }
  interpolate_(e, t, n, r) {
    const o = this.resultBuffer, s = this.sampleValues, h = this.valueSize, c = e * h, u = c - h, d = this._offsetPrev, f = this._offsetNext, m = this._weightPrev, v = this._weightNext, y = (n - t) / (r - t), M = y * y, b = M * y, _ = -m * b + 2 * m * M - m * y, T = (1 + m) * b + (-1.5 - 2 * m) * M + (-0.5 + m) * y + 1, w = (-1 - v) * b + (1.5 + v) * M + 0.5 * y, E = v * b - v * M;
    for (let U = 0; U !== h; ++U) o[U] = _ * s[d + U] + T * s[u + U] + w * s[c + U] + E * s[f + U];
    return o;
  }
}
class Qu extends Oo {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e, t, n, r) {
    const o = this.resultBuffer, s = this.sampleValues, h = this.valueSize, c = e * h, u = c - h, d = (n - t) / (r - t), f = 1 - d;
    for (let m = 0; m !== h; ++m) o[m] = s[u + m] * f + s[c + m] * d;
    return o;
  }
}
class L_ extends Oo {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class ei {
  constructor(e, t, n, r) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = ho(t, this.TimeBufferType), this.values = ho(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: ho(e.times, Array), values: ho(e.values, Array) };
      const r = e.getInterpolation();
      r !== e.DefaultInterpolation && (n.interpolation = r);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new L_(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Qu(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new I_(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) {
        if (e === this.DefaultInterpolation) throw new Error(n);
        this.setInterpolation(this.DefaultInterpolation);
      }
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, r = n.length;
    let o = 0, s = r - 1;
    for (; o !== r && n[o] < e; ) ++o;
    for (; s !== -1 && n[s] > t; ) --s;
    if (++s, o !== 0 || s !== r) {
      o >= s && (s = Math.max(s, 1), o = s - 1);
      const h = this.getValueSize();
      this.times = n.slice(o, s), this.values = this.values.slice(o * h, s * h);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, r = this.values, o = n.length;
    o === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let s = null;
    for (let c = 0; c !== o; c++) {
      const u = n[c];
      if (typeof u == "number" && isNaN(u)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, c, u), e = !1;
        break;
      }
      if (s !== null && s > u) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, c, u, s), e = !1;
        break;
      }
      s = u;
    }
    if (r !== void 0 && (h = r, ArrayBuffer.isView(h) && !(h instanceof DataView))) for (let c = 0, u = r.length; c !== u; ++c) {
      const d = r[c];
      if (isNaN(d)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, c, d), e = !1;
        break;
      }
    }
    var h;
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === 2302, o = e.length - 1;
    let s = 1;
    for (let h = 1; h < o; ++h) {
      let c = !1;
      const u = e[h];
      if (u !== e[h + 1] && (h !== 1 || u !== e[0])) if (r) c = !0;
      else {
        const d = h * n, f = d - n, m = d + n;
        for (let v = 0; v !== n; ++v) {
          const y = t[d + v];
          if (y !== t[f + v] || y !== t[m + v]) {
            c = !0;
            break;
          }
        }
      }
      if (c) {
        if (h !== s) {
          e[s] = e[h];
          const d = h * n, f = s * n;
          for (let m = 0; m !== n; ++m) t[f + m] = t[d + m];
        }
        ++s;
      }
    }
    if (o > 0) {
      e[s] = e[o];
      for (let h = o * n, c = s * n, u = 0; u !== n; ++u) t[c + u] = t[h + u];
      ++s;
    }
    return s !== e.length ? (this.times = e.slice(0, s), this.values = t.slice(0, s * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = new this.constructor(this.name, e, t);
    return n.createInterpolant = this.createInterpolant, n;
  }
}
ei.prototype.TimeBufferType = Float32Array, ei.prototype.ValueBufferType = Float32Array, ei.prototype.DefaultInterpolation = 2301;
class Vr extends ei {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Vr.prototype.ValueTypeName = "bool", Vr.prototype.ValueBufferType = Array, Vr.prototype.DefaultInterpolation = 2300, Vr.prototype.InterpolantFactoryMethodLinear = void 0, Vr.prototype.InterpolantFactoryMethodSmooth = void 0;
class ed extends ei {
}
ed.prototype.ValueTypeName = "color";
class To extends ei {
}
To.prototype.ValueTypeName = "number";
class U_ extends Oo {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e, t, n, r) {
    const o = this.resultBuffer, s = this.sampleValues, h = this.valueSize, c = (n - t) / (r - t);
    let u = e * h;
    for (let d = u + h; u !== d; u += 4) In.slerpFlat(o, 0, s, u - h, s, u, c);
    return o;
  }
}
class Ao extends ei {
  InterpolantFactoryMethodLinear(e) {
    return new U_(this.times, this.values, this.getValueSize(), e);
  }
}
Ao.prototype.ValueTypeName = "quaternion", Ao.prototype.InterpolantFactoryMethodSmooth = void 0;
class Hr extends ei {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Hr.prototype.ValueTypeName = "string", Hr.prototype.ValueBufferType = Array, Hr.prototype.DefaultInterpolation = 2300, Hr.prototype.InterpolantFactoryMethodLinear = void 0, Hr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Po extends ei {
}
Po.prototype.ValueTypeName = "vector";
class yu {
  constructor(e = "", t = -1, n = [], r = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = r, this.uuid = Yr(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, r = 1 / (e.fps || 1);
    for (let s = 0, h = n.length; s !== h; ++s) t.push(N_(n[s]).scale(r));
    const o = new this(e.name, e.duration, t, e.blendMode);
    return o.uuid = e.uuid, o;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, r = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let o = 0, s = n.length; o !== s; ++o) t.push(ei.toJSON(n[o]));
    return r;
  }
  static CreateFromMorphTargetSequence(e, t, n, r) {
    const o = t.length, s = [];
    for (let h = 0; h < o; h++) {
      let c = [], u = [];
      c.push((h + o - 1) % o, h, (h + 1) % o), u.push(0, 1, 0);
      const d = D_(c);
      c = vu(c, 1, d), u = vu(u, 1, d), r || c[0] !== 0 || (c.push(o), u.push(u[0])), s.push(new To(".morphTargetInfluences[" + t[h].name + "]", c, u).scale(1 / n));
    }
    return new this(e, -1, s);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const r = e;
      n = r.geometry && r.geometry.animations || r.animations;
    }
    for (let r = 0; r < n.length; r++) if (n[r].name === t) return n[r];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const r = {}, o = /^([\w-]*?)([\d]+)$/;
    for (let h = 0, c = e.length; h < c; h++) {
      const u = e[h], d = u.name.match(o);
      if (d && d.length > 1) {
        const f = d[1];
        let m = r[f];
        m || (r[f] = m = []), m.push(u);
      }
    }
    const s = [];
    for (const h in r) s.push(this.CreateFromMorphTargetSequence(h, r[h], t, n));
    return s;
  }
  static parseAnimation(e, t) {
    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(d, f, m, v, y) {
      if (m.length !== 0) {
        const M = [], b = [];
        $u(m, M, b, v), M.length !== 0 && y.push(new d(f, M, b));
      }
    }, r = [], o = e.name || "default", s = e.fps || 30, h = e.blendMode;
    let c = e.length || -1;
    const u = e.hierarchy || [];
    for (let d = 0; d < u.length; d++) {
      const f = u[d].keys;
      if (f && f.length !== 0) if (f[0].morphTargets) {
        const m = {};
        let v;
        for (v = 0; v < f.length; v++) if (f[v].morphTargets) for (let y = 0; y < f[v].morphTargets.length; y++) m[f[v].morphTargets[y]] = -1;
        for (const y in m) {
          const M = [], b = [];
          for (let _ = 0; _ !== f[v].morphTargets.length; ++_) {
            const T = f[v];
            M.push(T.time), b.push(T.morphTarget === y ? 1 : 0);
          }
          r.push(new To(".morphTargetInfluence[" + y + "]", M, b));
        }
        c = m.length * s;
      } else {
        const m = ".bones[" + t[d].name + "]";
        n(Po, m + ".position", f, "pos", r), n(Ao, m + ".quaternion", f, "rot", r), n(Po, m + ".scale", f, "scl", r);
      }
    }
    return r.length === 0 ? null : new this(o, c, r, h);
  }
  resetDuration() {
    let e = 0;
    for (let t = 0, n = this.tracks.length; t !== n; ++t) {
      const r = this.tracks[t];
      e = Math.max(e, r.times[r.times.length - 1]);
    }
    return this.duration = e, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function N_(i) {
  if (i.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = function(t) {
    switch (t.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return To;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return Po;
      case "color":
        return ed;
      case "quaternion":
        return Ao;
      case "bool":
      case "boolean":
        return Vr;
      case "string":
        return Hr;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
  }(i.type);
  if (i.times === void 0) {
    const t = [], n = [];
    $u(i.keys, t, n, "value"), i.times = t, i.values = n;
  }
  return e.parse !== void 0 ? e.parse(i) : new e(i.name, i.times, i.values, i.interpolation);
}
const Ro = { enabled: !1, files: {}, add: function(i, e) {
  this.enabled !== !1 && (this.files[i] = e);
}, get: function(i) {
  if (this.enabled !== !1) return this.files[i];
}, remove: function(i) {
  delete this.files[i];
}, clear: function() {
  this.files = {};
} };
class O_ {
  constructor(e, t, n) {
    const r = this;
    let o, s = !1, h = 0, c = 0;
    const u = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(d) {
      c++, s === !1 && r.onStart !== void 0 && r.onStart(d, h, c), s = !0;
    }, this.itemEnd = function(d) {
      h++, r.onProgress !== void 0 && r.onProgress(d, h, c), h === c && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(d) {
      r.onError !== void 0 && r.onError(d);
    }, this.resolveURL = function(d) {
      return o ? o(d) : d;
    }, this.setURLModifier = function(d) {
      return o = d, this;
    }, this.addHandler = function(d, f) {
      return u.push(d, f), this;
    }, this.removeHandler = function(d) {
      const f = u.indexOf(d);
      return f !== -1 && u.splice(f, 2), this;
    }, this.getHandler = function(d) {
      for (let f = 0, m = u.length; f < m; f += 2) {
        const v = u[f], y = u[f + 1];
        if (v.global && (v.lastIndex = 0), v.test(d)) return y;
      }
      return null;
    };
  }
}
const F_ = new O_();
class Ea {
  constructor(e) {
    this.manager = e !== void 0 ? e : F_, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, o) {
      n.load(e, r, t, o);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Ea.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Si = {};
class B_ extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class k_ extends Ea {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const o = Ro.get(e);
    if (o !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(o), this.manager.itemEnd(e);
    }, 0), o;
    if (Si[e] !== void 0) return void Si[e].push({ onLoad: t, onProgress: n, onError: r });
    Si[e] = [], Si[e].push({ onLoad: t, onProgress: n, onError: r });
    const s = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), h = this.mimeType, c = this.responseType;
    fetch(s).then((u) => {
      if (u.status === 200 || u.status === 0) {
        if (u.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || u.body === void 0 || u.body.getReader === void 0) return u;
        const d = Si[e], f = u.body.getReader(), m = u.headers.get("X-File-Size") || u.headers.get("Content-Length"), v = m ? parseInt(m) : 0, y = v !== 0;
        let M = 0;
        const b = new ReadableStream({ start(_) {
          (function T() {
            f.read().then(({ done: w, value: E }) => {
              if (w) _.close();
              else {
                M += E.byteLength;
                const U = new ProgressEvent("progress", { lengthComputable: y, loaded: M, total: v });
                for (let N = 0, O = d.length; N < O; N++) {
                  const te = d[N];
                  te.onProgress && te.onProgress(U);
                }
                _.enqueue(E), T();
              }
            }, (w) => {
              _.error(w);
            });
          })();
        } });
        return new Response(b);
      }
      throw new B_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`, u);
    }).then((u) => {
      switch (c) {
        case "arraybuffer":
          return u.arrayBuffer();
        case "blob":
          return u.blob();
        case "document":
          return u.text().then((d) => new DOMParser().parseFromString(d, h));
        case "json":
          return u.json();
        default:
          if (h === void 0) return u.text();
          {
            const d = /charset="?([^;"\s]*)"?/i.exec(h), f = d && d[1] ? d[1].toLowerCase() : void 0, m = new TextDecoder(f);
            return u.arrayBuffer().then((v) => m.decode(v));
          }
      }
    }).then((u) => {
      Ro.add(e, u);
      const d = Si[e];
      delete Si[e];
      for (let f = 0, m = d.length; f < m; f++) {
        const v = d[f];
        v.onLoad && v.onLoad(u);
      }
    }).catch((u) => {
      const d = Si[e];
      if (d === void 0) throw this.manager.itemError(e), u;
      delete Si[e];
      for (let f = 0, m = d.length; f < m; f++) {
        const v = d[f];
        v.onError && v.onError(u);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class z_ extends Ea {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const o = this, s = Ro.get(e);
    if (s !== void 0) return o.manager.itemStart(e), setTimeout(function() {
      t && t(s), o.manager.itemEnd(e);
    }, 0), s;
    const h = xa("img");
    function c() {
      d(), Ro.add(e, this), t && t(this), o.manager.itemEnd(e);
    }
    function u(f) {
      d(), r && r(f), o.manager.itemError(e), o.manager.itemEnd(e);
    }
    function d() {
      h.removeEventListener("load", c, !1), h.removeEventListener("error", u, !1);
    }
    return h.addEventListener("load", c, !1), h.addEventListener("error", u, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (h.crossOrigin = this.crossOrigin), o.manager.itemStart(e), h.src = e, h;
  }
}
class V_ extends Ea {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const o = this, s = new Ju(), h = new k_(this.manager);
    return h.setResponseType("arraybuffer"), h.setRequestHeader(this.requestHeader), h.setPath(this.path), h.setWithCredentials(o.withCredentials), h.load(e, function(c) {
      let u;
      try {
        u = o.parse(c);
      } catch (d) {
        if (r === void 0) return void console.error(d);
        r(d);
      }
      u.image !== void 0 ? s.image = u.image : u.data !== void 0 && (s.image.width = u.width, s.image.height = u.height, s.image.data = u.data), s.wrapS = u.wrapS !== void 0 ? u.wrapS : 1001, s.wrapT = u.wrapT !== void 0 ? u.wrapT : 1001, s.magFilter = u.magFilter !== void 0 ? u.magFilter : 1006, s.minFilter = u.minFilter !== void 0 ? u.minFilter : 1006, s.anisotropy = u.anisotropy !== void 0 ? u.anisotropy : 1, u.colorSpace !== void 0 && (s.colorSpace = u.colorSpace), u.flipY !== void 0 && (s.flipY = u.flipY), u.format !== void 0 && (s.format = u.format), u.type !== void 0 && (s.type = u.type), u.mipmaps !== void 0 && (s.mipmaps = u.mipmaps, s.minFilter = 1008), u.mipmapCount === 1 && (s.minFilter = 1006), u.generateMipmaps !== void 0 && (s.generateMipmaps = u.generateMipmaps), s.needsUpdate = !0, t && t(s, u);
    }, n, r), s;
  }
}
class So extends Ea {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const o = new Gt(), s = new z_(this.manager);
    return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(h) {
      o.image = h, o.needsUpdate = !0, t !== void 0 && t(o);
    }, n, r), o;
  }
}
class td extends tn {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new lt(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class H_ extends td {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(tn.DEFAULT_UP), this.updateMatrix(), this.groundColor = new lt(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
class j_ extends td {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Co {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = xu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = xu();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function xu() {
  return performance.now();
}
class G_ {
  constructor(e, t, n) {
    let r, o, s;
    switch (this.binding = e, this.valueSize = n, t) {
      case "quaternion":
        r = this._slerp, o = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        r = this._select, o = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
        break;
      default:
        r = this._lerp, o = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
    }
    this._mixBufferRegion = r, this._mixBufferRegionAdditive = o, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(e, t) {
    const n = this.buffer, r = this.valueSize, o = e * r + r;
    let s = this.cumulativeWeight;
    if (s === 0) {
      for (let h = 0; h !== r; ++h) n[o + h] = n[h];
      s = t;
    } else {
      s += t;
      const h = t / s;
      this._mixBufferRegion(n, o, 0, h, r);
    }
    this.cumulativeWeight = s;
  }
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, r = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, r, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  apply(e) {
    const t = this.valueSize, n = this.buffer, r = e * t + t, o = this.cumulativeWeight, s = this.cumulativeWeightAdditive, h = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, o < 1) {
      const c = t * this._origIndex;
      this._mixBufferRegion(n, r, c, 1 - o, t);
    }
    s > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * t, 1, t);
    for (let c = t, u = t + t; c !== u; ++c) if (n[c] !== n[c + t]) {
      h.setValue(n, r);
      break;
    }
  }
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, r = n * this._origIndex;
    e.getValue(t, r);
    for (let o = n, s = r; o !== s; ++o) t[o] = t[r + o % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const e = 3 * this.valueSize;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n];
  }
  _select(e, t, n, r, o) {
    if (r >= 0.5) for (let s = 0; s !== o; ++s) e[t + s] = e[n + s];
  }
  _slerp(e, t, n, r) {
    In.slerpFlat(e, t, e, t, e, n, r);
  }
  _slerpAdditive(e, t, n, r, o) {
    const s = this._workIndex * o;
    In.multiplyQuaternionsFlat(e, s, e, t, e, n), In.slerpFlat(e, t, e, t, e, s, r);
  }
  _lerp(e, t, n, r, o) {
    const s = 1 - r;
    for (let h = 0; h !== o; ++h) {
      const c = t + h;
      e[c] = e[c] * s + e[n + h] * r;
    }
  }
  _lerpAdditive(e, t, n, r, o) {
    for (let s = 0; s !== o; ++s) {
      const h = t + s;
      e[h] = e[h] + e[n + s] * r;
    }
  }
}
const Il = "\\[\\]\\.:\\/", W_ = new RegExp("[" + Il + "]", "g"), rl = "[^" + Il + "]", X_ = "[^" + Il.replace("\\.", "") + "]", q_ = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", rl) + /(WCOD+)?/.source.replace("WCOD", X_) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", rl) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", rl) + "$"), Y_ = ["material", "materials", "bones", "map"];
class gt {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || gt.parseTrackName(t), this.node = gt.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new gt.Composite(e, t, n) : new gt(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(W_, "");
  }
  static parseTrackName(e) {
    const t = q_.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      const o = n.nodeName.substring(r + 1);
      Y_.indexOf(o) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = o);
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function(o) {
        for (let s = 0; s < o.length; s++) {
          const h = o[s];
          if (h.name === t || h.uuid === t) return h;
          const c = n(h.children);
          if (c) return c;
        }
        return null;
      }, r = n(e.children);
      if (r) return r;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, o = n.length; r !== o; ++r) e[t++] = n[r];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, o = n.length; r !== o; ++r) n[r] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, o = n.length; r !== o; ++r) n[r] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, o = n.length; r !== o; ++r) n[r] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, r = t.propertyName;
    let o = t.propertyIndex;
    if (e || (e = gt.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
    if (n) {
      let u = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
          if (!e.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
          e = e.skeleton.bones;
          for (let d = 0; d < e.length; d++) if (e[d].name === u) {
            u = d;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
          if (!e.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
          e = e[n];
      }
      if (u !== void 0) {
        if (e[u] === void 0) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
        e = e[u];
      }
    }
    const s = e[r];
    if (s === void 0) {
      const u = t.nodeName;
      return void console.error("THREE.PropertyBinding: Trying to update property for track: " + u + "." + r + " but it wasn't found.", e);
    }
    let h = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? h = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (h = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (o !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!e.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
        if (!e.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
        e.morphTargetDictionary[o] !== void 0 && (o = e.morphTargetDictionary[o]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = o;
    } else s.fromArray !== void 0 && s.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (c = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][h];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
gt.Composite = class {
  constructor(i, e, t) {
    const n = t || gt.parseTrackName(e);
    this._targetGroup = i, this._bindings = i.subscribe_(e, n);
  }
  getValue(i, e) {
    this.bind();
    const t = this._targetGroup.nCachedObjects_, n = this._bindings[t];
    n !== void 0 && n.getValue(i, e);
  }
  setValue(i, e) {
    const t = this._bindings;
    for (let n = this._targetGroup.nCachedObjects_, r = t.length; n !== r; ++n) t[n].setValue(i, e);
  }
  bind() {
    const i = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, t = i.length; e !== t; ++e) i[e].bind();
  }
  unbind() {
    const i = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, t = i.length; e !== t; ++e) i[e].unbind();
  }
}, gt.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, gt.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, gt.prototype.GetterByBindingType = [gt.prototype._getValue_direct, gt.prototype._getValue_array, gt.prototype._getValue_arrayElement, gt.prototype._getValue_toArray], gt.prototype.SetterByBindingTypeAndVersioning = [[gt.prototype._setValue_direct, gt.prototype._setValue_direct_setNeedsUpdate, gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [gt.prototype._setValue_array, gt.prototype._setValue_array_setNeedsUpdate, gt.prototype._setValue_array_setMatrixWorldNeedsUpdate], [gt.prototype._setValue_arrayElement, gt.prototype._setValue_arrayElement_setNeedsUpdate, gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [gt.prototype._setValue_fromArray, gt.prototype._setValue_fromArray_setNeedsUpdate, gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class K_ {
  constructor(e, t, n = null, r = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = r;
    const o = t.tracks, s = o.length, h = new Array(s), c = { endingStart: 2400, endingEnd: 2400 };
    for (let u = 0; u !== s; ++u) {
      const d = o[u].createInterpolant(null);
      h[u] = d, d.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = h, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const r = this._clip.duration, o = e._clip.duration, s = o / r, h = r / o;
      e.warp(1, s, t), this.warp(h, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const r = this._mixer, o = r.time, s = this.timeScale;
    let h = this._timeScaleInterpolant;
    h === null && (h = r._lendControlInterpolant(), this._timeScaleInterpolant = h);
    const c = h.parameterPositions, u = h.sampleValues;
    return c[0] = o, c[1] = o + n, u[0] = e / s, u[1] = t / s, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, n, r) {
    if (!this.enabled) return void this._updateWeight(e);
    const o = this._startTime;
    if (o !== null) {
      const c = (e - o) * n;
      c < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * c);
    }
    t *= this._updateTimeScale(e);
    const s = this._updateTime(t), h = this._updateWeight(e);
    if (h > 0) {
      const c = this._interpolants, u = this._propertyBindings;
      if (this.blendMode === 2501) for (let d = 0, f = c.length; d !== f; ++d) c[d].evaluate(s), u[d].accumulateAdditive(h);
      else for (let d = 0, f = c.length; d !== f; ++d) c[d].evaluate(s), u[d].accumulate(r, h);
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const r = n.evaluate(e)[0];
        t *= r, e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      n !== null && (t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t));
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let r = this.time + e, o = this._loopCount;
    const s = n === 2202;
    if (e === 0) return o === -1 || !s || 1 & ~o ? r : t - r;
    if (n === 2200) {
      o === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (r >= t) r = t;
        else {
          if (!(r < 0)) {
            this.time = r;
            break e;
          }
          r = 0;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = r, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 });
      }
    } else {
      if (o === -1 && (e >= 0 ? (o = 0, this._setEndings(!0, this.repetitions === 0, s)) : this._setEndings(this.repetitions === 0, !0, s)), r >= t || r < 0) {
        const h = Math.floor(r / t);
        r -= t * h, o += Math.abs(h);
        const c = this.repetitions - o;
        if (c <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, r = e > 0 ? t : 0, this.time = r, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
        else {
          if (c === 1) {
            const u = e < 0;
            this._setEndings(u, !u, s);
          } else this._setEndings(!1, !1, s);
          this._loopCount = o, this.time = r, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: h });
        }
      } else this.time = r;
      if (s && !(1 & ~o)) return t - r;
    }
    return r;
  }
  _setEndings(e, t, n) {
    const r = this._interpolantSettings;
    n ? (r.endingStart = 2401, r.endingEnd = 2401) : (r.endingStart = e ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, r.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402);
  }
  _scheduleFading(e, t, n) {
    const r = this._mixer, o = r.time;
    let s = this._weightInterpolant;
    s === null && (s = r._lendControlInterpolant(), this._weightInterpolant = s);
    const h = s.parameterPositions, c = s.sampleValues;
    return h[0] = o, c[0] = t, h[1] = o + e, c[1] = n, this;
  }
}
const Z_ = new Float32Array(1);
class J_ extends Oi {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, r = e._clip.tracks, o = r.length, s = e._propertyBindings, h = e._interpolants, c = n.uuid, u = this._bindingsByRootAndName;
    let d = u[c];
    d === void 0 && (d = {}, u[c] = d);
    for (let f = 0; f !== o; ++f) {
      const m = r[f], v = m.name;
      let y = d[v];
      if (y !== void 0) ++y.referenceCount, s[f] = y;
      else {
        if (y = s[f], y !== void 0) {
          y._cacheIndex === null && (++y.referenceCount, this._addInactiveBinding(y, c, v));
          continue;
        }
        const M = t && t._propertyBindings[f].binding.parsedPath;
        y = new G_(gt.create(n, v, M), m.ValueTypeName, m.getValueSize()), ++y.referenceCount, this._addInactiveBinding(y, c, v), s[f] = y;
      }
      h[f].resultBuffer = y.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, r = e._clip.uuid, o = this._actionsByClip[r];
        this._bindAction(e, o && o.knownActions[0]), this._addInactiveAction(e, r, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, r = t.length; n !== r; ++n) {
        const o = t[n];
        o.useCount++ == 0 && (this._lendBinding(o), o.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, r = t.length; n !== r; ++n) {
        const o = t[n];
        --o.useCount == 0 && (o.restoreOriginalState(), this._takeBackBinding(o));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = { actions: { get total() {
      return e._actions.length;
    }, get inUse() {
      return e._nActiveActions;
    } }, bindings: { get total() {
      return e._bindings.length;
    }, get inUse() {
      return e._nActiveBindings;
    } }, controlInterpolants: { get total() {
      return e._controlInterpolants.length;
    }, get inUse() {
      return e._nActiveControlInterpolants;
    } } };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const r = this._actions, o = this._actionsByClip;
    let s = o[t];
    if (s === void 0) s = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, o[t] = s;
    else {
      const h = s.knownActions;
      e._byClipCacheIndex = h.length, h.push(e);
    }
    e._cacheIndex = r.length, r.push(e), s.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], r = e._cacheIndex;
    n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null;
    const o = e._clip.uuid, s = this._actionsByClip, h = s[o], c = h.knownActions, u = c[c.length - 1], d = e._byClipCacheIndex;
    u._byClipCacheIndex = d, c[d] = u, c.pop(), e._byClipCacheIndex = null, delete h.actionByRoot[(e._localRoot || this._root).uuid], c.length === 0 && delete s[o], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, r = t.length; n !== r; ++n) {
      const o = t[n];
      --o.referenceCount == 0 && this._removeInactiveBinding(o);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, r = this._nActiveActions++, o = t[r];
    e._cacheIndex = r, t[r] = e, o._cacheIndex = n, t[n] = o;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, r = --this._nActiveActions, o = t[r];
    e._cacheIndex = r, t[r] = e, o._cacheIndex = n, t[n] = o;
  }
  _addInactiveBinding(e, t, n) {
    const r = this._bindingsByRootAndName, o = this._bindings;
    let s = r[t];
    s === void 0 && (s = {}, r[t] = s), s[n] = e, e._cacheIndex = o.length, o.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, r = n.rootNode.uuid, o = n.path, s = this._bindingsByRootAndName, h = s[r], c = t[t.length - 1], u = e._cacheIndex;
    c._cacheIndex = u, t[u] = c, t.pop(), delete h[o], Object.keys(h).length === 0 && delete s[r];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, r = this._nActiveBindings++, o = t[r];
    e._cacheIndex = r, t[r] = e, o._cacheIndex = n, t[n] = o;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, r = --this._nActiveBindings, o = t[r];
    e._cacheIndex = r, t[r] = e, o._cacheIndex = n, t[n] = o;
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new Qu(new Float32Array(2), new Float32Array(2), 1, Z_), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, r = --this._nActiveControlInterpolants, o = t[r];
    e.__cacheIndex = r, t[r] = e, o.__cacheIndex = n, t[n] = o;
  }
  clipAction(e, t, n) {
    const r = t || this._root, o = r.uuid;
    let s = typeof e == "string" ? yu.findByName(r, e) : e;
    const h = s !== null ? s.uuid : e, c = this._actionsByClip[h];
    let u = null;
    if (n === void 0 && (n = s !== null ? s.blendMode : 2500), c !== void 0) {
      const f = c.actionByRoot[o];
      if (f !== void 0 && f.blendMode === n) return f;
      u = c.knownActions[0], s === null && (s = u._clip);
    }
    if (s === null) return null;
    const d = new K_(this, s, t, n);
    return this._bindAction(d, u), this._addInactiveAction(d, h, o), d;
  }
  existingAction(e, t) {
    const n = t || this._root, r = n.uuid, o = typeof e == "string" ? yu.findByName(n, e) : e, s = o ? o.uuid : e, h = this._actionsByClip[s];
    return h !== void 0 && h.actionByRoot[r] || null;
  }
  stopAllAction() {
    const e = this._actions;
    for (let t = this._nActiveActions - 1; t >= 0; --t) e[t].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, r = this.time += e, o = Math.sign(e), s = this._accuIndex ^= 1;
    for (let u = 0; u !== n; ++u)
      t[u]._update(r, e, o, s);
    const h = this._bindings, c = this._nActiveBindings;
    for (let u = 0; u !== c; ++u) h[u].apply(s);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, r = this._actionsByClip, o = r[n];
    if (o !== void 0) {
      const s = o.knownActions;
      for (let h = 0, c = s.length; h !== c; ++h) {
        const u = s[h];
        this._deactivateAction(u);
        const d = u._cacheIndex, f = t[t.length - 1];
        u._cacheIndex = null, u._byClipCacheIndex = null, f._cacheIndex = d, t[d] = f, t.pop(), this._removeInactiveBindingsForAction(u);
      }
      delete r[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const o in n) {
      const s = n[o].actionByRoot[t];
      s !== void 0 && (this._deactivateAction(s), this._removeInactiveAction(s));
    }
    const r = this._bindingsByRootAndName[t];
    if (r !== void 0) for (const o in r) {
      const s = r[o];
      s.restoreOriginalState(), this._removeInactiveBinding(s);
    }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
const bu = new Tt();
class $_ {
  constructor(e, t, n = 0, r = 1 / 0) {
    this.ray = new Uo(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new Tl(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return bu.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(bu), this;
  }
  intersectObject(e, t = !0, n = []) {
    return _l(e, this, n, t), n.sort(Su), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let r = 0, o = e.length; r < o; r++) _l(e[r], this, n, t);
    return n.sort(Su), n;
  }
}
function Su(i, e) {
  return i.distance - e.distance;
}
function _l(i, e, t, n) {
  let r = !0;
  if (i.layers.test(e.layers) && i.raycast(e, t) === !1 && (r = !1), r === !0 && n === !0) {
    const o = i.children;
    for (let s = 0, h = o.length; s < h; s++) _l(o[s], e, t, !0);
  }
}
class Mu {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(sn(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Q_ = new X(), Eu = new lt(), wu = new lt();
class ev extends tn {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const r = new Cl(t);
    r.rotateY(0.5 * Math.PI), this.material = new ba({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const o = r.getAttribute("position"), s = new Float32Array(3 * o.count);
    r.setAttribute("color", new Ln(s, 3)), this.add(new Tn(r, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0) this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      Eu.copy(this.light.color), wu.copy(this.light.groundColor);
      for (let n = 0, r = t.count; n < r; n++) {
        const o = n < r / 2 ? Eu : wu;
        t.setXYZ(n, o.r, o.g, o.b);
      }
      t.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), e.lookAt(Q_.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class tv extends Oi {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: pl } })), typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = pl);
const Tu = { type: "change" }, Ll = { type: "start" }, nd = { type: "end" }, uo = new Uo(), Au = new Ni(), nv = Math.cos(70 * ym), Ht = new X(), mn = 2 * Math.PI, Dn = -1, vl = 0, id = 1, yl = 2, rd = 3, ad = 4, od = 5, sd = 6, al = 1e-6;
class iv extends tv {
  constructor(e, t = null) {
    super(e, t), this.state = Dn, this.enabled = !0, this.target = new X(), this.cursor = new X(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }, this.touches = { ONE: 0, TWO: 2 }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new X(), this._lastQuaternion = new In(), this._lastTargetPosition = new X(), this._quat = new In().setFromUnitVectors(e.up, new X(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Mu(), this._sphericalDelta = new Mu(), this._scale = 1, this._panOffset = new X(), this._rotateStart = new We(), this._rotateEnd = new We(), this._rotateDelta = new We(), this._panStart = new We(), this._panEnd = new We(), this._panDelta = new We(), this._dollyStart = new We(), this._dollyEnd = new We(), this._dollyDelta = new We(), this._dollyDirection = new X(), this._mouse = new We(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = av.bind(this), this._onPointerDown = rv.bind(this), this._onPointerUp = ov.bind(this), this._onContextMenu = pv.bind(this), this._onMouseWheel = cv.bind(this), this._onKeyDown = hv.bind(this), this._onTouchStart = uv.bind(this), this._onTouchMove = dv.bind(this), this._onMouseDown = sv.bind(this), this._onMouseMove = lv.bind(this), this._interceptControlDown = fv.bind(this), this._interceptControlUp = mv.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Tu), this.update(), this.state = Dn;
  }
  update(e = null) {
    const t = this.object.position;
    Ht.copy(t).sub(this.target), Ht.applyQuaternion(this._quat), this._spherical.setFromVector3(Ht), this.autoRotate && this.state === Dn && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
    isFinite(n) && isFinite(r) && (n < -Math.PI ? n += mn : n > Math.PI && (n -= mn), r < -Math.PI ? r += mn : r > Math.PI && (r -= mn), this._spherical.theta = n <= r ? Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let o = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const s = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), o = s != this._spherical.radius;
    }
    if (Ht.setFromSpherical(this._spherical), Ht.applyQuaternion(this._quatInverse), t.copy(this.target).add(Ht), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let s = null;
      if (this.object.isPerspectiveCamera) {
        const h = Ht.length();
        s = this._clampDistance(h * this._scale);
        const c = h - s;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), o = !!c;
      } else if (this.object.isOrthographicCamera) {
        const h = new X(this._mouse.x, this._mouse.y, 0);
        h.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), o = c !== this.object.zoom;
        const u = new X(this._mouse.x, this._mouse.y, 0);
        u.unproject(this.object), this.object.position.sub(u).add(h), this.object.updateMatrixWorld(), s = Ht.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      s !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position) : (uo.origin.copy(this.object.position), uo.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(uo.direction)) < nv ? this.object.lookAt(this.target) : (Au.setFromNormalAndCoplanarPoint(this.object.up, this.target), uo.intersectPlane(Au, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const s = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), s !== this.object.zoom && (this.object.updateProjectionMatrix(), o = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, !!(o || this._lastPosition.distanceToSquared(this.object.position) > al || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > al || this._lastTargetPosition.distanceToSquared(this.target) > al) && (this.dispatchEvent(Tu), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0);
  }
  _getAutoRotationAngle(e) {
    return e !== null ? mn / 60 * this.autoRotateSpeed * e : mn / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(0.01 * e);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    Ht.setFromMatrixColumn(t, 0), Ht.multiplyScalar(-e), this._panOffset.add(Ht);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? Ht.setFromMatrixColumn(t, 1) : (Ht.setFromMatrixColumn(t, 0), Ht.crossVectors(this.object.up, Ht)), Ht.multiplyScalar(e), this._panOffset.add(Ht);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const r = this.object.position;
      Ht.copy(r).sub(this.target);
      let o = Ht.length();
      o *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * o / n.clientHeight, this.object.matrix), this._panUp(2 * t * o / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), r = e - n.left, o = t - n.top, s = n.width, h = n.height;
    this._mouse.x = r / s * 2 - 1, this._mouse.y = -o / h * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(mn * this._rotateDelta.x / t.clientHeight), this._rotateUp(mn * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(mn * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-mn * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(mn * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-mn * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), r = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, r);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), r = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, r);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, o = Math.sqrt(n * n + r * r);
    this._dollyStart.set(0, o);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), r = 0.5 * (e.pageX + n.x), o = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(r, o);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(mn * this._rotateDelta.x / t.clientHeight), this._rotateUp(mn * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), r = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, r);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, o = Math.sqrt(n * n + r * r);
    this._dollyEnd.set(0, o), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const s = 0.5 * (e.pageX + t.x), h = 0.5 * (e.pageY + t.y);
    this._updateZoomParameters(s, h);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return void this._pointers.splice(t, 1);
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new We(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function rv(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), this._isTrackingPointer(i) || (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function av(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function ov(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(nd), this.state = Dn;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
  }
}
function sv(i) {
  let e;
  switch (i.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case 1:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = id;
      break;
    case 0:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = yl;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = vl;
      }
      break;
    case 2:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = vl;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = yl;
      }
      break;
    default:
      this.state = Dn;
  }
  this.state !== Dn && this.dispatchEvent(Ll);
}
function lv(i) {
  switch (this.state) {
    case vl:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case id:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case yl:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
  }
}
function cv(i) {
  this.enabled !== !1 && this.enableZoom !== !1 && this.state === Dn && (i.preventDefault(), this.dispatchEvent(Ll), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(nd));
}
function hv(i) {
  this.enabled !== !1 && this.enablePan !== !1 && this._handleKeyDown(i);
}
function uv(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case 0:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = rd;
          break;
        case 1:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = ad;
          break;
        default:
          this.state = Dn;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case 2:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = od;
          break;
        case 3:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = sd;
          break;
        default:
          this.state = Dn;
      }
      break;
    default:
      this.state = Dn;
  }
  this.state !== Dn && this.dispatchEvent(Ll);
}
function dv(i) {
  switch (this._trackPointer(i), this.state) {
    case rd:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case ad:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case od:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case sd:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = Dn;
  }
}
function pv(i) {
  this.enabled !== !1 && i.preventDefault();
}
function fv(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function mv(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
var ga = function() {
  var i = 0, e = document.createElement("div");
  function t(d) {
    return e.appendChild(d.dom), d;
  }
  function n(d) {
    for (var f = 0; f < e.children.length; f++) e.children[f].style.display = f === d ? "block" : "none";
    i = d;
  }
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(d) {
    d.preventDefault(), n(++i % e.children.length);
  }, !1);
  var r = (performance || Date).now(), o = r, s = 0, h = t(new ga.Panel("FPS", "#0ff", "#002")), c = t(new ga.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var u = t(new ga.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: e, addPanel: t, showPanel: n, begin: function() {
    r = (performance || Date).now();
  }, end: function() {
    s++;
    var d = (performance || Date).now();
    if (c.update(d - r, 200), d >= o + 1e3 && (h.update(1e3 * s / (d - o), 100), o = d, s = 0, u)) {
      var f = performance.memory;
      u.update(f.usedJSHeapSize / 1048576, f.jsHeapSizeLimit / 1048576);
    }
    return d;
  }, update: function() {
    r = this.end();
  }, domElement: e, setMode: n };
};
ga.Panel = function(i, e, t) {
  var n = 1 / 0, r = 0, o = Math.round, s = o(window.devicePixelRatio || 1), h = 80 * s, c = 48 * s, u = 3 * s, d = 2 * s, f = 3 * s, m = 15 * s, v = 74 * s, y = 30 * s, M = document.createElement("canvas");
  M.width = h, M.height = c, M.style.cssText = "width:80px;height:48px";
  var b = M.getContext("2d");
  return b.font = "bold " + 9 * s + "px Helvetica,Arial,sans-serif", b.textBaseline = "top", b.fillStyle = t, b.fillRect(0, 0, h, c), b.fillStyle = e, b.fillText(i, u, d), b.fillRect(f, m, v, y), b.fillStyle = t, b.globalAlpha = 0.9, b.fillRect(f, m, v, y), { dom: M, update: function(_, T) {
    n = Math.min(n, _), r = Math.max(r, _), b.fillStyle = t, b.globalAlpha = 1, b.fillRect(0, 0, h, m), b.fillStyle = e, b.fillText(o(_) + " " + i + " (" + o(n) + "-" + o(r) + ")", u, d), b.drawImage(M, f + s, m, v - s, y, f, m, v - s, y), b.fillRect(f + v - s, m, s, y), b.fillStyle = t, b.globalAlpha = 0.9, b.fillRect(f + v - s, m, s, o((1 - _ / T) * y));
  } };
};
class gv extends V_ {
  constructor(e) {
    super(e), this.type = 1016;
  }
  parse(e) {
    const t = function(y, M) {
      switch (y) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (M || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (M || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (M || ""));
        default:
          throw new Error("THREE.RGBELoader: Memory Error: " + (M || ""));
      }
    }, n = function(y, M, b) {
      M = M || 1024;
      let _ = y.pos, T = -1, w = 0, E = "", U = String.fromCharCode.apply(null, new Uint16Array(y.subarray(_, _ + 128)));
      for (; 0 > (T = U.indexOf(`
`)) && w < M && _ < y.byteLength; ) E += U, w += U.length, _ += 128, U += String.fromCharCode.apply(null, new Uint16Array(y.subarray(_, _ + 128)));
      return -1 < T && (y.pos += w + T + 1, E + U.slice(0, T));
    }, r = function(y, M, b, _) {
      const T = y[M + 3], w = Math.pow(2, T - 128) / 255;
      b[_ + 0] = y[M + 0] * w, b[_ + 1] = y[M + 1] * w, b[_ + 2] = y[M + 2] * w, b[_ + 3] = 1;
    }, o = function(y, M, b, _) {
      const T = y[M + 3], w = Math.pow(2, T - 128) / 255;
      b[_ + 0] = Ka.toHalfFloat(Math.min(y[M + 0] * w, 65504)), b[_ + 1] = Ka.toHalfFloat(Math.min(y[M + 1] * w, 65504)), b[_ + 2] = Ka.toHalfFloat(Math.min(y[M + 2] * w, 65504)), b[_ + 3] = Ka.toHalfFloat(1);
    }, s = new Uint8Array(e);
    s.pos = 0;
    const h = function(y) {
      const M = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, b = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, _ = /^\s*FORMAT=(\S+)\s*$/, T = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, w = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let E, U;
      for ((y.pos >= y.byteLength || !(E = n(y))) && t(1, "no header found"), (U = E.match(/^#\?(\S+)/)) || t(3, "bad initial token"), w.valid |= 1, w.programtype = U[1], w.string += E + `
`; E = n(y), E !== !1; ) if (w.string += E + `
`, E.charAt(0) !== "#") {
        if ((U = E.match(M)) && (w.gamma = parseFloat(U[1])), (U = E.match(b)) && (w.exposure = parseFloat(U[1])), (U = E.match(_)) && (w.valid |= 2, w.format = U[1]), (U = E.match(T)) && (w.valid |= 4, w.height = parseInt(U[1], 10), w.width = parseInt(U[2], 10)), 2 & w.valid && 4 & w.valid) break;
      } else w.comments += E + `
`;
      return 2 & w.valid || t(3, "missing format specifier"), 4 & w.valid || t(3, "missing image size specifier"), w;
    }(s), c = h.width, u = h.height, d = function(y, M, b) {
      const _ = M;
      if (_ < 8 || _ > 32767 || y[0] !== 2 || y[1] !== 2 || 128 & y[2]) return new Uint8Array(y);
      _ !== (y[2] << 8 | y[3]) && t(3, "wrong scanline width");
      const T = new Uint8Array(4 * M * b);
      T.length || t(4, "unable to allocate buffer space");
      let w = 0, E = 0;
      const U = 4 * _, N = new Uint8Array(4), O = new Uint8Array(U);
      let te = b;
      for (; te > 0 && E < y.byteLength; ) {
        E + 4 > y.byteLength && t(1), N[0] = y[E++], N[1] = y[E++], N[2] = y[E++], N[3] = y[E++], N[0] == 2 && N[1] == 2 && (N[2] << 8 | N[3]) == _ || t(3, "bad rgbe scanline format");
        let G, Z = 0;
        for (; Z < U && E < y.byteLength; ) {
          G = y[E++];
          const F = G > 128;
          if (F && (G -= 128), (G === 0 || Z + G > U) && t(3, "bad scanline data"), F) {
            const V = y[E++];
            for (let B = 0; B < G; B++) O[Z++] = V;
          } else O.set(y.subarray(E, E + G), Z), Z += G, E += G;
        }
        const re = _;
        for (let F = 0; F < re; F++) {
          let V = 0;
          T[w] = O[F + V], V += _, T[w + 1] = O[F + V], V += _, T[w + 2] = O[F + V], V += _, T[w + 3] = O[F + V], w += 4;
        }
        te--;
      }
      return T;
    }(s.subarray(s.pos), c, u);
    let f, m, v;
    switch (this.type) {
      case 1015:
        v = d.length / 4;
        const y = new Float32Array(4 * v);
        for (let b = 0; b < v; b++) r(d, 4 * b, y, 4 * b);
        f = y, m = 1015;
        break;
      case 1016:
        v = d.length / 4;
        const M = new Uint16Array(4 * v);
        for (let b = 0; b < v; b++) o(d, 4 * b, M, 4 * b);
        f = M, m = 1016;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: c, height: u, data: f, header: h.string, gamma: h.gamma, exposure: h.exposure, type: m };
  }
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, n, r) {
    return super.load(e, function(o, s) {
      switch (o.type) {
        case 1015:
        case 1016:
          o.colorSpace = Mi, o.minFilter = 1006, o.magFilter = 1006, o.generateMipmaps = !1, o.flipY = !0;
      }
      t && t(o, s);
    }, n, r);
  }
}
new Tt();
var po, Xr = Object.freeze({ Linear: Object.freeze({ None: function(i) {
  return i;
}, In: function(i) {
  return this.None(i);
}, Out: function(i) {
  return this.None(i);
}, InOut: function(i) {
  return this.None(i);
} }), Quadratic: Object.freeze({ In: function(i) {
  return i * i;
}, Out: function(i) {
  return i * (2 - i);
}, InOut: function(i) {
  return (i *= 2) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1);
} }), Cubic: Object.freeze({ In: function(i) {
  return i * i * i;
}, Out: function(i) {
  return --i * i * i + 1;
}, InOut: function(i) {
  return (i *= 2) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2);
} }), Quartic: Object.freeze({ In: function(i) {
  return i * i * i * i;
}, Out: function(i) {
  return 1 - --i * i * i * i;
}, InOut: function(i) {
  return (i *= 2) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2);
} }), Quintic: Object.freeze({ In: function(i) {
  return i * i * i * i * i;
}, Out: function(i) {
  return --i * i * i * i * i + 1;
}, InOut: function(i) {
  return (i *= 2) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2);
} }), Sinusoidal: Object.freeze({ In: function(i) {
  return 1 - Math.sin((1 - i) * Math.PI / 2);
}, Out: function(i) {
  return Math.sin(i * Math.PI / 2);
}, InOut: function(i) {
  return 0.5 * (1 - Math.sin(Math.PI * (0.5 - i)));
} }), Exponential: Object.freeze({ In: function(i) {
  return i === 0 ? 0 : Math.pow(1024, i - 1);
}, Out: function(i) {
  return i === 1 ? 1 : 1 - Math.pow(2, -10 * i);
}, InOut: function(i) {
  return i === 0 ? 0 : i === 1 ? 1 : (i *= 2) < 1 ? 0.5 * Math.pow(1024, i - 1) : 0.5 * (2 - Math.pow(2, -10 * (i - 1)));
} }), Circular: Object.freeze({ In: function(i) {
  return 1 - Math.sqrt(1 - i * i);
}, Out: function(i) {
  return Math.sqrt(1 - --i * i);
}, InOut: function(i) {
  return (i *= 2) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1);
} }), Elastic: Object.freeze({ In: function(i) {
  return i === 0 ? 0 : i === 1 ? 1 : -Math.pow(2, 10 * (i - 1)) * Math.sin(5 * (i - 1.1) * Math.PI);
}, Out: function(i) {
  return i === 0 ? 0 : i === 1 ? 1 : Math.pow(2, -10 * i) * Math.sin(5 * (i - 0.1) * Math.PI) + 1;
}, InOut: function(i) {
  return i === 0 ? 0 : i === 1 ? 1 : (i *= 2) < 1 ? -0.5 * Math.pow(2, 10 * (i - 1)) * Math.sin(5 * (i - 1.1) * Math.PI) : 0.5 * Math.pow(2, -10 * (i - 1)) * Math.sin(5 * (i - 1.1) * Math.PI) + 1;
} }), Back: Object.freeze({ In: function(i) {
  var e = 1.70158;
  return i === 1 ? 1 : i * i * ((e + 1) * i - e);
}, Out: function(i) {
  var e = 1.70158;
  return i === 0 ? 0 : --i * i * ((e + 1) * i + e) + 1;
}, InOut: function(i) {
  var e = 2.5949095;
  return (i *= 2) < 1 ? i * i * ((e + 1) * i - e) * 0.5 : 0.5 * ((i -= 2) * i * ((e + 1) * i + e) + 2);
} }), Bounce: Object.freeze({ In: function(i) {
  return 1 - Xr.Bounce.Out(1 - i);
}, Out: function(i) {
  return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
}, InOut: function(i) {
  return i < 0.5 ? 0.5 * Xr.Bounce.In(2 * i) : 0.5 * Xr.Bounce.Out(2 * i - 1) + 0.5;
} }), generatePow: function(i) {
  return i === void 0 && (i = 4), i = (i = i < Number.EPSILON ? Number.EPSILON : i) > 1e4 ? 1e4 : i, { In: function(e) {
    return Math.pow(e, i);
  }, Out: function(e) {
    return 1 - Math.pow(1 - e, i);
  }, InOut: function(e) {
    return e < 0.5 ? Math.pow(2 * e, i) / 2 : (1 - Math.pow(2 - 2 * e, i)) / 2 + 0.5;
  } };
} }), Gr = function() {
  return performance.now();
}, ld = function() {
  function i() {
    this._tweens = {}, this._tweensAddedDuringUpdate = {};
  }
  return i.prototype.getAll = function() {
    var e = this;
    return Object.keys(this._tweens).map(function(t) {
      return e._tweens[t];
    });
  }, i.prototype.removeAll = function() {
    this._tweens = {};
  }, i.prototype.add = function(e) {
    this._tweens[e.getId()] = e, this._tweensAddedDuringUpdate[e.getId()] = e;
  }, i.prototype.remove = function(e) {
    delete this._tweens[e.getId()], delete this._tweensAddedDuringUpdate[e.getId()];
  }, i.prototype.update = function(e, t) {
    e === void 0 && (e = Gr()), t === void 0 && (t = !1);
    var n = Object.keys(this._tweens);
    if (n.length === 0) return !1;
    for (; n.length > 0; ) {
      this._tweensAddedDuringUpdate = {};
      for (var r = 0; r < n.length; r++) {
        var o = this._tweens[n[r]], s = !t;
        o && o.update(e, s) === !1 && !t && delete this._tweens[n[r]];
      }
      n = Object.keys(this._tweensAddedDuringUpdate);
    }
    return !0;
  }, i;
}(), pr = { Linear: function(i, e) {
  var t = i.length - 1, n = t * e, r = Math.floor(n), o = pr.Utils.Linear;
  return e < 0 ? o(i[0], i[1], n) : e > 1 ? o(i[t], i[t - 1], t - n) : o(i[r], i[r + 1 > t ? t : r + 1], n - r);
}, Bezier: function(i, e) {
  for (var t = 0, n = i.length - 1, r = Math.pow, o = pr.Utils.Bernstein, s = 0; s <= n; s++) t += r(1 - e, n - s) * r(e, s) * i[s] * o(n, s);
  return t;
}, CatmullRom: function(i, e) {
  var t = i.length - 1, n = t * e, r = Math.floor(n), o = pr.Utils.CatmullRom;
  return i[0] === i[t] ? (e < 0 && (r = Math.floor(n = t * (1 + e))), o(i[(r - 1 + t) % t], i[r], i[(r + 1) % t], i[(r + 2) % t], n - r)) : e < 0 ? i[0] - (o(i[0], i[0], i[1], i[1], -n) - i[0]) : e > 1 ? i[t] - (o(i[t], i[t], i[t - 1], i[t - 1], n - t) - i[t]) : o(i[r ? r - 1 : 0], i[r], i[t < r + 1 ? t : r + 1], i[t < r + 2 ? t : r + 2], n - r);
}, Utils: { Linear: function(i, e, t) {
  return (e - i) * t + i;
}, Bernstein: function(i, e) {
  var t = pr.Utils.Factorial;
  return t(i) / t(e) / t(i - e);
}, Factorial: (po = [1], function(i) {
  var e = 1;
  if (po[i]) return po[i];
  for (var t = i; t > 1; t--) e *= t;
  return po[i] = e, e;
}), CatmullRom: function(i, e, t, n, r) {
  var o = 0.5 * (t - i), s = 0.5 * (n - e), h = r * r;
  return (2 * e - 2 * t + o + s) * (r * h) + (-3 * e + 3 * t - 2 * o - s) * h + o * r + e;
} } }, Ul = function() {
  function i() {
  }
  return i.nextId = function() {
    return i._nextId++;
  }, i._nextId = 0, i;
}(), xl = new ld(), _v = function() {
  function i(e, t) {
    t === void 0 && (t = xl), this._object = e, this._group = t, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = !1, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = Xr.Linear.None, this._interpolationFunction = pr.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._id = Ul.nextId(), this._isChainStopped = !1, this._propertiesAreSetUp = !1, this._goToEnd = !1;
  }
  return i.prototype.getId = function() {
    return this._id;
  }, i.prototype.isPlaying = function() {
    return this._isPlaying;
  }, i.prototype.isPaused = function() {
    return this._isPaused;
  }, i.prototype.getDuration = function() {
    return this._duration;
  }, i.prototype.to = function(e, t) {
    if (t === void 0 && (t = 1e3), this._isPlaying) throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
    return this._valuesEnd = e, this._propertiesAreSetUp = !1, this._duration = t < 0 ? 0 : t, this;
  }, i.prototype.duration = function(e) {
    return e === void 0 && (e = 1e3), this._duration = e < 0 ? 0 : e, this;
  }, i.prototype.dynamic = function(e) {
    return e === void 0 && (e = !1), this._isDynamic = e, this;
  }, i.prototype.start = function(e, t) {
    if (e === void 0 && (e = Gr()), t === void 0 && (t = !1), this._isPlaying) return this;
    if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed) for (var n in this._reversed = !1, this._valuesStartRepeat) this._swapEndStartRepeatValues(n), this._valuesStart[n] = this._valuesStartRepeat[n];
    if (this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = e, this._startTime += this._delayTime, !this._propertiesAreSetUp || t) {
      if (this._propertiesAreSetUp = !0, !this._isDynamic) {
        var r = {};
        for (var o in this._valuesEnd) r[o] = this._valuesEnd[o];
        this._valuesEnd = r;
      }
      this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, t);
    }
    return this;
  }, i.prototype.startFromCurrentValues = function(e) {
    return this.start(e, !0);
  }, i.prototype._setupProperties = function(e, t, n, r, o) {
    for (var s in n) {
      var h = e[s], c = Array.isArray(h), u = c ? "array" : typeof h, d = !c && Array.isArray(n[s]);
      if (u !== "undefined" && u !== "function") {
        if (d) {
          if ((_ = n[s]).length === 0) continue;
          for (var f = [h], m = 0, v = _.length; m < v; m += 1) {
            var y = this._handleRelativeValue(h, _[m]);
            if (isNaN(y)) {
              d = !1, console.warn("Found invalid interpolation list. Skipping.");
              break;
            }
            f.push(y);
          }
          d && (n[s] = f);
        }
        if (u !== "object" && !c || !h || d) (t[s] === void 0 || o) && (t[s] = h), c || (t[s] *= 1), r[s] = d ? n[s].slice().reverse() : t[s] || 0;
        else {
          t[s] = c ? [] : {};
          var M = h;
          for (var b in M) t[s][b] = M[b];
          r[s] = c ? [] : {};
          var _ = n[s];
          if (!this._isDynamic) {
            var T = {};
            for (var b in _) T[b] = _[b];
            n[s] = _ = T;
          }
          this._setupProperties(M, t[s], _, r[s], o);
        }
      }
    }
  }, i.prototype.stop = function() {
    return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this;
  }, i.prototype.end = function() {
    return this._goToEnd = !0, this.update(1 / 0), this;
  }, i.prototype.pause = function(e) {
    return e === void 0 && (e = Gr()), this._isPaused || !this._isPlaying || (this._isPaused = !0, this._pauseStart = e, this._group && this._group.remove(this)), this;
  }, i.prototype.resume = function(e) {
    return e === void 0 && (e = Gr()), this._isPaused && this._isPlaying ? (this._isPaused = !1, this._startTime += e - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this) : this;
  }, i.prototype.stopChainedTweens = function() {
    for (var e = 0, t = this._chainedTweens.length; e < t; e++) this._chainedTweens[e].stop();
    return this;
  }, i.prototype.group = function(e) {
    return e === void 0 && (e = xl), this._group = e, this;
  }, i.prototype.delay = function(e) {
    return e === void 0 && (e = 0), this._delayTime = e, this;
  }, i.prototype.repeat = function(e) {
    return e === void 0 && (e = 0), this._initialRepeat = e, this._repeat = e, this;
  }, i.prototype.repeatDelay = function(e) {
    return this._repeatDelayTime = e, this;
  }, i.prototype.yoyo = function(e) {
    return e === void 0 && (e = !1), this._yoyo = e, this;
  }, i.prototype.easing = function(e) {
    return e === void 0 && (e = Xr.Linear.None), this._easingFunction = e, this;
  }, i.prototype.interpolation = function(e) {
    return e === void 0 && (e = pr.Linear), this._interpolationFunction = e, this;
  }, i.prototype.chain = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return this._chainedTweens = e, this;
  }, i.prototype.onStart = function(e) {
    return this._onStartCallback = e, this;
  }, i.prototype.onEveryStart = function(e) {
    return this._onEveryStartCallback = e, this;
  }, i.prototype.onUpdate = function(e) {
    return this._onUpdateCallback = e, this;
  }, i.prototype.onRepeat = function(e) {
    return this._onRepeatCallback = e, this;
  }, i.prototype.onComplete = function(e) {
    return this._onCompleteCallback = e, this;
  }, i.prototype.onStop = function(e) {
    return this._onStopCallback = e, this;
  }, i.prototype.update = function(e, t) {
    var n, r, o = this;
    if (e === void 0 && (e = Gr()), t === void 0 && (t = !0), this._isPaused) return !0;
    var s = this._startTime + this._duration;
    if (!this._goToEnd && !this._isPlaying) {
      if (e > s) return !1;
      t && this.start(e, !0);
    }
    if (this._goToEnd = !1, e < this._startTime) return !0;
    this._onStartCallbackFired === !1 && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), this._onEveryStartCallbackFired === !1 && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = !0);
    var h = e - this._startTime, c = this._duration + ((n = this._repeatDelayTime) !== null && n !== void 0 ? n : this._delayTime), u = this._duration + this._repeat * c, d = function() {
      if (o._duration === 0 || h > u) return 1;
      var M = Math.trunc(h / c), b = h - M * c, _ = Math.min(b / o._duration, 1);
      return _ === 0 && h === o._duration ? 1 : _;
    }(), f = this._easingFunction(d);
    if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, f), this._onUpdateCallback && this._onUpdateCallback(this._object, d), this._duration === 0 || h >= this._duration) {
      if (this._repeat > 0) {
        var m = Math.min(Math.trunc((h - this._duration) / c) + 1, this._repeat);
        for (r in isFinite(this._repeat) && (this._repeat -= m), this._valuesStartRepeat) this._yoyo || typeof this._valuesEnd[r] != "string" || (this._valuesStartRepeat[r] = this._valuesStartRepeat[r] + parseFloat(this._valuesEnd[r])), this._yoyo && this._swapEndStartRepeatValues(r), this._valuesStart[r] = this._valuesStartRepeat[r];
        return this._yoyo && (this._reversed = !this._reversed), this._startTime += c * m, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = !1, !0;
      }
      this._onCompleteCallback && this._onCompleteCallback(this._object);
      for (var v = 0, y = this._chainedTweens.length; v < y; v++) this._chainedTweens[v].start(this._startTime + this._duration, !1);
      return this._isPlaying = !1, !1;
    }
    return !0;
  }, i.prototype._updateProperties = function(e, t, n, r) {
    for (var o in n) if (t[o] !== void 0) {
      var s = t[o] || 0, h = n[o], c = Array.isArray(e[o]), u = Array.isArray(h);
      !c && u ? e[o] = this._interpolationFunction(h, r) : typeof h == "object" && h ? this._updateProperties(e[o], s, h, r) : typeof (h = this._handleRelativeValue(s, h)) == "number" && (e[o] = s + (h - s) * r);
    }
  }, i.prototype._handleRelativeValue = function(e, t) {
    return typeof t != "string" ? t : t.charAt(0) === "+" || t.charAt(0) === "-" ? e + parseFloat(t) : parseFloat(t);
  }, i.prototype._swapEndStartRepeatValues = function(e) {
    var t = this._valuesStartRepeat[e], n = this._valuesEnd[e];
    this._valuesStartRepeat[e] = typeof n == "string" ? this._valuesStartRepeat[e] + parseFloat(n) : this._valuesEnd[e], this._valuesEnd[e] = t;
  }, i;
}(), vv = Ul.nextId, ni = xl, yv = ni.getAll.bind(ni), xv = ni.removeAll.bind(ni), bv = ni.add.bind(ni), Sv = ni.remove.bind(ni), Mv = ni.update.bind(ni), cd = { Easing: Xr, Group: ld, Interpolation: pr, now: Gr, Sequence: Ul, nextId: vv, Tween: _v, VERSION: "23.1.1", getAll: yv, removeAll: xv, add: bv, remove: Sv, update: Mv }, Ev = Object.defineProperty, wv = Object.defineProperties, Tv = Object.getOwnPropertyDescriptors, Pu = Object.getOwnPropertySymbols, Av = Object.prototype.hasOwnProperty, Pv = Object.prototype.propertyIsEnumerable, bl = (i, e, t) => e in i ? Ev(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, ma = (i, e) => {
  for (var t in e || (e = {})) Av.call(e, t) && bl(i, t, e[t]);
  if (Pu) for (var t of Pu(e)) Pv.call(e, t) && bl(i, t, e[t]);
  return i;
}, fo = (i, e) => wv(i, Tv(e)), gn = (i, e, t) => (bl(i, typeof e != "symbol" ? e + "" : e, t), t), Rv = Object.defineProperty, _n = (i, e, t) => (((n, r, o) => {
  r in n ? Rv(n, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[r] = o;
})(i, typeof e != "symbol" ? e + "" : e, t), t);
const Sl = function(...i) {
  window.dataLayer.push(arguments);
}, Cv = new So(), ol = {}, Ut = { state: 0, stateFrame: 0, button: 0, viewportState: 0, viewportStateFrame: 0, x: 0, y: 0 };
class Dv extends Ju {
  constructor() {
    const e = new Uint8Array(1024);
    for (let t = 0; t < 1024; t++) e[t] = 0;
    super(e, 256, 1, 1023), _n(this, "data"), _n(this, "_size"), this.data = e, this.flipY = !0, this._size = 256;
  }
  setKeyDown(e) {
    const t = 4 * e;
    this.data[t + 0] !== 255 && (this.data[t + 0] = 255, this.data[t + 1] = 255, this.data[t + 2] = 255 - this.data[t + 2], this.needsUpdate = !0);
  }
  setKeyUp(e) {
    const t = 4 * e;
    this.data[t + 0] = 0, this.data[t + 1] = 0, this.needsUpdate = !0;
  }
  clear() {
    for (let e = 0; e < 4 * this._size; e++) this.data[e] = 0;
    this.needsUpdate = !0;
  }
  clearFrame() {
    for (let e = 0; e < this._size; e++) {
      const t = 4 * e;
      this.data[t + 1] = 0;
    }
    this.needsUpdate = !0;
  }
}
class Iv {
  constructor(e) {
    _n(this, "renderer"), _n(this, "_keyboardTexture", new Dv()), _n(this, "_onPointerMoveBind"), _n(this, "_onPointerDownBind"), _n(this, "_onPointerUpBind"), _n(this, "_onPointerEnterBind"), _n(this, "_onPointerLeaveBind"), _n(this, "_onKeyDownBind"), _n(this, "_onKeyUpBind"), this.renderer = e, this.renderer._pointerPosition = { x: 0, y: 0 }, this.renderer._pointerData = Ut, this.renderer._keyboardTexture = this._keyboardTexture;
    const t = e.domElement;
    t ? (this._onPointerMoveBind = this.onPointerMove.bind(this), this._onPointerDownBind = this.onPointerDown.bind(this), this._onPointerUpBind = this.onPointerUp.bind(this), this._onPointerEnterBind = this.onPointerEnter.bind(this), this._onPointerLeaveBind = this.onPointerLeave.bind(this), this._onKeyDownBind = this.onKeyDown.bind(this), this._onKeyUpBind = this.onKeyUp.bind(this), t.addEventListener("pointermove", this._onPointerMoveBind), t.addEventListener("pointerdown", this._onPointerDownBind), t.addEventListener("pointerup", this._onPointerUpBind), t.addEventListener("pointerenter", this._onPointerEnterBind), t.addEventListener("pointerleave", this._onPointerLeaveBind), window.addEventListener("keydown", this._onKeyDownBind), window.addEventListener("keyup", this._onKeyUpBind)) : console.warn("[NodeToy] Unable to bind dom events, domElement is null. Some nodes will not work.");
  }
  dispose() {
    if (!this.renderer) return;
    const e = this.renderer.domElement;
    !e || (e.removeEventListener("pointermove", this._onPointerMoveBind), e.removeEventListener("pointerdown", this._onPointerDownBind), e.removeEventListener("pointerup", this._onPointerUpBind), e.removeEventListener("pointerenter", this._onPointerEnterBind), e.removeEventListener("pointerleave", this._onPointerLeaveBind), window.removeEventListener("keydown", this._onKeyDownBind), window.removeEventListener("keyup", this._onKeyUpBind));
  }
  onPointerMove(e) {
    !this.renderer || (this.renderer._pointerPosition = { x: Math.floor(e.offsetX), y: Math.floor(e.offsetY) });
  }
  onPointerDown(e) {
    !this.renderer || (this.renderer._pointerData = fo(ma({}, this.renderer._pointerData), { state: 1, stateFrame: 1, button: e.button, x: Math.floor(e.offsetX), y: Math.floor(e.offsetY) }));
  }
  onPointerUp(e) {
    !this.renderer || (this.renderer._pointerData = fo(ma({}, this.renderer._pointerData), { state: 2, stateFrame: 2, button: e.button, x: Math.floor(e.offsetX), y: Math.floor(e.offsetY) }));
  }
  onPointerEnter(e) {
    !this.renderer || (this.renderer._pointerData = fo(ma({}, this.renderer._pointerData), { viewportState: 1, viewportStateFrame: 1, x: Math.floor(e.offsetX), y: Math.floor(e.offsetY) }));
  }
  onPointerLeave(e) {
    !this.renderer || (this.renderer._pointerData = fo(ma({}, this.renderer._pointerData), { viewportState: 2, viewportStateFrame: 2, x: Math.floor(e.offsetX), y: Math.floor(e.offsetY) }));
  }
  onKeyDown(e) {
    !this.renderer || this._keyboardTexture.setKeyDown(e.keyCode);
  }
  onKeyUp(e) {
    !this.renderer || this._keyboardTexture.setKeyUp(e.keyCode);
  }
}
const Ru = (i, e, t, n = {}) => {
  const r = e;
  for (let o = 0; o < t.length; o++) {
    const s = t[o], h = s.name in n ? n[s.name] : s.value;
    r[s.name] = { value: hd(i, s.type, h), type: s.type };
  }
  return r;
}, hd = (i, e, t) => {
  switch (e) {
    case "int":
    case "float":
      return t;
    case "vec2":
      return t != null ? new We(t.x, t.y) : new We(0, 0);
    case "vec3":
      return t != null ? new X(t.x, t.y, t.z) : new X(0, 0, 0);
    case "vec4":
      return t != null ? new Mt(t.x, t.y, t.z, t.w) : new Mt(0, 0, 0);
    case "mat3":
      return t || new et();
    case "mat4":
      return t || new Tt();
    case "texture": {
      if (t in ol) return ol[t];
      const n = Cv.load(((r, o) => r && o.includes("asset:") ? `${r}${r[r.length - 1] !== "/" ? "/" : ""}assets/${o.replace("asset:", "")}` : o)(i, t));
      return n.wrapS = n.wrapT = 1e3, ol[t] = n, n;
    }
  }
  return "undefined";
}, sl = new X(0, 0, 0), Cu = new X(0, 0, 0), Du = new X(0, 0, 0);
let Li = new We(0, 0);
var ud = { exports: {} };
(function(i) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function n() {
  }
  function r(c, u, d) {
    this.fn = c, this.context = u, this.once = d || !1;
  }
  function o(c, u, d, f, m) {
    if (typeof d != "function") throw new TypeError("The listener must be a function");
    var v = new r(d, f || c, m), y = t ? t + u : u;
    return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], v] : c._events[y].push(v) : (c._events[y] = v, c._eventsCount++), c;
  }
  function s(c, u) {
    --c._eventsCount == 0 ? c._events = new n() : delete c._events[u];
  }
  function h() {
    this._events = new n(), this._eventsCount = 0;
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (t = !1)), h.prototype.eventNames = function() {
    var c, u, d = [];
    if (this._eventsCount === 0) return d;
    for (u in c = this._events) e.call(c, u) && d.push(t ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(c)) : d;
  }, h.prototype.listeners = function(c) {
    var u = t ? t + c : c, d = this._events[u];
    if (!d) return [];
    if (d.fn) return [d.fn];
    for (var f = 0, m = d.length, v = new Array(m); f < m; f++) v[f] = d[f].fn;
    return v;
  }, h.prototype.listenerCount = function(c) {
    var u = t ? t + c : c, d = this._events[u];
    return d ? d.fn ? 1 : d.length : 0;
  }, h.prototype.emit = function(c, u, d, f, m, v) {
    var y = t ? t + c : c;
    if (!this._events[y]) return !1;
    var M, b, _ = this._events[y], T = arguments.length;
    if (_.fn) {
      switch (_.once && this.removeListener(c, _.fn, void 0, !0), T) {
        case 1:
          return _.fn.call(_.context), !0;
        case 2:
          return _.fn.call(_.context, u), !0;
        case 3:
          return _.fn.call(_.context, u, d), !0;
        case 4:
          return _.fn.call(_.context, u, d, f), !0;
        case 5:
          return _.fn.call(_.context, u, d, f, m), !0;
        case 6:
          return _.fn.call(_.context, u, d, f, m, v), !0;
      }
      for (b = 1, M = new Array(T - 1); b < T; b++) M[b - 1] = arguments[b];
      _.fn.apply(_.context, M);
    } else {
      var w, E = _.length;
      for (b = 0; b < E; b++) switch (_[b].once && this.removeListener(c, _[b].fn, void 0, !0), T) {
        case 1:
          _[b].fn.call(_[b].context);
          break;
        case 2:
          _[b].fn.call(_[b].context, u);
          break;
        case 3:
          _[b].fn.call(_[b].context, u, d);
          break;
        case 4:
          _[b].fn.call(_[b].context, u, d, f);
          break;
        default:
          if (!M) for (w = 1, M = new Array(T - 1); w < T; w++) M[w - 1] = arguments[w];
          _[b].fn.apply(_[b].context, M);
      }
    }
    return !0;
  }, h.prototype.on = function(c, u, d) {
    return o(this, c, u, d, !1);
  }, h.prototype.once = function(c, u, d) {
    return o(this, c, u, d, !0);
  }, h.prototype.removeListener = function(c, u, d, f) {
    var m = t ? t + c : c;
    if (!this._events[m]) return this;
    if (!u) return s(this, m), this;
    var v = this._events[m];
    if (v.fn) v.fn === u && (!f || v.once) && (!d || v.context === d) && s(this, m);
    else {
      for (var y = 0, M = [], b = v.length; y < b; y++) (v[y].fn !== u || f && !v[y].once || d && v[y].context !== d) && M.push(v[y]);
      M.length ? this._events[m] = M.length === 1 ? M[0] : M : s(this, m);
    }
    return this;
  }, h.prototype.removeAllListeners = function(c) {
    var u;
    return c ? (u = t ? t + c : c, this._events[u] && s(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
  }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = t, h.EventEmitter = h, i.exports = h;
})(ud);
const Lv = ud.exports, ll = (i) => i instanceof Date, Ml = (i) => i != null && typeof i == "object", Iu = (i, ...e) => Object.prototype.hasOwnProperty.call(i, ...e), cl = (i) => Ml(i) && ((e) => Object.keys(e).length === 0)(i), dd = (i, e) => {
  if (i === e) return {};
  if (!Ml(i) || !Ml(e)) return e;
  const t = Object.keys(i).reduce((n, r) => (Iu(e, r) || (n[r] = void 0), n), /* @__PURE__ */ Object.create(null));
  return ll(i) || ll(e) ? i.valueOf() == e.valueOf() ? {} : e : Object.keys(e).reduce((n, r) => {
    if (!Iu(i, r)) return n[r] = e[r], n;
    const o = dd(i[r], e[r]);
    return cl(o) && !ll(o) && (cl(i[r]) || !cl(e[r])) || (n[r] = o), n;
  }, t);
}, _a = (i) => ((e) => {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return !(t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.toStringTag in e || Symbol.iterator in e);
})(i) ? Object.keys(i).reduce((e, t) => {
  if (t === "__esModule") return e;
  const n = Object.getOwnPropertyDescriptor(i, t), r = n && "get" in n, o = i[t];
  return r ? Object.defineProperty(e, t, n) : e[t] = _a(o), e;
}, {}) : Array.isArray(i) ? i.map((e) => _a(e)) : i;
((i, e = {}) => {
  if (typeof window > "u") return;
  const t = "ga-gtag";
  if (document.getElementById(t)) return void console.error("Already has a gtag script.");
  const { head: n } = document, r = document.createElement("script");
  r.id = t, r.type = "text/javascript", r.async = !0, r.src = `https://www.googletagmanager.com/gtag/js?id=${i}`, n.insertBefore(r, n.firstChild), window.dataLayer = window.dataLayer || [], Sl("js", /* @__PURE__ */ new Date()), Sl("config", i, e);
})("G-D7559MFFX3");
const mo = new class {
  constructor() {
    _n(this, "events"), _n(this, "requests", []), _n(this, "cache", {}), this.events = new Lv();
  }
  load(i) {
    this.requests.includes(i) || (this.requests.push(i), fetch(i).then((e) => e.json()).then((e) => {
      ((t, n = {}) => {
        Sl("event", t, n);
      })("graph.load", { url: i, href: window.location.href }), this.cache[i] = e, this.events.emit("load", { url: i, data: e });
    }));
  }
}();
var va, hl, Do, go, El, Lu;
(hl = va || (va = {})).Front = "front", hl.Back = "back", hl.None = "none", (go = Do || (Do = {})).Standard = "standard", go.Physical = "physical", go.Unlit = "unlit", go.Image = "image", (Lu = El || (El = {})).Opaque = "opaque", Lu.Transparent = "transparent";
const dr = class extends qn {
  constructor(i) {
    super(), gn(this, "verbose", !1), gn(this, "resetUniformByName", (e) => {
      this.resetUniformsByName([e]);
    }), gn(this, "resetUniformsByName", (e) => {
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        for (let r = 0; r < this._data.uniforms.length; r++) {
          const o = this._data.uniforms[r];
          if (o.name === n) {
            this.uniforms[o.name] = { value: hd(this._url, o.type, o.value), type: o.type };
            break;
          }
        }
      }
    }), gn(this, "_fullURL", null), gn(this, "_url", null), gn(this, "_data", null), gn(this, "_parameters", {}), gn(this, "_cullMode", va.Back), gn(this, "_type", Do.Unlit), gn(this, "_options", {}), gn(this, "_envUUID", null), this.toneMapped = !1, this.flatShading = !1, this.transparent = !0, this.onBeforeRender = this.onBeforeRender, this.normalMap = new Gt(), this.tangentSpaceNormalMap = new Gt(), this.aoMap = new Gt(), this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.depthTest = !0, this.depthWrite = !0, this.envMapIntensity = 1, this.side = 0, this.vertexShader = wn.standard.vertexShader, this.fragmentShader = wn.standard.fragmentShader, this.defines = { STANDARD: "", USE_NORMALMAP: "", USE_TANGENT: "", TANGENTSPACE_NORMALMAP: "" }, this.uniforms = _a(wn.physical.uniforms), this.uniforms.spotShadowMatrix = { value: [new Tt()] }, this.lights = !0, this.isShaderMaterial = !0, this.isMeshStandardMaterial = !1, this.type = "ShaderMaterial", this.combine = 0, i && ("verbose" in i && (this.verbose = i.verbose), "url" in i && (this.url = i.url), "toneMapped" in i && (this.toneMapped = i.toneMapped), "flatShading" in i && (this.flatShading = i.flatShading), "transparent" in i && (this.transparent = i.transparent), "cullMode" in i && (this.cullMode = i.cullMode), this._parameters = i.parameters ? i.parameters : null, "polygonOffset" in i && (this.polygonOffset = i.polygonOffset), "polygonOffsetFactor" in i && (this.polygonOffsetFactor = i.polygonOffsetFactor), "depthTest" in i && (this.depthTest = i.depthTest), "depthWrite" in i && (this.depthWrite = i.depthWrite), "envMapIntensity" in i && (this.envMapIntensity = i.envMapIntensity), "data" in i && (this.data = i.data), this._options = i), mo.events.on("load", (e) => {
      e.url === this._fullURL && this.loadShader(e.data);
    });
  }
  static tick() {
    dr._time.deltaTime = dr._clock.getDelta(), dr._time.time += dr._time.deltaTime;
  }
  get cullMode() {
    return this._cullMode;
  }
  set cullMode(i) {
    this._cullMode = i, this.side = this.getTHREECullMode(i);
  }
  recompile() {
    this.version++, this.dispose();
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(i) {
    return super.copy(i), this._url = i._url, this._data = i._data, this.verbose = i.verbose, this._parameters && (this._parameters = ma({}, i._parameters)), this.vertexShader = i.vertexShader, this.fragmentShader = i.fragmentShader, this.uniforms = _a(i.uniforms), this.recompile(), this;
  }
  get url() {
    return this._url;
  }
  set url(i) {
    if (this._url = i, i) {
      const t = this._fullURL = (e = i).includes(".json") ? e : `${e}${e[e.length - 1] != "/" ? "/" : ""}material.glsl.json`;
      this.verbose, t in mo.cache ? this.loadShader(mo.cache[t]) : mo.load(t);
    } else console.warn("[NodeToy] Missing material graph URL. Cannot load shader.");
    var e;
  }
  get data() {
    return this._data;
  }
  set data(i) {
    i ? (this.verbose, this.loadShader(i)) : console.warn("[NodeToy] Missing material graph data. Cannot load shader.");
  }
  get parameters() {
    return this._parameters;
  }
  set parameters(i) {
    if (this._parameters = i, this._data) {
      const e = this._data.uniforms, t = _a(this.uniforms), n = Ru(this.url, this.uniforms, e, i), r = Object.keys(dd(t, n));
      for (let o = 0; o < r.length; o++) {
        const s = r[o];
        this.uniforms[s] = n[s];
      }
    }
  }
  updateUniforms(i) {
    let e = [];
    if (Object.assign(e, i), this._parameters !== null) for (const t in this._parameters) for (let n = 0; n < e.length; n++) t === e[n].name && (e[n].value = this._parameters[t]);
    return e;
  }
  loadShader(i) {
    this.verbose, this._data = i, this.vertexShader = i.vertex, this.fragmentShader = i.fragment;
    const e = this.updateUniforms(i.uniforms);
    this.uniforms = Ru(this.url, this.uniforms, e), this.recompile(), "cullMode" in i && !("cullMode" in this._options) && (this.cullMode = i.cullMode), "lightModel" in i && (this._type = i.lightModel), "renderType" in i && (this.transparent = i.renderType === El.Transparent);
  }
  onBeforeRender(i, e, t, n, r) {
    const o = { camera: t, object: r, renderer: i, scene: e, light: null, time: dr._time.time, deltaTime: dr._time.deltaTime };
    if (i._rendererDOM || (i._rendererDOM = new Iv(i)), this.uniforms && ((s, h) => {
      for (let c = 0; c < s.scene.children.length; c++) if (s.scene.children[c].isDirectionalLight) {
        s.light = s.scene.children[c];
        break;
      }
      if ("_sinTime" in h) {
        const c = Math.sin(s.time);
        h._sinTime.value.set(c / 8, c / 4, c / 2, c);
      }
      if ("_cosTime" in h) {
        const c = Math.cos(s.time);
        h._cosTime.value.set(c / 8, c / 4, c / 2, c);
      }
      if ("_objectScale" in h) {
        const c = s.object;
        h._objectScale.value = c.scale;
      }
      if ("_time" in h && (h._time.value = s.time), "_deltaTime" in h && h._deltaTime.value.set(s.deltaTime, 1 / s.deltaTime, 0, 0), "_objectSpaceViewDir" in h) {
        const c = s.object, u = s.camera, d = new Mt(u.position.x, u.position.y, u.position.z), f = c.matrixWorld.clone().invert().elements, m = f[0] * d.x + f[4] * d.y + f[8] * d.z + f[12] * d.w, v = f[1] * d.x + f[5] * d.y + f[9] * d.z + f[13] * d.w, y = f[2] * d.x + f[6] * d.y + f[10] * d.z + f[14] * d.w, M = f[3] * d.x + f[7] * d.y + f[11] * d.z + f[15] * d.w, b = new Mt(m, v, y, M);
        h._objectSpaceViewDir.value = b;
      }
      if ("_cameraPosition" in h) {
        const c = s.camera;
        h._cameraPosition.value = c.position.clone();
      }
      if ("_worldSpaceCameraPosition" in h && (s.camera.getWorldDirection(Cu), h._worldSpaceCameraPosition.value = Cu), "_worldSpaceLightPosition" in h && (s.light.getWorldDirection(Du), h._worldSpaceLightPosition.value = Du), "_worldToObject" in h) {
        const c = s.object;
        h._worldToObject.value = c.matrixWorld.clone().invert();
      }
      if ("_worldToObjMatrix" in h && (h._worldToObjMatrix.value = s.object.matrixWorld.clone().invert()), "_worldToCameraMatrix" in h) {
        const c = s.camera;
        h._worldToCameraMatrix.value = c.matrixWorldInverse.clone();
      }
      if ("_viewProjectionMatrix" in h) {
        const c = s.camera, u = c.matrixWorld.clone();
        h._viewProjectionMatrix.value = c.projectionMatrix.clone().multiply(u);
      }
      if ("_viewMatrix" in h) {
        const c = s.camera;
        h._viewMatrix.value = c.matrixWorldInverse;
      }
      if ("_transposeModelViewMatrix" in h) {
        const c = s.object;
        h._transposeModelViewMatrix.value = c.modelViewMatrix.clone().transpose();
      }
      if ("_inverseTransposeModelViewMatrix" in h) {
        const c = s.object.modelViewMatrix.clone();
        h._inverseTransposeModelViewMatrix.value = c.invert().transpose();
      }
      if ("_projectionMatrix" in h) {
        const c = s.camera;
        h._projectionMatrix.value = c.projectionMatrix;
      }
      if ("_projectionParams" in h) {
        const c = s.camera;
        h._projectionParams.value = new Mt(1, c.near, c.far, 1 / c.far);
      }
      if ("_inverseProjectionMatrix" in h) {
        const c = s.camera;
        h._inverseProjectionMatrix.value = c.projectionMatrixInverse;
      }
      if ("_objectToWorldMatrix" in h) {
        const c = s.object;
        h._objectToWorldMatrix.value = c.matrixWorld;
      }
      if ("_modelViewProjectionMatrix" in h) {
        const c = s.object, u = s.camera;
        u.updateMatrixWorld(!0), c.updateMatrixWorld(!0);
        const d = c.modelViewMatrix.clone();
        h._modelViewProjectionMatrix.value = u.projectionMatrix.clone().multiply(d);
      }
      if ("_modelViewMatrix" in h) {
        const c = s.object;
        s.camera.updateMatrixWorld(!0), c.updateMatrixWorld(!0), h._modelViewMatrix.value = c.modelViewMatrix.clone();
      }
      if ("_inverseModelViewMatrix" in h) {
        const c = s.object;
        s.camera.updateMatrixWorld(!0), c.updateMatrixWorld(!0), h._inverseModelViewMatrix.value = c.modelViewMatrix.clone().invert();
      }
      if ("_modelMatrix" in h) {
        const c = s.object;
        h._modelMatrix.value = c.matrixWorld;
      }
      if ("_normalMatrix" in h) {
        const c = s.object;
        h._normalMatrix.value = c.normalMatrix;
      }
      if ("_inverseViewMatrix" in h) {
        const c = s.camera;
        h._inverseViewMatrix.value = c.matrixWorldInverse.clone().invert();
      }
      if ("_cameraToWorldMatrix" in h) {
        const c = s.camera;
        h._cameraToWorldMatrix.value = c.matrixWorldInverse.clone().invert();
      }
      if ("_worldSpaceLightDir" in h && s.light && (h._worldSpaceLightDir.value = new X(s.light.rotation._x, s.light.rotation._y, s.light.rotation._z).normalize()), "_lightColor" in h && s.light) {
        const c = s.light.intensity, u = new X(s.light.color.r * c, s.light.color.g * c, s.light.color.b * c);
        h._lightColor.value = u;
      }
      if ("_screenSize" in h && (s.renderer.getSize(Li), h._screenSize.value.set(Math.floor(Li.x), Math.floor(Li.y), 1 + 1 / Math.floor(Li.x), 1 + 1 / Math.floor(Li.y))), "_viewDir" in h && (s.camera.getWorldDirection(sl), sl.negate(), h._viewDir.value = sl), "_pointerPosition" in h) {
        const c = "_pointerPosition" in s.renderer ? s.renderer._pointerPosition : { x: 0, y: 0 };
        h._pointerPosition.value.set(Math.floor(c.x), Math.floor(c.y));
      }
      if ("_pointerPositionNormalized" in h) {
        s.renderer.getSize(Li);
        const c = "_pointerPosition" in s.renderer ? s.renderer._pointerPosition : { x: 0, y: 0 };
        h._pointerPositionNormalized.value.set(c.x / Li.x, c.y / Li.y);
      }
      if ("_pointerDown" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        h._pointerDown.value.set(c.state === 1 ? 1 : 0, c.button);
      }
      if ("_pointerDownPrimary" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 0 && h._pointerDownPrimary.value.set(c.state === 1 ? 1 : 0, c.button);
      }
      if ("_pointerDownAuxiliary" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 1 && h._pointerDownAuxiliary.value.set(c.state === 1 ? 1 : 0, c.button);
      }
      if ("_pointerDownSecondary" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 2 && h._pointerDownSecondary.value.set(c.state === 1 ? 1 : 0, c.button);
      }
      if ("_pointerDownFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        h._pointerDownFrame.value.set(c.stateFrame === 1 ? 1 : 0, c.button);
      }
      if ("_pointerDownPrimaryFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 0 && h._pointerDownPrimaryFrame.value.set(c.stateFrame === 1 ? 1 : 0, c.button);
      }
      if ("_pointerDownAuxiliaryFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 1 && h._pointerDownAuxiliaryFrame.value.set(c.stateFrame === 1 ? 1 : 0, c.button);
      }
      if ("_pointerDownSecondaryFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 2 && h._pointerDownSecondaryFrame.value.set(c.stateFrame === 1 ? 1 : 0, c.button);
      }
      if ("_pointerUp" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        h._pointerUp.value.set(c.state === 0 || c.state === 2 ? 1 : 0, c.button);
      }
      if ("_pointerUpPrimary" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 0 ? h._pointerUpPrimary.value.set(c.state === 0 || c.state === 2 ? 1 : 0, c.button) : h._pointerUpPrimary.value.set(1, c.button);
      }
      if ("_pointerUpAuxiliary" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 1 ? h._pointerUpAuxiliary.value.set(c.state === 0 || c.state === 2 ? 1 : 0, c.button) : h._pointerUpAuxiliary.value.set(1, c.button);
      }
      if ("_pointerUpSecondary" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 2 ? h._pointerUpSecondary.value.set(c.state === 0 || c.state === 2 ? 1 : 0, c.button) : h._pointerUpSecondary.value.set(1, c.button);
      }
      if ("_pointerUpFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        h._pointerUpFrame.value.set(c.stateFrame === 2 ? 1 : 0, c.button);
      }
      if ("_pointerUpPrimaryFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 0 ? h._pointerUpPrimaryFrame.value.set(c.stateFrame === 2 ? 1 : 0, c.button) : h._pointerUpPrimaryFrame.value.set(0, c.button);
      }
      if ("_pointerUpAuxiliaryFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 1 ? h._pointerUpAuxiliaryFrame.value.set(c.stateFrame === 2 ? 1 : 0, c.button) : h._pointerUpAuxiliaryFrame.value.set(0, c.button);
      }
      if ("_pointerUpSecondaryFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        c.button === 2 ? h._pointerUpSecondaryFrame.value.set(c.stateFrame === 2 ? 1 : 0, c.button) : h._pointerUpSecondaryFrame.value.set(0, c.button);
      }
      if ("_pointerEnter" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        h._pointerEnter.value = c.viewportState === 1 ? 1 : 0;
      }
      if ("_pointerLeave" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        h._pointerLeave.value = c.viewportState === 0 || c.viewportState === 2 ? 1 : 0;
      }
      if ("_pointerEnterFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        h._pointerEnterFrame.value = c.viewportStateFrame === 1 ? 1 : 0;
      }
      if ("_pointerLeaveFrame" in h) {
        const c = "_pointerData" in s.renderer ? s.renderer._pointerData : Ut;
        h._pointerLeaveFrame.value = c.viewportStateFrame === 2 ? 1 : 0;
      }
      if ("_keyboardTexture" in h) {
        const c = "_keyboardTexture" in s.renderer ? s.renderer._keyboardTexture : null;
        h._keyboardTexture.value = c;
      }
    })(o, this.uniforms), e.environment && this._type !== Do.Unlit) {
      if (this._envUUID != e.environment.uuid) {
        this._envUUID = e.environment.uuid;
        const s = e.environment.clone();
        s.mapping = 306, this.envMap = s, this.envMap.mapping = 306, this.envMapMode = 306, this.uniforms.envMap.value = s, this.uniforms.envMapIntensity.value = this.envMapIntensity;
      }
      this.defines = { STANDARD: "", USE_NORMALMAP: "", USE_ENVMAP: "", ENVMAP_TYPE_CUBE_UV: "", USE_TANGENT: "", TANGENTSPACE_NORMALMAP: "" };
    } else this.envMap = null, "envMap" in this.uniforms && (this.uniforms.envMap.value = null), this.defines = { STANDARD: "", USE_NORMALMAP: "", USE_TANGENT: "", TANGENTSPACE_NORMALMAP: "" };
    e.fog && (this.defines.USE_FOG = "");
  }
  getTHREECullMode(i) {
    return i === va.None ? 2 : i === va.Front ? 1 : 0;
  }
};
let ul = dr;
gn(ul, "_bindDOMEvents", () => {
}), gn(ul, "_time", { time: 0, deltaTime: 0 }), gn(ul, "_clock", new Co()), window.process = { env: { NODE_ENV: "production" } };
var $n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Uu = { exports: {} }, Ft = {};
let Wn, _o, Ui, en, vo, dl;
(function(i) {
  var e = Object.defineProperty, t = Object.defineProperties, n = Object.getOwnPropertyDescriptors, r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable, h = (x, C, k) => C in x ? e(x, C, { enumerable: !0, configurable: !0, writable: !0, value: k }) : x[C] = k;
  ((x, C) => {
    for (var k in ((se) => {
      e(se, "__esModule", { value: !0 });
    })(x), C) e(x, k, { get: C[k], enumerable: !0 });
  })(i, { Atom: () => ut, PointerProxy: () => zn, Ticker: () => $t, getPointerParts: () => Ie, isPointer: () => ze, isPrism: () => pt, iterateAndCountTicks: () => dn, iterateOver: () => rn, pointer: () => He, pointerToPrism: () => cn, prism: () => li, val: () => wi });
  var c = Array.isArray, u = typeof $n == "object" && $n && $n.Object === Object && $n, d = typeof self == "object" && self && self.Object === Object && self, f = u || d || Function("return this")(), m = f.Symbol, v = Object.prototype, y = v.hasOwnProperty, M = v.toString, b = m ? m.toStringTag : void 0, _ = function(x) {
    var C = y.call(x, b), k = x[b];
    try {
      x[b] = void 0;
      var se = !0;
    } catch {
    }
    var ke = M.call(x);
    return se && (C ? x[b] = k : delete x[b]), ke;
  }, T = Object.prototype.toString, w = function(x) {
    return T.call(x);
  }, E = m ? m.toStringTag : void 0, U = function(x) {
    return x == null ? x === void 0 ? "[object Undefined]" : "[object Null]" : E && E in Object(x) ? _(x) : w(x);
  }, N = function(x) {
    return x != null && typeof x == "object";
  }, O = function(x) {
    return typeof x == "symbol" || N(x) && U(x) == "[object Symbol]";
  }, te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, G = /^\w*$/, Z = function(x, C) {
    if (c(x)) return !1;
    var k = typeof x;
    return !(k != "number" && k != "symbol" && k != "boolean" && x != null && !O(x)) || G.test(x) || !te.test(x) || C != null && x in Object(C);
  }, re = function(x) {
    var C = typeof x;
    return x != null && (C == "object" || C == "function");
  }, F, V = function(x) {
    if (!re(x)) return !1;
    var C = U(x);
    return C == "[object Function]" || C == "[object GeneratorFunction]" || C == "[object AsyncFunction]" || C == "[object Proxy]";
  }, B = f["__core-js_shared__"], ae = (F = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "", ce = function(x) {
    return !!ae && ae in x;
  }, ue = Function.prototype.toString, ge = function(x) {
    if (x != null) {
      try {
        return ue.call(x);
      } catch {
      }
      try {
        return x + "";
      } catch {
      }
    }
    return "";
  }, Ee = /^\[object .+?Constructor\]$/, xe = Function.prototype, le = Object.prototype, de = xe.toString, Se = le.hasOwnProperty, Te = RegExp("^" + de.call(Se).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), L = function(x) {
    return !(!re(x) || ce(x)) && (V(x) ? Te : Ee).test(ge(x));
  }, A = function(x, C) {
    return x == null ? void 0 : x[C];
  }, j = function(x, C) {
    var k = A(x, C);
    return L(k) ? k : void 0;
  }, Q = j(Object, "create"), W = function() {
    this.__data__ = Q ? Q(null) : {}, this.size = 0;
  }, q = function(x) {
    var C = this.has(x) && delete this.__data__[x];
    return this.size -= C ? 1 : 0, C;
  }, D = Object.prototype.hasOwnProperty, K = function(x) {
    var C = this.__data__;
    if (Q) {
      var k = C[x];
      return k === "__lodash_hash_undefined__" ? void 0 : k;
    }
    return D.call(C, x) ? C[x] : void 0;
  }, $ = Object.prototype.hasOwnProperty, _e = function(x) {
    var C = this.__data__;
    return Q ? C[x] !== void 0 : $.call(C, x);
  }, ne = function(x, C) {
    var k = this.__data__;
    return this.size += this.has(x) ? 0 : 1, k[x] = Q && C === void 0 ? "__lodash_hash_undefined__" : C, this;
  };
  function pe(x) {
    var C = -1, k = x == null ? 0 : x.length;
    for (this.clear(); ++C < k; ) {
      var se = x[C];
      this.set(se[0], se[1]);
    }
  }
  pe.prototype.clear = W, pe.prototype.delete = q, pe.prototype.get = K, pe.prototype.has = _e, pe.prototype.set = ne;
  var ye = pe, me = function() {
    this.__data__ = [], this.size = 0;
  }, Re = function(x, C) {
    return x === C || x != x && C != C;
  }, Pe = function(x, C) {
    for (var k = x.length; k--; ) if (Re(x[k][0], C)) return k;
    return -1;
  }, Ne = Array.prototype.splice, je = function(x) {
    var C = this.__data__, k = Pe(C, x);
    return !(k < 0) && (k == C.length - 1 ? C.pop() : Ne.call(C, k, 1), --this.size, !0);
  }, Xe = function(x) {
    var C = this.__data__, k = Pe(C, x);
    return k < 0 ? void 0 : C[k][1];
  }, $e = function(x) {
    return Pe(this.__data__, x) > -1;
  }, Ue = function(x, C) {
    var k = this.__data__, se = Pe(k, x);
    return se < 0 ? (++this.size, k.push([x, C])) : k[se][1] = C, this;
  };
  function Ye(x) {
    var C = -1, k = x == null ? 0 : x.length;
    for (this.clear(); ++C < k; ) {
      var se = x[C];
      this.set(se[0], se[1]);
    }
  }
  Ye.prototype.clear = me, Ye.prototype.delete = je, Ye.prototype.get = Xe, Ye.prototype.has = $e, Ye.prototype.set = Ue;
  var at = Ye, ht = j(f, "Map"), De = function() {
    this.size = 0, this.__data__ = { hash: new ye(), map: new (ht || at)(), string: new ye() };
  }, Ke = function(x) {
    var C = typeof x;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean" ? x !== "__proto__" : x === null;
  }, tt = function(x, C) {
    var k = x.__data__;
    return Ke(C) ? k[typeof C == "string" ? "string" : "hash"] : k.map;
  }, Bt = function(x) {
    var C = tt(this, x).delete(x);
    return this.size -= C ? 1 : 0, C;
  }, kt = function(x) {
    return tt(this, x).get(x);
  }, Rt = function(x) {
    return tt(this, x).has(x);
  }, qt = function(x, C) {
    var k = tt(this, x), se = k.size;
    return k.set(x, C), this.size += k.size == se ? 0 : 1, this;
  };
  function It(x) {
    var C = -1, k = x == null ? 0 : x.length;
    for (this.clear(); ++C < k; ) {
      var se = x[C];
      this.set(se[0], se[1]);
    }
  }
  It.prototype.clear = De, It.prototype.delete = Bt, It.prototype.get = kt, It.prototype.has = Rt, It.prototype.set = qt;
  var H = It;
  function vn(x, C) {
    if (typeof x != "function" || C != null && typeof C != "function") throw new TypeError("Expected a function");
    var k = function() {
      var se = arguments, ke = C ? C.apply(this, se) : se[0], st = k.cache;
      if (st.has(ke)) return st.get(ke);
      var Vt = x.apply(this, se);
      return k.cache = st.set(ke, Vt) || st, Vt;
    };
    return k.cache = new (vn.Cache || H)(), k;
  }
  vn.Cache = H;
  var ii = vn, Ct = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nn = /\\(\\)?/g, Fi = function(x) {
    var C = ii(x, function(se) {
      return k.size === 500 && k.clear(), se;
    }), k = C.cache;
    return C;
  }(function(x) {
    var C = [];
    return x.charCodeAt(0) === 46 && C.push(""), x.replace(Ct, function(k, se, ke, st) {
      C.push(ke ? st.replace(Nn, "$1") : se || k);
    }), C;
  }), mr = function(x, C) {
    for (var k = -1, se = x == null ? 0 : x.length, ke = Array(se); ++k < se; ) ke[k] = C(x[k], k, x);
    return ke;
  }, ri = m ? m.prototype : void 0, Yn = ri ? ri.toString : void 0, Bi = function x(C) {
    if (typeof C == "string") return C;
    if (c(C)) return mr(C, x) + "";
    if (O(C)) return Yn ? Yn.call(C) : "";
    var k = C + "";
    return k == "0" && 1 / C == -1 / 0 ? "-0" : k;
  }, gr = function(x) {
    return x == null ? "" : Bi(x);
  }, _r = function(x, C) {
    return c(x) ? x : Z(x, C) ? [x] : Fi(gr(x));
  }, On = function(x) {
    if (typeof x == "string" || O(x)) return x;
    var C = x + "";
    return C == "0" && 1 / x == -1 / 0 ? "-0" : C;
  }, ki = function(x, C) {
    for (var k = 0, se = (C = _r(C, x)).length; x != null && k < se; ) x = x[On(C[k++])];
    return k && k == se ? x : void 0;
  }, Fn = function(x, C, k) {
    var se = x == null ? void 0 : ki(x, C);
    return se === void 0 ? k : se;
  }, ai = /* @__PURE__ */ function(x, C) {
    return function(k) {
      return x(C(k));
    };
  }(Object.getPrototypeOf, Object), An = Function.prototype, vr = Object.prototype, oi = An.toString, si = vr.hasOwnProperty, yr = oi.call(Object), R = function(x) {
    if (!N(x) || U(x) != "[object Object]") return !1;
    var C = ai(x);
    if (C === null) return !0;
    var k = si.call(C, "constructor") && C.constructor;
    return typeof k == "function" && k instanceof k && oi.call(k) == yr;
  }, Y = function(x) {
    var C = x == null ? 0 : x.length;
    return C ? x[C - 1] : void 0;
  }, oe = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), ee = Symbol("pointerMeta"), ve = { get(x, C) {
    if (C === ee) return oe.get(x);
    let k = he.get(x);
    k || (k = /* @__PURE__ */ new Map(), he.set(x, k));
    const se = k.get(C);
    if (se !== void 0) return se;
    const ke = oe.get(x), st = Be({ root: ke.root, path: [...ke.path, C] });
    return k.set(C, st), st;
  } }, Ce = (x) => x[ee], Ie = (x) => {
    const { root: C, path: k } = Ce(x);
    return { root: C, path: k };
  };
  function Be(x) {
    var C;
    const k = { root: x.root, path: (C = x.path) != null ? C : [] }, se = {};
    return oe.set(se, k), new Proxy(se, ve);
  }
  var He = Be, ze = (x) => x && !!Ce(x), Ve = (x, C, k) => {
    if (C.length === 0) return k(x);
    if (Array.isArray(x)) {
      let [se, ...ke] = C;
      se = parseInt(String(se), 10), isNaN(se) && (se = 0);
      const st = x[se], Vt = Ve(st, ke, k);
      if (st === Vt) return x;
      const Pn = [...x];
      return Pn.splice(se, 1, Vt), Pn;
    }
    if (typeof x == "object" && x !== null) {
      const [se, ...ke] = C, st = x[se], Vt = Ve(st, ke, k);
      return st === Vt ? x : ((Jn, Vn) => t(Jn, n(Vn)))(((Jn, Vn) => {
        for (var ci in Vn || (Vn = {})) o.call(Vn, ci) && h(Jn, ci, Vn[ci]);
        if (r) for (var ci of r(Vn)) s.call(Vn, ci) && h(Jn, ci, Vn[ci]);
        return Jn;
      })({}, x), { [se]: Vt });
    }
    {
      const [se, ...ke] = C;
      return { [se]: Ve(void 0, ke, k) };
    }
  }, nt = class {
    constructor() {
      this._head = void 0;
    }
    peek() {
      return this._head && this._head.data;
    }
    pop() {
      const x = this._head;
      if (x) return this._head = x.next, x.data;
    }
    push(x) {
      const C = { next: this._head, data: x };
      this._head = C;
    }
  };
  function pt(x) {
    return !(!x || !x.isPrism || x.isPrism !== !0);
  }
  function ft() {
    const x = new nt(), C = () => {
    };
    return { type: "Dataverse_discoveryMechanism", startIgnoringDependencies: () => {
      x.push(C);
    }, stopIgnoringDependencies: () => {
      x.peek() !== C ? process.env.NODE_ENV === "development" && console.warn("This should never happen") : x.pop();
    }, reportResolutionStart: (k) => {
      const se = x.peek();
      se && se(k), x.push(C);
    }, reportResolutionEnd: (k) => {
      x.pop();
    }, pushCollector: (k) => {
      x.push(k);
    }, popCollector: (k) => {
      if (x.peek() !== k) throw new Error("Popped collector is not on top of the stack");
      x.pop();
    } };
  }
  var { startIgnoringDependencies: mt, stopIgnoringDependencies: ot, reportResolutionEnd: it, reportResolutionStart: _t, pushCollector: Dt, popCollector: Ze } = function() {
    const x = "__dataverse_discoveryMechanism_sharedStack", C = typeof window < "u" ? window : $n !== void 0 ? $n : {};
    if (C) {
      const k = C[x];
      if (k && typeof k == "object" && k.type === "Dataverse_discoveryMechanism") return k;
      {
        const se = ft();
        return C[x] = se, se;
      }
    }
    return ft();
  }(), Le = () => {
  }, nn = class {
    constructor(x, C) {
      this._fn = x, this._prismInstance = C, this._didMarkDependentsAsStale = !1, this._isFresh = !1, this._cacheOfDendencyValues = /* @__PURE__ */ new Map(), this._dependents = /* @__PURE__ */ new Set(), this._dependencies = /* @__PURE__ */ new Set(), this._possiblyStaleDeps = /* @__PURE__ */ new Set(), this._scope = new Bn(this), this._lastValue = void 0, this._forciblySetToStale = !1, this._reactToDependencyGoingStale = (k) => {
        this._possiblyStaleDeps.add(k), this._markAsStale();
      };
      for (const k of this._dependencies) k._addDependent(this._reactToDependencyGoingStale);
      mt(), this.getValue(), ot();
    }
    get hasDependents() {
      return this._dependents.size > 0;
    }
    removeDependent(x) {
      this._dependents.delete(x);
    }
    addDependent(x) {
      this._dependents.add(x);
    }
    destroy() {
      for (const x of this._dependencies) x._removeDependent(this._reactToDependencyGoingStale);
      xr(this._scope);
    }
    getValue() {
      if (!this._isFresh) {
        const x = this._recalculate();
        this._lastValue = x, this._isFresh = !0, this._didMarkDependentsAsStale = !1, this._forciblySetToStale = !1;
      }
      return this._lastValue;
    }
    _recalculate() {
      let x;
      if (!this._forciblySetToStale && this._possiblyStaleDeps.size > 0) {
        let se = !1;
        mt();
        for (const ke of this._possiblyStaleDeps) if (this._cacheOfDendencyValues.get(ke) !== ke.getValue()) {
          se = !0;
          break;
        }
        if (ot(), this._possiblyStaleDeps.clear(), !se) return this._lastValue;
      }
      const C = /* @__PURE__ */ new Set();
      this._cacheOfDendencyValues.clear();
      const k = (se) => {
        C.add(se), this._addDependency(se);
      };
      Dt(k), Yt.push(this._scope);
      try {
        x = this._fn();
      } catch (se) {
        console.error(se);
      } finally {
        Yt.pop() !== this._scope && console.warn("The Prism hook stack has slipped. This is a bug.");
      }
      Ze(k);
      for (const se of this._dependencies) C.has(se) || this._removeDependency(se);
      this._dependencies = C, mt();
      for (const se of C) this._cacheOfDendencyValues.set(se, se.getValue());
      return ot(), x;
    }
    forceStale() {
      this._forciblySetToStale = !0, this._markAsStale();
    }
    _markAsStale() {
      if (!this._didMarkDependentsAsStale) {
        this._didMarkDependentsAsStale = !0, this._isFresh = !1;
        for (const x of this._dependents) x(this._prismInstance);
      }
    }
    _addDependency(x) {
      this._dependencies.has(x) || (this._dependencies.add(x), x._addDependent(this._reactToDependencyGoingStale));
    }
    _removeDependency(x) {
      this._dependencies.has(x) && (this._dependencies.delete(x), x._removeDependent(this._reactToDependencyGoingStale));
    }
  }, zi = {}, $r = class {
    constructor(x) {
      this._fn = x, this.isPrism = !0, this._state = { hot: !1, handle: void 0 };
    }
    get isHot() {
      return this._state.hot;
    }
    onChange(x, C, k = !1) {
      const se = () => {
        x.onThisOrNextTick(st);
      };
      let ke = zi;
      const st = () => {
        const Vt = this.getValue();
        Vt !== ke && (ke = Vt, C(Vt));
      };
      return this._addDependent(se), k && (ke = this.getValue(), C(ke)), () => {
        this._removeDependent(se), x.offThisOrNextTick(st), x.offNextTick(st);
      };
    }
    onStale(x) {
      const C = () => x();
      return this._addDependent(C), () => {
        this._removeDependent(C);
      };
    }
    keepHot() {
      return this.onStale(() => {
      });
    }
    _addDependent(x) {
      this._state.hot || this._goHot(), this._state.handle.addDependent(x);
    }
    _goHot() {
      const x = new nn(this._fn, this);
      this._state = { hot: !0, handle: x };
    }
    _removeDependent(x) {
      const C = this._state;
      if (!C.hot) return;
      const k = C.handle;
      k.removeDependent(x), k.hasDependents || (this._state = { hot: !1, handle: void 0 }, k.destroy());
    }
    getValue() {
      _t(this);
      const x = this._state;
      let C;
      return C = x.hot ? x.handle.getValue() : function(k) {
        const se = new zt();
        let ke;
        Yt.push(se);
        try {
          ke = k();
        } catch (st) {
          console.error(st);
        } finally {
          Yt.pop() !== se && console.warn("The Prism hook stack has slipped. This is a bug.");
        }
        return ke;
      }(this._fn), it(this), C;
    }
  }, Bn = class {
    constructor(x) {
      this._hotHandle = x, this._refs = /* @__PURE__ */ new Map(), this.isPrismScope = !0, this.subs = {}, this.effects = /* @__PURE__ */ new Map(), this.memos = /* @__PURE__ */ new Map();
    }
    ref(x, C) {
      let k = this._refs.get(x);
      if (k !== void 0) return k;
      {
        const se = { current: C };
        return this._refs.set(x, se), se;
      }
    }
    effect(x, C, k) {
      let se = this.effects.get(x);
      se === void 0 && (se = { cleanup: Le, deps: void 0 }, this.effects.set(x, se)), br(se.deps, k) && (se.cleanup(), mt(), se.cleanup = Kn(C, Le).value, ot(), se.deps = k);
    }
    memo(x, C, k) {
      let se = this.memos.get(x);
      return se === void 0 && (se = { cachedValue: null, deps: void 0 }, this.memos.set(x, se)), br(se.deps, k) && (mt(), se.cachedValue = Kn(C, void 0).value, ot(), se.deps = k), se.cachedValue;
    }
    state(x, C) {
      const { value: k, setValue: se } = this.memo("state/" + x, () => {
        const ke = { current: C };
        return { value: ke, setValue: (st) => {
          ke.current = st, this._hotHandle.forceStale();
        } };
      }, []);
      return [k.current, se];
    }
    sub(x) {
      return this.subs[x] || (this.subs[x] = new Bn(this._hotHandle)), this.subs[x];
    }
    cleanupEffects() {
      for (const x of this.effects.values()) Kn(x.cleanup, void 0);
      this.effects.clear();
    }
    source(x, C) {
      return this.effect("$$source/blah", () => x(() => {
        this._hotHandle.forceStale();
      }), [x]), C();
    }
  };
  function xr(x) {
    for (const C of Object.values(x.subs)) xr(C);
    x.cleanupEffects();
  }
  function Kn(x, C) {
    try {
      return { value: x(), ok: !0 };
    } catch (k) {
      return setTimeout(function() {
        throw k;
      }), { value: C, ok: !1 };
    }
  }
  var Yt = new nt();
  function br(x, C) {
    if (x === void 0 || C === void 0) return !0;
    const k = x.length;
    if (k !== C.length) return !0;
    for (let se = 0; se < k; se++) if (x[se] !== C[se]) return !0;
    return !1;
  }
  function Ei(x, C, k) {
    const se = Yt.peek();
    if (!se) throw new Error("prism.memo() is called outside of a prism() call.");
    return se.memo(x, C, k);
  }
  var Kt = (x) => new $r(x), zt = class {
    effect(x, C, k) {
      console.warn("prism.effect() does not run in cold prisms");
    }
    memo(x, C, k) {
      return C();
    }
    state(x, C) {
      return [C, () => {
      }];
    }
    ref(x, C) {
      return { current: C };
    }
    sub(x) {
      return new zt();
    }
    source(x, C) {
      return C();
    }
  };
  Kt.ref = function(x, C) {
    const k = Yt.peek();
    if (!k) throw new Error("prism.ref() is called outside of a prism() call.");
    return k.ref(x, C);
  }, Kt.effect = function(x, C, k) {
    const se = Yt.peek();
    if (!se) throw new Error("prism.effect() is called outside of a prism() call.");
    return se.effect(x, C, k);
  }, Kt.memo = Ei, Kt.ensurePrism = function() {
    if (!Yt.peek()) throw new Error("The parent function is called outside of a prism() call.");
  }, Kt.state = function(x, C) {
    const k = Yt.peek();
    if (!k) throw new Error("prism.state() is called outside of a prism() call.");
    return k.state(x, C);
  }, Kt.scope = function(x, C) {
    const k = Yt.peek();
    if (!k) throw new Error("prism.scope() is called outside of a prism() call.");
    const se = k.sub(x);
    Yt.push(se);
    const ke = Kn(C, void 0).value;
    return Yt.pop(), ke;
  }, Kt.sub = function(x, C, k) {
    return Ei(x, () => Kt(C), k).getValue();
  }, Kt.inPrism = function() {
    return !!Yt.peek();
  }, Kt.source = function(x, C) {
    const k = Yt.peek();
    if (!k) throw new Error("prism.source() is called outside of a prism() call.");
    return k.source(x, C);
  };
  var Sr, Je, li = Kt;
  (Je = Sr || (Sr = {}))[Je.Dict = 0] = "Dict", Je[Je.Array = 1] = "Array", Je[Je.Other = 2] = "Other";
  var At = (x) => Array.isArray(x) ? 1 : R(x) ? 0 : 2, ln = (x, C, k = At(x)) => k === 0 && typeof C == "string" || k === 1 && Zn(C) ? x[C] : void 0, Zn = (x) => {
    const C = typeof x == "number" ? x : parseInt(x, 10);
    return !isNaN(C) && C >= 0 && C < 1 / 0 && (0 | C) === C;
  }, kn = class {
    constructor(x, C) {
      this._parent = x, this._path = C, this.children = /* @__PURE__ */ new Map(), this.identityChangeListeners = /* @__PURE__ */ new Set();
    }
    addIdentityChangeListener(x) {
      this.identityChangeListeners.add(x);
    }
    removeIdentityChangeListener(x) {
      this.identityChangeListeners.delete(x), this._checkForGC();
    }
    removeChild(x) {
      this.children.delete(x), this._checkForGC();
    }
    getChild(x) {
      return this.children.get(x);
    }
    getOrCreateChild(x) {
      let C = this.children.get(x);
      return C || (C = C = new kn(this, this._path.concat([x])), this.children.set(x, C)), C;
    }
    _checkForGC() {
      this.identityChangeListeners.size > 0 || this.children.size > 0 || this._parent && this._parent.removeChild(Y(this._path));
    }
  }, ut = class {
    constructor(x) {
      this.$$isPointerToPrismProvider = !0, this.pointer = He({ root: this, path: [] }), this.prism = this.pointerToPrism(this.pointer), this._onPointerValueChange = (C, k) => {
        const { path: se } = Ie(C), ke = this._getOrCreateScopeForPath(se);
        return ke.identityChangeListeners.add(k), () => {
          ke.identityChangeListeners.delete(k);
        };
      }, this._currentState = x, this._rootScope = new kn(void 0, []);
    }
    set(x) {
      const C = this._currentState;
      this._currentState = x, this._checkUpdates(this._rootScope, C, x);
    }
    get() {
      return this._currentState;
    }
    getByPointer(x) {
      const C = ze(x) ? x : x(this.pointer), k = Ie(C).path;
      return this._getIn(k);
    }
    _getIn(x) {
      return x.length === 0 ? this.get() : Fn(this.get(), x);
    }
    reduce(x) {
      this.set(x(this.get()));
    }
    reduceByPointer(x, C) {
      const k = ze(x) ? x : x(this.pointer), se = Ie(k).path, ke = function(st, Vt, Pn) {
        return Vt.length === 0 ? Pn(st) : Ve(st, Vt, Pn);
      }(this.get(), se, C);
      this.set(ke);
    }
    setByPointer(x, C) {
      this.reduceByPointer(x, () => C);
    }
    _checkUpdates(x, C, k) {
      if (C === k) return;
      for (const st of x.identityChangeListeners) st(k);
      if (x.children.size === 0) return;
      const se = At(C), ke = At(k);
      if (se !== 2 || se !== ke) for (const [st, Vt] of x.children) {
        const Pn = ln(C, st, se), Jn = ln(k, st, ke);
        this._checkUpdates(Vt, Pn, Jn);
      }
    }
    _getOrCreateScopeForPath(x) {
      let C = this._rootScope;
      for (const k of x) C = C.getOrCreateChild(k);
      return C;
    }
    pointerToPrism(x) {
      const { path: C } = Ie(x), k = (ke) => this._onPointerValueChange(x, ke), se = () => this._getIn(C);
      return li(() => li.source(k, se));
    }
  }, vt = /* @__PURE__ */ new WeakMap(), cn = (x) => {
    const C = Ce(x);
    let k = vt.get(C);
    if (!k) {
      const ke = C.root;
      if (typeof (se = ke) != "object" || se === null || se.$$isPointerToPrismProvider !== !0) throw new Error("Cannot run pointerToPrism() on a pointer whose root is not an PointerToPrismProvider");
      k = ke.pointerToPrism(x), vt.set(C, k);
    }
    var se;
    return k;
  }, wi = (x) => ze(x) ? cn(x).getValue() : pt(x) ? x.getValue() : x;
  function* dn(x) {
    let C;
    if (ze(x)) C = cn(x);
    else {
      if (!pt(x)) throw new Error("Only pointers and prisms are supported");
      C = x;
    }
    let k = 0;
    const se = C.onStale(() => {
      k++;
    });
    try {
      for (; ; ) {
        const ke = k;
        k = 0, yield { value: C.getValue(), ticks: ke };
      }
    } finally {
      se();
    }
  }
  var $t = class {
    constructor(x) {
      this._conf = x, this._ticking = !1, this._dormant = !0, this._numberOfDormantTicks = 0, this.__ticks = 0, this._scheduledForThisOrNextTick = /* @__PURE__ */ new Set(), this._scheduledForNextTick = /* @__PURE__ */ new Set(), this._timeAtCurrentTick = 0;
    }
    get dormant() {
      return this._dormant;
    }
    onThisOrNextTick(x) {
      this._scheduledForThisOrNextTick.add(x), this._dormant && this._goActive();
    }
    onNextTick(x) {
      this._scheduledForNextTick.add(x), this._dormant && this._goActive();
    }
    offThisOrNextTick(x) {
      this._scheduledForThisOrNextTick.delete(x);
    }
    offNextTick(x) {
      this._scheduledForNextTick.delete(x);
    }
    get time() {
      return this._ticking ? this._timeAtCurrentTick : performance.now();
    }
    _goActive() {
      var x, C;
      this._dormant && (this._dormant = !1, (C = (x = this._conf) == null ? void 0 : x.onActive) == null || C.call(x));
    }
    _goDormant() {
      var x, C;
      this._dormant || (this._dormant = !0, this._numberOfDormantTicks = 0, (C = (x = this._conf) == null ? void 0 : x.onDormant) == null || C.call(x));
    }
    tick(x = performance.now()) {
      if (process.env.NODE_ENV === "development" && !(this instanceof $t)) throw new Error('ticker.tick must be called while bound to the ticker. As in, "ticker.tick(time)" or "requestAnimationFrame((t) => ticker.tick(t))" for performance.');
      if (this.__ticks++, !this._dormant && this._scheduledForNextTick.size === 0 && this._scheduledForThisOrNextTick.size === 0 && (this._numberOfDormantTicks++, this._numberOfDormantTicks >= 180)) this._goDormant();
      else {
        this._ticking = !0, this._timeAtCurrentTick = x;
        for (const C of this._scheduledForNextTick) this._scheduledForThisOrNextTick.add(C);
        this._scheduledForNextTick.clear(), this._tick(0), this._ticking = !1;
      }
    }
    _tick(x) {
      const C = this.time;
      if (x > 10 && console.warn("_tick() recursing for 10 times"), x > 100) throw new Error("Maximum recursion limit for _tick()");
      const k = this._scheduledForThisOrNextTick;
      this._scheduledForThisOrNextTick = /* @__PURE__ */ new Set();
      for (const se of k) se(C);
      if (this._scheduledForThisOrNextTick.size > 0) return this._tick(x + 1);
    }
  };
  function* rn(x) {
    let C;
    if (ze(x)) C = cn(x);
    else {
      if (!pt(x)) throw new Error("Only pointers and prisms are supported");
      C = x;
    }
    const k = new $t(), se = C.onChange(k, (ke) => {
    });
    try {
      for (; ; ) k.tick(), yield C.getValue();
    } finally {
      se();
    }
  }
  var zn = class {
    constructor(x) {
      this.$$isPointerToPrismProvider = !0, this._currentPointerBox = new ut(x), this.pointer = He({ root: this, path: [] });
    }
    setPointer(x) {
      this._currentPointerBox.set(x);
    }
    pointerToPrism(x) {
      const { path: C } = Ce(x);
      return li(() => {
        const k = this._currentPointerBox.prism.getValue(), se = C.reduce((ke, st) => ke[st], k);
        return wi(se);
      });
    }
  };
})(Ft), function(i, e) {
  var t, n = Object.create, r = Object.defineProperty, o = Object.defineProperties, s = Object.getOwnPropertyDescriptor, h = Object.getOwnPropertyDescriptors, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getPrototypeOf, f = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable, v = (a, l, p) => l in a ? r(a, l, { enumerable: !0, configurable: !0, writable: !0, value: p }) : a[l] = p, y = (a, l) => {
    for (var p in l || (l = {})) f.call(l, p) && v(a, p, l[p]);
    if (u) for (var p of u(l)) m.call(l, p) && v(a, p, l[p]);
    return a;
  }, M = (a, l) => o(a, h(l)), b = (a, l) => function() {
    return l || (0, a[c(a)[0]])((l = { exports: {} }).exports, l), l.exports;
  }, _ = (a, l) => {
    for (var p in l) r(a, p, { get: l[p], enumerable: !0 });
  }, T = (a, l, p, g) => {
    if (l && typeof l == "object" || typeof l == "function") for (let S of c(l)) f.call(a, S) || S === p || r(a, S, { get: () => l[S], enumerable: !(g = s(l, S)) || g.enumerable });
    return a;
  }, w = (a, l, p) => (p = a != null ? n(d(a)) : {}, T(a && a.__esModule ? p : r(p, "default", { value: a, enumerable: !0 }), a)), E = (a, l, p) => (v(a, typeof l != "symbol" ? l + "" : l, p), p), U = b({ "../node_modules/timing-function/lib/UnitBezier.js"(a, l) {
    l.exports = function() {
      function p(g, S, P, I) {
        this.set(g, S, P, I);
      }
      return p.prototype.set = function(g, S, P, I) {
        this._cx = 3 * g, this._bx = 3 * (P - g) - this._cx, this._ax = 1 - this._cx - this._bx, this._cy = 3 * S, this._by = 3 * (I - S) - this._cy, this._ay = 1 - this._cy - this._by;
      }, p.epsilon = 1e-6, p.prototype._sampleCurveX = function(g) {
        return ((this._ax * g + this._bx) * g + this._cx) * g;
      }, p.prototype._sampleCurveY = function(g) {
        return ((this._ay * g + this._by) * g + this._cy) * g;
      }, p.prototype._sampleCurveDerivativeX = function(g) {
        return (3 * this._ax * g + 2 * this._bx) * g + this._cx;
      }, p.prototype._solveCurveX = function(g, S) {
        var P, I, z, J, ie, fe;
        for (z = void 0, J = void 0, ie = void 0, fe = void 0, P = void 0, I = void 0, ie = g, I = 0; I < 8; ) {
          if (fe = this._sampleCurveX(ie) - g, Math.abs(fe) < S) return ie;
          if (P = this._sampleCurveDerivativeX(ie), Math.abs(P) < S) break;
          ie -= fe / P, I++;
        }
        if ((ie = g) < (z = 0)) return z;
        if (ie > (J = 1)) return J;
        for (; z < J; ) {
          if (fe = this._sampleCurveX(ie), Math.abs(fe - g) < S) return ie;
          g > fe ? z = ie : J = ie, ie = 0.5 * (J - z) + z;
        }
        return ie;
      }, p.prototype.solve = function(g, S) {
        return this._sampleCurveY(this._solveCurveX(g, S));
      }, p.prototype.solveSimple = function(g) {
        return this._sampleCurveY(this._solveCurveX(g, 1e-6));
      }, p;
    }();
  } }), N = b({ "../node_modules/levenshtein-edit-distance/index.js"(a, l) {
    var p, g;
    p = [], g = [], l.exports = function(S, P, I) {
      var z, J, ie, fe, be, Me, Ae, Ge;
      if (S === P) return 0;
      if (z = S.length, J = P.length, z === 0) return J;
      if (J === 0) return z;
      for (I && (S = S.toLowerCase(), P = P.toLowerCase()), Ae = 0; Ae < z; ) g[Ae] = S.charCodeAt(Ae), p[Ae] = ++Ae;
      for (Ge = 0; Ge < J; ) for (ie = P.charCodeAt(Ge), fe = be = Ge++, Ae = -1; ++Ae < z; ) Me = ie === g[Ae] ? be : be + 1, be = p[Ae], p[Ae] = fe = be > fe ? Me > fe ? fe + 1 : Me : Me > be ? be + 1 : Me;
      return fe;
    };
  } }), O = b({ "../node_modules/propose/propose.js"(a, l) {
    var p = N();
    l.exports = function() {
      var g, S, P, I, z, J = 0, ie = arguments[0], fe = arguments[1], be = fe.length, Me = arguments[2];
      Me && (I = Me.threshold, z = Me.ignoreCase), I === void 0 && (I = 0);
      for (var Ae = 0; Ae < be; ++Ae) (g = (S = z ? p(ie, fe[Ae], !0) : p(ie, fe[Ae])) > ie.length ? 1 - S / fe[Ae].length : 1 - S / ie.length) > J && (J = g, P = fe[Ae]);
      return J >= I ? P : null;
    };
  } }), te = b({ "../node_modules/fast-deep-equal/index.js"(a, l) {
    l.exports = function p(g, S) {
      if (g === S) return !0;
      if (g && S && typeof g == "object" && typeof S == "object") {
        if (g.constructor !== S.constructor) return !1;
        var P, I, z;
        if (Array.isArray(g)) {
          if ((P = g.length) != S.length) return !1;
          for (I = P; I-- != 0; ) if (!p(g[I], S[I])) return !1;
          return !0;
        }
        if (g.constructor === RegExp) return g.source === S.source && g.flags === S.flags;
        if (g.valueOf !== Object.prototype.valueOf) return g.valueOf() === S.valueOf();
        if (g.toString !== Object.prototype.toString) return g.toString() === S.toString();
        if ((P = (z = Object.keys(g)).length) !== Object.keys(S).length) return !1;
        for (I = P; I-- != 0; ) if (!Object.prototype.hasOwnProperty.call(S, z[I])) return !1;
        for (I = P; I-- != 0; ) {
          var J = z[I];
          if (!p(g[J], S[J])) return !1;
        }
        return !0;
      }
      return g != g && S != S;
    };
  } }), G = {};
  _(G, { createRafDriver: () => as, getProject: () => Mh, notify: () => ui, onChange: () => Ps, types: () => ss, val: () => wh }), i.exports = (t = G, T(r({}, "__esModule", { value: !0 }), t));
  var Z = {};
  _(Z, { createRafDriver: () => as, getProject: () => Mh, notify: () => ui, onChange: () => Ps, types: () => ss, val: () => wh });
  var re = Ft, F = new class {
    constructor() {
      E(this, "atom", new re.Atom({ projects: {} }));
    }
    add(a, l) {
      this.atom.setByPointer((p) => p.projects[a], l);
    }
    get(a) {
      return this.atom.get().projects[a];
    }
    has(a) {
      return !!this.get(a);
    }
  }(), V = /* @__PURE__ */ new WeakMap();
  function B(a) {
    return V.get(a);
  }
  function ae(a, l) {
    V.set(a, l);
  }
  var ce = [], ue = Array.isArray, ge = typeof $n == "object" && $n && $n.Object === Object && $n, Ee = typeof self == "object" && self && self.Object === Object && self, xe = ge || Ee || Function("return this")(), le = xe.Symbol, de = Object.prototype, Se = de.hasOwnProperty, Te = de.toString, L = le ? le.toStringTag : void 0, A = function(a) {
    var l = Se.call(a, L), p = a[L];
    try {
      a[L] = void 0;
      var g = !0;
    } catch {
    }
    var S = Te.call(a);
    return g && (l ? a[L] = p : delete a[L]), S;
  }, j = Object.prototype.toString, Q = function(a) {
    return j.call(a);
  }, W = le ? le.toStringTag : void 0, q = function(a) {
    return a == null ? a === void 0 ? "[object Undefined]" : "[object Null]" : W && W in Object(a) ? A(a) : Q(a);
  }, D = function(a) {
    return a != null && typeof a == "object";
  }, K = function(a) {
    return typeof a == "symbol" || D(a) && q(a) == "[object Symbol]";
  }, $ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _e = /^\w*$/, ne = function(a, l) {
    if (ue(a)) return !1;
    var p = typeof a;
    return !(p != "number" && p != "symbol" && p != "boolean" && a != null && !K(a)) || _e.test(a) || !$.test(a) || l != null && a in Object(l);
  }, pe = function(a) {
    var l = typeof a;
    return a != null && (l == "object" || l == "function");
  }, ye, me = function(a) {
    if (!pe(a)) return !1;
    var l = q(a);
    return l == "[object Function]" || l == "[object GeneratorFunction]" || l == "[object AsyncFunction]" || l == "[object Proxy]";
  }, Re = xe["__core-js_shared__"], Pe = (ye = /[^.]+$/.exec(Re && Re.keys && Re.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ye : "", Ne = function(a) {
    return !!Pe && Pe in a;
  }, je = Function.prototype.toString, Xe = function(a) {
    if (a != null) {
      try {
        return je.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }, $e = /^\[object .+?Constructor\]$/, Ue = Function.prototype, Ye = Object.prototype, at = Ue.toString, ht = Ye.hasOwnProperty, De = RegExp("^" + at.call(ht).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ke = function(a) {
    return !(!pe(a) || Ne(a)) && (me(a) ? De : $e).test(Xe(a));
  }, tt = function(a, l) {
    return a == null ? void 0 : a[l];
  }, Bt = function(a, l) {
    var p = tt(a, l);
    return Ke(p) ? p : void 0;
  }, kt = Bt(Object, "create"), Rt = function() {
    this.__data__ = kt ? kt(null) : {}, this.size = 0;
  }, qt = function(a) {
    var l = this.has(a) && delete this.__data__[a];
    return this.size -= l ? 1 : 0, l;
  }, It = Object.prototype.hasOwnProperty, H = function(a) {
    var l = this.__data__;
    if (kt) {
      var p = l[a];
      return p === "__lodash_hash_undefined__" ? void 0 : p;
    }
    return It.call(l, a) ? l[a] : void 0;
  }, vn = Object.prototype.hasOwnProperty, ii = function(a) {
    var l = this.__data__;
    return kt ? l[a] !== void 0 : vn.call(l, a);
  }, Ct = function(a, l) {
    var p = this.__data__;
    return this.size += this.has(a) ? 0 : 1, p[a] = kt && l === void 0 ? "__lodash_hash_undefined__" : l, this;
  };
  function Nn(a) {
    var l = -1, p = a == null ? 0 : a.length;
    for (this.clear(); ++l < p; ) {
      var g = a[l];
      this.set(g[0], g[1]);
    }
  }
  Nn.prototype.clear = Rt, Nn.prototype.delete = qt, Nn.prototype.get = H, Nn.prototype.has = ii, Nn.prototype.set = Ct;
  var Fi = Nn, mr = function() {
    this.__data__ = [], this.size = 0;
  }, ri = function(a, l) {
    return a === l || a != a && l != l;
  }, Yn = function(a, l) {
    for (var p = a.length; p--; ) if (ri(a[p][0], l)) return p;
    return -1;
  }, Bi = Array.prototype.splice, gr = function(a) {
    var l = this.__data__, p = Yn(l, a);
    return !(p < 0) && (p == l.length - 1 ? l.pop() : Bi.call(l, p, 1), --this.size, !0);
  }, _r = function(a) {
    var l = this.__data__, p = Yn(l, a);
    return p < 0 ? void 0 : l[p][1];
  }, On = function(a) {
    return Yn(this.__data__, a) > -1;
  }, ki = function(a, l) {
    var p = this.__data__, g = Yn(p, a);
    return g < 0 ? (++this.size, p.push([a, l])) : p[g][1] = l, this;
  };
  function Fn(a) {
    var l = -1, p = a == null ? 0 : a.length;
    for (this.clear(); ++l < p; ) {
      var g = a[l];
      this.set(g[0], g[1]);
    }
  }
  Fn.prototype.clear = mr, Fn.prototype.delete = gr, Fn.prototype.get = _r, Fn.prototype.has = On, Fn.prototype.set = ki;
  var ai = Fn, An = Bt(xe, "Map"), vr = function() {
    this.size = 0, this.__data__ = { hash: new Fi(), map: new (An || ai)(), string: new Fi() };
  }, oi = function(a) {
    var l = typeof a;
    return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? a !== "__proto__" : a === null;
  }, si = function(a, l) {
    var p = a.__data__;
    return oi(l) ? p[typeof l == "string" ? "string" : "hash"] : p.map;
  }, yr = function(a) {
    var l = si(this, a).delete(a);
    return this.size -= l ? 1 : 0, l;
  }, R = function(a) {
    return si(this, a).get(a);
  }, Y = function(a) {
    return si(this, a).has(a);
  }, oe = function(a, l) {
    var p = si(this, a), g = p.size;
    return p.set(a, l), this.size += p.size == g ? 0 : 1, this;
  };
  function he(a) {
    var l = -1, p = a == null ? 0 : a.length;
    for (this.clear(); ++l < p; ) {
      var g = a[l];
      this.set(g[0], g[1]);
    }
  }
  he.prototype.clear = vr, he.prototype.delete = yr, he.prototype.get = R, he.prototype.has = Y, he.prototype.set = oe;
  var ee = he;
  function ve(a, l) {
    if (typeof a != "function" || l != null && typeof l != "function") throw new TypeError("Expected a function");
    var p = function() {
      var g = arguments, S = l ? l.apply(this, g) : g[0], P = p.cache;
      if (P.has(S)) return P.get(S);
      var I = a.apply(this, g);
      return p.cache = P.set(S, I) || P, I;
    };
    return p.cache = new (ve.Cache || ee)(), p;
  }
  ve.Cache = ee;
  var Ce = ve, Ie = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Be = /\\(\\)?/g, He = function(a) {
    var l = Ce(a, function(g) {
      return p.size === 500 && p.clear(), g;
    }), p = l.cache;
    return l;
  }(function(a) {
    var l = [];
    return a.charCodeAt(0) === 46 && l.push(""), a.replace(Ie, function(p, g, S, P) {
      l.push(S ? P.replace(Be, "$1") : g || p);
    }), l;
  }), ze = function(a, l) {
    for (var p = -1, g = a == null ? 0 : a.length, S = Array(g); ++p < g; ) S[p] = l(a[p], p, a);
    return S;
  }, Ve = le ? le.prototype : void 0, nt = Ve ? Ve.toString : void 0, pt = function a(l) {
    if (typeof l == "string") return l;
    if (ue(l)) return ze(l, a) + "";
    if (K(l)) return nt ? nt.call(l) : "";
    var p = l + "";
    return p == "0" && 1 / l == -1 / 0 ? "-0" : p;
  }, ft = function(a) {
    return a == null ? "" : pt(a);
  }, mt = function(a, l) {
    return ue(a) ? a : ne(a, l) ? [a] : He(ft(a));
  }, ot = function(a) {
    if (typeof a == "string" || K(a)) return a;
    var l = a + "";
    return l == "0" && 1 / a == -1 / 0 ? "-0" : l;
  }, it = function(a, l) {
    for (var p = 0, g = (l = mt(l, a)).length; a != null && p < g; ) a = a[ot(l[p++])];
    return p && p == g ? a : void 0;
  }, _t = function(a, l, p) {
    var g = a == null ? void 0 : it(a, l);
    return g === void 0 ? p : g;
  };
  function Dt(a, l) {
    return l.length === 0 ? a : _t(a, l);
  }
  var Ze = class {
    constructor() {
      E(this, "_values", {});
    }
    get(a, l) {
      if (this.has(a)) return this._values[a];
      {
        const p = l();
        return this._values[a] = p, p;
      }
    }
    has(a) {
      return this._values.hasOwnProperty(a);
    }
  }, Le = Ft, nn = function() {
    try {
      var a = Bt(Object, "defineProperty");
      return a({}, "", {}), a;
    } catch {
    }
  }(), zi = function(a, l, p) {
    l == "__proto__" && nn ? nn(a, l, { configurable: !0, enumerable: !0, value: p, writable: !0 }) : a[l] = p;
  }, $r = Object.prototype.hasOwnProperty, Bn = function(a, l, p) {
    var g = a[l];
    $r.call(a, l) && ri(g, p) && (p !== void 0 || l in a) || zi(a, l, p);
  }, xr = /^(?:0|[1-9]\d*)$/, Kn = function(a, l) {
    var p = typeof a;
    return !!(l = l ?? 9007199254740991) && (p == "number" || p != "symbol" && xr.test(a)) && a > -1 && a % 1 == 0 && a < l;
  }, Yt = function(a, l, p, g) {
    if (!pe(a)) return a;
    for (var S = -1, P = (l = mt(l, a)).length, I = P - 1, z = a; z != null && ++S < P; ) {
      var J = ot(l[S]), ie = p;
      if (J === "__proto__" || J === "constructor" || J === "prototype") return a;
      if (S != I) {
        var fe = z[J];
        (ie = g ? g(fe, J, z) : void 0) === void 0 && (ie = pe(fe) ? fe : Kn(l[S + 1]) ? [] : {});
      }
      Bn(z, J, ie), z = z[J];
    }
    return a;
  }, br = function(a, l, p) {
    return a == null ? a : Yt(a, l, p);
  }, Ei = /* @__PURE__ */ new WeakMap();
  function Kt(a) {
    if (Ei.has(a)) return Ei.get(a);
    const l = a.type === "compound" ? function(p) {
      const g = {};
      for (const [S, P] of Object.entries(p.props)) g[S] = Kt(P);
      return g;
    }(a) : a.type === "enum" ? function(p) {
      const g = { $case: p.defaultCase };
      for (const [S, P] of Object.entries(p.cases)) g[S] = Kt(P);
      return g;
    }(a) : a.default;
    return Ei.set(a, l), l;
  }
  var zt = Ft, Sr = w(U());
  function Je(a, l, p) {
    return (0, zt.prism)(() => {
      const g = (0, zt.val)(l);
      return zt.prism.memo("driver", () => g ? g.type === "BasicKeyframedTrack" ? function(P, I, z) {
        return (0, zt.prism)(() => {
          let J = zt.prism.ref("state", { started: !1 }), ie = J.current;
          const fe = z.getValue();
          return (!ie.started || fe < ie.validFrom || ie.validTo <= fe) && (J.current = ie = function(be, Me, Ae) {
            const Ge = Me.getValue();
            if (Ae.keyframes.length === 0) return { started: !0, validFrom: -1 / 0, validTo: 1 / 0, der: li };
            let Oe = 0;
            for (; ; ) {
              const Fe = Ae.keyframes[Oe];
              if (!Fe) return process.env.NODE_ENV !== "production" && be.logger.error("Bug here"), At.error;
              const Qe = Oe === Ae.keyframes.length - 1;
              if (Ge < Fe.position) return Oe === 0 ? At.beforeFirstKeyframe(Fe) : (process.env.NODE_ENV !== "production" && be.logger.error("Bug here"), At.error);
              if (Fe.position === Ge) return Qe ? At.lastKeyframe(Fe) : At.between(Fe, Ae.keyframes[Oe + 1], Me);
              if (Oe === Ae.keyframes.length - 1) return At.lastKeyframe(Fe);
              {
                const qe = Oe + 1;
                if (Ae.keyframes[qe].position <= Ge) {
                  Oe = qe;
                  continue;
                }
                return At.between(Fe, Ae.keyframes[Oe + 1], Me);
              }
            }
          }(P, z, I)), ie.der.getValue();
        });
      }(a, g, p) : (a.logger.error("Track type not yet supported."), (0, zt.prism)(() => {
      })) : (0, zt.prism)(() => {
      }), [g]).getValue();
    });
  }
  var li = (0, zt.prism)(() => {
  }), At = { beforeFirstKeyframe: (a) => ({ started: !0, validFrom: -1 / 0, validTo: a.position, der: (0, zt.prism)(() => ({ left: a.value, progression: 0 })) }), lastKeyframe: (a) => ({ started: !0, validFrom: a.position, validTo: 1 / 0, der: (0, zt.prism)(() => ({ left: a.value, progression: 0 })) }), between(a, l, p) {
    if (!a.connectedRight) return { started: !0, validFrom: a.position, validTo: l.position, der: (0, zt.prism)(() => ({ left: a.value, progression: 0 })) };
    const g = (P) => (P - a.position) / (l.position - a.position);
    if (!a.type || a.type === "bezier") {
      const P = new Sr.default(a.handles[2], a.handles[3], l.handles[0], l.handles[1]), I = (0, zt.prism)(() => {
        const z = g(p.getValue()), J = P.solveSimple(z);
        return { left: a.value, right: l.value, progression: J };
      });
      return { started: !0, validFrom: a.position, validTo: l.position, der: I };
    }
    const S = (0, zt.prism)(() => {
      const P = g(p.getValue()), I = Math.floor(P);
      return { left: a.value, right: l.value, progression: I };
    });
    return { started: !0, validFrom: a.position, validTo: l.position, der: S };
  }, error: { started: !0, validFrom: -1 / 0, validTo: 1 / 0, der: li } };
  function ln(a, l, p) {
    const g = p.get(a);
    if (g && g.override === l) return g.merged;
    const S = y({}, a);
    for (const P of Object.keys(l)) {
      const I = l[P], z = a[P];
      S[P] = typeof I == "object" && typeof z == "object" ? ln(z, I, p) : I === void 0 ? z : I;
    }
    return p.set(a, { override: l, merged: S }), S;
  }
  function Zn(a, l) {
    let p = a;
    for (const g of l) p = p[g];
    return p;
  }
  var kn = Ft, ut = Ft, vt = Ft, cn = /\s/, wi = function(a) {
    for (var l = a.length; l-- && cn.test(a.charAt(l)); ) ;
    return l;
  }, dn = /^\s+/, $t = function(a) {
    return a && a.slice(0, wi(a) + 1).replace(dn, "");
  }, rn = /^[-+]0x[0-9a-f]+$/i, zn = /^0b[01]+$/i, x = /^0o[0-7]+$/i, C = parseInt, k = function(a) {
    if (typeof a == "number") return a;
    if (K(a)) return NaN;
    if (pe(a)) {
      var l = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = pe(l) ? l + "" : l;
    }
    if (typeof a != "string") return a === 0 ? a : +a;
    a = $t(a);
    var p = zn.test(a);
    return p || x.test(a) ? C(a.slice(2), p ? 2 : 8) : rn.test(a) ? NaN : +a;
  }, se = 1 / 0, ke = function(a) {
    return a ? (a = k(a)) === se || a === -1 / 0 ? 17976931348623157e292 * (a < 0 ? -1 : 1) : a == a ? a : 0 : a === 0 ? a : 0;
  }, st = function(a) {
    var l = ke(a), p = l % 1;
    return l == l ? p ? l - p : l : 0;
  }, Vt = function(a) {
    return a;
  }, Pn = Bt(xe, "WeakMap"), Jn = Object.create, Vn = /* @__PURE__ */ function() {
    function a() {
    }
    return function(l) {
      if (!pe(l)) return {};
      if (Jn) return Jn(l);
      a.prototype = l;
      var p = new a();
      return a.prototype = void 0, p;
    };
  }(), ci = function(a, l) {
    var p = -1, g = a.length;
    for (l || (l = Array(g)); ++p < g; ) l[p] = a[p];
    return l;
  }, fd = function(a, l) {
    for (var p = -1, g = a == null ? 0 : a.length; ++p < g && l(a[p], p, a) !== !1; ) ;
    return a;
  }, wa = function(a, l, p, g) {
    var S = !p;
    p || (p = {});
    for (var P = -1, I = l.length; ++P < I; ) {
      var z = l[P], J = g ? g(p[z], a[z], z, p, a) : void 0;
      J === void 0 && (J = a[z]), S ? zi(p, z, J) : Bn(p, z, J);
    }
    return p;
  }, Fo = function(a) {
    return typeof a == "number" && a > -1 && a % 1 == 0 && a <= 9007199254740991;
  }, Nl = function(a) {
    return a != null && Fo(a.length) && !me(a);
  }, md = Object.prototype, Bo = function(a) {
    var l = a && a.constructor;
    return a === (typeof l == "function" && l.prototype || md);
  }, gd = function(a, l) {
    for (var p = -1, g = Array(a); ++p < a; ) g[p] = l(p);
    return g;
  }, Ol = function(a) {
    return D(a) && q(a) == "[object Arguments]";
  }, Fl = Object.prototype, _d = Fl.hasOwnProperty, vd = Fl.propertyIsEnumerable, yd = Ol(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Ol : function(a) {
    return D(a) && _d.call(a, "callee") && !vd.call(a, "callee");
  }, Bl = yd, xd = function() {
    return !1;
  }, kl = e && !e.nodeType && e, zl = kl && i && !i.nodeType && i, Vl = zl && zl.exports === kl ? xe.Buffer : void 0, Ta = (Vl ? Vl.isBuffer : void 0) || xd, Et = {};
  Et["[object Float32Array]"] = Et["[object Float64Array]"] = Et["[object Int8Array]"] = Et["[object Int16Array]"] = Et["[object Int32Array]"] = Et["[object Uint8Array]"] = Et["[object Uint8ClampedArray]"] = Et["[object Uint16Array]"] = Et["[object Uint32Array]"] = !0, Et["[object Arguments]"] = Et["[object Array]"] = Et["[object ArrayBuffer]"] = Et["[object Boolean]"] = Et["[object DataView]"] = Et["[object Date]"] = Et["[object Error]"] = Et["[object Function]"] = Et["[object Map]"] = Et["[object Number]"] = Et["[object Object]"] = Et["[object RegExp]"] = Et["[object Set]"] = Et["[object String]"] = Et["[object WeakMap]"] = !1;
  var bd = function(a) {
    return D(a) && Fo(a.length) && !!Et[q(a)];
  }, ko = function(a) {
    return function(l) {
      return a(l);
    };
  }, Hl = e && !e.nodeType && e, Qr = Hl && i && !i.nodeType && i, zo = Qr && Qr.exports === Hl && ge.process, Mr = function() {
    try {
      var a = Qr && Qr.require && Qr.require("util").types;
      return a || zo && zo.binding && zo.binding("util");
    } catch {
    }
  }(), jl = Mr && Mr.isTypedArray, Gl = jl ? ko(jl) : bd, Sd = Object.prototype.hasOwnProperty, Wl = function(a, l) {
    var p = ue(a), g = !p && Bl(a), S = !p && !g && Ta(a), P = !p && !g && !S && Gl(a), I = p || g || S || P, z = I ? gd(a.length, String) : [], J = z.length;
    for (var ie in a) !l && !Sd.call(a, ie) || I && (ie == "length" || S && (ie == "offset" || ie == "parent") || P && (ie == "buffer" || ie == "byteLength" || ie == "byteOffset") || Kn(ie, J)) || z.push(ie);
    return z;
  }, Xl = function(a, l) {
    return function(p) {
      return a(l(p));
    };
  }, Md = Xl(Object.keys, Object), Ed = Object.prototype.hasOwnProperty, wd = function(a) {
    if (!Bo(a)) return Md(a);
    var l = [];
    for (var p in Object(a)) Ed.call(a, p) && p != "constructor" && l.push(p);
    return l;
  }, ea = function(a) {
    return Nl(a) ? Wl(a) : wd(a);
  }, Td = function(a) {
    var l = [];
    if (a != null) for (var p in Object(a)) l.push(p);
    return l;
  }, Ad = Object.prototype.hasOwnProperty, Pd = function(a) {
    if (!pe(a)) return Td(a);
    var l = Bo(a), p = [];
    for (var g in a) (g != "constructor" || !l && Ad.call(a, g)) && p.push(g);
    return p;
  }, Vo = function(a) {
    return Nl(a) ? Wl(a, !0) : Pd(a);
  }, ql = function(a, l) {
    for (var p = -1, g = l.length, S = a.length; ++p < g; ) a[S + p] = l[p];
    return a;
  }, Ho = Xl(Object.getPrototypeOf, Object), Rd = Function.prototype, Cd = Object.prototype, Yl = Rd.toString, Dd = Cd.hasOwnProperty, Id = Yl.call(Object), Ld = function(a) {
    if (!D(a) || q(a) != "[object Object]") return !1;
    var l = Ho(a);
    if (l === null) return !0;
    var p = Dd.call(l, "constructor") && l.constructor;
    return typeof p == "function" && p instanceof p && Yl.call(p) == Id;
  }, Kl = function(a, l, p) {
    var g = -1, S = a.length;
    l < 0 && (l = -l > S ? 0 : S + l), (p = p > S ? S : p) < 0 && (p += S), S = l > p ? 0 : p - l >>> 0, l >>>= 0;
    for (var P = Array(S); ++g < S; ) P[g] = a[g + l];
    return P;
  }, Ud = function(a, l, p) {
    var g = a.length;
    return p = p === void 0 ? g : p, !l && p >= g ? a : Kl(a, l, p);
  }, Nd = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), jo = function(a) {
    return Nd.test(a);
  }, Od = function(a) {
    return a.split("");
  }, Zl = "\\ud800-\\udfff", Fd = "[" + Zl + "]", Go = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", Wo = "\\ud83c[\\udffb-\\udfff]", Jl = "[^" + Zl + "]", $l = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ql = "[\\ud800-\\udbff][\\udc00-\\udfff]", ec = "(?:" + Go + "|" + Wo + ")?", tc = "[\\ufe0e\\ufe0f]?", Bd = tc + ec + ("(?:\\u200d(?:" + [Jl, $l, Ql].join("|") + ")" + tc + ec + ")*"), kd = "(?:" + [Jl + Go + "?", Go, $l, Ql, Fd].join("|") + ")", zd = RegExp(Wo + "(?=" + Wo + ")|" + kd + Bd, "g"), Vd = function(a) {
    return a.match(zd) || [];
  }, Hd = function(a) {
    return jo(a) ? Vd(a) : Od(a);
  }, jd = function(a, l, p) {
    return a == a && (p !== void 0 && (a = a <= p ? a : p), l !== void 0 && (a = a >= l ? a : l)), a;
  }, nc = function(a, l, p) {
    return p === void 0 && (p = l, l = void 0), p !== void 0 && (p = (p = k(p)) == p ? p : 0), l !== void 0 && (l = (l = k(l)) == l ? l : 0), jd(k(a), l, p);
  }, Gd = function() {
    this.__data__ = new ai(), this.size = 0;
  }, Wd = function(a) {
    var l = this.__data__, p = l.delete(a);
    return this.size = l.size, p;
  }, Xd = function(a) {
    return this.__data__.get(a);
  }, qd = function(a) {
    return this.__data__.has(a);
  }, Yd = function(a, l) {
    var p = this.__data__;
    if (p instanceof ai) {
      var g = p.__data__;
      if (!An || g.length < 199) return g.push([a, l]), this.size = ++p.size, this;
      p = this.__data__ = new ee(g);
    }
    return p.set(a, l), this.size = p.size, this;
  };
  function Er(a) {
    var l = this.__data__ = new ai(a);
    this.size = l.size;
  }
  Er.prototype.clear = Gd, Er.prototype.delete = Wd, Er.prototype.get = Xd, Er.prototype.has = qd, Er.prototype.set = Yd;
  var ta = Er, Kd = function(a, l) {
    return a && wa(l, ea(l), a);
  }, Zd = function(a, l) {
    return a && wa(l, Vo(l), a);
  }, ic = e && !e.nodeType && e, rc = ic && i && !i.nodeType && i, ac = rc && rc.exports === ic ? xe.Buffer : void 0, oc = ac ? ac.allocUnsafe : void 0, Jd = function(a, l) {
    if (l) return a.slice();
    var p = a.length, g = oc ? oc(p) : new a.constructor(p);
    return a.copy(g), g;
  }, $d = function(a, l) {
    for (var p = -1, g = a == null ? 0 : a.length, S = 0, P = []; ++p < g; ) {
      var I = a[p];
      l(I, p, a) && (P[S++] = I);
    }
    return P;
  }, sc = function() {
    return [];
  }, Qd = Object.prototype.propertyIsEnumerable, lc = Object.getOwnPropertySymbols, Xo = lc ? function(a) {
    return a == null ? [] : (a = Object(a), $d(lc(a), function(l) {
      return Qd.call(a, l);
    }));
  } : sc, ep = function(a, l) {
    return wa(a, Xo(a), l);
  }, cc = Object.getOwnPropertySymbols ? function(a) {
    for (var l = []; a; ) ql(l, Xo(a)), a = Ho(a);
    return l;
  } : sc, tp = function(a, l) {
    return wa(a, cc(a), l);
  }, hc = function(a, l, p) {
    var g = l(a);
    return ue(a) ? g : ql(g, p(a));
  }, qo = function(a) {
    return hc(a, ea, Xo);
  }, np = function(a) {
    return hc(a, Vo, cc);
  }, Yo = Bt(xe, "DataView"), Ko = Bt(xe, "Promise"), Zo = Bt(xe, "Set"), uc = "[object Map]", dc = "[object Promise]", pc = "[object Set]", fc = "[object WeakMap]", mc = "[object DataView]", ip = Xe(Yo), rp = Xe(An), ap = Xe(Ko), op = Xe(Zo), sp = Xe(Pn), Vi = q;
  (Yo && Vi(new Yo(new ArrayBuffer(1))) != mc || An && Vi(new An()) != uc || Ko && Vi(Ko.resolve()) != dc || Zo && Vi(new Zo()) != pc || Pn && Vi(new Pn()) != fc) && (Vi = function(a) {
    var l = q(a), p = l == "[object Object]" ? a.constructor : void 0, g = p ? Xe(p) : "";
    if (g) switch (g) {
      case ip:
        return mc;
      case rp:
        return uc;
      case ap:
        return dc;
      case op:
        return pc;
      case sp:
        return fc;
    }
    return l;
  });
  var na = Vi, lp = Object.prototype.hasOwnProperty, cp = function(a) {
    var l = a.length, p = new a.constructor(l);
    return l && typeof a[0] == "string" && lp.call(a, "index") && (p.index = a.index, p.input = a.input), p;
  }, Aa = xe.Uint8Array, Jo = function(a) {
    var l = new a.constructor(a.byteLength);
    return new Aa(l).set(new Aa(a)), l;
  }, hp = function(a, l) {
    var p = l ? Jo(a.buffer) : a.buffer;
    return new a.constructor(p, a.byteOffset, a.byteLength);
  }, up = /\w*$/, dp = function(a) {
    var l = new a.constructor(a.source, up.exec(a));
    return l.lastIndex = a.lastIndex, l;
  }, gc = le ? le.prototype : void 0, _c = gc ? gc.valueOf : void 0, pp = function(a) {
    return _c ? Object(_c.call(a)) : {};
  }, fp = function(a, l) {
    var p = l ? Jo(a.buffer) : a.buffer;
    return new a.constructor(p, a.byteOffset, a.length);
  }, mp = function(a, l, p) {
    var g = a.constructor;
    switch (l) {
      case "[object ArrayBuffer]":
        return Jo(a);
      case "[object Boolean]":
      case "[object Date]":
        return new g(+a);
      case "[object DataView]":
        return hp(a, p);
      case "[object Float32Array]":
      case "[object Float64Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object Int32Array]":
      case "[object Uint8Array]":
      case "[object Uint8ClampedArray]":
      case "[object Uint16Array]":
      case "[object Uint32Array]":
        return fp(a, p);
      case "[object Map]":
      case "[object Set]":
        return new g();
      case "[object Number]":
      case "[object String]":
        return new g(a);
      case "[object RegExp]":
        return dp(a);
      case "[object Symbol]":
        return pp(a);
    }
  }, gp = function(a) {
    return typeof a.constructor != "function" || Bo(a) ? {} : Vn(Ho(a));
  }, _p = function(a) {
    return D(a) && na(a) == "[object Map]";
  }, vc = Mr && Mr.isMap, vp = vc ? ko(vc) : _p, yp = function(a) {
    return D(a) && na(a) == "[object Set]";
  }, yc = Mr && Mr.isSet, xp = yc ? ko(yc) : yp, xc = "[object Arguments]", bc = "[object Function]", Sc = "[object Object]", yt = {};
  yt[xc] = yt["[object Array]"] = yt["[object ArrayBuffer]"] = yt["[object DataView]"] = yt["[object Boolean]"] = yt["[object Date]"] = yt["[object Float32Array]"] = yt["[object Float64Array]"] = yt["[object Int8Array]"] = yt["[object Int16Array]"] = yt["[object Int32Array]"] = yt["[object Map]"] = yt["[object Number]"] = yt[Sc] = yt["[object RegExp]"] = yt["[object Set]"] = yt["[object String]"] = yt["[object Symbol]"] = yt["[object Uint8Array]"] = yt["[object Uint8ClampedArray]"] = yt["[object Uint16Array]"] = yt["[object Uint32Array]"] = !0, yt["[object Error]"] = yt[bc] = yt["[object WeakMap]"] = !1;
  var bp = function a(l, p, g, S, P, I) {
    var z, J = 1 & p, ie = 2 & p, fe = 4 & p;
    if (g && (z = P ? g(l, S, P, I) : g(l)), z !== void 0) return z;
    if (!pe(l)) return l;
    var be = ue(l);
    if (be) {
      if (z = cp(l), !J) return ci(l, z);
    } else {
      var Me = na(l), Ae = Me == bc || Me == "[object GeneratorFunction]";
      if (Ta(l)) return Jd(l, J);
      if (Me == Sc || Me == xc || Ae && !P) {
        if (z = ie || Ae ? {} : gp(l), !J) return ie ? tp(l, Zd(z, l)) : ep(l, Kd(z, l));
      } else {
        if (!yt[Me]) return P ? l : {};
        z = mp(l, Me, J);
      }
    }
    I || (I = new ta());
    var Ge = I.get(l);
    if (Ge) return Ge;
    I.set(l, z), xp(l) ? l.forEach(function(Fe) {
      z.add(a(Fe, p, g, Fe, l, I));
    }) : vp(l) && l.forEach(function(Fe, Qe) {
      z.set(Qe, a(Fe, p, g, Qe, l, I));
    });
    var Oe = be ? void 0 : (fe ? ie ? np : qo : ie ? Vo : ea)(l);
    return fd(Oe || l, function(Fe, Qe) {
      Oe && (Fe = l[Qe = Fe]), Bn(z, Qe, a(Fe, p, g, Qe, l, I));
    }), z;
  }, Sp = function(a) {
    return bp(a, 5);
  }, Mp = function(a) {
    return this.__data__.set(a, "__lodash_hash_undefined__"), this;
  }, Ep = function(a) {
    return this.__data__.has(a);
  };
  function Pa(a) {
    var l = -1, p = a == null ? 0 : a.length;
    for (this.__data__ = new ee(); ++l < p; ) this.add(a[l]);
  }
  Pa.prototype.add = Pa.prototype.push = Mp, Pa.prototype.has = Ep;
  var wp = Pa, Tp = function(a, l) {
    for (var p = -1, g = a == null ? 0 : a.length; ++p < g; ) if (l(a[p], p, a)) return !0;
    return !1;
  }, Ap = function(a, l) {
    return a.has(l);
  }, Mc = function(a, l, p, g, S, P) {
    var I = 1 & p, z = a.length, J = l.length;
    if (z != J && !(I && J > z)) return !1;
    var ie = P.get(a), fe = P.get(l);
    if (ie && fe) return ie == l && fe == a;
    var be = -1, Me = !0, Ae = 2 & p ? new wp() : void 0;
    for (P.set(a, l), P.set(l, a); ++be < z; ) {
      var Ge = a[be], Oe = l[be];
      if (g) var Fe = I ? g(Oe, Ge, be, l, a, P) : g(Ge, Oe, be, a, l, P);
      if (Fe !== void 0) {
        if (Fe) continue;
        Me = !1;
        break;
      }
      if (Ae) {
        if (!Tp(l, function(Qe, qe) {
          if (!Ap(Ae, qe) && (Ge === Qe || S(Ge, Qe, p, g, P))) return Ae.push(qe);
        })) {
          Me = !1;
          break;
        }
      } else if (Ge !== Oe && !S(Ge, Oe, p, g, P)) {
        Me = !1;
        break;
      }
    }
    return P.delete(a), P.delete(l), Me;
  }, Pp = function(a) {
    var l = -1, p = Array(a.size);
    return a.forEach(function(g, S) {
      p[++l] = [S, g];
    }), p;
  }, Rp = function(a) {
    var l = -1, p = Array(a.size);
    return a.forEach(function(g) {
      p[++l] = g;
    }), p;
  }, Ec = le ? le.prototype : void 0, $o = Ec ? Ec.valueOf : void 0, Cp = function(a, l, p, g, S, P, I) {
    switch (p) {
      case "[object DataView]":
        if (a.byteLength != l.byteLength || a.byteOffset != l.byteOffset) return !1;
        a = a.buffer, l = l.buffer;
      case "[object ArrayBuffer]":
        return !(a.byteLength != l.byteLength || !P(new Aa(a), new Aa(l)));
      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return ri(+a, +l);
      case "[object Error]":
        return a.name == l.name && a.message == l.message;
      case "[object RegExp]":
      case "[object String]":
        return a == l + "";
      case "[object Map]":
        var z = Pp;
      case "[object Set]":
        var J = 1 & g;
        if (z || (z = Rp), a.size != l.size && !J) return !1;
        var ie = I.get(a);
        if (ie) return ie == l;
        g |= 2, I.set(a, l);
        var fe = Mc(z(a), z(l), g, S, P, I);
        return I.delete(a), fe;
      case "[object Symbol]":
        if ($o) return $o.call(a) == $o.call(l);
    }
    return !1;
  }, Dp = Object.prototype.hasOwnProperty, Ip = function(a, l, p, g, S, P) {
    var I = 1 & p, z = qo(a), J = z.length;
    if (J != qo(l).length && !I) return !1;
    for (var ie = J; ie--; ) {
      var fe = z[ie];
      if (!(I ? fe in l : Dp.call(l, fe))) return !1;
    }
    var be = P.get(a), Me = P.get(l);
    if (be && Me) return be == l && Me == a;
    var Ae = !0;
    P.set(a, l), P.set(l, a);
    for (var Ge = I; ++ie < J; ) {
      var Oe = a[fe = z[ie]], Fe = l[fe];
      if (g) var Qe = I ? g(Fe, Oe, fe, l, a, P) : g(Oe, Fe, fe, a, l, P);
      if (!(Qe === void 0 ? Oe === Fe || S(Oe, Fe, p, g, P) : Qe)) {
        Ae = !1;
        break;
      }
      Ge || (Ge = fe == "constructor");
    }
    if (Ae && !Ge) {
      var qe = a.constructor, ct = l.constructor;
      qe == ct || !("constructor" in a) || !("constructor" in l) || typeof qe == "function" && qe instanceof qe && typeof ct == "function" && ct instanceof ct || (Ae = !1);
    }
    return P.delete(a), P.delete(l), Ae;
  }, wc = "[object Arguments]", Tc = "[object Array]", Ra = "[object Object]", Ac = Object.prototype.hasOwnProperty, Lp = function(a, l, p, g, S, P) {
    var I = ue(a), z = ue(l), J = I ? Tc : na(a), ie = z ? Tc : na(l), fe = (J = J == wc ? Ra : J) == Ra, be = (ie = ie == wc ? Ra : ie) == Ra, Me = J == ie;
    if (Me && Ta(a)) {
      if (!Ta(l)) return !1;
      I = !0, fe = !1;
    }
    if (Me && !fe) return P || (P = new ta()), I || Gl(a) ? Mc(a, l, p, g, S, P) : Cp(a, l, J, p, g, S, P);
    if (!(1 & p)) {
      var Ae = fe && Ac.call(a, "__wrapped__"), Ge = be && Ac.call(l, "__wrapped__");
      if (Ae || Ge) {
        var Oe = Ae ? a.value() : a, Fe = Ge ? l.value() : l;
        return P || (P = new ta()), S(Oe, Fe, p, g, P);
      }
    }
    return !!Me && (P || (P = new ta()), Ip(a, l, p, g, S, P));
  }, Pc = function a(l, p, g, S, P) {
    return l === p || (l == null || p == null || !D(l) && !D(p) ? l != l && p != p : Lp(l, p, g, S, a, P));
  }, Up = function(a, l, p, g) {
    var S = p.length, P = S, I = !g;
    if (a == null) return !P;
    for (a = Object(a); S--; ) {
      var z = p[S];
      if (I && z[2] ? z[1] !== a[z[0]] : !(z[0] in a)) return !1;
    }
    for (; ++S < P; ) {
      var J = (z = p[S])[0], ie = a[J], fe = z[1];
      if (I && z[2]) {
        if (ie === void 0 && !(J in a)) return !1;
      } else {
        var be = new ta();
        if (g) var Me = g(ie, fe, J, a, l, be);
        if (!(Me === void 0 ? Pc(fe, ie, 3, g, be) : Me)) return !1;
      }
    }
    return !0;
  }, Rc = function(a) {
    return a == a && !pe(a);
  }, Np = function(a) {
    for (var l = ea(a), p = l.length; p--; ) {
      var g = l[p], S = a[g];
      l[p] = [g, S, Rc(S)];
    }
    return l;
  }, Cc = function(a, l) {
    return function(p) {
      return p != null && p[a] === l && (l !== void 0 || a in Object(p));
    };
  }, Op = function(a) {
    var l = Np(a);
    return l.length == 1 && l[0][2] ? Cc(l[0][0], l[0][1]) : function(p) {
      return p === a || Up(p, a, l);
    };
  }, Fp = function(a, l) {
    return a != null && l in Object(a);
  }, Bp = function(a, l, p) {
    for (var g = -1, S = (l = mt(l, a)).length, P = !1; ++g < S; ) {
      var I = ot(l[g]);
      if (!(P = a != null && p(a, I))) break;
      a = a[I];
    }
    return P || ++g != S ? P : !!(S = a == null ? 0 : a.length) && Fo(S) && Kn(I, S) && (ue(a) || Bl(a));
  }, kp = function(a, l) {
    return a != null && Bp(a, l, Fp);
  }, zp = function(a, l) {
    return ne(a) && Rc(l) ? Cc(ot(a), l) : function(p) {
      var g = _t(p, a);
      return g === void 0 && g === l ? kp(p, a) : Pc(l, g, 3);
    };
  }, Dc = function(a) {
    return function(l) {
      return l == null ? void 0 : l[a];
    };
  }, Vp = function(a) {
    return function(l) {
      return it(l, a);
    };
  }, Hp = function(a) {
    return ne(a) ? Dc(ot(a)) : Vp(a);
  }, jp = function(a) {
    return typeof a == "function" ? a : a == null ? Vt : typeof a == "object" ? ue(a) ? zp(a[0], a[1]) : Op(a) : Hp(a);
  }, Gp = /* @__PURE__ */ function(a) {
    return function(l, p, g) {
      for (var S = -1, P = Object(l), I = g(l), z = I.length; z--; ) {
        var J = I[a ? z : ++S];
        if (p(P[J], J, P) === !1) break;
      }
      return l;
    };
  }(), Wp = function(a, l) {
    return a && Gp(a, l, ea);
  }, Qo = function() {
    return xe.Date.now();
  }, Xp = Math.max, qp = Math.min, Yp = function(a, l, p) {
    var g, S, P, I, z, J, ie = 0, fe = !1, be = !1, Me = !0;
    if (typeof a != "function") throw new TypeError("Expected a function");
    function Ae(qe) {
      var ct = g, Lt = S;
      return g = S = void 0, ie = qe, I = a.apply(Lt, ct);
    }
    function Ge(qe) {
      var ct = qe - J;
      return J === void 0 || ct >= l || ct < 0 || be && qe - ie >= P;
    }
    function Oe() {
      var qe = Qo();
      if (Ge(qe)) return Fe(qe);
      z = setTimeout(Oe, function(ct) {
        var Lt = l - (ct - J);
        return be ? qp(Lt, P - (ct - ie)) : Lt;
      }(qe));
    }
    function Fe(qe) {
      return z = void 0, Me && g ? Ae(qe) : (g = S = void 0, I);
    }
    function Qe() {
      var qe = Qo(), ct = Ge(qe);
      if (g = arguments, S = this, J = qe, ct) {
        if (z === void 0) return function(Lt) {
          return ie = Lt, z = setTimeout(Oe, l), fe ? Ae(Lt) : I;
        }(J);
        if (be) return clearTimeout(z), z = setTimeout(Oe, l), Ae(J);
      }
      return z === void 0 && (z = setTimeout(Oe, l)), I;
    }
    return l = k(l) || 0, pe(p) && (fe = !!p.leading, P = (be = "maxWait" in p) ? Xp(k(p.maxWait) || 0, l) : P, Me = "trailing" in p ? !!p.trailing : Me), Qe.cancel = function() {
      z !== void 0 && clearTimeout(z), ie = 0, g = J = S = z = void 0;
    }, Qe.flush = function() {
      return z === void 0 ? I : Fe(Qo());
    }, Qe;
  }, Kp = function(a) {
    var l = a == null ? 0 : a.length;
    return l ? a[l - 1] : void 0;
  }, Zp = function(a, l) {
    return l.length < 2 ? a : it(a, Kl(l, 0, -1));
  }, Jp = function(a) {
    return typeof a == "number" && a == st(a);
  }, $p = function(a, l) {
    var p = {};
    return l = jp(l), Wp(a, function(g, S, P) {
      zi(p, S, l(g, S, P));
    }), p;
  }, Qp = function(a, l) {
    return l = mt(l, a), (a = Zp(a, l)) == null || delete a[ot(Kp(l))];
  }, ef = Math.floor, Ic = function(a, l) {
    var p = "";
    if (!a || l < 1 || l > 9007199254740991) return p;
    do
      l % 2 && (p += a), (l = ef(l / 2)) && (a += a);
    while (l);
    return p;
  }, tf = Dc("length"), Lc = "\\ud800-\\udfff", nf = "[" + Lc + "]", es = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", ts = "\\ud83c[\\udffb-\\udfff]", Uc = "[^" + Lc + "]", Nc = "(?:\\ud83c[\\udde6-\\uddff]){2}", Oc = "[\\ud800-\\udbff][\\udc00-\\udfff]", Fc = "(?:" + es + "|" + ts + ")?", Bc = "[\\ufe0e\\ufe0f]?", rf = Bc + Fc + ("(?:\\u200d(?:" + [Uc, Nc, Oc].join("|") + ")" + Bc + Fc + ")*"), af = "(?:" + [Uc + es + "?", es, Nc, Oc, nf].join("|") + ")", kc = RegExp(ts + "(?=" + ts + ")|" + af + rf, "g"), of = function(a) {
    for (var l = kc.lastIndex = 0; kc.test(a); ) ++l;
    return l;
  }, zc = function(a) {
    return jo(a) ? of(a) : tf(a);
  }, sf = Math.ceil, lf = function(a, l) {
    var p = (l = l === void 0 ? " " : pt(l)).length;
    if (p < 2) return p ? Ic(l, a) : l;
    var g = Ic(l, sf(a / zc(l)));
    return jo(l) ? Ud(Hd(g), 0, a).join("") : g.slice(0, a);
  }, ia = function(a, l, p) {
    a = ft(a);
    var g = (l = st(l)) ? zc(a) : 0;
    return l && g < l ? lf(l - g, p) + a : a;
  }, Vc = function(a, l) {
    return a == null || Qp(a, l);
  }, cf = class {
    constructor(a) {
      E(this, "_cache", new Ze()), E(this, "_keepHotUntapDebounce"), ae(this, a);
    }
    get type() {
      return "Theatre_SheetObject_PublicAPI";
    }
    get props() {
      return B(this).propsP;
    }
    get sheet() {
      return B(this).sheet.publicApi;
    }
    get project() {
      return B(this).sheet.project.publicApi;
    }
    get address() {
      return y({}, B(this).address);
    }
    _valuesPrism() {
      return this._cache.get("_valuesPrism", () => {
        const a = B(this);
        return (0, vt.prism)(() => (0, vt.val)(a.getValues().getValue()));
      });
    }
    onValuesChange(a, l) {
      return Ps(this._valuesPrism(), a, l);
    }
    get value() {
      const a = this._valuesPrism();
      if (!a.isHot) {
        this._keepHotUntapDebounce != null && (process.env.NODE_ENV === "development" && B(this)._logger.errorDev("`sheet.value` keepHot debouncer is set, even though the derivation is not actually hot."), this._keepHotUntapDebounce.flush());
        const l = a.keepHot();
        this._keepHotUntapDebounce = Yp(() => {
          l(), this._keepHotUntapDebounce = void 0;
        }, 5e3);
      }
      return this._keepHotUntapDebounce && this._keepHotUntapDebounce(), a.getValue();
    }
    set initialValue(a) {
      B(this).setInitialValue(a);
    }
  };
  function Ca(a) {
    return a.type === "compound" || a.type === "enum";
  }
  function ns(a, l) {
    if (!a) return;
    const [p, ...g] = l;
    if (p === void 0) return a;
    if (Ca(a))
      return ns(a.type === "enum" ? a.cases[p] : a.props[p], g);
  }
  var hf = class {
    constructor(a, l, p) {
      this.sheet = a, this.template = l, this.nativeObject = p, E(this, "$$isPointerToPrismProvider", !0), E(this, "address"), E(this, "publicApi"), E(this, "_initialValue", new ut.Atom({})), E(this, "_cache", new Ze()), E(this, "_logger"), E(this, "_internalUtilCtx"), this._logger = a._logger.named("SheetObject", l.address.objectKey), this._logger._trace("creating object"), this._internalUtilCtx = { logger: this._logger.utilFor.internal() }, this.address = M(y({}, l.address), { sheetInstanceId: a.address.sheetInstanceId }), this.publicApi = new cf(this);
    }
    get type() {
      return "Theatre_SheetObject";
    }
    getValues() {
      return this._cache.get("getValues()", () => (0, ut.prism)(() => {
        const a = ln((0, ut.val)(this.template.getDefaultValues()), (0, ut.val)(this._initialValue.pointer), ut.prism.memo("withInitialCache", () => /* @__PURE__ */ new WeakMap(), []));
        let l, p = ln(a, (0, ut.val)(this.template.getStaticValues()), ut.prism.memo("withStatics", () => /* @__PURE__ */ new WeakMap(), []));
        {
          const g = ut.prism.memo("seq", () => this.getSequencedValues(), []), S = ut.prism.memo("withSeqsCache", () => /* @__PURE__ */ new WeakMap(), []);
          l = (0, ut.val)((0, ut.val)(g)), p = ln(p, l, S);
        }
        return ((g, S) => {
          const P = kn.prism.memo(g, () => new kn.Atom(S), []);
          return P.set(S), P;
        })("finalAtom", p).pointer;
      }));
    }
    getValueByPointer(a) {
      const l = (0, ut.val)(this.getValues()), { path: p } = (0, ut.getPointerParts)(a);
      return (0, ut.val)(Zn(l, p));
    }
    pointerToPrism(a) {
      const { path: l } = (0, ut.getPointerParts)(a);
      return (0, ut.prism)(() => {
        const p = (0, ut.val)(this.getValues());
        return (0, ut.val)(Zn(p, l));
      });
    }
    getSequencedValues() {
      return (0, ut.prism)(() => {
        const a = ut.prism.memo("tracksToProcess", () => this.template.getArrayOfValidSequenceTracks(), []), l = (0, ut.val)(a), p = new ut.Atom({}), g = (0, ut.val)(this.template.configPointer);
        return ut.prism.effect("processTracks", () => {
          const S = [];
          for (const { trackId: P, pathToProp: I } of l) {
            const z = this._trackIdToPrism(P), J = ns(g, I), ie = J.deserializeAndSanitize, fe = J.interpolate, be = () => {
              const Ae = z.getValue();
              if (!Ae) return p.setByPointer((qe) => Zn(qe, I), void 0);
              const Ge = ie(Ae.left), Oe = Ge === void 0 ? J.default : Ge;
              if (Ae.right === void 0) return p.setByPointer((qe) => Zn(qe, I), Oe);
              const Fe = ie(Ae.right), Qe = Fe === void 0 ? J.default : Fe;
              return p.setByPointer((qe) => Zn(qe, I), fe(Oe, Qe, Ae.progression));
            }, Me = z.onStale(be);
            be(), S.push(Me);
          }
          return () => {
            for (const P of S) P();
          };
        }, [g, ...l]), p.pointer;
      });
    }
    _trackIdToPrism(a) {
      const l = this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[a], p = this.sheet.getSequence().positionPrism;
      return Je(this._internalUtilCtx, l, p);
    }
    get propsP() {
      return this._cache.get("propsP", () => (0, ut.pointer)({ root: this, path: [] }));
    }
    validateValue(a, l) {
    }
    setInitialValue(a) {
      this.validateValue(this.propsP, a), this._initialValue.set(a);
    }
  };
  function xt(a) {
    return function(l, p) {
      return a(l, p());
    };
  }
  var yn = { _hmm: xn(524), _todo: xn(522), _error: xn(521), errorDev: xn(529), errorPublic: xn(545), _kapow: xn(268), _warn: xn(265), warnDev: xn(273), warnPublic: xn(289), _debug: xn(137), debugDev: xn(145), _trace: xn(73), traceDev: xn(81) };
  function xn(a) {
    return Object.freeze({ audience: Hi(a, 8) ? "internal" : Hi(a, 16) ? "dev" : "public", category: Hi(a, 4) ? "troubleshooting" : Hi(a, 2) ? "todo" : "general", level: Hi(a, 512) ? 512 : Hi(a, 256) ? 256 : Hi(a, 128) ? 128 : 64 });
  }
  function Hi(a, l) {
    return (a & l) === l;
  }
  function bt(a, l) {
    return (!(32 & ~l) || (16 & ~l ? !(8 & ~l) && a.internal : a.dev)) && a.min <= l;
  }
  var hi = { loggingConsoleStyle: !0, loggerConsoleStyle: !0, includes: Object.freeze({ internal: !1, dev: !1, min: 256 }), filtered: function() {
  }, include: function() {
    return {};
  }, create: null, creatExt: null, named(a, l, p) {
    return this.create({ names: [...a.names, { name: l, key: p }] });
  }, style: { bold: void 0, italic: void 0, cssMemo: /* @__PURE__ */ new Map([["", ""]]), collapseOnRE: /[a-z- ]+/g, color: void 0, collapsed(a) {
    if (a.length < 5) return a;
    const l = a.replace(this.collapseOnRE, "");
    return this.cssMemo.has(l) || this.cssMemo.set(l, this.css(a)), l;
  }, css(a) {
    var l, p, g, S;
    const P = this.cssMemo.get(a);
    if (P) return P;
    let I = "color:".concat((p = (l = this.color) == null ? void 0 : l.call(this, a)) != null ? p : "hsl(".concat((a.charCodeAt(0) + a.charCodeAt(a.length - 1)) % 360, ", 100%, 60%)"));
    return (g = this.bold) != null && g.test(a) && (I += ";font-weight:600"), (S = this.italic) != null && S.test(a) && (I += ";font-style:italic"), this.cssMemo.set(a, I), I;
  } } };
  function Hc(a = console, l = {}) {
    const p = M(y({}, hi), { includes: y({}, hi.includes) }), g = { styled: pf.bind(p, a), noStyle: ff.bind(p, a) }, S = df.bind(p);
    function P() {
      return p.loggingConsoleStyle && p.loggerConsoleStyle ? g.styled : g.noStyle;
    }
    return p.create = P(), { configureLogger(I) {
      var z;
      I === "console" ? (p.loggerConsoleStyle = hi.loggerConsoleStyle, p.create = P()) : I.type === "console" ? (p.loggerConsoleStyle = (z = I.style) != null ? z : hi.loggerConsoleStyle, p.create = P()) : I.type === "keyed" ? (p.creatExt = (J) => I.keyed(J.names), p.create = S) : I.type === "named" && (p.creatExt = uf.bind(null, I.named), p.create = S);
    }, configureLogging(I) {
      var z, J, ie, fe, be;
      p.includes.dev = (z = I.dev) != null ? z : hi.includes.dev, p.includes.internal = (J = I.internal) != null ? J : hi.includes.internal, p.includes.min = (ie = I.min) != null ? ie : hi.includes.min, p.include = (fe = I.include) != null ? fe : hi.include, p.loggingConsoleStyle = (be = I.consoleStyle) != null ? be : hi.loggingConsoleStyle, p.create = P();
    }, getLogger: () => p.create({ names: [] }) };
  }
  function uf(a, l) {
    const p = [];
    for (let { name: g, key: S } of l.names) p.push(S == null ? g : "".concat(g, " (").concat(S, ")"));
    return a(p);
  }
  function df(a) {
    const l = y(y({}, this.includes), this.include(a)), p = this.filtered, g = this.named.bind(this, a), S = this.creatExt(a), P = bt(l, 524), I = bt(l, 522), z = bt(l, 521), J = bt(l, 529), ie = bt(l, 545), fe = bt(l, 265), be = bt(l, 268), Me = bt(l, 273), Ae = bt(l, 289), Ge = bt(l, 137), Oe = bt(l, 145), Fe = bt(l, 73), Qe = bt(l, 81), qe = P ? S.error.bind(S, yn._hmm) : p.bind(a, 524), ct = I ? S.error.bind(S, yn._todo) : p.bind(a, 522), Lt = z ? S.error.bind(S, yn._error) : p.bind(a, 521), Ki = J ? S.error.bind(S, yn.errorDev) : p.bind(a, 529), Zi = ie ? S.error.bind(S, yn.errorPublic) : p.bind(a, 545), Ji = be ? S.warn.bind(S, yn._kapow) : p.bind(a, 268), $i = fe ? S.warn.bind(S, yn._warn) : p.bind(a, 265), Qi = Me ? S.warn.bind(S, yn.warnDev) : p.bind(a, 273), er = Ae ? S.warn.bind(S, yn.warnPublic) : p.bind(a, 273), tr = Ge ? S.debug.bind(S, yn._debug) : p.bind(a, 137), nr = Oe ? S.debug.bind(S, yn.debugDev) : p.bind(a, 145), ir = Fe ? S.trace.bind(S, yn._trace) : p.bind(a, 73), rr = Qe ? S.trace.bind(S, yn.traceDev) : p.bind(a, 81), Nt = { _hmm: qe, _todo: ct, _error: Lt, errorDev: Ki, errorPublic: Zi, _kapow: Ji, _warn: $i, warnDev: Qi, warnPublic: er, _debug: tr, debugDev: nr, _trace: ir, traceDev: rr, lazy: { _hmm: P ? xt(qe) : qe, _todo: I ? xt(ct) : ct, _error: z ? xt(Lt) : Lt, errorDev: J ? xt(Ki) : Ki, errorPublic: ie ? xt(Zi) : Zi, _kapow: be ? xt(Ji) : Ji, _warn: fe ? xt($i) : $i, warnDev: Me ? xt(Qi) : Qi, warnPublic: Ae ? xt(er) : er, _debug: Ge ? xt(tr) : tr, debugDev: Oe ? xt(nr) : nr, _trace: Fe ? xt(ir) : ir, traceDev: Qe ? xt(rr) : rr }, named: g, utilFor: { internal: () => ({ debug: Nt._debug, error: Nt._error, warn: Nt._warn, trace: Nt._trace, named: (Sn, St) => Nt.named(Sn, St).utilFor.internal() }), dev: () => ({ debug: Nt.debugDev, error: Nt.errorDev, warn: Nt.warnDev, trace: Nt.traceDev, named: (Sn, St) => Nt.named(Sn, St).utilFor.dev() }), public: () => ({ error: Nt.errorPublic, warn: Nt.warnPublic, debug(Sn, St) {
      Nt._warn('(public "debug" filtered out) '.concat(Sn), St);
    }, trace(Sn, St) {
      Nt._warn('(public "trace" filtered out) '.concat(Sn), St);
    }, named: (Sn, St) => Nt.named(Sn, St).utilFor.public() }) } };
    return Nt;
  }
  function pf(a, l) {
    const p = y(y({}, this.includes), this.include(l)), g = [];
    let S = "";
    for (let J = 0; J < l.names.length; J++) {
      const { name: ie, key: fe } = l.names[J];
      if (S += " %c".concat(ie), g.push(this.style.css(ie)), fe != null) {
        const be = "%c#".concat(fe);
        S += be, g.push(this.style.css(be));
      }
    }
    const P = this.filtered, I = this.named.bind(this, l), z = [S, ...g];
    return jc(P, l, p, a, z, function(J) {
      const ie = J.slice(0);
      for (let fe = 1; fe < ie.length; fe++) ie[fe] += ";background-color:#e0005a;padding:2px;color:white";
      return ie;
    }(z), I);
  }
  function ff(a, l) {
    const p = y(y({}, this.includes), this.include(l));
    let g = "";
    for (let P = 0; P < l.names.length; P++) {
      const { name: I, key: z } = l.names[P];
      g += " ".concat(I), z != null && (g += "#".concat(z));
    }
    const S = [g];
    return jc(this.filtered, l, p, a, S, S, this.named.bind(this, l));
  }
  function jc(a, l, p, g, S, P, I) {
    const z = bt(p, 524), J = bt(p, 522), ie = bt(p, 521), fe = bt(p, 529), be = bt(p, 545), Me = bt(p, 265), Ae = bt(p, 268), Ge = bt(p, 273), Oe = bt(p, 289), Fe = bt(p, 137), Qe = bt(p, 145), qe = bt(p, 73), ct = bt(p, 81), Lt = z ? g.error.bind(g, ...S) : a.bind(l, 524), Ki = J ? g.error.bind(g, ...S) : a.bind(l, 522), Zi = ie ? g.error.bind(g, ...S) : a.bind(l, 521), Ji = fe ? g.error.bind(g, ...S) : a.bind(l, 529), $i = be ? g.error.bind(g, ...S) : a.bind(l, 545), Qi = Ae ? g.warn.bind(g, ...P) : a.bind(l, 268), er = Me ? g.warn.bind(g, ...S) : a.bind(l, 265), tr = Ge ? g.warn.bind(g, ...S) : a.bind(l, 273), nr = Oe ? g.warn.bind(g, ...S) : a.bind(l, 273), ir = Fe ? g.info.bind(g, ...S) : a.bind(l, 137), rr = Qe ? g.info.bind(g, ...S) : a.bind(l, 145), Nt = qe ? g.debug.bind(g, ...S) : a.bind(l, 73), Sn = ct ? g.debug.bind(g, ...S) : a.bind(l, 81), St = { _hmm: Lt, _todo: Ki, _error: Zi, errorDev: Ji, errorPublic: $i, _kapow: Qi, _warn: er, warnDev: tr, warnPublic: nr, _debug: ir, debugDev: rr, _trace: Nt, traceDev: Sn, lazy: { _hmm: z ? xt(Lt) : Lt, _todo: J ? xt(Ki) : Ki, _error: ie ? xt(Zi) : Zi, errorDev: fe ? xt(Ji) : Ji, errorPublic: be ? xt($i) : $i, _kapow: Ae ? xt(Qi) : Qi, _warn: Me ? xt(er) : er, warnDev: Ge ? xt(tr) : tr, warnPublic: Oe ? xt(nr) : nr, _debug: Fe ? xt(ir) : ir, debugDev: Qe ? xt(rr) : rr, _trace: qe ? xt(Nt) : Nt, traceDev: ct ? xt(Sn) : Sn }, named: I, utilFor: { internal: () => ({ debug: St._debug, error: St._error, warn: St._warn, trace: St._trace, named: (fi, mi) => St.named(fi, mi).utilFor.internal() }), dev: () => ({ debug: St.debugDev, error: St.errorDev, warn: St.warnDev, trace: St.traceDev, named: (fi, mi) => St.named(fi, mi).utilFor.dev() }), public: () => ({ error: St.errorPublic, warn: St.warnPublic, debug(fi, mi) {
      St._warn('(public "debug" filtered out) '.concat(fi), mi);
    }, trace(fi, mi) {
      St._warn('(public "trace" filtered out) '.concat(fi), mi);
    }, named: (fi, mi) => St.named(fi, mi).utilFor.public() }) } };
    return St;
  }
  var Gc = Hc(console, { _debug: function() {
  }, _error: function() {
  } });
  Gc.configureLogging({ dev: !0, min: 64 });
  var is = Gc.getLogger().named("Theatre.js (default logger)").utilFor.dev(), Wc = /* @__PURE__ */ new WeakMap();
  function Xc(a, l, p) {
    for (const [g, S] of Object.entries(l.props)) if (!Ca(S)) {
      const P = [...a, g];
      p.set(JSON.stringify(P), p.size), qc(P, S, p);
    }
    for (const [g, S] of Object.entries(l.props)) if (Ca(S)) {
      const P = [...a, g];
      p.set(JSON.stringify(P), p.size), qc(P, S, p);
    }
  }
  function qc(a, l, p) {
    if (l.type === "compound") Xc(a, l, p);
    else {
      if (l.type === "enum") throw new Error("Enums aren't supported yet");
      p.set(JSON.stringify(a), p.size);
    }
  }
  function Yc(a) {
    return typeof a == "object" && a !== null && Object.keys(a).length === 0;
  }
  var mf = class {
    constructor(a, l, p, g, S) {
      this.sheetTemplate = a, E(this, "address"), E(this, "type", "Theatre_SheetObjectTemplate"), E(this, "_config"), E(this, "_temp_actions_atom"), E(this, "_cache", new Ze()), E(this, "project"), E(this, "pointerToSheetState"), E(this, "pointerToStaticOverrides"), this.address = M(y({}, a.address), { objectKey: l }), this._config = new Le.Atom(g), this._temp_actions_atom = new Le.Atom(S), this.project = a.project, this.pointerToSheetState = this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId], this.pointerToStaticOverrides = this.pointerToSheetState.staticOverrides.byObject[this.address.objectKey];
    }
    get staticConfig() {
      return this._config.get();
    }
    get configPointer() {
      return this._config.pointer;
    }
    get _temp_actions() {
      return this._temp_actions_atom.get();
    }
    get _temp_actionsPointer() {
      return this._temp_actions_atom.pointer;
    }
    createInstance(a, l, p) {
      return this._config.set(p), new hf(a, this, l);
    }
    reconfigure(a) {
      this._config.set(a);
    }
    _temp_setActions(a) {
      this._temp_actions_atom.set(a);
    }
    getDefaultValues() {
      return this._cache.get("getDefaultValues()", () => (0, Le.prism)(() => function(a) {
        return Kt(a);
      }((0, Le.val)(this.configPointer))));
    }
    getStaticValues() {
      return this._cache.get("getStaticValues", () => (0, Le.prism)(() => {
        var a;
        const l = (a = (0, Le.val)(this.pointerToStaticOverrides)) != null ? a : {};
        return (0, Le.val)(this.configPointer).deserializeAndSanitize(l) || {};
      }));
    }
    getArrayOfValidSequenceTracks() {
      return this._cache.get("getArrayOfValidSequenceTracks", () => (0, Le.prism)(() => {
        const a = this.project.pointers.historic.sheetsById[this.address.sheetId], l = (0, Le.val)(a.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath);
        if (!l) return ce;
        const p = [];
        if (!l) return ce;
        const g = (0, Le.val)(this.configPointer), S = Object.entries(l);
        for (const [I, z] of S) {
          const J = gf(I);
          if (!J) continue;
          const ie = ns(g, J);
          ie && !Ca(ie) && p.push({ pathToProp: J, trackId: z });
        }
        const P = function(I) {
          const z = Wc.get(I);
          if (z) return z;
          const J = /* @__PURE__ */ new Map();
          return Wc.set(I, J), Xc([], I, J), J;
        }(g);
        return p.sort((I, z) => {
          const J = I.pathToProp, ie = z.pathToProp;
          return P.get(JSON.stringify(J)) > P.get(JSON.stringify(ie)) ? 1 : -1;
        }), p.length === 0 ? ce : p;
      }));
    }
    getMapOfValidSequenceTracks_forStudio() {
      return this._cache.get("getMapOfValidSequenceTracks_forStudio", () => (0, Le.prism)(() => {
        const a = (0, Le.val)(this.getArrayOfValidSequenceTracks());
        let l = {};
        for (const { pathToProp: p, trackId: g } of a) br(l, p, g);
        return l;
      }));
    }
    getStaticButNotSequencedOverrides() {
      return this._cache.get("getStaticButNotSequencedOverrides", () => (0, Le.prism)(() => {
        const a = (0, Le.val)(this.getStaticValues()), l = (0, Le.val)(this.getArrayOfValidSequenceTracks()), p = Sp(a);
        for (const { pathToProp: g } of l) {
          Vc(p, g);
          let S = g.slice(0, -1);
          for (; S.length > 0 && Yc(Dt(p, S)); )
            Vc(p, S), S = S.slice(0, -1);
        }
        return Yc(p) ? void 0 : p;
      }));
    }
    getDefaultsAtPointer(a) {
      const { path: l } = (0, Le.getPointerParts)(a);
      return Dt(this.getDefaultValues().getValue(), l);
    }
  };
  function gf(a) {
    try {
      return JSON.parse(a);
    } catch {
      return void is.warn("property ".concat(JSON.stringify(a), " cannot be parsed. Skipping."));
    }
  }
  var Kc = Ft, _f = /* @__PURE__ */ function(a) {
    const l = /* @__PURE__ */ new WeakMap();
    return (p) => (l.has(p) || l.set(p, a(p)), l.get(p));
  }((a) => JSON.stringify(a)), vf = w(O()), yf = class extends Error {
  }, Pt = class extends yf {
  }, Zc = Ft, xf = Ft, bf = Ft, Qt = Ft;
  function Ti() {
    let a, l;
    const p = new Promise((S, P) => {
      a = (I) => {
        S(I), g.status = "resolved";
      }, l = (I) => {
        P(I), g.status = "rejected";
      };
    }), g = { resolve: a, reject: l, promise: p, status: "pending" };
    return g;
  }
  var Da = () => {
  }, Sf = Ft, Mf = class {
    constructor() {
      E(this, "_stopPlayCallback", Da), E(this, "_state", new Sf.Atom({ position: 0, playing: !1 })), E(this, "statePointer"), this.statePointer = this._state.pointer;
    }
    destroy() {
    }
    pause() {
      this._stopPlayCallback(), this.playing = !1, this._stopPlayCallback = Da;
    }
    gotoPosition(a) {
      this._updatePositionInState(a);
    }
    _updatePositionInState(a) {
      this._state.setByPointer((l) => l.position, a);
    }
    getCurrentPosition() {
      return this._state.get().position;
    }
    get playing() {
      return this._state.get().playing;
    }
    set playing(a) {
      this._state.setByPointer((l) => l.playing, a);
    }
    play(a, l, p, g, S) {
      this.playing && this.pause(), this.playing = !0;
      const P = l[1] - l[0];
      {
        const Me = this.getCurrentPosition();
        Me < l[0] || Me > l[1] ? g === "normal" || g === "alternate" ? this._updatePositionInState(l[0]) : g !== "reverse" && g !== "alternateReverse" || this._updatePositionInState(l[1]) : g === "normal" || g === "alternate" ? Me === l[1] && this._updatePositionInState(l[0]) : Me === l[0] && this._updatePositionInState(l[1]);
      }
      const I = Ti(), z = S.time, J = P * a;
      let ie = this.getCurrentPosition() - l[0];
      g !== "reverse" && g !== "alternateReverse" || (ie = l[1] - this.getCurrentPosition());
      const fe = (Me) => {
        const Ae = Math.max(Me - z, 0) / 1e3, Ge = Math.min(Ae * p + ie, J);
        if (Ge !== J) {
          const Oe = Math.floor(Ge / P);
          let Fe = Ge / P % 1 * P;
          if (g !== "normal") if (g === "reverse") Fe = P - Fe;
          else {
            const Qe = Oe % 2 == 0;
            g === "alternate" ? Qe || (Fe = P - Fe) : Qe && (Fe = P - Fe);
          }
          this._updatePositionInState(Fe + l[0]), be();
        } else {
          if (g === "normal") this._updatePositionInState(l[1]);
          else if (g === "reverse") this._updatePositionInState(l[0]);
          else {
            const Oe = (a - 1) % 2 == 0;
            g === "alternate" ? Oe ? this._updatePositionInState(l[1]) : this._updatePositionInState(l[0]) : Oe ? this._updatePositionInState(l[0]) : this._updatePositionInState(l[1]);
          }
          this.playing = !1, I.resolve(!0);
        }
      };
      this._stopPlayCallback = () => {
        S.offThisOrNextTick(fe), S.offNextTick(fe), this.playing && I.resolve(!1);
      };
      const be = () => S.onNextTick(fe);
      return S.onThisOrNextTick(fe), I.promise;
    }
    playDynamicRange(a, l) {
      this.playing && this.pause(), this.playing = !0;
      const p = Ti(), g = a.keepHot();
      p.promise.then(g, g);
      let S = l.time;
      const P = (z) => {
        const J = Math.max(z - S, 0);
        S = z;
        const ie = J / 1e3, fe = this.getCurrentPosition(), be = a.getValue();
        if (fe < be[0] || fe > be[1]) this.gotoPosition(be[0]);
        else {
          let Me = fe + ie;
          Me > be[1] && (Me = be[0] + (Me - be[1])), this.gotoPosition(Me);
        }
        I();
      };
      this._stopPlayCallback = () => {
        l.offThisOrNextTick(P), l.offNextTick(P), p.resolve(!1);
      };
      const I = () => l.onNextTick(P);
      return l.onThisOrNextTick(P), p.promise;
    }
  }, Ef = Ft, rs = "__TheatreJS_CoreBundle", Ia = (a) => (...l) => {
    var p;
    switch (a) {
      case "success":
      case "info":
        is.debug(l.slice(0, 2).join(`
`));
        break;
      case "warning":
        is.warn(l.slice(0, 2).join(`
`));
    }
    return typeof window < "u" ? (p = window.__TheatreJS_Notifications) == null ? void 0 : p.notify[a](...l) : void 0;
  }, ui = { warning: Ia("warning"), success: Ia("success"), info: Ia("info"), error: Ia("error") };
  typeof window < "u" && (window.addEventListener("error", (a) => {
    ui.error("An error occurred", "<pre>".concat(a.message, `</pre>

See **console** for details.`));
  }), window.addEventListener("unhandledrejection", (a) => {
    ui.error("An error occurred", "<pre>".concat(a.reason, `</pre>

See **console** for details.`));
  }));
  var La, wf = class {
    constructor(a, l, p) {
      this._decodedBuffer = a, this._audioContext = l, this._nodeDestination = p, E(this, "_mainGain"), E(this, "_state", new Ef.Atom({ position: 0, playing: !1 })), E(this, "statePointer"), E(this, "_stopPlayCallback", Da), this.statePointer = this._state.pointer, this._mainGain = this._audioContext.createGain(), this._mainGain.connect(this._nodeDestination);
    }
    playDynamicRange(a, l) {
      const p = Ti();
      let g;
      this._playing && this.pause(), this._playing = !0;
      const S = () => {
        g == null || g(), g = this._loopInRange(a.getValue(), l).stop;
      }, P = a.onStale(S);
      return S(), this._stopPlayCallback = () => {
        g == null || g(), P(), p.resolve(!1);
      }, p.promise;
    }
    _loopInRange(a, l) {
      let p = this.getCurrentPosition();
      const g = a[1] - a[0];
      (p < a[0] || p > a[1] || p === a[1]) && this._updatePositionInState(a[0]), p = this.getCurrentPosition();
      const S = this._audioContext.createBufferSource();
      S.buffer = this._decodedBuffer, S.connect(this._mainGain), S.playbackRate.value = 1, S.loop = !0, S.loopStart = a[0], S.loopEnd = a[1];
      const P = l.time;
      let I = p - a[0];
      S.start(0, p);
      const z = (ie) => {
        let fe = (1 * (Math.max(ie - P, 0) / 1e3) + I) / g % 1 * g;
        this._updatePositionInState(fe + a[0]), J();
      }, J = () => l.onNextTick(z);
      return l.onThisOrNextTick(z), { stop: () => {
        S.stop(), S.disconnect(), l.offThisOrNextTick(z), l.offNextTick(z);
      } };
    }
    get _playing() {
      return this._state.get().playing;
    }
    set _playing(a) {
      this._state.setByPointer((l) => l.playing, a);
    }
    destroy() {
    }
    pause() {
      this._stopPlayCallback(), this._playing = !1, this._stopPlayCallback = Da;
    }
    gotoPosition(a) {
      this._updatePositionInState(a);
    }
    _updatePositionInState(a) {
      this._state.reduce((l) => M(y({}, l), { position: a }));
    }
    getCurrentPosition() {
      return this._state.get().position;
    }
    play(a, l, p, g, S) {
      this._playing && this.pause(), this._playing = !0;
      let P = this.getCurrentPosition();
      const I = l[1] - l[0];
      if (g !== "normal") throw new Pt('Audio-controlled sequences can only be played in the "normal" direction. ' + "'".concat(g, "' given."));
      (P < l[0] || P > l[1] || P === l[1]) && this._updatePositionInState(l[0]), P = this.getCurrentPosition();
      const z = Ti(), J = this._audioContext.createBufferSource();
      J.buffer = this._decodedBuffer, J.connect(this._mainGain), J.playbackRate.value = p, a > 1e3 && (ui.warning("Can't play sequences with audio more than 1000 times", "The sequence will still play, but only 1000 times. The `iterationCount: ".concat(a, "` provided to `sequence.play()`\nis too high for a sequence with audio.\n\nTo fix this, either set `iterationCount` to a lower value, or remove the audio from the sequence."), [{ url: "https://www.theatrejs.com/docs/latest/manual/audio", title: "Using Audio" }, { url: "https://www.theatrejs.com/docs/latest/api/core#sequence.attachaudio", title: "Audio API" }]), a = 1e3), a > 1 && (J.loop = !0, J.loopStart = l[0], J.loopEnd = l[1]);
      const ie = S.time;
      let fe = P - l[0];
      const be = I * a;
      J.start(0, P, be - fe);
      const Me = (Oe) => {
        const Fe = Math.max(Oe - ie, 0) / 1e3, Qe = Math.min(Fe * p + fe, be);
        if (Qe !== be) {
          let qe = Qe / I % 1 * I;
          this._updatePositionInState(qe + l[0]), Ge();
        } else this._updatePositionInState(l[1]), this._playing = !1, Ae(), z.resolve(!0);
      }, Ae = () => {
        J.stop(), J.disconnect();
      };
      this._stopPlayCallback = () => {
        Ae(), S.offThisOrNextTick(Me), S.offNextTick(Me), this._playing && z.resolve(!1);
      };
      const Ge = () => S.onNextTick(Me);
      return S.onThisOrNextTick(Me), z.promise;
    }
  }, Tf = Ft, Jc = 0;
  function as(a) {
    var l;
    const p = new Tf.Ticker({ onActive() {
      var S;
      (S = a == null ? void 0 : a.start) == null || S.call(a);
    }, onDormant() {
      var S;
      (S = a == null ? void 0 : a.stop) == null || S.call(a);
    } }), g = { tick: (S) => {
      p.tick(S);
    }, id: Jc++, name: (l = a == null ? void 0 : a.name) != null ? l : "CustomRafDriver-".concat(Jc), type: "Theatre_RafDriver_PublicAPI" };
    return ae(g, { type: "Theatre_RafDriver_PrivateAPI", publicApi: g, ticker: p, start: a == null ? void 0 : a.start, stop: a == null ? void 0 : a.stop }), g;
  }
  function $c() {
    return La || function(a) {
      if (La) throw new Error("`setCoreRafDriver()` is already called.");
      La = B(a);
    }(function() {
      let a = null;
      const l = as({ name: "DefaultCoreRafDriver", start: () => {
        if (typeof window < "u") {
          const p = (g) => {
            l.tick(g), a = window.requestAnimationFrame(p);
          };
          a = window.requestAnimationFrame(p);
        } else l.tick(0), setTimeout(() => l.tick(1), 0);
      }, stop: () => {
        typeof window < "u" && a !== null && window.cancelAnimationFrame(a);
      } });
      return l;
    }()), La;
  }
  function Qc() {
    return $c().ticker;
  }
  var Af = class {
    get type() {
      return "Theatre_Sequence_PublicAPI";
    }
    constructor(a) {
      ae(this, a);
    }
    play(a) {
      const l = B(this);
      if (l._project.isReady()) {
        const p = a != null && a.rafDriver ? B(a.rafDriver).ticker : Qc();
        return l.play(a ?? {}, p);
      }
      {
        process.env.NODE_ENV !== "production" && ui.warning("Sequence can't be played", "You seem to have called `sequence.play()` before the project has finished loading.\n\nThis would **not** a problem in production when using `@theatre/core`, since Theatre.js loads instantly in core mode. However, when using `@theatre/studio`, it takes a few milliseconds for it to load your project's state, before which your sequences cannot start playing.\n\nTo fix this, simply defer calling `sequence.play()` until after the project is loaded, like this:\n\n```\nproject.ready.then(() => {\n  sequence.play()\n})\n```", [{ url: "https://www.theatrejs.com/docs/0.5/api/core#project.ready", title: "Project.ready" }]);
        const p = Ti();
        return p.resolve(!0), p.promise;
      }
    }
    pause() {
      B(this).pause();
    }
    get position() {
      return B(this).position;
    }
    set position(a) {
      B(this).position = a;
    }
    __experimental_getKeyframes(a) {
      return B(this).getKeyframesOfSimpleProp(a);
    }
    async attachAudio(a) {
      const { audioContext: l, destinationNode: p, decodedBuffer: g, gainNode: S } = await async function(I) {
        function z() {
          if (I.audioContext) return Promise.resolve(I.audioContext);
          const Oe = new AudioContext();
          return Oe.state === "running" || typeof window > "u" ? Promise.resolve(Oe) : new Promise((Fe) => {
            const Qe = () => {
              Oe.resume().catch((Lt) => {
                console.error(Lt);
              });
            }, qe = ["mousedown", "keydown", "touchstart"], ct = { capture: !0, passive: !1 };
            qe.forEach((Lt) => {
              window.addEventListener(Lt, Qe, ct);
            }), Oe.addEventListener("statechange", () => {
              Oe.state === "running" && (qe.forEach((Lt) => {
                window.removeEventListener(Lt, Qe, ct);
              }), Fe(Oe));
            });
          });
        }
        async function J() {
          if (I.source instanceof AudioBuffer) return I.source;
          const Oe = Ti();
          if (typeof I.source != "string") throw new Error("Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer.");
          let Fe, Qe;
          try {
            Fe = await fetch(I.source);
          } catch (ct) {
            throw console.error(ct), new Error("Could not fetch '".concat(I.source, "'. Network error logged above."));
          }
          try {
            Qe = await Fe.arrayBuffer();
          } catch (ct) {
            throw console.error(ct), new Error("Could not read '".concat(I.source, "' as an arrayBuffer."));
          }
          let qe;
          (await ie).decodeAudioData(Qe, Oe.resolve, Oe.reject);
          try {
            qe = await Oe.promise;
          } catch (ct) {
            throw console.error(ct), new Error("Could not decode ".concat(I.source, " as an audio file."));
          }
          return qe;
        }
        const ie = z(), fe = J(), [be, Me] = await Promise.all([ie, fe]), Ae = I.destinationNode || be.destination, Ge = be.createGain();
        return Ge.connect(Ae), { audioContext: be, decodedBuffer: Me, gainNode: Ge, destinationNode: Ae };
      }(a), P = new wf(g, l, S);
      return B(this).replacePlaybackController(P), { audioContext: l, destinationNode: p, decodedBuffer: g, gainNode: S };
    }
    get pointer() {
      return B(this).pointer;
    }
  }, eh, Pf = (eh = "Theatre_SheetObject", (a) => typeof a == "object" && !!a && a.type === eh), os = ["normal", "reverse", "alternate", "alternateReverse"], Rf = class {
    constructor(a, l, p, g, S) {
      this._project = a, this._sheet = l, this._lengthD = p, this._subUnitsPerUnitD = g, E(this, "address"), E(this, "publicApi"), E(this, "_playbackControllerBox"), E(this, "_prismOfStatePointer"), E(this, "_positionD"), E(this, "_positionFormatterD"), E(this, "_playableRangeD"), E(this, "pointer", (0, bf.pointer)({ root: this, path: [] })), E(this, "$$isPointerToPrismProvider", !0), E(this, "_logger"), E(this, "closestGridPosition", (P) => {
        const I = 1 / this.subUnitsPerUnit;
        return parseFloat((Math.round(P / I) * I).toFixed(3));
      }), this._logger = a._logger.named("Sheet", l.address.sheetId).named("Instance", l.address.sheetInstanceId), this.address = M(y({}, this._sheet.address), { sequenceName: "default" }), this.publicApi = new Af(this), this._playbackControllerBox = new xf.Atom(S ?? new Mf()), this._prismOfStatePointer = (0, Qt.prism)(() => this._playbackControllerBox.prism.getValue().statePointer), this._positionD = (0, Qt.prism)(() => {
        const P = this._prismOfStatePointer.getValue();
        return (0, Qt.val)(P.position);
      }), this._positionFormatterD = (0, Qt.prism)(() => {
        const P = (0, Qt.val)(this._subUnitsPerUnitD);
        return new Cf(P);
      });
    }
    get type() {
      return "Theatre_Sequence";
    }
    pointerToPrism(a) {
      const { path: l } = (0, Zc.getPointerParts)(a);
      if (l.length === 0) return (0, Qt.prism)(() => ({ length: (0, Qt.val)(this.pointer.length), playing: (0, Qt.val)(this.pointer.playing), position: (0, Qt.val)(this.pointer.position), subUnitsPerUnit: (0, Qt.val)(this.pointer.subUnitsPerUnit) }));
      if (l.length > 1) return (0, Qt.prism)(() => {
      });
      const [p] = l;
      return p === "length" ? this._lengthD : p === "subUnitsPerUnit" ? this._subUnitsPerUnitD : p === "position" ? this._positionD : (0, Qt.prism)(p === "playing" ? () => (0, Qt.val)(this._prismOfStatePointer.getValue().playing) : () => {
      });
    }
    getKeyframesOfSimpleProp(a) {
      const { path: l, root: p } = (0, Zc.getPointerParts)(a);
      if (!Pf(p)) throw new Pt("Argument prop must be a pointer to a SheetObject property");
      const g = (0, Qt.val)(this._project.pointers.historic.sheetsById[this._sheet.address.sheetId].sequence.tracksByObject[p.address.objectKey]);
      if (!g) return [];
      const { trackData: S, trackIdByPropPath: P } = g, I = P[_f(l)];
      if (!I) return [];
      const z = S[I];
      return z ? z.keyframes : [];
    }
    get positionFormatter() {
      return this._positionFormatterD.getValue();
    }
    get prismOfStatePointer() {
      return this._prismOfStatePointer;
    }
    get length() {
      return this._lengthD.getValue();
    }
    get positionPrism() {
      return this._positionD;
    }
    get position() {
      return this._playbackControllerBox.get().getCurrentPosition();
    }
    get subUnitsPerUnit() {
      return this._subUnitsPerUnitD.getValue();
    }
    get positionSnappedToGrid() {
      return this.closestGridPosition(this.position);
    }
    set position(a) {
      let l = a;
      this.pause(), process.env.NODE_ENV !== "production" && (typeof l != "number" && (console.error("value t in sequence.position = t must be a number. ".concat(typeof l, " given")), l = 0), l < 0 && (console.error("sequence.position must be a positive number. ".concat(l, " given")), l = 0)), l > this.length && (l = this.length);
      const p = this.length;
      this._playbackControllerBox.get().gotoPosition(l > p ? p : l);
    }
    getDurationCold() {
      return this._lengthD.getValue();
    }
    get playing() {
      return (0, Qt.val)(this._playbackControllerBox.get().statePointer.playing);
    }
    _makeRangeFromSequenceTemplate() {
      return (0, Qt.prism)(() => [0, (0, Qt.val)(this._lengthD)]);
    }
    playDynamicRange(a, l) {
      return this._playbackControllerBox.get().playDynamicRange(a, l);
    }
    async play(a, l) {
      const p = this.length, g = a && a.range ? a.range : [0, p];
      if (process.env.NODE_ENV !== "production") {
        if (typeof g[0] != "number" || g[0] < 0) throw new Pt("Argument conf.range[0] in sequence.play(conf) must be a positive number. ".concat(JSON.stringify(g[0]), " given."));
        if (g[0] >= p) throw new Pt("Argument conf.range[0] in sequence.play(conf) cannot be longer than the duration of the sequence, which is ".concat(p, "s. ").concat(JSON.stringify(g[0]), " given."));
        if (typeof g[1] != "number" || g[1] <= 0) throw new Pt("Argument conf.range[1] in sequence.play(conf) must be a number larger than zero. ".concat(JSON.stringify(g[1]), " given."));
        if (g[1] > p && (ui.warning("Couldn't play sequence in given range", "Your animation will still play until the end of the sequence, however the argument `conf.range[1]` given in `sequence.play(conf)` (".concat(JSON.stringify(g[1]), "s) is longer than the duration of the sequence (").concat(p, "s).\n\nTo fix this, either set `conf.range[1]` to be less the duration of the sequence, or adjust the sequence duration in the UI."), [{ url: "https://www.theatrejs.com/docs/latest/manual/sequences", title: "Sequences" }, { url: "https://www.theatrejs.com/docs/latest/manual/sequences", title: "Playback API" }]), g[1] = p), g[1] <= g[0]) throw new Pt("Argument conf.range[1] in sequence.play(conf) must be larger than conf.range[0]. ".concat(JSON.stringify(g), " given."));
      }
      const S = a && typeof a.iterationCount == "number" ? a.iterationCount : 1;
      if (process.env.NODE_ENV !== "production" && !(Number.isInteger(S) && S > 0) && S !== 1 / 0) throw new Pt("Argument conf.iterationCount in sequence.play(conf) must be an integer larger than 0. ".concat(JSON.stringify(S), " given."));
      const P = a && a.rate !== void 0 ? a.rate : 1;
      if (process.env.NODE_ENV !== "production") {
        if (typeof P != "number" || P === 0) throw new Pt("Argument conf.rate in sequence.play(conf) must be a number larger than 0. ".concat(JSON.stringify(P), " given."));
        if (P < 0) throw new Pt("Argument conf.rate in sequence.play(conf) must be a number larger than 0. ".concat(JSON.stringify(P), " given. If you want the animation to play backwards, try setting conf.direction to 'reverse' or 'alternateReverse'."));
      }
      const I = a && a.direction ? a.direction : "normal";
      if (process.env.NODE_ENV !== "production" && os.indexOf(I) === -1) throw new Pt("Argument conf.direction in sequence.play(conf) must be one of ".concat(JSON.stringify(os), ". ").concat(JSON.stringify(I), " given. ").concat(function(z, J, ie = "Did you mean ", fe = "?") {
        const be = (0, vf.default)(z, J, { threshold: 0.7 });
        return be ? ie + JSON.stringify(be) + fe : "";
      }(I, os)));
      return await this._play(S, [g[0], g[1]], P, I, l);
    }
    _play(a, l, p, g, S) {
      return this._playbackControllerBox.get().play(a, l, p, g, S);
    }
    pause() {
      this._playbackControllerBox.get().pause();
    }
    replacePlaybackController(a) {
      this.pause();
      const l = this._playbackControllerBox.get();
      this._playbackControllerBox.set(a);
      const p = l.getCurrentPosition();
      l.destroy(), a.gotoPosition(p);
    }
  }, Cf = class {
    constructor(a) {
      this._fps = a;
    }
    formatSubUnitForGrid(a) {
      const l = a % 1, p = 1 / this._fps;
      return Math.round(l / p) + "f";
    }
    formatFullUnitForGrid(a) {
      let l = a, p = "";
      l >= wr && (p += Math.floor(l / wr) + "h", l %= wr), l >= Gi && (p += Math.floor(l / Gi) + "m", l %= Gi), l >= ji && (p += Math.floor(l / ji) + "s", l %= ji);
      const g = 1 / this._fps;
      return l >= g && (p += Math.floor(l / g) + "f", l %= g), p.length === 0 ? "0s" : p;
    }
    formatForPlayhead(a) {
      let l = a, p = "";
      if (l >= wr) {
        const S = Math.floor(l / wr);
        p += ia(S.toString(), 2, "0") + "h", l %= wr;
      }
      if (l >= Gi) {
        const S = Math.floor(l / Gi);
        p += ia(S.toString(), 2, "0") + "m", l %= Gi;
      } else p.length > 0 && (p += "00m");
      if (l >= ji) {
        const S = Math.floor(l / ji);
        p += ia(S.toString(), 2, "0") + "s", l %= ji;
      } else p += "00s";
      const g = 1 / this._fps;
      if (l >= g) {
        const S = Math.round(l / g);
        p += ia(S.toString(), 2, "0") + "f", l %= g;
      } else l / g > 0.98 ? (p += ia("1", 2, "0") + "f", l %= g) : p += "00f";
      return p.length === 0 ? "00s00f" : p;
    }
    formatBasic(a) {
      return a.toFixed(2) + "s";
    }
  }, ji = 1, Gi = 60 * ji, wr = 60 * Gi, ss = {};
  function th(a, l) {
    return a.length <= l ? a : a.substr(0, l - 3) + "...";
  }
  _(ss, { boolean: () => oh, compound: () => Ua, file: () => Lf, image: () => Nf, number: () => ah, rgba: () => zf, string: () => sh, stringLiteral: () => Wf });
  var hn = (a) => typeof a == "string" ? 'string("'.concat(th(a, 10), '")') : typeof a == "number" ? "number(".concat(th(String(a), 10), ")") : a === null ? "null" : a === void 0 ? "undefined" : typeof a == "boolean" ? String(a) : Array.isArray(a) ? "array" : typeof a == "object" ? "object" : "unknown";
  function ls(a) {
    return M(y({}, a), { toString() {
      return function(l, { removeAlphaIfOpaque: p = !1 } = {}) {
        const g = (255 * l.a | 256).toString(16).slice(1), S = (255 * l.r | 256).toString(16).slice(1) + (255 * l.g | 256).toString(16).slice(1) + (255 * l.b | 256).toString(16).slice(1) + (p && g === "ff" ? "" : g);
        return "#".concat(S);
      }(this, { removeAlphaIfOpaque: !0 });
    } });
  }
  function Df(a) {
    function l(p) {
      return p >= 31308e-7 ? 1.055 * p ** (1 / 2.4) - 0.055 : 12.92 * p;
    }
    return function(p) {
      return Object.fromEntries(Object.entries(p).map(([g, S]) => [g, nc(S, 0, 1)]));
    }({ r: l(a.r), g: l(a.g), b: l(a.b), a: a.a });
  }
  function nh(a) {
    function l(p) {
      return p >= 0.04045 ? ((p + 0.055) / 1.055) ** 2.4 : p / 12.92;
    }
    return { r: l(a.r), g: l(a.g), b: l(a.b), a: a.a };
  }
  function ih(a) {
    let l = 0.4122214708 * a.r + 0.5363325363 * a.g + 0.0514459929 * a.b, p = 0.2119034982 * a.r + 0.6806995451 * a.g + 0.1073969566 * a.b, g = 0.0883024619 * a.r + 0.2817188376 * a.g + 0.6299787005 * a.b, S = Math.cbrt(l), P = Math.cbrt(p), I = Math.cbrt(g);
    return { L: 0.2104542553 * S + 0.793617785 * P - 0.0040720468 * I, a: 1.9779984951 * S - 2.428592205 * P + 0.4505937099 * I, b: 0.0259040371 * S + 0.7827717662 * P - 0.808675766 * I, alpha: a.a };
  }
  var di = Symbol("TheatrePropType_Basic");
  function rh(a) {
    return typeof a == "object" && !!a && a[di] === "TheatrePropType";
  }
  function If(a) {
    if (typeof a == "number") return ah(a);
    if (typeof a == "boolean") return oh(a);
    if (typeof a == "string") return sh(a);
    if (typeof a == "object" && a) {
      if (rh(a)) return a;
      if (Ld(a)) return Ua(a);
      throw new Pt("This value is not a valid prop type: ".concat(hn(a)));
    }
    throw new Pt("This value is not a valid prop type: ".concat(hn(a)));
  }
  var Wi = (a, l) => {
    if (process.env.NODE_ENV !== "production") {
      if (l === void 0) return;
      if (typeof l != "object" || l === null) throw new Error("opts in ".concat(a, " must either be undefined or an object."));
      if (Object.prototype.hasOwnProperty.call(l, "label")) {
        const { label: p } = l;
        if (typeof p != "string") throw new Error("opts.label in ".concat(a, " should be a string. ").concat(hn(p), " given."));
        if (p.trim().length !== p.length) throw new Error("opts.label in ".concat(a, ' should not start/end with whitespace. "').concat(p, '" given.'));
        if (p.length === 0) throw new Error("opts.label in ".concat(a, " should not be an empty string. If you wish to have no label, remove opts.label from opts."));
      }
    }
  }, Ua = (a, l = {}) => {
    Wi("t.compound(props, opts)", l);
    const p = function(S) {
      const P = {};
      if (process.env.NODE_ENV !== "production" && (typeof S != "object" || !S)) throw new Pt("t.compound() expects an object, like: {x: 10}. ".concat(hn(S), " given."));
      for (const I of Object.keys(S)) {
        if (process.env.NODE_ENV !== "production") {
          if (typeof I != "string") throw new Pt("t.compound()'s keys must be all strings. ".concat(hn(I), " given."));
          if (I.length === 0 || !I.match(/^\w+$/)) throw new Pt("compound key ".concat(hn(I), " is invalid. The keys must be alphanumeric and start with a letter."));
          if (I.length > 64) throw new Pt("compound key ".concat(hn(I), " is too long."));
        }
        const z = S[I];
        rh(z) ? P[I] = z : P[I] = If(z);
      }
      return P;
    }(a), g = /* @__PURE__ */ new WeakMap();
    return { type: "compound", props: p, valueType: null, [di]: "TheatrePropType", label: l.label, default: $p(p, (S) => S.default), deserializeAndSanitize: (S) => {
      if (typeof S != "object" || !S) return;
      if (g.has(S)) return g.get(S);
      const P = {};
      let I = !1;
      for (const [z, J] of Object.entries(p)) if (Object.prototype.hasOwnProperty.call(S, z)) {
        const ie = J.deserializeAndSanitize(S[z]);
        ie != null && (I = !0, P[z] = ie);
      }
      return g.set(S, P), I ? P : void 0;
    } };
  }, Lf = (a, l = {}) => (process.env.NODE_ENV !== "production" && Wi("t.file(defaultValue, opts)", l), { type: "file", default: { type: "file", id: a }, valueType: null, [di]: "TheatrePropType", label: l.label, interpolate: (p, g, S) => {
    var P;
    return { type: "file", id: ((P = l.interpolate) != null ? P : ra)(p.id, g.id, S) };
  }, deserializeAndSanitize: Uf }), Uf = (a) => {
    if (!a) return;
    let l = !0;
    return typeof a.id == "string" || [null, void 0].includes(a.id) || (l = !1), a.type !== "file" && (l = !1), l ? a : void 0;
  }, Nf = (a, l = {}) => (process.env.NODE_ENV !== "production" && Wi("t.image(defaultValue, opts)", l), { type: "image", default: { type: "image", id: a }, valueType: null, [di]: "TheatrePropType", label: l.label, interpolate: (p, g, S) => {
    var P;
    return { type: "image", id: ((P = l.interpolate) != null ? P : ra)(p.id, g.id, S) };
  }, deserializeAndSanitize: Of }), Of = (a) => {
    if (!a) return;
    let l = !0;
    return typeof a.id == "string" || [null, void 0].includes(a.id) || (l = !1), a.type !== "image" && (l = !1), l ? a : void 0;
  }, ah = (a, l = {}) => {
    var p;
    if (process.env.NODE_ENV !== "production") {
      if (Wi("t.number(defaultValue, opts)", l), typeof a != "number" || !isFinite(a)) throw new Error("Argument defaultValue in t.number(defaultValue) must be a number. ".concat(hn(a), " given."));
      if (typeof l == "object" && l !== null) {
        if (Object.prototype.hasOwnProperty.call(l, "range")) {
          if (!Array.isArray(l.range)) throw new Error("opts.range in t.number(defaultValue, opts) must be a tuple of two numbers. ".concat(hn(l.range), " given."));
          if (l.range.length !== 2) throw new Error("opts.range in t.number(defaultValue, opts) must have two elements. ".concat(l.range.length, " given."));
          if (!l.range.every((g) => typeof g == "number" && !isNaN(g))) throw new Error("opts.range in t.number(defaultValue, opts) must be a tuple of two numbers.");
          if (l.range[0] >= l.range[1]) throw new Error("opts.range[0] in t.number(defaultValue, opts) must be smaller than opts.range[1]. Given: ".concat(JSON.stringify(l.range)));
        }
        if (Object.prototype.hasOwnProperty.call(l, "nudgeMultiplier") && (typeof l.nudgeMultiplier != "number" || !isFinite(l.nudgeMultiplier))) throw new Error("opts.nudgeMultiplier in t.number(defaultValue, opts) must be a finite number. ".concat(hn(l.nudgeMultiplier), " given."));
        if (Object.prototype.hasOwnProperty.call(l, "nudgeFn") && typeof l.nudgeFn != "function") throw new Error("opts.nudgeFn in t.number(defaultValue, opts) must be a function. ".concat(hn(l.nudgeFn), " given."));
      }
    }
    return M(y({ type: "number", valueType: 0, default: a, [di]: "TheatrePropType" }, l || {}), { label: l.label, nudgeFn: (p = l.nudgeFn) != null ? p : Xf, nudgeMultiplier: typeof l.nudgeMultiplier == "number" ? l.nudgeMultiplier : void 0, interpolate: kf, deserializeAndSanitize: Ff(l.range) });
  }, Ff = (a) => a ? (l) => {
    if (typeof l == "number" && isFinite(l)) return nc(l, a[0], a[1]);
  } : Bf, Bf = (a) => typeof a == "number" && isFinite(a) ? a : void 0, kf = (a, l, p) => a + p * (l - a), zf = (a = { r: 0, g: 0, b: 0, a: 1 }, l = {}) => {
    if (process.env.NODE_ENV !== "production") {
      Wi("t.rgba(defaultValue, opts)", l);
      let g = !0;
      for (const S of ["r", "g", "b", "a"]) Object.prototype.hasOwnProperty.call(a, S) && typeof a[S] == "number" || (g = !1);
      if (!g) throw new Error("Argument defaultValue in t.rgba(defaultValue) must be of the shape { r: number; g: number, b: number, a: number; }.");
    }
    const p = {};
    for (const g of ["r", "g", "b", "a"]) p[g] = Math.min(Math.max(a[g], 0), 1);
    return { type: "rgba", valueType: null, default: ls(p), [di]: "TheatrePropType", label: l.label, interpolate: Hf, deserializeAndSanitize: Vf };
  }, Vf = (a) => {
    if (!a) return;
    let l = !0;
    for (const g of ["r", "g", "b", "a"]) Object.prototype.hasOwnProperty.call(a, g) && typeof a[g] == "number" || (l = !1);
    if (!l) return;
    const p = {};
    for (const g of ["r", "g", "b", "a"]) p[g] = Math.min(Math.max(a[g], 0), 1);
    return ls(p);
  }, Hf = (a, l, p) => {
    const g = ih(nh(a)), S = ih(nh(l)), P = Df(function(I) {
      let z = I.L + 0.3963377774 * I.a + 0.2158037573 * I.b, J = I.L - 0.1055613458 * I.a - 0.0638541728 * I.b, ie = I.L - 0.0894841775 * I.a - 1.291485548 * I.b, fe = z * z * z, be = J * J * J, Me = ie * ie * ie;
      return { r: 4.0767416621 * fe - 3.3077115913 * be + 0.2309699292 * Me, g: -1.2684380046 * fe + 2.6097574011 * be - 0.3413193965 * Me, b: -0.0041960863 * fe - 0.7034186147 * be + 1.707614701 * Me, a: I.alpha };
    }({ L: (1 - p) * g.L + p * S.L, a: (1 - p) * g.a + p * S.a, b: (1 - p) * g.b + p * S.b, alpha: (1 - p) * g.alpha + p * S.alpha }));
    return ls(P);
  }, oh = (a, l = {}) => {
    var p;
    if (process.env.NODE_ENV !== "production" && (Wi("t.boolean(defaultValue, opts)", l), typeof a != "boolean")) throw new Error("defaultValue in t.boolean(defaultValue) must be a boolean. ".concat(hn(a), " given."));
    return { type: "boolean", default: a, valueType: null, [di]: "TheatrePropType", label: l.label, interpolate: (p = l.interpolate) != null ? p : ra, deserializeAndSanitize: jf };
  }, jf = (a) => typeof a == "boolean" ? a : void 0;
  function ra(a) {
    return a;
  }
  var sh = (a, l = {}) => {
    var p;
    if (process.env.NODE_ENV !== "production" && (Wi("t.string(defaultValue, opts)", l), typeof a != "string")) throw new Error("defaultValue in t.string(defaultValue) must be a string. ".concat(hn(a), " given."));
    return { type: "string", default: a, valueType: null, [di]: "TheatrePropType", label: l.label, interpolate: (p = l.interpolate) != null ? p : ra, deserializeAndSanitize: Gf };
  };
  function Gf(a) {
    return typeof a == "string" ? a : void 0;
  }
  function Wf(a, l, p = {}) {
    var g, S;
    return { type: "stringLiteral", default: a, valuesAndLabels: y({}, l), [di]: "TheatrePropType", valueType: null, as: (g = p.as) != null ? g : "menu", label: p.label, interpolate: (S = p.interpolate) != null ? S : ra, deserializeAndSanitize(P) {
      if (typeof P == "string") return Object.prototype.hasOwnProperty.call(l, P) ? P : void 0;
    } };
  }
  var Xf = ({ config: a, deltaX: l, deltaFraction: p, magnitude: g }) => {
    var S;
    const { range: P } = a;
    return a.nudgeMultiplier || !P || P.includes(1 / 0) || P.includes(-1 / 0) ? l * g * ((S = a.nudgeMultiplier) != null ? S : 1) : p * (P[1] - P[0]) * g;
  };
  function Na(a, l) {
    const p = a.replace(/^[\s\/]*/, "").replace(/[\s\/]*$/, "").replace(/\s*\/\s*/g, " / ");
    if (process.env.NODE_ENV !== "development") return p;
    const g = ((S) => {
      if (typeof S != "string") return "it is not a string. (it is a ".concat(typeof S, ")");
      const P = S.split(/\//);
      if (P.length === 0) return "it is empty.";
      for (let I = 0; I < P.length; I++) {
        const z = P[I].trim();
        if (z.length === 0) return "the component #".concat(I + 1, " is empty.");
        if (z.length > 64) return "the component '".concat(z, "' must have 64 characters or less.");
      }
    })(p);
    if (g) throw new Pt("The path in ".concat(l, "(").concat(typeof a == "string" ? '"'.concat(a, '"') : "", ") is invalid because ").concat(g));
    return a !== p && ui.warning("Invalid path provided to object", "The path in `".concat(l, '("').concat(a, '")` was sanitized to `"').concat(p, `"\`.

`) + "Please replace the path with the sanitized one, otherwise it will likely break in the future.", [{ url: "https://www.theatrejs.com/docs/latest/manual/objects#creating-sheet-objects", title: "Sheet Objects" }, { url: "https://www.theatrejs.com/docs/latest/api/core#sheet.object", title: "API" }]), p;
  }
  var lh, Tr, qf = w(te()), cs = /* @__PURE__ */ new WeakMap(), Yf = class {
    get type() {
      return "Theatre_Sheet_PublicAPI";
    }
    constructor(a) {
      ae(this, a);
    }
    object(a, l, p) {
      const g = B(this), S = Na(a, "sheet.object"), P = g.getObject(S), I = p == null ? void 0 : p.__actions__THIS_API_IS_UNSTABLE_AND_WILL_CHANGE_IN_THE_NEXT_VERSION;
      if (P) {
        if (process.env.NODE_ENV !== "production") {
          const z = cs.get(P);
          if (z && !(0, qf.default)(l, z)) {
            if ((p == null ? void 0 : p.reconfigure) === !0) {
              const J = Ua(l);
              return P.template.reconfigure(J), cs.set(P, l), P.publicApi;
            }
            throw new Error('You seem to have called sheet.object("'.concat(a, '", config) twice, with different values for `config`. ') + `This is disallowed because changing the config of an object on the fly would make it difficult to reason about.

` + 'You can fix this by either re-using the existing object, or calling sheet.object("'.concat(a, `", config) with the same config.

`) + "If you mean to reconfigure the object's config, set `{reconfigure: true}` in sheet.object(\"".concat(a, '", config, {reconfigure: true})'));
          }
        }
        return I && P.template._temp_setActions(I), P.publicApi;
      }
      {
        const z = Ua(l), J = g.createObject(S, null, z, I);
        return process.env.NODE_ENV !== "production" && cs.set(J, l), J.publicApi;
      }
    }
    __experimental_getExistingObject(a) {
      const l = B(this), p = Na(a, "sheet.object"), g = l.getObject(p);
      return g == null ? void 0 : g.publicApi;
    }
    get sequence() {
      return B(this).getSequence().publicApi;
    }
    get project() {
      return B(this).project.publicApi;
    }
    get address() {
      return y({}, B(this).address);
    }
    detachObject(a) {
      const l = B(this), p = Na(a, 'sheet.deleteObject("'.concat(a, '")'));
      if (!l.getObject(p)) return ui.warning(`Couldn't delete object "`.concat(p, '"'), 'There is no object with key "'.concat(p, `".

To fix this, make sure you are calling \`sheet.deleteObject("`).concat(p, '")` with the correct key.')), void console.warn('Object key "'.concat(p, '" does not exist.'));
      l.deleteObject(p);
    }
  }, aa = Ft, Kf = class {
    constructor(a, l) {
      this.template = a, this.instanceId = l, E(this, "_objects", new aa.Atom({})), E(this, "_sequence"), E(this, "address"), E(this, "publicApi"), E(this, "project"), E(this, "objectsP", this._objects.pointer), E(this, "type", "Theatre_Sheet"), E(this, "_logger"), this._logger = a.project._logger.named("Sheet", l), this._logger._trace("creating sheet"), this.project = a.project, this.address = M(y({}, a.address), { sheetInstanceId: this.instanceId }), this.publicApi = new Yf(this);
    }
    createObject(a, l, p, g = {}) {
      const S = this.template.getObjectTemplate(a, l, p, g).createInstance(this, l, p);
      return this._objects.setByPointer((P) => P[a], S), S;
    }
    getObject(a) {
      return this._objects.get()[a];
    }
    deleteObject(a) {
      this._objects.reduce((l) => {
        const p = y({}, l);
        return delete p[a], p;
      });
    }
    getSequence() {
      if (!this._sequence) {
        const a = (0, aa.prism)(() => {
          const p = (0, aa.val)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length);
          return Zf(p);
        }), l = (0, aa.prism)(() => {
          const p = (0, aa.val)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit);
          return Jf(p);
        });
        this._sequence = new Rf(this.template.project, this, a, l);
      }
      return this._sequence;
    }
  }, Zf = (a) => typeof a == "number" && isFinite(a) && a > 0 ? a : 10, Jf = (a) => typeof a == "number" && Jp(a) && a >= 1 && a <= 1e3 ? a : 30, $f = class {
    constructor(a, l) {
      this.project = a, E(this, "type", "Theatre_SheetTemplate"), E(this, "address"), E(this, "_instances", new Kc.Atom({})), E(this, "instancesP", this._instances.pointer), E(this, "_objectTemplates", new Kc.Atom({})), E(this, "objectTemplatesP", this._objectTemplates.pointer), this.address = M(y({}, a.address), { sheetId: l });
    }
    getInstance(a) {
      let l = this._instances.get()[a];
      return l || (l = new Kf(this, a), this._instances.setByPointer((p) => p[a], l)), l;
    }
    getObjectTemplate(a, l, p, g) {
      let S = this._objectTemplates.get()[a];
      return S || (S = new mf(this, a, l, p, g), this._objectTemplates.setByPointer((P) => P[a], S)), S;
    }
  }, hs = Ft, ch = Ft, Qf = (a) => new Promise((l) => setTimeout(l, a));
  function Zt(a) {
    for (var l = arguments.length, p = Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++) p[g - 1] = arguments[g];
    if (process.env.NODE_ENV !== "production") {
      var S = am[a], P = S ? typeof S == "function" ? S.apply(null, p) : S : "unknown error nr: " + a;
      throw Error("[Immer] " + P);
    }
    throw Error("[Immer] minified error nr: " + a + (p.length ? " " + p.map(function(I) {
      return "'" + I + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function Xi(a) {
    return !!a && !!a[pn];
  }
  function qi(a) {
    return !!a && (function(l) {
      if (!l || typeof l != "object") return !1;
      var p = Object.getPrototypeOf(l);
      if (p === null) return !0;
      var g = Object.hasOwnProperty.call(p, "constructor") && p.constructor;
      return g === Object || typeof g == "function" && Function.toString.call(g) === om;
    }(a) || Array.isArray(a) || !!a[vh] || !!a.constructor[vh] || ds(a) || ps(a));
  }
  function oa(a, l, p) {
    p === void 0 && (p = !1), Ar(a) === 0 ? (p ? Object.keys : ws)(a).forEach(function(g) {
      p && typeof g == "symbol" || l(g, a[g], a);
    }) : a.forEach(function(g, S) {
      return l(S, g, a);
    });
  }
  function Ar(a) {
    var l = a[pn];
    return l ? l.i > 3 ? l.i - 4 : l.i : Array.isArray(a) ? 1 : ds(a) ? 2 : ps(a) ? 3 : 0;
  }
  function us(a, l) {
    return Ar(a) === 2 ? a.has(l) : Object.prototype.hasOwnProperty.call(a, l);
  }
  function hh(a, l, p) {
    var g = Ar(a);
    g === 2 ? a.set(l, p) : g === 3 ? (a.delete(l), a.add(p)) : a[l] = p;
  }
  function ds(a) {
    return im && a instanceof Map;
  }
  function ps(a) {
    return rm && a instanceof Set;
  }
  function Yi(a) {
    return a.o || a.t;
  }
  function fs(a) {
    if (Array.isArray(a)) return Array.prototype.slice.call(a);
    var l = sm(a);
    delete l[pn];
    for (var p = ws(l), g = 0; g < p.length; g++) {
      var S = p[g], P = l[S];
      P.writable === !1 && (P.writable = !0, P.configurable = !0), (P.get || P.set) && (l[S] = { configurable: !0, writable: !0, enumerable: P.enumerable, value: a[S] });
    }
    return Object.create(Object.getPrototypeOf(a), l);
  }
  function ms(a, l) {
    return l === void 0 && (l = !1), gs(a) || Xi(a) || !qi(a) || (Ar(a) > 1 && (a.set = a.add = a.clear = a.delete = em), Object.freeze(a), l && oa(a, function(p, g) {
      return ms(g, !0);
    }, !0)), a;
  }
  function em() {
    Zt(2);
  }
  function gs(a) {
    return a == null || typeof a != "object" || Object.isFrozen(a);
  }
  function pi(a) {
    var l = lm[a];
    return l || Zt(18, a), l;
  }
  function uh() {
    return process.env.NODE_ENV === "production" || Tr || Zt(0), Tr;
  }
  function _s(a, l) {
    l && (pi("Patches"), a.u = [], a.s = [], a.v = l);
  }
  function Oa(a) {
    vs(a), a.p.forEach(tm), a.p = null;
  }
  function vs(a) {
    a === Tr && (Tr = a.l);
  }
  function dh(a) {
    return Tr = { p: [], l: Tr, h: a, m: !0, _: 0 };
  }
  function tm(a) {
    var l = a[pn];
    l.i === 0 || l.i === 1 ? l.j() : l.O = !0;
  }
  function ys(a, l) {
    l._ = l.p.length;
    var p = l.p[0], g = a !== void 0 && a !== p;
    return l.h.g || pi("ES5").S(l, a, g), g ? (p[pn].P && (Oa(l), Zt(4)), qi(a) && (a = Fa(l, a), l.l || Ba(l, a)), l.u && pi("Patches").M(p[pn], a, l.u, l.s)) : a = Fa(l, p, []), Oa(l), l.u && l.v(l.u, l.s), a !== _h ? a : void 0;
  }
  function Fa(a, l, p) {
    if (gs(l)) return l;
    var g = l[pn];
    if (!g) return oa(l, function(P, I) {
      return ph(a, g, l, P, I, p);
    }, !0), l;
    if (g.A !== a) return l;
    if (!g.P) return Ba(a, g.t, !0), g.t;
    if (!g.I) {
      g.I = !0, g.A._--;
      var S = g.i === 4 || g.i === 5 ? g.o = fs(g.k) : g.o;
      oa(g.i === 3 ? new Set(S) : S, function(P, I) {
        return ph(a, g, S, P, I, p);
      }), Ba(a, S, !1), p && a.u && pi("Patches").R(g, p, a.u, a.s);
    }
    return g.o;
  }
  function ph(a, l, p, g, S, P) {
    if (process.env.NODE_ENV !== "production" && S === p && Zt(5), Xi(S)) {
      var I = Fa(a, S, P && l && l.i !== 3 && !us(l.D, g) ? P.concat(g) : void 0);
      if (hh(p, g, I), !Xi(I)) return;
      a.m = !1;
    }
    if (qi(S) && !gs(S)) {
      if (!a.h.F && a._ < 1) return;
      Fa(a, S), l && l.A.l || Ba(a, S);
    }
  }
  function Ba(a, l, p) {
    p === void 0 && (p = !1), a.h.F && a.m && ms(l, p);
  }
  function xs(a, l) {
    var p = a[pn];
    return (p ? Yi(p) : a)[l];
  }
  function fh(a, l) {
    if (l in a) for (var p = Object.getPrototypeOf(a); p; ) {
      var g = Object.getOwnPropertyDescriptor(p, l);
      if (g) return g;
      p = Object.getPrototypeOf(p);
    }
  }
  function bs(a) {
    a.P || (a.P = !0, a.l && bs(a.l));
  }
  function Ss(a) {
    a.o || (a.o = fs(a.t));
  }
  function Ms(a, l, p) {
    var g = ds(l) ? pi("MapSet").N(l, p) : ps(l) ? pi("MapSet").T(l, p) : a.g ? function(S, P) {
      var I = Array.isArray(S), z = { i: I ? 1 : 0, A: P ? P.A : uh(), P: !1, I: !1, D: {}, l: P, t: S, k: null, o: null, j: null, C: !1 }, J = z, ie = ka;
      I && (J = [z], ie = za);
      var fe = Proxy.revocable(J, ie), be = fe.revoke, Me = fe.proxy;
      return z.k = Me, z.j = be, Me;
    }(l, p) : pi("ES5").J(l, p);
    return (p ? p.A : uh()).p.push(g), g;
  }
  function nm(a) {
    return Xi(a) || Zt(22, a), function l(p) {
      if (!qi(p)) return p;
      var g, S = p[pn], P = Ar(p);
      if (S) {
        if (!S.P && (S.i < 4 || !pi("ES5").K(S))) return S.t;
        S.I = !0, g = mh(p, P), S.I = !1;
      } else g = mh(p, P);
      return oa(g, function(I, z) {
        S && function(J, ie) {
          return Ar(J) === 2 ? J.get(ie) : J[ie];
        }(S.t, I) === z || hh(g, I, l(z));
      }), P === 3 ? new Set(g) : g;
    }(a);
  }
  function mh(a, l) {
    switch (l) {
      case 2:
        return new Map(a);
      case 3:
        return Array.from(a);
    }
    return fs(a);
  }
  var Es = typeof Symbol < "u" && typeof Symbol("x") == "symbol", im = typeof Map < "u", rm = typeof Set < "u", gh = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", _h = Es ? Symbol.for("immer-nothing") : ((lh = {})["immer-nothing"] = !0, lh), vh = Es ? Symbol.for("immer-draftable") : "__$immer_draftable", pn = Es ? Symbol.for("immer-state") : "__$immer_state", am = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(a) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + a;
  }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(a) {
    return "Cannot apply patch, path doesn't resolve: " + a;
  }, 16: 'Sets cannot have "replace" patches.', 17: function(a) {
    return "Unsupported patch operation: " + a;
  }, 18: function(a) {
    return "The plugin for '" + a + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + a + "()` when initializing your application.";
  }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(a) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + a + "'";
  }, 22: function(a) {
    return "'current' expects a draft, got: " + a;
  }, 23: function(a) {
    return "'original' expects a draft, got: " + a;
  }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, om = "" + Object.prototype.constructor, ws = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(a) {
    return Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a));
  } : Object.getOwnPropertyNames, sm = Object.getOwnPropertyDescriptors || function(a) {
    var l = {};
    return ws(a).forEach(function(p) {
      l[p] = Object.getOwnPropertyDescriptor(a, p);
    }), l;
  }, lm = {}, ka = { get: function(a, l) {
    if (l === pn) return a;
    var p, g, S, P = Yi(a);
    if (!us(P, l)) return p = a, (S = fh(P, l)) ? "value" in S ? S.value : (g = S.get) === null || g === void 0 ? void 0 : g.call(p.k) : void 0;
    var I = P[l];
    return a.I || !qi(I) ? I : I === xs(a.t, l) ? (Ss(a), a.o[l] = Ms(a.A.h, I, a)) : I;
  }, has: function(a, l) {
    return l in Yi(a);
  }, ownKeys: function(a) {
    return Reflect.ownKeys(Yi(a));
  }, set: function(a, l, p) {
    var g = fh(Yi(a), l);
    if (g != null && g.set) return g.set.call(a.k, p), !0;
    if (!a.P) {
      var S = xs(Yi(a), l), P = S == null ? void 0 : S[pn];
      if (P && P.t === p) return a.o[l] = p, a.D[l] = !1, !0;
      if (function(I, z) {
        return I === z ? I !== 0 || 1 / I == 1 / z : I != I && z != z;
      }(p, S) && (p !== void 0 || us(a.t, l))) return !0;
      Ss(a), bs(a);
    }
    return a.o[l] === p && typeof p != "number" && (p !== void 0 || l in a.o) || (a.o[l] = p, a.D[l] = !0, !0);
  }, deleteProperty: function(a, l) {
    return xs(a.t, l) !== void 0 || l in a.t ? (a.D[l] = !1, Ss(a), bs(a)) : delete a.D[l], a.o && delete a.o[l], !0;
  }, getOwnPropertyDescriptor: function(a, l) {
    var p = Yi(a), g = Reflect.getOwnPropertyDescriptor(p, l);
    return g && { writable: !0, configurable: a.i !== 1 || l !== "length", enumerable: g.enumerable, value: p[l] };
  }, defineProperty: function() {
    Zt(11);
  }, getPrototypeOf: function(a) {
    return Object.getPrototypeOf(a.t);
  }, setPrototypeOf: function() {
    Zt(12);
  } }, za = {};
  oa(ka, function(a, l) {
    za[a] = function() {
      return arguments[0] = arguments[0][0], l.apply(this, arguments);
    };
  }), za.deleteProperty = function(a, l) {
    return process.env.NODE_ENV !== "production" && isNaN(parseInt(l)) && Zt(13), ka.deleteProperty.call(this, a[0], l);
  }, za.set = function(a, l, p) {
    return process.env.NODE_ENV !== "production" && l !== "length" && isNaN(parseInt(l)) && Zt(14), ka.set.call(this, a[0], l, p, a[0]);
  };
  var cm = function() {
    function a(p) {
      var g = this;
      this.g = gh, this.F = !0, this.produce = function(S, P, I) {
        if (typeof S == "function" && typeof P != "function") {
          var z = P;
          P = S;
          var J = g;
          return function(Ae) {
            var Ge = this;
            Ae === void 0 && (Ae = z);
            for (var Oe = arguments.length, Fe = Array(Oe > 1 ? Oe - 1 : 0), Qe = 1; Qe < Oe; Qe++) Fe[Qe - 1] = arguments[Qe];
            return J.produce(Ae, function(qe) {
              var ct;
              return (ct = P).call.apply(ct, [Ge, qe].concat(Fe));
            });
          };
        }
        var ie;
        if (typeof P != "function" && Zt(6), I !== void 0 && typeof I != "function" && Zt(7), qi(S)) {
          var fe = dh(g), be = Ms(g, S, void 0), Me = !0;
          try {
            ie = P(be), Me = !1;
          } finally {
            Me ? Oa(fe) : vs(fe);
          }
          return typeof Promise < "u" && ie instanceof Promise ? ie.then(function(Ae) {
            return _s(fe, I), ys(Ae, fe);
          }, function(Ae) {
            throw Oa(fe), Ae;
          }) : (_s(fe, I), ys(ie, fe));
        }
        if (!S || typeof S != "object")
          return (ie = P(S)) === _h ? void 0 : (ie === void 0 && (ie = S), g.F && ms(ie, !0), ie);
        Zt(21, S);
      }, this.produceWithPatches = function(S, P) {
        return typeof S == "function" ? function(J) {
          for (var ie = arguments.length, fe = Array(ie > 1 ? ie - 1 : 0), be = 1; be < ie; be++) fe[be - 1] = arguments[be];
          return g.produceWithPatches(J, function(Me) {
            return S.apply(void 0, [Me].concat(fe));
          });
        } : [g.produce(S, P, function(J, ie) {
          I = J, z = ie;
        }), I, z];
        var I, z;
      }, typeof (p == null ? void 0 : p.useProxies) == "boolean" && this.setUseProxies(p.useProxies), typeof (p == null ? void 0 : p.autoFreeze) == "boolean" && this.setAutoFreeze(p.autoFreeze);
    }
    var l = a.prototype;
    return l.createDraft = function(p) {
      qi(p) || Zt(8), Xi(p) && (p = nm(p));
      var g = dh(this), S = Ms(this, p, void 0);
      return S[pn].C = !0, vs(g), S;
    }, l.finishDraft = function(p, g) {
      var S = p && p[pn];
      process.env.NODE_ENV !== "production" && (S && S.C || Zt(9), S.I && Zt(10));
      var P = S.A;
      return _s(P, g), ys(void 0, P);
    }, l.setAutoFreeze = function(p) {
      this.F = p;
    }, l.setUseProxies = function(p) {
      p && !gh && Zt(20), this.g = p;
    }, l.applyPatches = function(p, g) {
      var S;
      for (S = g.length - 1; S >= 0; S--) {
        var P = g[S];
        if (P.path.length === 0 && P.op === "replace") {
          p = P.value;
          break;
        }
      }
      var I = pi("Patches").$;
      return Xi(p) ? I(p, g) : this.produce(p, function(z) {
        return I(z, g.slice(S + 1));
      });
    }, a;
  }(), bn = new cm();
  bn.produce, bn.produceWithPatches.bind(bn), bn.setAutoFreeze.bind(bn), bn.setUseProxies.bind(bn), bn.applyPatches.bind(bn), bn.createDraft.bind(bn), bn.finishDraft.bind(bn);
  var Ts = { currentProjectStateDefinitionVersion: "0.4.0" };
  async function hm(a, l, p) {
    await Qf(0), a.transaction(({ drafts: g }) => {
      var S;
      const P = l.address.projectId;
      function I() {
        g.ephemeral.coreByProject[P].loadingState = { type: "loaded" };
      }
      g.ephemeral.coreByProject[P] = { lastExportedObject: null, loadingState: { type: "loading" } }, g.ahistoric.coreByProject[P] = { ahistoricStuff: "" };
      const z = (Xi(J = g.historic) || Zt(23, J), (S = J[pn].t) == null ? void 0 : S.coreByProject[l.address.projectId]);
      var J, ie, fe;
      z ? p && z.revisionHistory.indexOf(p.revisionHistory[0]) == -1 ? (ie = p, g.ephemeral.coreByProject[P].loadingState = { type: "browserStateIsNotBasedOnDiskState", onDiskState: ie }) : I() : p ? (fe = p, g.ephemeral.coreByProject[P].loadingState = { type: "loaded" }, g.historic.coreByProject[P] = fe) : (g.ephemeral.coreByProject[P].loadingState = { type: "loaded" }, g.historic.coreByProject[P] = { sheetsById: {}, definitionVersion: Ts.currentProjectStateDefinitionVersion, revisionHistory: [] });
    });
  }
  function yh() {
  }
  function xh(a) {
    var l, p;
    const g = (l = a == null ? void 0 : a.logging) != null && l.internal ? (p = a.logging.min) != null ? p : 256 : 1 / 0, S = g <= 512, P = Hc(void 0, { _debug: g <= 128 ? console.debug.bind(console, "_coreLogger(TheatreInternalLogger) debug") : yh, _error: S ? console.error.bind(console, "_coreLogger(TheatreInternalLogger) error") : yh });
    if (a) {
      const { logger: I, logging: z } = a;
      I && P.configureLogger(I), z ? P.configureLogging(z) : P.configureLogging({ dev: process.env.NODE_ENV !== "production" });
    }
    return P.getLogger().named("Theatre");
  }
  var um = class {
    constructor(a, l = {}, p) {
      var g;
      this.config = l, this.publicApi = p, E(this, "pointers"), E(this, "_pointerProxies"), E(this, "address"), E(this, "_studioReadyDeferred"), E(this, "_assetStorageReadyDeferred"), E(this, "_readyPromise"), E(this, "_sheetTemplates", new ch.Atom({})), E(this, "sheetTemplatesP", this._sheetTemplates.pointer), E(this, "_studio"), E(this, "assetStorage"), E(this, "type", "Theatre_Project"), E(this, "_logger"), this._logger = xh({ logging: { dev: !0 } }).named("Project", a), this._logger.traceDev("creating project"), this.address = { projectId: a };
      const S = new ch.Atom({ ahistoric: { ahistoricStuff: "" }, historic: (g = l.state) != null ? g : { sheetsById: {}, definitionVersion: Ts.currentProjectStateDefinitionVersion, revisionHistory: [] }, ephemeral: { loadingState: { type: "loaded" }, lastExportedObject: null } });
      this._assetStorageReadyDeferred = Ti(), this.assetStorage = { getAssetUrl: (P) => {
        var I;
        return "".concat((I = l.assets) == null ? void 0 : I.baseUrl, "/").concat(P);
      }, createAsset: () => {
        throw new Error("Please wait for Project.ready to use assets.");
      } }, this._pointerProxies = { historic: new hs.PointerProxy(S.pointer.historic), ahistoric: new hs.PointerProxy(S.pointer.ahistoric), ephemeral: new hs.PointerProxy(S.pointer.ephemeral) }, this.pointers = { historic: this._pointerProxies.historic.pointer, ahistoric: this._pointerProxies.ahistoric.pointer, ephemeral: this._pointerProxies.ephemeral.pointer }, F.add(a, this), this._studioReadyDeferred = Ti(), this._readyPromise = Promise.all([this._studioReadyDeferred.promise, this._assetStorageReadyDeferred.promise]).then(() => {
      }), l.state ? setTimeout(() => {
        this._studio || (this._studioReadyDeferred.resolve(void 0), this._assetStorageReadyDeferred.resolve(void 0), this._logger._trace("ready deferred resolved with no state"));
      }, 0) : typeof window > "u" ? process.env.NODE_ENV === "production" && console.error('Argument config.state in Theatre.getProject("'.concat(a, '", config) is empty. ') + "You can safely ignore this message if you're developing a Next.js/Remix project in development mode. But if you are shipping to your end-users, then you need to set config.state, otherwise your project's state will be empty and nothing will animate. Learn more at https://www.theatrejs.com/docs/latest/manual/projects#state") : setTimeout(() => {
        if (!this._studio) throw new Error('Argument config.state in Theatre.getProject("'.concat(a, '", config) is empty. This is fine ') + "while you are using @theatre/core along with @theatre/studio. But since @theatre/studio " + 'is not loaded, the state of project "'.concat(a, `" will be empty.

`) + `To fix this, you need to add @theatre/studio into the bundle and export the project's state. Learn how to do that at https://www.theatrejs.com/docs/latest/manual/projects#state
`);
      }, 1e3);
    }
    attachToStudio(a) {
      if (this._studio) {
        if (this._studio !== a) throw new Error("Project ".concat(this.address.projectId, " is already attached to studio ").concat(this._studio.address.studioId));
        console.warn("Project ".concat(this.address.projectId, " is already attached to studio ").concat(this._studio.address.studioId));
      } else this._studio = a, a.initialized.then(async () => {
        var l;
        await hm(a, this, this.config.state), this._pointerProxies.historic.setPointer(a.atomP.historic.coreByProject[this.address.projectId]), this._pointerProxies.ahistoric.setPointer(a.atomP.ahistoric.coreByProject[this.address.projectId]), this._pointerProxies.ephemeral.setPointer(a.atomP.ephemeral.coreByProject[this.address.projectId]), await a.createAssetStorage(this, (l = this.config.assets) == null ? void 0 : l.baseUrl).then((p) => {
          this.assetStorage = p, this._assetStorageReadyDeferred.resolve(void 0);
        }), this._studioReadyDeferred.resolve(void 0);
      }).catch((l) => {
        throw console.error(l), l;
      });
    }
    get isAttachedToStudio() {
      return !!this._studio;
    }
    get ready() {
      return this._readyPromise;
    }
    isReady() {
      return this._studioReadyDeferred.status === "resolved" && this._assetStorageReadyDeferred.status === "resolved";
    }
    getOrCreateSheet(a, l = "default") {
      let p = this._sheetTemplates.get()[a];
      return p || (p = new $f(this, a), this._sheetTemplates.reduce((g) => M(y({}, g), { [a]: p }))), p.getInstance(l);
    }
  }, bh = (a, l, p) => typeof a != "string" ? "".concat(l, " must be a string. ").concat(hn(a), " given.") : a.trim().length !== a.length ? "".concat(l, " must not have leading or trailing spaces. '").concat(a, "' given.") : a.length < p[0] || a.length > p[1] ? "".concat(l, " must have between ").concat(p[0], " and ").concat(p[1], " characters. '").concat(a, "' given.") : void 0, dm = (a, l, p = !1) => {
    const g = bh(a, l, [3, 32]);
    if (typeof g == "string" && p) throw new Pt(g);
    return g;
  }, pm = class {
    get type() {
      return "Theatre_Project_PublicAPI";
    }
    constructor(a, l = {}) {
      ae(this, new um(a, l, this));
    }
    get ready() {
      return B(this).ready;
    }
    get isReady() {
      return B(this).isReady();
    }
    get address() {
      return y({}, B(this).address);
    }
    getAssetUrl(a) {
      if (this.isReady) return a.id ? B(this).assetStorage.getAssetUrl(a.id) : void 0;
      console.error("Calling `project.getAssetUrl()` before `project.ready` is resolved, will always return `undefined`. Either use `project.ready.then(() => project.getAssetUrl())` or `await project.ready` before calling `project.getAssetUrl()`.");
    }
    sheet(a, l = "default") {
      const p = Na(a, "project.sheet");
      return process.env.NODE_ENV !== "production" && ((g, S, P = !1) => {
        const I = bh(g, S, [1, 32]);
        if (typeof I == "string" && P) throw new Pt(I);
      })(l, "instanceId in project.sheet(sheetId, instanceId)", !0), B(this).getOrCreateSheet(p, l).publicApi;
    }
  }, fm = w(te()), Sh = Ft, As = Ft;
  function Mh(a, l = {}) {
    const p = F.get(a);
    if (p) {
      if (process.env.NODE_ENV !== "production" && !(0, fm.default)(l, p.config)) throw new Error('You seem to have called Theatre.getProject("'.concat(a, '", config) twice, with different config objects. ') + `This is disallowed because changing the config of a project on the fly can lead to hard-to-debug issues.

You can fix this by either calling Theatre.getProject() once per projectId, or calling it multiple times but with the exact same config.`);
      return p.publicApi;
    }
    const g = xh().named("Project", a);
    return process.env.NODE_ENV !== "production" && (dm(a, "projectName in Theatre.getProject(projectName)", !0), gm(a), g._debug("validated projectName", { projectName: a })), l.state ? process.env.NODE_ENV !== "production" ? (Eh(a, l.state), g._debug("shallow validated config.state on disk")) : (mm(a, l.state), g._debug("deep validated config.state on disk")) : g._debug("no config.state"), new pm(a, l);
  }
  var Eh = (a, l) => {
    if (Array.isArray(l) || l == null || l.definitionVersion !== Ts.currentProjectStateDefinitionVersion) throw new Pt("Error validating conf.state in Theatre.getProject(".concat(JSON.stringify(a), ", conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://www.theatrejs.com/docs/latest/manual/projects#state"));
  }, mm = (a, l) => {
    Eh(a, l);
  }, gm = (a) => {
    if (typeof a != "string") throw new Pt("Argument 'projectId' in `Theatre.getProject(projectId, ...)` must be a string. Instead, it was ".concat(hn(a), "."));
    const l = a.trim();
    if (l.length !== a.length) throw new Pt("Argument 'projectId' in `Theatre.getProject(\"".concat(a, '", ...)` should not have surrounding whitespace.'));
    if (l.length < 3) throw new Pt("Argument 'projectId' in `Theatre.getProject(\"".concat(a, '", ...)` should be at least 3 characters long.'));
  };
  function Ps(a, l, p) {
    const g = p ? B(p).ticker : Qc();
    if ((0, Sh.isPointer)(a))
      return (0, As.pointerToPrism)(a).onChange(g, l, !0);
    if ((0, As.isPrism)(a)) return a.onChange(g, l, !0);
    throw new Error("Called onChange(p) where p is neither a pointer nor a prism.");
  }
  function wh(a) {
    if ((0, Sh.isPointer)(a)) return (0, As.pointerToPrism)(a).getValue();
    throw new Error("Called val(p) where p is not a pointer.");
  }
  var _m = class {
    constructor() {
      E(this, "_studio");
    }
    get type() {
      return "Theatre_CoreBundle";
    }
    get version() {
      return "0.7.2";
    }
    getBitsForStudio(a, l) {
      if (this._studio) throw new Error("@theatre/core is already attached to @theatre/studio");
      this._studio = a, l({ projectsP: F.atom.pointer.projects, privateAPI: B, coreExports: Z, getCoreRafDriver: $c });
    }
  };
  (function() {
    if (typeof window > "u") return;
    const a = window[rs];
    if (a !== void 0) throw typeof a == "object" && a && typeof a.version == "string" ? new Error(`It seems that the module '@theatre/core' is loaded more than once. This could have two possible causes:
1. You might have two separate versions of Theatre.js in node_modules.
2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.

Note that it **is okay** to import '@theatre/core' multiple times. But those imports should point to the same module.`) : new Error("The variable window.".concat(rs, " seems to be already set by a module other than @theatre/core."));
    const l = new _m();
    window[rs] = l;
    const p = window.__TheatreJS_StudioBundle;
    p && p !== null && p.type === "Theatre_StudioBundle" && p.registerCoreBundle(l);
  })();
}(Uu, Uu.exports), function() {
  var i = 0.5 * (Math.sqrt(3) - 1), e = (3 - Math.sqrt(3)) / 6, t = 1 / 6, n = (Math.sqrt(5) - 1) / 4, r = (5 - Math.sqrt(5)) / 20;
  function o(h) {
    var c;
    c = typeof h == "function" ? h : h ? function() {
      var d, f = 0, m = 0, v = 0, y = 1, M = (d = 4022871197, function(_) {
        _ = _.toString();
        for (var T = 0; T < _.length; T++) {
          var w = 0.02519603282416938 * (d += _.charCodeAt(T));
          w -= d = w >>> 0, d = (w *= d) >>> 0, d += 4294967296 * (w -= d);
        }
        return 23283064365386963e-26 * (d >>> 0);
      });
      f = M(" "), m = M(" "), v = M(" ");
      for (var b = 0; b < arguments.length; b++) (f -= M(arguments[b])) < 0 && (f += 1), (m -= M(arguments[b])) < 0 && (m += 1), (v -= M(arguments[b])) < 0 && (v += 1);
      return M = null, function() {
        var _ = 2091639 * f + 23283064365386963e-26 * y;
        return f = m, m = v, v = _ - (y = 0 | _);
      };
    }(h) : Math.random, this.p = s(c), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
    for (var u = 0; u < 512; u++) this.perm[u] = this.p[255 & u], this.permMod12[u] = this.perm[u] % 12;
  }
  function s(h) {
    var c, u = new Uint8Array(256);
    for (c = 0; c < 256; c++) u[c] = c;
    for (c = 0; c < 255; c++) {
      var d = c + ~~(h() * (256 - c)), f = u[c];
      u[c] = u[d], u[d] = f;
    }
    return u;
  }
  o.prototype = { grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]), grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]), noise2D: function(h, c) {
    var u, d, f = this.permMod12, m = this.perm, v = this.grad3, y = 0, M = 0, b = 0, _ = (h + c) * i, T = Math.floor(h + _), w = Math.floor(c + _), E = (T + w) * e, U = h - (T - E), N = c - (w - E);
    U > N ? (u = 1, d = 0) : (u = 0, d = 1);
    var O = U - u + e, te = N - d + e, G = U - 1 + 2 * e, Z = N - 1 + 2 * e, re = 255 & T, F = 255 & w, V = 0.5 - U * U - N * N;
    if (V >= 0) {
      var B = 3 * f[re + m[F]];
      y = (V *= V) * V * (v[B] * U + v[B + 1] * N);
    }
    var ae = 0.5 - O * O - te * te;
    if (ae >= 0) {
      var ce = 3 * f[re + u + m[F + d]];
      M = (ae *= ae) * ae * (v[ce] * O + v[ce + 1] * te);
    }
    var ue = 0.5 - G * G - Z * Z;
    if (ue >= 0) {
      var ge = 3 * f[re + 1 + m[F + 1]];
      b = (ue *= ue) * ue * (v[ge] * G + v[ge + 1] * Z);
    }
    return 70 * (y + M + b);
  }, noise3D: function(h, c, u) {
    var d, f, m, v, y, M, b, _, T, w, E = this.permMod12, U = this.perm, N = this.grad3, O = (h + c + u) * (1 / 3), te = Math.floor(h + O), G = Math.floor(c + O), Z = Math.floor(u + O), re = (te + G + Z) * t, F = h - (te - re), V = c - (G - re), B = u - (Z - re);
    F >= V ? V >= B ? (y = 1, M = 0, b = 0, _ = 1, T = 1, w = 0) : F >= B ? (y = 1, M = 0, b = 0, _ = 1, T = 0, w = 1) : (y = 0, M = 0, b = 1, _ = 1, T = 0, w = 1) : V < B ? (y = 0, M = 0, b = 1, _ = 0, T = 1, w = 1) : F < B ? (y = 0, M = 1, b = 0, _ = 0, T = 1, w = 1) : (y = 0, M = 1, b = 0, _ = 1, T = 1, w = 0);
    var ae = F - y + t, ce = V - M + t, ue = B - b + t, ge = F - _ + 2 * t, Ee = V - T + 2 * t, xe = B - w + 2 * t, le = F - 1 + 0.5, de = V - 1 + 0.5, Se = B - 1 + 0.5, Te = 255 & te, L = 255 & G, A = 255 & Z, j = 0.6 - F * F - V * V - B * B;
    if (j < 0) d = 0;
    else {
      var Q = 3 * E[Te + U[L + U[A]]];
      d = (j *= j) * j * (N[Q] * F + N[Q + 1] * V + N[Q + 2] * B);
    }
    var W = 0.6 - ae * ae - ce * ce - ue * ue;
    if (W < 0) f = 0;
    else {
      var q = 3 * E[Te + y + U[L + M + U[A + b]]];
      f = (W *= W) * W * (N[q] * ae + N[q + 1] * ce + N[q + 2] * ue);
    }
    var D = 0.6 - ge * ge - Ee * Ee - xe * xe;
    if (D < 0) m = 0;
    else {
      var K = 3 * E[Te + _ + U[L + T + U[A + w]]];
      m = (D *= D) * D * (N[K] * ge + N[K + 1] * Ee + N[K + 2] * xe);
    }
    var $ = 0.6 - le * le - de * de - Se * Se;
    if ($ < 0) v = 0;
    else {
      var _e = 3 * E[Te + 1 + U[L + 1 + U[A + 1]]];
      v = ($ *= $) * $ * (N[_e] * le + N[_e + 1] * de + N[_e + 2] * Se);
    }
    return 32 * (d + f + m + v);
  }, noise4D: function(h, c, u, d) {
    var f, m, v, y, M, b, _, T, w, E, U, N, O, te, G, Z, re, F = this.perm, V = this.grad4, B = (h + c + u + d) * n, ae = Math.floor(h + B), ce = Math.floor(c + B), ue = Math.floor(u + B), ge = Math.floor(d + B), Ee = (ae + ce + ue + ge) * r, xe = h - (ae - Ee), le = c - (ce - Ee), de = u - (ue - Ee), Se = d - (ge - Ee), Te = 0, L = 0, A = 0, j = 0;
    xe > le ? Te++ : L++, xe > de ? Te++ : A++, xe > Se ? Te++ : j++, le > de ? L++ : A++, le > Se ? L++ : j++, de > Se ? A++ : j++;
    var Q = xe - (b = Te >= 3 ? 1 : 0) + r, W = le - (_ = L >= 3 ? 1 : 0) + r, q = de - (T = A >= 3 ? 1 : 0) + r, D = Se - (w = j >= 3 ? 1 : 0) + r, K = xe - (E = Te >= 2 ? 1 : 0) + 2 * r, $ = le - (U = L >= 2 ? 1 : 0) + 2 * r, _e = de - (N = A >= 2 ? 1 : 0) + 2 * r, ne = Se - (O = j >= 2 ? 1 : 0) + 2 * r, pe = xe - (te = Te >= 1 ? 1 : 0) + 3 * r, ye = le - (G = L >= 1 ? 1 : 0) + 3 * r, me = de - (Z = A >= 1 ? 1 : 0) + 3 * r, Re = Se - (re = j >= 1 ? 1 : 0) + 3 * r, Pe = xe - 1 + 4 * r, Ne = le - 1 + 4 * r, je = de - 1 + 4 * r, Xe = Se - 1 + 4 * r, $e = 255 & ae, Ue = 255 & ce, Ye = 255 & ue, at = 255 & ge, ht = 0.6 - xe * xe - le * le - de * de - Se * Se;
    if (ht < 0) f = 0;
    else {
      var De = F[$e + F[Ue + F[Ye + F[at]]]] % 32 * 4;
      f = (ht *= ht) * ht * (V[De] * xe + V[De + 1] * le + V[De + 2] * de + V[De + 3] * Se);
    }
    var Ke = 0.6 - Q * Q - W * W - q * q - D * D;
    if (Ke < 0) m = 0;
    else {
      var tt = F[$e + b + F[Ue + _ + F[Ye + T + F[at + w]]]] % 32 * 4;
      m = (Ke *= Ke) * Ke * (V[tt] * Q + V[tt + 1] * W + V[tt + 2] * q + V[tt + 3] * D);
    }
    var Bt = 0.6 - K * K - $ * $ - _e * _e - ne * ne;
    if (Bt < 0) v = 0;
    else {
      var kt = F[$e + E + F[Ue + U + F[Ye + N + F[at + O]]]] % 32 * 4;
      v = (Bt *= Bt) * Bt * (V[kt] * K + V[kt + 1] * $ + V[kt + 2] * _e + V[kt + 3] * ne);
    }
    var Rt = 0.6 - pe * pe - ye * ye - me * me - Re * Re;
    if (Rt < 0) y = 0;
    else {
      var qt = F[$e + te + F[Ue + G + F[Ye + Z + F[at + re]]]] % 32 * 4;
      y = (Rt *= Rt) * Rt * (V[qt] * pe + V[qt + 1] * ye + V[qt + 2] * me + V[qt + 3] * Re);
    }
    var It = 0.6 - Pe * Pe - Ne * Ne - je * je - Xe * Xe;
    if (It < 0) M = 0;
    else {
      var H = F[$e + 1 + F[Ue + 1 + F[Ye + 1 + F[at + 1]]]] % 32 * 4;
      M = (It *= It) * It * (V[H] * Pe + V[H + 1] * Ne + V[H + 2] * je + V[H + 3] * Xe);
    }
    return 27 * (f + m + v + y + M);
  } }, o._buildPermutationTable = s, typeof define < "u" && define.amd && define(function() {
    return o;
  }), typeof exports < "u" ? exports.SimplexNoise = o : typeof window < "u" && (window.SimplexNoise = o), typeof module < "u" && (module.exports = o);
}();
let ya = [];
const pd = new Co();
function Ov(i) {
  if (!(i = i || {}).containerRoot) return void console.error("不存在 containerRoot");
  const e = i.containerRoot;
  let t = i.canvas;
  _o = new Zu(), dl = new J_(_o);
  let n = { antialias: !0, alpha: !0, logarithmicDepthBuffer: !0 };
  t ? Wn = new fu({ canvas: t, ...n }) : (Wn = new fu({ ...n }), e.appendChild(Wn.domElement)), Wn.setPixelRatio(window.devicePixelRatio), Wn.setSize(e.clientWidth, e.clientHeight), Wn.setAnimationLoop(function(r) {
    const o = pd.getDelta();
    dl.update(o), cd.update(), Nv(), function() {
      (en.enableDamping || en.autoRotate) && en.update(), Wn.render(_o, Ui), vo && vo.update();
    }();
  }), Wn.shadowMap.enabled = !0, Ui = new Cn(40, e.clientWidth / e.clientHeight, 0.1, 1e4), Ui.position.set(80, 0, 80), Ui.up.set(0, 1, 0), en = new iv(Ui, Wn.domElement), en.minDistance = 0.1, en.maxDistance = 700, en.target.set(0, 0, 0), en.autoRotate = !1, en.autoRotate && (en.autoRotateSpeed = 0.7), en.rotateSpeed *= 2, en.enablePan = !1, en.enableDamping = !1, en.enableDamping && (en.dampingFactor = 0.01), en.update(), i.stats && (vo = new ga(), e.appendChild(vo.dom)), window.addEventListener("resize", function() {
    const r = e.clientWidth, o = e.clientHeight;
    Ui.aspect = r / o, Ui.updateProjectionMatrix(), Wn.setSize(r, o);
  }), i.camera = Ui, i.scene = _o, i.renderer = Wn, i.containerRoot = e, i.animationMixerScene = dl, i.controls = en, Uv(i);
}
function Uv(i) {
  let e = i.camera, t = i.scene, n = i.containerRoot;
  i.animationMixerScene, i.controls;
  let r = i.urlBase || "";
  {
    const u = new j_(16777215, 1);
    u.name = "环境光", t.add(u);
  }
  {
    const u = new H_(16777215, 526368, 1);
    u.name = "球面光", t.add(u);
    const d = new ev(u, 5);
    t.add(d);
  }
  let o = new jr();
  o.name = "Layers(所有图层)", new gv().setPath(r + "modelWish/skyhdr/").load("sky17329165.hdr", function(u) {
    u.mapping = 303, t.background = u, t.environment = u;
  });
  let s, h = new X(0, 0, 0), c = new X(-2.5, 6.7, -8);
  {
    let u = new jr();
    u.name = "Layer(地球)", o.add(u);
    const d = new So().load(r + "modelWish/earth3.jpg");
    d.wrapS = d.wrapT = 1e3, new So().load(r + "textures/alphaMap.jpg").wrapS = d.wrapT = 1e3;
    const f = new C_({ map: d, side: 2 });
    s = new Tn(new Dl(10, 64, 32), f), s.name = "地球", s.position.set(0, 0, 0), u.add(s);
    const m = new Zr(), v = new ba({ color: 16776960, transparent: !0 });
    let y = new Tn(m, v);
    y.name = "中国", y.position.set(c.x, c.y, c.z);
    let M = 0;
    const b = new X(0, 1, 0), _ = c.clone(), T = new In();
    ya.push(function(w) {
      M = 0.06 * -(5e-3 * Date.now()), s.rotation.y = M, c = _.clone(), T.setFromAxisAngle(b, M), c.applyQuaternion(T), y.position.set(c.x, c.y, c.z);
    });
  }
  {
    const y = new Un(), M = [], b = [], _ = [];
    for (let N = 0; N < 5500; ++N) {
      let O = Math.random() * Math.PI * 2, te = Math.acos(2 * Math.random() - 1), G = (0.9 * Math.random() + 0.1) * Math.PI * 0.1, Z = 0.9 * Math.random() + 0.1;
      _.push(O, te, G, Z);
      let re = Math.random() * 10 + 0.5;
      if (b.push(re), N < 500) {
        let F = 0.5 * Math.random() + 9.5, { x: V, y: B, z: ae } = new X().randomDirection().multiplyScalar(F);
        M.push(V, B, ae);
      } else {
        let F = 20, V = 50, B = Math.pow(Math.random(), 1.5), ae = Math.sqrt(V * V * B + (1 - B) * F * F), { x: ce, y: ue, z: ge } = new X().setFromCylindricalCoords(ae, 2 * Math.random() * Math.PI, 2 * (Math.random() - 0.5));
        M.push(ce, ue, ge);
      }
    }
    y.setAttribute("position", new jt(M, 3)), y.setAttribute("aSize", new jt(b, 1)), y.setAttribute("aShift", new jt(_, 4));
    const T = new qn({ vertexShader: `
            attribute float aSize;
            attribute vec4 aShift;

            uniform float uTime;

            varying vec3 vColor;

            const float PI = 3.141592653589793238;

            void main() {
                // float d = abs(position.y) / 10.0;
                float d = length(abs(position) / vec3(40., 10., 40.)); // 中间黄色、外面紫色
                d = clamp(d, 0., 1.);

                // rgb(227, 155, 0)
                // rgb(100, 50, 255)
                vec3 color1 = vec3(227., 155., 0.);
                vec3 color2 = vec3(100., 50., 255.);

                vColor = mix(color1, color2, d) / 255.;

                vec3 transformed = position;

                float theta = mod(aShift.x + aShift.z * uTime, PI * 2.);
                float phi = mod(aShift.y + aShift.z * uTime, PI * 2.);
                transformed += vec3(sin(phi) * cos(theta), cos(phi), sin(phi) * sin(theta)) * aShift.w;

                vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
                gl_PointSize = aSize * 50.0 / -mvPosition.z;
                gl_Position = projectionMatrix * mvPosition;
            }
        `, fragmentShader: `
            varying vec3 vColor;

            void main() {
                float d = length(gl_PointCoord.xy - 0.5);
                if (d > 0.5) {
                    discard;
                }
                // gl_FragColor = vec4(vColor, step(0.5, 1.0 - d));
                gl_FragColor = vec4(vColor, smoothstep(0.5, 0.1, d));
            }
        `, uniforms: { uTime: { value: 0 } }, transparent: !0, blending: 2, depthTest: !1 }), w = new gu(y, T);
    w.rotation.order = "ZYX", w.rotation.z = 0.2, o.add(w);
    let E = w, U = T;
    ya.push(function(N) {
      const O = 5e-3 * Date.now();
      E.rotation.y = 0.01 * O, U.uniforms.uTime.value = O;
    });
  }
  {
    const m = [], v = ["昵称-昵称-昵称-昵称-昵称-昵称", "王舒森", "王语晗", "王韵溪", "王子航", "王梓睿", "李辰浩", "李晨硕", "李墨源", "刘浩然", "刘思依", "张景然", "张语橙", "赵瑜佳", "赵子林", "吴迪", "吴笛儿", "吴梓妍", "杜沫然", "杜奕澄", "周熙雯", "周子贤", "孙一佳", "孙怡凡", "申悦霏", "范诗涵", "符宸泽", "甘思航", "郭芮溪", "吉保瑞", "姜景迈", "焦家晟", "陈琨奇", "程鸿茗", "崔诗梦", "丁玉阳", "马晞玥", "宋一诺", "杨张一杋", "郑玥妍"];
    for (let re = 0; re < 100; ++re) m.push({ code: re, data: { name: v[re % v.length], data: "test" + re }, message: "success" });
    const y = 0.1, M = 1, b = 2, _ = 3, T = new qn({ uniforms: { pointTexture: { value: new So().load(r + "modelWish/star_202409101300_blue.png") } }, vertexShader: `
                attribute float size;
                attribute float style;
                varying vec3 vColor;
                varying float oStyle;
                void main() {
                    vColor = color;
                    oStyle = style;
                    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                    gl_Position = projectionMatrix * mvPosition;
                    // gl_PointSize = size * 3.0;
                    // gl_PointSize = size * ( 300.0 / gl_Position.z );
                    gl_PointSize = size * ( 300.0 / -mvPosition.z );
                }
            `, fragmentShader: `
                uniform sampler2D pointTexture;
                varying vec3 vColor;
                varying float oStyle;
                void main() {
                    if (abs(oStyle - ` + b.toFixed(2) + ") < " + y.toFixed(2) + `) {
                        discard;
                    }
                    gl_FragColor = vec4( vColor, 1.0 );
                    if (abs(oStyle - ` + _.toFixed(2) + ") < " + y.toFixed(2) + `) {
                        gl_FragColor.xyz = vec3(1.0, 1.0, 0.0);
                    }

                    gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

                    // 圆环效果
                    // vec4 colorTexture = texture2D( pointTexture, gl_PointCoord );
                    // if (colorTexture.r > 0.9 && colorTexture.g > 0.9 && colorTexture.b > 0.9) {
                    //     gl_FragColor = colorTexture;
                    // }
                    // else {
                    //     gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
                    // }
                }
            `, transparent: !0, blending: 2, depthTest: !1, vertexColors: !0 });
    document.createElement("canvas").getContext("2d"), function() {
      const re = new ba(), F = new Ma();
      new Zu().add(new Tn(F, re));
      const B = new Al();
    }();
    let w = new Un();
    const E = [], U = [], N = [], O = [];
    for (let re = 0; re < 100; re++) {
      {
        let { x: V, y: B, z: ae } = new X().randomDirection().multiplyScalar((0.7 * Math.random() + 0.3) * 200);
        E.push(V, B, ae);
      }
      const F = new lt();
      Math.random() < 0.5 ? (F.setRGB(1, 1, 1), m[re].styleType = 1) : (F.setRGB(1, 0, 1), m[re].styleType = 0), m[re].color = F, U.push(F.r, F.g, F.b), N.push(70);
      {
        let V = M;
        Math.random() < 0.5 && (m[re].styleType = 2, V = _), O.push(V);
      }
    }
    w.setAttribute("position", new jt(E, 3)), w.setAttribute("color", new jt(U, 3)), w.setAttribute("size", new jt(N, 1).setUsage(35048)), w.setAttribute("style", new Om(O, 1).setUsage(35048));
    let te = new gu(w, T);
    o.add(te);
    {
      let re = function(xe) {
        if (xe.type == "mousedown") return void ue.set(xe.x, xe.y);
        if (xe.type == "mouseup" && (ge.set(xe.x, xe.y), Ee.subVectors(ue, ge), 0.1 < Ee.length())) return;
        ce.x = xe.clientX / n.clientWidth * 2 - 1, ce.y = -xe.clientY / n.clientHeight * 2 + 1, B && B.stop(), ae.setFromCamera(ce, e);
        let le = ae.intersectObject(te);
        const de = w.attributes;
        le = le.filter((Se) => Math.abs(de.style.array[Se.index] - b) > y), le.length > 0 ? V && V.index == le[0].index || (V && (de.size.array[V.index] = 70), V = le[0], de.size.array[V.index] = 210, de.size.needsUpdate = !0) : V && (de.size.array[V.index] = 70, de.size.needsUpdate = !0, V = null), V && (V.point = new X(w.attributes.position.getX(V.index), w.attributes.position.getY(V.index), w.attributes.position.getZ(V.index)), B = new cd.Tween(e.position), B.to(function(Se, Te) {
          Te = Te || 50;
          const L = new X(0, 0, 0);
          let A = new X(), j = new X();
          j.subVectors(Se, L);
          let Q = j.length() + Te;
          return j.normalize(), A.addVectors(L, j.multiplyScalar(Q)), A;
        }(V.point), F).onStart(function() {
        }).onUpdate(function() {
          e.lookAt(h);
        }).onComplete(function() {
          V && m[V.index];
        }).start());
      };
      const F = 3e3;
      let V, B, ae = new $_();
      ae.params.Points.threshold = 2;
      let ce = new We(), ue = new We(0, 0), ge = new We(0, 0), Ee = new We(0, 0);
      n.addEventListener("mousedown", re), n.addEventListener("mouseup", re);
    }
    let G = new Co(), Z = !1;
    ya.push(function(re) {
      const F = w.attributes;
      if (G.getElapsedTime() > 1) {
        G = new Co(), Z = !Z;
        for (let V = 0; V < 100; ++V) m[V].styleType == 1 && (F.style.array[V] = Z ? M : b);
        F.style.needsUpdate = !0;
      }
    });
  }
  t.add(o);
}
function Nv(i) {
  const e = pd.getDelta();
  let t = !1;
  for (let n = 0; n < ya.length; ++n) t = ya[n](e) || t;
  return t;
}
function Fv() {
  (function() {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var i, e, t, n, r = document.getElementById("starrySkyMeteor"), o = !0, s = "226,225,224", h = [];
    function c() {
      i = window.innerWidth, e = window.innerHeight, t = 0.216 * i, r.setAttribute("width", i), r.setAttribute("height", e);
    }
    function u() {
      n.clearRect(0, 0, i, e);
      for (var v = h.length, y = 0; y < v; y++) {
        var M = h[y];
        M.move(), M.fadeIn(), M.fadeOut(), M.draw();
      }
    }
    function d() {
      this.reset = function() {
        this.giant = f(3), this.comet = !this.giant && !o && f(10), this.x = m(0, i - 10), this.y = m(0, e), this.r = m(1.1, 2.6), this.dx = m(0.05, 0.30000000000000004) + 0.05 * (this.comet + 1 - 1) * m(50, 120) + 0.1, this.dy = -m(0.05, 0.30000000000000004) - 0.05 * (this.comet + 1 - 1) * m(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = m(0.2, 1 - 0.4 * (this.comet + 1 - 1)), this.do = m(5e-4, 2e-3) + 1e-3 * (this.comet + 1 - 1);
      }, this.fadeIn = function() {
        this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do);
      }, this.fadeOut = function() {
        this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do / 2, (this.x > i || this.y < 0) && (this.fadingOut = !1, this.reset()));
      }, this.draw = function() {
        if (n.beginPath(), this.giant) n.fillStyle = "rgba(180,184,240," + this.opacity + ")", n.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
        else if (this.comet) {
          n.fillStyle = "rgba(" + s + "," + this.opacity + ")", n.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
          for (var v = 0; v < 30; v++) n.fillStyle = "rgba(" + s + "," + (this.opacity - this.opacity / 20 * v) + ")", n.rect(this.x - this.dx / 4 * v, this.y - this.dy / 4 * v - 2, 2, 2), n.fill();
        } else n.fillStyle = "rgba(226,225,142," + this.opacity + ")", n.rect(this.x, this.y, this.r, this.r);
        n.closePath(), n.fill();
      }, this.move = function() {
        this.x += this.dx, this.y += this.dy, this.fadingOut === !1 && this.reset(), (this.x > i - i / 4 || this.y < 0) && (this.fadingOut = !0);
      }, setTimeout(function() {
        o = !1;
      }, 50);
    }
    function f(v) {
      return Math.floor(1e3 * Math.random()) + 1 < 10 * v;
    }
    function m(v, y) {
      return Math.random() * (y - v) + v;
    }
    c(), window.addEventListener("resize", c, !1), function() {
      n = r.getContext("2d");
      for (var v = 0; v < t; v++) h[v] = new d(), h[v].reset();
      u();
    }(), function v() {
      u(), window.requestAnimationFrame(v);
    }();
  })();
}
export {
  Nv as callbackAnimate,
  Ov as init,
  Fv as init2D,
  Uv as initScene
};
