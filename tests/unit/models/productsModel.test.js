const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const allProducts = require('../../mocks/allProducts.json');
const singleProduct = require("../../mocks/singleProduct.json");
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');

describe('Model de "Products"', function () {

  describe('teste de listagem de todos os produtos', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('deve retornar corretamente todos os produtos', async function () {

      sinon.stub(connection, 'execute').resolves([allProducts]);

      const result = await productsModel.getAll();

      expect(result).to.be.deep.equal(allProducts);
    });
  });

  describe("teste de listagem de um produtos", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("deve retornar corretamente um produto específico", async function () {
      sinon.stub(connection, 'execute').resolves([singleProduct]);

      const result = await productsModel.getById(1);

      expect(result).to.be.deep.equal(singleProduct[0]);
    });
  });
});
