from pydantic import BaseModel

class Project(BaseModel):
    name: str
    description: str
    technologies: list[str]
    visit: str | None = None
    source: str | None = None
    visible: bool = False

    