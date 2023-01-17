const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const allSales = require("../../mocks/allSales.json");
const singleSale = require("../../mocks/singleSale.json");
const salesService = require("../../../src/services/salesService");
const salesModel = require("../../../src/models/salesModel");

describe('Service de "sales"', function () {
  describe("teste de listagem de todas as sales", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar corretamente todas as sales", async function () {
      sinon.stub(salesModel, "getAll").resolves(allSales);

      const result = await salesService.getAll();

      expect(result).to.be.deep.equal(allSales);
    });
  });

  describe("teste de listagem de uma sale", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar corretamente uma sale específica", async function () {
      sinon.stub(salesModel, "getById").resolves([singleSale]);

      const result = await salesService.getById(2);

      expect(result).to.be.deep.equal([singleSale]);
    });
  });
});
