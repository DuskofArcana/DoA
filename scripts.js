$(document).ready(function() {
    if ($('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")).length && (e.preventDefault(), $("html, body").animate({
                    scrollTop: a.offset().top - 60
                }, 1e3, function() {
                    var e = $(a);
                    if (e.focus(), e.is(":focus")) return !1;
                    e.attr("tabindex", "-1"), e.focus()
                }))
            }
        }), /habilidades/g.test(location.pathname) && $.getJSON("https://spreadsheets.google.com/feeds/list/1f-z1zVlE-TNQ1NqzHoh9_WOi4hixspY20SJMPgNqDdw/1/public/values?alt=json", function(e) {
            var a = e.feed.openSearch$totalResults.$t;
            for (repite = 0; repite < a; repite++) {
                var s = e.feed.entry[repite].gsx$clase.$t,
                    i = e.feed.entry[repite].gsx$tipos.$t;
                if ("Aura" == i) var t = "th th-solar-system-o";
                else t = "Defensiva" == i || "Física / Defensiva" == i ? "sf sf-iron-man-o" : "Física" == i ? "th th-target-o" : "Pasiva" == i ? "th th-sun-o" : "Esencia" == i || "Esencia / Debilitamiento" == i || "Esencia / Evocación" == i ? "th th-star-1-o" : "Refuerzo" == i ? "th th-stars-o" : "Debilitamiento" == i ? "th th-cross-1-o" : "";
                var d = '<div class="skill"><div class="skill-icon"><span class="' + t + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div><div class="skill-ge">' + e.feed.entry[repite].gsx$coste.$t + '</div><div class="skill-req">' + e.feed.entry[repite].gsx$requisito.$t + '</div></div><div class="skill-barra"><div class="skill-punto"><div class="p-1">Nivel I</div><div class="p-2">Nivel II</div><div class="p-3">Nivel III</div></div><div class="barra-interna"><div class="barra-externa"></div></div></div><div class="skill-descfija">' + e.feed.entry[repite].gsx$descripción.$t + '</div><div class="skill-descrip"><div class="lvl-1">' + e.feed.entry[repite].gsx$nivel1.$t + '</div><div class="lvl-2 skill-hide">' + e.feed.entry[repite].gsx$nivel2.$t + '</div><div class="lvl-3 skill-hide">' + e.feed.entry[repite].gsx$nivel3.$t + "</div></div></div>";
                switch (s) {
                    case "Guardián":
                        $(".habilidades.guardian").append(d);
                        break;
                    case "Paladín":
                        $(".habilidades.paladin").append(d);
                        break;
                    case "Centinela":
                        $(".habilidades.centinela").append(d);
                        break;
                    case "Hostigador":
                        $(".habilidades.hostigador").append(d);
                        break;
                    case "Duelista":
                        $(".habilidades.duelista").append(d);
                        break;
                    case "Rastreador":
                        $(".habilidades.rastreador").append(d);
                        break;
                    case "Ejecutor":
                        $(".habilidades.ejecutor").append(d);
                        break;
                    case "Canalizador":
                        $(".habilidades.canalizador").append(d);
                        break;
                    case "Conjurador":
                        $(".habilidades.conjurador").append(d);
                        break;
                    case "Invocador":
                        $(".habilidades.invocador").append(d);
                        break;
                    case "Orador":
                        $(".habilidades.orador").append(d);
                        break;
                    case "Sanador":
                        $(".habilidades.sanador").append(d);
                        break;
                    case "Convergente":
                        $(".habilidades.convergente").append(d);
                        break;
                    case "Inicial Guardián":
                        var r = "sf sf-captain-america-o";
                        $(".habinicial.guardian").append('<div class="habinicial1"><div class="skill-icon"><span class="' + r + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div></div> <div class="habinicialdesc">' + e.feed.entry[repite].gsx$nivel1.$t + "</div></div>");
                        break;
                    case "Inicial Hostigador":
                        r = "th th-pirate-swords-o";
                        $(".habinicial.hostigador").append('<div class="habinicial1"><div class="skill-icon"><span class="' + r + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div></div> <div class="habinicialdesc">' + e.feed.entry[repite].gsx$nivel1.$t + "</div></div>");
                        break;
                    case "Inicial Canalizador":
                        r = "th th-snowflake-o";
                        $(".habinicial.canalizador").append('<div class="habinicial1"><div class="skill-icon"><span class="' + r + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div></div> <div class="habinicialdesc">' + e.feed.entry[repite].gsx$nivel1.$t + "</div></div>");
                        break;
                    case "Inicial Orador":
                        r = "th th-blossom-o";
                        $(".habinicial.orador").append('<div class="habinicial1"><div class="skill-icon"><span class="' + r + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div></div> <div class="habinicialdesc">' + e.feed.entry[repite].gsx$nivel1.$t + "</div></div>")
                }
            }
            $(".skill").on("click", ".p-1", function(e) {
                $(e.delegateTarget).find(".lvl-1").removeClass("skill-hide"), $(e.delegateTarget).find(".lvl-2").addClass("skill-hide"), $(e.delegateTarget).find(".lvl-3").addClass("skill-hide"), $(e.delegateTarget).find(".barra-externa").css("width", "25%"), $(e.delegateTarget).find(".p-2").removeClass("punto-activo"), $(e.delegateTarget).find(".p-3").removeClass("punto-activo")
            }), $(".skill").on("click", ".p-2", function(e) {
                $(e.delegateTarget).find(".lvl-1").addClass("skill-hide"), $(e.delegateTarget).find(".lvl-2").removeClass("skill-hide"), $(e.delegateTarget).find(".lvl-3").addClass("skill-hide"), $(this).addClass("punto-activo"), $(e.delegateTarget).find(".p-3").removeClass("punto-activo"), $(e.delegateTarget).find(".barra-externa").css("width", "50%")
            }), $(".skill").on("click", ".p-3", function(e) {
                $(e.delegateTarget).find(".lvl-1").addClass("skill-hide"), $(e.delegateTarget).find(".lvl-2").addClass("skill-hide"), $(e.delegateTarget).find(".lvl-3").removeClass("skill-hide"), $(this).addClass("punto-activo"), $(e.delegateTarget).find(".p-2").addClass("punto-activo"), $(e.delegateTarget).find(".barra-externa").css("width", "100%")
            })
        }), /tienda/g.test(location.pathname)) {
        var e = "https://spreadsheets.google.com/feeds/list/1bCddYVOaAla3CMAOT-uEJhHVLcO1Sd8bHBa8wXbbZ18/od6/public/values?alt=json";
        $.getJSON(e, function(e) {
            var a = e.feed.openSearch$totalResults.$t;
            for (console.log(e), repite = 0; repite < a; repite++) {
                var s = e.feed.entry[repite].gsx$estado.$t,
                    i = e.feed.entry[repite].gsx$clasificación.$t;
                if ("Brebaje" == i) var t = "th th-milk-o";
                else t = "Accesorio" == i ? "th th-gemstone-o" : "Objeto" == i ? "sf sf-certificate-o" : "Glifo" == i ? "sf sf-scarlet-eye" : "Arma" == i ? "sf sf-sword-o" : "Armadura" == i ? "sf sf-shirt-o" : "";
                var d = '<div class="tiendaitem"><div class="tiendaobj"><span class="' + t + '"></span>' + e.feed.entry[repite].gsx$nombre.$t + "</div><br><b>Tipo:</b> " + e.feed.entry[repite].gsx$tipo.$t + "<br><b>Usos:</b> " + e.feed.entry[repite].gsx$usos.$t + "<br><b>Precio:</b> " + e.feed.entry[repite].gsx$precio.$t + '<br><div class="tiendainner"><b>Descripción:</b>  ' + e.feed.entry[repite].gsx$descripción.$t + "</div></div>";
                if ("on" == s) switch (i) {
                    case "Objeto":
                        $(".tienda.objetos").append(d);
                        break;
                    case "Arma":
                        var r = e.feed.entry[repite].gsx$tipo.$t;
                        if ("Arco" == r || "Arma de Fuego" == r) var l = "sf sf-target-o";
                        else l = "Canalizadora" == r ? "sf sf-atom-1-o" : "Escudo" == r ? "sf sf-black-widow" : "Otros" == r ? "th th-comb-o" : "sf sf-sword-o";
                        $(".tienda.armas").append('<div class="tiendaitem"><div class="tiendaobj"><span class="' + l + '"></span>' + e.feed.entry[repite].gsx$nombre.$t + "</div><br><b>Tipo:</b> " + e.feed.entry[repite].gsx$tipo.$t + "<br><b>Rol:</b> " + e.feed.entry[repite].gsx$rol.$t + "<br><b>Usos:</b> " + e.feed.entry[repite].gsx$usos.$t + "<br><b>Precio:</b> " + e.feed.entry[repite].gsx$precio.$t + '<br><div class="tiendainner"><b>Descripción:</b>  ' + e.feed.entry[repite].gsx$descripción.$t + "</div></div>");
                        break;
                    case "Armadura":
                        $(".tienda.armaduras").append(d);
                        break;
                    case "Brebaje":
                        $(".tienda.brebajes").append(d);
                        break;
                    case "Glifo":
                        $(".tienda.glifos").append(d);
                        break;
                    case "Accesorio":
                        $(".tienda.accesorios").append(d)
                }
            }
        })
    }
    /bestiario/g.test(location.pathname) && (e = "https://spreadsheets.google.com/feeds/list/1_vsLEVMEYjWXfe9FPNF3W2PJtSxKoQ2lzNvBxoKGpRs/od6/public/values?alt=json", $.getJSON(e, function(e) {
        var a = e.feed.openSearch$totalResults.$t;
        for (repite = 0; repite < a; repite++) {
            var s = e.feed.entry[repite].gsx$estado.$t,
                i = e.feed.entry[repite].gsx$tipo.$t,
                t = e.feed.entry[repite].gsx$nivel.$t;
            if (1 == t) var d = '<span class="th th-circle"></span><span class="th th-circle-o"></span><span class="th th-circle-o"></span><span class="th th-circle-o"></span>';
            else d = 2 == t ? '<span class="th th-circle"></span><span class="th th-circle"></span><span class="th th-circle-o"></span><span class="th th-circle-o"></span>' : 3 == t ? '<span class="th th-circle"></span><span class="th th-circle"></span><span class="th th-circle"></span><span class="th th-circle-o"></span>' : 4 == t ? '<span class="th th-circle"></span><span class="th th-circle"></span><span class="th th-circle"></span><span class="th th-circle"></span>' : '<span class="th th-circle-o"></span><span class="th th-circle-o"></span><span class="th th-circle-o"></span><span class="th th-circle-o"></span>';
            var r = '<div class="best-div1"><div class="tab-image" style="background-image: url(' + e.feed.entry[repite].gsx$url.$t + '); background-position: bottom;" data-target="#' + e.feed.entry[repite].gsx$nombre.$t + '" type="button" data-toggle="collapse"></div><br><div class="best-name">' + e.feed.entry[repite].gsx$nombre.$t + '</div><br><div class="best-sub">' + e.feed.entry[repite].gsx$stats.$t + '</div><br><div class="collapse best-info" id="' + e.feed.entry[repite].gsx$nombre.$t + '"><span class="best-dest">Nivel</span> ' + d + '<br><br><span class="best-dest">Clase</span> ' + e.feed.entry[repite].gsx$clase.$t + '.<br><br><span class="best-dest">Descripción</span> ' + e.feed.entry[repite].gsx$descripción.$t + '<br><br><span class="best-dest">Debilidades</span> ' + e.feed.entry[repite].gsx$debilidades.$t + '<br><br><span class="best-dest">Erradicación</span> ' + e.feed.entry[repite].gsx$erradicación.$t + '<br><br><span class="best-dest">Combate</span> ' + e.feed.entry[repite].gsx$batalla.$t + '.<br><br><span class="best-dest">Habilidades</span><br>' + e.feed.entry[repite].gsx$habilidades.$t + "</div></div>";
            if ("on" == s) switch (i) {
                case "Espectro":
                    $(".best-div.espectros").append(r);
                    break;
                case "Cambiaformas":
                    $(".best-div.cambiaformas").append(r);
                    break;
                case "Necrófago":
                    $(".best-div.necrofagos").append(r);
                    break;
                case "Vampiro":
                    $(".best-div.vampiros").append(r);
                    break;
                case "Demonio":
                    $(".best-div.demonios").append(r);
                    break;
                case "Relicto":
                    $(".best-div.relictos").append(r);
                    break;
                case "Humanoide":
                    $(".best-div.humanoides").append(r)
            }
        }
    })), $(".modo-pnj").length && $(".modo-pnj").each(function() {
        var e = $(this).attr("imagen"),
            a = $(this).attr("minimagen"),
            s = $(this).attr("nombre"),
            i = $(this).attr("edad"),
            t = $(this).attr("ocupacion"),
            d = $(this).attr("nacionalidad"),
            r = $(this).parents(".post");
        a.length && r.find(".topictitle-image img").attr("src", a), r.find(".postprofile-avatar img").attr("src", e), r.find(".topic-title strong").text(s), r.find(".postprofile-field-edad .postprofile-field-content").text(i), r.find(".postprofile-field-nacionalidad .postprofile-field-content").text(d), r.find(".postprofile-field-ocupacion .postprofile-field-content").text(t), "/u2" != r.find(".topic-title a").attr("href") && (r.addClass("usergroup-group-inactivo"), r.find(".topic-title").append('<span class="pnj-span">Modo PNJ</span>'), r.find(".postprofile-rank").text("PNJ"), r.find(".topic-title a span").addClass("pnj-color"))
    }), $(".modo-cambiar-avatar").length && $(".modo-cambiar-avatar").each(function() {
        var e = $(this).attr("imagen"),
            a = $(this).attr("minimagen"),
            s = $(this).parents(".post");
        s.find(".postprofile-avatar img").attr("src", e), a.length && s.find(".topictitle-image img").attr("src", a)
    });
    var a = 0;
    $("#c2").click(function() {
        (a += 100) > 200 && (a = 200), $(".exp").css("left", "-" + a + "%"), $("#c1").css("opacity", "1"), a > 1 && $(".exp-img").css("filter", "blur(1px)")
    }), $("#c1").click(function() {
        (a -= 100) < 0 && (a = 0), $(".exp").css("left", "-" + a + "%"), 0 == a && ($(this).css("opacity", "0"), $(".exp-img").css("filter", "blur(0)"))
    })
});