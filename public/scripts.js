// JavaScript Document

/////// Use this section to adjust the logo with the holidays
		var currentTime = new Date();
		var date = currentTime.getDate();
		var month = currentTime.getMonth() + 1;
		
//January

//February		
		//Valentines - Feb 14
		if (month == 2 && (date >= 10 && date <= 16)) {
			document.getElementById("logo").style.background="url('img/holidays-03.png')";}
//March		
		//Steph Vargas's Bday - March 5
		else if (date == 5 && month == 3){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		//St. Pattys Day - March 17
		else if (month == 3 && (date >= 13 && date <= 19)) {
			document.getElementById("logo").style.background="url('img/holidays-02.png')";}
		//Easter 2016 - March 27
		//else if (month == 3 && (date >= 22 && date <= 28)) {
		//	document.getElementById("logo").style.background="url('img/holidays-11.png')";}
		//Manuel Delgado Rodriguez's Bday - March 29
		else if (date == 29 && month == 3){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
//April
		//Easter 2017 - April 16
		//else if (month == 4 && (date >= 12 && date <= 18)) {
		//	document.getElementById("logo").style.background="url('img/holidays-11.png')";}
		//Sam's Bday - April 22
		else if (date == 22 && month == 4){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		//Luis Mesen Monge's Bday - April 26
		else if (date == 26 && month == 4){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
//May
		//Labor Day CR - May 1
		else if ((date >= 27 && month == 4) || (date == 1 && month == 5)) {
			document.getElementById("logo").style.background="url('img/holidays-07.png')";}
		//Cinco de Mayo - May 5
		else if  (date == 5 && month == 5) {
			document.getElementById("logo").style.background="url('img/holidays-19.png')";}
		//Mother's Day US 2016 - May 8
		else if (month == 5 && (date >= 6 && date <= 10)) {
			document.getElementById("logo").style.background="url('img/holidays-08.png')";}
		//Mother's Day US 2017 - May 14
		//else if (month == 5 && (date >= 10 && date <= 16)) {
		//	document.getElementById("logo").style.background="url('img/holidays-08.png')";}
		//Memorial Day US 2016/2017 - May 30/May 29
		else if (month == 5 && (date >= 25 && date <= 31)) {
			document.getElementById("logo").style.background="url('img/holidays-14.png')";}
//June
		//Eric's Bday - June 12
		else if (date == 12 && month == 6){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		//Father's Day 2016/2017 - June 19/June 18
		else if (month == 6 && (date >= 13 && date <= 19)) {
			document.getElementById("logo").style.background="url('img/holidays-09.png')";}
		//Sonia Sanchez Rodriguez's Bday - June 26
		else if (date == 26 && month == 6){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
//July
		//Independence Day US - July 4
		else if (month == 7 && (date >= 1 && date <= 2)) {
			document.getElementById("logo").style.background="url('img/holidays-05.png')";}
		else if (month == 7 && (date >= 4 && date <= 7)) {
			document.getElementById("logo").style.background="url('img/holidays-05.png')";}
		//Steph Araya Medina's Bday - July 3
		else if (date == 3 && month == 7){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		//Gappa's Bday - July 13
		else if (date == 13 && month == 7){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		//Kala's Bday - July 22
		else if (date == 22 && month == 7){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		// Annexation of Guanacaste CR - July 25
		else if (month == 7 && (date >= 23 && date <= 27)) {
			document.getElementById("logo").style.background="url('img/holidays-15.png')";}
//August		
		//Mother's Day CR - August 15
		else if (month = 8 && (date >= 11 && date <= 17)) {
			document.getElementById("logo").style.background="url('img/holidays-08.png')";}
//September		
		//Labor Day US 2016/2017 - September 5/September 4
		else if (month == 9 && (date <= 1 && date <= 7)) {
			document.getElementById("logo").style.background="url('img/holidays-07.png')";}
		// Children's Day CR - September 9
		else if (month == 9 && (date >= 8 && date <= 10)) {
			document.getElementById("logo").style.background="url('img/holidays-16.png')";}
		//Indepedence Day CR - September 15
		else if (month == 9 && (date >= 11 && date <= 16)) {
			document.getElementById("logo").style.background="url('img/holidays-04.png')";}
		//Karen Murillo Chaves's Bday - September 17
		else if (date == 17 && month == 9){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
//October		
		// Day of the Cultures CR - October 12
		else if (month == 10 && (date >= 8 && date <= 14)) {
			document.getElementById("logo").style.background="url('img/holidays-10.png')";}
		// Halloween - October 31
		else if (month == 10 && (date >= 24 && date <= 26)) {
			document.getElementById("logo").style.background="url('img/holidays-01.png')";}
		else if (month == 10 && (date >= 28 && date <= 31)) {
			document.getElementById("logo").style.background="url('img/holidays-01.png')";}
		//Laura Ulate Alfaro's Bday - October 27
		else if (date == 27 && month == 10){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
//November		
		//Ryan's Bday - November 4
		else if (date == 4 && month == 11){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		//Jeannina Carranza Castro's Bday - November 7
		else if (date == 7 && month == 11){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		//Ariela Carrillo Diaz's Bday - November 9
		else if (date == 9 && month == 11){
			document.getElementById("logo").style.background="url('img/holidays-17.png')";}
		//Thanksgiving 2016 - November 24
		else if (month == 11 && (date >= 17 && date <= 26)) {
			document.getElementById("logo").style.background="url('img/holidays-18.png')";}
//December		
		// Christmas - December 25
		else if (month == 12 && (date >= 1 && date <= 27)) {
			document.getElementById("logo").style.background="url('img/holidays-06.png')";}
		// New Years - Dec 31/Jan 1
		else if ((date >= 28 && month == 12) || (date == 5 && month == 1)) {
			document.getElementById("logo").style.background="url('img/holidays-12.png')";}
		

		//Alex's Bday
		//else if (date == x && month == x){
		//	document.getElementById("logo").style.background="url('img/holidays-17.png')";}

		
		//Standard	
		else {
			document.getElementById("logo").style.background = "url('img/logo.png')";}



/////// Randomizer for help images
		$(function randomImg(){
			var randomNumber = Math.floor(Math.random() * 8) + 1;
			var imgName = "img_" + randomNumber + ".gif";
			document.getElementById("imageid").src= "gifs" + "/" + imgName ;
		 });


/////// Nav2 for mobile sizes
		$(function() {
			$("a[href=#menuExpand]").click(function(e) {
				$("#nav2").toggleClass("menuOpen");
				e.preventDefault();
			});
		});
