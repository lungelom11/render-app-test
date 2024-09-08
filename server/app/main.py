from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import fpl
from fastapi.staticfiles import StaticFiles
import os
app = FastAPI()

# CORS middleware configuration
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(fpl.router)

# Get path to client build directory
client_build_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "client", "dist"))

# Ensure the directory exists
if not os.path.exists(client_build_path):
    raise RuntimeError(f"Directory '{client_build_path}' does not exist")

# Serve static files from the 'dist' directory, mount after the routers
app.mount("/", StaticFiles(directory=client_build_path, html=True), name="static")