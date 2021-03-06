/**
 * @swagger
 * components:
 *   schemas:
 *    User: 
 *      type: object
 *      required:
 *        - firstname
 *        - lastname
 *        - email
 *        - password
 *        - image
 *        properties:
 *          id: 
 *            type: integer
 *            description: User autoincremental id
 *          firstName:
 *            type: string
 *            description: User first name
 *          lastName:
 *            type: string
 *            description: User last name 
 *          email:
 *            type: string
 *            description: User email
 *          password:
 *            type: string
 *            description: User password
 *          image: 
 *            type: string
 *            description: User image URL
 *          roleId: 
 *            type: integer
 *            description: User role id
 *        example:
 *          id:1
 *          firstname: Alvaro
 *          lastname: Gimenez
 *          email: email
 *          password: abc123 
 *          image: image URL 
 *          roleId: 1
 *    responses:
 *    Unauthorized:
 *      description: Unauthorized
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: Acces token is missing or invalid
 *    BadRequest:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: User or Password Incorrect
 *    NotFound:
 *      description: Not Found
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: Register not found
 *    InternalServerError:
 *      description: Internal Server Error
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            content:
 *              msg: string
 *          example:
 *            msg: Something went wrong, the server was unable to complete your request 
*/

/**
 * @swagger
 * tags:
 *    name: User
 *    description: Login, Register and Profile routes of Auth.  
 *    
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Register an user 
 *    tags: [Auth]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: Registration has been successful
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              content: 
 *                msg: string
 *              example:
 *                msg: Registration has been successful
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 */

/**
 * @swagger
 * /auth/login: 
 * post:
 *    summary: Login an user 
 *    tags: [Auth]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: Login successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              content: 
 *                msg: Token generated
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /auth/me:
 * get: 
 *   summary: Get own profile
 *   tags: [Auth]
 *   security: 
 *     - bearerAuth: []
 *   responses: 
 *      200:
 *        description: Profile
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      406: 
 *        description: server cannot produce a response matching the list of acceptable
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              content: 
 *                msg: string
 *              example:
 *                msg: NOT_ACCEPTABLE
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 */