function getConfiguration(config) {
    // Esta función permite indicar valores de configuración generales para 
    // todos los dispositivos de este modelo.

    // Dependiendo del significado de la "dirección del dispositivo" en este 
    // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
    // para hacer referencia a la dirección en la interfaz de usuario.
    // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
    // MAC, es posible que desee utilizar el código siguiente.

    config.addressLabel = {en: "Serial Number", es: "Número de Serie"};
}

function getEndpoints(deviceAddress, endpoints) {
    // Esta función le permite indicar la configuración inicial de los endpoints
    // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
    // la experiencia del usuario final, ya que permite a la plataforma crear 
    // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
    // crea el dispositivo.


    endpoints.addEndpoint("AI1_CONNECTED", "AI1_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("OPMODE", "OPMODE", endpointType.genericSensor)
        .variableTypeId = 1079;
    endpoints.addEndpoint("WHP", "WHP", endpointType.pressureSensor);
    endpoints.addEndpoint("LP", {en: "Line pressure", es: "Presión de línea"}, endpointType.pressureSensor);
    endpoints.addEndpoint("AI3_TYPE", "AI3_TYPE", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("AI3_VALUE", "AI3_VALUE", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("AI4_TYPE", "AI4_TYPE", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("AI4_VALUE", "AI4_VALUE", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("AP", "AP", endpointType.pressureSensor);
    endpoints.addEndpoint("VALVE_STATUS", "VALVE_STATUS", endpointType.genericSensor)
        .variableTypeId = 1080;
    endpoints.addEndpoint("LAST_OP", "LAST_OP", endpointType.genericSensor)
        .variableTypeId = 1081;
    endpoints.addEndpoint("AI2_CONNECTED", "AI2_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("LAST_OP_CAUSE", "LAST_OP_CAUSE", endpointType.genericSensor)
        .variableTypeId = 1082;
    endpoints.addEndpoint("LAST_PST", "LAST_PST", endpointType.genericSensor)
        .variableTypeId = 1083	
;
    endpoints.addEndpoint("DATE_PST", "DATE_PST", endpointType.genericSensor)
        .variableTypeId = 1084;
    endpoints.addEndpoint("PANEL_TEMP", "PANEL_TEMP", endpointType.temperatureSensor);
    endpoints.addEndpoint("CB", "CB", endpointType.voltageSensor );
    endpoints.addEndpoint("PB", "PB", endpointType.voltageSensor );
    endpoints.addEndpoint("AI3_ENABLED", "AI3_ENABLED", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("AI3_CONNECTED", "AI3_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("AI4_ENABLED", "AI4_ENABLED", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("AI4_CONNECTED", "AI4_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("LAST_PST", "AI4_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1102;
    endpoints.addEndpoint("POSITION_ENABLED", "POSITION_ENABLED", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("OPEN_VALVE_SWITCH", "OPEN_VALVE_SWITCH", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("CLOSE_VALVE_SWITCH", "CLOSE_VALVE_SWITCH", endpointType.genericSensor)
        .variableTypeId = 1078;
    endpoints.addEndpoint("WHP_LT", "WHP_LT", endpointType.pressureSensor);
    endpoints.addEndpoint("WHP_HT", "WHP_HT", endpointType.pressureSensor);
    endpoints.addEndpoint("LP_LT", "LP_LT", endpointType.pressureSensor);
    endpoints.addEndpoint("LP_HT", "LP_HT", endpointType.pressureSensor);

    
}

function validateDeviceAddress(address, result) {
    // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
    // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
    // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
    // caso de que el formato de la dirección sea incorrecto.

    // En el código siguiente, se realiza una validación para asegurarse de que la 
    // dirección tiene exactamente 10 caracteres.

    // if (address.length != 10) {
    //   result.ok = false;
    //   result.errorMessage = {
    //     en: "The address must be 10 characters long", 
    //     es: "La dirección debe tener exactamente 10 caracteres"
    //   };
    // }
}

function updateDeviceUIRules(device, rules) {
    // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
    // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
    // de endpoints manualmente al dispositivo después de que se creó.

    // En el código siguiente, el agregado manual de endpoints está deshabilitada 
    // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
    // endpoints definidos por la función getEndpoints() anterior.

     rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules) {
    // Esta función permite especificar reglas de interfaz de usuario para cada
    // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
    // eliminación de endpoints, o la edición de subtipo de endpoint.

    // En el código siguiente, se definen las siguientes reglas:
    // - Los endpoints no se pueden eliminar.
    // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.

     rules.canDelete = false;
     //rules.canEditSubType = (endpoint.address == "2");
}