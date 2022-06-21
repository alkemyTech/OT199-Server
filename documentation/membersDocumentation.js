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
 *           description: The auto-generated id of the member
 *         name:
 *           type: string
 *           description: Member's name
 *         facebookUrl:
 *           type: string
 *           description: Facebook url
 *         instagramUrl:
 *           type: string
 *           description: Instragram url
 *         linkedinUrl:
 *           type: string
 *           description: Linkedin url
 *         image:
 *           type: string
 *           description: Image url
 *         description:
 *           type: string
 *           description: Short description about the member
 *       example:
 *         id: 1
 *         name: Maria Irola
 *         facebookUrl: facebook.com/mariaIrola
 *         instagramUrl: instragram.com/mariaIrola
 *         linkedinUrl: linkedin.com/in/mariaIrola
 *         image: some-url
 *         descriptions: Fundadora
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
 * /members/:
 *   get:
 *     summary: Returns the list of all members
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
 * /members/{id}:
 *   get:
 *     summary: Returns the member by Id
 *     tags: [Members]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The member id 
 *     responses:
 *       200:
 *         description: Returns the member
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *                
 *       404:
 *         description: The member was not found
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
 * /members/create:
 *   post:
 *     summary: Create a new member
 *     tags: [Members]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Members'
 *     responses:
 *       200:
 *         description: Member has been created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Members'
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
 * /members/{id}:
 *  put:
 *    summary: Update the member by the id
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
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Members'
 *    responses:
 *      200:
 *        description: Member was updated successfully
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
 *   delete:
 *     summary: Remove the member by id
 *     tags: [Members]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The member id
 * 
 *     responses:
 *       200:
 *         description: Member was deleted successfully
 *       404:
 *         description: The member was not found
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