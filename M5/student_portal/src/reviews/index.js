const express = require("express");
const router = express.Router();
const { join } = require("path");
const { readFileAsync, writeFileAsync } = require("../utils");
const uniqid = require("uniqid");
const { check, validationResult } = require("express-validator");
const reviewFile = join(__dirname, "reviews.json");

// GET /projects/projectID/reviews => get all the reviews for a given project
router.get("/:projectID/reviews", async (req, res, next) => {
  try {
    let arrayReviews = await readFileAsync(reviewFile);
    let reviewsByProID = arrayReviews.filter(
      (review) => review.projectID === req.params.projectID
    );
    res.send(reviewsByProID);
  } catch (err) {
    next(err);
  }
});
//GET /projects/projectID/reviews/:reviewID => get reviewByID
router.get("/reviews/:reviewID", async (req, res, next) => {
  try {
    let arrayReviews = await readFileAsync(reviewFile);
    let reviewsByID = arrayReviews.find(
      (review) => review.id === req.params.reviewID
    );
    res.send(reviewsByID);
  } catch (err) {
    next(err);
  }
});
// POST /projects/projectID/reviews => add a new review for the given project
router.post(
  "/:projectID/reviews",
  [
    check("name")
      .exists()
      .isString()
      .withMessage("name field is mandatory and must be a string"),
    check("text")
      .exists()
      .isString()
      .withMessage("text field is mandatory and must be a string"),
    check("rate").exists().withMessage("rate field is mandatory"),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const newReview = {
          ...req.body,
          projectID: req.params.projectID,
          updatedAt: Date.now(),
          createdAt: Date.now(),
          id: uniqid() + uniqid.time(),
        };
        let arrayReviews = await readFileAsync(reviewFile);
        console.log(arrayReviews);
        await arrayReviews.push(newReview);
        await writeFileAsync(reviewFile, arrayReviews);
        res.send(arrayReviews);
      } else {
        let err = new Error();
        err.httpStatusCode = 400;
        err.message = errors;
        next(err);
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);
// PUT  /projects/projectID/reviews/reviewID => add a new review for the given project
router.put(
  "/:projectID/reviews/:reviewID",
  [
    check("name")
      .exists()
      .isString()
      .withMessage("name field is mandatory and must be a string"),
    check("text")
      .exists()
      .isString()
      .withMessage("text field is mandatory and must be a string"),
    check("rate").exists().withMessage("rate field is mandatory"),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let error = new Error();
        error.httpStatusCode = 400;
        error.message = errors;
        next(error);
      } else {
        const editedReview = {
          ...req.body,
          projectID: req.params.projectID,
          updatedAt: Date.now(),
          id: req.params.reviewID,
        };

        let arrayReviews = await readFileAsync(reviewFile);
        const indexReview = arrayReviews.findIndex(
          (review) => review.id === req.params.reviewID
        );
        console.log(indexReview);
        if (indexReview >= 0) {
          arrayReviews[indexReview] = editedReview;
          await writeFileAsync(reviewFile, arrayReviews);
          res.send(editedReview);
        } else {
          const error = new Error();
          error.httpStatusCode = 404;
          next(err);
        }
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);
// DELETE /projects/id/reviews => add a new review for the given project
router.delete("/reviews/:id", async (req, res, next) => {
  try {
    let arrayReviews = await readFileAsync(reviewFile);
    arrayReviews = arrayReviews.filter((review) => review.id !== req.params.id);
    await writeFileAsync(reviewFile, arrayReviews);
    res.send(arrayReviews);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
module.exports = router;
