const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const allProducts = require("../../mocks/allProducts.json");
const singleProduct = require("../../mocks/singleProduct.json");
const productsService = require("../../../src/services/productsService");
const productsController = require("../../../src/controllers/productsController");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);

describe('Controller de "Products"', function () {
  describe("teste de listagem de todos os produtos", function () {

    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns()
    });

    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar status 200 e todos os produtos", async function () {
      sinon.stub(productsService, 'getAll').resolves(allProducts);

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(allProducts);
    });
  });

  describe("teste de listagem de um produtos", function () {

    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns()
    });

    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar status 200 e um produto específico", async function () {
      req.params = { id: 1 }
      sinon.stub(productsService, 'getById').resolves([singleProduct]);

      await productsController.getById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly([singleProduct]);
    });
  });
});
