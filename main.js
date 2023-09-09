let navList = {
	// function: [name, style]
	"Droplette": "dropletteBlock",
	"Voxel Engine": "voxelBlock"
}

// Functions
function clearmenu() {
	let menu = document.getElementById("menu")
	while (menu.hasChildNodes()) menu.removeChild(menu.firstChild)
}

function mainmenu() {
	clearmenu()
	for (let i = 0; i < Object.keys(navList).length; i++) {
		// Make Button
		const currElement = document.createElement("button")
		currElement.classList.add(navList[Object.keys(navList)[i]])

		// Button Functions
		currElement.addEventListener('click', () => {
			switch (i) {
				case 1:
					voxelEngine()
					break
				default:
					droplette()
			}
		})

		// Make Textbox
		const textElement = document.createElement("p")
		textElement.classList.add("buttonBox")
		textElement.innerText = Object.keys(navList)[i]

		// Append Children
		currElement.appendChild(textElement)
		document.getElementById("menu").appendChild(currElement)
	}
}

function setupSubmenu() {
	clearmenu()
	const currElement = document.getElementById("menu")
	
	// Back Button
	const backButton = document.createElement("button")
	backButton.addEventListener('click', () => {mainmenu()})
	backButton.classList.add("backButtonBox")

	// Image
	const img = document.createElement("img")
	img.setAttribute("src", "images/right-arrow.png")
	img.classList.add("backButton")

	// Appends
	backButton.appendChild(img)
	currElement.appendChild(backButton)
}

function droplette() {
	setupSubmenu()
	const currElement = document.getElementById("menu")
}

function voxelEngine() {
	setupSubmenu()
	const currElement = document.getElementById("menu")
}