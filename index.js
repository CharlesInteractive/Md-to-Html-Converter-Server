
const PORT = 8001
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
var markdown = require('markdown-it')();

app.post('/convert-markdown', async (req, res) => {
    
    console.log("Converting Markdown to HTML...");
    // markdown source
    const sourceMarkdown = req.body.markdown;

    // converted to HTML
    const convertedHtml = markdown.render(sourceMarkdown);
    
	// set headers and send the converted html back
    console.log("Sending converted html to frontend...");
    res.setHeader('Content-Type', 'text/html', "Content-Security-Policy", "default-src 'self'");
    res.send(convertedHtml)
})

app.listen(PORT, () => console.log('markdown to html server running on PORT ' + PORT))