const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, () => {});

router.put(() => {});

router.delete(() => {});

module.exports = router;
