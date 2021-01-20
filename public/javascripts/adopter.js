$("#count").text($(".department").length);

// $("#btn-search").click(function (event) {
//   event.preventDefault();
//   var searchDepartment = $("#search-department").val();

//   $(".department").each(function () {
//     console.log($(this).text(), searchDepartment);
//     if ($(this).text() !== searchDepartment && searchDepartment !== "") {
//       $(this).parents(".row-cat").delay(200).fadeOut();
//     } else {
//       $(this).parents(".row-cat").fadeIn();
//     }
//   });
//   $("#search-department").val("");
// });

// $("#btn-search2").click(function (event) {
//   event.preventDefault();
//   var searchRace = $("#search-race").val();
//   $(".race").each(function () {
//     console.log($(this).text(), searchRace);

//     if ($(this).text() !== searchRace && searchRace !== "") {
//       $(this).parents(".row-cat").delay(200).fadeOut();
//     } else {
//       $(this).parents(".row-cat").fadeIn();
//     }
//   });
//   $("#search-race").val("");
// });

// document.getElementById("btn-search3").addEventListener("click", function (event) {
//   event.preventDefault();
//   var searchGender = document.getElementById("search-gender").value;
//   var genderList = document.getElementsByClassName("gender");

//   for (let item of genderList) {
//     parent = item.parentNode.parentNode.parentNode.parentNode.parentNode;
//     if (searchGender === "") {
//       parent.style.display = "flex";
//       continue;
//     }
//     if (parent.style.display === "none") {
//       continue;
//     }
//     if (item.textContent !== searchGender) {
//       parent.style.display = "none";
//     }
//   }
//   document.getElementById("search-gender").value = "";
// });

// document.getElementById("btn-search4").addEventListener("click", function (event) {
//   event.preventDefault();
//   var searchAge = document.getElementById("search-age").value;
//   var ageList = document.getElementsByClassName("age");

//   for (let item of ageList) {
//     parent = item.parentNode.parentNode.parentNode.parentNode.parentNode;
//     if (searchAge === "") {
//       parent.style.display = "flex";
//       continue;
//     }
//     if (parent.style.display === "none") {
//       continue;
//     }
//     if (item.textContent !== searchAge) {
//       parent.style.display = "none";
//     }
//   }
//   document.getElementById("search-age").value = "";
// });
