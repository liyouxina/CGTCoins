(function(e) {
        function t(t) {
            for (var i, o, s = t[0], l = t[1], c = t[2], d = 0, p = []; d < s.length; d++)
                o = s[d],
                Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]),
                    a[o] = 0;
            for (i in l)
                Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
            u && u(t);
            while (p.length)
                p.shift()();
            return r.push.apply(r, c || []),
                n()
        }
        function n() {
            for (var e, t = 0; t < r.length; t++) {
                for (var n = r[t], i = !0, o = 1; o < n.length; o++) {
                    var l = n[o];
                    0 !== a[l] && (i = !1)
                }
                i && (r.splice(t--, 1),
                    e = s(s.s = n[0]))
            }
            return e
        }
        var i = {}
            , a = {
            index: 0
        }
            , r = [];
        function o(e) {
            return s.p + "static/js/" + ({
                "pages-assets-assets": "pages-assets-assets",
                "pages-assets-charge": "pages-assets-charge",
                "pages-assets-mention": "pages-assets-mention",
                "pages-assets-tradeAccount": "pages-assets-tradeAccount",
                "pages-assets-transfer": "pages-assets-transfer",
                "pages-home-home": "pages-home-home",
                "pages-home-news": "pages-home-news",
                "pages-home-newsDetail": "pages-home-newsDetail",
                "pages-ieo-detail": "pages-ieo-detail",
                "pages-ieo-index": "pages-ieo-index",
                "pages-ieo-link": "pages-ieo-link",
                "pages-legal-legal": "pages-legal-legal",
                "pages-legal-order~pages-legal-orderDetail": "pages-legal-order~pages-legal-orderDetail",
                "pages-legal-order": "pages-legal-order",
                "pages-legal-orderDetail": "pages-legal-orderDetail",
                "pages-legal-recordlist": "pages-legal-recordlist",
                "pages-legal-store": "pages-legal-store",
                "pages-legal-storeDetail": "pages-legal-storeDetail",
                "pages-legal-storeOrder": "pages-legal-storeOrder",
                "pages-legal-storeUser": "pages-legal-storeUser",
                "pages-legal-transactionRecord": "pages-legal-transactionRecord",
                "pages-legal-transfer": "pages-legal-transfer",
                "pages-lever-lever": "pages-lever-lever",
                "pages-lever-leverList": "pages-lever-leverList",
                "pages-lever-orderList": "pages-lever-orderList",
                "pages-lockming-index": "pages-lockming-index",
                "pages-lockming-list": "pages-lockming-list",
                "pages-market-kline": "pages-market-kline",
                "pages-market-market": "pages-market-market",
                "pages-market-second": "pages-market-second",
                "pages-mine-about": "pages-mine-about",
                "pages-mine-collect_money": "pages-mine-collect_money",
                "pages-mine-forgetPwd": "pages-mine-forgetPwd",
                "pages-mine-forgetPwdNext": "pages-mine-forgetPwdNext",
                "pages-mine-invite": "pages-mine-invite",
                "pages-mine-kefu": "pages-mine-kefu",
                "pages-mine-login": "pages-mine-login",
                "pages-mine-modifyPwd": "pages-mine-modifyPwd",
                "pages-mine-modifyPwdNext": "pages-mine-modifyPwdNext",
                "pages-mine-real_authentication": "pages-mine-real_authentication",
                "pages-mine-gaojirenzheng": "pages-mine-gaojirenzheng",
                "pages-mine-register": "pages-mine-register",
                "pages-mine-resetLegalPwd": "pages-mine-resetLegalPwd",
                "pages-mine-security": "pages-mine-security",
                "pages-mine-setPwd": "pages-mine-setPwd",
                "pages-mine-userCenter": "pages-mine-userCenter",
                "pages-trade-entrust": "pages-trade-entrust",
                "pages-trade-trade": "pages-trade-trade"
            }[e] || e) + "." + {
                "pages-assets-assets": "6caf2195",
                "pages-assets-charge": "7a3c8d1f",
                "pages-assets-mention": "3fb46557",
                "pages-assets-tradeAccount": "284f2774",
                "pages-assets-transfer": "d692f1c5",
                "pages-home-home": "414908b9",
                "pages-home-news": "b2852121",
                "pages-home-newsDetail": "56020894",
                "pages-ieo-detail": "a5e354d2",
                "pages-ieo-index": "9b1acb72",
                "pages-ieo-link": "5fa796e5",
                "pages-legal-legal": "9aab4e6e",
                "pages-legal-order~pages-legal-orderDetail": "b231bed0",
                "pages-legal-order": "dcc0a8c8",
                "pages-legal-orderDetail": "a42ff430",
                "pages-legal-recordlist": "e7e2cd7d",
                "pages-legal-store": "69c7984c",
                "pages-legal-storeDetail": "75c7fba8",
                "pages-legal-storeOrder": "c06535e4",
                "pages-legal-storeUser": "a5ef8533",
                "pages-legal-transactionRecord": "5c2d5be9",
                "pages-legal-transfer": "3bdaa177",
                "pages-lever-lever": "ffad4c5b",
                "pages-lever-leverList": "ae2e0ed7",
                "pages-lever-orderList": "4068b491",
                "pages-lockming-index": "fd26861d",
                "pages-lockming-list": "655c7217",
                "pages-market-kline": "e81061c7",
                "pages-market-market": "b7633a58",
                "pages-market-second": "e737dfcc",
                "pages-mine-about": "69a9ac5d",
                "pages-mine-collect_money": "3939423a",
                "pages-mine-forgetPwd": "495307a6",
                "pages-mine-forgetPwdNext": "ef178bbe",
                "pages-mine-invite": "1ef6a5f1",
                "pages-mine-kefu": "19a0deb7",
                "pages-mine-login": "4a9b4723",
                "pages-mine-modifyPwd": "323e6638",
                "pages-mine-modifyPwdNext": "7a34b0d9",
                "pages-mine-real_authentication": "8e176bfd",
                "pages-mine-gaojirenzheng": "56d4a48",
                "pages-mine-register": "8e418931",
                "pages-mine-resetLegalPwd": "8afd7f01",
                "pages-mine-security": "19c40b18",
                "pages-mine-setPwd": "78d63c24",
                "pages-mine-userCenter": "6e653e12",
                "pages-trade-entrust": "f524a4df",
                "pages-trade-trade": "3f5bb703"
            }[e] + ".js"
        }
        function s(t) {
            if (i[t])
                return i[t].exports;
            var n = i[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, s),
                n.l = !0,
                n.exports
        }
        s.e = function(e) {
            var t = []
                , n = a[e];
            if (0 !== n)
                if (n)
                    t.push(n[2]);
                else {
                    var i = new Promise((function(t, i) {
                            n = a[e] = [t, i]
                        }
                    ));
                    t.push(n[2] = i);
                    var r, l = document.createElement("script");
                    l.charset = "utf-8",
                        l.timeout = 120,
                    s.nc && l.setAttribute("nonce", s.nc),
                        l.src = o(e);
                    var c = new Error;
                    r = function(t) {
                        l.onerror = l.onload = null,
                            clearTimeout(d);
                        var n = a[e];
                        if (0 !== n) {
                            if (n) {
                                var i = t && ("load" === t.type ? "missing" : t.type)
                                    , r = t && t.target && t.target.src;
                                c.message = "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")",
                                    c.name = "ChunkLoadError",
                                    c.type = i,
                                    c.request = r,
                                    n[1](c)
                            }
                            a[e] = void 0
                        }
                    }
                    ;
                    var d = setTimeout((function() {
                            r({
                                type: "timeout",
                                target: l
                            })
                        }
                    ), 12e4);
                    l.onerror = l.onload = r,
                        document.head.appendChild(l)
                }
            return Promise.all(t)
        }
            ,
            s.m = e,
            s.c = i,
            s.d = function(e, t, n) {
                s.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            s.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            s.t = function(e, t) {
                if (1 & t && (e = s(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (s.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & t && "string" != typeof e)
                    for (var i in e)
                        s.d(n, i, function(t) {
                            return e[t]
                        }
                            .bind(null, i));
                return n
            }
            ,
            s.n = function(e) {
                var t = e && e.__esModule ? function() {
                        return e["default"]
                    }
                    : function() {
                        return e
                    }
                ;
                return s.d(t, "a", t),
                    t
            }
            ,
            s.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            s.p = "/h5/",
            s.oe = function(e) {
                throw console.error(e),
                    e
            }
        ;
        var l = window["webpackJsonp"] = window["webpackJsonp"] || []
            , c = l.push.bind(l);
        l.push = t,
            l = l.slice();
        for (var d = 0; d < l.length; d++)
            t(l[d]);
        var u = c;
        r.push([0, "chunk-vendors"]),
            n()
    }
)({
    0: function(e, t, n) {
        e.exports = n("4ca6")
    },
    "09d6": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r = i(n("ade3")), o = {
            zdy: (a = {
                scsj: "Waktu penguncian",
                a37: "Terima hadiahnya dengan mudah",
                a33: "Pembatalan akan dipotong",
                a32: "Bunga Total",
                a31: "Jumlah Koin yang Disetor",
                a30: "Catatan posisi terkunci",
                a29: "Estimasi Total Pendapatan",
                a28: "Menambang lebih mudah",
                a27: "Menambang Harta Karun",
                a26: "Periode penguncian",
                a25: "Surga",
                a24: "Bunga Yen Jepang",
                a23: "Referensi tahunanisasi selama 3 hari terakhir",
                a22: "Kunci posisi untuk mendapatkan koin",
                a21: "Batalkan janji",
                a20: "Waktu kedaluwarsa",
                a19: "Waktu Sumpah",
                a18: "Jumlah untuk menjadi keluaran",
                a17: "Nomor Proyek",
                a16: "Catatan Ikrar",
                a15: "Membatalkan gadai dan mengembalikan pokok, tidak ada penghasilan yang dapat diperoleh",
                a14: "Tidak Cukup",
                a13: "Saldo Wallet",
                a12: "Jumlah jaminan",
                a11: "Ikrar",
                a10: "Token",
                a9: "Jumlah keluaran akan diubah menjadi nilai yang setara",
                a8: "Perkiraan kuantitas menjadi keluaran",
                a7: "Pendapatan Total",
                a6: "Dapatkan banyak keuntungan",
                a5: "Setoran",
                a4: "Ikrar Seluler",
                a3: "Pemegang dapat menikmati pendapatan jaminan",
                a36: "Bank Pembuka Rekening Pengiriman Uang",
                a35: "nomor kartu bank pengiriman uang",
                a34: "Nama Pengiriman Uang",
                oldpwd: "Silakan masukkan sandi lama",
                zxkf: "pelanggan online",
                a2: "Perlu membayar",
                a1: "Mata Uang Langganan",
                a0: "Pemotongan penarikan",
                dqyuee: "saldo saat ini",
                download: "Unduh APLIKASI",
                czsl: "Isi ulang kuantitas",
                qbdz: "Alamat deposit",
                enterqbdz: "Silakan masukkan alamat deposit",
                tjsh: "Kirimkan ulasan",
                sb01: "Waktu aplikasi pendaftaran tergantung pada kualitas penyerahan data",
                sb02: "Hasil aplikasi",
                sb03: "Setelah menerima email konfirmasi, kirimkan informasi yang relevan sesuai dengan email tersebut",
                sb04: "Kirimkan informasi",
                sb05: "Kirimkan aplikasi untuk listing",
                sb06: "Aplikasi",
                sb07: "proses aplikasi",
                sb08: "Ajukan permohonan untuk daftar",
                sb09: "PaxfulCoins menjunjung tinggi segalanya demi pelanggan, mengutamakan kepentingan pengguna, dan sekarang mencari proyek (mata uang) berkualitas tinggi untuk membayar pelanggan atas dukungan jangka panjang mereka. Beli koin berkualitas tinggi, beli koin bernilai, hanya pilih PaxfulCoins!",
                ksgt: "Komunikasi cepat",
                sbsq: "Aplikasi untuk daftar",
                qrszfpz: "Silakan masukkan voucher pembayaran",
                zfpz: "Voucher pembayaran",
                dqsy: "Penghasilan saat ini",
                ygsy: "Estimasi pendapatan",
                rgcz: "Operasi langganan",
                srrgsl: "Masukkan jumlah langganan",
                kdh: "Mobil atap terbuka",
                gw: "Situs resmi",
                bps: "kertas putih",
                sgzq: "Siklus berlangganan",
                yr: "Pemanasan",
                sg: "Langganan",
                js: "Akhir",
                xmxq: "Detail proyek",
                rg: "Langganan",
                ieo: "Berlangganan IEO",
                zt: "status",
                fhjg: "Harga masalah",
                dqsj: "Tanggal kadaluarsa"
            },
                (0,
                    r.default)(a, "scsj", "Waktu penguncian"),
                (0,
                    r.default)(a, "yjsy", "Hasil yang diharapkan"),
                (0,
                    r.default)(a, "zxscsl", "Kuantitas penguncian minimum"),
                (0,
                    r.default)(a, "syl", "tingkat pengembalian"),
                (0,
                    r.default)(a, "sc", "Terkunci"),
                (0,
                    r.default)(a, "ts", "Hari"),
                (0,
                    r.default)(a, "fhzl", "Total penerbitan"),
                (0,
                    r.default)(a, "jssj", "Akhir waktu"),
                (0,
                    r.default)(a, "yjs", "lebih"),
                (0,
                    r.default)(a, "wks", "belum dimulai"),
                (0,
                    r.default)(a, "jxz", "pengolahan"),
                (0,
                    r.default)(a, "scz", "Terkunci"),
                (0,
                    r.default)(a, "ydq", "kadaluarsa"),
                (0,
                    r.default)(a, "nodata", "tidak ada data"),
                (0,
                    r.default)(a, "nomore", "Tidak ada lagi data"),
                (0,
                    r.default)(a, "more", "Muat lebih banyak"),
                (0,
                    r.default)(a, "qbye", "Saldo dompet"),
                (0,
                    r.default)(a, "scgz", "Aturan penguncian"),
                (0,
                    r.default)(a, "sclb", "Daftar kunci"),
                (0,
                    r.default)(a, "scwk", "Penambangan terkunci"),
                (0,
                    r.default)(a, "sly", "tingkat pengembalian"),
                (0,
                    r.default)(a, "yebz", "Saldo tidak cukup"),
                (0,
                    r.default)(a, "mhydd", "Perintah kontrak kedua"),
                (0,
                    r.default)(a, "gmj", "Harga pembelian"),
                (0,
                    r.default)(a, "cjj", "harga akhir"),
                (0,
                    r.default)(a, "yjyk", "Taksiran untung dan rugi"),
                (0,
                    r.default)(a, "yk", "Laba rugi"),
                (0,
                    r.default)(a, "djs", "Hitung mundur"),
                a),
            login: {
                l_mobile: "login melalui telepon",
                l_email: "Email Login",
                p_email: "silahkan masukan email anda",
                p_mobile: "Harap masukkan nomor telepon",
                p_pwd: "Silakan masukkan kata sandi",
                p_confirmPwd: "Mohon konfirmasi kata sandi Anda",
                p_confirmtradePwd: "kata sandi transaksi",
                p_vcode: "harap masukkan kode verifikasi",
                get_code: "dapatkan kode verifikasi",
                rem_pwd: "Ingat kata Sandi",
                login: "Gabung",
                noaccount: "Belum punya akun PaxfulCoins?",
                register: "terdaftar",
                forget_pwd: "layanan online",
                p_taccount: "silahkan masukkan nomor telepon yang benar",
                p_temail: "silakan masukkan email vaild Anda",
                p_pwderr: "Kata sandi salah",
                l_success: "login berhasil",
                r_noedit: "Tidak dapat diubah setelah pendaftaran",
                r_mobile: "Daftarkan ponsel Anda",
                r_email: "registrasi email",
                r_hasaccount: "Punya akun PaxfulCoins",
                r_next: "Langkah berikutnya",
                r_sms: "Verifikasi SMS",
                r_smsemail: "Verifikasi email",
                r_pmobilecode: "Harap masukkan kode verifikasi telepon",
                r_pemailcode: "Harap masukkan kode verifikasi email",
                r_send: "Kirim",
                p_len: "Panjang kata sandi adalah 6 ~ 16 digit",
                p_notsame: "Masukan sandi tidak konsisten",
                p_simple: "Kata sandi terlalu sederhana, silakan masukkan kembali",
                p_inputagain: "Masukan kata sandi tidak konsisten, harap masukkan kembali",
                p_first: "Harap baca dan setujui perjanjian pengguna terlebih dahulu",
                p_invitecode: "Kode undhangan (bisa kosong)",
                p_inviteInput: "Harap masukkan kode undangan",
                p_agree: "saya setuju",
                p_private: "Perjanjian Pengguna dan Kebijakan Privasi",
                p_set: "Mendirikan",
                p_setPwd: "atur kata sandi",
                f_mobile: "Pemulihan telepon",
                f_email: "Ambil Email",
                e_mb: "nomor telepon",
                e_email: "kotak surat",
                e_pwd: "ganti kata sandi",
                e_chongzhi: "setel ulang Kata Sandi",
                e_dealPwd: "Ubah kata sandi transaksi",
                e_pdeal: "Silakan masukkan kata sandi transaksi",
                e_pdealerr: "Kata sandi transaksi salah dimasukkan",
                e_pdealConfrim: "Mohon konfirmasi kata sandi transaksi",
                e_confrim: "Konfirmasi",
                e_confrim2: "menentukan",
                security: "Pusat keamanan",
                s_loginpwd: "kata sandi masuk",
                s_dealpwd: "kata sandi transaksi",
                s_edit: "memodifikasi"
            },
            about: {
                abt: "tentang kami",
                concat: "hubungi kami",
                privat: "Kebijakan pribadi",
                theme: "Mode malam"
            },
            collect: {
                method: "Cara Pembayaran",
                name: "nama sebenarnya",
                p_name: "silahkan masukkan nama asli anda",
                bank: "Akun bank",
                p_bank: "Harap masukkan bank pembuka rekening",
                no: "Nomor kartu bank",
                p_no: "Harap masukkan nomor kartu bank",
                alipay: "Nomor Alipay",
                p_alipay: "Silakan masuk ke akun Alipay",
                nick: "Nama panggilan WeChat",
                p_nick: "Harap masukkan nama panggilan WeChat",
                wechat: "Akun WeChat",
                p_wechat: "Silakan masuk ke akun WeChat",
                wechatCode: "Kode pembayaran WeChat",
                alipayCode: "Kode pembayaran Alipay",
                up_wechatCode: "Harap unggah kode pembayaran WeChat",
                up_alipayCode: "Harap unggah kode pembayaran Alipay",
                cardno: "nomor identitas",
                p_cardno: "Harap masukkan nomor identifikasi",
                up_card: "Unggah foto identitas",
                up_cardz: "Unggah bagian depan KTP",
                up_cardf: "Unggah sisi belakang KTP",
                up_cardhand: "Unggah kartu ID genggam"
            },
            bind: {
                bindAddr: "Ikat alamat penarikan",
                cur_select: "Mata uang yang dipilih saat ini",
                addr: "Alamat penarikan",
                codeauth: "Kode otorisasi saya",
                codetip: "Saat menambahkan pengguna sebagai agensi, kode otorisasi pengguna perlu diverifikasi",
                p_addr: "Silakan masukkan alamat penarikan",
                code: "Kode verifikasi",
                bind: "Mengikat",
                sendSuccess: "Berhasil dikirim",
                bindOk: "Berhasil mengikat",
                tuiguang: "Kode promosi saya",
                codes: "Kode promosi",
                tip: "Pindai pola kode QR di atas atau masukkan kode promosi untuk mengonfirmasi pendaftaran",
                liantype: "Jenis rantai"
            },
            authentication: {
                person: "Pusat pribadi",
                renzheng: "Autentikasi",
                gaoji: "Verifikasi lanjutan",
                go: "Pergi ke sertifikasi",
                ing: "sedang ditinjau",
                has: "diverifikasi",
                rz_tip: "Batas penarikan dapat ditingkatkan setelah otentikasi",
                name: "Nama",
                account: "nomor rekening",
                zj: "nomor lisensi"
            },
            home: {
                legal: "Transaksi mata uang fiat",
                zhichi: "Mendukung BTC, USDT, dll.",
                lever: "Transaksi kontrak",
                news: "Pusat Berita",
                security: "Aman dan terpercaya",
                leader: "Platform perdagangan aset digital terkemuka di dunia",
                updowns: "Tambah daftar",
                name: "nama",
                new_price: "Harga terbaru",
                fu: "Perubahan kutipan",
                p_login: "silakan masuk",
                welcome: "Selamat datang di PaxfulCoins",
                myshop: "toko saya",
                myshare: "Link share saya",
                logout: "keluar",
                detail: "Detail",
                up: "Tarik memuat",
                nomore: "Tidak ada lagi data",
                norecord: "Tidak ada catatan",
                loading: "Memuat",
                team: "kelompok ku",
                fast: "Beli koin dengan cepat",
                micro: "Transaksi kontrak kedua"
            },
            market: {
                market: "Tanda kutip",
                volume: "Volume 24 jam",
                home: "Rumah"
            },
            trade: {
                trade: "Transaksi mata uang",
                buy: "Membeli di",
                sell: "Menjual",
                limit: "Batasi harga",
                shi: "harga pasar",
                cancel: "membatalkan",
                best: "Berdaganglah dengan harga terbaik saat ini",
                num: "Kuantitas",
                use: "Tersedia",
                amout: "Jumlah transaksi",
                price: "harga",
                time: "waktu",
                bibi: "Koin",
                all: "Semua",
                back: "Mencabut",
                dui: "Pasangan perdagangan",
                notenough: "Saldo tidak mencukupi",
                notbest: "Saat ini belum ada harga terbaik",
                p_price: "Silakan masukkan harga",
                p_num: "Silakan masukkan jumlahnya",
                delegate: "Komisi saat ini",
                all_delegate: "Semua ditugaskan",
                his_delegate: "Komisi sejarah",
                has_done: "lengkap",
                has_cancel: "Dibatalkan",
                has_pay: "Sudah dibayar",
                fee: "Biaya penanganan",
                handnum: "Banyak perdagangan",
                p_handnum: "Silakan masukkan banyak",
                balance: "Keseimbangan",
                buy_duo: "Beli (beli panjang)",
                sell_kong: "Jual (pendek)",
                pankou: "Rintangan",
                chicang: "Posisi",
                types: "Jenis dari",
                operate: "Pengoperasian",
                pingcang: "Likuidasi",
                chedan: "Batalkan pesanan",
                duo: "Melakukan lebih",
                kong: "Pendek",
                hands: "Lot",
                hand: "tangan",
                times: "banyak",
                money: "Batas",
                confrim_ping: "Apakah Anda yakin akan menutup posisi?",
                confrim_order: "Konfirmasi pemesanan",
                confrim_chedan: "Konfirmasi pembatalan?",
                p_times: "Pilih lebih dari satu",
                p_hands: "Pilih atau masukkan lot",
                p_delprice: "Silakan masukkan harga komisi",
                p_notless: "Jumlah lot yang dimasukkan tidak boleh kurang dari",
                p_notmore: "Jumlah lot yang dimasukkan tidak boleh lebih dari",
                delegate_price: "Harga komisi",
                price_cang: "Harga pembukaan",
                price_zhiying: "Harga Take Profit",
                num_zhehe: "Kuantitas yang dikonversi",
                price_cur: "Harga sekarang",
                price_lose: "Hentikan harga",
                can_money: "Margin yang tersedia",
                time_start: "Waktu pembukaan",
                geye_fee: "Biaya menginap",
                dealtype: "tipe transaksi"
            },
            lever: {
                delegating: "Komisioning",
                dealing: "dalam transaksi",
                pingcanging: "Penutupan",
                hasping: "Tutup",
                hasback: "Pesanan dibatalkan",
                risk: "Tingkat resiko",
                totalyk: "Total keuntungan dan kerugian posisi",
                yijian: "Likuidasi satu klik",
                setys: "Tetapkan stop profit dan stop loss",
                profit: "Keuntungan yang diharapkan",
                lose: "Kerugian yang diharapkan",
                price_zhiying: "Ambil harga untung",
                price_lose: "Hentikan harga",
                all_ping: "Tutup semua posisi",
                duo_ping: "Hanya pesanan lebih datar",
                kong_ping: "Hanya tutup pesanan singkat"
            },
            assets: {
                trade: "Koin",
                lever: "kontrak",
                legal: "Mata uang fiat",
                micro: "Kontrak kedua",
                manage: "Manajemen keuangan",
                tradeacc: "Akun mata uang",
                leveracc: "Akun kontrak",
                legalacc: "Akun Fiat",
                microacc: "Akun kontrak kedua",
                zhehe: "Mengubah",
                zhehecny: "Total aset yang dikonversi",
                lock: "membekukan",
                assets: "aktiva",
                records: "Catatan keuangan",
                charge: "Isi ulang",
                mention: "Penarikan",
                transfer: "Transfer",
                record: "rekaman",
                cur_coin: "Mata uang saat ini",
                addr_charge: "Alamat deposit",
                coypaddr: "Salin alamat",
                c_tip1: "Jangan mengisi ulang non-",
                c_tip2: "Jika tidak, aset tidak akan dipulihkan",
                c_tip3: "Setoran hanya mendukung metode pengiriman sederhana, dan setoran menggunakan metode lain tidak dapat diposting sementara, harap dipahami",
                c_tip4: "Setelah Anda mengisi ulang ke alamat di atas, Anda memerlukan konfirmasi dari seluruh node jaringan, akun akan diterima setelah 1 konfirmasi jaringan, dan koin dapat ditarik setelah 6 konfirmasi jaringan",
                c_tip5: "Jumlah isi ulang minimum",
                c_tip6: "Deposit kurang dari jumlah minimum tidak akan dikirim dan tidak dapat dikembalikan",
                c_tip7: "Alamat isi ulang Anda tidak akan sering berubah, Anda dapat mengisi ulang; jika ada perubahan, kami akan berusaha sebaik mungkin untuk memberi tahu Anda melalui pengumuman online atau email",
                c_tip8: "Harap pastikan bahwa komputer dan browser Anda aman untuk mencegah informasi dirusak atau bocor",
                copy_success: "Salin berhasil",
                copy_err: "Penyalinan gagal",
                mentionaddr: "Alamat penarikan",
                paypwd: "kata sandi transaksi",
                p_paypwd: "Masukkan kata sandi transaksi",
                p_addr: "Silakan atur alamat penarikan Anda terlebih dahulu",
                minnum: "Jumlah penarikan minimum",
                recivenum: "Kuantitas kedatangan",
                p_minnum: "Harap masukkan jumlah penarikan",
                transfernum: "Jumlah transfer",
                p_transfernum: "Harap masukkan jumlah transfer",
                from: "Dari",
                to: "untuk"
            },
            legal: {
                legal: "Mata uang fiat",
                ibuy: "saya ingin membeli",
                isell: "saya ingin menjual",
                price: "patokan harga",
                limit: "Membatasi",
                buy: "membeli",
                sell: "menjual",
                anprice: "Berdasarkan harga",
                annum: "Menurut kuantitas",
                pl: "silahkan masuk",
                amount: "Jumlah",
                num: "Kuantitas",
                allmoney: "Total transaksi",
                autocancel: "Batalkan secara otomatis",
                do: "Memesan",
                p_amout: "Harap masukkan jumlahnya",
                coin: "Mata uang",
                list: "Catatan transaksi",
                t_tip1: "Harap bayar pedagang tepat waktu",
                t_tip2: "Harap tunggu dengan sabar sampai pihak lain membayar",
                t_tip3: "Saya mengonfirmasi bahwa saya belum membayar pihak lain"
            },
            store: {
                myshop: "toko saya",
                regtime: "Waktu pendaftaran",
                belongcoin: "Mata uang legal",
                entershop: "memasuki toko",
                rzshop: "Pedagang bersertifikat",
                fabu: "melepaskan",
                allorder: "Daftar perakitan",
                thirtyorder: "Pesanan 30 hari",
                doneorder: "Penyelesaian pesanan",
                donelv: "Tingkat penyelesaian",
                renzhengmobile: "Otentikasi ponsel",
                renzhengauth: "Diverifikasi",
                renzhenghigh: "Sertifikasi lanjutan",
                notdone: "terlepas",
                done: "lengkap",
                yichang: "abnormal",
                lowershelf: "Dari rak",
                protection: "Hak membela",
                apply: "Ajukan permohonan perlindungan hak",
                back: "menarik",
                lookorder: "periksa pesanan",
                minnum: "Volume transaksi minimum",
                maxnum: "Volume transaksi maksimum",
                p_payment: "Pilih cara pembayaran",
                p_coin: "Pilih unit mata uang",
                p_price: "Harap masukkan harga satuan",
                p_min: "Harap masukkan volume transaksi minimum",
                p_max: "Harap masukkan volume transaksi maksimum",
                ithink: "biar kupikir lagi",
                makeyichang: "Apakah konfirmasi tersebut ditandai sebagai tidak normal?",
                alipay: "Alipay",
                wechat: "Wechat",
                bank: "kartu bank",
                t_minmax: "Volume transaksi maksimum tidak boleh kurang dari volume transaksi minimum",
                mysell: "Penjualan saya",
                mybuy: "Permintaanku",
                orderlist: "Catatan pesanan",
                orderstatus: "Status pemesanan",
                chongzhi: "Setel ulang",
                p_pay: "tolong bayar",
                p_waitpay: "Pembayaran menunggu keputusan",
                t_pay: "Tolong bayar penjual tepat waktu",
                t_waitpay: "Harap tunggu dengan sabar sampai pihak lain membayar",
                t_paycancel: "Pesanan telah dibatalkan dan informasi pembayaran tidak dapat dilihat",
                t_havepay: "Pesanan dibayar",
                t_hasdone: "Pesanan selesai",
                call: "Hubungi satu sama lain",
                collectcode: "Menerima kode QR",
                collectper: "Penerima pembayaran",
                payper: "Pembeli",
                collectacc: "Menerima akun",
                paycancode: "Nomor referensi pembayaran",
                dotime: "waktu pemesanan",
                t_self: "Tolong gunakan saya",
                t_transfer: "Transfer sendiri ke akun di atas",
                t_tip: "Harap jangan memberi tahu BTC, USDT, dan informasi lainnya selama proses transfer untuk mencegah pengiriman uang dicegat dan kartu bank dibekukan",
                cancelorder: "Batalkan pesanan",
                ipay: "Saya telah berhasil membayar",
                t_look: "Harap periksa informasi pembayaran dengan hati-hati sebelum mengkonfirmasi pembayaran",
                t_con_collect: "Konfirmasi pembayaran",
                cancel_confrim: "Konfirmasi pembatalan transaksi",
                t_tip1: "Jika Anda telah membayar penjual, jangan membatalkan transaksi",
                t_tip2: "Pembeli memiliki tiga pembatalan pada hari yang sama, yang akan membatasi fungsi pembelian pada hari itu",
                t_rule: "Aturan pembatalan",
                confrim_ipay: "Konfirmasikan bahwa saya telah membayar",
                donotconfrim: "Jika Anda belum membayar penjual, jangan klik tombol konfirmasi",
                lockacc: "Klik berbahaya akan membekukan akun",
                hedui: "Harap periksa informasi pembayaran dengan cermat",
                notpayconfrim: "Jika Anda belum menerima pembayaran merchant, mohon jangan klik tombol konfirmasi",
                yes: "Iya",
                no: "tidak",
                sd: "Kunci keseimbangan",
                journal: "Log saldo",
                business: "Pedagang",
                user: "pengguna",
                backdone: "Ditarik"
            },
            coin: {
                bao: "Harta deposit koin",
                choose: "Pilih mata uang",
                total: "Total deposit",
                mybao: "Deposit saya",
                profit: "Hasil yang diharapkan",
                end_time: "Tanggal kadaluarsa",
                day: "Hari",
                rate: "tingkat pengembalian",
                rule: "Aturan deposit"
            },
            team: {
                team: "kelompok ku",
                zt_num: "Dorong langsung",
                active_num: "Jumlah anggota tim yang aktif",
                profit: "pendapatan",
                cblog: "Catatan deposit",
                bblog: "Rekor mata uang",
                back: "Potongan harga",
                account: "Akun"
            }
        };
        t.default = o
    },
    "0c30": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.mnemonicWord = t.domain = void 0;
        window.location.protocol,
            window.location.host;
        var i = "http://8.210.34.201/";
        t.domain = i;
        var a = "135427";
        t.mnemonicWord = a
    },
    "0d32": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r = i(n("ade3")), o = {
            zdy: (a = {
                khyh: "계좌 은행",
                khzh: "계정 개설 지점",
                czje: "충전 금액",
                dzje: "계정 금액",
                tips: "힌트",
                qdqx: "서약을 취소 하시겠습니까?",
                scsj: "잠금 시간",
                a37: "손쉽게 보상 받기",
                a33: "취소가 공제됩니다",
                a32: "총이자",
                a31: "예금 된 코인 금액",
                a30: "잠긴 위치 기록",
                a29: "예상 총 소득",
                a28: "채굴이 더 쉽다",
                a27: "채광 보물",
                a26: "잠금 기간",
                a25: "천국",
                a24: "일본 엔화이자",
                a23: "지난 3 일 동안의 연간 참조",
                a22: "코인 획득을위한 잠금 위치",
                a21: "서약 취소",
                a20: "만료 시간",
                a19: "서약 시간",
                a18: "출력 할 양",
                a17: "프로젝트 번호",
                a16: "서약 기록",
                a15: "서약을 취소하고 원금을 반환하면 소득을 얻을 수 없습니다.",
                a14: "불충분",
                a13: "지갑 잔액",
                a12: "약정 금액",
                a11: "서약",
                a10: "토큰",
                a9: "출력 수량이 동등한 값으로 변환됩니다",
                a8: "출력 할 예상 수량",
                a7: "총 수익",
                a6: "복수 수익 창출",
                a5: "입금",
                a4: "모바일 서약",
                a3: "보유자는 담보 소득을 누릴 수 있습니다.",
                a36: "송금 계좌 개설 은행",
                a35: "송금 은행 카드 번호",
                a34: "송금 이름",
                oldpwd: "이전 암호를 입력하십시오",
                zxkf: "온라인 고객 지원",
                a2: "지급 이 필요 하 다",
                a1: "구 매 를 승인 하 다.",
                a0: "인출 공제",
                dqyuee: "현재 잔고",
                download: "앱 다운 받 기",
                czsl: "충전 수량",
                qbdz: "코 인 충전 주소",
                enterqbdz: "동전 충전 주 소 를 입력 하 세 요.",
                tjsh: "심사 에 부치다",
                sb01: "코 인 신청 시간 은 자료 제출 의 질 을 본다.",
                sb02: "신청 결과",
                sb03: "확인 메 일 을 받 은 후 메 일 에 따라 관련 자 료 를 제출 합 니 다.",
                sb04: "자 료 를 제출 하 다",
                sb05: "화폐 신청 을 제출 하 다.",
                sb06: "신청 하 다.",
                sb07: "신청 절차",
                sb08: "신청 하 다",
                sb09: "PaxfulCoins 는 모든 것 을 고객 을 위해 생각 하고 사용자 의 이익 을 최 우선 으로 생각 하 며 양질 의 프로젝트 (화폐 종류) 를 찾 아 고객 에 게 장기 적 인 지 지 를 전달한다.프리미엄 코 인, 가치 코 인, PaxfulCoins 만!",
                ksgt: "빠 른 소통",
                sbsq: "코 인 신청",
                qrszfpz: "지불 증명 서 를 입력 하 세 요.",
                zfpz: "지불 증명서",
                dqsy: "현재 수익",
                ygsy: "수익 을 눈대중 하 다",
                rgcz: "청 약 조작",
                srrgsl: "구 매 승인 수량 입력",
                kdh: "교환 이 가능 하 다",
                gw: "홈 페이지",
                bps: "백서",
                sgzq: "구입 신청 주기",
                yr: "예열 하 다.",
                sg: "구입 을 신청 하 다.",
                js: "끝나다.",
                xmxq: "프로젝트 정보",
                rg: "청 약 하 다.",
                ieo: "IEO 청 약",
                zt: "상태.",
                fhjg: "발행 가격",
                dqsj: "만기 시간"
            },
                (0,
                    r.default)(a, "scsj", "잠 금 시간"),
                (0,
                    r.default)(a, "yjsy", "예상 수익"),
                (0,
                    r.default)(a, "zxscsl", "최소 잠 금 수량"),
                (0,
                    r.default)(a, "syl", "수익 률"),
                (0,
                    r.default)(a, "sc", "창 고 를 잠그다."),
                (0,
                    r.default)(a, "ts", "일수."),
                (0,
                    r.default)(a, "fhzl", "발행 총량"),
                (0,
                    r.default)(a, "jssj", "종료 시간"),
                (0,
                    r.default)(a, "yjs", "이미 끝나다"),
                (0,
                    r.default)(a, "wks", "시작 하지 않 음"),
                (0,
                    r.default)(a, "jxz", "진행 중"),
                (0,
                    r.default)(a, "scz", "창 고 를 잠 그 는 중."),
                (0,
                    r.default)(a, "ydq", "이미 만기 가 되다"),
                (0,
                    r.default)(a, "nodata", "데이터 없 음"),
                (0,
                    r.default)(a, "nomore", "데이터 가 더 없습니다."),
                (0,
                    r.default)(a, "more", "더 많이 불 러 오기"),
                (0,
                    r.default)(a, "qbye", "지갑 잔고"),
                (0,
                    r.default)(a, "scgz", "잠 금 규칙"),
                (0,
                    r.default)(a, "sclb", "자물쇠 목록"),
                (0,
                    r.default)(a, "scwk", "창 고 를 잠 그 고 광물 을 캐다."),
                (0,
                    r.default)(a, "sly", "수익 률"),
                (0,
                    r.default)(a, "yebz", "잔고 가 부족 하 다"),
                (0,
                    r.default)(a, "mhydd", "초 계약 주문"),
                (0,
                    r.default)(a, "gmj", "구입 가격"),
                (0,
                    r.default)(a, "cjj", "거래 가"),
                (0,
                    r.default)(a, "yjyk", "예상 손익"),
                (0,
                    r.default)(a, "yk", "손익."),
                (0,
                    r.default)(a, "djs", "카운트다운"),
                a),
            login: {
                l_mobile: "휴대폰 로그 인",
                l_email: "메 일주 소 로그 인",
                p_email: "메 일 박스 를 입력 하 세 요.",
                p_mobile: "핸드폰 번 호 를 입력 하 세 요.",
                p_pwd: "비밀 번 호 를 입력 하 세 요.",
                p_confirmPwd: "비밀번호 확인 해 주세요.",
                p_confirmtradePwd: "거래 비밀번호 입력.",
                p_vcode: "인증번호 입력",
                get_code: "인증번호 가 져 오기",
                rem_pwd: "비밀 번 호 를 기억 하 다.",
                login: "로그인",
                noaccount: "아직 BgoBTC 계 정 이 없 나 요?",
                register: "회원 가입",
                forget_pwd: "온라인 서비스",
                p_taccount: "정확 한 핸드폰 번 호 를 입력 하 세 요.",
                p_temail: "정확 한 메 일 을 입력 하 세 요.",
                p_pwderr: "비밀번호 입력 이 부정 확 하 다",
                l_success: "로그 인 성공",
                r_noedit: "등록 후 수정 불가",
                r_mobile: "휴대폰 등록",
                r_email: "메 일주 소 등록",
                r_hasaccount: "이미 BgoBTC 계 정 이 있어 요.",
                r_next: "다음 단계",
                r_sms: "문자 검증",
                r_smsemail: "메 일주 소 인증",
                r_pmobilecode: "핸드폰 인증 번 호 를 입력 하 세 요.",
                r_pemailcode: "메 일 박스 인증 번 호 를 입력 하 세 요.",
                r_send: "발송 하 다.",
                p_len: "비밀번호 길이 가 6 ~ 16 자리 입 니 다.",
                p_notsame: "비밀번호 입력 이 일치 하지 않 습 니 다.",
                p_simple: "비밀번호 가 너무 쉬 우 니 다시 입력 하 세 요",
                p_inputagain: "비밀번호 입력 이 일치 하지 않 습 니 다. 다시 입력 하 세 요.",
                p_first: "먼저 사용자 프로 토 콜 을 읽 고 동의 하 십시오.",
                p_invitecode: "초대 코드(비워둘 수 있음)",
                p_inviteInput: "요청 코드 를 입력 하 세 요",
                p_agree: "나 는 동의 한다.",
                p_private: "사용자 협의 및 프라이버시 정책",
                p_set: "설치",
                p_setPwd: "비밀 번 호 를 설정 하 다.",
                f_mobile: "핸드폰 찾기",
                f_email: "사서함 찾기",
                e_mb: "핸드폰 번호",
                e_email: "메 일주 소",
                e_pwd: "비밀번호 변경",
                e_chongzhi: "비밀번호 초기 화",
                e_dealPwd: "거래 비밀번호 변경",
                e_pdeal: "거래 비밀 번 호 를 입력 하 세 요",
                e_pdealerr: "거래 비밀번호 입력 이 정확 하지 않 습 니 다",
                e_pdealConfrim: "거래 비밀 번 호 를 확인 하 세 요.",
                e_confrim: "확인 하 다.",
                e_confrim2: "확정 하 다.",
                security: "안전 센터",
                s_loginpwd: "로그 인 비밀번호",
                s_dealpwd: "거래 비밀번호",
                s_edit: "고치다."
            },
            about: {
                abt: "회사 소개",
                concat: "문의하기",
                privat: "개인 정보 보호 정책",
                theme: "야간 모드"
            },
            collect: {
                method: "수금 방식",
                name: "실명",
                p_name: "실명 을 입력 하 세 요",
                bank: "계좌 개설 은행",
                p_bank: "계좌 개설 은행 을 입력 하 세 요",
                no: "은행 카드번호",
                p_no: "카드 번 호 를 입력 하 세 요.",
                alipay: "지급 신호",
                p_alipay: "알 리 페 이 계 정 을 입력 하 세 요",
                nick: "위 챗 닉네임",
                p_nick: "위 챗 닉네임 을 입력 하 세 요",
                wechat: "위 챗 계 정",
                p_wechat: "위 챗 계 정 을 입력 하 세 요",
                wechatCode: "위 챗 수신 코드",
                alipayCode: "알 리 페 이 수금 코드",
                up_wechatCode: "위 챗 입금 번호 올 려 주세요.",
                up_alipayCode: "알 리 페 이 입금 코드 올 려 주세요.",
                cardno: "주민등록번호",
                p_cardno: "주민등록번호 입력 하 세 요",
                up_card: "신분증 사진 을 업로드 하 다",
                up_cardz: "신분증 정면 을 업로드 하 다",
                up_cardf: "신분증 뒷면 을 업로드 하 다",
                up_cardhand: "신분증 을 소지 하 다"
            },
            bind: {
                bindAddr: "귀속 인출 주소",
                cur_select: "현재 선택 한 화폐 종류",
                addr: "코 인 주소",
                codeauth: "내 인증번호",
                codetip: "사용 자 를 대리상 으로 추가 할 때, 사용자 의 수권 코드 를 검증 해 야 한다.",
                p_addr: "인출 주 소 를 입력 하 세 요.",
                code: "인증번호",
                bind: "귀속 하 다.",
                sendSuccess: "발송 성공",
                bindOk: "귀속 성공",
                tuiguang: "나의 홍보 코드",
                codes: "보급 코드",
                tip: "위 에 있 는 QR 코드 그림 을 스 캔 하거나 홍보 코드 를 입력 하여 등록 을 확인 합 니 다.",
                liantype: "체인 유형"
            },
            authentication: {
                person: "개인 중심",
                renzheng: "신분 인증",
                gaoji: "고급 확인",
                go: "인증 하 다",
                ing: "심사 중 입 니 다.",
                has: "인증 됨",
                rz_tip: "인증 후 인출 한도 가 증가 합 니 다.",
                name: "성명.",
                account: "계좌번호",
                zj: "여권번호"
            },
            home: {
                legal: "법정 통화 거래.",
                zhichi: "BTC, USDT 등 을 지원 합 니 다.",
                lever: "컨트랙트 거래",
                news: "뉴스 센터",
                security: "안전 하여 믿 을 만하 다.",
                leader: "전 세계 에서 앞장 서 는 디지털 자산 거래 플랫폼",
                updowns: "상승폭 랭 킹",
                name: "명칭.",
                new_price: "최신 가",
                fu: "상승폭",
                p_login: "로그 인하 세 요.",
                welcome: "BgoBTC 에 오신 걸 환영 합 니 다.",
                myshop: "내 가게",
                myshare: "나의 링크 공유",
                logout: "로그아웃 로그 인",
                detail: "상세 한 상황.",
                up: "상 라 로드",
                nomore: "더 많은 데이터 없 음",
                norecord: "기록 이 없다",
                loading: "로드 중",
                team: "우리 팀",
                fast: "바로 돈 을 사다.",
                micro: "옵션 거래"
            },
            market: {
                market: "시세",
                volume: "24H 량",
                home: "홈"
            },
            trade: {
                trade: "거래소",
                buy: "매입 하 다.",
                sell: "매출 하 다.",
                limit: "가격 을 제한 하 다.",
                shi: "시가.",
                cancel: "취소 하 다.",
                best: "현재 가장 좋 은 가격 으로 거래 하 다.",
                num: "수량.",
                use: "사용 가능 하 다.",
                amout: "거래액",
                price: "가격.",
                time: "시간.",
                bibi: "화폐",
                all: "전부.",
                back: "철회 하 다.",
                dui: "거래 팀",
                notenough: "잔고 가 부족 하 다",
                notbest: "현재 가장 좋 은 가격 이 없습니다.",
                p_price: "가격 입력 해 주세요.",
                p_num: "수량 을 입력 하 세 요",
                delegate: "현재 의뢰",
                all_delegate: "모든 의뢰",
                his_delegate: "역사적 의뢰",
                has_done: "완료 됨",
                has_cancel: "취소 됨",
                has_pay: "이미 지불 하 다",
                fee: "수수료",
                handnum: "거래 건수",
                p_handnum: "손 수 를 입력 하 세 요",
                balance: "잔금",
                buy_duo: "매입 (많이)",
                sell_kong: "팔다",
                pankou: "조사 하 다.",
                chicang: "창 고 를 보유 하 다.",
                types: "유형.",
                operate: "조작 하 다.",
                pingcang: "창고 가 평평 하 다.",
                chedan: "철회 서",
                duo: "많이 하 다.",
                kong: "헛일 을 하 다",
                hands: "손 수",
                hand: "손.",
                times: "배수.",
                money: "보증금",
                confrim_ping: "평 창 고 를 확정 합 니까?",
                confrim_order: "주문 서 를 확인 하 다.",
                confrim_chedan: "취소 확인?",
                p_times: "배 수 를 선택해 주세요.",
                p_hands: "손 수 를 선택 하거나 입력 하 세 요",
                p_delprice: "위탁 가격 을 입력 하 세 요",
                p_notless: "입력 한 손 수 는 낮 을 수 없습니다",
                p_notmore: "입력 한 손 수 는 높 을 수 없다",
                delegate_price: "위탁 가격",
                price_cang: "창 고 를 여 는 가격.",
                price_zhiying: "이윤 정지 가격.",
                num_zhehe: "환산 수량",
                price_cur: "현재 가격",
                price_lose: "손실 정지 가격.",
                can_money: "사용 가능 보증금",
                time_start: "창 고 를 여 는 시간.",
                geye_fee: "하룻밤 을 넘기다.",
                dealtype: "거래 유형"
            },
            lever: {
                delegating: "의뢰 중",
                dealing: "거래 중",
                pingcanging: "일반 창고 중.",
                hasping: "이미 창고 가 정리 되 었 다.",
                hasback: "취소 됨",
                risk: "위험 률",
                totalyk: "창 고 를 보유 한 총 손익.",
                yijian: "원 키 로 창 고 를 평평 하 게 하 다.",
                setys: "이윤 정지 와 손실 방지 설정",
                profit: "예상 이윤",
                lose: "예상 결손",
                price_zhiying: "이윤 정지 가격.",
                price_lose: "손실 정지 가격.",
                all_ping: "전부 창고 평 가 를 하 다.",
                duo_ping: "평 다 단",
                kong_ping: "텅 비다"
            },
            assets: {
                trade: "화폐",
                lever: "계약",
                legal: "법정 통화",
                micro: "옵션",
                manage: "저금",
                tradeacc: "화폐 계좌",
                leveracc: "계약 계좌",
                legalacc: "법정 통화 계좌",
                microacc: "옵션 계 정",
                zhehe: "환산 하 다.",
                zhehecny: "자산 을 환산 하 다.",
                lock: "동결 하 다.",
                assets: "자산",
                records: "재무 기록",
                charge: "충전 화폐",
                mention: "돈 을 인출 하 다.",
                transfer: "돌리다.",
                record: "기록 하 다.",
                cur_coin: "현 화폐 종",
                addr_charge: "코 인 충전 주소",
                coypaddr: "주소 복사",
                c_tip1: "상기 주소 에 어떠한 비 리 도 충전 하지 마 십시오.",
                c_tip2: "그렇지 않 으 면 자산 을 되 찾 을 수 없다.",
                c_tip3: "충전 코 인 은 Simple send 만 지원 하 는 방법 으로 다른 방법 으로 충전 코 인 을 사용 하여 잠시 장부 에 올 릴 수 없습니다. 양해 해 주 십시오.",
                c_tip4: "귀하 가 상기 주소 에 충전 한 후에 전체 네트워크 노드 의 확인 이 필요 합 니 다. 1 회 네트워크 확인 후 입금 하고 6 회 네트워크 에서 인출 가능 한 지 확인 해 야 합 니 다.",
                c_tip5: "최소 충전 금액",
                c_tip6: "최소 금액 이하 의 충전 은 장부 에 올 리 지 않 으 며 되 돌 릴 수 없습니다.",
                c_tip7: "귀하 의 충전 주소 가 자주 바 뀌 지 않 고 중복 충전 이 가능 합 니 다. 변경 사항 이 있 으 면 저 희 는 인터넷 공지 나 메 일 을 통 해 귀하 께 알려 드 리 겠 습 니 다.",
                c_tip8: "컴퓨터 와 브 라 우 저의 안전 을 반드시 확인 하여 정보 가 왜곡 되 거나 유출 되 는 것 을 방지 하 십시오",
                copy_success: "복사 성공",
                copy_err: "복사 실패",
                mentionaddr: "코 인 주소",
                paypwd: "거래 비밀번호를 입력하세요",
                p_paypwd: "거래 비밀번호를 입력하세요",
                p_addr: "먼저 코 인 주 소 를 설정 하 세 요.",
                minnum: "최소 인출 수량",
                recivenum: "입금 수량",
                p_minnum: "코 인 수량 을 입력 하 세 요",
                transfernum: "회전 수량",
                p_transfernum: "회전 수량 을 입력 하 세 요",
                from: "부터.",
                to: "까지"
            },
            legal: {
                legal: "법정 통화",
                ibuy: "내 가 살 거 야.",
                isell: "팔 거 예요.",
                price: "단가",
                limit: "한도.",
                buy: "구입 하 다.",
                sell: "판매 하 다.",
                anprice: "가격 대로",
                annum: "수량 에 따라",
                pl: "입력 하 세 요",
                amount: "금액.",
                num: "수량.",
                allmoney: "거래 총액",
                autocancel: "자동 취소",
                do: "주문 하 다.",
                p_amout: "금액 을 입력 하 세 요",
                coin: "화폐 종류.",
                list: "거래 기록",
                t_tip1: "상점 에 제때에 돈 을 지불 하 세 요.",
                t_tip2: "인내심 을 가지 고 상대방 이 지불 하 기 를 기 다 려 주세요.",
                t_tip3: "나 는 아직 상대방 에 게 지불 하지 않 은 것 을 확인 했다."
            },
            store: {
                myshop: "내 가게",
                regtime: "등록 시간",
                belongcoin: "법정 통화 에 속 하 다.",
                entershop: "가게 에 들어가다",
                rzshop: "상인 을 인증 하 다.",
                fabu: "발표 하 다.",
                allorder: "집합체",
                thirtyorder: "30 일 할인",
                doneorder: "완성서",
                donelv: "완성 도",
                renzhengmobile: "핸드폰 인증",
                renzhengauth: "실명 인증",
                renzhenghigh: "고급 인증",
                notdone: "미 완성",
                done: "완료 됨",
                yichang: "이상 하 다.",
                lowershelf: "내리다",
                protection: "권력 유지 중",
                apply: "권익 유 지 를 신청 하 다.",
                back: "철회 하 다.",
                lookorder: "주문 서 를 확인 하 다.",
                minnum: "최소 거래 량",
                maxnum: "최대 거래 량",
                p_payment: "결제 방법 을 선택해 주세요.",
                p_coin: "화폐 단 위 를 선택 하 세 요",
                p_price: "단 가 를 입력 하 세 요",
                p_min: "최소 거래 량 을 입력 하 세 요",
                p_max: "최대 거래 량 을 입력 하 세 요",
                ithink: "좀 더 생각해 볼 게 요.",
                makeyichang: "이상 으로 표 시 된 것 을 확인 합 니까",
                alipay: "알 리 페 이",
                wechat: "위 챗 편지",
                bank: "은행 카드",
                t_minmax: "최대 거래 량 이 최소 거래 량 보다 적 으 면 안 된다.",
                mysell: "내 판매",
                mybuy: "나의 구 매 요청",
                orderlist: "주문 기록",
                orderstatus: "주문 상태",
                chongzhi: "초기 화",
                p_pay: "돈 내세 요.",
                p_waitpay: "지불 을 기다리다.",
                t_pay: "제때에 판매자 에 게 지불 하 세 요.",
                t_waitpay: "인내심 을 가지 고 상대방 이 지불 하 기 를 기 다 려 주세요.",
                t_paycancel: "주문 이 취소 되 어 결제 정 보 를 볼 수 없습니다.",
                t_havepay: "주문 결제 완료",
                t_hasdone: "주문 완료",
                call: "상대방 과 연락 하 다",
                collectcode: "수금 QR 코드",
                collectper: "수취인",
                payper: "바이어",
                collectacc: "수금 계좌",
                paycancode: "지불 참조 번호",
                dotime: "주문 시간",
                t_self: "본인 을 이용 하 세 요.",
                t_transfer: "이상 계좌 번호 로 자동 이체",
                t_tip: "계좌 이체 과정 중 BTC, USDT 등 정 보 를 기입 하지 마 십시오. 송금 이 차단 되 거나 은행 카드 가 동결 되 는 것 을 방지 합 니 다.",
                cancelorder: "주문 취소",
                ipay: "나 는 이미 지불 에 성공 했다.",
                t_look: "수금 확인 전에 결제 정 보 를 자세히 확인 하 세 요.",
                t_con_collect: "미수 금 을 확인 하 다",
                cancel_confrim: "거래 취소 확인",
                t_tip1: "만약 당신 이 이미 판매자 에 게 돈 을 지불 하 였 다 면, 절대 거래 를 취소 하지 마 십시오.",
                t_tip2: "바이어 당일 누적 3 건 취소, 당일 매입 기능 제한",
                t_rule: "규칙 을 취소 하 다",
                confrim_ipay: "내 가 이미 지불 한 것 을 확인 하 다.",
                donotconfrim: "판매자 에 게 지불 하지 않 으 셨 다 면 확인 버튼 을 누 르 지 마 십시오.",
                lockacc: "악의 적 으로 클릭 하면 계 정 이 동결 된다",
                hedui: "수금 정 보 를 자세히 확인 하 세 요.",
                notpayconfrim: "만약 당신 이 상가 의 지불 을 받 지 못 했다 면, 확인 버튼 을 클릭 하지 마 십시오.",
                yes: "예.",
                no: "아니.",
                sd: "잔액 을 고정시키다.",
                journal: "잔액 일지",
                business: "상가.",
                user: "사용자",
                backdone: "철회 하 다"
            },
            coin: {
                bao: "화폐 저장 보물",
                choose: "화폐 종 류 를 선택 하 다.",
                total: "총 저금 화폐",
                mybao: "내 존 폐",
                profit: "예상 수익",
                end_time: "만기 시간",
                day: "일수.",
                rate: "수익 률",
                rule: "존 폐 규칙"
            },
            team: {
                team: "우리 팀",
                zt_num: "인원 수 를 직 추 하 다.",
                active_num: "팀 활약 인원수",
                profit: "수익.",
                cblog: "동전 충전 기록",
                bblog: "화폐 기록",
                back: "커미션 을 반환 하 다.",
                account: "계좌"
            }
        };
        t.default = o
    },
    1231: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                khyh: "口座銀行",
                khzh: "口座開設支店",
                czje: "リチャージ量",
                dzje: "アカウントへの金額",
                tips: "ヒント",
                qdqx: "誓約をキャンセルしてもよろしいですか",
                scsj: "ロックアップ時間",
                a37: "報酬を簡単に受け取る",
                a33: "注文をキャンセルすると差し引きされます。",
                a32: "総利息",
                a31: "貨幣の数",
                a30: "ロック記録",
                a29: "総利益を見込む",
                a28: "採掘はもっと簡単です",
                a27: "宝を掘る",
                a26: "ロック期限",
                a25: "空",
                a24: "日本円の利息",
                a23: "ここ3日は年化を参考にします",
                a22: "倉庫をロックして貨幣を稼ぐ",
                a21: "質権を取り消す",
                a20: "締切時間",
                a19: "質権設定時間",
                a18: "生産待ち数量",
                a17: "項目番号",
                a16: "抵当記録",
                a15: "質権の担保を取り消して元金を返して、収益を獲得することができません。",
                a14: "足りない",
                a13: "財布の残高",
                a12: "質権設定数量",
                a11: "質権設定",
                a10: "トークン",
                a9: "産出数量はイコールに変換されます。",
                a8: "生産予定数",
                a7: "総収益",
                a6: "多重利回りを上げる",
                a5: "保存",
                a4: "流動性抵当",
                a3: "所有者は質権設定収益を享受することができる。",
                a36: "送金口座開設銀行",
                a35: "送金銀行カード番号",
                a34: "送金名",
                oldpwd: "古いパスワードを入力してください",
                zxkf: "オンラインカスタマーサービス",
                a2: "支払う必要がある",
                a1: "サブスクリプション通貨",
                a0: "引き出し控除",
                dqyuee: "経常収支",
                download: "アプリをダウンロードする",
                czsl: "リチャージ量",
                qbdz: "ウォレットアドレス",
                enterqbdz: "ウォレットアドレスを入力してください",
                tjsh: "レビューのために送信",
                sb01: "上場申請の時期は、データ提出の質によって異なります",
                sb02: "申請結果",
                sb03: "確認メールを受け取ったら、メールに従って関連情報を送信してください",
                sb04: "情報の送信",
                sb05: "リストの申請書を提出する",
                sb06: "適用",
                sb07: "申請プロセス",
                sb08: "リストに申し込む",
                sb09: "PaxfulCoinsは顧客のためにすべてを取り、ユーザーの利益を第一に考えます。現在、長期的なサポートに対して顧客に返済するための高品質のプロジェクト（通貨）を探しています。高品質のコインを購入し、価値のあるコインを購入します。PaxfulCoinsのみを選択してください！",
                ksgt: "クイックコミュニケーション",
                sbsq: "上場申請書",
                qrszfpz: "支払い伝票を入力してください",
                zfpz: "支払い伝票",
                dqsy: "現在の収益",
                ygsy: "利益を見込む",
                rgcz: "予約操作",
                srrgsl: "注文数量を入力します",
                kdh: "両替できます",
                gw: "公式サイト",
                bps: "白書",
                sgzq: "申請期間",
                yr: "予熱",
                sg: "購入を申請する",
                js: "終了",
                xmxq: "プロジェクトの詳細",
                rg: "注文に応じる",
                ieo: "IEO応募",
                zt: "状態",
                fhjg: "発行価格",
                dqsj: "締切時間"
            },
                (0,
                    o.default)(a, "scsj", "ロック時間"),
                (0,
                    o.default)(a, "yjsy", "予想収益"),
                (0,
                    o.default)(a, "zxscsl", "最小ロック数"),
                (0,
                    o.default)(a, "syl", "収益率"),
                (0,
                    o.default)(a, "sc", "倉庫にかぎをかける"),
                (0,
                    o.default)(a, "ts", "日数"),
                (0,
                    o.default)(a, "fhzl", "発行総量"),
                (0,
                    o.default)(a, "jssj", "終了時間"),
                (0,
                    o.default)(a, "yjs", "終了しました"),
                (0,
                    o.default)(a, "wks", "開始していません"),
                (0,
                    o.default)(a, "jxz", "進行中"),
                (0,
                    o.default)(a, "scz", "ロック中"),
                (0,
                    o.default)(a, "ydq", "期限が切れました"),
                (0,
                    o.default)(a, "nodata", "データがありません"),
                (0,
                    o.default)(a, "nomore", "もっと多くのデータがありません"),
                (0,
                    o.default)(a, "more", "もっとロード"),
                (0,
                    o.default)(a, "qbye", "財布の残高"),
                (0,
                    o.default)(a, "scgz", "ロックルール"),
                (0,
                    o.default)(a, "sclb", "ロックリスト"),
                (0,
                    o.default)(a, "scwk", "ロック穴"),
                (0,
                    o.default)(a, "sly", "収益率"),
                (0,
                    o.default)(a, "yebz", "残高が足りない"),
                (0,
                    o.default)(a, "mhydd", "秒契約注文書"),
                (0,
                    o.default)(a, "gmj", "買い入れ価格"),
                (0,
                    o.default)(a, "cjj", "出来値"),
                (0,
                    o.default)(a, "yjyk", "損益を予想する"),
                (0,
                    o.default)(a, "yk", "利益と損失"),
                (0,
                    o.default)(a, "djs", "カウントダウン"),
                a),
            login: {
                l_mobile: "携帯登録",
                l_email: "メールアドレス登録",
                p_email: "お手数ですが、メールアドレスをご入力してください",
                p_mobile: "お手数ですが、携帯番号をご記入してください",
                p_pwd: "お手数ですが、パスワードをご入力してください",
                p_confirmPwd: "パスワードを確認してください",
                p_confirmtradePwd: "トランザクションパスワード",
                p_vcode: "お手数ですが、検証コードをご入力してください",
                get_code: "送信する",
                rem_pwd: "パスワードを覚える",
                login: "ログイン",
                noaccount: "PaxfulCoinsアカウントはまだありません？",
                register: "登録",
                forget_pwd: "オンラインサービス",
                p_taccount: "正しい携帯番号を入力してください",
                p_temail: "正しいメールアドレスを入力してください",
                p_pwderr: "パスワードの入力が正しくない",
                l_success: "ログイン成功",
                r_noedit: "登録後の修正はできません",
                r_mobile: "携帯登録",
                r_email: "メールアドレス登録",
                r_hasaccount: "PaxfulCoinsアカウントを作成しました",
                r_next: "次のステップ",
                r_sms: "メール検証",
                r_smsemail: "メールボックス検証",
                r_pmobilecode: "携帯電話の検証コードを入力してください",
                r_pemailcode: "メール検証コードを入力してください",
                r_send: "送信",
                p_len: "暗号長は6~16ビットである",
                p_notsame: "パスワードの入力が一致しない",
                p_simple: "パスワードが簡単すぎるので、入力し直してください",
                p_inputagain: "パスワードの入力が一致しませんので、入力し直してください",
                p_first: "先に読んで、ユーザーの合意に同意してください",
                p_invitecode: "招待コード（空にすることができます）",
                p_inviteInput: "招待コードを入力してください",
                p_agree: "同意します",
                p_private: "ユーザプロトコルとプライバシーポリシー",
                p_set: "設置",
                p_setPwd: "パスワードを設定",
                f_mobile: "携帯電話を",
                f_email: "メールボックスが",
                e_mb: "携帯電話番号",
                e_email: "メール",
                e_pwd: "パスワードを修正する",
                e_chongzhi: "パスワードをリセットする",
                e_dealPwd: "取引パスワードの修正",
                e_pdeal: "取引のパスワード",
                e_pdealerr: "取引パスワードの入力が正しくない",
                e_pdealConfrim: "取引パスワードを確認してください",
                e_confrim: "確認",
                e_confrim2: "確定",
                security: "安全センター",
                s_loginpwd: "ログインパスワード",
                s_dealpwd: "取引のパスワード",
                s_edit: "修正"
            },
            about: {
                abt: "私たちに関して",
                concat: "連絡先",
                privat: "プライバシー政策",
                theme: "ナイトモード"
            },
            collect: {
                method: "お支払い方法",
                name: "実名",
                p_name: "お手数ですが、名前をご入力してください",
                bank: "カイマン",
                p_bank: "口座番号を入力してください",
                no: "銀行カード",
                p_no: "お手数ですが、銀行カードをご記入してください",
                alipay: "支付宝アカウント",
                p_alipay: "お手数ですが、支付宝アカウントをご記入してください",
                nick: "WeChat名前",
                p_nick: "お手数ですが、WeChat名前をご記入してください",
                wechat: "WeChat番号",
                p_wechat: "お手数ですが、WeChat番号をご記入してください",
                wechatCode: "微信の集金コード",
                alipayCode: "支払宝集金符号",
                up_wechatCode: "微信の集金コードをアップロードしてください",
                up_alipayCode: "支払宝の集金コードをアップロードしてください",
                cardno: "身分証番号",
                p_cardno: "身分証番号を入力してください。",
                up_card: "身分証の写真をアップロードします。",
                up_cardz: "身分証をアップロードする正面",
                up_cardf: "身分証の裏側をアップロードします。",
                up_cardhand: "手持ちの身分証をアップロードします。"
            },
            bind: {
                bindAddr: "バインド通貨",
                cur_select: "現在、貨幣種が選択されている",
                addr: "提出貨幣口座",
                codeauth: "私のライセンスコード",
                codetip: "ユーザーを代理店に追加する場合、ユーザの認証コードを検証する必要があります。",
                p_addr: "お手数ですが、提出貨幣先をご入力してください",
                code: "検証コード",
                bind: "バインディング",
                sendSuccess: "送信成功",
                bindOk: "バインディング成功",
                tuiguang: "私のプロモーションコード",
                codes: "プロモーションコード",
                tip: "上の二次元コードパターンをスキャンするか、プロモーションコードを入力し、登録を確認する",
                liantype: "チェーンの種類"
            },
            authentication: {
                person: "個人センター",
                renzheng: "身分認証",
                gaoji: "高度な検証",
                go: "認証に行く",
                ing: "審査中",
                has: "確認済み",
                rz_tip: "認証後、引き上げ限度額を上げることができる",
                name: "名前",
                account: "アカウント",
                zj: "証明番号"
            },
            home: {
                legal: "法定通貨取引",
                zhichi: "BTC, USDTなどに対応している",
                lever: "てこ取引",
                news: "ニュースセンター",
                security: "安全信頼",
                leader: "世界でリードしているデジタル資産取引プラットフォーム",
                updowns: "上げ幅ランキング",
                name: "名称",
                new_price: "最新価格",
                fu: "下げ幅",
                p_login: "登録してください",
                welcome: "PaxfulCoinsへようこそ",
                myshop: "私の店",
                myshare: "私の分享リンク",
                logout: "ログアウト",
                detail: "詳細",
                up: "アップロード",
                nomore: "それ以上のデータはない",
                norecord: "記録なし",
                loading: "ローディング中",
                team: "私のチーム",
                fast: "速くお金を買います",
                micro: "秒合約"
            },
            market: {
                market: "相場",
                volume: "24H取引量",
                home: "トップページ"
            },
            trade: {
                trade: "現物取引",
                buy: "購入",
                sell: "売出す",
                limit: "価",
                shi: "時価",
                cancel: "キャンセル",
                best: "現在の最適価格で取引する",
                num: "数量",
                use: "利用可能",
                amout: "取引額",
                price: "価格",
                time: "時間",
                bibi: "貨幣",
                all: "すべて",
                back: "撤回",
                dui: "取引対",
                notenough: "残高不足",
                notbest: "現時点での最適価格はありません",
                p_price: "お手数ですが、単価をご入力してください",
                p_num: "数量を入力してください",
                delegate: "ご依頼",
                all_delegate: "全依頼",
                his_delegate: "履歴依頼",
                has_done: "完成",
                has_cancel: "キャンセル",
                has_pay: "支払済み",
                fee: "手数料",
                handnum: "トランザクション数",
                p_handnum: "手数を入力してください",
                balance: "残高",
                buy_duo: "買い取る（多め）",
                sell_kong: "売却（空っぽ）",
                pankou: "ハンディキャップ",
                chicang: "・キャリー",
                types: "タイプ",
                operate: "操作",
                pingcang: "平倉",
                chedan: "撤退する",
                duo: "多め",
                kong: "空っぽ",
                hands: "手の数",
                hand: "一株",
                times: "倍数",
                money: "保証金",
                confrim_ping: "平倉を確定しますか？",
                confrim_order: "ご注文を確認致します",
                confrim_chedan: "撤収確認？",
                p_times: "お手数ですが、倍数をご選択してください",
                p_hands: "手数を選択または入力してください",
                p_delprice: "依頼価格を入力してください",
                p_notless: "入力手数を下回らない",
                p_notmore: "入力手数が上にならない",
                delegate_price: "委託価格",
                price_cang: "開倉価格",
                price_zhiying: "黒字価格をとめる",
                num_zhehe: "換算数量",
                price_cur: "現在の価格",
                price_lose: "赤字価格を止める",
                can_money: "有効保証金",
                time_start: "開倉時間",
                geye_fee: "日越し費用",
                dealtype: "取引種類"
            },
            lever: {
                delegating: "依頼中",
                dealing: "取引中",
                pingcanging: "平倉中",
                hasping: "すでに平倉",
                hasback: "取り消す",
                risk: "リスク率",
                totalyk: "倉庫を持って総損益",
                yijian: "クリック平倉",
                setys: "損益を防ぐため設置する",
                profit: "黒字を予期する",
                lose: "赤字を予期する",
                price_zhiying: "ストップ価格",
                price_lose: "ストップロス価格",
                all_ping: "全部平倉",
                duo_ping: "ただ多めの片手を平らげます",
                kong_ping: "先に売って平倉を購入します"
            },
            assets: (r = {
                trade: "貨幣",
                lever: "てこ",
                legal: "仏貨",
                micro: "秒契約",
                manage: "財産",
                tradeacc: "貨幣口座",
                leveracc: "てこ口座",
                legalacc: "法定通貨取引口座",
                microacc: "秒契約アカウント",
                zhehe: "換算",
                zhehecny: "総資産の換算",
                lock: "凍結",
                assets: "資産",
                records: "財務記録",
                charge: "チャージ",
                mention: "キャッシュ",
                transfer: "分割移動",
                record: "記録",
                cur_coin: "現在の貨幣",
                addr_charge: "チャージ口座",
                coypaddr: "コピー先",
                c_tip1: "上記のところにはチャージしないでください",
                c_tip2: "，さもなくば資産は取り戻すことができません",
                c_tip3: "チャージはsimple sendの方法だけをサポートしており、その他（send all）の方法でチャージしても一時的に振込できませんので、ご了承ください。",
                c_tip4: "上記アドレスにチャージすると、ネットワークノード全体の確認が必要となり、1回のネットワーク確認後に入金、6回のネットワーク確認で引き出し可能となる",
                c_tip5: "チャージ金額を最小にする",
                c_tip6: "最小金額未満のチャージは入金されず引き戻すことができない",
                c_tip7: "チャージアドレスは常に変更することなく、チャージを繰り返すことができます。変更がございましたら、出来る限りインターネット広告やメールでお知らせいたします",
                c_tip8: "パソコンやブラウザのセキュリティを必ず確認し、情報の改ざんや漏洩を防止してください",
                copy_success: "コピー成功",
                copy_err: "コピー失敗",
                mentionaddr: "提出貨幣口座",
                paypwd: "取引パスワードを入力してください",
                p_paypwd: "取引パスワードを入力してください",
                p_addr: "先にお持ちのアドレスを設定してください"
            },
                (0,
                    o.default)(r, "mention", "提造幣"),
                (0,
                    o.default)(r, "minnum", "最小取付け量"),
                (0,
                    o.default)(r, "recivenum", "着通帳数量"),
                (0,
                    o.default)(r, "p_minnum", "提貨数量を入力してください"),
                (0,
                    o.default)(r, "transfernum", "分割移動数量"),
                (0,
                    o.default)(r, "p_transfernum", "お手数ですが、最低限の分割移動数量をご入力してください"),
                (0,
                    o.default)(r, "from", "から"),
                (0,
                    o.default)(r, "to", "まで"),
                r),
            legal: {
                legal: "仏貨",
                ibuy: "買いたいです",
                isell: "売りたいです",
                price: "単価",
                limit: "限度額",
                buy: "購入",
                sell: "売却",
                anprice: "価格で",
                annum: "数量によって",
                pl: "入力してください",
                amount: "金額",
                num: "数量",
                allmoney: "取引総額",
                autocancel: "自動キャンセル",
                do: "注文する",
                p_amout: "金額を入力してください",
                coin: "幣種",
                list: "取引記録",
                t_tip1: "業者にお支払い下さい",
                t_tip2: "相手の支払いを辛抱強く待ってください",
                t_tip3: "まだ相手に支払っていないことを確認する"
            },
            store: {
                myshop: "私の店",
                regtime: "登録時間",
                belongcoin: "法定貨幣属する",
                entershop: "入店",
                rzshop: "認証業者",
                fabu: "発表",
                allorder: "総計リスト",
                thirtyorder: "30日間完成リスト",
                doneorder: "完成リスト",
                donelv: "完成率",
                renzhengmobile: "携帯電話認証",
                renzhengauth: "実名認証",
                renzhenghigh: "高級認証",
                notdone: "未完成",
                done: "完成",
                yichang: "異常",
                lowershelf: "棚をおりる",
                protection: "権力を擁護",
                apply: "権利の主張",
                back: "撤回",
                lookorder: "注文書をチェック",
                minnum: "最小取付け量",
                maxnum: "最大取引量",
                p_payment: "お手数ですが、お支払い方法を選択してください",
                p_coin: "通貨単位を選択してください",
                p_price: "お手数ですが、単価をご入力してください",
                p_min: "最小取引量を入力してください",
                p_max: "最大取引量を入力してください",
                ithink: "もう一度考えてみます",
                makeyichang: "表記の異常を確認しますか",
                alipay: "支付宝",
                wechat: "WeChat",
                bank: "銀行カード",
                t_minmax: "最大取引量が最小取引量より小さいことはできません",
                mysell: "売却",
                mybuy: "仕入れ",
                orderlist: "注文登録",
                orderstatus: "注文状態",
                chongzhi: "リセット",
                p_pay: "お手数ですが、お支払いお願い致します",
                p_waitpay: "支払いを待つ",
                t_pay: "売手に支払ってください",
                t_waitpay: "相手の支払いを辛抱強く待ってください",
                t_paycancel: "注文がキャンセルされ、支払い情報を見ることができません",
                t_havepay: "注文はもう支払いました",
                t_hasdone: "注文完了",
                call: "相手に連絡する",
                collectcode: "二次元コードを収納する",
                collectper: "受取人",
                payper: "買い手",
                collectacc: "集金口座",
                paycancode: "支払い参照番号",
                dotime: "注文時間",
                t_self: "本人を使ってください",
                t_transfer: "以上の口座に自分で振り込みます",
                t_tip: "振り込み中にBTC、USDTなどの情報を備考しないでください。振り込みがブロックされ、クレジットカードが凍結されることを防止します",
                cancelorder: "注文キャンセル",
                ipay: "私は支払いに成功した",
                t_look: "入金確認前に支払い情報をよくチェックしてください",
                t_con_collect: "入金確認",
                cancel_confrim: "取引キャンセル確認",
                t_tip1: "売手への支払いが完了した場合は、取引をキャンセルしないでください",
                t_tip2: "買手は当日三筆重ねてキャンセルし,当日購入機能を制限する",
                t_rule: "規則を取り消す",
                confrim_ipay: "私が支払いを済ませたことを確認する",
                donotconfrim: "売手への支払いをしていない場合は、確認ボタンをクリックしないでください",
                lockacc: "悪意のあるクリックはアカウントを凍結する",
                hedui: "入金情報をよくチェックしてください",
                notpayconfrim: "業者からの支払いがない場合は、確認ボタンをクリックしないでください",
                yes: "はい",
                no: "いいえ",
                sd: "残高をロックする",
                journal: "残高ログ",
                business: "商売人",
                user: "ユーザー",
                backdone: "取り下げ済み"
            },
            coin: {
                bao: "存幣宝",
                choose: "貨幣を選択します",
                total: "総貨幣",
                mybao: "私の貯金は",
                profit: "予想収益",
                end_time: "締切時間",
                day: "日数",
                rate: "收益率",
                rule: "通貨規則"
            },
            team: {
                team: "私のチーム",
                zt_num: "人数をまっすぐに推す",
                active_num: "活躍人数",
                profit: "収益",
                cblog: "チャージの記録",
                bblog: "貨幣記録",
                back: "返佣",
                account: "アカウント"
            }
        };
        t.default = s
    },
    "269b": function(e, t, n) {
        var i;
        n("a4d3"),
            n("e01a"),
            n("99af"),
            n("4160"),
            n("c975"),
            n("a15b"),
            n("13d5"),
            n("fb6a"),
            n("a434"),
            n("c19f"),
            n("ace4"),
            n("f4b3"),
            n("a9e3"),
            n("b680"),
            n("b64b"),
            n("d3b7"),
            n("acd8"),
            n("e25e"),
            n("4d63"),
            n("ac1f"),
            n("25f0"),
            n("466d"),
            n("5319"),
            n("1276"),
            n("5cc6"),
            n("9a8c"),
            n("a975"),
            n("735e"),
            n("c1ac"),
            n("d139"),
            n("3a7b"),
            n("d5d6"),
            n("82f8"),
            n("e91f"),
            n("60bd"),
            n("5f96"),
            n("3280"),
            n("3fcc"),
            n("ca91"),
            n("25a1"),
            n("cd26"),
            n("3c5d"),
            n("2954"),
            n("649e"),
            n("219c"),
            n("170b"),
            n("b39a"),
            n("72f7"),
            n("159b"),
            n("ddb0"),
            n("bf19"),
            function(t) {
                e.exports = t()
            }((function() {
                    var e;
                    return function e(t, n, a) {
                        function r(s, l) {
                            if (!n[s]) {
                                if (!t[s]) {
                                    var c = "function" == typeof i && i;
                                    if (!l && c)
                                        return i(s, !0);
                                    if (o)
                                        return o(s, !0);
                                    throw new Error("Cannot find module '" + s + "'")
                                }
                                var d = n[s] = {
                                    exports: {}
                                };
                                t[s][0].call(d.exports, (function(e) {
                                        var n = t[s][1][e];
                                        return r(n || e)
                                    }
                                ), d, d.exports, e, t, n, a)
                            }
                            return n[s].exports
                        }
                        for (var o = "function" == typeof i && i, s = 0; s < a.length; s++)
                            r(a[s]);
                        return r
                    }({
                        1: [function(e, t, n) {
                            t.exports = e("./lib/")
                        }
                            , {
                                "./lib/": 2
                            }],
                        2: [function(e, t, n) {
                            var i = e("./url")
                                , a = e("socket.io-parser")
                                , r = e("./manager")
                                , o = e("debug")("socket.io-client");
                            t.exports = n = l;
                            var s = n.managers = {};
                            function l(e, t) {
                                "object" == typeof e && (t = e,
                                    e = void 0),
                                    t = t || {};
                                var n, a = i(e), l = a.source, c = a.id;
                                return t.forceNew || t["force new connection"] || !1 === t.multiplex ? (o("ignoring socket cache for %s", l),
                                    n = r(l, t)) : (s[c] || (o("new io instance for %s", l),
                                    s[c] = r(l, t)),
                                    n = s[c]),
                                    n.socket(a.path)
                            }
                            n.protocol = a.protocol,
                                n.connect = l,
                                n.Manager = e("./manager"),
                                n.Socket = e("./socket")
                        }
                            , {
                                "./manager": 3,
                                "./socket": 5,
                                "./url": 6,
                                debug: 10,
                                "socket.io-parser": 44
                            }],
                        3: [function(e, t, n) {
                            e("./url");
                            var i = e("engine.io-client")
                                , a = e("./socket")
                                , r = e("component-emitter")
                                , o = e("socket.io-parser")
                                , s = e("./on")
                                , l = e("component-bind")
                                , c = (e("object-component"),
                                e("debug")("socket.io-client:manager"))
                                , d = e("indexof")
                                , u = e("backo2");
                            function p(e, t) {
                                if (!(this instanceof p))
                                    return new p(e,t);
                                e && "object" == typeof e && (t = e,
                                    e = void 0),
                                    t = t || {},
                                    t.path = t.path || ":2000/socket.io",
                                    this.nsps = {},
                                    this.subs = [],
                                    this.opts = t,
                                    this.reconnection(!1 !== t.reconnection),
                                    this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
                                    this.reconnectionDelay(t.reconnectionDelay || 1e3),
                                    this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
                                    this.randomizationFactor(t.randomizationFactor || .5),
                                    this.backoff = new u({
                                        min: this.reconnectionDelay(),
                                        max: this.reconnectionDelayMax(),
                                        jitter: this.randomizationFactor()
                                    }),
                                    this.timeout(null == t.timeout ? 2e4 : t.timeout),
                                    this.readyState = "closed",
                                    this.uri = e,
                                    this.connected = [],
                                    this.encoding = !1,
                                    this.packetBuffer = [],
                                    this.encoder = new o.Encoder,
                                    this.decoder = new o.Decoder,
                                    this.autoConnect = !1 !== t.autoConnect,
                                this.autoConnect && this.open()
                            }
                            t.exports = p,
                                p.prototype.emitAll = function() {
                                    for (var e in this.emit.apply(this, arguments),
                                        this.nsps)
                                        this.nsps[e].emit.apply(this.nsps[e], arguments)
                                }
                                ,
                                p.prototype.updateSocketIds = function() {
                                    for (var e in this.nsps)
                                        this.nsps[e].id = this.engine.id
                                }
                                ,
                                r(p.prototype),
                                p.prototype.reconnection = function(e) {
                                    return arguments.length ? (this._reconnection = !!e,
                                        this) : this._reconnection
                                }
                                ,
                                p.prototype.reconnectionAttempts = function(e) {
                                    return arguments.length ? (this._reconnectionAttempts = e,
                                        this) : this._reconnectionAttempts
                                }
                                ,
                                p.prototype.reconnectionDelay = function(e) {
                                    return arguments.length ? (this._reconnectionDelay = e,
                                    this.backoff && this.backoff.setMin(e),
                                        this) : this._reconnectionDelay
                                }
                                ,
                                p.prototype.randomizationFactor = function(e) {
                                    return arguments.length ? (this._randomizationFactor = e,
                                    this.backoff && this.backoff.setJitter(e),
                                        this) : this._randomizationFactor
                                }
                                ,
                                p.prototype.reconnectionDelayMax = function(e) {
                                    return arguments.length ? (this._reconnectionDelayMax = e,
                                    this.backoff && this.backoff.setMax(e),
                                        this) : this._reconnectionDelayMax
                                }
                                ,
                                p.prototype.timeout = function(e) {
                                    return arguments.length ? (this._timeout = e,
                                        this) : this._timeout
                                }
                                ,
                                p.prototype.maybeReconnectOnOpen = function() {
                                    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                                }
                                ,
                                p.prototype.open = p.prototype.connect = function(e) {
                                    if (c("readyState %s", this.readyState),
                                        ~this.readyState.indexOf("open"))
                                        return this;
                                    c("opening %s", this.uri),
                                        this.engine = i(this.uri, this.opts);
                                    var t = this.engine
                                        , n = this;
                                    this.readyState = "opening",
                                        this.skipReconnect = !1;
                                    var a = s(t, "open", (function() {
                                            n.onopen(),
                                            e && e()
                                        }
                                    ))
                                        , r = s(t, "error", (function(t) {
                                            if (c("connect_error"),
                                                n.cleanup(),
                                                n.readyState = "closed",
                                                n.emitAll("connect_error", t),
                                                e) {
                                                var i = new Error("Connection error");
                                                i.data = t,
                                                    e(i)
                                            } else
                                                n.maybeReconnectOnOpen()
                                        }
                                    ));
                                    if (!1 !== this._timeout) {
                                        var o = this._timeout;
                                        c("connect attempt will timeout after %d", o);
                                        var l = setTimeout((function() {
                                                c("connect attempt timed out after %d", o),
                                                    a.destroy(),
                                                    t.close(),
                                                    t.emit("error", "timeout"),
                                                    n.emitAll("connect_timeout", o)
                                            }
                                        ), o);
                                        this.subs.push({
                                            destroy: function() {
                                                clearTimeout(l)
                                            }
                                        })
                                    }
                                    return this.subs.push(a),
                                        this.subs.push(r),
                                        this
                                }
                                ,
                                p.prototype.onopen = function() {
                                    c("open"),
                                        this.cleanup(),
                                        this.readyState = "open",
                                        this.emit("open");
                                    var e = this.engine;
                                    this.subs.push(s(e, "data", l(this, "ondata"))),
                                        this.subs.push(s(this.decoder, "decoded", l(this, "ondecoded"))),
                                        this.subs.push(s(e, "error", l(this, "onerror"))),
                                        this.subs.push(s(e, "close", l(this, "onclose")))
                                }
                                ,
                                p.prototype.ondata = function(e) {
                                    this.decoder.add(e)
                                }
                                ,
                                p.prototype.ondecoded = function(e) {
                                    this.emit("packet", e)
                                }
                                ,
                                p.prototype.onerror = function(e) {
                                    c("error", e),
                                        this.emitAll("error", e)
                                }
                                ,
                                p.prototype.socket = function(e) {
                                    var t = this.nsps[e];
                                    if (!t) {
                                        t = new a(this,e),
                                            this.nsps[e] = t;
                                        var n = this;
                                        t.on("connect", (function() {
                                                t.id = n.engine.id,
                                                ~d(n.connected, t) || n.connected.push(t)
                                            }
                                        ))
                                    }
                                    return t
                                }
                                ,
                                p.prototype.destroy = function(e) {
                                    var t = d(this.connected, e);
                                    ~t && this.connected.splice(t, 1),
                                    this.connected.length || this.close()
                                }
                                ,
                                p.prototype.packet = function(e) {
                                    c("writing packet %j", e);
                                    var t = this;
                                    t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0,
                                        this.encoder.encode(e, (function(e) {
                                                for (var n = 0; n < e.length; n++)
                                                    t.engine.write(e[n]);
                                                t.encoding = !1,
                                                    t.processPacketQueue()
                                            }
                                        )))
                                }
                                ,
                                p.prototype.processPacketQueue = function() {
                                    if (this.packetBuffer.length > 0 && !this.encoding) {
                                        var e = this.packetBuffer.shift();
                                        this.packet(e)
                                    }
                                }
                                ,
                                p.prototype.cleanup = function() {
                                    var e;
                                    while (e = this.subs.shift())
                                        e.destroy();
                                    this.packetBuffer = [],
                                        this.encoding = !1,
                                        this.decoder.destroy()
                                }
                                ,
                                p.prototype.close = p.prototype.disconnect = function() {
                                    this.skipReconnect = !0,
                                        this.backoff.reset(),
                                        this.readyState = "closed",
                                    this.engine && this.engine.close()
                                }
                                ,
                                p.prototype.onclose = function(e) {
                                    c("close"),
                                        this.cleanup(),
                                        this.backoff.reset(),
                                        this.readyState = "closed",
                                        this.emit("close", e),
                                    this._reconnection && !this.skipReconnect && this.reconnect()
                                }
                                ,
                                p.prototype.reconnect = function() {
                                    if (this.reconnecting || this.skipReconnect)
                                        return this;
                                    var e = this;
                                    if (this.backoff.attempts >= this._reconnectionAttempts)
                                        c("reconnect failed"),
                                            this.backoff.reset(),
                                            this.emitAll("reconnect_failed"),
                                            this.reconnecting = !1;
                                    else {
                                        var t = this.backoff.duration();
                                        c("will wait %dms before reconnect attempt", t),
                                            this.reconnecting = !0;
                                        var n = setTimeout((function() {
                                                e.skipReconnect || (c("attempting reconnect"),
                                                    e.emitAll("reconnect_attempt", e.backoff.attempts),
                                                    e.emitAll("reconnecting", e.backoff.attempts),
                                                e.skipReconnect || e.open((function(t) {
                                                        t ? (c("reconnect attempt error"),
                                                            e.reconnecting = !1,
                                                            e.reconnect(),
                                                            e.emitAll("reconnect_error", t.data)) : (c("reconnect success"),
                                                            e.onreconnect())
                                                    }
                                                )))
                                            }
                                        ), t);
                                        this.subs.push({
                                            destroy: function() {
                                                clearTimeout(n)
                                            }
                                        })
                                    }
                                }
                                ,
                                p.prototype.onreconnect = function() {
                                    var e = this.backoff.attempts;
                                    this.reconnecting = !1,
                                        this.backoff.reset(),
                                        this.updateSocketIds(),
                                        this.emitAll("reconnect", e)
                                }
                        }
                            , {
                                "./on": 4,
                                "./socket": 5,
                                "./url": 6,
                                backo2: 7,
                                "component-bind": 8,
                                "component-emitter": 9,
                                debug: 10,
                                "engine.io-client": 11,
                                indexof: 40,
                                "object-component": 41,
                                "socket.io-parser": 44
                            }],
                        4: [function(e, t, n) {
                            function i(e, t, n) {
                                return e.on(t, n),
                                    {
                                        destroy: function() {
                                            e.removeListener(t, n)
                                        }
                                    }
                            }
                            t.exports = i
                        }
                            , {}],
                        5: [function(e, t, n) {
                            var i = e("socket.io-parser")
                                , a = e("component-emitter")
                                , r = e("to-array")
                                , o = e("./on")
                                , s = e("component-bind")
                                , l = e("debug")("socket.io-client:socket")
                                , c = e("has-binary");
                            t.exports = p;
                            var d = {
                                connect: 1,
                                connect_error: 1,
                                connect_timeout: 1,
                                disconnect: 1,
                                error: 1,
                                reconnect: 1,
                                reconnect_attempt: 1,
                                reconnect_failed: 1,
                                reconnect_error: 1,
                                reconnecting: 1
                            }
                                , u = a.prototype.emit;
                            function p(e, t) {
                                this.io = e,
                                    this.nsp = t,
                                    this.json = this,
                                    this.ids = 0,
                                    this.acks = {},
                                this.io.autoConnect && this.open(),
                                    this.receiveBuffer = [],
                                    this.sendBuffer = [],
                                    this.connected = !1,
                                    this.disconnected = !0
                            }
                            a(p.prototype),
                                p.prototype.subEvents = function() {
                                    if (!this.subs) {
                                        var e = this.io;
                                        this.subs = [o(e, "open", s(this, "onopen")), o(e, "packet", s(this, "onpacket")), o(e, "close", s(this, "onclose"))]
                                    }
                                }
                                ,
                                p.prototype.open = p.prototype.connect = function() {
                                    return this.connected || (this.subEvents(),
                                        this.io.open(),
                                    "open" == this.io.readyState && this.onopen()),
                                        this
                                }
                                ,
                                p.prototype.send = function() {
                                    var e = r(arguments);
                                    return e.unshift("message"),
                                        this.emit.apply(this, e),
                                        this
                                }
                                ,
                                p.prototype.emit = function(e) {
                                    if (d.hasOwnProperty(e))
                                        return u.apply(this, arguments),
                                            this;
                                    var t = r(arguments)
                                        , n = i.EVENT;
                                    c(t) && (n = i.BINARY_EVENT);
                                    var a = {
                                        type: n,
                                        data: t
                                    };
                                    return "function" == typeof t[t.length - 1] && (l("emitting packet with ack id %d", this.ids),
                                        this.acks[this.ids] = t.pop(),
                                        a.id = this.ids++),
                                        this.connected ? this.packet(a) : this.sendBuffer.push(a),
                                        this
                                }
                                ,
                                p.prototype.packet = function(e) {
                                    e.nsp = this.nsp,
                                        this.io.packet(e)
                                }
                                ,
                                p.prototype.onopen = function() {
                                    l("transport is open - connecting"),
                                    "/" != this.nsp && this.packet({
                                        type: i.CONNECT
                                    })
                                }
                                ,
                                p.prototype.onclose = function(e) {
                                    l("close (%s)", e),
                                        this.connected = !1,
                                        this.disconnected = !0,
                                        delete this.id,
                                        this.emit("disconnect", e)
                                }
                                ,
                                p.prototype.onpacket = function(e) {
                                    if (e.nsp == this.nsp)
                                        switch (e.type) {
                                            case i.CONNECT:
                                                this.onconnect();
                                                break;
                                            case i.EVENT:
                                                this.onevent(e);
                                                break;
                                            case i.BINARY_EVENT:
                                                this.onevent(e);
                                                break;
                                            case i.ACK:
                                                this.onack(e);
                                                break;
                                            case i.BINARY_ACK:
                                                this.onack(e);
                                                break;
                                            case i.DISCONNECT:
                                                this.ondisconnect();
                                                break;
                                            case i.ERROR:
                                                this.emit("error", e.data);
                                                break
                                        }
                                }
                                ,
                                p.prototype.onevent = function(e) {
                                    var t = e.data || [];
                                    l("emitting event %j", t),
                                    null != e.id && (l("attaching ack callback to event"),
                                        t.push(this.ack(e.id))),
                                        this.connected ? u.apply(this, t) : this.receiveBuffer.push(t)
                                }
                                ,
                                p.prototype.ack = function(e) {
                                    var t = this
                                        , n = !1;
                                    return function() {
                                        if (!n) {
                                            n = !0;
                                            var a = r(arguments);
                                            l("sending ack %j", a);
                                            var o = c(a) ? i.BINARY_ACK : i.ACK;
                                            t.packet({
                                                type: o,
                                                id: e,
                                                data: a
                                            })
                                        }
                                    }
                                }
                                ,
                                p.prototype.onack = function(e) {
                                    l("calling ack %s with %j", e.id, e.data);
                                    var t = this.acks[e.id];
                                    t.apply(this, e.data),
                                        delete this.acks[e.id]
                                }
                                ,
                                p.prototype.onconnect = function() {
                                    this.connected = !0,
                                        this.disconnected = !1,
                                        this.emit("connect"),
                                        this.emitBuffered()
                                }
                                ,
                                p.prototype.emitBuffered = function() {
                                    var e;
                                    for (e = 0; e < this.receiveBuffer.length; e++)
                                        u.apply(this, this.receiveBuffer[e]);
                                    for (this.receiveBuffer = [],
                                             e = 0; e < this.sendBuffer.length; e++)
                                        this.packet(this.sendBuffer[e]);
                                    this.sendBuffer = []
                                }
                                ,
                                p.prototype.ondisconnect = function() {
                                    l("server disconnect (%s)", this.nsp),
                                        this.destroy(),
                                        this.onclose("io server disconnect")
                                }
                                ,
                                p.prototype.destroy = function() {
                                    if (this.subs) {
                                        for (var e = 0; e < this.subs.length; e++)
                                            this.subs[e].destroy();
                                        this.subs = null
                                    }
                                    this.io.destroy(this)
                                }
                                ,
                                p.prototype.close = p.prototype.disconnect = function() {
                                    return this.connected && (l("performing disconnect (%s)", this.nsp),
                                        this.packet({
                                            type: i.DISCONNECT
                                        })),
                                        this.destroy(),
                                    this.connected && this.onclose("io client disconnect"),
                                        this
                                }
                        }
                            , {
                                "./on": 4,
                                "component-bind": 8,
                                "component-emitter": 9,
                                debug: 10,
                                "has-binary": 36,
                                "socket.io-parser": 44,
                                "to-array": 48
                            }],
                        6: [function(e, t, n) {
                            (function(n) {
                                    var i = e("parseuri")
                                        , a = e("debug")("socket.io-client:url");
                                    function r(e, t) {
                                        var n = e;
                                        t = t || "";
                                        return null == e && (e = t.protocol + "//" + t.host),
                                        "string" == typeof e && ("/" == e.charAt(0) && (e = "/" == e.charAt(1) ? t.protocol + e : t.hostname + e),
                                        /^(https?|wss?):\/\//.test(e) || (a("protocol-less url %s", e),
                                            e = "undefined" != typeof t ? t.protocol + "//" + e : "https://" + e),
                                            a("parse %s", e),
                                            n = i(e)),
                                        n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
                                            n.path = n.path || "/",
                                            n.id = n.protocol + "://" + n.host + ":" + n.port,
                                            n.href = n.protocol + "://" + n.host + (t && t.port == n.port ? "" : ":" + n.port),
                                            n
                                    }
                                    t.exports = r
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {
                                debug: 10,
                                parseuri: 42
                            }],
                        7: [function(e, t, n) {
                            function i(e) {
                                e = e || {},
                                    this.ms = e.min || 100,
                                    this.max = e.max || 1e4,
                                    this.factor = e.factor || 2,
                                    this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0,
                                    this.attempts = 0
                            }
                            t.exports = i,
                                i.prototype.duration = function() {
                                    var e = this.ms * Math.pow(this.factor, this.attempts++);
                                    if (this.jitter) {
                                        var t = Math.random()
                                            , n = Math.floor(t * this.jitter * e);
                                        e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                                    }
                                    return 0 | Math.min(e, this.max)
                                }
                                ,
                                i.prototype.reset = function() {
                                    this.attempts = 0
                                }
                                ,
                                i.prototype.setMin = function(e) {
                                    this.ms = e
                                }
                                ,
                                i.prototype.setMax = function(e) {
                                    this.max = e
                                }
                                ,
                                i.prototype.setJitter = function(e) {
                                    this.jitter = e
                                }
                        }
                            , {}],
                        8: [function(e, t, n) {
                            var i = [].slice;
                            t.exports = function(e, t) {
                                if ("string" == typeof t && (t = e[t]),
                                "function" != typeof t)
                                    throw new Error("bind() requires a function");
                                var n = i.call(arguments, 2);
                                return function() {
                                    return t.apply(e, n.concat(i.call(arguments)))
                                }
                            }
                        }
                            , {}],
                        9: [function(e, t, n) {
                            function i(e) {
                                if (e)
                                    return a(e)
                            }
                            function a(e) {
                                for (var t in i.prototype)
                                    e[t] = i.prototype[t];
                                return e
                            }
                            t.exports = i,
                                i.prototype.on = i.prototype.addEventListener = function(e, t) {
                                    return this._callbacks = this._callbacks || {},
                                        (this._callbacks[e] = this._callbacks[e] || []).push(t),
                                        this
                                }
                                ,
                                i.prototype.once = function(e, t) {
                                    var n = this;
                                    function i() {
                                        n.off(e, i),
                                            t.apply(this, arguments)
                                    }
                                    return this._callbacks = this._callbacks || {},
                                        i.fn = t,
                                        this.on(e, i),
                                        this
                                }
                                ,
                                i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(e, t) {
                                    if (this._callbacks = this._callbacks || {},
                                    0 == arguments.length)
                                        return this._callbacks = {},
                                            this;
                                    var n, i = this._callbacks[e];
                                    if (!i)
                                        return this;
                                    if (1 == arguments.length)
                                        return delete this._callbacks[e],
                                            this;
                                    for (var a = 0; a < i.length; a++)
                                        if (n = i[a],
                                        n === t || n.fn === t) {
                                            i.splice(a, 1);
                                            break
                                        }
                                    return this
                                }
                                ,
                                i.prototype.emit = function(e) {
                                    this._callbacks = this._callbacks || {};
                                    var t = [].slice.call(arguments, 1)
                                        , n = this._callbacks[e];
                                    if (n) {
                                        n = n.slice(0);
                                        for (var i = 0, a = n.length; i < a; ++i)
                                            n[i].apply(this, t)
                                    }
                                    return this
                                }
                                ,
                                i.prototype.listeners = function(e) {
                                    return this._callbacks = this._callbacks || {},
                                    this._callbacks[e] || []
                                }
                                ,
                                i.prototype.hasListeners = function(e) {
                                    return !!this.listeners(e).length
                                }
                        }
                            , {}],
                        10: [function(e, t, n) {
                            function i(e) {
                                return i.enabled(e) ? function(t) {
                                        t = a(t);
                                        var n = new Date
                                            , r = n - (i[e] || n);
                                        i[e] = n,
                                            t = e + " " + t + " +" + i.humanize(r),
                                        window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                                    }
                                    : function() {}
                            }
                            function a(e) {
                                return e instanceof Error ? e.stack || e.message : e
                            }
                            t.exports = i,
                                i.names = [],
                                i.skips = [],
                                i.enable = function(e) {
                                    try {
                                        localStorage.debug = e
                                    } catch (r) {}
                                    for (var t = (e || "").split(/[\s,]+/), n = t.length, a = 0; a < n; a++)
                                        e = t[a].replace("*", ".*?"),
                                            "-" === e[0] ? i.skips.push(new RegExp("^" + e.substr(1) + "$")) : i.names.push(new RegExp("^" + e + "$"))
                                }
                                ,
                                i.disable = function() {
                                    i.enable("")
                                }
                                ,
                                i.humanize = function(e) {
                                    var t = 1e3
                                        , n = 6e4
                                        , i = 60 * n;
                                    return e >= i ? (e / i).toFixed(1) + "h" : e >= n ? (e / n).toFixed(1) + "m" : e >= t ? (e / t | 0) + "s" : e + "ms"
                                }
                                ,
                                i.enabled = function(e) {
                                    for (var t = 0, n = i.skips.length; t < n; t++)
                                        if (i.skips[t].test(e))
                                            return !1;
                                    for (t = 0,
                                             n = i.names.length; t < n; t++)
                                        if (i.names[t].test(e))
                                            return !0;
                                    return !1
                                }
                            ;
                            try {
                                window.localStorage && i.enable(localStorage.debug)
                            } catch (r) {}
                        }
                            , {}],
                        11: [function(e, t, n) {
                            t.exports = e("./lib/")
                        }
                            , {
                                "./lib/": 12
                            }],
                        12: [function(e, t, n) {
                            t.exports = e("./socket"),
                                t.exports.parser = e("engine.io-parser")
                        }
                            , {
                                "./socket": 13,
                                "engine.io-parser": 25
                            }],
                        13: [function(e, t, n) {
                            (function(n) {
                                    var i = e("./transports")
                                        , a = e("component-emitter")
                                        , r = e("debug")("engine.io-client:socket")
                                        , o = e("indexof")
                                        , s = e("engine.io-parser")
                                        , l = e("parseuri")
                                        , c = e("parsejson")
                                        , d = e("parseqs");
                                    function u(e, t) {
                                        if (!(this instanceof u))
                                            return new u(e,t);
                                        if (t = t || {},
                                        e && "object" == typeof e && (t = e,
                                            e = null),
                                        e && (e = l(e),
                                            t.host = e.host,
                                            t.secure = "https" == e.protocol || "wss" == e.protocol,
                                            t.port = e.port,
                                        e.query && (t.query = e.query)),
                                            this.secure = null != t.secure ? t.secure : n.location && "https:" == location.protocol,
                                            t.host) {
                                            var i = t.host.split(":");
                                            t.hostname = i.shift(),
                                                i.length ? t.port = i.pop() : t.port || (t.port = this.secure ? "443" : "80")
                                        }
                                        this.agent = t.agent || !1,
                                            this.hostname = t.hostname || (n.location ? location.hostname : "localhost"),
                                            this.port = t.port || (n.location && location.port ? location.port : this.secure ? 443 : 80),
                                            this.query = t.query || {},
                                        "string" == typeof this.query && (this.query = d.decode(this.query)),
                                            this.upgrade = !1 !== t.upgrade,
                                            this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/",
                                            this.forceJSONP = !!t.forceJSONP,
                                            this.jsonp = !1 !== t.jsonp,
                                            this.forceBase64 = !!t.forceBase64,
                                            this.enablesXDR = !!t.enablesXDR,
                                            this.timestampParam = t.timestampParam || "t",
                                            this.timestampRequests = t.timestampRequests,
                                            this.transports = t.transports || ["polling", "websocket"],
                                            this.readyState = "",
                                            this.writeBuffer = [],
                                            this.callbackBuffer = [],
                                            this.policyPort = t.policyPort || 843,
                                            this.rememberUpgrade = t.rememberUpgrade || !1,
                                            this.binaryType = null,
                                            this.onlyBinaryUpgrades = t.onlyBinaryUpgrades,
                                            this.pfx = t.pfx || null,
                                            this.key = t.key || null,
                                            this.passphrase = t.passphrase || null,
                                            this.cert = t.cert || null,
                                            this.ca = t.ca || null,
                                            this.ciphers = t.ciphers || null,
                                            this.rejectUnauthorized = t.rejectUnauthorized || null,
                                            this.open()
                                    }
                                    function p(e) {
                                        var t = {};
                                        for (var n in e)
                                            e.hasOwnProperty(n) && (t[n] = e[n]);
                                        return t
                                    }
                                    t.exports = u,
                                        u.priorWebsocketSuccess = !1,
                                        a(u.prototype),
                                        u.protocol = s.protocol,
                                        u.Socket = u,
                                        u.Transport = e("./transport"),
                                        u.transports = e("./transports"),
                                        u.parser = e("engine.io-parser"),
                                        u.prototype.createTransport = function(e) {
                                            r('creating transport "%s"', e);
                                            var t = p(this.query);
                                            t.EIO = s.protocol,
                                                t.transport = e,
                                            this.id && (t.sid = this.id);
                                            var n = new i[e]({
                                                agent: this.agent,
                                                hostname: this.hostname,
                                                port: this.port,
                                                secure: this.secure,
                                                path: this.path,
                                                query: t,
                                                forceJSONP: this.forceJSONP,
                                                jsonp: this.jsonp,
                                                forceBase64: this.forceBase64,
                                                enablesXDR: this.enablesXDR,
                                                timestampRequests: this.timestampRequests,
                                                timestampParam: this.timestampParam,
                                                policyPort: this.policyPort,
                                                socket: this,
                                                pfx: this.pfx,
                                                key: this.key,
                                                passphrase: this.passphrase,
                                                cert: this.cert,
                                                ca: this.ca,
                                                ciphers: this.ciphers,
                                                rejectUnauthorized: this.rejectUnauthorized
                                            });
                                            return n
                                        }
                                        ,
                                        u.prototype.open = function() {
                                            var e;
                                            if (this.rememberUpgrade && u.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket"))
                                                e = "websocket";
                                            else {
                                                if (0 == this.transports.length) {
                                                    var t = this;
                                                    return void setTimeout((function() {
                                                            t.emit("error", "No transports available")
                                                        }
                                                    ), 0)
                                                }
                                                e = this.transports[0]
                                            }
                                            this.readyState = "opening";
                                            try {
                                                e = this.createTransport(e)
                                            } catch (n) {
                                                return this.transports.shift(),
                                                    void this.open()
                                            }
                                            e.open(),
                                                this.setTransport(e)
                                        }
                                        ,
                                        u.prototype.setTransport = function(e) {
                                            r("setting transport %s", e.name);
                                            var t = this;
                                            this.transport && (r("clearing existing transport %s", this.transport.name),
                                                this.transport.removeAllListeners()),
                                                this.transport = e,
                                                e.on("drain", (function() {
                                                        t.onDrain()
                                                    }
                                                )).on("packet", (function(e) {
                                                        t.onPacket(e)
                                                    }
                                                )).on("error", (function(e) {
                                                        t.onError(e)
                                                    }
                                                )).on("close", (function() {
                                                        t.onClose("transport close")
                                                    }
                                                ))
                                        }
                                        ,
                                        u.prototype.probe = function(e) {
                                            r('probing transport "%s"', e);
                                            var t = this.createTransport(e, {
                                                probe: 1
                                            })
                                                , n = !1
                                                , i = this;
                                            function a() {
                                                if (i.onlyBinaryUpgrades) {
                                                    var a = !this.supportsBinary && i.transport.supportsBinary;
                                                    n = n || a
                                                }
                                                n || (r('probe transport "%s" opened', e),
                                                    t.send([{
                                                        type: "ping",
                                                        data: "probe"
                                                    }]),
                                                    t.once("packet", (function(a) {
                                                            if (!n)
                                                                if ("pong" == a.type && "probe" == a.data) {
                                                                    if (r('probe transport "%s" pong', e),
                                                                        i.upgrading = !0,
                                                                        i.emit("upgrading", t),
                                                                        !t)
                                                                        return;
                                                                    u.priorWebsocketSuccess = "websocket" == t.name,
                                                                        r('pausing current transport "%s"', i.transport.name),
                                                                        i.transport.pause((function() {
                                                                                n || "closed" != i.readyState && (r("changing transport and sending upgrade packet"),
                                                                                    p(),
                                                                                    i.setTransport(t),
                                                                                    t.send([{
                                                                                        type: "upgrade"
                                                                                    }]),
                                                                                    i.emit("upgrade", t),
                                                                                    t = null,
                                                                                    i.upgrading = !1,
                                                                                    i.flush())
                                                                            }
                                                                        ))
                                                                } else {
                                                                    r('probe transport "%s" failed', e);
                                                                    var o = new Error("probe error");
                                                                    o.transport = t.name,
                                                                        i.emit("upgradeError", o)
                                                                }
                                                        }
                                                    )))
                                            }
                                            function o() {
                                                n || (n = !0,
                                                    p(),
                                                    t.close(),
                                                    t = null)
                                            }
                                            function s(n) {
                                                var a = new Error("probe error: " + n);
                                                a.transport = t.name,
                                                    o(),
                                                    r('probe transport "%s" failed because of error: %s', e, n),
                                                    i.emit("upgradeError", a)
                                            }
                                            function l() {
                                                s("transport closed")
                                            }
                                            function c() {
                                                s("socket closed")
                                            }
                                            function d(e) {
                                                t && e.name != t.name && (r('"%s" works - aborting "%s"', e.name, t.name),
                                                    o())
                                            }
                                            function p() {
                                                t.removeListener("open", a),
                                                    t.removeListener("error", s),
                                                    t.removeListener("close", l),
                                                    i.removeListener("close", c),
                                                    i.removeListener("upgrading", d)
                                            }
                                            u.priorWebsocketSuccess = !1,
                                                t.once("open", a),
                                                t.once("error", s),
                                                t.once("close", l),
                                                this.once("close", c),
                                                this.once("upgrading", d),
                                                t.open()
                                        }
                                        ,
                                        u.prototype.onOpen = function() {
                                            if (r("socket open"),
                                                this.readyState = "open",
                                                u.priorWebsocketSuccess = "websocket" == this.transport.name,
                                                this.emit("open"),
                                                this.flush(),
                                            "open" == this.readyState && this.upgrade && this.transport.pause) {
                                                r("starting upgrade probes");
                                                for (var e = 0, t = this.upgrades.length; e < t; e++)
                                                    this.probe(this.upgrades[e])
                                            }
                                        }
                                        ,
                                        u.prototype.onPacket = function(e) {
                                            if ("opening" == this.readyState || "open" == this.readyState)
                                                switch (r('socket receive: type "%s", data "%s"', e.type, e.data),
                                                    this.emit("packet", e),
                                                    this.emit("heartbeat"),
                                                    e.type) {
                                                    case "open":
                                                        this.onHandshake(c(e.data));
                                                        break;
                                                    case "pong":
                                                        this.setPing();
                                                        break;
                                                    case "error":
                                                        var t = new Error("server error");
                                                        t.code = e.data,
                                                            this.emit("error", t);
                                                        break;
                                                    case "message":
                                                        this.emit("data", e.data),
                                                            this.emit("message", e.data);
                                                        break
                                                }
                                            else
                                                r('packet received with socket readyState "%s"', this.readyState)
                                        }
                                        ,
                                        u.prototype.onHandshake = function(e) {
                                            this.emit("handshake", e),
                                                this.id = e.sid,
                                                this.transport.query.sid = e.sid,
                                                this.upgrades = this.filterUpgrades(e.upgrades),
                                                this.pingInterval = e.pingInterval,
                                                this.pingTimeout = e.pingTimeout,
                                                this.onOpen(),
                                            "closed" != this.readyState && (this.setPing(),
                                                this.removeListener("heartbeat", this.onHeartbeat),
                                                this.on("heartbeat", this.onHeartbeat))
                                        }
                                        ,
                                        u.prototype.onHeartbeat = function(e) {
                                            clearTimeout(this.pingTimeoutTimer);
                                            var t = this;
                                            t.pingTimeoutTimer = setTimeout((function() {
                                                    "closed" != t.readyState && t.onClose("ping timeout")
                                                }
                                            ), e || t.pingInterval + t.pingTimeout)
                                        }
                                        ,
                                        u.prototype.setPing = function() {
                                            var e = this;
                                            clearTimeout(e.pingIntervalTimer),
                                                e.pingIntervalTimer = setTimeout((function() {
                                                        r("writing ping packet - expecting pong within %sms", e.pingTimeout),
                                                            e.ping(),
                                                            e.onHeartbeat(e.pingTimeout)
                                                    }
                                                ), e.pingInterval)
                                        }
                                        ,
                                        u.prototype.ping = function() {
                                            this.sendPacket("ping")
                                        }
                                        ,
                                        u.prototype.onDrain = function() {
                                            for (var e = 0; e < this.prevBufferLen; e++)
                                                this.callbackBuffer[e] && this.callbackBuffer[e]();
                                            this.writeBuffer.splice(0, this.prevBufferLen),
                                                this.callbackBuffer.splice(0, this.prevBufferLen),
                                                this.prevBufferLen = 0,
                                                0 == this.writeBuffer.length ? this.emit("drain") : this.flush()
                                        }
                                        ,
                                        u.prototype.flush = function() {
                                            "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (r("flushing %d packets in socket", this.writeBuffer.length),
                                                this.transport.send(this.writeBuffer),
                                                this.prevBufferLen = this.writeBuffer.length,
                                                this.emit("flush"))
                                        }
                                        ,
                                        u.prototype.write = u.prototype.send = function(e, t) {
                                            return this.sendPacket("message", e, t),
                                                this
                                        }
                                        ,
                                        u.prototype.sendPacket = function(e, t, n) {
                                            if ("closing" != this.readyState && "closed" != this.readyState) {
                                                var i = {
                                                    type: e,
                                                    data: t
                                                };
                                                this.emit("packetCreate", i),
                                                    this.writeBuffer.push(i),
                                                    this.callbackBuffer.push(n),
                                                    this.flush()
                                            }
                                        }
                                        ,
                                        u.prototype.close = function() {
                                            if ("opening" == this.readyState || "open" == this.readyState) {
                                                var e = function() {
                                                    i.onClose("forced close"),
                                                        r("socket closing - telling transport to close"),
                                                        i.transport.close()
                                                }
                                                    , t = function t() {
                                                    i.removeListener("upgrade", t),
                                                        i.removeListener("upgradeError", t),
                                                        e()
                                                }
                                                    , n = function() {
                                                    i.once("upgrade", t),
                                                        i.once("upgradeError", t)
                                                };
                                                this.readyState = "closing";
                                                var i = this;
                                                this.writeBuffer.length ? this.once("drain", (function() {
                                                        this.upgrading ? n() : e()
                                                    }
                                                )) : this.upgrading ? n() : e()
                                            }
                                            return this
                                        }
                                        ,
                                        u.prototype.onError = function(e) {
                                            r("socket error %j", e),
                                                u.priorWebsocketSuccess = !1,
                                                this.emit("error", e),
                                                this.onClose("transport error", e)
                                        }
                                        ,
                                        u.prototype.onClose = function(e, t) {
                                            if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                                                r('socket close with reason: "%s"', e);
                                                var n = this;
                                                clearTimeout(this.pingIntervalTimer),
                                                    clearTimeout(this.pingTimeoutTimer),
                                                    setTimeout((function() {
                                                            n.writeBuffer = [],
                                                                n.callbackBuffer = [],
                                                                n.prevBufferLen = 0
                                                        }
                                                    ), 0),
                                                    this.transport.removeAllListeners("close"),
                                                    this.transport.close(),
                                                    this.transport.removeAllListeners(),
                                                    this.readyState = "closed",
                                                    this.id = null,
                                                    this.emit("close", e, t)
                                            }
                                        }
                                        ,
                                        u.prototype.filterUpgrades = function(e) {
                                            for (var t = [], n = 0, i = e.length; n < i; n++)
                                                ~o(this.transports, e[n]) && t.push(e[n]);
                                            return t
                                        }
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {
                                "./transport": 14,
                                "./transports": 15,
                                "component-emitter": 9,
                                debug: 22,
                                "engine.io-parser": 25,
                                indexof: 40,
                                parsejson: 32,
                                parseqs: 33,
                                parseuri: 34
                            }],
                        14: [function(e, t, n) {
                            var i = e("engine.io-parser")
                                , a = e("component-emitter");
                            function r(e) {
                                this.path = e.path,
                                    this.hostname = e.hostname,
                                    this.port = e.port,
                                    this.secure = e.secure,
                                    this.query = e.query,
                                    this.timestampParam = e.timestampParam,
                                    this.timestampRequests = e.timestampRequests,
                                    this.readyState = "",
                                    this.agent = e.agent || !1,
                                    this.socket = e.socket,
                                    this.enablesXDR = e.enablesXDR,
                                    this.pfx = e.pfx,
                                    this.key = e.key,
                                    this.passphrase = e.passphrase,
                                    this.cert = e.cert,
                                    this.ca = e.ca,
                                    this.ciphers = e.ciphers,
                                    this.rejectUnauthorized = e.rejectUnauthorized
                            }
                            t.exports = r,
                                a(r.prototype),
                                r.timestamps = 0,
                                r.prototype.onError = function(e, t) {
                                    var n = new Error(e);
                                    return n.type = "TransportError",
                                        n.description = t,
                                        this.emit("error", n),
                                        this
                                }
                                ,
                                r.prototype.open = function() {
                                    return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening",
                                        this.doOpen()),
                                        this
                                }
                                ,
                                r.prototype.close = function() {
                                    return "opening" != this.readyState && "open" != this.readyState || (this.doClose(),
                                        this.onClose()),
                                        this
                                }
                                ,
                                r.prototype.send = function(e) {
                                    if ("open" != this.readyState)
                                        throw new Error("Transport not open");
                                    this.write(e)
                                }
                                ,
                                r.prototype.onOpen = function() {
                                    this.readyState = "open",
                                        this.writable = !0,
                                        this.emit("open")
                                }
                                ,
                                r.prototype.onData = function(e) {
                                    var t = i.decodePacket(e, this.socket.binaryType);
                                    this.onPacket(t)
                                }
                                ,
                                r.prototype.onPacket = function(e) {
                                    this.emit("packet", e)
                                }
                                ,
                                r.prototype.onClose = function() {
                                    this.readyState = "closed",
                                        this.emit("close")
                                }
                        }
                            , {
                                "component-emitter": 9,
                                "engine.io-parser": 25
                            }],
                        15: [function(e, t, n) {
                            (function(t) {
                                    var i = e("xmlhttprequest")
                                        , a = e("./polling-xhr")
                                        , r = e("./polling-jsonp")
                                        , o = e("./websocket");
                                    function s(e) {
                                        var n, o = !1, s = !1, l = !1 !== e.jsonp;
                                        if (t.location) {
                                            var c = "https:" == location.protocol
                                                , d = location.port;
                                            d || (d = c ? 443 : 80),
                                                o = e.hostname != location.hostname || d != e.port,
                                                s = e.secure != c
                                        }
                                        if (e.xdomain = o,
                                            e.xscheme = s,
                                            n = new i(e),
                                        "open"in n && !e.forceJSONP)
                                            return new a(e);
                                        if (!l)
                                            throw new Error("JSONP disabled");
                                        return new r(e)
                                    }
                                    n.polling = s,
                                        n.websocket = o
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {
                                "./polling-jsonp": 16,
                                "./polling-xhr": 17,
                                "./websocket": 19,
                                xmlhttprequest: 20
                            }],
                        16: [function(e, t, n) {
                            (function(n) {
                                    var i = e("./polling")
                                        , a = e("component-inherit");
                                    t.exports = c;
                                    var r, o = /\n/g, s = /\\n/g;
                                    function l() {}
                                    function c(e) {
                                        i.call(this, e),
                                            this.query = this.query || {},
                                        r || (n.___eio || (n.___eio = []),
                                            r = n.___eio),
                                            this.index = r.length;
                                        var t = this;
                                        r.push((function(e) {
                                                t.onData(e)
                                            }
                                        )),
                                            this.query.j = this.index,
                                        n.document && n.addEventListener && n.addEventListener("beforeunload", (function() {
                                                t.script && (t.script.onerror = l)
                                            }
                                        ), !1)
                                    }
                                    a(c, i),
                                        c.prototype.supportsBinary = !1,
                                        c.prototype.doClose = function() {
                                            this.script && (this.script.parentNode.removeChild(this.script),
                                                this.script = null),
                                            this.form && (this.form.parentNode.removeChild(this.form),
                                                this.form = null,
                                                this.iframe = null),
                                                i.prototype.doClose.call(this)
                                        }
                                        ,
                                        c.prototype.doPoll = function() {
                                            var e = this
                                                , t = document.createElement("script");
                                            this.script && (this.script.parentNode.removeChild(this.script),
                                                this.script = null),
                                                t.async = !0,
                                                t.src = this.uri(),
                                                t.onerror = function(t) {
                                                    e.onError("jsonp poll error", t)
                                                }
                                            ;
                                            var n = document.getElementsByTagName("script")[0];
                                            n.parentNode.insertBefore(t, n),
                                                this.script = t;
                                            var i = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                                            i && setTimeout((function() {
                                                    var e = document.createElement("iframe");
                                                    document.body.appendChild(e),
                                                        document.body.removeChild(e)
                                                }
                                            ), 100)
                                        }
                                        ,
                                        c.prototype.doWrite = function(e, t) {
                                            var n = this;
                                            if (!this.form) {
                                                var i, a = document.createElement("form"), r = document.createElement("textarea"), l = this.iframeId = "eio_iframe_" + this.index;
                                                a.className = "socketio",
                                                    a.style.position = "absolute",
                                                    a.style.top = "-1000px",
                                                    a.style.left = "-1000px",
                                                    a.target = l,
                                                    a.method = "POST",
                                                    a.setAttribute("accept-charset", "utf-8"),
                                                    r.name = "d",
                                                    a.appendChild(r),
                                                    document.body.appendChild(a),
                                                    this.form = a,
                                                    this.area = r
                                            }
                                            function c() {
                                                d(),
                                                    t()
                                            }
                                            function d() {
                                                if (n.iframe)
                                                    try {
                                                        n.form.removeChild(n.iframe)
                                                    } catch (t) {
                                                        n.onError("jsonp polling iframe removal error", t)
                                                    }
                                                try {
                                                    var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
                                                    i = document.createElement(e)
                                                } catch (t) {
                                                    i = document.createElement("iframe"),
                                                        i.name = n.iframeId,
                                                        i.src = "javascript:0"
                                                }
                                                i.id = n.iframeId,
                                                    n.form.appendChild(i),
                                                    n.iframe = i
                                            }
                                            this.form.action = this.uri(),
                                                d(),
                                                e = e.replace(s, "\\\n"),
                                                this.area.value = e.replace(o, "\\n");
                                            try {
                                                this.form.submit()
                                            } catch (u) {}
                                            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                                    "complete" == n.iframe.readyState && c()
                                                }
                                                : this.iframe.onload = c
                                        }
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {
                                "./polling": 18,
                                "component-inherit": 21
                            }],
                        17: [function(e, t, n) {
                            (function(n) {
                                    var i = e("xmlhttprequest")
                                        , a = e("./polling")
                                        , r = e("component-emitter")
                                        , o = e("component-inherit")
                                        , s = e("debug")("engine.io-client:polling-xhr");
                                    function l() {}
                                    function c(e) {
                                        if (a.call(this, e),
                                            n.location) {
                                            var t = "https:" == location.protocol
                                                , i = location.port;
                                            i || (i = t ? 443 : 80),
                                                this.xd = e.hostname != n.location.hostname || i != e.port,
                                                this.xs = e.secure != t
                                        }
                                    }
                                    function d(e) {
                                        this.method = e.method || "GET",
                                            this.uri = e.uri,
                                            this.xd = !!e.xd,
                                            this.xs = !!e.xs,
                                            this.async = !1 !== e.async,
                                            this.data = void 0 != e.data ? e.data : null,
                                            this.agent = e.agent,
                                            this.isBinary = e.isBinary,
                                            this.supportsBinary = e.supportsBinary,
                                            this.enablesXDR = e.enablesXDR,
                                            this.pfx = e.pfx,
                                            this.key = e.key,
                                            this.passphrase = e.passphrase,
                                            this.cert = e.cert,
                                            this.ca = e.ca,
                                            this.ciphers = e.ciphers,
                                            this.rejectUnauthorized = e.rejectUnauthorized,
                                            this.create()
                                    }
                                    function u() {
                                        for (var e in d.requests)
                                            d.requests.hasOwnProperty(e) && d.requests[e].abort()
                                    }
                                    t.exports = c,
                                        t.exports.Request = d,
                                        o(c, a),
                                        c.prototype.supportsBinary = !0,
                                        c.prototype.request = function(e) {
                                            return e = e || {},
                                                e.uri = this.uri(),
                                                e.xd = this.xd,
                                                e.xs = this.xs,
                                                e.agent = this.agent || !1,
                                                e.supportsBinary = this.supportsBinary,
                                                e.enablesXDR = this.enablesXDR,
                                                e.pfx = this.pfx,
                                                e.key = this.key,
                                                e.passphrase = this.passphrase,
                                                e.cert = this.cert,
                                                e.ca = this.ca,
                                                e.ciphers = this.ciphers,
                                                e.rejectUnauthorized = this.rejectUnauthorized,
                                                new d(e)
                                        }
                                        ,
                                        c.prototype.doWrite = function(e, t) {
                                            var n = "string" !== typeof e && void 0 !== e
                                                , i = this.request({
                                                method: "POST",
                                                data: e,
                                                isBinary: n
                                            })
                                                , a = this;
                                            i.on("success", t),
                                                i.on("error", (function(e) {
                                                        a.onError("xhr post error", e)
                                                    }
                                                )),
                                                this.sendXhr = i
                                        }
                                        ,
                                        c.prototype.doPoll = function() {
                                            s("xhr poll");
                                            var e = this.request()
                                                , t = this;
                                            e.on("data", (function(e) {
                                                    t.onData(e)
                                                }
                                            )),
                                                e.on("error", (function(e) {
                                                        t.onError("xhr poll error", e)
                                                    }
                                                )),
                                                this.pollXhr = e
                                        }
                                        ,
                                        r(d.prototype),
                                        d.prototype.create = function() {
                                            var e = {
                                                agent: this.agent,
                                                xdomain: this.xd,
                                                xscheme: this.xs,
                                                enablesXDR: this.enablesXDR
                                            };
                                            e.pfx = this.pfx,
                                                e.key = this.key,
                                                e.passphrase = this.passphrase,
                                                e.cert = this.cert,
                                                e.ca = this.ca,
                                                e.ciphers = this.ciphers,
                                                e.rejectUnauthorized = this.rejectUnauthorized;
                                            var t = this.xhr = new i(e)
                                                , a = this;
                                            try {
                                                if (s("xhr open %s: %s", this.method, this.uri),
                                                    t.open(this.method, this.uri, this.async),
                                                this.supportsBinary && (t.responseType = "arraybuffer"),
                                                "POST" == this.method)
                                                    try {
                                                        this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                                    } catch (r) {}
                                                "withCredentials"in t && (t.withCredentials = !0),
                                                    this.hasXDR() ? (t.onload = function() {
                                                            a.onLoad()
                                                        }
                                                            ,
                                                            t.onerror = function() {
                                                                a.onError(t.responseText)
                                                            }
                                                    ) : t.onreadystatechange = function() {
                                                        4 == t.readyState && (200 == t.status || 1223 == t.status ? a.onLoad() : setTimeout((function() {
                                                                a.onError(t.status)
                                                            }
                                                        ), 0))
                                                    }
                                                    ,
                                                    s("xhr data %s", this.data),
                                                    t.send(this.data)
                                            } catch (r) {
                                                return void setTimeout((function() {
                                                        a.onError(r)
                                                    }
                                                ), 0)
                                            }
                                            n.document && (this.index = d.requestsCount++,
                                                d.requests[this.index] = this)
                                        }
                                        ,
                                        d.prototype.onSuccess = function() {
                                            this.emit("success"),
                                                this.cleanup()
                                        }
                                        ,
                                        d.prototype.onData = function(e) {
                                            this.emit("data", e),
                                                this.onSuccess()
                                        }
                                        ,
                                        d.prototype.onError = function(e) {
                                            this.emit("error", e),
                                                this.cleanup(!0)
                                        }
                                        ,
                                        d.prototype.cleanup = function(e) {
                                            if ("undefined" != typeof this.xhr && null !== this.xhr) {
                                                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l,
                                                    e)
                                                    try {
                                                        this.xhr.abort()
                                                    } catch (t) {}
                                                n.document && delete d.requests[this.index],
                                                    this.xhr = null
                                            }
                                        }
                                        ,
                                        d.prototype.onLoad = function() {
                                            var e;
                                            try {
                                                var t;
                                                try {
                                                    t = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                                                } catch (n) {}
                                                e = "application/octet-stream" === t ? this.xhr.response : this.supportsBinary ? "ok" : this.xhr.responseText
                                            } catch (n) {
                                                this.onError(n)
                                            }
                                            null != e && this.onData(e)
                                        }
                                        ,
                                        d.prototype.hasXDR = function() {
                                            return "undefined" !== typeof n.XDomainRequest && !this.xs && this.enablesXDR
                                        }
                                        ,
                                        d.prototype.abort = function() {
                                            this.cleanup()
                                        }
                                        ,
                                    n.document && (d.requestsCount = 0,
                                        d.requests = {},
                                        n.attachEvent ? n.attachEvent("onunload", u) : n.addEventListener && n.addEventListener("beforeunload", u, !1))
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {
                                "./polling": 18,
                                "component-emitter": 9,
                                "component-inherit": 21,
                                debug: 22,
                                xmlhttprequest: 20
                            }],
                        18: [function(e, t, n) {
                            var i = e("../transport")
                                , a = e("parseqs")
                                , r = e("engine.io-parser")
                                , o = e("component-inherit")
                                , s = e("debug")("engine.io-client:polling");
                            t.exports = c;
                            var l = function() {
                                var t = e("xmlhttprequest")
                                    , n = new t({
                                    xdomain: !1
                                });
                                return null != n.responseType
                            }();
                            function c(e) {
                                var t = e && e.forceBase64;
                                l && !t || (this.supportsBinary = !1),
                                    i.call(this, e)
                            }
                            o(c, i),
                                c.prototype.name = "polling",
                                c.prototype.doOpen = function() {
                                    this.poll()
                                }
                                ,
                                c.prototype.pause = function(e) {
                                    var t = this;
                                    function n() {
                                        s("paused"),
                                            t.readyState = "paused",
                                            e()
                                    }
                                    if (this.readyState = "pausing",
                                    this.polling || !this.writable) {
                                        var i = 0;
                                        this.polling && (s("we are currently polling - waiting to pause"),
                                            i++,
                                            this.once("pollComplete", (function() {
                                                    s("pre-pause polling complete"),
                                                    --i || n()
                                                }
                                            ))),
                                        this.writable || (s("we are currently writing - waiting to pause"),
                                            i++,
                                            this.once("drain", (function() {
                                                    s("pre-pause writing complete"),
                                                    --i || n()
                                                }
                                            )))
                                    } else
                                        n()
                                }
                                ,
                                c.prototype.poll = function() {
                                    s("polling"),
                                        this.polling = !0,
                                        this.doPoll(),
                                        this.emit("poll")
                                }
                                ,
                                c.prototype.onData = function(e) {
                                    var t = this;
                                    s("polling got data %s", e);
                                    var n = function(e, n, i) {
                                        if ("opening" == t.readyState && t.onOpen(),
                                        "close" == e.type)
                                            return t.onClose(),
                                                !1;
                                        t.onPacket(e)
                                    };
                                    r.decodePayload(e, this.socket.binaryType, n),
                                    "closed" != this.readyState && (this.polling = !1,
                                        this.emit("pollComplete"),
                                        "open" == this.readyState ? this.poll() : s('ignoring poll - transport state "%s"', this.readyState))
                                }
                                ,
                                c.prototype.doClose = function() {
                                    var e = this;
                                    function t() {
                                        s("writing close packet"),
                                            e.write([{
                                                type: "close"
                                            }])
                                    }
                                    "open" == this.readyState ? (s("transport open - closing"),
                                        t()) : (s("transport not open - deferring close"),
                                        this.once("open", t))
                                }
                                ,
                                c.prototype.write = function(e) {
                                    var t = this;
                                    this.writable = !1;
                                    var n = function() {
                                        t.writable = !0,
                                            t.emit("drain")
                                    };
                                    t = this;
                                    r.encodePayload(e, this.supportsBinary, (function(e) {
                                            t.doWrite(e, n)
                                        }
                                    ))
                                }
                                ,
                                c.prototype.uri = function() {
                                    var e = this.query || {}
                                        , t = this.secure ? "https" : "http"
                                        , n = "";
                                    return !1 !== this.timestampRequests && (e[this.timestampParam] = +new Date + "-" + i.timestamps++),
                                    this.supportsBinary || e.sid || (e.b64 = 1),
                                        e = a.encode(e),
                                    this.port && ("https" == t && 443 != this.port || "http" == t && 80 != this.port) && (n = ":" + this.port),
                                    e.length && (e = "?" + e),
                                    t + "://" + this.hostname + n + this.path + e
                                }
                        }
                            , {
                                "../transport": 14,
                                "component-inherit": 21,
                                debug: 22,
                                "engine.io-parser": 25,
                                parseqs: 33,
                                xmlhttprequest: 20
                            }],
                        19: [function(e, t, n) {
                            var i = e("../transport")
                                , a = e("engine.io-parser")
                                , r = e("parseqs")
                                , o = e("component-inherit")
                                , s = e("debug")("engine.io-client:websocket")
                                , l = e("ws");
                            function c(e) {
                                var t = e && e.forceBase64;
                                t && (this.supportsBinary = !1),
                                    i.call(this, e)
                            }
                            t.exports = c,
                                o(c, i),
                                c.prototype.name = "websocket",
                                c.prototype.supportsBinary = !0,
                                c.prototype.doOpen = function() {
                                    if (this.check()) {
                                        var e = this.uri()
                                            , t = void 0
                                            , n = {
                                            agent: this.agent
                                        };
                                        n.pfx = this.pfx,
                                            n.key = this.key,
                                            n.passphrase = this.passphrase,
                                            n.cert = this.cert,
                                            n.ca = this.ca,
                                            n.ciphers = this.ciphers,
                                            n.rejectUnauthorized = this.rejectUnauthorized,
                                            this.ws = new l(e,t,n),
                                        void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                                            this.ws.binaryType = "arraybuffer",
                                            this.addEventListeners()
                                    }
                                }
                                ,
                                c.prototype.addEventListeners = function() {
                                    var e = this;
                                    this.ws.onopen = function() {
                                        e.onOpen()
                                    }
                                        ,
                                        this.ws.onclose = function() {
                                            e.onClose()
                                        }
                                        ,
                                        this.ws.onmessage = function(t) {
                                            e.onData(t.data)
                                        }
                                        ,
                                        this.ws.onerror = function(t) {
                                            e.onError("websocket error", t)
                                        }
                                }
                                ,
                            "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (c.prototype.onData = function(e) {
                                    var t = this;
                                    setTimeout((function() {
                                            i.prototype.onData.call(t, e)
                                        }
                                    ), 0)
                                }
                            ),
                                c.prototype.write = function(e) {
                                    var t = this;
                                    this.writable = !1;
                                    for (var n = 0, i = e.length; n < i; n++)
                                        a.encodePacket(e[n], this.supportsBinary, (function(e) {
                                                try {
                                                    t.ws.send(e)
                                                } catch (n) {
                                                    s("websocket closed before onclose event")
                                                }
                                            }
                                        ));
                                    function r() {
                                        t.writable = !0,
                                            t.emit("drain")
                                    }
                                    setTimeout(r, 0)
                                }
                                ,
                                c.prototype.onClose = function() {
                                    i.prototype.onClose.call(this)
                                }
                                ,
                                c.prototype.doClose = function() {
                                    "undefined" !== typeof this.ws && this.ws.close()
                                }
                                ,
                                c.prototype.uri = function() {
                                    var e = this.query || {}
                                        , t = this.secure ? "wss" : "ws"
                                        , n = "";
                                    return this.port && ("wss" == t && 443 != this.port || "ws" == t && 80 != this.port) && (n = ":" + this.port),
                                    this.timestampRequests && (e[this.timestampParam] = +new Date),
                                    this.supportsBinary || (e.b64 = 1),
                                        e = r.encode(e),
                                    e.length && (e = "?" + e),
                                    t + "://" + this.hostname + n + this.path + e
                                }
                                ,
                                c.prototype.check = function() {
                                    return !!l && !("__initialize"in l && this.name === c.prototype.name)
                                }
                        }
                            , {
                                "../transport": 14,
                                "component-inherit": 21,
                                debug: 22,
                                "engine.io-parser": 25,
                                parseqs: 33,
                                ws: 35
                            }],
                        20: [function(e, t, n) {
                            var i = e("has-cors");
                            t.exports = function(e) {
                                var t = e.xdomain
                                    , n = e.xscheme
                                    , a = e.enablesXDR;
                                try {
                                    if ("undefined" != typeof XMLHttpRequest && (!t || i))
                                        return new XMLHttpRequest
                                } catch (r) {}
                                try {
                                    if ("undefined" != typeof XDomainRequest && !n && a)
                                        return new XDomainRequest
                                } catch (r) {}
                                if (!t)
                                    try {
                                        return new ActiveXObject("Microsoft.XMLHTTP")
                                    } catch (r) {}
                            }
                        }
                            , {
                                "has-cors": 38
                            }],
                        21: [function(e, t, n) {
                            t.exports = function(e, t) {
                                var n = function() {};
                                n.prototype = t.prototype,
                                    e.prototype = new n,
                                    e.prototype.constructor = e
                            }
                        }
                            , {}],
                        22: [function(e, t, n) {
                            function i() {
                                return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
                            }
                            function a() {
                                var e = arguments
                                    , t = this.useColors;
                                if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff),
                                    !t)
                                    return e;
                                var i = "color: " + this.color;
                                e = [e[0], i, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
                                var a = 0
                                    , r = 0;
                                return e[0].replace(/%[a-z%]/g, (function(e) {
                                        "%%" !== e && (a++,
                                        "%c" === e && (r = a))
                                    }
                                )),
                                    e.splice(r, 0, i),
                                    e
                            }
                            function r() {
                                return "object" == typeof console && "function" == typeof console.log && Function.prototype.apply.call(console.log, console, arguments)
                            }
                            function o(e) {
                                try {
                                    null == e ? localStorage.removeItem("debug") : localStorage.debug = e
                                } catch (t) {}
                            }
                            function s() {
                                var e;
                                try {
                                    e = localStorage.debug
                                } catch (t) {}
                                return e
                            }
                            n = t.exports = e("./debug"),
                                n.log = r,
                                n.formatArgs = a,
                                n.save = o,
                                n.load = s,
                                n.useColors = i,
                                n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
                                n.formatters.j = function(e) {
                                    return JSON.stringify(e)
                                }
                                ,
                                n.enable(s())
                        }
                            , {
                                "./debug": 23
                            }],
                        23: [function(e, t, n) {
                            n = t.exports = o,
                                n.coerce = d,
                                n.disable = l,
                                n.enable = s,
                                n.enabled = c,
                                n.humanize = e("ms"),
                                n.names = [],
                                n.skips = [],
                                n.formatters = {};
                            var i, a = 0;
                            function r() {
                                return n.colors[a++ % n.colors.length]
                            }
                            function o(e) {
                                function t() {}
                                function a() {
                                    var e = a
                                        , t = +new Date
                                        , o = t - (i || t);
                                    e.diff = o,
                                        e.prev = i,
                                        e.curr = t,
                                        i = t,
                                    null == e.useColors && (e.useColors = n.useColors()),
                                    null == e.color && e.useColors && (e.color = r());
                                    var s = Array.prototype.slice.call(arguments);
                                    s[0] = n.coerce(s[0]),
                                    "string" !== typeof s[0] && (s = ["%o"].concat(s));
                                    var l = 0;
                                    s[0] = s[0].replace(/%([a-z%])/g, (function(t, i) {
                                            if ("%%" === t)
                                                return t;
                                            l++;
                                            var a = n.formatters[i];
                                            if ("function" === typeof a) {
                                                var r = s[l];
                                                t = a.call(e, r),
                                                    s.splice(l, 1),
                                                    l--
                                            }
                                            return t
                                        }
                                    )),
                                    "function" === typeof n.formatArgs && (s = n.formatArgs.apply(e, s));
                                    var c = a.log || n.log || console.log.bind(console);
                                    c.apply(e, s)
                                }
                                t.enabled = !1,
                                    a.enabled = !0;
                                var o = n.enabled(e) ? a : t;
                                return o.namespace = e,
                                    o
                            }
                            function s(e) {
                                n.save(e);
                                for (var t = (e || "").split(/[\s,]+/), i = t.length, a = 0; a < i; a++)
                                    t[a] && (e = t[a].replace(/\*/g, ".*?"),
                                        "-" === e[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")))
                            }
                            function l() {
                                n.enable("")
                            }
                            function c(e) {
                                var t, i;
                                for (t = 0,
                                         i = n.skips.length; t < i; t++)
                                    if (n.skips[t].test(e))
                                        return !1;
                                for (t = 0,
                                         i = n.names.length; t < i; t++)
                                    if (n.names[t].test(e))
                                        return !0;
                                return !1
                            }
                            function d(e) {
                                return e instanceof Error ? e.stack || e.message : e
                            }
                        }
                            , {
                                ms: 24
                            }],
                        24: [function(e, t, n) {
                            var i = 1e3
                                , a = 60 * i
                                , r = 60 * a
                                , o = 24 * r
                                , s = 365.25 * o;
                            function l(e) {
                                var t = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(e);
                                if (t) {
                                    var n = parseFloat(t[1])
                                        , l = (t[2] || "ms").toLowerCase();
                                    switch (l) {
                                        case "years":
                                        case "year":
                                        case "y":
                                            return n * s;
                                        case "days":
                                        case "day":
                                        case "d":
                                            return n * o;
                                        case "hours":
                                        case "hour":
                                        case "h":
                                            return n * r;
                                        case "minutes":
                                        case "minute":
                                        case "m":
                                            return n * a;
                                        case "seconds":
                                        case "second":
                                        case "s":
                                            return n * i;
                                        case "ms":
                                            return n
                                    }
                                }
                            }
                            function c(e) {
                                return e >= o ? Math.round(e / o) + "d" : e >= r ? Math.round(e / r) + "h" : e >= a ? Math.round(e / a) + "m" : e >= i ? Math.round(e / i) + "s" : e + "ms"
                            }
                            function d(e) {
                                return u(e, o, "day") || u(e, r, "hour") || u(e, a, "minute") || u(e, i, "second") || e + " ms"
                            }
                            function u(e, t, n) {
                                if (!(e < t))
                                    return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
                            }
                            t.exports = function(e, t) {
                                return t = t || {},
                                    "string" == typeof e ? l(e) : t.long ? d(e) : c(e)
                            }
                        }
                            , {}],
                        25: [function(e, t, n) {
                            (function(t) {
                                    var i = e("./keys")
                                        , a = e("has-binary")
                                        , r = e("arraybuffer.slice")
                                        , o = e("base64-arraybuffer")
                                        , s = e("after")
                                        , l = e("utf8")
                                        , c = navigator.userAgent.match(/Android/i)
                                        , d = /PhantomJS/i.test(navigator.userAgent)
                                        , u = c || d;
                                    n.protocol = 3;
                                    var p = n.packets = {
                                        open: 0,
                                        close: 1,
                                        ping: 2,
                                        pong: 3,
                                        message: 4,
                                        upgrade: 5,
                                        noop: 6
                                    }
                                        , g = i(p)
                                        , f = {
                                        type: "error",
                                        data: "parser error"
                                    }
                                        , h = e("blob");
                                    function m(e, t) {
                                        var i = "b" + n.packets[e.type] + e.data.data;
                                        return t(i)
                                    }
                                    function b(e, t, i) {
                                        if (!t)
                                            return n.encodeBase64Packet(e, i);
                                        var a = e.data
                                            , r = new Uint8Array(a)
                                            , o = new Uint8Array(1 + a.byteLength);
                                        o[0] = p[e.type];
                                        for (var s = 0; s < r.length; s++)
                                            o[s + 1] = r[s];
                                        return i(o.buffer)
                                    }
                                    function y(e, t, i) {
                                        if (!t)
                                            return n.encodeBase64Packet(e, i);
                                        var a = new FileReader;
                                        return a.onload = function() {
                                            e.data = a.result,
                                                n.encodePacket(e, t, !0, i)
                                        }
                                            ,
                                            a.readAsArrayBuffer(e.data)
                                    }
                                    function _(e, t, i) {
                                        if (!t)
                                            return n.encodeBase64Packet(e, i);
                                        if (u)
                                            return y(e, t, i);
                                        var a = new Uint8Array(1);
                                        a[0] = p[e.type];
                                        var r = new h([a.buffer, e.data]);
                                        return i(r)
                                    }
                                    function k(e, t, n) {
                                        for (var i = new Array(e.length), a = s(e.length, n), r = function(e, n, a) {
                                            t(n, (function(t, n) {
                                                    i[e] = n,
                                                        a(t, i)
                                                }
                                            ))
                                        }, o = 0; o < e.length; o++)
                                            r(o, e[o], a)
                                    }
                                    n.encodePacket = function(e, n, i, a) {
                                        "function" == typeof n && (a = n,
                                            n = !1),
                                        "function" == typeof i && (a = i,
                                            i = null);
                                        var r = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                                        if (t.ArrayBuffer && r instanceof ArrayBuffer)
                                            return b(e, n, a);
                                        if (h && r instanceof t.Blob)
                                            return _(e, n, a);
                                        if (r && r.base64)
                                            return m(e, a);
                                        var o = p[e.type];
                                        return void 0 !== e.data && (o += i ? l.encode(String(e.data)) : String(e.data)),
                                            a("" + o)
                                    }
                                        ,
                                        n.encodeBase64Packet = function(e, i) {
                                            var a, r = "b" + n.packets[e.type];
                                            if (h && e.data instanceof h) {
                                                var o = new FileReader;
                                                return o.onload = function() {
                                                    var e = o.result.split(",")[1];
                                                    i(r + e)
                                                }
                                                    ,
                                                    o.readAsDataURL(e.data)
                                            }
                                            try {
                                                a = String.fromCharCode.apply(null, new Uint8Array(e.data))
                                            } catch (d) {
                                                for (var s = new Uint8Array(e.data), l = new Array(s.length), c = 0; c < s.length; c++)
                                                    l[c] = s[c];
                                                a = String.fromCharCode.apply(null, l)
                                            }
                                            return r += t.btoa(a),
                                                i(r)
                                        }
                                        ,
                                        n.decodePacket = function(e, t, i) {
                                            if ("string" == typeof e || void 0 === e) {
                                                if ("b" == e.charAt(0))
                                                    return n.decodeBase64Packet(e.substr(1), t);
                                                if (i)
                                                    try {
                                                        e = l.decode(e)
                                                    } catch (c) {
                                                        return f
                                                    }
                                                var a = e.charAt(0);
                                                return Number(a) == a && g[a] ? e.length > 1 ? {
                                                    type: g[a],
                                                    data: e.substring(1)
                                                } : {
                                                    type: g[a]
                                                } : f
                                            }
                                            var o = new Uint8Array(e)
                                                , s = (a = o[0],
                                                r(e, 1));
                                            return h && "blob" === t && (s = new h([s])),
                                                {
                                                    type: g[a],
                                                    data: s
                                                }
                                        }
                                        ,
                                        n.decodeBase64Packet = function(e, n) {
                                            var i = g[e.charAt(0)];
                                            if (!t.ArrayBuffer)
                                                return {
                                                    type: i,
                                                    data: {
                                                        base64: !0,
                                                        data: e.substr(1)
                                                    }
                                                };
                                            var a = o.decode(e.substr(1));
                                            return "blob" === n && h && (a = new h([a])),
                                                {
                                                    type: i,
                                                    data: a
                                                }
                                        }
                                        ,
                                        n.encodePayload = function(e, t, i) {
                                            "function" == typeof t && (i = t,
                                                t = null);
                                            var r = a(e);
                                            if (t && r)
                                                return h && !u ? n.encodePayloadAsBlob(e, i) : n.encodePayloadAsArrayBuffer(e, i);
                                            if (!e.length)
                                                return i("0:");
                                            function o(e) {
                                                return e.length + ":" + e
                                            }
                                            function s(e, i) {
                                                n.encodePacket(e, !!r && t, !0, (function(e) {
                                                        i(null, o(e))
                                                    }
                                                ))
                                            }
                                            k(e, s, (function(e, t) {
                                                    return i(t.join(""))
                                                }
                                            ))
                                        }
                                        ,
                                        n.decodePayload = function(e, t, i) {
                                            if ("string" != typeof e)
                                                return n.decodePayloadAsBinary(e, t, i);
                                            var a;
                                            if ("function" === typeof t && (i = t,
                                                t = null),
                                            "" == e)
                                                return i(f, 0, 1);
                                            for (var r, o, s = "", l = 0, c = e.length; l < c; l++) {
                                                var d = e.charAt(l);
                                                if (":" != d)
                                                    s += d;
                                                else {
                                                    if ("" == s || s != (r = Number(s)))
                                                        return i(f, 0, 1);
                                                    if (o = e.substr(l + 1, r),
                                                    s != o.length)
                                                        return i(f, 0, 1);
                                                    if (o.length) {
                                                        if (a = n.decodePacket(o, t, !0),
                                                        f.type == a.type && f.data == a.data)
                                                            return i(f, 0, 1);
                                                        var u = i(a, l + r, c);
                                                        if (!1 === u)
                                                            return
                                                    }
                                                    l += r,
                                                        s = ""
                                                }
                                            }
                                            return "" != s ? i(f, 0, 1) : void 0
                                        }
                                        ,
                                        n.encodePayloadAsArrayBuffer = function(e, t) {
                                            if (!e.length)
                                                return t(new ArrayBuffer(0));
                                            function i(e, t) {
                                                n.encodePacket(e, !0, !0, (function(e) {
                                                        return t(null, e)
                                                    }
                                                ))
                                            }
                                            k(e, i, (function(e, n) {
                                                    var i = n.reduce((function(e, t) {
                                                            var n;
                                                            return n = "string" === typeof t ? t.length : t.byteLength,
                                                            e + n.toString().length + n + 2
                                                        }
                                                    ), 0)
                                                        , a = new Uint8Array(i)
                                                        , r = 0;
                                                    return n.forEach((function(e) {
                                                            var t = "string" === typeof e
                                                                , n = e;
                                                            if (t) {
                                                                for (var i = new Uint8Array(e.length), o = 0; o < e.length; o++)
                                                                    i[o] = e.charCodeAt(o);
                                                                n = i.buffer
                                                            }
                                                            a[r++] = t ? 0 : 1;
                                                            var s = n.byteLength.toString();
                                                            for (o = 0; o < s.length; o++)
                                                                a[r++] = parseInt(s[o]);
                                                            a[r++] = 255;
                                                            for (i = new Uint8Array(n),
                                                                     o = 0; o < i.length; o++)
                                                                a[r++] = i[o]
                                                        }
                                                    )),
                                                        t(a.buffer)
                                                }
                                            ))
                                        }
                                        ,
                                        n.encodePayloadAsBlob = function(e, t) {
                                            function i(e, t) {
                                                n.encodePacket(e, !0, !0, (function(e) {
                                                        var n = new Uint8Array(1);
                                                        if (n[0] = 1,
                                                        "string" === typeof e) {
                                                            for (var i = new Uint8Array(e.length), a = 0; a < e.length; a++)
                                                                i[a] = e.charCodeAt(a);
                                                            e = i.buffer,
                                                                n[0] = 0
                                                        }
                                                        var r = e instanceof ArrayBuffer ? e.byteLength : e.size
                                                            , o = r.toString()
                                                            , s = new Uint8Array(o.length + 1);
                                                        for (a = 0; a < o.length; a++)
                                                            s[a] = parseInt(o[a]);
                                                        if (s[o.length] = 255,
                                                            h) {
                                                            var l = new h([n.buffer, s.buffer, e]);
                                                            t(null, l)
                                                        }
                                                    }
                                                ))
                                            }
                                            k(e, i, (function(e, n) {
                                                    return t(new h(n))
                                                }
                                            ))
                                        }
                                        ,
                                        n.decodePayloadAsBinary = function(e, t, i) {
                                            "function" === typeof t && (i = t,
                                                t = null);
                                            var a = e
                                                , o = []
                                                , s = !1;
                                            while (a.byteLength > 0) {
                                                for (var l = new Uint8Array(a), c = 0 === l[0], d = "", u = 1; ; u++) {
                                                    if (255 == l[u])
                                                        break;
                                                    if (d.length > 310) {
                                                        s = !0;
                                                        break
                                                    }
                                                    d += l[u]
                                                }
                                                if (s)
                                                    return i(f, 0, 1);
                                                a = r(a, 2 + d.length),
                                                    d = parseInt(d);
                                                var p = r(a, 0, d);
                                                if (c)
                                                    try {
                                                        p = String.fromCharCode.apply(null, new Uint8Array(p))
                                                    } catch (m) {
                                                        var g = new Uint8Array(p);
                                                        p = "";
                                                        for (u = 0; u < g.length; u++)
                                                            p += String.fromCharCode(g[u])
                                                    }
                                                o.push(p),
                                                    a = r(a, d)
                                            }
                                            var h = o.length;
                                            o.forEach((function(e, a) {
                                                    i(n.decodePacket(e, t, !0), a, h)
                                                }
                                            ))
                                        }
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {
                                "./keys": 26,
                                after: 27,
                                "arraybuffer.slice": 28,
                                "base64-arraybuffer": 29,
                                blob: 30,
                                "has-binary": 36,
                                utf8: 31
                            }],
                        26: [function(e, t, n) {
                            t.exports = Object.keys || function(e) {
                                var t = []
                                    , n = Object.prototype.hasOwnProperty;
                                for (var i in e)
                                    n.call(e, i) && t.push(i);
                                return t
                            }
                        }
                            , {}],
                        27: [function(e, t, n) {
                            function i(e, t, n) {
                                var i = !1;
                                return n = n || a,
                                    r.count = e,
                                    0 === e ? t() : r;
                                function r(e, a) {
                                    if (r.count <= 0)
                                        throw new Error("after called too many times");
                                    --r.count,
                                        e ? (i = !0,
                                            t(e),
                                            t = n) : 0 !== r.count || i || t(null, a)
                                }
                            }
                            function a() {}
                            t.exports = i
                        }
                            , {}],
                        28: [function(e, t, n) {
                            t.exports = function(e, t, n) {
                                var i = e.byteLength;
                                if (t = t || 0,
                                    n = n || i,
                                    e.slice)
                                    return e.slice(t, n);
                                if (t < 0 && (t += i),
                                n < 0 && (n += i),
                                n > i && (n = i),
                                t >= i || t >= n || 0 === i)
                                    return new ArrayBuffer(0);
                                for (var a = new Uint8Array(e), r = new Uint8Array(n - t), o = t, s = 0; o < n; o++,
                                    s++)
                                    r[s] = a[o];
                                return r.buffer
                            }
                        }
                            , {}],
                        29: [function(e, t, n) {
                            (function(e) {
                                    "use strict";
                                    n.encode = function(t) {
                                        var n, i = new Uint8Array(t), a = i.length, r = "";
                                        for (n = 0; n < a; n += 3)
                                            r += e[i[n] >> 2],
                                                r += e[(3 & i[n]) << 4 | i[n + 1] >> 4],
                                                r += e[(15 & i[n + 1]) << 2 | i[n + 2] >> 6],
                                                r += e[63 & i[n + 2]];
                                        return a % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : a % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
                                            r
                                    }
                                        ,
                                        n.decode = function(t) {
                                            var n, i, a, r, o, s = .75 * t.length, l = t.length, c = 0;
                                            "=" === t[t.length - 1] && (s--,
                                            "=" === t[t.length - 2] && s--);
                                            var d = new ArrayBuffer(s)
                                                , u = new Uint8Array(d);
                                            for (n = 0; n < l; n += 4)
                                                i = e.indexOf(t[n]),
                                                    a = e.indexOf(t[n + 1]),
                                                    r = e.indexOf(t[n + 2]),
                                                    o = e.indexOf(t[n + 3]),
                                                    u[c++] = i << 2 | a >> 4,
                                                    u[c++] = (15 & a) << 4 | r >> 2,
                                                    u[c++] = (3 & r) << 6 | 63 & o;
                                            return d
                                        }
                                }
                            )("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
                        }
                            , {}],
                        30: [function(e, t, n) {
                            (function(e) {
                                    var n = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder
                                        , i = function() {
                                        try {
                                            var e = new Blob(["hi"]);
                                            return 2 === e.size
                                        } catch (t) {
                                            return !1
                                        }
                                    }()
                                        , a = i && function() {
                                        try {
                                            var e = new Blob([new Uint8Array([1, 2])]);
                                            return 2 === e.size
                                        } catch (t) {
                                            return !1
                                        }
                                    }()
                                        , r = n && n.prototype.append && n.prototype.getBlob;
                                    function o(e) {
                                        for (var t = 0; t < e.length; t++) {
                                            var n = e[t];
                                            if (n.buffer instanceof ArrayBuffer) {
                                                var i = n.buffer;
                                                if (n.byteLength !== i.byteLength) {
                                                    var a = new Uint8Array(n.byteLength);
                                                    a.set(new Uint8Array(i,n.byteOffset,n.byteLength)),
                                                        i = a.buffer
                                                }
                                                e[t] = i
                                            }
                                        }
                                    }
                                    function s(e, t) {
                                        t = t || {};
                                        var i = new n;
                                        o(e);
                                        for (var a = 0; a < e.length; a++)
                                            i.append(e[a]);
                                        return t.type ? i.getBlob(t.type) : i.getBlob()
                                    }
                                    function l(e, t) {
                                        return o(e),
                                            new Blob(e,t || {})
                                    }
                                    t.exports = function() {
                                        return i ? a ? e.Blob : l : r ? s : void 0
                                    }()
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {}],
                        31: [function(t, n, i) {
                            (function(t) {
                                    (function(a) {
                                            var r = "object" == typeof i && i
                                                , o = "object" == typeof n && n && n.exports == r && n
                                                , s = "object" == typeof t && t;
                                            s.global !== s && s.window !== s || (a = s);
                                            var l, c, d, u = String.fromCharCode;
                                            function p(e) {
                                                var t, n, i = [], a = 0, r = e.length;
                                                while (a < r)
                                                    t = e.charCodeAt(a++),
                                                        t >= 55296 && t <= 56319 && a < r ? (n = e.charCodeAt(a++),
                                                            56320 == (64512 & n) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t),
                                                                a--)) : i.push(t);
                                                return i
                                            }
                                            function g(e) {
                                                var t, n = e.length, i = -1, a = "";
                                                while (++i < n)
                                                    t = e[i],
                                                    t > 65535 && (t -= 65536,
                                                        a += u(t >>> 10 & 1023 | 55296),
                                                        t = 56320 | 1023 & t),
                                                        a += u(t);
                                                return a
                                            }
                                            function f(e) {
                                                if (e >= 55296 && e <= 57343)
                                                    throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value")
                                            }
                                            function h(e, t) {
                                                return u(e >> t & 63 | 128)
                                            }
                                            function m(e) {
                                                if (0 == (4294967168 & e))
                                                    return u(e);
                                                var t = "";
                                                return 0 == (4294965248 & e) ? t = u(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (f(e),
                                                    t = u(e >> 12 & 15 | 224),
                                                    t += h(e, 6)) : 0 == (4292870144 & e) && (t = u(e >> 18 & 7 | 240),
                                                    t += h(e, 12),
                                                    t += h(e, 6)),
                                                    t += u(63 & e | 128),
                                                    t
                                            }
                                            function b(e) {
                                                var t, n = p(e), i = n.length, a = -1, r = "";
                                                while (++a < i)
                                                    t = n[a],
                                                        r += m(t);
                                                return r
                                            }
                                            function y() {
                                                if (d >= c)
                                                    throw Error("Invalid byte index");
                                                var e = 255 & l[d];
                                                if (d++,
                                                128 == (192 & e))
                                                    return 63 & e;
                                                throw Error("Invalid continuation byte")
                                            }
                                            function _() {
                                                var e, t, n, i;
                                                if (d > c)
                                                    throw Error("Invalid byte index");
                                                if (d == c)
                                                    return !1;
                                                if (e = 255 & l[d],
                                                    d++,
                                                0 == (128 & e))
                                                    return e;
                                                if (192 == (224 & e)) {
                                                    var a = y();
                                                    if (i = (31 & e) << 6 | a,
                                                    i >= 128)
                                                        return i;
                                                    throw Error("Invalid continuation byte")
                                                }
                                                if (224 == (240 & e)) {
                                                    if (a = y(),
                                                        t = y(),
                                                        i = (15 & e) << 12 | a << 6 | t,
                                                    i >= 2048)
                                                        return f(i),
                                                            i;
                                                    throw Error("Invalid continuation byte")
                                                }
                                                if (240 == (248 & e) && (a = y(),
                                                    t = y(),
                                                    n = y(),
                                                    i = (15 & e) << 18 | a << 12 | t << 6 | n,
                                                i >= 65536 && i <= 1114111))
                                                    return i;
                                                throw Error("Invalid UTF-8 detected")
                                            }
                                            function k(e) {
                                                l = p(e),
                                                    c = l.length,
                                                    d = 0;
                                                var t, n = [];
                                                while (!1 !== (t = _()))
                                                    n.push(t);
                                                return g(n)
                                            }
                                            var w = {
                                                version: "2.0.0",
                                                encode: b,
                                                decode: k
                                            };
                                            if ("function" == typeof e && "object" == typeof e.amd && e.amd)
                                                e((function() {
                                                        return w
                                                    }
                                                ));
                                            else if (r && !r.nodeType)
                                                if (o)
                                                    o.exports = w;
                                                else {
                                                    var v = {}
                                                        , x = v.hasOwnProperty;
                                                    for (var z in w)
                                                        x.call(w, z) && (r[z] = w[z])
                                                }
                                            else
                                                a.utf8 = w
                                        }
                                    )(this)
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {}],
                        32: [function(e, t, n) {
                            (function(e) {
                                    var n = /^[\],:{}\s]*$/
                                        , i = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
                                        , a = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                                        , r = /(?:^|:|,)(?:\s*\[)+/g
                                        , o = /^\s+/
                                        , s = /\s+$/;
                                    t.exports = function(t) {
                                        return "string" == typeof t && t ? (t = t.replace(o, "").replace(s, ""),
                                            e.JSON && JSON.parse ? JSON.parse(t) : n.test(t.replace(i, "@").replace(a, "]").replace(r, "")) ? new Function("return " + t)() : void 0) : null
                                    }
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {}],
                        33: [function(e, t, n) {
                            n.encode = function(e) {
                                var t = "";
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t.length && (t += "&"),
                                        t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                                return t
                            }
                                ,
                                n.decode = function(e) {
                                    for (var t = {}, n = e.split("&"), i = 0, a = n.length; i < a; i++) {
                                        var r = n[i].split("=");
                                        t[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
                                    }
                                    return t
                                }
                        }
                            , {}],
                        34: [function(e, t, n) {
                            var i = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                                , a = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                            t.exports = function(e) {
                                var t = e
                                    , n = e.indexOf("[")
                                    , r = e.indexOf("]");
                                -1 != n && -1 != r && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
                                var o = i.exec(e || "")
                                    , s = {}
                                    , l = 14;
                                while (l--)
                                    s[a[l]] = o[l] || "";
                                return -1 != n && -1 != r && (s.source = t,
                                    s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"),
                                    s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                                    s.ipv6uri = !0),
                                    s
                            }
                        }
                            , {}],
                        35: [function(e, t, n) {
                            var i = function() {
                                return this
                            }()
                                , a = i.WebSocket || i.MozWebSocket;
                            function r(e, t, n) {
                                var i;
                                return i = t ? new a(e,t) : new a(e),
                                    i
                            }
                            t.exports = a ? r : null,
                            a && (r.prototype = a.prototype)
                        }
                            , {}],
                        36: [function(e, t, n) {
                            (function(n) {
                                    var i = e("isarray");
                                    function a(e) {
                                        function t(e) {
                                            if (!e)
                                                return !1;
                                            if (n.Buffer && n.Buffer.isBuffer(e) || n.ArrayBuffer && e instanceof ArrayBuffer || n.Blob && e instanceof Blob || n.File && e instanceof File)
                                                return !0;
                                            if (i(e)) {
                                                for (var a = 0; a < e.length; a++)
                                                    if (t(e[a]))
                                                        return !0
                                            } else if (e && "object" == typeof e)
                                                for (var r in e.toJSON && (e = e.toJSON()),
                                                    e)
                                                    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
                                                        return !0;
                                            return !1
                                        }
                                        return t(e)
                                    }
                                    t.exports = a
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {
                                isarray: 37
                            }],
                        37: [function(e, t, n) {
                            t.exports = Array.isArray || function(e) {
                                return "[object Array]" == Object.prototype.toString.call(e)
                            }
                        }
                            , {}],
                        38: [function(e, t, n) {
                            var i = e("global");
                            try {
                                t.exports = "XMLHttpRequest"in i && "withCredentials"in new i.XMLHttpRequest
                            } catch (a) {
                                t.exports = !1
                            }
                        }
                            , {
                                global: 39
                            }],
                        39: [function(e, t, n) {
                            t.exports = function() {
                                return this
                            }()
                        }
                            , {}],
                        40: [function(e, t, n) {
                            var i = [].indexOf;
                            t.exports = function(e, t) {
                                if (i)
                                    return e.indexOf(t);
                                for (var n = 0; n < e.length; ++n)
                                    if (e[n] === t)
                                        return n;
                                return -1
                            }
                        }
                            , {}],
                        41: [function(e, t, n) {
                            var i = Object.prototype.hasOwnProperty;
                            n.keys = Object.keys || function(e) {
                                var t = [];
                                for (var n in e)
                                    i.call(e, n) && t.push(n);
                                return t
                            }
                                ,
                                n.values = function(e) {
                                    var t = [];
                                    for (var n in e)
                                        i.call(e, n) && t.push(e[n]);
                                    return t
                                }
                                ,
                                n.merge = function(e, t) {
                                    for (var n in t)
                                        i.call(t, n) && (e[n] = t[n]);
                                    return e
                                }
                                ,
                                n.length = function(e) {
                                    return n.keys(e).length
                                }
                                ,
                                n.isEmpty = function(e) {
                                    return 0 == n.length(e)
                                }
                        }
                            , {}],
                        42: [function(e, t, n) {
                            var i = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                                , a = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                            t.exports = function(e) {
                                var t = i.exec(e || "")
                                    , n = {}
                                    , r = 14;
                                while (r--)
                                    n[a[r]] = t[r] || "";
                                return n
                            }
                        }
                            , {}],
                        43: [function(e, t, n) {
                            (function(t) {
                                    var i = e("isarray")
                                        , a = e("./is-buffer");
                                    n.deconstructPacket = function(e) {
                                        var t = []
                                            , n = e.data;
                                        function r(e) {
                                            if (!e)
                                                return e;
                                            if (a(e)) {
                                                var n = {
                                                    _placeholder: !0,
                                                    num: t.length
                                                };
                                                return t.push(e),
                                                    n
                                            }
                                            if (i(e)) {
                                                for (var o = new Array(e.length), s = 0; s < e.length; s++)
                                                    o[s] = r(e[s]);
                                                return o
                                            }
                                            if ("object" == typeof e && !(e instanceof Date)) {
                                                o = {};
                                                for (var l in e)
                                                    o[l] = r(e[l]);
                                                return o
                                            }
                                            return e
                                        }
                                        var o = e;
                                        return o.data = r(n),
                                            o.attachments = t.length,
                                            {
                                                packet: o,
                                                buffers: t
                                            }
                                    }
                                        ,
                                        n.reconstructPacket = function(e, t) {
                                            function n(e) {
                                                if (e && e._placeholder) {
                                                    var a = t[e.num];
                                                    return a
                                                }
                                                if (i(e)) {
                                                    for (var r = 0; r < e.length; r++)
                                                        e[r] = n(e[r]);
                                                    return e
                                                }
                                                if (e && "object" == typeof e) {
                                                    for (var o in e)
                                                        e[o] = n(e[o]);
                                                    return e
                                                }
                                                return e
                                            }
                                            return e.data = n(e.data),
                                                e.attachments = void 0,
                                                e
                                        }
                                        ,
                                        n.removeBlobs = function(e, n) {
                                            function r(e, l, c) {
                                                if (!e)
                                                    return e;
                                                if (t.Blob && e instanceof Blob || t.File && e instanceof File) {
                                                    o++;
                                                    var d = new FileReader;
                                                    d.onload = function() {
                                                        c ? c[l] = this.result : s = this.result,
                                                        --o || n(s)
                                                    }
                                                        ,
                                                        d.readAsArrayBuffer(e)
                                                } else if (i(e))
                                                    for (var u = 0; u < e.length; u++)
                                                        r(e[u], u, e);
                                                else if (e && "object" == typeof e && !a(e))
                                                    for (var p in e)
                                                        r(e[p], p, e)
                                            }
                                            var o = 0
                                                , s = e;
                                            r(s),
                                            o || n(s)
                                        }
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {
                                "./is-buffer": 45,
                                isarray: 46
                            }],
                        44: [function(e, t, n) {
                            var i = e("debug")("socket.io-parser")
                                , a = e("json3")
                                , r = (e("isarray"),
                                e("component-emitter"))
                                , o = e("./binary")
                                , s = e("./is-buffer");
                            function l() {}
                            function c(e) {
                                var t = ""
                                    , r = !1;
                                return t += e.type,
                                n.BINARY_EVENT != e.type && n.BINARY_ACK != e.type || (t += e.attachments,
                                    t += "-"),
                                e.nsp && "/" != e.nsp && (r = !0,
                                    t += e.nsp),
                                null != e.id && (r && (t += ",",
                                    r = !1),
                                    t += e.id),
                                null != e.data && (r && (t += ","),
                                    t += a.stringify(e.data)),
                                    i("encoded %j as %s", e, t),
                                    t
                            }
                            function d(e, t) {
                                function n(e) {
                                    var n = o.deconstructPacket(e)
                                        , i = c(n.packet)
                                        , a = n.buffers;
                                    a.unshift(i),
                                        t(a)
                                }
                                o.removeBlobs(e, n)
                            }
                            function u() {
                                this.reconstructor = null
                            }
                            function p(e) {
                                var t = {}
                                    , r = 0;
                                if (t.type = Number(e.charAt(0)),
                                null == n.types[t.type])
                                    return f();
                                if (n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type) {
                                    var o = "";
                                    while ("-" != e.charAt(++r))
                                        if (o += e.charAt(r),
                                        r == e.length)
                                            break;
                                    if (o != Number(o) || "-" != e.charAt(r))
                                        throw new Error("Illegal attachments");
                                    t.attachments = Number(o)
                                }
                                if ("/" == e.charAt(r + 1)) {
                                    t.nsp = "";
                                    while (++r) {
                                        var s = e.charAt(r);
                                        if ("," == s)
                                            break;
                                        if (t.nsp += s,
                                        r == e.length)
                                            break
                                    }
                                } else
                                    t.nsp = "/";
                                var l = e.charAt(r + 1);
                                if ("" !== l && Number(l) == l) {
                                    t.id = "";
                                    while (++r) {
                                        s = e.charAt(r);
                                        if (null == s || Number(s) != s) {
                                            --r;
                                            break
                                        }
                                        if (t.id += e.charAt(r),
                                        r == e.length)
                                            break
                                    }
                                    t.id = Number(t.id)
                                }
                                if (e.charAt(++r))
                                    try {
                                        t.data = a.parse(e.substr(r))
                                    } catch (c) {
                                        return f()
                                    }
                                return i("decoded %s as %j", e, t),
                                    t
                            }
                            function g(e) {
                                this.reconPack = e,
                                    this.buffers = []
                            }
                            function f(e) {
                                return {
                                    type: n.ERROR,
                                    data: "parser error"
                                }
                            }
                            n.protocol = 4,
                                n.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"],
                                n.CONNECT = 0,
                                n.DISCONNECT = 1,
                                n.EVENT = 2,
                                n.ACK = 3,
                                n.ERROR = 4,
                                n.BINARY_EVENT = 5,
                                n.BINARY_ACK = 6,
                                n.Encoder = l,
                                n.Decoder = u,
                                l.prototype.encode = function(e, t) {
                                    if (i("encoding packet %j", e),
                                    n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type)
                                        d(e, t);
                                    else {
                                        var a = c(e);
                                        t([a])
                                    }
                                }
                                ,
                                r(u.prototype),
                                u.prototype.add = function(e) {
                                    var t;
                                    if ("string" == typeof e)
                                        t = p(e),
                                            n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type ? (this.reconstructor = new g(t),
                                            0 === this.reconstructor.reconPack.attachments && this.emit("decoded", t)) : this.emit("decoded", t);
                                    else {
                                        if (!s(e) && !e.base64)
                                            throw new Error("Unknown type: " + e);
                                        if (!this.reconstructor)
                                            throw new Error("got binary data when not reconstructing a packet");
                                        t = this.reconstructor.takeBinaryData(e),
                                        t && (this.reconstructor = null,
                                            this.emit("decoded", t))
                                    }
                                }
                                ,
                                u.prototype.destroy = function() {
                                    this.reconstructor && this.reconstructor.finishedReconstruction()
                                }
                                ,
                                g.prototype.takeBinaryData = function(e) {
                                    if (this.buffers.push(e),
                                    this.buffers.length == this.reconPack.attachments) {
                                        var t = o.reconstructPacket(this.reconPack, this.buffers);
                                        return this.finishedReconstruction(),
                                            t
                                    }
                                    return null
                                }
                                ,
                                g.prototype.finishedReconstruction = function() {
                                    this.reconPack = null,
                                        this.buffers = []
                                }
                        }
                            , {
                                "./binary": 43,
                                "./is-buffer": 45,
                                "component-emitter": 9,
                                debug: 10,
                                isarray: 46,
                                json3: 47
                            }],
                        45: [function(e, t, n) {
                            (function(e) {
                                    function n(t) {
                                        return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer
                                    }
                                    t.exports = n
                                }
                            ).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                        }
                            , {}],
                        46: [function(e, t, n) {
                            t.exports = e(37)
                        }
                            , {}],
                        47: [function(t, n, i) {
                            (function(t) {
                                    var n, a, r, o = {}.toString, s = "function" === typeof e && e.amd, l = "object" == typeof JSON && JSON, c = "object" == typeof i && i && !i.nodeType && i;
                                    c && l ? (c.stringify = l.stringify,
                                        c.parse = l.parse) : c = t.JSON = l || {};
                                    var d = new Date(-0xc782b5b800cec);
                                    try {
                                        d = -109252 == d.getUTCFullYear() && 0 === d.getUTCMonth() && 1 === d.getUTCDate() && 10 == d.getUTCHours() && 37 == d.getUTCMinutes() && 6 == d.getUTCSeconds() && 708 == d.getUTCMilliseconds()
                                    } catch (L) {}
                                    function u(e) {
                                        if (u[e] !== r)
                                            return u[e];
                                        var t;
                                        if ("bug-string-char-index" == e)
                                            t = "a" != "a"[0];
                                        else if ("json" == e)
                                            t = u("json-stringify") && u("json-parse");
                                        else {
                                            var n, i = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                            if ("json-stringify" == e) {
                                                var a = c.stringify
                                                    , s = "function" == typeof a && d;
                                                if (s) {
                                                    (n = function() {
                                                            return 1
                                                        }
                                                    ).toJSON = n;
                                                    try {
                                                        s = "0" === a(0) && "0" === a(new Number) && '""' == a(new String) && a(o) === r && a(r) === r && a() === r && "1" === a(n) && "[1]" == a([n]) && "[null]" == a([r]) && "null" == a(null) && "[null,null,null]" == a([r, o, null]) && a({
                                                            a: [n, !0, !1, null, "\0\b\n\f\r\t"]
                                                        }) == i && "1" === a(null, n) && "[\n 1,\n 2\n]" == a([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == a(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == a(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == a(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == a(new Date(-1))
                                                    } catch (L) {
                                                        s = !1
                                                    }
                                                }
                                                t = s
                                            }
                                            if ("json-parse" == e) {
                                                var l = c.parse;
                                                if ("function" == typeof l)
                                                    try {
                                                        if (0 === l("0") && !l(!1)) {
                                                            n = l(i);
                                                            var p = 5 == n["a"].length && 1 === n["a"][0];
                                                            if (p) {
                                                                try {
                                                                    p = !l('"\t"')
                                                                } catch (L) {}
                                                                if (p)
                                                                    try {
                                                                        p = 1 !== l("01")
                                                                    } catch (L) {}
                                                                if (p)
                                                                    try {
                                                                        p = 1 !== l("1.")
                                                                    } catch (L) {}
                                                            }
                                                        }
                                                    } catch (L) {
                                                        p = !1
                                                    }
                                                t = p
                                            }
                                        }
                                        return u[e] = !!t
                                    }
                                    if (!u("json")) {
                                        var p = "[object Function]"
                                            , g = "[object Date]"
                                            , f = "[object Number]"
                                            , h = "[object String]"
                                            , m = "[object Array]"
                                            , b = "[object Boolean]"
                                            , y = u("bug-string-char-index");
                                        if (!d)
                                            var _ = Math.floor
                                                , k = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                                                , w = function(e, t) {
                                                return k[t] + 365 * (e - 1970) + _((e - 1969 + (t = +(t > 1))) / 4) - _((e - 1901 + t) / 100) + _((e - 1601 + t) / 400)
                                            };
                                        (n = {}.hasOwnProperty) || (n = function(e) {
                                                var t, i = {};
                                                return (i.__proto__ = null,
                                                    i.__proto__ = {
                                                        toString: 1
                                                    },
                                                    i).toString != o ? n = function(e) {
                                                        var t = this.__proto__
                                                            , n = e in (this.__proto__ = null,
                                                            this);
                                                        return this.__proto__ = t,
                                                            n
                                                    }
                                                    : (t = i.constructor,
                                                            n = function(e) {
                                                                var n = (this.constructor || t).prototype;
                                                                return e in this && !(e in n && this[e] === n[e])
                                                            }
                                                    ),
                                                    i = null,
                                                    n.call(this, e)
                                            }
                                        );
                                        var v = {
                                            boolean: 1,
                                            number: 1,
                                            string: 1,
                                            undefined: 1
                                        }
                                            , x = function(e, t) {
                                            var n = typeof e[t];
                                            return "object" == n ? !!e[t] : !v[n]
                                        };
                                        if (a = function(e, t) {
                                            var i, r, s, l = 0;
                                            for (s in (i = function() {
                                                    this.valueOf = 0
                                                }
                                            ).prototype.valueOf = 0,
                                                r = new i,
                                                r)
                                                n.call(r, s) && l++;
                                            return i = r = null,
                                                l ? a = 2 == l ? function(e, t) {
                                                        var i, a = {}, r = o.call(e) == p;
                                                        for (i in e)
                                                            r && "prototype" == i || n.call(a, i) || !(a[i] = 1) || !n.call(e, i) || t(i)
                                                    }
                                                    : function(e, t) {
                                                        var i, a, r = o.call(e) == p;
                                                        for (i in e)
                                                            r && "prototype" == i || !n.call(e, i) || (a = "constructor" === i) || t(i);
                                                        (a || n.call(e, i = "constructor")) && t(i)
                                                    }
                                                    : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                                                            a = function(e, t) {
                                                                var i, a, s = o.call(e) == p, l = !s && "function" != typeof e.constructor && x(e, "hasOwnProperty") ? e.hasOwnProperty : n;
                                                                for (i in e)
                                                                    s && "prototype" == i || !l.call(e, i) || t(i);
                                                                for (a = r.length; i = r[--a]; l.call(e, i) && t(i))
                                                                    ;
                                                            }
                                                    ),
                                                a(e, t)
                                        }
                                            ,
                                            !u("json-stringify")) {
                                            var z = {
                                                92: "\\\\",
                                                34: '\\"',
                                                8: "\\b",
                                                12: "\\f",
                                                10: "\\n",
                                                13: "\\r",
                                                9: "\\t"
                                            }
                                                , C = "000000"
                                                , S = function(e, t) {
                                                return (C + (t || 0)).slice(-e)
                                            }
                                                , A = "\\u00"
                                                , P = function(e) {
                                                var t, n = '"', i = 0, a = e.length, r = a > 10 && y;
                                                for (r && (t = e.split("")); i < a; i++) {
                                                    var o = e.charCodeAt(i);
                                                    switch (o) {
                                                        case 8:
                                                        case 9:
                                                        case 10:
                                                        case 12:
                                                        case 13:
                                                        case 34:
                                                        case 92:
                                                            n += z[o];
                                                            break;
                                                        default:
                                                            if (o < 32) {
                                                                n += A + S(2, o.toString(16));
                                                                break
                                                            }
                                                            n += r ? t[i] : y ? e.charAt(i) : e[i]
                                                    }
                                                }
                                                return n + '"'
                                            }
                                                , j = function e(t, i, s, l, c, d, u) {
                                                var p, y, k, v, x, z, C, A, j, T, B, E, q, R, D, O;
                                                try {
                                                    p = i[t]
                                                } catch (L) {}
                                                if ("object" == typeof p && p)
                                                    if (y = o.call(p),
                                                    y != g || n.call(p, "toJSON"))
                                                        "function" == typeof p.toJSON && (y != f && y != h && y != m || n.call(p, "toJSON")) && (p = p.toJSON(t));
                                                    else if (p > -1 / 0 && p < 1 / 0) {
                                                        if (w) {
                                                            for (x = _(p / 864e5),
                                                                     k = _(x / 365.2425) + 1970 - 1; w(k + 1, 0) <= x; k++)
                                                                ;
                                                            for (v = _((x - w(k, 0)) / 30.42); w(k, v + 1) <= x; v++)
                                                                ;
                                                            x = 1 + x - w(k, v),
                                                                z = (p % 864e5 + 864e5) % 864e5,
                                                                C = _(z / 36e5) % 24,
                                                                A = _(z / 6e4) % 60,
                                                                j = _(z / 1e3) % 60,
                                                                T = z % 1e3
                                                        } else
                                                            k = p.getUTCFullYear(),
                                                                v = p.getUTCMonth(),
                                                                x = p.getUTCDate(),
                                                                C = p.getUTCHours(),
                                                                A = p.getUTCMinutes(),
                                                                j = p.getUTCSeconds(),
                                                                T = p.getUTCMilliseconds();
                                                        p = (k <= 0 || k >= 1e4 ? (k < 0 ? "-" : "+") + S(6, k < 0 ? -k : k) : S(4, k)) + "-" + S(2, v + 1) + "-" + S(2, x) + "T" + S(2, C) + ":" + S(2, A) + ":" + S(2, j) + "." + S(3, T) + "Z"
                                                    } else
                                                        p = null;
                                                if (s && (p = s.call(i, t, p)),
                                                null === p)
                                                    return "null";
                                                if (y = o.call(p),
                                                y == b)
                                                    return "" + p;
                                                if (y == f)
                                                    return p > -1 / 0 && p < 1 / 0 ? "" + p : "null";
                                                if (y == h)
                                                    return P("" + p);
                                                if ("object" == typeof p) {
                                                    for (R = u.length; R--; )
                                                        if (u[R] === p)
                                                            throw TypeError();
                                                    if (u.push(p),
                                                        B = [],
                                                        D = d,
                                                        d += c,
                                                    y == m) {
                                                        for (q = 0,
                                                                 R = p.length; q < R; q++)
                                                            E = e(q, p, s, l, c, d, u),
                                                                B.push(E === r ? "null" : E);
                                                        O = B.length ? c ? "[\n" + d + B.join(",\n" + d) + "\n" + D + "]" : "[" + B.join(",") + "]" : "[]"
                                                    } else
                                                        a(l || p, (function(t) {
                                                                var n = e(t, p, s, l, c, d, u);
                                                                n !== r && B.push(P(t) + ":" + (c ? " " : "") + n)
                                                            }
                                                        )),
                                                            O = B.length ? c ? "{\n" + d + B.join(",\n" + d) + "\n" + D + "}" : "{" + B.join(",") + "}" : "{}";
                                                    return u.pop(),
                                                        O
                                                }
                                            };
                                            c.stringify = function(e, t, n) {
                                                var i, a, r, s;
                                                if ("function" == typeof t || "object" == typeof t && t)
                                                    if ((s = o.call(t)) == p)
                                                        a = t;
                                                    else if (s == m) {
                                                        r = {};
                                                        for (var l, c = 0, d = t.length; c < d; l = t[c++],
                                                            s = o.call(l),
                                                        (s == h || s == f) && (r[l] = 1))
                                                            ;
                                                    }
                                                if (n)
                                                    if ((s = o.call(n)) == f) {
                                                        if ((n -= n % 1) > 0)
                                                            for (i = "",
                                                                 n > 10 && (n = 10); i.length < n; i += " ")
                                                                ;
                                                    } else
                                                        s == h && (i = n.length <= 10 ? n : n.slice(0, 10));
                                                return j("", (l = {},
                                                    l[""] = e,
                                                    l), a, r, i, "", [])
                                            }
                                        }
                                        if (!u("json-parse")) {
                                            var T, B, E = String.fromCharCode, q = {
                                                92: "\\",
                                                34: '"',
                                                47: "/",
                                                98: "\b",
                                                116: "\t",
                                                110: "\n",
                                                102: "\f",
                                                114: "\r"
                                            }, R = function() {
                                                throw T = B = null,
                                                    SyntaxError()
                                            }, D = function() {
                                                var e, t, n, i, a, r = B, o = r.length;
                                                while (T < o)
                                                    switch (a = r.charCodeAt(T),
                                                        a) {
                                                        case 9:
                                                        case 10:
                                                        case 13:
                                                        case 32:
                                                            T++;
                                                            break;
                                                        case 123:
                                                        case 125:
                                                        case 91:
                                                        case 93:
                                                        case 58:
                                                        case 44:
                                                            return e = y ? r.charAt(T) : r[T],
                                                                T++,
                                                                e;
                                                        case 34:
                                                            for (e = "@",
                                                                     T++; T < o; )
                                                                if (a = r.charCodeAt(T),
                                                                a < 32)
                                                                    R();
                                                                else if (92 == a)
                                                                    switch (a = r.charCodeAt(++T),
                                                                        a) {
                                                                        case 92:
                                                                        case 34:
                                                                        case 47:
                                                                        case 98:
                                                                        case 116:
                                                                        case 110:
                                                                        case 102:
                                                                        case 114:
                                                                            e += q[a],
                                                                                T++;
                                                                            break;
                                                                        case 117:
                                                                            for (t = ++T,
                                                                                     n = T + 4; T < n; T++)
                                                                                a = r.charCodeAt(T),
                                                                                a >= 48 && a <= 57 || a >= 97 && a <= 102 || a >= 65 && a <= 70 || R();
                                                                            e += E("0x" + r.slice(t, T));
                                                                            break;
                                                                        default:
                                                                            R()
                                                                    }
                                                                else {
                                                                    if (34 == a)
                                                                        break;
                                                                    a = r.charCodeAt(T),
                                                                        t = T;
                                                                    while (a >= 32 && 92 != a && 34 != a)
                                                                        a = r.charCodeAt(++T);
                                                                    e += r.slice(t, T)
                                                                }
                                                            if (34 == r.charCodeAt(T))
                                                                return T++,
                                                                    e;
                                                            R();
                                                        default:
                                                            if (t = T,
                                                            45 == a && (i = !0,
                                                                a = r.charCodeAt(++T)),
                                                            a >= 48 && a <= 57) {
                                                                for (48 == a && (a = r.charCodeAt(T + 1),
                                                                a >= 48 && a <= 57) && R(),
                                                                         i = !1; T < o && (a = r.charCodeAt(T),
                                                                a >= 48 && a <= 57); T++)
                                                                    ;
                                                                if (46 == r.charCodeAt(T)) {
                                                                    for (n = ++T; n < o && (a = r.charCodeAt(n),
                                                                    a >= 48 && a <= 57); n++)
                                                                        ;
                                                                    n == T && R(),
                                                                        T = n
                                                                }
                                                                if (a = r.charCodeAt(T),
                                                                101 == a || 69 == a) {
                                                                    for (a = r.charCodeAt(++T),
                                                                         43 != a && 45 != a || T++,
                                                                             n = T; n < o && (a = r.charCodeAt(n),
                                                                    a >= 48 && a <= 57); n++)
                                                                        ;
                                                                    n == T && R(),
                                                                        T = n
                                                                }
                                                                return +r.slice(t, T)
                                                            }
                                                            if (i && R(),
                                                            "true" == r.slice(T, T + 4))
                                                                return T += 4,
                                                                    !0;
                                                            if ("false" == r.slice(T, T + 5))
                                                                return T += 5,
                                                                    !1;
                                                            if ("null" == r.slice(T, T + 4))
                                                                return T += 4,
                                                                    null;
                                                            R()
                                                    }
                                                return "$"
                                            }, O = function e(t) {
                                                var n, i;
                                                if ("$" == t && R(),
                                                "string" == typeof t) {
                                                    if ("@" == (y ? t.charAt(0) : t[0]))
                                                        return t.slice(1);
                                                    if ("[" == t) {
                                                        for (n = []; ; i || (i = !0)) {
                                                            if (t = D(),
                                                            "]" == t)
                                                                break;
                                                            i && ("," == t ? (t = D(),
                                                            "]" == t && R()) : R()),
                                                            "," == t && R(),
                                                                n.push(e(t))
                                                        }
                                                        return n
                                                    }
                                                    if ("{" == t) {
                                                        for (n = {}; ; i || (i = !0)) {
                                                            if (t = D(),
                                                            "}" == t)
                                                                break;
                                                            i && ("," == t ? (t = D(),
                                                            "}" == t && R()) : R()),
                                                            "," != t && "string" == typeof t && "@" == (y ? t.charAt(0) : t[0]) && ":" == D() || R(),
                                                                n[t.slice(1)] = e(D())
                                                        }
                                                        return n
                                                    }
                                                    R()
                                                }
                                                return t
                                            }, N = function(e, t, n) {
                                                var i = M(e, t, n);
                                                i === r ? delete e[t] : e[t] = i
                                            }, M = function(e, t, n) {
                                                var i, r = e[t];
                                                if ("object" == typeof r && r)
                                                    if (o.call(r) == m)
                                                        for (i = r.length; i--; )
                                                            N(r, i, n);
                                                    else
                                                        a(r, (function(e) {
                                                                N(r, e, n)
                                                            }
                                                        ));
                                                return n.call(e, t, r)
                                            };
                                            c.parse = function(e, t) {
                                                var n, i;
                                                return T = 0,
                                                    B = "" + e,
                                                    n = O(D()),
                                                "$" != D() && R(),
                                                    T = B = null,
                                                    t && o.call(t) == p ? M((i = {},
                                                        i[""] = n,
                                                        i), "", t) : n
                                            }
                                        }
                                    }
                                    s && e((function() {
                                            return c
                                        }
                                    ))
                                }
                            )(this)
                        }
                            , {}],
                        48: [function(e, t, n) {
                            function i(e, t) {
                                var n = [];
                                t = t || 0;
                                for (var i = t || 0; i < e.length; i++)
                                    n[i - t] = e[i];
                                return n
                            }
                            t.exports = i
                        }
                            , {}]
                    }, {}, [1])(1)
                }
            ))
    },
    "280a": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                scsj: "Heure de verrouillage",
                a37: "Recevez la récompense facilement",
                a33: "L'annulation sera déduite",
                a32: "Intérêt total",
                a31: "Montant des pièces déposées",
                a30: "Enregistrement de position verrouillée",
                a29: "Revenu total estimé",
                a28: "Le minage est plus facile",
                a27: "Trésor minier",
                a26: "Période de blocage",
                a25: "Ciel",
                a24: "Intérêt pour le yen japonais",
                a23: "Annualisation de référence pour les 3 derniers jours",
                a22: "Verrouiller la position pour gagner des pièces",
                a21: "Annuler l'engagement",
                a20: "Heure d'expiration",
                a19: "Pledge Time",
                a18: "Montant à sortir",
                a17: "Numéro de projet",
                a16: "Registre des engagements",
                a15: "Annuler le gage et restituer le capital, aucun revenu ne peut être obtenu",
                a14: "Insuffisant",
                a13: "Solde Google Wallet",
                a12: "Montant du gage",
                a11: "Engagement",
                a10: "jetons",
                a9: "La quantité de sortie sera convertie en valeur équivalente",
                a8: "Quantité estimée à produire",
                a7: "Revenu total",
                a6: "Gagnez plusieurs retours",
                a5: "Dépôt",
                a4: "Mobile Pledge",
                a3: "Le titulaire peut bénéficier des revenus du gage",
                a36: "Banque d'ouverture du compte de versement",
                a35: "numéro de carte bancaire de remise",
                a34: "Nom de la remise",
                oldpwd: "Veuillez saisir l'ancien mot de passe",
                zxkf: "service à la clientèle en ligne",
                a2: "Besoin de payer",
                a1: "Devise de l'abonnement",
                a0: "Déduction pour retrait de devises",
                dqyuee: "Solde actuel",
                download: "Télécharger l'application",
                czsl: "Nombre de recharges",
                qbdz: "Adresse de remplissage",
                enterqbdz: "Veuillez saisir une adresse remplie de monnaie",
                tjsh: "Soumettre pour examen",
                sb01: "Le temps de demande en monnaie supérieure dépend de la qualité des documents soumis.",
                sb02: "Résultats de la demande",
                sb03: "Après avoir reçu un courriel de confirmation, soumettre les documents pertinents par courriel.",
                sb04: "Présentation des informations",
                sb05: "Soumettre une demande de monnaie supérieure",
                sb06: "Application",
                sb07: "Processus de demande",
                sb08: "Demande de monnaie",
                sb09: "Hoo prend tout pour le client, met l'intérêt de l'utilisateur en premier lieu, cherche maintenant des projets de haute qualité (monnaie) pour retourner le soutien à long terme du client.Pour acheter de la monnaie de valeur, choisissez seulement hoo!",
                ksgt: "Communication rapide",
                sbsq: "Demande de monnaie supérieure",
                qrszfpz: "Veuillez saisir le bon de paiement",
                zfpz: "Certificat de paiement",
                dqsy: "Recettes courantes",
                ygsy: "Prévisions de recettes",
                rgcz: "Opérations d'abonnement",
                srrgsl: "Saisissez le nombre d'abonnements",
                kdh: "Convertibilité",
                gw: "Site officiel",
                bps: "Livre blanc",
                sgzq: "Cycle de souscription",
                yr: "Préchauffage",
                sg: "Abonnement",
                js: "Fin",
                xmxq: "Détails du projet",
                rg: "Abonnement",
                ieo: "Abonnement ieo",
                zt: "Statut",
                fhjg: "Prix d'émission",
                dqsj: "Échéance"
            },
                (0,
                    o.default)(a, "scsj", "Temps de verrouillage"),
                (0,
                    o.default)(a, "yjsy", "Recettes prévues"),
                (0,
                    o.default)(a, "zxscsl", "Nombre minimal de serrures"),
                (0,
                    o.default)(a, "syl", "Taux de rendement"),
                (0,
                    o.default)(a, "sc", "Verrouillage"),
                (0,
                    o.default)(a, "ts", "Nombre de jours"),
                (0,
                    o.default)(a, "fhzl", "Total des émissions"),
                (0,
                    o.default)(a, "jssj", "Fin"),
                (0,
                    o.default)(a, "yjs", "Terminé."),
                (0,
                    o.default)(a, "wks", "Non commencé"),
                (0,
                    o.default)(a, "jxz", "En cours"),
                (0,
                    o.default)(a, "scz", "Dans la serrure."),
                (0,
                    o.default)(a, "ydq", "Échéance"),
                (0,
                    o.default)(a, "nodata", "Aucune donnée disponible"),
                (0,
                    o.default)(a, "nomore", "Plus de données"),
                (0,
                    o.default)(a, "more", "Charger plus"),
                (0,
                    o.default)(a, "qbye", "Solde du portefeuille"),
                (0,
                    o.default)(a, "scgz", "Règles de verrouillage"),
                (0,
                    o.default)(a, "sclb", "Liste des serrures"),
                (0,
                    o.default)(a, "scwk", "Mine lock - out"),
                (0,
                    o.default)(a, "sly", "Taux de rendement"),
                (0,
                    o.default)(a, "yebz", "Solde insuffisant"),
                (0,
                    o.default)(a, "mhydd", "Second Contract Order"),
                (0,
                    o.default)(a, "gmj", "Prix d'achat"),
                (0,
                    o.default)(a, "cjj", "Prix de transaction"),
                (0,
                    o.default)(a, "yjyk", "Résultat escompté"),
                (0,
                    o.default)(a, "yk", "Profits et pertes"),
                (0,
                    o.default)(a, "djs", "Compte à rebours"),
                a),
            login: {
                l_mobile: "Connexion mobile",
                l_email: "Connexion à la boîte aux lettres",
                p_email: "Veuillez entrer votre email",
                p_mobile: "Veuillez entrer votre numéro de téléphone",
                p_pwd: "Veuillez entrer le mot de passe",
                p_confirmPwd: "Veuillez confirmer le mot de passe",
                p_confirmtradePwd: "mot de passe des transactions",
                p_vcode: "Veuillez saisir le code de vérification",
                get_code: "Obtenir le code de vérification",
                rem_pwd: "Mémoriser le mot de passe",
                login: "s´identifier",
                noaccount: "Pas encore de compte btcruby?",
                register: "inscrit",
                forget_pwd: "un service en ligne",
                p_taccount: "Veuillez saisir le numéro de téléphone correct",
                p_temail: "Veuillez saisir la bonne boîte aux lettres",
                p_pwderr: "La saisie du mot de passe est incorrecte",
                l_success: "Connexion réussie",
                r_noedit: "ne peut pas être modifié après l´enregistrement",
                r_mobile: "Enregistrement mobile",
                r_email: "inscription par e-mail",
                r_hasaccount: "Vous avez déjà un compte btcruby",
                r_next: "Suivant",
                r_sms: "vérification par SMS",
                r_smsemail: "Vérification des e-mails",
                r_pmobilecode: "Veuillez saisir le code de vérification du téléphone mobile",
                r_pemailcode: "Veuillez saisir le code de vérification de l´e-mail",
                r_send: "envoyer",
                p_len: "La longueur du mot de passe est de 6 ~ 16 bits",
                p_notsame: "La saisie du mot de passe est incohérente",
                p_simple: "Le mot de passe est trop simple, veuillez le saisir à nouveau",
                p_inputagain: "La saisie du mot de passe est incohérente, veuillez le saisir à nouveau",
                p_first: "Veuillez d´abord lire et accepter le contrat d´utilisation",
                p_invitecode: "Invitation code (can be empty)",
                p_inviteInput: "Veuillez saisir le code d´invitation",
                p_agree: "Je suis d´accord",
                p_private: "Accord utilisateur et politique de confidentialité",
                p_set: "set",
                p_setPwd: "Définir le mot de passe",
                f_mobile: "Récupération de téléphone mobile",
                f_email: "Boîte aux lettres récupérée",
                e_mb: "numéro de téléphone mobile",
                e_email: "Boîte aux lettres",
                e_pwd: "Modifier le mot de passe",
                e_chongzhi: "Réinitialiser le mot de passe",
                e_dealPwd: "Modifier le mot de passe de la transaction",
                e_pdeal: "Veuillez saisir le mot de passe de la transaction",
                e_pdealerr: "Le mot de passe de la transaction est mal saisi",
                e_pdealConfrim: "Veuillez confirmer le mot de passe de la transaction",
                e_confrim: "Confirmer",
                e_confrim2: "OK",
                Security: "Security Center",
                s_loginpwd: "mot de passe de connexion",
                s_dealpwd: "mot de passe de transaction",
                s_edit: "modifier"
            },
            about: {
                abt: "à propos de nous",
                concat: "Nous contacter",
                privat: "Politique de confidentialité",
                theme: "Mode nuit"
            },
            collect: {
                method: "mode de paiement",
                name: "nom réel",
                p_name: "veuillez entrer votre vrai nom",
                bank: "Compte bancaire",
                p_bank: "Veuillez saisir la banque d´ouverture de compte",
                no: "numéro de carte bancaire",
                p_no: "Veuillez saisir le numéro de carte bancaire",
                alipay: "numéro Alipay",
                p_alipay: "Veuillez saisir le numéro de compte Alipay",
                nick: "pseudo WeChat",
                p_nick: "Veuillez saisir le pseudo WeChat",
                wechat: "Compte WeChat",
                p_wechat: "Veuillez entrer un compte WeChat",
                wechatCode: "Code de collection WeChat",
                alipayCode: "Code de Collection Alipay",
                up_wechatCode: "Veuillez télécharger le code de collecte Wechat",
                up_alipayCode: "Veuillez télécharger le code Alipay",
                cardno: "numéro d´identification",
                p_cardno: "Veuillez saisir le numéro d´identification",
                up_card: "Télécharger une photo d'identité",
                up_cardz: "Télécharger le recto de la carte d´identité",
                up_cardf: "Télécharger le dos de la carte d´identité",
                up_cardhand: "Télécharger une carte d´identité portable"
            },
            bind: {
                bindAddr: "Lier l´adresse de retrait",
                cur_select: "Devise actuellement sélectionnée",
                addr: "Adresse de retrait",
                codeauth: "Mon code d'autorisation",
                codetip: "Lors de l´ajout d´un utilisateur en tant qu´agent, vous devez vérifier le code d´autorisation de l´utilisateur",
                p_addr: "Veuillez saisir l´adresse de retrait",
                code: "Code de vérification",
                bind: "bind",
                sendSuccess: "Envoyer avec succès",
                bindOk: "Liaison réussie",
                tuiguang: "Mon code promotionnel",
                codes: "code promotionnel",
                tip: "Scannez le modèle de code QR ci-dessus ou entrez le code promotionnel pour confirmer l´enregistrement",
                liantype: "type de chaîne"
            },
            authentication: {
                person: "Centre personnel",
                renzheng: "Authentification",
                gaoji: "Vérification avancée",
                go: "Aller à la certification",
                ing: "à l´étude",
                has: "vérifié",
                rz_tip: "La limite de retrait peut être augmentée après authentification",
                name: "Nom",
                account: "numéro de compte",
                zj: "numéro de licence"
            },
            home: {
                legal: "Transaction en devise Fiat",
                zhichi: "Soutenir BTC, USDT, etc.",
                lever: "Transaction contractuelle perpétuelle",
                news: "Centre d´Information",
                security: "Sûr et fiable",
                leader: "La première plateforme de trading d´actifs numériques au monde",
                updowns: "Augmenter la liste",
                name: "Nom",
                new_price: "Dernier prix",
                fu: "Changement de devis",
                p_login: "veuillez vous connecter",
                welcome: "Bienvenue chez btcruby",
                myshop: "mon magasin",
                myshare: "Mon lien de partage",
                logout: "Déconnexion",
                detail: "Détails",
                up: "Tirez le chargement",
                nomore: "Plus de données",
                norecord: "Pas d´enregistrements",
                loading: "Chargement",
                team: "mon équipe",
                fast: "Achetez rapidement des pièces",
                micro: "Deuxième transaction contractuelle"
            },
            market: {
                market: "quotes",
                volume: "volume 24H",
                home: "Accueil"
            },
            trade: {
                trade: "transactions en devise",
                buy: "acheter",
                sell: "vendre",
                limit: "prix limite",
                shi: "prix du marché",
                cancel: "annuler",
                best: "négocier au meilleur prix disponible",
                num: "quantité",
                use: " disponible",
                amout: "chiffre d´affaires",
                price: "prix",
                time: "time",
                bibi: "monnaie",
                all: "tous",
                back: "annuler",
                dui: "paire de transactions",
                notenough: "pas assez",
                notbest: "il n´y a pas de meilleur prix pour le moment",
                p_price: "veuillez saisir un prix",
                p_num: "veuillez saisir une quantité",
                delegate: "délégation actuelle",
                all_delegate: "déléguer tout",
                his_delegate: "délégation historique",
                has_done: "terminé",
                has_cancel: "annulé",
                has_pay: "payé",
                fee: "frais",
                handnum: "traders",
                p_handnum: "veuillez saisir le nombre de mains",
                balance: "montant forfaitaire",
                buy_duo: "acheter (faire plus)",
                sell_kong: " vendre ( vider )",
                pankou: "pankou",
                chicang: "tenir l´entrepôt",
                types: "type",
                operate: "action",
                pingcang: "bungalow",
                chedan: "retrait",
                duo: "faire plus",
                kong: "vide",
                mains: "nombre de mains",
                hand: "main",
                times: "multiple",
                money: "dépôt",
                confrim_ping: "déterminer le bungalow?",
                confrim_order: "confirmer la commande",
                confrim_chedan: "confirmer l´ordre de retrait?",
                p_times: "veuillez sélectionner un multiple",
                p_hands: "veuillez sélectionner ou saisir le nombre de mains",
                p_delprice: "veuillez saisir le prix de la délégation",
                p_notless: "vous ne pouvez pas saisir moins de mains",
                p_notmore: "vous ne pouvez pas saisir plus de mains",
                delegate_price: "prix de la commission",
                price_cang: "prix d´ouverture",
                price_zhiying: "prix d´arrêt",
                num_zhehe: "quantité équivalente",
                price_cur: "prix actuel",
                price_lose: "prix d´arrêt",
                can_money: "dépôt disponible",
                time_start: "heure d´ouverture",
                geye_fee: "coût du jour au lendemain",
                dealtype: "type de transaction"
            },
            lever: {
                delegating: "délégation",
                dealing: "transaction",
                pingcanging: "en position plate",
                hasping: "entrepôt plat",
                hasback: "ordre retiré",
                risk: "taux de risque",
                totalyk: "total des profits et pertes de l´entrepôt",
                yijian: "un seul bouton， un seul bouton",
                setys: "définir la perte d´arrêt de l´excédent",
                profit: "bénéfices escomptés",
                lose: "perte prévue",
                price_zhiying: "prix d´arrêt",
                price_lose: "prix d´arrêt de la perte",
                all_ping: "toutes plates",
                duo_ping: "plat uniquement",
                kong_ping: "commandes ouvertes uniquement"
            },
            assets: (r = {
                trade: "devise",
                lever: "contrat durable",
                legal: "monnaie",
                micro: "contrat secondes",
                manage: "gestion financière",
                tradeacc: "compte en devise",
                leveracc: "compte de contrat durable",
                legalacc: "compte en devise",
                microacc: "compte de contrat secondes",
                zhehe: "remplacer",
                zhehecny: "remplacement du total des actifs",
                lock: "geler",
                assets: "immobilisations",
                records: "documents financiers",
                charge: "pièces de monnaie",
                mention: "note",
                transfer: "transférer",
                record: "enregistrement",
                cur_coin: "devise actuelle",
                addr_charge: "adresse de chargement",
                coypaddr: "copier l´adresse",
                c_tip1: "ne pas recharger de non à l´adresse ci-dessus",
                c_tip2: "sinon, les actifs ne seront pas récupérés",
                c_tip3: "la fonction de remplissage de pièces ne prend en charge que la méthode simple send, et les pièces de remplissage utilisant d´autres méthodes ne peuvent pas être imputées temporairement, veuillez comprendre",
                c_tip4: "après avoir rechargé à l´adresse ci-dessus, vous avez besoin de la confirmation de tout le nœud du réseau, de la confirmation de réseau après la confirmation de réseau, et de la confirmation de réseau pour 6 fois",
                c_tip5: "montant minimum de recharge",
                c_tip6: "les recharges inférieures au montant minimum ne seront pas imputées et ne pourront pas être retournées",
                c_tip7: "votre adresse de recharge ne change pas souvent et vous pouvez la recharger à plusieurs reprises ; si des modifications sont apportées, nous essaierons de vous en informer par le biais d´un bulletin web ou d´un courrier électronique",
                c_tip8: "assurez-vous que votre ordinateur et votre navigateur sont sécurisés afin d´empêcher toute altération ou divulgation d´informations",
                copy_success: "copie réussie",
                copy_err: "echec de la copie",
                mentionaddr: "Veuillez entrer le mot de passe de la transaction",
                paypwd: "Veuillez entrer le mot de passe de la transaction",
                p_paypwd: "Masukkan kata sandi transaksi",
                p_addr: "veuillez d´abord définir votre adresse de facturation"
            },
                (0,
                    o.default)(r, "mention", "note"),
                (0,
                    o.default)(r, "num", "quantité minnum de pièce"),
                (0,
                    o.default)(r, "recivenum", "nombre de comptes reçus"),
                (0,
                    o.default)(r, "p_minnum", "veuillez saisir le nombre de pièces"),
                (0,
                    o.default)(r, "transfernum", "quantité transférée"),
                (0,
                    o.default)(r, "p_transfernum", "veuillez saisir la quantité de transfert"),
                (0,
                    o.default)(r, "from", "De"),
                (0,
                    o.default)(r, "to", "à"),
                r),
            legal: {
                legal: "Monnaie Fiat",
                ibuy: "je veux acheter",
                isell: "je veux vendre",
                price: "Prix unitaire",
                limit: "Limite",
                buy: "acheter",
                sell: "vendre",
                anprice: "Par prix",
                annum: "Par quantité",
                pl: "Entrez s´il vous plait",
                amount: "Montant",
                num: "Quantité",
                allmoney: "Total de la transaction",
                autocancel: "Annuler automatiquement",
                do: "Commander",
                p_amout: "Veuillez saisir le montant",
                coin: "Devise",
                list: "Relevé d´opération",
                t_tip1: "Veuillez payer le marchand à temps",
                t_tip2: "Veuillez attendre patiemment que l´autre partie paie",
                t_tip3: "Je confirme que je n´ai pas payé l´autre partie"
            },
            store: {
                myshop: "mon magasin",
                regtime: "Heure d´inscription",
                belongcoin: "Monnaie légale",
                entershop: "entrer dans une boutique",
                rzshop: "Marchand certifié",
                fabu: "Libération",
                allorder: "Liste de montage",
                thirtyorder: "Commande de 30 jours",
                doneorder: "Ordre d´achèvement",
                donelv: "Le taux d´achèvement",
                renzhengmobile: "Authentification de téléphone mobile",
                renzhengauth: "Vérifié",
                renzhenghigh: "Certification avancée",
                notdone: "défait",
                done: "terminé",
                yichang: "anormal",
                lowershelf: "Étagère",
                protection: "Défense des droits",
                apply: "Demander la protection des droits",
                back: "se désister",
                lookorder: "vérifier la commande",
                minnum: "Volume de transaction minimum",
                maxnum: "Volume maximum de transactions",
                p_payment: "Veuillez sélectionner le mode de paiement",
                p_coin: "Veuillez sélectionner l´unité monétaire",
                p_price: "Veuillez saisir le prix unitaire",
                p_min: "Veuillez saisir le volume de transaction minimum",
                p_max: "Veuillez saisir le volume de transaction maximal",
                ithink: "laisse moi réfléchir",
                makeyichang: "La confirmation est-elle marquée comme anormale?",
                alipay: "Alipay",
                wechat: "WeChat",
                bank: "carte bancaire",
                t_minmax: "Le volume de transaction maximum ne peut pas être inférieur au volume de transaction minimum",
                mysell: "Ma vente",
                mybuy: "Ma demande",
                orderlist: "Enregistrement de commande",
                orderstatus: "Statut de la commande",
                chongzhi: "Réinitialiser",
                p_pay: "Veuillez payer",
                p_waitpay: "Paiement en attente",
                t_pay: "Veuillez payer le vendeur à temps",
                t_waitpay: "Veuillez attendre patiemment que l´autre partie paie",
                t_paycancel: "La commande a été annulée, impossible de voir les informations de paiement",
                t_havepay: "La commande a été payée",
                t_hasdone: "La commande est terminée",
                call: "Contactez l´autre partie",
                collectcode: "recevoir le code QR",
                collectper: "Bénéficiaire",
                payper: "Acheteur",
                collectacc: "compte destinataire",
                paycancode: "Numéro de référence du paiement",
                dotime: "Heure de la commande",
                t_self: "Veuillez utiliser vous-même",
                t_transfer: "Transfert sur le compte ci-dessus par vous-même",
                t_tip: " Ne remarquez pas les BTC, USDT et autres informations pendant le processus de transfert pour éviter des problèmes tels que l´interception des transferts de fonds et le gel des cartes bancaires",
                cancelorder: "Annuler la commande",
                ipay: "J´ai payé avec succès",
                t_look: "Veuillez vérifier attentivement les informations de paiement avant de confirmer le paiement",
                t_con_collect: "Confirmez que le paiement a bien été reçu",
                cancel_confrim: "Confirmer pour annuler la transaction",
                t_tip1: "Si vous avez payé le vendeur, veuillez ne pas annuler la transaction",
                t_tip2: "L´acheteur a trois annulations le même jour, ce qui limitera la fonction d´achat le même jour",
                t_rule: "Annuler la règle",
                confrim_ipay: "Confirmer que j´ai payé",
                donotconfrim: "Si vous n´avez pas payé le vendeur, veuillez ne pas cliquer sur le bouton de confirmation",
                lockacc: "Les clics malveillants vont geler le compte",
                hedui: "Veuillez vérifier attentivement les informations de paiement",
                notpayconfrim: "Si vous n´avez pas reçu le paiement marchand, veuillez ne pas cliquer sur le bouton de confirmation",
                yes: "Oui",
                no: "non",
                sd: "Verrouiller l´équilibre",
                journal: "Journal des soldes",
                business: "marchande",
                user: "utilisateur",
                backdone: "Retiré"
            },
            coin: {
                bao: "Trésor de dépôt de pièces",
                choose: "Choisir la devise",
                total: "Dépôt total",
                mybao: "Mon dépôt",
                profit: "Retour attendu",
                end_time: "Date d´expiration",
                day: "Journées",
                rate: "taux de retour",
                rule: "Règles de dépôt"
            },
            team: {
                team: "mon équipe",
                zt_num: "Poussée directe",
                active_num: "Nombre de membres actifs de l´équipe",
                profit: "le revenu",
                cblog: "Enregistrement de dépôt",
                bblog: "Record de devise",
                back: "Rabais",
                account: "Compte"
            }
        };
        t.default = s
    },
    "29fa": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r = i(n("ade3")), o = {
            zdy: (a = {
                dzje: "राशि से खाता",
                scsj: "लॉकअप टाइम",
                a37: "इनाम आसानी से प्राप्त करें",
                a33: "रद्दीकरण काटा जाएगा",
                a32: "कुल ब्याज",
                a31: "जमा किए गए सिक्के की राशि",
                a30: "लॉक्ड पोजिशन रिकॉर्ड",
                a29: "अनुमानित कुल आय",
                a28: "खनन आसान है",
                a27: "माइनिंग ट्रेज़र",
                a26: "लॉकअप अवधि",
                a25: "हेवेन",
                a24: "जापानी येन ब्याज",
                a23: "पिछले 3 दिनों के लिए संदर्भ वार्षिकिकरण",
                a22: "सिक्के कमाने के लिए ताला स्थिति",
                a21: "रद्द प्रतिज्ञा",
                a20: "समय समाप्ति",
                a19: "प्रतिज्ञा समय",
                a18: "आउटपुट होने के लिए राशि",
                a17: "प्रोजेक्ट नंबर",
                a16: "प्रतिज्ञा रिकॉर्ड",
                a15: "प्रतिज्ञा रद्द करें और मूलधन वापस करें, कोई आय प्राप्त नहीं की जा सकती है",
                a14: "अपर्याप्त",
                a13: "वॉलेट बैलेंस",
                a12: "प्रतिज्ञा की राशि",
                a11: "प्रतिज्ञा",
                a10: "टोकन",
                a9: "आउटपुट मात्रा को समतुल्य मूल्य में परिवर्तित किया जाएगा",
                a8: "अनुमानित मात्रा आउटपुट होने के लिए",
                a7: "कुल राजस्व",
                a6: "कई लाभ कमाएँ",
                a5: "जमा",
                a4: "मोबाइल प्रतिज्ञा",
                a3: "धारक प्रतिज्ञा आय का आनंद ले सकता है",
                a36: "रेमिटेंस अकाउंट ओपनिंग बैंक",
                a35: "रेमिटेंस बैंक कार्ड नंबर",
                a34: "प्रेषण नाम",
                oldpwd: "कृपया पुराना पासवर्ड दर्ज करें",
                zxkf: "ऑनलाइन ग्राहक सेवा",
                a2: "भुगतान करने की आवश्यकता है",
                a1: "सदस्यता मुद्रा",
                a0: "निकासी कटौती",
                dqyuee: "वर्तमान शेष",
                download: "ऐप डाउनलोड करें",
                czsl: "रिचार्ज मात्रा",
                qbdz: "जमा पता",
                enterqbdz: "कृपया जमा पता दर्ज करें",
                tjsh: "समीक्षा जमा करें",
                sb01: "लिस्टिंग के लिए आवेदन का समय डेटा जमा करने की गुणवत्ता पर निर्भर करता है",
                sb02: "आवेदन परिणाम",
                sb03: "पुष्टिकरण ईमेल प्राप्त करने के बाद, ईमेल के अनुसार प्रासंगिक जानकारी जमा करें",
                sb04: "जानकारी जमा करें",
                sb05: "सूची के लिए आवेदन जमा करें",
                sb06: "आवेदन",
                sb07: "आवेदन प्रक्रिया",
                sb08: "सूची के लिए आवेदन करें",
                sb09: "PaxfulCoins ग्राहकों की खातिर सब कुछ बढ़ाता है, उपयोगकर्ताओं के हितों को पहले स्थान पर रखता है, और अब अपने दीर्घकालिक समर्थन के लिए ग्राहकों को चुकाने के लिए उच्च-गुणवत्ता वाली परियोजनाओं (मुद्राओं) की तलाश करता है। उच्च गुणवत्ता वाले सिक्के खरीदें, मूल्य के सिक्के खरीदें, केवल PaxfulCoins चुनें!",
                ksgt: "त्वरित संचार",
                sbsq: "लिस्टिंग के लिए आवेदन",
                qrszfpz: "कृपया भुगतान वाउचर दर्ज करें",
                zfpz: "भुगतान वाउचर",
                dqsy: "वर्तमान प्राप्तियां",
                ygsy: "अनुमानित आय",
                rgcz: "सदस्यता संचालन",
                srrgsl: "सदस्यता मात्रा दर्ज करें",
                kdh: "परिवर्तनीय",
                gw: "सरकारी वेबसाइट",
                bps: "सफ़ेद कागज",
                sgzq: "सदस्यता चक्र",
                yr: "जोश में आना",
                sg: "सदस्यता लेने के",
                js: "समाप्त",
                xmxq: "परियोजना विवरण",
                rg: "सदस्यता लेने के",
                ieo: "IEO सदस्यता",
                zt: "स्थिति",
                fhjg: "कीमत जारी करें",
                dqsj: "समाप्त होने की तिथि"
            },
                (0,
                    r.default)(a, "scsj", "लॉक-अप समय"),
                (0,
                    r.default)(a, "yjsy", "अपेक्षित आय"),
                (0,
                    r.default)(a, "zxscsl", "न्यूनतम लॉकअप मात्रा"),
                (0,
                    r.default)(a, "syl", "प्रतिफल दर"),
                (0,
                    r.default)(a, "sc", "हवालात"),
                (0,
                    r.default)(a, "ts", "दिन"),
                (0,
                    r.default)(a, "fhzl", "कुल जारी"),
                (0,
                    r.default)(a, "jssj", "अंतिम समय"),
                (0,
                    r.default)(a, "yjs", "ऊपर"),
                (0,
                    r.default)(a, "wks", "शुरू नहीं हुआ है"),
                (0,
                    r.default)(a, "jxz", "प्रसंस्करण"),
                (0,
                    r.default)(a, "scz", "बंद"),
                (0,
                    r.default)(a, "ydq", "समाप्त हो"),
                (0,
                    r.default)(a, "nodata", "कोई आकड़ा उपलब्ध नहीं है"),
                (0,
                    r.default)(a, "nomore", "और कोई डेटा नहीं"),
                (0,
                    r.default)(a, "more", "और लोड करें"),
                (0,
                    r.default)(a, "qbye", "बटुआ संतुलन"),
                (0,
                    r.default)(a, "scgz", "ताला लगाने के नियम"),
                (0,
                    r.default)(a, "sclb", "सूची लॉक करें"),
                (0,
                    r.default)(a, "scwk", "लॉक-अप माइनिंग"),
                (0,
                    r.default)(a, "sly", "प्रतिफल दर"),
                (0,
                    r.default)(a, "yebz", "अपर्याप्त शेष"),
                (0,
                    r.default)(a, "mhydd", "दूसरा अनुबंध आदेश"),
                (0,
                    r.default)(a, "gmj", "खरीद मूल्य"),
                (0,
                    r.default)(a, "cjj", "अंतिम कीमत"),
                (0,
                    r.default)(a, "yjyk", "अनुमानित लाभ और हानि"),
                (0,
                    r.default)(a, "yk", "लाभ और हानि"),
                (0,
                    r.default)(a, "djs", "उलटी गिनती"),
                a),
            login: {
                l_mobile: "फ़ोन से लॉगिन करें",
                l_email: "ईमेल लॉगिन करें",
                p_email: "कृपया अपना ईमेल इनपुट करें",
                p_mobile: "कृपया फ़ोन नंबर दर्ज करें",
                p_pwd: "कृप्या पास्वर्ड भरो",
                p_confirmPwd: "कृप्या पास्वर्ड भरो",
                p_confirmtradePwd: "लेनदेन पासवर्ड्टिकरें",
                p_vcode: "कृपया सत्यापन कोड दर्ज करें",
                get_code: "सत्यापन कोड प्राप्त करें",
                rem_pwd: "पासवर्ड याद रखें",
                login: "लॉग इन करें",
                noaccount: "अभी तक PaxfulCoins खाता नहीं है?",
                register: "दर्ज कराई",
                forget_pwd: "पासवर्ड भूल गए?",
                p_taccount: "कृपया एक मान्य फोन नंबर दर्ज करें",
                p_temail: "कृपया अपना vaild ईमेल दर्ज करें",
                p_pwderr: "पासवर्ड गलत है",
                l_success: "सफलतापूर्ण प्रवेश",
                r_noedit: "पंजीकरण के बाद संशोधित नहीं किया जा सकता",
                r_mobile: "अपना फोन रजिस्टर करें",
                r_email: "ईमेल पंजीकरण",
                r_hasaccount: "PaxfulCoins खाता है",
                r_next: "अगला कदम",
                r_sms: "एसएमएस सत्यापन",
                r_smsemail: "ई - मेल सत्यापन",
                r_pmobilecode: "कृपया फ़ोन सत्यापन कोड दर्ज करें",
                r_pemailcode: "कृपया ईमेल सत्यापन कोड दर्ज करें",
                r_send: "भेजने",
                p_len: "पासवर्ड की लंबाई 6 ~ 16 अंक है",
                p_notsame: "पासवर्ड इनपुट असंगत है",
                p_simple: "पासवर्ड बहुत सरल है, कृपया पुनः प्रवेश करें",
                p_inputagain: "पासवर्ड इनपुट असंगत है, कृपया पुनः दर्ज करें",
                p_first: "कृपया पहले उपयोगकर्ता अनुबंध पढ़ें और उससे सहमत हों",
                p_invitecode: "आमंत्रण कोड (खाली हो सकता है)ेत",
                p_inviteInput: "कृपया निमंत्रण कोड दर्ज करें",
                p_agree: "मैं सहमत हूँ",
                p_private: "उपयोगकर्ता अनुबंध और गोपनीयता नीति",
                p_set: "सेट अप",
                p_setPwd: "पासवर्ड सेट करें",
                f_mobile: "फोन बरामदगी",
                f_email: "ईमेल प्राप्त करें",
                e_mb: "फ़ोन नंबर",
                e_email: "मेलबॉक्स",
                e_pwd: "पासवर्ड बदलें",
                e_chongzhi: "पासवर्ड रीसेट",
                e_dealPwd: "ट्रांजेक्शन पासवर्ड को संशोधित करें",
                e_pdeal: "कृपया लेनदेन पासवर्ड दर्ज करें",
                e_pdealerr: "लेनदेन का पासवर्ड गलत दर्ज किया गया है",
                e_pdealConfrim: "कृपया लेनदेन पासवर्ड की पुष्टि करें",
                e_confrim: "पुष्टि करें",
                e_confrim2: "निर्धारित",
                security: "सुरक्षा केंद्र",
                s_loginpwd: "लॉग इन पासवर्ड",
                s_dealpwd: "लेन-देन का पासवर्ड",
                s_edit: "संशोधित"
            },
            about: {
                abt: "हमारे बारे में",
                concat: "संपर्क करें",
                privat: "गोपनीयता नीति",
                theme: "रात्री स्वरुप"
            },
            collect: {
                method: "भुगतान का तरीका",
                name: "वास्तविक नाम",
                p_name: "कृपया अपना वास्तविक नाम दर्ज करें",
                bank: "बैंक खाता",
                p_bank: "कृपया खाता बैंक में प्रवेश करें",
                no: "बैंक कार्ड नंबर",
                p_no: "कृपया बैंक कार्ड नंबर दर्ज करें",
                alipay: "Alipay संख्या",
                p_alipay: "कृपया Alipay खाता दर्ज करें",
                nick: "WeChat उपनाम",
                p_nick: "कृपया WeChat उपनाम दर्ज करें",
                wechat: "WeChat खाता",
                p_wechat: "कृपया WeChat खाता दर्ज करें",
                wechatCode: "WeChat भुगतान कोड",
                alipayCode: "Alipay भुगतान कोड",
                up_wechatCode: "कृपया WeChat भुगतान कोड अपलोड करें",
                up_alipayCode: "कृपया Alipay भुगतान कोड अपलोड करें",
                cardno: "पहचान संख्या",
                p_cardno: "कृपया पहचान संख्या दर्ज करें",
                up_card: "आईडी फोटो अपलोड करें",
                up_cardz: "आईडी कार्ड के सामने अपलोड करें",
                up_cardf: "आईडी कार्ड का रिवर्स साइड अपलोड करें",
                up_cardhand: "एक हैंडहेल्ड आईडी कार्ड अपलोड करें"
            },
            bind: {
                bindAddr: "निकासी का पता बांधें",
                cur_select: "वर्तमान में चयनित मुद्रा",
                addr: "नाम वापसी का पता",
                codeauth: "मेरा प्राधिकरण कोड",
                codetip: "किसी उपयोगकर्ता को एक एजेंसी के रूप में जोड़ते समय, उपयोगकर्ता के प्राधिकरण कोड को सत्यापित करने की आवश्यकता होती है",
                p_addr: "कृपया वापसी का पता दर्ज करें",
                code: "पुष्टि संख्या",
                bind: "बाइंड",
                sendSuccess: "सफलतापूर्वक भेज दिया",
                bindOk: "सफलतापूर्वक बांधें",
                tuiguang: "मेरा प्रचार कोड",
                codes: "पदोन्नति कोड",
                tip: "पंजीकरण की पुष्टि करने के लिए ऊपर दिए गए QR कोड पैटर्न को स्कैन करें या प्रचार कोड डालें",
                liantype: "चेन प्रकार"
            },
            authentication: {
                person: "व्यक्तिगत केंद्र",
                renzheng: "प्रमाणीकरण",
                gaoji: "प्रमाणीकरण",
                go: "प्रमाणीकरण जाओ",
                ing: "समीक्षाधीन",
                has: "सत्यापित",
                rz_tip: "प्रमाणीकरण के बाद निकासी की सीमा बढ़ाई जा सकती है",
                name: "नाम",
                account: "खाता संख्या",
                zj: "लाइसेंस संख्या"
            },
            home: {
                legal: "फिएट मुद्रा लेनदेन",
                zhichi: "BTC, USDT आदि का समर्थन करें।",
                lever: "अनुबंध लेनदेन",
                news: "समाचार केंद्र",
                security: "सुरक्षित और विश्वसनीय",
                leader: "दुनिया का प्रमुख डिजिटल एसेट ट्रेडिंग प्लेटफॉर्म है",
                updowns: "सूची बढ़ाएँ",
                name: "नाम",
                new_price: "नवीनतम मूल्य",
                fu: "भाव परिवर्तन",
                p_login: "कृपया साइन इन करें",
                welcome: "PaxfulCoins में आपका स्वागत है",
                myshop: "मेरी दुकान",
                myshare: "मेरा हिस्सा लिंक",
                logout: "प्रस्थान करें",
                detail: "विवरण",
                up: "लोडिंग खींचो",
                nomore: "और कोई डेटा नहीं",
                norecord: "कोई रिकॉर्ड नहीं",
                loading: "लोड हो रहा है",
                team: "मेरी टीम",
                fast: "जल्दी से सिक्के खरीदो",
                micro: "दूसरा अनुबंध लेनदेन"
            },
            market: {
                market: "उद्धरण",
                volume: "24H मात्रा",
                home: "घर"
            },
            trade: {
                trade: "मुद्रा लेनदेन",
                buy: "खरीदना",
                sell: "बेचना",
                limit: "मूल्य सीमित करें",
                shi: "बाजार मूल्य",
                cancel: "रद्द करना",
                best: "वर्तमान सर्वोत्तम मूल्य पर व्यापार",
                num: "मात्रा",
                use: "उपलब्ध",
                amout: "लेन - देन की राशि",
                price: "कीमत",
                time: "समय",
                bibi: "सिक्के",
                all: "सब",
                back: "वापस लेना",
                dui: "ट्रेडिंग जोड़ी",
                notenough: "अपर्याप्त शेष",
                notbest: "वर्तमान में कोई सबसे अच्छी कीमत नहीं है",
                p_price: "कृपया मूल्य दर्ज करें",
                p_num: "कृपया मात्रा दर्ज करें",
                delegate: "वर्तमान कमीशन",
                all_delegate: "सभी ने कमीशन किया",
                his_delegate: "ऐतिहासिक कमीशन",
                has_done: "पूरा कर लिया है",
                has_cancel: "रद्द",
                has_pay: "भुगतान किया हुआ",
                fee: "संचालन शुल्क",
                handnum: "व्यापार बहुत",
                p_handnum: "कृपया दर्ज करें",
                balance: "संतुलन",
                buy_duo: "खरीदें (लंबे समय तक जाएं)",
                sell_kong: "बेचना (छोटा)",
                pankou: "अपंगता",
                chicang: "पद",
                types: "के प्रकार",
                operate: "ऑपरेटिंग",
                pingcang: "परिसमापन",
                chedan: "आदेश रद्द",
                duo: "और करो",
                kong: "कम",
                hands: "लॉट",
                hand: "हाथ",
                times: "विभिन्न",
                money: "हाशिया",
                confrim_ping: "क्या आप स्थिति को बंद करना सुनिश्चित करते हैं?",
                confrim_order: "आदेश की पुष्टि करें",
                confrim_chedan: "रद्द करने की पुष्टि करें?",
                p_times: "कृपया कई का चयन करें",
                p_hands: "कृपया का चयन करें या बहुत दर्ज करें",
                p_delprice: "कृपया कमीशन मूल्य दर्ज करें",
                p_notless: "दर्ज किए गए लॉट की संख्या इससे कम नहीं हो सकती",
                p_notmore: "दर्ज किए गए लॉट की संख्या इससे अधिक नहीं हो सकती",
                delegate_price: "कमीशन की कीमत",
                price_cang: "खुलने का भाव",
                price_zhiying: "प्रॉफिट प्राइस लें",
                num_zhehe: "परिवर्तित मात्रा",
                price_cur: "मौजूदा कीमत",
                price_lose: "दाम बंद करो",
                can_money: "उपलब्ध गुंजाइश",
                time_start: "खुलने का समय",
                geye_fee: "रात भर का शुल्क",
                dealtype: "सौदे का प्रकार"
            },
            lever: {
                delegating: "चालू",
                dealing: "लेन-देन में",
                pingcanging: "समापन",
                hasping: "बन्द है",
                hasback: "आदेश रद्द किया गया",
                risk: "जोखिम की दर",
                totalyk: "कुल स्थिति लाभ और हानि",
                yijian: "एक-क्लिक परिसमापन",
                setys: "स्टॉप लाभ और स्टॉप लॉस निर्धारित करें",
                profit: "लाभ की उम्मीद",
                lose: "नुकसान की उम्मीद",
                price_zhiying: "लाभ भाव लें",
                price_lose: "दाम बंद करो",
                all_ping: "सभी पदों को बंद करें",
                duo_ping: "केवल फ्लैट अधिक आदेश",
                kong_ping: "केवल छोटे आदेशों को बंद करें"
            },
            assets: {
                trade: "सिक्के",
                lever: "अनुबंध",
                legal: "फिएट मुद्रा",
                micro: "दूसरा अनुबंध",
                manage: "वित्तीय प्रबंधन",
                tradeacc: "मुद्रा खाता",
                leveracc: "अनुबंध खाता",
                legalacc: "फिएट अकाउंट",
                microacc: "दूसरा अनुबंध खाता",
                zhehe: "धर्मांतरित",
                zhehecny: "कुल संपत्ति परिवर्तित",
                lock: "फ्रीज",
                assets: "संपत्ति",
                records: "आर्थिक अभिलेख",
                charge: "फिर से दाम लगाना",
                mention: "निकासी",
                transfer: "स्थानांतरण",
                record: "रिकॉर्डिंग",
                cur_coin: "वर्तमान मुद्रा",
                addr_charge: "जमा पता",
                coypaddr: "कॉपी पता",
                c_tip1: "किसी गैर को रिचार्ज न करें-",
                c_tip2: "अन्यथा परिसंपत्तियों की वसूली नहीं की जाएगी",
                c_tip3: "जमा केवल सरल भेजने की विधि का समर्थन करता है, और अन्य तरीकों का उपयोग करके जमा को अस्थायी रूप से पोस्ट नहीं किया जा सकता है। कृपया समझें",
                c_tip4: "उपरोक्त पते पर रिचार्ज करने के बाद, आपको पूरे नेटवर्क नोड की पुष्टि की आवश्यकता है, खाता 1 नेटवर्क की पुष्टि के बाद प्राप्त होगा, और 6 नेटवर्क पुष्टि के बाद सिक्का वापस लिया जा सकता है",
                c_tip5: "न्यूनतम रिचार्ज राशि",
                c_tip6: "न्यूनतम राशि से कम जमा राशि पोस्ट नहीं की जाएगी और उसे वापस नहीं किया जा सकता है",
                c_tip7: "आपका रिचार्ज पता बार-बार नहीं बदलेगा, आप रिचार्ज कर सकते हैं; यदि कोई बदलाव है, तो हम आपको ऑनलाइन घोषणा या ईमेल के माध्यम से सूचित करने की पूरी कोशिश करेंगे।",
                c_tip8: "कृपया सुनिश्चित करें कि जानकारी को रोकने या लीक होने से बचाने के लिए आपका कंप्यूटर और ब्राउज़र सुरक्षित हैं",
                copy_success: "सफलतापूर्वक कॉपी करें",
                copy_err: "प्रतिलिपि विफल हुई",
                mentionaddr: "नाम वापसी का पता",
                p_addr: "कृपया पहले अपना निकासी पता सेट करें",
                minnum: "न्यूनतम निकासी राशि",
                recivenum: "आगमन की मात्रा",
                p_minnum: "कृपया वापसी की मात्रा दर्ज करें",
                transfernum: "स्थानान्तरण की संख्या",
                p_transfernum: "कृपया हस्तांतरण राशि दर्ज करें",
                from: "से",
                to: "सेवा"
            },
            legal: {
                legal: "फिएट मुद्रा",
                ibuy: "मैं खरीदना चाहते हैं",
                isell: "मैं बेचना चाहता हूँ",
                price: "यूनिट मूल्य",
                limit: "सीमा",
                buy: "खरीद",
                sell: "बेचना",
                anprice: "कीमत के हिसाब से",
                annum: "मात्रा द्वारा",
                pl: "कृपया दर्ज करें",
                amount: "रकम",
                num: "मात्रा",
                allmoney: "कुल लेन-देन",
                autocancel: "स्वचालित रूप से रद्द करें",
                do: "एक आदेश दें",
                p_amout: "कृपया राशि दर्ज करें",
                coin: "मुद्रा",
                list: "लेनदेन का रिकॉर्ड",
                t_tip1: "कृपया व्यापारी को समय से भुगतान करें",
                t_tip2: "कृपया दूसरे पक्ष को भुगतान करने के लिए धैर्यपूर्वक प्रतीक्षा करें",
                t_tip3: "मैं पुष्टि करता हूं कि मैंने दूसरे पक्ष को भुगतान नहीं किया है"
            },
            store: {
                myshop: "मेरी दुकान",
                regtime: "पंजीकरण का समय",
                belongcoin: "कानूनी मुद्रा",
                entershop: "एक दुकान में प्रवेश करें",
                rzshop: "प्रमाणित व्यापारी",
                fabu: "रिहाई",
                allorder: "विधानसभा सूची",
                thirtyorder: "30-दिन का आदेश",
                doneorder: "पूर्ण करने का क्रम",
                donelv: "पूरा होने की दर",
                renzhengmobile: "मोबाइल फोन प्रमाणीकरण",
                renzhengauth: "सत्यापित",
                renzhenghigh: "उन्नत प्रमाणीकरण",
                notdone: "नष्ट कर दिया",
                done: "पूरा कर लिया है",
                yichang: "असामान्य",
                lowershelf: "बंद शेल्फ",
                protection: "अधिकारों का बचाव",
                apply: "अधिकार संरक्षण के लिए आवेदन करें",
                back: "निकालना",
                lookorder: "जांच के आदेश",
                minnum: "न्यूनतम लेनदेन की मात्रा",
                maxnum: "अधिकतम लेन-देन की मात्रा",
                p_payment: "कृपया भुगतान का तरीका चुनें",
                p_coin: "कृपया मुद्रा इकाई का चयन करें",
                p_price: "कृपया इकाई मूल्य दर्ज करें",
                p_min: "कृपया न्यूनतम लेन-देन की मात्रा दर्ज करें",
                p_max: "कृपया अधिकतम लेनदेन मात्रा दर्ज करें",
                ithink: "मुझे फिर से सोचने दो",
                makeyichang: "क्या पुष्टि असामान्य है?",
                alipay: "Alipay",
                wechat: "WeChat",
                bank: "बैंक कार्ड",
                t_minmax: "अधिकतम लेनदेन की मात्रा न्यूनतम लेनदेन की मात्रा से कम नहीं हो सकती",
                mysell: "मेरी बिक्री",
                mybuy: "मेरा अनुरोध",
                orderlist: "आदेश रिकॉर्ड",
                orderstatus: "आदेश की स्थिति",
                chongzhi: "रीसेट",
                p_pay: "भुगतान करें",
                p_waitpay: "लंबित भुगतान",
                t_pay: "कृपया विक्रेता को समय पर भुगतान करें",
                t_waitpay: "कृपया दूसरे पक्ष को भुगतान करने के लिए धैर्यपूर्वक प्रतीक्षा करें",
                t_paycancel: "आदेश रद्द कर दिया गया है और भुगतान जानकारी को नहीं देखा जा सकता है",
                t_havepay: "आदेश का भुगतान किया गया",
                t_hasdone: "आर्डर पूरा हुआ",
                call: "एक दूसरे से संपर्क करें",
                collectcode: "QR कोड प्राप्त करना",
                collectper: "आदाता",
                payper: "क्रेता",
                collectacc: "खाता प्राप्त करना",
                paycancode: "भुगतान संदर्भ संख्या",
                dotime: "आदेश का समय",
                t_self: "कृपया मेरा उपयोग करें",
                t_transfer: "उपरोक्त खाते में स्व-स्थानांतरण",
                t_tip: "कृपया बीटीसी, यूएसडीटी और अन्य जानकारी को स्थानांतरण प्रक्रिया के दौरान टिप्पणी न करें ताकि प्रेषणों को बाधित होने से रोका जा सके और बैंक कार्डों को फ्रीज किया जा सके।",
                cancelorder: "आदेश रद्द",
                ipay: "मैंने सफलतापूर्वक भुगतान किया है",
                t_look: "भुगतान की पुष्टि करने से पहले कृपया भुगतान जानकारी को ध्यान से देखें",
                t_con_collect: "भुगतान की पुष्टि करें",
                cancel_confrim: "लेनदेन को रद्द करने की पुष्टि करें",
                t_tip1: "यदि आपने विक्रेता को भुगतान किया है, तो कृपया लेनदेन को रद्द न करें",
                t_tip2: "खरीदार के पास एक ही दिन में तीन रद्दीकरण हैं, जो दिन के खरीद समारोह को सीमित करेगा",
                t_rule: "रद्द करने का नियम",
                confrim_ipay: "पुष्टि करें कि मैंने भुगतान किया है",
                donotconfrim: "यदि आपने विक्रेता को भुगतान नहीं किया है, तो कृपया पुष्टि बटन पर क्लिक न करें",
                lockacc: "दुर्भावनापूर्ण क्लिक खाते को फ्रीज कर देंगे",
                hedui: "कृपया भुगतान जानकारी को ध्यान से देखें",
                notpayconfrim: "यदि आपको व्यापारी भुगतान नहीं मिला है, तो कृपया पुष्टि बटन पर क्लिक न करें",
                yes: "हाँ",
                no: "नहीं",
                sd: "बैलेंस लॉक करें",
                journal: "संतुलन लॉग",
                business: "सोदागर",
                user: "उपयोगकर्ता",
                backdone: "वापस लिया गया"
            },
            coin: {
                bao: "सिक्का जमा खजाना",
                choose: "मुद्रा चुनिये",
                total: "कुल जमा",
                mybao: "मेरा जमा",
                profit: "अपेक्षित आय",
                end_time: "समाप्त होने की तिथि",
                day: "दिन",
                rate: "प्रतिफल दर",
                rule: "जमा नियम"
            },
            team: {
                team: "मेरी टीम",
                zt_num: "प्रत्यक्ष धक्का",
                active_num: "सक्रिय टीम के सदस्यों की संख्या",
                profit: "आय",
                cblog: "जमा रिकॉर्ड",
                bblog: "मुद्रा रिकॉर्ड",
                back: "छूट",
                account: "लेखा"
            }
        };
        t.default = o
    },
    "319c": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
            t.push([e.i, '\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*每个页面公共css */@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf) format("truetype")}\r\n/*通用 */uni-view{font-size:%?28?%;line-height:1.8}uni-progress, uni-checkbox-group{width:100%}uni-form{width:100%}.uni-flex{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-flex-item{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-link{color:#576b95;font-size:%?26?%}.uni-center{text-align:center}.uni-inline-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-inline-item uni-text{margin-right:%?20?%}.uni-inline-item uni-text:last-child{margin-right:%?0?%;margin-left:%?20?%}\r\n/* page */.uni-page-head{padding:%?35?%;text-align:center}.uni-page-head-title{display:inline-block;padding:0 %?40?%;font-size:%?30?%;height:%?88?%;line-height:%?88?%;color:#bebebe;box-sizing:border-box;border-bottom:%?2?% solid #d8d8d8}.uni-page-body{width:100%;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;overflow-x:hidden}.uni-padding-wrap{width:%?690?%;padding:0 %?30?%}.uni-word{text-align:center;padding:%?200?% %?100?%}.uni-title{font-size:%?30?%;font-weight:500;padding:%?20?% 0;line-height:1.5}.uni-text{font-size:%?28?%}.uni-title uni-text{font-size:%?24?%;color:#888}.uni-text-gray{color:#ccc}.uni-text-small{font-size:%?24?%}.uni-common-mb{margin-bottom:%?30?%}.uni-common-pb{padding-bottom:%?30?%}.uni-common-pl{padding-left:%?30?%}.uni-common-mt{margin-top:%?30?%}\r\n/* 背景色 */.uni-bg-red{background:#f76260;color:#fff}.uni-bg-green{background:#09bb07;color:#fff}.uni-bg-blue{background:#007aff;color:#fff}\r\n/* 标题 */.uni-h1{font-size:%?80?%;font-weight:700}.uni-h2{font-size:%?60?%;font-weight:700}.uni-h3{font-size:%?48?%;font-weight:700}.uni-h4{font-size:%?36?%;font-weight:700}.uni-h5{font-size:%?28?%;color:#8f8f94}.uni-h6{font-size:%?24?%;color:#8f8f94}.uni-bold{font-weight:700}\r\n/* 文本溢出隐藏 */.uni-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\r\n/* 竖向百分百按钮 */.uni-btn-v{padding:%?10?% 0}.uni-btn-v uni-button{margin:%?20?% 0}\r\n/* 表单 */.uni-form-item{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;padding:%?10?% 0}.uni-form-item .title{padding:%?10?% %?25?%}.uni-label{width:%?210?%;word-wrap:break-word;word-break:break-all;text-indent:%?20?%}.uni-input{height:%?50?%;padding:%?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;-webkit-box-flex:1;-webkit-flex:1;flex:1}uni-radio-group, uni-checkbox-group{width:100%}uni-radio-group uni-label, uni-checkbox-group uni-label{padding-right:%?20?%}.uni-form-item .with-fun{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;background:#fff}.uni-form-item .with-fun .uni-icon{width:40px;height:%?80?%;line-height:%?80?%;-webkit-flex-shrink:0;flex-shrink:0}\r\n/* loadmore */.uni-loadmore{height:%?80?%;line-height:%?80?%;text-align:center;padding-bottom:%?30?%}\r\n/*数字角标*/.uni-badge,\r\n.uni-badge-default{font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;line-height:1;display:inline-block;padding:3px 6px;color:#333;border-radius:100px;background-color:rgba(0,0,0,.15)}.uni-badge.uni-badge-inverted{padding:0 5px 0 0;color:#929292;background-color:initial}.uni-badge-primary{color:#fff;background-color:#007aff}.uni-badge-blue.uni-badge-inverted,\r\n.uni-badge-primary.uni-badge-inverted{color:#007aff;background-color:initial}.uni-badge-green,\r\n.uni-badge-success{color:#fff;background-color:#4cd964}.uni-badge-green.uni-badge-inverted,\r\n.uni-badge-success.uni-badge-inverted{color:#4cd964;background-color:initial}.uni-badge-warning,\r\n.uni-badge-yellow{color:#fff;background-color:#f0ad4e}.uni-badge-warning.uni-badge-inverted,\r\n.uni-badge-yellow.uni-badge-inverted{color:#f0ad4e;background-color:initial}.uni-badge-danger,\r\n.uni-badge-red{color:#fff;background-color:#dd524d}.uni-badge-danger.uni-badge-inverted,\r\n.uni-badge-red.uni-badge-inverted{color:#dd524d;background-color:initial}.uni-badge-purple,\r\n.uni-badge-royal{color:#fff;background-color:#8a6de9}.uni-badge-purple.uni-badge-inverted,\r\n.uni-badge-royal.uni-badge-inverted{color:#8a6de9;background-color:initial}\r\n/*折叠面板 */.uni-collapse-content{height:0;width:100%;overflow:hidden}.uni-collapse-content.uni-active{height:auto}\r\n/*卡片视图 */.uni-card{background:#fff;border-radius:%?8?%;margin:%?20?% 0;position:relative;box-shadow:0 %?2?% %?4?% rgba(0,0,0,.3)}.uni-card-content{font-size:%?30?%}.uni-card-content.image-view{width:100%;margin:0}.uni-card-content-inner{position:relative;padding:%?30?%}.uni-card-footer,\r\n.uni-card-header{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;min-height:%?50?%;padding:%?20?% %?30?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-card-header{font-size:%?36?%}.uni-card-footer{color:#6d6d72}.uni-card-footer:before,\r\n.uni-card-header:after{position:absolute;top:0;right:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-card-header:after{top:auto;bottom:0}.uni-card-media{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-card-media-logo{height:%?84?%;width:%?84?%;margin-right:%?20?%}.uni-card-media-body{height:%?84?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.uni-card-media-text-top{line-height:%?36?%;font-size:%?34?%}.uni-card-media-text-bottom{line-height:%?30?%;font-size:%?28?%;color:#8f8f94}.uni-card-link{color:#007aff}\r\n/* 列表 */.uni-list{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-list:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list::before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-cell-hover{background-color:#eee}.uni-list-cell-pd{padding:%?22?% %?30?%}.uni-list-cell-left{font-size:%?28?%;padding:0 %?30?%}.uni-list-cell-db,\r\n.uni-list-cell-right{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-list-cell::after{position:absolute;z-index:3;right:0;bottom:0;left:%?30?%;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list .uni-list-cell:last-child::after{height:%?0?%}.uni-list-cell-last.uni-list-cell::after{height:%?0?%}.uni-list-cell-divider{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;color:#999;background-color:#f7f7f7;padding:%?15?% %?20?%}.uni-list-cell-divider::before{position:absolute;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell-divider::after{position:absolute;right:0;bottom:0;left:%?0?%;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell-navigate{font-size:%?30?%;padding:%?22?% %?30?%;line-height:%?48?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-cell-navigate{padding-right:%?36?%}.uni-navigate-badge{padding-right:%?50?%}.uni-list-cell-navigate.uni-navigate-right:after{font-family:uniicons;content:"\\e583";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-list-cell-navigate.uni-navigate-bottom:after{font-family:uniicons;content:"\\e581";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-list-cell-navigate.uni-navigate-bottom.uni-active::after{font-family:uniicons;content:"\\e580";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-collapse.uni-list-cell{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-list-cell-navigate.uni-active{background:#eee}.uni-list.uni-collapse{box-sizing:border-box;height:0;overflow:hidden}.uni-collapse .uni-list-cell{padding-left:%?20?%}.uni-collapse .uni-list-cell::after{left:%?52?%}.uni-list.uni-active{height:auto}\r\n/* 三行列表 */.uni-triplex-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?22?% %?30?%}.uni-triplex-right,\r\n.uni-triplex-left{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-triplex-left{width:84%}.uni-triplex-left .uni-title{padding:%?8?% 0}.uni-triplex-left .uni-text, .uni-triplex-left .uni-text-small{color:#999}.uni-triplex-right{width:16%;text-align:right}\r\n/* 图文列表 */.uni-media-list{padding:%?22?% %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-navigate-right.uni-media-list{padding-right:%?74?%}.uni-pull-right{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.uni-pull-right>.uni-media-list-logo{margin-right:%?0?%;margin-left:%?20?%}.uni-media-list-logo{height:%?84?%;width:%?84?%;margin-right:%?20?%}.uni-media-list-logo uni-image{height:100%;width:100%}.uni-media-list-body{height:%?84?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;overflow:hidden}.uni-media-list-text-top{width:100%;line-height:%?36?%;font-size:%?30?%}.uni-media-list-text-bottom{width:100%;line-height:%?30?%;font-size:%?26?%;color:#8f8f94}\r\n/* 九宫格 */.uni-grid-9{background:#f2f2f2;width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-top:%?2?% solid #eee}.uni-grid-9-item{width:%?250?%;height:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-bottom:%?2?% solid;border-right:%?2?% solid;border-color:#eee;box-sizing:border-box}.no-border-right{border-right:none}.uni-grid-9-image{width:%?100?%;height:%?100?%}.uni-grid-9-text{width:%?250?%;line-height:%?4?%;height:%?40?%;text-align:center;font-size:%?30?%}.uni-grid-9-item-hover{background:rgba(0,0,0,.1)}\r\n/* 上传 */.uni-uploader{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-uploader-head{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-uploader-info{color:#b2b2b2}.uni-uploader-body{margin-top:%?16?%}.uni-uploader__files{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-uploader__file{margin:%?10?%;width:%?210?%;height:%?210?%}.uni-uploader__img{display:block;width:%?210?%;height:%?210?%}.uni-uploader__input-box{position:relative;margin:%?10?%;width:%?208?%;height:%?208?%;border:%?2?% solid #d9d9d9}.uni-uploader__input-box:before,\r\n.uni-uploader__input-box:after{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.uni-uploader__input-box:before{width:%?4?%;height:%?79?%}.uni-uploader__input-box:after{width:%?79?%;height:%?4?%}.uni-uploader__input-box:active{border-color:#999}.uni-uploader__input-box:active:before,\r\n.uni-uploader__input-box:active:after{background-color:#999}.uni-uploader__input{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}\r\n/*问题反馈*/.feedback-title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-star-view.feedback-title{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0}.feedback-quick{position:relative;padding-right:%?40?%}.feedback-quick:after{font-family:uniicons;font-size:%?40?%;content:"\\e581";position:absolute;right:0;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.feedback-body{background:#fff}.feedback-textare{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input{font-size:%?34?%;height:%?50?%;min-height:%?50?%;padding:%?15?% %?20?%;line-height:%?50?%}.feedback-uploader{padding:%?22?% %?20?%}.feedback-star{font-family:uniicons;font-size:%?40?%;margin-left:%?6?%}.feedback-star-view{margin-left:%?20?%}.feedback-star:after{content:"\\e408"}.feedback-star.active{color:#ffb400}.feedback-star.active:after{content:"\\e438"}.feedback-submit{background:#007aff;color:#fff;margin:%?20?%}\r\n/* input group */.uni-input-group{position:relative;padding:0;border:0;background-color:#fff}.uni-input-group:before{position:absolute;top:0;right:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-group:after{position:absolute;right:0;bottom:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-row{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;font-size:%?28?%;padding:%?22?% %?30?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-input-group .uni-input-row:after{position:absolute;right:0;bottom:0;left:%?30?%;height:%?2?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-row uni-label{line-height:%?70?%}\r\n/* textarea */.uni-textarea{width:100%;background:#fff}.uni-textarea uni-textarea{width:96%;padding:%?18?% 2%;line-height:1.6;font-size:%?28?%;height:%?150?%}\r\n/* tab bar */.uni-tab-bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;height:100%}.uni-tab-bar .list{width:%?750?%;height:100%}.uni-swiper-tab{width:100%;white-space:nowrap;line-height:%?100?%;height:%?100?%;border-bottom:1px solid #c8c7cc}.swiper-tab-list{font-size:%?30?%;width:%?150?%;display:inline-block;text-align:center;color:#555}.uni-tab-bar .active{color:#007aff}.uni-tab-bar .swiper-box{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:calc(100% - %?100?%)}.uni-tab-bar-loading{padding:%?20?% 0}\r\n/* comment */.uni-comment{padding:%?5?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-comment-list{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding:%?10?% 0;margin:%?10?% 0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-comment-face{width:%?70?%;height:%?70?%;border-radius:100%;margin-right:%?20?%;-webkit-flex-shrink:0;flex-shrink:0;overflow:hidden}.uni-comment-face uni-image{width:100%;border-radius:100%}.uni-comment-body{width:100%}.uni-comment-top{line-height:1.5em;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-comment-top uni-text{color:#0a98d5;font-size:%?24?%}.uni-comment-date{line-height:%?38?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;display:-webkit-box!important;display:-webkit-flex!important;display:flex!important;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.uni-comment-date uni-view{color:#666;font-size:%?24?%;line-height:%?38?%}.uni-comment-content{line-height:1.6em;font-size:%?28?%;padding:%?8?% 0}.uni-comment-replay-btn{background:#fff;font-size:%?24?%;line-height:%?28?%;padding:%?5?% %?20?%;border-radius:%?30?%;color:#333!important;margin:0 %?10?%}\r\n/* swiper msg */.uni-swiper-msg{width:100%;padding:%?12?% 0;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;display:-webkit-box;display:-webkit-flex;display:flex}.uni-swiper-msg-icon{width:%?50?%;margin-right:%?20?%}.uni-swiper-msg-icon uni-image{width:100%;-webkit-flex-shrink:0;flex-shrink:0}.uni-swiper-msg uni-swiper{width:100%;height:%?50?%}.uni-swiper-msg uni-swiper-item{line-height:%?50?%}\r\n/* product */.uni-product-list{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-product{padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.image-view{height:%?330?%;width:%?330?%;margin:%?12?% 0}.uni-product-image{height:%?330?%;width:%?330?%}.uni-product-title{width:%?300?%;word-break:break-all;display:-webkit-box;overflow:hidden;line-height:1.5;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.uni-product-price{margin-top:%?10?%;font-size:%?28?%;line-height:1.5;position:relative}.uni-product-price-original{color:#e80080}.uni-product-price-favour{color:#888;text-decoration:line-through;margin-left:%?10?%}.uni-product-tip{position:absolute;right:%?10?%;background-color:#f33;color:#fff;padding:0 %?10?%;border-radius:%?5?%}\r\n/* timeline */.uni-timeline{margin:%?35?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative}.uni-timeline-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;padding-bottom:%?20?%;box-sizing:border-box;overflow:hidden}.uni-timeline-item .uni-timeline-item-keynode{width:%?160?%;-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;padding-right:%?20?%;text-align:right;line-height:%?65?%}.uni-timeline-item .uni-timeline-item-divider{-webkit-flex-shrink:0;flex-shrink:0;position:relative;width:%?30?%;height:%?30?%;top:%?15?%;border-radius:50%;background-color:#bbb}.uni-timeline-item-divider::before,\r\n\t.uni-timeline-item-divider::after{position:absolute;left:%?15?%;width:%?1?%;height:100vh;content:"";background:inherit}.uni-timeline-item-divider::before{bottom:100%}.uni-timeline-item-divider::after{top:100%}.uni-timeline-last-item .uni-timeline-item-divider:after{display:none}.uni-timeline-first-item .uni-timeline-item-divider:before{display:none}.uni-timeline-item .uni-timeline-item-content{padding-left:%?20?%}.uni-timeline-last-item .bottom-border::after{display:none}.uni-timeline-item-content .datetime{color:#ccc}\r\n/* 自定义节点颜色 */.uni-timeline-last-item .uni-timeline-item-divider{background-color:#1aad19}\r\n/* uni-icon */.uni-icon{font-family:uniicons;font-size:24px;font-weight:400;font-style:normal;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased}.uni-icon.uni-active{color:#007aff}.uni-icon-contact:before{content:"\\e100"}.uni-icon-person:before{content:"\\e101"}.uni-icon-personadd:before{content:"\\e102"}.uni-icon-contact-filled:before{content:"\\e130"}.uni-icon-person-filled:before{content:"\\e131"}.uni-icon-personadd-filled:before{content:"\\e132"}.uni-icon-phone:before{content:"\\e200"}.uni-icon-email:before{content:"\\e201"}.uni-icon-chatbubble:before{content:"\\e202"}.uni-icon-chatboxes:before{content:"\\e203"}.uni-icon-phone-filled:before{content:"\\e230"}.uni-icon-email-filled:before{content:"\\e231"}.uni-icon-chatbubble-filled:before{content:"\\e232"}.uni-icon-chatboxes-filled:before{content:"\\e233"}.uni-icon-weibo:before{content:"\\e260"}.uni-icon-weixin:before{content:"\\e261"}.uni-icon-pengyouquan:before{content:"\\e262"}.uni-icon-chat:before{content:"\\e263"}.uni-icon-qq:before{content:"\\e264"}.uni-icon-videocam:before{content:"\\e300"}.uni-icon-camera:before{content:"\\e301"}.uni-icon-mic:before{content:"\\e302"}.uni-icon-location:before{content:"\\e303"}.uni-icon-mic-filled:before,\r\n.uni-icon-speech:before{content:"\\e332"}.uni-icon-location-filled:before{content:"\\e333"}.uni-icon-micoff:before{content:"\\e360"}.uni-icon-image:before{content:"\\e363"}.uni-icon-map:before{content:"\\e364"}.uni-icon-compose:before{content:"\\e400"}.uni-icon-trash:before{content:"\\e401"}.uni-icon-upload:before{content:"\\e402"}.uni-icon-download:before{content:"\\e403"}.uni-icon-close:before{content:"\\e404"}.uni-icon-redo:before{content:"\\e405"}.uni-icon-undo:before{content:"\\e406"}.uni-icon-refresh:before{content:"\\e407"}.uni-icon-star:before{content:"\\e408"}.uni-icon-plus:before{content:"\\e409"}.uni-icon-minus:before{content:"\\e410"}.uni-icon-circle:before,\r\n.uni-icon-checkbox:before{content:"\\e411"}.uni-icon-close-filled:before,\r\n.uni-icon-clear:before{content:"\\e434"}.uni-icon-refresh-filled:before{content:"\\e437"}.uni-icon-star-filled:before{content:"\\e438"}.uni-icon-plus-filled:before{content:"\\e439"}.uni-icon-minus-filled:before{content:"\\e440"}.uni-icon-circle-filled:before{content:"\\e441"}.uni-icon-checkbox-filled:before{content:"\\e442"}.uni-icon-closeempty:before{content:"\\e460"}.uni-icon-refreshempty:before{content:"\\e461"}.uni-icon-reload:before{content:"\\e462"}.uni-icon-starhalf:before{content:"\\e463"}.uni-icon-spinner:before{content:"\\e464"}.uni-icon-spinner-cycle:before{content:"\\e465"}.uni-icon-search:before{content:"\\e466"}.uni-icon-plusempty:before{content:"\\e468"}.uni-icon-forward:before{content:"\\e470"}.uni-icon-back:before,\r\n.uni-icon-left-nav:before{content:"\\e471"}.uni-icon-checkmarkempty:before{content:"\\e472"}.uni-icon-home:before{content:"\\e500"}.uni-icon-navigate:before{content:"\\e501"}.uni-icon-gear:before{content:"\\e502"}.uni-icon-paperplane:before{content:"\\e503"}.uni-icon-info:before{content:"\\e504"}.uni-icon-help:before{content:"\\e505"}.uni-icon-locked:before{content:"\\e506"}.uni-icon-more:before{content:"\\e507"}.uni-icon-flag:before{content:"\\e508"}.uni-icon-home-filled:before{content:"\\e530"}.uni-icon-gear-filled:before{content:"\\e532"}.uni-icon-info-filled:before{content:"\\e534"}.uni-icon-help-filled:before{content:"\\e535"}.uni-icon-more-filled:before{content:"\\e537"}.uni-icon-settings:before{content:"\\e560"}.uni-icon-list:before{content:"\\e562"}.uni-icon-bars:before{content:"\\e563"}.uni-icon-loop:before{content:"\\e565"}.uni-icon-paperclip:before{content:"\\e567"}.uni-icon-eye:before{content:"\\e568"}.uni-icon-arrowup:before{content:"\\e580"}.uni-icon-arrowdown:before{content:"\\e581"}.uni-icon-arrowleft:before{content:"\\e582"}.uni-icon-arrowright:before{content:"\\e583"}.uni-icon-arrowthinup:before{content:"\\e584"}.uni-icon-arrowthindown:before{content:"\\e585"}.uni-icon-arrowthinleft:before{content:"\\e586"}.uni-icon-arrowthinright:before{content:"\\e587"}.uni-icon-pulldown:before{content:"\\e588"}.uni-icon-scan:before{content:"\\e612"}\r\n/* 分界线 */.uni-divider{height:%?110?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.uni-divider__content{font-size:%?28?%;color:#999;padding:0 %?20?%;position:relative;z-index:101;background:#f4f5f6}.uni-divider__line{background-color:#ccc;height:1px;width:100%;position:absolute;z-index:100;top:50%;left:0;-webkit-transform:translateY(50%);transform:translateY(50%)}html{width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-sizing:border-box;box-sizing:border-box}151526\r\nbody,\r\ndiv,\r\ndl,\r\ndt,\r\ndd,\r\nul,\r\nol,\r\nli,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\npre,\r\ncode,\r\nuni-form,\r\nfieldset,\r\nlegend,\r\nuni-input,\r\nuni-textarea,\r\np,\r\nblockquote,\r\nth,\r\ntd,\r\nhr,\r\nuni-button,\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection{margin:0;padding:0}*{box-sizing:border-box!important}body{font-size:%?28?%;background:#0b1622;color:#f2f5ff;overflow-x:hidden}uni-input,\r\nselect,\r\nuni-textarea{font-size:100%;-webkit-appearance:none;background:transparent}uni-textarea{border:none;outline:none}uni-button{border:0}table{border-collapse:collapse;border-spacing:0}uni-input{border:0;outline:0;color:#fff}::-webkit-input-placeholder{color:#42526a}\r\n/* 显示隐藏 */.hide{display:none!important}.hidden{display:none}.inblock{display:inline-block}.block{display:block}\r\n/* flex弹性盒子 */.flex{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.between{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.around{-webkit-justify-content:space-around;justify-content:space-around}.jscenter{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.jsend{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.com_end{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.alcenter{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexstart{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.flexend{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.flex1{-webkit-box-flex:1!important;-webkit-flex:1!important;flex:1!important}.flex2{-webkit-box-flex:2!important;-webkit-flex:2!important;flex:2!important}.wraps{-webkit-flex-wrap:wrap;flex-wrap:wrap}\r\n/* 位置 */.posRelt{position:relative}.abstrot{position:absolute}.fixed{position:fixed}.lf0{left:0}.btm0{bottom:0}.mauto{margin-left:auto;margin-right:auto}.fr{float:right}.tc{text-align:center}.tl{text-align:left}.tr{text-align:right}\r\n/* 字体大小 */.ft12{font-size:%?24?%}.ft13{font-size:%?26?%}.ft14{font-size:%?28?%}.ft16{font-size:%?32?%}.ft18{font-size:%?36?%}.ft20{font-size:%?40?%}.ft22{font-size:%?44?%}.ft24{font-size:%?48?%}.ft26{font-size:%?52?%}.ft28{font-size:%?56?%}.ft30{font-size:%?60?%}.ft32{font-size:%?64?%}.ft34{font-size:%?68?%}.ft36{font-size:%?72?%}.ft38{font-size:%?76?%}.ft40{font-size:%?80?%}.ft48{font-size:%?96?%}.ft50{font-size:%?100?%}.iconfont.ft18{font-size:%?36?%}.iconfont.ft12{font-size:%?24?%}.iconfont.ft14{font-size:%?28?%}.iconfont.ft24{font-size:%?48?%}.iconfont.ft48{font-size:%?96?%}.iconfont.ft40{font-size:%?80?%}\r\n/* 字体型号 */.bold{font-weight:700}.italic{font-style:italic}.wordbreak{word-break:break-word}\r\n/* color字体颜色 */.b7c{color:#b7c7dc}.gray75{color:#7588a1}.blue21{color:#217dc1}.gary0{color:#000}.gray91{color:#9195a1}.garyd{color:#dddede}.white{color:#fff}.nwhite{color:#0d1721}.gray{color:#8689b2}.gray_e{color:#eee}.gray9{color:#999}.gray7{color:#7286a5}.gray6{color:#666}.gray5{color:#5b6c87}.gray3{color:#333}.gray4{color:#42526a}.gray45{color:#454545}.blue{color:#9fbedc}.blue2{color:#1881d2}.blue3{color:#4a5a7a}.blue4{color:#8897ad}.red{color:#e27046}.red2{color:#ff5f56}.redColor{color:#d74e5a}.greenColor{color:#12b886}.blueColor{color:#3d80ce}.yellow{color:#ffb103}.green{color:#02c289}.purpel{color:#6c2fd3}.chengse{color:#cc704b}.color1{color:#728daf}\r\n/* 背景色 */.baseBg{background:#0b1726}.bgWhite{background:#fff}.bgRed{background:#e27046!important}.bgGray{background:#c7ced4}.bgF3{background:#f3f3f3}.bgShadow{box-shadow:0 0 %?10?% #e4dbdb}.bgGreen{background:#02c289!important}.bggray{background:#1a273f}.bgyellow{background:#ff9e00}.bgHeader{background:#102030}.bgBlue{background:#1881d2}.bgBlue2{background:#217dc1}.bgBlue3{background:#0b53bd!important}.bgred{background:#d74e5a}.bggreen{background:#12b886}.bgDark{background:#2c548c}.bgPart{background:#162633}.baseBg2{background:#183463}.baseBg3{background:#44708a}.bg_legal{background:#131f30}.liner0{background:#7564ef}.liner1{background:#e6762c}.liner2{background:#419ff6}.liner3{background:#4aab73}.liner4{background:#5977f4}.bg1{background-color:#1c1734}.bg2{background-color:#061623}.bgPart{background:#102030}.bgBlack{background:#0b1622}.bgliner{background:-webkit-linear-gradient(left,#5bb5eb,#508ade);background:linear-gradient(90deg,#5bb5eb,#508ade)}\r\n/* 边框颜色 */.bdb_blue{border-bottom:1px solid #5d86d8}.bdb_e8{border-bottom:1px solid #e8ebee}.bdbf5{border-bottom:1px solid #f5f5f5}.bdb_f3{border-bottom:1px solid #f3f3f3}.bdt_f3{border-top:1px solid #f3f3f3}.bd_blue2{border:1px solid #71aed3}.bdb{border-bottom:1px solid #ddd}.bdb1f{border-bottom:1px solid #1f253c}.bdb_yellow{border-bottom:1px solid #ffb103}.bdbwhite{border-bottom:1px solid hsla(0,0%,100%,.2)}.bdb_blue3{border-bottom:1px solid #101d2a}.bdb27{border-bottom:1px solid #273344}.bdr_white50{border-right:1px solid hsla(0,0%,44.3%,.2)}.bd_input{border:1px solid #42526a}.bd_red{border:1px solid #c15465}.bdBlue{border:1px solid #217dc1}.bd_green{border:1px solid #4daa90}.bdr_input{border-right:1px solid #42526a}.bdb_1e{border-bottom:1px solid #1e2a3d}.bd3a{border:1px solid #3a4163}.bdActive{border:1px solid #357ce1}.bor1{border:1px solid #4d5568}.bor2{border:1px solid #1881d2}.bor3{border:1px solid #02c289!important}.bor4{border:1px solid #e27046!important}.bor5{border-bottom:1px solid #555359!important}.bor6{border:1px solid #e5e5e5}.bdb_active{border-bottom:2px solid #3d80ce}\r\n/* margin外边距 */.mt5{margin-top:%?10?%}.mb5{margin-bottom:%?10?%}.ml5{margin-left:%?10?%}.mr5{margin-right:%?10?%}.mt7{margin-top:%?14?%}.mt10{margin-top:%?20?%}.mt13{margin-top:%?26?%}.mb10{margin-bottom:%?20?%}.ml10{margin-left:%?20?%}.mr10{margin-right:%?20?%}.mt15{margin-top:%?30?%}.mt20{margin-top:%?40?%}.mb20{margin-bottom:%?40?%}.ml20{margin-left:%?40?%}.mr20{margin-right:%?40?%}.mt30{margin-top:%?60?%}.mb30{margin-bottom:%?60?%}.ml30{margin-left:%?60?%}.mr30{margin-right:%?60?%}.mt40{margin-top:%?80?%}.mt45{margin-top:%?90?%}.mb45{margin-bottom:%?90?%}.ml45{margin-left:%?90?%}.mr45{margin-right:%?90?%}.mt50{margin-top:%?100?%}.mt75{margin-top:%?150?%}.mt88{margin-top:%?176?%}.mt100{margin-top:%?200?%}.mtb10{margin-top:%?20?%;margin-bottom:%?20?%}.mlr5{margin-left:%?10?%;margin-right:%?10?%}.mlr10{margin-left:%?20?%;margin-right:%?20?%}.mtb20{margin-top:%?40?%;margin-bottom:%?40?%}.mlr20{margin-left:%?40?%;margin-right:%?40?%}.mtb30{margin-top:%?60?%;margin-bottom:%?60?%}.mlr30{margin-left:%?60?%;margin-right:%?60?%}.mtb45{margin-top:%?90?%;margin-bottom:%?90?%}.mlr45{margin-left:%?90?%;margin-right:%?90?%}\r\n/* padding内边距 */.ptb{padding-top:%?176?%;padding-bottom:%?200?%}.pt5{padding-top:%?10?%}.pb5{padding-bottom:%?10?%}.pl5{padding-left:%?10?%}.pr5{padding-right:%?10?%}.pt10{padding-top:%?20?%}.pl10{padding-left:%?20?%}.pr10{padding-right:%?20?%}.pb10{padding-bottom:%?20?%}.pl15{padding-left:%?30?%}.pr15{padding-right:%?30?%}.pb15{padding-bottom:%?30?%}.pt20{padding-top:%?40?%}.pb20{padding-bottom:%?40?%}.pl20{padding-left:%?40?%}.pr20{padding-right:%?40?%}.pl30{padding-left:%?60?%}.pr30{padding-right:%?60?%}.pt30{padding-top:%?60?%}.pb30{padding-bottom:%?60?%}.pl40{padding-left:%?80?%}.pr40{padding-right:%?80?%}.pt40{padding-top:%?80?%}.pb40{padding-bottom:%?80?%}.pt45{padding-top:%?90?%}.pb45{padding-bottom:%?90?%}.pt50{padding-top:%?100?%}.pb50{padding-bottom:%?100?%}.pl50{padding-left:%?100?%}.pr50{padding-right:%?100?%}.pt60{padding-top:%?120?%}.pb60{padding-bottom:%?120?%}.pt88{padding-top:%?176?%}.pb100{padding-bottom:%?200?%}.pb150{padding-bottom:%?300?%}.pt100{padding-top:%?200?%}.ptb5{padding-bottom:%?10?%;padding-top:%?10?%}.ptb8{padding-bottom:%?16?%;padding-top:%?16?%}.plr8{padding-left:%?16?%;padding-right:%?16?%}.ptb10{padding-bottom:%?20?%;padding-top:%?20?%}.plr10{padding-left:%?20?%;padding-right:%?20?%}.ptb15{padding-top:%?30?%;padding-bottom:%?30?%}.plr15{padding-left:%?30?%;padding-right:%?30?%}.plr20{padding-left:%?40?%;padding-right:%?40?%}.ptb20{padding-top:%?40?%;padding-bottom:%?40?%}.plr30{padding-left:%?60?%;padding-right:%?60?%}.ptb30{padding-top:%?60?%;padding-bottom:%?60?%}.plr40{padding-left:%?80?%;padding-right:%?80?%}.ptb40{padding-top:%?80?%;padding-bottom:%?80?%}.ptb45{padding-top:%?90?%;padding-bottom:%?90?%}.plr45{padding-left:%?90?%;padding-right:%?90?%}.plr50{padding-left:%?100?%;padding-right:%?100?%}.ptb50{padding-bottom:%?100?%;padding-top:%?100?%}.ptb60{padding-bottom:%?120?%;padding-top:%?120?%}\r\n/* 宽度百分比 */.w20{width:20%}.w25{width:25%}.w30{width:30%}.w35{width:35%}.w40{width:40%}.w45{width:45%}.w48{width:48%}.w50{width:50%}.w65{width:65%}.w75{width:75%}.w80{width:80%}.w85{width:85%}.w90{width:90%}.w95{width:95%}.w100{width:100%}\r\n/* 宽度upx */.wt5{width:%?10?%}.wt8{width:%?16?%}.wt10{width:%?20?%}.wt12{width:%?24?%}.wt15{width:%?30?%}.wt18{width:%?36?%}.wt20{width:%?40?%}.wt25{width:%?50?%}.wt30{width:%?60?%}.wt35{width:%?70?%}.wt40{width:%?80?%}.wt50{width:%?100?%}.wt60{width:%?120?%}.wt70{width:%?140?%}.wt80{width:%?160?%}.wt90{width:%?180?%}.wt100{width:%?200?%}.w120{width:%?240?%}.w150{width:%?300?%}.w160{width:%?320?%}.w180{width:%?360?%}\r\n/* 高度 */.h5{height:%?10?%}.h8{height:%?16?%}.h10{height:%?20?%}.h12{height:%?24?%}.h15{height:%?30?%}.h18{height:%?36?%}.h20{height:%?40?%}.h25{height:%?50?%}.h30{height:%?60?%}.h35{height:%?70?%}.h40{height:%?80?%}.h44{height:%?88?%}.h45{height:%?90?%}.h50{height:%?100?%}.h60{height:%?120?%}.h70{height:%?140?%}.h88{height:%?176?%}.h80{height:%?160?%}.h90{height:%?180?%}.h100{height:%?200?%}.h110{height:%?220?%}.h120{height:%?240?%}.h130{height:%?260?%}.h160{height:%?320?%}.h260{height:%?520?%}.h280{height:%?560?%}.h390{height:%?780?%}.ht100{height:100%}\r\n/* 行高 */.lh10{line-height:%?20?%}.lh20{line-height:%?40?%}.lh25{line-height:%?50?%}.lh30{line-height:%?60?%}.lh35{line-height:%?70?%}.lh40{line-height:%?80?%}.lh44{line-height:%?88?%}.lh50{line-height:%?100?%}.lh56{line-height:%?112?%}.lh60{line-height:%?120?%}.hg20{height:20%}.lh88{line-height:%?176?%}\r\n/* 边框圆角 */.radius2{border-radius:%?4?%}.radius4{border-radius:%?8?%}.radius6{border-radius:%?12?%}.radius10{border-radius:%?20?%}.radius15{border-radius:%?30?%}.radius20{border-radius:%?40?%}.radius28{border-radius:%?56?%}.radius50p{border-radius:50%}.rat4{border-top-left-radius:%?16?%;border-top-right-radius:%?16?%}\r\n/* 透明度 */.opt0{opacity:0}.opt88{opacity:.88}.opt50{opacity:.5}.opt33{opacity:.33}.opt{opacity:.15}\r\n/* 三角形 */.trangle{width:0;height:0;border-left:%?60?% solid transparent;border-right:%?60?% solid transparent;border-bottom:%?20?% solid #1b2637}.trangle_yellow{width:0;height:0;border-left:%?10?% solid transparent;border-right:%?10?% solid transparent;border-top:%?10?% solid #fec403}\r\n/* 字体渐变 */.linerColor{color:#416dff;background:-webkit-linear-gradient(top,#416dff,#464fff);background:linear-gradient(180deg,#416dff,#464fff);-webkit-background-clip:text;color:transparent}\r\n/* 去除chrome input默认背景 */uni-input:-webkit-autofill{background:transparent;-webkit-box-shadow:0 0 %?0?% %?2000?% transparent inset!important}.bshadowf5{box-shadow:0 %?10?% %?10?% #f5f5f5,0 %?-10?% %?10?% #f5f5f5,%?10?% 0 %?10?% #f5f5f5,%?-10?% 0 %?10?% #f5f5f5}\r\n/*清除ie的默认选择框样式清除，隐藏下拉箭头*/select{border:1px solid #eee;appearance:none;-moz-appearance:none;-webkit-appearance:none;background:transparent;color:#666}\r\n/* 不换行超出隐藏 */.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.overxy{overflow:hidden}.overx{overflow-x:hidden}.overxscroll{overflow-x:scroll}\r\n/* 其它 */.load-more{display:block;background-color:initial;padding-top:%?30?%;border-radius:%?8?%}.btn-default{width:100%;margin-left:auto;margin-right:auto;display:block;border-radius:%?4?%;text-align:center;outline:none;border:none;color:#fff;height:%?80?%;line-height:%?80?%;font-size:%?28?%}.bshadow5{box-shadow:0 %?10?% %?10?% #d4dbfc,0 %?-10?% %?10?% #d4dbfc,%?10?% 0 %?10?% #d4dbfc,%?-10?% 0 %?10?% #d4dbfc}.bshadow5_green{box-shadow:0 0 %?10?% #75c322}.bshadowf5{box-shadow:0 %?10?% %?10?% #f5f5f5,0 %?-10?% %?10?% #f5f5f5,%?10?% 0 %?10?% #f5f5f5,%?-10?% 0 %?10?% #f5f5f5}.bshadow10{box-shadow:0 %?10?% %?20?% rgba(231,233,241,.6),0 %?-10?% %?20?% rgba(231,233,241,.6),%?10?% 0 %?20?% rgba(231,233,241,.6),%?-10?% 0 %?20?% rgba(231,233,241,.6)}.copy{height:%?172?%;line-height:%?172?%;border-radius:%?86?%}.header{height:%?100?%;width:100%;top:0;\r\n\r\nleft:0;z-index:1000000}.header .back{display:inline-block;position:absolute;left:%?28?%;width:%?16?%;height:%?32?%\r\n\t/* background: url(/static/arrow_left.png) no-repeat center / 100% 100%; */}.header .txt{font-size:%?20?%}.arrow{width:%?12?%;height:%?22?%}.scan{width:%?80?%;height:%?80?%}.width10{width:%?60?%;height:%?60?%}.lb{left:%?-30?%;bottom:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.pos_r30t90{right:%?30?%;top:%?90?%}.pos_l0b0{bottom:0;left:0}.shade{left:5%;bottom:0;-webkit-transform:translateY(%?30?%);transform:translateY(%?30?%);border-radius:%?30?%;background:#79809b;z-index:-1}.zdx100{z-index:100}.zdx1000{z-index:1000}.my_layer{top:0;left:0;background:rgba(0,0,0,.5);z-index:999}.break-word{word-wrap:break-word}.nowrap{white-space:nowrap}\r\n/* 下划线 */.myline{position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?40?%;height:%?6?%;background:url(/static/line_blue.png) no-repeat 0 0/100% 100%}.bottom-space{height:%?100?%}.bdb_myblue{border-bottom:1px solid #3e536b}.ft10{font-size:%?20?%}.bdb2f{border-bottom:1px solid #15293d}.bd2f{border:1px solid #15293d}.bdl2f{border-left:1px solid #15293d}.bdt2f{border-top:1px solid #15293d}.w33{width:33%}body{font-size:%?28?%}.light{min-height:100vh;background:#f7f7fb!important;color:#0d1721;overflow-x:hidden\r\n  /* color字体颜色 */\r\n  /* 背景色 */\r\n  /* 边框颜色 */\r\n  /* margin外边距 */\r\n  /* padding内边距 */\r\n  /* 宽度百分比 */\r\n  /* 宽度upx */\r\n  /* 高度 */\r\n  /* 行高 */\r\n  /* 边框圆角 */\r\n  /* 透明度 */\r\n  /* 三角形 */\r\n  /* 字体渐变 */\r\n  /* 去除chrome input默认背景 */\r\n  /*清除ie的默认选择框样式清除，隐藏下拉箭头*/\r\n  /* 不换行超出隐藏 */\r\n  /* 其它 */\r\n  /* 下划线 */}.light uni-input{border:0;outline:0;\r\n  /* font-weight: bold; */color:#000}.light ::-webkit-input-placeholder{color:#ced6db}.light .b7c{color:#b7c7dc}.light .gray75{color:#363a40}.light .blue21{color:#217dc1}.light .gary0{color:#000}.light .gray91{color:#9195a1}.light .garyd{color:#dddede}.light .white{color:#fff}.light .nwhite{color:#0d1721}.light .gray{color:#8689b2}.light .gray_e{color:#0d1721}.light .gray9{color:#999}.light .gray7{color:#7286a5}.light .gray6{color:#666}.light .gray5{color:#5b6c87}.light .gray3{color:#333}.light .gray4{color:#aeb6bb}.light .gray45{color:#454545}.light .blue{color:#6d808e}.light .blue2{color:#1881d2}.light .blue3{color:#4a5a7a}.light .blue4{color:#8897ad}.light .red{color:#e27046}.light .red2{color:#ff5f56}.light .redColor{color:#d74e5a}.light .greenColor{color:#12b886}.light .blueColor{color:#3d80ce}.light .yellow{color:#ffb103}.light .green{color:#02c289}.light .purpel{color:#6c2fd3}.light .chengse{color:#cc704b}.light .color1{color:#728daf}.light .baseBg{background:#f2f5ff}.light .bgWhite{background:#fff}.light .bgRed{background:#e27046!important}.light .bgGray{background:#c7ced4}.light .bgF3{background:#f3f3f3}.light .bgShadow{box-shadow:0 0 %?10?% #e4dbdb}.light .bgGreen{background:#02c289!important}.light .bggray{background:#f7f7fb}.light .bgyellow{background:#ff9e00}.light .bgHeader{background:#fff}.light .bgBlue{background:#1881d2}.light .bgBlue2{background:#217dc1}.light .bgBlue3{background:#0b53bd!important}.light .bgred{background:#d74e5a}.light .bggreen{background:#12b886}.light .bgDark{background:#2c548c}.light .bgPart{background:#162633}.light .baseBg2{background:#e2e7eb}.light .baseBg3{background:#44708a}.light .bg_legal{background:#fff}.light .liner0{background:#7564ef}.light .liner1{background:#e6762c}.light .liner2{background:#419ff6}.light .liner3{background:#4aab73}.light .liner4{background:#5977f4}.light .bg1{background-color:#1c1734}.light .bg2{background-color:#061623}.light .bgPart{background:#fff}.light .bgBlack{background:#e1e1ea}.light .bgliner{background:-webkit-linear-gradient(left,#5bb5eb,#508ade);background:linear-gradient(90deg,#5bb5eb,#508ade)}.light .bdb_blue{border-bottom:1px solid #5d86d8}.light .bdb_e8{border-bottom:1px solid #e8ebee}.light .bdbf5{border-bottom:1px solid #f5f5f5}.light .bdb_f3{border-bottom:1px solid #f3f3f3}.light .bdt_f3{border-top:1px solid #f3f3f3}.light .bd_blue2{border:1px solid #71aed3}.light .bdb{border-bottom:1px solid #ddd}.light .bdb1f{border-bottom:1px solid #e2e7eb}.light .bdb_yellow{border-bottom:1px solid #ffb103}.light .bdbwhite{border-bottom:1px solid hsla(0,0%,100%,.2)}.light .bdb_blue3{border-bottom:1px solid #e2e7eb}.light .bdb27{border-bottom:1px solid #e2e7eb}.light .bdb_base{border-bottom:1px solid #102000}.light .bdr_white50{border-right:1px solid hsla(0,0%,44.3%,.2)}.light .bd_input{border:1px solid #ced6db}.light .bd_red{border:1px solid #c15465}.light .bdBlue{border:1px solid #217dc1}.light .bd_green{border:1px solid #4daa90}.light .bdr_input{border-right:1px solid #ced6db}.light .bdb_1e{border-bottom:1px solid #e2e7eb}.light .bd3a{border:1px solid #e1e1ea}.light .bdActive{border:1px solid #357ce1}.light .bor1{border:1px solid #ced6db}.light .bor2{border:1px solid #1881d2}.light .bor3{border:1px solid #02c289!important}.light .bor4{border:1px solid #e27046!important}.light .bor5{border-bottom:1px solid #e2e7eb!important}.light .bor6{border:1px solid #e5e5e5}.light .bdb_active{border-bottom:2px solid #3d80ce}.light .mt5{margin-top:%?10?%}.light .mb5{margin-bottom:%?10?%}.light .ml5{margin-left:%?10?%}.light .mr5{margin-right:%?10?%}.light .mt7{margin-top:%?14?%}.light .mt10{margin-top:%?20?%}.light .mt13{margin-top:%?26?%}.light .mb10{margin-bottom:%?20?%}.light .ml10{margin-left:%?20?%}.light .mr10{margin-right:%?20?%}.light .mt15{margin-top:%?30?%}.light .mt20{margin-top:%?40?%}.light .mb20{margin-bottom:%?40?%}.light .ml20{margin-left:%?40?%}.light .mr20{margin-right:%?40?%}.light .mt30{margin-top:%?60?%}.light .mb30{margin-bottom:%?60?%}.light .ml30{margin-left:%?60?%}.light .mr30{margin-right:%?60?%}.light .mt40{margin-top:%?80?%}.light .mt45{margin-top:%?90?%}.light .mb45{margin-bottom:%?90?%}.light .ml45{margin-left:%?90?%}.light .mr45{margin-right:%?90?%}.light .mt50{margin-top:%?100?%}.light .mt75{margin-top:%?150?%}.light .mt88{margin-top:%?176?%}.light .mt100{margin-top:%?200?%}.light .mtb10{margin-top:%?20?%;margin-bottom:%?20?%}.light .mlr5{margin-left:%?10?%;margin-right:%?10?%}.light .mlr10{margin-left:%?20?%;margin-right:%?20?%}.light .mtb20{margin-top:%?40?%;margin-bottom:%?40?%}.light .mlr20{margin-left:%?40?%;margin-right:%?40?%}.light .mtb30{margin-top:%?60?%;margin-bottom:%?60?%}.light .mlr30{margin-left:%?60?%;margin-right:%?60?%}.light .mtb45{margin-top:%?90?%;margin-bottom:%?90?%}.light .mlr45{margin-left:%?90?%;margin-right:%?90?%}.light .ptb{padding-top:%?176?%;padding-bottom:%?200?%}.light .pt5{padding-top:%?10?%}.light .pb5{padding-bottom:%?10?%}.light .pl5{padding-left:%?10?%}.light .pr5{padding-right:%?10?%}.light .pt10{padding-top:%?20?%}.light .pl10{padding-left:%?20?%}.light .pr10{padding-right:%?20?%}.light .pb10{padding-bottom:%?20?%}.light .pl15{padding-left:%?30?%}.light .pr15{padding-right:%?30?%}.light .pb15{padding-bottom:%?30?%}.light .pt20{padding-top:%?40?%}.light .pb20{padding-bottom:%?40?%}.light .pl20{padding-left:%?40?%}.light .pr20{padding-right:%?40?%}.light .pl30{padding-left:%?60?%}.light .pr30{padding-right:%?60?%}.light .pt30{padding-top:%?60?%}.light .pb30{padding-bottom:%?60?%}.light .pl40{padding-left:%?80?%}.light .pr40{padding-right:%?80?%}.light .pt40{padding-top:%?80?%}.light .pb40{padding-bottom:%?80?%}.light .pt45{padding-top:%?90?%}.light .pb45{padding-bottom:%?90?%}.light .pt50{padding-top:%?100?%}.light .pb50{padding-bottom:%?100?%}.light .pl50{padding-left:%?100?%}.light .pr50{padding-right:%?100?%}.light .pt60{padding-top:%?120?%}.light .pb60{padding-bottom:%?120?%}.light .pt88{padding-top:%?176?%}.light .pb100{padding-bottom:%?200?%}.light .pb150{padding-bottom:%?300?%}.light .pt100{padding-top:%?200?%}.light .ptb5{padding-bottom:%?10?%;padding-top:%?10?%}.light .ptb8{padding-bottom:%?16?%;padding-top:%?16?%}.light .plr8{padding-left:%?16?%;padding-right:%?16?%}.light .ptb10{padding-bottom:%?20?%;padding-top:%?20?%}.light .plr10{padding-left:%?20?%;padding-right:%?20?%}.light .ptb15{padding-top:%?30?%;padding-bottom:%?30?%}.light .plr15{padding-left:%?30?%;padding-right:%?30?%}.light .plr20{padding-left:%?40?%;padding-right:%?40?%}.light .ptb20{padding-top:%?40?%;padding-bottom:%?40?%}.light .plr30{padding-left:%?60?%;padding-right:%?60?%}.light .ptb30{padding-top:%?60?%;padding-bottom:%?60?%}.light .plr40{padding-left:%?80?%;padding-right:%?80?%}.light .ptb40{padding-top:%?80?%;padding-bottom:%?80?%}.light .ptb45{padding-top:%?90?%;padding-bottom:%?90?%}.light .plr45{padding-left:%?90?%;padding-right:%?90?%}.light .plr50{padding-left:%?100?%;padding-right:%?100?%}.light .ptb50{padding-bottom:%?100?%;padding-top:%?100?%}.light .ptb60{padding-bottom:%?120?%;padding-top:%?120?%}.light .w20{width:20%}.light .w25{width:25%}.light .w30{width:30%}.light .w35{width:35%}.light .w40{width:40%}.light .w45{width:45%}.light .w48{width:48%}.light .w50{width:50%}.light .w65{width:65%}.light .w75{width:75%}.light .w80{width:80%}.light .w85{width:85%}.light .w90{width:90%}.light .w95{width:95%}.light .w100{width:100%}.light .wt5{width:%?10?%}.light .wt8{width:%?16?%}.light .wt10{width:%?20?%}.light .wt12{width:%?24?%}.light .wt15{width:%?30?%}.light .wt18{width:%?36?%}.light .wt20{width:%?40?%}.light .wt25{width:%?50?%}.light .wt30{width:%?60?%}.light .wt35{width:%?70?%}.light .wt40{width:%?80?%}.light .wt50{width:%?100?%}.light .wt60{width:%?120?%}.light .wt70{width:%?140?%}.light .wt80{width:%?160?%}.light .wt90{width:%?180?%}.light .wt100{width:%?200?%}.light .w120{width:%?240?%}.light .w150{width:%?300?%}.light .w160{width:%?320?%}.light .w180{width:%?360?%}.light .h5{height:%?10?%}.light .h8{height:%?16?%}.light .h10{height:%?20?%}.light .h12{height:%?24?%}.light .h15{height:%?30?%}.light .h18{height:%?36?%}.light .h20{height:%?40?%}.light .h25{height:%?50?%}.light .h30{height:%?60?%}.light .h35{height:%?70?%}.light .h40{height:%?80?%}.light .h44{height:%?88?%}.light .h50{height:%?100?%}.light .h60{height:%?120?%}.light .h70{height:%?140?%}.light .h88{height:%?176?%}.light .h80{height:%?160?%}.light .h90{height:%?180?%}.light .h100{height:%?200?%}.light .h110{height:%?220?%}.light .h120{height:%?240?%}.light .h130{height:%?260?%}.light .h160{height:%?320?%}.light .h260{height:%?520?%}.light .h280{height:%?560?%}.light .h390{height:%?780?%}.light .ht100{height:100%}.light .lh10{line-height:%?20?%}.light .lh20{line-height:%?40?%}.light .lh25{line-height:%?50?%}.light .lh30{line-height:%?60?%}.light .lh35{line-height:%?70?%}.light .lh40{line-height:%?80?%}.light .lh44{line-height:%?88?%}.light .lh50{line-height:%?100?%}.light .lh56{line-height:%?112?%}.light .lh60{line-height:%?120?%}.light .hg20{height:20%}.light .lh88{line-height:%?176?%}.light .radius2{border-radius:%?4?%}.light .radius4{border-radius:%?8?%}.light .radius6{border-radius:%?12?%}.light .radius10{border-radius:%?20?%}.light .radius15{border-radius:%?30?%}.light .radius20{border-radius:%?40?%}.light .radius28{border-radius:%?56?%}.light .radius50p{border-radius:50%}.light .rat4{border-top-left-radius:%?16?%;border-top-right-radius:%?16?%}.light .opt0{opacity:0}.light .opt88{opacity:.88}.light .opt50{opacity:.5}.light .opt33{opacity:.33}.light .opt{opacity:.15}.light .trangle{width:0;height:0;border-left:%?60?% solid transparent;border-right:%?60?% solid transparent;border-bottom:%?20?% solid #1b2637}.light .trangle_yellow{width:0;height:0;border-left:%?10?% solid transparent;border-right:%?10?% solid transparent;border-top:%?10?% solid #fec403}.light .linerColor{color:#416dff;background:-webkit-linear-gradient(top,#416dff,#464fff);background:linear-gradient(180deg,#416dff,#464fff);-webkit-background-clip:text;color:transparent}.light uni-input:-webkit-autofill{background:transparent;-webkit-box-shadow:0 0 %?0?% %?2000?% transparent inset!important}.light .bshadowf5{box-shadow:0 %?10?% %?10?% #f5f5f5,0 %?-10?% %?10?% #f5f5f5,%?10?% 0 %?10?% #f5f5f5,%?-10?% 0 %?10?% #f5f5f5}.light select{border:1px solid #eee;appearance:none;-moz-appearance:none;-webkit-appearance:none;background:transparent;color:#666}.light .ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.light .overxy{overflow:hidden}.light .overx{overflow-x:hidden}.light .overxscroll{overflow-x:scroll}.light .load-more{display:block;background-color:initial;padding-top:%?30?%;border-radius:%?8?%}.light .btn-default{width:100%;margin-left:auto;margin-right:auto;display:block;border-radius:%?4?%;text-align:center;outline:none;border:none;color:#fff;height:%?80?%;line-height:%?80?%;font-size:%?28?%}.light .bshadow5{box-shadow:0 %?10?% %?10?% #d4dbfc,0 %?-10?% %?10?% #d4dbfc,%?10?% 0 %?10?% #d4dbfc,%?-10?% 0 %?10?% #d4dbfc}.light .bshadow5_green{box-shadow:0 0 %?10?% #75c322}.light .bshadowf5{box-shadow:0 %?10?% %?10?% #f5f5f5,0 %?-10?% %?10?% #f5f5f5,%?10?% 0 %?10?% #f5f5f5,%?-10?% 0 %?10?% #f5f5f5}.light .bshadow10{box-shadow:0 %?10?% %?20?% rgba(231,233,241,.6),0 %?-10?% %?20?% rgba(231,233,241,.6),%?10?% 0 %?20?% rgba(231,233,241,.6),%?-10?% 0 %?20?% rgba(231,233,241,.6)}.light .copy{height:%?172?%;line-height:%?172?%;border-radius:%?86?%}.light .header{width:100%;top:0;\r\n\r\nleft:0;z-index:1000000}.light .header .back{display:inline-block;position:absolute;left:%?28?%;width:%?16?%;height:%?32?%\r\n  /* background: url(/static/arrow_left.png) no-repeat center / 100% 100%; */}.light .header .txt{font-size:%?20?%}.light .arrow{width:%?12?%;height:%?22?%}.light .scan{width:%?80?%;height:%?80?%}.light .width10{width:%?60?%;height:%?60?%}.light .lb{left:%?-30?%;bottom:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.light .pos_r30t90{right:%?30?%;top:%?90?%}.light .pos_l0b0{bottom:0;left:0}.light .shade{left:5%;bottom:0;-webkit-transform:translateY(%?30?%);transform:translateY(%?30?%);border-radius:%?30?%;background:#79809b;z-index:-1}.light .zdx100{z-index:100}.light .zdx1000{z-index:1000}.light .my_layer{top:0;left:0;background:rgba(0,0,0,.5);z-index:999}.light .break-word{word-wrap:break-word}.light .nowrap{white-space:nowrap}.light .myline{position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?40?%;height:%?6?%;background:url(/static/line_blue.png) no-repeat 0 0/100% 100%}.light .bottom-space{height:%?100?%}.light .bdb_myblue{border-bottom:1px solid #e2e7eb}.light .ft10{font-size:%?20?%}.light .bdb2f{border-bottom:1px solid #f7f7fb}.light .bd2f{border:1px solid #f7f7fb}.light .bdl2f{border-left:1px solid #ccd5da}.light .bdt2f{border-top:1px solid #f7f7fb}.light .uni-drawer > .uni-drawer-content{background:#fff!important}.gray_e.light{color:#0d1721}.vh100{min-height:100%}uni-page-body{\r\n\t/* background: #061623 ; */}.status_bar{height:0;width:100%;background-color:#102030}.top_view{height:0;width:100%;position:fixed;background-color:#102030;top:0;z-index:999}uni-view{box-sizing:border-box!important}uni-view{box-sizing:border-box;font-size:%?24?%;line-height:1.2}.uni-padding-wrap{width:100%}.uni-toast{z-index:10000!important}.uni-modal__btn{color:red!important}', ""]),
            e.exports = t
    },
    "46ea": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("778c")
            , a = n.n(i);
        for (var r in i)
            "default" !== r && function(e) {
                n.d(t, e, (function() {
                        return i[e]
                    }
                ))
            }(r);
        t["default"] = a.a
    },
    "4ca6": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        n("4de4"),
            n("b680"),
            n("ac1f"),
            n("843c"),
            n("841c");
        var a = i(n("5530"));
        n("e260"),
            n("e6cf"),
            n("cca6"),
            n("a79d"),
            n("8257"),
            n("1c31");
        var r = i(n("e143"))
            , o = i(n("75ab"))
            , z = i(n("75ab"))
            , s = i(n("64fa"))
            , l = i(n("e4f9"))
            , c = i(n("5c07"))
            , d = i(n("e414"))
            , u = i(n("7aca"))
            , p = i(n("269b"))
            , g = window.location.protocol
            , f = window.location.host
            , h = g + "//" + f
            , m = (window.location.pathname,
            window.location.search,
            h);
        r.default.config.productionTip = !1,
            o.default.mpType = "app",
            r.default.prototype.$store = c.default,
            r.default.prototype.$utils = s.default,
            r.default.prototype.$MD5 = l.default,
            r.default.prototype._i18n = d.default,
            r.default.prototype.$socket_api = m,
            r.default.prototype.$socket = u.default,
            r.default.prototype.$socketio = p.default,
            r.default.filter("filterDecimals", (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                        , n = e - 0
                        , i = t - 0
                        , a = "1"
                        , r = a.padEnd(i + 1, 0) - 0
                        , o = s.default.accMul(n, r);
                    return (Math.floor(o) / r).toFixed(i)
                }
            ));
        var b = new r.default((0,
            a.default)((0,
            a.default)({}, o.default), {}, {
            i18n: d.default,
            store: c.default
        }));
        b.$mount()
    },
    "556b": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                scsj: "Überbrückungszeit",
                a37: "Erhalte die Belohnung leicht",
                a33: "Stornierung wird abgezogen",
                a32: "Gesamtzins",
                a31: "Anzahl der eingezahlten Münzen",
                a30: "Gesperrter Positionsdatensatz",
                a29: "Geschätztes Gesamteinkommen",
                a28: "Bergbau ist einfacher",
                a27: "Bergbauschatz",
                a26: "Sperrzeit",
                a25: "Himmel",
                a24: "Japanisches Yen-Interesse",
                a23: "Referenz-Annualisierung für die letzten 3 Tage",
                a22: "Position sperren, um Münzen zu verdienen",
                a21: "Versprechen stornieren",
                a20: "Ablaufzeit",
                a19: "Verpfändungszeit",
                a18: "Auszugebender Betrag",
                a17: "Projektnummer",
                a16: "Versprechen",
                a15: "Kündigen Sie die Verpfändung und geben Sie den Kapitalbetrag zurück, es können keine Einnahmen erzielt werden",
                a14: "Unzureichend",
                a13: "Wallet Balance",
                a12: "Pfandbetrag",
                a11: "Versprechen",
                a10: "Token",
                a9: "Die Ausgabemenge wird in einen äquivalenten Wert umgewandelt",
                a8: "Geschätzte Ausgabemenge",
                a7: "Gesamtumsatz",
                a6: "Mehrere Renditen erzielen",
                a5: "Einzahlung",
                a4: "Mobiles Versprechen",
                a3: "Der Inhaber kann das verpfändete Einkommen genießen",
                a36: "Bank zur Eröffnung eines Überweisungskontos",
                a35: "Bankkartennummer der Überweisung",
                a34: "Überweisungsname",
                oldpwd: "Bitte geben Sie das alte Passwort ein",
                zxkf: "Online Kundenservice",
                a2: "muss bezahlen",
                a1: "Abonnementwährung",
                a0: "Abzug des Entzugs",
                dqyuee: "Laufende Bilanz",
                download: "App herunterladen",
                czsl: "Menge der Ladung",
                qbdz: "Adresse laden",
                enterqbdz: "Bitte geben Sie die Ladeadresse ein",
                tjsh: "Vorlage zur Überprüfung",
                sb01: "Die Antragsfrist hängt von der Qualität der Übermittlung der Daten ab.",
                sb02: "Ergebnisse der Anwendung",
                sb03: "Nachdem Sie die Bestätigungs-E-Mail erhalten haben, senden Sie entsprechende Informationen gemäß der E-Mail",
                sb04: "Einreichung",
                sb05: "Anmeldung in der Währung",
                sb06: "Anwendung",
                sb07: "Prozess der Anwendung",
                sb08: "Bewerben Sie sich",
                sb09: "Hoo hält sich für alles im Interesse der Kunden und setzt die Interessen der Nutzer an erster Stelle. Jetzt suchen wir qualitativ hochwertige Projekte (Währungen), um die langfristige Unterstützung der Kunden zurückzugeben.Bei hoher Qualität Währung, kaufen Wertwährung, nur Hoo wählen!",
                ksgt: "Schnelle Kommunikation",
                sbsq: "Anwendung in Währung",
                qrszfpz: "Bitte geben Sie den Zahlungsbeleg ein",
                zfpz: "Gutschein für Zahlungen",
                dqsy: "Laufende Einnahmen",
                ygsy: "Geschätzte Einnahmen",
                rgcz: "Betrieb der Abonnements",
                srrgsl: "Menge des Eingangsbeitrags",
                kdh: "Cabriolet",
                gw: "Offizielle Website",
                bps: "weißes Papier",
                sgzq: "Zyklus der Abonnements",
                yr: "Vorwärmung",
                sg: "für den Kauf",
                js: "Ende",
                xmxq: "Details des Projekts",
                rg: "Abonnement",
                ieo: "Abonnement IEO",
                zt: "Zustand",
                fhjg: "Preis der Emission",
                dqsj: "Datum der Fälligkeit"
            },
                (0,
                    o.default)(a, "scsj", "Zeit sperren"),
                (0,
                    o.default)(a, "yjsy", "Erwartete Einnahmen"),
                (0,
                    o.default)(a, "zxscsl", "Minimale Sperrmenge"),
                (0,
                    o.default)(a, "syl", "Rate der Rendite"),
                (0,
                    o.default)(a, "sc", "Sperren Sie ab"),
                (0,
                    o.default)(a, "ts", "Tage"),
                (0,
                    o.default)(a, "fhzl", "Ausgabe insgesamt"),
                (0,
                    o.default)(a, "jssj", "Die Endzeit"),
                (0,
                    o.default)(a, "yjs", "Es ist vorbei."),
                (0,
                    o.default)(a, "wks", "Nicht gestartet"),
                (0,
                    o.default)(a, "jxz", "haben in der Hand"),
                (0,
                    o.default)(a, "scz", "Im Lager eingeschlossen"),
                (0,
                    o.default)(a, "ydq", "Abgelaufene"),
                (0,
                    o.default)(a, "nodata", "keine Daten"),
                (0,
                    o.default)(a, "nomore", "Keine Daten mehr"),
                (0,
                    o.default)(a, "more", "Laden Sie mehr"),
                (0,
                    o.default)(a, "qbye", "Saldo der Brieftasche"),
                (0,
                    o.default)(a, "scgz", "Sperre in der Regel"),
                (0,
                    o.default)(a, "sclb", "Liste sperren"),
                (0,
                    o.default)(a, "scwk", "Bergbau auf Schleusen"),
                (0,
                    o.default)(a, "sly", "Rate der Rendite"),
                (0,
                    o.default)(a, "yebz", "Tut mir leid, dein Kredit ist knapp."),
                (0,
                    o.default)(a, "mhydd", "Zweiter Vertrag"),
                (0,
                    o.default)(a, "gmj", "Der Kaufpreis"),
                (0,
                    o.default)(a, "cjj", "Preis der Transaktion"),
                (0,
                    o.default)(a, "yjyk", "Geschätzte Gewinne und Verluste"),
                (0,
                    o.default)(a, "yk", "Gewinn und Verlust"),
                (0,
                    o.default)(a, "djs", "Zählen nach unten"),
                a),
            login: {
                l_mobile: "telefonisch anmelden",
                l_email: "E-Mail-Login",
                p_email: "Bitte geben Sie Ihre E-Mail-Adresse ein",
                p_mobile: "Bitte Telefonnummer eingeben",
                p_pwd: "Bitte Passwort eingeben",
                p_confirmPwd: "Bitte bestätigen Sie Ihr Passwort",
                p_confirmtradePwd: "Transaktions Passwort",
                p_vcode: "Bitte Bestätigungscode eingeben",
                get_code: "Bestätigungscode erhalten",
                rem_pwd: "Passwort merken",
                login: "Einloggen",
                noaccount: "Hast du noch keinen btcruby Account? ",
                register: "Eingetragen",
                forget_pwd: "Onlineservice",
                p_taccount: "Bitte geben Sie eine gültige Telefonnummer ein",
                p_temail: "Bitte geben Sie Ihre E-Mail-Adresse ein",
                p_pwderr: "Passworteingabe ist falsch",
                l_success: "Anmeldung erfolgreich",
                r_noedit: "Kann nach Registrierung nicht geändert werden",
                r_mobile: "Registrieren Sie Ihr Telefon",
                r_email: "E-Mail Registrierung",
                r_hasaccount: "Habe schon einen btcruby Account",
                r_next: "Nächster",
                r_sms: "SMS-Bestätigung",
                r_smsemail: "E-Mail-Verifizierung",
                r_pmobilecode: "Bitte geben Sie den Telefon-Bestätigungscode ein",
                r_pemailcode: "Bitte geben Sie den E-Mail-Bestätigungscode ein",
                r_send: "senden",
                p_len: "Passwortlänge beträgt 6 ~ 16 Bit",
                p_notsame: "Passworteingabe ist inkonsistent",
                p_simple: "Das Passwort ist zu einfach, bitte erneut eingeben",
                p_inputagain: "Passworteingabe ist inkonsistent, bitte erneut eingeben",
                p_first: "Bitte lesen Sie zuerst die Nutzungsvereinbarung und stimmen Sie ihr zu",
                p_invitecode: "Einladungscode (kann leer sein)",
                p_inviteInput: "Bitte geben Sie den Einladungscode ein",
                p_agree: "Genau",
                p_private: "Benutzervereinbarung und Datenschutzrichtlinie",
                p_set: "Die Einstellungen",
                p_setPwd: "Passwort festlegen",
                f_mobile: "Handy-Wiederherstellung",
                f_email: "Mailbox abgerufen",
                e_mb: "Telefonnummer",
                e_email: "Briefkasten",
                e_pwd: "Passwort ändern",
                e_chongzhi: "Passwort zurücksetzen",
                e_dealPwd: "Transaktionskennwort ändern",
                e_pdeal: "Bitte geben Sie das Transaktionskennwort ein",
                e_pdealerr: "Das Transaktionskennwort ist falsch eingegeben",
                e_pdealConfrim: "Bitte bestätigen Sie das Transaktionspasswort",
                e_confrim: "bestätigen",
                e_confrim2: "bestimmen",
                security: "Sicherheitscenter",
                s_loginpwd: "Passwort",
                s_dealpwd: "Transaktions Passwort",
                s_edit: "ändern"
            },
            about: {
                abt: "Über uns",
                concat: "kontaktiere uns",
                privat: "Datenschutz-Bestimmungen",
                theme: "Nacht-Modus"
            },
            collect: {
                method: "Bezahlverfahren",
                name: "tatsächlicher Name",
                p_name: "Bitte geben Sie Ihren richtigen Namen ein",
                bank: "Kontoeröffnungsbank",
                p_bank: "Bitte geben Sie die Eröffnungsbank ein",
                no: "Bankkartennummer",
                p_no: "Bitte geben Sie die Bankkartennummer ein",
                alipay: "Alipay-Nummer",
                p_alipay: "Bitte geben Sie Ihr Alipay-Konto ein",
                nick: "WeChat Spitzname",
                p_nick: "Bitte geben Sie den WeChat-Spitznamen ein",
                wechat: "WeChat-Konto",
                p_wechat: "Bitte geben Sie ein WeChat-Konto ein",
                wechatCode: "WeChat-Sammlungscode",
                alipayCode: "Alipay Collection Code",
                up_wechatCode: "Bitte laden Sie den WeChat-Zahlungscode hoch",
                up_alipayCode: "Bitte laden Sie den Alipay-Zahlungscode hoch",
                cardno: "Identifikationsnummer",
                p_cardno: "Bitte Identifikationsnummer eingeben",
                up_card: "ID-Foto hochladen",
                up_cardz: "Laden Sie die Vorderseite des Personalausweises hoch",
                up_cardf: "Upload ID Card Reverse",
                up_cardhand: "Handheld-ID-Karte hochladen"
            },
            bind: {
                bindAddr: "Verbindliche Abhebungsadresse",
                cur_select: "Derzeit ausgewählte Währung",
                addr: "Abhebungsadresse",
                codeauth: "Mein Autorisierungscode",
                codetip: "Wenn Sie einen Benutzer als Agenten hinzufügen, müssen Sie den Autorisierungscode des Benutzers überprüfen",
                p_addr: "Bitte geben Sie die Abhebungsadresse ein",
                code: "Verifizierungs-Schlüssel",
                bind: "Bindung",
                sendSuccess: "Erfolgreich gesendet",
                bindOk: "Bindung erfolgreich",
                tuiguang: "Mein Promotion-Code",
                codes: "Aktionscode",
                tip: "Scannen Sie das QR-Code-Muster oben oder geben Sie den Promotion-Code ein, um die Registrierung zu bestätigen",
                liantype: "Kettentyp"
            },
            authentication: {
                person: "Persönliches Zentrum",
                renzheng: "Authentifizierung",
                gaoji: "Erweiterte Überprüfung",
                go: "Zur Zertifizierung gehen",
                ing: "in Überprüfung",
                has: "verifiziert",
                rz_tip: "Das Auszahlungslimit kann nach der Authentifizierung erhöht werden",
                name: "Name",
                account: "Kontonummer",
                zj: "Lizenznummer"
            },
            home: {
                legal: "Fiat-Währungstransaktionen",
                zhichi: "Unterstützung von BTC, USDT usw.",
                lever: "Perpetual Contract Transaction",
                news: "Nachrichtenzentrum",
                security: "Sicher und vertrauenswürdig",
                leader: "Die weltweit führende Handelsplattform für digitale Vermögenswerte",
                updowns: "Steigende Liste",
                name: "Name",
                new_price: "Letzter Preis",
                fu: "Zitat ändern",
                p_login: "Bitte einloggen",
                welcome: "Willkommen bei btcruby",
                myshop: "mein Geschäft",
                myshare: "Mein Share Link",
                logout: "Ausloggen",
                detail: "Einzelheiten",
                up: "Laden hochziehen",
                nomore: "Noch keine Daten mehr",
                norecord: "Keine Aufzeichnungen",
                loading: "Wird geladen",
                team: "mein Team",
                fast: "Schnellmünzen kaufen",
                micro: "Zweite Vertragstransaktion"
            },
            market: {
                market: "Zitate",
                volume: "24H Betrag",
                home: "Zuhause"
            },
            trade: {
                trade: "Münzwährungstransaktion",
                buy: "Kaufen",
                sell: "Verkaufen",
                limit: "Limitpreis",
                shi: "Marktpreis",
                cancel: "stornieren",
                best: "Handel zum aktuell besten Preis",
                num: "Menge",
                use: "Verfügbar",
                amout: "Transaktionshöhe",
                price: "Preis",
                time: "Zeit",
                bibi: "Münzen",
                all: "Alle",
                back: "Widerrufen",
                dui: "Handelspaar",
                notenough: "Mangelhaftes Gleichgewicht",
                notbest: "Derzeit gibt es keinen besten Preis",
                p_price: "Bitte geben Sie den Preis ein",
                p_num: "Bitte geben Sie die Menge ein",
                delegate: "Aktuelle Provision",
                all_delegate: "Alle in Auftrag gegeben",
                his_delegate: "Geschichtskommission",
                has_done: "abgeschlossen",
                has_cancel: "Abgesagt",
                has_pay: "Bereits bezahlt",
                fee: "Bearbeitungsgebühr",
                handnum: "Hände handeln",
                p_handnum: "Bitte geben Sie die Anzahl der Hände ein",
                balance: "Balance",
                buy_duo: "Kaufen (lange gehen)",
                sell_kong: "Verkaufen (kurz)",
                pankou: "Behinderung",
                chicang: "Position",
                types: "Arten von",
                operate: "Betriebs",
                pingcang: "Position schließen",
                chedan: "Bestellung stornieren",
                duo: "Lange",
                kong: "Kurz",
                hands: "Viele",
                hand: "Hand",
                times: "mehrere",
                money: "Spanne",
                confrim_ping: "„Sind Sie sicher, die Position zu schließen? ",
                confrim_order: "Bestellung bestätigen",
                confrim_chedan: "Stornierung bestätigen? ",
                p_times: "Bitte wählen Sie ein Vielfaches",
                p_hands: "Bitte Losgröße auswählen oder eingeben",
                p_delprice: "Bitte geben Sie den Provisionspreis ein",
                p_notless: "Die Anzahl der eingegebenen Hände darf nicht niedriger sein als",
                p_notmore: "Die Anzahl der eingegebenen Hände darf nicht höher sein als",
                delegate_price: "Sendungspreis",
                price_cang: "Eröffnungskurs",
                price_zhiying: "Take Profit Price",
                num_zhehe: "Umgerechnete Menge",
                price_cur: "Derzeitiger Preis",
                price_lose: "Stop Loss Price",
                can_money: "Verfügbare Spanne",
                time_start: "Öffnungszeit",
                geye_fee: "Übernachtungsgebühr",
                dealtype: "Art der Transaktion"
            },
            lever: {
                delegating: "Anvertraut",
                dealing: "in Transaktion",
                pingcanging: "Position schließen",
                hasping: "Geschlossene Position",
                hasback: "Bestellung wurde storniert",
                risk: "Risikorate",
                totalyk: "Gesamtgewinn und -verlust von Positionen",
                yijian: "Position mit einem Klick schließen",
                setys: "Gewinn setzen und Verlust stoppen",
                profit: "Erwarteter Gewinn",
                lose: "Erwarteter Verlust",
                price_zhiying: "Take Profit Price",
                price_lose: "Stop Loss Price",
                all_ping: "Alle Positionen schließen",
                duo_ping: "Nur flache und mehr Bestellungen",
                kong_ping: "Nur kurze Bestellungen schließen"
            },
            assets: (r = {
                trade: "Münzen",
                lever: "Ewiger Vertrag",
                legal: "Fiat Währung",
                micro: "Zweiter Vertrag",
                manage: "Finanzverwaltung",
                tradeacc: "Währungskonto",
                leveracc: "Ewiges Vertragskonto",
                legalacc: "Fiat-Währungskonto",
                microacc: "Zweites Vertragskonto",
                zhehe: "Gefaltet",
                zhehecny: "Umgerechnetes Gesamtvermögen",
                lock: "einfrieren",
                assets: "Vermögenswerte",
                records: "Finanzunterlagen",
                charge: "Aufladen",
                mention: "Rückzug",
                transfer: "Transfer",
                record: "Aufzeichnung",
                cur_coin: "Aktuelle Währung",
                addr_charge: "Einzahlungsadresse",
                coypaddr: "Adresse kopieren",
                c_tip1: "Laden Sie nichts an die oben angegebene Adresse auf",
                c_tip2: "Andernfalls werden die Vermögenswerte nicht zurückgefordert",
                c_tip3: "Die Einzahlung unterstützt nur die einfache Versandmethode. Die Einzahlung mit anderen Methoden kann nicht vorübergehend gebucht werden. Bitte haben Sie Verständnis",
                c_tip4: "Nachdem Sie die oben angegebene Adresse aufgeladen haben, müssen Sie den gesamten Netzwerkknoten bestätigen. Nach 1 Netzwerkbestätigung wird dieser gutgeschrieben und 6 Netzwerkbestätigungen können Münzen abheben",
                c_tip5: "Mindestaufladebetrag",
                c_tip6: "Weniger als der Mindestbetrag aufladen wird nicht gebucht und kann nicht zurückgegeben werden",
                c_tip7: "Ihre Ladeadresse ändert sich nicht häufig, Sie können sie aufladen. Wenn sich etwas ändert, werden wir unser Bestes tun, um Sie über Online-Ankündigungen oder E-Mails zu benachrichtigen",
                c_tip8: "Bitte bestätigen Sie die Sicherheit Ihres Computers und Browsers, um zu verhindern, dass Informationen manipuliert werden oder durchgesickert sind",
                copy_success: "Kopieren erfolgreich",
                copy_err: "Kopieren fehlgeschlagen",
                mentionaddr: "Abhebungsadresse",
                paypwd: "Bitte geben Sie das Transaktionspasswort ein",
                p_paypwd: "Bitte geben Sie das Transaktionspasswort ein",
                p_addr: "Bitte richten Sie zuerst Ihre Abhebungsadresse ein"
            },
                (0,
                    o.default)(r, "mention", "Rückzug"),
                (0,
                    o.default)(r, "minnum", "Mindestauszahlungsbetrag"),
                (0,
                    o.default)(r, "recivenum", "Ankunftsmenge"),
                (0,
                    o.default)(r, "p_minnum", "Bitte geben Sie den Auszahlungsbetrag ein"),
                (0,
                    o.default)(r, "transfernum", "Überweisungsbetrag"),
                (0,
                    o.default)(r, "p_transfernum", "Bitte geben Sie den Überweisungsbetrag ein"),
                (0,
                    o.default)(r, "from", "Von"),
                (0,
                    o.default)(r, "to", "zu"),
                r),
            legal: {
                legal: "Fiat Währung",
                ibuy: "Ich möchte kaufen",
                isell: "Ich möchte verkaufen",
                price: "Stückpreis",
                limit: "Grenze",
                buy: "Kaufen",
                sell: "verkaufen",
                anprice: "Nach Preis",
                annum: "Nach Menge",
                pl: "bitte kommen Sie herein",
                amount: "Menge",
                num: "Menge",
                allmoney: "Gesamttransaktionsbetrag",
                autocancel: "Automatisch abbrechen",
                do: "Eine Bestellung aufgeben",
                p_amout: "Bitte geben Sie den Betrag ein",
                coin: "Währung",
                list: "Transaktionen Aufzeichnung",
                t_tip1: "Bitte zahlen Sie den Händler rechtzeitig",
                t_tip2: "Bitte haben Sie etwas Geduld und warten Sie, bis die andere Partei bezahlt",
                t_tip3: "Ich bestätige, dass ich die andere Partei nicht bezahlt habe"
            },
            store: {
                myshop: "mein Geschäft",
                regtime: "Registrierungszeit",
                belongcoin: "Zur gesetzlichen Währung gehören",
                entershop: "betritt einen Laden",
                rzshop: "Zertifizierter Händler",
                fabu: "Freisetzung",
                allorder: "Montageauftrag",
                thirtyorder: "30 Tage zu bestellen ",
                doneorder: "Bestellung abschließen",
                donelv: "Die Abschlussrate",
                renzhengmobile: "Mobile Authentifizierung",
                renzhengauth: "Verifiziert",
                renzhenghigh: "Fortgeschrittene Zertifizierung",
                notdone: "rückgängig machen",
                done: "abgeschlossen",
                yichang: "abnormal",
                lowershelf: "Von der Stange",
                protection: "Rechte verteidigen",
                apply: "Rechtsschutz beantragen",
                back: "abheben",
                lookorder: "prüfe die Reihenfolge",
                minnum: "Mindesttransaktionsvolumen",
                maxnum: "Maximales Transaktionsvolumen",
                p_payment: "Bitte Zahlungsart auswählen",
                p_coin: "Bitte wählen Sie eine Währungseinheit",
                p_price: "Bitte geben Sie den Stückpreis ein",
                p_min: "Bitte geben Sie das minimale Transaktionsvolumen ein",
                p_max: "Bitte geben Sie das maximale Transaktionsvolumen ein",
                ithink: "lass mich nochmal nachdenken",
                makeyichang: "Bestätigen Sie die Markierung als abnormal",
                alipay: "Alipay",
                wechat: "WeChat",
                bank: "Bankkarte",
                t_minmax: "Das maximale Transaktionsvolumen darf nicht geringer sein als das minimale Transaktionsvolumen",
                mysell: "Mein Verkauf",
                mybuy: "Mein Kauf",
                orderlist: "Bestellunterlagen",
                orderstatus: "Bestellstatus",
                chongzhi: "Zurücksetzen",
                p_pay: "bitte zahlen",
                p_waitpay: "Ausstehende Zahlung",
                t_pay: "Bitte zahlen Sie den Verkäufer rechtzeitig",
                t_waitpay: "Bitte haben Sie etwas Geduld und warten Sie, bis die andere Partei bezahlt",
                t_paycancel: "Die Bestellung wurde storniert, Zahlungsinformationen können nicht angezeigt werden",
                t_havepay: "Bestellung wurde bezahlt",
                t_hasdone: "Bestellung wurde abgeschlossen",
                call: "Kontaktieren Sie die andere Partei",
                collectcode: "Quittungs-QR-Code",
                collectper: "Zahlungsempfänger",
                payper: "Käufer",
                collectacc: "Empfangskonto",
                paycancode: "Zahlungsreferenznummer",
                dotime: "Bestellzeitpunkt",
                t_self: "Bitte benutze mich",
                t_transfer: "Überweisen Sie selbst auf das oben genannte Konto",
                t_tip: "Notieren Sie BTC, USDT und andere Informationen während des Überweisungsprozesses nicht, um Probleme wie das Abfangen von Überweisungen und das Einfrieren von Bankkarten zu vermeiden",
                cancelorder: "Bestellung stornieren",
                ipay: "Ich habe erfolgreich bezahlt",
                t_look: "Bitte überprüfen Sie die Zahlungsinformationen sorgfältig, bevor Sie die Zahlung bestätigen",
                t_con_collect: "Bestätigen Sie, dass die Zahlung eingegangen ist",
                cancel_confrim: "Bestätigen Sie, um die Transaktion abzubrechen",
                t_tip1: "Wenn Sie den Verkäufer bezahlt haben, stornieren Sie die Transaktion bitte nicht",
                t_tip2: "Der Käufer hat drei Stornierungen am selben Tag, wodurch die Kauffunktion am selben Tag eingeschränkt wird",
                t_rule: "Regel abbrechen",
                confrim_ipay: "Bestätige, dass ich bezahlt habe",
                donotconfrim: "Wenn Sie den Verkäufer nicht bezahlt haben, klicken Sie bitte nicht auf die Bestätigungsschaltfläche",
                lockacc: "Böswillige Klicks frieren das Konto ein",
                hedui: "Bitte überprüfen Sie die Zahlungsinformationen sorgfältig",
                notpayconfrim: "Wenn Sie die Händlerzahlung nicht erhalten haben, klicken Sie bitte nicht auf die Bestätigungsschaltfläche",
                yes: "Ja",
                no: "Nein",
                sd: "Guthaben sperren",
                journal: "Balance Log",
                business: "Händler",
                user: "Nutzer",
                backdone: "Zurückgezogen"
            },
            coin: {
                bao: "Münzschatz",
                choose: "Währung wählen",
                total: "Total Deposited Coins",
                mybao: "Meine Einzahlungsmünzen",
                profit: "Erwartetes Einkommen",
                end_time: "Ablaufdatum",
                day: "Tage",
                rate: "Rendite",
                rule: "Regeln für die Einzahlung von Münzen"
            },
            team: {
                team: "mein Team",
                zt_num: "Drücken Sie direkt die Anzahl der Personen",
                active_num: "Anzahl der aktiven Teammitglieder",
                profit: "Einkommen",
                cblog: "Einzahlungsdatensatz",
                bblog: "Münzaufzeichnung",
                back: "Abzug",
                account: "Konto"
            }
        };
        t.default = s
    },
    "5c07": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a = i(n("e143"))
            , r = i(n("2f62"));
        a.default.use(r.default);
        var o = new r.default.Store({
            state: {
                theme: ""
            },
            mutations: {
                addTheme: function(e, t) {
                    e.theme = t,
                        uni.setStorageSync("theme", t)
                }
            },
            actions: {
                changeTheme: function(e, t) {
                    console.log(t),
                        e.commit("addTheme", t)
                }
            }
        });
        t.default = o
    },
    "62a7": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r = i(n("ade3")), o = {
            zdy: (a = {
                khyh: "Account Bank",
                khzh: "Account Opening Branch",
                czje: "recharge amount",
                dzje: "Amount to Account",
                tips: "hint",
                qdqx: "Are you sure to cancel the pledge",
                scsj: "Lockup time",
                a37: "Receive the reward easily",
                a33: "Cancellation will be deducted",
                a32: "Total Interest",
                a31: "Amount of Deposited Coins",
                a30: "Locked position record",
                a29: "Estimated Total Income",
                a28: "Mining is easier",
                a27: "Mining Treasure",
                a26: "Lockup period",
                a25: "Heaven",
                a24: "Japanese Yen Interest",
                a23: "Reference annualization for the past 3 days",
                a22: "Lock position to earn coins",
                a21: "Cancel pledge",
                a20: "Expiration time",
                a19: "Pledge Time",
                a18: "Amount to be output",
                a17: "Project Number",
                a16: "Pledge Record",
                a15: "Cancel the pledge and return the principal, no income can be obtained",
                a14: "Insufficient",
                a13: "Wallet Balance",
                a12: "Amount of pledge",
                a11: "Pledge",
                a10: "Tokens",
                a9: "The output quantity will be converted into equivalent value",
                a8: "Estimated quantity to be output",
                a7: "Total Revenue",
                a6: "Earn multiple returns",
                a5: "Deposit",
                a4: "Mobile Pledge",
                a3: "The holder can enjoy the pledge income",
                a36: "Remittance Account Opening Bank",
                a35: "remittance bank card number",
                a34: "Remittance Name",
                oldpwd: "Please enter the old password",
                zxkf: "online customer service",
                a2: "Need to pay",
                a1: "Subscription Currency",
                a0: "Withdrawal deduction",
                dqyuee: "current balance",
                download: "Download APP",
                czsl: "Recharge Quantity",
                qbdz: "Wallet Address",
                enterqbdz: "Please enter the wallet address",
                tjsh: "Submit for review",
                sb01: "The time of application for listing depends on the quality of data submission",
                sb02: "application result",
                sb03: "After receiving the confirmation email, submit the relevant information according to the email",
                sb04: "Submit Information",
                sb05: "Submit application for listing",
                sb06: "Apply",
                sb07: "application process",
                sb08: "Apply for listing",
                sb09: "PaxfulCoins takes everything for the sake of customers and puts the interests of users in the first place. Now we are looking for high-quality projects (currencies) to repay customers for their long-term support. Buy high-quality coins and buy value coins. Only choose PaxfulCoins!",
                ksgt: "Quick communication",
                sbsq: "Listing",
                qrszfpz: "Please enter payment voucher",
                zfpz: "Payment Voucher",
                dqsy: "Current earnings",
                ygsy: "Estimated revenue",
                rgcz: "Subscription operation",
                srrgsl: "Input subscription quantity",
                kdh: "convertible",
                gw: "Official website",
                bps: "white paper",
                sgzq: "Subscription cycle",
                yr: "preheat",
                sg: "apply for the purchase",
                js: "end",
                xmxq: "Project details",
                rg: "Subscription",
                ieo: "Subscription",
                zt: "state",
                fhjg: "Issue price",
                dqsj: "Due date"
            },
                (0,
                    r.default)(a, "scsj", "Lock time"),
                (0,
                    r.default)(a, "yjsy", "Expected revenue"),
                (0,
                    r.default)(a, "zxscsl", "Minimum number of locked warehouses"),
                (0,
                    r.default)(a, "syl", "Yield"),
                (0,
                    r.default)(a, "sc", "Lock up"),
                (0,
                    r.default)(a, "ts", "Days"),
                (0,
                    r.default)(a, "fhzl", "Total issue"),
                (0,
                    r.default)(a, "jssj", "End time"),
                (0,
                    r.default)(a, "yjs", "Finished"),
                (0,
                    r.default)(a, "wks", "Not started"),
                (0,
                    r.default)(a, "jxz", "have in hand"),
                (0,
                    r.default)(a, "scz", "Locked up"),
                (0,
                    r.default)(a, "ydq", "Expired"),
                (0,
                    r.default)(a, "nodata", "no data"),
                (0,
                    r.default)(a, "nomore", "There is no more data"),
                (0,
                    r.default)(a, "more", "Load more"),
                (0,
                    r.default)(a, "qbye", "Wallet balance"),
                (0,
                    r.default)(a, "scgz", "Lock up rules"),
                (0,
                    r.default)(a, "sclb", "Lock list"),
                (0,
                    r.default)(a, "scwk", "Mining by lock up"),
                (0,
                    r.default)(a, "sly", "Yield"),
                (0,
                    r.default)(a, "yebz", "Sorry, your credit is running low"),
                (0,
                    r.default)(a, "mhydd", "Second contract order"),
                (0,
                    r.default)(a, "gmj", "Purchase price"),
                (0,
                    r.default)(a, "cjj", "Transaction price"),
                (0,
                    r.default)(a, "yjyk", "Expected profit and loss"),
                (0,
                    r.default)(a, "yk", "Profit and loss"),
                (0,
                    r.default)(a, "djs", "count down"),
                a),
            login: {
                l_mobile: "Mobile",
                l_email: "Mailbox",
                p_email: "Please enter the mailbox",
                p_mobile: "Please enter the phone number",
                p_pwd: "Please enter a password",
                p_confirmPwd: "please confirm the password",
                p_confirmtradePwd: "transaction password",
                p_vcode: "Please enter the verification code",
                get_code: "Get code",
                rem_pwd: "remember password",
                login: "Login",
                noaccount: "no PaxfulCoins account yet?",
                register: "Sign Up",
                forget_pwd: "online service",
                p_taccount: "please input the correct mobile number",
                p_temail: "please enter the correct email",
                p_pwderr: "incorrect password",
                l_success: "login successfully",
                r_noedit: "cannot be modified after registration",
                r_mobile: "Mobile",
                r_email: "Mailbox",
                r_hasaccount: "existing PaxfulCoins account",
                r_next: "next step",
                r_sms: "sms verification",
                r_smsemail: "mailbox validation",
                r_pmobilecode: "please enter the mobile phone verification code",
                r_pemailcode: "please enter email verification code",
                r_send: "send out",
                p_len: "password length is 6-16 bits",
                p_notsame: "inconsistent password input",
                p_simple: "the password is too simple. please re-enter it",
                p_inputagain: "password input is inconsistent, please re-enter",
                p_first: "please read and agree to the user agreement first",
                p_invitecode: "Invitation code (can be empty)",
                p_inviteInput: "please enter the invitation code",
                p_agree: "i agree",
                p_private: "user agreement and privacy policy",
                p_set: "set up",
                p_setPwd: "set password",
                f_mobile: "mobile retrieve",
                f_email: "mailbox retrieve",
                e_mb: "cell-phone number",
                e_email: "mailbox",
                e_pwd: "change password",
                e_chongzhi: "reset password",
                e_dealPwd: "change transaction password",
                e_pdeal: "enter the transaction password",
                e_pdealerr: "incorrect transaction password",
                e_pdealConfrim: "please confirm the transaction password",
                e_confrim: "confirm",
                e_confrim2: "determine",
                security: "Safety",
                s_loginpwd: "login password",
                s_dealpwd: "transaction password",
                s_edit: "modify"
            },
            about: {
                abt: "About",
                concat: "Contact",
                privat: "privacy policy",
                theme: "Night"
            },
            collect: {
                method: "payment method",
                name: "Real name",
                p_name: "please enter your real name",
                bank: "opening bank",
                p_bank: "please enter account bank",
                no: "Bank account",
                p_no: "please enter the bank card number",
                alipay: "Alipay account",
                p_alipay: "Please enter Alipay account",
                nick: "Wechat nickname",
                p_nick: "please enter wechat nickname",
                wechat: "wechat account",
                p_wechat: "please enter wechat account",
                wechatCode: "wechat collection code",
                alipayCode: "alipay payment code",
                up_wechatCode: "please upload wechat collection code",
                up_alipayCode: "please upload the alipay payment code.",
                cardno: "ID number",
                p_cardno: "Please enter ID number",
                up_card: "Upload ID card photo",
                up_cardz: "Upload the front of your ID card",
                up_cardf: "Upload the back of your ID card",
                up_cardhand: "Upload a photo of you holding an ID card"
            },
            bind: {
                bindAddr: "bind withdrawal address",
                cur_select: "current selected currency",
                addr: "Ticket Address",
                codeauth: "My authorization code",
                codetip: "When you add a user as an agent, you need to verify the authorization code of the user",
                p_addr: "Please enter the coin address",
                code: "verification code",
                bind: "binding",
                sendSuccess: "send successfully",
                bindOk: "binding success",
                tuiguang: "my promotion code",
                codes: "Promotion code",
                tip: "scan the above qr code pattern or enter the promotion code to confirm the registration",
                liantype: "Chain type"
            },
            authentication: {
                person: "personal center",
                renzheng: "Primary Certification",
                gaoji: "Advanced Certification",
                go: "de certification",
                ing: "Audit",
                has: "Certified",
                rz_tip: "increase the amount of withdrawal after certification",
                name: "Name",
                account: "Account number",
                zj: "certificate number"
            },
            home: {
                legal: "Fiat",
                zhichi: "Support btc, usdt, etc.",
                lever: "Leverage trading",
                news: "News center",
                security: "Safe and reliable",
                leader: "The world's leading digital asset trading platform",
                updowns: "Increase list",
                name: "Name",
                new_price: "Last Price",
                fu: "UpDowns",
                p_login: "Please login",
                welcome: "Welcome to PaxfulCoins",
                myshop: "Personal stores",
                myshare: "My sharing links",
                logout: "Logout",
                detail: "Details",
                up: "Pull up loading",
                nomore: "No more data yet",
                norecord: "No record",
                loading: "Loading",
                team: "My Team",
                fast: "Quick buying",
                micro: "Second contract transaction"
            },
            market: {
                market: "Markets",
                volume: "24H Vol",
                home: "Home"
            },
            trade: {
                trade: "Exchange",
                buy: "Buy",
                sell: "Sell",
                limit: "Fixed price",
                shi: "Market price",
                cancel: "Cancel",
                best: "Current best price",
                num: "Number",
                use: "Available",
                amout: "Amount",
                price: "Price",
                time: "Time",
                bibi: "Exchange",
                all: "All",
                back: "Undo",
                dui: "Pair",
                notenough: "Sorry, your credit is running low",
                notbest: "There is no optimal price at present",
                p_price: "Please enter unit price",
                p_num: "please enter quantity",
                delegate: "Open orders",
                all_delegate: "all delegate",
                his_delegate: "Order history",
                has_done: "completed",
                has_cancel: "cancelled",
                has_pay: "paid",
                fee: "handling fee",
                handnum: "Trading hand number",
                p_handnum: "Enter the number of hands",
                balance: "Balance",
                buy_duo: "Buy (long)",
                sell_kong: "Sell (short)",
                pankou: "handicap",
                chicang: "hold positions",
                types: "type",
                operate: "operation",
                pingcang: "Close",
                chedan: "cancel",
                duo: "Long",
                kong: "Short",
                hands: "hands",
                hand: "hand",
                times: "multiple",
                money: "Margin",
                confrim_ping: "Determine the closure?",
                confrim_order: "confirm order",
                confrim_chedan: "confirm cancellation?",
                p_times: "please select multiples",
                p_hands: "please select or enter the number of hands",
                p_delprice: "please enter the commission price",
                p_notless: "The number of hands entered cannot be less than",
                p_notmore: "The number of hands entered cannot be higher than",
                delegate_price: "commission price",
                price_cang: "Opening price",
                price_zhiying: "Take profit price",
                num_zhehe: "Equivalent quantity",
                price_cur: "Current price",
                price_lose: "Stop loss price",
                can_money: "Available margin",
                time_start: "open time",
                geye_fee: "overnight fee",
                dealtype: "Transaction type"
            },
            lever: {
                delegating: "Entrustment",
                dealing: "Transaction",
                pingcanging: "Liquidation",
                hasping: "Closed",
                hasback: "Revoked",
                risk: "Risk rate",
                totalyk: "Total position profit and loss",
                yijian: "One key closing",
                setys: "Set stop loss",
                profit: "Expected profit",
                lose: "Expected loss",
                price_zhiying: "Profit price",
                price_lose: "Stop price",
                all_ping: "All closing",
                duo_ping: "Flat long",
                kong_ping: "Flat short"
            },
            assets: {
                trade: "Exchange",
                lever: "Leverage",
                legal: "Fiat",
                micro: "Second contract",
                manage: "Financial",
                tradeacc: "Coin account",
                leveracc: "leverage account",
                legalacc: "Fiat account",
                microacc: "Second contract account",
                zhehe: "Estimated",
                zhehecny: "Total assets",
                lock: "On orders",
                assets: "Assets",
                records: "Financial record",
                charge: "Deposit",
                mention: "Withdraw",
                transfer: "Transfer",
                record: "Record",
                cur_coin: "Current currency",
                addr_charge: "Charge address",
                coypaddr: "Copy address",
                c_tip1: "Do not recharge any of the above addresses",
                c_tip2: ", Otherwise the asset will not be recovered",
                c_tip3: "The coin only supports the simple send method. The use of other methods (send all) is temporarily unable to be credited. Please understand. ",
                c_tip4: "After you recharge to the above address, you need to confirm the whole network node. after one time of network confirmation, you need to arrive at the account, and after six times of network confirmation, you can withdraw currency.",
                c_tip5: "Minimum recharge amount",
                c_tip6: "Recharge less than the minimum amount will not be credited and cannot be returned",
                c_tip7: "Your recharge address will not be changed frequently, and you can recharge repeatedly. if there is any change, we will try to notify you through network announcement or email.",
                c_tip8: "Please make sure that the computer and browser are secure to prevent information from being tampered with or leaked",
                copy_success: "Copy success",
                copy_err: "copy failed",
                mentionaddr: "Ticket Address",
             	paypwd: "Please enter transaction password",
                p_paypwd: "Please enter transaction password",
                p_addr: "please set your withdrawal address first",
                minnum: "Minimum trading volume",
                recivenum: "number of arrivals",
                p_minnum: "Please enter the number of coins",
                transfernum: "the number of transfers",
                p_transfernum: "Please enter the number of transfers",
                from: "From",
                to: "To"
            },
            legal: {
                legal: "Legal currency",
                ibuy: "I want to buy",
                isell: "I want to sell",
                price: "Unit price",
                limit: "Limit",
                buy: "Buy",
                sell: "Sell",
                anprice: "At price",
                annum: "By quantity",
                pl: "please input",
                amount: "Amount",
                num: "Number",
                allmoney: "Total transaction volume",
                autocancel: "Automatic cancellation",
                do: "Place an order",
                p_amout: "Please enter the amount",
                coin: "Currency",
                list: "Transaction record",
                t_tip1: "please pay the merchant in time",
                t_tip2: "please wait patiently for the payment",
                t_tip3: "i confirm that no payment has been made"
            },
            store: {
                myshop: "Personal stores",
                regtime: "Register time",
                belongcoin: "Legal tender",
                entershop: "Enter shop",
                rzshop: "Certified merchant",
                fabu: "Publish",
                allorder: "Assembly sheet",
                thirtyorder: "30 days sheet",
                doneorder: "Completion sheet",
                donelv: "Completion rate",
                renzhengmobile: "mobile phone Identificaton",
                renzhengauth: "Real name Identificaton",
                renzhenghigh: "Advanced Identificaton",
                notdone: "incomplete",
                done: "Completed",
                yichang: "abnormal",
                lowershelf: "Lower shelf",
                protection: "Rights protection",
                apply: "Apply rights protection",
                back: "Withdraw",
                lookorder: "View order",
                minnum: "Minimum trading volume",
                maxnum: "Maximum trading volume",
                p_payment: "Please choose the mode of payment",
                p_coin: "Please choose monetary unit",
                p_price: "please enter unit price",
                p_min: "please enter the minimum transaction volume",
                p_max: "Please enter the maximum trading volume",
                ithink: "I'll think about it again",
                makeyichang: "Are you sure to mark as abnormal",
                alipay: "Alipay",
                wechat: "WeChat",
                bank: "Bank card",
                t_minmax: "Maximum trading volume should not be less than minimum trading volume",
                mysell: "My sale",
                mybuy: "My purchase",
                orderlist: "Order record",
                orderstatus: "Order status",
                chongzhi: "Reset",
                p_pay: "Please pay",
                p_waitpay: "Pending payment",
                t_pay: "please pay the seller in time",
                t_waitpay: "please wait patiently for the payment",
                t_paycancel: "order cancelled, unable to view payment information",
                t_havepay: "Order paid",
                t_hasdone: "The order has been completed",
                call: "Contact each other",
                collectcode: "Collection qr code",
                collectper: "Payee",
                payper: "Buyer",
                collectacc: "receiving account",
                paycancode: "payment reference number",
                dotime: "Order time",
                t_self: "Please use me",
                t_transfer: "Self transfer to the above account",
                t_tip: "Please do not remark btc, usdt and other information in the process of transfer to prevent the interception of remittance, freezing of bank card and other issues.",
                cancelorder: "Cancel order",
                ipay: "I have paid successfully",
                t_look: "Please check the payment information carefully before confirming the collection",
                t_con_collect: "Receipt confirmation",
                cancel_confrim: "Confirm cancel the transaction",
                t_tip1: "If you have paid the seller, please do not cancel the transaction",
                t_tip2: "The buyer has three cancellations in total on that day, which will limit the function of buying on that day",
                t_rule: "Cancellation rule",
                confrim_ipay: "Confirm that i have paid",
                donotconfrim: "If you do not pay the seller, please do not click the confirm button",
                lockacc: "Malicious click will be blocked account",
                hedui: "Please check the collection information carefully",
                notpayconfrim: "If you have not received payment from the merchant, please do not click the confirm button",
                yes: "YES",
                no: "NO",
                sd: "Lock in balance",
                journal: "Balance log",
                business: "Business",
                user: "User",
                backdone: "Withdrawn"
            },
            coin: {
                bao: "Deposit money",
                choose: "Select currency",
                total: "Total deposit",
                mybao: "My deposit",
                profit: "Estimated revenue",
                end_time: "Due time",
                day: "Days",
                rate: "Yield",
                rule: "Deposit rules"
            },
            team: {
                team: "My team",
                zt_num: "Direct pushing number",
                active_num: "Number of active people",
                profit: "Revenue",
                cblog: "Charging record",
                bblog: "Currency record",
                back: "Return commission",
                account: "Account"
            }
        };
        t.default = o
    },
    "acxj": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r = i(n("ade3")), o = {
            zdy: (a = {
                khyh: "Account Bank",
                khzh: "Account Opening Branch",
                czje: "recharge amount",
                dzje: "Amount to Account",
                tips: "hint",
                qdqx: "Are you sure to cancel the pledge",
                scsj: "Lockup time",
                a37: "Receive the reward easily",
                a33: "Cancellation will be deducted",
                a32: "Total Interest",
                a31: "Amount of Deposited Coins",
                a30: "Locked position record",
                a29: "Estimated Total Income",
                a28: "Mining is easier",
                a27: "Mining Treasure",
                a26: "Lockup period",
                a25: "Heaven",
                a24: "Japanese Yen Interest",
                a23: "Reference annualization for the past 3 days",
                a22: "Lock position to earn coins",
                a21: "Cancel pledge",
                a20: "Expiration time",
                a19: "Pledge Time",
                a18: "Amount to be output",
                a17: "Project Number",
                a16: "Pledge Record",
                a15: "Cancel the pledge and return the principal, no income can be obtained",
                a14: "Insufficient",
                a13: "Wallet Balance",
                a12: "Amount of pledge",
                a11: "Pledge",
                a10: "Tokens",
                a9: "The output quantity will be converted into equivalent value",
                a8: "Estimated quantity to be output",
                a7: "Total Revenue",
                a6: "Earn multiple returns",
                a5: "Deposit",
                a4: "Mobile Pledge",
                a3: "The holder can enjoy the pledge income",
                a36: "Remittance Account Opening Bank",
                a35: "remittance bank card number",
                a34: "Remittance Name",
                oldpwd: "Please enter the old password",
                zxkf: "online customer service",
                a2: "Need to pay",
                a1: "Subscription Currency",
                a0: "Withdrawal deduction",
                dqyuee: "current balance",
                download: "Download APP",
                czsl: "Recharge Quantity",
                qbdz: "Wallet Address",
                enterqbdz: "Please enter the wallet address",
                tjsh: "Submit for review",
                sb01: "The time of application for listing depends on the quality of data submission",
                sb02: "application result",
                sb03: "After receiving the confirmation email, submit the relevant information according to the email",
                sb04: "Submit Information",
                sb05: "Submit application for listing",
                sb06: "Apply",
                sb07: "application process",
                sb08: "Apply for listing",
                sb09: "PaxfulCoins takes everything for the sake of customers and puts the interests of users in the first place. Now we are looking for high-quality projects (currencies) to repay customers for their long-term support. Buy high-quality coins and buy value coins. Only choose PaxfulCoins!",
                ksgt: "Quick communication",
                sbsq: "Listing",
                qrszfpz: "Please enter payment voucher",
                zfpz: "Payment Voucher",
                dqsy: "Current earnings",
                ygsy: "Estimated revenue",
                rgcz: "Subscription operation",
                srrgsl: "Input subscription quantity",
                kdh: "convertible",
                gw: "Official website",
                bps: "white paper",
                sgzq: "Subscription cycle",
                yr: "preheat",
                sg: "apply for the purchase",
                js: "end",
                xmxq: "Project details",
                rg: "Subscription",
                ieo: "Subscription",
                zt: "state",
                fhjg: "Issue price",
                dqsj: "Due date"
            },
                (0,
                    r.default)(a, "scsj", "Lock time"),
                (0,
                    r.default)(a, "yjsy", "Expected revenue"),
                (0,
                    r.default)(a, "zxscsl", "Minimum number of locked warehouses"),
                (0,
                    r.default)(a, "syl", "Yield"),
                (0,
                    r.default)(a, "sc", "Lock up"),
                (0,
                    r.default)(a, "ts", "Days"),
                (0,
                    r.default)(a, "fhzl", "Total issue"),
                (0,
                    r.default)(a, "jssj", "End time"),
                (0,
                    r.default)(a, "yjs", "Finished"),
                (0,
                    r.default)(a, "wks", "Not started"),
                (0,
                    r.default)(a, "jxz", "have in hand"),
                (0,
                    r.default)(a, "scz", "Locked up"),
                (0,
                    r.default)(a, "ydq", "Expired"),
                (0,
                    r.default)(a, "nodata", "no data"),
                (0,
                    r.default)(a, "nomore", "There is no more data"),
                (0,
                    r.default)(a, "more", "Load more"),
                (0,
                    r.default)(a, "qbye", "Wallet balance"),
                (0,
                    r.default)(a, "scgz", "Lock up rules"),
                (0,
                    r.default)(a, "sclb", "Lock list"),
                (0,
                    r.default)(a, "scwk", "Mining by lock up"),
                (0,
                    r.default)(a, "sly", "Yield"),
                (0,
                    r.default)(a, "yebz", "Sorry, your credit is running low"),
                (0,
                    r.default)(a, "mhydd", "Second contract order"),
                (0,
                    r.default)(a, "gmj", "Purchase price"),
                (0,
                    r.default)(a, "cjj", "Transaction price"),
                (0,
                    r.default)(a, "yjyk", "Expected profit and loss"),
                (0,
                    r.default)(a, "yk", "Profit and loss"),
                (0,
                    r.default)(a, "djs", "count down"),
                a),
            login: {
                l_mobile: "Mobile",
                l_email: "Mailbox",
                p_email: "Please enter the mailbox",
                p_mobile: "Please enter the phone number",
                p_pwd: "Please enter a password",
                p_confirmPwd: "please confirm the password",
                p_confirmtradePwd: "transaction password",
                p_vcode: "Please enter the verification code",
                get_code: "Get code",
                rem_pwd: "remember password",
                login: "Login",
                noaccount: "no PaxfulCoins account yet?",
                register: "Sign Up",
                forget_pwd: "online service",
                p_taccount: "please input the correct mobile number",
                p_temail: "please enter the correct email",
                p_pwderr: "incorrect password",
                l_success: "login successfully",
                r_noedit: "cannot be modified after registration",
                r_mobile: "Mobile",
                r_email: "Mailbox",
                r_hasaccount: "existing PaxfulCoins account",
                r_next: "next step",
                r_sms: "sms verification",
                r_smsemail: "mailbox validation",
                r_pmobilecode: "please enter the mobile phone verification code",
                r_pemailcode: "please enter email verification code",
                r_send: "send out",
                p_len: "password length is 6-16 bits",
                p_notsame: "inconsistent password input",
                p_simple: "the password is too simple. please re-enter it",
                p_inputagain: "password input is inconsistent, please re-enter",
                p_first: "please read and agree to the user agreement first",
                p_invitecode: "Invitation code (can be empty)",
                p_inviteInput: "please enter the invitation code",
                p_agree: "i agree",
                p_private: "user agreement and privacy policy",
                p_set: "set up",
                p_setPwd: "set password",
                f_mobile: "mobile retrieve",
                f_email: "mailbox retrieve",
                e_mb: "cell-phone number",
                e_email: "mailbox",
                e_pwd: "change password",
                e_chongzhi: "reset password",
                e_dealPwd: "change transaction password",
                e_pdeal: "enter the transaction password",
                e_pdealerr: "incorrect transaction password",
                e_pdealConfrim: "please confirm the transaction password",
                e_confrim: "confirm",
                e_confrim2: "determine",
                security: "Safety",
                s_loginpwd: "login password",
                s_dealpwd: "transaction password",
                s_edit: "modify"
            },
            about: {
                abt: "About",
                concat: "Contact",
                privat: "privacy policy",
                theme: "Night"
            },
            collect: {
                method: "payment method",
                name: "Real name",
                p_name: "please enter your real name",
                bank: "opening bank",
                p_bank: "please enter account bank",
                no: "Bank account",
                p_no: "please enter the bank card number",
                alipay: "Alipay account",
                p_alipay: "Please enter Alipay account",
                nick: "Wechat nickname",
                p_nick: "please enter wechat nickname",
                wechat: "wechat account",
                p_wechat: "please enter wechat account",
                wechatCode: "wechat collection code",
                alipayCode: "alipay payment code",
                up_wechatCode: "please upload wechat collection code",
                up_alipayCode: "please upload the alipay payment code.",
                cardno: "ID number",
                p_cardno: "Please enter ID number",
                up_card: "Upload ID card photo",
                up_cardz: "Upload the front of your ID card",
                up_cardf: "Upload the back of your ID card",
                up_cardhand: "Upload a photo of you holding an ID card"
            },
            bind: {
                bindAddr: "bind withdrawal address",
                cur_select: "current selected currency",
                addr: "Ticket Address",
                codeauth: "My authorization code",
                codetip: "When you add a user as an agent, you need to verify the authorization code of the user",
                p_addr: "Please enter the coin address",
                code: "verification code",
                bind: "binding",
                sendSuccess: "send successfully",
                bindOk: "binding success",
                tuiguang: "my promotion code",
                codes: "Promotion code",
                tip: "scan the above qr code pattern or enter the promotion code to confirm the registration",
                liantype: "Chain type"
            },
            authentication: {
                person: "personal center",
                renzheng: "Primary Certification",
                gaoji: "Advanced Certification",
                go: "de certification",
                ing: "Audit",
                has: "Certified",
                rz_tip: "increase the amount of withdrawal after certification",
                name: "Name",
                account: "Account number",
                zj: "certificate number"
            },
            home: {
                legal: "Fiat",
                zhichi: "Support btc, usdt, etc.",
                lever: "Leverage trading",
                news: "News center",
                security: "Safe and reliable",
                leader: "The world's leading digital asset trading platform",
                updowns: "Increase list",
                name: "Name",
                new_price: "Last Price",
                fu: "UpDowns",
                p_login: "Please login",
                welcome: "Welcome to PaxfulCoins",
                myshop: "Personal stores",
                myshare: "My sharing links",
                logout: "Logout",
                detail: "Details",
                up: "Pull up loading",
                nomore: "No more data yet",
                norecord: "No record",
                loading: "Loading",
                team: "My Team",
                fast: "Quick buying",
                micro: "Second contract transaction"
            },
            market: {
                market: "Markets",
                volume: "24H Vol",
                home: "Home"
            },
            trade: {
                trade: "Exchange",
                buy: "Buy",
                sell: "Sell",
                limit: "Fixed price",
                shi: "Market price",
                cancel: "Cancel",
                best: "Current best price",
                num: "Number",
                use: "Available",
                amout: "Amount",
                price: "Price",
                time: "Time",
                bibi: "Exchange",
                all: "All",
                back: "Undo",
                dui: "Pair",
                notenough: "Sorry, your credit is running low",
                notbest: "There is no optimal price at present",
                p_price: "Please enter unit price",
                p_num: "please enter quantity",
                delegate: "Open orders",
                all_delegate: "all delegate",
                his_delegate: "Order history",
                has_done: "completed",
                has_cancel: "cancelled",
                has_pay: "paid",
                fee: "handling fee",
                handnum: "Trading hand number",
                p_handnum: "Enter the number of hands",
                balance: "Balance",
                buy_duo: "Buy (long)",
                sell_kong: "Sell (short)",
                pankou: "handicap",
                chicang: "hold positions",
                types: "type",
                operate: "operation",
                pingcang: "Close",
                chedan: "cancel",
                duo: "Long",
                kong: "Short",
                hands: "hands",
                hand: "hand",
                times: "multiple",
                money: "Margin",
                confrim_ping: "Determine the closure?",
                confrim_order: "confirm order",
                confrim_chedan: "confirm cancellation?",
                p_times: "please select multiples",
                p_hands: "please select or enter the number of hands",
                p_delprice: "please enter the commission price",
                p_notless: "The number of hands entered cannot be less than",
                p_notmore: "The number of hands entered cannot be higher than",
                delegate_price: "commission price",
                price_cang: "Opening price",
                price_zhiying: "Take profit price",
                num_zhehe: "Equivalent quantity",
                price_cur: "Current price",
                price_lose: "Stop loss price",
                can_money: "Available margin",
                time_start: "open time",
                geye_fee: "overnight fee",
                dealtype: "Transaction type"
            },
            lever: {
                delegating: "Entrustment",
                dealing: "Transaction",
                pingcanging: "Liquidation",
                hasping: "Closed",
                hasback: "Revoked",
                risk: "Risk rate",
                totalyk: "Total position profit and loss",
                yijian: "One key closing",
                setys: "Set stop loss",
                profit: "Expected profit",
                lose: "Expected loss",
                price_zhiying: "Profit price",
                price_lose: "Stop price",
                all_ping: "All closing",
                duo_ping: "Flat long",
                kong_ping: "Flat short"
            },
            assets: {
                trade: "Exchange",
                lever: "Leverage",
                legal: "Fiat",
                micro: "Second contract",
                manage: "Financial",
                tradeacc: "Coin account",
                leveracc: "leverage account",
                legalacc: "Fiat account",
                microacc: "Second contract account",
                zhehe: "Estimated",
                zhehecny: "Total assets",
                lock: "On orders",
                assets: "Assets",
                records: "Financial record",
                charge: "Deposit",
                mention: "Withdraw",
                transfer: "Transfer",
                record: "Record",
                cur_coin: "Current currency",
                addr_charge: "Charge address",
                coypaddr: "Copy address",
                c_tip1: "Do not recharge any of the above addresses",
                c_tip2: ", Otherwise the asset will not be recovered",
                c_tip3: "The coin only supports the simple send method. The use of other methods (send all) is temporarily unable to be credited. Please understand. ",
                c_tip4: "After you recharge to the above address, you need to confirm the whole network node. after one time of network confirmation, you need to arrive at the account, and after six times of network confirmation, you can withdraw currency.",
                c_tip5: "Minimum recharge amount",
                c_tip6: "Recharge less than the minimum amount will not be credited and cannot be returned",
                c_tip7: "Your recharge address will not be changed frequently, and you can recharge repeatedly. if there is any change, we will try to notify you through network announcement or email.",
                c_tip8: "Please make sure that the computer and browser are secure to prevent information from being tampered with or leaked",
                copy_success: "Copy success",
                copy_err: "copy failed",
                mentionaddr: "Ticket Address",
                paypwd: "Please enter transaction password",
                p_paypwd: "Please enter transaction password",
                p_addr: "please set your withdrawal address first",
                minnum: "Minimum trading volume",
                recivenum: "number of arrivals",
                p_minnum: "Please enter the number of coins",
                transfernum: "the number of transfers",
                p_transfernum: "Please enter the number of transfers",
                from: "From",
                to: "To"
            },
            legal: {
                legal: "Legal currency",
                ibuy: "I want to buy",
                isell: "I want to sell",
                price: "Unit price",
                limit: "Limit",
                buy: "Buy",
                sell: "Sell",
                anprice: "At price",
                annum: "By quantity",
                pl: "please input",
                amount: "Amount",
                num: "Number",
                allmoney: "Total transaction volume",
                autocancel: "Automatic cancellation",
                do: "Place an order",
                p_amout: "Please enter the amount",
                coin: "Currency",
                list: "Transaction record",
                t_tip1: "please pay the merchant in time",
                t_tip2: "please wait patiently for the payment",
                t_tip3: "i confirm that no payment has been made"
            },
            store: {
                myshop: "Personal stores",
                regtime: "Register time",
                belongcoin: "Legal tender",
                entershop: "Enter shop",
                rzshop: "Certified merchant",
                fabu: "Publish",
                allorder: "Assembly sheet",
                thirtyorder: "30 days sheet",
                doneorder: "Completion sheet",
                donelv: "Completion rate",
                renzhengmobile: "mobile phone Identificaton",
                renzhengauth: "Real name Identificaton",
                renzhenghigh: "Advanced Identificaton",
                notdone: "incomplete",
                done: "Completed",
                yichang: "abnormal",
                lowershelf: "Lower shelf",
                protection: "Rights protection",
                apply: "Apply rights protection",
                back: "Withdraw",
                lookorder: "View order",
                minnum: "Minimum trading volume",
                maxnum: "Maximum trading volume",
                p_payment: "Please choose the mode of payment",
                p_coin: "Please choose monetary unit",
                p_price: "please enter unit price",
                p_min: "please enter the minimum transaction volume",
                p_max: "Please enter the maximum trading volume",
                ithink: "I'll think about it again",
                makeyichang: "Are you sure to mark as abnormal",
                alipay: "Alipay",
                wechat: "WeChat",
                bank: "Bank card",
                t_minmax: "Maximum trading volume should not be less than minimum trading volume",
                mysell: "My sale",
                mybuy: "My purchase",
                orderlist: "Order record",
                orderstatus: "Order status",
                chongzhi: "Reset",
                p_pay: "Please pay",
                p_waitpay: "Pending payment",
                t_pay: "please pay the seller in time",
                t_waitpay: "please wait patiently for the payment",
                t_paycancel: "order cancelled, unable to view payment information",
                t_havepay: "Order paid",
                t_hasdone: "The order has been completed",
                call: "Contact each other",
                collectcode: "Collection qr code",
                collectper: "Payee",
                payper: "Buyer",
                collectacc: "receiving account",
                paycancode: "payment reference number",
                dotime: "Order time",
                t_self: "Please use me",
                t_transfer: "Self transfer to the above account",
                t_tip: "Please do not remark btc, usdt and other information in the process of transfer to prevent the interception of remittance, freezing of bank card and other issues.",
                cancelorder: "Cancel order",
                ipay: "I have paid successfully",
                t_look: "Please check the payment information carefully before confirming the collection",
                t_con_collect: "Receipt confirmation",
                cancel_confrim: "Confirm cancel the transaction",
                t_tip1: "If you have paid the seller, please do not cancel the transaction",
                t_tip2: "The buyer has three cancellations in total on that day, which will limit the function of buying on that day",
                t_rule: "Cancellation rule",
                confrim_ipay: "Confirm that i have paid",
                donotconfrim: "If you do not pay the seller, please do not click the confirm button",
                lockacc: "Malicious click will be blocked account",
                hedui: "Please check the collection information carefully",
                notpayconfrim: "If you have not received payment from the merchant, please do not click the confirm button",
                yes: "YES",
                no: "NO",
                sd: "Lock in balance",
                journal: "Balance log",
                business: "Business",
                user: "User",
                backdone: "Withdrawn"
            },
            coin: {
                bao: "Deposit money",
                choose: "Select currency",
                total: "Total deposit",
                mybao: "My deposit",
                profit: "Estimated revenue",
                end_time: "Due time",
                day: "Days",
                rate: "Yield",
                rule: "Deposit rules"
            },
            team: {
                team: "My team",
                zt_num: "Direct pushing number",
                active_num: "Number of active people",
                profit: "Revenue",
                cblog: "Charging record",
                bblog: "Currency record",
                back: "Return commission",
                account: "Account"
            }
        };
        t.default = o
    },
    "64fa": function(e, t, n) {
        "use strict";
        n("4de4"),
            n("a9e3"),
            n("b680"),
            n("d3b7"),
            n("ac1f"),
            n("25f0"),
            n("843c"),
            n("5319"),
            n("1276"),
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
        var i = n("0c30")
            , a = i.domain
            , r = "/api/";
        function o(e) {
            var t = /^[1][0-9]{10}$/;
            return t.test(e)
        }
        function s(e) {
            var t = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            return t.test(e)
        }
        function l(e, t) {
            uni.showToast({
                icon: t || "none",
                title: e
            })
        }
        function c(e, t) {
            var n = r + e.url
                , i = e.type || "GET"
                , a = e.data || {};
            uni.request({
                url: n,
                method: i,
                data: a,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    var n = e.data;
                    "ok" == n.type ? t && t(n.message, n.message) : "999" == n.type ? uni.navigateTo({
                        url: "/pages/mine/login"
                    }) : l(n.message)
                },
                fail: function(e) {
                    console.log(e)
                },
                complete: function() {
                    setTimeout((function() {
                            uni.hideLoading()
                        }
                    ), 1e3)
                }
            })
        }
        function d(e, t) {
            var n = uni.getStorageSync("token")
                , i = r + e.url
                , a = e.type || "GET"
                , o = e.data || {};
            uni.showLoading({}),
                uni.request({
                    url: i,
                    method: a,
                    data: o,
                    header: {
                        Authorization: n
                    },
                    success: function(e) {
                        uni.hideLoading();
                        var n = e.data;
                        999 == n.type ? uni.navigateTo({
                            url: "/pages/mine/login"
                        }) : "998" == n.type ? 
                        
                uni.showToast({
                    icon: "none",
                    title: "You can only operate after authentication"
                })&&
               setTimeout(function(){
                    uni.navigateTo({
                        url: "/pages/mine/real_authentication"
                    })  
               }, 2000)      
                        
                        : "997" == n.type ? uni.navigateTo({
                            url: "/pages/mine/collect_money"
                        }) : "ok" == n.type ? t && t(n.message, n.message) : (console.log(111),
                            console.log(n),
                            l(n.message))
                    },
                    fail: function() {},
                    complete: function(e) {
                        setTimeout((function() {
                                uni.hideLoading()
                            }
                        ), 1e3),
                       500 == e.statusCode && l("The server has a problem and is being repaired, please be patient"),
                        401 == e.statusCode && uni.showModal({
                            title: "",
                            content: "No transaction password, whether to set it now",
                            showCancel: !0,
                            cancelText: "Cancel",
                            confirmText: "Confirm",
                            success: function(e) {
                                console.log(e),
                                e.confirm && uni.navigateTo({
                                    url: "/pages/mine/resetLegalPwd"
                                })
                            },
                            fail: function() {},
                            complete: function() {}
                        })
                    }
                })
        }
        function u(e, t) {
            var n = uni.getStorageSync("token")
                , i = r + e.url
                , a = e.type || "GET"
                , o = e.data || {};
            uni.request({
                url: i,
                method: a,
                data: o,
                header: {
                    Authorization: n
                },
                success: function(e) {
                    var n = e.data;
                    999 == n.type ? uni.navigateTo({
                        url: "/pages/mine/login"
                    }) : "998" == n.type ?
                    

                uni.showToast({
                    icon: "none",
                    title: "You can only operate after authentication"
                })&&
               setTimeout(function(){
                    uni.navigateTo({
                        url: "/pages/mine/real_authentication"
                    })  
               }, 2000)                
                
                
                : "997" == n.type ? uni.navigateTo({
                        url: "/pages/mine/collect_money"
                    }) : "ok" == n.type ? t && t(n.message, n.message) : l(n.message)
                },
                fail: function() {},
                complete: function(e) {
                  500 == e.statusCode && l("The server has a problem and is being repaired, please be patient")
                }
            })
        }
        function p(e, t) {
            var n = r + e.url
                , i = e.type || "GET"
                , a = e.data || {};
            uni.request({
                url: n,
                method: i,
                data: a,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    var n = e.data;
                    console.log(e),
                    t && t(n)
                },
                fail: function(e) {
                    console.log(e)
                },
                complete: function() {
                    setTimeout((function() {
                            uni.hideLoading()
                        }
                    ), 1e3)
                }
            })
        }
        function g(e, t) {
            uni.getStorageSync("token");
            var n = i.domain + "/" + e.url
                , a = e.type || "GET"
                , r = e.data || {};
            console.log(n),
                console.log(r),
                uni.request({
                    url: n,
                    method: a,
                    data: r,
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var n = e.data;
                        t && t(n)
                    },
                    fail: function(e) {
                        console.log(e)
                    },
                    complete: function() {}
                })
        }
        var f = function(e) {
            var t = JSON.parse(uni.getStorageSync("address_list"));
            t.push(e),
                uni.setStorageSync("address_list", JSON.stringify(t))
        }
            , h = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                , n = JSON.parse(uni.getStorageSync("address_list"));
            return n.filter((function(n) {
                    return n[e] == t
                }
            ))
        }
            , m = function(e, t) {
            var n = 0
                , i = e.toString()
                , a = t.toString();
            try {
                n += i.split(".")[1].length
            } catch (r) {}
            try {
                n += a.split(".")[1].length
            } catch (r) {}
            return Number(i.replace(".", "")) * Number(a.replace(".", "")) / Math.pow(10, n)
        }
            , b = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                , n = e - 0
                , i = t - 0
                , a = "1"
                , r = a.padEnd(i + 1, 0) - 0
                , o = m(n, r);
            return (Math.floor(o) / r).toFixed(i)
        }
            , y = function(e) {
            "dark" == e ? uni.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#102030"
            }) : uni.setNavigationBarColor({
                frontColor: "#000000",
                backgroundColor: "#ffffff"
            })
        }
            , _ = function(e) {
            "dark" == e ? uni.setTabBarStyle({
                color: "#a2a6a5",
                selectedColor: "#1881d2",
                backgroundColor: "#16263e",
                borderStyle: "black"
            }) : uni.setTabBarStyle({
                color: "#8b97a0",
                selectedColor: "#238ee1",
                backgroundColor: "#ffffff",
                borderStyle: "black"
            })
        }
            , k = {
            checkMobile: o,
            checkEmail: s,
            showLayer: l,
            initData: c,
            initDataToken: d,
            addNewAddr: f,
            getLocalAddrs: h,
            filterDecimals: b,
            mainName: a,
            noshowToken: u,
            getGlobalSettting: p,
            getAddressOnline: g,
            accMul: m,
            setThemeTop: y,
            setThemeBottom: _
        };
        t.default = k
    },
    6797: function(e, t, n) {
        "use strict";
        var i = n("946b")
            , a = n.n(i);
        a.a
    },
    "6e0c": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r = i(n("ade3")), o = {
            zdy: (a = {
                dzje: "จำนวนเงินเข้าบัญชี",
                scsj: "เวลาล็อก",
                a37: "รับรางวัลอย่างง่ายดาย",
                a33: "การยกเลิกจะถูกหักออก",
                a32: "ดอกเบี้ยทั้งหมด",
                a31: "จำนวนเหรียญที่ฝาก",
                a30: "บันทึกตำแหน่งที่ถูกล็อก",
                a29: "รายได้รวมโดยประมาณ",
                a28: "ขุดง่ายกว่า",
                a27: "ขุมทรัพย์การขุด",
                a26: "ช่วงเวลาการล็อก",
                a25: "สวรรค์",
                a24: "ดอกเบี้ยเงินเยนของญี่ปุ่น",
                a23: "การอ้างอิงรายปีในช่วง 3 วันที่ผ่านมา",
                a22: "ล็อคตำแหน่งเพื่อรับเหรียญ",
                a21: "ยกเลิกการจำนำ",
                a20: "เวลาหมดอายุ",
                a19: "เวลาจำนำ",
                a18: "จำนวนที่จะส่งออก",
                a17: "หมายเลขโครงการ",
                a16: "บันทึกการจำนำ",
                a15: "ยกเลิกการจำนำและคืนเงินต้นไม่สามารถหารายได้",
                a14: "ไม่เพียงพอ",
                a13: "ยอดคงเหลือใน Wallet",
                a12: "จำนวนเงินจำนำ",
                a11: "คำมั่นสัญญา",
                a10: "โทเค็น",
                a9: "ปริมาณผลผลิตจะถูกแปลงเป็นมูลค่าเทียบเท่า",
                a8: "ปริมาณโดยประมาณที่จะส่งออก",
                a7: "รายได้รวม",
                a6: "รับผลตอบแทนหลายเท่า",
                a5: "เงินฝาก",
                a4: "Mobile Pledge",
                a3: "ผู้ถือสามารถมีรายได้จากการจำนำ",
                a36: "โอนเงินเข้าบัญชีธนาคาร",
                a35: "หมายเลขบัตรธนาคารสำหรับการโอนเงิน",
                a34: "ชื่อการโอนเงิน",
                oldpwd: "โปรดป้อนรหัสผ่านเดิม",
                zxkf: "เว็บบอร์ดออนไลน์",
                a2: "ต้องจ่าย",
                a1: "สกุลเงินในการสมัคร",
                a0: "หักเหรียญ",
                dqyuee: "ดุลปัจจุบัน",
                download: "ดาวน์โหลด",
                czsl: "เติม",
                qbdz: "ที่อยู่ในเหรียญ",
                enterqbdz: "กรุณาใส่ที่อยู่ในค่าใช้จ่าย",
                tjsh: "ส่งการตรวจสอบ",
                sb01: "ขึ้นอยู่กับคุณภาพของการส่งข้อมูล",
                sb02: "ผลการสมัคร",
                sb03: "หลังจากได้รับการยืนยันอีเมล์ส่งข้อมูลที่เกี่ยวข้องตามอีเมล",
                sb04: "ส่งข้อมูล",
                sb05: "ส่งใบสมัครสำหรับสกุลเงิน",
                sb06: "สมัคร",
                sb07: "ขั้นตอนการสมัคร",
                sb08: "ใช้สำหรับเหรียญ",
                sb09: "กับทุกความสนใจของลูกค้าและความสนใจของลูกค้าของเราเรากำลังมองหาโครงการที่มีคุณภาพสูงเพื่อตอบแทนการสนับสนุนระยะยาวของลูกค้าของเรา เหรียญที่มีคุณภาพสูงซื้อเหรียญมูลค่าเลือกฮูเท่านั้น",
                ksgt: "การสื่อสารอย่างรวดเร็ว",
                sbsq: "ใช้สำหรับเหรียญ",
                qrszfpz: "กรุณาระบุบัตรชำระเงิน",
                zfpz: "ใบรับรองการชำระเงิน",
                dqsy: "รายได้ในปัจจุบัน",
                ygsy: "ประมาณการรายได้",
                rgcz: "การสมัครสมาชิก",
                srrgsl: "ระบุจำนวนสมาชิก",
                kdh: "โคเคน",
                gw: "เครือข่ายอย่างเป็นทางการ",
                bps: "กระดาษสีขาว",
                sgzq: "วงจรการซื้อ",
                yr: "อุ่นเครื่อง",
                sg: "สมัคร",
                js: "จบ",
                xmxq: "รายละเอียดโครงการ",
                rg: "สมัครสมาชิก",
                ieo: "สมัครสมาชิก",
                zt: "สภาพ",
                fhjg: "ราคาปัญหา",
                dqsj: "เวลาหมดอายุ"
            },
                (0,
                    r.default)(a, "scsj", "เวลาล็อค"),
                (0,
                    r.default)(a, "yjsy", "รายได้ที่คาดว่าจะได้รับ"),
                (0,
                    r.default)(a, "zxscsl", "จำนวนขั้นต่ำของการล็อค"),
                (0,
                    r.default)(a, "syl", "ผลผลิต"),
                (0,
                    r.default)(a, "sc", "กลอนประตู"),
                (0,
                    r.default)(a, "ts", "พรหมลิขิต"),
                (0,
                    r.default)(a, "fhzl", "ปัญหาทั้งหมด"),
                (0,
                    r.default)(a, "jssj", "เวลาสิ้นสุด"),
                (0,
                    r.default)(a, "yjs", "จบ"),
                (0,
                    r.default)(a, "wks", "แคล้วคลาด"),
                (0,
                    r.default)(a, "jxz", "เจริญก้าวหน้า"),
                (0,
                    r.default)(a, "scz", "ใส่กลอนประตู"),
                (0,
                    r.default)(a, "ydq", "หมดอายุ"),
                (0,
                    r.default)(a, "nodata", "ไม่มีข้อมูล"),
                (0,
                    r.default)(a, "nomore", "ไม่มีข้อมูลเพิ่มเติม"),
                (0,
                    r.default)(a, "more", "โหลดเพิ่มเติม"),
                (0,
                    r.default)(a, "qbye", "ดุลกระเป๋าสตางค์"),
                (0,
                    r.default)(a, "scgz", "กฎการล็อคคลังสินค้า"),
                (0,
                    r.default)(a, "sclb", "รายชื่อคลังสินค้าล็อค"),
                (0,
                    r.default)(a, "scwk", "ล็อคคลังสินค้า"),
                (0,
                    r.default)(a, "sly", "ผลผลิต"),
                (0,
                    r.default)(a, "yebz", "ขาดสมดุล"),
                (0,
                    r.default)(a, "mhydd", "คำสั่งสัญญาวินาที"),
                (0,
                    r.default)(a, "gmj", "ราคาซื้อ"),
                (0,
                    r.default)(a, "cjj", "มูลค่าการซื้อขาย"),
                (0,
                    r.default)(a, "yjyk", "คาดการณ์กำไรและขาดทุน"),
                (0,
                    r.default)(a, "yk", "ขาดทุน"),
                (0,
                    r.default)(a, "djs", "การนับถอยหลัง"),
                a),
            login: {
                l_mobile: "เข้าสู่ระบบโทรศัพท์มือถือ",
                l_email: "เข้าสู่ระบบกล่องจดหมาย",
                p_email: "โปรดระบุกล่องจดหมาย",
                p_mobile: "กรุณาใส่หมายเลขโทรศัพท์มือถือของคุณ",
                p_pwd: "กรุณาใส่รหัสผ่าน",
                p_confirmPwd: "กรุณายืนยันรหัสผ่าน",
                p_confirmtradePwd: "รหัสผ่านการทำธุรกรรม",
                p_vcode: "กรุณาใส่รหัสการตรวจสอบ",
                get_code: "ได้รับรหัสการตรวจสอบ",
                rem_pwd: "จำรหัสผ่าน",
                login: "ล็อกอิน",
                noaccount: "ยังไม่มีบัญชีฮู",
                register: "ลงทะเบียน",
                forget_pwd: "ลืมรหัสผ่าน",
                p_taccount: "กรุณาใส่หมายเลขโทรศัพท์ที่ถูกต้อง",
                p_temail: "กรุณาป้อนกล่องจดหมายที่ถูกต้อง",
                p_pwderr: "รหัสผ่านที่ป้อนไม่ถูกต้อง",
                l_success: "เข้าสู่ระบบเรียบร้อยแล้ว",
                r_noedit: "ไม่สามารถแก้ไขได้หลังจากการลงทะเบียน",
                r_mobile: "ลงทะเบียนโทรศัพท์มือถือ",
                r_email: "ลงทะเบียนกล่องจดหมาย",
                r_hasaccount: "มีบัญชีฮู",
                r_next: "ขั้นตอนต่อไป",
                r_sms: "การตรวจสอบข้อความ",
                r_smsemail: "การตรวจสอบกล่องจดหมาย",
                r_pmobilecode: "กรุณาใส่รหัสการตรวจสอบโทรศัพท์มือถือ",
                r_pemailcode: "กรุณาใส่รหัสการตรวจสอบกล่องจดหมาย",
                r_send: "ส่ง",
                p_len: "ความยาวรหัสผ่านใน",
                p_notsame: "รหัสผ่านไม่ตรงกัน",
                p_simple: "รหัสผ่านที่ง่ายเกินไปโปรดพิมพ์อีกครั้ง",
                p_inputagain: "รหัสผ่านไม่ตรงกันกรุณาพิมพ์อีกครั้ง",
                p_first: "โปรดอ่านและยอมรับข้อตกลงของผู้ใช้ก่อน",
                p_invitecode: "รหัสเชิญ (สามารถเว้นว่างได้)ิญ",
                p_inviteInput: "กรุณาใส่รหัสเชิญ",
                p_agree: "ฉันเห็นด้วย",
                p_private: "ข้อตกลงผู้ใช้และนโยบายความเป็นส่วนตัว",
                p_set: "ตั้งค่า",
                p_setPwd: "ตั้งค่ารหัสผ่าน",
                f_mobile: "โทรศัพท์มือถือ",
                f_email: "กล่องจดหมาย",
                e_mb: "หมายเลขโทรศัพท์มือถือ",
                e_email: "ไปรษณียภัณฑ์",
                e_pwd: "เปลี่ยนรหัสผ่าน",
                e_chongzhi: "ตั้งค่ารหัสผ่านใหม่",
                e_dealPwd: "เปลี่ยนรหัสผ่าน",
                e_pdeal: "กรุณาใส่รหัสผ่าน",
                e_pdealerr: "รายการรหัสผ่านไม่ถูกต้อง",
                e_pdealConfrim: "กรุณายืนยันรหัสผ่าน",
                e_confrim: "ยืนยัน",
                e_confrim2: "ยืนยัน",
                security: "ศูนย์ความปลอดภัย",
                s_loginpwd: "รหัสผ่านเข้าสู่ระบบ",
                s_dealpwd: "รหัสผ่าน",
                s_edit: "ดัดนิสัย"
            },
            about: {
                abt: "เกี่ยวกับเรา",
                concat: "ติดต่อเรา",
                privat: "นโยบายความเป็นส่วนตัว",
                theme: "โหมดกลางคืน"
            },
            collect: {
                method: "วิธีการรับเงิน",
                name: "ชื่อจริง",
                p_name: "กรุณาใส่ชื่อจริง",
                bank: "ธนาคารเปิดบัญชี",
                p_bank: "กรุณาระบุบัญชีธนาคาร",
                no: "หมายเลขบัตร",
                p_no: "กรุณาใส่หมายเลขบัตรของธนาคาร",
                alipay: "จ่ายสมบัติ",
                p_alipay: "กรุณาระบุบัญชีการชำระเงิน",
                nick: "ชื่อเล่น",
                p_nick: "กรุณาใส่ชื่อเล่น",
                wechat: "ไมโครบัญชี",
                p_wechat: "กรุณาระบุบัญชีไมโคร",
                wechatCode: "ไมโครเครดิตคอลเลกชัน",
                alipayCode: "จ่ายสมบัติคอลเลกชัน",
                up_wechatCode: "กรุณาอัปโหลดไมโครเครดิต",
                up_alipayCode: "กรุณาอัพโหลดรหัสการชำระเงิน",
                cardno: "หมายเลขบัตรประชาชน",
                p_cardno: "กรุณาใส่หมายเลขบัตรประชาชน",
                up_card: "อัพโหลดรูปบัตรประชาชน",
                up_cardz: "อัพโหลดบัตรประชาชนด้านหน้า",
                up_cardf: "อัพโหลดบัตรประชาชน",
                up_cardhand: "อัพโหลดบัตรประชาชนมือถือ"
            },
            bind: {
                bindAddr: "ที่อยู่สกุลเงินผูกพัน",
                cur_select: "เลือกสกุลเงินในปัจจุบัน",
                addr: "ที่อยู่สกุลเงิน",
                codeauth: "รหัสสิทธิ์ของฉัน",
                codetip: "เมื่อคุณเพิ่มผู้ใช้เป็นตัวแทนคุณต้องตรวจสอบรหัสการอนุญาตของผู้ใช้",
                p_addr: "กรุณาใส่ที่อยู่ของสกุลเงิน",
                code: "รหัสการตรวจสอบ",
                bind: "จำกัด",
                sendSuccess: "ส่งเรียบร้อยแล้ว",
                bindOk: "ผูกพันสำเร็จ",
                tuiguang: "รหัสโปรโมชั่น",
                codes: "รหัสโปรโมชั่น",
                tip: "สแกนข้างต้นสองมิติรหัสรูปแบบหรือป้อนรหัสโปรโมชั่นเพื่อยืนยันการลงทะเบียน",
                liantype: "ประเภทของห่วงโซ่"
            },
            authentication: {
                person: "ศูนย์บุคคล",
                renzheng: "บัตรประจำตัวประชาชน",
                gaoji: "การรับรองขั้นสูง",
                go: "ไปรับรอง",
                ing: "ตรวจสอบ",
                has: "ใบรับรอง",
                rz_tip: "เพื่อเพิ่มวงเงินหลังจากการรับรอง",
                name: "เนม",
                account: "อธิบายแจกแจง",
                zj: "หมายเลขประจำตัว"
            },
            home: {
                legal: "การซื้อขายสกุลเงินฝรั่งเศส",
                zhichi: "สนับสนุน BTC USDT ฯลฯ",
                lever: "ข้อตกลงทางการค้า",
                news: "ศูนย์ข่าว",
                security: "เชื่อถือได้",
                leader: "แพลตฟอร์มการซื้อขายสินทรัพย์ดิจิตอลชั้นนำของโลก",
                updowns: "แผนภูมิกำไร",
                name: "นาม",
                new_price: "ราคาล่าสุด",
                fu: "ขึ้นๆลงๆ",
                p_login: "กรุณาเข้าสู่ระบบ",
                welcome: "ยินดีต้อนรับสู่ฮู",
                myshop: "ร้านของฉัน",
                myshare: "ลิงค์ที่ใช้ร่วมกันของฉัน",
                logout: "ออกจากระบบ",
                detail: "รายละเอียด",
                up: "ดึงขึ้นโหลด",
                nomore: "ไม่มีข้อมูลเพิ่มเติม",
                norecord: "ไม่มีบันทึก",
                loading: "โหลด",
                team: "ทีมของฉัน",
                fast: "รวดเร็วซื้อเหรียญ",
                micro: "การซื้อขายสัญญาวินาที"
            },
            market: {
                market: "อัตราแลกเปลี่ยน",
                volume: "ปริมาณ",
                home: "หน้าแรก"
            },
            trade: {
                trade: "การซื้อขายเหรียญ",
                buy: "ซื้อ",
                sell: "ขาย",
                limit: "ขีดคั่น",
                shi: "ตลาดนัดกลางแจ้ง",
                cancel: "ยกเลิก",
                best: "ซื้อขายในราคาที่ดีที่สุดในปัจจุบัน",
                num: "จำนวนรวม",
                use: "ใช้",
                amout: "แลกเปลี่ยน",
                price: "ราคา",
                time: "กาละ",
                bibi: "เหรียญกระษาปณ์",
                all: "จำนวนทั้งหมด",
                back: "ถอนคำพูด",
                dui: "คู่ค้า",
                notenough: "ขาดสมดุล",
                notbest: "ไม่มีราคาที่เหมาะสมในปัจจุบัน",
                p_price: "กรุณาระบุราคา",
                p_num: "โปรดระบุหมายเลข",
                delegate: "ตัวแทนในปัจจุบัน",
                all_delegate: "มอบหมายให้",
                his_delegate: "ประวัติคณะผู้แทน",
                has_done: "เสร็จสิ้น",
                has_cancel: "ยกเลิก",
                has_pay: "จ่ายเงิน",
                fee: "ค่าธรรมเนียม",
                handnum: "จำนวนผู้ค้า",
                p_handnum: "โปรดระบุหมายเลขมือ",
                balance: "ยอดคงเหลือ",
                buy_duo: "ซื้อมาก",
                sell_kong: "ขายสั้น",
                pankou: "รอยขด",
                chicang: "ตำแหน่งในทีม",
                types: "รูปร่างลักษณะ",
                operate: "การดำเนินการ",
                pingcang: "ปิดตำแหน่ง",
                chedan: "ถอนเงิน",
                duo: "ทำมากเกินไป",
                kong: "สั้น",
                hands: "จำนวนมือ",
                hand: "การปรบมือ",
                times: "กาละ",
                money: "เงินมัดจำ",
                confrim_ping: "ยืนยันตำแหน่งปิด",
                confrim_order: "ยืนยันการสั่งซื้อ",
                confrim_chedan: "ยืนยันการถอนเงิน",
                p_times: "กรุณาเลือกหลายๆครั้ง",
                p_hands: "กรุณาเลือกหรือป้อนหมายเลขมือ",
                p_delprice: "กรุณาป้อนราคาตัวแทน",
                p_notless: "จำนวนมือที่คุณป้อนไม่สามารถต่ำกว่า",
                p_notmore: "จำนวนมือที่ป้อนไม่สามารถสูงกว่า",
                delegate_price: "ค่านายหน้า",
                price_cang: "ราคาเปิด",
                price_zhiying: "ราคากำไร",
                num_zhehe: "การพับ",
                price_cur: "ราคาปัจจุบัน",
                price_lose: "ราคาหยุดขาดทุน",
                can_money: "ขอบ",
                time_start: "เวลาเปิด",
                geye_fee: "ค่าธรรมเนียมข้ามคืน",
                dealtype: "ประเภทของธุรกรรม"
            },
            lever: {
                delegating: "มอบหมายให้",
                dealing: "การแลกเปลี่ยน",
                pingcanging: "ปิดตำแหน่ง",
                hasping: "ปิดตำแหน่ง",
                hasback: "ถอนคำพูด",
                risk: "ความเสี่ยง",
                totalyk: "กำไรและขาดทุนจากตำแหน่ง",
                yijian: "ปิดตำแหน่ง",
                setys: "ตั้งค่าหยุดขาดทุน",
                profit: "คาดว่ากำไร",
                lose: "คาดว่าขาดทุน",
                price_zhiying: "ราคากำไร",
                price_lose: "ราคาหยุดขาดทุน",
                all_ping: "ปิดตำแหน่งทั้งหมด",
                duo_ping: "มันเป็นมากกว่าหนึ่ง",
                kong_ping: "แผ่นแบน"
            },
            assets: {
                trade: "เหรียญกระษาปณ์",
                lever: "สนธิสัญญา",
                legal: "เหรียญฝรั่งเศส",
                micro: "สัญญาวินาที",
                manage: "ความมั่งคั่ง",
                tradeacc: "บัญชีสกุลเงิน",
                leveracc: "บัญชีสัญญา",
                legalacc: "บัญชีสกุลเงินฝรั่งเศส",
                microacc: "บัญชีสัญญาวินาที",
                zhehe: "ทบ",
                zhehecny: "สินทรัพย์รวม",
                lock: "ทำให้ชะงัก",
                assets: "ทรัพย์สิน",
                records: "บันทึกทางการเงิน",
                charge: "เหรียญ",
                mention: "สกัดออกมา",
                transfer: "การเปลี่ยนทิศทาง",
                record: "อัดแผ่นเสียง",
                cur_coin: "สกุลเงินปัจจุบัน",
                addr_charge: "ที่อยู่ในเหรียญ",
                coypaddr: "คัดลอกที่อยู่",
                c_tip1: "ไม่คิดค่าบริการใดๆที่อยู่ข้างต้น",
                c_tip2: "มิฉะนั้นทรัพย์สินจะไม่สามารถกู้คืนได้",
                c_tip3: "ค่าใช้จ่ายเพียงสนับสนุนวิธีการส่งง่ายและวิธีการอื่นๆของการชาร์จไม่สามารถใช้ได้ชั่วคราวโปรดเข้าใจว่า",
                c_tip4: "หลังจากที่คุณได้เติมเงินที่อยู่ข้างต้นคุณจะต้องยืนยันโหนดเครือข่ายทั้งหมด",
                c_tip5: "จำนวนเงินขั้นต่ำ",
                c_tip6: "ค่าใช้จ่ายน้อยกว่าจำนวนเงินขั้นต่ำจะไม่เรียกเก็บเงินและไม่สามารถเรียกคืนได้",
                c_tip7: "ที่อยู่เติมเงินของคุณไม่ได้เปลี่ยนบ่อยเกินไปคุณสามารถทำซ้ำการเติมเงินถ้าคุณเปลี่ยนแปลงใดๆเราจะพยายามที่จะแจ้งให้คุณทราบผ่านทางอินเทอร์เน็ตประกาศหรือ",
                c_tip8: "ตรวจสอบให้แน่ใจว่าคอมพิวเตอร์และเบราว์เซอร์ของคุณปลอดภัยเพื่อป้องกันข้อมูลจากการบิดเบือนหรือรั่วไหล",
                copy_success: "คัดลอกสำเร็จ",
                copy_err: "คัดลอกล้มเหลว",
                mentionaddr: "ที่อยู่สกุลเงิน",
                paypwd: "กรุณาใส่รหัสผ่านการทำธุรกรรม",
                p_paypwd: "กรุณาใส่รหัสผ่านการทำธุรกรรม",
                p_addr: "กรุณาตั้งค่าที่อยู่ของคุณก่อน",
                minnum: "จำนวนขั้นต่ำของสกุลเงิน",
                recivenum: "จำนวนเงินในบัญชี",
                p_minnum: "กรุณาใส่หมายเลขสกุลเงิน",
                transfernum: "ปริมาณการหมุน",
                p_transfernum: "กรุณาระบุหมายเลขการโอน",
                from: "เข้าใจ",
                to: "จนกระทั่ง"
            },
            legal: {
                legal: "เหรียญฝรั่งเศส",
                ibuy: "ฉันจะซื้อ",
                isell: "ฉันจะขาย",
                price: "ราคาต่อหน่วย",
                limit: "จำกัด",
                buy: "ซื้อ",
                sell: "ขาย",
                anprice: "ราคา",
                annum: "จำนวน",
                pl: "โปรดเข้ามา",
                amount: "ผลรวม",
                num: "จำนวนรวม",
                allmoney: "ปริมาณการซื้อขาย",
                autocancel: "ยกเลิกอัตโนมัติ",
                do: "สั่งงาน",
                p_amout: "โปรดระบุจำนวนเงิน",
                coin: "สกุลเงิน",
                list: "บันทึกการซื้อขาย",
                t_tip1: "กรุณาจ่ายเงินให้พ่อค้าในเวลา",
                t_tip2: "กรุณาอดทนและรอการชําระเงิน",
                t_tip3: "ฉันแน่ใจว่าฉันยังไม่ได้จ่ายเงินเลย"
            },
            store: {
                myshop: "ร้านของฉัน",
                regtime: "เวลาลงทะเบียน",
                belongcoin: "เหรียญฝรั่งเศส",
                entershop: "เข้าไปในร้าน",
                rzshop: "ร้านค้าที่ได้รับการรับรอง",
                fabu: "จัดพิมพ์",
                allorder: "ประกอบเดี่ยว",
                thirtyorder: "วันเดียว",
                doneorder: "จบรายการ",
                donelv: "อัตราความสมบูรณ์",
                renzhengmobile: "โทรศัพท์มือถือ",
                renzhengauth: "การรับรองชื่อจริง",
                renzhenghigh: "การรับรองขั้นสูง",
                notdone: "แคล้วคลาด",
                done: "เสร็จสิ้น",
                yichang: "ส่วนละเอียด",
                lowershelf: "ชั้นวาง",
                protection: "ผู้ใหญ่",
                apply: "สมัครสิทธิมนุษยชน",
                back: "ถอนคำพูด",
                lookorder: "ดูคำสั่งซื้อ",
                minnum: "ปริมาณการซื้อขายขั้นต่ำ",
                maxnum: "ปริมาณการซื้อขายสูงสุด",
                p_payment: "กรุณาเลือกโหมดการชำระเงิน",
                p_coin: "กรุณาเลือกหน่วยเงินตรา",
                p_price: "กรุณาระบุราคาต่อหน่วย",
                p_min: "โปรดระบุปริมาณการซื้อขายขั้นต่ำ",
                p_max: "โปรดระบุปริมาณการซื้อขายสูงสุด",
                ithink: "ฉันจะคิดเกี่ยวกับมันอีกครั้ง",
                makeyichang: "ยืนยันว่าเครื่องหมายเป็นข้อยกเว้น",
                alipay: "จ่ายสมบัติ",
                wechat: "ไมโครจดหมาย",
                bank: "บัตรธนาคาร",
                t_minmax: "ปริมาณการซื้อขายสูงสุดไม่สามารถน้อยกว่าปริมาณการซื้อขายขั้นต่ำ",
                mysell: "ขายด่วน",
                mybuy: "ต้องการซื้อ",
                orderlist: "บันทึกการสั่งซื้อ",
                orderstatus: "สถานะการสั่งซื้อ",
                chongzhi: "ตั้งค่าใหม่",
                p_pay: "กรุณาจ่าย",
                p_waitpay: "ค้างชำระ",
                t_pay: "กรุณาจ่ายเงินให้ผู้ขายในเวลา",
                t_waitpay: "กรุณาอดทนและรอการชําระเงิน",
                t_paycancel: "คำสั่งถูกยกเลิกและไม่สามารถดูข้อมูลการชำระเงิน",
                t_havepay: "สั่งซื้อได้รับการชำระเงิน",
                t_hasdone: "สั่งซื้อเสร็จเรียบร้อยแล้ว",
                call: "ติดต่อกับแต่ละอื่นๆ",
                collectcode: "รหัสคอลเลกชัน",
                collectper: "เก็บเงิน",
                payper: "ผู้ซื้อ",
                collectacc: "บัญชีรับ",
                paycancode: "หมายเลขอ้างอิงการชำระเงิน",
                dotime: "เวลาเดียว",
                t_self: "กรุณาใช้ด้วยตัวเอง",
                t_transfer: "โอนเงินไปยังบัญชีข้างต้น",
                t_tip: "โปรดอย่าบันทึกข้อมูลเกี่ยวกับ BTC และ USDT ในระหว่างการโอนเงินเพื่อป้องกันไม่ให้การโอนเงินจากการสกัดกั้นหรือแช่แข็งบัตรธนาคาร",
                cancelorder: "ยกเลิกการสั่งซื้อ",
                ipay: "ฉันจ่ายเงินเรียบร้อยแล้ว",
                t_look: "กรุณาตรวจสอบข้อมูลการชำระเงินอย่างระมัดระวังก่อนที่จะยืนยันการชำระเงิน",
                t_con_collect: "ยืนยันการชำระเงิน",
                cancel_confrim: "ยืนยันการยกเลิกรายการ",
                t_tip1: "ถ้าคุณได้จ่ายเงินให้ผู้ขายกรุณาอย่ายกเลิกรายการ",
                t_tip2: "ผู้ซื้อวันสะสมสามยกเลิกจะจำกัดวันซื้อฟังก์ชัน",
                t_rule: "ยกเลิกกฎ",
                confrim_ipay: "ยืนยันการชำระเงินของฉัน",
                donotconfrim: "ถ้าคุณไม่จ่ายให้ผู้ขายกรุณาอย่าคลิกที่ปุ่มยืนยัน",
                lockacc: "คลิกที่เป็นอันตรายจะถูกระงับบัญชี",
                hedui: "กรุณาตรวจสอบข้อมูลการชำระเงินอย่างระมัดระวัง",
                notpayconfrim: "ถ้าคุณไม่ได้รับการชำระเงินจากร้านค้ากรุณาอย่าคลิกที่ปุ่มยืนยัน",
                yes: "ใช่แล้ว",
                no: "เลว",
                sd: "ล็อคสมดุล",
                journal: "บันทึกยอดคงเหลือ",
                business: "วาณิชย์",
                user: "ประเทศอเมริกา",
                backdone: "ถอนคำพูด"
            },
            coin: {
                bao: "เก็บเหรียญ",
                choose: "เลือกสกุลเงิน",
                total: "เงินฝากทั้งหมด",
                mybao: "เงินฝากของฉัน",
                profit: "รายได้ที่คาดว่าจะได้รับ",
                end_time: "เวลาหมดอายุ",
                day: "พรหมลิขิต",
                rate: "ผลผลิต",
                rule: "กฎการฝากเงิน"
            },
            team: {
                team: "ทีมของฉัน",
                zt_num: "จำนวนผลักดันโดยตรง",
                active_num: "กิจกรรมของทีม",
                profit: "ผลประโยชน์",
                cblog: "บันทึกค่าใช้จ่าย",
                bblog: "บันทึกเหรียญ",
                back: "กลับไปเป็นคนรับใช้",
                account: "บัญชีเงินฝาก"
            }
        };
        t.default = o
    },
    "75ab": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("929f")
            , a = n("46ea");
        for (var r in a)
            "default" !== r && function(e) {
                n.d(t, e, (function() {
                        return a[e]
                    }
                ))
            }(r);
        n("6797");
        var o, s = n("f0c5"), l = Object(s["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], o);
        t["default"] = l.exports
    },
    "778c": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        n("0c30"),
            n("2f62");
        var i = {
            onLaunch: function() {
                console.log("App Launch")
            },
            onShow: function() {
                console.log("App Show");
                var e = uni.getStorageSync("theme") || "dark";
                this.setTheme(e)
            },
            onHide: function() {
                console.log("App Hide")
            },
            methods: {
                setTheme: function(e) {
                    console.log(e),
                        this.$store.dispatch("changeTheme", e)
                }
            }
        };
        t.default = i
    },
    "7aca": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = !1;
        function a(e) {
            if (i)
                for (var t in console.log(e),
                    e)
                    uni.sendSocketMessage({
                        data: JSON.stringify(e[t])
                    })
        }
        function r(e) {
            i && uni.onSocketMessage((function(t) {
                    e && e(t.data)
                }
            ))
        }
        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                , t = arguments.length > 1 ? arguments[1] : void 0;
            if (i) {
                var n = window.location.protocol
                    , o = window.location.host
                    , s = n + "//" + o;
                uni.connectSocket({
                    url: s
                }),
                    uni.onSocketOpen((function(n) {
                            i = !0,
                                console.log(i),
                            e.length > 0 && a(e),
                                r(t)
                        }
                    ))
            }
        }
        function s() {
            uni.closeSocket(),
                i = !1,
                uni.onSocketClose((function(e) {
                        console.log("WebSocket 已关闭！"),
                            i = !1
                    }
                ))
        }
        var l = {
            listenFun: o,
            closeSocket: s
        };
        t.default = l
    },
    8257: function(e, t, n) {
        "use strict";
        (function(e) {
                var t = n("4ea4")
                    , i = t(n("e143"));
                e["____D57ACF2____"] = !0,
                    delete e["____D57ACF2____"],
                    e.__uniConfig = {
                        globalStyle: {
                            navigationBarTextStyle: "white",
                            navigationBarTitleText: "PaxfulCoins",
                            navigationBarBackgroundColor: "#102030",
                            backgroundColorTop: "#102030",
                            backgroundTextStyle: "dark"
                        },
                        tabBar: {
                            color: "#a2a6a5",
                            selectedColor: "#1881d2",
                            backgroundColor: "#16263E",
                            list: [{
                                pagePath: "pages/home/home",
                                iconPath: "static/footer/index0.png",
                                selectedIconPath: "static/footer/index1.png",
                                text: "Home",
                                redDot: !1,
                                badge: ""
                            }, {
                                pagePath: "pages/market/market",
                                iconPath: "static/footer/hang0.png",
                                selectedIconPath: "static/footer/hang1.png",
                                text: "Markets",
                                redDot: !1,
                                badge: ""
                            }, {
                                pagePath: "pages/trade/trade",
                                iconPath: "static/footer/trade0.png",
                                selectedIconPath: "static/footer/trade1.png",
                                text: "Exchange",
                                redDot: !1,
                                badge: ""
                            }, {
                                pagePath: "pages/lever/lever",
                                iconPath: "static/footer/gang0.png",
                                selectedIconPath: "static/footer/gang1.png",
                                text: "Leverage",
                                redDot: !1,
                                badge: ""
                            }, {
                                pagePath: "pages/assets/assets",
                                iconPath: "static/footer/mine0.png",
                                selectedIconPath: "static/footer/mine1.png",
                                text: "assets",
                                redDot: !1,
                                badge: ""
                            }],
                            borderStyle: "black"
                        }
                    },
                    e.__uniConfig.compilerVersion = "3.1.13",
                    e.__uniConfig.router = {
                        mode: "hash",
                        base: "/h5/"
                    },
                    e.__uniConfig.publicPath = "/h5/",
                    e.__uniConfig["async"] = {
                        loading: "AsyncLoading",
                        error: "AsyncError",
                        delay: 200,
                        timeout: 6e4
                    },
                    e.__uniConfig.debug = !1,
                    e.__uniConfig.networkTimeout = {
                        request: 6e4,
                        connectSocket: 6e4,
                        uploadFile: 6e4,
                        downloadFile: 6e4
                    },
                    e.__uniConfig.sdkConfigs = {},
                    e.__uniConfig.qqMapKey = "XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",
                    e.__uniConfig.nvue = {
                        "flex-direction": "column"
                    },
                    e.__uniConfig.__webpack_chunk_load__ = n.e,
                    i.default.component("pages-home-home", (function(e) {
                            var t = {
                                component: n.e("pages-home-home").then(function() {
                                    return e(n("5325"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-storeUser", (function(e) {
                            var t = {
                                component: n.e("pages-legal-storeUser").then(function() {
                                    return e(n("1ae3"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-ieo-index", (function(e) {
                            var t = {
                                component: n.e("pages-ieo-index").then(function() {
                                    return e(n("b3a9"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-ieo-link", (function(e) {
                            var t = {
                                component: n.e("pages-ieo-link").then(function() {
                                    return e(n("3c17"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-ieo-detail", (function(e) {
                            var t = {
                                component: n.e("pages-ieo-detail").then(function() {
                                    return e(n("58de"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-about", (function(e) {
                            var t = {
                                component: n.e("pages-mine-about").then(function() {
                                    return e(n("6179"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-lockming-index", (function(e) {
                            var t = {
                                component: n.e("pages-lockming-index").then(function() {
                                    return e(n("98cb"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-lockming-list", (function(e) {
                            var t = {
                                component: n.e("pages-lockming-list").then(function() {
                                    return e(n("f30c"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-login", (function(e) {
                            var t = {
                                component: n.e("pages-mine-login").then(function() {
                                    return e(n("64e2"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-trade-trade", (function(e) {
                            var t = {
                                component: n.e("pages-trade-trade").then(function() {
                                    return e(n("538c"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-trade-entrust", (function(e) {
                            var t = {
                                component: n.e("pages-trade-entrust").then(function() {
                                    return e(n("33ed"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-lever-lever", (function(e) {
                            var t = {
                                component: n.e("pages-lever-lever").then(function() {
                                    return e(n("e5ea"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-lever-leverList", (function(e) {
                            var t = {
                                component: n.e("pages-lever-leverList").then(function() {
                                    return e(n("f5d6"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-lever-orderList", (function(e) {
                            var t = {
                                component: n.e("pages-lever-orderList").then(function() {
                                    return e(n("ca2b"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-legal", (function(e) {
                            var t = {
                                component: n.e("pages-legal-legal").then(function() {
                                    return e(n("9c8e"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-store", (function(e) {
                            var t = {
                                component: n.e("pages-legal-store").then(function() {
                                    return e(n("9954"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-storeDetail", (function(e) {
                            var t = {
                                component: n.e("pages-legal-storeDetail").then(function() {
                                    return e(n("5454"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-transactionRecord", (function(e) {
                            var t = {
                                component: n.e("pages-legal-transactionRecord").then(function() {
                                    return e(n("b1e2"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-transfer", (function(e) {
                            var t = {
                                component: n.e("pages-legal-transfer").then(function() {
                                    return e(n("03d6"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-storeOrder", (function(e) {
                            var t = {
                                component: n.e("pages-legal-storeOrder").then(function() {
                                    return e(n("119f"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-orderDetail", (function(e) {
                            var t = {
                                component: Promise.all([n.e("pages-legal-order~pages-legal-orderDetail"), n.e("pages-legal-orderDetail")]).then(function() {
                                    return e(n("44f4"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-order", (function(e) {
                            var t = {
                                component: Promise.all([n.e("pages-legal-order~pages-legal-orderDetail"), n.e("pages-legal-order")]).then(function() {
                                    return e(n("0c34"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-legal-recordlist", (function(e) {
                            var t = {
                                component: n.e("pages-legal-recordlist").then(function() {
                                    return e(n("6f60"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-register", (function(e) {
                            var t = {
                                component: n.e("pages-mine-register").then(function() {
                                    return e(n("db98"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-setPwd", (function(e) {
                            var t = {
                                component: n.e("pages-mine-setPwd").then(function() {
                                    return e(n("b781"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-modifyPwd", (function(e) {
                            var t = {
                                component: n.e("pages-mine-modifyPwd").then(function() {
                                    return e(n("5857"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-market-market", (function(e) {
                            var t = {
                                component: n.e("pages-market-market").then(function() {
                                    return e(n("529d"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-market-kline", (function(e) {
                            var t = {
                                component: n.e("pages-market-kline").then(function() {
                                    return e(n("c9e4"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-market-second", (function(e) {
                            var t = {
                                component: n.e("pages-market-second").then(function() {
                                    return e(n("a801"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-home-news", (function(e) {
                            var t = {
                                component: n.e("pages-home-news").then(function() {
                                    return e(n("b111"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-home-newsDetail", (function(e) {
                            var t = {
                                component: n.e("pages-home-newsDetail").then(function() {
                                    return e(n("6e1b"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-forgetPwd", (function(e) {
                            var t = {
                                component: n.e("pages-mine-forgetPwd").then(function() {
                                    return e(n("d5af"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-forgetPwdNext", (function(e) {
                            var t = {
                                component: n.e("pages-mine-forgetPwdNext").then(function() {
                                    return e(n("7422"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-assets-assets", (function(e) {
                            var t = {
                                component: n.e("pages-assets-assets").then(function() {
                                    return e(n("db9d"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-userCenter", (function(e) {
                            var t = {
                                component: n.e("pages-mine-userCenter").then(function() {
                                    return e(n("ea96"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-assets-tradeAccount", (function(e) {
                            var t = {
                                component: n.e("pages-assets-tradeAccount").then(function() {
                                    return e(n("f26e"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-assets-charge", (function(e) {
                            var t = {
                                component: n.e("pages-assets-charge").then(function() {
                                    return e(n("9614"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-assets-mention", (function(e) {
                            var t = {
                                component: n.e("pages-assets-mention").then(function() {
                                    return e(n("9ee8"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-collect_money", (function(e) {
                            var t = {
                                component: n.e("pages-mine-collect_money").then(function() {
                                    return e(n("4628"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-invite", (function(e) {
                            var t = {
                                component: n.e("pages-mine-invite").then(function() {
                                    return e(n("7e3f"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-security", (function(e) {
                            var t = {
                                component: n.e("pages-mine-security").then(function() {
                                    return e(n("69b8"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-resetLegalPwd", (function(e) {
                            var t = {
                                component: n.e("pages-mine-resetLegalPwd").then(function() {
                                    return e(n("dcb3"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-modifyPwdNext", (function(e) {
                            var t = {
                                component: n.e("pages-mine-modifyPwdNext").then(function() {
                                    return e(n("c7c6"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-real_authentication", (function(e) {
                            var t = {
                                component: n.e("pages-mine-real_authentication").then(function() {
                                    return e(n("cb3b"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-gaojirenzheng", (function(e) {
                            var t = {
                                component: n.e("pages-mine-gaojirenzheng").then(function() {
                                    return e(n("cb8b"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),                    
                    i.default.component("pages-assets-transfer", (function(e) {
                            var t = {
                                component: n.e("pages-assets-transfer").then(function() {
                                    return e(n("4610"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    i.default.component("pages-mine-kefu", (function(e) {
                            var t = {
                                component: n.e("pages-mine-kefu").then(function() {
                                    return e(n("ba19"))
                                }
                                    .bind(null, n)).catch(n.oe),
                                delay: __uniConfig["async"].delay,
                                timeout: __uniConfig["async"].timeout
                            };
                            return __uniConfig["async"]["loading"] && (t.loading = {
                                name: "SystemAsyncLoading",
                                render: function(e) {
                                    return e(__uniConfig["async"]["loading"])
                                }
                            }),
                            __uniConfig["async"]["error"] && (t.error = {
                                name: "SystemAsyncError",
                                render: function(e) {
                                    return e(__uniConfig["async"]["error"])
                                }
                            }),
                                t
                        }
                    )),
                    e.__uniRoutes = [{
                        path: "/",
                        alias: "/pages/home/home",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({
                                        isQuit: !0,
                                        isEntry: !0,
                                        isTabBar: !0,
                                        tabBarIndex: 0
                                    }, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        enablePullDownRefresh: !0,
                                        titleNView: !1,
                                        pullToRefresh: {
                                            offset: "75px",
                                            style: "circle"
                                        }
                                    })
                                }, [e("pages-home-home", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            id: 1,
                            name: "pages-home-home",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/home/home",
                            isQuit: !0,
                            isEntry: !0,
                            isTabBar: !0,
                            tabBarIndex: 0,
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/legal/storeUser",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        backgroundColor: "#102030"
                                    })
                                }, [e("pages-legal-storeUser", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-storeUser",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/storeUser",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/ieo/index",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        backgroundColor: "#102030"
                                    })
                                }, [e("pages-ieo-index", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-ieo-index",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/ieo/index",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/ieo/link",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        backgroundColor: "#102030"
                                    })
                                }, [e("pages-ieo-link", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-ieo-link",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/ieo/link",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/ieo/detail",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationStyle: "custom",
                                        navigationBarTitleText: ""
                                    })
                                }, [e("pages-ieo-detail", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-ieo-detail",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/ieo/detail",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/mine/about",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "关于我们"
                                    })
                                }, [e("pages-mine-about", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-about",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/about",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/lockming/index",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#102030"
                                    })
                                }, [e("pages-lockming-index", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-lockming-index",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/lockming/index",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/lockming/list",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        backgroundColor: "#102030"
                                    })
                                }, [e("pages-lockming-list", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-lockming-list",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/lockming/list",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/login",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "登录",
                                        backgroundColor: "#102030"
                                    })
                                }, [e("pages-mine-login", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-login",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/login",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/trade/trade",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({
                                        isQuit: !0,
                                        isTabBar: !0,
                                        tabBarIndex: 2
                                    }, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#102030",
                                        enablePullDownRefresh: !0,
                                        titleNView: !1,
                                        pullToRefresh: {
                                            offset: "55px",
                                            style: "circle"
                                        }
                                    })
                                }, [e("pages-trade-trade", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            id: 2,
                            name: "pages-trade-trade",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/trade/trade",
                            isQuit: !0,
                            isTabBar: !0,
                            tabBarIndex: 2,
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/trade/entrust",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        enablePullDownRefresh: !0
                                    })
                                }, [e("pages-trade-entrust", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-trade-entrust",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/trade/entrust",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/lever/lever",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({
                                        isQuit: !0,
                                        isTabBar: !0,
                                        tabBarIndex: 3
                                    }, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#102030",
                                        enablePullDownRefresh: !0,
                                        titleNView: !1,
                                        pullToRefresh: {
                                            offset: "55px",
                                            style: "circle"
                                        }
                                    })
                                }, [e("pages-lever-lever", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            id: 3,
                            name: "pages-lever-lever",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/lever/lever",
                            isQuit: !0,
                            isTabBar: !0,
                            tabBarIndex: 3,
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/lever/leverList",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#102030",
                                        titleNView: !1
                                    })
                                }, [e("pages-lever-leverList", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-lever-leverList",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/lever/leverList",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/lever/orderList",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "全部委托",
                                        backgroundColor: "#102030"
                                    })
                                }, [e("pages-lever-orderList", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-lever-orderList",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/lever/orderList",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/legal/legal",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "法币"
                                    })
                                }, [e("pages-legal-legal", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-legal",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/legal",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/legal/store",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "我的店铺"
                                    })
                                }, [e("pages-legal-store", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-store",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/store",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/legal/storeDetail",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#0b53bd"
                                    })
                                }, [e("pages-legal-storeDetail", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-storeDetail",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/storeDetail",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/legal/transactionRecord",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "余额日志"
                                    })
                                }, [e("pages-legal-transactionRecord", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-transactionRecord",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/transactionRecord",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/legal/transfer",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "划转"
                                    })
                                }, [e("pages-legal-transfer", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-transfer",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/transfer",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/legal/storeOrder",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#0b53bd",
                                        titleNView: !1
                                    })
                                }, [e("pages-legal-storeOrder", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-storeOrder",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/storeOrder",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/legal/orderDetail",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#0b53bd",
                                        titleNView: !1
                                    })
                                }, [e("pages-legal-orderDetail", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-orderDetail",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/orderDetail",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/legal/order",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#0b53bd",
                                        titleNView: !1
                                    })
                                }, [e("pages-legal-order", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-order",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/order",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/legal/recordlist",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationStyle: "custom",
                                        backgroundColor: "#0b53bd",
                                        titleNView: !1
                                    })
                                }, [e("pages-legal-recordlist", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-legal-recordlist",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/legal/recordlist",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/mine/register",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "注册"
                                    })
                                }, [e("pages-mine-register", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-register",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/register",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/setPwd",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "设置密码"
                                    })
                                }, [e("pages-mine-setPwd", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-setPwd",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/setPwd",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/modifyPwd",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "修改密码"
                                    })
                                }, [e("pages-mine-modifyPwd", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-modifyPwd",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/modifyPwd",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/market/market",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({
                                        isQuit: !0,
                                        isTabBar: !0,
                                        tabBarIndex: 1
                                    }, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "行情",
                                        enablePullDownRefresh: !0
                                    })
                                }, [e("pages-market-market", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            id: 4,
                            name: "pages-market-market",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/market/market",
                            isQuit: !0,
                            isTabBar: !0,
                            tabBarIndex: 1,
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/market/kline",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationBarBackgroundColor: "#102030",
                                        navigationBarTextStyle: "black",
                                        navigationStyle: "custom",
                                        titleNView: !1
                                    })
                                }, [e("pages-market-kline", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-market-kline",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/market/kline",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/market/second",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "",
                                        navigationBarBackgroundColor: "#102030",
                                        navigationBarTextStyle: "black",
                                        navigationStyle: "custom",
                                        titleNView: !1
                                    })
                                }, [e("pages-market-second", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-market-second",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/market/second",
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/home/news",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "新闻中心"
                                    })
                                }, [e("pages-home-news", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-home-news",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/home/news",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/home/newsDetail",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "详情"
                                    })
                                }, [e("pages-home-newsDetail", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-home-newsDetail",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/home/newsDetail",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/forgetPwd",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "忘记密码"
                                    })
                                }, [e("pages-mine-forgetPwd", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-forgetPwd",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/forgetPwd",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/forgetPwdNext",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "重置密码"
                                    })
                                }, [e("pages-mine-forgetPwdNext", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-forgetPwdNext",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/forgetPwdNext",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/assets/assets",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({
                                        isQuit: !0,
                                        isTabBar: !0,
                                        tabBarIndex: 4
                                    }, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "资产",
                                        titleNView: !1
                                    })
                                }, [e("pages-assets-assets", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            id: 5,
                            name: "pages-assets-assets",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/assets/assets",
                            isQuit: !0,
                            isTabBar: !0,
                            tabBarIndex: 4,
                            windowTop: 0
                        }
                    }, {
                        path: "/pages/mine/userCenter",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "个人中心"
                                    })
                                }, [e("pages-mine-userCenter", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-userCenter",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/userCenter",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/assets/tradeAccount",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "交易账户",
                                        enablePullDownRefresh: !0
                                    })
                                }, [e("pages-assets-tradeAccount", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-assets-tradeAccount",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/assets/tradeAccount",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/assets/charge",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "充币",
                                        enablePullDownRefresh: !0
                                    })
                                }, [e("pages-assets-charge", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-assets-charge",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/assets/charge",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/assets/mention",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "提币",
                                        enablePullDownRefresh: !0
                                    })
                                }, [e("pages-assets-mention", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-assets-mention",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/assets/mention",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/collect_money",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "收款信息"
                                    })
                                }, [e("pages-mine-collect_money", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-collect_money",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/collect_money",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/invite",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "我的推广码"
                                    })
                                }, [e("pages-mine-invite", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-invite",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/invite",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/security",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "安全中心"
                                    })
                                }, [e("pages-mine-security", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-security",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/security",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/resetLegalPwd",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "修改交易密码"
                                    })
                                }, [e("pages-mine-resetLegalPwd", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-resetLegalPwd",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/resetLegalPwd",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/modifyPwdNext",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "重置密码"
                                    })
                                }, [e("pages-mine-modifyPwdNext", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-modifyPwdNext",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/modifyPwdNext",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/real_authentication",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "身份认证"
                                    })
                                }, [e("pages-mine-real_authentication", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-real_authentication",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/real_authentication",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/gaojirenzheng",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "高级认证"
                                    })
                                }, [e("pages-mine-gaojirenzheng", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-gaojirenzheng",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/gaojirenzheng",
                            windowTop: 44
                        }                        
                    }, {
                        path: "/pages/assets/transfer",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "划转",
                                        enablePullDownRefresh: !0
                                    })
                                }, [e("pages-assets-transfer", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-assets-transfer",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/assets/transfer",
                            windowTop: 44
                        }
                    }, {
                        path: "/pages/mine/kefu",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: Object.assign({}, __uniConfig.globalStyle, {
                                        navigationBarTitleText: "在线客服",
                                        enablePullDownRefresh: !0
                                    })
                                }, [e("pages-mine-kefu", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "pages-mine-kefu",
                            isNVue: !1,
                            maxWidth: 0,
                            pagePath: "pages/mine/kefu",
                            windowTop: 44
                        }
                    }, {
                        path: "/preview-image",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: {
                                        navigationStyle: "custom"
                                    }
                                }, [e("system-preview-image", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "preview-image",
                            pagePath: "/preview-image"
                        }
                    }, {
                        path: "/choose-location",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: {
                                        navigationStyle: "custom"
                                    }
                                }, [e("system-choose-location", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "choose-location",
                            pagePath: "/choose-location"
                        }
                    }, {
                        path: "/open-location",
                        component: {
                            render: function(e) {
                                return e("Page", {
                                    props: {
                                        navigationStyle: "custom"
                                    }
                                }, [e("system-open-location", {
                                    slot: "page"
                                })])
                            }
                        },
                        meta: {
                            name: "open-location",
                            pagePath: "/open-location"
                        }
                    }],
                e.UniApp && new e.UniApp
            }
        ).call(this, n("c8ba"))
    },
    "8a21": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                khyh: "開戶銀行",
                khzh: "開戶支行",
                czje: "充值金額",
                dzje: "到賬金額",
                tips: "提示",
                qdqx: "確定取消質押嗎",
                scsj: "鎖倉時間",
                a37: "輕鬆領獎勵",
                a33: "取消訂單將扣除",
                a32: "總利息",
                a31: "存幣數量",
                a30: "鎖倉記錄",
                a29: "預計總收益",
                a28: "挖礦更簡單",
                a27: "挖礦寶",
                a26: "鎖倉期限",
                a25: "天",
                a24: "日幣利息",
                a23: "近3日參考年化",
                a22: "鎖倉賺幣",
                a21: "取消質押",
                a20: "到期時間",
                a19: "質押時間",
                a18: "待產出數量",
                a17: "項目編號",
                a16: "質押記錄",
                a15: "取消質押返還本金,無法獲得收益",
                a14: "不足",
                a13: "錢包餘額",
                a12: "質押數量",
                a11: "質押",
                a10: "代幣",
                a9: "產出數量將轉化為等值的",
                a8: "預計待產出數量",
                a7: "總收益",
                a6: "賺取多重收益",
                a5: "存入",
                a4: "流動性質押",
                a3: "持有者可享受質押收益",
                a36: "匯款開戶銀行",
                a35: "匯款銀行卡號",
                a34: "匯款姓名",
                oldpwd: "請輸入舊密碼",
                zxkf: "在線客服",
                a2: "需要支付",
                a1: "認購幣種",
                a0: "提幣扣除",
                dqyuee: "當前余額",
                download: "下載APP",
                czsl: "充值數量",
                qbdz: "錢包地址",
                enterqbdz: "請輸入錢包地址",
                tjsh: "提交審核",
                sb01: "上幣申請時間視資料提交質量",
                sb02: "申請結果",
                sb03: "收到確認郵件後，根據郵件提交相關資料",
                sb04: "提交資料",
                sb05: "提交上幣申請",
                sb06: "申請",
                sb07: "申請流程",
                sb08: "申請上幣",
                sb09: "PaxfulCoins秉承著壹切為客戶著想，把用戶的利益放在首位，現尋找優質項目（幣種），回饋客戶的長期支持。上優質幣，買價值幣，只選PaxfulCoins！",
                ksgt: "快速溝通",
                sbsq: "上幣申請",
                qrszfpz: "請輸入支付憑證",
                zfpz: "支付憑證",
                dqsy: "當前收益",
                ygsy: "預估收益",
                rgcz: "認購操作",
                srrgsl: "輸入認購數量",
                kdh: "可兌換",
                gw: "官網",
                bps: "白皮書",
                sgzq: "申購週期",
                yr: "預熱",
                sg: "申購",
                js: "結束",
                xmxq: "項目詳情",
                rg: "認購",
                ieo: "IEO認購",
                zt: "狀態",
                fhjg: "發行價格",
                dqsj: "到期時間"
            },
                (0,
                    o.default)(a, "scsj", "鎖倉時間"),
                (0,
                    o.default)(a, "yjsy", "預計收益"),
                (0,
                    o.default)(a, "zxscsl", "最小鎖倉數量"),
                (0,
                    o.default)(a, "syl", "收益率"),
                (0,
                    o.default)(a, "sc", "鎖倉"),
                (0,
                    o.default)(a, "ts", "天數"),
                (0,
                    o.default)(a, "fhzl", "發行總量"),
                (0,
                    o.default)(a, "jssj", "結束時間"),
                (0,
                    o.default)(a, "yjs", "已結束"),
                (0,
                    o.default)(a, "wks", "未開始"),
                (0,
                    o.default)(a, "jxz", "進行中"),
                (0,
                    o.default)(a, "scz", "鎖倉中"),
                (0,
                    o.default)(a, "ydq", "已到期"),
                (0,
                    o.default)(a, "nodata", "沒有數據"),
                (0,
                    o.default)(a, "nomore", "沒有更多數據"),
                (0,
                    o.default)(a, "more", "加載更多"),
                (0,
                    o.default)(a, "qbye", "錢包餘額"),
                (0,
                    o.default)(a, "scgz", "鎖倉規則"),
                (0,
                    o.default)(a, "sclb", "鎖倉清單"),
                (0,
                    o.default)(a, "scwk", "鎖倉挖礦"),
                (0,
                    o.default)(a, "sly", "收益率"),
                (0,
                    o.default)(a, "yebz", "餘額不足"),
                (0,
                    o.default)(a, "mhydd", "秒合約訂單"),
                (0,
                    o.default)(a, "gmj", "購買價"),
                (0,
                    o.default)(a, "cjj", "成交價"),
                (0,
                    o.default)(a, "yjyk", "預計盈虧"),
                (0,
                    o.default)(a, "yk", "盈虧"),
                (0,
                    o.default)(a, "djs", "倒數計時"),
                a),
            login: {
                l_mobile: "手機登錄",
                l_email: "郵箱登錄",
                p_email: "請輸入郵箱",
                p_mobile: "請輸入手機號",
                p_pwd: "請輸入密碼",
                p_confirmPwd: "請確認密碼",
                p_confirmtradePwd: "請輸入交易密碼",
                p_vcode: "請輸入驗證碼",
                get_code: "獲取驗證碼",
                rem_pwd: "記住密碼",
                login: "登錄",
                noaccount: "還沒有PaxfulCoins帳號？",
                register: "註冊",
                forget_pwd: "在線客服",
                p_taccount: "請輸入正確的手機號",
                p_temail: "請輸入正確的郵箱",
                p_pwderr: "密碼輸入不正確",
                l_success: "登入成功",
                r_noedit: "注册後不能修改",
                r_mobile: "手機註冊",
                r_email: "郵箱註冊",
                r_hasaccount: "已有PaxfulCoins帳號",
                r_next: "下一步",
                r_sms: "簡訊驗證",
                r_smsemail: "郵箱驗證",
                r_pmobilecode: "請輸入手機驗證碼",
                r_pemailcode: "請輸入郵箱驗證碼",
                r_send: "發送",
                p_len: "密碼長度在6~16比特",
                p_notsame: "密碼輸入不一致",
                p_simple: "密碼過於簡單，請重新輸入",
                p_inputagain: "密碼輸入不一致，請重新輸入",
                p_first: "請先閱讀並同意使用者協定",
                p_invitecode: "邀請碼（可以为空）",
                p_inviteInput: "請輸入邀請碼",
                p_agree: "我同意",
                p_private: "使用者協定及隱私政策",
                p_set: "設定",
                p_setPwd: "設置密碼",
                f_mobile: "手機找回",
                f_email: "郵箱找回",
                e_mb: "手機號",
                e_email: "郵箱",
                e_pwd: "修改密碼",
                e_chongzhi: "重置密碼",
                e_dealPwd: "修改交易密碼",
                e_pdeal: "請輸入交易密碼",
                e_pdealerr: "交易密碼輸入不正確",
                e_pdealConfrim: "請確認交易密碼",
                e_confrim: "確認",
                e_confrim2: "確定",
                security: "安全中心",
                s_loginpwd: "登錄密碼",
                s_dealpwd: "交易密碼",
                s_edit: "修改"
            },
            about: {
                abt: "關於我們",
                concat: "聯系我們",
                privat: "隱私政策",
                theme: "夜間模式"
            },
            collect: {
                method: "收款方式",
                name: "真實姓名",
                p_name: "請輸入真實姓名",
                bank: "開戶行",
                p_bank: "請輸入開戶行",
                no: "銀行卡號",
                p_no: "請輸入銀行卡號",
                alipay: "支付寶號",
                p_alipay: "請輸入支付寶賬號",
                nick: "微信昵稱",
                p_nick: "請輸入微信昵稱",
                wechat: "微信賬號",
                p_wechat: "請輸入微信賬號",
                wechatCode: "微信收款碼",
                alipayCode: "支付寶收款碼",
                up_wechatCode: "請上傳微信收款碼",
                up_alipayCode: "請上傳支付寶收款碼",
                cardno: "身份證號",
                p_cardno: "請輸入身份證號",
                up_card: "上傳身份證照片",
                up_cardz: "上傳身份證正面",
                up_cardf: "上傳身份證反面",
                up_cardhand: "上傳手持身份證"
            },
            bind: {
                bindAddr: "綁定提幣地址",
                cur_select: "當前選擇幣種",
                addr: "提幣地址",
                codeauth: "我的授權碼",
                codetip: "將用戶添加為代理商時，需要驗證用戶的授權碼",
                p_addr: "請輸入提幣地址",
                code: "驗 證 碼 ",
                bind: "綁定",
                sendSuccess: "發送成功",
                bindOk: "綁定成功",
                tuiguang: "我的推廣碼",
                codes: "推廣碼",
                tip: "掃上面的二維碼圖案或輸入推廣碼，確認註冊",
                liantype: "鏈類型"
            },
            authentication: {
                person: "個人中心",
                renzheng: "身份認證",
                gaoji: "高級身份認證",
                go: "去認證",
                ing: "審核中",
                has: "已認證",
                rz_tip: "認證後可提升提幣額度",
                rz_tip1: "高級認證後，可進行單筆高於2000USD或累計金額大於10000USD的法幣交易高級認證後可申請VIP權益",
                name: "姓名",
                account: "賬號",
                zj: "證件號"
            },
            home: {
                legal: "法幣交易",
                zhichi: "支持BTC、USDT等",
                lever: "合约交易",
                news: "新聞中心",
                security: "安全可信",
                leader: "全球領先的數位資產交易平臺",
                updowns: "漲幅榜",
                name: "名稱",
                new_price: "最新價",
                fu: "漲跌幅",
                p_login: "請登入",
                welcome: "歡迎來到PaxfulCoins",
                myshop: "我的店鋪",
                myshare: "我的分享連結",
                logout: "退出登錄",
                detail: "詳情",
                up: "上拉加載",
                nomore: "暫無更多數據",
                norecord: "暫無記錄",
                loading: "加載中",
                team: "我的團隊",
                fast: "快捷買幣",
                micro: "秒合約"
            },
            market: {
                market: "行情",
                volume: "24H量",
                home: "首頁"
            },
            trade: {
                trade: "幣幣交易",
                buy: "買入",
                sell: "賣出",
                limit: "限價",
                shi: "市價",
                cancel: "取消",
                best: "以當前最優價格交易",
                num: "數量",
                use: "可用",
                amout: "交易額",
                price: "單價",
                time: "時間",
                bibi: "幣幣",
                all: "全部",
                back: "撤銷",
                dui: "交易對",
                notenough: "餘額不足",
                notbest: "當前沒有最優價格",
                p_price: "請輸入單價",
                p_num: "請輸入數量",
                delegate: "當前委托",
                all_delegate: "全部委托",
                his_delegate: "歷史委托",
                has_done: "已完成",
                has_cancel: "已取消",
                has_pay: "已付款",
                fee: "手續費",
                handnum: "交易手數",
                p_handnum: "請輸入手數",
                balance: "余額",
                buy_duo: "買入 (做多)",
                sell_kong: "賣出 (做空)",
                pankou: "盤口",
                chicang: "持倉",
                types: "類型",
                operate: "操作",
                pingcang: "平倉",
                chedan: "撤單",
                duo: "做多",
                kong: "做空",
                hands: "手數",
                hand: "手",
                times: "倍數",
                money: "保證金",
                confrim_ping: "確認平倉？",
                confrim_order: "確認下單",
                confrim_chedan: "確認撤單？",
                p_times: "請選擇倍數",
                p_hands: "請選擇或者輸入手數",
                p_delprice: "請輸入委託價格",
                p_notless: "輸入的手數不能低於",
                p_notmore: "輸入的手數不能高於",
                delegate_price: "委托價",
                price_cang: "開倉價",
                price_zhiying: "止盈價",
                num_zhehe: "折合數量",
                price_cur: "當前價",
                price_lose: "止損價",
                can_money: "可用保證金",
                time_start: "開倉時間",
                geye_fee: "隔夜費",
                dealtype: "交易類型"
            },
            lever: {
                delegating: "委託中",
                dealing: "交易中",
                pingcanging: "平倉中",
                hasping: "已平倉",
                hasback: "已撤銷",
                risk: "風險率",
                totalyk: "持倉總盈虧",
                yijian: "壹鍵平倉",
                setys: "設置止盈止損",
                profit: "預期盈利",
                lose: "預期虧損",
                price_zhiying: "止盈價格",
                price_lose: "止損價格",
                all_ping: "全部平倉",
                duo_ping: "只平多單",
                kong_ping: "只平空單"
            },
            assets: (r = {
                trade: "幣幣",
                lever: "合约",
                legal: "法幣",
                micro: "秒合約",
                manage: "理财",
                tradeacc: "幣幣賬戶",
                leveracc: "合约賬戶",
                legalacc: "法幣賬戶",
                microacc: "秒合約帳戶",
                zhehe: "折合",
                zhehecny: "總資產折合",
                lock: "凍結",
                assets: "資產",
                records: "財務記錄",
                charge: "充幣",
                mention: "提幣",
                transfer: "劃轉",
                record: "記錄",
                cur_coin: "當前幣種",
                addr_charge: "充幣地址",
                coypaddr: "復制地址",
                c_tip1: "請勿向上述地址充值任何非",
                c_tip2: "，否則資產將不可找回",
                c_tip3: "充幣僅支持simple send的方法，使用其他方法(send all) 的充幣暫時無法上賬，請諒解。",
                c_tip4: "您充值至上述地址後，需要整個網絡節點的確認，1次網絡確認後到賬，6次網絡確認可提幣",
                c_tip5: "最小充值金額",
                c_tip6: "小於最小金額的充值將不會上帳且無法退回",
                c_tip7: "您的充值地址不會經常改變，可以重複充值；如有更改，我們會儘量通過網絡公告或郵件通知您",
                c_tip8: "請務必確認電腦及瀏覽器安全，防止資訊被篡改或洩露",
                copy_success: "復制成功",
                copy_err: "復制失敗",
                mentionaddr: "提幣地址",
                paypwd: "交易密碼",
                p_paypwd: "请输入交易密码",
                p_addr: "請先設定您的提幣地址"
            },
                (0,
                    o.default)(r, "mention", "提幣"),
                (0,
                    o.default)(r, "minnum", "最小提幣數量"),
                (0,
                    o.default)(r, "recivenum", "到賬數量"),
                (0,
                    o.default)(r, "p_minnum", "請輸入提幣數量"),
                (0,
                    o.default)(r, "transfernum", "劃轉數量"),
                (0,
                    o.default)(r, "p_transfernum", "請輸入劃轉數量"),
                (0,
                    o.default)(r, "from", "從"),
                (0,
                    o.default)(r, "to", "至"),
                r),
            legal: {
                legal: "法幣",
                ibuy: "我要買",
                isell: "我要賣",
                price: "單價",
                limit: "限額",
                buy: "購買",
                sell: "出售",
                anprice: "按價格",
                annum: "按數量",
                pl: "請輸入",
                amount: "金額",
                num: "數量",
                allmoney: "交易總額",
                autocancel: "自動取消",
                do: "下單",
                p_amout: "請輸入金額",
                coin: "幣種",
                list: "交易記錄",
                t_tip1: "請及時付款給商家",
                t_tip2: "請耐心等待對方付款",
                t_tip3: "我確認還沒有付款給對方"
            },
            store: {
                myshop: "我的店鋪",
                regtime: "註冊時間",
                belongcoin: "所屬法幣",
                entershop: "進入店鋪",
                rzshop: "認證商家",
                fabu: "發布",
                allorder: "總成單",
                thirtyorder: "30日成單",
                doneorder: "完成單",
                donelv: "完成率",
                renzhengmobile: "手機認證",
                renzhengauth: "實名認證",
                renzhenghigh: "高級認證",
                notdone: "未完成",
                done: "已完成",
                yichang: "異常",
                lowershelf: "下架",
                protection: "維權中",
                apply: "申請維權",
                back: "撤回",
                lookorder: "查看訂單",
                minnum: "最小交易量",
                maxnum: "最大交易量",
                p_payment: "請選擇支付方式",
                p_coin: "請選擇貨幣單位",
                p_price: "請輸入單價",
                p_min: "請輸入最小交易量",
                p_max: "請輸入最大交易量",
                ithink: "我再想想",
                makeyichang: "確認標記為异常嗎",
                alipay: "支付寶",
                wechat: "微信",
                bank: "銀行卡",
                t_minmax: "最大交易量不能小於最小交易量",
                mysell: "我的出售",
                mybuy: "我的求購",
                orderlist: "訂單記錄",
                orderstatus: "訂單狀態",
                chongzhi: "重置",
                p_pay: "請付款",
                p_waitpay: "待付款",
                t_pay: "請及時付款給賣家",
                t_waitpay: "請耐心等待對方付款",
                t_paycancel: "訂單已取消，無法查看支付資訊",
                t_havepay: "訂單已支付",
                t_hasdone: "訂單已完成",
                call: "聯系對方",
                collectcode: "收款二維碼",
                collectper: "收款人",
                payper: "買家",
                collectacc: "收款帳號",
                paycancode: "付款參攷號",
                dotime: "下單時間",
                t_self: "請使用本人",
                t_transfer: "向以上帳號自行轉帳",
                t_tip: "在轉帳過程中請勿備註BTC、USDT等資訊，防止匯款被攔截、銀行卡被凍結等問題",
                cancelorder: "取消訂單",
                ipay: "我已付款成功",
                t_look: "請在確認收款前仔細查看支付資訊",
                t_con_collect: "確認已收款",
                cancel_confrim: "確認取消交易",
                t_tip1: "如果您已向賣家付款，請千萬不要取消交易",
                t_tip2: "買家當日累計三筆取消，會限制當日買入功能",
                t_rule: "取消規則",
                confrim_ipay: "確認我已付款",
                donotconfrim: "如您未向賣家付款，請不要點擊確認按鈕",
                lockacc: "惡意點擊將被凍結帳戶",
                hedui: "請仔細核對收款資訊",
                notpayconfrim: "如您未收到商家付款，請不要點擊確認按鈕",
                yes: "是",
                no: "否",
                sd: "鎖定餘額",
                journal: "餘額日誌",
                business: "商家",
                user: "用戶",
                backdone: "已撤回"
            },
            coin: {
                bao: "存幣寶",
                choose: "選擇幣種",
                total: "總存幣",
                mybao: "我的存幣",
                profit: "預計收益",
                end_time: "到期時間",
                day: "天數",
                rate: "收益率",
                rule: "存幣規則"
            },
            team: {
                team: "我的團隊",
                zt_num: "直推人数",
                active_num: "團隊活躍人數",
                profit: "收益",
                cblog: "充幣記錄",
                bblog: "幣幣記錄",
                back: "返傭",
                account: "帳戶"
            }
        };
        t.default = s
    },
    "929f": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "b", (function() {
                return a
            }
        )),
            n.d(t, "c", (function() {
                    return r
                }
            )),
            n.d(t, "a", (function() {
                    return i
                }
            ));
        var a = function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("App", {
                attrs: {
                    keepAliveInclude: e.keepAliveInclude
                }
            })
        }
            , r = []
    },
    "946b": function(e, t, n) {
        var i = n("319c");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("35a6f526", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
     actg: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                khyh: "บัญชีธนาคาร",
                khzh: "สาขาเปิดบัญชี",
                czje: "สาขาเปิดบัญชี",
                dzje: "จำนวนเงินเข้าบัญชี",
                tips: "คำใบ้",
                qdqx: "คุณแน่ใจว่าจะยกเลิกการจำนำหรือไม่?",
                scsj: "ล็อคเวลา",
                a37: "รับรางวัลง่าย ๆ",
                a33: "การยกเลิกจะถูกหัก",
                a32: "ดอกเบี้ยทั้งหมด",
                a31: "จำนวนเหรียญที่ฝาก",
                a30: "บันทึกตำแหน่งที่ถูกล็อก",
                a29: "รายได้รวมโดยประมาณ",
                a28: "การขุดง่ายกว่า",
                a27: "สมบัติการขุด",
                a26: "ช่วงกักตัว",
                a25: "สวรรค์",
                a24: "ดอกเบี้ยเงินเยนของญี่ปุ่น",
                a23: "การอ้างอิงรายปีสำหรับ 3 วันที่ผ่านมา",
                a22: "ล็อคตำแหน่งเพื่อรับเหรียญ",
                a21: "ยกเลิกการจำนำ",
                a20: "เวลาหมดอายุ",
                a19: "เวลาจำนำ",
                a18: "จำนวนเงินที่จะส่งออก",
                a17: "เลขที่โครงการ",
                a16: "บันทึกคำมั่นสัญญา",
                a15: "ยกเลิกการจำนำและคืนเงินต้น ไม่สามารถรับรายได้",
                a14: "ไม่เพียงพอ",
                a13: "ยอดคงเหลือใน Wallet",
                a12: "จำนวนเงินจำนำ",
                a11: "คำมั่นสัญญา",
                a10: "โทเค็น",
                a9: "ปริมาณผลผลิตจะถูกแปลงเป็นค่าที่เท่ากัน",
                a8: "ปริมาณที่คาดว่าจะส่งออก",
                a7: "รายได้รวม",
                a6: "รับผลตอบแทนหลายรายการ",
                a5: "เงินฝาก",
                a4: "คำมั่นสัญญามือถือ",
                a3: "ผู้ถือสามารถเพลิดเพลินกับรายได้จำนำ",
                a36: "ธนาคารเพื่อการเปิดบัญชีการโอนเงิน",
                a35: "หมายเลขบัตรธนาคารโอนเงิน",
                a34: "ชื่อการโอนเงิน",
                oldpwd: "กรุณาใส่รหัสผ่านเก่า",
                zxkf: "บริการออนไลน์",
                a2: "ต้องชำระเงิน",
                a1: "สกุลเงินที่สมัครสมาชิก",
                a0: "การหักเงินจากการถอนเงิน",
                dqyuee: "ยอดเงินปัจจุบัน",
                download: "ดาวน์โหลดAPP",
                czsl: "ปริมาณเติมเงิน",
                qbdz: "ที่อยู่กระเป๋าเงิน",
                enterqbdz: "กรุณากรอกที่อยู่กระเป๋าเงิน",
                tjsh: "ส่งรีวิว",
                sb01: "ระยะเวลาในการสมัครขึ้นอยู่กับคุณภาพของการส่งข้อมูล",
                sb02: "ผลการสมัคร",
                sb03: "หลังจากได้รับอีเมลยืนยันแล้ว ให้ส่งข้อมูลที่เกี่ยวข้องตามอีเมล",
                sb04: "ส่งข้อมูล",
                sb05: "ยื่นใบสมัครเพื่อลงประกาศ",
                sb06: "แอปพลิเคชัน",
                sb07: "ขั้นตอนการสมัคร",
                sb08: "สมัครรายการ",
                sb09: "Pro ยึดถือทุกอย่างเพื่อประโยชน์ของลูกค้าและให้ความสำคัญกับผู้ใช้เป็นอันดับแรก ตอนนี้ เรากำลังมองหาโครงการคุณภาพสูง (สกุลเงิน) เพื่อตอบแทนลูกค้าของเราสำหรับการสนับสนุนระยะยาวของพวกเขา รับซื้อเหรียญคุณภาพสูง รับซื้อเหรียญคุ้ม เลือก Pro . เท่านั้น！",
                ksgt: "สื่อสารได้อย่างรวดเร็ว",
                sbsq: "แอพลิเคชันสำหรับรายการ",
                qrszfpz: "กรุณากรอกใบสำคัญการชำระเงิน",
                zfpz: "ใบสำคัญจ่าย",
                dqsy: "รายได้ปัจจุบัน",
                ygsy: "รายได้โดยประมาณ",
                rgcz: "การดำเนินการสมัครสมาชิก",
                srrgsl: "การดำเนินการสมัครสมาชิก",
                kdh: "เปิดประทุน",
                gw: "เว็บไซต์อย่างเป็นทางการ",
                bps: "กระดาษสีขาว",
                sgzq: "รอบการสมัคร",
                yr: "อุ่นเครื่อง",
                sg: "ติดตาม",
                js: "เสร็จสิ้น",
                xmxq: "รายละเอียดโครงการ",
                rg: "ติดตาม",
                ieo: "IEO ติดตาม",
                zt: "สถานะ",
                fhjg: "ราคาจำหน่าย",
                dqsj: "วันที่หมดอายุ"
            },
                (0,
                    o.default)(a, "scsj", "ล็อคเวลา"),
                (0,
                    o.default)(a, "yjsy", "รายได้โดยประมาณ"),
                (0,
                    o.default)(a, "zxscsl", "ปริมาณการล็อคขั้นต่ำ"),
                (0,
                    o.default)(a, "syl", "อัตราผลตอบแทน"),
                (0,
                    o.default)(a, "sc", "ล็อคไว้"),
                (0,
                    o.default)(a, "ts", "วัน"),
                (0,
                    o.default)(a, "fhzl", "การออกทั้งหมด"),
                (0,
                    o.default)(a, "jssj", "เวลาสิ้นสุด"),
                (0,
                    o.default)(a, "yjs", "เกิน"),
                (0,
                    o.default)(a, "wks", "ยังไม่เริ่ม"),
                (0,
                    o.default)(a, "jxz", "กำลังดำเนินการ"),
                (0,
                    o.default)(a, "scz", "ถูกล็อค"),
                (0,
                    o.default)(a, "ydq", "จะหมดอายุ"),
                (0,
                    o.default)(a, "nodata", "ไม่มีข้อมูล"),
                (0,
                    o.default)(a, "nomore", "ไม่มีข้อมูลอีกต่อไป"),
                (0,
                    o.default)(a, "more", "โหลดเพิ่ม"),
                (0,
                    o.default)(a, "qbye", "ยอดกระเป๋าสตางค์"),
                (0,
                    o.default)(a, "scgz", "กฎการป้องกันความเสี่ยง"),
                (0,
                    o.default)(a, "sclb", "รายการตำแหน่งที่ถูกล็อค"),
                (0,
                    o.default)(a, "ts", "วัน"),
                (0,
                    o.default)(a, "scwk", "ล็อคการขุด"),
                (0,
                    o.default)(a, "sly", "อัตราผลตอบแทน"),
                (0,
                    o.default)(a, "yebz", "ยอดเงินไม่เพียงพอ"),
                (0,
                    o.default)(a, "mhydd", "คำสั่งสัญญาที่สอง"),
                (0,
                    o.default)(a, "gmj", "ราคาซื้อ"),
                (0,
                    o.default)(a, "cjj", "ราคาสุดท้าย"),
                (0,
                    o.default)(a, "yjyk", "กำไรขาดทุนโดยประมาณ"),
                (0,
                    o.default)(a, "yk", "กำไรและขาดทุน"),
                (0,
                    o.default)(a, "djs", "นับถอยหลัง"),
                a),
            login: {
                l_mobile: "เข้าสู่ระบบด้วยโทรศัพท์",
                l_email: "อีเมล์เข้าสู่ระบบ",
                p_email: "กรุณากรอกอีเมล์ของคุณ",
                p_mobile: "กรุณากรอกหมายเลขโทรศัพท์",
                p_pwd: "กรุณาใส่รหัสผ่าน",
                p_confirmPwd: "กรุณายืนยันรหัสผ่าน",
                p_confirmtradePwd: "กรุณายืนยันรหัสผ่านของค",
                p_vcode: "กรุณาใส่รหัสยืนยัน",
                get_code: "รับรหัสยืนยัน",
                rem_pwd: "จดจำรหัสผ่าน",
                login: "เข้าสู่ระบบ",
                noaccount: "ยังไม่มีบัญชี PaxfulCoins？",
                register: "ลงทะเบียน",
                forget_pwd: "บริการออนไลน์",
                p_taccount: "โปรดป้อนหมายเลขโทรศัพท์ที่ถูกต้อง",
                p_temail: "กรุณากรอกอีเมล์ของคุณ",
                p_pwderr: "ใส่รหัสผ่านไม่ถูกต้อง",
                l_success: "เข้าสู่ระบบสำเร็จ",
                r_noedit: "ไม่สามารถแก้ไขได้หลังจากลงทะเบียนแล้ว",
                r_mobile: "ลงทะเบียนโทรศัพท์ของคุณ",
                r_email: "การลงทะเบียนอีเมล",
                r_hasaccount: "มีบัญชี PaxfulCoins อยู่แล้ว",
                r_next: "ขั้นตอนต่อไป",
                r_sms: "การยืนยันทาง SMS",
                r_smsemail: "การยืนยันอีเมล",
                r_pmobilecode: "กรุณากรอกรหัสยืนยันทางโทรศัพท์",
                r_pemailcode: "กรุณากรอกรหัสยืนยันอีเมล",
                r_send: "ส่ง",
                p_len: "ความยาวรหัสผ่าน 6~16 หลัก",
                p_notsame: "การป้อนรหัสผ่านไม่สอดคล้องกัน",
                p_simple: "รหัสผ่านง่ายเกินไป โปรดป้อนใหม่",
                p_inputagain: "การป้อนรหัสผ่านไม่สอดคล้องกัน โปรดป้อนใหม่อีกครั้ง",
                p_first: "โปรดอ่านและยอมรับข้อตกลงผู้ใช้ก่อน",
                p_invitecode: "รหัสเชิญ (สามารถเว้นว่างได้)",
                p_inviteInput: "กรุณาใส่รหัสเชิญ",
                p_agree: "ฉันยอมรับ",
                p_private: "ข้อตกลงผู้ใช้และนโยบายความเป็นส่วนตัว",
                p_set: "ติดตั้ง",
                p_setPwd: "ตั้งรหัสผ่าน",
                f_mobile: "การกู้คืนโทรศัพท์",
                f_email: "ดึงอีเมล",
                e_mb: "หมายเลขโทรศัพท์",
                e_email: "จดหมาย",
                e_pwd: "เปลี่ยนรหัสผ่าน",
                e_chongzhi: "รีเซ็ตรหัสผ่าน",
                e_dealPwd: "แก้ไขรหัสผ่านการทำธุรกรรม",
                e_pdeal: "กรุณาใส่รหัสผ่านการทำธุรกรรม",
                e_pdealerr: "กรอกรหัสผ่านธุรกรรมไม่ถูกต้อง",
                e_pdealConfrim: "กรุณายืนยันรหัสผ่านการทำรายการ",
                e_confrim: "แน่นอน",
                e_confrim2: "แน่นอน",
                security: "ศูนย์รักษาความปลอดภัย",
                s_loginpwd: "รหัสในการลงชื่อเข้าใช้",
                s_dealpwd: "รหัสผ่านการทำธุรกรรม",
                s_edit: "ปรับปรุงใหม่"
            },
            about: {
                abt: "เกี่ยวกับเรา",
                concat: "ติดต่อเรา",
                privat: "นโยบายความเป็นส่วนตัว",
                theme: "โหมดกลางคืน"
            },
            collect: {
                method: "วิธีการชำระเงิน",
                name: "ชื่อจริง",
                p_name: "กรุณากรอกชื่อจริงของท่าน",
                bank: "ธนาคารบัญชี",
                p_bank: "กรุณากรอกธนาคารที่เปิดบัญชี",
                no: "หมายเลขบัตรธนาคาร",
                p_no: "กรุณากรอกหมายเลขบัตรธนาคาร",
                alipay: "หมายเลขอาลีเพย์",
                p_alipay: "กรุณากรอกบัญชี Alipay ของคุณ",
                nick: "ชื่อเล่น WeChat",
                p_nick: "กรุณากรอกชื่อเล่น WeChat",
                wechat: "บัญชีวีแชท",
                p_wechat: "กรุณากรอกบัญชี WeChat",
                wechatCode: "รหัสการชำระเงิน WeChat",
                alipayCode: "รหัสการชำระเงิน Alipay",
                up_wechatCode: "กรุณาอัพโหลดรหัสการชำระเงิน WeChat",
                up_alipayCode: "กรุณาอัพโหลดรหัสการชำระเงิน Alipay",
                cardno: "หมายเลขประจำตัวประชาชน",
                p_cardno: "กรุณากรอกหมายเลขประจำตัวประชาชน",
                up_card: "อัพโหลดรูปบัตรประชาชน",
                up_cardz: "อัพโหลดหน้าบัตรประชาชน",
                up_cardf: "อัพโหลดด้านหลังบัตรประชาชน",
                up_cardhand: "อัพโหลดบัตรประจำตัวประชาชน"
            },
            bind: {
                bindAddr: "ผูกที่อยู่ถอน",
                cur_select: "สกุลเงินที่เลือกในปัจจุบัน",
                addr: "ที่อยู่ถอนเงิน",
                codeauth: "รหัสอนุญาตของฉัน",
                codetip: "เมื่อเพิ่มผู้ใช้เป็นเอเจนซี่ ต้องตรวจสอบรหัสการให้สิทธิ์ของผู้ใช้",
                p_addr: "กรุณากรอกที่อยู่ถอนเงิน",
                code: "รหัสยืนยัน ",
                bind: "ผูก",
                sendSuccess: "ส่งเรียบร้อย",
                bindOk: "ผูกสำเร็จ",
                tuiguang: "รหัสโปรโมชั่นของฉัน",
                codes: "รหัสโปรโมชั่น",
                tip: "สแกนรูปแบบ QR code ด้านบนหรือใส่รหัสโปรโมชั่นเพื่อยืนยันการลงทะเบียน",
                liantype: "ประเภทโซ่"
            },
            authentication: {
                person: "ศูนย์ส่วนบุคคล",
                renzheng: "บัตรประจำตัวประชาชน",
                gaoji: "การรับรองขั้นสูง",
                go: "ไปที่การรับรอง",
                ing: "ภายใต้การทบทวน",
                has: "ตรวจสอบแล้ว",
                rz_tip: "สามารถเพิ่มขีดจำกัดการถอนได้หลังจากตรวจสอบสิทธิ์",
                name: "ชื่อ",
                account: "บัญชีผู้ใช้",
                zj: "ใบอนุญาตเลขที่"
            },
            home: {
                legal: "ธุรกรรมสกุลเงิน Fiat",
                zhichi: "รองรับ BTC, USDT เป็นต้น",
                lever: "ธุรกรรมสัญญา",
                news: "ศูนย์ข่าว",
                security: "ปลอดภัยและเชื่อถือได้",
                leader: "แพลตฟอร์มการซื้อขายสินทรัพย์ดิจิทัลชั้นนำของโลก",
                updowns: "เพิ่มรายการ",
                name: "ชื่อ",
                new_price: "ราคาล่าสุด",
                fu: "เปลี่ยนใบเสนอราคา",
                p_login: "กรุณาเข้าสู่ระบบ",
                welcome: "ยินดีต้อนรับสู่ PaxfulCoins",
                myshop: "ร้านของฉัน",
                myshare: "ลิงค์แชร์ของฉัน",
                logout: "ออกจากระบบ",
                detail: "รายละเอียด",
                up: "ดึงขึ้นโหลด",
                nomore: "ไม่มีข้อมูลอีกต่อไป",
                norecord: "ไม่มีบันทึก",
                loading: "กำลังโหลด",
                team: "ทีมของฉัน",
                fast: "รีบซื้อเหรียญ",
                micro: "ตัวเลือก"
            },
            market: {
                market: "คำคม",
                volume: "ปริมาณ 24H",
                home: "หน้าแรก"
            },
            trade: {
                trade: "ธุรกรรมสกุลเงิน",
                buy: "ซื้อใน",
                sell: "ขาย",
                limit: "ราคาจำกัด",
                shi: "ราคาตลาด",
                cancel: "ยกเลิก",
                best: "ซื้อขายในราคาที่ดีที่สุดในปัจจุบัน",
                num: "ปริมาณ",
                use: "มีอยู่",
                amout: "จำนวนเงินที่ทำรายการ",
                price: "ราคา",
                time: "เวลา",
                bibi: "เหรียญ",
                all: "ทั้งหมด",
                back: "ถอน",
                dui: "คู่ซื้อขาย",
                notenough: "ยอดเงินไม่เพียงพอ",
                notbest: "ขณะนี้ไม่มีราคาที่ดีที่สุด",
                p_price: "กรุณาใส่ราคา",
                p_num: "กรุณากรอกจำนวน",
                delegate: "ค่าคอมมิชชั่นปัจจุบัน",
                all_delegate: "รับหน้าที่ทั้งหมด",
                his_delegate: "ค่าคอมมิชชั่นประวัติศาสตร์",
                has_done: "สมบูรณ์",
                has_cancel: "ยกเลิก",
                has_pay: "จ่าย",
                fee: "ค่าธรรมเนียมการจัดการ",
                handnum: "ล็อตซื้อขาย",
                p_handnum: "กรุณาใส่ล็อต",
                balance: "สมดุล",
                buy_duo: "ซื้อ (ไปยาว)",
                sell_kong: "ขาย (สั้น)",
                pankou: "พิการ",
                chicang: "ตำแหน่ง",
                types: "พิมพ์",
                operate: "ดำเนินงาน",
                pingcang: "การชำระบัญชี",
                chedan: "ยกเลิกคำสั่งซื้อ",
                duo: "ทำมากขึ้น",
                kong: "สั้น",
                hands: "มาก",
                hand: "มือ",
                times: "หลายรายการ",
                money: "มาร์จิ้น",
                confrim_ping: "ยืนยันปิดสถานะ？",
                confrim_order: "ยืนยันรายการ",
                confrim_chedan: "ยืนยันการยกเลิก？",
                p_times: "โปรดเลือกหลายรายการ",
                p_hands: "กรุณาเลือกหรือใส่ล็อต",
                p_delprice: "กรุณาใส่ค่าคอมมิชชั่น",
                p_notless: "จำนวนล็อตที่ป้อนต้องไม่น้อยกว่า",
                p_notmore: "จำนวนล็อตที่ป้อนต้องไม่เกิน",
                delegate_price: "ราคาคอมมิชชั่น",
                price_cang: "ราคาเปิด",
                price_zhiying: "ขายทำกำไร",
                num_zhehe: "ปริมาณที่แปลงแล้ว",
                price_cur: "ราคาปัจจุบัน",
                price_lose: "ราคาหยุด",
                can_money: "อัตรากำไรขั้นต้นที่มีอยู่",
                time_start: "เวลาเปิดทำการ",
                geye_fee: "ค่าธรรมเนียมค้างคืน",
                dealtype: "ประเภทรายการ"
            },
            lever: {
                delegating: "การว่าจ้าง",
                dealing: "ในการทำธุรกรรม",
                pingcanging: "ตำแหน่งปิด",
                hasping: "ปิด",
                hasback: "ยกเลิกคำสั่งซื้อ",
                risk: "อัตราความเสี่ยง",
                totalyk: "กำไรขาดทุนรวมของโพซิชั่น",
                yijian: "การชำระบัญชีในคลิกเดียว",
                setys: "กำหนดกำไรและหยุดขาดทุน",
                profit: "กำไรที่คาดหวัง",
                lose: "คาดขาดทุน",
                price_zhiying: "รับราคากำไร",
                price_lose: "ราคาหยุด",
                all_ping: "ปิดทุกตำแหน่ง",
                duo_ping: "แบนคำสั่งเพิ่มเติมเท่านั้น",
                kong_ping: "ปิดเฉพาะคำสั่งสั้น"
            },
            assets: (r = {
                trade: "เหรียญ",
                lever: "สัญญา",
                legal: "สกุลเงิน Fiat",
                micro: "ตัวเลือก",
                manage: "การจัดการทางการเงิน",
                tradeacc: "บัญชีสกุลเงิน",
                leveracc: "บัญชีสัญญา",
                legalacc: "บัญชีเฟียต",
                microacc: "บัญชีสัญญาที่สอง",
                zhehe: "แปลง",
                zhehecny: "สินทรัพย์ทั้งหมดที่แปลงแล้ว",
                lock: "แช่แข็ง",
                assets: "ทรัพย์สิน",
                records: "บันทึกทางการเงิน",
                charge: "เติมเงิน",
                mention: "ถอน",
                transfer: "โอนย้าย",
                record: "บันทึก",
                cur_coin: "สกุลเงินปัจจุบัน",
                addr_charge: "ที่อยู่เงินฝาก",
                coypaddr: "คัดลอกที่อยู่",
                c_tip1: "กรุณาอย่าเติมเงินใด ๆ ที่ไม่ใช่",
                c_tip2: "มิเช่นนั้นทรัพย์สินจะไม่ได้รับคืน",
                c_tip3: "การฝากสนับสนุนเฉพาะวิธีการส่งแบบธรรมดาและการฝากโดยใช้วิธีอื่นไม่สามารถโพสต์ได้ชั่วคราว โปรดเข้าใจ",
                c_tip4: "หลังจากที่คุณเติมเงินไปยังที่อยู่ข้างต้น คุณต้องได้รับการยืนยันจากโหนดเครือข่ายทั้งหมด หลังจาก 1 การยืนยันเครือข่าย บัญชีจะได้รับเครดิตและเหรียญสามารถถอนออกได้หลังจากยืนยัน 6 เครือข่าย",
                c_tip5: "จำนวนเติมเงินขั้นต่ำ",
                c_tip6: "เงินฝากน้อยกว่าจำนวนขั้นต่ำจะไม่ถูกโพสต์ในบัญชีและไม่สามารถคืนเงินได้",
                c_tip7: "ที่อยู่สำหรับเติมเงินของคุณจะไม่เปลี่ยนแปลงบ่อย คุณสามารถเติมเงินได้ หากมีการเปลี่ยนแปลง เราจะพยายามแจ้งให้คุณทราบผ่านประกาศออนไลน์หรืออีเมล",
                c_tip8: "อย่าลืมยืนยันความปลอดภัยของคอมพิวเตอร์และเบราว์เซอร์ของคุณเพื่อป้องกันไม่ให้ข้อมูลถูกดัดแปลงหรือรั่วไหล",
                copy_success: "คัดลอกสำเร็จ",
                copy_err: "คัดลอกไม่สำเร็จ",
                mentionaddr: "ที่อยู่ถอนเงิน",
                paypwd: "กรุณาใส่รหัสผ่านการทำธุรกรรม",
                p_paypwd: "กรุณาใส่รหัสผ่านการทำธุรกรรม",
                p_addr: "กรุณาตั้งค่าที่อยู่ถอนเงินของคุณก่อน"
            },
                (0,
                    o.default)(r, "mention", "ถอน"),
                (0,
                    o.default)(r, "minnum", "จำนวนถอนขั้นต่ำ"),
                (0,
                    o.default)(r, "recivenum", "ปริมาณที่มาถึง"),
                (0,
                    o.default)(r, "p_minnum", "กรุณาระบุจำนวนการถอน"),
                (0,
                    o.default)(r, "transfernum", "จำนวนการโอน"),
                (0,
                    o.default)(r, "p_transfernum", "กรุณาระบุจำนวนเงินโอน"),
                (0,
                    o.default)(r, "from", "จาก"),
                (0,
                    o.default)(r, "to", "ถึง"),
                r),
            legal: {
                legal: "สกุลเงิน Fiat",
                ibuy: "ฉันต้องการที่จะซื้อ",
                isell: "อยากขาย",
                price: "ราคาต่อหน่วย",
                limit: "ขีดจำกัด",
                buy: "ซื้อ",
                sell: "ขาย",
                anprice: "ตามราคา",
                annum: "ตามปริมาณ",
                pl: "กรุณาป้อน",
                amount: "จำนวน",
                num: "ปริมาณ",
                allmoney: "ธุรกรรมทั้งหมด",
                autocancel: "ยกเลิกโดยอัตโนมัติ",
                do: "สั่งซื้อสินค้า",
                p_amout: "กรุณากรอกจำนวนเงิน",
                coin: "สกุลเงิน",
                list: "บันทึกการทำธุรกรรม",
                t_tip1: "กรุณาชำระเงินให้พ่อค้าตรงเวลา",
                t_tip2: "กรุณาอดทนรอเพื่อให้อีกฝ่ายชำระเงิน",
                t_tip3: "ยืนยันว่าไม่ได้จ่ายให้อีกฝ่าย"
            },
            store: {
                myshop: "我的店铺",
                regtime: "注册时间",
                belongcoin: "所属法币",
                entershop: "进入店铺",
                rzshop: "认证商家",
                fabu: "发布",
                allorder: "总成单",
                thirtyorder: "30日成单",
                doneorder: "完成单",
                donelv: "完成率",
                renzhengmobile: "手机认证",
                renzhengauth: "实名认证",
                renzhenghigh: "高级认证",
                notdone: "未完成",
                done: "已完成",
                yichang: "异常",
                lowershelf: "下架",
                protection: "维权中",
                apply: "申请维权",
                back: "撤回",
                lookorder: "查看订单",
                minnum: "最小交易量",
                maxnum: "最大交易量",
                p_payment: "请选择支付方式",
                p_coin: "请选择货币单位",
                p_price: "请输入单价",
                p_min: "请输入最小交易量",
                p_max: "请输入最大交易量",
                ithink: "我再想想",
                makeyichang: "确认标记为异常吗",
                alipay: "支付宝",
                wechat: "微信",
                bank: "银行卡",
                t_minmax: "最大交易量不能小于最小交易量",
                mysell: "我的出售",
                mybuy: "我的求购",
                orderlist: "订单记录",
                orderstatus: "订单状态",
                chongzhi: "重置",
                p_pay: "请付款",
                p_waitpay: "待付款",
                t_pay: "请及时付款给卖家",
                t_waitpay: "请耐心等待对方付款",
                t_paycancel: "订单已取消,无法查看支付信息",
                t_havepay: "订单已支付",
                t_hasdone: "订单已完成",
                call: "联系对方",
                collectcode: "收款二维码",
                collectper: "收款人",
                payper: "买家",
                collectacc: "收款账号",
                paycancode: "付款参考号",
                dotime: "下单时间",
                t_self: "请使用本人",
                t_transfer: "向以上账号自行转账",
                t_tip: "在转账过程中请勿备注BTC、USDT等信息，防止汇款被拦截、银行卡被冻结等问题",
                cancelorder: "取消订单",
                ipay: "我已付款成功",
                t_look: "请在确认收款前仔细查看支付信息",
                t_con_collect: "确认已收款",
                cancel_confrim: "确认取消交易",
                t_tip1: "如果您已向卖家付款，请千万不要取消交易",
                t_tip2: "买家当日累计三笔取消，会限制当日买入功能",
                t_rule: "取消规则",
                confrim_ipay: "确认我已付款",
                donotconfrim: "如您未向卖家付款，请不要点击确认按钮",
                lockacc: "恶意点击将被冻结账户",
                hedui: "请仔细核对收款信息",
                notpayconfrim: "如您未收到商家付款，请不要点击确认按钮",
                yes: "是",
                no: "否",
                sd: "锁定余额",
                journal: "余额日志",
                business: "商家",
                user: "用户",
                backdone: "已撤回"
            },
            coin: {
                bao: "สมบัติฝากเหรียญ",
                choose: "เลือกสกุลเงิน",
                total: "ยอดเงินฝาก",
                mybao: "เงินฝากของฉัน",
                profit: "รายได้โดยประมาณ",
                end_time: "วันที่หมดอายุ",
                day: "วัน",
                rate: "อัตราผลตอบแทน",
                rule: "กฎการฝากเงิน"
            },
            team: {
                team: "ทีมของฉัน",
                zt_num: "กดโดยตรง",
                active_num: "จำนวนสมาชิกในทีมที่ใช้งานอยู่",
                profit: "รายได้",
                cblog: "บันทึกการฝาก",
                bblog: "บันทึกสกุลเงิน",
                back: "เงินคืน",
                account: "บัญชี"
            }
        };
        t.default = s
    },
    acml: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                khyh: "akaun bank",
                khzh: "Cawangan pembukaan akaun",
                czje: "Jumlah cas semula",
                dzje: "Jumlah ke akaun",
                tips: "petunjuk",
                qdqx: "Adakah anda pasti membatalkan ikrar?",
                scsj: "Masa lokap",
                a37: "Dapatkan ganjaran dengan mudah",
                a33: "Pembatalan akan ditolak",
                a32: "Jumlah faedah",
                a31: "Bilangan syiling yang didepositkan",
                a30: "Rekod kedudukan terkunci",
                a29: "Anggaran jumlah hasil",
                a28: "Perlombongan lebih mudah",
                a27: "Perlombongan harta karun",
                a26: "Tempoh lokap",
                a25: "langit",
                a24: "Faedah Yen Jepun",
                a23: "Rujukan tahunan untuk 3 hari terakhir",
                a22: "Kunci kedudukan untuk mendapatkan syiling",
                a21: "Batal ikrar",
                a20: "Tarikh luput",
                a19: "Masa berikrar",
                a18: "Kuantiti untuk dikeluarkan",
                a17: "Nombor Item",
                a16: "Rekod ikrar",
                a15: "Batal ikrar dan pulangkan prinsipal, tiada pendapatan boleh diperolehi",
                a14: "tidak mencukupi",
                a13: "Baki dompet",
                a12: "Jumlah ikrar",
                a11: "ikrar",
                a10: "Token",
                a9: "Kuantiti keluaran akan ditukar kepada setara",
                a8: "Anggaran kuantiti yang akan dikeluarkan",
                a7: "Jumlah hasil",
                a6: "Dapatkan pelbagai faedah",
                a5: "Deposit",
                a4: "Ikrar kecairan",
                a3: "Pemegang boleh menikmati pendapatan ikrar",
                a36: "Bank kiriman wang",
                a35: "Nombor kad bank kiriman wang",
                a34: "Nama kiriman wang",
                oldpwd: "Sila masukkan kata laluan lama",
                zxkf: "perkhidmatan dalam talian",
                a2: "perlu bayar",
                a1: "Mata wang langganan",
                a0: "Potongan pengeluaran",
                dqyuee: "baki terkini",
                download: "Muat turun APP",
                czsl: "Kuantiti cas semula",
                qbdz: "Alamat dompet",
                enterqbdz: "Sila masukkan alamat dompet",
                tjsh: "Hantar semakan",
                sb01: "Masa permohonan untuk penyenaraian bergantung pada kualiti penyerahan data",
                sb02: "Keputusan permohonan",
                sb03: "Selepas menerima e-mel pengesahan, serahkan maklumat yang berkaitan mengikut e-mel",
                sb04: "Hantar maklumat",
                sb05: "Hantar permohonan untuk penyenaraian",
                sb06: "Permohonan",
                sb07: "proses permohonan",
                sb08: "Mohon untuk penyenaraian",
                sb09: "Pro menegakkan segala-galanya demi pelanggan dan mengutamakan kepentingan pengguna. Kini kami sedang mencari projek (mata wang) berkualiti tinggi untuk diberikan semula kepada pelanggan kami untuk sokongan jangka panjang mereka. Beli syiling berkualiti tinggi, beli syiling bernilai, hanya pilih Pro！",
                ksgt: "Berkomunikasi dengan cepat",
                sbsq: "Permohonan untuk penyenaraian",
                qrszfpz: "Sila masukkan baucar pembayaran",
                zfpz: "Baucar bayaran",
                dqsy: "Pendapatan semasa",
                ygsy: "Anggaran pendapatan",
                rgcz: "Operasi langganan",
                srrgsl: "Masukkan kuantiti langganan",
                kdh: "Boleh tukar",
                gw: "Laman web rasmi",
                bps: "kertas putih",
                sgzq: "Kitaran langganan",
                yr: "memanaskan badan",
                sg: "Langgan",
                js: "Selesai",
                xmxq: "Butiran projek",
                rg: "Langgan",
                ieo: "IEO Langgan",
                zt: "negeri",
                fhjg: "Harga terbitan",
                dqsj: "Tarikh luput"
            },
                (0,
                    o.default)(a, "scsj", "Masa lokap"),
                (0,
                    o.default)(a, "yjsy", "Anggaran pendapatan"),
                (0,
                    o.default)(a, "zxscsl", "Kuantiti lokap minimum"),
                (0,
                    o.default)(a, "syl", "kadar pulangan"),
                (0,
                    o.default)(a, "sc", "Mengunci"),
                (0,
                    o.default)(a, "ts", "hari-hari"),
                (0,
                    o.default)(a, "fhzl", "Jumlah terbitan"),
                (0,
                    o.default)(a, "jssj", "Masa tamat"),
                (0,
                    o.default)(a, "yjs", "habis"),
                (0,
                    o.default)(a, "wks", "belum bermula"),
                (0,
                    o.default)(a, "jxz", "sedang berjalan"),
                (0,
                    o.default)(a, "scz", "Terkunci"),
                (0,
                    o.default)(a, "ydq", "akan tamat tempoh"),
                (0,
                    o.default)(a, "nodata", "tiada data"),
                (0,
                    o.default)(a, "nomore", "Tiada lagi data"),
                (0,
                    o.default)(a, "more", "Tambah lagi"),
                (0,
                    o.default)(a, "qbye", "Baki dompet"),
                (0,
                    o.default)(a, "scgz", "Peraturan lindung nilai"),
                (0,
                    o.default)(a, "sclb", "Senarai kedudukan terkunci"),
                (0,
                    o.default)(a, "ts", "hari-hari"),
                (0,
                    o.default)(a, "scwk", "Lombong lokap"),
                (0,
                    o.default)(a, "sly", "kadar pulangan"),
                (0,
                    o.default)(a, "yebz", "Baki tidak mencukupi"),
                (0,
                    o.default)(a, "mhydd", "Perintah kontrak kedua"),
                (0,
                    o.default)(a, "gmj", "Harga pembelian"),
                (0,
                    o.default)(a, "cjj", "harga akhir"),
                (0,
                    o.default)(a, "yjyk", "Anggaran untung rugi"),
                (0,
                    o.default)(a, "yk", "Untung dan rugi"),
                (0,
                    o.default)(a, "djs", "undur"),
                a),
            login: {
                l_mobile: "Log masuk dengan telefon",
                l_email: "Log Masuk E-mel",
                p_email: "sila masukkan email anda",
                p_mobile: "Sila masukkan nombor telefon",
                p_pwd: "Sila masukkan kata laluan",
                p_confirmPwd: "Sila sahkan kata laluan anda",
                p_confirmtradePwd: "kata laluan transaksi",
                p_vcode: "sila masukkan kod pengesahan",
                get_code: "dapatkan kod pengesahan",
                rem_pwd: "Ingat kata laluan",
                login: "Log masuk",
                noaccount: "Belum mempunyai akaun PaxfulCoins?",
                register: "mendaftar",
                forget_pwd: "perkhidmatan dalam talian",
                p_taccount: "sila masukkan nombor telefon yang sah",
                p_temail: "sila masukkan e-mel kosong anda",
                p_pwderr: "Kata laluan salah dimasukkan",
                l_success: "log masuk berjaya",
                r_noedit: "Tidak boleh diubah suai selepas pendaftaran",
                r_mobile: "Daftar telefon anda",
                r_email: "pendaftaran e-mel",
                r_hasaccount: "Sudah mempunyai akaun PaxfulCoins",
                r_next: "Langkah seterusnya",
                r_sms: "Pengesahan SMS",
                r_smsemail: "Pengesahan email",
                r_pmobilecode: "Sila masukkan kod pengesahan telefon",
                r_pemailcode: "Sila masukkan kod pengesahan e-mel",
                r_send: "hantar",
                p_len: "Panjang kata laluan ialah 6~16 digit",
                p_notsame: "Input kata laluan tidak konsisten",
                p_simple: "Kata laluan terlalu mudah, sila masukkan semula",
                p_inputagain: "Input kata laluan tidak konsisten, sila masukkan semula",
                p_first: "Sila baca dan bersetuju dengan perjanjian pengguna terlebih dahulu",
                p_invitecode: "Kod jemputan (boleh kosong)",
                p_inviteInput: "Sila masukkan kod jemputan",
                p_agree: "saya setuju",
                p_private: "Perjanjian Pengguna dan Dasar Privasi",
                p_set: "sediakan",
                p_setPwd: "tetapkan kata laluan",
                f_mobile: "Pemulihan telefon",
                f_email: "Dapatkan semula E-mel",
                e_mb: "nombor telefon",
                e_email: "Mel",
                e_pwd: "tukar kata laluan",
                e_chongzhi: "menetapkan semula kata laluan",
                e_dealPwd: "Ubah suai kata laluan transaksi",
                e_pdeal: "Sila masukkan kata laluan transaksi",
                e_pdealerr: "Kata laluan transaksi salah dimasukkan",
                e_pdealConfrim: "Sila sahkan kata laluan transaksi",
                e_confrim: "mengesahkan",
                e_confrim2: "pasti",
                security: "Pusat keselamatan",
                s_loginpwd: "kata laluan log masuk",
                s_dealpwd: "kata laluan transaksi",
                s_edit: "Semak semula"
            },
            about: {
                abt: "tentang kita",
                concat: "hubungi Kami",
                privat: "Dasar Privasi",
                theme: "Mod malam"
            },
            collect: {
                method: "kaedah pembayaran",
                name: "nama sebenar",
                p_name: "sila masukkan nama sebenar anda",
                bank: "Bank Akaun",
                p_bank: "Sila masukkan bank pembukaan akaun",
                no: "Nombor kad bank",
                p_no: "Sila masukkan nombor kad bank",
                alipay: "Nombor Alipay",
                p_alipay: "Sila masukkan akaun Alipay anda",
                nick: "Nama panggilan WeChat",
                p_nick: "Sila masukkan nama panggilan WeChat",
                wechat: "akaun WeChat",
                p_wechat: "Sila masukkan akaun WeChat",
                wechatCode: "Kod pembayaran WeChat",
                alipayCode: "Kod pembayaran Alipay",
                up_wechatCode: "Sila muat naik kod pembayaran WeChat",
                up_alipayCode: "Sila muat naik kod pembayaran Alipay",
                cardno: "nombor ID",
                p_cardno: "sila masukkan nombor kad pengenalan",
                up_card: "Muat naik foto ID",
                up_cardz: "Muat naik bahagian hadapan kad pengenalan",
                up_cardf: "Muat naik bahagian belakang kad pengenalan",
                up_cardhand: "Muat naik kad pengenalan pegang tangan"
            },
            bind: {
                bindAddr: "Ikat alamat pengeluaran",
                cur_select: "Mata wang yang dipilih pada masa ini",
                addr: "Alamat pengeluaran",
                codeauth: "Kod kebenaran saya",
                codetip: "Apabila menambahkan pengguna sebagai agensi, kod kebenaran pengguna perlu disahkan",
                p_addr: "Sila masukkan alamat pengeluaran",
                code: "Kod pengesahan ",
                bind: "ikat",
                sendSuccess: "Berjaya dihantar",
                bindOk: "Ikat dengan jayanya",
                tuiguang: "Kod promosi saya",
                codes: "Kod promosi",
                tip: "Imbas corak kod QR di atas atau masukkan kod promosi untuk mengesahkan pendaftaran",
                liantype: "Jenis rantai"
            },
            authentication: {
                person: "Pusat peribadi",
                renzheng: "Pengesahan",
                gaoji: "Pengesahan lanjutan",
                go: "Pergi ke pensijilan",
                ing: "ditinjau",
                has: "disahkan",
                rz_tip: "Had pengeluaran boleh ditingkatkan selepas pengesahan",
                name: "nama",
                account: "akaun",
                zj: "nombor lesen"
            },
            home: {
                legal: "Urus niaga mata wang Fiat",
                zhichi: "Sokong BTC, USDT, dsb.",
                lever: "Urus niaga kontrak",
                news: "Pusat Berita",
                security: "Selamat dan boleh dipercayai",
                leader: "Platform dagangan aset digital terkemuka dunia",
                updowns: "Tingkatkan senarai",
                name: "nama",
                new_price: "Harga terkini",
                fu: "Perubahan petikan",
                p_login: "sila daftar masuk",
                welcome: "Selamat datang ke PaxfulCoins",
                myshop: "kedai saya",
                myshare: "Pautan perkongsian saya",
                logout: "log keluar",
                detail: "Butiran",
                up: "Tarik ke atas memuatkan",
                nomore: "Tiada lagi data",
                norecord: "Tiada rekod",
                loading: "Memuatkan",
                team: "pasukan saya",
                fast: "Cepat beli syiling",
                micro: "Transaksi kontrak kedua"
            },
            market: {
                market: "Petikan",
                volume: "isipadu 24H",
                home: "muka depan"
            },
            trade: {
                trade: "Urus niaga mata wang",
                buy: "Beli masuk",
                sell: "jual",
                limit: "Hadkan harga",
                shi: "harga pasaran",
                cancel: "Batal",
                best: "Berdagang pada harga terbaik semasa",
                num: "kuantiti",
                use: "Tersedia",
                amout: "Jumlah transaksi",
                price: "harga",
                time: "masa",
                bibi: "syiling",
                all: "semua",
                back: "Membatalkan",
                dui: "Pasangan dagangan",
                notenough: "Baki tidak mencukupi",
                notbest: "Pada masa ini tiada harga terbaik",
                p_price: "Sila masukkan harga",
                p_num: "Sila masukkan kuantiti",
                delegate: "Komisen semasa",
                all_delegate: "Semua ditauliahkan",
                his_delegate: "Suruhanjaya sejarah",
                has_done: "selesai",
                has_cancel: "Dibatalkan",
                has_pay: "Dibayar",
                fee: "Yuran pengendalian",
                handnum: "lot dagangan",
                p_handnum: "Sila masukkan lot",
                balance: "Seimbang",
                buy_duo: "Beli (pergi lama)",
                sell_kong: "Jual (pendek)",
                pankou: "Cacat",
                chicang: "kedudukan",
                types: "taip",
                operate: "beroperasi",
                pingcang: "Pembubaran",
                chedan: "Batalkan pesanan",
                duo: "Buat lagi",
                kong: "Pendek",
                hands: "banyak",
                hand: "tangan",
                times: "pelbagai",
                money: "Margin",
                confrim_ping: "Adakah anda pasti untuk menutup kedudukan?",
                confrim_order: "Mengesahkan pesanan",
                confrim_chedan: "Sahkan pembatalan?",
                p_times: "Sila pilih berbilang",
                p_hands: "Sila pilih atau masukkan lot",
                p_delprice: "Sila masukkan harga komisen",
                p_notless: "Bilangan lot yang dimasukkan tidak boleh kurang daripada",
                p_notmore: "Bilangan lot yang dimasukkan tidak boleh lebih tinggi daripada",
                delegate_price: "Harga komisen",
                price_cang: "Harga pembukaan",
                price_zhiying: "Ambil Harga Untung",
                num_zhehe: "Kuantiti ditukar",
                price_cur: "Harga semasa",
                price_lose: "Hentikan harga",
                can_money: "Margin tersedia",
                time_start: "Waktu buka",
                geye_fee: "Bayaran semalaman",
                dealtype: "Jenis Transaksi"
            },
            lever: {
                delegating: "Pentauliahan",
                dealing: "dalam transaksi",
                pingcanging: "Kedudukan penutup",
                hasping: "tertutup",
                hasback: "Pesanan dibatalkan",
                risk: "Kadar risiko",
                totalyk: "Jumlah untung dan rugi kedudukan",
                yijian: "Pembubaran satu klik",
                setys: "Tetapkan untung dan hentikan kerugian",
                profit: "Keuntungan yang dijangkakan",
                lose: "Kerugian yang dijangkakan",
                price_zhiying: "Ambil harga untung",
                price_lose: "Hentikan harga",
                all_ping: "Tutup semua jawatan",
                duo_ping: "Hanya rata lagi pesanan",
                kong_ping: "Tutup pesanan ringkas sahaja"
            },
            assets: (r = {
                trade: "syiling",
                lever: "kontrak",
                legal: "Mata wang Fiat",
                micro: "Kontrak kedua",
                manage: "Pengurusan kewangan",
                tradeacc: "Akaun mata wang",
                leveracc: "Akaun kontrak",
                legalacc: "Akaun Fiat",
                microacc: "Akaun kontrak kedua",
                zhehe: "Tukar",
                zhehecny: "Jumlah aset ditukar",
                lock: "membekukan",
                assets: "aset",
                records: "Rekod kewangan",
                charge: "Isi semula",
                mention: "tarik diri",
                transfer: "Pemindahan",
                record: "rekod",
                cur_coin: "Mata wang semasa",
                addr_charge: "Alamat deposit",
                coypaddr: "Salin alamat",
                c_tip1: "Tolong jangan cas semula mana-mana yang tidak",
                c_tip2: "Jika tidak, aset tidak akan dipulihkan",
                c_tip3: "Deposit hanya menyokong kaedah penghantaran mudah, dan deposit menggunakan kaedah lain tidak boleh disiarkan buat sementara waktu, sila faham",
                c_tip4: "Selepas anda mengecas semula ke alamat di atas, anda memerlukan pengesahan keseluruhan nod rangkaian. Selepas 1 pengesahan rangkaian, akaun akan dikreditkan, dan syiling boleh dikeluarkan selepas 6 pengesahan rangkaian.",
                c_tip5: "Jumlah cas semula minimum",
                c_tip6: "Deposit yang kurang daripada jumlah minimum tidak akan diposkan ke akaun dan tidak boleh dikembalikan",
                c_tip7: "Alamat cas semula anda tidak akan berubah dengan kerap, anda boleh mengecas semula; jika terdapat sebarang perubahan, kami akan cuba sedaya upaya untuk memberitahu anda melalui pengumuman dalam talian atau e-mel",
                c_tip8: "Pastikan anda mengesahkan keselamatan komputer dan penyemak imbas anda untuk mengelakkan maklumat daripada diganggu atau bocor",
                copy_success: "Berjaya menyalin",
                copy_err: "Salinan gagal",
                mentionaddr: "Alamat pengeluaran",
				paypwd: "Sila masukkan kata laluan transaksi",
                p_paypwd: "Sila masukkan kata laluan transaksi",
                p_addr: "Sila sediakan alamat pengeluaran anda dahulu"
            },
                (0,
                    o.default)(r, "mention", "tarik diri"),
                (0,
                    o.default)(r, "minnum", "Jumlah pengeluaran minimum"),
                (0,
                    o.default)(r, "recivenum", "Kuantiti ketibaan"),
                (0,
                    o.default)(r, "p_minnum", "Sila masukkan kuantiti pengeluaran"),
                (0,
                    o.default)(r, "transfernum", "Bilangan pemindahan"),
                (0,
                    o.default)(r, "p_transfernum", "Sila masukkan amaun pindahan"),
                (0,
                    o.default)(r, "from", "daripada"),
                (0,
                    o.default)(r, "to", "kepada"),
                r),
            legal: {
                legal: "Mata wang Fiat",
                ibuy: "i ingin membeli",
                isell: "saya nak jual",
                price: "harga seunit",
                limit: "Had",
                buy: "Beli",
                sell: "jual",
                anprice: "Mengikut harga",
                annum: "Mengikut kuantiti",
                pl: "sila masukkan",
                amount: "Jumlah",
                num: "kuantiti",
                allmoney: "Jumlah transaksi",
                autocancel: "Batal secara automatik",
                do: "Membuat pesanan",
                p_amout: "Sila masukkan jumlah",
                coin: "mata wang",
                list: "Rekod Transaksi",
                t_tip1: "Sila bayar peniaga tepat pada masanya",
                t_tip2: "Sila tunggu dengan sabar untuk pihak lain membayar",
                t_tip3: "Saya mengesahkan bahawa saya belum membayar pihak lain"
            },
            store: {
                myshop: "我的店铺",
                regtime: "注册时间",
                belongcoin: "所属法币",
                entershop: "进入店铺",
                rzshop: "认证商家",
                fabu: "发布",
                allorder: "总成单",
                thirtyorder: "30日成单",
                doneorder: "完成单",
                donelv: "完成率",
                renzhengmobile: "手机认证",
                renzhengauth: "实名认证",
                renzhenghigh: "高级认证",
                notdone: "未完成",
                done: "已完成",
                yichang: "异常",
                lowershelf: "下架",
                protection: "维权中",
                apply: "申请维权",
                back: "撤回",
                lookorder: "查看订单",
                minnum: "最小交易量",
                maxnum: "最大交易量",
                p_payment: "请选择支付方式",
                p_coin: "请选择货币单位",
                p_price: "请输入单价",
                p_min: "请输入最小交易量",
                p_max: "请输入最大交易量",
                ithink: "我再想想",
                makeyichang: "确认标记为异常吗",
                alipay: "支付宝",
                wechat: "微信",
                bank: "银行卡",
                t_minmax: "最大交易量不能小于最小交易量",
                mysell: "我的出售",
                mybuy: "我的求购",
                orderlist: "订单记录",
                orderstatus: "订单状态",
                chongzhi: "重置",
                p_pay: "请付款",
                p_waitpay: "待付款",
                t_pay: "请及时付款给卖家",
                t_waitpay: "请耐心等待对方付款",
                t_paycancel: "订单已取消,无法查看支付信息",
                t_havepay: "订单已支付",
                t_hasdone: "订单已完成",
                call: "联系对方",
                collectcode: "收款二维码",
                collectper: "收款人",
                payper: "买家",
                collectacc: "收款账号",
                paycancode: "付款参考号",
                dotime: "下单时间",
                t_self: "请使用本人",
                t_transfer: "向以上账号自行转账",
                t_tip: "在转账过程中请勿备注BTC、USDT等信息，防止汇款被拦截、银行卡被冻结等问题",
                cancelorder: "取消订单",
                ipay: "我已付款成功",
                t_look: "请在确认收款前仔细查看支付信息",
                t_con_collect: "确认已收款",
                cancel_confrim: "确认取消交易",
                t_tip1: "如果您已向卖家付款，请千万不要取消交易",
                t_tip2: "买家当日累计三笔取消，会限制当日买入功能",
                t_rule: "取消规则",
                confrim_ipay: "确认我已付款",
                donotconfrim: "如您未向卖家付款，请不要点击确认按钮",
                lockacc: "恶意点击将被冻结账户",
                hedui: "请仔细核对收款信息",
                notpayconfrim: "如您未收到商家付款，请不要点击确认按钮",
                yes: "是",
                no: "否",
                sd: "锁定余额",
                journal: "余额日志",
                business: "商家",
                user: "用户",
                backdone: "已撤回"
            },
            coin: {
                bao: "Harta simpanan syiling",
                choose: "Pilih mata wang",
                total: "Jumlah deposit",
                mybao: "Deposit saya",
                profit: "Anggaran pendapatan",
                end_time: "Tarikh luput",
                day: "hari-hari",
                rate: "kadar pulangan",
                rule: "Peraturan deposit"
            },
            team: {
                team: "我的团队",
                zt_num: "直推人数",
                active_num: "团队活跃人数",
                profit: "收益",
                cblog: "充币记录",
                bblog: "币币记录",
                back: "返佣",
                account: "账户"
            }
        };
        t.default = s
    },
    ac8f: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                khyh: "开户银行",
                khzh: "开户支行",
                czje: "充值金额",
                dzje: "到账金额",
                tips: "提示",
                qdqx: "确定取消质押吗",
                scsj: "锁仓时间",
                a37: "轻松领奖励",
                a33: "取消订单将扣除",
                a32: "总利息",
                a31: "存币数量",
                a30: "锁仓记录",
                a29: "预计总收益",
                a28: "挖矿更简单",
                a27: "挖矿宝",
                a26: "锁仓期限",
                a25: "天",
                a24: "日币利息",
                a23: "近3日参考年化",
                a22: "锁仓赚币",
                a21: "取消质押",
                a20: "到期时间",
                a19: "质押时间",
                a18: "待产出数量",
                a17: "项目编号",
                a16: "质押记录",
                a15: "取消质押返还本金,无法获得收益",
                a14: "不足",
                a13: "钱包余额",
                a12: "质押数量",
                a11: "质押",
                a10: "代币",
                a9: "产出数量将转化为等值的",
                a8: "预计待产出数量",
                a7: "总收益",
                a6: "赚取多重收益",
                a5: "存入",
                a4: "流动性质押",
                a3: "持有者可享受质押收益",
                a36: "汇款开户银行",
                a35: "汇款银行卡号",
                a34: "汇款姓名",
                oldpwd: "请输入旧密码",
                zxkf: "在线客服",
                a2: "需要支付",
                a1: "认购币种",
                a0: "提币扣除",
                dqyuee: "当前余额",
                download: "下载APP",
                czsl: "充值数量",
                qbdz: "钱包地址",
                enterqbdz: "请输入钱包地址",
                tjsh: "提交审核",
                sb01: "上币申请时间视资料提交质量",
                sb02: "申请结果",
                sb03: "收到确认邮件后，根据邮件提交相关资料",
                sb04: "提交资料",
                sb05: "提交上币申请",
                sb06: "申请",
                sb07: "申请流程",
                sb08: "申请上币",
                sb09: "Pro秉承着一切为客户着想，把用户的利益放在首位，现寻找优质项目（币种），回馈客户的长期支持。上优质币，买价值币，只选Pro！",
                ksgt: "快速沟通",
                sbsq: "上币申请",
                qrszfpz: "请输入支付凭证",
                zfpz: "支付凭证",
                dqsy: "当前收益",
                ygsy: "预估收益",
                rgcz: "认购操作",
                srrgsl: "输入认购数量",
                kdh: "可兑换",
                gw: "官网",
                bps: "白皮书",
                sgzq: "申购周期",
                yr: "预热",
                sg: "申购",
                js: "结束",
                xmxq: "项目详情",
                rg: "认购",
                ieo: "IEO 认购",
                zt: "状态",
                fhjg: "发行价格",
                dqsj: "到期时间"
            },
                (0,
                    o.default)(a, "scsj", "锁仓时间"),
                (0,
                    o.default)(a, "yjsy", "预计收益"),
                (0,
                    o.default)(a, "zxscsl", "最小锁仓数量"),
                (0,
                    o.default)(a, "syl", "收益率"),
                (0,
                    o.default)(a, "sc", "锁仓"),
                (0,
                    o.default)(a, "ts", "天数"),
                (0,
                    o.default)(a, "fhzl", "发行总量"),
                (0,
                    o.default)(a, "jssj", "结束时间"),
                (0,
                    o.default)(a, "yjs", "已结束"),
                (0,
                    o.default)(a, "wks", "未开始"),
                (0,
                    o.default)(a, "jxz", "进行中"),
                (0,
                    o.default)(a, "scz", "锁仓中"),
                (0,
                    o.default)(a, "ydq", "已到期"),
                (0,
                    o.default)(a, "nodata", "没有数据"),
                (0,
                    o.default)(a, "nomore", "没有更多数据"),
                (0,
                    o.default)(a, "more", "加载更多"),
                (0,
                    o.default)(a, "qbye", "钱包余额"),
                (0,
                    o.default)(a, "scgz", "锁仓规则"),
                (0,
                    o.default)(a, "sclb", "锁仓列表"),
                (0,
                    o.default)(a, "ts", "天数"),
                (0,
                    o.default)(a, "scwk", "锁仓挖矿"),
                (0,
                    o.default)(a, "sly", "收益率"),
                (0,
                    o.default)(a, "yebz", "余额不足"),
                (0,
                    o.default)(a, "mhydd", "秒合约订单"),
                (0,
                    o.default)(a, "gmj", "购买价"),
                (0,
                    o.default)(a, "cjj", "成交价"),
                (0,
                    o.default)(a, "yjyk", "预计盈亏"),
                (0,
                    o.default)(a, "yk", "盈亏"),
                (0,
                    o.default)(a, "djs", "倒计时"),
                a),
            login: {
                l_mobile: "手机登录",
                l_email: "邮箱登录",
                p_email: "请输入邮箱",
                p_mobile: "请输入手机号",
                p_pwd: "请输入密码",
                p_confirmPwd: "请确认密码",
                p_vcode: "请输入验证码",
                get_code: "获取验证码",
                rem_pwd: "记住密码",
                login: "登录",
                noaccount: "还没有PaxfulCoins账号？",
                register: "注册",
                forget_pwd: "在线客服",
                p_taccount: "请输入正确的手机号",
                p_temail: "请输入正确的邮箱",
                p_pwderr: "密码输入不正确",
                l_success: "登录成功",
                r_noedit: "注册后不能修改",
                r_mobile: "手机注册",
                r_email: "邮箱注册",
                r_hasaccount: "已有PaxfulCoins账号",
                r_next: "下一步",
                r_sms: "短信验证",
                r_smsemail: "邮箱验证",
                r_pmobilecode: "请输入手机验证码",
                r_pemailcode: "请输入邮箱验证码",
                r_send: "发送",
                p_len: "密码长度在6~16位",
                p_notsame: "密码输入不一致",
                p_simple: "密码过于简单，请重新输入",
                p_inputagain: "密码输入不一致，请重新输入",
                p_first: "请先阅读并同意用户协议",
                p_invitecode: "邀请码（可以为空）",
                p_inviteInput: "请输入邀请码",
                p_agree: "我同意",
                p_private: "用户协议及隐私政策",
                p_set: "设置",
                p_setPwd: "设置密码",
                f_mobile: "手机找回",
                f_email: "邮箱找回",
                e_mb: "手机号",
                e_email: "邮箱",
                e_pwd: "修改密码",
                e_chongzhi: "重置密码",
                e_dealPwd: "修改交易密码",
                e_pdeal: "请输入交易密码",
                e_pdealerr: "交易密码输入不正确",
                e_pdealConfrim: "请确认交易密码",
                e_confrim: "确认",
                e_confrim2: "确定",
                security: "安全中心",
                s_loginpwd: "登录密码",
                s_dealpwd: "交易密码",
                s_edit: "修改"
            },
            about: {
                abt: "关于我们",
                concat: "联系我们",
                privat: "隐私政策",
                theme: "夜间模式"
            },
            collect: {
                method: "收款方式",
                name: "真实姓名",
                p_name: "请输入真实姓名",
                bank: "开户行",
                p_bank: "请输入开户行",
                no: "银行卡号",
                p_no: "请输入银行卡号",
                alipay: "支付宝号",
                p_alipay: "请输入支付宝账号",
                nick: "微信昵称",
                p_nick: "请输入微信昵称",
                wechat: "微信帐号",
                p_wechat: "请输入微信账号",
                wechatCode: "微信收款码",
                alipayCode: "支付宝收款码",
                up_wechatCode: "请上传微信收款码",
                up_alipayCode: "请上传支付宝收款码",
                cardno: "身份证号",
                p_cardno: "请输入身份证号",
                up_card: "上传身份证照片",
                up_cardz: "上传身份证正面",
                up_cardf: "上传身份证反面",
                up_cardhand: "上传手持身份证"
            },
            bind: {
                bindAddr: "绑定提币地址",
                cur_select: "当前选择币种",
                addr: "提币地址",
                codeauth: "我的授权码",
                codetip: "将用户添加为代理商时，需要验证用户的授权码",
                p_addr: "请输入提币地址",
                code: "验 证 码 ",
                bind: "绑定",
                sendSuccess: "发送成功",
                bindOk: "绑定成功",
                tuiguang: "我的推广码",
                codes: "推广码",
                tip: "扫上面的二维码图案或输入推广码，确认注册",
                liantype: "链类型"
            },
            authentication: {
                person: "个人中心",
                renzheng: "身份认证",
                gaoji: "高级身份认证",
                go: "去认证",
                ing: "审核中",
                has: "已认证",
                rz_tip: "认证后可提升提币额度",
                name: "姓名",
                account: "账号",
                zj: "证件号"
            },
            home: {
                legal: "法币交易",
                zhichi: "支持BTC、USDT等",
                lever: "合约交易",
                news: "新闻中心",
                security: "安全可信",
                leader: "全球领先的数字资产交易平台",
                updowns: "涨幅榜",
                name: "名称",
                new_price: "最新价",
                fu: "涨跌幅",
                p_login: "请登录",
                welcome: "欢迎来到PaxfulCoins",
                myshop: "我的店铺",
                myshare: "我的分享链接",
                logout: "退出登录",
                detail: "详情",
                up: "上拉加载",
                nomore: "暂无更多数据",
                norecord: "暂无记录",
                loading: "加载中",
                team: "我的团队",
                fast: "快捷买币",
                micro: "秒合约交易"
            },
            market: {
                market: "行情",
                volume: "24H量",
                home: "首页"
            },
            trade: {
                trade: "币币交易",
                buy: "买入",
                sell: "卖出",
                limit: "限价",
                shi: "市价",
                cancel: "取消",
                best: "以当前最优价格交易",
                num: "数量",
                use: "可用",
                amout: "交易额",
                price: "价格",
                time: "时间",
                bibi: "币币",
                all: "全部",
                back: "撤销",
                dui: "交易对",
                notenough: "余额不足",
                notbest: "当前没有最优价格",
                p_price: "请输入价格",
                p_num: "请输入数量",
                delegate: "当前委托",
                all_delegate: "全部委托",
                his_delegate: "历史委托",
                has_done: "已完成",
                has_cancel: "已取消",
                has_pay: "已付款",
                fee: "手续费",
                handnum: "交易手数",
                p_handnum: "请输入手数",
                balance: "余额",
                buy_duo: "买入（做多）",
                sell_kong: "卖出（做空）",
                pankou: "盘口",
                chicang: "持仓",
                types: "类型",
                operate: "操作",
                pingcang: "平仓",
                chedan: "撤单",
                duo: "做多",
                kong: "做空",
                hands: "手数",
                hand: "手",
                times: "倍数",
                money: "保证金",
                confrim_ping: "确定平仓？",
                confrim_order: "确认下单",
                confrim_chedan: "确认撤单？",
                p_times: "请选择倍数",
                p_hands: "请选择或者输入手数",
                p_delprice: "请输入委托价格",
                p_notless: "输入的手数不能低于",
                p_notmore: "输入的手数不能高于",
                delegate_price: "委托价",
                price_cang: "开仓价",
                price_zhiying: "止盈价",
                num_zhehe: "折合数量",
                price_cur: "当前价",
                price_lose: "止损价",
                can_money: "可用保证金",
                time_start: "开仓时间",
                geye_fee: "隔夜费",
                dealtype: "交易类型"
            },
            lever: {
                delegating: "委托中",
                dealing: "交易中",
                pingcanging: "平仓中",
                hasping: "已平仓",
                hasback: "已撤单",
                risk: "风险率",
                totalyk: "持仓总盈亏",
                yijian: "一键平仓",
                setys: "设置止盈止损",
                profit: "预期盈利",
                lose: "预期亏损",
                price_zhiying: "止盈价格",
                price_lose: "止损价格",
                all_ping: "全部平仓",
                duo_ping: "只平多单",
                kong_ping: "只平空单"
            },
            assets: (r = {
                trade: "币币",
                lever: "合约",
                legal: "法币",
                micro: "秒合约",
                manage: "理财",
                tradeacc: "币币账户",
                leveracc: "合约账户",
                legalacc: "法币账户",
                microacc: "秒合约账户",
                zhehe: "折合",
                zhehecny: "总资产折合",
                lock: "冻结",
                assets: "资产",
                records: "财务记录",
                charge: "充币",
                mention: "提币",
                transfer: "划转",
                record: "记录",
                cur_coin: "当前币种",
                addr_charge: "充币地址",
                coypaddr: "复制地址",
                c_tip1: "请勿向上述地址充值任何非",
                c_tip2: "否则资产将不可找回",
                c_tip3: "充币仅支持simple send的方法，使用其他方法的充币暂时无法上账，请您谅解",
                c_tip4: "您充值至上述地址后，需要整个网络节点的确认，1次网络确认后到账，6次网络确认可提币",
                c_tip5: "最小充值金额",
                c_tip6: "小于最小金额的充值将不会上账且无法退回",
                c_tip7: "您的充值地址不会经常改变，可以重复充值;如有更改，我们会尽量通过网络公告或邮件通知您",
                c_tip8: "请务必确认电脑及浏览器安全，防止信息被篡改或泄露",
                copy_success: "复制成功",
                copy_err: "复制失败",
                mentionaddr: "提币地址",
                paypwd: "交易密码",
                p_paypwd: "请输入交易面",
                p_addr: "请先设置您的提币地址"
            },
                (0,
                    o.default)(r, "mention", "提币"),
                (0,
                    o.default)(r, "minnum", "最小提币数量"),
                (0,
                    o.default)(r, "recivenum", "到账数量"),
                (0,
                    o.default)(r, "p_minnum", "请输入提币数量"),
                (0,
                    o.default)(r, "transfernum", "划转数量"),
                (0,
                    o.default)(r, "p_transfernum", "请输入划转数量"),
                (0,
                    o.default)(r, "from", "从"),
                (0,
                    o.default)(r, "to", "至"),
                r),
            legal: {
                legal: "法币",
                ibuy: "我要买",
                isell: "我要卖",
                price: "单价",
                limit: "限额",
                buy: "购买",
                sell: "出售",
                anprice: "按价格",
                annum: "按数量",
                pl: "请输入",
                amount: "金额",
                num: "数量",
                allmoney: "交易总额",
                autocancel: "自动取消",
                do: "下单",
                p_amout: "请输入金额",
                coin: "币种",
                list: "交易记录",
                t_tip1: "请及时付款给商家",
                t_tip2: "请耐心等待对方付款",
                t_tip3: "我确认还没有付款给对方"
            },
            store: {
                myshop: "我的店铺",
                regtime: "注册时间",
                belongcoin: "所属法币",
                entershop: "进入店铺",
                rzshop: "认证商家",
                fabu: "发布",
                allorder: "总成单",
                thirtyorder: "30日成单",
                doneorder: "完成单",
                donelv: "完成率",
                renzhengmobile: "手机认证",
                renzhengauth: "实名认证",
                renzhenghigh: "高级认证",
                notdone: "未完成",
                done: "已完成",
                yichang: "异常",
                lowershelf: "下架",
                protection: "维权中",
                apply: "申请维权",
                back: "撤回",
                lookorder: "查看订单",
                minnum: "最小交易量",
                maxnum: "最大交易量",
                p_payment: "请选择支付方式",
                p_coin: "请选择货币单位",
                p_price: "请输入单价",
                p_min: "请输入最小交易量",
                p_max: "请输入最大交易量",
                ithink: "我再想想",
                makeyichang: "确认标记为异常吗",
                alipay: "支付宝",
                wechat: "微信",
                bank: "银行卡",
                t_minmax: "最大交易量不能小于最小交易量",
                mysell: "我的出售",
                mybuy: "我的求购",
                orderlist: "订单记录",
                orderstatus: "订单状态",
                chongzhi: "重置",
                p_pay: "请付款",
                p_waitpay: "待付款",
                t_pay: "请及时付款给卖家",
                t_waitpay: "请耐心等待对方付款",
                t_paycancel: "订单已取消,无法查看支付信息",
                t_havepay: "订单已支付",
                t_hasdone: "订单已完成",
                call: "联系对方",
                collectcode: "收款二维码",
                collectper: "收款人",
                payper: "买家",
                collectacc: "收款账号",
                paycancode: "付款参考号",
                dotime: "下单时间",
                t_self: "请使用本人",
                t_transfer: "向以上账号自行转账",
                t_tip: "在转账过程中请勿备注BTC、USDT等信息，防止汇款被拦截、银行卡被冻结等问题",
                cancelorder: "取消订单",
                ipay: "我已付款成功",
                t_look: "请在确认收款前仔细查看支付信息",
                t_con_collect: "确认已收款",
                cancel_confrim: "确认取消交易",
                t_tip1: "如果您已向卖家付款，请千万不要取消交易",
                t_tip2: "买家当日累计三笔取消，会限制当日买入功能",
                t_rule: "取消规则",
                confrim_ipay: "确认我已付款",
                donotconfrim: "如您未向卖家付款，请不要点击确认按钮",
                lockacc: "恶意点击将被冻结账户",
                hedui: "请仔细核对收款信息",
                notpayconfrim: "如您未收到商家付款，请不要点击确认按钮",
                yes: "是",
                no: "否",
                sd: "锁定余额",
                journal: "余额日志",
                business: "商家",
                user: "用户",
                backdone: "已撤回"
            },
            coin: {
                bao: "存币宝",
                choose: "选择币种",
                total: "总存币",
                mybao: "我的存币",
                profit: "预计收益",
                end_time: "到期时间",
                day: "天数",
                rate: "收益率",
                rule: "存币规则"
            },
            team: {
                team: "我的团队",
                zt_num: "直推人数",
                active_num: "团队活跃人数",
                profit: "收益",
                cblog: "充币记录",
                bblog: "币币记录",
                back: "返佣",
                account: "账户"
            }
        };
        t.default = s
    },
    pqjr: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                khyh: "Cuenta bancaria",
                khzh: "Sucursal de apertura de cuenta",
                czje: "Cantidad de recarga",
                dzje: "Importe a cuenta",
                tips: "Consejos",
                qdqx: "¿Está seguro de cancelar el compromiso",
                scsj: "Tiempo de bloqueo",
                a37: "Recibe la recompensa fácilmente",
                a33: "Se deducirá la cancelación",
                a32: "Interés total",
                a31: "Cantidad de monedas depositadas",
                a30: "Registro de posición bloqueada",
                a29: "Ingresos totales estimados",
                a28: "La minería es más fácil",
                a27: "Tesoro minero",
                a26: "Período de bloqueo",
                a25: "Cielo",
                a24: "Interés en yenes japoneses",
                a23: "Anualización de referencia de los últimos 3 días",
                a22: "Bloquear posición para ganar monedas",
                a21: "Cancelar compromiso",
                a20: "Hora de vencimiento",
                a19: "Tiempo de compromiso",
                a18: "Importe a emitir",
                a17: "Número de proyecto",
                a16: "Registro de compromiso",
                a15: "Cancelar la prenda y devolver el principal, no se pueden obtener ingresos",
                a14: "Insuficiente",
                a13: "Saldo de Wallet",
                a12: "Monto de la promesa",
                a11: "Promesa",
                a10: "Token",
                a9: "La cantidad de salida se convertirá en valor equivalente",
                a8: "Cantidad estimada a producir",
                a7: "Ingresos totales",
                a6: "Obtenga varias devoluciones",
                a5: "Depósito",
                a4: "Compromiso móvil",
                a3: "El tenedor puede disfrutar de los ingresos de la prenda",
                a36: "Banco de apertura de cuenta de remesas",
                a35: "Número de tarjeta bancaria de remesa",
                a34: "Nombre de la remesa",
                oldpwd: "Ingrese la contraseña anterior",
                zxkf: "Servicio al cliente en línea",
                a2: "Pago requerido",
                a1: "Moneda de suscripción",
                a0: "Deducción por retiro",
                dqyuee: "Saldo actual",
                download: "Descargar APP",
                czsl: "Cantidad de recarga",
                qbdz: "Dirección de billetera",
                enterqbdz: "Ingrese la dirección de la billetera",
                tjsh: "Enviar para revisión",
                sb01: "El momento de la solicitud de inclusión en la lista depende de la calidad del envío de datos",
                sb02: "Resultado de la aplicación",
                sb03: "Después de recibir el correo electrónico de confirmación, envíe la información relevante de acuerdo con el correo electrónico",
                sb04: "Enviar información",
                sb05: "Enviar solicitud de inclusión en la lista",
                sb06: "Aplicar",
                sb07: "Proceso de solicitud",
                sb08: "Solicitar cotización",
                sb09: "PaxfulCoins defiende todo por el bien de los clientes y antepone los intereses de los usuarios. Ahora buscamos proyectos de alta calidad (monedas) para reembolsar a los clientes por su apoyo a largo plazo. Compre monedas de alta calidad, compre monedas de valor , y solo elige PaxfulCoins! ",
                ksgt: "Comunicación rápida",
                sbsq: "Solicitud de inclusión en la lista",
                qrszfpz: "Introduzca el comprobante de pago",
                zfpz: "Comprobante de pago",
                dqsy: "Ingresos actuales",
                ygsy: "Ingresos estimados",
                rgcz: "Operación de suscripción",
                srrgsl: "Ingrese la cantidad de suscripción",
                kdh: "intercambiable",
                gw: "Sitio web oficial",
                bps: "Libro blanco",
                sgzq: "Periodo de suscripción",
                yr: "Precalentar",
                sg: "Suscripción",
                js: "Fin",
                xmxq: "Detalles del proyecto",
                rg: "Suscribirse",
                ieo: "Suscripción IEO",
                zt: "Estado",
                fhjg: "Precio de emisión",
                dqsj: "Hora de vencimiento"
            },
                (0,
                    o.default) (a, "scsj", "tiempo de bloqueo"),
                (0,
                    o.default) (a, "yjsy", "Ingresos estimados"),
            (0,
                o.default) (a, "zxscsl", "Posición bloqueada mínima"),
            (0,
                o.default) (a, "syl", "tasa de rendimiento"),
            (0,
                o.default) (a, "sc", "posición de bloqueo"),
            (0,
                o.default) (a, "ts", "número de días"),
            (0,
                o.default) (a, "fhzl", "Total emitido"),
            (0,
                o.default) (a, "jssj", "Hora de finalización"),
            (0,
                o.default) (a, "yjs", "Finalizado"),
            (0,
                o.default) (a, "wks", "no iniciado"),
            (0,
                o.default) (a, "jxz", "en curso"),
            (0,
                o.default) (a, "scz", "posición de bloqueo"),
            (0,
                o.default) (a, "ydq", "Caducado"),
            (0,
                o.default) (a, "nodata", "sin datos"),
            (0,
                o.default) (a, "nomore", "no more data"),
            (0,
                o.default) (a, "more", "Cargar más"),
            (0,
                o.default) (a, "qbye", "saldo de billetera"),
            (0,
                o.default) (a, "scgz", "Reglas de bloqueo"),
            (0,
                o.default) (a, "sclb", "Lista de posiciones de bloqueo"),
            (0,
                o.default) (a, "ts", "número de días"),
            (0,
                o.default) (a, "scwk", "minería de bloqueo"),
            (0,
                o.default) (a, "sly", "Rendimiento"),
            (0,
                o.default) (a, "yebz", "Saldo insuficiente"),
            (0,
                o.default) (a, "mhydd", "segundo pedido de contrato"),
            (0,
                o.default) (a, "gmj", "precio de compra"),
            (0,
                o.default) (a, "cjj", "Precio de transacción"),
            (0,
                o.default) (a, "yjyk", "Estimación de pérdidas y ganancias"),
            (0,
                o.default) (a, "yk", "pérdidas y ganancias"),
            (0,
                o.default) (a, "djs", "cuenta atrás"),
                a),
            login: {
                l_mobile: "Inicio de sesión móvil",
                l_email: "Inicio de sesión en el buzón",
                p_email: "Introduzca la dirección de correo electrónico",
                p_mobile: "Introduzca su número de teléfono móvil",
                p_pwd: "Introduzca la contraseña",
                p_confirmPwd: "Confirme la contraseña",
                p_confirmtradePwd: "contraseña de transacción",
                p_vcode: "Ingrese el código de verificación",
                get_code: "Obtener código de verificación",
                rem_pwd: "Recordar contraseña",
                login: "Iniciar sesión",
                noaccount: "¿Aún no tienes una cuenta PaxfulCoins?",
                register: "Registrarse",
                forget_pwd: "Servicio en línea",
                p_taccount: "Introduzca el número de teléfono correcto",
                p_temail: "Introduzca la dirección de correo electrónico correcta",
                p_pwderr: "La contraseña es incorrecta",
                l_success: "Inicio de sesión exitoso",
                r_noedit: "No se puede modificar después del registro",
                r_mobile: "Registro móvil",
                r_email: "Registro de buzón",
                r_hasaccount: "Ya tengo una cuenta PaxfulCoins",
                r_next: "Siguiente",
                r_sms: "Verificación por SMS",
                r_smsemail: "Verificación de correo electrónico",
                r_pmobilecode: "Introduzca el código de verificación del teléfono móvil",
                r_pemailcode: "Ingrese el código de verificación del correo electrónico",
                r_send: "Enviar",
                p_len: "La longitud de la contraseña es de 6 ~ 16 dígitos",
                p_notsame: "La entrada de la contraseña es inconsistente",
                p_simple: "La contraseña es demasiado simple, vuelva a ingresar",
                p_inputagain: "El ingreso de la contraseña es inconsistente, por favor vuelva a ingresar",
                p_first: "Lea y acepte primero el acuerdo de usuario",
                p_invitecode: "Código de invitación (puede estar vacío)",
                p_inviteInput: "Introduzca el código de invitación",
                p_agree: "Estoy de acuerdo",
                p_private: "Acuerdo de usuario y política de privacidad",
                p_set: "Establecer",
                p_setPwd: "Establecer contraseña",
                f_mobile: "Recuperar teléfono móvil",
                f_email: "Recuperar buzón",
                e_mb: "Número de teléfono móvil",
                e_email: "Buzón",
                e_pwd: "Modificar contraseña",
                e_chongzhi: "Restablecer contraseña",
                e_dealPwd: "Modificar contraseña de transacción",
                e_pdeal: "Introduzca la contraseña de la transacción",
                e_pdealerr: "La contraseña de la transacción se ingresó incorrectamente",
                e_pdealConfrim: "Confirme la contraseña de la transacción",
                e_confrim: "Confirmar",
                e_confrim2: "Aceptar",
                security: "Centro de seguridad",
                s_loginpwd: "Contraseña de inicio de sesión",
                s_dealpwd: "Contraseña de transacción",
                s_edit: "Editar"
            },
            about: {
                abt: "Acerca de nosotros",
                concat: "Contáctenos",
                privat: "Política de privacidad",
                theme: "Modo nocturno"
            },
            collect: {
                method: "Método de pago",
                name: "Nombre real",
                p_name: "Introduzca su nombre real",
                bank: "Banco de apertura de cuenta",
                p_bank: "Introduzca el banco de apertura de la cuenta",
                no: "Número de tarjeta bancaria",
                p_no: "Ingrese el número de la tarjeta bancaria",
                alipay: "Número de Alipay",
                p_alipay: "Introduzca el número de cuenta de Alipay",
                nick: "Apodo de WeChat",
                p_nick: "Ingrese el apodo de WeChat",
                wechat: "Cuenta de WeChat",
                p_wechat: "Ingrese a la cuenta de WeChat",
                wechatCode: "Código de colección de Wechat",
                alipayCode: "Código de colección de Alipay",
                up_wechatCode: "Cargue el código de colección de Wechat",
                up_alipayCode: "Cargue el código de Alipay",
                cardno: "Número de tarjeta de identificación",
                p_cardno: "Introduzca el número de identificación",
                up_card: "Subir foto de identificación",
                up_cardz: "Subir el anverso de la tarjeta de identificación",
                up_cardf: "Subir el reverso de la tarjeta de identificación",
                up_cardhand: "Cargar una tarjeta de identificación de la computadora de mano"
            },
            bind: {
                bindAddr: "Vincular la dirección de retiro",
                cur_select: "Moneda seleccionada actualmente",
                addr: "Dirección de retiro",
                codeauth: "Mi código de autorización",
                codetip: "Al agregar un usuario como agente, debe verificar el código de autorización del usuario",
                p_addr: "Ingrese la dirección de retiro",
                code:"Código de verificación",
                bind: "enlazar",
                sendSuccess: "Enviar con éxito",
                bindOk: "Enlace exitoso",
                tuiguang: "Mi código de promoción",
                codes:"Código de promoción",
                tip: "Escanee el patrón de código QR anterior o ingrese el código de promoción para confirmar el registro",
                liantype: "Tipo de cadena"
            },
            authentication: {
                person: "Centro personal",
                renzheng: "Autenticación de identidad",
                gaoji: "Autenticación avanzada",
                go: "Ir a Autenticación",
                ing: "En revisión",
                has: "Autenticado",
                rz_tip: "El límite de retiro se puede aumentar después de la autenticación",
                name: "nombre",
                account:"cuenta",
                zj: "Número de certificado"
            },
            home: {
                legal: "Transacción en moneda fiduciaria",
                zhichi: "Admite BTC, USDT, etc.",
                lever: "Transacción del contrato",
                news: "Centro de noticias",
                security: "Seguro y confiable",
                leader: "La plataforma de comercio de activos digitales líder en el mundo",
                updowns: "Aumentar lista",
                name:"nombre",
                new_price: "Precio más reciente",
                fu: "Levántate y cae",
                p_login: "Inicie sesión",
                welcome: "Bienvenido a PaxfulCoins",
                myshop: "Mi tienda",
                myshare: "Mi enlace para compartir",
                logout: "Cerrar sesión",
                detail: "Detalles",
                up: "Tire hacia arriba y cargue",
                nomore: "No hay más datos todavía",
                norecord: "No hay registro todavía",
                loading: "Cargando",
                team: "Mi equipo",
                fast: "Compra rápida de monedas",
                micro: "transacción del segundo contrato"
            },
            market: {
                market: "Mercado",
                volumen: "Volumen 24H",
                home: "Hogar"
            },
            trade: {
                trade: "Comercio de divisas",
                buy: "compra",
                sell: "Vender",
                limit: "Precio límite",
                shi: "precio de mercado",
                cancel: "Cancelar",
                best: "Opere al mejor precio actual",
                num: "Número",
                use: "Disponible",
                amout: "Importe de la transacción",
                price: "Precio",
                time: "tiempo",
                bibi: "moneda moneda",
                all: "todo",
                back: "Cancelar",
                dui: "Par comercial",
                notenough: "Equilibrio insuficiente",
                notbest: "Actualmente no hay un mejor precio",
                p_price: "Introduzca el precio",
                p_num: "Por favor ingrese el número",
                delegate: "Delegado actual",
                all_delegate: "Delegar todo",
                his_delegate: "Delegación histórica",
                has_done: "Listo",
                has_cancel: "Cancelado",
                has_pay: "pagado",
                fee: "Tarifa de manipulación",
                handnum: "Intercambiar manos",
                p_handnum: "Introduzca el número de manos",
                balance: "Balance",
                buy_duo: "Buy (long)",
                sell_kong: "Vender (corto)",
                pankou: "Hándicap",
                chicang: "Posición",
                types: "Tipo",
                operate: "Operación",
                pingcang: "Cerrar posición",
                chedan: "Cancelar pedido",
                duo: "Do Long",
                kong: "Ir corto",
                hands: "Manos",
                hand: "Mano",
                times: "Múltiple",
                money: "Margen",
                confrim_ping: "¿Estás seguro de cerrar la posición?",
                confrim_order: "Confirmar pedido",
                confrim_chedan: "¿Confirmar para cancelar el pedido?",
                p_times: "Seleccione múltiples",
                p_hands: "Seleccione o ingrese el número de manos",
                p_delprice: "Introduzca el precio de la comisión",
                p_notless: "El número de lotes ingresados ​​no puede ser menor que",
                p_notmore: "El número de lotes ingresados ​​no puede ser mayor que",
                delegate_price: "Precio delegado",
                price_cang: "Precio de apertura",
                price_zhiying: "Take Profit Price",
                num_zhehe: "Cantidad convertida",
                price_cur: "Precio actual",
                price_lose: "Stop Loss Price",
                can_money: "Margen disponible",
                time_start: "Hora de posición abierta",
                geye_fee: "Tarifa de noche",
                dealtype: "Tipo de oferta"
            },
            lever: {
                delegating: "Delegar",
                dealing: "Negociando",
                pingcanging: "Posición cerrada",
                hasping: "Posición cerrada",
                hasback: "El pedido ha sido cancelado",
                risk: "Tasa de riesgo",
                totalyk: "Total ganancias y pérdidas de posiciones",
                yijian: "Cerrar posición con un clic",
                setys: "Establecer beneficios y detener pérdidas",
                profit: "Beneficio esperado",
                lose: "Pérdida esperada",
                price_zhiying: "Take Profit Price",
                price_lose: "Stop Loss Price",
                all_ping: "Cerrar todas las posiciones",
                duo_ping: "Solo haga ping a más pedidos",
                kong_ping: "Cerrar solo pedidos vacíos"
            },
            assets: (r = {
                trade: "Monedas",
                lever: "Contrato",
                legal: "Moneda legal",
                micro: "Segundo contrato",
                manage: "Gestión financiera",
                tradeacc: "Cuenta de divisas",
                leveracc: "Cuenta de contrato",
                legalacc: "Cuenta en moneda legal",
                microacc: "cuenta de segundo contrato",
                zhehe: "Plegable",
                zhehecny: "Total de activos convertidos",
                lock: "Congelar",
                assets: "Activos",
                records: "Registros financieros",
                charge: "Charge Coin",
                mention: "Retirar monedas",
                transfer: "Transferir",
                record: "Grabar",
                cur_coin: "Moneda actual",
                addr_charge: "Dirección de cargo",
                coypaddr: "Copiar dirección",
                c_tip1: "No recargues nada más que la dirección anterior",
                c_tip2: "De lo contrario, los activos no se recuperarán",
                c_tip3: "El depósito solo admite el método de envío simple, el depósito con otros métodos no se puede publicar temporalmente, por favor comprenda",
                c_tip4: "Después de recargar a la dirección anterior, necesita la confirmación de todo el nodo de red. Después de 1 confirmación de red, se recibirá la cuenta y la moneda se puede retirar después de 6 confirmaciones de red",
                c_tip5: "Cantidad mínima de recarga",
                c_tip6: "El depósito inferior al monto mínimo no se acreditará en la cuenta y no se podrá devolver",
                c_tip7: "Su dirección de recarga no cambiará con frecuencia, puede recargar; si hay algún cambio, haremos todo lo posible para notificarle a través de anuncios en línea o correos electrónicos",
                c_tip8: "Por favor, asegúrese de que su computadora y navegador sean seguros para evitar que la información sea alterada o filtrada",
                copy_success: "Copiar correctamente",
                copy_err: "Error al copiar",
                mentionaddr: "Dirección de retiro",
               	paypwd: "Por favor ingrese la contraseña de la transacción",
                p_paypwd: "Por favor ingrese la contraseña de la transacción",
                p_addr: "Primero configure su dirección de retiro"
            },
                (0,
                    o.default) (r, "mention", "Retirada"),
                (0,
                    o.default) (r, "minnum", "Monto mínimo de retiro"),
                (0,
                    o.default) (r, "recivenum", "Importe a cuenta"),
                (0,
                    o.default) (r, "p_minnum", "Introduzca el número de monedas retiradas"),
                (0,
                    o.default) (r, "transfernum", "transfer number"),
                (0,
                    o.default) (r, "p_transfernum", "Introduzca el número de transferencia"),
                (0,
                    o.default) (r, "from", "desde"),
            (0,
                o.default) (r, "to", "a"),
                r),
            legal: {
                legal: "Moneda legal",
                ibuy: "Quiero comprar",
                isell: "Quiero vender",
                price: "Precio unitario",
                limit: "Límite",
                buy: "compra",
                sell: "Vender",
                anprice: "Por precio",
                annum: "Por número",
                pl: "Por favor ingrese",
                amount: "Cantidad",
                num: "Número",
                allmoney: "Importe total de la transacción",
                autocancel: "Autocancel",
                hacer: "Realizar un pedido",
                p_amout: "Ingrese la cantidad",
                coin: "Moneda",
                list: "Registro de transacciones",
                t_tip1: "Pague al comerciante a tiempo",
                t_tip2: "Tenga paciencia y espere a que la otra parte pague",
                t_tip3: "Confirmo que no he pagado a la otra parte"
            },
            store: {
                myshop: "Mi tienda",
                regtime: "Hora de registro",
                pertenencia: "Perteneciente a la moneda legal",
                entershop: "Entrar en la tienda",
                rzshop: "Comerciante certificado",
                fabu: "Liberar",
                allorder: "Pedido de montaje",
                thirtyorder: "Pedido el día 30",
                doneorder: "Pedido completo",
                donelv: "Tasa de finalización",
                renzhengmobile: "Autenticación móvil",
                renzhengauth: "Autenticación de nombre real",
                renzhenghigh: "Certificación avanzada",
                notdone: "No completado",
                hecho: "Completado",
                yichang: "Excepción",
                lowershelf: "Fuera de estantería",
                protection: "Protección de derechos",
                apply: "Solicitar protección de derechos",
                back: "Retirar",
                lookorder: "Ver pedido",
                minnum: "Volumen mínimo de transacciones",
                maxnum: "Volumen máximo de transacciones",
                p_payment: "Elija un método de pago",
                p_coin: "Seleccione una unidad de moneda",
                p_price: "Introduzca el precio unitario",
                p_min: "Ingrese el volumen mínimo de transacciones",
                p_max: "Ingrese el volumen máximo de transacciones",
                ithink: "Lo pensaré de nuevo",
                makeyichang: "¿La confirmación está marcada como anormal?",
                alipay: "Alipay",
                wechat: "WeChat",
                bank: "Tarjeta bancaria",
                t_minmax: "El volumen máximo de transacciones no puede ser menor que el volumen mínimo de transacciones",
                mysell: "Mi venta",
                mybuy: "Mi compra",
                orderlist: "Registro de pedidos",
                orderstatus: "Estado del pedido",
                chongzhi: "Reiniciar",
                p_pay: "Por favor pague",
                p_waitpay: "Pago pendiente",
                t_pay: "Pague al vendedor a tiempo",
                t_waitpay: "Espere pacientemente a que la otra parte pague",
                t_paycancel: "El pedido ha sido cancelado, no se puede ver la información de pago",
                t_havepay: "El pedido ha sido pagado",
                t_hasdone: "El pedido se ha completado",
                call: "Comuníquese con la otra parte",
                collectcode: "Código QR de colección",
                collectper: "Beneficiario",
                payper: "Comprador",
                collectacc: "Cuenta receptora",
                paycancode: "Número de referencia de pago",
                dotime: "Hora del pedido",
                t_self: "Úselo a usted mismo",
                t_transfer: "Transfiera usted mismo a la cuenta anterior",
                t_tip: "No comente BTC, USDT y otra información durante el proceso de transferencia para evitar problemas como la interceptación de remesas y el congelamiento de tarjetas bancarias",
                cancelorder: "Cancelar pedido",
                ipay: "He pagado correctamente",
                t_look: "Verifique la información de pago cuidadosamente antes de confirmar el pago",
                t_con_collect: "Confirma que se ha recibido el pago",
                cancel_confrim: "Confirmar para cancelar la transacción",
                t_tip1: "Si ya pagó al vendedor, no cancele la transacción",
                t_tip2: "El comprador tiene tres cancelaciones el mismo día, lo que limitará la función de compra el mismo día",
                t_rule: "Cancelar regla",
                confrim_ipay: "Confirmar que he pagado",
                donotconfrim: "Si no ha pagado al vendedor, no haga clic en el botón de confirmación",
                lockacc: "Los clics maliciosos congelarán la cuenta",
                hedui: "Por favor revise la información de pago cuidadosamente",
                notpayconfrim: "Si no ha recibido el pago del comerciante, no haga clic en el botón confirmar",
                yes: "Sí",
                no: "no",
                sd: "bloquear saldo",
                journal: "Balance Journal",
                business: "Negocio",
                user: "Usuario",
                backdone: "Retirado"
            },
            coin: {
                bao: "Tesoro de monedas de corte",
                choose: "Elegir moneda",
                total: "Total de monedas depositadas",
                mybao: "Mi moneda de depósito",
                profit: "Beneficio estimado",
                end_time: "Hora de vencimiento",
                day: "Número de días",
                rate: "Tasa de rendimiento",
                rule: "Regla de depósito de monedas"
            },
            team: {
                team: "Mi equipo",
                zt_num: "Impulsar directamente el número de personas",
                active_num: "Número de miembros activos del equipo",
                profit: "Beneficio",
                cblog: "registro de depósito de monedas",
                bblog: "registro de monedas",
                back: "Reembolso",
                account:"cuenta"
            }
        };
        t.default = s
    },
    khtf: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a, r, o = i(n("ade3")), s = {
            zdy: (a = {
                khyh: "Banca di conto",
                khzh: "Filiale di apertura del conto",
                czje: "Ricarica importo",
                dzje: "Importo sul conto",
                tips: "Suggerimenti",
                qdqx: "Sei sicuro di annullare l'impegno",
                scsj: "Tempo di blocco",
                a37: "Ricevi facilmente la ricompensa",
                a33: "La cancellazione sarà detratta",
                a32: "Interesse totale",
                a31: "Importo di monete depositate",
                a30: "Record posizione bloccata",
                a29: "Stima delle entrate totali",
                a28: "L'estrazione mineraria è più facile",
                a27: "Tesoro minerario",
                a26: "Periodo di blocco",
                a25: "Cielo",
                a24: "Interesse yen giapponese",
                a23: "Annualizzazione di riferimento degli ultimi 3 giorni",
                a22: "Blocca posizione per guadagnare monete",
                a21: "Annulla impegno",
                a20: "Tempo di scadenza",
                a19: "Tempo di impegno",
                a18: "Importo da produrre",
                a17: "Numero progetto",
                a16: "Registro di pegno",
                a15: "Annulla il pegno e restituisci il capitale, nessun reddito può essere ottenuto",
                a14: "Insufficiente",
                a13: "Saldo del portafoglio",
                a12: "Importo del pegno",
                a11: "Promessa",
                a10: "Segnalino",
                a9: "La quantità in uscita sarà convertita in valore equivalente",
                a8: "Quantità stimata da produrre",
                a7: "Ricavi totali",
                a6: "Guadagna più ritorni",
                a5: "Deposito",
                a4: "Impegno mobile",
                a3: "Il titolare può godere del reddito di pegno",
                a36: "Banca di apertura del conto di rimessa",
                a35: "Numero di carta bancaria di rimessa",
                a34: "Nome rimessa",
                oldpwd: "Inserisci la vecchia password",
                zxkf: "Servizio clienti online",
                a2: "Pagamento richiesto",
                a1: "Valuta di abbonamento",
                a0: "Detrazione di prelievo",
                dqyuee: "Saldo attuale",
                download: "Scarica APP",
                czsl: "Quantità di ricarica",
                qbdz: "Indirizzo portafoglio",
                enterqbdz: "Inserisci l'indirizzo del portafoglio",
                tjsh: "Invia per revisione",
                sb01: "Il tempo per la richiesta di inserimento nell'elenco dipende dalla qualità della trasmissione dei dati",
                sb02: "Risultato della domanda",
                sb03: "Dopo aver ricevuto l'e-mail di conferma, inviare le informazioni pertinenti secondo l'e-mail",
                sb04: "Invia informazioni",
                sb05: "Invia domanda di quotazione",
                sb06: "Applica",
                sb07: "Processo di domanda",
                sb08: "Richiedi quotazione",
                sb09: "PaxfulCoins sostiene tutto per il bene dei clienti e mette al primo posto gli interessi degli utenti. Ora stiamo cercando progetti di alta qualità (valute) per ripagare i clienti per il loro supporto a lungo termine. Acquista monete di alta qualità, acquista monete di valore , e scegli solo PaxfulCoins!",
                ksgt: "Comunicazione rapida",
                sbsq: "Richiesta di quotazione",
                qrszfpz: "Inserisci il buono di pagamento",
                zfpz: "Buono di pagamento",
                dqsy: "Guadagni correnti",
                ygsy: "Guadagno stimato",
                rgcz: "Operazione di abbonamento",
                srrgsl: "Inserisci la quantità di abbonamento",
                kdh: "Scambiabile",
                gw: "Sito web ufficiale",
                bps: "Libro bianco",
                sgzq: "Periodo di abbonamento",
                anno: "Preriscaldamento",
                sg: "Abbonamento",
                js: "Fine",
                xmxq: "Dettagli progetto",
                rg: "Iscriviti",
                ieo: "Abbonamento IEO",
                zt: "Stato",
                fhjg: "Prezzo di emissione",
                dqsj: "Tempo di scadenza"
            },
                (0,
                    o.default)(a, "scsj", "lock time"),
                (0,
                    o.default)(a, "yjsy", "Stima del reddito"),
                (0,
                    o.default)(a, "zxscsl", "Posizione minima bloccata"),
                (0,
                    o.default)(a, "syl", "tasso di rendimento"),
                (0,
                    o.default)(a, "sc", "posizione di blocco"),
                (0,
                    o.default)(a, "ts", "numero di giorni"),
                (0,
                    o.default)(a, "fhzl", "Totale emesso"),
                (0,
                    o.default)(a, "jssj", "Ora di fine"),
                (0,
                    o.default)(a, "yjs", "Fine"),
                (0,
                    o.default)(a, "wks", "non avviato"),
                (0,
                    o.default)(a, "jxz", "in corso"),
                (0,
                    o.default)(a, "scz", "posizione di blocco"),
                (0,
                    o.default)(a, "ydq", "Scaduto"),
                (0,
                    o.default)(a, "nodata", "nessun dato"),
                (0,
                    o.default)(a, "nomore", "non più dati"),
                (0,
                    o.default)(a, "more", "Carica altro"),
                (0,
                    o.default)(a, "qbye", "saldo del portafoglio"),
                (0,
                    o.default)(a, "scgz", "Regole di blocco"),
                (0,
                    o.default)(a, "sclb", "Blocca elenco posizioni"),
                (0,
                    o.default)(a, "ts", "numero di giorni"),
                (0,
                    o.default)(a, "scwk", "lock-in mining"),
                (0,
                    o.default)(a, "furbo", "Resa"),
                (0,
                    o.default)(a, "yebz", "Saldo insufficiente"),
                (0,
                    o.default)(a, "mhydd", "secondo ordine di contratto"),
                (0,
                    o.default)(a, "gmj", "prezzo di acquisto"),
                (0,
                    o.default)(a, "cjj", "Prezzo della transazione"),
                (0,
                    o.default)(a, "yjyk", "Utili e perdite stimati"),
                (0,
                    o.default)(a, "yk", "profitti e perdite"),
                (0,
                    o.default)(a, "djs", "countdown"),
                a),
            login: {
                l_mobile: "Accesso cellulare",
                l_email: "Accesso alla casella di posta",
                p_email: "Inserisci l'indirizzo email",
                p_mobile: "Inserisci il tuo numero di cellulare",
                p_pwd: "Inserisci la password",
                p_confirmPwd: "Conferma la password",
                p_confirmtradePwd: "password di transazione",
                p_vcode: "Inserisci il codice di verifica",
                get_code: "Ottieni codice di verifica",
                rem_pwd: "Ricorda password",
                login: "Entra",
                noaccount: "Non hai ancora un account PaxfulCoins?",
                register: "Registrati",
                forget_pwd: "Servizio Online",
                p_taccount: "Inserisci il numero di telefono corretto",
                p_temail: "Inserisci l'indirizzo email corretto",
                p_pwderr: "La password è stata inserita in modo errato",
                l_success: "Accesso riuscito",
                r_noedit: "Non modificabile dopo la registrazione",
                r_mobile: "Registrazione cellulare",
                r_email: "Registrazione casella di posta",
                r_hasaccount: "Ho già un account PaxfulCoins",
                r_next: "Avanti",
                r_sms: "Verifica SMS",
                r_smsemail: "Verifica e-mail",
                r_pmobilecode: "Inserisci il codice di verifica del cellulare",
                r_pemailcode: "Inserisci il codice di verifica dell'e-mail",
                r_send: "Invia",
                p_len: "La lunghezza della password è di 6~16 cifre",
                p_notsame: "L'immissione della password non è coerente",
                p_simple: "La password è troppo semplice, reinserirla",
                p_inputagain: "L'immissione della password non è coerente, reinserirla",
                p_first: "Si prega di leggere e accettare prima l'accordo con l'utente",
                p_invitecode: "Codice invito (può essere vuoto)",
                p_inviteInput: "Inserisci il codice di invito",
                p_agree: "Sono d'accordo",
                p_private: "Accordo con l'utente e Informativa sulla privacy",
                p_set: "Imposta",
                p_setPwd: "Imposta password",
                f_mobile: "Recupera telefono cellulare",
                f_email: "Recupera casella di posta",
                e_mb: "Numero di cellulare",
                e_mail: "Casella postale",
                e_pwd: "Modifica password",
                e_chongzhi: "Reimposta password",
                e_dealPwd: "Modifica password transazione",
                e_pdeal: "Inserisci la password della transazione",
                e_pdealerr: "La password della transazione è stata inserita in modo errato",
                e_pdealConfrim: "Conferma la password della transazione",
                e_confrim: "Conferma",
                e_confrim2: "OK",
                security: "Centro sicurezza",
                s_loginpwd: "Password di accesso",
                s_dealpwd: "Password transazione",
                s_edit: "Modifica"
            },
            about: {
                abt: "Chi siamo",
                concat: "Contattaci",
                privat: "Privacy Policy",
                theme: "Modalità notturna"
            },
            collect: {
                method: "Metodo di pagamento",
                name: "vero nome",
                p_name: "Inserisci il tuo vero nome",
                banca: "Banca di apertura conto",
                p_bank: "Inserisci la banca di apertura del conto",
                no: "Numero carta bancaria",
                p_no: "Inserisci il numero della carta di credito",
                alipay: "Numero Alipay",
                p_alipay: "Inserisci il numero di conto Alipay",
                nick: "Nome WeChat",
                p_nick: "Inserisci il nickname di WeChat",
                wechat: "Conto WeChat",
                p_wechat: "Inserisci l'account WeChat",
                wechatCode: "Codice collezione Wechat",
                alipayCode: "Codice Riscossione Alipay",
                up_wechatCode: "Carica il codice raccolta Wechat",
                up_alipayCode: "Carica il codice Alipay",
                cardno: "Numero carta d'identità",
                p_cardno: "Inserisci il numero ID",
                up_card: "Carica fototessera",
                up_cardz: "Carica la parte anteriore della carta d'identità",
                up_cardf: "Carica il retro della carta d'identità",
                up_cardhand: "Carica una carta d'identità portatile"
            },
            bind: {
                bindAddr: "Associa l'indirizzo di ritiro",
                cur_select: "Valuta attualmente selezionata",
                addr: "Indirizzo di ritiro",
                codeauth: "Il mio codice di autorizzazione",
                codetip: "Quando si aggiunge un utente come agente, è necessario verificare il codice di autorizzazione dell'utente",
                p_addr: "Inserisci l'indirizzo per il ritiro",
                code: "Codice di verifica",
                bind: "Legare",
                sendSuccess: "Invia con successo",
                bindOk: "Associazione riuscita",
                tuiguang: "Il mio codice promozionale",
                codes: "Codice Promozionale",
                tip: "Scansiona il modello del codice QR sopra o inserisci il codice promozionale per confermare la registrazione",
                liantype: "Tipo di catena"
            },
            authentication: {
                person: "Centro Personale",
                renzheng: "Autenticazione dell'identità",
                gaoji: "Autenticazione avanzata",
                go: "Vai all'autenticazione",
                ing: "In corso di revisione",
                has: "Autenticato",
                rz_tip: "Il limite di prelievo può essere aumentato dopo l'autenticazione",
                name: "Nome",
                account: "Conto",
                zj: "Numero di certificato"
            },
            home: {
                legal: "Transazione in valuta Fiat",
                zhichi: "Supporta BTC, USDT, ecc.",
                lever: "Transazione contrattuale",
                news: "Centro notizie",
                security: "Sicuro e affidabile",
                leader: "La piattaforma di trading di asset digitali leader nel mondo",
                updown: "Aumenta lista",
                name: "Nome",
                new_price: "Ultimo prezzo",
                fu: "Alzati e cadi",
                p_login: "Per favore accedi",
                welcome: "Benvenuto in PaxfulCoins",
                myshop: "Il mio negozio",
                myshare: "Il mio link di condivisione",
                logout: "Esci",
                detail: "Dettagli",
                up: "Tira su e carica",
                nomore: "Ancora non ci sono più dati",
                norecord: "Nessun record ancora",
                loading: "Caricamento",
                team: "La mia squadra",
                fast: "Acquisto rapido moneta",
                micro: "seconda transazione contrattuale"
            },
            market: {
                market: "Mercato",
                volume: "Volume 24 ore",
                home: "casa"
            },
            trade: {
                trade: "Commercio valutario",
                buy: "comprare",
                sell: "Vendere",
                limit: "Prezzo Limite",
                shi: "prezzo di mercato",
                cancel: "Annulla",
                best: "Commercia al miglior prezzo attuale",
                num: "Numero",
                use: "Disponibile",
                amout: "Importo della transazione",
                price: "Prezzo",
                time: "Tempo",
                bibi: "moneta",
                all:"tutto",
                back: "Annulla",
                dui: "Coppia commerciale",
                notenough: "Equilibrio insufficiente",
                notbest: "Al momento non esiste un prezzo migliore",
                p_price: "Inserisci il prezzo",
                p_num: "Inserisci il numero",
                delegate: "Delegato attuale",
                all_delegate: "Delega tutto",
                his_delegate: "Delegazione storica",
                has_done: "Fatto",
                has_cancel: "Annullato",
                has_pay: "pagato",
                fee: "Commissione di gestione",
                handnum: "Mani commerciali",
                p_handnum: "Inserisci il numero di mani",
                balance: "Saldo",
                buy_duo: "Compra (lungo)",
                sell_kong: "Vendi (breve)",
                pankou: "Haicap",
                chicang: "Posizione",
                types: "Tipo",
                operate: "Operazione",
                pingcang: "Chiudi posizione",
                chedan: "Annulla ordine",
                duo: "Do Long",
                kong: "Vai corto",
                hands: "Mani",
                hand: "Mano",
                times: "Multiplo",
                money: "Margine",
                confrim_ping: "Sei sicuro di chiudere la posizione?",
                confrim_order: "Conferma ordine",
                confrim_chedan: "Confermi di annullare l'ordine?",
                p_times: "Seleziona multipli",
                p_hands: "Seleziona o inserisci il numero di mani",
                p_delprice: "Inserisci il prezzo della commissione",
                p_notless: "Il numero di lotti inseriti non può essere inferiore a",
                p_notmore: "Il numero di lotti inseriti non può essere maggiore di",
                delegate_price: "Prezzo delegato",
                price_cang: "Prezzo di apertura",
                price_zhiying: "Prezzo Take Profit",
                num_zhehe: "Quantità convertita",
                price_cur: "Prezzo corrente",
                price_lose: "Prezzo Stop Loss",
                can_money: "Margine disponibile",
                time_start: "Tempo posizione aperta",
                geye_fee: "Tariffa notturna",
                dealtype: "Tipo di affare"
            },
            lever: {
                delegating: "Delega",
                dealing: "Commercio",
                pingcaging: "Posizione chiusa",
                hasping: "Posizione chiusa",
                hasback: "L'ordine è stato annullato",
                risk: "Tasso di rischio",
                totalyk: "Utili e perdite totali delle posizioni",
                yijian: "Chiudi posizione con un clic",
                setys: "Imposta profitto e stop loss",
                profit: "Profitto atteso",
                lose: "Perdita prevista",
                price_zhiying: "Prezzo Take Profit",
                price_lose: "Prezzo Stop Loss",
                all_ping: "Chiudi tutte le posizioni",
                duo_ping: "Ping solo più ordini",
                kong_ping: "Chiudi solo ordini vuoti"
            },
            assets: (r = {
                trade: "monete",
                lever: "Contratto",
                legal: "moneta legale",
                micro: "Secondo Contratto",
                manage: "Gestione finanziaria",
                tradeacc: "Conto valuta",
                leveracc: "Conto contratto",
                legalacc: "Conto in valuta legale",
                microacc: "secondo contratto di conto",
                zhehe: "Pieghevole",
                zhechecny: "Totale attivo convertito",
                lock: "Blocca",
                assets: "Attività",
                records: "Registri finanziari",
                charge: "Carica moneta",
                mention: "Preleva monete",
                transfer: "Trasferimento",
                record: "Registra",
                cur_coin: "Valuta corrente",
                addr_charge: "Indirizzo di addebito",
                coypaddr: "Copia indirizzo",
                c_tip1: "Si prega di non ricaricare altro che l'indirizzo sopra",
                c_tip2: "Altrimenti gli asset non verranno recuperati",
                c_tip3: "Il deposito supporta solo il metodo di invio semplice, il deposito con altri metodi non può essere inviato temporaneamente, per favore capisci",
                c_tip4: "Dopo aver ricaricato all'indirizzo sopra, è necessaria la conferma dell'intero nodo di rete. Dopo 1 conferma di rete, l'account verrà ricevuto e la valuta può essere ritirata dopo 6 conferme di rete",
                c_tip5: "Importo minimo di ricarica",
                c_tip6: "Il deposito inferiore all'importo minimo non verrà accreditato sul conto e non potrà essere restituito",
                c_tip7: "Il tuo indirizzo di ricarica non cambierà frequentemente, puoi ricaricare; se c'è qualche cambiamento, faremo del nostro meglio per avvisarti tramite annunci online o e-mail",
                c_tip8: "Assicurati che il tuo computer e browser siano sicuri per evitare che le informazioni vengano manomesse o trapelate",
                copy_success: "Copia riuscita",
                copy_err: "Copia non riuscita",
                mentionaddr: "Indirizzo di ritiro",
                paypwd: "Si prega di inserire la password della transazione",
                p_paypwd: "Si prega di inserire la password della transazione",
                p_addr: "Imposta prima il tuo indirizzo di prelievo"
            },
                (0,
                    o.default)(r, "mention", "Ritiro"),
                (0,
                    o.default)(r, "minnum", "Importo minimo di prelievo"),
                (0,
                    o.default)(r, "recivenum", "Importo sul conto"),
                (0,
                    o.default)(r, "p_minnum", "Inserisci il numero di monete prelevate"),
                (0,
                    o.default)(r, "transfernum", "numero di trasferimento"),
                (0,
                    o.default)(r, "p_transfernum", "Inserisci il numero del bonifico"),
                (0,
                    o.default)(r, "from", "da"),
                (0,
                    o.default)(r, "to", "a"),
                r),
            legal: {
                legal: "moneta legale",
                ibuy: "Voglio comprare",
                isell: "Voglio vendere",
                price: "Prezzo unitario",
                limit: "Limite",
                buy:"comprare",
                sell: "Vendere",
                anprice: "Per prezzo",
                annum: "Per numero",
                pl: "Inserisci",
                amount: "Importo",
                num: "Numero",
                allmoney: "Importo totale della transazione",
                autocancel: "Annullamento automatico",
                do: "Effettua un ordine",
                p_amout: "Inserisci l'importo",
                coin: "Valuta",
                list: "Registro transazione",
                t_tip1: "Si prega di pagare il commerciante in tempo",
                t_tip2: "Si prega di pazientare e attendere che l'altra parte paghi",
                t_tip3: "Confermo di non aver pagato l'altra parte"
            },
            store: {
                myshop: "Il mio negozio",
                regtime: "Ora di registrazione",
                belongcoin: "Appartenente alla moneta legale",
                entershop: "Entra nel negozio",
                rzshop: "Commerciante certificato",
                fabu: "Libera",
                allorder: "Ordine di assemblaggio",
                thirtyorder: "Ordine il 30",
                doneorder: "Completa l'ordine",
                donelv: "Tasso di completamento",
                renzhengmobile: "Autenticazione mobile",
                renzhengauth: "Autenticazione del vero nome",
                renzhenghigh: "Certificazione avanzata",
                notdone: "Non completato",
                done: "Completato",
                yichang: "Eccezione",
                lowershelf: "Off Shelf",
                protection: "Tutela dei diritti",
                apply: "Richiedi la protezione dei diritti",
                back: "Ritira",
                lookorder: "Visualizza ordine",
                minnum: "Volume minimo di transazione",
                maxnum: "Volume massimo di transazione",
                p_payment: "Scegli un metodo di pagamento",
                p_coin: "Seleziona un'unità di valuta",
                p_price: "Inserisci il prezzo unitario",
                p_min: "Inserisci il volume minimo di transazione",
                p_max: "Inserisci il volume massimo di transazioni",
                penso: "Ci penserò ancora",
                makeyichang: "La conferma è contrassegnata come anormale?",
                alipay: "Alipay",
                wechat: "WeChat",
                bank: "Carta bancaria",
                t_minmax: "Il volume massimo della transazione non può essere inferiore al volume minimo della transazione",
                mysell: "La mia vendita",
                mybuy: "I miei acquisti",
                orderlist: "Registro ordine",
                orderstatus: "Stato dell'ordine",
                chongzhi: "Ripristina",
                p_pay: "Si prega di pagare",
                p_waitpay: "Pagamento in sospeso",
                t_pay: "Si prega di pagare il venditore in tempo",
                t_waitpay: "Attendi pazientemente che l'altra parte paghi",
                t_paycancel: "L'ordine è stato annullato, impossibile visualizzare le informazioni di pagamento",
                t_havepay: "L'ordine è stato pagato",
                t_hasdone: "L'ordine è stato completato",
                call: "Contattare l'altra parte",
                collectcode: "Codice QR Collezione",
                collectper: "Beneficiario",
                payper: "Acquirente",
                collectacc: "Account di ricezione",
                paycancode: "Numero di riferimento del pagamento",
                dotime: "Ordina ora",
                t_self: "Per favore usa te stesso",
                t_transfer: "Trasferisci da solo all'account di cui sopra",
                t_tip: "Non annotare BTC, USDT e altre informazioni durante il processo di trasferimento per evitare problemi come l'intercettazione delle rimesse e il blocco delle carte bancarie",
                cancelorder: "Annulla ordine",
                ipay: "Ho pagato con successo",
                t_look: "Si prega di controllare attentamente le informazioni di pagamento prima di confermare il pagamento",
                t_con_collect: "Conferma che il pagamento è stato ricevuto",
                cancel_confrim: "Conferma per annullare la transazione",
                t_tip1: "Se hai già pagato il venditore, non annullare la transazione",
                t_tip2: "L'acquirente ha tre annullamenti nello stesso giorno, il che limiterà la funzione di acquisto nello stesso giorno",
                t_rule: "Annulla regola",
                confrim_ipay: "Conferma di aver pagato",
                donotconfrim: "Se non hai pagato il venditore, non fare clic sul pulsante di conferma",
                lockacc: "Clic dannosi bloccheranno l'account",
                hedui: "Si prega di controllare attentamente le informazioni di pagamento",
                notpayconfrim: "Se non hai ricevuto il pagamento del commerciante, non fare clic sul pulsante di conferma",
                yes:"si",
                no: "No",
                sd: "blocco saldo",
                journal: "Giornale dell'equilibrio",
                business: "Affari",
                user: "Utente",
                backdone: "Ritirato"
            },
            coin: {
                bao: "Tagliare il tesoro delle monete",
                choose: "Scegli valuta",
                total: "Totale monete depositate",
                mybao: "La mia moneta di deposito",
                profit: "Profitto stimato",
                end_time: "Tempo di scadenza",
                day: "Numero di giorni",
                rate: "Tasso di rendimento",
                rule: "Regola del deposito di monete"
            },
            team: {
                team: "La mia squadra",
                zt_num: "Spingi direttamente il numero di persone",
                active_num: "Numero di membri attivi del team",
                profit: "Profitto",
                cblog: "record di deposito di monete",
                bblog: "record di monete",
                back: "Sconto",
                account: "Conto"
            }
        };
        t.default = s
    },
    e414: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var a = i(n("e143"))
            , r = i(n("a925"))
            , o = i(n("ac8f"))
            , s = i(n("62a7"))
            , l = i(n("1231"))
            , c = i(n("8a21"))
            , d = i(n("280a"))
            , u = i(n("556b"))
            , p = i(n("29fa"))
            , g = i(n("09d6"))
            , f = i(n("6e0c"))
            , j = i(n("khtf"))
            , k = i(n("pqjr"))
            , z = i(n("actg"))
            , m1 = i(n("acml"))
            , x1 = i(n("acxj"))
            , h = i(n("0d32"));
        a.default.use(r.default);
        var m = uni.getStorageSync("lang") || "en";
        "" == m && (m = "en",
            uni.setStorageSync("lang", m));
        var b = new r.default({
            locale: m,
            messages: {
                tg: z.default,
                zh: o.default,
                en: s.default,
                jp: l.default,
                hk: c.default,
                fra: d.default,
                de: u.default,
                id: g.default,
                hi: p.default,
                kor: h.default,
                th: f.default,
                it: j.default,
                spa: k.default,
                // tg: t.default,
                mlxy: m1.default,
                xjp: x1.default,
            }
        })
            , y = b;
        t.default = y
    },
    e4f9: function(module, exports, __webpack_require__) {
        (function(process, global) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                __webpack_require__("c19f"),
                    __webpack_require__("82da"),
                    __webpack_require__("ace4"),
                    __webpack_require__("d3b7"),
                    __webpack_require__("ac1f"),
                    __webpack_require__("25f0"),
                    __webpack_require__("1276"),
                    __webpack_require__("5cc6"),
                    __webpack_require__("fb2c"),
                    __webpack_require__("9a8c"),
                    __webpack_require__("a975"),
                    __webpack_require__("735e"),
                    __webpack_require__("c1ac"),
                    __webpack_require__("d139"),
                    __webpack_require__("3a7b"),
                    __webpack_require__("d5d6"),
                    __webpack_require__("82f8"),
                    __webpack_require__("e91f"),
                    __webpack_require__("60bd"),
                    __webpack_require__("5f96"),
                    __webpack_require__("3280"),
                    __webpack_require__("3fcc"),
                    __webpack_require__("ca91"),
                    __webpack_require__("25a1"),
                    __webpack_require__("cd26"),
                    __webpack_require__("3c5d"),
                    __webpack_require__("2954"),
                    __webpack_require__("649e"),
                    __webpack_require__("219c"),
                    __webpack_require__("170b"),
                    __webpack_require__("b39a"),
                    __webpack_require__("72f7"),
                    /**
                     * [js-md5]{@link https://github.com/emn178/js-md5}
                     *
                     * @namespace md5
                     * @version 0.7.3
                     * @author Chen, Yi-Cyuan [emn178@gmail.com]
                     * @copyright Chen, Yi-Cyuan 2014-2017
                     * @license MIT
                     */
                    function() {
                        "use strict";
                        var ERROR = "input is invalid type"
                            , WINDOW = "object" === typeof window
                            , root = WINDOW ? window : {};
                        root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                        var WEB_WORKER = !WINDOW && "object" === typeof self
                            , NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node;
                        NODE_JS ? root = global : WEB_WORKER && (root = self);
                        var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === typeof module && module.exports, AMD = __webpack_require__("3c35"), ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [128, 32768, 8388608, -2147483648], SHIFT = [0, 8, 16, 24], OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
                        if (ARRAY_BUFFER) {
                            var buffer = new ArrayBuffer(68);
                            buffer8 = new Uint8Array(buffer),
                                blocks = new Uint32Array(buffer)
                        }
                        !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }
                        ),
                        !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                                return "object" === typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                            }
                        );
                        var createOutputMethod = function(e) {
                            return function(t) {
                                return new Md5(!0).update(t)[e]()
                            }
                        }
                            , createMethod = function() {
                            var e = createOutputMethod("hex");
                            NODE_JS && (e = nodeWrap(e)),
                                e.create = function() {
                                    return new Md5
                                }
                                ,
                                e.update = function(t) {
                                    return e.create().update(t)
                                }
                            ;
                            for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                                var n = OUTPUT_TYPES[t];
                                e[n] = createOutputMethod(n)
                            }
                            return e
                        }
                            , nodeWrap = function nodeWrap(method) {
                            var crypto = eval("require('crypto')")
                                , Buffer = eval("require('buffer').Buffer")
                                , nodeMethod = function(e) {
                                if ("string" === typeof e)
                                    return crypto.createHash("md5").update(e, "utf8").digest("hex");
                                if (null === e || void 0 === e)
                                    throw ERROR;
                                return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
                                    Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e)
                            };
                            return nodeMethod
                        };
                        function Md5(e) {
                            if (e)
                                blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                                    this.blocks = blocks,
                                    this.buffer8 = buffer8;
                            else if (ARRAY_BUFFER) {
                                var t = new ArrayBuffer(68);
                                this.buffer8 = new Uint8Array(t),
                                    this.blocks = new Uint32Array(t)
                            } else
                                this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                                this.finalized = this.hashed = !1,
                                this.first = !0
                        }
                        Md5.prototype.update = function(e) {
                            if (!this.finalized) {
                                var t, n = typeof e;
                                if ("string" !== n) {
                                    if ("object" !== n)
                                        throw ERROR;
                                    if (null === e)
                                        throw ERROR;
                                    if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                                        e = new Uint8Array(e);
                                    else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e)))
                                        throw ERROR;
                                    t = !0
                                }
                                var i, a, r = 0, o = e.length, s = this.blocks, l = this.buffer8;
                                while (r < o) {
                                    if (this.hashed && (this.hashed = !1,
                                        s[0] = s[16],
                                        s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0),
                                        t)
                                        if (ARRAY_BUFFER)
                                            for (a = this.start; r < o && a < 64; ++r)
                                                l[a++] = e[r];
                                        else
                                            for (a = this.start; r < o && a < 64; ++r)
                                                s[a >> 2] |= e[r] << SHIFT[3 & a++];
                                    else if (ARRAY_BUFFER)
                                        for (a = this.start; r < o && a < 64; ++r)
                                            i = e.charCodeAt(r),
                                                i < 128 ? l[a++] = i : i < 2048 ? (l[a++] = 192 | i >> 6,
                                                    l[a++] = 128 | 63 & i) : i < 55296 || i >= 57344 ? (l[a++] = 224 | i >> 12,
                                                    l[a++] = 128 | i >> 6 & 63,
                                                    l[a++] = 128 | 63 & i) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++r)),
                                                    l[a++] = 240 | i >> 18,
                                                    l[a++] = 128 | i >> 12 & 63,
                                                    l[a++] = 128 | i >> 6 & 63,
                                                    l[a++] = 128 | 63 & i);
                                    else
                                        for (a = this.start; r < o && a < 64; ++r)
                                            i = e.charCodeAt(r),
                                                i < 128 ? s[a >> 2] |= i << SHIFT[3 & a++] : i < 2048 ? (s[a >> 2] |= (192 | i >> 6) << SHIFT[3 & a++],
                                                    s[a >> 2] |= (128 | 63 & i) << SHIFT[3 & a++]) : i < 55296 || i >= 57344 ? (s[a >> 2] |= (224 | i >> 12) << SHIFT[3 & a++],
                                                    s[a >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & a++],
                                                    s[a >> 2] |= (128 | 63 & i) << SHIFT[3 & a++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++r)),
                                                    s[a >> 2] |= (240 | i >> 18) << SHIFT[3 & a++],
                                                    s[a >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & a++],
                                                    s[a >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & a++],
                                                    s[a >> 2] |= (128 | 63 & i) << SHIFT[3 & a++]);
                                    this.lastByteIndex = a,
                                        this.bytes += a - this.start,
                                        a >= 64 ? (this.start = a - 64,
                                            this.hash(),
                                            this.hashed = !0) : this.start = a
                                }
                                return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                                    this.bytes = this.bytes % 4294967296),
                                    this
                            }
                        }
                            ,
                            Md5.prototype.finalize = function() {
                                if (!this.finalized) {
                                    this.finalized = !0;
                                    var e = this.blocks
                                        , t = this.lastByteIndex;
                                    e[t >> 2] |= EXTRA[3 & t],
                                    t >= 56 && (this.hashed || this.hash(),
                                        e[0] = e[16],
                                        e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                                        e[14] = this.bytes << 3,
                                        e[15] = this.hBytes << 3 | this.bytes >>> 29,
                                        this.hash()
                                }
                            }
                            ,
                            Md5.prototype.hash = function() {
                                var e, t, n, i, a, r, o = this.blocks;
                                this.first ? (e = o[0] - 680876937,
                                    e = (e << 7 | e >>> 25) - 271733879 << 0,
                                    i = (-1732584194 ^ 2004318071 & e) + o[1] - 117830708,
                                    i = (i << 12 | i >>> 20) + e << 0,
                                    n = (-271733879 ^ i & (-271733879 ^ e)) + o[2] - 1126478375,
                                    n = (n << 17 | n >>> 15) + i << 0,
                                    t = (e ^ n & (i ^ e)) + o[3] - 1316259209,
                                    t = (t << 22 | t >>> 10) + n << 0) : (e = this.h0,
                                    t = this.h1,
                                    n = this.h2,
                                    i = this.h3,
                                    e += (i ^ t & (n ^ i)) + o[0] - 680876936,
                                    e = (e << 7 | e >>> 25) + t << 0,
                                    i += (n ^ e & (t ^ n)) + o[1] - 389564586,
                                    i = (i << 12 | i >>> 20) + e << 0,
                                    n += (t ^ i & (e ^ t)) + o[2] + 606105819,
                                    n = (n << 17 | n >>> 15) + i << 0,
                                    t += (e ^ n & (i ^ e)) + o[3] - 1044525330,
                                    t = (t << 22 | t >>> 10) + n << 0),
                                    e += (i ^ t & (n ^ i)) + o[4] - 176418897,
                                    e = (e << 7 | e >>> 25) + t << 0,
                                    i += (n ^ e & (t ^ n)) + o[5] + 1200080426,
                                    i = (i << 12 | i >>> 20) + e << 0,
                                    n += (t ^ i & (e ^ t)) + o[6] - 1473231341,
                                    n = (n << 17 | n >>> 15) + i << 0,
                                    t += (e ^ n & (i ^ e)) + o[7] - 45705983,
                                    t = (t << 22 | t >>> 10) + n << 0,
                                    e += (i ^ t & (n ^ i)) + o[8] + 1770035416,
                                    e = (e << 7 | e >>> 25) + t << 0,
                                    i += (n ^ e & (t ^ n)) + o[9] - 1958414417,
                                    i = (i << 12 | i >>> 20) + e << 0,
                                    n += (t ^ i & (e ^ t)) + o[10] - 42063,
                                    n = (n << 17 | n >>> 15) + i << 0,
                                    t += (e ^ n & (i ^ e)) + o[11] - 1990404162,
                                    t = (t << 22 | t >>> 10) + n << 0,
                                    e += (i ^ t & (n ^ i)) + o[12] + 1804603682,
                                    e = (e << 7 | e >>> 25) + t << 0,
                                    i += (n ^ e & (t ^ n)) + o[13] - 40341101,
                                    i = (i << 12 | i >>> 20) + e << 0,
                                    n += (t ^ i & (e ^ t)) + o[14] - 1502002290,
                                    n = (n << 17 | n >>> 15) + i << 0,
                                    t += (e ^ n & (i ^ e)) + o[15] + 1236535329,
                                    t = (t << 22 | t >>> 10) + n << 0,
                                    e += (n ^ i & (t ^ n)) + o[1] - 165796510,
                                    e = (e << 5 | e >>> 27) + t << 0,
                                    i += (t ^ n & (e ^ t)) + o[6] - 1069501632,
                                    i = (i << 9 | i >>> 23) + e << 0,
                                    n += (e ^ t & (i ^ e)) + o[11] + 643717713,
                                    n = (n << 14 | n >>> 18) + i << 0,
                                    t += (i ^ e & (n ^ i)) + o[0] - 373897302,
                                    t = (t << 20 | t >>> 12) + n << 0,
                                    e += (n ^ i & (t ^ n)) + o[5] - 701558691,
                                    e = (e << 5 | e >>> 27) + t << 0,
                                    i += (t ^ n & (e ^ t)) + o[10] + 38016083,
                                    i = (i << 9 | i >>> 23) + e << 0,
                                    n += (e ^ t & (i ^ e)) + o[15] - 660478335,
                                    n = (n << 14 | n >>> 18) + i << 0,
                                    t += (i ^ e & (n ^ i)) + o[4] - 405537848,
                                    t = (t << 20 | t >>> 12) + n << 0,
                                    e += (n ^ i & (t ^ n)) + o[9] + 568446438,
                                    e = (e << 5 | e >>> 27) + t << 0,
                                    i += (t ^ n & (e ^ t)) + o[14] - 1019803690,
                                    i = (i << 9 | i >>> 23) + e << 0,
                                    n += (e ^ t & (i ^ e)) + o[3] - 187363961,
                                    n = (n << 14 | n >>> 18) + i << 0,
                                    t += (i ^ e & (n ^ i)) + o[8] + 1163531501,
                                    t = (t << 20 | t >>> 12) + n << 0,
                                    e += (n ^ i & (t ^ n)) + o[13] - 1444681467,
                                    e = (e << 5 | e >>> 27) + t << 0,
                                    i += (t ^ n & (e ^ t)) + o[2] - 51403784,
                                    i = (i << 9 | i >>> 23) + e << 0,
                                    n += (e ^ t & (i ^ e)) + o[7] + 1735328473,
                                    n = (n << 14 | n >>> 18) + i << 0,
                                    t += (i ^ e & (n ^ i)) + o[12] - 1926607734,
                                    t = (t << 20 | t >>> 12) + n << 0,
                                    a = t ^ n,
                                    e += (a ^ i) + o[5] - 378558,
                                    e = (e << 4 | e >>> 28) + t << 0,
                                    i += (a ^ e) + o[8] - 2022574463,
                                    i = (i << 11 | i >>> 21) + e << 0,
                                    r = i ^ e,
                                    n += (r ^ t) + o[11] + 1839030562,
                                    n = (n << 16 | n >>> 16) + i << 0,
                                    t += (r ^ n) + o[14] - 35309556,
                                    t = (t << 23 | t >>> 9) + n << 0,
                                    a = t ^ n,
                                    e += (a ^ i) + o[1] - 1530992060,
                                    e = (e << 4 | e >>> 28) + t << 0,
                                    i += (a ^ e) + o[4] + 1272893353,
                                    i = (i << 11 | i >>> 21) + e << 0,
                                    r = i ^ e,
                                    n += (r ^ t) + o[7] - 155497632,
                                    n = (n << 16 | n >>> 16) + i << 0,
                                    t += (r ^ n) + o[10] - 1094730640,
                                    t = (t << 23 | t >>> 9) + n << 0,
                                    a = t ^ n,
                                    e += (a ^ i) + o[13] + 681279174,
                                    e = (e << 4 | e >>> 28) + t << 0,
                                    i += (a ^ e) + o[0] - 358537222,
                                    i = (i << 11 | i >>> 21) + e << 0,
                                    r = i ^ e,
                                    n += (r ^ t) + o[3] - 722521979,
                                    n = (n << 16 | n >>> 16) + i << 0,
                                    t += (r ^ n) + o[6] + 76029189,
                                    t = (t << 23 | t >>> 9) + n << 0,
                                    a = t ^ n,
                                    e += (a ^ i) + o[9] - 640364487,
                                    e = (e << 4 | e >>> 28) + t << 0,
                                    i += (a ^ e) + o[12] - 421815835,
                                    i = (i << 11 | i >>> 21) + e << 0,
                                    r = i ^ e,
                                    n += (r ^ t) + o[15] + 530742520,
                                    n = (n << 16 | n >>> 16) + i << 0,
                                    t += (r ^ n) + o[2] - 995338651,
                                    t = (t << 23 | t >>> 9) + n << 0,
                                    e += (n ^ (t | ~i)) + o[0] - 198630844,
                                    e = (e << 6 | e >>> 26) + t << 0,
                                    i += (t ^ (e | ~n)) + o[7] + 1126891415,
                                    i = (i << 10 | i >>> 22) + e << 0,
                                n += (e ^ (i | ~t)) + o[14] - 1416354905,
                                n = (n << 15 | n >>> 17) + i << 0,
                                t += (i ^ (n | ~e)) + o[5] - 57434055,
                                t = (t << 21 | t >>> 11) + n << 0,
                                e += (n ^ (t | ~i)) + o[12] + 1700485571,
                                e = (e << 6 | e >>> 26) + t << 0,
                                i += (t ^ (e | ~n)) + o[3] - 1894986606,
                                i = (i << 10 | i >>> 22) + e << 0,
                                n += (e ^ (i | ~t)) + o[10] - 1051523,
                                n = (n << 15 | n >>> 17) + i << 0,
                                t += (i ^ (n | ~e)) + o[1] - 2054922799,
                                t = (t << 21 | t >>> 11) + n << 0,
                                e += (n ^ (t | ~i)) + o[8] + 1873313359,
                                e = (e << 6 | e >>> 26) + t << 0,
                                i += (t ^ (e | ~n)) + o[15] - 30611744,
                                i = (i << 10 | i >>> 22) + e << 0,
                                n += (e ^ (i | ~t)) + o[6] - 1560198380,
                                n = (n << 15 | n >>> 17) + i << 0,
                                t += (i ^ (n | ~e)) + o[13] + 1309151649,
                                t = (t << 21 | t >>> 11) + n << 0,
                                e += (n ^ (t | ~i)) + o[4] - 145523070,
                                e = (e << 6 | e >>> 26) + t << 0,
                                i += (t ^ (e | ~n)) + o[11] - 1120210379,
                                i = (i << 10 | i >>> 22) + e << 0,
                                n += (e ^ (i | ~t)) + o[2] + 718787259,
                                n = (n << 15 | n >>> 17) + i << 0,
                                t += (i ^ (n | ~e)) + o[9] - 343485551,
                                t = (t << 21 | t >>> 11) + n << 0,
                                this.first ? (this.h0 = e + 1732584193 << 0,
                                    this.h1 = t - 271733879 << 0,
                                    this.h2 = n - 1732584194 << 0,
                                    this.h3 = i + 271733878 << 0,
                                    this.first = !1) : (this.h0 = this.h0 + e << 0,
                                    this.h1 = this.h1 + t << 0,
                                    this.h2 = this.h2 + n << 0,
                                    this.h3 = this.h3 + i << 0)
                            }
                            ,
                            Md5.prototype.hex = function() {
                                this.finalize();
                                var e = this.h0
                                    , t = this.h1
                                    , n = this.h2
                                    , i = this.h3;
                                return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15]
                            }
                            ,
                            Md5.prototype.toString = Md5.prototype.hex,
                            Md5.prototype.digest = function() {
                                this.finalize();
                                var e = this.h0
                                    , t = this.h1
                                    , n = this.h2
                                    , i = this.h3;
                                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255]
                            }
                            ,
                            Md5.prototype.array = Md5.prototype.digest,
                            Md5.prototype.arrayBuffer = function() {
                                this.finalize();
                                var e = new ArrayBuffer(16)
                                    , t = new Uint32Array(e);
                                return t[0] = this.h0,
                                    t[1] = this.h1,
                                    t[2] = this.h2,
                                    t[3] = this.h3,
                                    e
                            }
                            ,
                            Md5.prototype.buffer = Md5.prototype.arrayBuffer,
                            Md5.prototype.base64 = function() {
                                for (var e, t, n, i = "", a = this.array(), r = 0; r < 15; )
                                    e = a[r++],
                                        t = a[r++],
                                        n = a[r++],
                                        i += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | t >>> 4)] + BASE64_ENCODE_CHAR[63 & (t << 2 | n >>> 6)] + BASE64_ENCODE_CHAR[63 & n];
                                return e = a[r],
                                    i += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "==",
                                    i
                            }
                        ;
                        var exports = createMethod();
                        COMMON_JS ? module.exports = exports : (root.md5 = exports,
                        AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                            return exports
                        }
                            .call(exports, __webpack_require__, exports, module),
                        void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                    }()
            }
        ).call(this, __webpack_require__("4362"), __webpack_require__("c8ba"))
    }
});
