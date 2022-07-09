const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  });
});

router.get(() => {});

router.get(() => {});

router.get(() => {});

module.exports = router;
