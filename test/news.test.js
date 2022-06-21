const { News, Comment } = require('../models');
const sinon = require('sinon');
const { expect } = require('chai');
const NewsController = require('../controllers/newsController');
const { it } = require('mocha');

describe('News testing', () => {
  const allNewsTest = [{
    id: 1,
    name: 'Next events',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Event detail',
    categoryId: 1,
    type: 'news'
  }, {
    id: 2,
    name: 'Other events',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example',
    categoryId: 2,
    type: 'news'
  }, {
    id: 3,
    name: 'Name example',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example 2',
    categoryId: 1,
    type: 'news'
  }, {
    id: 4,
    name: 'Next events',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Event detail',
    categoryId: 1,
    type: 'news'
  }, {
    id: 5,
    name: 'Other events',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example',
    categoryId: 2,
    type: 'news'
  }, {
    id: 6,
    name: 'Name example',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example 2',
    categoryId: 1,
    type: 'news'
  }, {
    id: 7,
    name: 'Other events',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example',
    categoryId: 2,
    type: 'news'
  }, {
    id: 8,
    name: 'Name example',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example 2',
    categoryId: 1,
    type: 'news'
  }, {
    id: 9,
    name: 'Other events',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example',
    categoryId: 2,
    type: 'news'
  }, {
    id: 10,
    name: 'Name example',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example 2',
    categoryId: 1,
    type: 'news'
  }, {
    id: 11,
    name: 'Other events',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example',
    categoryId: 2,
    type: 'news'
  }, {
    id: 12,
    name: 'Name example',
    image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
    content: 'Content example 2',
    categoryId: 1,
    type: 'news'
  }];

  const allCommentsByIdTest = [{
    id: 1,
    userId: 1,
    body: 'This is a comment',
    newsId: 1
  }, {
    id: 2,
    userId: 1,
    body: 'This is another comment',
    newsId: 1
  },
  {
    id: 3,
    userId: 2,
    body: 'Comment example',
    newsId: 1
  }]

  const newsTest = allNewsTest[0];

  describe('/news', () => {
    let status, json, send, res;

    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      send = sinon.spy();
      res = { status, json, send };
      status.returns(res);
    });

    afterEach(() => {
      sinon.verifyAndRestore();
    });

    // Get all news
    it('GET: should respond all news', async() => {
      const req = { query: {} };

      const stub = sinon.stub(News, 'findAll').returns(allNewsTest);
      await NewsController.getAllNews(req, res);

      expect(stub.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(200);
      expect(res.json.args[0][0].news).to.equal(allNewsTest);
    });

    // Get news with pagination
    it('GET: should respond the first 10 news', async() => {
      const req = { query: { page: 1 } };
      req.get = sinon.fake(() => 'http://localhost:3000');


      const newsWithPaginationTest = {
        nextPageUrl: 'next Page',
        data: allNewsTest
      };

      const stubFindAll = sinon.stub(News, 'findAll').returns(allNewsTest);
      const stubFindAndCountAll = sinon.stub(News, 'findAndCountAll').returns({ count: allNewsTest.length, rows: allNewsTest });
    
      await NewsController.getAllNews(req, res);
      
      // expect(stubFindAll.calledOnce).to.be.true;
      // expect(stubPagesHelperGetLimit.calledOnce).to.be.true;
      // expect(stubFindAndCountAll.calledOnce).to.be.true;
      // expect(stubPagesHelperIsValidPage.calledOnce).to.be.true;
      // expect(stubPagesHelperGetResponse.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(200);
      expect(res.json.args[0][0].data).to.equal(allNewsTest);
      expect(res.json.args[0][0].nextPageUrl).to.be.string;
      expect(res.json.args[0][0].prevPageUrl).to.be.undefined;
    });

    // Create news
    it('POST: should create a news and respond the news', async() => {
      const req = {
        body: {
          name: 'Next events',
          image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
          content: 'Event detail',
          categoryId: 1,
          type: 'news'
        }
      };

      const stub = sinon.stub(News, 'create').returns(newsTest);
      await NewsController.createNews(req, res);

      expect(stub.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(200);
      expect(res.json.args[0][0].msg).to.equal('News was created succesfully');
      expect(res.json.args[0][0].news).to.equal(newsTest);
    });
  });

  describe('/news/:id', () => {
    let status, json, res;

    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { status, json };
      status.returns(res);
    });

    afterEach(() => {
      sinon.verifyAndRestore();
    });

    it('GET: should respond a news by id', async() => {
      const req = {
        params: {
          id: 1
        }
      };

      const stub = sinon.stub(News, 'findOne').returns(newsTest);

      await NewsController.getDetail(req, res);

      expect(stub.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(200);
      expect(res.json.args[0][0].msg).to.equal('New found succesfully');
      expect(res.json.args[0][0].detail).to.equal(newsTest);
    })

    it('PUT: should update a news and respond the news', async() => {
      const req = {
        params: {
          id: 1
        },
        body: {
          name: 'Next events',
          image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg',
          content: 'Event detail',
          categoryId: 1,
          type: 'news'
        }
      };

      // Create save function in news instance
      newsTest.save = () => {};

      const stubFindOne = sinon.stub(News, 'findOne').returns(newsTest);
      const stubSave = sinon.stub(newsTest, 'save').returns(newsTest);
      await NewsController.updateNews(req, res);

      expect(stubFindOne.calledOnce).to.be.true;
      expect(stubSave.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(200);
      expect(res.json.args[0][0].msg).to.equal('Updated successfully');
      expect(res.json.args[0][0].news).to.equal(newsTest);
    });

    it('DELETE: should delete a news', async() => {
      const req = {
        params: {
          id: 1
        }
      };
      
      const stubFindByPk = sinon.stub(News, 'findByPk').returns(newsTest);
      const stubDestroy = sinon.stub(News, 'destroy').returns();

      await NewsController.deleteNews(req, res);

      expect(stubFindByPk.calledOnce).to.be.true;
      expect(stubDestroy.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(200);
      expect(res.json.args[0][0].msg).to.equal('the New was deleted');
    });
  });

  describe('/news/:id/comments', () => {
    let status, json, res;

    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { status, json };
      status.returns(res);
    });

    afterEach(() => {
      sinon.verifyAndRestore();
    });

    it('GET: should respond all comments by news id', async() => {
      const req = {
        params: {
          id: 1
        }
      };

      const stub = sinon.stub(Comment, 'findAll').returns(allCommentsByIdTest);

      await NewsController.getCommentsByNews(req, res);

      expect(stub.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(200);
      expect(res.json.args[0][0]).to.equal(allCommentsByIdTest);
    });
  });
});