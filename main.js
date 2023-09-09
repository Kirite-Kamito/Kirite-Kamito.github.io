let navList = {
	// function: [name, style]
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

// Skill list
function skills(s) {
	const skillBox = document.createElement("p")
	skillBox.innerText = "Skills/Proficiencies Used: " + s
	skillBox.classList.add('textBox')
	return skillBox
}

// Title and Picture Nodes for project
function projectHeader(title, picture) {
	const ele = document.createElement("div")
	ele.classList.add('textBox')

	const header = document.createElement('h1')
	header.innerText = title

	const pic = document.createElement('img')
	pic.classList.add('headerPic')
	pic.setAttribute('src', picture)

	ele.appendChild(header)
	ele.appendChild(pic)

	return ele
}

// Subheader and picture nodes
function subHeader(title, picture) {
	const ele = document.createElement("div")
	ele.classList.add('textBox')

	const header = document.createElement('h2')
	header.innerText = title

	const pic = document.createElement('img')
	pic.classList.add('headerPic')
	pic.setAttribute('src', picture)

	ele.appendChild(header)
	ele.appendChild(pic)

	return ele
}

function droplette() {
	const currElement = document.getElementById("menu")
	
	// Starting Elements
	currElement.appendChild(setupSubmenu())
	currElement.appendChild(skills("Unreal Engine, HLSL, Mathematics, Physics"))

	// Project Header
	const projectHeading = projectHeader('Droplet Project', 'images/DropletteMain.JPG')

	const textElement = document.createElement('p')
	textElement.innerText = 
		"Droplet is a collaboration between 3 individuals to make an adventure/puzzle game to completion on Unreal Engine 5.3.0. " + 
		"The project was started in May 2023 with hopes of an Early Access Release in December 2023."
	projectHeading.appendChild(textElement)
	currElement.appendChild(projectHeading)

	// Shader Con
	const shader = document.createElement('div')
	shader.classList.add('textBox')

	const shaderHeader = document.createElement('h2')
	shaderHeader.innerText = "Contribution: Post Processing Shaders"
	shader.appendChild(shaderHeader)

	const shaderPara = document.createElement('p')
	shaderPara.innerText =
		"To create a unique feel in the game from traditional indie Unreal Engine Projects, a post processing shader was created. " +
		"This shader is a combination of a Laplacian Filter, Cel Shading, and a Kuwahara Filter to create the illusion of the scene being painted."
	shader.appendChild(shaderPara)

	const shaderPic = document.createElement('img')
	shaderPic.classList.add('headerPic')
	shaderPic.setAttribute('src', 'images/Laplacian.jpg')
	shader.appendChild(shaderPic)

	const shaderPara2 = document.createElement('p')
	shaderPara2.innerText = 
		"The Laplacian Filter uses the depth and the normal of a pixel (along with it's neighboring pixels) to determine whether or not the pixels are connected to each other" +
		"The weights themselves are heavier and sharper the straighter the angle and the closer to the viewer that they appear. " +
		"HLSL was used to allow for looping to expand the range around the pixel being checked with relative ease."
	shader.appendChild(shaderPara2)

	const shaderPic2 = document.createElement('img')
	shaderPic2.classList.add('headerPic')
	shaderPic2.setAttribute('src', 'images/Cel.jpg')
	shader.appendChild(shaderPic2)

	const shaderPara3 = document.createElement('p')
	shaderPara3.innerText = 
		"The Cel Shader was used to simplify the range of colors to give it a more 'toony' style. " +
		"This shader was implimented easily by desaturating Post Processing Input 0 and bucketing the resulting values to a fixed one." 
	shader.appendChild(shaderPara3)

	const shader3Pic = document.createElement('img')
	shader3Pic.classList.add('headerPic')
	shader3Pic.setAttribute('src', 'images/Kuwa.jpg')
	shader.appendChild(shader3Pic)

	const shaderPara4 = document.createElement('p')
	shaderPara4.innerText = 
		"The Kuwahara Shader aims to emulate a painted type feel to the game. " +
		"When applied to the cel shade as an input, it allows for a nice blend between buckets without resulting in too much loss of detail. " +
		"A similar approach to both the Laplacian filter is implimented for this filter in HLSL, weighing the value of surrounding pixels to calculate the color value of the center."
	shader.appendChild(shaderPara4)

	currElement.append(shader)
}

function voxelEngine() {
	const currElement = document.getElementById("menu")

	currElement.appendChild(setupSubmenu())
}