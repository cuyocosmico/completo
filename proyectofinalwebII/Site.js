﻿$(document).ready(function () {
    debugger;
    $("#btnPrincipal").click(function () {
        sessionStorage.setItem("indx", null);
        location.href = "index.html";
    });
    $("#btnAgUsuario").click(function () {
        sessionStorage.setItem("indx", "4");
        location.href = "index.html";
    });
    $("#btnReporte").click(function () {
        sessionStorage.setItem("indx", "5");
        location.href = "index.html";
    });
    $("#btnAgProducto").click(function () {
        sessionStorage.setItem("indx", "6");
        location.href = "index.html";
    });
    $("#btnOrden").click(function () {
        sessionStorage.setItem("indx", "7");
        location.href = "index.html";
    });
    $("#btnLogin").click(function () {
        sessionStorage.setItem("indx", "8");
        location.href = "index.html";
    });
    $("#HamBtn").click(function () {
        sessionStorage.setItem("Producto", "Hamburguesa");
        sessionStorage.setItem("indx", "1");
        location.href = "index.html";
    });
    $("#PizBtn").click(function () {
        sessionStorage.setItem("Producto", "Pizza");
        sessionStorage.setItem("indx", "2");
        location.href = "index.html";
    });
    $("#BebBtn").click(function () {
        sessionStorage.setItem("Producto", "Bebida");
        sessionStorage.setItem("indx", "3");
        location.href = "index.html";
    });
    $("#lexit").click(function (e) {
        debugger;
        e.preventDefault();
        $.ajax({
            url: 'WS/WSUsuario.asmx/Salir',
            data: {},
            contentType: 'application/json; utf-8',
            dataType: 'json',
            type: 'POST',
            success: function (data) {
                debugger;
                sessionStorage.setItem("indx", null);
                sessionStorage.setItem("accion", "salir");
                location.href = "index.html";
            },
            error: function (err) {
                console.log(err);
            }
        });

    });
    
});