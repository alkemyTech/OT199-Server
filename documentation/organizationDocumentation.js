/**
 * @swagger
 * components:
 *   schemas:
 *     Organizations:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the Organization
 *         name:
 *           type: string
 *           description: Organization Name
 *         image:
 *           type: string
 *           description: image url
 *         address:
 *           type: string
 *           description: organization address
 *         phone:
 *           type: number
 *           description: Organization phone
 *         email:
 *           type: string
 *           description: Organization email
 *         welcomeText:
 *           type: string
 *           description: welcome text for organization
 *         aboutUsText:
 *           type: string
 *           description: organization message
 *         facebookUrl:
 *           type: string
 *           description: facebook url 
 *         instagramUrl:
 *           type: string
 *           description: instagram url 
 *         linkedinUrl:
 *           type: string
 *           description: linkedin url 
 *       example:
 *         id: 1
 *         name: Organization
 *         image: some-url
 *         address: street 123
 *         phone: 111223344
 *         email: organization@mail.com
 *         welcomeText: welcome
 *         aboutUsText: about
 *         facebookUrl: url
 *         instagramUrl: url
 *         linkedirUrl: url
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
 *   name: Organizations
 *   description: CRUD Routes of Organizations, only available for Admin
 */

/**
 * @swagger
 * /organizations/public:
 *   get:
 *     summary: Returns the list of organizations
 *     tags: [Organizations]
 *     security:
 *     responses:
 *       200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Organizations'
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
 * /organizations/public/{id}:
 *  post:
 *    summary: Update the organization by the id
 *    tags: [Organizations]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The organization id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Organizations'
 *    responses:
 *      200:
 *        description: The organization was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      404:
 *        description: The organization was not found
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
