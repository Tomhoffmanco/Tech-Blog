const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.sesion.userId,
    },
  });
});

router.get(() => {});

router.get(() => {});
