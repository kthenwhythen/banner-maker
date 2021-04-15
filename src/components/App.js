import { useState, useEffect } from "react"

export const App = () => {
	const [imgUrl, setImgUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/7/7a/Wikipe-tan_full_length.svg')
	const [link, setLink] = useState('/')
	const [title, setTitle] = useState('Sample title')
	const [colorBG, setColorBG] = useState('#0055ff')
	const [colorFont, setColorFont] = useState('#fff')
	const [json, setJson] = useState('json')
	const [jsx, setJsx] = useState('jsx')

	useEffect(() => {
		const canvas = document.getElementById('canvas')
		const context = canvas.getContext('2d')
		// const ctx = document.getElementById('canvas').getContext('2d')
		context.clearRect(0, 0, canvas.width, canvas.height);
		const img = new Image()
		img.onload = () => {
			const w = img.width
			const h = img.height
			context.fillStyle = colorBG
			context.fillRect(0, 0, canvas.width, canvas.height)
			context.drawImage(img, 0, 0, 300, h / (w / 300))
			context.fillStyle = colorFont
			context.font = "30px Arial"
			context.fillText(title, 10, 50)
		}
		img.src = imgUrl
		img.crossOrigin = 'Anonymous'

		const genJson = () => {

		}

		const genJsx = () => {
			
		}

		genJson()
		genJsx()
	}, [imgUrl, title, colorBG, colorFont])

	const handleSaveImage = () => {
		let dataURL = document.getElementById("canvas").toDataURL("image/png")
		let aDownloadLink = document.createElement('a')
		aDownloadLink.download = 'banner.png'
		aDownloadLink.href = dataURL
		aDownloadLink.click()
	}

	const handleJSON = () => {
		let textarea = document.getElementById("json")
		textarea.value = 'json'
		textarea.select()
		document.execCommand("copy")
	}

	const handleJSX = () => {

	}
	
	return (
		<div className="container px-3 mx-auto flex justify-center">
			<div className="py-12">
				<div className="mb-6">
					<a href={link}>
						<canvas id="canvas" className="h-80 w-full rounded-md" />
					</a>
				</div>
				<input id="title" className="h-8 w-full px-3 rounded-md mb-3" onChange={e => setTitle(e.target.value)} placeholder="Title" />
				<input className="h-8 w-full px-3 rounded-md mb-3" onChange={e => setImgUrl(e.target.value)} placeholder="Image Url" />
				<input className="h-8 w-full px-3 rounded-md mb-3" onChange={e => setLink(e.target.value)} placeholder="Link Url" />
				<input className="h-8 w-full px-3 rounded-md mb-3" onChange={e => setColorBG(e.target.value)} placeholder="Color Background ('red' or #420420)" />
				<input className="h-8 w-full px-3 rounded-md mb-3" onChange={e => setColorFont(e.target.value)} placeholder="Color Font ('blue' or #fff)" />
				<div className="flex justify-center mb-6">
					<textarea id="json" className="p-3 text-gray-500 resize-none bg-gray-300 w-full mr-6 rounded-md" readOnly>JSON</textarea>
					<textarea id="jsx" className="p-3 text-gray-500 resize-none bg-gray-300 w-full rounded-md" readOnly>JSX</textarea>
				</div>
				<div className="flex justify-center">
					<button className="w-36 h-8 rounded bg-gray-700 text-white px-6" onClick={handleSaveImage}>Save PNG</button>
					<button className="w-36 h-8 rounded bg-gray-700 text-white px-6 mx-12" onClick={handleJSX}>Copy JSX</button>
					<button className="w-36 h-8 rounded bg-gray-700 text-white px-6" onClick={handleJSON}>Copy JSON</button>
				</div>

			</div>
		</div>
	)
}
