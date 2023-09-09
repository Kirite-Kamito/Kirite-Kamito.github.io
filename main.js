// ** Global Variables **
let navList = {
	// button name: css style
	"Voxel Engine": "voxelBlock",
	"Droplet": "dropletteBlock"
}

// ** Functions **
// Clears any element with the 'menu' tag of children
function clearmenu() {
	let menu = document.getElementById("menu")
	while (menu.hasChildNodes()) menu.removeChild(menu.firstChild)
}

// Restores the html page to the main menu screen
function mainmenu() {
	clearmenu()
	for (let i = Object.keys(navList).length-1; i >= 0 ; i--) {
		// Make Button
		const currElement = document.createElement("button")
		currElement.classList.add(navList[Object.keys(navList)[i]])

		// Button Functions
		currElement.addEventListener('click', () => {
			switch (i) {
				case 1:
					droplet()
					break
				default:
					voxelEngine()
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

// Set up Back button w/ Image and clear menu for an empty start
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
				para.innerHTML = content[1]
				ele.appendChild(para)
		}
	}

	return ele
}

// Droplet Menu
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
		"The project was started in May 2023 with hopes of an Early Access Release in December 2023. " +
		"The following contributions are what are considered my contributions to the project so far, though the current state of the game is further along than what's provided."
		]
	]

	currElement.appendChild(contentBox(projectIntro))

	// Shader
	let shaderContents = [
		['h2', 'Post Processing Shaders'],
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

	currElement.appendChild(contentBox(shaderContents))

	// Prelim Chara Design
	let charaContents = [
		['h2', 'Initial Character Design'],
		['i', 'chara.png'],
		['p', 
		'Created an original design heavily based on water while maintaining a distinct design and basic color palette. ' +
		'While not the final iteration of the character design, it served as the foundation for the concept artist to follow.'
	]
	]

	currElement.appendChild(contentBox(charaContents))

	// Materials
	let charaMaterials = [
		['h2', 'Character Materials'],
		['i', 'water.jpg'],
		['i', 'mud.jpg'],
		['i', 'cloud.jpg'],
		['i', 'ice.jpg'],
		['p', 
		'Materials for the player character were created for each individual Power-Up: Water, Mud, Cloud, and Ice. ' +
		'Water and Cloud have the most complex states, since their material moves in all directions to give the character more life. ' +
		"Mud and Ice are significantly simpler, with mud panning its UV to give the illusion of flowing and Ice glowing in the center."
		]
	]
	
	let miscMaterials = [
		['h2', 'Water Materials'],
		['i', 'stream.jpg'],
		['i', 'bubble.jpg'],
		['p', 'Since the shader described earlier was incompatible with translusent materials, it was initially a challenge to impliment transparent water. ' +
		'The Single Later Water Material was discovered and used to create an opague material that met the requirements we wanted for water.'
		]
	]

	currElement.appendChild(contentBox(charaMaterials))
	currElement.appendChild(contentBox(miscMaterials))

	// Mud Ball
	let mudBall = [
		['h2', 'Mud Ball Physics'],
		['i', 'mudground.jpg'],
		['i', 'mudwall.jpg'],
		['p', 'The Mud Power-up has the ability to go into ball form, with the primary use being the ability to move along mud ramps at any angle. ' +
		'As the mud ball moves along the ramp, the camera orientation, momentum, and controls are updated to allow for smooth movement along the ramp by rotating their basis.'
		],
		['p', 'The original implimentation was to simulate physics by using a force every frame in the direction of the Mud Ramp; This implimentation was a success at high frame rates, but broke at lower ones. ' +
		'Floating pawn movement was used instead, which required a lot less mathematical/physics proficiency but was a lot more consistent at all framerates.'
		]
	]

	currElement.appendChild(contentBox(mudBall))

	// Sound
	let audio = [
		['h2', 'Audio'],
		['i', 'footstep.jpg'],
		['i', 'walk.jpg'],
		['p', 'Audio clips from <a href="https://freesound.org">freesound.org</a> were modified and bound to animations to add to the immersion of the experience.']
	]

	currElement.appendChild(contentBox(audio))
}

// Voxel Menu
function voxelEngine() {
	const currElement = document.getElementById("menu")

	// Starting Elements
	currElement.appendChild(setupSubmenu())

	// Skills Used
	currElement.appendChild(contentBox([['p',"Skills used in Project: Vulkan API, GLSL, Mathematics, C++"]]))

	// Project Introduction
	let projectIntro = [
		['h1', 'Voxel Engine Project'],
		['i', 'Voxel Engine.png'],
		['p',
		"The Voxel Engine Project was the capstone project done for CSC 562: Game Engine Design with its design and creation in the span of 1.5 months. " +
		"Using inspirations such as <a href = 'https://www.youtube.com/@johnlin9665'>John Lin</a> and Minecraft, the goal was to create an Engine which could effectively render voxels and allowing for a sandbox environment. " +
		"A cloned git for the project can be found <a href ='https://github.com/Kirite-Kamito/Voxel-Clone'>here.<a>"
		]
	]

	currElement.appendChild(contentBox(projectIntro))

	// Environmental Set Up
	let envirosetup = [
		['h2', 'Environmental Set-up'],
		['i', 'voxel.png'],
		['p', 
		"The engine was designed to meet the bare minimum requirements of a 'Voxel Painter'; Voxels had to be distinct, customized, and run smoothly. " +
		"A dummy shader was used to emphasis the sides of voxels, allowing for depth to easily be conceptualized in the 3D environment. " +
		"Keybinds were used to allow for customization/navigation of the environment, with any value which required user input (i.e. color) being deferred to the console. " +
		"Since depth was challenging to emphasize and exceeded the requirements of the project, the positioning problem users had when placing and deleting voxels was mitigated by deleting/adding a voxel to the closest voxel to the camera position."
		]
	]

	currElement.appendChild(contentBox(envirosetup))
	// Culling
	let culling = [
		['h2', 'Culling'],
		['i', 'culled.png'],
		['p', 
		"Another notable feature of the engine is its ability to cull objects out of frame. " +
		"The image above features the same number of voxels as the image prior, yet the engine only loads the one in view."
		]
	]

	currElement.appendChild(contentBox(culling))
}