// JavaScript Document

/////// Use this section to adjust the logo with the holidays
		var currentTime = new Date();
		var date = currentTime.getDate();
		var month = currentTime.getMonth() + 1;
		
		//Valentines
		if (month == 2 && (date >= 10 && date <= 16)) {
			document.getElementById("logo").style.background="url('img/holidays-03.png')";}
		//St. Pattys Day
		else if (month == 3 && (date >= 13 && date <= 19)) {
			document.getElementById("logo").style.background="url('img/holidays-02.png')";}
		//Easter 2016
		//else if (month == 3 && (date >= 22 && date <= 29)) {
		//	document.getElementById("logo").style.background="url('img/easter.png')";}
		//Labor Day CR
		else if ((date >= 27 && month == 4) || (date == 1 && month == 5)) {
			document.getElementById("logo").style.background="url('img/holidays-07.png')";}
		//Mother's Day US 2016
		else if (month == 5 && (date >= 2 && date <= 10)) {
			document.getElementById("logo").style.background="url('img/holidays-08.png')";}
		//Memorial Day US 2016
		//else if (month == 5 && (date >= 25 && date <= 31)) {
		//	document.getElementById("logo").style.background="url('img/memorialday.png')";}
		//Father's Day 2016
		else if (month == 6 && (date >= 13 && date <= 19)) {
			document.getElementById("logo").style.background="url('img/holidays-09.png')";}
		//Independence Day US
		else if (month == 7 && (date >= 1 && date <= 7)) {
			document.getElementById("logo").style.background="url('img/holidays-05.png')";}
		// Annexation of Guanacaste CR
		//else if (month == 7 && (date >= 20 && date <= 27)) {
		//	document.getElementById("logo").style.background="url('img/annex.png')";}
		//Mother's Day CR
		else if (month = 8 && (date >= 11 && date <= 17)) {
			document.getElementById("logo").style.background="url('img/holidays-08.png')";}
		//Labor Day US 2016
		else if (month == 9 && (date <= 1 && date <= 7)) {
			document.getElementById("logo").style.background="url('img/holidays-07.png')";}
		// Children's Day CR
		//else if (month == 9 && (date >= 8 && date <= 10)) {
		//	document.getElementById("logo").style.background="url('img/childrens.png')";}
		//Indepedence Day CR
		else if (month == 9 && (date >= 11 && date <= 17)) {
			document.getElementById("logo").style.background="url('img/holidays-04.png')";}
		// Day of the Cultures CR
		//else if (month == 10 && (date >= 8 && date <= 14)) {
		//	document.getElementById("logo").style.background="url('img/DOC.png')";}
		// Halloween
		else if (month == 10 && (date >= 24 && date <= 31)) {
			document.getElementById("logo").style.background="url('img/holidays-01.png')";}
		//Thanksgiving 2016
		//else if (month == 11 && (date >= 17 && date <= 26)) {
		//	document.getElementById("logo").style.background="url('img/thanksgiving.png')";}
		// Christmas
		else if (month == 12 && (date >= 1 && date <= 27)) {
			document.getElementById("logo").style.background="url('img/holidays-06.png')";}
		// New Years
		//else if ((date >= 28 && month == 12) || (date == 5 && month == 1)) {
		//	document.getElementById("logo").style.background="url('img/newyears.png')";}
		
		
		//Sam's Bday
		//else if (date == 22 && month == 4){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Gappa's Bday
		//else if (date == 13 && month == 7){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Eric's Bday
		//else if (date == 12 && month == 6){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Alex's Bday
		//else if (date == x && month == x){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Ryan's Bday
		//else if (date == 4 && month == 11){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Kala's Bday
		//else if (date == 22 && month == 7){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Steph Vargas's Bday
		//else if (date == 5 && month == 3){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Steph Araya Medina's Bday
		//else if (date == 3 && month == 7){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Jeannina Carranza Castro's Bday
		//else if (date == 7 && month == 11){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Ariela Carrillo Diaz's Bday
		//else if (date == 9 && month == 11){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Manuel Delgado Rodriguez's Bday
		//else if (date == 29 && month == 3){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Luis Mesen Monge's Bday
		//else if (date == 26 && month == 4){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Karen Murillo Chaves's Bday
		//else if (date == 17 && month == 9){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Sonia Sanchez Rodriguez's Bday
		//else if (date == 26 && month == 6){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		//Laura Ulate Alfaro's Bday
		//else if (date == 27 && month == 10){
		//	document.getElementById("logo").style.background="url('img/birthday.png')";}
		
		
		//Standard	
		else {
			document.getElementById("logo").style.background = "url('img/logo.png')";}



/////// Randomizer for help images
		/*$(function randomImg(){
			var randomNumber = Math.floor(Math.random() * 8) + 1;
			var imgName = "img_" + randomNumber + ".gif";
			document.getElementById("imageid").src= "gifs" + "/" + imgName ;
		 });*/


/////// Nav2 for mobile sizes
		$(function() {
			$("a[href=#menuExpand]").click(function(e) {
				$("#nav2").toggleClass("menuOpen");
				e.preventDefault();
			});
		});
