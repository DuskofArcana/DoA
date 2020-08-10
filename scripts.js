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
        }), /habilidades/g.test(location.pathname)) {
        $.getJSON("https://spreadsheets.google.com/feeds/list/1f-z1zVlE-TNQ1NqzHoh9_WOi4hixspY20SJMPgNqDdw/1/public/values?alt=json", function(e) {
            var a = e.feed.openSearch$totalResults.$t;
            for (repite = 0; repite < a; repite++) {
                var s = e.feed.entry[repite].gsx$clase.$t,
                    t = e.feed.entry[repite].gsx$tipos.$t;
                if ("Aura" == t) var i = "th th-solar-system-o";
                else i = "Defensiva" == t || "Física / Defensiva" == t ? "sf sf-iron-man-o" : "Física" == t ? "th th-target-o" : "Pasiva" == t ? "th th-sun-o" : "Esencia" == t || "Esencia / Debilitamiento" == t || "Esencia / Evocación" == t ? "th th-star-1-o" : "Refuerzo" == t ? "th th-stars-o" : "Debilitamiento" == t ? "th th-cross-1-o" : "";
                var r = '<div class="skill"><div class="skill-icon"><span class="' + i + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div><div class="skill-ge">' + e.feed.entry[repite].gsx$coste.$t + '</div><div class="skill-req">' + e.feed.entry[repite].gsx$requisito.$t + '</div></div><div class="skill-barra"><div class="skill-punto"><div class="p-1">Nivel I</div><div class="p-2">Nivel II</div><div class="p-3">Nivel III</div></div><div class="barra-interna"><div class="barra-externa"></div></div></div><div class="skill-descfija">' + e.feed.entry[repite].gsx$descripción.$t + '</div><div class="skill-descrip"><div class="lvl-1">' + e.feed.entry[repite].gsx$nivel1.$t + '</div><div class="lvl-2 skill-hide">' + e.feed.entry[repite].gsx$nivel2.$t + '</div><div class="lvl-3 skill-hide">' + e.feed.entry[repite].gsx$nivel3.$t + "</div></div></div>";
                switch (s) {
                    case "Guardián":
                        $(".habilidades.guardian").append(r);
                        break;
                    case "Paladín":
                        $(".habilidades.paladin").append(r);
                        break;
                    case "Centinela":
                        $(".habilidades.centinela").append(r);
                        break;
                    case "Hostigador":
                        $(".habilidades.hostigador").append(r);
                        break;
                    case "Duelista":
                        $(".habilidades.duelista").append(r);
                        break;
                    case "Rastreador":
                        $(".habilidades.rastreador").append(r);
                        break;
                    case "Ejecutor":
                        $(".habilidades.ejecutor").append(r);
                        break;
                    case "Canalizador":
                        $(".habilidades.canalizador").append(r);
                        break;
                    case "Conjurador":
                        $(".habilidades.conjurador").append(r);
                        break;
                    case "Invocador":
                        $(".habilidades.invocador").append(r);
                        break;
                    case "Orador":
                        $(".habilidades.orador").append(r);
                        break;
                    case "Sanador":
                        $(".habilidades.sanador").append(r);
                        break;
                    case "Convergente":
                        $(".habilidades.convergente").append(r);
                        break;
                    case "Inicial Guardián":
                        var m = "sf sf-captain-america-o";
                        $(".habinicial.guardian").append('<div class="habinicial1"><div class="skill-icon"><span class="' + m + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div></div> <div class="habinicialdesc">' + e.feed.entry[repite].gsx$nivel1.$t + '</div></div>');
                        break;
                    case "Inicial Hostigador":
                        var m = "th th-pirate-swords-o";
                        $(".habinicial.hostigador").append('<div class="habinicial1"><div class="skill-icon"><span class="' + m + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div></div> <div class="habinicialdesc">' + e.feed.entry[repite].gsx$nivel1.$t + '</div></div>');
                        break;
                    case "Inicial Canalizador":
                        var m = "th th-snowflake-o";
                        $(".habinicial.canalizador").append('<div class="habinicial1"><div class="skill-icon"><span class="' + m + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div></div> <div class="habinicialdesc">' + e.feed.entry[repite].gsx$nivel1.$t + '</div></div>');
                        break;
                    case "Inicial Orador":
                        var m = "th th-blossom-o";
                        $(".habinicial.orador").append('<div class="habinicial1"><div class="skill-icon"><span class="' + m + '"></span></div><div class="skill-nombre">' + e.feed.entry[repite].gsx$habilidad.$t + '</div><div class="skill-detalle"><div class="skill-tipo">' + e.feed.entry[repite].gsx$tipos.$t + '</div></div> <div class="habinicialdesc">' + e.feed.entry[repite].gsx$nivel1.$t + '</div></div>')
                }
            }
            $(".skill").on("click", ".p-1", function(e) {
                $(e.delegateTarget).find(".lvl-1").removeClass("skill-hide"), $(e.delegateTarget).find(".lvl-2").addClass("skill-hide"), $(e.delegateTarget).find(".lvl-3").addClass("skill-hide"), $(e.delegateTarget).find(".barra-externa").css("width", "25%"), $(e.delegateTarget).find(".p-2").removeClass("punto-activo"), $(e.delegateTarget).find(".p-3").removeClass("punto-activo")
            }), $(".skill").on("click", ".p-2", function(e) {
                $(e.delegateTarget).find(".lvl-1").addClass("skill-hide"), $(e.delegateTarget).find(".lvl-2").removeClass("skill-hide"), $(e.delegateTarget).find(".lvl-3").addClass("skill-hide"), $(this).addClass("punto-activo"), $(e.delegateTarget).find(".p-3").removeClass("punto-activo"), $(e.delegateTarget).find(".barra-externa").css("width", "50%")
            }), $(".skill").on("click", ".p-3", function(e) {
                $(e.delegateTarget).find(".lvl-1").addClass("skill-hide"), $(e.delegateTarget).find(".lvl-2").addClass("skill-hide"), $(e.delegateTarget).find(".lvl-3").removeClass("skill-hide"), $(this).addClass("punto-activo"), $(e.delegateTarget).find(".p-2").addClass("punto-activo"), $(e.delegateTarget).find(".barra-externa").css("width", "100%")
            })
        })
    }
    if (/tienda/g.test(location.pathname)) {
        var e = "https://spreadsheets.google.com/feeds/list/1bCddYVOaAla3CMAOT-uEJhHVLcO1Sd8bHBa8wXbbZ18/od6/public/values?alt=json";
        $.getJSON(e, function(e) {
            var a = e.feed.openSearch$totalResults.$t;
            for (console.log(e), repite = 0; repite < a; repite++) {
                var s = e.feed.entry[repite].gsx$estado.$t,
                    t = e.feed.entry[repite].gsx$clasificación.$t;
                if ("Brebaje" == t) var i = "th th-milk-o";
                else i = "Accesorio" == t ? "th th-gemstone-o" : "Objeto" == t ? "sf sf-certificate-o" : "Glifo" == t ? "sf sf-scarlet-eye" : "Arma" == t ? "sf sf-sword-o" : "Armadura" == t ? "sf sf-shirt-o" : "";
                var r = '<div class="tiendaitem"><div class="tiendaobj"><span class="' + i + '"></span>' + e.feed.entry[repite].gsx$nombre.$t + "</div><br><b>Tipo:</b> " + e.feed.entry[repite].gsx$tipo.$t + "<br><b>Usos:</b> " + e.feed.entry[repite].gsx$usos.$t + "<br><b>Precio:</b> " + e.feed.entry[repite].gsx$precio.$t + '<br><div class="tiendainner"><b>Descripción:</b>  ' + e.feed.entry[repite].gsx$descripción.$t + "</div></div>";
                if ("on" == s) switch (t) {
                    case "Objeto":
                        $(".tienda.objetos").append(r);
                        break;
                    case "Arma":
                        var d = e.feed.entry[repite].gsx$tipo.$t;
                        if ("Arco" == d || "Arma de Fuego" == d) var n = "sf sf-target-o";
                        else n = "Canalizadora" == d ? "sf sf-atom-1-o" : "Escudo" == d ? "sf sf-black-widow" : "Otros" == d ? "th th-comb-o" : "sf sf-sword-o";
                        $(".tienda.armas").append('<div class="tiendaitem"><div class="tiendaobj"><span class="' + n + '"></span>' + e.feed.entry[repite].gsx$nombre.$t + "</div><br><b>Tipo:</b> " + e.feed.entry[repite].gsx$tipo.$t + "<br><b>Rol:</b> " + e.feed.entry[repite].gsx$rol.$t + "<br><b>Usos:</b> " + e.feed.entry[repite].gsx$usos.$t + "<br><b>Precio:</b> " + e.feed.entry[repite].gsx$precio.$t + '<br><div class="tiendainner"><b>Descripción:</b>  ' + e.feed.entry[repite].gsx$descripción.$t + "</div></div>");
                        break;
                    case "Armadura":
                        $(".tienda.armaduras").append(r);
                        break;
                    case "Brebaje":
                        $(".tienda.brebajes").append(r);
                        break;
                    case "Glifo":
                        $(".tienda.glifos").append(r);
                        break;
                    case "Accesorio":
                        $(".tienda.accesorios").append(r)
                }
            }
        })
    }
    if (/bestiario/g.test(location.pathname)) {
        e = "https://spreadsheets.google.com/feeds/list/1_vsLEVMEYjWXfe9FPNF3W2PJtSxKoQ2lzNvBxoKGpRs/od6/public/values?alt=json";
        $.getJSON(e, function(e) {
            var a = e.feed.openSearch$totalResults.$t;
            for (repite = 0; repite < a; repite++) {
                var s = e.feed.entry[repite].gsx$estado.$t,
                    t = e.feed.entry[repite].gsx$tipo.$t,
                    i = e.feed.entry[repite].gsx$nivel.$t;
                if (1 == i) var r = '<span class="th th-circle"></span><span class="th th-circle-o"></span><span class="th th-circle-o"></span>';
                else if (2 == i) r = '<span class="th th-circle"></span><span class="th th-circle"></span><span class="th th-circle-o"></span>';
                else if (3 == i) r = '<span class="th th-circle"></span><span class="th th-circle"></span><span class="th th-circle"></span>';
                else r = '<span class="th th-circle-o"></span><span class="th th-circle-o"></span><span class="th th-circle-o"></span>';
                var d = '<div class="best-div1"><div class="tab-image" style="background-image: url(' + e.feed.entry[repite].gsx$url.$t + '); background-position: bottom;" data-target="#' + e.feed.entry[repite].gsx$nombre.$t + '" type="button" data-toggle="collapse"></div><br><div class="best-name">' + e.feed.entry[repite].gsx$nombre.$t + '</div><br><div class="best-sub">' + e.feed.entry[repite].gsx$stats.$t + '</div><br><div class="collapse best-info" id="' + e.feed.entry[repite].gsx$nombre.$t + '"><span class="best-dest">Nivel</span> ' + r + '<br><br><span class="best-dest">Clase</span> ' + e.feed.entry[repite].gsx$clase.$t + '.<br><br><span class="best-dest">Descripción</span> ' + e.feed.entry[repite].gsx$descripción.$t + '<br><br><span class="best-dest">Debilidades</span> ' + e.feed.entry[repite].gsx$debilidades.$t + '<br><br><span class="best-dest">Erradicación</span> ' + e.feed.entry[repite].gsx$erradicación.$t + '<br><br><span class="best-dest">Combate</span> ' + e.feed.entry[repite].gsx$batalla.$t + '.<br><br><span class="best-dest">Habilidades</span><br>' + e.feed.entry[repite].gsx$habilidades.$t + "</div></div>";
                if ("on" == s) switch (t) {
                    case "Espectro":
                        $(".best-div.espectros").append(d);
                        break;
                    case "Cambiaformas":
                        $(".best-div.cambiaformas").append(d);
                        break;
                    case "Necrófago":
                        $(".best-div.necrofagos").append(d);
                        break;
                    case "Vampiro":
                        $(".best-div.vampiros").append(d);
                        break;
                    case "Demonio":
                        $(".best-div.demonios").append(d);
                        break;
                    case "Relicto":
                        $(".best-div.relictos").append(d);
                        break;
                    case "Humanoide":
                        $(".best-div.humanoides").append(d)
                }
            }
        })
    }
    $(".modo-pnj").length && $(".modo-pnj").each(function() {
        var e = $(this).attr("imagen"),
            a = $(this).attr("minimagen"),
            s = $(this).attr("nombre"),
            t = $(this).attr("edad"),
            i = $(this).attr("ocupacion"),
            r = $(this).attr("nacionalidad"),
            d = $(this).parents(".post");
            if (a.length) {d.find(".topictitle-image img").attr("src", a)};
            d.find(".postprofile-avatar img").attr("src", e),
            d.find(".topic-title strong").text(s),
            d.find(".postprofile-field-edad .postprofile-field-content").text(t),
            d.find(".postprofile-field-nacionalidad .postprofile-field-content").text(r),
            d.find(".postprofile-field-ocupacion .postprofile-field-content").text(i), 
            "/u2" != d.find(".topic-title a").attr("href") && (d.addClass("usergroup-group-inactivo"), 
            d.find(".topic-title").append('<span class="pnj-span">Modo PNJ</span>'), d.find(".postprofile-rank").text("PNJ"),
            d.find(".topic-title a span").addClass("pnj-color"))
    }), $(".modo-cambiar-avatar").length && $(".modo-cambiar-avatar").each(function() {
        var e = $(this).attr("imagen"),
            a = $(this).attr("minimagen"),
            s = $(this).parents(".post");
        s.find(".postprofile-avatar img").attr("src", e);
        if (a.length) {s.find(".topictitle-image img").attr("src", a)}
    });
    var a = 0;
    $("#c2").click(function() {
        (a += 100) > 200 && (a = 200), $(".exp").css("left", "-" + a + "%"), $("#c1").css("opacity", "1"), a > 1 && $(".exp-img").css("filter", "blur(1px)")
    }), $("#c1").click(function() {
        (a -= 100) < 0 && (a = 0), $(".exp").css("left", "-" + a + "%"), 0 == a && ($(this).css("opacity", "0"), $(".exp-img").css("filter", "blur(0)"))
    })
});

<script type="text/javascript">
$(document).ready(function(){var e=$("#field_id8 .field_uneditable").text(),i=$("#field_id9 .field_uneditable").text(),t=$("#field_id11 .field_uneditable").text(),a="#field_id5 .field_uneditable",n="#field_id-10 .field_uneditable",p=$("#field_id").html(),r=$("#field_id10 img").attr("src");$(a+" a").length&&($(".profilelinks").append($(a).html()),$(a).empty()),$(n+" a").length&&($(".profilelinks").append($(n).html()),$(n).empty()),$(".rpghab").append(e),$(".rpginv").append(i),$(".rpgstats").append(t),$(".profilelinks").append(p),$("#profileimg").css("background-image","url("+r+")"),$("progress").attr("max","10"),$("progress.pv").attr("max","20"),$("progress.re").attr("max","20"),$("progress").each(function(){var e=$(this).text();$(this).attr("value",e),$(this).before("<span>"+e+"</span>")}),$("#field_id8 .field_uneditable").empty(),$("#field_id9 .field_uneditable").empty(),$("#field_id11 .field_uneditable").empty(),$("#field_id").empty(),$("#field_id10 img").empty();$.getJSON("https://spreadsheets.google.com/feeds/list/1bCddYVOaAla3CMAOT-uEJhHVLcO1Sd8bHBa8wXbbZ18/od6/public/values?alt=json",function(e){$(".rpginv item").each(function(){var i=$(this).attr("indice"),t=$(this).attr("cantidad"),a=$(this);$.each(e.feed.entry,function(e,n){n.gsx$indice.$t==i&&(d=n.gsx$nombre.$t,l=n.gsx$inventario.$t,t<=1||null==t?a.append("<strong>"+d+"</strong>: "+l):a.append("<strong>"+d+"</strong>: (x"+t+") - "+l))})})})});
</script>