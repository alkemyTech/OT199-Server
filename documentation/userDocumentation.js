/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         firstName:
 *           type: string
 *           description: User Name
 *         lastName:
 *           type: string
 *           description: User surname
 *         email:
 *           type: string
 *           description: email
 *         password:
 *           type: string
 *           description: password account
 *         image:
 *           type: string
 *           description: image url
 *         roleId:
 *           type: number
 *           description: role id association
 *       example:
 *         id : 1,
 *         firstName: Usuario
 *         lastName: Apellido
 *         email: example@test.com
 *         password: $2a$10$CBpAvUuesFDoe5t7NTJazuLZ0PDYrK1mMXWofukuHP8eJkGX1MrhG
 *         image: some-url
 *         roleId: 1
 *     Errors:
 *       type: object
 *       required:
 *         - statusCode
 *         - message
 *       properties:
 *         statusCode:
 *           type: number
 *           description: Http Status Code
 *         message:
 *           type: string
 *           description: Message return to the User
 *       example:
 *         statusCode: 500
 *         message: Something went wrong, the server was unable to complete your request
 *     
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: CRUD Routes of Users, only available for Admin
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtain all users
 *     tags: [Users]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *       401:
 *         description: Unauthorized
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 *       500:
 *         description: Internal Server Error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The user id
 * 
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 *       400:
 *         description: Bad Request
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 *       401:
 *         description: Unauthorized
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 *       500:
 *         description: Internal Server Error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 */

/**
 * @swagger
 * /users/{id}:
 *  path:
 *    summary: Update the users by the id
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      404:
 *        description: The user was not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Errors'
 */