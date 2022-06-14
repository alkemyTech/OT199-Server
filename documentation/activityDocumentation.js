/**
 * @swagger
 * components:
 *   schemas:
 *     Activities:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Activity
 *         name:
 *           type: string
 *           description: Activity Name
 *         content:
 *           type: string
 *           description: Activity Content
 *         image:
 *           type: string
 *           description: image url
 *       example:
 *         id: 1
 *         name: Support group
 *         content: Something about that
 *         image: some-url
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
 *   name: Activities
 *   description: CRUD Routes of Activities, only available for Admin
 */

/**
 * @swagger
 * /activities/all:
 *   get:
 *     summary: Returns the list of all activities
 *     tags: [Activities]
 *     security:
 *     responses:
 *       200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Activities'
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
 * /activities/{name}:
 *   get:
 *     summary: Remove the activities by Id
 *     tags: [Activities]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: name
 *        schema:
 *          type: string
 *        required: true
 *        description: The activity name
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
 * /activities:
 *   post:
 *     summary: Create a new activity
 *     tags: [Activities]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Activities'
 *     responses:
 *       200:
 *         description: The Activity was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activities'
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
 * /activities/{id}:
 *  put:
 *    summary: Update the activity by the id
 *    tags: [Activities]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The activity id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Activities'
 *    responses:
 *      200:
 *        description: The activity was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      404:
 *        description: The activity was not found
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
 * /activities/{name}:
 *   delete:
 *     summary: Remove the activity by id
 *     tags: [Activities]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: name
 *        schema:
 *          type: string
 *        required: true
 *        description: The activity id
 * 
 *     responses:
 *       200:
 *         description: The activity was deleted
 *       404:
 *         description: The activity was not found
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
