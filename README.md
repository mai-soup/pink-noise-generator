# Pink Noise Generator

A simple React app that generates pink noise right in your browser. No looping audio file or anything like that.

## Running

A Dockerfile is provided, so you can run it locally with:


```bash
docker build -t pinknoise . && docker run -p 5173:5173 -it pinknoise
```