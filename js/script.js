// Copyright (c) 2024 David.E All rights reserved
//
// Created by: David.E
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle () {
  // input
  const hoursPERWeek = parseInt(document.getElementById('Hours-per-week').value)
  const paymentPERHour = parseInt(document.getElementById('Payment-per-hour').value)

  // process
  const areaOfTriangle = baseOfTriangle * heightOfTriangle

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}
