// // // The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

// // // Create an input field in your DOM. Give it an id of message.
// // // Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// // // Give each article a different border color.
// // // Write an event listener that listens for the keyup event on the input field.
// // // The event handler function should update the textContent property of both sections.

// // //target messages for function
// // const keyUpInput = document.querySelector("#message")

// // //function to add keyup event to messages
// // // keyUpInput.addEventListener("keyup", function(eventObject){
// // //     const mainArticleValue = eventObject.target.value
// // //     const subArticleValue = eventObject.target.value
// // //     document.querySelector("#main-article").textContent = mainArticleValue
// // //     document.querySelector("#main-article").textContent = subArticleValue
// // // })

// // keyUpInput.addEventListener("keyup", function(){
// //     const mainArticleValue = document.querySelector("#message").value
// //     document.querySelector("#main-article").textContent = mainArticleValue
// //     const subArticleValue = document.querySelector("#message").value
// //     document.querySelector("#sub-article").textContent = subArticleValue
// // })

// document
// 	.querySelector("#activate-flight")
// 	.addEventListener("click", function() {
// 		document.querySelector("#flight").classList.remove("disabled");
// 		document.querySelector("#flight").classList.add("enabled");
// 	});

// document
// 	.querySelector("#activate-mindreading")
// 	.addEventListener("click", function() {
// 		document.querySelector("#mindreading").classList.remove("disabled");
// 		document.querySelector("#mindreading").classList.add("enabled");
// 	});
// document.querySelector("#activate-xray").addEventListener("click", function() {
// 	document.querySelector("#xray").classList.remove("disabled");
// 	document.querySelector("#xray").classList.add("enabled");
// });

// let activateAll = document.querySelectorAll(".disabled");

// document.querySelector("#activate-all").addEventListener("click", function() {
// 	console.log("Activating.");
// 	for (let power of activateAll) {
// 		power.classList.remove("disabled");
// 		power.classList.add("enabled");
// 	}
// });

// let deactivateAll = document.querySelectorAll(".enabled");

// document.querySelector("#deactivate-all").addEventListener("click", function() {
// 	console.log("Deactivating.");
// 	for (let power of activateAll) {
// 		power.classList.remove("enabled");
// 		power.classList.add("disabled");
// 	}
// });

// const activateSinglePower = function(buttonSelector, powerSelector) {
// 	document.querySelector(buttonSelector).addEventListener("click", function() {
// 		document.querySelector(powerSelector).classList.remove("disabled");
// 		document.querySelector(powerSelector).classList.add("enabled");
// 	});
// };

// activateSinglePower("#activate-flight", "#flight");
// activateSinglePower("#activate-mindreading", "#mindreading");
// activateSinglePower("#activate-xray", "#xray");

// event.target.id.split("-")

const allButtons = document.querySelectorAll("button")

for(let i=0; i < allButtons.length; i++){
    const currentButton = allButtons[i]

    currentButton.addEventListener("click", function(){
        const sectionToTarget = event.target.id.split("-")[1]
        document.querySelector(`#${sectionToTarget}`)
        .classList.add("enabled")
    })
}

