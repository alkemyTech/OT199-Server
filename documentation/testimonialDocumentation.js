/**
 * @swagger
 * components:
 *   schemas:
 *     Testimonials:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Testimonials
 *         name:
 *           type: string
 *           description: testimonial name
 *         image:
 *           type: string
 *           description: image url
 *         content:
 *           type: string
 *           description: testimonial content
 *       example:
 *         id: 1
 *         text: testimonial name
 *         image: some-url
 *         order: description
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
 *   name: Testimonials
 *   description: CRUD Routes of Testimonials, only available for Admin
 */

/**
 * @swagger
 * /testimonials/all:
 *   get:
 *     summary: Obtain the testimonials
 *     tags: [Testimonials]
 *     security:
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *              type: object
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
 * /testimonials/{id}:
 *   get:
 *     summary: Obtain one testimonials by id
 *     tags: [Testimonials]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The testimonials id
 *     responses:
 *       200:
 *         description: The Testimonials was successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Testimonials'
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
 * /testimonials/{id}:
 *  put:
 *    summary: Update the testimonials by the id
 *    tags: [Testimonials]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The testimonials id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Testimonials'
 *    responses:
 *      200:
 *        description: The testimonials was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      404:
 *        description: The testimonials was not found
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
 * /testimonials:
 *   post:
 *     summary: Create a new testimonials
 *     tags: [Testimonials]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Testimonials'
 *     responses:
 *       200:
 *         description: The Testimonials was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Testimonials'
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
 * /testimonials/{id}:
 *   delete:
 *     summary: Remove the activity by id
 *     tags: [Testimonials]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
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

