const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const allSales = require("../../mocks/allSales.json");
const singleSale = require('../../mocks/singleSale.json');
const connection = require("../../../src/models/connection");
const salesModel = require("../../../src/models/salesModel");

describe('Model de "sales"', function () {
  describe("teste de listagem de todas as sales", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar corretamente todas as sales", async function () {
      sinon.stub(connection, "execute").resolves([allSales]);

      const result = await salesModel.getAll();

      expect(result).to.be.deep.equal(allSales);
    });
  });

  describe("teste de listagem de uma sale", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar corretamente uma sale específica", async function () {
      sinon.stub(connection, "execute").resolves([singleSale]);

      const result = await salesModel.getById(2);

      expect(result).to.be.deep.equal(singleSale);
    });
  });
});
