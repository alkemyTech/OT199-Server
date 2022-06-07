//SCHEMAS USADOS EN EL ARCHIVO OT199-90 

/*
@swagger
 {
    "components": {
        "schema": {
            "Category": {
                "type": "object",
                "required": "name",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "image": {
                        "type": "string"
                    }
                },
                "example": {
                    "id": 1,
                    "name": "Demo 1",
                    "description": "Demostration Category 1"
                }
            },
            "Error400": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string"
                    }
                }, 
                "example": {
                    "message": "Access denied, token expire or incorrect"
                }
            },
            "Error401": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string"
                    }
                }, 
                "example": {
                    "message": "Access denied, you do not have authorization to enter"
                }
            },
            "Error403": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string"
                    }
                }, 
                "example": {
                    "message": "Something went wrong, the server was unable to complete your request"
                }
            },
            "Error404": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string"
                    }
                }, 
                "example": {
                    "message": "Not found"
                }
            },
            "Error500": { 
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string"
                    }
                }, 
                "example": {
                    "message": "Something went wrong, the server was unable to complete your request"
                }
            }
        }
    }
}
*/