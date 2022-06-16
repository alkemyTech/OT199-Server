/**
 * @swagger
 * components: 
 *  schemas:
 *    News:
 *      type: object
 *      properties: 
 *        id:
 *          type: integer
 *          description: News autoincremental id
 *        name:
 *          type: string
 *          description: News name
 *        image:
 *          type: string
 *          description: News image url
 *        content:
 *          type: string
 *          description: News content
 *        categoryId:
 *          type: integer
 *          description: News category id
 *        type:
 *          type: string
 *          description: News type
 *      required:
 *        - name
 *      example:
 *        id: 1
 *        name: Next events
 *        image: https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg
 *        content: Event detail
 *        categoryId: 1
 *        type: news
 *    Comment:
 *      type: object
 *      properties: 
 *        body:
 *          type: string
 *          description: Comment content
 *      required:
 *        - body
 *      example:
 *        body: This is a comment
 *  responses:
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
 *            msg: The request sent to the server is invalid
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
 *    
 *    
 */

/**
 * @swagger
 * tags:
 *   name: News
 *   description: CRUD Routes of News
 */

/**
 * @swagger
 * /news: 
 *  get:
 *    summary: Returns all news
 *    tags: [News]
 *    responses:
 *      200:
 *        description: OK
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/News'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 * 
 *  post:
 *    summary: Create news
 *    tags: [News]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *    responses:
 *      200:
 *        description: News created successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              content: 
 *                msg: string
 *              example:
 *                msg: News created successfully
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /news/{id}:
 *  get:
 *    summary: Returns news by id
 *    tags: [News]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: integer
 *          description: News id
 *    responses:
 *      200:
 *        description: OK
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/News'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *  put:
 *    summary: Update news
 *    tags: [News]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: integer
 *          description: News id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/News'
 *    responses:
 *      200:
 *        description: News updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              content:
 *                msg: string
 *              example:
 *                msg: News updated successfully
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 *  delete:
 *    summary: Delete news
 *    tags: [News]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: integer
 *          description: News id
 *    responses:
 *      200:
 *        description: News deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              content:
 *                msg: string
 *              example:
 *                msg: News deleted successfully
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /news/{id}/comments:
 *  get:
 *    summary: Returns all comments by news id
 *    tags: [News]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: integer
 *          description: News id
 *    responses:
 *      200:
 *        description: All comments of the news
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Comment'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/InternalServerError'
 */