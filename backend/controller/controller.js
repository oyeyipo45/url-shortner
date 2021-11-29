import express from "express";
import asyncHandler from 'express-async-handler';
import Url from "../model/shortendUrl.js"


export const home = asyncHandler(async (req, res) => {
  
    res.json({
       message : "success"
    });
});


export const shortenUrl = asyncHandler(async (req, res) => {

  const {longUrl} = req.body.longUrl

  try {
    const url = await Url.create({
     longUrl 
    });
    
    //res.redirect('/')

    res.json({
      message: "success",
      data : url
    })
    
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: "short url not created"
    })
  }
});



export const redirectUrl = asyncHandler(async (req, res) => {
  const  shortUrl = req.body.shortUrl;

  console.log(shortUrl);

  try {
    const url = await Url.findOne({ shortenedUrl: shortUrl });

    if (url == null) {
      res.status(400).json({
        message: 'Url details not found',
      });
    }

    res.json({
      message: "success",
      data: url.lngUrl
    })

  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'Details not found',
    });
  }
});
