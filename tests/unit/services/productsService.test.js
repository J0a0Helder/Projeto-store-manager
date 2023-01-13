const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const allProducts = require("../../mocks/allProducts.json");
const singleProduct = require("../../mocks/singleProduct.json");
const productsService = require("../../../src/services/productsService");
const productsModel = require("../../../src/models/productsModel");

describe('Service de "Products"', function () {
  describe("teste de listagem de todos os produtos", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar corretamente todos os produtos", async function () {
      sinon.stub(productsModel, 'getAll').resolves(allProducts);

      const result = await productsService.getAll();

      expect(result).to.be.deep.equal(allProducts);
    });
  });

  describe("teste de listagem de um produtos", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar corretamente um produto específico", async function () {
      sinon.stub(productsModel, 'getById').resolves([singleProduct]);

      const result = await productsService.getById(2);

      expect(result).to.be.deep.equal([singleProduct]);
    });
  });
});
