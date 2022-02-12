const express = require("express");
const Goods = require("../schemas/goods");
const Cart = require("../schemas/cart")
const router = express.Router();
//const router = require("express").Router(); 이런 방식도 가능하다.

router.get("/", (req, res) => {
    res.send("this is root page");
});

// 목록 조회
router.get("/goods", async (req, res) => {
    // async 함수와 await를 이용해야 한다. why? promise 객체이다.
    const { category } = req.query;

    console.log('category?', category);

    const goods = await Goods.find({ category });

    res.json({
        goods,
    });
});

// 상세 조회
router.get("/goods/:goodsId", async (req, res) => {
    // /goods/abcd나, /goods/1234 형태
    const { goodsId } = req.params;

    const [detail] = await Goods.find({ goodsId: Number(goodsId) });

    res.json({
        detail,
    });
});

router.post("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;
    const { quantity } = req.body;
    // header는 string type으로, body는 json 그대로 받는다.

    const existCarts = await Cart.find({ goodsId: Number(goodsId) });
    if (existCarts.length) {
        return res.status(400).json({ success: false, errorMessage: "이미 장바구니에 들어 있는 상품입니다." })
    }
    await Cart.create({ goodsId: Number(goodsId), quantity });
    res.json({ success: true })
});

router.delete("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;
    const existCarts = await Cart.find({ goodsId: Number(goodsId) });

    if (existCarts.length) {
        await Cart.deleteOne({ goodsId: Number(goodsId) });
    }
    res.json({ success: true });
});

router.put("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;
    const { quantity } = req.body;

    if (quantity < 1) {
        return res.json({ success: false, errorMessage: "수량은 음수가 될 수 없습니다." })
    }

    const existCarts = await Cart.find({ goodsId: Number(goodsId) });
    if (!existCarts.length) {
        return res.status(400).json({ success: false, errorMessage: "장바구니에 해당 상품이 없습니다." })
    }

    await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } });

    res.json({ success: true });
});

// 상품 정보 생성
router.post("/goods", async (req, res) => {
    const { goodsId, name, thumbnailUrl, category, price } = req.body;

    const goods = await Goods.find({ goodsId });

    if (goods.length) {
        return res
            .status(400)
            .json({ success: false, errorMessage: "이미 있는 데이터입니다." });
    }

    const createdGoods = await Goods.create({
        goodsId,
        name,
        thumbnailUrl,
        category,
        price,
    });

    res.json({ goods: createdGoods });
});

module.exports = router;
// router에 모든 것을 담아주었으니, 넘겨주겠다.
