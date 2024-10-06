from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from utils import process_coordinates

app = FastAPI()

app.mount("/public", StaticFiles(directory="public"), name="public")

@app.get("/api/map?lat={latitude}?lon={longitude}")
async def get_coordinates(latitude: int, longitude: int):
    result = process_coordinates(latitude, longitude)
    return {"result": result}

@app.get("/")
async def serve_index():
    return FileResponse("public/index.html")