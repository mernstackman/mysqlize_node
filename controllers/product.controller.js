import { Product } from "../database/models";

class ProductController {
  static async getAllProducts(req, res, next) {
    const { query } = req;
    // console.log(query);
    const { page, limit, offset } = query;
    const sqlQueryMap = { limit: parseInt(limit), offset: parseInt(offset) };
    console.log(query);
    console.log(sqlQueryMap);
    try {
      const products = await Product.findAndCountAll(sqlQueryMap);

      return res.status(200).json({
        status: true,
        products
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default ProductController;
