const express = require('express');
const Categories = require('../controllers/categoriesController');
const CheckRoleId = require('../middlewares/checkRole');
const router = express.Router();
const Validator = require('../helpers/validator');
const { check } = require('express-validator');

router.get('/', CheckRoleId.isAdmin, Categories.getAllCategories);

router.get('/:id', CheckRoleId.isAdmin, Categories.getCategory);
router.put('/:id', CheckRoleId.isAdmin, Categories.updateCategories);
router.delete('/:id', CheckRoleId.isAdmin, Categories.deleteCategorie);
router.post('/create', CheckRoleId.isAdmin, [
    check('name', 'Name is requried').not().isEmpty(),
    Validator.validateFields
], Categories.createCategories);


module.exports = router;

/**
 * @swagger
 * {
    "tags": {
        "name": "Categories",
        "description": "CRUD of Categories, only available for Admin"
    }
}
 * @swagger
 * {
 * "components": {
 *  "schema": {
 *    "Catergory": {
 *       "type": "object",
 *       "required": "name", 
 *       "properties": {
 *         "id": {
 *          "type": "integer" 
 *         },
 *         "name": {
 *          "type": "string" 
 *         },
 *         "description": {
 *           "type": "string"
 *         },          
 *         "image": {
 *           "type": "string" 
 *         },
 *     }
 *    }
 *   }
 *  }
 * }
 * 
 * @swagger 
 *{
    "paths": {
        "/": {
            "get": {
                "summary": "Return all categories",
                "tags": [Categories],
                "produces": "application/json",
                "parameters": [
                    {
                        "name": "token",
                        "in": "header",
                        "description": "token necessary to decode User Role",
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Return an array of all Categories names",
                        "content": {
                            "application/json": {
                                "type": "array",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "message": "Something went wrong, the server was unable to complete your request"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    }
                }
            }
        },
        "/create": {
            "post": {
                "summary": "Create a category",
                "tags": [Categories],
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
                        "name": "name",
                        "in": "path",
                        "description": "Title of the category",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Creation has been successful",
                        "content": {
                            "properties": {
                                "type": "string"
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "message": "Something went wrong, the server was unable to complete your request"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    }
                }
            }
        },
        "/{id}": {
            "get": {
                "summary": "Return all categories",
                "tags": [Categories],            
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
                        "description": "Return an array of all Categories names",
                        "content": {
                            "application/json": {
                                "type": "string",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "application/json": {
                                "message": "Something went wrong, the server was unable to complete your request"
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    }
                }
            },
            "put": {
                "summary": "Update a category",
                "tags": [Categories],
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
                        "description": "Update a Category parameter",
                        "content": {
                            "type": "string",
                            "properties": {
                                "name": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "message": "Something went wrong, the server was unable to complete your request"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    },
                    "404": {
                        "description": "Not found",
                        "content": {
                            "message": "A record with the set parameter was not found"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Return all categories",
                "tags": [Categories],
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
                        "description": "Return an array of all Categories names",
                        "content": {
                            "type": "array",
                            "properties": {
                                "name": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error",
                        "content": {
                            "message": "Something went wrong, the server was unable to complete your request"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "message": "Access denied, you do not have authorization to enter"
                        }
                    },
                    "400": {
                        "description": "Bad request",
                        "content": {
                            "message": "Access denied, token expire or incorrect"
                        }
                    },
                    "404": {
                        "description": "Not found",
                        "content": {
                            "message": "A record with the set parameter was not found"
                        }
                    }
                }
            }
        }
    }
}
*/