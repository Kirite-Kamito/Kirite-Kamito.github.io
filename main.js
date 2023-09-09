let navList = {
	// name: style
	"Droplet": "dropletteBlock",
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
					droplet()
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
	return backButton
}

// Content Box for text, titles, and pictures
function contentBox(array) {
	const ele = document.createElement("div")
	ele.classList.add('textBox')

	for (const content of array) {
		switch (content[0]) {
			case 'h1':
				const header1 = document.createElement('h1')
				header1.innerText = content[1]
				ele.appendChild(header1)
				break
			case 'h2':
				const header2 = document.createElement('h2')
				header2.innerText = content[1]
				ele.appendChild(header2)
				break
			case 'i':
				const pic = document.createElement('img')
				pic.classList.add('headerPic')
				pic.setAttribute('src', 'images/' + content[1])
				ele.appendChild(pic)
				break
			default:
				const para = document.createElement('p')
				para.innerText = content[1]
				ele.appendChild(para)
		}
	}

	return ele
}

function droplet() {
	const currElement = document.getElementById("menu")
	
	// Starting Elements
	currElement.appendChild(setupSubmenu())

	// Skills Used
	currElement.appendChild(contentBox([['p',"Skills used in Project: Unreal Engine, HLSL, Mathematics, Physics"]]))

	// Project Introduction
	let projectIntro = [
		['h1', 'Droplet Project'],
		['i', 'DropletteMain.JPG'],
		['p',
		"Droplet is a collaboration between 3 individuals to make an adventure/puzzle game to completion on Unreal Engine 5.3.0. " + 
		"The project was started in May 2023 with hopes of an Early Access Release in December 2023."
		]
	]

	currElement.appendChild(contentBox(projectIntro))

	// Shader
	let shaderContents = [
		['h2', 'Contribution: Post Processing Shaders'],
		['p', 
		"To create a unique feel in the game from traditional indie Unreal Engine Projects, a post processing shader was created. " +
		"This shader is a combination of a Laplacian Filter, Cel Shading, and a Kuwahara Filter to create the illusion of the scene being painted."
		],
		['i', 'Laplacian.JPG'],
		['p',
		"The Laplacian Filter uses the depth and the normal of a pixel (along with it's neighboring pixels) to determine whether or not the pixels are connected to each other" +
		"The weights themselves are heavier and sharper the straighter the angle and the closer to the viewer that they appear. " +
		"HLSL was used to allow for looping to expand the range around the pixel being checked with relative ease."
		],
		['i', 'Cel.JPG'],
		['p',
		"The Cel Shader was used to simplify the range of colors to give it a more 'toony' style. " +
		"This shader was implimented easily by desaturating Post Processing Input 0 and bucketing the resulting values to a fixed one." 
		],
		['i', 'Kuwa.JPG'],
		['p',
		"The Kuwahara Shader aims to emulate a painted type feel to the game. " +
		"When applied to the cel shade as an input, it allows for a nice blend between buckets without resulting in too much loss of detail. " +
		"A similar approach to both the Laplacian filter is implimented for this filter in HLSL, weighing the value of surrounding pixels to calculate the color value of the center."
		]
	]

	currElement.append(contentBox(shaderContents))
}

function voxelEngine() {
	const currElement = document.getElementById("menu")

	currElement.appendChild(setupSubmenu())
}