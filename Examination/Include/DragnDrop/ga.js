(function ()
{
        var aa = "_gat",
                s = "_gaq",
                v = true,
                w = false,
                x = undefined,
                ba = "4.5.9",
                z = "length",
                A = "cookie",
                C = "location",
                D = "&",
                E = "=",
                F = "__utma=",
                H = "__utmb=",
                I = "__utmc=",
                ca = "__utmk=",
                K = "__utmv=",
                L = "__utmz=",
                M = "__utmx=",
                da = "GASO=";
        var N = function (f)
        {
                return x == f || "-" == f || "" == f
        }, ea = function (f)
        {
                return f[z] > 0 && " \n\r\t".indexOf(f) > -1
        }, Q = function (f, i, b)
        {
                var j = "-",
                        c;
                if (!N(f) && !N(i) && !N(b))
                {
                        c = f.indexOf(i);
                        if (c > -1)
                        {
                                b = f.indexOf(b, c);
                                if (b < 0) b = f[z];
                                j = P(f, c + i.indexOf(E) + 1, b)
                        }
                }
                return j
        }, fa = function (f)
        {
                var i = w,
                        b = 0,
                        j, c;
                if (!N(f))
                {
                        i = v;
                        for (j = 0; j < f[z]; j++)
                        {
                                c = f.charAt(j);
                                b += "." == c ? 1 : 0;
                                i = i && b <= 1 && (0 == j && "-" == c || ".0123456789".indexOf(c) > -1)
                        }
                }
                return i
        }, R = function (f, i)
        {
                var b = encodeURIComponent;
                return b instanceof Function ? i ? encodeURI(f) : b(f) : escape(f)
        },
        T = function (f, i)
        {
                var b = decodeURIComponent,
                        j;
                f = f.split("+").join(" ");
                if (b instanceof Function) try
                {
                        j = i ? decodeURI(f) : b(f)
                }
                catch (c)
                {
                        j = unescape(f)
                }
                else j = unescape(f);
                return j
        }, U = function (f, i)
        {
                return f.indexOf(i) > -1
        }, V = function (f, i)
        {
                f[f[z]] = i
        }, W = function (f)
        {
                return f.toLowerCase()
        }, X = function (f, i)
        {
                return f.split(i)
        }, ga = function (f, i)
        {
                return f.indexOf(i)
        }, P = function (f, i, b)
        {
                b = x == b ? f[z] : b;
                return f.substring(i, b)
        }, ia = function (f, i)
        {
                return f.join(i)
        }, ja = function (f)
        {
                var i = 1,
                        b = 0,
                        j;
                if (!N(f))
                {
                        i = 0;
                        for (j = f[z] - 1; j >= 0; j--)
                        {
                                b = f.charCodeAt(j);
                                i = (i << 6 & 268435455) + b + (b << 14);
                                b = i & 266338304;
                                i = b != 0 ? i ^ b >> 21 : i
                        }
                }
                return i
        }, ka = function ()
        {
                var f = window,
                        i = x;
                if (f && f.gaGlobal && f.gaGlobal.hid) i = f.gaGlobal.hid;
                else
                {
                        i = Y();
                        f.gaGlobal = f.gaGlobal ? f.gaGlobal : {};
                        f.gaGlobal.hid = i
                }
                return i
        }, Y = function ()
        {
                return Math.round(Math.random() * 2147483647)
        }, Z = {
                Ha: function (f, i)
                {
                        this.bb = f;
                        this.nb = i
                },
                t: 63072000000,
                ib: w,
                _gasoDomain: x,
                _gasoCPath: x
        };
        Z.Gb = function ()
        {
                var f = this,
                        i = Z.Ha;

                function b(c)
                {
                        return new i(c[0], c[1])
                }
                function j(c)
                {
                        var p = [];
                        c = c.split(",");
                        var m;
                        for (m = 0; m < c.length; ++m) p.push(b(c[m].split(":")));
                        return p
                }
                f.Ia = "utm_campaign";
                f.Ja = "utm_content";
                f.Ka = "utm_id";
                f.La = "utm_medium";
                f.Ma = "utm_nooverride";
                f.Na = "utm_source";
                f.Oa = "utm_term";
                f.Pa = "gclid";
                f.ba = 0;
                f.z = 0;
                f.Ya = "15768000";
                f.sb = "1800";
                f.ta = [];
                f.va = [];
                f.nc = "cse";
                f.oc = "q";
                f.ob = 5;
                f.T = j("images.google:q,google:q,yahoo:p,msn:q,bing:q,aol:query,aol:encquery,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,looksmart:qt,about:terms,mamma:query,alltheweb:q,gigablast:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,aol:q,club-internet:query,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,netsprint:q,google.interia:q,szukacz:q,yam:k,pchome:q,kvasir:q,sesam:q,ozu:q,terra:query,nostrum:query,mynet:q,ekolay:q,search.ilse:search_for,rambler:words");
                f.u = x;
                f.lb = w;
                f.h = "/";
                f.U = 100;
                f.oa = "/__utm.gif";
                f.ga = 1;
                f.ha = 1;
                f.v = "|";
                f.fa = 1;
                f.da = 1;
                f.Ra = 1;
                f.b = "auto";
                f.I = 1;
                f.ra = 1000;
                f.Jc = 10;
                f.Pb = 10;
                f.Kc = 0.2;
                f.o = x;
                f.a = document;
                f.e = window
        };
        Z.Hb = function (f)
        {
                var i = this,
                        b = f;
                i.r = (new Date).getTime();
                var j = [F, H, I, L, K, M, da];

                function c(k, n, r, a)
                {
                        var d = "",
                                l = 0;
                        d = Q(k, "2" + n, ";");
                        if (!N(d))
                        {
                                k = d.indexOf("^" + r + ".");
                                if (k < 0) return ["", 0];
                                d = P(d, k + r[z] + 2);
                                if (d.indexOf("^") > 0) d = d.split("^")[0];
                                r = d.split(":");
                                d = r[1];
                                l = parseInt(r[0], 10);
                                if (!a && l < i.r) d = ""
                        }
                        if (N(d)) d = "";
                        return [d, l]
                }
                i.k = function ()
                {
                        var k = b.a[A];
                        return b.o ? i.Wb(k, b.o) : k
                };
                i.Wb = function (k, n)
                {
                        var r = [],
                                a, d;
                        for (a = 0; a < j[z]; a++)
                        {
                                d = c(k, j[a], n)[0];
                                N(d) || (r[r[z]] = j[a] + d + ";")
                        }
                        return r.join("")
                };
                i.l = function (k,
                n, r)
                {
                        var a = r > 0 ? h(r) : "";
                        if (b.o)
                        {
                                n = i.kc(b.a[A], k, b.o, n, r);
                                k = "2" + k;
                                a = e(r)
                        }
                        q(k + n, a)
                };
                i.kc = function (k, n, r, a, d)
                {
                        var l = "";
                        d = p(d);
                        a = m([a, i.r + d * 1], r);
                        l = Q(k, "2" + n, ";");
                        if (!N(l))
                        {
                                k = m(c(k, n, r, v), r);
                                l = ia(l.split(k), "");
                                return l = a + l
                        }
                        return a
                };

                function p(k)
                {
                        return k || Z.t
                }
                function m(k, n)
                {
                        return "^" + ia([
                                [n, k[1]].join("."), k[0]
                        ], ":")
                }
                function q(k, n)
                {
                        b.a[A] = k + "; path=" + b.h + "; " + n + i.fb()
                }
                i.fb = function ()
                {
                        return N(b.b) ? "" : "domain=" + b.b + ";"
                };

                function e(k)
                {
                        return k > 0 ? g() : ""
                }
                function g()
                {
                        return h(Z.t)
                }
                function h(k)
                {
                        var n = new Date;
                        k = new Date(n.getTime() + k);
                        return "expires=" + k.toGMTString() + "; "
                }
        };
        Z.$ = function (f)
        {
                var i, b, j, c, p, m, q, e = this,
                        g, h = f;
                e.j = new Z.Hb(f);

                function k(a)
                {
                        a = a instanceof Array ? a.join(".") : "";
                        return N(a) ? "-" : a
                }
                function n(a, d)
                {
                        var l = [];
                        if (!N(a))
                        {
                                l = a.split(".");
                                if (d) for (a = 0; a < l[z]; a++) fa(l[a]) || (l[a] = "-")
                        }
                        return l
                }
                function r(a, d, l)
                {
                        var t = e.M,
                                o, u;
                        for (o = 0; o < t[z]; o++)
                        {
                                u = t[o][0];
                                u += N(d) ? d : d + t[o][4];
                                t[o][2](Q(a, u, l))
                        }
                }
                e.kb = function ()
                {
                        return x == g || g == e.P()
                };
                e.k = function ()
                {
                        return e.j.k()
                };
                e.ma = function ()
                {
                        return p ? p : "-"
                };
                e.vb = function (a)
                {
                        p = a
                };
                e.za = function (a)
                {
                        g = fa(a) ? a * 1 : "-"
                };
                e.la = function ()
                {
                        return k(m)
                };
                e.Aa = function (a)
                {
                        m = n(a)
                };
                e.Vb = function ()
                {
                        e.j.l(K, "", - 1)
                };
                e.lc = function ()
                {
                        return g ? g : "-"
                };
                e.fb = function ()
                {
                        return N(h.b) ? "" : "domain=" + h.b + ";"
                };
                e.ja = function ()
                {
                        return k(i)
                };
                e.tb = function (a)
                {
                        i = n(a, 1)
                };
                e.C = function ()
                {
                        return k(b)
                };
                e.ya = function (a)
                {
                        b = n(a, 1)
                };
                e.ka = function ()
                {
                        return k(j)
                };
                e.ub = function (a)
                {
                        j = n(a, 1)
                };
                e.na = function ()
                {
                        return k(c)
                };
                e.wb = function (a)
                {
                        c = n(a);
                        for (a = 0; a < c[z]; a++) if (a < 4 && !fa(c[a])) c[a] = "-"
                };
                e.fc = function ()
                {
                        return q
                };
                e.Dc = function (a)
                {
                        q = a
                };
                e.Sb = function ()
                {
                        i = [];
                        b = [];
                        j = [];
                        c = [];
                        p = x;
                        m = [];
                        g = x
                };
                e.P = function ()
                {
                        var a = "",
                                d;
                        for (d = 0; d < e.M[z]; d++) a += e.M[d][1]();
                        return ja(a)
                };
                e.ua = function (a)
                {
                        var d = e.k(),
                                l = w;
                        if (d)
                        {
                                r(d, a, ";");
                                e.za(e.P());
                                l = v
                        }
                        return l
                };
                e.zc = function (a)
                {
                        r(a, "", D);
                        e.za(Q(a, ca, D))
                };
                e.Hc = function ()
                {
                        var a = e.M,
                                d = [],
                                l;
                        for (l = 0; l < a[z]; l++) V(d, a[l][0] + a[l][1]());
                        V(d, ca + e.P());
                        return d.join(D)
                };
                e.Nc = function (a, d)
                {
                        var l = e.M,
                                t = h.h;
                        e.ua(a);
                        h.h = d;
                        for (a = 0; a < l[z]; a++) N(l[a][1]()) || l[a][3]();
                        h.h = t
                };
                e.Cb = function ()
                {
                        e.j.l(F, e.ja(), Z.t)
                };
                e.Ea = function ()
                {
                        e.j.l(H, e.C(), h.sb * 1000)
                };
                e.Db = function ()
                {
                        e.j.l(I,
                        e.ka(), 0)
                };
                e.Ga = function ()
                {
                        e.j.l(L, e.na(), h.Ya * 1000)
                };
                e.Eb = function ()
                {
                        e.j.l(M, e.ma(), Z.t)
                };
                e.Fa = function ()
                {
                        e.j.l(K, e.la(), Z.t)
                };
                e.Oc = function ()
                {
                        e.j.l(da, e.fc(), 0)
                };
                e.M = [
                        [F, e.ja, e.tb, e.Cb, "."],
                        [H, e.C, e.ya, e.Ea, ""],
                        [I, e.ka, e.ub, e.Db, ""],
                        [M, e.ma, e.vb, e.Eb, ""],
                        [L, e.na, e.wb, e.Ga, "."],
                        [K, e.la, e.Aa, e.Fa, "."]
                ]
        };
        Z.Kb = function (f)
        {
                var i = this,
                        b = f,
                        j = new Z.$(b),
                        c = function ()
                        {}, p = function (m)
                        {
                                var q = (new Date).getTime(),
                                        e;
                                e = (q - m[3]) * (b.Kc / 1000);
                                if (e >= 1)
                                {
                                        m[2] = Math.min(Math.floor(m[2] * 1 + e), b.Pb);
                                        m[3] = q
                                }
                                return m
                        };
                i.H = function (m, q, e, g, h, k)
                {
                        var n, r = b.I,
                                a = b.a[C];
                        j.ua(e);
                        n = X(j.C(), ".");
                        if (n[1] < 500 || g)
                        {
                                if (h) n = p(n);
                                if (g || !h || n[2] >= 1)
                                {
                                        if (!g && h) n[2] = n[2] * 1 - 1;
                                        n[1] = n[1] * 1 + 1;
                                        m = "?utmwv=" + ba + "&utmn=" + Y() + (N(a.hostname) ? "" : "&utmhn=" + R(a.hostname)) + (b.U == 100 ? "" : "&utmsp=" + R(b.U)) + m;
                                        if (0 == r || 2 == r)
                                        {
                                                g = 2 == r ? c : k || c;
                                                i.$a(b.oa + m, g)
                                        }
                                        if (1 == r || 2 == r)
                                        {
                                                m = ("https:" == a.protocol ? "https://ssl.google-analytics.com/__utm.gif" : "http://www.google-analytics.com/__utm.gif") + m + "&utmac=" + q + "&utmcc=" + i.ac(e);
                                                if (la) m += "&gaq=1";
                                                i.$a(m, k)
                                        }
                                }
                        }
                        j.ya(n.join("."));
                        j.Ea()
                };
                i.$a = function (m, q)
                {
                        var e = new Image(1, 1);
                        e.src = m;
                        e.onload = function ()
                        {
                                e.onload = null;
                                (q || c)()
                        }
                };
                i.ac = function (m)
                {
                        var q = [],
                                e = [F, L, K, M],
                                g, h = j.k(),
                                k;
                        for (g = 0; g < e[z]; g++)
                        {
                                k = Q(h, e[g] + m, ";");
                                if (!N(k))
                                {
                                        if (e[g] == K)
                                        {
                                                k = X(k.split(m + ".")[1], "|")[0];
                                                if (N(k)) continue;
                                                k = m + "." + k
                                        }
                                        V(q, e[g] + k + ";")
                                }
                        }
                        return R(q.join("+"))
                }
        };
        Z.n = function ()
        {
                var f = this;
                f.Y = [];
                f.hb = function (i)
                {
                        var b, j = f.Y,
                                c;
                        for (c = 0; c < j.length; c++) b = i == j[c].q ? j[c] : b;
                        return b
                };
                f.Ob = function (i, b, j, c, p, m, q, e)
                {
                        var g = f.hb(i);
                        if (x == g)
                        {
                                g = new Z.n.Mb(i, b, j, c, p, m, q, e);
                                V(f.Y, g)
                        }
                        else
                        {
                                g.Qa = b;
                                g.Ab = j;
                                g.zb = c;
                                g.xb = p;
                                g.Wa = m;
                                g.yb = q;
                                g.Za = e
                        }
                        return g
                }
        };
        Z.n.Lb = function (f, i, b, j, c, p)
        {
                var m = this;
                m.Bb = f;
                m.Ba = i;
                m.D = b;
                m.Ua = j;
                m.pb = c;
                m.qb = p;
                m.Ca = function ()
                {
                        return "&" + ["utmt=item", "tid=" + R(m.Bb), "ipc=" + R(m.Ba), "ipn=" + R(m.D), "iva=" + R(m.Ua), "ipr=" + R(m.pb), "iqt=" + R(m.qb)].join("&utm")
                }
        };
        Z.n.Mb = function (f, i, b, j, c, p, m, q)
        {
                var e = this;
                e.q = f;
                e.Qa = i;
                e.Ab = b;
                e.zb = j;
                e.xb = c;
                e.Wa = p;
                e.yb = m;
                e.Za = q;
                e.R = [];
                e.Nb = function (g, h, k, n, r)
                {
                        var a = e.gc(g),
                                d = e.q;
                        if (x == a) V(e.R, new Z.n.Lb(d, g, h, k, n, r));
                        else
                        {
                                a.Bb = d;
                                a.Ba = g;
                                a.D = h;
                                a.Ua = k;
                                a.pb = n;
                                a.qb = r
                        }
                };
                e.gc = function (g)
                {
                        var h, k = e.R,
                                n;
                        for (n = 0; n < k.length; n++) h = g == k[n].Ba ? k[n] : h;
                        return h
                };
                e.Ca = function ()
                {
                        return "&" + ["utmt=tran", "id=" + R(e.q), "st=" + R(e.Qa), "to=" + R(e.Ab), "tx=" + R(e.zb), "sp=" + R(e.xb), "ci=" + R(e.Wa), "rg=" + R(e.yb), "co=" + R(e.Za)].join("&utmt")
                }
        };
        Z.Fb = function (f)
        {
                var i = f,
                        b = i.e,
                        j = this,
                        c = "-";
                j.V = b.screen;
                j.Sa = !j.V && b.java ? java.awt.Toolkit.getDefaultToolkit() : x;
                j.d = b.navigator;
                j.W = c;
                j.xa = c;
                j.Va = c;
                j.qa = c;
                j.pa = 1;
                j.eb = c;

                function p()
                {
                        var m, q, e;
                        q = "ShockwaveFlash";
                        var g = "$version",
                                h = j.d ? j.d.plugins : x;
                        if (h && h[z] > 0) for (m = 0; m < h[z] && !e; m++)
                        {
                                q = h[m];
                                if (U(q.name, "Shockwave Flash")) e = q.description.split("Shockwave Flash ")[1]
                        }
                        else
                        {
                                q = q + "." + q;
                                try
                                {
                                        m = new ActiveXObject(q + ".7");
                                        e = m.GetVariable(g)
                                }
                                catch (k)
                                {}
                                if (!e) try
                                {
                                        m = new ActiveXObject(q + ".6");
                                        e = "WIN 6,0,21,0";
                                        m.AllowScriptAccess = "always";
                                        e = m.GetVariable(g)
                                }
                                catch (n)
                                {}
                                if (!e) try
                                {
                                        m = new ActiveXObject(q);
                                        e = m.GetVariable(g)
                                }
                                catch (r)
                                {}
                                if (e)
                                {
                                        e = X(e.split(" ")[1], ",");
                                        e = e[0] + "." + e[1] + " r" + e[2]
                                }
                        }
                        return e ? e : c
                }
                j.bc = function ()
                {
                        var m;
                        if (b.screen)
                        {
                                j.W = j.V.width + "x" + j.V.height;
                                j.xa = j.V.colorDepth + "-bit"
                        }
                        else if (j.Sa) try
                        {
                                m = j.Sa.getScreenSize();
                                j.W = m.width + "x" + m.height
                        }
                        catch (q)
                        {}
                        j.qa = W(j.d && j.d.language ? j.d.language : j.d && j.d.browserLanguage ? j.d.browserLanguage : c);
                        j.pa = j.d && j.d.javaEnabled() ? 1 : 0;
                        j.eb = i.ha ? p() : c;
                        j.Va = R(i.a.characterSet ? i.a.characterSet : i.a.charset ? i.a.charset : c)
                };
                j.Ic = function ()
                {
                        return D + "utm" + ["cs=" + R(j.Va), "sr=" + j.W, "sc=" + j.xa, "ul=" + j.qa, "je=" + j.pa, "fl=" + R(j.eb)].join("&utm")
                };
                j.$b = function ()
                {
                        var m = i.a,
                                q = b.history[z];
                        m = j.d.appName + j.d.version + j.qa + j.d.platform + j.d.userAgent + j.pa + j.W + j.xa + (m[A] ? m[A] : "") + (m.referrer ? m.referrer : "");
                        for (var e = m[z]; q > 0;) m += q-- ^ e++;
                        return ja(m)
                }
        };
        Z.m = function (f, i, b, j)
        {
                var c = j,
                        p = this;
                p.c = f;
                p.rb = i;
                p.r = b;

                function m(g)
                {
                        return N(g) || "0" == g || !U(g, "://")
                }
                function q(g)
                {
                        var h = "";
                        g = W(g.split("://")[1]);
                        if (U(g, "/"))
                        {
                                g = g.split("/")[1];
                                if (U(g, "?")) h = g.split("?")[0]
                        }
                        return h
                }
                function e(g)
                {
                        var h = "";
                        h = W(g.split("://")[1]);
                        if (U(h, "/")) h = h.split("/")[0];
                        return h
                }
                p.ic = function (g)
                {
                        var h = p.gb();
                        return new Z.m.w(Q(g, c.Ka + E, D), Q(g, c.Na + E, D), Q(g, c.Pa + E, D), p.Q(g, c.Ia, "(not set)"), p.Q(g, c.La, "(not set)"), p.Q(g, c.Oa, h && !N(h.K) ? T(h.K) : x), p.Q(g, c.Ja, x))
                };
                p.jb = function (g)
                {
                        var h = e(g),
                                k = q(g);
                        if (U(h, "google"))
                        {
                                g = g.split("?").join(D);
                                if (U(g, D + c.oc + E)) if (k == c.nc) return v
                        }
                        return w
                };
                p.gb = function ()
                {
                        var g, h = p.rb,
                                k, n, r = c.T;
                        if (!(m(h) || p.jb(h)))
                        {
                                g = e(h);
                                for (k = 0; k < r[z]; k++)
                                {
                                        n = r[k];
                                        if (U(g, W(n.bb)))
                                        {
                                                h = h.split("?").join(D);
                                                if (U(h, D + n.nb + E))
                                                {
                                                        g = h.split(D + n.nb + E)[1];
                                                        if (U(g, D)) g = g.split(D)[0];
                                                        return new Z.m.w(x, n.bb, x, "(organic)", "organic", g, x)
                                                }
                                        }
                                }
                        }
                };
                p.Q = function (g, h, k)
                {
                        g = Q(g, h + E, D);
                        return k = !N(g) ? T(g) : !N(k) ? k : "-"
                };
                p.uc = function (g)
                {
                        var h = c.ta,
                                k = w,
                                n;
                        if (g && "organic" == g.S)
                        {
                                g = W(T(g.K));
                                for (n = 0; n < h[z]; n++) k = k || W(h[n]) == g
                        }
                        return k
                };
                p.hc = function ()
                {
                        var g = "",
                                h = "";
                        g = p.rb;
                        if (!(m(g) || p.jb(g)))
                        {
                                g = g.split("://")[1];
                                if (U(g, "/"))
                                {
                                        h = P(g, g.indexOf("/"));
                                        h = h.split("?")[0];
                                        g = W(g.split("/")[0])
                                }
                                if (0 == g.indexOf("www.")) g = P(g, 4);
                                return new Z.m.w(x, g, x, "(referral)", "referral", x, h)
                        }
                };
                p.Xb = function (g)
                {
                        var h = "";
                        if (c.ba)
                        {
                                h = g && g.hash ? g.href.substring(g.href.indexOf("#")) : "";
                                h = "" != h ? h + D : h
                        }
                        h += g.search;
                        return h
                };
                p.dc = function ()
                {
                        return new Z.m.w(x, "(direct)", x, "(direct)", "(none)", x, x)
                };
                p.vc = function (g)
                {
                        var h = w,
                                k, n = c.va;
                        if (g && "referral" == g.S)
                        {
                                g = W(R(g.X));
                                for (k = 0; k < n[z]; k++) h = h || U(g, W(n[k]))
                        }
                        return h
                };
                p.L = function (g)
                {
                        return x != g && g.mb()
                };
                p.cc = function (g, h)
                {
                        var k = "",
                                n = "-",
                                r, a = 0,
                                d, l, t = p.c;
                        if (!g) return "";
                        l = g.k();
                        k = p.Xb(c.a[C]);
                        if (c.z && g.kb())
                        {
                                n = g.na();
                                if (!N(n) && !U(n, ";"))
                                {
                                        g.Ga();
                                        return ""
                                }
                        }
                        n = Q(l, L + t + ".", ";");
                        r = p.ic(k);
                        if (p.L(r))
                        {
                                k = Q(k, c.Ma + E, D);
                                if ("1" == k && !N(n)) return ""
                        }
                        if (!p.L(r))
                        {
                                r = p.gb();
                                if (!N(n) && p.uc(r)) return ""
                        }
                        if (!p.L(r) && h)
                        {
                                r = p.hc();
                                if (!N(n) && p.vc(r)) return ""
                        }
                        if (!p.L(r)) if (N(n) && h) r = p.dc();
                        if (!p.L(r)) return "";
                        if (!N(n))
                        {
                                a = n.split(".");
                                d = new Z.m.w;
                                d.Zb(a.slice(4).join("."));
                                d = W(d.Da()) == W(r.Da());
                                a = a[3] * 1
                        }
                        if (!d || h)
                        {
                                h = Q(l, F + t + ".", ";");
                                l = h.lastIndexOf(".");
                                h = l > 9 ? P(h, l + 1) * 1 : 0;
                                a++;
                                h = 0 == h ? 1 : h;
                                g.wb([t, p.r, h, a, r.Da()].join("."));
                                g.Ga();
                                return D + "utmcn=1"
                        }
                        else return D + "utmcr=1"
                }
        };
        Z.m.w = function (f, i, b, j, c, p, m)
        {
                var q = this;
                q.q = f;
                q.X = i;
                q.ea = b;
                q.D = j;
                q.S = c;
                q.K = p;
                q.Xa = m;
                q.Da = function ()
                {
                        var e = [],
                                g = [
                                        ["cid", q.q],
                                        ["csr", q.X],
                                        ["gclid", q.ea],
                                        ["ccn", q.D],
                                        ["cmd", q.S],
                                        ["ctr", q.K],
                                        ["cct", q.Xa]
                                ],
                                h, k;
                        if (q.mb()) for (h = 0; h < g[z]; h++) if (!N(g[h][1]))
                        {
                                k = g[h][1].split("+").join("%20");
                                k = k.split(" ").join("%20");
                                V(e, "utm" + g[h][0] + E + k)
                        }
                        return e.join("|")
                };
                q.mb = function ()
                {
                        return !(N(q.q) && N(q.X) && N(q.ea))
                };
                q.Zb = function (e)
                {
                        var g = function (h)
                        {
                                return T(Q(e, "utm" + h + E, "|"))
                        };
                        q.q = g("cid");
                        q.X = g("csr");
                        q.ea = g("gclid");
                        q.D = g("ccn");
                        q.S = g("cmd");
                        q.K = g("ctr");
                        q.Xa = g("cct")
                }
        };
        Z.Ib = function (f, i, b, j)
        {
                var c = this,
                        p = i,
                        m = E,
                        q = f,
                        e = j;
                c.O = b;
                c.sa = "";
                c.p = {};
                c.tc = function ()
                {
                        var h;
                        h = X(Q(c.O.k(), K + p + ".", ";"), p + ".")[1];
                        if (!N(h))
                        {
                                h = h.split("|");
                                g(1, c.p, h[1]);
                                c.sa = h[0];
                                c.Z()
                        }
                };
                c.Z = function ()
                {
                        c.Qb();
                        var h = c.sa,
                                k, n, r = "";
                        for (k in c.p) if ((n = c.p[k]) && 1 === n[2]) r += k + m + n[0] + m + n[1] + m + 1 + ",";
                        N(r) || (h += "|" + r);
                        if (N(h)) c.O.Vb();
                        else
                        {
                                c.O.Aa(p + "." + h);
                                c.O.Fa()
                        }
                };
                c.Ec = function (h)
                {
                        c.sa = h;
                        c.Z()
                };
                c.Cc = function (h, k, n, r)
                {
                        if (1 != r && 2 != r && 3 != r) r = 3;
                        var a = w;
                        if (k && n && h > 0 && h <= q.ob)
                        {
                                k = R(k);
                                n = R(n);
                                if (k[z] + n[z] <= 64)
                                {
                                        c.p[h] = [k, n, r];
                                        c.Z();
                                        a = v
                                }
                        }
                        return a
                };
                c.mc = function (h)
                {
                        if ((h = c.p[h]) && 1 === h[2]) return h[1]
                };
                c.Ub = function (h)
                {
                        var k = c.p;
                        if (k[h])
                        {
                                delete k[h];
                                c.Z()
                        }
                };
                c.Qb = function ()
                {
                        e._clearKey(8);
                        e._clearKey(9);
                        e._clearKey(11);
                        var h = c.p,
                                k, n;
                        for (n in h) if (k = h[n])
                        {
                                e._setKey(8, n, k[0]);
                                e._setKey(9, n, k[1]);
                                (k = k[2]) && 3 != k && e._setKey(11, n, "" + k)
                        }
                };

                function g(h, k, n)
                {
                        var r;
                        if (!N(n))
                        {
                                n = n.split(",");
                                for (var a = 0; a < n[z]; a++)
                                {
                                        r = n[a];
                                        if (!N(r))
                                        {
                                                r = r.split(m);
                                                if (r[z] == 4) k[r[0]] = [r[1], r[2], h]
                                        }
                                }
                        }
                }
        };
        Z.N = function ()
        {
                var f = this,
                        i = {}, b = "k",
                        j = "v",
                        c = [b, j],
                        p = "(",
                        m = ")",
                        q = "*",
                        e = "!",
                        g = "'",
                        h = {};
                h[g] = "'0";
                h[m] = "'1";
                h[q] = "'2";
                h[e] = "'3";
                var k = 1;

                function n(o, u, y, B)
                {
                        if (x == i[o]) i[o] = {};
                        if (x == i[o][u]) i[o][u] = [];
                        i[o][u][y] = B
                }
                function r(o, u, y)
                {
                        return x != i[o] && x != i[o][u] ? i[o][u][y] : x
                }
                function a(o, u)
                {
                        if (x != i[o] && x != i[o][u])
                        {
                                i[o][u] = x;
                                u = v;
                                var y;
                                for (y = 0; y < c[z]; y++) if (x != i[o][c[y]])
                                {
                                        u = w;
                                        break
                                }
                                if (u) i[o] = x
                        }
                }
                function d(o)
                {
                        var u = "",
                                y = w,
                                B, O;
                        for (B = 0; B < c[z]; B++)
                        {
                                O = o[c[B]];
                                if (x != O)
                                {
                                        if (y) u += c[B];
                                        u += l(O);
                                        y = w
                                }
                                else y = v
                        }
                        return u
                }

                function l(o)
                {
                        var u = [],
                                y, B;
                        for (B = 0; B < o[z]; B++) if (x != o[B])
                        {
                                y = "";
                                if (B != k && x == o[B - 1]) y += B.toString() + e;
                                y += t(o[B]);
                                V(u, y)
                        }
                        return p + u.join(q) + m
                }
                function t(o)
                {
                        var u = "",
                                y, B, O;
                        for (y = 0; y < o[z]; y++)
                        {
                                B = o.charAt(y);
                                O = h[B];
                                u += x != O ? O : B
                        }
                        return u
                }
                f.qc = function (o)
                {
                        return x != i[o]
                };
                f.G = function ()
                {
                        var o = "",
                                u;
                        for (u in i) if (x != i[u]) o += u.toString() + d(i[u]);
                        return o
                };
                f.Ac = function (o)
                {
                        if (o == x) return f.G();
                        var u = o.G(),
                                y;
                        for (y in i) if (x != i[y] && !o.qc(y)) u += y.toString() + d(i[y]);
                        return u
                };
                f._setKey = function (o, u, y)
                {
                        if (typeof y != "string") return w;
                        n(o, b, u, y);
                        return v
                };
                f._setValue = function (o, u, y)
                {
                        if (typeof y != "number" && (x == Number || !(y instanceof Number)) || Math.round(y) != y || y == NaN || y == Infinity) return w;
                        n(o, j, u, y.toString());
                        return v
                };
                f._getKey = function (o, u)
                {
                        return r(o, b, u)
                };
                f._getValue = function (o, u)
                {
                        return r(o, j, u)
                };
                f._clearKey = function (o)
                {
                        a(o, b)
                };
                f._clearValue = function (o)
                {
                        a(o, j)
                }
        };
        Z.Jb = function (f, i)
        {
                var b = this;
                b.Qc = i;
                b.xc = f;
                b._trackEvent = function (j, c, p)
                {
                        return i._trackEvent(b.xc, j, c, p)
                }
        };
        Z.aa = function (f, i)
        {
                var b = this,
                        j = x,
                        c = new Z.Gb,
                        p = w,
                        m = x;
                b.e = window;
                b.r = Math.round((new Date).getTime() / 1000);
                b.s = f || "UA-XXXXX-X";
                b.ab = c.a.referrer;
                b.ia = x;
                b.f = x;
                b.B = x;
                b.F = w;
                b.A = x;
                b.Ta = "";
                b.g = x;
                b.cb = x;
                b.c = x;
                b.i = x;
                c.o = i ? R(i) : x;

                function q()
                {
                        if ("auto" == c.b)
                        {
                                var a = c.a.domain;
                                if ("www." == P(a, 0, 4)) a = P(a, 4);
                                c.b = a
                        }
                        c.b = W(c.b)
                }
                function e()
                {
                        var a = c.b,
                                d = a.indexOf("www.google.") * a.indexOf(".google.") * a.indexOf("google.");
                        return d || "/" != c.h || a.indexOf("google.org") > -1
                }
                function g(a, d, l)
                {
                        if (N(a) || N(d) || N(l)) return "-";
                        a = Q(a, F + b.c + ".", d);
                        if (!N(a))
                        {
                                a = a.split(".");
                                a[5] = a[5] ? a[5] * 1 + 1 : 1;
                                a[3] = a[4];
                                a[4] = l;
                                a = a.join(".")
                        }
                        return a
                }
                function h()
                {
                        return "file:" != c.a[C].protocol && e()
                }
                function k(a)
                {
                        if (!a || "" == a) return "";
                        for (; ea(a.charAt(0));) a = P(a, 1);
                        for (; ea(a.charAt(a[z] - 1));) a = P(a, 0, a[z] - 1);
                        return a
                }
                function n(a, d, l, t)
                {
                        if (!N(a()))
                        {
                                d(t ? T(a()) : a());
                                U(a(), ";") || l()
                        }
                }
                function r(a)
                {
                        var d, l = "" != a && c.a[C].host != a;
                        if (l) for (d = 0; d < c.u[z]; d++) l = l && ga(W(a), W(c.u[d])) == -1;
                        return l
                }
                b.wc = function ()
                {
                        var a = w;
                        if (b.B) a = b.B.match(/^[0-9a-z-_.]{10,1200}$/i);
                        return a
                };
                b.jc = function ()
                {
                        return Y() ^ b.A.$b() & 2147483647
                };
                b.ec = function ()
                {
                        if (!c.b || "" == c.b || "none" == c.b)
                        {
                                c.b = "";
                                return 1
                        }
                        q();
                        return c.Ra ? ja(c.b) : 1
                };
                b.Yb = function (a, d)
                {
                        if (N(a)) a = "-";
                        else
                        {
                                d += c.h && "/" != c.h ? c.h : "";
                                d = a.indexOf(d);
                                a = d >= 0 && d <= 8 ? "0" : "[" == a.charAt(0) && "]" == a.charAt(a[z] - 1) ? "-" : a
                        }
                        return a
                };
                b.wa = function (a)
                {
                        var d = "",
                                l = c.a;
                        d += c.fa ? b.A.Ic() : "";
                        d += c.da ? b.Ta : "";
                        d += c.ga && !N(l.title) ? "&utmdt=" + R(l.title) : "";
                        d += "&utmhid=" + ka() + "&utmr=" + R(b.ia) + "&utmp=" + R(b.Bc(a));
                        return d
                };
                b.Bc = function (a)
                {
                        var d = c.a[C];
                        return a = x != a && "" != a ? R(a, v) : R(d.pathname + d.search, v)
                };
                b.Lc = function (a)
                {
                        if (b.J())
                        {
                                var d = "";
                                if (b.g != x && b.g.G()[z] > 0) d += "&utme=" + R(b.g.G());
                                d += b.wa(a);
                                j.H(d, b.s, b.c)
                        }
                };
                b.Tb = function ()
                {
                        var a = new Z.$(c);
                        return a.ua(b.c) ? a.Hc() : x
                };
                b._getLinkerUrl = function (a, d)
                {
                        var l = a.split("#"),
                                t = a,
                                o = b.Tb();
                        if (o) if (d && 1 >= l[z]) t += "#" + o;
                        else if (!d || 1 >= l[z]) if (1 >= l[z]) t += (U(a, "?") ? D : "?") + o;
                        else t = l[0] + (U(a, "?") ? D : "?") + o + "#" + l[1];
                        return t
                };
                b.Fc = function ()
                {
                        var a;
                        if (b.wc())
                        {
                                b.i.Dc(b.B);
                                b.i.Oc();
                                Z._gasoDomain = c.b;
                                Z._gasoCPath = c.h;
                                a = c.a.createElement("script");
                                a.type = "text/javascript";
                                a.id = "_gasojs";
                                a.src = "https://www.google.com/analytics/reporting/overlay_js?gaso=" + b.B + D + Y();
                                c.a.getElementsByTagName("head")[0].appendChild(a)
                        }
                };
                b.pc = function ()
                {
                        var a = b.r,
                                d = b.i,
                                l = d.k(),
                                t = b.c + "",
                                o = c.e,
                                u = o ? o.gaGlobal : x,
                                y, B = U(l, F + t + "."),
                                O = U(l, H + t),
                                ma = U(l, I + t),
                                G, J = [],
                                S = "",
                                ha = w;
                        l = N(l) ? "" : l;
                        if (c.z)
                        {
                                y = c.a[C] && c.a[C].hash ? c.a[C].href.substring(c.a[C].href.indexOf("#")) : "";
                                if (c.ba && !N(y)) S = y + D;
                                S += c.a[C].search;
                                if (!N(S) && U(S, F))
                                {
                                        d.zc(S);
                                        d.kb() || d.Sb();
                                        G = d.ja()
                                }
                                n(d.ma, d.vb, d.Eb, true);
                                n(d.la, d.Aa, d.Fa)
                        }
                        if (N(G)) if (B) if (!O || !ma)
                        {
                                G = g(l, ";", a);
                                b.F = v
                        }
                        else
                        {
                                G = Q(l, F + t + ".", ";");
                                J = X(Q(l, H + t, ";"), ".")
                        }
                        else
                        {
                                G = ia([t, b.jc(), a, a, a, 1], ".");
                                ha = b.F = v
                        }
                        else if (N(d.C()) || N(d.ka()))
                        {
                                G = g(S, D, a);
                                b.F = v
                        }
                        else
                        {
                                J = X(d.C(), ".");
                                t = J[0]
                        }
                        G = G.split(".");
                        if (o && u && u.dh == t && !c.o)
                        {
                                G[4] = u.sid ? u.sid : G[4];
                                if (ha)
                                {
                                        G[3] = u.sid ? u.sid : G[4];
                                        if (u.vid)
                                        {
                                                a = u.vid.split(".");
                                                G[1] = a[0];
                                                G[2] = a[1]
                                        }
                                }
                        }
                        d.tb(G.join("."));
                        J[0] = t;
                        J[1] = J[1] ? J[1] : 0;
                        J[2] = x != J[2] ? J[2] : c.Jc;
                        J[3] = J[3] ? J[3] : G[4];
                        d.ya(J.join("."));
                        d.ub(t);
                        N(d.lc()) || d.za(d.P());
                        d.Cb();
                        d.Ea();
                        d.Db()
                };
                b.rc = function ()
                {
                        j = new Z.Kb(c)
                };
                b._initData = function ()
                {
                        var a;
                        if (!p)
                        {
                                if (!b.A)
                                {
                                        b.A = new Z.Fb(c);
                                        b.A.bc()
                                }
                                b.c = b.ec();
                                b.i = new Z.$(c);
                                b.g = new Z.N;
                                m = new Z.Ib(c, b.c, b.i, b.g);
                                b.rc()
                        }
                        if (h())
                        {
                                b.pc();
                                m.tc()
                        }
                        if (!p)
                        {
                                if (h())
                                {
                                        b.ia = b.Yb(b.ab, c.a.domain);
                                        if (c.da)
                                        {
                                                a = new Z.m(b.c, b.ia, b.r, c);
                                                b.Ta = a.cc(b.i, b.F)
                                        }
                                }
                                b.cb = new Z.N;
                                p = v
                        }
                        Z.ib || b.sc()
                };
                b._visitCode = function ()
                {
                        b._initData();
                        var a = Q(b.i.k(), F + b.c + ".", ";");
                        a = a.split(".");
                        return a[z] < 4 ? "" : a[1]
                };
                b._cookiePathCopy = function (a)
                {
                        b._initData();
                        b.i && b.i.Nc(b.c, a)
                };
                b.sc = function ()
                {
                        var a = c.a[C].hash;
                        if (a && 1 == a.indexOf("gaso=")) a = Q(a, "gaso=", D);
                        else a = (a = c.e.name) && 0 <= a.indexOf("gaso=") ? Q(a, "gaso=", D) : Q(b.i.k(), da, ";");
                        if (a[z] >= 10)
                        {
                                b.B = a;
                                b.Fc()
                        }
                        Z.ib = v
                };
                b.J = function ()
                {
                        return b._visitCode() % 10000 < c.U * 100
                };
                b.Gc = function ()
                {
                        var a, d, l = c.a.links;
                        if (!c.lb)
                        {
                                a = c.a.domain;
                                if ("www." == P(a, 0, 4)) a = P(a, 4);
                                c.u.push("." + a)
                        }
                        for (a = 0; a < l[z] && (c.ra == -1 || a < c.ra); a++)
                        {
                                d = l[a];
                                if (r(d.host)) if (!d.gatcOnclick)
                                {
                                        d.gatcOnclick = d.onclick ? d.onclick : b.yc;
                                        d.onclick = function (t)
                                        {
                                                var o = !this.target || this.target == "_self" || this.target == "_top" || this.target == "_parent";
                                                o = o && !b.Rb(t);
                                                b.Mc(t, this, o);
                                                return o ? w : this.gatcOnclick ? this.gatcOnclick(t) : v
                                        }
                                }
                        }
                };
                b.yc = function ()
                {};
                b._trackPageview = function (a)
                {
                        if (h())
                        {
                                b._initData();
                                c.u && b.Gc();
                                b.Lc(a);
                                b.F = w
                        }
                };
                b._trackTrans = function ()
                {
                        var a = b.c,
                                d = [],
                                l, t, o;
                        b._initData();
                        if (b.f && b.J())
                        {
                                for (l = 0; l < b.f.Y[z]; l++)
                                {
                                        t = b.f.Y[l];
                                        V(d, t.Ca());
                                        for (o = 0; o < t.R[z]; o++) V(d, t.R[o].Ca())
                                }
                                for (l = 0; l < d[z]; l++) j.H(d[l], b.s, a, v)
                        }
                };
                b._setTrans = function ()
                {
                        var a = c.a,
                                d, l, t;
                        a = a.getElementById ? a.getElementById("utmtrans") : a.utmform && a.utmform.utmtrans ? a.utmform.utmtrans : x;
                        b._initData();
                        if (a && a.value)
                        {
                                b.f = new Z.n;
                                t = a.value.split("UTM:");
                                c.v = !c.v || "" == c.v ? "|" : c.v;
                                for (a = 0; a < t[z]; a++)
                                {
                                        t[a] = k(t[a]);
                                        d = t[a].split(c.v);
                                        for (l = 0; l < d[z]; l++) d[l] = k(d[l]);
                                        if ("T" == d[0]) b._addTrans(d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8]);
                                        else "I" == d[0] && b._addItem(d[1], d[2], d[3], d[4], d[5], d[6])
                                }
                        }
                };
                b._addTrans = function (a, d, l, t, o, u, y, B)
                {
                        b.f = b.f ? b.f : new Z.n;
                        return b.f.Ob(a, d, l, t, o, u, y, B)
                };
                b._addItem = function (a, d, l, t, o, u)
                {
                        var y;
                        b.f = b.f ? b.f : new Z.n;
                        (y = b.f.hb(a)) || (y = b._addTrans(a, "", "", "", "", "", "", ""));
                        y.Nb(d, l, t, o, u)
                };
                b._setVar = function (a)
                {
                        if (a && "" != a && e())
                        {
                                b._initData();
                                m.Ec(R(a));
                                b.J() && j.H("&utmt=var", b.s, b.c)
                        }
                };
                b._setCustomVar = function (a, d, l, t)
                {
                        b._initData();
                        return m.Cc(a, d, l, t)
                };
                b._deleteCustomVar = function (a)
                {
                        b._initData();
                        m.Ub(a)
                };
                b._getVisitorCustomVar = function (a)
                {
                        b._initData();
                        return m.mc(a)
                };
                b._setMaxCustomVariables = function (a)
                {
                        c.ob = a
                };
                b._link = function (a, d)
                {
                        if (c.z && a)
                        {
                                b._initData();
                                c.a[C].href = b._getLinkerUrl(a,
                                d)
                        }
                };
                b._linkByPost = function (a, d)
                {
                        if (c.z && a && a.action)
                        {
                                b._initData();
                                a.action = b._getLinkerUrl(a.action, d)
                        }
                };
                b._setXKey = function (a, d, l)
                {
                        b.g._setKey(a, d, l)
                };
                b._setXValue = function (a, d, l)
                {
                        b.g._setValue(a, d, l)
                };
                b._getXKey = function (a, d)
                {
                        return b.g._getKey(a, d)
                };
                b._getXValue = function (a, d)
                {
                        return b.g.getValue(a, d)
                };
                b._clearXKey = function (a)
                {
                        b.g._clearKey(a)
                };
                b._clearXValue = function (a)
                {
                        b.g._clearValue(a)
                };
                b._createXObj = function ()
                {
                        b._initData();
                        return new Z.N
                };
                b._sendXEvent = function (a)
                {
                        var d = "";
                        b._initData();
                        if (b.J())
                        {
                                d += "&utmt=event&utme=" + R(b.g.Ac(a)) + b.wa();
                                j.H(d, b.s, b.c, w, v)
                        }
                };
                b._createEventTracker = function (a)
                {
                        b._initData();
                        return new Z.Jb(a, b)
                };
                b._trackEvent = function (a, d, l, t)
                {
                        var o = b.cb;
                        if (x != a && x != d && "" != a && "" != d)
                        {
                                o._clearKey(5);
                                o._clearValue(5);
                                (a = o._setKey(5, 1, a) && o._setKey(5, 2, d) && (x == l || o._setKey(5, 3, l)) && (x == t || o._setValue(5, 1, t))) && b._sendXEvent(o)
                        }
                        else a = w;
                        return a
                };
                b.Mc = function (a, d, l)
                {
                        b._initData();
                        if (b.J())
                        {
                                var t = new Z.N;
                                t._setKey(6, 1, d.href);
                                var o = l ? function ()
                                        {
                                                b.db(a, d)
                                        } : x;
                                j.H("&utmt=event&utme=" + R(t.G()) + b.wa(), b.s, b.c, w, v, o);
                                if (l)
                                {
                                        var u = this;
                                        c.e.setTimeout(function ()
                                        {
                                                u.db(a, d)
                                        }, 500)
                                }
                        }
                };
                b.db = function (a, d)
                {
                        if (!a) a = c.e.event;
                        var l = v;
                        if (d.gatcOnclick) l = d.gatcOnclick(a);
                        if (l || typeof l == "undefined") if (!d.target || d.target == "_self") c.e[C] = d.href;
                        else if (d.target == "_top") c.e.top.document[C] = d.href;
                        else if (d.target == "_parent") c.e.parent.document[C] = d.href
                };
                b.Rb = function (a)
                {
                        if (!a) a = c.e.event;
                        var d = a.shiftKey || a.ctrlKey || a.altKey;
                        if (!d) if (a.modifiers && c.e.Event) d = a.modifiers & c.e.Event.CONTROL_MASK || a.modifiers & c.e.Event.SHIFT_MASK || a.modifiers & c.e.Event.ALT_MASK;
                        return d
                };
                b.Pc = function ()
                {
                        return c
                };
                b._setDomainName = function (a)
                {
                        c.b = a
                };
                b._addOrganic = function (a, d, l)
                {
                        c.T.splice(l ? 0 : c.T.length, 0, new Z.Ha(a, d))
                };
                b._clearOrganic = function ()
                {
                        c.T = []
                };
                b._addIgnoredOrganic = function (a)
                {
                        V(c.ta, a)
                };
                b._clearIgnoredOrganic = function ()
                {
                        c.ta = []
                };
                b._addIgnoredRef = function (a)
                {
                        V(c.va, a)
                };
                b._clearIgnoredRef = function ()
                {
                        c.va = []
                };
                b._setAllowHash = function (a)
                {
                        c.Ra = a ? 1 : 0
                };
                b._setCampaignTrack = function (a)
                {
                        c.da = a ? 1 : 0
                };
                b._setClientInfo = function (a)
                {
                        c.fa = a ? 1 : 0
                };
                b._getClientInfo = function ()
                {
                        return c.fa
                };
                b._setCookiePath = function (a)
                {
                        c.h = a
                };
                b._setTransactionDelim = function (a)
                {
                        c.v = a
                };
                b._setCookieTimeout = function (a)
                {
                        c.Ya = a
                };
                b._setDetectFlash = function (a)
                {
                        c.ha = a ? 1 : 0
                };
                b._getDetectFlash = function ()
                {
                        return c.ha
                };
                b._setDetectTitle = function (a)
                {
                        c.ga = a ? 1 : 0
                };
                b._getDetectTitle = function ()
                {
                        return c.ga
                };
                b._setLocalGifPath = function (a)
                {
                        c.oa = a
                };
                b._getLocalGifPath = function ()
                {
                        return c.oa
                };
                b._setLocalServerMode = function ()
                {
                        c.I = 0
                };
                b._setRemoteServerMode = function ()
                {
                        c.I = 1
                };
                b._setLocalRemoteServerMode = function ()
                {
                        c.I = 2
                };
                b._getServiceMode = function ()
                {
                        return c.I
                };
                b._setSampleRate = function (a)
                {
                        c.U = a
                };
                b._setSessionTimeout = function (a)
                {
                        c.sb = a
                };
                b._setAllowLinker = function (a)
                {
                        c.z = a ? 1 : 0
                };
                b._setAllowAnchor = function (a)
                {
                        c.ba = a ? 1 : 0
                };
                b._setCampNameKey = function (a)
                {
                        c.Ia = a
                };
                b._setCampContentKey = function (a)
                {
                        c.Ja = a
                };
                b._setCampIdKey = function (a)
                {
                        c.Ka = a
                };
                b._setCampMediumKey = function (a)
                {
                        c.La = a
                };
                b._setCampNOKey = function (a)
                {
                        c.Ma = a
                };
                b._setCampSourceKey = function (a)
                {
                        c.Na = a
                };
                b._setCampTermKey = function (a)
                {
                        c.Oa = a
                };
                b._setCampCIdKey = function (a)
                {
                        c.Pa = a
                };
                b._getAccount = function ()
                {
                        return b.s
                };
                b._setAccount = function (a)
                {
                        b.s = a
                };
                b._setNamespace = function (a)
                {
                        c.o = a ? R(a) : x
                };
                b._getVersion = function ()
                {
                        return ba
                };
                b._setAutoTrackOutbound = function (a)
                {
                        c.u = [];
                        if (a) c.u = a
                };
                b._setTrackOutboundSubdomains = function (a)
                {
                        c.lb = a
                };
                b._setHrefExamineLimit = function (a)
                {
                        c.ra = a
                };
                b._setReferrerOverride = function (a)
                {
                        b.ab = a
                };
                b._setCookiePersistence = function (a)
                {
                        Z.t = a
                }
        };
        Z._getTracker = function (f, i)
        {
                return new Z.aa(f, i)
        };
        var $ = {
                ca: {},
                _createAsyncTracker: function (f, i)
                {
                        i = i || "";
                        f = new Z.aa(f);
                        return $.ca[i] = f
                },
                _getAsyncTracker: function (f)
                {
                        f = f || "";
                        var i = $.ca[f];
                        if (!i)
                        {
                                i = new Z.aa;
                                $.ca[f] = i
                        }
                        return i
                },
                push: function ()
                {
                        for (var f = arguments, i = 0, b = 0; b < f[z]; b++) try
                        {
                                if (typeof f[b] === "function") f[b]();
                                else
                                {
                                        var j = "",
                                                c = f[b][0],
                                                p = c.lastIndexOf(".");
                                        if (p > 0)
                                        {
                                                j = P(c, 0, p);
                                                c = P(c, p + 1)
                                        }
                                        var m = $._getAsyncTracker(j);
                                        m[c].apply(m, f[b].slice(1))
                                }
                        }
                        catch (q)
                        {
                                i++
                        }
                        return i
                }
        };
        window[aa] = Z;
        var la = window[s];

        function na()
        {
                var f = window[s],
                        i = w;
                if (f && typeof f.push == "function")
                {
                        i = f.constructor == Array;
                        if (!i) return
                }
                window[s] = $;
                i && $.push.apply($, f)
        }
        na();
})()