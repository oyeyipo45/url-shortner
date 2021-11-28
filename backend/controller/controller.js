import express from "express";
import asyncHandler from 'express-async-handler';
import Url from "../model/shortendUrl.js"


export const home = asyncHandler(async (req, res) => {
  
    res.json({
       message : "success"
    });
});


export const shortenUrl = asyncHandler(async (req, res) => {

  const longUrl = req.body.longUrl
  const shortenedUrl = req.body.shortenedUrl;
  const clicks = req.body.clicks;

  try {
    const url = await Url.create({
     longUrl ,
     shortenedUrl ,
     clicks 
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


export const getUrls = asyncHandler(async (req, res) => {
  
  try {
    const url = await Url.find();

    res.json({
      message: 'success',
      data: url
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'short url not created',
    });
  }
});

