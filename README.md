# Md-to-Html-Converter-Server
A simple node.js express server that takes markdown and converts it into html using Markdown-it.


Usage example:
```
const ex = "# A first-level heading"

const getMarkdown = async (md) => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        markdown: md
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      const response = await fetch('http://localhost:8001/convert-markdown', options)
      const result = await response.text()
      console.log(result)
      
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  getMarkdown(ex) // logs "<h1>A first-level heading</h1>"
```
