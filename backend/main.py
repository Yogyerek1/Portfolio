from fastapi import FastAPI
from models.models import *
from database.database import addProject

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World!"}

@app.post("/newProject")
def newProject(p: Project):
    addProject(p)
