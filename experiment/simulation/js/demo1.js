//scripting of connectors begin
var rightconnection = false;
var datapoints1 = [];
jsPlumb.ready(function () {
    var instance,
        discs = [],
        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },
        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },
        initAnimation = function (elId) {
            var el = document.getElementById(elId);
            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
            });
        },
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(34,177,76)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare2 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint2);
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare3 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },
        endpoint4 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(34,177,76)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare4 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint4);
        },
        endpoint5 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,174,94)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare5 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint6 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 102)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare6 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint6);
        },
        endpoint7 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(128, 0, 255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare7 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint7);
        },
        endpoint8 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,247,9)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare8 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint8);
        },
        endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare9 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint9);
        },
        endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare10 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,174,94)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare11 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 102)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare12 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint13 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(128, 0, 255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare13 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint13);
        },
        endpoint14 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(240,228,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare14 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint14);
        },
        endpoint15 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare15 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint15);
        },
        endpoint16 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(34,177,76)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare16 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint16);
        },
        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };
    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Connector: ["Bezier", { curviness: -60 }],
        Container: "canvas"
    });
    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            e7 = prepare7("ld7"),
            e8 = prepare8("ld8"),
            e9 = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
            e14 = prepare14("ld14"),
            e15 = prepare15("ld15"),
            e16 = prepare16("ld16"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");
        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });
        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });
    });
    jsPlumb.fire("jsPlumbDemoLoaded", instance);
    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_9_1 = [
            {
                "source": "ld9",
                "target": "ld1"
            },
            {
                "source": "ld1",
                "target": "ld9"
            }
        ];
        var correct_connections_2_3 = [
            {
                "source": "ld2",
                "target": "ld3"
            },
            {
                "source": "ld3",
                "target": "ld2"
            }
        ];
        var correct_connections_3_5 = [
            {
                "source": "ld3",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld3"
            }
        ];
        var correct_connections_5_7 = [
            {
                "source": "ld5",
                "target": "ld7"
            },
            {
                "source": "ld7",
                "target": "ld5"
            }
        ];
        var correct_connections_10_8 = [
            {
                "source": "ld10",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld10"
            }
        ];
        var correct_connections_8_12 = [
            {
                "source": "ld8",
                "target": "ld12"
            },
            {
                "source": "ld12",
                "target": "ld8"
            }
        ];
        var correct_connections_13_16 = [
            {
                "source": "ld13",
                "target": "ld16"
            },
            {
                "source": "ld16",
                "target": "ld13"
            }
        ];
        var correct_connections_14_15 = [
            {
                "source": "ld14",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld14"
            }
        ];
        var correct_connections_6_11 = [
            {
                "source": "ld6",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld6"
            }
        ];
        var correct_connections_10_4 = [
            {
                "source": "ld10",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld10"
            }
        ];
        var allowed_connections = [
            {
                "source": "ld9",
                "target": "ld1"
            },
            {
                "source": "ld1",
                "target": "ld9"
            },
            {
                "source": "ld2",
                "target": "ld3"
            },
            {
                "source": "ld3",
                "target": "ld2"
            },
            {
                "source": "ld3",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld3"
            },
            {
                "source": "ld5",
                "target": "ld7"
            },
            {
                "source": "ld7",
                "target": "ld5"
            },
            {
                "source": "ld10",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld10"
            },
            {
                "source": "ld8",
                "target": "ld12"
            },
            {
                "source": "ld12",
                "target": "ld8"
            },
            {
                "source": "ld13",
                "target": "ld16"
            },
            {
                "source": "ld16",
                "target": "ld13"
            },
            {
                "source": "ld14",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld14"
            },
            {
                "source": "ld6",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld6"
            },
            {
                "source": "ld10",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld10"
            },

        ];
        var actual_connections = instance.getAllConnections();
        var is_connected_9_1 = false;
        var is_connected_2_3 = false;
        var is_connected_3_5 = false;
        var is_connected_5_7 = false;
        var is_connected_10_8 = false;
        var is_connected_8_12 = false;
        var is_connected_13_16 = false;
        var is_connected_14_15 = false;
        var is_connected_6_11 = false;
        var is_connected_10_4 = false;
        var unallowed_connection_present = false;
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_9_1) {
                is_connected_9_1 = correct_connections_9_1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_2_3) {
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_3_5) {
                is_connected_3_5 = correct_connections_3_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_5_7) {
                is_connected_5_7 = correct_connections_5_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_10_8) {
                is_connected_10_8 = correct_connections_10_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_8_12) {
                is_connected_8_12 = correct_connections_8_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_13_16) {
                is_connected_13_16 = correct_connections_13_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_14_15) {
                is_connected_14_15 = correct_connections_14_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_6_11) {
                is_connected_6_11 = correct_connections_6_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_10_4) {
                is_connected_10_4 = correct_connections_10_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        if (is_connected_9_1 && is_connected_2_3 && is_connected_3_5 && is_connected_5_7 && is_connected_10_8 && is_connected_8_12 && is_connected_13_16 && is_connected_14_15 && is_connected_6_11 && is_connected_10_4 && !unallowed_connection_present) {
            alert("Correct Connections");
            rightconnection = true;

            jsPlumb.ready(function () {
                var instance
                var endpoints = [endpoint1, endpoint2, endpoint3, endpoint4, endpoint5, endpoint6, endpoint7, endpoint8, endpoint9, endpoint10, endpoint11, endpoint12, endpoint13, endpoint14, endpoint15, endpoint16]
                var Prepares = [prepare1, prepare2, prepare3, prepare4, prepare5, prepare6, prepare7, prepare8, prepare9, prepare10, prepare11, prepare12, prepare13, prepare14, prepare15, prepare16]
                endpoints = {
                    anchor: [0.5, 0.5, 0, -1],
                    isSource: true,
                    maxConnections: 0,
                    isTarget: true,
                },
                    Prepares = function (elId) {
                        initAnimation(elId);
                        return instance.addEndpoint(elId, endpoints);
                    },

                    instance = jsPlumb.getInstance({
                        DragOptions: { cursor: 'wait', zIndex: 20 },
                        Connector: ["Bezier", { curviness: -60 }],
                        Container: "canvas"
                    });

                instance.batch(function () {
                    e1 = Prepares("ld1")
                    e2 = Prepares("ld2"),
                        e3 = Prepares("ld3"),
                        e4 = Prepares("ld4"),
                        e5 = Prepares("ld5"),
                        e6 = Prepares("ld6"),
                        e7 = Prepares("ld7"),
                        e8 = Prepares("ld8"),
                        e9 = Prepares("ld9"),
                        e10 = Prepares("ld10"),
                        e11 = Prepares("ld11"),
                        e12 = Prepares("ld12"),
                        e13 = Prepares("ld13"),
                        e14 = Prepares("ld14"),
                        e15 = Prepares("ld15"),
                        e16 = Prepares("ld16")
                });

            })

            document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");

            const elements = document.querySelectorAll('.jtk-endpoint');

            elements.forEach(ele => {
                ele.style.pointerEvents = 'none';
            });

            return;
        }
        else if (!unallowed_connection_present) {
            alert("Please Complete the connection");
        }
        else {
            alert("Wrong Connection");
            return;
        }
    })

})

//Scripting of connectors ends


//Scripting of mcb begins

var mcboffstate = true;
var were = 240;
function mcbonoff() {
    if (rightconnection == false) {
        alert("Alert ! Please Complete the connection first.");
    }
    else {
        if (mcboffstate == true) {
            mcboffstate = false;
            document.getElementById('select_1').disabled = false;
            document.getElementById('mcbb').src = 'images/mcb2.png';
            document.getElementById('redled').src = 'images/redlittledot.png';
            document.getElementById('blink').src = 'images/dot.png';
            document.getElementById('blink1').src = 'images/dot.png';
            document.getElementById('blink2').src = 'images/dot.png';
            document.getElementById('blink3').src = 'images/dot.png';


            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.0,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 10
            });



        }
    }
}

//Scripting of mcb ends


//Scrypting of table begins

var attcounter = 1;
var readings = true;
var current_readings = 0;
function addtotable() {
    if (mcboffstate == true) {
        alert("Alert! Please on mcb first");
    }
    if (current_readings != this.value) {
        current_readings = this.value;
        readings = true;
    }
    if (readings) {
        if (attcounter < 4) {
            if (this.value == 1) {

                var currentVal1 = attcounter++;
                var currentVal2 = 0.6;
                var currentVal3 = 220;
                var currentVal4 = 3.0;
                var currentVal5 = 36;
                var currentVal6 = 0.0109;
                var currentVal7 = 0.0112;
                var currentVal8 = 2.75;
                var tr = document.createElement('tr');
                var td1 = tr.appendChild(document.createElement('td'));
                var td2 = tr.appendChild(document.createElement('td'));
                var td3 = tr.appendChild(document.createElement('td'));
                var td4 = tr.appendChild(document.createElement('td'));
                var td5 = tr.appendChild(document.createElement('td'));
                var td6 = tr.appendChild(document.createElement('td'));
                var td7 = tr.appendChild(document.createElement('td'));
                var td8 = tr.appendChild(document.createElement('td'));
                td1.innerHTML = currentVal1;
                td2.innerHTML = currentVal2;
                td3.innerHTML = currentVal3;
                td4.innerHTML = currentVal4;
                td5.innerHTML = currentVal5;
                td6.innerHTML = currentVal6;
                td7.innerHTML = currentVal7;
                td8.innerHTML = currentVal8;
                document.getElementById("tb1").appendChild(tr);
                readings = false;
            }
            else if (this.value == 2) {
                var currentVal1 = attcounter++;
                var currentVal2 = 0.8;
                var currentVal3 = 220;
                var currentVal4 = 4.0;
                var currentVal5 = 48;
                var currentVal6 = 0.0146;
                var currentVal7 = 0.015;
                var currentVal8 = 2.73;
                var tr = document.createElement('tr');
                var td1 = tr.appendChild(document.createElement('td'));
                var td2 = tr.appendChild(document.createElement('td'));
                var td3 = tr.appendChild(document.createElement('td'));
                var td4 = tr.appendChild(document.createElement('td'));
                var td5 = tr.appendChild(document.createElement('td'));
                var td6 = tr.appendChild(document.createElement('td'));
                var td7 = tr.appendChild(document.createElement('td'));
                var td8 = tr.appendChild(document.createElement('td'));
                td1.innerHTML = currentVal1;
                td2.innerHTML = currentVal2;
                td3.innerHTML = currentVal3;
                td4.innerHTML = currentVal4;
                td5.innerHTML = currentVal5;
                td6.innerHTML = currentVal6;
                td7.innerHTML = currentVal7;
                td8.innerHTML = currentVal8;
                document.getElementById("tb1").appendChild(tr);
                readings = false;
            }

            else if (this.value == 3) {

                var currentVal1 = attcounter++;
                var currentVal2 = 1.0;
                var currentVal3 = 220;
                var currentVal4 = 4.5;
                var currentVal5 = 54;
                var currentVal6 = 0.0165;
                var currentVal7 = 0.0168;
                var currentVal8 = 1.81;
                var tr = document.createElement('tr');
                var td1 = tr.appendChild(document.createElement('td'));
                var td2 = tr.appendChild(document.createElement('td'));
                var td3 = tr.appendChild(document.createElement('td'));
                var td4 = tr.appendChild(document.createElement('td'));
                var td5 = tr.appendChild(document.createElement('td'));
                var td6 = tr.appendChild(document.createElement('td'));
                var td7 = tr.appendChild(document.createElement('td'));
                var td8 = tr.appendChild(document.createElement('td'));
                td1.innerHTML = currentVal1;
                td2.innerHTML = currentVal2;
                td3.innerHTML = currentVal3;
                td4.innerHTML = currentVal4;
                td5.innerHTML = currentVal5;
                td6.innerHTML = currentVal6;
                td7.innerHTML = currentVal7;
                td8.innerHTML = currentVal8;
                document.getElementById("tb1").appendChild(tr);
                readings = false;
            }
        }
        else {
            alert("You can add maximum three readings in the table.");
        }

    }
}



//Scrypting of table ends


//Scrypting of switch begins

function changeImage() {
    var image = document.getElementById('switchImage');
    if (image.src.match("switch_on.jpg")) {
        image.src = " switch_off.jpg";
    } else {
        image.src = "switch_on.jpg";
    }
}



function metercount() {
    var metercount = document.getElementById("metercount").value;

    if (this.value == 1 && metercount == 36) {
        //document.getElementById("add").classList.remove("disabled");
        alert("Entered Correct Value");
        document.getElementById("add").disabled = false;
    }
    else if (this.value == 2 && metercount == 48) {
        //document.getElementById("add").classList.remove("disabled");
        alert("Entered Correct Value");
        document.getElementById("add").disabled = false;
     }
    else if (this.value == 3 && metercount == 54) {
        //document.getElementById("add").classList.remove("disabled");
        alert("Entered Correct Value");
        document.getElementById("add").disabled = false;
     }
    else {
        alert("Entered Wrong Value ! Try again");
    }
    
}


//Scrypting of switch ends


//Scryting of variation of bulbs begins

var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function () {
    value = this.value;

    if (this.value == 1) {
        rangeChange1();
        blink3();
        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 13.3,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 10
            });


        });

        document.getElementById('bulb5').src = 'images/bulbon.png'
        document.getElementById('bulb9').src = 'images/bulbon.png'
        document.getElementById('bulb8').src = 'images/bulbon.png'
        document.getElementById('bulb7').src = 'images/bulbon.png'
        document.getElementById('bulb6').src = 'images/bulboff.png'
        document.getElementById('bulb4').src = 'images/bulbon.png'
        document.getElementById('bulb3').src = 'images/bulbon.png'
        document.getElementById('bulb2').src = 'images/bulboff.png'
        document.getElementById('bulb1').src = 'images/bulboff.png'
        document.getElementById('bulb10').src = 'images/bulboff.png'
    }
    else if (this.value == 2) {
        rangeChange2();
        blink2();


        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 13.4,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 10
            });


        });

        document.getElementById('bulb5').src = 'images/bulbon.png'
        document.getElementById('bulb9').src = 'images/bulbon.png'
        document.getElementById('bulb8').src = 'images/bulbon.png'
        document.getElementById('bulb7').src = 'images/bulbon.png'
        document.getElementById('bulb6').src = 'images/bulbon.png'
        document.getElementById('bulb4').src = 'images/bulbon.png'
        document.getElementById('bulb3').src = 'images/bulbon.png'
        document.getElementById('bulb2').src = 'images/bulbon.png'
        document.getElementById('bulb1').src = 'images/bulboff.png'
        document.getElementById('bulb10').src = 'images/bulboff.png'
    }
    else if (this.value == 3) {
        rangeChange3();
        blink1();
        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 13.5,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 10
            });



        });

        document.getElementById('bulb5').src = 'images/bulbon.png'
        document.getElementById('bulb9').src = 'images/bulbon.png'
        document.getElementById('bulb8').src = 'images/bulbon.png'
        document.getElementById('bulb7').src = 'images/bulbon.png'
        document.getElementById('bulb6').src = 'images/bulbon.png'
        document.getElementById('bulb4').src = 'images/bulbon.png'
        document.getElementById('bulb3').src = 'images/bulbon.png'
        document.getElementById('bulb2').src = 'images/bulbon.png'
        document.getElementById('bulb1').src = 'images/bulbon.png'
        document.getElementById('bulb10').src = 'images/bulbon.png'
    }
    else {
        return;
    }
};

//Scryting of variation of bulbs begins


//Scripting of needle range begins
var rangeClock1 = document.querySelector('#needle1');
var rangeClock2 = document.querySelector('#needle2');
var rangeClock3 = document.querySelector('#needle3');
function rangeChange1() {
    rangeClock1.style.transform = 'rotate(2.60deg)';
    rangeClock2.style.transform = 'rotateZ(1.6deg)';
    rangeClock3.style.transform = 'rotate(-16.9deg)';
}
function rangeChange2() {
    rangeClock1.style.transform = 'rotate(2.60deg)';
    rangeClock2.style.transform = 'rotateZ(14.7deg)';
    rangeClock3.style.transform = 'rotate(-4.2deg)';
}
function rangeChange3() {
    rangeClock1.style.transform = 'rotate(2.60deg)';
    rangeClock2.style.transform = 'rotateZ(41.7deg)';
    rangeClock3.style.transform = 'rotate(8.4deg)';
}

//Scripting of needle range ends


//Scrypting of blinking greenled begins

function blink1() {
    var blink1 = document.getElementById('blink1');
    var blink2 = document.getElementById('blink2');
    var blink3 = document.getElementById('blink3');
    var blink = document.getElementById('blink');
    document.getElementById("blink").style.visibility = "hidden";

    document.getElementById("blink2").style.visibility = "hidden";
    document.getElementById("blink3").style.visibility = "hidden";
    document.getElementById("blink1").style.visibility = "visible";

}

function blink2() {

    var blink1 = document.getElementById('blink1');
    var blink2 = document.getElementById('blink2');
    var blink3 = document.getElementById('blink3');

    var blink = document.getElementById('blink');
    document.getElementById("blink").style.visibility = "hidden";

    document.getElementById("blink2").style.visibility = "visible";
    document.getElementById("blink1").style.visibility = "hidden";
    document.getElementById("blink3").style.visibility = "hidden";

}

function blink3() {
    var blink1 = document.getElementById('blink1');
    var blink2 = document.getElementById('blink2');
    var blink3 = document.getElementById('blink3');
    var blink = document.getElementById('blink');
    document.getElementById("blink").style.visibility = "hidden";

    document.getElementById("blink1").style.visibility = "hidden";
    document.getElementById("blink2").style.visibility = "hidden";

    document.getElementById("blink3").style.visibility = "visible";

}
//Scrypting of blinking greenled begins