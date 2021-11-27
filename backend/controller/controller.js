import Express from "express";
import asyncHandler from 'express-async-handler';


export const home = asyncHandler(async (req, res) => {
  
    res.json({
       message : "success"
    });
});

export const shortenUrl = asyncHandler(async (req, res) => {
  res.json({
    message: 'success',
  });
});


