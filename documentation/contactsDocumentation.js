/**
 * @swagger
 * components:
 *   schemas:
 *     Contacts:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Contact
 *         name:
 *           type: string
 *           description: contact Name
 *         phone:
 *           type: number
 *           description: contact number
 *         email:
 *           type: string
 *           description: contact email
 *         message:
 *           type: string
 *           description: content message
 *       example:
 *         id: 1
 *         name: User name
 *         phone: 111111111
 *         email : example@mail.com
 *         message : contenido del mensaje
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
 *   name: Contacts
 *   description: Obtain all contacts and Create contact
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Returns the list of all contacts
 *     tags: [Contacts]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Contacts'
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
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contacts'
 *     responses:
 *       200:
 *         description: The Contact was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacts'
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

