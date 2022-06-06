/**
 * @swagger
 * {
    "tags": {
        "name": "Categories",
        "description": "CRUD of Categories, only available for Admin"
    }
    }
 * 
 */

/** 
 * @swagger
 * {
    "paths": {
        "/categories/": {
            "get": {
                "summary": "Return all categories",
                "tags": [
                    "Categories"
                ],
                "security": {
                    "bearerAuth": []
                },
                "parameters": [
                    {
                        "name": "bearerAuth",
                        "in": "header",
                        "description": "token necessary to decode User Role"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Return an array of all Categories names",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "properties": {
                                            "type": "object",
                                            "msg": {
                                                "name": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Internal server error",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "items": {
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "example": {
                        "message": {
                            "msg": "Something went wrong, the server was unable to complete your request"
                        }
                    }
                },
                "401": {
                    "description": "Unauthorized",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "items": {
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "example": {
                        "message": "Access denied, you do not have authorization to enter"
                    }
                },
                "400": {
                    "description": "Bad request",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "items": {
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "example": {
                        "message": "Access denied, token expire or incorrect"
                    }
                }
            }
        },
        "/categories/create": {
            "post": {
                "summary": "Create a category",
                "tags": [
                    "Categories"
                ],
                "security": {
                    "bearerAuth": []
                },
                "parameters": [
                    {
                        "name": "token",
                        "in": "header",
                        "description": "token necessary to decode User Role"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "description": {
                                        "type": "string",
                                        "required": false
                                    },
                                    "image": {
                                        "type": "string",
                                        "required": false
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Creation has been successful"
                        }
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Something went wrong, the server was unable to complete your request"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    }
                }
            }
        },
        "/{id}": {
            "get": {
                "summary": "Return a category by Id",
                "tags": [
                    "Categories"
                ],
                "security": {
                    "bearerAuth": []
                },
                "parameters": [
                    {
                        "name": "token",
                        "in": "header",
                        "description": "token necessary to decode User Role"
                    },
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Id of the category",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Return a Category name",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "example": "name: Demo 1"
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Something went wrong, the server was unable to complete your request"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    }
                }
            },
            "put": {
                "summary": "Update a category",
                "tags": [
                    "Categories"
                ],
                "security": {
                    "bearerAuth": []
                },
                "parameters": [
                    {
                        "name": "token",
                        "in": "header",
                        "description": "token necessary to decode User Role"
                    },
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Id of the category",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Update a Category parameter",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Successful registry update"
                        }
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Something went wrong, the server was unable to complete your request"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    },
                    "404": {
                        "description": "Not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "A record with the set parameter was not found"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Return all categories",
                "tags": [
                    "Categories"
                ],
                "security": {
                    " bearerAuth": []
                },
                "parameters": [
                    {
                        "name": "token",
                        "in": "header",
                        "description": "token necessary to decode User Role",
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    },
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Id of the category",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Delete a Category",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "successful removal"
                        }
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Something went wrong, the server was unable to complete your request"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    },
                    "404": {
                        "description": "Not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items": {
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "example": {
                            "message": "A record with the set parameter was not found"
                        }
                    }
                }
            }
        },
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
                    }
                }
            }
        }
    }
}
*/ 