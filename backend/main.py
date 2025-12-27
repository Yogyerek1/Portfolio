from fastapi import FastAPI
from models.models import *

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World"}

@app.post("/newProject")
def newProject():
    pass
