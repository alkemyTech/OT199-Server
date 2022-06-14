/**
 * @swagger
 * components:
 *   schemas:
 *     Members:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Member
 *         name:
 *           type: string
 *           description: name Member
 *         facebookUrl:
 *           type: string
 *           description: facebook url 
 *         instagramUrl:
 *           type: string
 *           description: instagram url 
 *         linkedinUrl:
 *           type: string
 *           description: linkedin url 
 *         image:
 *           type: string
 *           description: image url 
 *         description:
 *           type: string
 *           description:  member description  
 *       example:
 *         id: 1
 *         name: name Member
 *         facebookUrl: url
 *         instagramUrl: url
 *         linkedirUrl: url
 *         image: url
 *         description: member is new
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
 *   name: Members
 *   description: CRUD Routes of Members, only available for Admin
 */
/**
 * @swagger
 * /members:
 *   get:
 *     summary: Returns the list of all Members
 *     tags: [Members]
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
 *                $ref: '#/components/schemas/Members'
 *       400:
 *         description: Bad Request
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
 * /members/{id}:
 *  get:
 *    summary: Search the member by the id
 *    tags: [Members]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The member id
 *    responses:
 *      200:
 *        description: ok
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      404:
 *        description: The member was not found
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

/**
 * @swagger
 * /members/{id}:
 *  delete:
 *    summary: Delete the member by the id
 *    tags: [Members]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The member id
 *    responses:
 *      200:
 *        description: The member was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      404:
 *        description: The member was not found
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

/**
 * @swagger
 * /members:
 *  post:
 *    summary: Create the new member 
 *    tags: [Members]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Members'
 *    responses:
 *      200:
 *        description: The member was created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      404:
 *        description: The member was not found
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

