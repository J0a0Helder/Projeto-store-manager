const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const allSales = require("../../mocks/allSales.json");
const singleSale = require("../../mocks/singleSale.json");
const salesService = require("../../../src/services/salesService");
const salesController = require("../../../src/controllers/salesController");
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

    it("deve retornar status 200 e todas as sales", async function () {
      sinon.stub(salesService, "getAll").resolves(allSales);

      await salesController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(allSales);
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
      req.params = { id: 2 }
      sinon.stub(salesService, "getById").resolves([singleSale]);

      await salesController.getById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly([singleSale]);
    });
  });
});