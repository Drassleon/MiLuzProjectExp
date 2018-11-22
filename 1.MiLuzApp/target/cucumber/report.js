$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Proveedor.feature");
formatter.feature({
  "line": 1,
  "name": "Mantenimiento de Proveedores",
  "description": "Como Jefe de Almacen necesito realizar la gestion de Proveedores",
  "id": "mantenimiento-de-proveedores",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Registrar Proveedor",
  "description": "",
  "id": "mantenimiento-de-proveedores;registrar-proveedor",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "despues de iniciar sesion en la aplicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "hago clic en el enlace de Proveedores",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "luego hago clic en el boton de Crear Proveedor",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "en la nueva pantalla escribo en el campo Nombre el valor de \"Samsung\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "en la nueva pantalla escribo en el campo Numero Telefonico el valor de \"123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "en la nueva pantalla selecciono \"Bolivianos\" en el campo tipo de Pago",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "en la nueva pantalla hago clic en el checbox Tiene Deuda",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "presiono el boton de Guardar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "el sistema me mostrara el mensaje de \"Proveedor creado con éxito!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProveedorIntegrationTest.despues_de_iniciar_sesion_en_la_aplicacion()"
});
formatter.result({
  "duration": 499567134,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.hago_clic_en_el_enlace_de_Proveedores()"
});
formatter.result({
  "duration": 68193,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.luego_hago_clic_en_el_boton_de_Crear_Proveedor()"
});
formatter.result({
  "duration": 54336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 61
    }
  ],
  "location": "ProveedorIntegrationTest.en_la_nueva_pantalla_escribo_en_el_campo_Nombre_el_valor_de(String)"
});
formatter.result({
  "duration": 1865299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 72
    }
  ],
  "location": "ProveedorIntegrationTest.en_la_nueva_pantalla_escribo_en_el_campo_Numero_Telefonico_el_valor_de(String)"
});
formatter.result({
  "duration": 61629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bolivianos",
      "offset": 33
    }
  ],
  "location": "ProveedorIntegrationTest.en_la_nueva_pantalla_selecciono_en_el_campo_tipo_de_Pago(String)"
});
formatter.result({
  "duration": 88250,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.en_la_nueva_pantalla_hago_clic_en_el_checbox_Tiene_Deuda()"
});
formatter.result({
  "duration": 14587,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.presiono_el_boton_de_Guardar()"
});
formatter.result({
  "duration": 2626370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proveedor creado con éxito!",
      "offset": 38
    }
  ],
  "location": "ProveedorIntegrationTest.el_sistema_me_mostrara_el_mensaje_de(String)"
});
formatter.result({
  "duration": 48137,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Eliminar Proveedor",
  "description": "",
  "id": "mantenimiento-de-proveedores;eliminar-proveedor",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "despues de iniciar sesion en la aplicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "hago clic en el enlace de Proveedores",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "busco el proveedor \"Samsung\" para seleccionarlo de la tabla de Proveedores",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "hago clic en el boton de Eliminar",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "el sistema me mostrara el mensaje \"Proveedor eliminado con éxito\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProveedorIntegrationTest.despues_de_iniciar_sesion_en_la_aplicacion()"
});
formatter.result({
  "duration": 238861,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.hago_clic_en_el_enlace_de_Proveedores()"
});
formatter.result({
  "duration": 70747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 20
    }
  ],
  "location": "ProveedorIntegrationTest.busco_el_proveedor_para_seleccionarlo_de_la_tabla_de_Proveedores(String)"
});
formatter.result({
  "duration": 700535,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.hago_clic_en_el_boton_de_Eliminar()"
});
formatter.result({
  "duration": 670268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proveedor eliminado con éxito",
      "offset": 35
    }
  ],
  "location": "ProveedorIntegrationTest.el_sistema_me_mostrara_el_mensaje(String)"
});
formatter.result({
  "duration": 43396,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Actualizar Proveedor",
  "description": "",
  "id": "mantenimiento-de-proveedores;actualizar-proveedor",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "despues de iniciar sesion en la aplicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "hago clic en el enlace de Proveedores",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "busco el proveedor \"Samsung\" para seleccionarla de la tabla de Proveedores",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "hago clic en el boton de Editar",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "en la nueva pantalla escribo el nombre de \"Coca Cola\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "presiono el boton de Guardar",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "el sistema me mostrara el mensaje de \"Proveedor creado con éxito!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProveedorIntegrationTest.despues_de_iniciar_sesion_en_la_aplicacion()"
});
formatter.result({
  "duration": 201664,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.hago_clic_en_el_enlace_de_Proveedores()"
});
formatter.result({
  "duration": 66370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 20
    }
  ],
  "location": "ProveedorIntegrationTest.busco_el_proveedor_para_seleccionarla_de_la_tabla_de_Proveedores(String)"
});
formatter.result({
  "duration": 38291,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.hago_clic_en_el_boton_de_Editar()"
});
formatter.result({
  "duration": 60171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coca Cola",
      "offset": 43
    }
  ],
  "location": "ProveedorIntegrationTest.en_la_nueva_pantalla_escribo_el_nombre_de(String)"
});
formatter.result({
  "duration": 36467,
  "status": "passed"
});
formatter.match({
  "location": "ProveedorIntegrationTest.presiono_el_boton_de_Guardar()"
});
formatter.result({
  "duration": 671726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proveedor creado con éxito!",
      "offset": 38
    }
  ],
  "location": "ProveedorIntegrationTest.el_sistema_me_mostrara_el_mensaje_de(String)"
});
formatter.result({
  "duration": 33549,
  "status": "passed"
});
});