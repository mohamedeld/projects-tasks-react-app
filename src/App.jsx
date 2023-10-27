import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import "./App.css";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleSelectProject = (id)=>{
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const handleCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  const handleDelete = ()=>{
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project=> project.id !== prevState.selectedProjectId)
      };
    });
  }
  const handleAddProject = (projectData)=>{
    const projectId = uuidv4();
    const newProject = {
      ...projectData,
      id:projectId
    }
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }
  const selectProject = projectState.projects.find(project=> project.id === projectState.selectedProjectId)
  let content = <SelectedProject project={selectProject} onDeleteProject={handleDelete}/>;
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
