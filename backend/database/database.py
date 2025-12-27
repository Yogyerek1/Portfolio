from sqlmodel import Field, SQLModel, create_engine, Session
import json

engine = create_engine("sqlite:///./portfolio.db", echo=True)

class Projects(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    description: str
    technologies: str
    visit: str | None = None
    source: str | None = None
    visible: bool = False

SQLModel.metadata.create_all(engine)

def addProject(project_data):
    with Session(engine) as session:
        tech_json = json.dumps(project_data.technologies)
        
        project = Projects(
            name=project_data.name,
            description=project_data.description,
            technologies=tech_json,
            visit=project_data.visit,
            source=project_data.source,
            visible=project_data.visible
        )
        session.add(project)
        session.commit()
        session.refresh(project)
        return project






