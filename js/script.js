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
  const TAX_RATE = 0.18

  // process
  const areaOfTriangle = (hoursPERWeek * paymentPERHour) / TAX_RATE

  // output
document.getElementById('pay').innerHTML = 'Your pay will be: $' + areaOfTriangle.toFixed(2)
}
