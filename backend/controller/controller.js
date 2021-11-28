import Express from "express";
import asyncHandler from 'express-async-handler';
import ShortenUrl from "../model/shortendUrl.js"


export const home = asyncHandler(async (req, res) => {
  
    res.json({
       message : "success"
    });
});


export const shortenUrl = asyncHandler(async (req, res) => {

  const longUrl = req.body.longUrl

  console.log(req.body);

  console.log(longUrl, "longUrl")
  try {
    // const url = await ShortenUrl.create({
    //   longUrl,
    // });
    
    // res.redirect('/')

    res.json({
      message: "success"
    })
  } catch (error) {
    res.status(400).json({
      message: "short url not created"
    })
  }
});


