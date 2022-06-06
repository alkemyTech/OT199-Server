/**
*@swagger
 {
    "components": {
        "schema": {
            "Catergory": {
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
            }
        }
    }
}
*/